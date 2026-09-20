# Active Context & Current Session State

> **Authoritative Document**: Live snapshot of current project progress, active priorities, recent decisions, and next steps.

---

## 1. Current Status & Phase Gate
- **Active Phase**: **Phase 1: Product Understanding, Requirements Freeze & Architecture**
- **Phase Status**: **IN PROGRESS / LOCKED AT REVISION 4 AUDIT** (Baseline commit `eaf34bc`; mechanical evidence ledger enforced).
- **Human Gates Active**: **HG-01 (GitHub/Repo Connection)**, **HG-02 (Zero-Billing Hosting Proof)**, **HG-03 (Google Drive OAuth)**, **HG-04 (Gmail OAuth / Trigger Model)**, **HG-05 (Firebase Auth / Firestore Setup)**, **HG-07 (R7 ₹5,000 Accounting Semantics Decision Gate)**.
- **Next Phase**: **Phase 2: AI Context & Project Foundation** (NOT AUTHORIZED until Phase 1 completion formula is true).

---

## 2. Recent Architecture Decisions Locked
- **ADR-01**: React 19 + TypeScript + Vite + Tailwind CSS v4. Clean SPA targeting Firebase Hosting static deployment; Express/`server.ts` is currently a development container runtime artifact in AI Studio and is NOT a production dependency.
- **ADR-02**: Firebase Auth (Google Sign-In) with 7-role RBAC stored in Firestore `/users` and enforced via `firestore.rules`.
- **ADR-03**: Cloud Firestore free Spark tier (1 GiB, 50k reads/day, 20k writes/day) with direct client access protected by Security Rules.
- **ADR-04**: Google Drive API client-side bridge for receipts, attachments, and visual builder assets (Folder `1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI`) at ₹0 cost.
- **ADR-05**: Interactive user-authorized Gmail API dispatch for MOM meeting notes at ₹0 cost; no unattended background daemon.
- **ADR-06**: Full Visual Website Builder with 17 non-negotiable capabilities (open-source engine, e.g. GrapesJS BSD-3-Clause).
- **ADR-07**: Gemini AI is classified as **Optional / Dev-Time Enhancement**; core production workflows operate 100% deterministically without AI; no mandatory server or billing dependency.
- **ADR-08**: Target production hosting is Firebase Hosting static SPA; Cloud Run / App Hosting are rejected as mandatory production dependencies under the ₹0 invariant. ZBA-01..ZBA-07 remain OPEN pending live deployment/testing.
- **ADR-09**: Builder JavaScript Isolation: Sandboxed iframe (`<iframe sandbox="allow-scripts">` without `allow-same-origin`) as the mandatory security boundary.

---

## 3. Human Gates & Resume Protocols
- **HG-02 (Firebase Hosting)**: Resume phrase: `DONE — RESUME PHASE 1`.
- **HG-03 (Google Drive OAuth)**: Resume phrase: `DONE — RESUME PHASE 1`.
- **HG-04 (Gmail OAuth)**: Resume phrase: `DONE — RESUME PHASE 1`.
- **HG-05 (Firebase Auth / Firestore)**: Resume phrase: `DONE — RESUME PHASE 1`.
- **HG-07 (R7 ₹5,000 Policy)**: Open Decision Gate; resume phrase: `RESUME PHASE 1`.

---

## 4. Phase 2 Starting Point (Descriptive Only)
> **MANDATORY PHASE-2 LOCK**:
> **PHASE 2 STARTING POINT ONLY. NOT AUTHORIZED UNTIL THE PHASE 1 COMPLETION FORMULA IS TRUE.**
> `Phase 1 Complete = (AC1..AC17 == PASS) ∧ (ZBA-01..ZBA-07 == PASS) ∧ (Unresolved Gates == 0)`

When authorized:
1. Setup project dependencies (GrapesJS / drag-and-drop primitives).
2. Configure Firebase client SDK initialization.
3. Verify zero-cost dev server sanity.
