// Liveness probe for the container health check and Dokploy zero-downtime deploys.
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json({ status: "ok" }, { headers: { "Cache-Control": "no-store" } });
}
