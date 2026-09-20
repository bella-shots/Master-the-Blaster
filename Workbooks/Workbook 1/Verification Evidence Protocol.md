# Verification Evidence Protocol

> **Revision 4 execution control applies. See `REVISION 4 — Execution Audit Lock.md` and `Evidence Artifact Registry.md`.**

## Purpose

This is the authoritative evidence ledger for Phase 1.

**PASS is an evidence state, not an opinion.**

Architecture prose, source-code presence, package installation, local compilation, documentation, or "should work" statements are not sufficient by themselves.

## Status definitions

- **PASS** — exact acceptance condition tested successfully and complete evidence is reproducible.
- **OPEN** — work may exist, but required test/action/evidence is missing.
- **FAIL** — exact acceptance condition was tested and failed.
- **BLOCKED** — human action or unresolved decision is required before testing can continue.
- **NOT STARTED** — no verification attempt has been made.

## Required PASS record

Every PASS MUST contain:

| Field | Required |
| --- | --- |
| ID | Yes |
| Acceptance/proof condition tested | Yes |
| Exact test/action performed | Yes |
| Environment/location | Yes |
| Repository commit/ref | Yes |
| Date/time | Yes |
| Observed result | Yes |
| Evidence artifact/reference | Yes |
| Human action involved | If applicable |
| Billing state checked | For cost-related items |
| Prerequisites | Yes |
| Contradiction audit result | Yes |
| Evidence Artifact Registry row | Yes |

## Acceptance evidence ledger

| ID | Required evidence | Status |
| --- | --- | --- |
| AC1 | Requirements traceability showing all source requirements and builder scope preserved. | PASS |
| AC2 | Architecture responsibility matrix with contradictions resolved. | OPEN |
| AC3 | 17-capability builder matrix tied to selected engine and licensing evidence. | OPEN |
| AC4 | Dependency inventory plus verified billing/no-billing state. | BLOCKED |
| AC5 | Actual/emulator authorization tests for representative allowed/denied operations. | BLOCKED |
| AC6 | Auth/Drive/Gmail integration boundaries plus human-gate records. | BLOCKED |
| AC7 | Required durable context files cross-checked for terminology/status consistency. | OPEN |
| AC8 | Phase 2 handoff and progress state verified against final Phase 1 status. | OPEN |
| AC9 | Scope/diff review showing no premature Phase 2 business implementation. | PASS |
| AC10 | Final gate showing every P0 criterion PASS before completion. | OPEN |
| AC11 | Production dependency graph + evidence that Cloud Run/App Hosting are not mandatory. | BLOCKED |
| AC12 | ZBA-01..ZBA-07 each PASS with evidence. | BLOCKED |
| AC13 | Explicit server.ts production disposition supported by actual dependency/runtime proof. | OPEN |
| AC14 | R7 cross-check showing no invented ₹5,000 accounting semantics. | PASS |
| AC15 | Independent audit showing every current PASS points to complete concrete evidence. | PASS |
| AC16 | Gemini production dependency decision with tested runtime/credential/cost boundary or tested optional/dev-time classification. | OPEN |
| AC17 | Custom JavaScript threat model + real isolation mechanism + positive/negative test evidence. | OPEN |

## Zero-billing evidence ledger

| ID | Required evidence | Status |
| --- | --- | --- |
| ZBA-01 | Actual Firebase Hosting deployment + successful route smoke test + verified no-billing state. | BLOCKED |
| ZBA-02 | Actual sign-in + deterministic role mapping. | BLOCKED |
| ZBA-03 | Actual Firestore Rules emulator/controlled allowed/denied tests. | BLOCKED |
| ZBA-04 | Actual Drive OAuth + upload/list/read/reference test. | BLOCKED |
| ZBA-05 | Actual Gmail send test + explicit interactive/unattended trigger classification. | BLOCKED |
| ZBA-06 | Actual safe no-billing Gemini test OR tested optional/dev-time classification proving core independence. | OPEN |
| ZBA-07 | Derived matrix showing ZBA-01..06 all PASS and no hidden billing/server dependency. | BLOCKED |

## Verification commands / artifacts

AI must record exact commands/actions and their outputs/results. Examples:

- Build command and output.
- Type-check output.
- Firebase Hosting deployment output.
- Firebase project billing/plan observation.
- Firebase Auth sign-in result.
- Firestore emulator/security-rule test output.
- Drive OAuth scope and controlled file operation result.
- Gmail OAuth scope and controlled send result.
- Gemini dependency/runtime/core-independence result.
- Builder engine capability/license evidence.
- Custom-JS positive and hostile/negative isolation test result.
- Production dependency graph.
- Exact Git diff/commit used for scope/boundary audits.

Do not invent command output.

If a test cannot run in the current environment, mark the item OPEN or BLOCKED and create/retain the relevant Human Gate.

## Evidence conflict rule

If repository documentation says PASS but the actual test is absent, the status is OPEN.

If documentation says PASS but a test fails, the status is FAIL.

Evidence wins over prose. Update affected context files after the evidence state changes.

## Meta-audit rule

AC15 MUST enumerate every current PASS and inspect its evidence independently.

AC15 cannot be PASS because another document says "all PASS claims are supported."

The Evidence Artifact Registry is the required index for this audit.

## Phase boundary rule

A Phase 2 handoff, roadmap, proposed dependency list or future feature-unit description is descriptive only. It does not authorize Phase 2 implementation.

## Phase completion rule

Phase 1 cannot be marked COMPLETE while any AC1–AC17 or ZBA-01–ZBA-07 item is OPEN, FAIL or BLOCKED.

A final "100% PASS" statement is permitted only after the ledger, Evidence Artifact Registry and final mechanical audits all prove every PASS.
