# Screen 01 — What's got you worried?

**Status:** In review  
**File:** `Landing.html?step=worries`  
**Design ref:** `Downloads/screen-2/Screen 2.html`  
**Layout rules:** [`files/funnel-layout-rules.md`](../funnel-layout-rules.md) — **read before changing CSS**

## Performance

See [`../funnel-performance.md`](../funnel-performance.md).

- [ ] Lighthouse mobile (Slow 4G): LCP ≤ 2.5s, CLS ≤ 0.1 on `Landing.html?step=worries`
- [ ] Step transition from landing feels instant (no blank shell)
- [ ] Meta IAB smoke: IG + FB in-app browser, 390×844
- [ ] Baseline row in [`../research/perf-baseline-2026-05-23.md`](../research/perf-baseline-2026-05-23.md)

## Must-haves (do not ship without)

1. **Continue CTA always visible** — sticky footer in viewport (`funnel-shell--quiz`). See layout rules §1.
2. **Inverted multiselect** — cream tile → ink when selected; tomato corner ✓ only when selected (no white checkbox).
3. **Phone-scale grid** — `max-width: 360px`, tiles capped (~158px height); no huge beige blocks on desktop.

## Tiles (order)

| # | Label | `id` |
|---|--------|------|
| 1 | Recent score | `recent_test` |
| 2 | Upcoming test | `upcoming_not_ready` |
| 3 | Below range | `target_schools_low` |
| 4 | App deadlines | `early_deadlines` |
| 5 | Planning to retake | `stuck_score` |
| 6 | Haven't started | `not_prepped` |

## Code

| File | Role |
|------|------|
| `screens/worries.jsx` | Grid + state |
| `worry-icons.jsx` | HTML/CSS readouts + corner mark |
| `styles.css` | `.quiz-grid--screen2`, `.funnel-shell--quiz` |
| `funnel-shell.jsx` | Shell + footer CTA slot |

## Review checklist

- [ ] CTA visible on 390×844 and 375×667 without hunting below fold
- [ ] Short viewport (`max-height: 700px`) — header compresses; grid scrolls inside main; CTA still pinned
- [ ] Selection = inverted tile + corner check (matches Screen 2 ref)
- [ ] Six tiles visible with reasonable scroll (not 2 giant tiles filling screen)
- [ ] Back / progress / QUESTION 1 OF 14

## After approval

- Step 2 — **Who’s taking the SAT?** ([`screen-02-who.md`](screen-02-who.md)) · `?step=who`
- Step 3 — **Target score** · `?step=target`
- Step 4 — **INT1 — You’re in good hands** ([`screen-int1-trust.md`](screen-int1-trust.md)) · `?step=trust` · after who + target
