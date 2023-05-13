import { parseFeed } from 'htmlparser2'

export const meta_inf_container = `<?xml version="1.0" encoding="UTF-8"?>
<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
  <rootfiles>
    <rootfile full-path="EPUB/package.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`

export const feed = parseFeed(
  await (await fetch('https://www.ruanyifeng.com/blog/atom.xml')).text(),
  { xmlMode: true },
)
