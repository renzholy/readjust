import JSZip from 'jszip'
import fs from 'fs/promises'
import pMap from 'p-map'
import pReduce from 'p-reduce'
import sharp from 'sharp'
import cld from 'cld'
import { load } from 'cheerio'

import { feed, meta_inf_container } from './constants.js'
import {
  epub_type,
  render_html,
  render_package,
  render_to_string,
} from './xhtml.js'
import { Image, Item } from './types.js'

const zip = new JSZip()

zip.file('mimetype', 'application/epub+zip')

const meta = zip.folder('META-INF')

if (meta) {
  meta.file('container.xml', meta_inf_container)
}

const epub = zip.folder('EPUB')

if (epub && feed) {
  const items = feed.items
    .filter((item) => !!item.link)
    .map((item, index) => ({
      id: index.toString(),
      filename: `${index}.xhtml`,
      title: item.title || 'Untitled',
      link: item.link!,
    })) satisfies Item[]

  epub.file(
    'nav.xhtml',
    render_html(
      render_to_string(
        <nav {...epub_type('toc')}>
          <h1>Table of Contents</h1>
          <ol>
            {items.map((item) => (
              <li key={item.id}>
                <a href={item.filename}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>,
      ),
    ),
  )
  let cover: ArrayBuffer | null = null
  const languages = new Set<string>()
  await pMap(items, async (item) => {
    const text = await (await fetch(item.link)).text()
    const baseURI = new URL(item.link).origin
    const $ = load(load(text)('body').html() || text, { baseURI }, false)
    $('script').remove()
    $('form').remove()
    $('input').remove()
    $('button').remove()
    $('*').each((i, el) => {
      $(el).removeAttr('onclick')
      $(el).removeAttr('onload')
      $(el).removeAttr('align')
      $(el).removeAttr('width')
      $(el).removeAttr('height')
      $(el).removeAttr('class')
      $(el).removeAttr('style')
    })
    const images = await pReduce(
      $('img')
        .toArray()
        .map((image) => image.attribs.src),
      async (obj, src, index) => {
        const response = await fetch(
          src.startsWith('http') ? src : `${baseURI}/${src}`,
        )
        const contentType = response.headers.get('content-type')
        if (!contentType?.includes('svg')) {
          obj[src] = {
            filename: `${index}.png`,
            buffer: await sharp(await response.arrayBuffer())
              .toFormat('png')
              .toBuffer(),
          }
        } else {
          obj[src] = {
            filename: `${index}.svg`,
            buffer: Buffer.from(await response.arrayBuffer()),
          }
        }
        if (
          !cover &&
          parseInt(response.headers.get('content-length') || '0') >= 20 * 1024
        ) {
          cover = obj[src].buffer
        }
        return obj
      },
      {} as { [key: string]: Image },
    )
    $('img').each((i, el) => {
      const image = images[el.attribs.src]
      if (image) {
        $(el).attr('src', image.filename)
        epub.file(image.filename, image.buffer)
        fs.writeFile(`output/${image.filename}`, image.buffer)
      }
    })
    const html = render_html($.html({ xml: true }))
    ;(await cld.detect(html, { isHTML: true })).languages.forEach((language) =>
      languages.add(language.code),
    )
    epub.file(item.filename, html)
    await fs.writeFile(`output/${item.filename}`, html, 'utf-8')
  })
  if (cover) {
    epub.file(
      'cover.png',
      await sharp(cover)
        .resize({ width: 1860, height: 2480 })
        .toFormat('png')
        .toBuffer(),
    )
  }
  epub.file(
    'package.opf',
    render_package({
      title: feed.title,
      creator: feed.author,
      timestamp: feed.updated,
      languages: Array.from(languages.values()),
      items,
    }),
  )
}

await fs.writeFile(
  'output.epub',
  await zip.generateAsync({ type: 'nodebuffer' }),
)
