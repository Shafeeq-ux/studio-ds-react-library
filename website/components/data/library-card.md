---
title: LibraryCard
description: Studio DS LibraryCard — React + TypeScript documentation
---

# LibraryCard

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **LibraryCard**.

This page documents **LibraryCard** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="LibraryCard" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-data-librarycard--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/LibraryCard/LibraryCard.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/LibraryCard/LibraryCard.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { LibraryCard } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <LibraryCard title={…} metadata={…} buyer={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | — | — |
| `metadata` | `ReactNode` | — | — |
| `buyer` | `ReactNode` | — | — |
| `completion` | `ReactNode` | — | — |
| `score` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`LibraryCard.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/LibraryCard/LibraryCard.tsx) |
| CSS Module | [`LibraryCard.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/LibraryCard/LibraryCard.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Data](/components/data)
- [Component status board](/components/status)
- [Storybook · LibraryCard](/storybook/?path=/docs/components-data-librarycard--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
