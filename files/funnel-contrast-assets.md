# Funnel contrast image specs

Assets for **390×844** Meta in-app browser. Display column is **360px** max (`--funnel-col-max`); card padding leaves **~340px** visible width.

## INT8 two-up contrast (preferred on plateau)

One PNG per path: **problem left** (home alone or group class) · **guided tutoring right**.

| File | Path | Status |
|------|------|--------|
| `prep-contrast-home-vs-guided-daughter.png` | Self-study · daughter / Me | **Live** |
| `prep-contrast-home-vs-guided.png` | Self-study · son / other | **Live** |
| `prep-contrast-crowd-vs-guided-daughter.png` | Group class · daughter / Me | **Live** |
| `prep-contrast-crowd-vs-guided.png` | Group class · son / other | **Live** |

Toggle shipping per file in `CONTRAST_PAIR_SHIPPED` in Illuminairy `lib/sat-plan-funnel/prep-path-images.ts`.

### Size (use this)

| | Pixels | Notes |
|---|--------|--------|
| **Width** | **680 px** | Full column @2x (~340px display) |
| **Height** | **510 px** | **4:3** — fits no-scroll layout |
| **Layout** | Left half 0–340px · right half 340–680px | Labels may be baked in art |
| **Format** | PNG or WebP | |
| **Safe area** | Keep faces inside each half | Slight edge crop OK on small phones |

Drop files in Illuminairy: `public/satplan/int8/`

## INT8 prep path panels (legacy single-panel / triptych crop)

Still used when the matching two-up PNG is not shipped yet.

## Full triptych strip (optional / legacy)

Only needed for the combined **`prep-failed-stub`** screen (`beat="full"`) if you show all three panels at once:

| | Pixels |
|---|--------|
| **Width** | **1020 px** |
| **Height** | **680 px** |
| **Aspect** | **3:2** (three equal columns) |

File: `prep-paths-triptych.png`

Until dedicated panels exist, the app crops this strip with `object-position` (left / center / right).

## Other contrast visuals (no raster yet)

| Beat | Component | Asset guidance |
|------|-----------|----------------|
| INT3 retake | `ContrastBarChart` | CSS bars — no image |
| INT8 proof | `ContrastBarChart` | CSS bars — no image |
| INT8 mentors | `Int8MentorshipSplash` | Text cards — no image |
| INT12 format contrast | `Int12FormatContrast` | **680×510** @2x — **Live** `public/satplan/int12/digital-vs-paper-prep.png` (SAT 1979 paper vs SAT 2026 laptop) |
| INT2 GPA paradox *(planned)* | Split cards | **680×510** each or single **680×340** banner, 2:1 |

## QA checklist

- [ ] Image fits step without scroll at 390×844
- [ ] No horizontal overflow in funnel column
- [ ] Subject readable at 340px wide
- [ ] Instagram / Facebook in-app browser (see `files/research/meta-in-app-browser-qa.md`)
