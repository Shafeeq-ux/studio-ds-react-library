---
title: SectionBuyerPersona
description: Studio DS SectionBuyerPersona — React + TypeScript documentation
---

# SectionBuyerPersona

<StatusPill status="draft" /> · Presentational shell

React + TypeScript implementation of Studio DS **SectionBuyerPersona**.

This page documents **SectionBuyerPersona** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="SectionBuyerPersona" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-sections-sectionbuyerpersona--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionBuyerPersona/SectionBuyerPersona.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionBuyerPersona/SectionBuyerPersona.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { SectionBuyerPersona } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <SectionBuyerPersona title={"Buyer persona"} description={…} showHeader={true} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Buyer persona"` | — |
| `description` | `ReactNode` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `actions` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`SectionBuyerPersona.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionBuyerPersona/SectionBuyerPersona.tsx) |
| CSS Module | [`SectionBuyerPersona.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionBuyerPersona/SectionBuyerPersona.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Sections](/components/sections)
- [Component status board](/components/status)
- [Storybook · SectionBuyerPersona](/storybook/?path=/docs/components-sections-sectionbuyerpersona--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
