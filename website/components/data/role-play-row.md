---
title: RolePlayRow
description: Studio DS RolePlayRow — React + TypeScript documentation
---

# RolePlayRow

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **RolePlayRow**.

This page documents **RolePlayRow** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="RolePlayRow" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-data-roleplayrow--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/RolePlayRow/RolePlayRow.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/RolePlayRow/RolePlayRow.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { RolePlayRow } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <RolePlayRow title={…} metadata={…} buyer={…} />
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
| `difficulty` | `ReactNode` | — | — |
| `status` | `ReactNode` | — | — |
| `score` | `ReactNode` | — | — |
| `updated` | `ReactNode` | — | — |
| `action` | `ReactNode` | — | — |
| `columns` | `string` | `"2fr 1.2fr 1fr 1fr 0.8fr 1fr auto"` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`RolePlayRow.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/RolePlayRow/RolePlayRow.tsx) |
| CSS Module | [`RolePlayRow.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/RolePlayRow/RolePlayRow.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Data](/components/data)
- [Component status board](/components/status)
- [Storybook · RolePlayRow](/storybook/?path=/docs/components-data-roleplayrow--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
