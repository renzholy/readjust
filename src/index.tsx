import JSZip from 'jszip'
import pMap from 'p-map'
import fs from 'fs/promises'
import sanitize from 'sanitize-html'

import { cover_image, feed, meta_inf_container } from './constants.js'
import {
  epub_type,
  render_html,
  render_package,
  render_to_string,
} from './xhtml.js'

const zip = new JSZip()

zip.file('mimetype', 'application/epub+zip')

const meta = zip.folder('META-INF')

if (meta) {
  meta.file('container.xml', meta_inf_container)
}

const epub = zip.folder('EPUB')

if (epub && feed) {
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
  epub.file('cover.png', cover_image)
  epub.file(
    'nav.xhtml',
    render_html(
      render_to_string(
        <nav {...epub_type('toc')} id="toc">
          <h1 className="title">Table of Contents</h1>
          <ol>
            {feed.items.map((item, index) => (
              <li key={index}>
                <a href={`${index}.xhtml`}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>,
      ),
    ),
  )
  await pMap(feed.items, async (item, index) => {
    if (item.description) {
      epub.file(
        `${index}.xhtml`,
        render_html(sanitize(item.description), item.title),
      )
    }
  })
}

zip.generateAsync({ type: 'nodebuffer' }).then(function (content) {
  fs.writeFile('output.epub', content)
})
