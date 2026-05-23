/* QuizStepTemplate — shell + slots. Screens only pass copy + body UI. */

function QuizStepTemplate({
  stepId,
  headline,
  hint = null,
  hintId = null,
  children,
  showBack = true,
  onBack,
  continueLabel = "Continue",
  onContinue = null,
  continueDisabled = false,
  footer = null,
  bodyClassName = "",
}) {
  const resolvedHintId = hintId || (hint ? `quiz-step-hint-${stepId}` : null);

  const footerNode =
    footer !== null ? (
      footer
    ) : onContinue ? (
      <div className="cta-wrap cta-wrap--quiz">
        <FunnelCta
          label={continueLabel}
          disabled={continueDisabled}
          onClick={onContinue}
        />
      </div>
    ) : null;

  return (
    <FunnelShell stepId={stepId} showBack={showBack} onBack={onBack} variant="quiz" footer={footerNode}>
      <div className={["quiz-step", bodyClassName].filter(Boolean).join(" ")}>
        <h1 className="quiz-step-headline">{headline}</h1>
        {hint ? (
          <p className="quiz-step-hint" id={resolvedHintId}>
            {hint}
          </p>
        ) : null}
        <div className="quiz-step-body" aria-describedby={hint ? resolvedHintId : undefined}>
          {children}
        </div>
      </div>
    </FunnelShell>
  );
}
