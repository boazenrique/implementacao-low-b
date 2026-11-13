import { readFile } from 'node:fs/promises'
import path from 'node:path'

// Serve the exported funnel as a complete document so its styles and scripts
// run directly, without depending on the v0 Artifact viewer or React hydration.
export const dynamic = 'force-static'

export async function GET() {
  const html = await readFile(
    path.join(process.cwd(), 'content', 'funil.html'),
    'utf8',
  )

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
