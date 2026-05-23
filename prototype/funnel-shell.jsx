/* FunnelShell — chrome only. Screens use QuizStepTemplate (or Landing), not this directly. */

function FunnelShell({
  stepId,
  children,
  footer = null,
  showBack = false,
  onBack,
  variant = "quiz",
}) {
  const meta = FunnelState.STEPS[stepId] || { progress: 0, label: null };
  const progress = meta.progress ?? 0;

  return (
    <div
      className={[
        "funnel-shell",
        `funnel-shell--${variant}`,
        stepId === "worries" ? "funnel-shell--worries" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="funnel-header">
        {showBack ? (
          <button type="button" className="funnel-back" onClick={onBack} aria-label="Back">
            ← Back
          </button>
        ) : (
          <span className="funnel-back funnel-back--spacer" aria-hidden="true" />
        )}
        <span className="funnel-word">illuminairy</span>
        <span className="funnel-header-spacer" aria-hidden="true" />
      </header>

      {progress > 0 && (
        <div className="funnel-progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className="funnel-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}

      {meta.label && (
        <p className={`funnel-step-label${meta.labelUpper ? " funnel-step-label--qnum" : ""}`}>
          {meta.labelUpper ? meta.label.toUpperCase() : meta.label}
        </p>
      )}

      <main className="funnel-main">
        <div className="funnel-quiz-body">{children}</div>
        {footer ? <footer className="funnel-footer">{footer}</footer> : null}
      </main>
    </div>
  );
}
