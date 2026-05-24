# Funnel layout rules (all screens)

**Non-negotiable.** Apply to every new quiz/assessment step in the prototype (and on Next.js port).

**Template:** New screens start from [`quiz-step-template.md`](quiz-step-template.md) + `QuizStepTemplate` in `quiz-step-template.jsx` — only headline, hint, and body change per screen.

**Meta traffic:** Design for **390×844** standard mobile; **must** QA in Instagram/Facebook in-app browser before launch — see [`research/meta-in-app-browser-qa.md`](research/meta-in-app-browser-qa.md). Reels/Story safe zones do **not** apply to HTML.

## 1. Fixed viewport — no scroll, nothing below the fold

Design for **390×844** (Meta in-app browser). Every quiz step must fit **without scrolling**. Continue is always visible on first paint.

### Quiz shell pattern (`funnel-shell--quiz`)

| Layer | Behavior |
|-------|----------|
| Shell | `height: 100svh`, `overflow: hidden` — **no page scroll** |
| Chrome | Header, progress bar, step label — **same position every step** (only fill % changes) |
| `funnel-quiz-body` | **Centered 360px column** — headline, hint slot, answers, **Continue** share one axis |
| Spacing | **CSS tokens only** — never per-screen margin hacks |

### Vertical rhythm tokens (Illuminairy `funnel.css`)

| Token | Value | Between |
|-------|-------|---------|
| `--quiz-gap-headline-hint` | 6px | Headline → hint |
| `--quiz-hint-line` + `--quiz-gap-hint-body` | 21px + 14px | Hint → answers |
| `--quiz-gap-body-cta` | 24px | Last answer → Continue |

**Hint-less steps:** `QuizStepTemplate` renders an empty **reserved hint row** (`quiz-step-hint--reserved`) so headline→answers gap matches multiselect steps.

### Continue button

- Always **`FunnelCta`** via **`QuizStepTemplate`** — never a one-off button
- Lives **inside** `funnel-quiz-body` (same 360px column as answers)
- **`margin-top: var(--quiz-gap-body-cta)`** — fixed 24px below last answer
- **Not** sticky, **not** viewport-bottom docked, **not** separated by flex-grow empty space

### Landing (Screen 00)

Approved exception: flowing page, CTA under hero — see `screen-00-landing.md`.

---

## 2. Primary CTA — visible + thumb-friendly (legacy note)

~~Sticky scroll for tall steps~~ — **removed.** If a step cannot fit 390×844 without scroll, **reduce content** (fewer options, smaller art) — do not add scroll.

---

## 3. Screen 1 — worries grid (`?step=worries`)

Reference: `Downloads/screen-2/Screen 2.html`

| Rule | Value |
|------|--------|
| Column | `funnel-quiz-body` **360px max**, centered in `funnel-main` |
| Grid | 2×3, `gap: 8px`, `width: 100%` of column |
| Art stage | `--tile-art-h: 62px`; `worry-ico-box` max **54×124px**, centered on every tile |
| Label gap | `--tile-label-gap: 10px` between art and tile label |
| Unselected | Cream `#f3e8d2` |
| Selected | Ink background, white label, tomato corner ✓ only when selected |
| CTA gap | `margin-top: 24px` on footer (token `--quiz-gap-body-cta`) |

---

## 4. Do not regress

- No `overflow-y: auto` on quiz steps.
- No sticky / viewport-bottom Continue.
- No per-screen headline/body margin hacks — use rhythm tokens + reserved hint row.
- No footer outside the 360px column.
