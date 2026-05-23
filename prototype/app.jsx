/* Illuminairy funnel — landing + step router */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "ctaLabel": "Get my answers",
  "heroStyle": "cards",
  "endGlow": true,
  "lineWeight": 0.45,
  "dashPattern": "1.6 1.6",
  "showBullets": false
}/*EDITMODE-END*/;

const PROMISES = [
  "Why they scored low",
  "If they should retake (and when)",
  "What score they can realistically get",
  "Exactly how to get there",
];

function Landing({ onStart }) {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const handleStart = () => {
    trackFunnelEvent("funnel_cta_click", { step: "landing" });
    trackFunnelEvent("assessment_start", { path: "spine" });
    onStart();
  };

  return (
    <React.Fragment>
      <div className="page">
        <div className="nav">
          <span className="word">illuminairy</span>
        </div>

        <h1 className="headline">
          High GPA,<br />
          <span className="low">low SAT?</span>
        </h1>

        <p className="sub">
          Find out why they&apos;re struggling.
          <br />
          What score improvement is realistic.
          <br />
          And how to fix it before their next test.
          <br />
          <strong className="sub-cred">Backed by College Board data from 250,000+ students.</strong>
        </p>

        {t.heroStyle === "cards" ? (
          <ScoreCards />
        ) : (
          <div className="hero-graphic">
            <ScorePath
              width={340}
              endGlow={t.endGlow}
              lineWeight={t.lineWeight}
              dashPattern={t.dashPattern}
              dashColor="rgba(255,255,255,0.9)"
            />
          </div>
        )}

        {t.showBullets && (
          <div className="answer">
            <p className="answer-label">We&apos;ll answer:</p>
            <ul className="promises">
              {PROMISES.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="cta-wrap">
          <FunnelCta label={t.ctaLabel} onClick={handleStart} showArrow />
        </div>

        <p className="micro">Free  ·  2 minutes  ·  No account needed</p>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero">
          <TweakRadio
            label="Style"
            value={t.heroStyle}
            options={[
              { label: "Cards", value: "cards" },
              { label: "Path", value: "path" },
            ]}
            onChange={(v) => setTweak("heroStyle", v)}
          />
        </TweakSection>
        {t.heroStyle === "path" && (
          <TweakSection label="Path settings">
            <TweakToggle label="Endpoint glow" value={t.endGlow} onChange={(v) => setTweak("endGlow", v)} />
            <TweakSlider
              label="Path weight"
              value={t.lineWeight}
              min={0.25}
              max={1.1}
              step={0.05}
              onChange={(v) => setTweak("lineWeight", v)}
            />
            <TweakSelect
              label="Dash style"
              value={t.dashPattern}
              options={[
                { label: "Dotted", value: "0.6 1.8" },
                { label: "Fine dash", value: "1.6 1.6" },
                { label: "Long dash", value: "3 2" },
                { label: "Solid", value: "0" },
              ]}
              onChange={(v) => setTweak("dashPattern", v)}
            />
          </TweakSection>
        )}
        <TweakSection label="Page">
          <TweakToggle
            label="Show 'We'll answer' bullets"
            value={t.showBullets}
            onChange={(v) => setTweak("showBullets", v)}
          />
          <TweakText label="CTA" value={t.ctaLabel} onChange={(v) => setTweak("ctaLabel", v)} />
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

function FunnelApp() {
  const [step, setStep] = React.useState(() => {
    FunnelState.initFromUrl();
    return FunnelState.getStep();
  });

  React.useEffect(() => {
    trackFunnelEvent("funnel_landing_view", { step });
    const onPop = () => setStep(FunnelState.getStep());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  React.useEffect(() => {
    document.body.classList.toggle("funnel-quiz", step !== "landing");
  }, [step]);

  const goTo = (next) => {
    FunnelState.setStep(next);
    setStep(next);
  };

  if (step === "landing") {
    return <Landing onStart={() => goTo("worries")} />;
  }

  if (step === "worries") {
    return (
      <WorriesScreen
        onBack={() => goTo("landing")}
        onContinue={() => goTo("chapter1-stub")}
      />
    );
  }

  if (step === "chapter1-stub") {
    return (
      <NextStubScreen
        stepId="chapter1-stub"
        title="Chapter 1: Why did they score low?"
        onBack={() => goTo("worries")}
      />
    );
  }

  return <Landing onStart={() => goTo("worries")} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunnelApp />);
