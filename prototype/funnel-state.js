/**
 * Funnel step router + sessionStorage (prototype).
 * Steps: landing | worries | … (more added screen-by-screen)
 */
(function (global) {
  const STORAGE_KEY = "illuminairy_funnel_v1";
  const DEFAULT_STATE = {
    step: "landing",
    path: "spine",
    answers: {},
  };

  function load() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE };
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_STATE,
        ...parsed,
        answers: { ...DEFAULT_STATE.answers, ...(parsed.answers || {}) },
      };
    } catch {
      return { ...DEFAULT_STATE };
    }
  }

  function save(state) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function getStep() {
    return load().step;
  }

  function getState() {
    return load();
  }

  function setStep(step) {
    const state = load();
    state.step = step;
    save(state);
    syncUrl(step);
    return state;
  }

  function patchAnswers(patch) {
    const state = load();
    state.answers = { ...state.answers, ...patch };
    save(state);
    return state;
  }

  function syncUrl(step) {
    const url = new URL(global.location.href);
    if (step === "landing") {
      url.searchParams.delete("step");
    } else {
      url.searchParams.set("step", step);
    }
    global.history.replaceState({ step }, "", url.toString());
  }

  function stepFromUrl() {
    const url = new URL(global.location.href);
    return url.searchParams.get("step") || "landing";
  }

  function initFromUrl() {
    const step = stepFromUrl();
    setStep(step);
    return load();
  }

  global.FunnelState = {
    load,
    save,
    getStep,
    getState,
    setStep,
    patchAnswers,
    initFromUrl,
    syncUrl,
    STEPS: {
      landing: { progress: 0, label: null },
      worries: { progress: 7, label: "Question 1 of 14", labelUpper: true },
      "chapter1-stub": { progress: 14, label: "Question 2 of 14" },
    },
  };
})(window);
