# ClaritySync Website — Repo Overview

- **Framework**: Next.js 15.5.3 (App Router)
- **Language**: TypeScript
- **UI**: Tailwind CSS v4 via `@tailwindcss/postcss`
- **Runtime**: React 19.1

## Scripts
- **dev**: `next dev`
- **build**: `next build`
- **start**: `next start`
- **lint**: `eslint`

## Structure
- **src/app**: App Router pages (`layout.tsx`, `page.tsx`, `globals.css`)
- **public**: Static assets (e.g., `finished-logo.png.png`)

## Notable Items / Known Issues
- **Image mismatch**: `src/app/page.tsx` references `/finished-logo.png`, but actual file is `public/finished-logo.png.png`. Rename file or update reference.
- **Node version**: Ensure Node.js 18.18+ or 20+ for Next 15/React 19.

## Run Locally
1. `npm install`
2. `npm run dev`
3. Visit http://localhost:3000

## Build & Start
1. `npm run build`
2. `npm start`

## Tailwind
- Config via `postcss.config.mjs` with `@tailwindcss/postcss`
- Global styles in `src/app/globals.css`

## Notes
- `next.config.ts` currently has default empty config.