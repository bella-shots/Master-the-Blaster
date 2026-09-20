# Requirements Freeze

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx` — Verification Revision 2

| ID | Area | Frozen requirement | Access / ownership | Phase 1 decision | Acceptance definition | Priority | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R1 | Master site | Master website with Projects, Finance, HR and provision for custom pages. | Role-controlled | Included | Module boundaries defined. | P0 | Frozen |
| R2 | Projects | Create/edit projects, event date/countdown, members/access, files, expenses, MOM, notes. | Configurable by permission | Included | Project ownership/data boundary defined. | P0 | Frozen |
| R3 | Checklist Excel | User enters title and uploads ready-made Excel; file is reflected in project site. | Project access/editor | Included | File + metadata + display behavior defined. | P0 | Frozen |
| R4 | Expense Excel | User enters title and uploads Excel; budget allocation and employee expense details are represented/reflected. | Project access/editor + finance controls | Included | File + structured ledger relationship defined. | P0 | Frozen |
| R5 | MOM | MOM can be finalized and email-dispatched to registered recipients. | Authorized editor; recipient list controlled | Included | Trigger model must distinguish interactive vs unattended sending. | P0 | Frozen |
| R6 | Out-of-pocket | Employees record own-pocket expenses monthly; approved claims flow into salary payout calculation. | Employee claim; authorized approval | Included | Claim lifecycle + salary integration boundary defined. | P0 | Frozen |
| R7 | ₹5,000 rule | ₹5,000 threshold/allowance reference is retained. **Final accounting semantics are OPEN:** calculation mode, allowance treatment, any additional ₹5,000 line item, approval behavior and salary-settlement treatment must not be invented. | Sensitive finance/admin | **Decision Gate** | A written user-approved policy decision is required before these semantics are implemented. | P0 | Decision gate |
| R8 | Salary | Admin-only salary data; monthly due salary; pending carried forward; report. | Admin only | Included | Salary ledger boundary defined. | P0 | Frozen |
| R9 | Investments | Admin-only investment records: amount, from whom, date, return date. | Admin only | Included | Investment entity/access boundary defined. | P0 | Frozen |
| R10 | HR | Employee details and user identity/access relationship. | Admin-controlled sensitive fields | Included | Employee/user relationship defined. | P0 | Frozen |
| R11 | Flexible editing | Users with access edit permitted pages/projects/text/links; admins control protected pages. | Permission-based | Included | Server/data authorization model defined. | P0 | Frozen |
| R12 | Full website builder | Drag/drop, resize, arbitrary/nested layouts, responsive breakpoints, styling, animations, interactions, custom CSS/JS, reusable components, pages, templates/themes, extension/plugin capability, assets, preview, undo/redo, save/load, publish. | Authorized editors/admins | Included without reducing scope | Mature engine capability matrix required. | P0 | Frozen |
| R13 | New pages | Authorized users/admins create website pages/sheets. | Permission-based | Included | Page entity, slug, editor state, publication and permissions defined. | P0 | Frozen |
| R14 | Scale | Initial ~20 users; architecture should remain usable toward ~100 users. | Internal application | Included | No fixed-headcount logic. | P0 | Frozen |
| R15 | Cost | ₹0 additional software/service spend beyond existing Google AI Pro; no mandatory billing dependency. | Architecture invariant | Included | Every mandatory production dependency passes zero-billing proof. | P0 | Frozen |
