import JSZip from 'jszip'
import fs from 'fs/promises'
import sanitize from 'sanitize-html'

import { cover_image, feed, meta_inf_container } from './constants.js'
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
  epub.file(
    'style.css',
    await (
      await fetch('https://cdn.tailwindcss.com?plugins=typography')
    ).text(),
  )
  epub.file('cover.png', cover_image)

  const items = feed.items
    .filter((item) => !!item.description)
    .map((item, index) => ({
      id: index.toString(),
      filename: `${index}.xhtml`,
      title: item.title || 'Untitled',
      content: render_html(sanitize(item.description!), item.title),
    })) satisfies Item[]

  epub.file(
    'nav.xhtml',
    render_html(
      render_to_string(
        <nav {...epub_type('toc')} id="toc">
          <h1 className="title">Table of Contents</h1>
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
  items.forEach((item) => {
    epub.file(item.filename, item.content)
  })
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

zip.generateAsync({ type: 'nodebuffer' }).then(function (content) {
  fs.writeFile('output.epub', content)
})
