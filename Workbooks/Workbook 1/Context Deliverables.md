# Context Deliverables

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx` — Verification Revision 2

| File | Must exist after Phase 1? | Purpose | Required contents for this app | AI behavior | Verification | Status |
| --- | --- | --- | --- | --- | --- |
| agents.md | Yes | AI Studio execution entry point | Read order, phase protocol, stop/resume, no-guessing, one-unit execution, verification, progress updates. | Read first every session. | Exists and points to all required context/specs. | Not Started |
| context/project-overview.md | Yes | Product truth | Modules, users, builder scope, cost invariant, scale, success criteria, open policy decisions. | Authoritative product definition. | Matches Requirements Freeze exactly. | Not Started |
| context/architecture-context.md | Yes | System blueprint | Runtime, editor, DB, Auth, Drive, Gmail, hosting, client/server boundaries, permissions, zero-billing proof, Gemini boundary, custom-JS security boundary. | No technology without responsibility/evidence. | Cross-consistency audit passes. | Not Started |
| context/code-standards.md | Yes | Implementation consistency | TypeScript/React, validation, error handling, security, file organization, testing. | Follow project conventions. | No contradiction with architecture. | Not Started |
| context/ai-workflow-rules.md | Yes | Agent behavior | Plan → implement → verify; stop gates; resume; no billing; no secrets; evidence rules; progress updates. | Operational control contract. | Covers every Human Gate and evidence rule. | Not Started |
| context/ui-context.md | Yes | Visual system | Site shell, dashboard, editor, navigation, responsive behavior, accessibility. | Reusable primitives. | UI direction defined. | Not Started |
| context/progress-tracker.md | Yes | Living project state | Current phase, completed, in progress, next, decisions, open questions, gate status, exact resume point. | Update checkpoints. | Can resume without chat history. | Not Started |
| context/feature-specs/README.md | Yes | Feature map | Phase 2–10 units/dependencies. | Do not implement future units in Phase 1. | Roadmap exists. | Not Started |
| Verification Evidence Protocol.md | Yes | Evidence ledger | AC1–AC17 and ZBA-01–ZBA-07 evidence references, test commands/results, timestamps, human actions, billing state, open/failed items. | Never mark PASS without evidence. | Every PASS has reproducible evidence. | Not Started |
