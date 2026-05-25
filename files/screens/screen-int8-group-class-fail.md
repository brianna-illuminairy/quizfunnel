# Screen — Why group SAT classes fail *(INT8 · prep_class · slide 1)*

**Status:** Shipped in production (Illuminairy `/satplan`)  
**Interstitial:** [`INT8`](../funnel-interstitials-noom-map.md) — education part **B**  
**Step:** `prep-failed-group-class`  
**Trigger:** `prep_class` in prep multiselect (first INT8 screen for group class)

## Job

Mom’s aha: **Group class moves everyone through the same curriculum** — but for **this** goal, the pattern is a few recurring gaps that never get fixed, not weakness in every topic.

## Copy checklist (production)

- [x] Headline: “Why group SAT classes fail”
- [x] **Diagnosis opener** — `profilePatternLine` (prep + target) + pattern authority; no generic “1100s cohort” line ([`funnel-diagnosis-voice.md`](../funnel-diagnosis-voice.md))
- [x] Body (2 paragraphs): all 28 skills / same pace; recurring skill weaknesses; deep work on the 5 that move score (voice + `yourStudentPhrase`)
- [x] **Contrast image:** `prep-contrast-crowd-vs-guided.png` (daughter variant when test taker is daughter) via `Int8PrepContrastPair` pair `crowd`
- [x] CSS classroom graphic only if contrast PNG unavailable (fallback)

## Flow

| Prior | This screen | Next |
|-------|-------------|------|
| `prep` (with `prep_class`) | `prep-failed-group-class` | `prep-failed-proof` |

Self-study prep still uses `prep-failed-plateau` as INT8 slide 1.

## QA

- [ ] 390×844 Meta IAB — fits without scroll
- [ ] `/satplan?step=prep-failed-group-class`
- [ ] Back → `prep`; Continue → proof beat

## Dev URL

http://localhost:3000/satplan?step=prep-failed-group-class
