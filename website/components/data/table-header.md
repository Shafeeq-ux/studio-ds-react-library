---
title: TableHeader
description: Studio DS TableHeader — React + TypeScript documentation
---

# TableHeader

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **TableHeader**.

This page documents **TableHeader** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="TableHeader" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-data-tableheader--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/TableHeader/TableHeader.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/TableHeader/TableHeader.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { TableHeader } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <TableHeader columns="…" />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `columns` | `string` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`TableHeader.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/TableHeader/TableHeader.tsx) |
| CSS Module | [`TableHeader.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/TableHeader/TableHeader.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Data](/components/data)
- [Component status board](/components/status)
- [Storybook · TableHeader](/storybook/?path=/docs/components-data-tableheader--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
