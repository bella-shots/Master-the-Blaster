# product-context.md — Product Context & Requirements Freeze

> Mirrors `context/project-overview.md`. Master reference for user requirements, business rules, and module boundaries.

## 1. Scope & Objective
Deliver a comprehensive internal Master Company Website & Operations Platform for ~20 users within 2 days starting 20-Sep-2026 at **₹0 additional software cost** using Google AI Studio.

## 2. Core Modules
1. **Projects Management**: Milestones, countdowns, member access, task boards, Excel spreadsheet ingestion.
2. **Finance & Accounting**: Expense tracking, salary ledgers, carry-forward unpaid balances, investment registry.
3. **Out-of-Pocket Reimbursements & ₹5,000 Policy Gate**:
   - ₹5,000 threshold reference is preserved.
   - **Decision Gate (HG-07)**: Final accounting semantics (calculation mode, allowance treatment, any additional ₹5,000 line item, approval escalation, and salary settlement) remain strictly an open decision gate. No accounting formulas or dual-approval semantics may be invented without explicit user confirmation.
4. **Human Resources (HR)**: Employee directory, designations, contact info, role bindings.
5. **Minutes of Meeting (MOM)**: Structured notes, decisions, action items, automated Gmail API distribution.
6. **Full Visual Website Builder**: Genuinely flexible drag/drop canvas, nested layouts, responsive controls, custom CSS/JS, templates, asset management via Google Drive, live page publishing.

## 3. Role-Based Access Control (7 Roles)
- **Super Admin**: Universal permissions, settings, role allocation.
- **Admin**: All modules, approvals, page builder publishing, HR oversight.
- **Finance**: Financial ledgers, expense/reimbursement approval, salary records.
- **HR**: Employee directory, onboarding, staff profiles.
- **Project Lead**: Project creation, task assignment, checklist updates, meeting logs.
- **Employee**: Own expense claims, assigned tasks, own salary stub view, MOM viewing.
- **Viewer**: Read-only access to published content.

## 4. Cost Invariant
Strict ₹0 spend:
- Database: Cloud Firestore free tier (1 GiB, 50k reads/day, 20k writes/day).
- Auth: Firebase Authentication free tier (50k MAU).
- File Storage: Google Drive API (Folder `1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI`).
- Email Dispatch: Gmail API via user OAuth.
- AI Logic: Gemini 2.5 Flash / Pro via server-side `@google/genai` SDK.
