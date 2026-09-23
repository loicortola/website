export const HERO_MAP = { width: 1440, height: 860, peak: [0.6, 0.3] as [number, number] };

export function TopoMap({ label }: { label: string[] }) {
  const { width: W, height: H, peak } = HERO_MAP;
  const px = peak[0] * W;
  const py = peak[1] * H;
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="topo-mask absolute inset-0" />
      {/* Same viewBox and cropping as the map, so the pin stays on the summit. */}
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <g className="pin-reveal">
          <circle cx={px} cy={py} r={26} fill="none" stroke="var(--road)" strokeWidth={1.5} />
          <circle cx={px} cy={py} r={7} fill="var(--road)" />
          <line x1={px - 26} y1={py} x2={px - 52} y2={py} stroke="var(--road)" strokeWidth={1.5} />
          <text x={px - 62} y={py - 4} textAnchor="end" fill="var(--foreground)" fontSize={17} fontWeight={600} className="tabular-nums">
            {label[0]}
          </text>
          <text x={px - 62} y={py + 18} textAnchor="end" fill="var(--muted-foreground)" fontSize={15} className="tabular-nums">
            {label[1]}
          </text>
        </g>
      </svg>
    </div>
  );
}
