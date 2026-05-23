# Deprecated — do not extend

This folder was a **browser-Babel** sketch (unpkg React + `@babel/standalone`). It is **not** the production funnel.

## Source of truth (build here)

| What | Where |
|------|--------|
| Live route | **https://illuminairy.com/satplan** |
| Code | Illuminairy main repo → `app/satplan/`, `components/sat-plan/`, `lib/sat-plan-funnel/` |
| Specs & screen copy | This repo (`files/`, `specs/`, `PLAN-sat-funnel.md`) |

## Local preview (legacy only)

```bash
python3 -m http.server 8765
# → http://localhost:8765/Landing.html
```

Use **only** to compare old pixels. New screens, CTAs, and analytics belong in **Next.js `/satplan`**.
