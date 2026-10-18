---
title: LibraryTabs
description: Studio DS LibraryTabs — React + TypeScript documentation
---

# LibraryTabs

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **LibraryTabs**.

This page documents **LibraryTabs** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="LibraryTabs" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-navigation-librarytabs--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/LibraryTabs/LibraryTabs.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/LibraryTabs/LibraryTabs.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { LibraryTabs } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <LibraryTabs items={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `LibraryTabItem[]` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`LibraryTabs.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/LibraryTabs/LibraryTabs.tsx) |
| CSS Module | [`LibraryTabs.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/LibraryTabs/LibraryTabs.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Navigation](/components/navigation)
- [Component status board](/components/status)
- [Storybook · LibraryTabs](/storybook/?path=/docs/components-navigation-librarytabs--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
