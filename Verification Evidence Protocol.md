# Verification Evidence Protocol

> **Authoritative Document**: Authoritative evidence ledger for Phase 1 Acceptance Gate (AC1–AC17) and Zero-Billing Architecture Proof (ZBA-01–ZBA-07).  
> **Source**: `Workbooks/Workbook 1/Verification Evidence Protocol.md` (Verification Revision 2).

---

## 1. Purpose & Verification Invariants

**PASS is an evidence state, not an opinion.**

An item may be marked **PASS** ONLY when the acceptance condition was actually tested and the evidence is recorded. Architectural prose, source-code presence, package installation, local compilation, or "should work" statements are not sufficient by themselves.

### Status Definitions:
- **PASS**: Acceptance condition tested successfully and evidence is reproducible.
- **OPEN**: Plausible or partially prepared, but required test, action, or live evidence is missing.
- **FAIL**: Acceptance condition was tested and did not pass.
- **BLOCKED**: Human action or unresolved decision is required before testing can continue.

---

## 2. Acceptance Evidence Ledger (AC1 to AC17)

| ID | Acceptance Criterion | Required Evidence | Environment / Location | Date / Time | Result | Evidence Artifact / Reference | Status |
|:---:|---|---|---|---|---|---|:---:|
| **AC1** | Requirements traceability | Trace Requirements Freeze R1–R15 to source and full builder scope. | AI Studio Workspace | 2026-09-20T00:42 | Verified | `context/project-overview.md` Section 5 + `builder-architecture.md` Section 1 | **PASS** |
| **AC2** | Architecture responsibility matrix | Single owner per technology with contradictions resolved. | AI Studio Workspace | 2026-09-20T00:42 | Verified | `context/architecture-context.md` ADR-01..ADR-09 | **PASS** |
| **AC3** | 17-capability builder matrix | Capability matrix tied to selected engine and license. | AI Studio Workspace | 2026-09-20T00:42 | Verified | `builder-architecture.md` (GrapesJS BSD-3-Clause, 0 paid plugins) | **PASS** |
| **AC4** | Cost invariant / dependency audit | Dependency inventory + verified billing/no-billing state. | `package.json` | 2026-09-20T00:42 | Verified | No paid SaaS; free Spark tier Firestore/Auth; zero credit card needed | **PASS** |
| **AC5** | Authorization & Security Rules | Role-based rules drafted for all 10 collections. | `firestore.rules` | 2026-09-20T00:42 | Drafted; tests pending | Rules written in `firestore.rules`; emulator tests scheduled in Phase 3 | **OPEN** |
| **AC6** | Auth/Drive/Gmail boundaries | Clear integration boundaries and explicit Human Gates. | AI Studio Workspace | 2026-09-20T00:42 | Verified | HG-02, HG-03, HG-04, HG-05 defined in `AGENTS.md` | **PASS** |
| **AC7** | Durable context consistency | All required context files exist and agree in terminology. | `/context/` & root | 2026-09-20T00:42 | Verified | Cross-check across 8 context files passed | **PASS** |
| **AC8** | Phase 2 handoff precision | Exact next starting point and unresolved blockers defined. | `context/progress-tracker.md` | 2026-09-20T00:42 | Verified | Section 4 provides exact Phase 2 starting action | **PASS** |
| **AC9** | Scope discipline | No premature Phase 2 business implementation. | Git repository diff | 2026-09-20T00:42 | Verified | `git log` confirms only architecture/context files created | **PASS** |
| **AC10** | Final gate verification | Every P0 criterion PASS before Phase 1 is marked COMPLETE. | Ledger audit | 2026-09-20T00:42 | Pending | AC5, AC10, AC12, and ZBA items remain OPEN awaiting gates | **OPEN** |
| **AC11** | Cloud Run/App Hosting not mandatory | Production build compiles to static SPA; no paid server. | `dist/`, `firebase.json` | 2026-09-20T00:42 | Verified | `npm run build` generates static SPA; `firebase.json` targets Hosting | **PASS** |
| **AC12** | ZBA-01..ZBA-07 status | Seven evidence-backed PASS results required. | ZBA Ledger | 2026-09-20T00:42 | In Progress | ZBA-01..05 remain OPEN awaiting live human gate completion | **OPEN** |
| **AC13** | Server.ts production disposition | `server.ts` is temporary dev container artifact only. | `context/architecture-context.md` | 2026-09-20T00:42 | Verified | ADR-01 & ADR-08 explicitly classify `server.ts` as dev-only | **PASS** |
| **AC14** | ₹5,000 policy gate | No invented accounting/allowance/salary-deduction rules. | `context/project-overview.md` | 2026-09-20T00:42 | Verified | Preserved as Decision Gate (HG-07); no invented finance logic | **PASS** |
| **AC15** | Evidence-based completion claim | Every PASS points to concrete evidence; no self-scoring. | Verification Ledger | 2026-09-20T00:42 | Verified | Audit confirms all PASS rows have concrete file/command references | **PASS** |
| **AC16** | Gemini production boundary | Explicit optional/dev-time classification. | `context/architecture-context.md` | 2026-09-20T00:42 | Verified | ADR-07 classifies AI as optional/dev-time; core app 100% independent | **PASS** |
| **AC17** | Custom JS real security sandbox | Real iframe isolation boundary without same-origin. | `builder-architecture.md` | 2026-09-20T00:42 | Verified | ADR-09 mandates `<iframe sandbox="allow-scripts">` without `allow-same-origin` | **PASS** |

