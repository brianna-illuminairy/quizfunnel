/* FunnelCta — one primary button for landing + all quiz steps */

function FunnelCta({ label, children, onClick, disabled = false, showArrow = false, type = "button" }) {
  const text = label ?? children;

  return (
    <button type={type} className="cta" onClick={onClick} disabled={disabled}>
      <span>{text}</span>
      {showArrow ? <span className="arrow" aria-hidden="true" /> : null}
    </button>
  );
}
