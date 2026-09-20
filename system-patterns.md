# system-patterns.md — Architectural Blueprint & Design Conventions

> Mirrors `context/architecture-context.md`. Defines system patterns, component structures, API conventions, and security boundaries.

## 1. Component Architecture & Directory Structure
```
/src
  /components
    /layout         # Master Navbar, App Sidebar, Breadcrumbs, User Profile
    /dashboard      # Metric widgets, event countdowns, recent activity
    /projects       # Project detail view, Kanban task board, Excel spreadsheet viewer
    /finance        # Expense tracker, reimbursement submission, ₹5,000 approval drawer
    /hr             # Employee directory, profile edit, role picker
    /mom            # Meeting notes composer, attendee picker, Gmail dispatch button
    /builder        # Drag-and-drop canvas, block palette, style inspector, code editors
    /ui             # Reusable primitives (Buttons, Modals, Badges, Tooltips)
  /services
    firebase.ts     # Firebase Auth & Firestore client initialization
    driveService.ts # Google Drive folder browsing, file download, and upload
    gmailService.ts # Gmail API message composer and sending client
    geminiClient.ts # Client bridge to server-side /api/gemini endpoints
  /types.ts         # Global TypeScript interfaces and enums
  /utils.ts         # Date formatting, currency formatting (₹), validation helpers
```

## 2. API Design Conventions (`/api/*`)
All backend endpoints are implemented in `server.ts` or `/server/*.ts`:
- `GET /api/health` — Dev server health check.
- `POST /api/gemini/summarize-mom` — Server-side Gemini endpoint for meeting notes.
- `POST /api/gemini/categorize-expense` — Server-side Gemini expense classification.
- `POST /api/gmail/send-mom` — Server proxy to send meeting emails via Gmail API.
- `POST /api/upload-to-workspace` — Ingest local files/spreadsheets into `/data`.
- `GET /api/workspace-data-files` — List files in `/data`.

## 3. RBAC Permissions Matrix
| Module / Action | Super Admin | Admin | Finance | HR | Project Lead | Employee | Viewer |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Projects (Create/Edit)** | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Tasks (Assign/Update)** | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ (assigned) | ❌ |
| **Expense (Submit Own)** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Reimbursement ≤ ₹5k (Approve)** | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Reimbursement > ₹5k (Approve)** | ✅ | ✅ | ✅ (Dual) | ❌ | ❌ | ❌ | ❌ |
| **Salary Ledger (View/Edit)** | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Investments (View/Edit)** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **HR Directory (Edit)** | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **MOM (Create & Send Email)** | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Visual Builder (Design & Publish)** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Published Pages (View)** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
