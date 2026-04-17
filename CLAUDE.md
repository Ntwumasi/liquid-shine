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

No test framework is configured.

## Architecture

- **Framework**: Next.js 16 with App Router (`src/app/` directory)
- **Styling**: Tailwind CSS 4 via `@tailwindcss/postcss` plugin; theme variables in `src/app/globals.css`
- **TypeScript**: Strict mode, path alias `@/*` → `./src/*`

### Layout & Routing

Root layout (`src/app/layout.tsx`) wraps all pages with Header, Footer, FloatingCallButton, and ScrollAnimations. Every page is a separate directory under `src/app/` (not dynamic routes) — e.g., `src/app/ceramic-coating/page.tsx`, `src/app/gallery/page.tsx`.

Routes: `/`, `/ceramic-coating`, `/auto-detailing`, `/boat-detailing`, `/rv-detailing`, `/maintenance`, `/packages`, `/about-us`, `/gallery`, `/contact`, `/products`, `/blog`.

### Key Components

- **Header.tsx** — Client component. Fixed nav with desktop dropdown ("Other Services") and full-screen mobile menu. Condenses on scroll (20px threshold). Active route highlighting via `usePathname()`.
- **Footer.tsx** — Server component. CTA banner, 4-column grid, service area tags.
- **FloatingCallButton.tsx** — Client component. FAB appears after 300px scroll with expandable Call/Text options.
- **ScrollAnimations.tsx** — Client component. IntersectionObserver adds `.in-view` class to elements with `.scroll-animate`, `.scroll-animate-left`, `.scroll-animate-right`, `.scroll-animate-scale`.

### Page Patterns

Most pages are `"use client"` components that set up their own IntersectionObserver for scroll animations. The home page (`src/app/page.tsx`, ~777 lines) is the most complex — hero slider (5 slides, 6s auto-rotate), video modal with keyboard nav (Escape/Arrow keys), testimonials carousel, and multiple animated sections.

Service pages follow a consistent structure: hero → benefits grid → packages/comparison → process steps → service areas → CTA.

### Design System

Colors are defined as CSS custom properties in `globals.css` under `@theme`:
- **Primary/Accent**: `#0080FF` (bright blue), dark variant `#0066cc`
- **Backgrounds**: `#0a0a0a` (base), `#111111` (cards), `#1a1a1a` (elevated)
- **Chrome/metallic**: `#c0c0c0`, `#e8e8e8`

Custom CSS classes to know (defined in `globals.css`):
- `.container-custom` — max-width 1280px with responsive padding
- `.btn-primary`, `.btn-accent`, `.btn-chrome` — gradient buttons with 3D hover effects
- `.glass`, `.glass-dark` — glassmorphism with backdrop blur
- `.gradient-text` — animated shimmer text
- `.scroll-animate*` — scroll-triggered fade-in/translate (used with ScrollAnimations component)
- Animation stagger: `.delay-100` through `.delay-800`, `.stagger-1` through `.stagger-6`

Dark theme is the default — all pages use dark backgrounds with white text. Reduced-motion and print media queries are in place.

### Static Assets

Images in `/public/images/`, videos (`.MOV`) in `/public/videos/`. Use Next.js `<Image>` component with priority loading for above-fold images.

## Important Warning

@AGENTS.md
