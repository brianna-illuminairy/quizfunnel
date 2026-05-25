# Illuminairy SAT quiz funnel — specs & copy

**Live funnel:** [illuminairy.com/satplan](https://illuminairy.com/satplan) — built in the **Illuminairy** Next.js repo (`app/satplan/`, `components/sat-plan/`, `lib/sat-plan-funnel/`).

This repo holds **PRDs, screen checklists, layout rules, and the deprecated Babel sketch** — not production code.

## Quick start (production)

In the **Illuminairy** repo:

```bash
npm run dev
```

Open **http://localhost:3000/satplan** and deep-link steps, e.g.:

- `?step=worries`
- `?step=prep-failed-proof`
- `?step=wrong`
- `?step=gpa-paradox`
- `?step=sat-changed`

After deploy: **https://illuminairy.com/satplan**

Verify Illuminairy changes: `FUNNEL_LAYOUT_UNLOCK=1 npm run agent:verify`

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

## Production spine (Illuminairy `/satplan`)

**Rule:** one question or one insight per screen. See [`files/FUNNEL-MASTER-FLOW.md`](files/FUNNEL-MASTER-FLOW.md).

### Tested path (after `history_once`)

| # | Type | `?step=` | Status |
|---|------|----------|--------|
| — | LP | *(landing)* | ✅ |
| 1 | Q | `worries` | ✅ |
| 2 | Q | `who` | ✅ |
| 3 | Q | `target` | ✅ |
| 4 | I | `trust` (INT1) | ✅ |
| 5 | Q | `history` | ✅ |
| — | I | `int3-retake` (INT3) | ✅ if twice / 3+ attempts |
| 6 | Q | `prep` | ✅ |
| 7–10 | I | INT8 quartet | ✅ group-class **or** self-study → `prep-failed-proof` → `prep-failed-guided` → `prep-failed-mistake-driven` |
| 11 | Q | `score` | ✅ |
| 12 | Q | `wrong` | ✅ dashboard tiles + `ico-wrong-*` art |
| 13 | I | `sat-changed` (INT12) | ✅ digital vs paper mockup |
| 14 | Q | `gpa` | ✅ |
| 15 | I | `gpa-paradox` (INT2) | ✅ tutor-note layout |
| 16 | Q | `test-date` | ✅ |
| 17 | I | `timeline` (INT6) | ✅ |
| 18 | Q | `schools` | ✅ optional skip *(product may remove — see memory-bank)* |
| 19 | I | `plan-path` | ✅ gap + path graph |
| 20 | — | `contact` | ✅ UI only — no lead API yet |
| 21 | I | `plan-ready` | ✅ |
| 22 | — | `report` | ✅ on-screen snapshot |
| 23 | — | `book` | ✅ opens Calendly |

**Never-tested** (`history_none`): skips prep Q and score/wrong; after INT8 → `sat-changed` → GPA chain above.

### Removed (do not reintroduce without explicit ask)

| Step | Removed |
|------|---------|
| `hours` study-time Q | 2026-05-24 |
| INT13 `kid-problem` | 2026-05 — INT8 exit goes to `score` (tested) or `sat-changed` (never-tested) |

### Phase B (not shipped)

- `POST /api/funnel/lead` → Supabase + Klaviyo
- TCPA / privacy consent on contact
- Calendly webhook → `call_booked`

## Related

- Production code: Illuminairy repo (`/satplan`)
- Active spec: [`specs/ACTIVE.md`](specs/ACTIVE.md) → [`specs/sat-quiz-funnel/SPEC.md`](specs/sat-quiz-funnel/SPEC.md)
- Contrast assets: [`files/funnel-contrast-assets.md`](files/funnel-contrast-assets.md)
