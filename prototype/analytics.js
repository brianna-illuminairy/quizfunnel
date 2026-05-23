/**
 * Dual analytics stub — logs to console until PostHog/GA keys are wired.
 */
(function (global) {
  function trackFunnelEvent(name, props) {
    const payload = { event: name, ...(props || {}) };
    console.info("[funnel analytics]", payload);
    if (global.posthog && typeof global.posthog.capture === "function") {
      global.posthog.capture(name, props || {});
    }
    if (typeof global.gtag === "function") {
      global.gtag("event", name, props || {});
    }
  }

  global.trackFunnelEvent = trackFunnelEvent;
})(window);
