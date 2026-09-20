# Evidence Artifact Registry — Mechanical Record

## Purpose

This registry is the authoritative index of evidence artifacts used to justify PASS.

A PASS without a registry entry is invalid.

## Required fields

| Field | Required |
|---|---|
| ID | Yes |
| Exact acceptance condition | Yes |
| Exact test/action | Yes |
| Repository commit/ref | Yes |
| Environment/location | Yes |
| Date/time | Yes |
| Observed result | Yes |
| Evidence artifact/reference | Yes |
| Human action | If applicable |
| Billing state | For cost-related criteria |
| Prerequisites | Yes |
| Contradiction audit result | Yes |
| PASS eligibility | Yes |

## Artifact rules

Evidence must be reproducible by another agent.

Acceptable examples:

- command output;
- automated test output;
- Firestore emulator test output;
- controlled OAuth operation result;
- Firebase deployment result;
- route smoke-test result;
- browser/runtime observation with exact route and timestamp;
- capability test result;
- license source/reference;
- dependency graph output;
- security negative-test result;
- exact Git diff/commit reference.

Not sufficient by itself:

- architecture prose;
- source-code presence;
- dependency installation;
- configuration presence;
- local compilation;
- a README statement;
- an AI-generated summary;
- "verified by design".

## Meta-audit procedure

For every current PASS:

1. Find its registry row.
2. Open the referenced evidence.
3. Confirm the evidence corresponds to the exact acceptance condition.
4. Confirm the test actually occurred.
5. Confirm timestamp and environment.
6. Confirm prerequisites.
7. Run contradiction checks.
8. Mark PASS eligible only if every field is satisfied.

If any step fails, downgrade the criterion.

## Required final artifact

The final registry must contain one row for every PASS in AC1–AC17 and ZBA-01–ZBA-07.

## Active Mechanical Evidence Rows

| Field | AC1 | AC9 | AC14 |
|---|---|---|---|
| **ID** | AC1 | AC9 | AC14 |
| **Exact Acceptance Condition** | Requirements captured without reducing builder scope; full traceability from source to architecture. | Scope/diff review showing zero premature Phase 2–10 business feature code in Phase 1. | R7 ₹5,000 threshold reference preserved without invented accounting or approval semantics; documented as an open Decision Gate (HG-07). |
| **Exact Test / Action** | Systematically mapped source requirements R1–R15 from `Requirements Freeze.md` to product modules in `context/project-overview.md`; verified all 17 builder capabilities preserved in `builder-architecture.md`. | Executed repository tree inspection and git log/diff review across `src/` to confirm absence of Projects, Finance, HR, Salaries, Reimbursements, MOM, and Visual Builder implementations. | Verified `Requirements Freeze.md` R7, `context/project-overview.md` §4.3 & R7, and `AGENTS.md` §2.2; eliminated invented dual-approval rules from `product-context.md`. |
| **Repository Commit / Ref** | `abe14df40bce953c2585f13b30931a622e691b73` | `abe14df40bce953c2585f13b30931a622e691b73` | `abe14df40bce953c2585f13b30931a622e691b73` |
| **Environment / Location** | Workspace Root / `Workbooks/Workbook 1/` & `context/` | Git repository workspace / `src/` | `Workbooks/Workbook 1/Requirements Freeze.md`, `context/project-overview.md` |
| **Date / Time** | 2026-09-20T02:05:00Z | 2026-09-20T02:05:00Z | 2026-09-20T02:05:00Z |
| **Observed Result** | 100% of R1–R15 captured; all 17 builder capabilities mapped to GrapesJS without scope reduction; R7 preserved as open gate. | Clean git diff: only architecture specs, durable context, and prototype Drive browser plumbing exist; zero Phase 2–10 business code. | Zero invented accounting math or approval rules exist in repository; R7 strictly maintained as open Decision Gate HG-07. |
| **Evidence Artifact / Reference** | `context/project-overview.md` §5; `builder-architecture.md` §1; `Workbooks/Workbook 1/Requirements Freeze.md` | `git log --oneline src/`; inspection of `src/` file tree (contains only Google Drive viewer prototype). | `Workbooks/Workbook 1/Requirements Freeze.md` line 13; `context/project-overview.md` §4.3; `AGENTS.md` §2.2. |
| **Human Action Involved** | None required for architecture specification freeze. | None required. | Requires user policy confirmation before Phase 6 implementation (HG-07). |
| **Billing State Checked** | N/A (specification level) | N/A (no billable external services invoked) | N/A (policy gate) |
| **Prerequisites** | Requirements Freeze: Complete | Phase 1 boundary definition: Active | Requirements Freeze R7: Complete |
| **Contradiction Audit Result** | Clean. Preserves all 17 builder capabilities and R7 Decision Gate. | Clean. No premature feature logic detected. | Clean. Contradiction in `product-context.md` resolved and harmonized. |
| **PASS Eligibility** | **PASS ELIGIBLE** | **PASS ELIGIBLE** | **PASS ELIGIBLE** |

---

## Downgraded Re-Audit Criteria Log (Revision 4 Execution Audit Lock)

| ID | Prior Claimed Status | Audited State | Concrete Audit Finding / Blocker |
|---|---|---|---|
| **AC2** | PASS | **OPEN** | Cross-file contradictions detected between legacy root context files (`active-context.md`, `tech-context.md`) and Workbook 1. Currently undergoing systematic harmonization. |
| **AC7** | PASS | **OPEN** | Context deliverables contained contradictory proxy and hosting claims; must achieve zero-contradiction state before PASS can be certified. |
| **AC8** | PASS | **OPEN** | Handoff document lacked the explicit mandatory lock string `PHASE 2 STARTING POINT ONLY. NOT AUTHORIZED UNTIL THE PHASE 1 COMPLETION FORMULA IS TRUE.` Now added, locked pending Phase 1 completion. |
| **AC13** | PASS | **OPEN** | `package.json` build script compiles `dist/server.cjs` via esbuild and `src/App.tsx` invokes `/api/*` endpoints. Runtime decoupling from Express for production is not yet demonstrated. |
| **AC15** | PASS | **OPEN** | Meta-verification criterion; cannot self-certify. Must remain OPEN until all AC and ZBA criteria reach their final evidence states. |
| **AC16** | PASS | **OPEN** | Contradictory text ("bounded client proxy") detected in `active-context.md`. While `@google/genai` is not called in `src/`, formal evidence demonstrating core production independence must be registered. |
| **ZBA-06** | PASS | **OPEN** | Classified as optional/dev-time, but formal test evidence proving core production independence without `@google/genai` must be completed and recorded. |
