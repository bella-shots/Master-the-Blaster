# Acceptance Gate

> **Revision 4 execution control applies.**

| ID | Acceptance criterion | How AI verifies | PASS evidence required | If failed/open | Priority | Status |
| --- | --- | --- | --- | --- | --- | --- |
| AC1 | Every user requirement is captured without reducing builder scope. | Trace Requirements Freeze to source requirements. | Traceable requirements matrix. | Fix artifacts. | P0 | PASS |
| AC2 | Architecture has one clear responsibility per technology/service. | Cross-check all ADRs/context and actual implementation boundaries. | Architecture responsibility matrix with contradictions resolved. | Resolve contradiction. | P0 | OPEN |
| AC3 | Full visual builder remains genuinely in scope. | Verify actual selected engine, repository availability, license, and all 17 capabilities. | 17-capability evidence map + engine/license artifacts. | Reconfigure/choose engine. | P0 | OPEN |
| AC4 | Cost invariant is preserved. | Scan dependencies, hosting, runtime, APIs and configuration and observe billing state. | Dependency inventory + verified billing state. | STOP/redesign. | P0 | OPEN |
| AC5 | Admin vs standard-user authorization is explicit and enforced. | Run actual/emulator Security Rules tests. | Allowed/denied test results. | Fix security architecture. | P0 | OPEN |
| AC6 | Drive/Gmail/Auth dependencies and human gates are explicit and tested. | Review actual proof records and gates. | Integration test records + exact human gates. | Add gate. | P0 | OPEN |
| AC7 | Required durable context files exist and agree. | Open each file and cross-check terminology/status. | File inventory + consistency check. | Repair context. | P0 | OPEN |
| AC8 | Phase 2 handoff contains exact starting point and unresolved dependencies without authorizing Phase 2. | Compare handoff to final proof/acceptance state. | Handoff with exact next unit, blockers and explicit Phase-2 lock. | Update tracker/handoff. | P0 | OPEN |
| AC9 | No business-feature implementation is incorrectly marked complete in Phase 1. | Review diff/progress and implementation scope. | Scope boundary record. | Correct scope. | P0 | PASS |
| AC10 | Phase 1 COMPLETE is allowed only after all P0 criteria pass. | Final gate checks every row and audit. | All P0 rows PASS with evidence. | Remain incomplete. | P0 | OPEN |
| AC11 | Cloud Run/App Hosting are not mandatory production dependencies under ₹0 invariant. | Verify architecture and actual dependency graph. | Explicit production graph + no-billing evidence. | Reject/stop. | P0 | OPEN |
| AC12 | ZBA-01..ZBA-07 are all PASS. | Verify each ZBA row independently before deriving ZBA-07. | Seven evidence-backed PASS results. | Do not freeze/proceed. | P0 | OPEN |
| AC13 | Express/server.ts is not assumed to be approved production architecture. | Inspect package scripts, build output, hosting config, runtime entrypoint and production references. | Actual runtime/dependency proof. | Correct architecture or keep OPEN. | P0 | OPEN |
| AC14 | ₹5,000 reimbursement/accounting semantics remain open until user decision. | Compare R7 with all context/architecture files. | No invented semantics; HG-07 record if needed. | Remove invented rule and stop. | P0 | PASS |
| AC15 | Completion claim is evidence-based. | Independently enumerate every current PASS and inspect its evidence registry row/artifact. | Complete PASS-by-PASS audit. | Keep incomplete and correct evidence. | P0 | OPEN |
| AC16 | Production Gemini boundary is resolved. | Test actual dependency/runtime/core independence; do not accept classification prose alone. | Dependency trace + core-without-Gemini verification or tested no-billing production path. | Stop at HG-09. | P0 | OPEN |
| AC17 | Custom JavaScript security boundary is real. | Run legitimate execution plus hostile/negative isolation tests. | Threat model + implementation + test evidence. | Stop at HG-08/HG-09. | P0 | OPEN |
