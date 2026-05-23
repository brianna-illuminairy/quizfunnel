# SPEC: SAT quiz funnel (prototype → production)

- **PRD:** [PRD.md](./PRD.md)
- **Date:** 2026-05-23
- **Implementation plan:** [../../PLAN-sat-funnel.md](../../PLAN-sat-funnel.md)

## Summary

Ship a measurable funnel: Meta LP → assessment → parent contact → instant on-screen SAT plan → book free 15-min review (Calendly). Persist leads to Supabase + Klaviyo. Instrument PostHog + GA4. No Stripe on web in v1.

## Acceptance criteria

### Phase A — Prototype (`quizfunnel/prototype/`)

- [ ] `FunnelShell` + router + `sessionStorage` + step events (see `files/funnel-analysis.md`)
- [ ] Landing CTA → assessment (no `alert()`)
- [ ] Contact screen: required parent email + phone, TCPA + privacy; optional student SMS
- [ ] On contact success: `POST` stub or real API; **instant** report screen
- [ ] Report: personalized blocks + share + primary “Book free 15-min SAT Improvement Plan review”
- [ ] Calendly embed or deep link; confirmation when booked
- [ ] PostHog + gtag via `trackFunnelEvent()` on all steps
- [ ] Typography A/B toggle (Hanken vs Plus Jakarta) on one screen for decision
- [ ] **Mobile-first:** base CSS for 320–430px; `min-width: 480px` enhancements only; 48px tap targets; safe areas; sticky quiz footer; QA Safari 390px + Chrome 360px

### Phase B — Production (Illuminairy main repo)

- [ ] `POST /api/funnel/lead` → Supabase `leads` upsert + `onFunnelContactSubmitted`
- [ ] Calendly webhook → `call_booked`, `Consultation Booked` Klaviyo + Meta schedule event only
- [ ] Extend `lib/analytics-events.ts`; dual capture PostHog + GA4 `generate_lead` on contact
- [ ] Route `/go/sat` (or agreed path); `noindex` until launch-ready
- [ ] Klaviyo flows: contact nurture + booked confirm (human UI)
- [ ] `npm run agent:verify` on touched packages

### Phase C — Growth (after live)

- [ ] PostHog funnel dashboard per `growth/posthog-funnel-dashboard.md`
- [ ] Weekly review using `files/funnel-analysis.md` scenario matrix
- [ ] One growth experiment at a time (`growth/experiments/`)

## Files / areas

| Phase | Paths |
|-------|--------|
| Prototype | `quizfunnel/prototype/*`, `quizfunnel/files/funnel-analysis.md` |
| Production | `app/(funnel)/`, `app/api/funnel/lead/`, `lib/crm/leads.ts`, `lib/klaviyo-server.ts` |

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
