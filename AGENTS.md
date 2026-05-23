# Agent guide — quizfunnel

Instructions for AI assistants working in **this repository** (SAT quiz funnel prototype). Not the main Illuminairy Next.js site.

## What this repo is

- **Prototype:** static HTML + React 18 (UMD + Babel) in [`prototype/`](prototype/)
- **Product:** parent-facing SAT assessment funnel for Meta traffic → book a call (no Stripe in v1)
- **Process:** one screen at a time; Brianna approves before the next screen ships

## Read first

| Resource | When |
|----------|------|
| [`memory-bank/activeContext.md`](memory-bank/activeContext.md) | Current focus, screen status |
| [`memory-bank/progress.md`](memory-bank/progress.md) | Done / backlog |
| [`specs/ACTIVE.md`](specs/ACTIVE.md) | Active spec path |
| [`files/funnel-layout-rules.md`](files/funnel-layout-rules.md) | Non-negotiable layout (CTA, column, safe areas) |
| [`files/quiz-step-template.md`](files/quiz-step-template.md) | Reusable components — **use for every new quiz step** |
| [`PLAN-sat-funnel.md`](PLAN-sat-funnel.md) | Full screen list + hypotheses |

## Golden rules

1. **Reusable shell** — New quiz screens use `QuizStepTemplate` + body components (`QuizTileGrid`, etc.). Do **not** call `FunnelShell` from `screens/*`.
2. **One primary CTA** — Use `FunnelCta` on landing and quiz steps (same `.cta` styles).
3. **Layout in one place** — Shell, scroll, sticky footer, column width live in `prototype/styles.css` + layout rules doc. Screens change copy and body UI only.
4. **No SAT score guarantees** — Follow [`files/illuminairy_brand_kit_brief.md`](files/illuminairy_brand_kit_brief.md).
5. **Design for 390×844** — QA Instagram/Facebook in-app browser on a real device before calling a screen done ([`files/research/meta-in-app-browser-qa.md`](files/research/meta-in-app-browser-qa.md)).
6. **Local dev** — `cd prototype && python3 -m http.server 8765` → `http://localhost:8765/Landing.html`.

## New quiz screen checklist

1. Add step to `prototype/funnel-state.js` (`STEPS` progress + label).
2. Create `prototype/screens/your-step.jsx` with `QuizStepTemplate` (headline, hint, body only).
3. Wire route in `prototype/app.jsx`.
4. Add `files/screens/screen-NN-….md` checklist for content review.
5. Update `memory-bank/activeContext.md` when the session ends.

## What not to do

- Do not treat each screen as a new mini-site (duplicate headline/CTA/shell markup).
- Do not commit `noomswipefiles/` (local reference only).
- Do not apply academic “student code style” rules from other workspaces.

## Port to Next.js (later)

Production integration targets the main Illuminairy repo (`app/go/…`, `lib/analytics-events.ts`, Supabase leads). Keep prototype behavior aligned with [`specs/sat-quiz-funnel/SPEC.md`](specs/sat-quiz-funnel/SPEC.md).

## Owner

Brianna — `brianna@illuminairy.com`
