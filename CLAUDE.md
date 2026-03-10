# CLAUDE.md — DDS Safe Sync

## Project Overview

**DDS Safe Sync** is a React/TypeScript web application for managing and tracking *Diálogos de Segurança* (DDS — Safety Dialogs), which are daily safety training sessions for employees. Workers sign digitally to confirm participation; managers monitor progress via dashboards.

The frontend is statically hosted and communicates exclusively with a **Google Apps Script** backend (no in-repo server code). The project was bootstrapped with [Lovable](https://lovable.dev).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 + React Router 6 |
| Language | TypeScript 5 (strict mode partially disabled) |
| Build Tool | Vite 5 (port 8080) |
| Styling | Tailwind CSS 3 + shadcn/ui (Radix UI) |
| State | React Context API + TanStack Query v5 |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Testing | Vitest + jsdom |
| Linting | ESLint 9 + TypeScript ESLint |
| Backend | Google Apps Script (external) |

---

## Directory Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui primitives (Button, Dialog, etc.) — do not edit manually
│   ├── AppHeader.tsx    # Top navigation bar with user info and logout
│   ├── ProtectedRoute.tsx   # Redirects unauthenticated users to /login
│   ├── SignatureCanvas.tsx  # Touch/mouse signature drawing (2× DPI scaling)
│   ├── CountdownTimer.tsx   # 5-minute countdown before signing is allowed
│   ├── SelectionScreen.tsx  # DDS topic selection UI
│   ├── DSSViewer.tsx        # Renders DDS content for reading
│   ├── GSheetConfig.tsx     # Google Sheets URL configuration panel
│   └── NavLink.tsx          # Styled router link
├── pages/
│   ├── Login.tsx        # Credential login form
│   ├── DDSList.tsx      # Employee's list of DDS to sign this month
│   ├── DDSSign.tsx      # Full signing flow (read → agree → sign)
│   ├── Dashboard.tsx    # Admin KPI dashboard (month/sector/unit filters)
│   ├── DDSGeral.tsx     # Admin team overview with daily evolution chart
│   ├── MeusDDS.tsx      # Employee personal progress view
│   ├── Index.tsx        # Legacy redirect page
│   └── NotFound.tsx     # 404 handler
├── contexts/
│   ├── AuthContext.tsx  # Global auth state; persisted in localStorage (key: dss-user)
│   └── DDSContext.tsx   # DDS records state with optimistic updates
├── services/
│   └── api.ts           # All Google Apps Script API calls
├── lib/
│   ├── utils.ts         # `cn()` class-name helper (clsx + tailwind-merge)
│   └── googleSheets.ts  # Secondary Google Sheets integration (localStorage-configurable)
├── data/
│   ├── ddsContent.ts    # DDS-01…DDS-30 topics, titles, and body content
│   └── dssContent.ts    # Legacy DSS content (kept for reference)
├── hooks/
│   ├── use-toast.ts     # Sonner toast hook
│   └── use-mobile.tsx   # Viewport width < 768px detector
└── test/
    ├── setup.ts         # Vitest + testing-library setup
    └── example.test.ts  # Starter test
```

---

## Development Commands

```bash
npm run dev          # Dev server with HMR (http://localhost:8080)
npm run build        # Production build → dist/
npm run build:dev    # Dev-mode production build
npm run preview      # Serve dist/ locally
npm run lint         # ESLint check
npm run test         # Run tests (once)
npm run test:watch   # Run tests in watch mode
```

---

## Architecture & Key Conventions

### Routing

Defined in `src/App.tsx`. All routes except `/login` are wrapped in `<ProtectedRoute>`.

| Route | Component | Access |
|-------|-----------|--------|
| `/login` | `Login` | Public |
| `/dds` | `DDSList` | All users |
| `/dds/:id` | `DDSSign` | All users |
| `/meus-dds` | `MeusDDS` | All users |
| `/dds-geral` | `DDSGeral` | Admin only |
| `/dashboard` | `Dashboard` | Admin only |

### Authentication

- Auth state lives in `AuthContext`. User object stored in `localStorage` under key `dss-user`.
- User fields: `cracha` (badge #), `nome`, `funcao` (role/job), `setor` (sector), `unidade` (unit), `role` (`"admin"` or `"user"`).
- Admin checks: `user?.role === "admin"` or `user?.cracha === "999"`.

### API Layer (`src/services/api.ts`)

All data flows through a single Google Apps Script endpoint via POST with an `action` discriminator:

```typescript
{ action: "login" | "mydds" | "sign" | "unidades" | "dashboard", ...params }
```

- CORS errors are silently caught; `no-cors` mode used as fallback.
- Responses are expected as JSON `{ success: boolean, data: ... }`.

### DDS Content (`src/data/ddsContent.ts`)

- 30 topics (DDS-01…DDS-30), each with `id`, `title`, `content` (HTML string), `theme`, `icon`.
- The active DDS for a given day is selected by `(dayOfMonth - 1) % ddsTopics.length`.
- **Do not add duplicate IDs.** A past bug was DDS-16 appearing twice (fixed in commit `14c6a9d`).

### State Management

- **DDSContext**: Holds the list of signed DDS records. Uses optimistic updates — records are added locally before the API call completes, then reconciled on response.
- **TanStack Query**: Used in dashboard/admin pages for server data caching.

### Signature Capture (`SignatureCanvas.tsx`)

- Renders on a `<canvas>` at 2× device pixel ratio for crisp signatures.
- Exports as base64-encoded PNG with white background via `canvas.toDataURL("image/png")`.
- The `<CountdownTimer>` must reach zero before the sign button is enabled.

### Timestamps

All timestamps use **Brasília timezone** (`America/Sao_Paulo`, UTC−3):

```typescript
new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
```

### Meta / Progress Targets

- **MeusDDS (employee view)**: Meta = current day of the month (dynamic).
- **Dashboard/DDSGeral (admin view)**: Fixed meta of **25 days** per employee per month (constant `META_POR_FUNCIONARIO = 25`).
- Month references use `YYYY-MM` string format throughout.

---

## Styling Conventions

- **Tailwind CSS** for all layout and utility classes.
- Custom design tokens (in `tailwind.config.ts`):
  - Colors: `verde`, `azul`, `verde2`, `azul2`
  - Fonts: `Barlow Condensed` (headings), `Lato` (body)
  - Gradients: defined as CSS custom properties in `index.css`
- `cn()` utility from `src/lib/utils.ts` for conditional class merging.
- `src/components/ui/` contains shadcn/ui components — **update these via the shadcn CLI, not manually**.

---

## Code Patterns

- **Functional components only** — no class components.
- **Controlled inputs** for all forms.
- **Role-based rendering**: wrap admin-only UI in `{user?.role === "admin" && ...}`.
- **Error boundaries**: not present; errors surface as toast notifications via Sonner.
- Constants in `UPPER_SNAKE_CASE`.
- Language: all UI strings, variable names for domain concepts, and comments are in **Brazilian Portuguese**.

---

## Testing

- Framework: **Vitest** with jsdom environment.
- Setup: `src/test/setup.ts` (imports `@testing-library/jest-dom` matchers).
- Tests live in `src/test/` or colocated as `*.test.ts(x)` files.
- Currently minimal coverage — expand tests when modifying business logic.

```bash
npm run test         # Single run
npm run test:watch   # Watch mode
```

---

## Environment & Build Notes

- `vite.config.ts`: Dev server binds to `::` (all interfaces) on port **8080**.
- Path alias `@/` maps to `src/`.
- No `.env` file is required for development; the Google Apps Script URL is either hardcoded in `api.ts` or configurable via `GSheetConfig.tsx` (stored in `localStorage`).
- No server-side rendering; this is a pure SPA.

---

## Common Pitfalls

1. **DDS ID uniqueness**: Always verify there are no duplicate IDs in `ddsContent.ts` before adding new content.
2. **CORS with Google Apps Script**: The API uses `no-cors` fallback; responses in `no-cors` mode are opaque — handle sign success optimistically on the frontend.
3. **Timestamp timezone**: Never use `new Date().toISOString()` for user-facing timestamps; always pass `{ timeZone: "America/Sao_Paulo" }`.
4. **Signature canvas scaling**: The canvas internal resolution is `2 × CSS size`; account for this when calculating drawing coordinates.
5. **shadcn/ui components**: Do not edit files in `src/components/ui/` directly — use the shadcn CLI to add or upgrade components.

---

## Git Workflow

- Primary branch: `master`
- Commit messages are typically in **Brazilian Portuguese**.
- Recent active development: dashboard filters, DDS content updates, meta calculation fixes.
