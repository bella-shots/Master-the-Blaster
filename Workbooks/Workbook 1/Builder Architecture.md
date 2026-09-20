# Builder Architecture

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx` — Verification Revision 2

| Capability | Required | Architecture responsibility | Phase 1 decision | Persistence/security boundary | Verification planned | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Drag/drop | Yes | Mature visual editor engine | Use proven engine capability. | Authorized editors only. | Capability demo/test. | Open |
| Move/reposition | Yes | Visual editor engine | Support free positioning/layout modes. | Persist page state. | Move → save → reload. | Open |
| Resize | Yes | Visual editor engine | Responsive sizing/handles. | Persist responsive values. | Resize desktop/mobile → reload. | Open |
| Arbitrary/nested columns | Yes | Editor + CSS layout | Nested containers, flex/grid, infinite nesting as supported. | Persist hierarchy. | Build nested layout. | Open |
| Responsive breakpoints | Yes | Editor device/style system | Desktop/tablet/mobile. | Persist breakpoint values. | Preview target widths. | Open |
| Typography/style controls | Yes | Style manager | Typography, color, spacing, borders, shadows, layout. | Validate stored styles. | Edit → reload. | Open |
| Animations/interactions | Yes | Engine/plugin/integration | Use open-source/native capability first. | No unsafe execution for unauthorized users. | Create/test. | Open |
| Custom CSS | Yes | Code/style layer | Page-scoped CSS. | Sanitize/store by page. | Add CSS → preview. | Open |
| Custom JavaScript | Yes | Code layer + security boundary | Must use a **real isolation boundary** for untrusted custom JS (e.g. sandboxed iframe/origin isolation or equivalent). A Function scope is **not** considered a security sandbox. | Explicit threat model; no access to sensitive parent-page cookies/storage. | Security test + simple JS behavior test. | Gate — Open |
| Reusable components | Yes | Component system | Reusable symbols/blocks without restricting free layout. | Versioned persistence. | Create → reuse → reload. | Open |
| Pages | Yes | Page model | Title/slug/status/content/editor state. | Permission-aware CRUD. | Create/edit/publish. | Open |
| Templates/themes | Yes | Application/editor layer | Reusable templates/theme tokens. | Admin-controlled. | Apply template/theme. | Open |
| Plugins/extensions | Yes | Extension architecture | Open-source/custom only; no paid dependency. | Trusted/admin installation. | License + extension test. | Open |
| Assets | Yes | Drive + asset manager | Drive binaries; Firestore metadata/IDs. | Access-controlled references. | Upload/select/reuse. | Open |
| Undo/redo | Yes | Editor history | Mature command history. | Local state + persistence checkpoints. | Undo/redo test. | Open |
| Save/load/autosave | Yes | Persistence | Explicit save + safe autosave. | Ownership checks. | Edit → save → reload. | Open |
| Preview | Yes | Runtime | Preview without editing controls. | Safe execution boundary. | Preview/published comparison. | Open |
| Publish/unpublish | Yes | Page lifecycle | Draft/published states. | Authorized publishers only. | Publish → view → unpublish. | Open |
