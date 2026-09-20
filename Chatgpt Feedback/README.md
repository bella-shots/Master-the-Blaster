# ChatGPT Feedback

This folder contains **execution instructions from ChatGPT to Google AI Studio**.

These files are separate from Workbook 1. They do **not** create a new Workbook 1 revision and do not override Revision 4.

## Authority order

1. Workbook 1 — Revision 4 remains the authoritative Phase 1 contract.
2. The latest applicable file in this folder is an execution instruction for Google AI Studio.
3. Google AI Studio must execute the instruction against the repository and record evidence in the repository.
4. If a feedback instruction conflicts with Workbook 1 Revision 4, stop and report the conflict instead of silently changing the workbook.

## Current sequence

1. `001-REVISION-4-RECONCILIATION.md` — reconcile repository contradictions and restore one truthful Phase 1 state.
2. `002-PHASE-1-EVIDENCE-AUDIT.md` — execute the remaining Revision 4 acceptance/evidence audits; do not self-certify.
3. `003-PHASE-1-COMPLETION-GATE.md` — perform the final completion formula and Phase 2 boundary audit only after the earlier instructions are satisfied.
4. `004-PHASE-1-LEDGER-RECONCILIATION-AND-EVIDENCE-INTEGRITY.md` — repair the current status-ledger contradiction and independently validate every claimed PASS before any completion decision.
5. `005-FINAL-PHASE-1-CLOSURE-ZERO-DEFECT-GATE.md` — final mechanical closure gate: reconcile OPEN/BLOCKED states, independently re-audit every PASS including AC15, re-run all seven final audits, enforce exact status-count consistency, and authorize Phase 2 only if the unchanged Revision 4 completion formula is objectively TRUE.
6. `006-GOOGLE-EXECUTION-PUSH-AND-FETCHBACK-CORRECTION.md` — execution-only correction after the latest Google closure report: write the exact 4 PASS / 9 OPEN / 11 BLOCKED state into the authoritative repository, create a new Google commit, push to `main`, fetch back from GitHub, and verify the fetched state. It does **not** authorize Phase 2.

## Operating rule

Google AI Studio must fetch these files from GitHub before execution. It must not infer that a prompt was completed merely because the file exists. Each instruction requires actual repository/runtime evidence and a truthful GitHub record.
