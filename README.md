# Illuminairy SAT quiz funnel

Mobile-first assessment funnel prototype (Meta LP → qualify → value → book call). Separate from the main [illuminairy.com](https://illuminairy.com) Next.js site; will port to production after screen-by-screen sign-off.

## Quick start

```bash
cd prototype
python3 -m http.server 8765
```

Open **http://localhost:8765/Landing.html** (use port `8765` and `http://`, not `file://`).

| Step | URL |
|------|-----|
| Landing | `Landing.html` |
| Screen 1 — worries | `Landing.html?step=worries` |

## Repo layout

| Path | Purpose |
|------|---------|
| [`prototype/`](prototype/) | Runnable HTML + React (Babel) app — **source of truth for UI** |
| [`files/`](files/) | Layout rules, screen checklists, brand/funnel copy |
| [`specs/`](specs/) | PRD, SPEC, `ACTIVE.md`, Ralph plan |
| [`memory-bank/`](memory-bank/) | Session context for agents |
| [`PLAN-sat-funnel.md`](PLAN-sat-funnel.md) | Master plan + screen inventory |
| [`noomswipefiles/`](noomswipefiles/) | Local-only reference screenshots (gitignored) |

## Design system (prototype)

Reusable components — **screens only swap content in slots**:

| Component | File |
|-----------|------|
| `FunnelCta` | `prototype/funnel-cta.jsx` |
| `FunnelShell` | `prototype/funnel-shell.jsx` |
| `QuizStepTemplate` | `prototype/quiz-step-template.jsx` |
| `QuizTileGrid` | `prototype/quiz-tile-grid.jsx` |

Docs: [`files/quiz-step-template.md`](files/quiz-step-template.md), [`files/funnel-layout-rules.md`](files/funnel-layout-rules.md).

## Agents

Read [`AGENTS.md`](AGENTS.md) and [`memory-bank/activeContext.md`](memory-bank/activeContext.md) at session start.

## Screen status

| Screen | Status |
|--------|--------|
| 00 Landing | Approved |
| 01 Worries | In review |
| 02+ | Not built — see `PLAN-sat-funnel.md` |

## Related

- Production site repo: `illuminairy` (Zytech / illuminairy.com)
- Active spec: [`specs/ACTIVE.md`](specs/ACTIVE.md)
