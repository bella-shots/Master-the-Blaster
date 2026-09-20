# Contradiction Audit — Mandatory Pre-Completion Test

## Purpose
Prevent incompatible repository states such as AC11 PASS while ZBA-01 OPEN, AC4 PASS while billing is unverified, AC17 PASS while custom-JS isolation is only described, AC3 PASS without engine/license verification, AC14 PASS while R7 contains invented semantics, AC15 PASS while another PASS lacks evidence, or Phase 1 COMPLETE while any P0 item is unresolved.

## Required audit procedure
AI MUST inspect:
1. Verification Evidence Protocol
2. Verification State Machine
3. PASS Eligibility Matrix
4. Acceptance Gate
5. Zero-Billing Architecture Proof
6. Requirements Freeze
7. Architecture Decisions
8. Human Gates
9. Context Deliverables
10. Builder Architecture
11. Phase 2 Handoff
12. progress tracker and architecture/project context
13. current repository implementation/configuration
14. latest relevant Git diff/commit

## Cross-status rules
| Rule | Required result |
|---|---|
| ZBA-01 OPEN/BLOCKED/FAIL | AC4 and AC11 cannot be PASS |
| ZBA-02 OPEN/BLOCKED/FAIL | AC6 cannot claim fully verified Auth |
| ZBA-03 OPEN/BLOCKED/FAIL | AC5 cannot be PASS |
| ZBA-04 OPEN/BLOCKED/FAIL | AC6 cannot claim Drive verified |
| ZBA-05 OPEN/BLOCKED/FAIL | AC6 cannot claim Gmail behavior verified |
| ZBA-06 OPEN/BLOCKED/FAIL | AC16 cannot be PASS |
| Any ZBA-01..06 not PASS | ZBA-07 and AC12 cannot be PASS |
| Builder engine/license evidence missing | AC3 cannot be PASS |
| Custom-JS negative/isolation test missing | AC17 cannot be PASS |
| R7 contains invented accounting semantics | AC14 must be FAIL until corrected |
| Any required context file missing | AC7 cannot be PASS |
| Any PASS lacks evidence record | AC15 cannot be PASS |
| Any P0 item not PASS | AC10 cannot be PASS |
| Any AC/ZBA not PASS | Phase 1 cannot be COMPLETE |

## Required negative consistency checks
AI MUST actively search for contradictory statements, not merely confirm matching statements.

Search for:
PASS, COMPLETE, verified, production-ready, frozen, approved, mandatory, optional, OPEN, BLOCKED, FAIL, Decision Gate, ₹5,000, Gemini, Gmail, Firebase Hosting, Cloud Billing, Blaze, server.ts, sandbox, custom JavaScript, GrapesJS and the selected editor.

For every conflict, identify both locations and correct the weaker/incorrect statement before completion.

## Audit output
Create a dated audit record containing:
- repository commit/ref inspected
- files inspected
- rules executed
- contradictions found
- corrections made
- retests performed
- unresolved contradictions
- final result: PASS or NOT PASS

No audit may report PASS if any unresolved contradiction remains.
