# Illuminairy SAT quiz funnel — specs & copy

**Live funnel:** [illuminairy.com/satplan](https://illuminairy.com/satplan) — built in the **Illuminairy** Next.js repo (`app/satplan/`, `components/sat-plan/`, `lib/sat-plan-funnel/`).

This repo holds **PRDs, screen checklists, layout rules, and the deprecated Babel sketch** — not production code.

## Quick start (production)

In the **Illuminairy** repo:

```bash
npm run dev
```

Open **http://localhost:3000/satplan** and deep-link steps, e.g. **http://localhost:3000/satplan?step=prep-failed-plateau**.

After deploy: **https://illuminairy.com/satplan**

## Legacy prototype (reference only)

```bash
cd prototype && python3 -m http.server 8765
```

Do **not** add new screens to the Babel prototype — build on `/satplan` in Next.js. See [`prototype/DEPRECATED.md`](prototype/DEPRECATED.md).

## Repo layout

| Path | Purpose |
|------|---------|
| [`files/`](files/) | Layout rules, screen checklists, contrast asset specs, master flow |
| [`specs/`](specs/) | PRD, SPEC, `ACTIVE.md`, Ralph plan |
| [`memory-bank/`](memory-bank/) | Session context for agents |
| [`PLAN-sat-funnel.md`](PLAN-sat-funnel.md) | Master plan + screen inventory |
| [`prototype/`](prototype/) | Deprecated Babel sketch |

Production components live in Illuminairy: `components/sat-plan/` (`QuizStepTemplate`, `ContrastBarChart`, `Int8PrepPathTriptych`, etc.). Docs: [`files/quiz-step-template.md`](files/quiz-step-template.md), [`files/funnel-layout-rules.md`](files/funnel-layout-rules.md), [`files/funnel-contrast-assets.md`](files/funnel-contrast-assets.md).

## Agents

Read [`AGENTS.md`](AGENTS.md) and [`memory-bank/activeContext.md`](memory-bank/activeContext.md) at session start.

## Production screen status (Illuminairy `/satplan`)

| Step | `?step=` | Status |
|------|----------|--------|
| Landing | *(none)* | ✅ |
| Worries | `worries` | ✅ |
| Who | `who` | ✅ |
| Target | `target` | ✅ |
| INT1 trust | `trust` | ✅ |
| Test history | `history` | ✅ |
| INT3 retake | `int3-retake` | ✅ (`history_twice` / `history_three_plus`) |
| Prep | `prep` | ✅ |
| INT8 quartet | group/self-study fail → proof → guided → mistake-driven | ✅ (all prep paths + never-tested) |
| INT8 mentors | `prep-failed-mentors` | ✅ (tap-through pairs) |
| INT8 guided | `prep-failed-guided` | ✅ |
| GPA | `gpa-stub` | ⬜ placeholder |
| Hours, score, wrong, INT2, INT6, contact, report | … | ⬜ not built |

Full spine map: [`files/FUNNEL-MASTER-FLOW.md`](files/FUNNEL-MASTER-FLOW.md).

## Related

- Production code: Illuminairy repo (`/satplan`)
- Active spec: [`specs/ACTIVE.md`](specs/ACTIVE.md) → [`specs/sat-quiz-funnel/SPEC.md`](specs/sat-quiz-funnel/SPEC.md)
