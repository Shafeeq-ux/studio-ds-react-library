---
title: Design tokens
---

# Design tokens

Tokens reflect real design decisions from Figma and are the only supported styling contract for Studio DS components.

<ResourceLinks />

## Types

| Type | Examples |
| --- | --- |
| Color | backgrounds, text, borders, status, AI |
| Typography | family, size, weight, line height |
| Numeric | spacing, sizing, radius, border width, motion |

## Hierarchy

| Level | Description | Also known as |
| --- | --- | --- |
| Raw values | Direct values in Figma or one-off CSS | — |
| Foundation / primitive | Global scales | Base, global |
| Theme / semantic | Meaningful roles (`text/primary`) | Alias tokens |
| Component | Rare mappings for a single control | — |

**Use semantic tokens in product and component code.** Primitives exist to build semantics.

## Naming

Semantic CSS variables follow `--sds-{category}-{role}`:

```css
color: var(--sds-color-text-primary);
background: var(--sds-color-surface-default);
box-shadow: var(--sds-elevation-popover);
```

## Source

- Figma: Studio · Semantic, Typography, Primitives, Elevation  
- Code: [`src/tokens`](https://github.com/Shafeeq-ux/studio-ds-react-library/tree/main/src/tokens)
