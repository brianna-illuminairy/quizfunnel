/* Placeholder after Screen 1 — uses same step template as real screens */

function NextStubScreen({ title, stepId, onBack }) {
  return (
    <QuizStepTemplate
      stepId={stepId}
      headline={title}
      onBack={onBack}
      footer={
        <div className="cta-wrap cta-wrap--quiz">
          <button type="button" className="funnel-btn-secondary" onClick={onBack}>
            ← Back
          </button>
        </div>
      }
    >
      <p className="quiz-step-eyebrow">Next up</p>
      <p className="quiz-step-copy">
        This screen is not built yet — waiting on your review of the step before it.
      </p>
    </QuizStepTemplate>
  );
}
