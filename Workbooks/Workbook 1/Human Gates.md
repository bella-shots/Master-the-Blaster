# Human Gates

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx` — Verification Revision 2

| Gate ID | Trigger | AI must STOP when… | AI must tell user | User action | Resume phrase | AI resume behavior | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HG-01 | GitHub/repository connection | AI Studio cannot access/connect repository or requires OAuth approval. | Exact connection path and success condition; never request password/token in chat. | Complete connection in UI. | DONE — RESUME PHASE 1 | Re-test access and continue. | Pending |
| HG-02 | Zero-billing hosting proof | Firebase Hosting/project setup requires human console action or no-billing state cannot be verified. | Exact UI action; explicitly say do NOT enable billing. | Complete no-billing setup. | DONE — RESUME PHASE 1 | Re-check billing state and re-run ZBA-01. | Pending |
| HG-03 | Google Drive OAuth | Drive consent is required. | Exact account/permission action and expected result. | Grant Drive permission. | DONE — RESUME PHASE 1 | Re-test Drive workflow. | Pending |
| HG-04 | Gmail OAuth / trigger model | Gmail consent is required, or interactive vs unattended behavior remains unresolved. | Exact consent or architecture decision needed; state limitation precisely. | Grant consent or choose the documented trigger model. | DONE — RESUME PHASE 1 | Re-test ZBA-05. | Pending |
| HG-05 | Firebase/Auth/Firestore configuration | Console setup is required. | Exact screen/action and values; no secrets in chat. | Complete setup. | DONE — RESUME PHASE 1 | Re-test Auth/Rules. | Pending |
| HG-06 | Billing request | Any service requests Blaze/Cloud Billing/paid subscription. | Service + exact request; confirm billing was NOT enabled. | Redesign or explicitly change invariant. | REDESIGN — RESUME PHASE 1 / CHANGE INVARIANT — RESUME PHASE 1 | Follow explicit choice only. | Pending |
| HG-07 | Product/accounting/security ambiguity | Requirement affects reimbursement, salary, permissions, security, email trigger model or architecture and cannot safely be defaulted. | Exact question + interpretations; do not silently select one. | Choose/confirm. | RESUME PHASE 1 | Record decision and re-run affected checks. | Pending |
| HG-08 | Tool/license/security-boundary uncertainty | Builder engine, plugin, extension or custom-JS isolation is unclear. | Exact component and uncertainty. | Approve a safe documented option. | RESUME PHASE 1 | Record decision and test. | Pending |
| HG-09 | Zero-billing architecture decision | Any ZBA item is OPEN/FAIL or production architecture remains unresolved. | Full proof matrix, evidence gaps and exact choices. | Complete required action or choose redesign. | RESUME PHASE 1 | Re-run affected proof items; do not skip. | Pending |
