# Ralph PLAN — SAT quiz funnel

Active spec: [`../sat-quiz-funnel/SPEC.md`](../sat-quiz-funnel/SPEC.md)  
Production code: **Illuminairy** `/satplan` (not `quizfunnel/prototype/`).

One task per agent session. Mark `[x]` when done + verified (`FUNNEL_LAYOUT_UNLOCK=1 npm run agent:verify` in Illuminairy).

## Phase A — Spine (build now)

- [x] FunnelShell + router + sessionStorage + `?step=` URLs (Illuminairy)
- [x] Landing + worries + who + target + INT1 trust
- [x] History + INT3 retake (conditional) + prep
- [x] INT8 — stub + trilogy (plateau, proof, mentors, guided) + contrast visuals
- [ ] GPA question (replace `gpa-stub`)
- [ ] INT2 GPA paradox interstitial
- [ ] Hours, score, wrong questions
- [ ] Contact screen — email, phone, TCPA, optional student SMS
- [ ] Report screen — personalized blocks (static JSON ok v0)
- [ ] Book screen — Calendly + confirmation
- [ ] Screen specs in `files/screens/` synced as each ships
- [ ] Meta IAB QA (390×844) on full spine through contact

## Phase B — Integrate (after spine QA)

- [ ] `POST /api/funnel/lead` + Supabase + Klaviyo
- [ ] Calendly webhook → lead stage `call_booked`
- [ ] Remove `noindex` on `/satplan`

## Phase C — Optional modules (data-driven)

- [ ] INT12 digital vs paper format split
- [ ] Dedicated 680×510 panel PNGs (see `funnel-contrast-assets.md`)
- [ ] SMS copy checkbox (v1.1)

## Human-only

- [ ] Klaviyo flows in UI
- [ ] PostHog funnel dashboard
- [ ] Son/neutral prep-path triptych art
- [ ] First Meta spend + message-match QA
