# MASTER CONTROL — VERIFICATION REVISION 3

> **Revision 4 Execution Audit Lock applies to this entire workbook.** Read `REVISION 4 — Execution Audit Lock.md` immediately after this document. Where it is stricter, Revision 4 wins.

## READ THIS BEFORE ANY EXECUTION

This document is the top-level control contract for Workbook 1.

Google AI Studio MUST NOT treat Workbook 1 as a checklist to complete by assertion. It is a controlled verification specification.

## Mandatory first sequence

1. Read every Workbook 1 document.
2. Read `REVISION 4 — Execution Audit Lock.md`.
3. Inspect the current repository and latest commit.
4. Audit every existing AC1–AC17 and ZBA-01–ZBA-07 status.
5. For every existing PASS, locate its exact evidence artifact.
6. Downgrade every unsupported PASS to OPEN or BLOCKED.
7. Record the audit baseline.
8. Only then implement, configure or correct anything.

## Mandatory execution sequence

AUDIT → PLAN → EXECUTE → ACTUAL TEST → CAPTURE EVIDENCE → CHECK PREREQUISITES → CONTRADICTION AUDIT → UPDATE STATUS → UPDATE CONTEXT → RETEST → FINAL AUDITS → ACCEPTANCE GATE.

## PASS is locked

PASS is legal only when the exact acceptance condition has actually been tested successfully and a complete, reproducible evidence record exists.

The following are NOT PASS evidence by themselves:
- code exists
- dependency installed
- configuration exists
- architecture document exists
- local build succeeds
- type-check succeeds
- emulator/config prepared
- model says verified
- another file says PASS

No PASS with caveat. No PASS pending human action. No verified-by-design PASS.

## Dependency locks

- ZBA-07 requires ZBA-01..06 PASS.
- AC12 requires ZBA-01..07 PASS.
- AC11 requires ZBA-01 PASS.
- AC5 requires ZBA-03 PASS.
- AC16 requires ZBA-06 PASS.
- AC3 requires actual builder engine + capability + license evidence.
- AC17 requires actual custom-JS isolation and negative/security tests.
- AC14 requires R7 to remain open unless the user explicitly approves the accounting semantics.
- AC15 requires every PASS to survive the mechanical evidence audit.
- AC10 requires AC1..AC17 PASS.

## Mandatory targeted audits

Before changing any current PASS, specifically re-audit:

- **AC13:** actual `server.ts` production dependency/runtime graph, not documentation alone.
- **AC15:** every current PASS against the complete Evidence Artifact Registry; AC15 cannot self-certify.
- **AC16/ZBA-06:** actual Gemini production dependency boundary and tested core independence.
- **AC3:** actual selected builder engine, 17-capability evidence and license.
- **AC17:** actual positive and hostile/negative custom-JS isolation tests.
- **Phase boundary:** no Phase 2 implementation or authorization while Phase 1 is incomplete.

## Human gate

If a required test needs account/OAuth/console action, unresolved decision, licensing decision or any other human action:

BLOCKED → STOP → tell the user the exact action and success condition → wait for the exact resume phrase → re-test.

Never change BLOCKED directly to PASS.

## Cost lock

₹0 additional software/service spend beyond the existing Google AI Pro subscription. No mandatory Cloud Billing/Blaze. Never enable billing autonomously.

## Phase lock

Phase 2 is prohibited until the Phase 1 completion formula is true.

A Phase 2 handoff may describe the future starting point, but that description is NOT authorization.

## Completion formula

PHASE_1_COMPLETE =
(AC1..AC17 = PASS)
AND (ZBA-01..ZBA-07 = PASS)
AND (all PASS evidence records complete)
AND (PASS Eligibility Audit = PASS)
AND (Dependency Consistency Audit = PASS)
AND (Contradiction Audit = PASS)
AND (Context Completeness Audit = PASS)
AND (Evidence Artifact Audit = PASS)
AND (Cost/Billing Audit = PASS)
AND (Phase Boundary Audit = PASS)
AND (no unresolved contradiction)

If any term is false, Phase 1 is NOT COMPLETE.

## Conflict rule

If any older workbook document conflicts with this control contract or Revision 4, do not silently choose. Apply the stricter evidence requirement, record the contradiction, correct the affected document/status, and re-run the audit.
