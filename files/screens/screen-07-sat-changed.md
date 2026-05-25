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

### Headline (h1 — no separate eyebrow)
- [x] “The SAT is **Digital.**” — accent on **Digital.** (tomato); rest ink

### Subhead (below headline, in body)
- [x] “You wouldn't train for a baseball game on a football field. **So why prep for a digital test on paper?**”

### Format contrast (two panels + year badges)
- [x] Left: `sat-paper-1979.png` · badge **SAT · 1979** (ink)
- [x] Right: `sat-digital-2026.png` · badge **SAT · 2026** (tomato)

### Stat rows (below images)
- [x] **01 THE PRESSURE** — **53%** · of students **feel rushed or run out of time on SAT Math.**
- [x] **02 THE HIDDEN EDGE** — **75s → 15s** · Math problems that take over a minute by hand **can be solved in under 15 seconds using the built-in calculator.**
- [x] **03 WHAT IT'S WORTH** — **50+ pts** · **Leaving just 4 Math questions unanswered** can lower an SAT score by 50+ points.

### Closing
- [x] “We train students on the same digital interface tools, like the **Desmos calculator**, they need to answer **faster and more accurately on test day.**”

### Personalization (`prep_*` from Step 5 — show one line when match)

| `prep_*` | Extra line |
|----------|------------|
| `prep_class` | Many classes still run paper drills; test day is on a laptop. |
| `prep_khan` / `prep_app` / `prep_youtube` | *(no extra line — removed May 2026)* |
| `prep_class` + low score | *(stronger INT8 tie-in optional)* |

### Footnote (required on screen or next beat)
- [x] College Board Desmos/formula footnote — **removed May 2026** (no on-screen citation)
- [ ] **1.5× / speed claim** — source TBD; align with [`danielle_sat_report_v2.jsx`](../danielle_sat_report_v2.jsx) (30–40%) before prod headline.

### CTA
- [ ] **Continue** / **Got it** — single tap, no new input (`QuizStepTemplate` insight pattern)

---

## UI / layout

- [x] Noom-style **education interstitial** — headline + subhead + **two-panel** `Int12FormatContrast` (1979 / 2026 badges) + **stat rows** + closing line
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
