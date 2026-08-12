## Biotech Nexus

A premium animated biotechnology company website built as a creative frontend engineering project. Biotech Nexus is a fictional company operating at the intersection of molecular biology, advanced imaging, and computational intelligence for precision therapeutics.

The site features sophisticated scroll-driven animations, interactive scientific visualizations, a data-driven component architecture, and an editorial design language inspired by premium biotech aesthetics.

## Tech Stack

- **React 19** — UI framework
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Utility-first styling with custom theme tokens
- **Framer Motion** — Animation, scroll triggers, and gesture interactions
- **Vite** — Build tooling
- **React Compiler** — Automatic render optimization via Babel plugin

## Getting Started

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
pnpm preview
```

## Project Structure

```
src/
  components/
    navigation/       — Sticky nav with scroll-reactive behavior + mobile menu
    hero/             — Hero section with interactive molecular SVG visual
    intro/            — Biological scale progression (Molecule → Patient)
    science/          — Science pillars with interactive panel switching
    platform/         — Pipeline stages (Observe → Discover) with animated charts
    capabilities/     — Expandable capability grid with orbital visuals
    research/         — Research program cards with metadata and mini-visualizations
    impact/           — Animated statistics with count-up effects
    visualization/    — Scientific data dashboard with waveforms and markers
    cta/              — Final call-to-action section
    footer/           — Site footer with navigation and contact
    ui/               — Reusable primitives (AnimatedText, FadeIn, CTAButton, etc.)
    loader/           — Initial loading sequence
    cursor/           — Custom cursor with hover-reactive states
  data/
    content.ts        — All section content as data arrays
  hooks/              — Custom hooks (scroll progress, mouse position, reduced motion)
  lib/                — Utility functions
public/
  images/             — Downloaded scientific imagery from Unsplash
  favicon.svg         — Custom molecular node favicon
```

## Design Approach

### Visual Direction

The design avoids the typical "blue healthcare" aesthetic in favor of a dark, scientific palette:

- **Near-black backgrounds** with subtle green undertones
- **Biological green (#2dd4a0)** as the primary accent
- **Soft cyan (#67e8f9)** as a secondary accent for data elements
- **Warm cream (#f5f2ed)** for typography
- **Translucent glass surfaces** with subtle borders

### Typography

- **Inter** — Primary sans-serif for UI and body text
- **Instrument Serif** — Editorial serif for section headings
- **JetBrains Mono** — Scientific metadata, labels, and data values

### Scientific Visual Language

All scientific visuals are built with SVG and DOM elements rather than stock photography. This includes:

- Interactive molecular particle systems in the hero
- Animated network graphs in science/platform sections
- Waveform visualizations with scanning lines
- Molecular marker dashboards
- Orbital diagrams in capabilities

### Layout Philosophy

Each section uses a distinct composition — asymmetric grids, alternating layouts, expanding panels, and editorial whitespace — to avoid repetitive card-based patterns.

## Animation Approach

### Framer Motion Usage

- **Text reveals**: Word-by-word and line-by-line entrance animations
- **Scroll-triggered entrances**: Elements animate as they enter the viewport using `whileInView`
- **Interactive molecular visual**: 60 particles with connecting lines respond to mouse position via parallax transforms
- **Animated statistics**: Numbers animate when scrolled into view
- **Pipeline visualizations**: Bar charts and signal paths animate on stage change
- **Scan line effects**: Progress-linked scan lines in the data visualization section
- **Micro-interactions**: Magnetic buttons, hover arrows, expanding panels, rotating elements

### Reduced Motion

All non-essential animations are disabled when `prefers-reduced-motion: reduce` is detected, via both CSS media queries and the `useReducedMotion` hook.

## Assets

Scientific imagery was sourced from [Unsplash](https://unsplash.com) under the Unsplash License:

- `microscopy-01.jpg` — Microscopy imagery
- `cells-01.jpg` — Cellular structures
- `dna-01.jpg` — DNA/molecular structures
- `lab-01.jpg` — Laboratory environment
- `microscope-01.jpg` — Microscopy equipment

All scientific visualizations (molecular particles, waveforms, network graphs) are generated programmatically using SVG and Framer Motion.

## Disclaimer

Biotech Nexus is a fictional company. All scientific claims, research programs, statistics, and metrics are invented for demonstration purposes and do not represent real scientific findings or a real organization.
