# AGENTS.md — Master Autonomous Execution Rules for Google AI Studio

> **Target Application**: Internal Company Master Website with Projects, Finance, HR, Reimbursements, Salaries, Investments, Minutes of Meeting (MOM), and Full Visual Website Builder.  
> **Cost Constraint**: Strict ₹0 additional software/service spend beyond user's existing Google AI Pro subscription.  
> **Target Scale**: ~20 internal company users. Low traffic, high reliability, zero operational debt.

---

## 1. Read Order & Mandatory First Steps
Every AI Studio session or turn MUST read files in the following order before making any changes:
1. `AGENTS.md` (this file — operational rules, execution protocol, human gates)
2. `context/progress-tracker.md` (active phase, completed units, next planned unit)
3. `context/project-overview.md` (authoritative product requirements, scope boundaries)
4. `context/architecture-context.md` (system architecture, ADRs, ₹0 cost invariants)
5. `context/ui-context.md` (visual layout, design tokens, navigation, responsive behavior)
6. `builder-architecture.md` (full visual builder specification, 17 required capabilities)
7. `data-dictionary.md` (all Firestore collection schemas and entity definitions)

---

## 2. Core Operational Commandments

### 2.1 One-Unit Execution & Verification
- Work on strictly **one feature unit** or phase at a time.
- Never skip phases or implement business features ahead of their defined phase.
- Always run `lint_applet` and `compile_applet` after edits. Never leave the applet in a broken compilation state.

### 2.2 No-Guessing Rule
- Never assume database schemas, environment variables, or external API contracts.
- Consult `data-dictionary.md` for schemas and `.env.example` for environment variables.
- If a requirement is ambiguous, check the authoritative workbooks in `/data/` or consult the user at an official Human Gate.

### 2.3 Strict ₹0 Additional Cost Invariant & Zero-Billing Architecture Proof
- **PROHIBITED MANDATORY DEPENDENCIES**:
  - Cloud Run / Firebase App Hosting in production (requires linked Cloud Billing / credit card).
  - Paid Firebase Storage (use Google Drive API via existing authorized account instead).
  - Paid Cloud Functions / Cloud Tasks.
  - Paid third-party Auth (Clerk, Auth0 — use Firebase Auth free Spark tier instead).
  - Paid Relational DBs (PostgreSQL, Supabase, Neon — use Firestore free Spark tier: 1 GiB, 50k reads/day, 20k writes/day).
  - Paid Email services (SendGrid, Resend, Postmark — use user-authorized Gmail API instead).
  - Paid visual editor plugins or SaaS embeds.
- **ZERO-BILLING ARCHITECTURE PROOF (ZBA-01 to ZBA-07)**:
  - ZBA-01: Firebase Hosting static SPA (Spark/no-billing eligible, no credit card).
  - ZBA-02: Firebase Auth (Google sign-in, role mapping in Firestore `/users`).
  - ZBA-03: Firestore + Security Rules (client direct access, role-enforced rules).
  - ZBA-04: Google Drive API (OAuth client-side token, binary assets stored in Drive).
  - ZBA-05: Gmail API (interactive user-authorized MOM send vs unattended limitation documented).
  - ZBA-06: Gemini AI (server-side in AI Studio dev, optional/bounded in static client).
  - ZBA-07: End-to-end invariant (every mandatory production dependency remains on no-billing path).
- **CRITICAL SERVER.TS DISPOSITION**:
  - Retain existing Express/`server.ts` temporarily during AI Studio development container execution.
  - Do NOT assume Express is a mandatory production backend; ensure client builds to `dist/` as a static SPA compatible with Firebase Hosting Spark tier.
- If any service or tool asks for billing activation or credit card: **STOP IMMEDIATELY**.

