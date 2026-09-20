# Code Standards & Implementation Conventions

> **Authoritative Document**: Code standards, naming conventions, architectural hygiene, and language standards.

---

## 1. TypeScript & Language Rules
- **Strict Typing**: No `any` types in newly authored interfaces or functions. Define explicit types in `src/types.ts`.
- **Top-Level Imports**: All imports must be placed at the top of the file. Use named imports (`import { useState } from 'react'`), never destructuring assignments on default imports.
- **Standard Enums**: Use standard `enum` or `type Union = '...'`. Never use `const enum`.
- **Zero Build Warnings**: Code must compile cleanly with `tsc --noEmit` and pass `lint_applet`.

---

## 2. React 19 & Component Architecture
- **Functional Components**: All components must be functional components utilizing standard React hooks (`useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`).
- **Dependency Arrays**: Ensure all `useEffect` and `useCallback` dependency arrays contain stable primitives or heavily memoized objects. Avoid unnecessary re-renders.
- **State Partitioning**: Keep local UI state (modals open, input values) in local component state. Keep global domain state (auth, current project, cart/builder state) in lightweight contexts or hooks.
- **Modularization**: Keep files below 300 lines wherever possible. Extract subcomponents, data adapters, and helper functions into discrete files.

---

## 3. Styling & Visual Design (Tailwind CSS v4)
- **Tailwind Utilities**: Style all components using Tailwind utility classes directly. Do NOT create custom CSS files or inline `style` objects except where dynamically required by the visual website builder canvas.
- **Icons**: Exclusively use `lucide-react`. Never paste raw SVG markup.
- **Color Contrast & Polish**:
  - Respect WCAG AA (minimum 4.5:1 text contrast).
  - Use deliberate, professional neutral palettes (`slate-50`, `slate-900`, with clean brand accents in `indigo-600` / `blue-600` and emerald for positive states).
  - Cap border radii at `rounded-xl` (12px) for cards, and use `rounded-lg` (8px) for buttons and inputs.
  - Consistent padding: horizontal padding on buttons must be 2x vertical padding (`px-4 py-2`).

---

## 4. Financial & Regional Standards
- **Currency**: All monetary amounts must be displayed in Indian Rupees (`₹`) using proper formatting (e.g., `₹5,000`, `₹1,25,000`).
- **Dates**: Standardize on `DD-MMM-YYYY` (e.g., `20-Sep-2026`) or relative time displays (`2 hours ago`) for consistent internal team communication.

---

## 5. Error Handling & User Feedback
- **Never Fail Silently**: All network requests and mutations must handle errors explicitly and surface readable messages to the user.
- **Optimistic Updates**: For quick actions (e.g., task status toggles), use optimistic UI updates with rollback on network failure.
- **Loading States**: Display spinning loader indicators or skeleton screens during asynchronous fetches. Never leave a button non-responsive without a loading indicator.
