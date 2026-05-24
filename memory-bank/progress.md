# Progress — SAT quiz funnel prototype

## Build queue (co-mixed seq order)

See [`files/FUNNEL-MASTER-FLOW.md`](../files/FUNNEL-MASTER-FLOW.md) for full spine.

| Seq | Type | Beat | Status |
|-----|------|------|--------|
| 1 | Q | Worries | ✅ |
| 2 | Q | Who | ✅ |
| 3 | Q | Target | ✅ |
| 4 | I | INT1 trust | ⬜ next |
| 5+ | Q/I | … per master flow | ⬜ |

**MVP shortcut:** still co-mixed — INT1 early, INT8 after prep (tested), INT6 before contact.

## Infrastructure

| Item | Status |
|------|--------|
| **Production `/satplan` (Illuminairy Next.js)** | ✅ Landing + worries |
| `QuizStepTemplate` + components in `components/sat-plan/` | ✅ (main repo) |
| Layout rules + component docs | ✅ |
| GitHub repo (this repo = specs) | ✅ |
| Babel `prototype/` | ⛔ Deprecated — do not extend |
| Supabase leads + full spine | ⬜ Phase B |

## Docs

| Doc | Status |
|-----|--------|
| PRD + SPEC in `specs/sat-quiz-funnel/` | ✅ |
| `files/funnel-layout-rules.md` | ✅ |
| `files/quiz-step-template.md` | ✅ |
| Per-screen checklists `files/screens/` | ✅ 00–03; **INT1** spec ready |
