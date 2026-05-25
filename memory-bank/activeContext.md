# Active context

*Last updated: 2026-05-25*

## Current focus

- **Phase A UI:** Full spine through **book** is wired in Illuminairy `/satplan`. Next priority is **Phase B** (lead capture API, TCPA, CRM) and **QA** (Meta IAB, Lighthouse).
- **Master flow:** [`files/FUNNEL-MASTER-FLOW.md`](../files/FUNNEL-MASTER-FLOW.md) — one Q or one I per screen; insight immediately after triggering Q.
- **Production spine (tested path):** landing → worries → who → target → INT1 → history → [INT3] → prep → **INT8 quartet** → score → wrong → **INT12** → GPA → **INT2** → test-date → **INT6-timeline** → schools *(optional skip)* → **plan-path** → contact → plan-ready → report → book.
- **Never-tested:** INT8 → **INT12** → GPA → … *(skips prep, score, wrong)*.

## Removed (permanent)

| Item | Date | Notes |
|------|------|-------|
| `hours` study-time Q | 2026-05-24 | Do not reintroduce |
| INT13 kid-problem | 2026-05 | `int13-kid-problem` + `kid-problem` step removed; INT8 exit → score or sat-changed |

## INT8 (all prep paths)

Slide 1 = `prep-failed-group-class` if `prep_class`, else `prep-failed-self-study` (incl. little/none, never-tested). Then proof → guided → mistake-driven. **`prep-failed-mentors` exists in types but is not in live routing** (proof → guided). `history_none` skips prep Q but still runs full INT8.

**Personalization:** Girl triptych when who = **daughter** or **Me** (`test_taker_self`); son/other → default strip.

## Recent changes (2026-05-25)

- **Diagnosis voice (full funnel)** — `diagnosis-copy.ts` + `prep-labels.ts` in Illuminairy; mirror intake / profile / pattern openers on INT1, INT8, INT2, INT3, INT6, INT12, report; spec [`files/funnel-diagnosis-voice.md`](files/funnel-diagnosis-voice.md)
- **INT2 `gpa-paradox`** — tutor-note layout (headline eyebrow, quote, In school / On the SAT cards, closing copy, Maya signature); **no 200+ stat banner**
- **Q wrong** — dashboard tile widgets (`ico-wrong-*`); spec [`files/screens/screen-08-what-went-wrong.md`](../files/screens/screen-08-what-went-wrong.md)
- **INT12 `sat-changed`** — mockup layout (Digital headline, baseball subhead, two-panel contrast + stat rows); May 2026 art
- **Docs sync** — README, memory-bank, SPEC, ACTIVE aligned with shipped Illuminairy routing

## Recent changes (2026-05-24)

- INT8 proof: Bloom two-sigma sentence + 3-bar chart from `lib/site.ts`
- INT8 guided: sequential diagnostic animation (28 skills → filter → focus plan)
- INT3 retake: 2-bar chart + v4 copy
- Layout rules §4: contrast visual map

## Shipped in production (Phase A)

| Area | Notes |
|------|--------|
| Intake Qs | worries through test-date, score, wrong, GPA, schools |
| Interstitials | INT1, INT3, INT8 quartet, INT12, INT2, INT6 timeline, plan-path, plan-ready |
| Tail | contact (form UI), report (snapshot), book (Calendly link) |
| Routing | `lib/sat-plan-funnel/funnel-routing.ts` + `?step=` deep links |

## Next steps

- [ ] **Phase B** — `POST /api/funnel/lead`, Supabase upsert, Klaviyo `onFunnelContactSubmitted`, Calendly webhook
- [ ] **Contact** — TCPA SMS consent + privacy link (SPEC requirement)
- [ ] **Schools step** — product may remove from spine (timeline → plan-path); routing still includes optional skip today
- [ ] **Son/default triptych** — replace `prep-paths-triptych.png` with boy/neutral art (daughter strip live)
- [ ] Optional interstitials: **INT9** why guided · **INT10** share with student · **INT5** weakness-first
- [ ] **INT8 screen checklists** — sync [`files/screens/screen-int8-prep-class.md`](../files/screens/screen-int8-prep-class.md) with shipped copy
- [ ] Meta IAB QA on full path (390×844, no scroll)
- [ ] Lighthouse baseline in `files/research/perf-baseline-2026-05-23.md`
- [ ] Dedicated 680×510 contrast panels + `USE_DEDICATED_PREP_PATH_PANELS` in Illuminairy `prep-path-images.ts`

## Session notes

- Local dev: Illuminairy `npm run dev` → `/satplan?step=…`
- Verify: `FUNNEL_LAYOUT_UNLOCK=1 npm run agent:verify`
- Do not extend `prototype/` for new screens
- INT2 video (optional): `NEXT_PUBLIC_SATPLAN_INT2_VIDEO_URL`
