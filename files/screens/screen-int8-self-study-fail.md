# Screen — Why self-study fails *(INT8 · self-study · slide 2)*

**Status:** Shipped in production (Illuminairy `/satplan`)  
**Interstitial:** [`INT8`](../funnel-interstitials-noom-map.md) — education part **B**  
**Step:** `prep-failed-self-study`  
**Trigger:** Self-study prep ids (YouTube, Khan, Bluebook, app, little/none) **without** `prep_class`

## Job

Mom’s aha: **They already studied hard** — but self-study doesn’t pinpoint the mistakes keeping scores stuck. Lots of effort on the wrong topics, little score movement.

## Copy checklist (production)

One lead paragraph (`int8-self-study-fail-copy.ts`):

1. **[Name]** studied hard with **{prep they selected}**, but still didn't achieve **{target band}**.
2. The SAT tests **28 skills**; **he/she/they/you** probably struggled to identify which ones to focus on to actually improve **{possessive}** score.

- [x] Headline: “Why self-study **failed**” when Step 5 includes Khan / Bluebook / YouTube / app; “**fails**” when little/none only
- [x] Lead (son, name Max, Khan + Bluebook, target 1400–1500): “Max studied hard with Khan Academy and Bluebook, but still didn't achieve 1400–1500. The SAT tests 28 skills, he probably struggled to identify which ones to focus on to actually improve his score.”
- [x] Closing (son): “Without someone to help him 1) diagnose & prioritize what to focus on, 2) learn the content, and 3) drill until memorized, simply doing practice problems doesn't help raise his score.”
- [x] Self-taker / daughter / they variants in `int8-self-study-fail-copy.ts`
- [x] Body uses global `--quiz-copy-*` tokens (16px / 1.4 / left)
- [x] **Contrast image:** `prep-contrast-home-vs-guided.png` (daughter variant when applicable) via `Int8PrepContrastPair` pair `home`
- [x] CSS dashboard graphic only if contrast PNG unavailable (fallback)

## Flow

| Prior | This screen | Next |
|-------|-------------|------|
| `prep` (self-study only) | `prep-failed-self-study` | `prep-failed-proof` |

Group class prep uses `prep-failed-group-class` as slide 1 instead.

## QA

- [ ] 390×844 Meta IAB — fits without scroll
- [ ] `/satplan?step=prep-failed-self-study`
- [ ] Back → `prep`; Continue → proof beat

## Dev URL

http://localhost:3000/satplan?step=prep-failed-self-study
