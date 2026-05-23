/* Screen 1 — worries (content only; shell + CTA from QuizStepTemplate) */

const WORRY_OPTIONS = [
  { id: "recent_test", label: "Recent score", ariaLabel: "Recent test score" },
  { id: "upcoming_not_ready", label: "Upcoming test", ariaLabel: "Upcoming test, not ready" },
  { id: "target_schools_low", label: "Below range", ariaLabel: "Score below range for target schools" },
  { id: "early_deadlines", label: "App deadlines", ariaLabel: "Early Action and Early Decision application deadlines" },
  { id: "stuck_score", label: "Already retook", ariaLabel: "Taken it 2 or more times, score will not budge" },
  { id: "not_prepped", label: "Haven't started", ariaLabel: "Have not started prepping" },
];

function WorriesScreen({ onBack, onContinue }) {
  const saved = FunnelState.getState().answers.worries;
  const [selected, setSelected] = React.useState(() =>
    Array.isArray(saved) ? [...saved] : []
  );

  React.useEffect(() => {
    trackFunnelEvent("intake_step_view", { step_id: "worries", path: "spine", layout: "grid" });
  }, []);

  const toggle = (id) => {
    setSelected((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      trackFunnelEvent("intake_answer_toggle", {
        step_id: "worries",
        option_id: id,
        selected: next.includes(id),
      });
      return next;
    });
  };

  const handleContinue = () => {
    if (selected.length === 0) return;
    FunnelState.patchAnswers({ worries: selected });
    trackFunnelEvent("intake_step_complete", {
      step_id: "worries",
      answer_count: selected.length,
    });
    onContinue();
  };

  return (
    <QuizStepTemplate
      stepId="worries"
      headline="What's got you worried?"
      hint="Select all that apply"
      bodyClassName="quiz-step--tile-grid"
      continueDisabled={selected.length === 0}
      onContinue={handleContinue}
      onBack={onBack}
    >
      <QuizTileGrid
        options={WORRY_OPTIONS}
        selectedIds={selected}
        onToggle={toggle}
        groupLabel="What's got you worried?"
        hintId="quiz-step-hint-worries"
        renderIcon={(id) => <WorryIcon id={id} />}
      />
    </QuizStepTemplate>
  );
}
