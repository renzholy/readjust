import { nanoid } from 'nanoid'
import { renderToString } from 'react-dom/server'

export { renderToString as render_to_string }

export const epub_type = (type: string) => ({
  'epub:type': type,
})

export const render_html = (body: string, title?: string) =>
  `<?xml version="1.0" encoding="utf-8"?><html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head>
<meta charset="utf-8" />
<title>${title || 'Untitled'}</title>
<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body class="prose">${body}</body></html>`

export const render_package = ({
  title,
  creator,
  timestamp,
  language,
  items,
}: {
  title?: string
  creator?: string
  timestamp?: Date
  language?: string
  items: number
}) => `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="uid">${nanoid()}</dc:identifier>
    <dc:title>${title || 'Untitled'}</dc:title>
    <dc:creator>${creator || 'Unknown'}</dc:creator>
    <dc:language>${language || 'en'}</dc:language>
    <meta property="dcterms:modified">${(
      timestamp || new Date()
    ).toISOString()}</meta>
  </metadata>
  <manifest>
    <item href="style.css" media-type="text/css" id="css"/>
    <item href="cover.png" media-type="image/png" id="ci" properties="cover-image"/>
    <item href="nav.xhtml" id="nav" media-type="application/xhtml+xml" properties="nav"/>
    ${Array.from({ length: items })
      .map(
        (_, index) =>
          `<item href="${index}.xhtml" id="${index}" media-type="application/xhtml+xml"/>`,
      )
      .join('\n')}
   </manifest>
  <spine>
    <itemref idref="nav" linear="no"/>
    ${Array.from({ length: items })
      .map((_, index) => `<itemref idref="${index}"/>`)
      .join('\n')}
  </spine>
</package>`
