# Screen 02 — Variant B: Wizard + summary chips

> **⛔ DEPRECATED** — combo Screen 02 abandoned. Build [`screen-02-who.md`](screen-02-who.md) instead.

**Status:** Spec variant for design ideation (not built)  
**Label for design handoff:** **Variant B — Wizard + chips**  
**Compare with:** [screen-02-variant-a-progressive-stack.md](screen-02-variant-a-progressive-stack.md)

---

## One-line summary

One funnel step, three single-select groups. **Only one question visible at a time.** Each answer collapses to a **summary chip** at the top; answered question UI **disappears**. Chip **edit (✎)** rewinds to that question and re-walks forward. **Auto-advance** to next funnel step after the third tap. Grayed **Continue** throughout.

---

## Purpose

Same as Variant A: capture SAT band, GPA band, retake count for v4 Screen 6 branching. Same shared shell and brand constraints.

---

## Shared constraints (both variants)

| Rule | Value |
|------|--------|
| Funnel step id | `score-gpa-retakes` |
| Prior step | `worries` (multiselect + enabled Continue) |
| Next step | v4 Screen 4 — how they prepped (single select, auto-advance) |
| Section label | `WHY THEY SCORED LOW` |
| Step label | `QUESTION 2 OF 14` |
| Progress bar | ~14% for whole step |
| Shell | **`QuizStepTemplate`** → **`FunnelShell`** (same progress bar as all steps) |
| Footer CTA | **`FunnelCta`** — visible, **disabled (grayed)** entire step |
| Column | `funnel-quiz-body` max **360px**, centered |
| Option control | Full-width **stacked rows**, min **48px** height |
| Selection style | Cream unselected → ink selected (match worries) |
| No on this screen | Sliders, numeric input, “Chapter” copy, insight/education blocks, fake scarcity |
| Insight copy | **v4 Screen 6** interstitial only — not here |

---

## Body layout

```
┌─ QuizStepTemplate ─────────────────────────────┐
│  FunnelShell: back · progress · QUESTION 2/14  │
│  Headline (optional): Tell us about their scores│
│                                                │
│  ┌─ QuizCapturedChips ──────────────────────┐  │
│  │ [SAT 1100–1200 ✎] [GPA 3.8–4.0 ✎] …     │  │  ← grows as answers complete
│  └──────────────────────────────────────────┘  │
│                                                │
│  ┌─ ONE active question only ───────────────┐  │
│  │ What was their most recent SAT score?     │  │
│  │ [5 stacked rows]                          │  │
│  └──────────────────────────────────────────┘  │
│                                                │
│  FunnelCta (grayed Continue)                   │
└────────────────────────────────────────────────┘
```

**Key behavior:** After SAT tap → SAT chip appears, **Q1 UI removed**, Q2 GPA shown alone. Page height stays roughly **one question + chips**.

---

## Summary chips

| Prefix | Example label | When chip appears |
|--------|---------------|-------------------|
| SAT | `SAT 1100–1200` | After Q1 tap |
| GPA | `GPA 3.8–4.0` | After Q2 tap |
| Retakes | `Retakes · Twice` | Briefly after Q3 tap (optional flash before navigate) |

- Each chip includes **edit control** (✎ icon or “Edit” — design to define).
- Edit hit area ≥ **44px** including icon.
- Chips wrap on narrow widths; stay in **360px** column with options.
- Always use **domain prefix** — never bare numbers.

**Competitor reference:** Similar to `TARGET 1400+` / `CURRENT 1250–1400` pills in booking funnels — but **no** mid-screen insight box, **no** keeping old question blocks visible.

---

## Questions and options

Same copy and `id`s as Variant A:

### Q1 — SAT

**What was their most recent SAT score?**  
`sat_below_1000` · `sat_1000_1100` · `sat_1100_1200` · `sat_1200_1300` · `sat_1300_plus`

### Q2 — GPA

**What's their approximate GPA?**  
`gpa_below_3` · `gpa_3_3_5` · `gpa_3_5_3_8` · `gpa_3_8_4` · `gpa_4_plus`

### Q3 — Retakes

**How many times have they taken it?**  
`retakes_once` · `retakes_twice` · `retakes_three_plus`

---

## Interaction flow

### Forward

| Step | User action | System response |
|------|-------------|-----------------|
| 1 | Land | No chips. Q1 SAT active. |
| 2 | Tap SAT | SAT chip appears. Q1 UI **removed**. Q2 GPA active (~300ms transition). |
| 3 | Tap GPA | GPA chip appears. Q2 UI **removed**. Q3 retakes active. |
| 4 | Tap retakes | Patch state → **auto-advance** to Screen 4 (~300ms). No CTA tap. |

### Chip edit (rewind + re-walk)

Tap ✎ on a chip → go back to **that full question UI** (not inline edit), then come forward again on re-selection.

| Edit chip | Clear downstream | Re-show |
|-----------|------------------|---------|
| SAT | GPA + retakes chips & values | Q1 → Q2 → Q3 |
| GPA | retakes chip & value | Q2 → Q3 (SAT chip stays) |
| Retakes | retakes only | Q3 |

After re-select: same forward rules as first pass.

### Header Back

| At | Back goes to |
|----|--------------|
| Q1, no chips | `worries` |
| Q2 | Q1 (clear SAT chip if set — same as SAT edit) |
| Q3 | Q2 (clear GPA chip — same as GPA edit) |

---

## State

```ts
{
  activeQuestion: "sat" | "gpa" | "retakes";  // UI only
  satBand?: string;
  gpaBand?: string;
  retakeCount?: string;
}
```

---

## Design ideation notes

**Strengths to explore visually**

- One focal question — lower cognitive load; strong Meta IAB fit.
- Chips = “we captured this” progress without moving the top progress bar.
- Chip edit matches competitor booking flows moms may have seen.
- Shorter scroll — active options stay in thumb zone.

**Risks to design around**

- Chips must read clearly at a glance (prefix + range + edit affordance).
- Transition when question swaps → chip (motion, reduced-motion fallback).
- Three taps but bar still at 14% — chips carry micro-progress; design should make that feel intentional.
- Wrapping chips on 320–390px width.

**Reject from competitor refs (do not design into this screen)**

- “+75 points” insight box between chips and question
- “10 SPOTS LEFT” / fake scarcity
- “Reserve your session” booking headline on diagnostic step
- 2×3 grids for 5 SAT options (use stacked rows)

**Out of scope for visual exploration**

- Enabled Continue
- Target score chip (`TARGET 1400+`) — not in v4 Screen 3; future step if added

---

## QA targets

- [ ] Only **one** question block visible at a time (except during transition)
- [ ] Answered questions **not** visible as option lists — chips only
- [ ] Chip edit SAT from Q3 clears GPA + retakes and re-walks
- [ ] Retakes tap auto-advances
- [ ] Grayed Continue visible whole step
- [ ] 390×844 + IG/FB IAB

---

## Components (implementation hint)

| Piece | Notes |
|-------|--------|
| `QuizStepTemplate` | Unchanged shell |
| `QuizCapturedChips` | **New** — chip row + edit |
| `QuizOptionList` | **New** — single active group |

---

## Variant comparison (for designer)

| Dimension | Variant A — Stack | Variant B — Chips |
|-----------|-------------------|-------------------|
| Answered Q visible? | Yes, full blocks | No — chips only |
| Scroll on IAB | Grows with each Q | ~constant height |
| Correction | Tap another row in visible list | Chip edit → rewind |
| New UI pattern | None | Chip row + edit |
| Competitor similarity | Closer to cluttered multi-block ref | Closer to clean Step 2 ref |
