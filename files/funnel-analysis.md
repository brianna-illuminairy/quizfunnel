# SAT funnel — analysis & diagnostics playbook

**Purpose:** When the funnel is live, use step metrics to see **which scenario** you’re in and **what to change**. Not a build spec — update baselines after real traffic.

**Related:** [SAT funnel PRD](../../specs/2026-05-sat-funnel/PRD.md), [PostHog dashboard](../../growth/posthog-funnel-dashboard.md), plan `sat_quiz_funnel` (conversion model).

**North star:** `consult_booked` (Calendly confirmed).  
**Safety net:** `contact_submit` (parent email + phone before report).  
**Meta ads:** Optimize on **booking/schedule events only** — do not send Lead events on contact form.

---

## Funnel flow (v1)

```text
LP → assessment → contact (required) → on-screen report → book call (primary, can leave) → confirmation
```

Optional: student phone on contact screen — “Text [Name] a copy (optional).”

---

## Analytics stack

| Tool | Use for funnel diagnostics |
|------|----------------------------|
| **PostHog** | Step funnels, UTM breakdowns, experiments — primary ops view |
| **GA4** | Google Ads linkage, site-wide compare, `generate_lead` / key events |
| **Meta pixel** | **Only** `consult_booked` (Schedule) — not contact form |

**Rule:** One `trackFunnelEvent()` (prototype) or `captureFunnelEvent()` (Next.js) sends the **same event name + properties** to PostHog and GA4.

**References (main repo):** `lib/analytics-events.ts`, `lib/analytics-capture.ts`, `components/posthog-provider.tsx`, `components/google-analytics.tsx`, `growth/posthog-funnel-dashboard.md`.

---

## Events to instrument

Implement in prototype (`analytics.js` + router) and mirror in Next.js PostHog + gtag.

| Event | Properties | When |
|-------|------------|------|
| `funnel_landing_view` | `utm_*`, `variant`, `campaign_id` | LP load |
| `funnel_cta_click` | same | CTA click |
| `assessment_start` | `path` (full/spine/short) | First quiz screen |
| `intake_step_view` | `step_id`, `step_index`, `path` | Each forward step |
| `intake_step_back` | `step_id` | Back navigation |
| `assessment_complete` | `path`, `worries[]` (hashed ok) | Last input before contact |
| `contact_submit` | `has_student_sms`, `lead_id` (if API ok) | Valid parent contact submit → **Supabase `leads` upsert** |
| `report_view` | `path` | Report screen rendered |
| `report_share_click` | — | Share control used |
| `calendly_open` | `source` (report_cta / sticky) | User opens scheduling |
| `consult_booked` | `calendly_event_id`, `lead_id` | Calendly confirm → update lead `stage=call_booked` |
| `consult_show` | manual / Calendly | Call occurred |
| `consult_closed_enroll` | manual / CRM | Enrolled after call |
| `consult_closed_nurture` | manual | Thinking / not fit |

### GA4 mapping (gtag)

| PostHog event | GA4 | Notes |
|---------------|-----|--------|
| `funnel_landing_view` | `page_view` + optional `funnel_landing_view` | SPA: fire on LP load |
| `funnel_cta_click` | `funnel_cta_click` | Custom |
| `intake_step_view` | `intake_step_view` | Include `step_id` |
| `assessment_complete` | `assessment_complete` | Custom |
| `contact_submit` | **`generate_lead`** | Primary lead signal for Google |
| `report_view` | `report_view` | Custom |
| `calendly_open` | `calendly_open` | Custom |
| `consult_booked` | **`schedule`** or `consult_booked` | Mark as **Key event** in GA4; **also** send to Meta |

**Do not** fire Meta pixel on `contact_submit`. Fire on `consult_booked` only (or standard `Schedule`).

### PostHog

Use exact string names above. Dashboard: **SAT Conversion Funnel — Georgia** — extend funnel steps with `contact_submit` → `report_view` → `calendly_open` → `consult_booked`.

---

## Conversion formulas

Use weekly; minimum ~100 enters at the step before trusting a rate.

