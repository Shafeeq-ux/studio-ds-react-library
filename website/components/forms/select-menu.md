---
title: SelectMenu
description: Studio DS SelectMenu — React + TypeScript documentation
---

# SelectMenu

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **SelectMenu**.

This page documents **SelectMenu** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="SelectMenu" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-forms-selectmenu--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SelectMenu/SelectMenu.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SelectMenu/SelectMenu.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { SelectMenu } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <SelectMenu label={…} options={…} value="…" />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` | — | — |
| `options` | `SelectMenuOption[]` | — | — |
| `value` | `string` | — | — |
| `defaultValue` | `string` | `""` | — |
| `onValueChange` | `(value: string) => void` | — | — |
| `placeholder` | `string` | `"Select…"` | — |
| `open` | `boolean` | — | — |
| `defaultOpen` | `boolean` | `false` | — |
| `onOpenChange` | `(open: boolean) => void` | — | — |
| `disabled` | `boolean` | — | — |
| `listState` | `"ready" \| "loading" \| "empty" \| "error"` | `"ready"` | Figma Select states beyond Default/Focus/Error |
| `emptyMessage` | `ReactNode` | `"No matches"` | — |
| `loadingMessage` | `ReactNode` | `"Loading…"` | — |
| `errorMessage` | `ReactNode` | `"Couldn’t load options. Retry."` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`SelectMenu.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SelectMenu/SelectMenu.tsx) |
| CSS Module | [`SelectMenu.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SelectMenu/SelectMenu.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Forms](/components/forms)
- [Component status board](/components/status)
- [Storybook · SelectMenu](/storybook/?path=/docs/components-forms-selectmenu--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
