# Feature Specifications Index

> **Authoritative Document**: Directory and sequencing of feature specifications across Phases 2 through 10.

---

## 1. Feature Specifications Roadmap

| Spec ID | Phase | Feature Name | Primary Deliverable | Dependencies |
|---|:---:|---|---|---|
| **FS-01** | Phase 2 | Project Foundation & Zero-Cost Setup | Clean workspace, core packages, dev build | Phase 1 sign-off |
| **FS-02** | Phase 3 | Authentication & 7-Role RBAC Model | Firebase Auth, user sessions, role guard | FS-01 |
| **FS-03** | Phase 4 | Firestore Database & Application Shell | Firestore schema, Drive connector, Navigation | FS-02 |
| **FS-04** | Phase 5 | Projects Management & Task Workflows | Projects, countdowns, Excel checklist viewer | FS-03 |
| **FS-05** | Phase 5 | Visual Website Builder Canvas Core | Drag/drop canvas, component tree, properties | FS-03 |
| **FS-06** | Phase 6 | Finance, Salary Ledgers & Investments | Expense tracking, salary records, investments | FS-03 |
| **FS-07** | Phase 6 | ₹5,000 Out-of-Pocket Reimbursement Gate | Dual-tier approval workflow (≤5k vs >5k) | FS-06 |
| **FS-08** | Phase 6 | HR Employee Directory & Role Mapping | Employee profiles, contact info, role linking | FS-02, FS-03 |
| **FS-09** | Phase 7 | Minutes of Meeting (MOM) & Notes | Structured meeting records, rich text notes | FS-03 |
| **FS-10** | Phase 7 | Automated MOM Email via Gmail API | 1-click email dispatch to meeting attendees | FS-09, Drive OAuth |
| **FS-11** | Phase 8 | Builder Extensions, Responsive & Code | Custom CSS/JS sandbox, 3 breakpoints, themes | FS-05 |
| **FS-12** | Phase 8 | Multi-Page Manager & Live Publishing | Dynamic `/p/:slug` route rendering, export | FS-11 |
| **FS-13** | Phase 9 | End-to-End Security Audit & QA Review | ACL verification, financial calculation tests | All prior |
| **FS-14** | Phase 10 | Production Smoke Tests & Client Handover | Final verification, zero-cost audit, handover | FS-13 |

---

## 2. Specification Standards
Each subsequent feature specification must document:
- User story and acceptance criteria.
- Component hierarchy and data flow.
- Exact Firestore query and mutation patterns.
- Role-based permissions matrix for the feature.
- Zero-cost verification check.
