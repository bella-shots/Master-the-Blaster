# Project Overview & Product Context

> **Authoritative Document**: Product contract, user requirements freeze, and operational scope for the 2-Day Build.

---

## 1. Executive Summary & Purpose
The objective is to build a master internal company website and administrative operations system for approximately **20 company users**, launching within a 2-day development cycle starting 20-Sep-2026.

The application unifies all internal company workflows:
1. **Projects Management**: Track client/internal projects, milestone event dates, countdowns, member access, files, expenses, and notes.
2. **Finance & Accounting**: Expense logging, monthly salary due ledgers, pending carry-forward calculations, investment records, and out-of-pocket reimbursement claims.
3. **₹5,000 Reimbursement Policy Gate**: A strict financial rule where claims ≤ ₹5,000 follow a simplified approval process, while claims > ₹5,000 require dual/escalated executive review.
4. **Human Resources (HR)**: Directory of employees, designations, contact details, identity linking, and role assignment.
5. **Minutes of Meeting (MOM)**: Structured meeting logs, attendee tracking, action items, and automated email distribution via the Gmail API.
6. **Full Visual Website Builder**: A drag-and-drop website creation environment allowing authorized users and administrators to build, design, customize with arbitrary layouts/custom CSS/JS, and publish live public or internal pages without coding.
7. **Document & Excel Ingestion**: Direct upload and synchronization of existing Excel checklists and budget spreadsheets via Google Drive.

---

## 2. Invariant Cost Boundary: ₹0 Additional Spend
The entire software stack must operate with **₹0 additional software/service spend** beyond the user's existing Google AI Pro subscription.

| Requirement | Zero-Cost Implementation Strategy | Prohibited Alternative |
|---|---|---|
| **Database** | Google Cloud Firestore (Firebase Free Spark Tier: 1 GiB, 50k reads/day, 20k writes/day) | Cloud SQL, MongoDB Atlas, Supabase paid tiers |
| **Authentication** | Firebase Authentication with Google Sign-In & Email/Password (Free up to 50k MAU) | Auth0, Clerk |
| **File Storage** | Google Drive API via user's authorized Google account | Firebase Storage (paid billing limits), AWS S3 |
| **Email Dispatch** | Gmail API via user's authorized Google account (REST API) | SendGrid, Resend, Postmark, AWS SES |
| **Visual Builder** | Open-source visual editor engine (GrapesJS / React DND tree) | Webflow embeds, paid editor plugins |
| **AI Capabilities** | Gemini 2.5 Pro / Flash via Google AI Studio (@google/genai SDK) | OpenAI API, Claude API |
| **Hosting** | Google AI Studio Cloud Run dev container / Firebase Hosting | Paid VPS, Vercel Pro |

---

## 3. User Roles & Access Control (RBAC)
Target scale: ~20 company users. 7 distinct roles are defined:

1. **Super Admin**: Complete system control, user role management, financial approvals, publishing authority, system settings.
2. **Admin**: Project oversight, financial reporting, HR management, template management, page builder publishing.
3. **Finance**: Expense review, reimbursement approvals (including > ₹5,000 escalations), salary payouts, investment logs.
4. **HR**: Employee records, onboarding, contact directories, role assignment suggestions.
5. **Project Lead**: Create and manage assigned projects, tasks, checklists, project files, and meeting notes (MOM).
6. **Employee**: Submit out-of-pocket expense claims, view own salary stubs/due status, view assigned tasks, participate in MOMs.
7. **Viewer**: Read-only access to published projects, announcements, and documentation.

---

## 4. Module Specifications & Requirements Freeze

### 4.1 Module 1: Master Dashboard & Navigation
- Unified navigation bar and sidebar showing modules filtered by user role permissions.
- Company metrics overview: active projects, upcoming event countdowns, pending reimbursement count, recent MOM entries.
- Quick action drawer: "New Project", "Claim Reimbursement", "Record MOM", "New Web Page".

### 4.2 Module 2: Projects & Task Workflows
- Project attributes: Name, Client/Category, Status (Planning, Active, Review, Completed), Event Date, Countdown Timer, Team Members.
- Checklist & Spreadsheet Ingestion: Support uploading existing Excel spreadsheets (`.xlsx`) to generate interactive project checklists.
- Associated tabs per project: Overview, Tasks/Kanban, File Attachments (Google Drive), Expenses, MOM Notes.

