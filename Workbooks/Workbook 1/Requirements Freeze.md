# Requirements Freeze

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx`

| PHASE 1 — REQUIREMENTS FREEZE / AUTHORITATIVE PRODUCT CONTRACT |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ID | Area | Frozen requirement | Access / ownership | Phase 1 decision | Acceptance definition | Priority | Status |
| R1 | Master site | Master website with Projects, Finance, HR and provision for custom pages. | Role-controlled | Included | Top-level navigation and module boundaries defined. | P0 | Frozen |
| R2 | Projects | Create/edit projects, event date/countdown, members/access, project-specific files, expenses, MOM, notes. | Configurable by permission | Included | Project data model and ownership defined. | P0 | Frozen |
| R3 | Checklist Excel | User can enter title and upload an already-ready Excel; file is reflected in the project site. | Project access/editor | Included | Authoritative file + metadata model defined; display/download behavior defined. | P0 | Frozen |
| R4 | Expense Excel | User can enter title and upload Excel; budget allocation and employee expense details are represented and reflected. | Project access/editor + finance controls | Included | File + structured expense ledger relationship defined. | P0 | Frozen |
| R5 | MOM | MOM can be updated and automatically emailed to registered project recipient emails. | Authorized editor; recipient list controlled | Included | Recipient source and send trigger defined. | P0 | Frozen |
| R6 | Out-of-pocket | Employees record own-pocket expenses monthly; claims flow into salary payout calculation. | Employee own claim; admin approval/configuration | Included | Claim lifecycle and salary integration boundary defined. | P0 | Frozen |
| R7 | ₹5,000 rule | Each employee has ₹5,000 allowance/threshold; amount above threshold plus requested extra ₹5,000 behavior must be represented as configurable policy until confirmed. | Sensitive finance/admin | Needs explicit policy confirmation if implementation semantics remain ambiguous | Phase 1 must not invent accounting behavior. | P0 | Decision gate |
| R8 | Salary | Admin-only salary data; monthly due salary; pending carried forward; generate report. | Admin only | Included | Salary ledger and carry-forward model defined. | P0 | Frozen |
| R9 | Investments | Admin-only investment records: amount, from whom, date, return date. | Admin only | Included | Investment entity and access boundary defined. | P0 | Frozen |
| R10 | HR | Employee details and user identity/access relationship. | Admin-controlled sensitive fields | Included | Employee/user relationship defined. | P0 | Frozen |
| R11 | Flexible editing | Users with access can edit permitted pages/projects/text/links; admins control protected pages. | Permission-based | Included | Server-side authorization model defined. | P0 | Frozen |
| R12 | Full website builder | Drag/drop, resize, arbitrary/nested layouts, responsive breakpoints, styling, animations, interactions, custom CSS/JS, reusable components, pages, templates/themes, extension/plugin capability, assets, preview, undo/redo, save/load, publish. | Admin/configurable + page-level permissions | Included without reducing scope | Mature editor engine integration boundary defined. | P0 | Frozen |
| R13 | New pages | Users/admins can create new website pages/sheets when permitted. | Permission-based | Included | Page entity, slug, content/editor state, publication and permissions defined. | P0 | Frozen |
| R14 | Scale | Initial ~20 users; architecture should not hardcode a 20-user ceiling and should remain usable as company approaches ~100 users. | Internal application | Included | No data model or permission logic depends on fixed headcount. | P0 | Frozen |
| R15 | Cost | Target ₹0 additional software/service spend beyond existing Google AI Pro; avoid mandatory paid SaaS/billing dependencies. | Architecture invariant | Included | Cost gate included; any unavoidable billing dependency requires explicit approval. | P0 | Frozen |
