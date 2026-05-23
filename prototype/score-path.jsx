/* Constellation Score Path — Illuminairy hero graphic v2
   12 six-pointed stars climbing 1180 → 1400 over 12 weeks.
   Dashed/dotted path. Glowing tomato endpoint. Sparse W-labels.
   No background scatter — just the path. Editorial / star chart aesthetic.
*/

/* Four constellation waypoints, positioned angular/zigzag like a real
   star-chart rather than on a monotonic climb. Coordinates on a 100×60
   viewBox (x: 0–100, y: 0–60, y=0 top).
   The line between consecutive keypoints is straight (sharp angular
   bends at each star) — no intermediate wiggles. */
const PATH_POINTS = [
  { x:  7,  y: 52, week:  0, score: 1180, key: true },  // W0  — start (tomato)
  { x: 24,  y: 22, week:  4, score: 1270, key: true },  // W4  — sharp climb
  { x: 55,  y: 30, week:  8, score: 1350, key: true },  // W8  — over + slight dip
  { x: 92,  y:  8, week: 12, score: 1400, key: true },  // W12 — sharp up to target (green)
];

/* Six-pointed star path on a unit grid (matches the bullet point markers).
   12-vertex star: outer points + inner notches. Returns SVG <path d="…">. */
function sixStarPath(cx, cy, rOuter) {
  const rInner = rOuter * 0.42;
  // Start with the top point, then alternate inner/outer for 12 vertices.
  const pts = [];
  for (let i = 0; i < 12; i++) {
    const isOuter = i % 2 === 0;
    const r = isOuter ? rOuter : rInner;
    // Top point at angle -90°. 12 segments → 30° per step.
    const a = (-90 + i * 30) * (Math.PI / 180);
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return "M" + pts.map(([x, y]) => `${x.toFixed(3)},${y.toFixed(3)}`).join("L") + "Z";
}

/* Catmull-Rom → cubic Bézier converter. Produces a smooth curve through
   every point in `pts` (no overshoot at endpoints). Tension 0.5 by default
   matches the standard CR-to-Bézier formula. */
function smoothPath(pts, fmt = (n) => n.toFixed(2)) {
  if (pts.length < 2) return "";
  const out = [`M${fmt(pts[0].x)},${fmt(pts[0].y)}`];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || pts[i + 1];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    out.push(
      `C${fmt(c1x)},${fmt(c1y)} ${fmt(c2x)},${fmt(c2y)} ${fmt(p2.x)},${fmt(p2.y)}`
    );
  }
  return out.join(" ");
}

