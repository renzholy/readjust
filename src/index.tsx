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
import { Item } from './types.js'

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
      async (obj, src) => {
        const response = await fetch(
          src.startsWith('http') ? src : `${baseURI}/${src}`,
        )
        obj[src] = {
          type: response.headers.get('content-type') || 'image',
          buffer: await response.arrayBuffer(),
        }
        if (
          !cover &&
          parseInt(response.headers.get('content-length') || '0') >= 20 * 1024
        ) {
          cover = obj[src].buffer
        }
        return obj
      },
      {} as { [key: string]: { type: string; buffer: ArrayBuffer } },
    )
    $('img').each((i, el) => {
      if (images[el.attribs.src]) {
        $(el).attr(
          'src',
          `data:${images[el.attribs.src].type};base64,${Buffer.from(
            images[el.attribs.src].buffer,
          ).toString('base64')}`,
        )
      }
    })
    const html = render_html($.html({ xml: true }))
    epub.file(item.filename, html)
    ;(await cld.detect(html, { isHTML: true })).languages.forEach((language) =>
      languages.add(language.code),
    )
    await fs.writeFile(`output/${item.filename}`, html, 'utf-8')
  })
  if (cover) {
    epub.file('cover.png', await sharp(cover).toFormat('png').toBuffer())
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
