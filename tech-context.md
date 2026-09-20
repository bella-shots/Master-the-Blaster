# Technology Context & Stack Specifications

> **Authoritative Document**: Runtime environment, dependency inventory, environment variables, and operational boundaries.

---

## 1. Runtime Environment & Port Constraints
- **Platform**: Cloud Run sandboxed container.
- **Port**: **Port 3000 ONLY**.
- **Host**: `0.0.0.0` (mandatory for container routing).
- **Process Architecture**:
  - Full-stack unified server: Express backend mounts Vite development middleware in dev, and serves static build assets in production.
  - Development entry: `tsx server.ts`
  - Production build: `vite build && esbuild server.ts --bundle --platform=node --format=cjs --packages=external --sourcemap --outfile=dist/server.cjs`
  - Production start: `node dist/server.cjs`

---

## 2. Core Dependencies & Packages
- **Frontend Framework**: React 19 (`react`, `react-dom`)
- **Language**: TypeScript (`typescript`)
- **Build Tool**: Vite (`vite`, `@vitejs/plugin-react`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`, `@tailwindcss/postcss`)
- **Icons**: Lucide React (`lucide-react`)
- **Animations**: Motion (`motion/react`)
- **Charts / Visuals**: Recharts (`recharts`), D3 (`d3`)
- **Server Runtime**: Express (`express`, `@types/express`)
- **AI SDK**: Google Gen AI TypeScript SDK (`@google/genai`)
- **Database & Auth**: Firebase JS SDK (`firebase`)

---

## 3. Environment Variables (`.env.example`)
```env
# Gemini API Key for server-side intelligence (MOM summaries, expense categorization)
GEMINI_API_KEY=

# Google OAuth / Firebase Configuration (Client-safe)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# Dedicated Google Drive Folder ID for zero-cost file storage
VITE_GOOGLE_DRIVE_FOLDER_ID=1A3Ex02WHDf3lP0EA1RkHq0Br_MPgxyfI
```

---

## 4. Strict Zero-Cost Boundaries
1. **No External Paid SaaS**: Prohibit Clerk, Auth0, Stripe, Twilio, SendGrid, Resend, Vercel, Supabase, AWS S3.
2. **Google Ecosystem Alignment**: All file storage goes to user's Google Drive; emails sent through user's Gmail API; database on Firestore free tier; AI on Google AI Studio Gemini free tier.
