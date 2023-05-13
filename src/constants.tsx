import sharp from 'sharp'
import { parseFeed } from 'htmlparser2'

export const meta_inf_container = `<?xml version="1.0" encoding="UTF-8"?>
<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
  <rootfiles>
    <rootfile full-path="EPUB/package.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`

export const style_css = await (
  await fetch('https://cdn.tailwindcss.com?plugins=typography')
).text()

export const cover_image = await sharp(
  await (
    await fetch('https://cdn.beekka.com/blogimg/asset/202305/bg2023051012.jpg')
  ).arrayBuffer(),
)
  .toFormat('png')
  .toBuffer()

export const feed = parseFeed(
  await (await fetch('https://arthurchiao.github.io/feed.xml')).text(),
  { xmlMode: true },
)
