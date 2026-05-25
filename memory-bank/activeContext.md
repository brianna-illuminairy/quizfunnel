# Active context

*Last updated: 2026-05-25*

## Current focus

- **Master flow:** [`files/FUNNEL-MASTER-FLOW.md`](../files/FUNNEL-MASTER-FLOW.md) — one Q or one I per screen; insight immediately after triggering Q
- **Production spine (Illuminairy `/satplan`):** landing → … → INT8 → **score** → wrong → **INT12** → GPA → **INT2** → test-date → **INT6-timeline** → **plan-path** → contact → plan-ready → report → book *(schools Q removed May 2026)*
- **Removed (permanent):** `hours` study-time Q (2026-05-24). **INT13 kid-problem** (`int13-kid-problem` + `kid-problem`) removed 2026-05 — INT8 exit goes straight to **score**. **Do not reintroduce unless Brianna asks explicitly.**
- **INT8 quartet (all paths):** fail variant → proof → guided → mistake-driven. Slide 1 = `prep-failed-group-class` if `prep_class`, else `prep-failed-self-study` (incl. little/none, never-tested). `history_none` skips prep Q but still runs full INT8.

## Recent changes (2026-05-25)

- **INT2 `gpa-paradox`** — tutor-note layout (headline eyebrow, quote, In school / On the SAT cards, closing copy, Maya signature); **no 200+ stat banner**
- **Q7 `wrong`** (Illuminairy) — dashboard tile widgets (`ico-wrong-*`); spec in `screen-08-what-went-wrong.md`
- **INT12 `sat-changed`** — mockup layout (Digital headline, baseball subhead, two-panel contrast + stat rows); May 2026 art

## Recent changes (2026-05-24)

- **INT2** `gpa-paradox` — replaced marketer copy with v4 Screen 6A (“We see this all the time”, school vs SAT skills, 75s timing); eyebrow + split GPA/SAT card; optional expert video env
- **INT12** `sat-changed` — digital vs paper after wrong / never-tested INT8; **format contrast PNG live** (`digital-vs-paper-prep.png`, 1979 paper · digital Bluebook + Desmos, May 2026)
- **INT13 kid-problem** — **removed** from funnel (interstitial + tile Q); tested path goes INT8 → score
- **Girl triptych:** `prep-paths-triptych-daughter.png` when who = **daughter** or **Me** (`test_taker_self`); son/other → default strip
- **INT8 proof:** Bloom two-sigma sentence under “+{gap} more points with 1:1 tutoring” headline (above bar chart)
- **INT3 retake:** 2-bar chart + 3-paragraph copy (“new approach to the SAT, not just another retake”; CB ~40 pt avg; tutor 60–70s pacing)
- **Layout rules §4:** contrast visual map (triptych, bars, mentorship splash)

## Shipped in production (this sprint)

| Beat | Notes |
|------|--------|
| INT8 plateau | Triptych crop (home / crowd) + group-class copy |
| INT8 proof | Bloom lead + 3-bar chart (self / group / guided pts from `lib/site.ts`) |
| INT8 guided | Sequential diagnostic analysis animation (28 skills → filter → focus plan → 1180–1410 range) |
| Personalization | `test_taker` drives copy + contrast image variant |

## Next steps

- [ ] **INT9** why guided · **INT10** share with student · **INT5** weakness-first *(optional interstitials)*
- [ ] **Son/default triptych** — replace `prep-paths-triptych.png` with boy/neutral art (daughter strip is live)
- [ ] Optional: **680×510 dedicated panels** per contrast + flip `USE_DEDICATED_PREP_PATH_PANELS` in Illuminairy `prep-path-images.ts`
- [ ] **INT8 screen checklists** — sync [`files/screens/screen-int8-prep-class.md`](../files/screens/screen-int8-prep-class.md) with shipped copy
- [ ] **GPA question** — shipped (Screen 11)
- [ ] **Hours / score / wrong** — shipped
- [x] **INT2** GPA paradox — v4 tutor voice + GPA/SAT split graphic; video via `NEXT_PUBLIC_SATPLAN_INT2_VIDEO_URL` when ready
- [ ] **INT12** digital vs paper — shipped
- [x] **INT13** kid problem — **removed** from funnel (2026-05); do not reintroduce unless requested
- [ ] Meta IAB QA on INT8 trilogy path (390×844, no scroll)
- [ ] Fill Lighthouse baseline in `files/research/perf-baseline-2026-05-23.md`
- [ ] Contact → report → Calendly (Phase A tail per SPEC)

## Approved

- **Screen 00 — Landing** — flowing layout, score cards, CTA → worries

## Session notes

- Local dev: Illuminairy `npm run dev` → `/satplan?step=…`
- Verify Illuminairy changes: `FUNNEL_LAYOUT_UNLOCK=1 npm run agent:verify`
- Do not extend `prototype/` for new screens
