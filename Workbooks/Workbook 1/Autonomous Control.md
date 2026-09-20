# Autonomous Control — Verification-First Execution

| Step | AI must do | Human gate? | Hard stop |
|---|---|---|---|
| P1-01 | Read all workbook documents and repository state. | No | Cannot read authoritative inputs. |
| P1-02 | **Audit every existing AC/ZBA status. Downgrade unsupported PASS.** | No | Evidence status cannot be determined. |
| P1-03 | Normalize requirements and identify consequential ambiguity. | Yes if architecture/security/cost/accounting affected. | Cannot safely default. |
| P1-04 | Build architecture decision matrix and test plan. | Only for unresolved decision. | Contradictory architecture. |
| P1-05 | Execute required ZBA and security tests one unit at a time. | Yes for OAuth/console/account actions. | Billing, secret, or missing human action. |
| P1-06 | Execute builder capability/license/security verification. | Yes for unresolved license/security choice. | Capability cannot be proven. |
| P1-07 | Capture evidence artifacts BEFORE assigning PASS. | No | Evidence unavailable. |
| P1-08 | Run prerequisite/dependency propagation checks. | No | Downstream PASS conflicts with upstream state. |
| P1-09 | Run Contradiction Audit and correct every conflict. | Only if conflict requires human decision. | Any unresolved contradiction. |
| P1-10 | Update durable context and progress tracker from verified state. | No | Context cannot be made consistent. |
| P1-11 | Run all final mechanical audits. | No | Any audit not PASS. |
| P1-12 | Run Acceptance Gate. | Yes if a genuine gate remains. | Any AC/ZBA not PASS. |
| P1-13 | Produce Phase 2 handoff only if Phase 1 completion formula is TRUE. | No | Completion formula FALSE. |

### Mandatory sequencing

For each acceptance item:

**AUDIT → TEST → EVIDENCE → PREREQUISITES → CONTRADICTION CHECK → STATUS**

Never:

**STATUS → find evidence later.**

### Phase lock

Phase 2 implementation is prohibited until AC1–AC17 and ZBA-01–ZBA-07 are all evidence-backed PASS and every final audit passes.
