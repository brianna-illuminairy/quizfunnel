# Screen 00 — Landing

**Status:** Approved  
**File:** `prototype/Landing.html` → step `landing`

## Purpose

Cold Meta message match. Single CTA into assessment.

## Review checklist

- [ ] Headline / sub / credibility line
- [ ] Score cards hero
- [ ] CTA label (“Get my answers”)
- [ ] Micro: Free · 2 minutes · No account needed
- [ ] Single flowing page — CTA directly under cards (not pinned to viewport bottom)
- [x] Mobile-first + safe areas (`viewport-fit=cover`, `env(safe-area-inset-*)` on `.page`)
- [x] Full-width CTA inside padded content column (phone funnel standard)

## CTA behavior (this build)

- Wired to `?step=worries` via `handleStart` in `app.jsx` (not `alert`)

## Global layout

Assessment steps follow [`files/funnel-layout-rules.md`](../funnel-layout-rules.md) (sticky CTA in viewport). Landing keeps the approved **flowing** CTA under the hero.

## After approval

- Build real Screen 1 — worries multiselect
