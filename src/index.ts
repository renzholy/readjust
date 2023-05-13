import JSZip from 'jszip'
import fs from 'fs/promises'

import {
  epub_img_cover_image,
  epub_package_opf,
  meta_inf_container,
  example_changes,
  example_toc,
} from './template.js'
import { render_html } from './xhtml.js'

const zip = new JSZip()

zip.file('mimetype', 'application/epub+zip')

const meta = zip.folder('META-INF')

meta?.file('container.xml', meta_inf_container)

const epub = zip.folder('EPUB')

epub?.file('package.opf', epub_package_opf)

epub?.file(
  'style.css',
  await (await fetch('https://cdn.tailwindcss.com?plugins=typography')).text(),
)

epub?.file('cover.jpg', epub_img_cover_image)

epub?.file('epub30-nav.xhtml', render_html(example_toc))

epub?.file('epub30-changes.xhtml', render_html(example_changes))

zip.generateAsync({ type: 'nodebuffer' }).then(function (content) {
  fs.writeFile('output.epub', content)
})
