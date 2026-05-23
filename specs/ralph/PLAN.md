# Ralph PLAN — SAT quiz funnel (prototype)

Active spec: [`../sat-quiz-funnel/SPEC.md`](../sat-quiz-funnel/SPEC.md)

One task per agent session. Mark `[x]` when done + verified.

## Phase A — Spine (build now)

- [ ] FunnelShell + router + analytics.js (PostHog + GA4 stubs)
- [ ] Screen 2 — worries multiselect + wire LP CTA
- [ ] Contact screen — email, phone, TCPA, optional student SMS
- [ ] Report screen — personalized blocks (static JSON ok v0)
- [ ] Book screen — Calendly + confirmation
- [ ] Screen specs in `files/screens/` as each ships

## Phase B — Integrate (after spine QA)

- [ ] `POST /api/funnel/lead` + Supabase + Klaviyo
- [ ] Port prototype to Next.js `/go/sat`
- [ ] Calendly webhook → lead stage `call_booked`

## Phase C — Optional modules (data-driven)

- [ ] Chapter 1 interstitial (if drop-off allows)
- [ ] Additional assessment steps per spine expansion
- [ ] SMS copy checkbox (v1.1)

## Human-only

- [ ] Klaviyo flows in UI
- [ ] PostHog dashboard
- [ ] First Meta spend + message-match QA
