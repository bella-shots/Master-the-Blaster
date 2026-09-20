# ChatGPT Feedback 004 — Phase 1 Ledger Reconciliation + Evidence Integrity Repair

## Authority

This is an execution instruction for Google AI Studio. It does NOT create Workbook 1 Revision 5.

Workbook 1 Revision 4 — Execution Audit Lock remains the sole governing Phase 1 contract.

Execute this against the latest GitHub HEAD. Do not start Phase 2. Do not create Revision 5. Do not invent evidence.

## Immediate defect to fix

The repository currently contains conflicting Phase 1 status representations:

1. Workbooks/Workbook 1/Verification Evidence Protocol.md currently lists the evidence ledger as NOT STARTED.
2. Workbooks/Workbook 1/Current Phase 1 Audit Baseline.md identifies AC1, AC9 and AC14 as PASS and all remaining ACs as OPEN.
3. Workbooks/Workbook 1/Evidence Artifact Registry.md contains PASS records for AC1, AC9 and AC14.
4. Google reconciliation reports describe the same 3-PASS / 14-OPEN / 7-ZBA-OPEN state.

These cannot coexist as current truth. Reconcile them mechanically.

Do not simply change everything to NOT STARTED. Do not simply preserve the three PASS claims. Inspect the evidence and determine the truthful state.

## 1. Read authority before editing

Read all Workbook 1 documents, especially:

- REVISION 4 — Execution Audit Lock.md
- MASTER CONTROL — VERIFICATION REVISION 3.md
- Verification State Machine.md
- PASS Eligibility Matrix.md
- Verification Evidence Protocol.md
- Evidence Artifact Registry.md
- Current Phase 1 Audit Baseline.md
- Acceptance Gate.md
- Requirements Freeze.md
- Zero-Billing Architecture Proof.md
- Human Gates.md
- Phase 2 Handoff.md
- Stop Resume Protocol.md

Also read current context/progress-tracker.md, context/verification-evidence-protocol.md, active-context.md, tech-context.md, product-context.md and all applicable Chatgpt Feedback instructions.

Then inspect the actual implementation and current Git history. Do not trust previous AI summaries as evidence.

## 2. Freeze a baseline first

Before modifying status:

- record exact HEAD SHA;
- record branch;
- enumerate AC1–AC17;
- enumerate ZBA-01–ZBA-07;
- enumerate every document containing a current status;
- enumerate every PASS claim;
- enumerate every Evidence Artifact Registry row;
- list every contradiction.

Create or update an execution audit record documenting the pre-repair state. Do not erase historical claims. Mark superseded claims as historical where necessary.

## 3. Revision 4 status rules

Legal statuses only: NOT STARTED, OPEN, BLOCKED, FAIL, PASS.

Keep implementation state, test state, evidence state and verification status separate.

Never infer PASS from code existing, configuration existing, package installation, architecture documentation, build success, 'implemented', 'verified by design', a previous AI answer, a planned test or a planned deployment.

PASS requires the complete Revision 4 evidence record:

ID | acceptance condition | exact test/action | environment | timestamp | observed result | evidence artifact | human action | billing state | prerequisites | contradiction result

Missing mandatory evidence means PASS is invalid.

## 4. Repair the authoritative ledger

Determine the truthful state criterion-by-criterion.

### AC1
Verify requirements traceability, R1–R15 coverage, preservation of all 17 non-negotiable builder capabilities, and mapping to architecture. Inspect the actual referenced files. If the exact condition is reproducibly evidenced, AC1 may be PASS. Otherwise OPEN.

### AC9
Inspect git history, source tree and diffs. Confirm no premature Phase 2–10 business implementation exists, including Projects, Finance, HR, Salary, reimbursements, MOM automation, full builder implementation, publishing and Phase 8–10 functionality. A Drive/workspace prototype is not itself Phase 2–10 business implementation. If the scope audit is reproducible, AC9 may be PASS. Otherwise OPEN.

### AC14
Verify only that R7 remains an unresolved decision gate. Do NOT invent calculation mode, allowance treatment, additional ₹5,000 line item, approval/escalation semantics, Finance/Admin dual approval or salary settlement. If R7 is preserved without invented semantics and evidence proves this, AC14 may be PASS. Otherwise OPEN.

