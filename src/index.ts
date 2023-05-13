import JSZip from 'jszip'
import fs from 'fs/promises'

import {
  epub_css_epub_spec_css,
  epub_img_cover_image,
  epub_package_opf,
  meta_inf_container,
  example_changes,
  example_toc,
} from './template.js'

const zip = new JSZip()

zip.file('mimetype', 'application/epub+zip')

const meta = zip.folder('META-INF')

meta?.file('container.xml', meta_inf_container)

const epub = zip.folder('EPUB')

epub?.file('package.opf', epub_package_opf)

const css = epub?.folder('css')

css?.file('epub-spec.css', epub_css_epub_spec_css)

const img = epub?.folder('img')

img?.file('epub_logo_color.jpg', epub_img_cover_image)

const xhtml = epub?.folder('xhtml')

xhtml?.file(
  'epub30-nav.xhtml',
  `<?xml version="1.0" encoding="utf-8"?><html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">${example_toc}</html>`,
)

xhtml?.file(
  'epub30-changes.xhtml',
  `<?xml version="1.0" encoding="utf-8"?><html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">${example_changes}</html>`,
)

zip.generateAsync({ type: 'nodebuffer' }).then(function (content) {
  fs.writeFile('output.epub', content)
})
