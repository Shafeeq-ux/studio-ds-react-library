---
title: Design path
---

# Design path

Work in Figma first. Studio DS code mirrors variables and component sets from the Studio DS file.

<ResourceLinks />

## Figma source

Primary file: [Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)

| Collection / library | Maps to |
| --- | --- |
| Studio · Semantic (Light/Dark) | `--sds-color-*` |
| Studio · Typography + Studio/Type/* | `--sds-text-*`, `Text` |
| Studio · Primitives | spacing, radius, icon, border, motion, target |
| Studio/Elevation/* | elevation tokens |
| Studio/* component sets | React components |

## How design and code stay aligned

1. Define or update variables / variants in Figma.
2. Map them to **semantic** tokens (not raw hex in components).
3. Implement or update the React API to match Figma variants.
4. Document status on the [status board](/components/status).
5. Ship via GitHub Pages (and npm when published).

## Not in Figma yet

| Item | Reason |
| --- | --- |
| Checkbox | No `Studio/Checkbox` set |
| Modal / Dialog | No `Studio/Dialog` set |
| Tag / Chip | Badge covers many chip cases |

## Requesting a component

Open a [GitHub issue](https://github.com/Shafeeq-ux/studio-ds-react-library/issues) with the Figma node link, intended variants/states, and whether it should be Core vs a domain shell.
