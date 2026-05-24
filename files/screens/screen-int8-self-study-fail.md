# Screen — Why self-study fails *(INT8 · self-study · slide 2)*

**Status:** Shipped in production (Illuminairy `/satplan`)  
**Interstitial:** [`INT8`](../funnel-interstitials-noom-map.md) — education part **B**  
**Step:** `prep-failed-self-study`  
**Trigger:** Self-study prep ids (YouTube, Khan, Bluebook, app, little/none) **without** `prep_class`

## Job

Mom’s aha: **They already studied hard** — but self-study doesn’t pinpoint the mistakes keeping scores stuck. Lots of effort on the wrong topics, little score movement.

## Copy checklist (production)

- [x] Headline: “Why self-study often stops working after a certain point”
- [x] Intro + effort list (YouTube, Bluebook, practice tests, Khan Academy)
- [x] Body: no mistake-level diagnosis; hours on strengths, not costliest gaps
- [x] Dashboard graphic: messy tiles, scattered topics, giant checklist, overwhelmed student
- [x] Overlay: “More studying ≠ targeted improvement”
- [x] Footer: “Lots of effort. Little score movement.”

## Flow

| Prior | This screen | Next |
|-------|-------------|------|
| `prep` (self-study only) | `prep-failed-self-study` | `prep-failed-proof` |

Group class prep uses `prep-failed-group-class` as slide 1 instead.

## QA

- [ ] 390×844 Meta IAB — fits without scroll
- [ ] `/satplan?step=prep-failed-self-study`
- [ ] Back → `prep`; Continue → proof beat

## Dev URL

http://localhost:3000/satplan?step=prep-failed-self-study
