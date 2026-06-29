# AGENTS.md

## Commands

| Command | What it runs |
|---|---|
| `npm run dev` | Vite dev server (HMR on save) |
| `npm run build` | `vite build` → outputs to `dist/` |
| `npm run lint` | `oxlint` (not eslint) — config in `.oxlintrc.json` |
| `npm run preview` | `vite preview` — serves the built `dist/` locally |

No test framework. Plain JSX (no TypeScript).

## Stack

- **React 19** + **Vite 8**, plugins: `@vitejs/plugin-react`, `@tailwindcss/vite`
- **Tailwind v4** — uses `@import "tailwindcss"` in CSS (not `@tailwind` directives)
- **framer-motion** — stagger animations, `AnimatePresence`, `motion` components
- **oxlint** — (`react/rules-of-hooks` error, `react/only-export-components` warn)

## Structure

- **Entry** `src/main.jsx` → `<App />` into `#root` (`index.html`)
- **App** renders sections in order: `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Contact`
- **Reusable primitives** in `src/components/`: `Container` (max-w-7xl), `Section` (id + padding), `Button` (3 variants), `AnimatedText` (staggered word animation)
- **Assets** in `src/assets/`; public files (`favicon.svg`, `icons.svg`) served at `/favicon.svg`, `/icons.svg`
- **`src/hooks/`** is empty — add custom hooks here
- **`dist/`** is build output (gitignored); **`.dist/`** is empty (ignore it)

## Conventions

- **Scroll links** use manual `scrollIntoView({ behavior: 'smooth' })` in Navbar and Button; CSS also sets `scroll-behavior: smooth` on `<html>`
- **Tailwind v4 utility names**: some classes differ from v3 (e.g. `shadow-xs` not `shadow`, `svh` instead of `vh`)
