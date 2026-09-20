# Builder Architecture

> Source: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS_REVISED.xlsx`

| PHASE 1 — FULL VISUAL BUILDER ARCHITECTURE CONTRACT |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Capability | Required | Architecture responsibility | Phase 1 decision | Persistence/security boundary | Verification planned | Status | Notes |
| Drag/drop | Yes | Visual editor engine | Use mature editor capability; configure rather than reinvent. | Only authorized page editors can mutate page state. | Capability mapped to selected engine. | Open |  |
| Move/reposition | Yes | Visual editor engine | Enable supported positioning/layout modes. | Persist page state. | Move → save → reload. | Open |  |
| Resize | Yes | Visual editor engine | Enable sizing/handles and responsive values. | Persist responsive settings. | Resize desktop/mobile → reload. | Open |  |
| Arbitrary/nested columns | Yes | Visual editor + CSS layout | Use nested containers, flex/grid and layout primitives. | Persist component hierarchy. | Build multi-column nested layout. | Open |  |
| Responsive breakpoints | Yes | Visual editor devices/style manager | Define desktop/tablet/mobile behavior. | Persist breakpoint-specific values. | Preview all target widths. | Open |  |
| Typography/style controls | Yes | Style manager | Expose font, size, weight, line-height, color, spacing, borders, backgrounds. | Sanitize/validate stored styles. | Edit style → reload. | Open |  |
| Animations/interactions | Yes | Editor/plugin/custom integration | Use engine-native/open-source capability first. | Do not allow unsafe arbitrary execution by unauthorized users. | Create/test animation/interaction. | Open |  |
| Custom CSS | Yes | Editor code/style layer | Allow page-level custom CSS within permission boundary. | Sanitize/store page-scoped CSS. | Add CSS → preview/publish. | Open |  |
| Custom JavaScript | Yes | Editor code layer | Allow page-scoped JS only for authorized users; document security boundary. | Never execute untrusted code outside intended page sandbox/context. | Add simple JS → preview. | Open |  |
| Reusable components | Yes | Editor component system | Define reusable components/blocks without limiting free layout. | Version/persist component definitions. | Create → reuse → reload. | Open |  |
| Pages | Yes | Application page model | Page entity with title/slug/status/content/editor state. | Permission-aware CRUD. | Create/edit/publish page. | Open |  |
| Templates/themes | Yes | Editor/application layer | Define reusable page templates and theme tokens. | Admin-controlled global templates/themes. | Apply template/theme. | Open |  |
| Plugins/extensions | Yes | Extension architecture | Support open-source/custom extensions; no paid plugin dependency. | Only trusted extensions/admin installation. | Install/enable test extension. | Open |  |
| Assets | Yes | Google Drive + editor asset manager | Asset metadata in DB; binary files in Drive. | Access-controlled file references. | Upload/select/reuse asset. | Open |  |
| Undo/redo | Yes | Editor command/history system | Use mature editor command history. | Local/editor state + persistence checkpoints. | Undo/redo after changes. | Open |  |
| Save/load/autosave | Yes | Application persistence | Explicit save plus safe autosave strategy. | Server-side ownership check. | Edit → save → reload. | Open |  |
| Preview | Yes | Editor/runtime | Preview without editing controls. | Preview respects page permissions and safe execution boundary. | Preview matches published page. | Open |  |
| Publish/unpublish | Yes | Page lifecycle | Draft/published states with version-aware save. | Only authorized users publish protected pages. | Publish → public/internal view. | Open |  |
