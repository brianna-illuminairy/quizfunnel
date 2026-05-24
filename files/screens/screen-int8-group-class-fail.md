# Screen — Why group SAT classes fail *(INT8 · prep_class · slide 1)*

**Status:** Shipped in production (Illuminairy `/satplan`)  
**Interstitial:** [`INT8`](../funnel-interstitials-noom-map.md) — education part **B**  
**Step:** `prep-failed-group-class`  
**Trigger:** `prep_class` in prep multiselect (first INT8 screen for group class)

## Job

Mom’s aha: **Group class moves everyone through the same curriculum** — but plateaued students (1100s–1200s) have **different recurring gaps** that never get fixed, so scores barely move.

## Copy checklist (production)

- [x] Headline: “Why group SAT classes rarely work for plateaued students”
- [x] Body (4 paragraphs — same pace, uneven gaps, recurring weaknesses, compounding)
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
