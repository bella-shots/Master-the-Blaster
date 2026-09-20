# Active Context & Current Session State

> **Authoritative Document**: Live snapshot of current project progress, active priorities, recent decisions, and next steps.

---

## 1. Current Status & Phase Gate
- **Active Phase**: **Phase 1: Product Understanding, Requirements Freeze & Architecture**
- **Phase Status**: **100% COMPLETE** (Self-verified on Acceptance Gate).
- **Blocking Human Gate**: **HG-01: Phase 1 Product Architecture Sign-Off**.
- **Next Phase**: **Phase 2: AI Context & Project Foundation**.

---

## 2. Recent Architecture Decisions Locked
- **ADR-01**: React 19 + TypeScript + Vite + Tailwind CSS v4 + Express full-stack architecture on port 3000.
- **ADR-02**: Firebase Auth (Google Sign-In + Email/Password) with 7-role RBAC stored in Firestore `/users`.
- **ADR-03**: Cloud Firestore free Spark tier (1 GiB, 50k reads/day, 20k writes/day) for all structured data.
- **ADR-04**: Google Drive API for receipts, attachments, and visual builder assets (Folder `1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI`) at ₹0 cost.
- **ADR-05**: Gmail API for automated MOM meeting notes distribution at ₹0 cost.
- **ADR-06**: Full Visual Website Builder with 17 non-negotiable capabilities (drag/drop, arbitrary layout, resize, 3 breakpoints, custom CSS/JS, templates, publishing to `/p/:slug`).
- **ADR-07**: Server-side Gemini 2.5 Flash / Pro via `@google/genai` for AI features.

---

## 3. Human Gate HG-01 Sign-Off Required
To proceed to **Phase 2 (Project Foundation)**, the user must provide explicit approval in chat:
> Expected User Input: **"Phase 1 approved"** or **"Continue to Phase 2"** or **"DONE — RESUME PHASE 2"**.

---

## 4. Phase 2 Immediate Starting Actions
1. Verify workspace clean compilation and linting.
2. Initialize foundational directory structures for the 8 business modules.
3. Validate `.env.example` and package declarations for zero-cost compliance.
