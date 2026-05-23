# Funnel performance — budgets, speed tests & load times

**Purpose:** Meta traffic is impatient and often opens in **Instagram/Facebook in-app browsers**. Slow LP load = bounce before the first event fires. Pair with [`funnel-analysis.md`](funnel-analysis.md) (conversion) and [`research/meta-in-app-browser-qa.md`](research/meta-in-app-browser-qa.md) (viewport + IAB).

**Rule:** No screen ships without meeting the **per-screen perf gate** below (prototype + production).

---

## Targets (mobile-first)

| Metric | Target | Hard fail | Tool |
|--------|--------|-----------|------|
| **LCP** (Landing) | ≤ **2.5s** | > 4.0s | Lighthouse mobile, CrUX when live |
| **INP** | ≤ **200ms** | > 500ms | Lighthouse, field RUM |
| **CLS** | ≤ **0.1** | > 0.25 | Lighthouse |
| **TTFB** (production) | ≤ **600ms** | > 1.2s | WebPageTest, Vercel analytics |
| **LP → interactive** (CTA tappable) | ≤ **3.5s** on Slow 4G | > 5s | Lighthouse + real device |
| **Step transition** (`?step=` change) | ≤ **100ms** perceived | Jank / blank frame | Performance panel, manual |
| **Total page weight (LP, production)** | ≤ **500 KB** transfer (excl. fonts) | > 1 MB | Network tab |
| **Third-party JS (production)** | PostHog + GA4 + Calendly lazy | React+Babel on CDN in prod | Bundle audit |

*Prototype* uses unpkg React + Babel — **not a production budget**. Use prototype checks for **regressions** and **step UX**; enforce full budgets on **Next.js port**.

---

## What to measure

### 1. Lab (every screen sign-off)

Run **Chrome Lighthouse** → Mobile, Slow 4G, on:

| URL | When |
|-----|------|
| `http://localhost:8765/Landing.html` | Landing approved / any LP change |
| `Landing.html?step=worries` | Each new quiz step |

Record in `files/research/perf-baseline-YYYY-MM-DD.md` (create dated snapshot):

- LCP, INP, CLS, TBT, Speed Index
- Total byte weight, request count
- “Reduce unused JavaScript” / font warnings

Optional: [WebPageTest](https://www.webpagetest.org/) — Dulles, Moto G4, 4G — for TTFB + filmstrip when staging on Vercel.

### 2. Field (production / staging)

| Source | Use |
|--------|-----|
| **GA4** → Reports → Engagement → **Pages and screens** + **Events** | Compare LP bounce vs step depth |
| **GA4** → Admin → **Key events** | Same as conversion playbook |
| **PostHog** → Web Vitals (if enabled) | LCP/INP/CLS by `utm_campaign`, `step_id` |
| **Vercel Speed Insights** (Next port) | Real-user CWV on `/go/…` |
| **Meta Ads** | LP CTR vs LPV; sudden LP CTR drop often = speed or message mismatch |

### 3. Real device (required before paid scale)

| Check | Device / context |
|-------|------------------|
| Cold open from Meta | iPhone — open ad preview URL in **Instagram** and **Facebook** IAB |
| Warm step through | Worries → next step; footer CTA still sticky, no scroll lock bugs |
| Low connectivity | iOS Low Data Mode or Network Link Conditioner (optional) |

Log pass/fail in screen checklist (`files/screens/screen-NN-….md`).

---

## Prototype-specific notes

| Item | Impact | Plan |
|------|--------|------|
| React + ReactDOM + **Babel standalone** from unpkg | Large parse/compile on first load | Accept for dev; **do not** ship to production |
| Google Fonts (2 families) | FOIT/FOUT | `preconnect` ✅; subset + `font-display: swap` on Next port |
| `styles.css` single file | Fine at current size | Split only if > ~80KB |
| Score card PNGs in `prototype/uploads/` | LCP risk | Compress, explicit `width`/`height`, lazy below fold on port |
| SPA router (no full reload) | Fast step changes ✅ | Keep; avoid heavy re-mount per step |

**Prototype perf command (local):**

```bash
cd prototype && python3 -m http.server 8765
# Chrome DevTools → Lighthouse → Mobile
```

---

## Production (Next.js port) checklist

- [ ] Prebuilt JS — no Babel in browser
- [ ] `next/font` for Hanken / Plus Jakarta (subset)
- [ ] `next/image` for hero/cards; WebP/AVIF where possible
- [ ] Code-split per funnel step or one lazy `FunnelClient` chunk
- [ ] Defer PostHog / GA4 until after first paint (or after `funnel_landing_view`)
- [ ] Calendly embed **on book step only** (dynamic import)
- [ ] `Cache-Control` + Vercel edge for static assets
- [ ] Monitor: Vercel Speed Insights + weekly Lighthouse CI on `/go/high-gpa-low-sat` (or final path)

---

## Per-screen perf gate (copy into `files/screens/screen-NN-….md`)

```markdown
## Performance

- [ ] Lighthouse mobile (Slow 4G): LCP ≤ 2.5s, CLS ≤ 0.1 on this step URL
- [ ] No new render-blocking scripts without defer/async
- [ ] Step transition: no visible blank shell > 1 frame
- [ ] Meta IAB smoke (if changed chrome/layout): IG + FB app, 390×844
- [ ] Baseline logged in `files/research/perf-baseline-*.md` (if LP or global CSS changed)
```

---

## Diagnostics ↔ speed (funnel-analysis scenarios)

| Symptom in data | Often performance-related | Action |
|-----------------|---------------------------|--------|
| High LP views, **very low** `funnel_cta_click` | Slow LCP, broken layout in IAB | IAB QA + Lighthouse |
| High `funnel_cta_click`, low `assessment_start` | Step 1 load/hydration failure | Console errors, network failures |
| High `intake_step_view` drop on one `step_id` | Heavy body UI on that step | Profile that step; simplify assets |
| High `contact_submit`, low `report_view` | Report route slow or error | TTFB + API latency on report |
| Good funnel, bad Meta CPL | Ad/LP mismatch, not always speed | Still verify LP LCP < 2.5s |

---

## Events (optional RUM)

On Next.js port, consider:

| Event | Properties |
|-------|------------|
| `web_vitals` | `name` (LCP/INP/CLS), `value`, `rating`, `path` |
| `funnel_step_timing` | `step_id`, `ms_since_navigation` (dev/10% sample) |

Fire via `web-vitals` package → same `trackFunnelEvent` helper as analytics playbook.

---

## Review cadence

| When | Action |
|------|--------|
| **Each screen approval** | Lighthouse on LP + new step |
| **Before first Meta spend** | Device IAB pass + dated perf baseline |
| **Weekly (live)** | GA4 LP bounce, PostHog funnel + vitals if enabled |
| **After any hero/font/script change** | Re-run LP Lighthouse |
