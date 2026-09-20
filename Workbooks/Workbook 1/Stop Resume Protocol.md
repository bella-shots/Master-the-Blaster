# Stop Resume Protocol

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx` — Verification Revision 2

| Situation | AI behavior | What AI must say | What user does | Exact resume phrase | AI after resume | Forbidden behavior |
| --- | --- | --- | --- | --- | --- | --- |
| Needs GitHub connection | STOP | Exact UI path + success condition. | Complete connection in UI. | DONE — RESUME PHASE 1 | Re-check access and continue. | Do not claim connection without verification. |
| Needs Google OAuth | STOP | Exact permission requested; never ask for password/token. | Approve OAuth. | DONE — RESUME PHASE 1 | Verify scope and continue. | No credentials in chat. |
| Needs product/accounting decision | STOP | Exact question + interpretations. | Choose/confirm. | RESUME PHASE 1 | Record decision and re-run affected checks. | Do not silently choose consequential semantics. |
| Hits paid billing | STOP | Service + exact billing request; confirm nothing was enabled. | Redesign or explicitly change invariant. | REDESIGN — RESUME PHASE 1 / CHANGE INVARIANT — RESUME PHASE 1 | Follow explicit choice. | Never enable billing autonomously. |
| Verification evidence missing | **Do not mark PASS.** | Identify exact missing test/evidence and whether human action is needed. | Complete requested action if needed. | DONE — RESUME PHASE 1 | Re-run test and update evidence ledger. | Never substitute documentation for proof. |
| Verification failure | Correct narrowly. | Exact error → affected boundary → correction → re-test. | Only act if human gate requires it. | RESUME PHASE 1 | Continue from failed unit. | Do not restart/broaden scope. |
| Zero-billing proof OPEN/FAIL | STOP | ZBA ID + exact reason + evidence gap/failed condition. | Complete action or choose redesign. | DONE — RESUME PHASE 1 / RESUME PHASE 1 | Re-run affected ZBA item. | Never claim architecture proven while mandatory item is open. |
| Contradictory context | STOP before Phase completion. | Identify files and exact contradiction. | Only decide if it is a genuine product/architecture choice. | RESUME PHASE 1 | Correct all affected context, then re-run consistency audit. | Do not leave conflicting authoritative statements. |
