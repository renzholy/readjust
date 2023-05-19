export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const url = new URL(request.url)
    return new Response('', { headers: { 'Content-Type': 'text/html' } })
  },
}
