# Screen 07 — The SAT changed *(INT12)*

**Status:** In build (Illuminairy)  
**Stable step id:** `sat-changed` → `/satplan?step=sat-changed`  
**Interstitial:** [`INT12`](../funnel-interstitials-noom-map.md) — education part **B** (why prior prep failed)  
**Education tag:** `B` + aha row **“She trained on the wrong format”**

## Job (one aha + one data anchor)

| Mom’s aha | Data that earns it |
|-----------|-------------------|
| **“She trained on the wrong format.”** | SAT is **fully digital** (laptop); built-in **graphing calculator** + **formula reference**; students who train on-screen solve many math items **~1.5× faster** than paper-only practice *(footnote — verify vs 30–40% in report draft)* |

**Not:** A flex about Illuminairy. **Yes:** Diagnose why paper prep books, classroom drills, and never opening Desmos leave smart kids disadvantaged on test day.

**Bridge from prior beat (INT8):** “And there’s a second problem most families miss — the test itself changed.”

---

## Copy checklist

### Eyebrow
- [ ] **DID YOU KNOW** (small caps, sans)

### Headline
- [ ] “The SAT is **fully digital** now — taken on a **laptop**, not with pencil and paper.”

### Body (short — 2–3 sentences max)
- [ ] Every math question includes a **built-in graphing calculator** (Desmos) and a **formula reference sheet** — no bringing your own.
- [ ] Students who **practice with the on-screen tools** are much faster on math than students who only drill on paper. *(~1.5× — footnote)*
- [ ] Strong math students often skip the calculator because they “don’t need it” — but **can do it** and **can do it in 75 seconds** are different skills.

### Signature analogy (required)
- [ ] “You wouldn’t train for a **baseball** game on a **football field.**”
- [ ] “Don’t train for a **digital** test with **pencil, paper, and a prep book from 2019.**”

### Personalization (`prep_*` from Step 5 — show one line when match)

| `prep_*` | Extra line |
|----------|------------|
| `prep_books` | Paper practice tests don’t teach scrolling, highlighting, or Desmos. |
| `prep_class` | Many classes still run paper drills; test day is on a laptop. |
| `prep_khan` / `prep_app_other` | Apps help — but if {subject} never trains **timed digital reps**, test day still feels foreign. |
| `prep_class` + low score | *(stronger INT8 tie-in optional)* |

### Footnote (required on screen or next beat)
- [ ] College Board: Digital SAT format, embedded Desmos, formula sheet — factual.
- [ ] **1.5× / speed claim** — source TBD; align with [`danielle_sat_report_v2.jsx`](../danielle_sat_report_v2.jsx) (30–40%) before prod headline.

### CTA
- [ ] **Continue** / **Got it** — single tap, no new input (`QuizStepTemplate` insight pattern)

---

## UI / layout

- [ ] Noom-style **education interstitial** — centered copy, optional split visual (laptop SAT UI vs pencil + book)
- [ ] Progress chapter: **CHAPTER 2 · WHY PRIOR PREP STALLED** (or 2-chapter collapse: “Why the score happened”)
- [ ] `education_part: b` + `interstitial_id: int12_digital` analytics
- [ ] Feature flag: `ch1_digital_format`

---

## Build location (Illuminairy)

| Piece | Path |
|-------|------|
| Step route | `app/satplan/` + `?step=sat-changed` |
| Body component | `components/sat-plan/` — e.g. `sat-changed-step.tsx` |
| Router | `components/sat-plan/sat-plan-funnel.tsx` |
| State / order | `lib/sat-plan-funnel/state.ts` — after INT8 or early Act 3 |
| CSS | `app/satplan/funnel.css` |

---

## QA

- [ ] Reads correctly for `test_taker_self` (you/your, not daughter)
- [ ] No SAT score guarantees
- [ ] No competitor brand names
- [ ] Mom can repeat aha in one sentence after screen
- [ ] Pairs with INT8 — doesn’t repeat generic-class copy verbatim

---

## Related beats (same curriculum — build order TBD)

| Screen | Title | Aha | INT |
|--------|-------|-----|-----|
| **07** | **The SAT changed** | Wrong format | **INT12** |
| — | GPA gap | Not ability | INT2 |
| — | Generic prep / 2-sigma | Wrong tool | INT8, INT9 |
| — | Retake reality | Retake alone stalls | INT3 |
| — | Weakness-first | Hours ≠ gains | INT5 |

See full aha ↔ data table in [`funnel-interstitials-noom-map.md`](../funnel-interstitials-noom-map.md).
