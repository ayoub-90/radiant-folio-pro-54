# Port Portfolio + Add i18n (EN/FR) + Theme Toggle

## Goal
Bring the uploaded `Portfolio-main` project into this Lovable workspace as-is design-wise, then layer in language switching (English/French) and dark/light theme switching. Defaults: **English + Light**, both user-switchable and persisted to `localStorage`.

## 1. Port the portfolio
Both the upload and this project use TanStack Start + React 19 + Vite + Tailwind v4 + shadcn — so it's a clean file copy, not a rewrite.

Copy from `Portfolio-main/` → project:
- `src/components/portfolio/**` (chapters, Cursor, GrainOverlay, ScrollProgress, Ticker, WavyDivider, DataGraphCanvas, ChapterHeading)
- `src/data/**` (experience, projects, skills, stats)
- `src/styles.css` — replace current tokens with the portfolio's design tokens (colors, fonts, coral/indigo accents) so the look matches exactly
- `src/routes/index.tsx` — replace placeholder with the portfolio homepage
- `src/routes/__root.tsx` — port head/meta + fonts; keep current error/notFound/shell scaffolding
- `public/**` — any fonts, favicons, images
- Add any missing dependencies (e.g. `framer-motion` if not already installed)

Do **not** copy: `.git`, lockfiles, config files that would clobber Lovable's (`vite.config.ts`, `wrangler.jsonc`, `tsconfig.json`, `package.json` — merge deps only), `routeTree.gen.ts` (auto-generated).

## 2. Theme (dark/light)
- Add a small `ThemeProvider` (`src/components/theme-provider.tsx`) that toggles `.dark` on `<html>`, persists to `localStorage` (`theme` key), default `light`.
- Mount it in `__root.tsx` around `<Outlet />`.
- Add a `ThemeToggle` button (sun/moon icon from `lucide-react`) placed in a fixed top-right control cluster alongside the language switcher.
- Ensure all portfolio tokens in `styles.css` have proper `:root` (light) and `.dark` values so the existing design works in both modes.

## 3. Internationalization (EN/FR)
- Install `i18next` + `react-i18next`.
- Create `src/i18n/index.ts` initializing i18next with `en` (default) and `fr`, persisting selection to `localStorage` (`lang` key).
- Create translation files `src/i18n/locales/en.json` and `fr.json` with keys covering all UI strings in the 9 chapters (Hero, Story, Timeline, Projects, Numbers, Education, TechRadar, Languages, Contact) + nav/footer/buttons.
- Replace hardcoded strings in chapter components with `const { t } = useTranslation()` + `t('key')`.
- For data-driven content (`src/data/projects.ts`, `experience.ts`, etc.) that contains French text: convert each entry's text fields into `{ en, fr }` objects and resolve at render time based on current language.
- Add a `LanguageToggle` (EN | FR pill) in the same fixed top-right cluster as the theme toggle.
- Update `<html lang>` reactively when the language changes.

## 4. SEO
- Per-language `title` / `description` / `og:*` resolved from translations in the route `head()`.
- Keep the existing JSON-LD Person schema.

## Technical notes
- Stack stays: TanStack Start, React 19, Vite, Tailwind v4, shadcn, framer-motion.
- New deps: `i18next`, `react-i18next` (and `i18next-browser-languagedetector` only if we later want auto-detect — not for v1 since default is locked to English).
- No backend changes; no Lovable Cloud needed.
- File-based routing stays single-route (`/`) — language is a runtime toggle, not a route segment, to keep scroll/state intact.

## Deliverable
A working `/` page visually identical to the uploaded portfolio, with a top-right control showing `EN | FR` and a sun/moon toggle, both persisting across reloads.
