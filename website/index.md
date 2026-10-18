---
layout: home
title: Welcome
hero:
  name: Studio DS
  text: Design system for product teams
  tagline: A living document — foundations, React + TypeScript components, and guidelines translated from Figma. Always in progress.
  actions:
    - theme: brand
      text: Get started
      link: /get-started/
    - theme: alt
      text: Open Storybook
      link: /storybook/
    - theme: alt
      text: View on GitHub
      link: https://github.com/Shafeeq-ux/studio-ds-react-library
features:
  - title: Component status
    details: Stable, beta, and draft inventory across Core, Forms, Navigation, Data, and domain shells.
    link: /components/status
    linkText: Status board
  - title: Foundations
    details: Color, typography, spacing, elevation, and iconography mapped from Studio · Semantic tokens.
    link: /foundations/
    linkText: Explore foundations
  - title: Engineering onboarding
    details: Install the package, apply Light/Dark themes, and use Storybook for API and playgrounds.
    link: /get-started/engineering
    linkText: Engineering path
  - title: Design onboarding
    details: Work from the Studio DS Figma file — variables first, then component sets.
    link: /get-started/design
    linkText: Design path
---

## We're glad you're here

Want to work with our design system and create a cohesive user experience?

**Studio DS** is the React + TypeScript design system for product UI. With the Studio design language as its foundation, it consists of:

- Working code (`studio-ds` package)
- Design tools and resources (Figma)
- Human interface guidelines (this site)
- An interactive playground (Storybook)

Flutter and other native SDKs are out of scope.

<ResourceLinks />

## Quick paths

<div class="sds-card-grid">
  <div class="sds-card">
    <h3>Foundations</h3>
    <p>Color, typography, elevation, spacing, icons, and the token hierarchy.</p>
  </div>
  <div class="sds-card">
    <h3>Components</h3>
    <p>Core controls through domain shells — each with GitHub, Figma, and Storybook links.</p>
  </div>
  <div class="sds-card">
    <h3>Resources</h3>
    <p>Figma libraries, Storybook, GitHub, and release notes.</p>
  </div>
</div>

## Lead Design Engineer loop

1. Govern variables and component sets in [Figma](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
2. Translate into `--sds-*` semantic tokens
3. Ship accessible React + TypeScript APIs
4. Document status on this site + Storybook Autodocs
5. Release via GitHub Pages (and npm when published)
