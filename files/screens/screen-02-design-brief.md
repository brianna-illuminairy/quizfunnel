# Screen 02 — Design ideation brief

> **⛔ DEPRECATED** — was for score/GPA/retake combo. Current Screen 02 = **Who** only: [`screen-02-who.md`](screen-02-who.md).

**For:** Visual / UX exploration (Claude Design or human designer)  
**Not for:** Implementation yet  
**Product:** Illuminairy SAT plan funnel — `/satplan`  
**Audience:** Parent (often mom), cold Meta traffic, mobile-first, Instagram/Facebook in-app browser

---

## Assignment

Explore **two interaction variants** for the same content (SAT band + GPA band + retake count). Produce visual directions for **390×844** primary; note desktop behavior.

| Variant | Spec file |
|---------|-----------|
| **A — Progressive stack** | [screen-02-variant-a-progressive-stack.md](screen-02-variant-a-progressive-stack.md) |
| **B — Wizard + chips** | [screen-02-variant-b-wizard-chips.md](screen-02-variant-b-wizard-chips.md) |

Both variants share the **same shell**: Illuminairy quiz chrome (back, progress bar, step label, grayed Continue footer). Only the **body** differs.

---

## Brand and system (do not reinvent)

- **Font:** Plus Jakarta Sans (production site)
- **Colors:** Cream `#f3e8d2` unselected options; ink inverted selected (match Screen 01 worries tiles)
- **Column:** 360px max centered body
- **Touch:** 48px minimum row height
- **Voice:** Parent-friendly; no “cohort”; no SAT score guarantees
- **Reference layout rules:** [funnel-layout-rules.md](../funnel-layout-rules.md)
- **Screen 01 built reference:** worries multiselect at `?step=worries`

---

## States to mock (each variant)

1. **Initial** — first question only  
2. **Mid-flow** — after 1 answer (show difference between A and B clearly)  
3. **Mid-flow** — after 2 answers  
4. **Error recovery** — A: change visible selection; B: chip edit tapped, question reopened  
5. **Optional:** short viewport (~640px usable height) crop for IAB

---

## Deliverables back to product/engineering

- Side-by-side or labeled frames for A vs B at key states  
- Recommendation with rationale (conversion, clarity, brand fit)  
- Chip styling direction (Variant B only)  
- Motion notes (question ↔ chip transition) if any  
- Open questions for copy (headline vs question-only)

---

## Explicit anti-patterns (both variants)

- Fake scarcity (“spots left”)
- Score lift / testimonial insight on this intake screen
- 2×3 grids for five SAT options
- Enabled Continue on single-select
- “Chapter 1” language
- Booking/session headline on this diagnostic step

---

## After design review

Winning variant (or hybrid) gets merged into the canonical implementation spec and built in Illuminairy `components/sat-plan/`.
