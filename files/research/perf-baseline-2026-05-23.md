# Performance baseline — 2026-05-23

**Environment:** `prototype/` @ `http://localhost:8765` (python `http.server`)  
**Tool:** Chrome Lighthouse → Mobile, Slow 4G (run manually and fill scores)

| Page | LCP | INP | CLS | TBT | Speed Index | Notes |
|------|-----|-----|-----|-----|-------------|-------|
| `Landing.html` | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Prototype uses unpkg React+Babel — not production budget |
| `Landing.html?step=worries` | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ | Step transition should feel instant |

**Requests / weight (Network tab, disable cache):**

| Page | Requests | Transfer size | DOMContentLoaded |
|------|----------|---------------|------------------|
| Landing | _TBD_ | _TBD_ | _TBD_ |
| Worries | _TBD_ | _TBD_ | _TBD_ |

**Follow-up:** Re-run after Screen 02 ships and before Next.js port; compare to targets in [`../funnel-performance.md`](../funnel-performance.md).
