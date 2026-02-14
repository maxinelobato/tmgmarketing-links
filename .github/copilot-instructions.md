<!-- Auto-generated guidance for AI coding agents. Keep concise and actionable. -->

# Copilot / Agent Instructions — tmg-links-na-bio

Purpose

- Short, focused guidance so an AI agent can be productive immediately in this small Vite + React TypeScript app.

Big picture

- Single-page React app built with Vite and TypeScript. The UI is rendered from `App.tsx` and driven by an in-memory card dataset defined in `constants.tsx`.
- Primary component: `components/Card.tsx` (visual card with parallax image, CTA anchor). `App.tsx` maps `CARD_DATA` -> `Card` instances.
- Types are declared in `types.ts` (e.g., `BioLinkCard`) and should be used when adding or changing data.

Run / Build / Env

- Local dev: `npm install` then `npm run dev` (Vite). Build: `npm run build`. Preview: `npm run preview`.
- Environment: `vite.config.ts` reads `GEMINI_API_KEY` and exposes it as `process.env.GEMINI_API_KEY` and `process.env.API_KEY`. Set this in a local `.env.local` before running if needed.

Project conventions & patterns

- Data-driven UI: add/remove link cards in `constants.tsx`. Each card uses fields: `id`, `title`, `subtitle?`, `imageUrl`, `ctaText`, `glowClass`, `link`.
- File-level structure: imports often rely on the `@` alias (configured in `vite.config.ts` and `tsconfig.json`) which maps to the project root.
- Styling: components use utility CSS classes (Tailwind-like). Before adding new utility classes, ensure Tailwind (or the chosen utility CSS setup) exists in the project tooling.
- Images: static local images live under `public/images` (logo referenced at `/images/tmglogo.png`); many cards use external Unsplash URLs.

Integration & external dependencies

- External APIs used by the project:
  - WhatsApp deep-links in `constants.tsx` (`link` values) — these are direct anchors to the WhatsApp API.
  - `GEMINI_API_KEY` environment variable is referenced in `vite.config.ts` (used by the app environment).
- NPM dependencies: React 19 and Vite (see `package.json`). No tests configured.

Data flow & responsibilities

- `constants.tsx` (source of truth for cards) -> `App.tsx` maps `CARD_DATA` -> `Card` -> renders anchor linking to `card.link`.
- `types.ts` defines `BioLinkCard` used across `constants.tsx` and `Card.tsx`.

Examples / quick edits

- Add a card: edit `constants.tsx` — add an object matching `BioLinkCard`. Example object shape:

```ts
{
  id: 'new',
  title: 'TITLE',
  subtitle: 'SUB',
  imageUrl: 'https://.../photo.jpg',
  ctaText: 'SAIBA MAIS',
  glowClass: 'glow-blue',
  link: 'https://api.whatsapp.com/send/?phone=55...'
}
```

- Use the root alias: `import X from '@/components/Card'` resolves to project root.

What to watch for (discoverable cautions)

- Utility classes in components strongly indicate Tailwind; if adding new classes or breakpoints, confirm Tailwind is configured and the build processes them.
- `vite.config.ts` defines `process.env.GEMINI_API_KEY` at build time — changing the name or access pattern requires updating `vite.config.ts`.
- `index.tsx` mounts into `#root` — ensure `index.html` contains that element when changing mount logic.

Where to look for examples

- Main app shell and rendering: `App.tsx`
- Card implementation and interaction: `components/Card.tsx`
- Dataset to edit links: `constants.tsx`
- Types: `types.ts`
- Build and env: `package.json`, `vite.config.ts`

If you need to make non-trivial changes

- Preserve types in `types.ts` and update usages. Run `npm run dev` to validate rendering and console errors.

When done

- After changes, ask for a quick manual review of visuals (logo, images, CTA links) because many features are visual and integration-focused.

-- End
