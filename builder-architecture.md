# Full Visual Website Builder Architecture Contract

> **Authoritative Document**: Non-negotiable architectural blueprint for the full visual website builder.  
> **Source**: `Phase_1_Product_Architecture_Google_AI_Studio_AUTONOMOUS.xlsx` Sheet 7.

---

## 1. Non-Negotiable Full Builder Scope
The visual website builder is **NOT** a simple block list or markdown previewer. It is a full visual drag-and-drop website creation environment satisfying all 17 capabilities:

| # | Capability | Architectural Responsibility | Implementation Details |
|---|---|---|---|
| **1** | **Drag & Drop** | Visual editor engine | Free placement, container dropping, visual blue-line drop indicators, drag-to-reorder. |
| **2** | **Arbitrary Layout** | Canvas layout engine | Nested container primitives: Section, Container, Grid (1–12 columns), FlexRow, FlexCol. Infinite nesting depth. |
| **3** | **Resize** | Interaction handles | Visual resize handles for containers, columns, images, and spacers with min/max pixel constraints. |
| **4** | **Responsive Breakpoints** | Device viewport switcher | 3 standard breakpoints: Desktop (≥1024px), Tablet (768–1023px), Mobile (<768px) with per-breakpoint style overrides. |
| **5** | **Typography & Styling** | Property inspector | Visual panels for font family, size, weight, line-height, text color, alignment, spacing (padding/margin), backgrounds, borders, shadows. |
| **6** | **Animations & Interactions** | Motion engine | Enter animations (fade, slide up), hover transformations, smooth scroll anchors, modal triggers. |
| **7** | **Custom CSS** | Code editor & style injector | Scoped custom CSS editor per element (`#element-id { ... }`) plus global page custom CSS. |
| **8** | **Custom JavaScript** | Script sandbox / event engine | Sandboxed event handlers (`onClick`, `onScroll`, `onMount`) executed safely without `eval`. |
| **9** | **Reusable Components** | Symbol library | Save any element or container tree as a reusable block in `/builder_components` (e.g., Header, Footer, Hero, CTA). |
| **10** | **Pages & Routing** | Multi-page manager | Create, rename, clone, and delete pages; configure URL slug, SEO title, and meta description. |
| **11** | **Templates & Themes** | Theme manager | Preset color palettes, font pairings, and pre-built starter page templates. |
| **12** | **Plugin / Extension API** | Extension registry | Clean interface to register custom blocks, custom property controls, and external widget renderers. |
| **13** | **Asset Management** | Google Drive Media Manager | Direct integration with Google Drive to upload, select, and embed images, logos, and documents at ₹0 cost. |
| **14** | **Preview Mode** | Interactive preview renderer | 1-click toggle to view the page exactly as live visitors see it, with responsive iframe scaling. |
| **15** | **Undo / Redo** | History state manager | Command pattern stack with at least 20 history states and standard keyboard shortcuts (`Ctrl/Cmd+Z`, `Ctrl/Cmd+Y`). |
| **16** | **Save / Load** | Persistence engine | Automatic draft caching to `localStorage` + explicit cloud commit to Firestore `/pages`. |
| **17** | **Publish** | Live publishing pipeline | 1-click publishing to dynamic live route `/p/:slug` with instant static-like React hydration. |

---

## 2. JSON Component Tree Schema

Every page layout is serialized as a clean, hierarchical JSON document:

```typescript
export type Breakpoint = 'desktop' | 'tablet' | 'mobile';

export interface StyleDeclaration {
  // Layout
  display?: 'block' | 'flex' | 'grid' | 'none';
  flexDirection?: 'row' | 'column';
  justifyContent?: string;
  alignItems?: string;
  gridTemplateColumns?: string;
  gap?: string;
  
  // Sizing & Spacing
  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  
  // Typography
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  
  // Decoration
  backgroundColor?: string;
  backgroundImage?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  boxShadow?: string;
  opacity?: number;
}

export interface BuilderNode {
  id: string;                         // Unique element ID (e.g., 'el-hero-heading')
  type: string;                       // 'section' | 'container' | 'grid' | 'heading' | 'text' | 'button' | 'image' | 'custom'
  name: string;                       // Human-readable name (e.g., 'Hero Heading')
  props: Record<string, any>;         // Node-specific properties (content, href, src, alt, etc.)
  styles: StyleDeclaration;           // Base desktop styles
  breakpointOverrides?: {             // Responsive style overrides
    tablet?: Partial<StyleDeclaration>;
    mobile?: Partial<StyleDeclaration>;
  };
  classes?: string[];                 // Optional Tailwind utility classes
  customCss?: string;                 // Scoped CSS
  customJs?: string;                  // Safe event script or handler
  children?: BuilderNode[];           // Nested child elements (infinite recursion)
}

export interface BuilderPage {
  id: string;                         // Firestore document ID
  title: string;                      // Page title (e.g., 'Home', 'About Us')
  slug: string;                       // URL path (e.g., 'home', 'annual-report')
  status: 'draft' | 'published';
  publishedAt?: string;
  updatedAt: string;
  authorId: string;
  rootNode: BuilderNode;              // Root container
  globalCss?: string;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
  };
}
```

---

## 3. Sandboxed Execution & Security
- **No `eval()`**: User-authored scripts are never executed via `eval()`.
- **Scoped Handlers**: Custom element scripts are passed a controlled runtime context `{ element, data, navigate, notify }` inside a sandboxed wrapper function.
- **Role Isolation**: Only `Super Admin` and `Admin` roles have authority to write custom JavaScript or publish pages live to the public route.