| Rate | Formula | What it measures |
|------|---------|------------------|
| **LP → start** | `assessment_start` / `funnel_landing_view` | Landing + ad match |
| **Assessment completion** | `assessment_complete` / `assessment_start` | Length / engagement |
| **Contact conversion** | `contact_submit` / `assessment_complete` | “Paywall to see plan” |
| **Report delivery** | `report_view` / `contact_submit` | Tech + instant delivery |
| **Book intent** | `calendly_open` / `report_view` | CTA + report quality |
| **Report → booked** | `consult_booked` / `report_view` | **Core funnel health** |
| **Contact → booked** | `consult_booked` / `contact_submit` | End-to-end (incl. leave-without-book) |
| **Show rate** | `consult_show` / `consult_booked` | Reminders / intent quality |
| **Close rate** | `consult_closed_enroll` / `consult_show` | Offer + sales (PMF) |
| **CPB** | ad spend / `consult_booked` | Unit economics |

**PRD hypotheses (revise after baseline):**

- LP → start: > 25%
- Assessment completion: > 60%
- Report → booked: > 15% (set after first 100 `report_view`)

---

## Step drop-off (heatmap)

In PostHog, funnel on `intake_step_view` grouped by `step_id`. Flag any step where **>40%** of sessions exit without next step within 60s.

| Step ID (example) | Screen |
|-------------------|--------|
| `worries` | What’s got you worried |
| `score_gpa` | Score + GPA + retakes |
| … | … |
| `contact` | Parent email + phone |
| `report` | On-screen plan |
| `book` | Calendly |

---

## Scenario matrix — what’s broken, what to do

Read **top to bottom** — fix the **first** weak stage before optimizing later steps.

### 1 — Traffic / LP (`LP → start` low)

**Symptoms:** High spend, low `funnel_cta_click`, high bounce on LP.

**Indicates:** Ad promise ≠ LP, weak hook, slow mobile LP, wrong audience.

**Changes to test (one at a time):**

- New Meta creative matched to exact headline on LP
- Single proof element (stat, quote) on LP
- Speed: LCP, reduce animation weight
- Georgia/geo copy if running local ads

---

### 2 — Assessment abandonment (`assessment_complete / start` low)

**Symptoms:** Many starts, few reach contact screen; heatmap shows one step cliff.

**Indicates:** Funnel too long, confusing question, or mobile UX pain.

**Changes:**

- Remove or flag-disable interstitial with worst drop-off
- Switch router to `path=short` or `path=spine`
- Split combined screen (score/GPA) if that step cliffs
- Shorten copy; larger tap targets

**Kill criteria (plan):** If completion < **40%** after **500** starts → shorten arc mandatory.

---

### 3 — Contact gate failure (`contact_submit / assessment_complete` low)

**Symptoms:** Finished questions but won’t give email/phone.

**Indicates:** Don’t trust “instant plan,” too many fields, missing privacy/TCPA clarity.

**Changes:**

- Headline: “See [Name]’s plan now” + sub “We’ll also email you a copy”
- Minimal fields: email, phone, consent checkbox + privacy link
- Remove anything that feels like marketing spam
- Show lock icon / “won’t share” only if truthful

---

### 4 — Report not shown (`report_view / contact_submit` low)

**Symptoms:** Contacts submitted but no `report_view`.

**Indicates:** Bug, redirect error, slow API, or report gated incorrectly.

**Changes:**

- Fix client routing; log errors to PostHog
- Inline report render (no wait for server)
- QA mobile path contact → report

---

### 5 — Report doesn’t drive intent (`calendly_open / report_view` low)

**Symptoms:** Report views OK, nobody clicks book.

**Indicates:** Plan feels generic, CTA weak, or no urgency.

**Changes:**

- Sticky “Book free 15-min review” on report
- Copy: “Walk through this plan with an SAT expert”
- Personalize report blocks (gap, weeks to test, schools)
- One concrete “if you do one thing” line before CTA

---

### 6 — Calendar friction (`consult_booked / calendly_open` low)

**Symptoms:** Opens Calendly, doesn’t book.

**Indicates:** No slots, mobile Calendly UX, event too long, timezone confusion.

