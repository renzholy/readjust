import JSZip from 'jszip'
import fs from 'fs/promises'
import pMap from 'p-map'
import pReduce from 'p-reduce'
import { load } from 'cheerio'
import sharp from 'sharp'

import { feed, meta_inf_container, style_css } from './constants.js'
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
    .filter((item) => !!item.description)
    .map((item, index) => ({
      id: index.toString(),
      filename: `${index}.xhtml`,
      title: item.title || 'Untitled',
      content: render_html(item.description!, item.title),
    })) satisfies Item[]

  epub.file('style.css', style_css)
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
  await pMap(items, async (item) => {
    const $ = load(item.content, { xml: true })
    $().each((i, el) => {
      $(el).removeAttr('style')
      $(el).removeAttr('width')
      $(el).removeAttr('height')
      $(el).removeAttr('class')
    })
    const images = await pReduce(
      $('img')
        .toArray()
        .map((image) => image.attribs.src),
      async (obj, src) => {
        const response = await fetch(
          src.startsWith('http') ? src : `${feed?.link || ''}${src}`,
        )
        obj[src] = await response.arrayBuffer()
        if (!cover) {
          cover = obj[src]
        }
        return obj
      },
      {} as { [key: string]: ArrayBuffer },
    )
    $('img').each((i, el) => {
      if (images[el.attribs.src]) {
        $(el).attr(
          'src',
          `data:image;base64,${Buffer.from(images[el.attribs.src]).toString(
            'base64',
          )}`,
        )
      }
    })
    const html = $.html({ xml: true })
    epub.file(item.filename, html)
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
      items,
    }),
  )
}

await fs.writeFile(
  'output.epub',
  await zip.generateAsync({ type: 'nodebuffer' }),
)
