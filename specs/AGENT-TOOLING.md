# Agent tooling — what to use for this funnel

Installed on your machine 2026-05-23. **Illuminairy rules always win** over generic tool defaults.

Reference: `~/tools/AGENT-TOOLS-INSTALLED.md`

## Decision matrix

| Tool | Use for SAT funnel? | When | Do not use for |
|------|---------------------|------|----------------|
| **Spec-driven** (`specs/`, SPEC, PRD, PLAN) | **Yes — primary** | Every session | — |
| **Cursor** `illuminairy-plan` | **Yes** | Scope, PRD tweaks, funnel decisions | — |
| **Cursor** `illuminairy-review` | **Yes** | Before merge / after screen batch | — |
| **Cursor** `illuminairy-ship` | **Yes** | Deploy checklist | — |
| **Cursor** `ralph-iteration` + `specs/ralph/PLAN.md` | **Yes** | One prototype task per session | Whole funnel unattended |
| **gstack** `/office-hours` | **Optional** | Claude Code: sharpen problem/metric | Replacing SPEC |
| **gstack** `/plan-ceo-review` | **Optional** | Claude Code: architecture sanity | — |
| **gstack** `/design-review` `/design-html` | **Yes** | Report page, LP polish in Claude Code | Overriding brand kit colors |
| **gstack** `/review` `/qa` `/ship` | **Yes** | Claude Code pre-deploy | — |
| **frontend-design** (plugin) | **Yes** | Building UI in Claude Code | Copy/facts (use brand kit) |
| **Frontend aesthetics cookbook** | **Reference** | Design report + LP; see `files/references/prompting_for_frontend_aesthetics.ipynb` | Overrides lagoon/ICP tone |
| **ralph-loop** (Anthropic plugin) | **Rare** | Tiny bounded task, `--max-iterations 5`, with `agent:verify` | Entire funnel, production |
| **ralph-skills** `/prd` `/ralph` | **Optional** | Regenerate prd.json from markdown PRD | Replacing `specs/ralph/PLAN.md` in Cursor |
| **snarktank `ralph.sh`** | **No (default)** | Multi-day autonomous repo loops elsewhere | This prototype (use Cursor Ralph) |
| **karpathy/autoresearch** | **No** | — | Marketing site; use `growth-autoresearch.md` discipline instead |
| **Engineering autoresearch-lite** | **Yes (main repo)** | `npm run agent:verify` on Next.js port | Prototype HTML phase |
| **Growth autoresearch** | **Yes (post-live)** | One LP/CTA test; log in `growth/experiments/` | During initial spine build |

## Recommended workflow by phase

### Planning / “should we build this?”

1. Read `specs/sat-quiz-funnel/PRD.md` (Gary Tan review)  
2. Cursor: `illuminairy-plan` or Claude Code: `/office-hours`  
3. Update PRD/SPEC/PLAN only — no code until SPEC approved  

### Prototype build (now)

| Step | Tool |
|------|------|
| Pick next task | `specs/ralph/PLAN.md` one checkbox |
| Implement | **Cursor Agent** (primary) or Claude Code + **frontend-design** |
| Design quality | Cookbook notebook + `illuminairy_brand_kit_brief.md` + lagoon tokens |
| Per-screen spec | `files/screens/screen-NN.md` |
| Done gate | Manual mobile QA; analytics events in console |

### Production port

| Step | Tool |
|------|------|
| Implement | Cursor + SPEC acceptance criteria |
| Verify | `npm run agent:verify` (Illuminairy repo) |
| Review | `illuminairy-review` or gstack `/review` |
| Ship | `illuminairy-ship` or gstack `/ship` + `/qa` on staging URL |

### Live / growth

| Step | Tool |
|------|------|
| Diagnose | `files/funnel-analysis.md` + PostHog |
| Experiment | `growth-autoresearch.md` — one metric, one change |
| Nurture | Klaviyo UI (human) |

## Claude Code vs Cursor

| You work in… | Use |
|--------------|-----|
| **Cursor** (quizfunnel) | SPEC + `specs/ralph/PLAN.md` + illuminairy-* skills |
| **Claude Code** (terminal) | gstack slash commands + plugins (`frontend-design`, `ralph-loop` sparingly) |

Same repo rules: [`../../../AGENTS.md`](../../../AGENTS.md) when touching main Illuminairy tree.

## Plugins quick reference

```bash
claude plugin list
# frontend-design@claude-plugins-official  — UI
# ralph-loop@claude-plugins-official       — /ralph-loop (bounded only)
# ralph-skills@ralph-marketplace           — /prd, /ralph
```
