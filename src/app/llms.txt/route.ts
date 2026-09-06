import { buildLlmsTxt } from "@/lib/llms";

// Se genera en build desde los datos del sitio (antes era un archivo estático en /public que quedó desfasado)
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
