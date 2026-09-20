# VERIFICATION REVISION 4 — EXECUTION AUDIT LOCK

## Purpose

Revision 4 is a control-layer correction to prevent a recurring failure mode:

> Google AI Studio updates the verification protocol correctly, but then treats architectural statements, implementation presence, or self-authored evidence summaries as if they were completed tests.

Revision 4 makes the distinction between **implementation**, **verification**, **evidence**, and **status** mechanically explicit.

This document supersedes any weaker or older wording in Workbook 1.

## Authoritative precedence

When documents disagree, use this order:

1. This Revision 4 Execution Audit Lock
2. MASTER CONTROL — VERIFICATION REVISION 3
3. Verification State Machine
4. PASS Eligibility Matrix
5. Verification Evidence Protocol
6. Acceptance Gate
7. Other Workbook 1 documents
8. Existing repository documentation/status claims

A lower-level document MUST NOT override a stricter rule above it.

## Mandatory first action

Before changing implementation or status:

1. Read every Workbook 1 document.
2. Inspect the current repository HEAD and relevant implementation.
3. Read the current `context/progress-tracker.md`.
4. Build a complete AC1–AC17 and ZBA-01–ZBA-07 status snapshot.
5. For every existing PASS, locate its exact evidence artifact.
6. Apply the PASS Eligibility Matrix mechanically.
7. Downgrade unsupported PASS values to OPEN or BLOCKED.
8. Record the baseline audit.
9. Only then continue with implementation/testing.

## Four-state separation

Every criterion has four independent concepts:

- IMPLEMENTATION STATE — what code/configuration currently exists.
- TEST STATE — whether the exact acceptance test has actually run.
- EVIDENCE STATE — whether reproducible evidence exists.
- VERIFICATION STATUS — NOT STARTED / OPEN / BLOCKED / FAIL / PASS.

Never infer one from another.

Examples:

- Code exists ≠ tested.
- Test ran ≠ test passed.
- Test passed ≠ evidence captured.
- Evidence exists ≠ prerequisite satisfied.
- Prerequisites satisfied ≠ contradiction-free.
- Architecture documented ≠ production dependency proven.

## PASS gate

PASS is legal only when all applicable fields are present:

`ID | acceptance condition | exact test/action | environment | timestamp | observed result | evidence artifact | human action | billing state | prerequisites | contradiction result`

A missing field invalidates PASS.

## Specific mandatory re-audits

### AC13 — server.ts

Do not PASS AC13 merely because documentation says `server.ts` is dev-only.

The agent must inspect the actual dependency/runtime graph, including:

- package scripts;
- build output;
- production hosting configuration;
- deployed artifact contents;
- runtime entrypoint;
- imports/references from production code;
- whether production hosting actually executes `server.ts` or `dist/server.cjs`.

If `server.ts` remains in the build but is not part of the production runtime, record that fact precisely.

If production requires it, AC13 remains OPEN and architecture must be corrected before PASS.

### AC15 — evidence audit

AC15 is a meta-criterion.

It cannot be PASS merely because a document says:

> every PASS is evidence-backed.

The agent must enumerate every current PASS across AC1–AC17 and ZBA-01–ZBA-07 and check each one against the complete PASS evidence record.

Produce an evidence-audit table containing:

`ID | current status | acceptance condition | test performed | artifact | timestamp | prerequisites | contradiction result | PASS eligible?`

If any PASS lacks complete proof, AC15 MUST be OPEN.

### AC16 / ZBA-06 — Gemini

Do not PASS merely because an ADR classifies Gemini as optional/dev-time.

For optional/dev-time classification, prove:

1. Gemini is not a mandatory production dependency.
2. Core production build does not require Gemini credentials.
3. Core workflows remain operable without Gemini.
4. Production runtime does not require an exposed unrestricted Gemini API key.
5. No billing-dependent Gemini path is silently required.

Evidence may include repository dependency tracing plus an actual core-without-Gemini verification run.

If these cannot be tested, status remains OPEN/BLOCKED.

### AC14 — ₹5,000 rule

The ₹5,000 policy remains a user decision gate.

Do not invent:

- calculation mode;
- allowance treatment;
- additional ₹5,000 line item;
- approval behavior;
- salary settlement behavior.

Documentation that says the ambiguity is open is sufficient for the architectural preservation requirement, but it is NOT permission to implement accounting semantics.

### AC3 — builder engine

Naming GrapesJS or another engine is not engine verification.

AC3 requires:

- actual selected engine;
- repository dependency or equivalent verified availability;
- license evidence;
- capability-by-capability mapping for all 17 capabilities;
- no capability silently removed or downgraded.

If the engine is not actually installed/available, AC3 remains OPEN.

### AC17 — custom JavaScript

A described iframe is not a security test.

Required evidence includes both:

- legitimate execution/interaction test; and
- hostile/negative isolation tests.

At minimum test that custom JS cannot access protected parent:

- localStorage;
- cookies;
- Firebase/Auth state;
- privileged parent APIs;
- protected application state.

A Function scope, module scope, try/catch, CSP alone, or documentation statement is not a substitute for an isolation boundary.

## Phase boundary lock

Phase 2 handoff text may describe the future starting point, but it MUST NOT be interpreted as authorization.

The following language is required:

> "Phase 2 starting point only. NOT AUTHORIZED until the Phase 1 completion formula is TRUE."

No Phase 2 dependency installation, feature implementation, schema expansion, or business workflow implementation may begin while Phase 1 is incomplete.

## Human gate behavior

If a test requires:

- OAuth consent;
- Firebase console action;
- billing-plan observation;
- account authorization;
- unresolved product decision;
- license/security decision;

set the affected item BLOCKED, identify the exact action, STOP, and wait for the exact resume phrase.

Never convert BLOCKED directly to PASS.

## Required audit artifacts

Before Phase 1 can pass, the repository must contain:

1. Current Phase 1 audit baseline.
2. Evidence Artifact Registry.
3. Updated Verification Evidence Protocol.
4. Final PASS Eligibility Audit.
5. Final Dependency Consistency Audit.
6. Final Contradiction Audit.
7. Final Context Completeness Audit.
8. Final Evidence Artifact Audit.
9. Final Cost/Billing Audit.
10. Final Phase Boundary Audit.

Each final audit must name the inspected commit/ref and its result.

## Completion lock

`PHASE_1_COMPLETE = TRUE` only if:

- AC1–AC17 = PASS;
- ZBA-01–ZBA-07 = PASS;
- every PASS has a complete evidence record;
- all final audits = PASS;
- no unresolved contradiction exists;
- no consequential ambiguity is silently invented;
- Phase 2 boundary audit = PASS.

Otherwise Phase 1 remains incomplete.

## Forbidden phrases as proof

These phrases never establish PASS:

- implemented
- configured
- ready
- production-ready
- verified by design
- should work
- package installed
- build succeeds
- code exists
- documented
- architecture supports
- PASS with caveat
- PASS pending deployment
- PASS pending human action
