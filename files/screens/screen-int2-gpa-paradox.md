# Screen — Smart kid / GPA paradox *(INT2)*

**Status:** Shipped in production (Illuminairy `/satplan`) — **tutor-note layout May 2026**  
**Placement:** Immediately after `gpa` Q  
**Interstitial:** [`INT2`](../funnel-interstitials-noom-map.md) — education part **A**  
**Stable step id:** `gpa-paradox`

## Job

Explain why **high-GPA students** often **underperform on the SAT** — school skills vs timed digital test skills.

## Copy checklist (production)

- [x] Eyebrow: “A note from our head tutor” (orange mark)
- [x] Tutor note blockquote (left accent): pattern line + habits quote in one block
- [x] Compare cards: **In school** (depth) vs **On the SAT** (speed)
- [x] Insight section (boxed): knowledge vs speed & stamina + trainable skills (single block)
- [x] Tutor signature: Maya Reinhart · Head tutor · Illuminairy (photo placeholder until asset)
- [x] **No** 200+ stat banner / intake footnote on this screen
- [x] Single Continue → **test-date**

## Implementation (Illuminairy)

| Piece | Path |
|-------|------|
| Copy | `lib/sat-plan-funnel/int2-gpa-paradox-copy.ts` |
| Headline | `components/sat-plan/int2-gpa-paradox-headline.tsx` |
| Body | `components/sat-plan/int2-gpa-paradox-body.tsx` |
| Compare cards | `components/sat-plan/int2-gpa-paradox-compare.tsx` |
| Rich copy | `components/sat-plan/int2-rich-copy.tsx` |
| Step | `components/sat-plan/sat-plan-int2-gpa-paradox.tsx` |
| CSS | `app/satplan/funnel.css` (`.int2-gpa-paradox*`, scroll/sticky footer) |

## QA

- [ ] 390×844 — readable; Continue sticky at bottom when scrolling
- [ ] `/satplan?step=gpa-paradox`
- [ ] No SAT score guarantees; no 200+ outcomes block

## Dev URL

http://localhost:3000/satplan?step=gpa-paradox
