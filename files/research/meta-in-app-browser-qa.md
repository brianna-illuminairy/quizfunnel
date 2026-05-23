# Meta / Instagram in-app browser — funnel QA research

**Status:** Reference (May 2026)  
**Audience:** Illuminairy SAT quiz funnel — cold traffic from Meta ads  
**Prototype:** `prototype/Landing.html`

---

## TL;DR

| Question | Answer |
|----------|--------|
| Do Reels/Stories “safe zones” apply to our LP? | **No.** Those margins are for **native video/image** inside the IG app, not external websites opened from an ad. |
| Does Meta’s in-app browser (IAB) change layout? | **Yes — mainly less vertical space** (top/bottom chrome), not different “safe zone” numbers from creative specs. |
| What should we design for? | **390×844 CSS px portrait** (standard iPhone) as the **primary** artboard; verify in **Instagram + Facebook IAB** on a real device. |
| Do we need tiny viewports (320px)? | **Low priority** unless analytics show meaningful SE traffic. Optimize standard mobile first. |
| Does `env(safe-area-inset-*)` save us in IAB? | **Sometimes zero.** Keep **fixed minimum padding** (16–20px) on sticky CTAs; treat insets as bonus on notch Safari. |

---

## Two different “Instagram” contexts

### A. In-feed creative safe zones (ads you *upload*)

Guides like “250px top/bottom on Stories” apply to **pixels inside the Reel/Story frame** so UI doesn’t cover your *video*.  

When a parent taps **“Learn more”** → Meta opens your **URL in an in-app browser**. That browser is a **separate WebView** — not the Reels canvas. **Do not** apply Reels 108×320px buffers to HTML layout.

### B. In-app browser (IAB) — what we actually ship

- **iOS:** WKWebView inside Instagram / Facebook apps  
- **Android:** WebView / Chrome Custom Tab (behavior varies by app version)  
- **Chrome:** URL bar, back, “…” menu — **does not fully go away** like mobile Safari on scroll  
- **Result:** Usable height is **smaller and more stable** than `100vh` often assumes

---

## How IAB differs from mobile Safari

| Behavior | Mobile Safari | Meta IAB (typical) |
|----------|---------------|---------------------|
| Top UI | Address bar can collapse on scroll | **Persistent** in-app header (~44–56px + status) |
| Bottom UI | Home indicator + sometimes toolbar | Often **extra bar** or less predictable inset |
| `100vh` | Often = “large” viewport → **content cut off** at first paint | Same risk; **often worse** |
| `100dvh` | Resizes as UI shows/hides → **layout shift** | Can jitter when chrome animates |
| `100svh` | Height when toolbars **visible** — good for “fit on load” | **Best default** for full-screen shell + visible CTA |
| `env(safe-area-inset-bottom)` | ~34px on notched iPhones (with `viewport-fit=cover`) | **Frequently `0`** — don’t rely on it alone |
| Cookies / storage | Normal | Stricter; affects analytics, not layout |

**Practical height budget (order-of-magnitude, iPhone):**

- Full-screen Safari usable: ~700–750px  
- Instagram IAB usable: ~600–680px (after Meta chrome)  
- Design assumption: **~640px min usable** for “must see headline + CTA without scroll” on landing; quiz steps may scroll.

---

## What this means for our funnel

### Already aligned

- `viewport-fit=cover` on `Landing.html`  
- `env(safe-area-inset-*)` on padding (harmless when 0)  
- Centered **360px** column — correct for IAB width (~390 logical px minus margins)  
- Sticky / grouped CTA pattern in `funnel-layout-rules.md`

### Recommended adjustments (when we resume build)

1. **Shell height:** prefer `min-height: 100svh` with `100dvh` / `100vh` fallbacks — not `100dvh` alone for quiz shell (reduces “taller than visible” on first paint in IAB).  
2. **Sticky CTA padding:** `padding-bottom: max(16px, env(safe-area-inset-bottom))` — **16px minimum** always.  
3. **Primary QA device list** (in order):  
   - Instagram iOS — open staging URL from DM or ad preview  
   - Facebook iOS — same  
   - Safari iOS — sanity  
   - Chrome Android — Facebook app  
4. **Do not** add Reels safe-zone margins to HTML.  
5. **Optional:** log `visualViewport.height` once in analytics stub to see real IAB heights in the wild (post-launch).

### What does *not* change

- Tile selection pattern (inverted + corner check)  
- Typography / brand colors  
- “Standard mobile” tile sizing (~170px wide in 2-col grid)  
- Template approach (`QuizStepTemplate` + layout rules)

---

## Viewport targets (product decision)

| Tier | Size | Use |
|------|------|-----|
| **P0** | 390×844 (iPhone 14/15 class) | Default design + sign-off |
| **P0** | Same device, **Instagram IAB** | Required before calling Meta traffic “ready” |
| **P1** | 360×800 (common Android) | Quick pass |
| **P2** | 320×568 (old SE) | Only if data warrants |
| **P2** | Landscape | De-prioritize (parents don’t quiz in landscape) |

---

## Manual test script (5 minutes)

1. Deploy or run `python3 -m http.server 8765` on LAN; open on phone.  
2. **Instagram:** Send yourself the link in DM → open inside IG (not “Open in Safari”).  
3. Check **landing:** headline, hero, CTA visible without hunting; tap CTA.  
4. Check **worries:** Continue visible; grid scrolls if needed; CTA not under IG bottom UI.  
5. Repeat in **Facebook** app.  
6. Note: top bar domain, any bottom obstruction, keyboard over inputs (later screens).

---

## References

- [MDN: viewport meta `viewport-fit`](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag#viewport-fit)  
- [CSS viewport units: svh, lvh, dvh](https://ishadeed.com/article/new-viewport-units/)  
- Illuminairy: `files/funnel-layout-rules.md`, `files/quiz-step-template.md`

**Note:** Meta’s IAB implementation changes by app version. There is no published “official” safe-area spec for external landing pages — **device testing wins**.
