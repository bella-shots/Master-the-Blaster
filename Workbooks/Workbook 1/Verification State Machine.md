# Verification State Machine — NON-NEGOTIABLE

> **Revision 4 Execution Audit Lock applies.**

## Purpose

This is a control protocol, not explanatory guidance. Google AI Studio MUST obey it before changing any Phase 1 status.

The workbook is a test specification. It is not a checklist that may be self-scored.

## Four-state separation

For every AC/ZBA item, maintain these independently:

1. Implementation state — what exists in code/configuration.
2. Test state — whether the exact acceptance test actually ran.
3. Evidence state — whether reproducible evidence exists.
4. Verification status — NOT STARTED / OPEN / BLOCKED / FAIL / PASS.

Never infer one from another.

## Authoritative status states

Every AC1–AC17 and ZBA-01–ZBA-07 MUST have exactly one state:
- NOT STARTED — no verification attempt yet.
- OPEN — work may exist, but required evidence/test is missing.
- BLOCKED — a human action or unresolved decision prevents the required test.
- FAIL — the required test was actually run and failed.
- PASS — and ONLY PASS — when the exact acceptance condition was actually tested successfully and the evidence record is complete and reproducible.

No other status is valid.

## PASS eligibility gate

An item MUST NOT become PASS unless ALL are true:

1. Exact acceptance condition is written.
2. Exact test/action was actually performed.
3. Actual environment/repository/project/location is identified.
4. Timestamp/date is recorded.
5. Observed result is recorded.
6. Reproducible evidence artifact exists.
7. Evidence artifact is linked or named precisely enough for another agent to inspect.
8. Required human action is recorded as completed.
9. Required billing-state observation is recorded.
10. All defined prerequisites are PASS.
11. No contradiction exists with Requirements Freeze, Architecture Decisions, Human Gates, context files, implementation, or another evidence record.
12. Result is not based on prose, intent, source-code presence, package installation, configuration presence, local compilation, or model belief alone.
13. The Evidence Artifact Registry contains the PASS record.

If ANY condition is false, status MUST remain OPEN or BLOCKED.

## Forbidden PASS language

Never use these as sufficient evidence:

implemented; configured; verified by design; should work; architecture supports; package installed; build succeeds; code exists; documented; ready; production-ready; tested without actual test result; PASS with caveat; PASS pending deployment; PASS pending human action.

If evidence is pending, state is OPEN/BLOCKED.

## Dependency propagation rules

- ZBA-07 = PASS only if ZBA-01..ZBA-06 are all PASS.
- AC12 = PASS only if ZBA-01..ZBA-07 are all PASS.
- AC4 = PASS only with complete mandatory dependency inventory AND actual billing/no-billing evidence.
- AC11 = PASS only with verified production dependency graph AND ZBA-01 PASS. If ZBA-01 is OPEN, AC11 MUST be OPEN.
- AC5 = PASS only after actual/emulator authorization tests.
- AC3 = PASS only after selected builder engine is actually identified, available in the repository, capability-tested, and license evidence recorded.
- AC17 = PASS only after actual custom-JS isolation has been exercised with security/negative tests.
- AC14 = PASS only if R7 remains semantically open OR has a documented user-approved decision. Invented accounting behavior makes AC14 FAIL until corrected.
- AC15 = PASS only after a mechanical audit proves every current PASS has complete evidence in the Evidence Artifact Registry.
- AC16 = PASS only after a real no-billing production Gemini path is tested OR Gemini is explicitly removed from mandatory production dependencies with evidence that core workflows do not depend on it.
- AC13 = PASS only after the actual production runtime/dependency graph proves the disposition of `server.ts`.
- AC10 = PASS only after AC1..AC17 are all PASS.
- Phase 1 COMPLETE is forbidden if any AC or ZBA item is OPEN, BLOCKED or FAIL.

## Evidence-first ordering

For every criterion:

AUDIT CURRENT STATE → define exact test → execute test → capture evidence → evaluate prerequisites → run contradiction check → set status → update context → re-run consistency audit.

Never write PASS and then search for evidence.

## Existing unsupported PASS rule

At the beginning of every Phase 1 execution, AI MUST audit the current repository and ledger. If a previously recorded PASS does not satisfy this protocol, immediately downgrade it to OPEN or BLOCKED BEFORE further implementation.

A previous agent's PASS is not trusted evidence.

## Human-gate rule

When required evidence cannot be produced without human action:

1. Set affected item to BLOCKED.
2. Create/update the relevant Human Gate.
3. State exactly what the human must do.
4. Do not continue through dependent verification.
5. Stop.
6. Resume only after the exact resume phrase.
7. Re-test from the affected unit; never simply change BLOCKED to PASS.

## No forward-phase escape

Phase 1 MUST NOT hand off to Phase 2 merely because architecture is documented. Phase 2 is locked until the Phase 1 Acceptance Gate passes.

The existence of a Phase 2 roadmap, handoff, dependency list, or proposed first feature unit is not authorization.

## Final mechanical gate

Before declaring Phase 1 complete, AI MUST run:
- PASS Eligibility Audit
- Dependency Consistency Audit
- Contradiction Audit
- Context Completeness Audit
- Evidence Artifact Audit
- Cost/Billing Audit
- Phase Boundary Audit

The final report MUST list each audit result. If any audit is not PASS, Phase 1 is not complete.
