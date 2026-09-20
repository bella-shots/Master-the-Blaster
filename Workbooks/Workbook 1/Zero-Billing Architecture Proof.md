# Zero-Billing Architecture Proof

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx` — Verification Revision 2

| Field | Rule |
| --- | --- |
| Purpose | Prove the complete mandatory production architecture satisfies ₹0 additional software/service spend beyond the existing Google AI Pro subscription, with no mandatory Cloud Billing/Blaze dependency. |
| Critical rule | **Documentation, a local build, source-code presence, or an architectural assertion is not sufficient to mark a ZBA item PASS.** PASS requires reproducible evidence. |
| Status semantics | **PASS** = evidence exists and the acceptance condition was actually tested. **OPEN** = architecture may be plausible but required proof/action is missing. **FAIL** = the acceptance condition is disproven. |
| Freeze rule | Do not freeze production hosting/backend until ZBA-01 through ZBA-07 are all PASS. |
| Secret rule | Never ask user to paste passwords, private keys, OAuth client secrets, access tokens or API keys into chat. |

| ID | Proof item | AI must verify | PASS requires | OPEN if | FAIL/STOP if | Evidence to leave in repo | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ZBA-01 | Firebase Hosting static SPA | Build the SPA and perform/verify an actual Firebase Hosting deployment using a project with no linked Cloud Billing account. | Deployment succeeds, routes load, and billing state is verified as no-billing. | Only local build/config exists or deployment requires a human console action not yet completed. | Hosting requires billing/Blaze for the chosen path or deployment cannot satisfy requirements. | Build output, hosting config, deployment result, billing-state observation, timestamp. | Not Started |
| ZBA-02 | Firebase Auth | Verify required sign-in provider and deterministic role mapping. | Actual sign-in test succeeds and role mapping is demonstrated. | Configuration exists but live sign-in/role test is not completed. | Required auth path requires paid dependency or cannot support requirements. | Test result + role mapping evidence + config. | Not Started |
| ZBA-03 | Firestore + Security Rules | Test representative allowed/denied reads and writes for sensitive modules and project/page boundaries. | Actual emulator/controlled tests show unauthorized operations denied and authorized operations succeed. | Rules drafted but tests are missing. | Rules cannot enforce required boundary. | Rules + test output + permission matrix. | Not Started |
| ZBA-04 | Google Drive | Test OAuth and required upload/list/read/reference workflows for Excel/doc/image assets. | Controlled test completes without exposing client secrets or requiring a billing-dependent backend. | OAuth or controlled operation awaits human action. | Required workflow needs forbidden secret/billing dependency. | Scopes + test result + integration boundary/limitation. | Not Started |
| ZBA-05 | Gmail | Test the exact MOM trigger model. Explicitly classify it as interactive user-authorized or unattended/background. | The chosen required behavior is actually demonstrated under the no-billing architecture, OR the product is explicitly changed so only a proven interactive flow is required. | OAuth/trigger decision remains unresolved. | Required unattended behavior needs forbidden backend/billing or cannot be supported safely. | Send test + OAuth scopes + trigger model + decision. | Not Started |
| ZBA-06 | Gemini | Determine whether production Gemini is mandatory. If mandatory, prove exact runtime, credential flow and no-billing path. If not provable, mark AI optional/dev-time and remove it from mandatory production dependency. | Either (a) a real no-billing production path is demonstrated without exposing unrestricted API keys, or (b) Gemini is explicitly classified as optional/dev-time and all core workflows work without it. | Architecture is merely described as a "bounded proxy" without a real runtime/evidence. | Mandatory production Gemini requires billing, exposed secrets, or unavailable infrastructure. | Dependency classification + credential boundary + controlled test or explicit optional decision. | Not Started |
| ZBA-07 | End-to-end invariant | Reconcile every mandatory production dependency after ZBA-01..06. | All mandatory dependencies are PASS; no billing required; no paid SaaS/plugin mandatory; no hidden server dependency. | Any ZBA item remains OPEN. | Any mandatory dependency requires billing/forbidden infrastructure. | Final dependency matrix + signed architecture decision record. | Not Started |

## Evidence Quality Rules

1. Every PASS must identify **what was tested, where, when, and what result proved the acceptance condition**.
2. "Configured", "implemented", "build succeeds", "documentation says", or "should work" are not sufficient evidence for integration PASS.
3. If a human action is required, the item stays OPEN until the action is completed and the result is re-tested.
4. If a test cannot be performed in the current environment, mark OPEN and create the corresponding Human Gate; do not infer success.
5. If evidence conflicts with architecture documentation, evidence wins and the documentation must be corrected.
6. A PASS on one boundary does not imply PASS on another boundary.
7. The final ZBA-07 result must be derived from ZBA-01..06; it must never be self-scored independently.

## Current external evidence

During execution, verify current official Google/Firebase documentation again. Do not treat this workbook's external-source summary as proof of this repository's deployment or integration.

Official references:
- https://firebase.google.com/docs/hosting/usage-quotas-pricing
- https://firebase.google.com/docs/app-hosting/costs
- https://firebase.google.com/docs/app-hosting/product-comparison
- https://firebase.google.com/docs/firestore/security/overview
- https://firebase.google.com/docs/hosting/cloud-run
