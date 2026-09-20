# Workbook 1 — Phase 1 Product Architecture

This folder contains the Phase 1 execution contract for Google AI Studio.

## Revision

**Verification Revision 3 — Mechanical Evidence Gate**

This revision replaces evidence guidance with an enforceable verification state machine. The agent must audit existing PASS claims first, downgrade unsupported PASS states, test prerequisites, capture evidence, run contradiction checks, and only then assign PASS.

## Mandatory control documents

1. START HERE
2. Autonomous Control
3. Requirements Freeze
4. Architecture Decisions
5. Zero-Billing Architecture Proof
6. Human Gates
7. Context Deliverables
8. Builder Architecture
9. Acceptance Gate
10. Phase 2 Handoff
11. Stop Resume Protocol
12. AI Studio Master Prompt
13. Playbook Alignment
14. Verification Evidence Protocol
15. **Verification State Machine**
16. **PASS Eligibility Matrix**
17. **Contradiction Audit**

## Critical rule

**PASS is an evidence state, not an opinion.**

A previous agent's PASS is untrusted until re-audited.

A criterion may be PASS only after its exact acceptance condition has actually been tested, reproducible evidence exists, prerequisites are PASS, and contradiction audits are clean.

If evidence is missing, the only legal state is NOT STARTED, OPEN, BLOCKED or FAIL.

## Phase completion

Phase 1 is complete only when:
- AC1–AC17 are all evidence-backed PASS.
- ZBA-01–ZBA-07 are all evidence-backed PASS.
- Every PASS has a complete evidence record.
- All mechanical audits PASS.
- No contradiction remains.
- No consequential ambiguity remains unrecorded.
- Phase 2 handoff is valid.

**No Phase 2 implementation is authorized before this gate.**
