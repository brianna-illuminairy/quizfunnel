# Progress — SAT quiz funnel

*Illuminairy `/satplan` = production. This repo = specs + copy.*

## Build queue (reactive spine)

See [`files/FUNNEL-MASTER-FLOW.md`](../files/FUNNEL-MASTER-FLOW.md).

| Seq | Type | Step | Status |
|-----|------|------|--------|
| — | LP | Landing | ✅ |
| 1 | Q | Worries | ✅ |
| 2 | Q | Who | ✅ |
| 3 | Q | Target | ✅ |
| 4 | I | INT1 trust | ✅ |
| 5 | Q | History | ✅ |
| — | I | INT3 retake | ✅ (twice+) |
| 6 | Q | Prep | ✅ |
| 7 | I | INT8 | ✅ (stub + 4-beat trilogy for `prep_class`) |
| 8 | Q | GPA | ✅ |
| 9 | Q | score, wrong | ✅ (tested path) |
| 10 | Q | test-date | ✅ |
| — | Q/I stubs | wrong, INT2, INT6×2, schools, contact, report, book | 🔄 placeholders (E2E wired) |

## INT8 detail (shipped 2026-05-24)

| Step | `?step=` | Status |
|------|----------|--------|
| Stub (self-study / single beat) | `prep-failed-stub` | ✅ |
| Plateau + triptych | `prep-failed-plateau` | ✅ |
| Proof + Bloom + bars | `prep-failed-proof` | ✅ |
| Famous mentors | `prep-failed-mentors` | ✅ |
| Guided plan | `prep-failed-guided` | ✅ |

**Assets:** `public/satplan/int8/prep-paths-triptych-daughter.png` (daughter + Me); default strip for son/other.

## Infrastructure

| Item | Status |
|------|--------|
| Production `/satplan` (Illuminairy Next.js) | ✅ spine through INT8 |
| `QuizStepTemplate` + sat-plan components | ✅ Illuminairy |
| `ContrastBarChart`, triptych, mentorship splash | ✅ |
| Layout + contrast asset docs | ✅ |
| Babel `prototype/` | ⛔ Deprecated |
| Supabase leads + contact/report/book | ⬜ Phase B |

## Docs

| Doc | Status |
|-----|--------|
| PRD + SPEC | ✅ — needs Phase A checklist sync (done 2026-05-24) |
| `files/funnel-layout-rules.md` | ✅ §4 contrast map |
| `files/funnel-contrast-assets.md` | ✅ |
| `files/screens/screen-int8-prep-class.md` | 🔄 partial sync with production |
| Per-screen 00–05 + INT1/INT3 | ✅ checklists exist |
