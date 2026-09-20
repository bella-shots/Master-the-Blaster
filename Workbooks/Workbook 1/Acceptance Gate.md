# Acceptance Gate

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx` — Verification Revision 2

| ID | Acceptance criterion | How AI verifies | PASS evidence required | If failed/open | Priority | Status |
| --- | --- | --- | --- | --- | --- | --- |
| AC1 | Every user requirement is captured without reducing builder scope. | Trace Requirements Freeze to source requirements. | Traceable requirements matrix. | Fix artifacts. | P0 | Not Started |
| AC2 | Architecture has one clear responsibility per technology/service. | Cross-check all ADRs/context and actual implementation boundaries. | Architecture responsibility matrix with contradictions resolved. | Resolve contradiction. | P0 | Not Started |
| AC3 | Full visual builder remains genuinely in scope. | Capability matrix against selected engine/license. | 17-capability evidence map; no capability assumed. | Reconfigure/choose engine. | P0 | Not Started |
| AC4 | Cost invariant is preserved. | Scan dependencies, hosting, runtime, APIs and configuration. | Dependency inventory + verified billing state. | STOP/redesign. | P0 | Not Started |
| AC5 | Admin vs standard-user authorization is explicit and enforced. | Run actual/emulator Security Rules tests and review privileged boundaries. | Allowed/denied test results. | Fix security architecture. | P0 | Not Started |
| AC6 | Drive/Gmail/Auth dependencies and human gates are explicit. | Review proof records and gates. | Integration test records + exact human gates. | Add gate. | P0 | Not Started |
| AC7 | Required durable context files exist and agree. | Open each file and cross-check terminology/status. | File inventory + consistency check. | Repair context. | P0 | Not Started |
| AC8 | Phase 2 handoff contains exact starting point and unresolved dependencies. | Compare handoff to final proof/acceptance state. | Handoff with exact next unit and blockers. | Update tracker/handoff. | P0 | Not Started |
| AC9 | No business-feature implementation is incorrectly marked complete in Phase 1. | Review diff/progress. | Scope boundary record. | Correct scope. | P0 | Not Started |
| AC10 | Phase 1 COMPLETE is allowed only after all P0 criteria pass. | Final gate checks every row. | All P0 rows PASS with evidence. | Remain incomplete. | P0 | Not Started |
| AC11 | Cloud Run/App Hosting are not mandatory production dependencies under ₹0 invariant. | Verify architecture and actual dependency graph. | Explicit production graph + no-billing evidence. | Reject/stop. | P0 | Not Started |
| AC12 | ZBA-01..ZBA-07 are all PASS. | Read Zero-Billing Architecture Proof and evidence references. | Seven evidence-backed PASS results. | Do not freeze or proceed. | P0 | Not Started |
| AC13 | Express/server.ts is not assumed to be approved production architecture. | Check actual production dependency graph. | Explicit temporary/removed decision supported by proof. | Correct architecture. | P0 | Not Started |
| AC14 | ₹5,000 reimbursement/accounting semantics remain open until user decision. | Compare R7 with all context/architecture files. | No invented semantics; HG-07 record if needed. | Remove invented rule and stop. | P0 | Not Started |
| AC15 | Completion claim is evidence-based. | Audit every PASS against Verification Evidence Protocol. | Each PASS points to concrete evidence; no self-declared PASS. | Keep incomplete and correct evidence. | P0 | Not Started |
| AC16 | Production Gemini boundary is resolved. | Verify either safe no-billing production path or explicit optional/dev-time classification. | Dependency record + credential/runtime evidence. | Stop at HG-09. | P0 | Not Started |
| AC17 | Custom JavaScript security boundary is real. | Verify sandboxed iframe/origin/process boundary or equivalent documented security mechanism. | Threat model + implementation/test evidence. | Stop at HG-08/HG-09. | P0 | Not Started |
