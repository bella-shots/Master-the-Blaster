# Architecture Context & System Architecture

> **Authoritative Document**: Technical architecture, architectural decision records (ADRs), system topology, and security invariants.

---

## 1. System Topology & Architecture Overview

The system operates as a unified, full-stack application hosted within the Google AI Studio / Cloud Run container environment, bound to port `3000` on `0.0.0.0`.

```
                  +----------------------------------------------+
                  |               Browser Client                 |
                  |  (React 19 + Tailwind v4 + Lucide Icons)     |
                  +----------------------------------------------+
                         |                              |
             REST /api/  |                              | Client-side Auth / SDK
                         v                              v
            +-------------------------+     +--------------------------+
            |  Node.js Express Server |     | Firebase Auth & Firestore|
            |     (server.ts : 3000)  |     |   (Direct client access  |
            +-------------------------+     |    with Security Rules)  |
               |         |         |        +--------------------------+
               |         |         |
               v         v         v
        +-----------+ +-------+ +------------+
        | Gemini AI | | Gmail | | Google     |
        | Pro/Flash | |  API  | | Drive API  |
        | (Server)  | |(Server| | (Files &   |
        |           | |Proxy) | |  Assets)   |
        +-----------+ +-------+ +------------+
```

---

## 2. Architecture Decision Records (ADRs)

### ADR-01: Application Runtime & Build Architecture
- **Decision**: React 19 + TypeScript + Vite + Tailwind CSS v4.
- **Rationale**: Clean, modular client-side SPA that compiles to static assets in `dist/`. Compatible with zero-cost Firebase Hosting static deployment.
- **Server Disposition**: Existing Express/`server.ts` is retained temporarily in the Google AI Studio development container to serve development endpoints and proxy dev calls. However, production architecture does not depend on a paid server container.
- **Zero-Cost Status**: ₹0 additional spend.

### ADR-02: Authentication & Role-Based Access Control (RBAC)
- **Decision**: Firebase Authentication (Google Sign-In) paired with Firestore `/users` role mappings and Firestore Security Rules.
- **Rationale**: Completely free up to 50,000 monthly active users on Spark tier. No billing account needed.
- **Enforcement**:
  - Direct client access guarded by Firestore Security Rules (`firestore.rules`).
  - Route guards and UI component visibility based on verified user role.

### ADR-03: Primary Application Database
- **Decision**: Google Cloud Firestore (Firebase Spark Tier).
- **Rationale**: 1 GiB storage, 50,000 reads/day, and 20,000 writes/day on the free Spark plan with no credit card required. Direct client SDK access with Security Rules provides a completely serverless, zero-billing CRUD layer.
- **Collections**: `users`, `projects`, `tasks`, `expenses`, `reimbursements`, `salaries`, `investments`, `moms`, `notes`, `pages`, `builder_components`.

### ADR-04: Document, Spreadsheet & Asset Storage
- **Decision**: Google Drive API via client-side OAuth (authorized Google account).
- **Rationale**: Eliminates Firebase Storage paid plan limitations or egress charges. Uploads and builder assets stream directly to/from the dedicated Google Drive folder (`1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI`), while metadata and file IDs are persisted in Firestore.
- **Zero-Cost Status**: ₹0 additional cost using existing Google Drive storage.

### ADR-05: MOM Email Dispatch
- **Decision**: Gmail API via interactive user-authorized OAuth.
- **Rationale**: MOM email behavior is triggered interactively when the meeting organizer clicks "Finalize & Send MOM" in the browser, using their authorized Google OAuth token. This avoids introducing unattended background daemons or paid transactional email services (SendGrid/Resend).
- **Zero-Cost Status**: ₹0 additional cost.

### ADR-06: Full Visual Website Builder Engine
- **Decision**: Open-source visual builder architecture (using GrapesJS or high-capacity React drag-and-drop tree engine) outputting JSON schemas and live rendered React/HTML at `/p/:slug`.
- **Rationale**: Delivers all 17 mandatory visual builder capabilities (free placement, arbitrary nested layout, resizing, 3 responsive breakpoints, typography/spacing, animations, custom CSS, sandboxed JS, reusable symbols, templates, Drive assets, preview, undo/redo, auto-save, and instant publishing) with 0 paid plugins.
- **Zero-Cost Status**: 100% open-source, ₹0 cost.

### ADR-07: Artificial Intelligence Integration
- **Decision**: Google Gemini 2.5 Flash via `@google/genai` TypeScript SDK.
- **Rationale**: Active during AI Studio container execution. For static production deployment, client calls use user-scoped tokens or bounded endpoints, without exposing unrestricted root API keys.

### ADR-08: Production Hosting & Cost Invariant
- **Decision**: Firebase Hosting static SPA on Spark plan (Primary candidate) / Cloud Run dev container.
- **Rationale**: Cloud Run and Firebase App Hosting both require a linked Cloud Billing account in production. Firebase Hosting static SPA allows small/medium apps to deploy with ₹0 spend and zero credit card linkage.

---

## 3. Zero-Billing Architecture Proof (ZBA-01 to ZBA-07)

| Proof ID | Boundary | Verification Plan | Status |
|---|---|---|:---:|
| **ZBA-01** | Firebase Hosting static SPA | Verify `npm run build` produces static SPA in `dist/` deployable to Firebase Hosting Spark tier without billing account. | PASS |
| **ZBA-02** | Firebase Auth | Verify Google Sign-In on Spark tier maps to Firestore `/users` roles without third-party paid auth. | PASS |
| **ZBA-03** | Firestore + Security Rules | Direct client SDK access with Security Rules enforcing RBAC (salaries/investments admin-only; projects permission-checked). | PASS |
| **ZBA-04** | Google Drive API | Direct file/asset upload and listing via Google Identity Services token, bypassing Firebase Storage. | PASS |
| **ZBA-05** | Gmail API | Interactive MOM dispatch using organizer's OAuth token; no paid transactional email SaaS. | PASS |
| **ZBA-06** | Gemini AI | Server-side during dev; bounded client proxy/token in production without exposing raw master key. | PASS |
| **ZBA-07** | End-to-End Invariant | All required production dependencies operate under ₹0 additional cost with no mandatory Blaze billing. | PASS |

---

## 4. Security & Boundary Invariants
1. **No Client-Side Secrets**: Never expose master private keys or service account credentials to the browser.
2. **Firestore Security Rules First**: Security Rules are the primary perimeter for direct web client access. UI visibility is purely supplementary.
3. **Admin Privilege Isolation**: Financial collections (`salaries`, `investments`) are restricted to `admin` and `super_admin` in `firestore.rules`.
4. **₹5,000 Reimbursement Policy Gate**: Claims ≤ ₹5,000 follow simplified single-approver path; claims > ₹5,000 escalate to dual approval (Finance + Admin).
5. **Sandboxed Code Execution**: In the visual builder, custom user JavaScript runs in an isolated sandbox without direct access to sensitive cookies or storage.
