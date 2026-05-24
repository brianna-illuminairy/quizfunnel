# Screen — Smart kid / GPA paradox *(INT2)*

**Status:** Spec draft  
**Placement:** **Next screen immediately after** `gpa` Q — not after score+wrong batch  
**Interstitial:** [`INT2`](../funnel-interstitials-noom-map.md) — education part **A**  
**Stable step id:** `gpa-paradox`

## Trigger

Always follows **GPA** on tested path. Never-tested path may use lighter **INT7** high-ceiling variant after GPA.

## Job (one screen, one aha)

Why **smart kids with strong GPAs** often **underperform on the SAT** relative to classroom performance — GPA measures different skills than Digital SAT timing / format.

## Copy checklist

- [x] References **their** GPA band from intake (`int2-gpa-paradox-copy.ts`)
- [x] If high GPA + low SAT trigger: full **GPA–SAT gap** beat (v4 Screen 6A voice)
- [x] If trigger false: shorter “grades ≠ SAT score” beat — still one screen
- [x] Eyebrow: **Why smart kids score low on the SAT** + GPA/SAT split graphic
- [ ] Expert video: set `NEXT_PUBLIC_SATPLAN_INT2_VIDEO_URL` + poster at `public/satplan/int2/expert-video-poster.jpg`
- [x] College Board grade–test footnote via `satGpaSatResearch` in `lib/site.ts`
- [x] No score guarantees; no “skills gap we can map” marketer lines
- [x] Single Continue → **test-date** Q

## QA

- [ ] Never stacked after other insights without a Q between
- [ ] Does not duplicate full INT7 profile label (that’s optional elsewhere)
