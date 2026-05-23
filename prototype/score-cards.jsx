/* Application-card hero — "before vs after" framing.
   Two side-by-side cream cards: GPA + SAT score, with a status pill
   (Out of range / Competitive). Caption below: "+220 PTS · 12 WEEKS". */

function ScoreCards({
  gpa = "3.9",
  beforeScore = 1180,
  afterScore = 1400,
  ink = "#0a0a0a",
  inkSoft = "rgba(10,10,10,0.55)",
  tomato = "#f24822",
  green = "#2f8b55",
  cardBg = "#f5ecd9",
}) {
  const delta = afterScore - beforeScore;

  const card = (variant) => {
    const isBefore = variant === "before";
    const accent = isBefore ? tomato : green;
    const score  = isBefore ? beforeScore : afterScore;
    const status = isBefore ? "OUT OF RANGE" : "COMPETITIVE";
    return (
      <div className="sc-card">
        {/* APPLICATION header — line underneath */}
        <div className="sc-head">APPLICATION</div>

        {/* GPA + SAT block — line underneath */}
        <div className="sc-body">
          <div className="sc-row">
            <div className="sc-label">GPA</div>
            <div className="sc-gpa">{gpa}</div>
          </div>
          <div className="sc-row">
            <div className="sc-label">SAT</div>
            <div className="sc-sat" style={{ color: accent }}>{score}</div>
          </div>
        </div>

        {/* Status pill at the bottom */}
        <div className="sc-status" style={{ color: accent }}>
          <span className="sc-status-square" style={{ background: accent }} />
          <span>{status}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="sc-wrap">
      <div className="sc-cards">
        {card("before")}
        {card("after")}
      </div>
      <p className="sc-caption">+{delta} PTS &nbsp;·&nbsp; 12 WEEKS</p>
    </div>
  );
}

Object.assign(window, { ScoreCards });
