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

## 2. Phase 1 Acceptance Gate (AC1 to AC17)

| AC ID | Acceptance Criterion | Evidence Artifact / Verification | Status |
|:---:|---|---|:---:|
| **AC1** | Requirements captured without reducing builder scope | `context/project-overview.md` Section 5 + `builder-architecture.md` | **PASS** |
| **AC2** | Clear responsibility per technology/service | `context/architecture-context.md` ADR-01 to ADR-09 | **PASS** |
| **AC3** | Full visual builder 17 capabilities preserved | `builder-architecture.md` (GrapesJS BSD-3-Clause, 0 paid plugins) | **PASS** |
| **AC4** | Zero-billing / ₹0 cost invariant preserved | `package.json` reviewed; Firestore Spark tier, no paid SaaS | **PASS** |
| **AC5** | Admin vs standard user boundaries explicit | `firestore.rules` drafted; emulator tests pending Phase 3 | **OPEN** |
| **AC6** | Google Drive / Gmail / Auth modeled with human gates | HG-01 through HG-09 in `AGENTS.md` and `Human Gates.md` | **PASS** |
| **AC7** | All 8 durable context files exist and agree | Cross-referenced across `/context/`, root, and `Verification Evidence Protocol.md` | **PASS** |
| **AC8** | Progress tracker contains exact Phase 2 starting point | Section 4 below defines exact Phase 2 handoff | **PASS** |
| **AC9** | No premature business feature code in Phase 1 | `git log` confirms only architecture, rules, and context files exist | **PASS** |
| **AC10** | Phase 1 marked complete only after all P0 checks pass | Incomplete while AC5, AC12, and ZBA proof items remain OPEN | **OPEN** |
| **AC11** | Cloud Run / App Hosting not mandatory in production | `firebase.json` defines static hosting; `npm run build` succeeds | **PASS** |
| **AC12** | ZBA-01..ZBA-07 each PASS with evidence | Evaluated in ZBA ledger; currently ZBA-01..05 remain OPEN | **OPEN** |
| **AC13** | Express/server.ts treated as temporary dev artifact | ADR-01 and ADR-08 explicitly classify `server.ts` as dev-only | **PASS** |
| **AC14** | ₹5,000 reimbursement semantics preserved as Decision Gate | `context/project-overview.md` R7 & Section 4.3; no invented rules | **PASS** |
| **AC15** | Completion claim is evidence-based | Every marked PASS points to reproducible files/commands | **PASS** |
| **AC16** | Production Gemini boundary resolved | ADR-07 classifies AI as optional/dev-time; core app 100% independent | **PASS** |
| **AC17** | Custom JS real security sandbox | ADR-09 mandates `<iframe sandbox="allow-scripts">` without `allow-same-origin` | **PASS** |

---

## 3. Zero-Billing Architecture Proof (ZBA-01 to ZBA-07)

| Proof ID | Boundary | How AI Verifies & Current Result | Status | Blocker / Human Gate |
|:---:|---|---|:---:|---|
| **ZBA-01** | Firebase Hosting static SPA | `npm run build` succeeds producing static files in `dist/`. `firebase.json` created. Live deploy awaits project linking. | **OPEN** | HG-02 (Firebase Hosting setup) |
| **ZBA-02** | Firebase Auth | `firebase-applet-config.json` contains Google OAuth client ID. Live sign-in execution pending. | **OPEN** | HG-05 (Firebase Auth setup) |
| **ZBA-03** | Firestore + Security Rules | `firestore.rules` created with 10 collections guarded by role functions. Live/emulator test pending. | **OPEN** | HG-05 (Firestore setup) |
| **ZBA-04** | Google Drive API | Folder `1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI` designated. Client OAuth flow designed. Live consent pending. | **OPEN** | HG-03 (Google Drive OAuth) |
| **ZBA-05** | Gmail API | Architecture locked to interactive organizer send (no backend daemon). Live send test pending. | **OPEN** | HG-04 (Gmail OAuth) |
| **ZBA-06** | Gemini AI | ADR-07 explicitly classifies Gemini as optional/dev-time. Zero core workflows require AI. | **PASS** | None (Classified as optional) |
| **ZBA-07** | End-to-End Invariant | Derived from ZBA-01..06. Currently ZBA-01..05 remain OPEN. | **OPEN** | Awaits ZBA-01..05 resolution |

---

## 4. Phase 2 Handoff & Starting Actions
- **Current Phase**: Phase 1 IN PROGRESS (Awaiting Human Gates HG-01, HG-02, HG-05).
- **Next Phase**: Phase 2 (AI Context & Project Foundation).
- **First Feature Unit**: Setup project dependencies (GrapesJS / drag-and-drop primitives), configure Firebase client SDK initialization, verify zero-cost dev server sanity.
- **Files to Read**: `AGENTS.md`, `context/architecture-context.md`, `firebase-applet-config.json`, `Verification Evidence Protocol.md`.
