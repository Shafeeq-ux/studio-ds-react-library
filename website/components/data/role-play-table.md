---
title: RolePlayTable
description: Studio DS RolePlayTable — React + TypeScript documentation
---

# RolePlayTable

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **RolePlayTable**.

This page documents **RolePlayTable** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="RolePlayTable" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-data-roleplaytable--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/RolePlayTable/RolePlayTable.tsx" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { RolePlayTable } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <RolePlayTable header={…} footer={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `header` | `ReactNode` | — | — |
| `footer` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`RolePlayTable.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/RolePlayTable/RolePlayTable.tsx) |
| CSS Module | _No dedicated CSS module_ |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Data](/components/data)
- [Component status board](/components/status)
- [Storybook · RolePlayTable](/storybook/?path=/docs/components-data-roleplaytable--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
