# Screen — Why diagnostic-driven prep works *(INT8 · slide 3)*

**Status:** Shipped in production (Illuminairy `/satplan`) — **sequential analysis animation (2026-05)**  
**Interstitial:** [`INT8`](../funnel-interstitials-noom-map.md) — education part **C**  
**Step:** `prep-failed-guided`  
**Trigger:** After `prep-failed-proof` in INT8 trilogy (group class or self-study prep)

## Job

Mom’s aha: **Targeted beats broad review** — diagnose exact question types, rank by score impact, build a plan around the highest-leverage skills.

## Copy checklist (production)

- [x] Headline: “What actually works”
- [x] Intro (`quiz-step-copy`, full column width — same as Bloom proof body): diagnostic-driven plan — diagnoses skill gaps, builds personalized plan — voice-specific his/her/your/their
- [x] **One continuous animated graphic** (no body paragraphs) — calm, computational pacing
- [x] **State 1 — Diagnosing:** “Diagnosing SAT skill performance…” + “28 SAT skill areas evaluated”; scrolling skill list; tags STRONG / DEVELOPING / HIGH IMPACT / LOW IMPACT
- [x] **State 2 — Filtering:** ranked list **slots in one-by-one** with illustrative **+XX pts** per skill (attack order)
- [x] **State 3 — Building:** “Building personalized plan…”; skills highlight; score range climbs; **week blocks Wk 2–3, 4–5, 6–7, 8–9, 10–11** activate in sync; timeline caption “12-week personalized plan”
- [x] **Final — Ready:** “12 Week SAT Improvement Plan is ready.” + summary line + prioritized list + score range + progress viz
- [x] `prefers-reduced-motion`: static final state

## Implementation (Illuminairy)

| Piece | Path |
|-------|------|
| Copy + skills | `lib/sat-plan-funnel/int8-diagnostic-driven-copy.ts` |
| Graphic | `components/sat-plan/int8-diagnostic-analysis-graphic.tsx` |
| Body | `components/sat-plan/int8-diagnostic-driven-body.tsx` |
| CSS | `app/satplan/funnel.css` (`.int8-diagnostic-analysis*`) |

## Flow

| Prior | This screen | Next |
|-------|-------------|------|
| `prep-failed-proof` | `prep-failed-guided` | `prep-failed-mistake-driven` |

## QA

- [ ] 390×844 Meta IAB — fits without scroll; Continue visible on first paint
- [ ] Animation ~15s full loop; no bounce/zoom; tags readable on mobile
- [ ] `/satplan?step=prep-failed-guided`
- [ ] Back → proof; Continue → mistake-driven

## Dev URL

http://localhost:3000/satplan?step=prep-failed-guided
