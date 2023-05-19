export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const url = new URL(request.url).searchParams.get('url')
    if (!url) {
      return new Response(null, { status: 400 })
    }
    const response = await fetch(url)
    return new HTMLRewriter()
      .onDocument({
        doctype(doctype) {
          console.log('doctype', doctype)
        },
        comments(comment) {
          console.log('comment', comment)
        },
        text(text) {
          console.log('text', text)
        },
        end(end) {
          console.log('end', end)
        },
      })
      .on('*', {
        element(element) {
          console.log('element', element)
        },
        comments(comment) {
          console.log('comment', comment)
        },
        text(text) {
          console.log('text', text)
        },
      })
      .transform(response)
  },
}
