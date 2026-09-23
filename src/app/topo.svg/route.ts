import { HERO_MAP } from "@/components/TopoMap";
import { contours } from "@/lib/contours";

export const dynamic = "force-static";

// Hero contours as a standalone, cacheable SVG. The page uses it as a CSS mask,
// so only stroke opacity matters here; the colour comes from the theme.
export function GET() {
  const { width, height, peak } = HERO_MAP;
  const paths = contours({ width, height, peak })
    .map((c) => `<path d="${c.d}" pathLength="1" class="${c.index ? "i" : "c"}" style="--l:${c.level}"/>`)
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
<style>
path{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;animation:d 2.4s cubic-bezier(.45,0,.2,1) forwards;animation-delay:calc(var(--l)*70ms)}
.c{stroke:#000;stroke-opacity:.24;stroke-width:1}
.i{stroke:#000;stroke-opacity:.5;stroke-width:1.6}
@media (prefers-reduced-motion:reduce){path{animation:none;stroke-dashoffset:0}}
@keyframes d{to{stroke-dashoffset:0}}
</style>${paths}</svg>`;
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml" } });
}
