# Screen 02 — Variant A: Progressive stack

> **⛔ DEPRECATED** — combo Screen 02 abandoned. Build [`screen-02-who.md`](screen-02-who.md) instead.

**Status:** Spec variant for design ideation (not built)  
**Label for design handoff:** **Variant A — Progressive stack**  
**Compare with:** [screen-02-variant-b-wizard-chips.md](screen-02-variant-b-wizard-chips.md)

---

## One-line summary

One funnel step, three single-select groups. Each answered group **stays visible** below the previous one (stacked on the page). Only the **next** group is revealed after each tap. Grayed **Continue** is not used — **auto-advance to the next funnel step** after the third tap.

---

## Purpose

Capture SAT band, GPA band, and retake count for downstream GPA–SAT gap interstitial (v4 Screen 6). Approximate bands only — no numeric typing.

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
│  Headline: Tell us about their scores          │
│  Hint (optional): Tap the closest range…      │
│                                                │
│  ┌─ Q1 SAT (always visible after answered) ─┐ │
│  │ What was their most recent SAT score?     │ │
│  │ [5 stacked rows — selected row in ink]    │ │
│  └───────────────────────────────────────────┘ │
│  gap 24px                                      │
│  ┌─ Q2 GPA (revealed after Q1 tap) ─────────┐ │
│  │ What's their approximate GPA?             │ │
│  │ [5 stacked rows]                          │ │
│  └───────────────────────────────────────────┘ │
│  gap 24px                                      │
│  ┌─ Q3 Retakes (revealed after Q2 tap) ─────┐ │
│  │ How many times have they taken it?        │ │
│  │ [3 stacked rows]                          │ │
│  └───────────────────────────────────────────┘ │
│                                                │
│  FunnelCta (grayed Continue)                   │
└────────────────────────────────────────────────┘
```

**Key behavior:** Answered questions **remain on screen** with their selected row highlighted. Page **grows downward** as groups unlock.

---

## Questions and options

### Q1 — SAT

**What was their most recent SAT score?**

| Label | `id` |
|-------|------|
| Below 1000 | `sat_below_1000` |
| 1000–1100 | `sat_1000_1100` |
| 1100–1200 | `sat_1100_1200` |
| 1200–1300 | `sat_1200_1300` |
| 1300+ | `sat_1300_plus` |

### Q2 — GPA

**What's their approximate GPA?**

| Label | `id` |
|-------|------|
| Below 3.0 | `gpa_below_3` |
| 3.0–3.5 | `gpa_3_3_5` |
| 3.5–3.8 | `gpa_3_5_3_8` |
| 3.8–4.0 | `gpa_3_8_4` |
| 4.0+ | `gpa_4_plus` |

### Q3 — Retakes

**How many times have they taken it?**

| Label | `id` |
|-------|------|
| Once | `retakes_once` |
| Twice | `retakes_twice` |
| Three or more | `retakes_three_plus` |

---

## Interaction flow

| Step | User action | System response |
|------|-------------|-----------------|
| 1 | Land on screen | Q1 SAT only visible (5 rows). Grayed Continue. |
| 2 | Tap SAT band | Q1 stays visible, selected row in ink. Q2 GPA **reveals** below. |
| 3 | Tap GPA band | Q1 + Q2 visible with selections. Q3 retakes **reveals** below. |
| 4 | Tap retake count | Patch state → **auto-advance** to Screen 4 (~300ms). No CTA tap. |

### Changing an answer

- Tap a **different row** in a group that is still visible → updates selection in place.
- No summary chips. No collapse.

### Header Back

- Single action: return to **`worries`** with all three answers preserved if already set.

### Scroll

- Optional `scrollIntoView` when Q2/Q3 reveal so the new group sits in the thumb zone (important on Meta IAB ~640px usable height).

---

## State

```ts
{
  satBand?: string;
  gpaBand?: string;
  retakeCount?: string;
}
```

---

## Design ideation notes

**Strengths to explore visually**

- Mom sees her full “mini form” building — all prior answers still readable.
- Simple mental model: one scrollable page, no chip component needed.
- Correction = tap another row in the visible list (no edit affordance).

**Risks to design around**

- On **390×844 IAB**, Q1 + Q2 + partial Q3 can push active options toward the bottom.
- Visual noise when three question blocks + labels stack (similar to competitor screenshot showing multiple blocks).
- Progress bar static for three taps — may feel “stuck” without another progress signal.

**Out of scope for visual exploration**

- 2×3 tile grids for 5 options
- Insight / testimonial callout on this screen
- Enabled Continue button

---

## QA targets

- [ ] Q1 only on load; Q2 appears after SAT; Q3 after GPA
- [ ] Answered groups stay visible with ink selection
- [ ] Retakes tap auto-advances (no CTA)
- [ ] Grayed Continue visible whole step
- [ ] 390×844 + IG/FB IAB — active question reachable without excessive scroll

---

## Components (implementation hint)

| Piece | Notes |
|-------|--------|
| `QuizStepTemplate` | Unchanged shell |
| `QuizOptionList` | One instance per visible group, or one list with sections |
| New? | No chip component |