### Every other AC
Keep OPEN/BLOCKED/FAIL unless actual Revision 4 evidence proves PASS. Do not upgrade merely because implementation/configuration exists.

## 5. Repair Evidence Artifact Registry

For every current PASS, verify a complete registry row containing:

ID | exact acceptance condition | exact test/action | repository commit/ref | environment/location | date/time | observed result | evidence artifact/reference | human action | billing state | prerequisites | contradiction audit result | PASS eligibility

Open the referenced evidence. If any field is missing or the evidence does not prove the exact condition, downgrade PASS to OPEN or BLOCKED as appropriate. Never fabricate command output, timestamps, deployment results, OAuth results, browser observations or billing observations.

## 6. AC2 / AC7 context consistency

Audit durable context documents for contradictory architecture responsibility, hosting claims, Gemini claims, Drive/Gmail/Auth boundaries, Phase 1/Phase 2 status and R7 semantics. Resolve current contradictions without creating new requirements. Historical statements may remain only if explicitly identified as superseded/historical.

## 7. AC3 visual builder

Verify actual selected engine, actual dependency/repository availability, license and 17-capability mapping. Inspect package.json and repository. Known current fact to verify rather than assume: package.json does not currently show a GrapesJS dependency. Planned GrapesJS use is not proof. Do not install Phase 2 dependencies just to manufacture PASS. AC3 remains OPEN unless its exact evidence condition is actually satisfied.

## 8. AC4 / AC11 / ZBA-01

Prove actual Firebase Hosting deployment, successful route smoke test and actual no-billing/Spark state, and prove Cloud Run/App Hosting are not mandatory. A static build is not deployment proof. If Firebase console action is required, mark BLOCKED, identify exact human action, STOP, and wait. Do not claim PASS pending human action.

## 9. AC5 / ZBA-03

Inspect actual firestore.rules. Run controlled/emulator allowed and denied tests for representative role boundaries. Rules-file presence is insufficient. If live Firebase action is required, mark BLOCKED with exact action.

## 10. AC6 / ZBA-02 / ZBA-04 / ZBA-05

Auth requires actual sign-in and deterministic role mapping. Drive requires actual OAuth and controlled list/read/upload/reference operation. Gmail requires actual OAuth and controlled send test plus explicit interactive/unattended classification. Configuration or architecture alone is insufficient. Human OAuth gates must be BLOCKED until performed.

## 11. AC13 — server.ts production boundary

