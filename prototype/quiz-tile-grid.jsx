/* QuizTileGrid — multiselect 2×n tile grid (body slot content only) */

function QuizTile({ selected, onToggle, ariaLabel, label, icon }) {
  return (
    <button
      type="button"
      className={`quiz-tile${selected ? " quiz-tile--selected" : ""}`}
      aria-pressed={selected}
      aria-label={ariaLabel}
      onClick={onToggle}
    >
      {selected ? <WorryTileCorner /> : null}
      {icon}
      <span className="quiz-tile-label">{label}</span>
    </button>
  );
}

function QuizTileGrid({ options, selectedIds, onToggle, groupLabel, hintId, renderIcon }) {
  return (
    <div
      className="quiz-tile-grid"
      role="group"
      aria-label={groupLabel}
      aria-describedby={hintId || undefined}
    >
      {options.map((opt) => {
        const selected = selectedIds.includes(opt.id);
        const icon = renderIcon ? renderIcon(opt.id) : opt.icon;

        return (
          <QuizTile
            key={opt.id}
            selected={selected}
            ariaLabel={opt.ariaLabel}
            label={opt.label}
            onToggle={() => onToggle(opt.id)}
            icon={icon}
          />
        );
      })}
    </div>
  );
}
