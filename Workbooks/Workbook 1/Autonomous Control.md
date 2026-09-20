# Autonomous Control

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx` — Verification Revision 2

| Step | Time | Phase Unit | AI must do | Human gate? | STOP condition | Resume command | Verification | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P1-01 | 08:00–08:05 | Load workbook | Read every sheet; establish workbook as authoritative. | No | Workbook cannot be read. | RESUME PHASE 1 | All Phase 1 inputs loaded. | Not Started |
| P1-02 | 08:05–08:12 | Requirement normalization | Map every requirement and identify consequential ambiguity. | Yes if ambiguity affects architecture, security, accounting or cost. | Cannot safely default. | RESUME PHASE 1 | Requirements inventory traces to source. | Not Started |
| P1-03 | 08:12–08:20 | Scope and success criteria | Freeze Phase 1 boundaries and constraints without inventing semantics. | Only for conflicts. | Constraint conflict. | RESUME PHASE 1 | In/out scope explicit. | Not Started |
| P1-04 | 08:20–08:35 | Zero-billing architecture proof | Evaluate hosting/backend and execute ZBA-01..ZBA-07. Do not delete server.ts. Record evidence for each item. | Yes where account/OAuth/architecture decision is required. | Billing required, secret server required without no-cost path, or evidence unavailable. | DONE — RESUME PHASE 1 | Each ZBA has PASS/OPEN/FAIL plus evidence reference. | Not Started |
| P1-05 | 08:35–08:43 | Security/permissions | Define RBAC and Firestore Rules boundaries. | Yes if policy is ambiguous. | Sensitive boundary cannot be safely specified/tested. | RESUME PHASE 1 | Permission matrix + actual or emulator rule-test evidence. | Not Started |
| P1-06 | 08:43–08:50 | Integration gates | Perform only required proof actions for Auth/Drive/Gmail/hosting. | Yes for OAuth/console actions. | Human action required. | DONE — RESUME PHASE 1 | Re-test after gate; attach evidence. | Not Started |
| P1-07 | 08:50–08:55 | Durable context | Create/update required context files and verification record. | No | Repository write unavailable. | DONE — RESUME PHASE 1 | Files agree and link to verification record. | Not Started |
| P1-08 | 08:55–08:58 | Cross-consistency verification | Check requirements ↔ architecture ↔ permissions ↔ storage ↔ builder ↔ cost. Check for contradictory claims. | No unless contradiction requires user decision. | Any unresolved contradiction or unsupported PASS. | RESUME PHASE 1 | No unsupported PASS; open items remain explicitly open. | Not Started |
| P1-09 | 08:58–09:00 | Phase 1 gate | Run Acceptance Gate only after verification evidence exists. | Yes if any gate remains unresolved. | Any P0 criterion or ZBA item is OPEN/FAIL. | Continue Phase 1 | Phase 1 cannot be COMPLETE until every P0 item is evidence-backed PASS. | Not Started |
