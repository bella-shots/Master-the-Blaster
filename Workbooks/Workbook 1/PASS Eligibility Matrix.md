# PASS Eligibility Matrix — Mechanical Gate

This is the single mechanical matrix for deciding whether a Phase 1 status may be PASS.

| ID | Minimum proof before PASS | Required prerequisite state |
|---|---|---|
| AC1 | Complete source-to-requirement traceability; builder scope preserved | Requirements Freeze consistent |
| AC2 | Responsibility matrix + contradiction test | Architecture Decisions consistent |
| AC3 | Selected engine installed/identified + capability evidence + license evidence | Builder Architecture complete |
| AC4 | Full mandatory dependency inventory + actual billing/no-billing observation | ZBA-01 evidence available |
| AC5 | Actual/emulator allowed + denied authorization tests | ZBA-03 PASS |
| AC6 | Auth/Drive/Gmail test records + human-gate decisions | Relevant ZBA items PASS |
| AC7 | Every required context artifact exists and cross-check passes | Context Completeness Audit PASS |
| AC8 | Handoff verified against final evidence/blocked state | All upstream state current |
| AC9 | Scope/diff audit shows no premature Phase 2 implementation | Phase boundary audit PASS |
| AC10 | All AC1–AC17 PASS with evidence | AC1–AC17 all PASS |
| AC11 | Verified production graph + no-billing hosting evidence | ZBA-01 PASS |
| AC12 | ZBA-01..07 evidence-backed PASS | ZBA-01..07 all PASS |
| AC13 | server.ts disposition tested against actual dependency graph | Architecture/runtime audit PASS |
| AC14 | R7 has no invented semantics OR user-approved semantics recorded | Requirements Freeze R7 consistent |
| AC15 | Mechanical audit of every PASS | PASS Eligibility + Contradiction audits PASS |
| AC16 | Tested no-billing production Gemini path OR tested optional/dev-time classification with core independence | ZBA-06 PASS |
| AC17 | Real custom-JS isolation + hostile/negative test evidence | Builder security audit PASS |
| ZBA-01 | Actual deployment + route smoke test + verified no-billing state | Human gate completed if required |
| ZBA-02 | Actual sign-in + deterministic role mapping | Auth setup complete |
| ZBA-03 | Actual allowed/denied Firestore tests | Rules deployed/emulator tested |
| ZBA-04 | Actual OAuth + upload/list/read/reference test | Drive consent completed |
| ZBA-05 | Actual send test + explicit trigger classification | Gmail consent/decision complete |
| ZBA-06 | Actual no-billing Gemini test OR explicit tested optional/dev-time classification | Runtime/cost boundary verified |
| ZBA-07 | Derived only from ZBA-01..06 | ZBA-01..06 all PASS |

## Hard rule
A model MUST NOT edit a status to PASS first and then search for evidence. Evidence must exist first.

If evidence is unavailable, legal outcomes are NOT STARTED, OPEN, BLOCKED, or FAIL.

## Evidence record minimum
Every PASS record must contain:
ID | exact acceptance condition | exact action/test | environment | timestamp | observed result | evidence artifact/reference | human action if any | billing state if applicable | prerequisites | contradiction audit result

Any missing required field makes PASS invalid.

## Completion formula
PHASE_1_COMPLETE = (AC1..AC17 = PASS) AND (ZBA-01..ZBA-07 = PASS) AND (all PASS records complete) AND (all audits PASS) AND (no unresolved contradiction)

Otherwise PHASE_1_COMPLETE = FALSE
