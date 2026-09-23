/**
 * Build-time topographic contour generator.
 * Samples a deterministic elevation field, runs marching squares for a set of
 * levels, stitches segments into polylines and smooths them into SVG paths.
 */

type Pt = [number, number];

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function valueNoise(seed: number, cells: number) {
  const rand = mulberry32(seed);
  const grid = Array.from({ length: (cells + 1) * (cells + 1) }, rand);
  const at = (x: number, y: number) => grid[y * (cells + 1) + x];
  const smooth = (t: number) => t * t * (3 - 2 * t);
  return (u: number, v: number) => {
    const x = u * cells;
    const y = v * cells;
    const x0 = Math.min(Math.floor(x), cells - 1);
    const y0 = Math.min(Math.floor(y), cells - 1);
    const sx = smooth(x - x0);
    const sy = smooth(y - y0);
    const a = at(x0, y0) + (at(x0 + 1, y0) - at(x0, y0)) * sx;
    const b = at(x0, y0 + 1) + (at(x0 + 1, y0 + 1) - at(x0, y0 + 1)) * sx;
    return a + (b - a) * sy;
  };
}

export type ContourOptions = {
  width: number;
  height: number;
  /** Peak position in 0..1 space; the pin sits here. */
  peak: Pt;
  seed?: number;
  levels?: number;
  resolution?: number;
};

export type Contour = { d: string; level: number; index: boolean };

export function contours({
  width,
  height,
  peak,
  seed = 1848,
  levels = 22,
  resolution = 9,
}: ContourOptions): Contour[] {
  const n1 = valueNoise(seed, 4);
  const n2 = valueNoise(seed + 1, 9);
  const aspect = width / height;
  const field = (u: number, v: number) => {
    const dx = (u - peak[0]) * aspect;
    const dy = v - peak[1];
    const hill = Math.exp(-(dx * dx + dy * dy) / 0.09);
    const ridgeDx = (u - 0.15) * aspect;
    const ridgeDy = v - 0.85;
    const ridge = 0.55 * Math.exp(-(ridgeDx * ridgeDx) / 0.12 - (ridgeDy * ridgeDy) / 0.05);
    return hill + ridge + 0.55 * n1(u, v) + 0.18 * n2(u, v);
  };

  const cols = Math.ceil(width / resolution) + 1;
  const rows = Math.ceil(height / resolution) + 1;
  const values = new Float64Array(cols * rows);
  let min = Infinity;
  let max = -Infinity;
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const v = field(i / (cols - 1), j / (rows - 1));
      values[j * cols + i] = v;
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }

  const out: Contour[] = [];
  for (let l = 1; l <= levels; l++) {
    const t = min + ((max - min) * l) / (levels + 1);
    const segments = march(values, cols, rows, t, resolution);
    for (const line of stitch(segments)) {
      if (line.length < 4) continue;
      out.push({ d: smoothPath(line), level: l, index: l % 5 === 0 });
    }
  }
  return out;
}

function march(values: Float64Array, cols: number, rows: number, t: number, step: number) {
  const segs: [Pt, Pt][] = [];
  const lerp = (a: number, b: number) => (t - a) / (b - a);
  for (let j = 0; j < rows - 1; j++) {
    for (let i = 0; i < cols - 1; i++) {
      const tl = values[j * cols + i];
      const tr = values[j * cols + i + 1];
      const br = values[(j + 1) * cols + i + 1];
      const bl = values[(j + 1) * cols + i];
      const code = (tl > t ? 8 : 0) | (tr > t ? 4 : 0) | (br > t ? 2 : 0) | (bl > t ? 1 : 0);
      if (code === 0 || code === 15) continue;
      const x = i * step;
      const y = j * step;
      const top: Pt = [x + lerp(tl, tr) * step, y];
      const right: Pt = [x + step, y + lerp(tr, br) * step];
      const bottom: Pt = [x + lerp(bl, br) * step, y + step];
      const left: Pt = [x, y + lerp(tl, bl) * step];
      switch (code) {
        case 1: case 14: segs.push([left, bottom]); break;
        case 2: case 13: segs.push([bottom, right]); break;
        case 3: case 12: segs.push([left, right]); break;
        case 4: case 11: segs.push([top, right]); break;
        case 6: case 9: segs.push([top, bottom]); break;
        case 7: case 8: segs.push([left, top]); break;
        case 5: segs.push([left, top], [bottom, right]); break;
        case 10: segs.push([top, right], [left, bottom]); break;
      }
    }
  }
  return segs;
}

function stitch(segs: [Pt, Pt][]): Pt[][] {
  const key = (p: Pt) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`;
  const byPoint = new Map<string, number[]>();
  segs.forEach(([a, b], idx) => {
    for (const p of [a, b]) {
      const k = key(p);
      const list = byPoint.get(k);
      if (list) list.push(idx);
      else byPoint.set(k, [idx]);
    }
  });
  const used = new Uint8Array(segs.length);
  const lines: Pt[][] = [];

  const extend = (line: Pt[]) => {
    for (;;) {
      const tail = line[line.length - 1];
      const next = byPoint.get(key(tail))?.find((s) => !used[s]);
      if (next === undefined) return;
      used[next] = 1;
      const [a, b] = segs[next];
      line.push(key(a) === key(tail) ? b : a);
    }
  };

  segs.forEach(([a, b], idx) => {
    if (used[idx]) return;
    used[idx] = 1;
    const line: Pt[] = [a, b];
    extend(line);
    line.reverse();
    extend(line);
    lines.push(line);
  });
  return lines;
}

function smoothPath(pts: Pt[]) {
  const f = (n: number) => Math.round(n).toString();
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2;
    const my = (pts[i][1] + pts[i + 1][1]) / 2;
    d += `Q${f(pts[i][0])} ${f(pts[i][1])} ${f(mx)} ${f(my)}`;
  }
  const last = pts[pts.length - 1];
  return d + `L${f(last[0])} ${f(last[1])}`;
}