**Changes:**

- More availability; buffer times
- 15-min event title clear and parent-friendly
- Embed vs redirect test on mobile
- Reminder in event description

---

### 7 — Nurture gap (`contact_submit` high, `consult_booked` low, same session)

**Symptoms:** Lots of leads, few same-session books — **expected partially** by design.

**Indicates:** Moms need time OR follow-up is weak — not always a funnel bug.

**Changes:**

- 24h SMS/email: one insight + single book link
- Human outreach: call/text top 20% fit leads
- Do **not** switch Meta to Lead optimization to “fix” this

**Success metric for nurture:** `consult_booked` within 7 days of `contact_submit` / contacts.

---

### 8 — Show rate low (`consult_show / consult_booked` low)

**Symptoms:** Calendar fills, empty calls.

**Indicates:** Weak confirm flow, wrong timezone, low commitment booking.

**Changes:**

- Calendly SMS reminders
- Email confirm immediately with prep question
- Optional: require short qualifier in Calendly questions

---

### 9 — Close rate low (`consult_closed_enroll / consult_show` high)

**Symptoms:** Calls happen, no enrollments.

**Indicates:** PMF, pricing conversation, trust — **not fixed in funnel UI alone**.

**Changes:**

- Call script + objection handling
- Proof on report (outcomes with disclaimers)
- Follow-up email sequence post-call
- Later: self-serve enroll link in email when Stripe ready

---

## CRM — Supabase leads + Klaviyo

**Pipeline on contact submit:** `POST /api/funnel/lead` → **Supabase `leads` upsert** → **`onFunnelContactSubmitted`** → Klaviyo profile + `SAT Funnel Contact` event.

- [ ] `POST /api/funnel/lead` upserts on contact (email unique)
- [ ] Assessment JSON in `additional_context`; UTMs + `visitor_id` attached
- [ ] Klaviyo profile upsert + event (verify profile in Klaviyo audience)
- [ ] Klaviyo flow: non-bookers after `SAT Funnel Contact` (book-call nurture)
- [ ] Calendly webhook → `call_booked` + **`Consultation Booked`** event (existing)
- [ ] Verify Supabase row + Klaviyo profile after test submit

Main repo: `lib/crm/leads.ts`, `lib/klaviyo-server.ts`, `lib/crm/calendly-webhook.ts`, `supabase/migrations/20260518120000_crm_schema.sql`.

---

## Launch instrumentation checklist

**PostHog**

- [ ] `NEXT_PUBLIC_POSTHOG_KEY` set (`npm run posthog:verify` in main repo)
- [ ] Events visible in PostHog Live events on staging
- [ ] Funnel dashboard built with contact → report → book steps

**GA4**

- [ ] gtag loads on LP + funnel (SPA step `page_view` if no full reloads)
- [ ] `generate_lead` fires on `contact_submit` (test in GA4 DebugView)
- [ ] `consult_booked` marked Key event
- [ ] Decide: same property as illuminairy.com vs dedicated funnel property

**Meta**

- [ ] Custom conversion or Schedule = `consult_booked` only  
- [ ] Contact form does **not** fire Lead to Meta  
- [ ] UTM passed to Calendly / CRM for attribution  
- [ ] CAPI (later) duplicates server-side book confirm  

**Warning:** If you optimize Leads, CPL drops but CPB (cost per booked call) may rise.

---

## Weekly review (15 min)

1. Volume: LP views, books, shows, enrolls (absolute numbers).  
2. Weakest **rate** in the chain (not vanity CPL).  
3. Pick **one** experiment from scenario matrix.  
4. Log in `growth/experiments/` with hypothesis + end date.  
5. Update baseline table below when sample size > 100 per step.

---

## Baselines (fill after launch)

| Rate | Week 1 | Week 4 | Notes |
|------|--------|--------|-------|
| LP → start | | | |
| Assessment complete | | | |
| Contact rate | | | |
| Report rate | | | |
| Report → booked | | | |
| Show rate | | | |
| Close rate | | | |
| CPB ($) | | | |

---

## Changelog

| Date | Change | Result |
|------|--------|--------|
| | | |
