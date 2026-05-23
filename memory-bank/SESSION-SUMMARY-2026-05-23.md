# Session summary — 2026-05-23 (compact)

## What we built

- **SAT funnel on Next.js** at `/satplan` (Illuminairy repo) — not Babel prototype.
- **Screens live in code:** Landing (`/satplan`) + Q1 worries (`?step=worries`).
- **Reusable components:** `FunnelCta`, `FunnelShell`, `QuizStepTemplate`, `QuizTileGrid` in `components/sat-plan/`.
- **Specs/copy repo:** [github.com/brianna-illuminairy/quizfunnel](https://github.com/brianna-illuminairy/quizfunnel) — `prototype/` **deprecated** (`prototype/DEPRECATED.md`).
- **ADR 0009** — production path is Next.js only.

## Git

| Repo | Branch | Key commit |
|------|--------|------------|
| illuminairy-website | `main` | `3eda889` — `/satplan` |
| quizfunnel | `main` | `9cfea93` — docs + deprecate Babel |

## Why `/satplan` was 404

Code was pushed to **GitHub** but **Vercel** (host for illuminairy.com) had not run a new **production deploy** (~6 days old build). Fix: `npm run deploy:prod` from Illuminairy repo.

## What is Vercel?

**Hosting for the Next.js site.** Push/build → illuminairy.com. Not where funnel specs live; that’s the quizfunnel repo.

## Local preview

```bash
cd Illuminairy && npm run dev
# http://localhost:3000/satplan
```

## Next (product)

1. Confirm production URLs after deploy.
2. Phone + Instagram/Facebook in-app QA on Screen 01.
3. Build **Screen 02** (Chapter 1 title) on `/satplan` using `QuizStepTemplate`.
4. Later: contact → report → Calendly + Supabase (SPEC Phase B).

## Still `noindex`

`app/satplan/layout.tsx` — fine for Meta ads; remove when you want Google.
