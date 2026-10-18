---
title: Dropdown
description: Studio DS Dropdown — React + TypeScript documentation
---

# Dropdown

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **Dropdown**.

This page documents **Dropdown** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="Dropdown" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-dropdown--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Dropdown/Dropdown.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Dropdown/Dropdown.module.css" />

## Interactive preview

<StoryPreview id="components-core-dropdown--open" title="Dropdown · live story" height="280px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Dropdown } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Dropdown label={"Open menu"} defaultOpen={false} open />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `"Open menu"` | — |
| `defaultOpen` | `boolean` | `false` | — |
| `open` | `boolean` | — | — |
| `onOpenChange` | `(open: boolean) => void` | — | — |
| `triggerProps` | `ButtonHTMLAttributes<HTMLButtonElement>` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Dropdown.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Dropdown/Dropdown.tsx) |
| CSS Module | [`Dropdown.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Dropdown/Dropdown.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · Dropdown](/storybook/?path=/docs/components-core-dropdown--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