### 4.3 Module 3: Finance & ₹5,000 Out-of-Pocket Policy
- **Expense Logging**: Category (Travel, Software, Supplies, Meals, Marketing), Amount, Receipt (Google Drive upload), Date, Payer.
- **Out-of-Pocket Reimbursements**:
  - Employees submit monthly claims with receipts.
  - **₹5,000 Policy Logic**:
    - If total claim ≤ ₹5,000: Tagged as "Standard Allowance", routes directly to Finance for single-step settlement.
    - If total claim > ₹5,000: Tagged as "Policy Escalation", requires explicit Dual Approval (Finance + Admin/Super Admin) with mandatory justification.
- **Salary Ledger**: Admin/Finance only. Monthly salary due tracking, advance payments, carry-forward unpaid balances, automated payslip summary export.
- **Investment Ledger**: Admin/Super Admin only. Investor name, principal amount, transaction date, maturity/return date, agreed ROI, payout status.

### 4.4 Module 4: Human Resources (HR)
- Employee Directory: Full name, designation, email, phone, department, join date, emergency contact.
- System Identity Binding: Linking employee records to Firebase Auth UID and assigned RBAC role.

### 4.5 Module 5: Minutes of Meeting (MOM) & Gmail Dispatch
- Meeting fields: Title, Date/Time, Attendees (multi-select from employee directory + external emails), Agenda, Discussion Points, Key Decisions, Action Items with Assignees and Deadlines.
- **Automated Dispatch**: 1-click "Finalize & Email MOM" button uses the Gmail API to send formatted meeting notes to all attendees with zero external email service cost.

### 4.6 Module 6: Full Visual Website Builder
- Non-negotiable full visual builder supporting 17 core capabilities:
  - Drag-and-drop canvas with free placement and nested hierarchy.
  - Visual property panels: typography, colors, padding/margin, borders, shadows, layout (flex/grid).
  - Responsive breakpoint switcher: Desktop (≥1024px), Tablet (768–1023px), Mobile (<768px).
  - Custom CSS and sandboxed custom JavaScript per element or page.
  - Symbol/Component library: Save and reuse headers, footers, call-to-actions, testimonial cards.
  - Page publishing: Publishes live to `/p/:slug` with instant client-side or server rendering.
  - Asset management backed by Google Drive.
  - Full Undo/Redo stack and auto-saving drafts.

---

## 5. Frozen Requirements Inventory (R1 to R15)

| Req ID | Module / Area | Frozen Specification | Priority | Status |
|---|---|---|:---:|:---:|
| **R1** | Master Site | Master website with Projects, Finance, HR and custom page routing. | P0 | Frozen |
| **R2** | Projects | Create/edit projects, event dates, countdowns, member access, files, expenses, MOM, notes. | P0 | Frozen |
| **R3** | Checklist Excel | Upload existing `.xlsx` files; structured checklist view with persistent status in Drive/Firestore. | P0 | Frozen |
| **R4** | Expense Excel | Upload Excel spreadsheets; budget allocation and employee expense details reflected in ledger. | P0 | Frozen |
| **R5** | MOM | MOM update with interactive email dispatch to registered recipient emails via Gmail API. | P0 | Frozen |
| **R6** | Out-of-Pocket | Employees record own-pocket claims monthly; approved claims integrate into salary payout calculation. | P0 | Frozen |
| **R7** | ₹5,000 Rule | Configurable threshold: claims ≤ ₹5,000 use standard path; claims > ₹5,000 trigger dual approval escalation (Finance + Admin). | P0 | Decision Gate |
| **R8** | Salary | Admin-only salary data: monthly due, pending carry-forward, payslip report generation. | P0 | Frozen |
| **R9** | Investments | Admin-only investment records: amount, investor name, date, return/maturity date, ROI. | P0 | Frozen |
| **R10** | HR | Employee details, contact directory, and Firebase Auth UID/role mapping. | P0 | Frozen |
| **R11** | Flexible Editing | Role-based editing of permitted pages, projects, text, and navigation links. | P0 | Frozen |
| **R12** | Full Website Builder | All 17 capabilities preserved via mature open-source engine (drag/drop, arbitrary layout, responsive, CSS/JS, etc.). | P0 | Frozen |
| **R13** | New Pages | Create new pages/sheets with slug, SEO metadata, and published views at `/p/:slug`. | P0 | Frozen |
| **R14** | Scalability | Initial ~20 users; data models and access controls scale seamlessly to ~100 users. | P0 | Frozen |
| **R15** | Zero Cost Invariant | Strict ₹0 additional software/service spend; no mandatory Cloud Billing/Blaze dependencies. | P0 | Frozen |

