import { renderToString } from 'react-dom/server'

export const epubType = (type: string) => ({
  'epub:type': type,
})

export { renderToString }

export const xml = (children: string) =>
  `<?xml version="1.0" encoding="utf-8"?><html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">${children}</html>`