Inspect package.json scripts, server.ts, Vite config, Firebase Hosting config, generated production artifacts, production entrypoint, client imports/references, all /api/* calls, whether production executes server.ts or dist/server.cjs, and whether production depends on Express.

Known current implementation to verify: package.json currently bundles server.ts to dist/server.cjs, and src/App.tsx currently calls /api/workspace-data-files and /api/upload-to-workspace.

Documentation saying Express is dev-only is not sufficient. If runtime decoupling is not actually demonstrated, AC13 = OPEN. Do not silently redesign later phases in this instruction.

## 12. AC15 — independent meta-audit

AC15 cannot self-certify. Enumerate every current PASS across AC1–AC17 and ZBA-01–ZBA-07.

For each produce:

ID | status | acceptance condition | exact test | evidence artifact | timestamp | prerequisites | contradiction result | PASS eligible?

Inspect every evidence artifact independently. If any PASS lacks complete evidence, downgrade it and keep AC15 OPEN.

## 13. AC16 / ZBA-06 — Gemini

Prove: core production build does not require Gemini credentials; core workflows operate without Gemini; no unrestricted browser Gemini API key is required; no hidden billing dependency exists; Gemini is optional/dev-time only.

Inspect actual imports and runtime paths. Presence of @google/genai is not proof of mandatory production dependency, but absence from a call path is also not sufficient without the required independence test. If not tested, remain OPEN.

## 14. AC17 — custom JavaScript security

A sandbox declaration is not a security test.

Required positive test: legitimate custom JavaScript executes in the intended builder/page environment.

Required hostile tests must attempt access to parent localStorage, parent cookies, Firebase/Auth state, privileged parent APIs and protected application state.

Capture actual observed results. If these tests have not run, AC17 = OPEN.

## 15. ZBA-07

ZBA-07 is derived. It cannot PASS unless ZBA-01 through ZBA-06 all PASS with evidence and no hidden billing/server dependency remains.

## 16. Human gate protocol

When OAuth, Firebase console, billing observation, account authorization, Gmail/Drive consent or unresolved R7 policy is required:

1. mark affected criterion BLOCKED;
2. state exact human action;
3. state exact service/screen;
4. state exact expected result;
5. state exact resume phrase;
6. STOP.

Never assume completion.

## 17. Full contradiction audit

Search repository-wide for stale PASS, stale COMPLETE, stale 100%, stale Phase 1 complete, stale Phase 2 authorized, contradictory AC status, contradictory ZBA status, invented R7 accounting rules, Gemini proxy claims, conflicting Express production claims and package-installed-equals-verified claims.

For each current contradiction: classify, resolve, update authoritative current documents, and preserve historical claims as historical/superseded when appropriate.

The final repository must have ONE current interpretation of Phase 1 status.

## 18. Required final audits

Run all seven:
1. PASS Eligibility Audit
2. Dependency Consistency Audit
3. Contradiction Audit
4. Context Completeness Audit
5. Evidence Artifact Audit
6. Cost/Billing Audit
7. Phase Boundary Audit

Each must record inspected HEAD SHA, scope, exact observed result, PASS/FAIL/BLOCKED, and evidence reference.

## 19. Completion formula — do not change

PHASE_1_COMPLETE = (AC1..AC17 = PASS) AND (ZBA-01..ZBA-07 = PASS) AND (every PASS has complete evidence) AND (all final audits PASS) AND (no unresolved contradiction) AND (no consequential ambiguity silently invented) AND (Phase 2 boundary audit PASS)

If FALSE: Phase 1 = IN PROGRESS / LOCKED; Phase 2 = NOT AUTHORIZED. Do not implement Phase 2.

## 20. Required repository updates

Update only what is necessary to make the repository truthful:

- Workbooks/Workbook 1/Verification Evidence Protocol.md
- Workbooks/Workbook 1/Evidence Artifact Registry.md
- Workbooks/Workbook 1/Current Phase 1 Audit Baseline.md
- context/verification-evidence-protocol.md
- context/progress-tracker.md
- active-context.md
- other status/context files only where contradictions require it.

Create an execution report under Google Reply/.

Do NOT create Workbook 1 Revision 5. Do NOT change the Revision 4 completion formula. Do NOT add acceptance criteria. Do NOT implement Phase 2.

## 21. Commit requirement

Commit all legitimate changes to GitHub. Do not claim completion unless the commit actually exists. Report exact HEAD and commit SHA.

## 22. Required Google response

Return exactly:

PHASE_1_LEDGER_RECONCILIATION
HEAD_COMMIT:
PRE_REPAIR_STATUS:
LEDGER_CONTRADICTION:
AC1:
AC2:
AC3:
AC4:
AC5:
AC6:
AC7:
AC8:
AC9:
AC10:
AC11:
AC12:
AC13:
AC14:
AC15:
AC16:
AC17:
ZBA-01:
ZBA-02:
ZBA-03:
ZBA-04:
ZBA-05:
ZBA-06:
ZBA-07:
PASS_COUNT:
OPEN_COUNT:
BLOCKED_COUNT:
FAIL_COUNT:
FINAL_AUDITS:
CONTRADICTIONS_REMAINING:
HUMAN_GATES:
BILLING_STATE:
PHASE_1_COMPLETE:
PHASE_2_AUTHORIZATION:
COMMIT_CREATED:
COMMIT_SHA:
EVIDENCE_MISSING:
NEXT_ACTION:

For every PASS, include the exact evidence artifact/reference. For every OPEN/BLOCKED/FAIL, include the exact reason.

## 23. Absolute stop conditions

STOP and do not start Phase 2 if any PASS lacks complete evidence; the status ledger and registry disagree; AC15 cannot independently validate all current PASS claims; a human gate remains unresolved; billing state cannot be proven; production runtime remains ambiguous; custom-JS hostile tests are absent; R7 semantics are invented; or any current contradiction remains unresolved.

## Final instruction

Execute this now against the latest GitHub HEAD.

Do not merely describe what should be done.

Inspect. Test. Record evidence. Reconcile. Commit.

Phase 1 only. Phase 2 remains locked.