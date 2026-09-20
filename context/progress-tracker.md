# Progress Tracker & Phase Roadmap

> **Authoritative Document**: Living project tracker across the 2-day build cycle starting 20-Sep-2026.

---

## 1. High-Level Phase Roadmap

| Phase | Description | Day | Target Status | Actual Status |
|:---:|---|:---:|:---:|:---:|
| **Phase 1** | **Product Understanding, Requirements Freeze & Architecture** | Day 1 | In Progress | ⏸️ **IN PROGRESS** (Architecture frozen; awaiting Human Gates HG-01, HG-02, HG-05) |
| **Phase 2** | **AI Context & Project Foundation** | Day 1 | Planned | ⏳ Pending Phase 1 Sign-Off |
| **Phase 3** | **Authentication, Users, Roles & Permissions** | Day 1 | Planned | ⏳ Pending |
| **Phase 4** | **Database, Storage, Core Shell & Master Dashboard** | Day 1 | Planned | ⏳ Pending |
| **Phase 5** | **Projects & Full Visual Builder (Core Engine)** | Day 1 | Planned | ⏳ Pending |
| **Phase 6** | **Finance, HR, Expense & ₹5,000 Reimbursement Policy** | Day 2 | Planned | ⏳ Pending |
| **Phase 7** | **MOM, Email Dispatch (Gmail API) & Notes** | Day 2 | Planned | ⏳ Pending |
| **Phase 8** | **Full Website Builder Expansion, Custom Pages & Publishing** | Day 2 | Planned | ⏳ Pending |
| **Phase 9** | **Integration, Security, Permissions & End-to-End QA** | Day 2 | Planned | ⏳ Pending |
| **Phase 10** | **Production Deployment, Final Verification & Handover** | Day 2 | Planned | ⏳ Pending |

---

## 2. Phase 1 Acceptance Gate (AC1 to AC17) — Revision 3 Audit

| AC ID | Acceptance Criterion | Evidence Artifact / Prerequisite Verification | Status |
|:---:|---|---|:---:|
| **AC1** | Requirements captured without reducing builder scope | Traceability verified in `context/project-overview.md` §5 & `builder-architecture.md` §1 | **PASS** |
| **AC2** | Clear responsibility per technology/service | Responsibility matrix clean in `context/architecture-context.md` ADR-01..09 | **PASS** |
| **AC3** | Full visual builder 17 capabilities preserved | GrapesJS BSD-3-Clause identified; live capability tests pending Phase 2 | **OPEN** |
| **AC4** | Zero-billing / ₹0 cost invariant preserved | Dependency audit clean; live hosting observation locked to ZBA-01 | **OPEN** |
| **AC5** | Admin vs standard user boundaries explicit | Rules drafted in `firestore.rules`; emulator/live execution pending Phase 3 | **OPEN** |
| **AC6** | Google Drive / Gmail / Auth modeled with human gates | Boundaries defined; live OAuth/send tests pending ZBA-02/04/05 gates | **OPEN** |
| **AC7** | All 8 durable context files exist and agree | Inspected all 8 context files; terminology aligned; cross-check clean | **PASS** |
| **AC8** | Progress tracker contains exact Phase 2 starting point | Section 4 below defines exact Phase 2 handoff and blocked state | **PASS** |
| **AC9** | No premature business feature code in Phase 1 | `git log` / `git diff` confirms only architecture, rules, and context exist | **PASS** |
| **AC10** | Phase 1 marked complete only after all P0 checks pass | Incomplete while AC3, 4, 5, 6, 11, 12, 17 and ZBA-01..05 remain OPEN | **OPEN** |
| **AC11** | Cloud Run / App Hosting not mandatory in production | Static build in `dist/` verified; live hosting deploy locked to ZBA-01 | **OPEN** |
| **AC12** | ZBA-01..ZBA-07 each PASS with evidence | Evaluated in ZBA ledger; 6 of 7 items remain OPEN awaiting gates/tests | **OPEN** |
| **AC13** | Express/server.ts treated as temporary dev artifact | ADR-01 & ADR-08 classify server as dev-only; production is static SPA | **PASS** |
| **AC14** | ₹5,000 reimbursement semantics preserved as Decision Gate | `context/project-overview.md` R7 & §4.3; no invented accounting math | **PASS** |
| **AC15** | Completion claim is evidence-based | All PASS rows satisfy minimum proof in PASS Eligibility Matrix | **PASS** |
| **AC16** | Production Gemini boundary resolved | ADR-07 classifies AI as optional/dev-time; core app 100% independent | **PASS** |
| **AC17** | Custom JS real security sandbox | Sandbox `<iframe sandbox="allow-scripts">` designed; live hostile test pending | **OPEN** |

---

## 3. Zero-Billing Architecture Proof (ZBA-01 to ZBA-07) — Revision 3 Audit

| Proof ID | Boundary | How AI Verifies & Current Result | Status | Blocker / Human Gate |
|:---:|---|---|:---:|---|
| **ZBA-01** | Firebase Hosting static SPA | `npm run build` succeeds producing static `dist/`. Live deploy awaits project linking. | **OPEN** | **HG-02** (Firebase Hosting setup without billing account) |
| **ZBA-02** | Firebase Auth | Google OAuth client ID configured. Live sign-in test pending user interaction. | **OPEN** | **HG-05** (Firebase Auth live execution) |
| **ZBA-03** | Firestore + Security Rules | `firestore.rules` created with 10 collections. Live/emulator test pending Phase 3. | **OPEN** | **HG-05** (Firestore rules test) |
| **ZBA-04** | Google Drive API | Folder `1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI` designated. Live consent flow pending. | **OPEN** | **HG-03** (Google Drive OAuth consent) |
| **ZBA-05** | Gmail API | Interactive client-side send model designed. Live email send pending user consent. | **OPEN** | **HG-04** (Gmail OAuth consent) |
| **ZBA-06** | Gemini AI | ADR-07 explicitly classifies Gemini as optional/dev-time. Zero core workflows require AI. | **PASS** | None |
| **ZBA-07** | End-to-End Invariant | Derived strictly from ZBA-01..06. Currently 5 of 6 upstream items remain OPEN. | **OPEN** | Awaits ZBA-01..05 resolution |

---

## 4. Phase 2 Handoff & Starting Actions
- **Current Phase**: Phase 1 IN PROGRESS (Awaiting Human Gates HG-01, HG-02, HG-05).
- **Next Phase**: Phase 2 (AI Context & Project Foundation).
- **First Feature Unit**: Setup project dependencies (GrapesJS / drag-and-drop primitives), configure Firebase client SDK initialization, verify zero-cost dev server sanity.
- **Files to Read**: `AGENTS.md`, `context/architecture-context.md`, `firebase-applet-config.json`, `Verification Evidence Protocol.md`.
