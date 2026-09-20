# AI Workflow Rules & Autonomous Agent Protocol

> **Authoritative Document**: Rules governing autonomous execution, human gate transitions, error correction loops, and scope discipline for AI agents.

---

## 1. Autonomous Execution Protocol
1. **Context Ingestion**: Before touching any code, the AI agent must view the 7 durable context files, starting with `AGENTS.md` and `context/progress-tracker.md`.
2. **Single Unit Discipline**: Never execute more than one feature unit in a single turn. Follow the sequential order established in the 10-phase roadmap.
3. **Strict Scope Ceiling**: Implement exactly what is specified in the requirements freeze. Do not add unsolicited widgets, decorative tabs, secondary server modules, or speculative AI features.

---

## 2. Human Intervention Gates
The AI agent must **STOP** immediately and wait for user confirmation under these conditions:
1. **Cloud Service Provisioning**: When Firebase Firestore/Auth requires initialization via `set_up_firebase`.
2. **Third-Party Consent**: When Google Drive or Gmail API OAuth permissions must be authorized by the user in the UI.
3. **Phase Sign-Off**: At the conclusion of each phase, present the self-scored Acceptance Gate checklist and wait for the explicit resume confirmation.

---

## 3. Focused Error Corrective Loop
When a build or runtime error occurs:
1. **Step 1: Capture the exact error**: Read the exact compilation output or error stack.
2. **Step 2: Identify smallest boundary**: Pinpoint the precise file and line responsible.
3. **Step 3: Surgical correction**: Apply the smallest possible fix using `edit_file`. Do NOT rewrite entire files.
4. **Step 4: Verification**: Run `lint_applet` and `compile_applet`.
5. **Circuit Breaker**: If the same error persists after 3 consecutive attempts, STOP and ask the user for guidance.

---

## 4. Cost Invariant Verification
Before adding any package or introducing an architectural dependency, verify:
- Does this require a paid subscription? (e.g., Clerk, SendGrid, Firebase Storage paid tier).
- If YES: **Reject and replace** with an existing Google service or free open-source equivalent.
