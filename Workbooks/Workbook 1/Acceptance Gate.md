# Acceptance Gate

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx`

| PHASE 1 — DEFINITION OF DONE / ACCEPTANCE GATE |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| ID | Acceptance criterion | How AI verifies | Evidence to leave in project | If failed | Priority | Status |
| AC1 | Every user requirement is captured without silently reducing the full builder scope. | Compare Requirements Freeze against source workbook and all declared requirements. | Updated project-overview + requirements inventory. | Fix Phase 1 artifacts; do not proceed. | P0 | Not Started |
| AC2 | Architecture has one clear responsibility per technology/service. | Review architecture-context and Architecture Decisions for overlap/conflict. | Architecture context + decision record. | Resolve contradiction. | P0 | Not Started |
| AC3 | Full visual builder remains genuinely in scope. | Check Builder Architecture: all required capabilities present. | Builder architecture contract. | Do not downgrade; choose/reconfigure mature engine. | P0 | Not Started |
| AC4 | Cost invariant is preserved. | Scan dependencies/config for paid SaaS or billing-required services. | Cost decision record + dependency list. | STOP and redesign or ask user. | P0 | Not Started |
| AC5 | Admin vs standard-user authorization boundaries are explicit and server-enforced. | Review permissions matrix and mutation-boundary rules. | Permission model + security invariants. | Fix architecture before Phase 2. | P0 | Not Started |
| AC6 | Google Drive/Gmail/Auth dependencies are explicitly modeled with human gates. | Review integration decisions and Human Gates. | Integration boundary + gate records. | Add missing gate. | P0 | Not Started |
| AC7 | Seven durable context files plus feature-spec index exist and are internally consistent. | Open and cross-check each file. | All context files committed/saved. | Repair context and re-check. | P0 | Not Started |
| AC8 | Progress tracker contains exact Phase 2 starting point. | Read progress-tracker and compare with Phase roadmap. | Phase 2 handoff section. | Update tracker. | P0 | Not Started |
| AC9 | No business feature implementation was incorrectly marked complete during Phase 1. | Review change list/repo diff if available. | Phase boundary note. | Revert/record scope correction. | P0 | Not Started |
| AC10 | Phase 1 is explicitly marked COMPLETE only after all P0 checks pass. | Run final gate and write completion timestamp. | Progress tracker + phase completion record. | Continue work; do not claim completion. | P0 | Not Started |
| AC11 | Cloud Run and Firebase App Hosting are not mandatory production dependencies under the ₹0/no-billing invariant. | Review Architecture Decisions and Zero-Billing Architecture Proof; verify no Cloud Billing/Blaze dependency is required. | Decision record + proof evidence. | Reject architecture or stop for user decision. | P0 | Not Started |
| AC12 | Zero-Billing Architecture Proof is complete for Hosting, Auth, Firestore/Security Rules, Drive, Gmail and Gemini. | Open the proof sheet and verify ZBA-01..ZBA-07 evidence and statuses. | Zero-Billing Architecture Proof + linked test/config evidence. | Do not freeze architecture or proceed to Phase 2. | P0 | Not Started |
| AC13 | Existing Express/server.ts is not treated as approved production architecture merely because it exists. | Review architecture-context, server.ts role, and proof outcome. | Explicit temporary/retained/removed decision with reason. | Correct context before Phase 1 completion. | P0 | Not Started |
| AC14 | No consequential ₹5,000 reimbursement/accounting semantics are silently frozen. | Compare Requirements Freeze R7, architecture/context, and any policy decision. | Open decision recorded unless user explicitly confirms semantics. | Remove invented rule and stop at HG-07 if required. | P0 | Not Started |
| AC15 | Phase 1 completion claim is evidence-based; no self-declared PASS replaces missing proof. | Cross-check each P0 acceptance criterion against actual repository/config/test evidence. | Acceptance matrix with PASS/OPEN/FAIL and evidence references. | Continue Phase 1; do not claim completion. | P0 | Not Started |
