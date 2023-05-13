import JSZip from 'jszip'
import fs from 'fs/promises'
import sanitize from 'sanitize-html'
import pMap from 'p-map'

import {
  cover_image,
  feed,
  meta_inf_container,
  style_css,
} from './constants.js'
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
      content: render_html(sanitize(item.description!), item.title),
    })) satisfies Item[]

  epub.file('style.css', style_css)
  epub.file('cover.png', cover_image)
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
  pMap(items, async (item) => {
    epub.file(item.filename, item.content)
    await fs.writeFile(`output/${item.filename}`, item.content, 'utf-8')
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

await fs.writeFile(
  'output.epub',
  await zip.generateAsync({ type: 'nodebuffer' }),
)