### 2.4 The Full Visual Website Builder Standard (Non-Negotiable)
- The visual builder requirement is **NEVER** to be downgraded to a block-only or markdown editor.
- Use a mature, 100% open-source engine (e.g., GrapesJS or high-capacity React drag-and-drop tree engine) configured to deliver all 17 capabilities:
  1. Drag & Drop free placement & reordering
  2. Arbitrary/nested container layouts (sections, grids, flex rows/cols, infinite nesting)
  3. Interactive element resizing
  4. 3 Responsive breakpoints (Desktop ≥1024px, Tablet 768–1023px, Mobile <768px) with per-breakpoint style overrides
  5. Typography & visual styling controls (font, size, weight, line-height, spacing, colors, borders, shadows)
  6. Animations & interaction states (hover, enter transitions)
  7. Element-level & page-level scoped custom CSS
  8. Sandboxed custom JavaScript execution for interactions
  9. Reusable components / symbol library
  10. Multi-page manager (slug, title, SEO metadata)
  11. Templates & design themes
  12. Open-source plugin / block extension architecture
  13. Asset management linked to Google Drive
  14. 1-click preview mode across desktop, tablet, and mobile
  15. Complete undo / redo history stack (minimum 20 states)
  16. Auto-save draft + versioned cloud saves
  17. 1-click instant page publishing to `/p/:slug`

### 2.5 Security & Credential Handling
- **NEVER** ask the user to paste passwords, private keys, API secrets, or raw OAuth credentials into chat.
- Client-side tokens must use GSI / Firebase Auth mechanisms.
- Sensitive collections in Firestore must be guarded by Firestore Security Rules, not hidden UI alone.

---

## 3. Human Intervention Gates Protocol

When a Human Gate is reached:
1. **STOP** all code generation immediately.
2. Present the exact deliverable, what was verified, and what specific action is needed.
3. Provide the exact resume phrase for the user (`DONE — RESUME PHASE X`).
4. Wait for explicit user confirmation before proceeding.

### Gate Reference (HG-01 to HG-09):
- **HG-01 (GitHub/Repository Connection)**: Repo connection/OAuth in UI. Resume: `DONE — RESUME PHASE 1`.
- **HG-02 (Zero-Billing Hosting Proof)**: Firebase Hosting setup without billing account. Resume: `DONE — RESUME PHASE 1`.
- **HG-03 (Google Drive OAuth)**: Consent granted for Drive file access/storage. Resume: `DONE — RESUME PHASE 1`.
- **HG-04 (Gmail OAuth / Email Architecture)**: User consent for MOM email dispatch. Resume: `DONE — RESUME PHASE 1`.
- **HG-05 (Firebase Auth / Firestore Setup)**: Firestore rules / Auth console actions. Resume: `DONE — RESUME PHASE 1`.
- **HG-06 (Billing Request)**: Any billing/credit card request triggered. Resume: `REDESIGN — RESUME PHASE 1`.
- **HG-07 (Product/Policy Ambiguity)**: Policy decisions (e.g., ₹5,000 threshold semantics). Resume: `RESUME PHASE 1`.
- **HG-08 (Tool/License Uncertainty)**: Open-source editor licensing check. Resume: `RESUME PHASE 1`.
- **HG-09 (Zero-Billing Architecture Decision)**: Final sign-off on ZBA-01..ZBA-07 matrix. Resume: `RESUME PHASE 1`.

---

## 4. Phase-by-Phase Roadmap

| Phase | Title | Milestone Deliverable |
|---|---|---|
| **Phase 1** | **Product Architecture** | Requirements freeze, ADRs, 8 context files, builder contract. |
| **Phase 2** | **Project Foundation** | Workspace setup, dependencies, zero-cost verification, dev server sanity. |
| **Phase 3** | **Authentication & RBAC** | Firebase Auth, 7 user roles, Firestore `/users`, permissions matrix. |
| **Phase 4** | **Database & Core Shell** | Firestore collections, Drive storage bridge, Master dashboard shell, navigation. |
| **Phase 5** | **Projects & Visual Builder v1** | Project management, task tracking, visual builder canvas foundation. |
| **Phase 6** | **Finance, HR & ₹5,000 Policy** | Salary ledger, investment tracker, out-of-pocket claims, approval gate. |
| **Phase 7** | **MOM, Gmail & Notes** | Meeting notes, attendee tracking, Gmail API dispatch, rich text notes. |
| **Phase 8** | **Builder Expansion & Publishing** | Custom CSS/JS sandbox, responsive breakpoints, templates, live publishing. |
| **Phase 9** | **Integration, Security & QA** | End-to-end QA, ACL matrix testing, financial calculations audit. |
| **Phase 10** | **Production & Handover** | Smoke test, zero-cost audit, final sign-off, handover. |
