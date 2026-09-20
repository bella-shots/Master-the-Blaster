# UI Context & Visual Design System

> **Authoritative Document**: Layout specifications, UI component hierarchy, visual design tokens, responsive rules, and builder UI anatomy.

---

## 1. Design System & Tokens

### 1.1 Color Palette
- **Canvas / Background**: `bg-slate-50` (soft, eye-friendly neutral with high contrast against card containers).
- **Surface / Containers**: `bg-white` with subtle `border-slate-200` and refined `shadow-xs`.
- **Brand Primary**: `indigo-600` (hover: `indigo-700`, active: `indigo-800`, light tint: `indigo-50`).
- **Brand Secondary / Neutral**: `slate-700` and `slate-900` for primary typography; `slate-500` for secondary metadata.
- **Success / Approvals**: `emerald-600` (light: `emerald-50`, border: `emerald-200`).
- **Warning / Policy Threshold (₹5,000 Gate)**: `amber-600` (light: `amber-50`, border: `amber-200`).
- **Danger / Deletions**: `rose-600` (light: `rose-50`, border: `rose-200`).

### 1.2 Typography & Hierarchy
- **Font Stack**: Clean, modern system sans-serif typography (`font-sans`).
- **Scale**:
  - H1 / Page Headers: `text-2xl font-bold tracking-tight text-slate-900`
  - H2 / Section Headers: `text-lg font-semibold text-slate-900`
  - H3 / Card Titles: `text-sm font-semibold text-slate-900`
  - Body / Text: `text-sm text-slate-600 leading-relaxed`
  - Microcopy / Badges: `text-xs font-medium`

---

## 2. Master Shell Architecture

```
+-------------------------------------------------------------------------+
| Topbar: Company Logo | Global Search | Quick Actions | User Role Avatar |
+------------------+------------------------------------------------------+
| Sidebar          | Main Content Area                                    |
| - Dashboard      |  +------------------------------------------------+  |
| - Projects       |  | Breadcrumbs & Page Action Header               |  |
| - Finance        |  +------------------------------------------------+  |
| - Reimbursements |  | Dynamic Module View                            |  |
| - HR Directory   |  | (Projects Board, Finance Ledger, Builder Canvas)|  |
| - MOM & Notes    |  +------------------------------------------------+  |
| - Website Builder|                                                      |
| - Settings       |                                                      |
+------------------+------------------------------------------------------+
```

- **Desktop (≥1024px)**: Fixed left sidebar (width: 260px) + flexible main container (max-w-7xl mx-auto).
- **Mobile (<1024px)**: Collapsible hamburger navigation drawer with 44px touch targets.

---

## 3. Visual Website Builder Layout Anatomy

When navigating to the **Website Builder** module:
1. **Top Toolbar (h-14)**:
   - Page Selector dropdown, Add Page button, Breakpoint Switcher (Desktop 1200px, Tablet 768px, Mobile 375px), Undo/Redo icons, Save Draft button, Publish Live button.
2. **Left Block Palette (w-72)**:
   - Draggable component categories: Layout (Sections, Containers, Grid Columns), Typography (Headings, Paragraphs), Media (Images, Video, Google Drive Assets), Components (Buttons, Forms, Cards, Testimonials).
3. **Center Canvas (flex-1)**:
   - Fluid preview iframe/viewport with visual drop indicators, hover element boundaries, inline editing, and element resize handles.
4. **Right Property Inspector (w-80)**:
   - Tabbed inspector: Styles (Dimensions, Typography, Spacing, Backgrounds, Borders), Attributes/Props, Custom Scoped CSS editor, Custom Event JavaScript editor.
