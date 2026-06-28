# AGENTS.md

## Commands

| Command | What it runs |
|---|---|
| `npm run dev` | Vite dev server (HMR on save) |
| `npm run build` | `vite build` → outputs to `dist/` |
| `npm run lint` | `oxlint` (not eslint) — config in `.oxlintrc.json` |
| `npm run preview` | `vite preview` — serves the built `dist/` locally |

No test framework is configured. No typechecking (plain JSX, not TypeScript).

## Project structure

- **Entrypoint:** `src/main.jsx` → renders `<App />` into `#root` (defined in `index.html`)
- **Assets:** `src/assets/` (images, SVGs referenced by App)
- **Public files:** `public/favicon.svg`, `public/icons.svg` — served at `/favicon.svg`, `/icons.svg`
- **Configs:** `vite.config.js` (plugin-react only), `.oxlintrc.json` (react/oxc plugins)
