# Screen 01 — What's got you worried?

**Status:** In review  
**File:** `Landing.html?step=worries`  
**Design ref:** `Downloads/screen-2/Screen 2.html`  
**Layout rules:** [`files/funnel-layout-rules.md`](../funnel-layout-rules.md) — **read before changing CSS**

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
| 5 | Already retook | `stuck_score` |
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

- Chapter 1 title screen (v4 Screen 2)
