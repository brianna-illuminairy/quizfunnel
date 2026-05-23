# Illuminairy SAT quiz funnel — specs & copy

**Live funnel:** [illuminairy.com/satplan](https://illuminairy.com/satplan) — built in the **Illuminairy** Next.js repo (`app/satplan/`, `components/sat-plan/`).

This repo holds **PRDs, screen checklists, layout rules, and the deprecated Babel sketch** — not production code.

## Quick start (production — preferred)

In the **illuminairy** main repo:

```bash
npm run dev
```

Open **http://localhost:3000/satplan** (landing) and **http://localhost:3000/satplan?step=worries**.

Live path after deploy: **https://illuminairy.com/satplan**

## Legacy prototype (reference only)

```bash
cd prototype && python3 -m http.server 8765
```

Do not add new screens to the Babel prototype — build on `/satplan` in Next.js.

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
