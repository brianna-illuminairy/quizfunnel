# Active context

*Last updated: 2026-05-24*

## Current focus

- **Master flow:** [`files/FUNNEL-MASTER-FLOW.md`](../files/FUNNEL-MASTER-FLOW.md) — one Q or one I per screen; insight immediately after triggering Q
- **Production spine (Illuminairy `/satplan`):** landing → … → **wrong** → GPA → **INT2** → test-date → **INT6-timeline** → schools → **plan-path** → contact → plan-ready → report → book *(all real screens — 2026-05-24 overnight build)*
- **INT8 group-class trilogy** (`prep_class`): plateau → proof → **mentors** → guided → GPA *(exception to strict no I→I — four beats, one aha each)*
- **INT8 non-trilogy:** single `prep-failed-stub`; `history_none` skips prep → INT8 stub → GPA

## Recent changes (2026-05-24)

- **Contrast visuals:** `Int8PrepPathTriptych` uses `fill` + viewport caps (4:3 panel, no-scroll safe); spec in [`files/funnel-contrast-assets.md`](../files/funnel-contrast-assets.md)
- **Girl triptych:** `prep-paths-triptych-daughter.png` when who = **daughter** or **Me** (`test_taker_self`); son/other → default strip
- **INT8 proof:** Bloom two-sigma sentence under “+{gap} more points with 1:1 tutoring” headline (above bar chart)
- **INT3 retake:** 2-bar `ContrastBarChart` above copy
- **Mentorship beat:** `prep-failed-mentors` — Emerson/Thoreau, Jobs/Zuckerberg, Mays/MLK tap-through → reveal
- **Layout rules §4:** contrast visual map (triptych, bars, mentorship splash)

## Shipped in production (this sprint)

| Beat | Notes |
|------|--------|
| INT8 plateau | Triptych crop (home / crowd) + group-class copy |
| INT8 proof | Bloom lead + 3-bar chart (self / group / guided pts from `lib/site.ts`) |
| INT8 mentors | Interactive splash |
| INT8 guided | Tutor-plan copy (Bloom deduped from proof) |
| Personalization | `test_taker` drives copy + contrast image variant |

## Next steps

- [ ] **Son/default triptych** — replace `prep-paths-triptych.png` with boy/neutral art (daughter strip is live)
- [ ] Optional: **680×510 dedicated panels** per contrast + flip `USE_DEDICATED_PREP_PATH_PANELS` in Illuminairy `prep-path-images.ts`
- [ ] **INT8 screen checklists** — sync [`files/screens/screen-int8-prep-class.md`](../files/screens/screen-int8-prep-class.md) with shipped copy
- [ ] **GPA question** — replace `gpa-stub` with real Screen 11 + route to INT2
- [ ] **Hours / score / wrong** — Q steps per master flow
- [ ] **INT2** GPA paradox (visual + copy)
- [ ] **INT12** digital vs paper (planned split visual)
- [ ] Meta IAB QA on INT8 trilogy path (390×844, no scroll)
- [ ] Fill Lighthouse baseline in `files/research/perf-baseline-2026-05-23.md`
- [ ] Contact → report → Calendly (Phase A tail per SPEC)

## Approved

- **Screen 00 — Landing** — flowing layout, score cards, CTA → worries

## Session notes

- Local dev: Illuminairy `npm run dev` → `/satplan?step=…`
- Verify Illuminairy changes: `FUNNEL_LAYOUT_UNLOCK=1 npm run agent:verify`
- Do not extend `prototype/` for new screens
