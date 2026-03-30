# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Liquid Shine Elite Mobile Detailing - a business website for a mobile detailing service in Florida serving Manatee and Sarasota Counties. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Development Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **Framework**: Next.js 16 with App Router (uses `src/app/` directory)
- **Styling**: Tailwind CSS 4 with CSS variables defined in `src/app/globals.css`
- **TypeScript**: Strict mode enabled

### File Structure

```
src/
├── app/           # Next.js App Router pages
│   ├── layout.tsx # Root layout with Header/Footer
│   ├── page.tsx   # Home page (client component with sliders)
│   └── [service]/page.tsx  # Service pages (ceramic-coating, auto-detailing, etc.)
└── components/    # Shared components
    ├── Header.tsx # Navigation with mobile menu
    └── Footer.tsx
```

### Key Conventions

- Path alias: `@/*` maps to `./src/*`
- Brand color: `#1a56db` (blue) used throughout as primary color
- Dark theme base: `#0f172a` background with white text
- Custom utility class: `.container-custom` for consistent max-width containers

## Important Warning

@AGENTS.md
