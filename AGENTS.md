# WorldInu Project Guide

## Architecture

This is a single-page marketing experience built with TanStack Start, React 19, TypeScript, Vite, and the Netlify adapter. TanStack Router provides file-based routing. The current site is intentionally static and does not require server functions or persistent storage.

## Key directories

- `src/routes/`: route components. `index.tsx` contains the WorldInu landing page and `__root.tsx` owns document metadata.
- `src/styles.css`: global tokens, typography, responsive layout, visual effects, and motion.
- `public/`: static browser assets.
- `src/data/`: unused starter catalog data retained only for the scaffold's secondary example route.

## Conventions

- Use TypeScript and functional React components.
- Keep page-specific sections in the index route until a component is reused.
- Use the palette and typography tokens defined at the top of `styles.css`.
- Preserve accessible landmarks, labels, reduced-motion handling, and mobile breakpoints.
- Prefer inline SVG for brand illustration and Lucide for interface icons; do not add emoji as UI graphics.

## Design decisions

The design uses a warm editorial palette and print-inspired borders, stickers, and monospace labels to avoid generic crypto styling. Product capabilities are presented as in-development concepts, and the launch messaging avoids unsupported token claims or invented metrics.
