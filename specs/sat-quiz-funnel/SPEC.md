# SPEC: SAT quiz funnel (production at `/satplan`)

- **PRD:** [PRD.md](./PRD.md)
- **Date:** 2026-05-23
- **Implementation plan:** [../../PLAN-sat-funnel.md](../../PLAN-sat-funnel.md)

## Summary

Ship a measurable funnel: Meta LP → assessment → parent contact → instant on-screen SAT plan → book free 15-min review (Calendly). Persist leads to Supabase + Klaviyo. Instrument PostHog + GA4. No Stripe on web in v1.

## Acceptance criteria

### Phase A — Production UI (Illuminairy `/satplan`) — **source of truth**

`quizfunnel/prototype/` is **deprecated** (Babel sketch only). Do not extend it.

- [x] Route **`/satplan`** — Next.js App Router, build-time compile (`app/satplan/`, `components/sat-plan/`)
- [x] `FunnelShell` + `QuizStepTemplate` + `FunnelCta` + `QuizTileGrid`
- [x] Router + `sessionStorage` + `?step=` URLs (`lib/sat-plan-funnel/`)
- [x] Landing + worries screens; PostHog + gtag on key events (`trackSatPlanFunnelEvent`)
- [x] `noindex` until launch-ready (`app/satplan/layout.tsx`)
- [ ] Contact screen: required parent email + phone, TCPA + privacy; optional student SMS
- [ ] On contact success: `POST /api/funnel/lead`; **instant** report screen
- [ ] Report + Calendly book step + confirmation
- [ ] Typography A/B toggle (Hanken vs Plus Jakarta) if still needed
- [ ] **Mobile-first QA:** 390×844 + Meta IAB; Lighthouse per `files/funnel-performance.md`

### Phase B — CRM & nurture

- [ ] `POST /api/funnel/lead` → Supabase `leads` upsert + `onFunnelContactSubmitted`
- [ ] Calendly webhook → `call_booked`, Klaviyo + Meta schedule event only
- [ ] Klaviyo flows: contact nurture + booked confirm (human UI)

### Phase C — Growth (after live)

- [ ] PostHog funnel dashboard per `growth/posthog-funnel-dashboard.md`
- [ ] Weekly review using `files/funnel-analysis.md` scenario matrix
- [ ] One growth experiment at a time (`growth/experiments/`)

## Files / areas

| Phase | Paths |
|-------|--------|
| **Production UI** | Illuminairy: `app/satplan/`, `components/sat-plan/`, `lib/sat-plan-funnel/`, `app/satplan/funnel.css` |
| Specs / copy | `quizfunnel/files/*`, `quizfunnel/specs/*` (this repo) |
| Deprecated | `quizfunnel/prototype/` — do not ship |
| CRM (later) | `app/api/funnel/lead/`, `lib/crm/leads.ts`, `lib/klaviyo-server.ts` |

## Env vars (Phase B)

| Variable | Required |
|----------|----------|
| `NEXT_PUBLIC_POSTHOG_KEY` | Yes |
| Supabase service role | Yes (server) |
| `KLAVIYO_PRIVATE_API_KEY` | Yes (nurture) |
| `NEXT_PUBLIC_CALENDLY_URL` | Yes |
| Calendly webhook secret | Yes |

## QA checklist

- [ ] Full path: LP → contact → report visible <1s → book → confirm
- [ ] Lead row in Supabase; profile in Klaviyo
- [ ] No `Lead` event to Meta on contact; booking event fires on Calendly
- [ ] Banned phrases scan on new copy

## Ralph / PLAN

Prototype tasks: [`../ralph/PLAN.md`](../ralph/PLAN.md)  
Main site funnel (legacy): [`../../../specs/ralph/PLAN.md`](../../../specs/ralph/PLAN.md)
