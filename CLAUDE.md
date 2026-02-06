# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**The Grad Club** — a luxury graduation trip booking platform targeting Italian university graduates. Single-page marketing site with a minimal luxury aesthetic inspired by lecollectionist.com.

- **Language:** Italian (all copy, metadata, lang="it")
- **Tone:** Aspirational but accessible, lifestyle/community — not commercial tourism language

## Commands

```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Production build (static export)
npm start          # Start production server
npm run lint       # ESLint
```

No test framework is configured.

## Tech Stack

- **Next.js 16.1.6** — App Router, static export (`output: "export"` in next.config.ts)
- **React 19** — Server Components by default, `"use client"` only for interactive components
- **Tailwind CSS v4** — configured via `@theme inline` block in `app/globals.css` (no tailwind.config file)
- **TypeScript 5** — strict mode
- **No external component/UI libraries** — everything is custom-built

## Architecture

### Directory Structure

All source code lives at the project root (no `src/` directory):
- `app/` — Next.js App Router (layout.tsx, page.tsx, globals.css)
- `components/` — All React components (flat, no subdirectories)
- `public/` — Static assets (favicon, hero.jpg)

### Path Alias

`@/*` maps to the project root (configured in tsconfig.json). Import as `@/components/Navbar`.

### Server vs Client Components

- **Server components** (default): Benefits, ValueProposition, TeamSection, TrendingDestinations, HowItWorks, Footer, Logo
- **Client components** (`"use client"`): Navbar (scroll detection), Hero (load animation), Newsletter (form state), ExperienceCarousel (scroll ref), AnimatedSection (IntersectionObserver), ReviewsSection

### Homepage Composition

`app/page.tsx` composes the single page in this order:
Hero → ValueProposition → TrendingDestinations → ExperienceCarousel → TeamSection → HowItWorks → ReviewsSection → Benefits → Newsletter → Footer

### Animation System

- `AnimatedSection` wrapper — uses IntersectionObserver (threshold 0.1) to add `.visible` class
- CSS classes in globals.css: `.fade-in-up` (opacity 0 → 1, translateY 20px → 0), `.stagger-1` through `.stagger-8`
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`, duration 0.9s

## Design System

**The codebase uses an updated luxury minimal aesthetic that supersedes the PRD.md color scheme.** PRD.md documents the original Evaneos-inspired design; the implemented design is deliberately different.

### Colors (defined as CSS custom properties in globals.css, mapped to Tailwind via `@theme inline`)

| Token | Value | Usage |
|---|---|---|
| `primary-dark` | #202020 | Primary dark elements |
| `charcoal` | #1A1A1A | Body text, footer bg |
| `medium-gray` | #757575 | Secondary text |
| `light-gray` | #AAAAAA | Tertiary text |
| `border-gray` | #E5E5E5 | Borders, dividers |
| `off-white` | #F7F7F7 | Alternating section backgrounds |
| `accent-gold` | #F9E778 | Rare accent only |

Use Tailwind classes: `text-charcoal`, `bg-off-white`, `border-border-gray`, etc.

### Typography

- **Body:** Helvetica Neue / system sans-serif (`font-sans`)
- **Display:** Chicle (`font-display`) — loaded in layout.tsx, applied via CSS variable, used for highlighted words
- Fluid sizing with `clamp()` via CSS custom properties (`--text-display`, `--text-h1`, etc.)

### Component Style Rules

- **No rounded corners** — use `rounded-none`
- **No box shadows** on cards
- **Buttons:** outlined, square, uppercase with letter-spacing
- **Hover:** `scale(1.02)` max, no translateY
- **Section spacing:** `.section-luxury` class (responsive: 7rem / 10rem / 14rem padding)
- **No saturated colors** except rare accent-gold

### Fonts

Chicle is loaded via `next/font/google` in `app/layout.tsx` and exposed as `--font-display` CSS variable. Used for highlighted/accent words only, not italic.

## Project Planning (MANDATORY)

**CRITICAL**: Before implementing any new feature or functionality, you MUST follow this workflow:

1. **Check Current Date/Time**: Always verify the current date before creating any planning document
2. **Create Project Document**: Create a planning document in `/docs/YYYY-MM-DD-nome-funzione.md`
   - Document naming format: `YYYY-MM-DD-nome-funzione.md` (e.g., `2025-12-29-user-authentication.md`)
   - Location: `/docs/` directory
3. **Document Content**: The document must describe:
   - What will be implemented
   - How it will be implemented
   - Technical approach and architecture decisions
   - Files that will be modified or created
   - Dependencies and requirements
4. **Wait for Approval**: After creating the document, STOP and wait for explicit user confirmation before proceeding with implementation
5. **Implement After Approval**: Only after receiving approval, proceed with the actual implementation
6. **Update Project Document After Completion**: After completing the implementation, you MUST update the project document with:
   - "Implementazione Completata" section with completion date and status
   - List of all files created with descriptions
   - List of all files modified with changes made
   - Features implemented with technical details
   - Test results and verification status
   - Metrics (components created, lines of code, performance)
   - Technical notes and considerations
   - Possible future improvements

This ensures proper planning, alignment, and complete documentation of all development work.

## Key Implementation Details

- **Static export:** No API routes, no server-side features. All images use `loading="lazy"` and `unoptimized: true` in next config.
- **Navbar:** Fixed position, transparent initially → frosted white (`bg-white/95 backdrop-blur-xl`) after scroll > 80px
- **Carousel:** Horizontal scroll with `snap-x snap-mandatory`, hidden scrollbar via `.scrollbar-hide`, responsive widths via `calc()`
- **No environment variables** needed for build
