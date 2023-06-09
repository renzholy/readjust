import { renderToString } from 'react-dom/server'

import { Image, Item } from './types.js'

export { renderToString as render_to_string }

export const epub_type = (type: string) => ({
  'epub:type': type,
})

export const render_html = (body: string) =>
  `<?xml version="1.0" encoding="utf-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head><meta charset="utf-8" /></head>
<body>${body}</body></html>`

export const render_package = ({
  title,
  creator,
  timestamp,
  languages,
  items,
  images,
}: {
  title?: string
  creator?: string
  timestamp?: Date
  languages: string[]
  items: Item[]
  images: Image[]
}) => `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="uid">app.readjust</dc:identifier>
    <dc:title>${title || 'Untitled'}</dc:title>
    <dc:creator>${creator || 'Unknown'}</dc:creator>
    ${languages
      .map((language) => `<dc:language>${language}</dc:language>`)
      .join('\n')}
    <meta property="dcterms:modified">${(timestamp || new Date())
      .toISOString()
      .replace(/\.\d{3}Z$/, 'Z')}</meta>
  </metadata>
  <manifest>
    <item href="cover.png" id="ci" media-type="image/png" properties="cover-image"/>
    <item href="nav.xhtml" id="nav" media-type="application/xhtml+xml" properties="nav"/>
    ${items
      .map(
        (item) =>
          `<item href="${item.filename}" id="${item.id}" media-type="application/xhtml+xml"/>`,
      )
      .join('\n')}
    ${images
      .map(
        (image) =>
          `<item href="${image.filename}" id="${image.id}" media-type="${image.type}"/>`,
      )
      .join('\n')}
   </manifest>
  <spine>
    <itemref idref="nav" linear="no"/>
    ${items.map((item) => `<itemref idref="${item.id}"/>`).join('\n')}
  </spine>
</package>`
