import JSZip from 'jszip'
import pMap from 'p-map'
import fs from 'fs/promises'
import { parseFeed } from 'htmlparser2'

import {
  epub_img_cover_image,
  meta_inf_container,
  example_toc,
} from './template.js'
import { render_html, render_package } from './xhtml.js'

const feed = parseFeed(
  await (await fetch('https://arthurchiao.github.io/feed.xml')).text(),
  { xmlMode: true },
)

if (!feed) {
  process.exit(-1)
}

const zip = new JSZip()

zip.file('mimetype', 'application/epub+zip')

const meta = zip.folder('META-INF')

if (meta) {
  meta.file('container.xml', meta_inf_container)
}

const epub = zip.folder('EPUB')

if (epub) {
  epub.file(
    'package.opf',
    render_package({
      title: feed.title,
      creator: feed.author,
      language: 'en',
      timestamp: feed.updated,
      items: feed.items.length,
    }),
  )
  epub.file(
    'style.css',
    await (
      await fetch('https://cdn.tailwindcss.com?plugins=typography')
    ).text(),
  )
  epub.file('cover.jpg', epub_img_cover_image)
  epub.file('nav.xhtml', example_toc)
  await pMap(feed.items, async (item, index) => {
    if (item.description) {
      epub.file(`${index}.xhtml`, render_html(item.description, item.title))
    }
  })
}

zip.generateAsync({ type: 'nodebuffer' }).then(function (content) {
  fs.writeFile('output.epub', content)
})
