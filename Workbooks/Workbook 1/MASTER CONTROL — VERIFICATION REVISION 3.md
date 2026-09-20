# MASTER CONTROL — VERIFICATION REVISION 3

## READ THIS BEFORE ANY EXECUTION

This document is the top-level control contract for Workbook 1.

Google AI Studio MUST NOT treat Workbook 1 as a checklist to complete by assertion. It is a controlled verification specification.

## Mandatory first sequence

1. Read every Workbook 1 document.
2. Inspect the current repository and latest commit.
3. Audit every existing AC1–AC17 and ZBA-01–ZBA-07 status.
4. Downgrade every unsupported PASS to OPEN or BLOCKED.
5. Record the audit.
6. Only then implement, configure or correct anything.

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

## Human gate

If a required test needs account/OAuth/console action, unresolved decision, licensing decision or any other human action:

BLOCKED → STOP → tell the user the exact action and success condition → wait for the exact resume phrase → re-test.

Never change BLOCKED directly to PASS.

## Cost lock

₹0 additional software/service spend beyond the existing Google AI Pro subscription. No mandatory Cloud Billing/Blaze. Never enable billing autonomously.

## Phase lock

Phase 2 is prohibited until the Phase 1 completion formula is true.

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

If any older workbook document conflicts with this Revision 3 control contract, do not silently choose. Apply the stricter evidence requirement, record the contradiction, correct the affected document/status, and re-run the audit.
