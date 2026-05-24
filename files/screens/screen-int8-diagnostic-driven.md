# Screen — Why diagnostic-driven prep works *(INT8 · slide 3)*

**Status:** Shipped in production (Illuminairy `/satplan`)  
**Interstitial:** [`INT8`](../funnel-interstitials-noom-map.md) — education part **C**  
**Step:** `prep-failed-guided`  
**Trigger:** After `prep-failed-proof` in INT8 trilogy (group class or self-study prep)

## Job

Mom’s aha: **Targeted beats broad review** — diagnose exact question types, rank by score impact, build a plan around the highest-leverage skills.

## Copy checklist (production)

- [x] Headline (inline, same size): “Here's what works better.” (ink) + “We focus on what moves the score fastest.” (tomato)
- [x] Intro: 28 skill areas — focus on what raises score fastest (voice-specific)
- [x] Body: full diagnostic → rank weaknesses → focus on fastest score movers
- [x] Graphic left: SAT topic map (Functions, Boundaries, Ratios highlighted with point losses)
- [x] Graphic right: Personalized Score Plan (Functions, Boundaries, Ratios, Probability)
- [x] Bottom: illustrative score progression 1100 → 1240 → 1360

## Flow

| Prior | This screen | Next |
|-------|-------------|------|
| `prep-failed-proof` | `prep-failed-guided` | `prep-failed-mistake-driven` |

## QA

- [ ] 390×844 Meta IAB — fits without scroll
- [ ] `/satplan?step=prep-failed-guided`
- [ ] Back → proof; Continue → intake continues

## Dev URL

http://localhost:3000/satplan?step=prep-failed-guided
