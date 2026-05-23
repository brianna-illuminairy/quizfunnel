# Agent guide — quizfunnel (specs + copy)

**This repo does not ship the live funnel.** Production code is in the **Illuminairy** Next.js repo at **`/satplan`**.

## Source of truth

| Build here | Location |
|------------|----------|
| **Runnable funnel** | Illuminairy repo → `app/satplan/`, `components/sat-plan/`, `lib/sat-plan-funnel/` |
| **URL** | https://illuminairy.com/satplan (`?step=worries`, etc.) |
| **Local dev** | `npm run dev` in Illuminairy → http://localhost:3000/satplan |
| **Specs & screen checklists** | This repo (`files/`, `specs/`, `PLAN-sat-funnel.md`) |

## Do not use the Babel prototype

[`prototype/`](prototype/) is **deprecated** (unpkg React + in-browser Babel). See [`prototype/DEPRECATED.md`](prototype/DEPRECATED.md).

- **Do not** add new screens under `prototype/`.
- **Do not** point Meta ads or QA sign-off at `Landing.html` on port 8765.
- **Do not** treat “port to Next.js later” as the plan — production **is** Next.js.

## New quiz screen checklist

1. Implement in **Illuminairy** using `QuizStepTemplate` + body components (copy from `components/sat-plan/` patterns).
2. Add step to `lib/sat-plan-funnel/state.ts` + router in `components/sat-plan/sat-plan-funnel.tsx`.
3. Update copy checklist in `files/screens/screen-NN-….md` (this repo).
4. Update `memory-bank/activeContext.md` in **both** repos when done.

## Read first (this repo)

| Resource | When |
|----------|------|
| [`memory-bank/activeContext.md`](memory-bank/activeContext.md) | Screen status |
| [`files/quiz-step-template.md`](files/quiz-step-template.md) | Component slots (implemented in Illuminairy `components/sat-plan/`) |
| [`files/funnel-layout-rules.md`](files/funnel-layout-rules.md) | Layout rules → `app/satplan/funnel.css` |
| [`files/funnel-performance.md`](files/funnel-performance.md) | Lighthouse / IAB gates |
| [`PLAN-sat-funnel.md`](PLAN-sat-funnel.md) | Full screen map |

## Illuminairy golden rules (production)

Follow Illuminairy `AGENTS.md`: facts in `lib/site.ts`, no SAT guarantees, no tutor Calendly on public pages, `npm run agent:verify` before done.

## Owner

Brianna — `brianna@illuminairy.com`
