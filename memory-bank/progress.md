# Progress — SAT quiz funnel

*Illuminairy `/satplan` = production. This repo = specs + copy.*

## Build queue (reactive spine)

See [`files/FUNNEL-MASTER-FLOW.md`](../files/FUNNEL-MASTER-FLOW.md). Routing source of truth: Illuminairy `lib/sat-plan-funnel/funnel-routing.ts`.

| Seq | Type | Step | `?step=` | Status |
|-----|------|------|----------|--------|
| — | LP | Landing | *(none)* | ✅ |
| 1 | Q | Worries | `worries` | ✅ |
| 2 | Q | Who | `who` | ✅ |
| 3 | Q | Target | `target` | ✅ |
| 4 | I | INT1 trust | `trust` | ✅ |
| 5 | Q | History | `history` | ✅ |
| — | I | INT3 retake | `int3-retake` | ✅ (twice / 3+ only) |
| 6 | Q | Prep | `prep` | ✅ (skipped when `history_none`) |
| 7–10 | I | INT8 quartet | `prep-failed-*` | ✅ see below |
| 11 | Q | Score | `score` | ✅ (tested path) |
| 12 | Q | Wrong | `wrong` | ✅ tiles + icons |
| 13 | I | INT12 digital SAT | `sat-changed` | ✅ |
| 14 | Q | GPA | `gpa` | ✅ |
| 15 | I | INT2 GPA paradox | `gpa-paradox` | ✅ tutor-note layout |
| 16 | Q | Test date | `test-date` | ✅ |
| 17 | I | INT6 timeline | `timeline` | ✅ |
| 18 | Q | Schools | `schools` | ✅ optional skip — may remove from spine |
| 19 | I | Plan path | `plan-path` | ✅ |
| 20 | — | Contact | `contact` | ✅ UI — ⬜ lead API |
| 21 | I | Plan ready | `plan-ready` | ✅ |
| 22 | — | Report | `report` | ✅ on-screen |
| 23 | — | Book | `book` | ✅ Calendly |

## INT8 detail (shipped)

| Step | `?step=` | In live routing |
|------|----------|-----------------|
| Group class fail | `prep-failed-group-class` | ✅ if `prep_class` |
| Self-study fail | `prep-failed-self-study` | ✅ otherwise |
| Proof + bars | `prep-failed-proof` | ✅ |
| Famous mentors | `prep-failed-mentors` | ⬜ component exists; **not routed** |
| Guided plan | `prep-failed-guided` | ✅ |
| Mistake-driven | `prep-failed-mistake-driven` | ✅ |

**Assets:** `public/satplan/int8/prep-paths-triptych-daughter.png` (daughter + Me); default strip for son/other.

## Infrastructure

| Item | Status |
|------|--------|
| Production `/satplan` (Illuminairy Next.js) | ✅ Phase A spine |
| `QuizStepTemplate` + sat-plan components | ✅ Illuminairy |
| `ContrastBarChart`, triptych, diagnostic animation | ✅ |
| Layout + contrast asset docs | ✅ |
| Babel `prototype/` | ⛔ Deprecated |
| `POST /api/funnel/lead` + Supabase + Klaviyo | ⬜ Phase B |
| TCPA on contact | ⬜ Phase B |
| Calendly webhook | ⬜ Phase B |

## Docs

| Doc | Status |
|-----|--------|
| PRD + SPEC | 🔄 Phase A synced 2026-05-25; Phase B open |
| `files/funnel-layout-rules.md` | ✅ §4 contrast map |
| `files/funnel-contrast-assets.md` | ✅ |
| `files/screens/screen-08-what-went-wrong.md` | ✅ |
| `files/screens/screen-int2-gpa-paradox.md` | ✅ |
| `files/screens/screen-07-sat-changed.md` | ✅ |
| `files/screens/screen-int8-prep-class.md` | 🔄 partial sync with production |
| Per-screen 00–05 + INT1/INT3/INT6 | ✅ checklists exist |
| `screen-09-kid-problem.md` | ⛔ deprecated — INT13 removed |
