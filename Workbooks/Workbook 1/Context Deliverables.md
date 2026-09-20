# Context Deliverables

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx`

| PHASE 1 — DURABLE AI CONTEXT FILES |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| File | Must exist after Phase 1? | Purpose | Required contents for this app | AI behavior | Verification | Status |
| agents.md | Yes | AI Studio execution entry point | Read order; phase protocol; stop/resume rules; no-guessing; one-unit execution; verification; progress updates. | AI must read this first every session. | File exists and points to all required context/specs. | Not Started |
| context/project-overview.md | Yes | Product truth | Company master website; users; modules; complete builder; cost target; scale; success criteria; in/out scope. | Authoritative product definition. | Matches Requirements Freeze. | Not Started |
| context/architecture-context.md | Yes | System blueprint | Runtime; editor engine; Firestore; Auth; Drive; Gmail; hosting; client/server boundaries; data ownership; permissions; cost invariant. | No technology may be introduced without a documented responsibility. | Architecture review passes. | Not Started |
| context/code-standards.md | Yes | Implementation consistency | TypeScript/React conventions; component patterns; naming; validation; error handling; security; file organization. | Follow existing project conventions before adding code. | No contradictions with selected runtime. | Not Started |
| context/ai-workflow-rules.md | Yes | Autonomous agent behavior | Read context; plan; implement exact scope; stop at human gates; resume; verify; no billing; no secrets in chat; update tracker. | This is the operational control contract. | Rules cover every Human Gate. | Not Started |
| context/ui-context.md | Yes | Visual system | Master site shell; dashboard; editor; navigation; responsive behavior; design tokens; accessibility baseline. | Use reusable primitives and preserve builder/editor usability. | UI direction defined before Phase 2. | Not Started |
| context/progress-tracker.md | Yes | Living project state | Current phase; completed; in progress; next; decisions; session notes; open questions; human gates; exact resume point. | Update after every meaningful checkpoint. | Can resume without chat history. | Not Started |
| context/feature-specs/README.md | Yes | Feature map entry | Phase 2–10 feature-unit sequence and dependencies; link to future specs. | Do not implement future units in Phase 1. | Feature roadmap exists. | Not Started |
