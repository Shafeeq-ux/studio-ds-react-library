---
title: Search
description: Studio DS Search — React + TypeScript documentation
---

# Search

<StatusPill status="stable" />

React + TypeScript implementation of Studio DS **Search**.

This page documents **Search** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="Search" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-forms-search--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Search/Search.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Search/Search.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Search } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Search icon={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Search.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Search/Search.tsx) |
| CSS Module | [`Search.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Search/Search.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Forms](/components/forms)
- [Component status board](/components/status)
- [Storybook · Search](/storybook/?path=/docs/components-forms-search--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
