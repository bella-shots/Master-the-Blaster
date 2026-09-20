# Evidence Artifact Registry — Mechanical Record

## Purpose

This registry is the authoritative index of evidence artifacts used to justify PASS.

A PASS without a registry entry is invalid.

## Required fields

| Field | Required |
|---|---|
| ID | Yes |
| Exact acceptance condition | Yes |
| Exact test/action | Yes |
| Repository commit/ref | Yes |
| Environment/location | Yes |
| Date/time | Yes |
| Observed result | Yes |
| Evidence artifact/reference | Yes |
| Human action | If applicable |
| Billing state | For cost-related criteria |
| Prerequisites | Yes |
| Contradiction audit result | Yes |
| PASS eligibility | Yes |

## Artifact rules

Evidence must be reproducible by another agent.

Acceptable examples:

- command output;
- automated test output;
- Firestore emulator test output;
- controlled OAuth operation result;
- Firebase deployment result;
- route smoke-test result;
- browser/runtime observation with exact route and timestamp;
- capability test result;
- license source/reference;
- dependency graph output;
- security negative-test result;
- exact Git diff/commit reference.

Not sufficient by itself:

- architecture prose;
- source-code presence;
- dependency installation;
- configuration presence;
- local compilation;
- a README statement;
- an AI-generated summary;
- "verified by design".

## Meta-audit procedure

For every current PASS:

1. Find its registry row.
2. Open the referenced evidence.
3. Confirm the evidence corresponds to the exact acceptance condition.
4. Confirm the test actually occurred.
5. Confirm timestamp and environment.
6. Confirm prerequisites.
7. Run contradiction checks.
8. Mark PASS eligible only if every field is satisfied.

If any step fails, downgrade the criterion.

## Required final artifact

The final registry must contain one row for every PASS in AC1–AC17 and ZBA-01–ZBA-07.

If there are zero PASS items, the registry may state:

> "No PASS claims currently exist; all criteria remain NOT STARTED/OPEN/BLOCKED/FAIL."

This is preferable to fabricated evidence.