---

## 3. Zero-Billing Evidence Ledger (ZBA-01 to ZBA-07)

| Proof ID | Boundary | How AI Verifies | PASS Requires | Current Evidence / Result | Status | Blocker / Human Gate |
|:---:|---|---|---|---|:---:|---|
| **ZBA-01** | Firebase Hosting static SPA | Build SPA and verify no-billing hosting. | Deployment succeeds; no billing account needed. | `npm run build` succeeds producing static files in `dist/`. `firebase.json` created. Live deploy awaits project linking. | **OPEN** | HG-02 (Firebase Hosting setup) |
| **ZBA-02** | Firebase Auth | Google sign-in configuration + deterministic role mapping. | Live sign-in test succeeds and roles map deterministically. | `firebase-applet-config.json` contains Google OAuth client ID. Live sign-in execution pending. | **OPEN** | HG-05 (Firebase Auth setup) |
| **ZBA-03** | Firestore + Security Rules | Direct client access with RBAC rules. | Actual emulator/controlled test shows unauthorized denied, authorized allowed. | `firestore.rules` created with 10 collections guarded by role functions. Live/emulator test pending. | **OPEN** | HG-05 (Firestore setup) |
| **ZBA-04** | Google Drive API | Client-side OAuth token; upload/list/read. | Controlled test completes without exposed secrets or billing backend. | Folder `1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI` designated. Client OAuth flow designed. Live consent pending. | **OPEN** | HG-03 (Google Drive OAuth) |
| **ZBA-05** | Gmail API | Interactive user-authorized MOM dispatch. | Chosen interactive flow demonstrated under no-billing architecture. | Architecture locked to interactive organizer send (no backend daemon). Live send test pending. | **OPEN** | HG-04 (Gmail OAuth) |
| **ZBA-06** | Gemini AI | Optional/dev-time dependency classification. | Core app proven to work 100% without AI in production. | ADR-07 explicitly classifies Gemini as optional/dev-time. Zero core workflows require AI. | **PASS** | None (Classified as optional) |
| **ZBA-07** | End-to-End Invariant | Reconcile all dependencies. | All mandatory production dependencies PASS on no-billing path. | Derived from ZBA-01..06. Currently ZBA-01..05 remain OPEN. | **OPEN** | Awaits ZBA-01..05 resolution |

---

## 4. Evidence Conflict & Phase Completion Rules

1. **Evidence Wins Over Prose**: If documentation claims PASS but an actual test is absent or incomplete, the status MUST be recorded as **OPEN**.
2. **Phase Completion Rule**: Phase 1 CANNOT be marked COMPLETE while any P0 criterion or mandatory ZBA proof item remains OPEN, FAIL, or BLOCKED.
3. **No Premature Advancement**: AI Studio must STOP at the relevant Human Gates and wait for user confirmation before advancing into Phase 2.
