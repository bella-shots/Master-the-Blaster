# START HERE

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx`

| PHASE 1 — PRODUCT UNDERSTANDING, REQUIREMENTS FREEZE & ARCHITECTURE \| GOOGLE AI STUDIO AUTONOMOUS HANDOFF |  |
| --- | --- |
| Item | Instruction |
| Purpose | This workbook is the complete execution contract for Phase 1 only. Upload this workbook to Google AI Studio at the start of the project. AI Studio must execute the phase autonomously, stop only when a human action/decision is genuinely required, tell the user exactly what to do, wait, and resume when the user confirms completion. |
| Phase window | Day 1 — 20-Sep-2026, 08:00–09:00 local time. Do not silently continue into Phase 2 before Phase 1 passes its final gate. |
| Application | Internal company master website for approximately 20 people initially, designed so the same architecture can support growth to approximately 100 people. |
| Core requirement | Projects + Finance + HR + project files + expense management + MOM email + out-of-pocket reimbursement + salary + investments + notes + permissions + a genuinely flexible visual website builder. |
| Builder requirement | Do NOT downgrade the builder to a predefined block-only editor. It must target drag/drop, arbitrary positioning/layouts, resize, nested columns/containers, responsive breakpoints, typography, styling, animations/interactions, custom CSS, custom JavaScript, reusable components, pages, templates/themes, extension/plugin capability, assets, preview, undo/redo, save/load and publish. |
| Cost requirement | Hard invariant: ₹0 additional software/service spend beyond the user's existing Google AI Pro subscription, with no mandatory Cloud Billing/Blaze dependency. Firebase Hosting Spark/no-billing path is a candidate; Cloud Run, Firebase App Hosting, Cloud Functions, paid SaaS and paid plugins are not acceptable under the invariant. Any service that requests billing must trigger a STOP gate. |
| Execution principle | AI is the implementation engine; the workbook is the authoritative Phase 1 contract. Read it fully before acting. Do not guess about requirements that affect architecture. |
| Source methodology | Follow the attached app-building playbook methodology: understand → pressure-test → architecture → durable context → explicit boundaries → verification. The playbook says architecture and context precede serious implementation and that agents must work in bounded units. |
| Critical behavior | If human intervention is required (account authorization, OAuth consent, GitHub connection, API key/secret entry, service permission, unresolved product decision), STOP. Do not fake completion. State the exact action, where to perform it, what success looks like, and the exact phrase the user should send to resume. |
| Resume behavior | When the user says the requested action is complete, re-check the dependency yourself. If it passes, resume automatically from the exact paused task. Do not restart Phase 1 and do not ask the user to repeat already-completed work. |
| No premature implementation | Phase 1 must produce the product/architecture/context foundation. Do not start business-feature implementation merely because the AI can code it. Phase 2 handles project foundation/environment implementation. |
| Completion rule | Phase 1 is complete only when every Phase 1 acceptance criterion passes, all required decisions are recorded, the Zero-Billing Architecture Proof is complete, all context files exist and agree, human gates are resolved or explicitly documented, and a handoff package for Phase 2 is written. |
