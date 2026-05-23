/* Constellation mark — geometric, not illustrative.
   Five points connected by hairlines, one in tomato as "the spark."
   Sharp dots. No glow. Slow twinkle on opacity only.
*/

function Constellation({ size = 280, inkColor = "#1a1815", sparkColor = "#f24822", lineOpacity = 0.22 }) {
  // Points laid out by hand on a 100x100 grid for a deliberate (not random) shape.
  // Triangle-ish constellation with one inner spark.
  const pts = [
    { x: 18, y: 28, r: 2.2, cls: "a" },
    { x: 72, y: 14, r: 3.0, cls: "b" },
    { x: 92, y: 58, r: 2.4, cls: "c" },
    { x: 54, y: 88, r: 2.8, cls: "d" },
    { x: 12, y: 72, r: 2.0, cls: "a" },
    // The spark — slightly off-center, larger
    { x: 48, y: 46, r: 4.2, cls: "spark", spark: true },
  ];

  // Lines forming the constellation
  const lines = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], // outer pentagon-ish
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], // spokes to the spark
  ];

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", overflow: "visible" }}
      aria-hidden="true"
    >
      <g>
        {lines.map(([a, b], i) => (
          <line
            key={i}
            x1={pts[a].x}
            y1={pts[a].y}
            x2={pts[b].x}
            y2={pts[b].y}
            stroke={inkColor}
            strokeOpacity={lineOpacity}
            strokeWidth={0.35}
            strokeLinecap="square"
          />
        ))}
      </g>
      <g>
        {pts.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill={p.spark ? sparkColor : inkColor}
            className={`cstar ${p.cls}`}
          />
        ))}
      </g>
    </svg>
  );
}

/* Small inline wordmark variant — used in the topbar.
   Single 6-pointed star to match the constellation waypoints and bullet markers. */
function WordmarkMark({ size = 22, inkColor = "#0a0a0a", sparkColor = "#f24822" }) {
  /* 12-vertex six-pointed star (matches sixStarPath in score-path.jsx).
     Drawn on a 100×100 viewBox centered at (50, 50). */
  const cx = 50, cy = 50, rOuter = 38, rInner = rOuter * 0.42;
  const pts = [];
  for (let i = 0; i < 12; i++) {
    const r = (i % 2 === 0) ? rOuter : rInner;
    const a = (-90 + i * 30) * (Math.PI / 180);
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  const d = "M" + pts.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join("L") + "Z";
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" style={{ display: "block" }}>
      <path d={d} fill={inkColor} />
    </svg>
  );
}

Object.assign(window, { Constellation, WordmarkMark });