function ScorePath({
  width = 350,
  endGlow = true,
  lineWeight = 0.45,            // SVG units (viewBox 100×60)
  dashPattern = "1.6 1.6",      // dotted feel
  ink = "#0a0a0a",
  inkSoft = "rgba(10,10,10,0.55)",
  tomato = "#f24822",
  green = "#2f8b55",
  dashColor = "rgba(10,10,10,0.45)",
}) {
  const VBW = 100, VBH = 60;
  // Padding to fit labels + glow halo.
  const padL = 32, padR = 34, padT = 22, padB = 14;
  const totalW = VBW + padL + padR;
  const totalH = VBH + padT + padB;

  const mx = (x) => x + padL;
  const my = (y) => y + padT;

  const keys  = PATH_POINTS.filter((p) => p.key);
  const first = keys[0];
  const last  = keys[keys.length - 1];

  // Dashed trail uses straight line segments between every underlying
  // point — sharp, angular, constellation-like (not a smooth curve).
  const dashD = PATH_POINTS
    .map((p, i) => `${i === 0 ? "M" : "L"}${mx(p.x).toFixed(2)},${my(p.y).toFixed(2)}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      width={width}
      height={width * (totalH / totalW)}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", overflow: "visible" }}
      aria-label={`SAT score climbing from ${first.score} to ${last.score} over 12 weeks`}
      role="img"
    >
      <defs>
        {/* Soft green radial halo for the endpoint glow. */}
        <radialGradient id="end-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={green} stopOpacity="0.55" />
          <stop offset="40%"  stopColor={green} stopOpacity="0.22" />
          <stop offset="100%" stopColor={green} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── Endpoint glow (drawn first, sits under everything) ── */}
      {endGlow && (
        <circle
          cx={mx(last.x)} cy={my(last.y)} r={13}
          fill="url(#end-glow)"
        />
      )}

      {/* ── Dashed/dotted path ── */}
      <path
        d={dashD}
        fill="none"
        stroke={dashColor}
        strokeWidth={lineWeight}
        strokeDasharray={dashPattern}
        strokeLinecap="round"
        strokeLinejoin="miter"
      />

      {/* ── Six-pointed star waypoints (only on keypoints) ── */}
      <g>
        {keys.map((p, i) => {
          const isFirst = i === 0;
          const isLast  = i === keys.length - 1;
          const r       = isFirst || isLast ? 3.4 : 2.6;
          const fill    = isFirst ? tomato : isLast ? green : ink;
          return (
            <path
              key={`star-${i}`}
              d={sixStarPath(mx(p.x), my(p.y), r)}
              fill={fill}
            />
          );
        })}
      </g>

      {/* ── Labels: "W · score" on every keypoint ── */}
      <g
        fontFamily='"JetBrains Mono", ui-monospace, monospace'
        fontWeight="500"
        fontSize="6"
        letterSpacing="0.02em"
      >
        {keys.map((p, i) => {
          const isFirst = i === 0;
          const isLast  = i === keys.length - 1;
          // Layout:
          //   W0    → "W0" below-right of star (like W4/W8), plus a separate
          //           "1180" score to the LEFT of the star (no dot separator).
          //   W4/W8 → "W4" / "W8" below-right of star.
          //   W12   → "W12 · 1400" combined, to the right of the glowing end star.
          if (isFirst) {
            return (
              <React.Fragment key={`lbl-${i}`}>
                {/* Score to the left of the star */}
                <text
                  x={mx(p.x) - 6}
                  y={my(p.y) + 1.8}
                  fill={ink}
                  textAnchor="end"
                >
                  {p.score}
                </text>
                {/* Week label below-right (matches W4/W8 placement) */}
                <text
                  x={mx(p.x) + 5.5}
                  y={my(p.y) + 1.8}
                  fill={inkSoft}
                  textAnchor="start"
                >
                  W{p.week}
                </text>
              </React.Fragment>
            );
          }
          if (isLast) {
            return (
              <React.Fragment key={`lbl-${i}`}>
                {/* Score above-right of star, above the curve */}
                <text
                  x={mx(p.x) + 5}
                  y={my(p.y) - 3.5}
                  fill={ink}
                  textAnchor="start"
                >
                  {p.score}
                </text>
                {/* Week label below-right, slightly dropped */}
                <text
                  x={mx(p.x) + 5}
                  y={my(p.y) + 4.5}
                  fill={inkSoft}
                  textAnchor="start"
                >
                  W{p.week}
                </text>
              </React.Fragment>
            );
          }
          // Intermediate keypoint labels (W4, W8). Position them on the
          // side of the star that's away from the path: W4 sits at a peak
          // (path approaches from below-left and leaves to below-right) so
          // its label goes ABOVE-right. W8 sits at a valley (path comes
          // from above and leaves above) so its label goes BELOW-right.
          const aboveStar = p.week === 4;
          return (
            <text
              key={`lbl-${i}`}
              x={mx(p.x) + 5.5}
              y={aboveStar ? my(p.y) - 4 : my(p.y) + 5.5}
              fill={inkSoft}
              textAnchor="start"
            >
              W{p.week}
            </text>
          );
        })}
      </g>
    </svg>
  );
}

Object.assign(window, { ScorePath });
