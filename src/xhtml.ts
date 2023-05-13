import { nanoid } from 'nanoid'
import { renderToString } from 'react-dom/server'

export { renderToString as render_to_string }

export const epub_type = (type: string) => ({
  'epub:type': type,
})

export const render_html = (children: string) =>
  `<?xml version="1.0" encoding="utf-8"?><html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">${children}</html>`

export const render_package = ({
  title,
  creator,
  timestamp,
  language,
}: {
  title: string
  creator: string
  timestamp: Date
  language: string
}) => `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="uid">${nanoid()}</dc:identifier>
    <dc:title>${title}</dc:title>
    <dc:creator>${creator}</dc:creator>
    <dc:language>${language}</dc:language>
    <meta property="dcterms:modified">${timestamp.toISOString()}</meta>
  </metadata>
  <manifest>
    <item href="epub30-nav.xhtml" id="nav" media-type="application/xhtml+xml" properties="nav"/>
    <item href="epub30-changes.xhtml" id="cha" media-type="application/xhtml+xml"/>
    <item href="style.css" media-type="text/css" id="css"/>
    <item href="cover.jpg" media-type="image/jpeg" id="ci" properties="cover-image"/>
  </manifest>
  <spine>
    <itemref idref="nav" linear="no"/>
    <itemref idref="cha"/>
  </spine>
</package>`
