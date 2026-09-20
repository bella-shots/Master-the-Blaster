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

### ADR-01: Runtime & Full-Stack Application Framework
- **Decision**: React 19 + TypeScript + Vite + Tailwind CSS v4 + Express.
- **Rationale**: Proven, robust runtime already running in the AI Studio container. Single port `3000` ingress requirement satisfied. Express serves API routes at `/api/*` and Vite handles SPA serving.
- **Zero-Cost Status**: Included in the container environment. ₹0 additional hosting spend.

### ADR-02: Authentication & Role-Based Access Control (RBAC)
- **Decision**: Firebase Authentication (Google Sign-In + Email/Password) paired with Firestore `/users` role mappings.
- **Rationale**: Completely free up to 50,000 monthly active users. Seamless integration with Google Workspace and Google Identity Services.
- **Enforcement**:
  - Client-side: Route guards and UI component visibility based on user role.
  - Server-side & Database: Firestore Security Rules (`firestore.rules`) enforce role validation on every read/write.

### ADR-03: Primary Application Database
- **Decision**: Google Cloud Firestore (Firebase).
- **Rationale**: Firestore Spark tier provides 1 GiB storage, 50,000 reads/day, and 20,000 writes/day. Perfectly sized for a 20-person internal organization with virtually zero latency and real-time synchronization.
- **Collections**: `users`, `projects`, `tasks`, `expenses`, `reimbursements`, `salaries`, `investments`, `moms`, `notes`, `pages`, `builder_components`.

### ADR-04: Document, Spreadsheet & Asset Storage
- **Decision**: Google Drive API via authorized Google account.
- **Rationale**: Avoids Firebase Storage paid plan limitations or egress charges. Documents, receipts, and builder assets are stored in the user's dedicated Google Drive folder (`1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI`), while metadata and direct streaming links are tracked in Firestore.
- **Zero-Cost Status**: ₹0 additional cost using existing Google Drive storage.

### ADR-05: Automated Email Dispatch
- **Decision**: Gmail API via user's authorized Google account (using OAuth tokens).
- **Rationale**: Zero reliance on paid transactional email SaaS (SendGrid, Resend, Postmark). Provides authenticated internal delivery directly from the organizer's Gmail account.
- **Zero-Cost Status**: ₹0 additional cost.

### ADR-06: Full Visual Website Builder Engine
- **Decision**: Modular visual editor architecture (leveraging mature open-source GrapesJS or specialized React Drag-and-Drop tree components) outputting clean JSON schemas and live rendered React/HTML.
- **Rationale**: Re-inventing canvas drag/drop, resize handlers, and responsive CSS engines from scratch within 2 days carries severe execution risk. A mature engine guarantees all 17 required capabilities without proprietary licensing costs.
- **Zero-Cost Status**: 100% open-source, ₹0 cost.

### ADR-07: Artificial Intelligence Integration
- **Decision**: Google Gemini 2.5 Flash / Pro via `@google/genai` TypeScript SDK on the server-side.
- **Rationale**: Included in the user's Google AI Studio environment. Private API key kept securely in `process.env.GEMINI_API_KEY` on Express server.
- **Use Cases**: MOM auto-summarization, intelligent expense categorization, visual builder component generation.

---

## 3. Security & Boundary Invariants
1. **No Client-Side Secrets**: Never expose `GEMINI_API_KEY`, service account keys, or private secrets to the browser.
2. **Double Validation on Reimbursements**: The ₹5,000 policy is checked both in the React UI and on the Express/Firestore mutation layer.
3. **Admin Privilege Isolation**: Financial ledgers (salaries, investments) are strictly guarded so standard employees and viewers cannot query or inspect those Firestore documents.
4. **Sandboxed Code Execution**: In the visual builder, custom user JavaScript is executed in an isolated Function scope without `eval` or access to global browser credentials.
