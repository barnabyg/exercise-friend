# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for "AI Habit Companion" — a conceptual AI-powered habit-building app. Created by Munish Malik and Barnaby Golden. No build tools, no dependencies, no framework.

## Development

Open `index.html` directly in a browser — no server or build step required. For local development with live reload, any static file server works:

```bash
npx serve .
# or
python -m http.server 8080
```

## Architecture

Three files comprise the entire site:

- **`index.html`** — Single-page app with 10 narrative sections (Hero → Problem → Susan persona → Solution → How It Works → Differentiation → Companions → Technology → Creators → Connect)
- **`styles.css`** — Mobile-first responsive CSS; uses CSS custom properties and `animate-in` class for scroll-triggered reveals
- **`script.js`** — Vanilla JS with 6 features: avatar carousel (2s rotation), scroll progress bar, nav scroll state, back-to-top button, IntersectionObserver animations, and share modal (LinkedIn/X)

## Key Design Decisions

- **No gamification**: Messaging explicitly avoids streaks/points — this is intentional brand positioning
- **3 AI companions**: Cheerleader Cat, Focused Fox, Gentle Bunny — referenced consistently across sections
- **Color palette**: Primary `#FF6B6B` (coral), text `#2C3E50`, backgrounds alternate between `#FAFAFA` and `#FFF8F0`
- **Typography**: Inter (weights 400–800) + Merriweather italic for emphasis, loaded from Google Fonts
- **Accessibility target**: WCAG 2.1 AA — maintain semantic HTML and ARIA labels on interactive elements

## Product Requirements

`PRD-Marketing-Website.md` contains the full design specification including section-by-section content requirements, copy tone guidelines, and success metrics. Consult it when making content or structural changes.
