# Data Dictionary & Firestore Entity Schemas

> **Authoritative Document**: Complete specification of all 10 Firestore collections, entity relationships, fields, data types, and security constraints.

---

## 1. Collection Overview

| Collection Name | Purpose | Primary Access Roles | Sensitive Fields |
|---|---|---|---|
| `/users` | User profiles, auth linking, RBAC roles | All (read basic info), Admin (write) | `role`, `salaryDetails` |
| `/projects` | Company & client projects, milestones | All members (read), Leads/Admin (write) | `budget`, `clientContacts` |
| `/tasks` | Project task boards & checklist items | Project members (read/write) | None |
| `/expenses` | Project & company operational expenses | Finance, Admin, Project Lead | Receipts, payment methods |
| `/reimbursements` | Out-of-pocket claims & ₹5,000 policy | Employee (own), Finance, Admin | Bank details, settlement status |
| `/salaries` | Monthly salary due ledgers & carry-forward | Admin, Finance, Employee (own stub) | Basic pay, allowances, deductions |
| `/investments` | Company investments, capital, returns | Super Admin, Admin only | Investor names, ROI, principals |
| `/moms` | Minutes of Meeting & decisions | Attendees, Project members, Admin | Discussion points |
| `/notes` | Shared and private project notes | Creator, Project members | None |
| `/pages` | Full visual website builder pages | Admin, Editor (write), Public (read) | Custom JavaScript |
| `/builder_components` | Reusable UI components & symbols | Admin, Editor (write), All (read) | None |

---

## 2. Detailed Collection Schemas

### 2.1 `/users/{userId}`
```typescript
interface UserDocument {
  id: string;                         // Firebase Auth UID
  email: string;                      // Google Account email
  displayName: string;
  avatarUrl?: string;
  role: 'super_admin' | 'admin' | 'finance' | 'hr' | 'project_lead' | 'employee' | 'viewer';
  department?: string;                // 'Engineering', 'Operations', 'Design', etc.
  designation?: string;               // 'Lead Architect', 'Accountant', etc.
  phoneNumber?: string;
  joinedAt: string;                   // ISO 8601 string
  isActive: boolean;
  updatedAt: string;
}
```

### 2.2 `/projects/{projectId}`
```typescript
interface ProjectDocument {
  id: string;                         // Unique ID
  name: string;                       // Project name
  description: string;
  client?: string;
  category: 'Internal' | 'Client' | 'Event';
  status: 'Planning' | 'Active' | 'Review' | 'Completed' | 'Archived';
  eventDate?: string;                 // Target deadline or event date
  leadId: string;                     // Foreign key -> users.id
  memberIds: string[];                // Foreign keys -> users.id[]
  driveFolderId?: string;             // Google Drive subfolder for files
  driveSpreadsheetId?: string;        // Ingested Excel checklist file ID
  totalBudget?: number;               // INR (₹)
  createdAt: string;
  updatedAt: string;
}
```

### 2.3 `/tasks/{taskId}`
```typescript
interface TaskDocument {
  id: string;
  projectId: string;                  // Foreign key -> projects.id
  title: string;
  description?: string;
  assigneeId?: string;                // Foreign key -> users.id
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  status: 'Backlog' | 'Todo' | 'In_Progress' | 'Done';
  dueDate?: string;
  order: number;                      // For Kanban reordering
  createdAt: string;
  updatedAt: string;
}
```

### 2.4 `/expenses/{expenseId}`
```typescript
interface ExpenseDocument {
  id: string;
  projectId?: string;                 // Optional link to project
  title: string;
  category: 'Travel' | 'Software' | 'Supplies' | 'Meals' | 'Marketing' | 'Other';
  amount: number;                     // INR (₹)
  paidByUserId: string;               // Foreign key -> users.id
  receiptDriveFileId?: string;        // Google Drive file ID
  receiptUrl?: string;                // Drive direct view URL
  expenseDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  approvedBy?: string;                // Foreign key -> users.id
  notes?: string;
  createdAt: string;
}
```

### 2.5 `/reimbursements/{claimId}` (with ₹5,000 Policy Gate)
```typescript
interface ReimbursementDocument {
  id: string;
  claimantId: string;                 // Foreign key -> users.id
  claimantName: string;
  title: string;
  month: string;                      // 'YYYY-MM' (e.g. '2026-09')
  amount: number;                     // INR (₹)
  policyTier: 'STANDARD_LEQ_5000' | 'ESCALATED_GT_5000';
  requiresDualApproval: boolean;      // true if amount > 5000
  receipts: Array<{
    filename: string;
    driveFileId: string;
    viewLink: string;
  }>;
  status: 'Draft' | 'Submitted' | 'Finance_Approved' | 'Dual_Approved' | 'Settled' | 'Rejected';
  financeApproverId?: string;
  financeApprovalDate?: string;
  adminApproverId?: string;           // Required if policyTier === 'ESCALATED_GT_5000'
  adminApprovalDate?: string;
  settledInSalaryMonth?: string;      // Links claim payout to monthly salary ledger
  rejectionReason?: string;
  createdAt: string;
  updatedAt: string;
}
```

### 2.6 `/salaries/{salaryId}`
```typescript
interface SalaryRecord {
  id: string;
  employeeId: string;                 // Foreign key -> users.id
  employeeName: string;
  month: string;                      // 'YYYY-MM'
  baseSalary: number;                 // INR (₹)
  outOfPocketAdditions: number;       // Sum of settled reimbursements
  advancesOrDeductions: number;       // Deductions
  netSalaryDue: number;               // baseSalary + additions - deductions
  paidAmount: number;
  pendingBalanceCarriedForward: number;
  status: 'Pending' | 'Partially_Paid' | 'Fully_Paid';
  paymentDate?: string;
  paymentReference?: string;
  generatedBy: string;                // Admin UID
  updatedAt: string;
}
```

### 2.7 `/investments/{investmentId}`
```typescript
interface InvestmentRecord {
  id: string;
  investorName: string;
  amount: number;                     // INR (₹)
  investmentDate: string;
  expectedReturnDate: string;
  agreedRoiPercentage: number;        // e.g. 12.5%
  expectedReturnAmount: number;       // Principal + returns
  status: 'Active' | 'Matured' | 'Returned';
  notes?: string;
  recordedBy: string;                 // Admin UID
  createdAt: string;
}
```

### 2.8 `/moms/{momId}`
```typescript
interface MOMDocument {
  id: string;
  projectId?: string;
  title: string;
  meetingDate: string;
  locationOrLink?: string;
  attendees: Array<{
    name: string;
    email: string;
    attended: boolean;
  }>;
  agenda: string;
  discussionNotes: string;
  decisions: string[];
  actionItems: Array<{
    task: string;
    assigneeEmail: string;
    deadline: string;
    completed: boolean;
  }>;
  emailDispatched: boolean;
  emailDispatchedAt?: string;
  emailDispatchError?: string;
  recordedBy: string;
  createdAt: string;
}
```

### 2.9 `/notes/{noteId}`
```typescript
interface NoteDocument {
  id: string;
  projectId?: string;
  authorId: string;
  title: string;
  content: string;                    // Markdown or rich text JSON
  tags: string[];
  isPinned: boolean;
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;
}
```

### 2.10 `/pages/{pageId}` & `/builder_components/{componentId}`
Defined in `builder-architecture.md`:
- Stored as hierarchical JSON component trees with desktop styles and mobile/tablet breakpoint overrides.
