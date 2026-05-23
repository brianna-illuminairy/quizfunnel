# Active context

*Last updated: 2026-05-23*

## Current focus

- **Screen 01 — Worries** (`?step=worries`) — in review (visual sign-off on device + Meta IAB)
- **Next:** Screen 02 (Chapter 1 / v4 flow) after Screen 01 approved
- **Repo:** Pushed to [github.com/brianna-illuminairy/quizfunnel](https://github.com/brianna-illuminairy/quizfunnel)

## Recent changes

- Reusable component system: `FunnelCta`, `QuizStepTemplate`, `QuizTileGrid`; worries migrated off one-off shell
- Desktop centering + unified CTA width (shell `--page-max`, footer outside 360px body column)
- `prototype/` folder (was `New Funnel for Illuminairy/`)
- Git repo initialized with README, AGENTS.md, memory-bank, specs, files

## Approved

- **Screen 00 — Landing** — flowing layout, score cards, CTA → worries

## Open

- [ ] Screen 01 sign-off (iPhone + IG/FB in-app browser)
- [ ] Fill Lighthouse scores in `files/research/perf-baseline-2026-05-23.md`
- [ ] Typography A/B (Hanken vs Plus Jakarta) when building Screen 02
- [ ] Update `PLAN-sat-funnel.md` todo statuses after each screen ships

## Session notes

- Local server: `cd prototype && python3 -m http.server 8765`
- Hard-refresh CSS after changes (`styles.css?v=…` on `Landing.html`)
