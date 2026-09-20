# START HERE

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx` — Verification Revision 2

| PHASE 1 — PRODUCT UNDERSTANDING, REQUIREMENTS FREEZE & ARCHITECTURE |  |
| --- | --- |
| Purpose | This workbook is the complete execution contract for Phase 1. Upload it to Google AI Studio. AI Studio must execute Phase 1 autonomously, stop only when a genuine human action/decision is required, and resume from the exact paused unit after confirmation. |
| Phase window | Day 1 — 20-Sep-2026, 08:00–09:00 local time. Do not silently continue into Phase 2. |
| Application | Internal company master website for approximately 20 people initially, with architecture that can support approximately 100 people. |
| Core requirement | Projects + Finance + HR + files + expense management + MOM email + out-of-pocket reimbursement + salary + investments + notes + permissions + genuinely flexible visual website builder. |
| Builder requirement | Never downgrade to a block-only editor. Preserve drag/drop, free positioning/layout, nested containers, resize, responsive breakpoints, typography/styling, animations/interactions, custom CSS, custom JavaScript, reusable components, pages, templates/themes, extension/plugin capability, assets, preview, undo/redo, save/load and publish. |
| Cost requirement | Hard invariant: ₹0 additional software/service spend beyond the existing Google AI Pro subscription, with no mandatory Cloud Billing/Blaze dependency. Cloud Run, Firebase App Hosting, Cloud Functions, paid SaaS and paid plugins are not acceptable as mandatory production dependencies unless the user explicitly changes the invariant. |
| Source methodology | Understand → pressure-test → architecture → durable context → explicit boundaries → verification. Architecture and context precede serious implementation. |
| **Verification rule** | **A documented design, source-code presence, or successful local build is NOT by itself proof that an acceptance criterion or ZBA item passed. Every PASS requires concrete evidence recorded in the Verification Evidence Protocol. If evidence is missing, status MUST be OPEN.** |
| **No self-scoring** | AI must not mark AC/ZBA items PASS merely because it believes the architecture is correct. PASS requires reproducible evidence. |
| **Human gate rule** | If account authorization, OAuth consent, billing state, console setup, licensing uncertainty, or an unresolved product/security/accounting decision is required, STOP. Never request passwords, private keys, client secrets, access tokens or raw credentials in chat. |
| **Production architecture rule** | Firebase Hosting static SPA is only a candidate until the complete ZBA proof passes. Express/server.ts remains temporary until its production necessity is actually proven. |
| **Gemini rule** | Do not invent a "bounded proxy" without identifying where it runs and why that runtime remains within the ₹0/no-billing invariant. If production Gemini cannot be proven safely, classify AI as optional/dev-time or stop at HG-09. |
| **Gmail rule** | Distinguish interactive user-authorized MOM sending from unattended/background sending. Do not claim the latter is solved merely because the Gmail API can be called from a browser. |
| **₹5,000 rule** | Retain the ₹5,000 threshold reference, but do not invent final accounting, allowance, extra-line-item, approval or salary-settlement semantics. Those remain a Decision Gate until explicitly resolved. |
| Completion rule | Phase 1 is complete only when every P0 acceptance criterion has evidence-backed PASS, ZBA-01..ZBA-07 are PASS, no consequential ambiguity remains unrecorded, context files agree, and Phase 2 handoff is complete. Otherwise Phase 1 remains incomplete. |
