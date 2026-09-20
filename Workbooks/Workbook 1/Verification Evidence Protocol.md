# Verification Evidence Protocol

> Source: Phase 1 revised execution contract — added after repository verification audit.

## Purpose

This sheet is the authoritative evidence ledger for Phase 1.

**PASS is an evidence state, not an opinion.**

An item may be marked PASS only when the acceptance condition was actually tested and the evidence is recorded. Architecture prose, source-code presence, package installation, local compilation, documentation, or "should work" statements are not sufficient by themselves.

## Status definitions

- **PASS** — acceptance condition tested successfully and evidence is reproducible.
- **OPEN** — plausible or partially prepared, but required test/action/evidence is missing.
- **FAIL** — acceptance condition was tested and did not pass.
- **BLOCKED** — human action or unresolved decision is required before testing can continue.

## Evidence record format

For every PASS record:

| Field | Required |
| --- | --- |
| ID | Yes |
| Acceptance/proof condition tested | Yes |
| Test/action performed | Yes |
| Environment/location | Yes |
| Date/time | Yes |
| Result | Yes |
| Evidence artifact | Yes — command output, test output, deployment result, screenshot/reference, config observation, or equivalent |
| Human action involved | If applicable |
| Billing state checked | For any cost-related item |
| Follow-up | If applicable |

## Acceptance evidence ledger

| ID | Required evidence | Status |
| --- | --- | --- |
| AC1 | Requirements traceability showing all source requirements and builder scope preserved. | Not Started |
| AC2 | Architecture responsibility matrix with contradictions resolved. | Not Started |
| AC3 | 17-capability builder matrix tied to selected engine and licensing evidence. | Not Started |
| AC4 | Dependency inventory plus verified billing/no-billing state. | Not Started |
| AC5 | Actual/emulator authorization tests for representative allowed/denied operations. | Not Started |
| AC6 | Auth/Drive/Gmail integration boundaries plus human-gate records. | Not Started |
| AC7 | Required durable context files cross-checked for terminology/status consistency. | Not Started |
| AC8 | Phase 2 handoff and progress state verified against final Phase 1 status. | Not Started |
| AC9 | Scope/diff review showing no premature Phase 2 business implementation. | Not Started |
| AC10 | Final gate showing every P0 criterion PASS before completion. | Not Started |
| AC11 | Production dependency graph + evidence that Cloud Run/App Hosting are not mandatory. | Not Started |
| AC12 | ZBA-01..ZBA-07 each PASS with evidence. | Not Started |
| AC13 | Explicit server.ts production disposition supported by dependency proof. | Not Started |
| AC14 | R7 cross-check showing no invented ₹5,000 accounting semantics. | Not Started |
| AC15 | Audit showing every PASS points to concrete evidence. | Not Started |
| AC16 | Gemini production dependency decision with runtime/credential/cost evidence or explicit optional/dev-time classification. | Not Started |
| AC17 | Custom JavaScript threat model + real isolation mechanism/test, or explicit blocked decision. | Not Started |

## Zero-billing evidence ledger

| ID | Required evidence | Status |
| --- | --- | --- |
| ZBA-01 | Actual Firebase Hosting deployment + successful route smoke test + verified no-billing state. | Not Started |
| ZBA-02 | Actual sign-in + deterministic role mapping. | Not Started |
| ZBA-03 | Actual Firestore Rules emulator/controlled allowed/denied tests. | Not Started |
| ZBA-04 | Actual Drive OAuth + upload/list/read/reference test. | Not Started |
| ZBA-05 | Actual Gmail send test + explicit interactive/unattended trigger classification. | Not Started |
| ZBA-06 | Actual safe no-billing production Gemini test OR explicit optional/dev-time decision removing Gemini from mandatory production dependencies. | Not Started |
| ZBA-07 | Derived matrix showing ZBA-01..06 all PASS and no hidden billing/server dependency. | Not Started |

## Verification commands / artifacts

AI must record the exact commands/actions used. Examples include:

- Build command and output.
- Type-check/lint output.
- Firebase Hosting deployment output.
- Firebase project billing/plan observation.
- Firebase Auth sign-in result.
- Firestore emulator/security-rule test output.
- Drive OAuth scope and controlled file operation result.
- Gmail OAuth scope and controlled send result.
- Gemini credential/runtime test result.
- Builder engine capability/license evidence.
- Custom-JS isolation/security test result.

Do not invent command output. If a test cannot run in the current environment, mark the item OPEN and create/retain the relevant Human Gate.

## Evidence conflict rule

If repository documentation says PASS but the actual test is absent, the status is OPEN.

If documentation says PASS but a test fails, the status is FAIL.

Evidence wins over prose. Update the affected context files after the evidence state changes.

## Phase completion rule

Phase 1 cannot be marked COMPLETE while any AC1–AC17 or ZBA-01–ZBA-07 item is OPEN, FAIL or BLOCKED.

A final "100% PASS" statement is permitted only after this ledger contains evidence for every PASS.
