---
title: MenuItem
description: Studio DS MenuItem — React + TypeScript documentation
---

# MenuItem

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **MenuItem**.

This page documents **MenuItem** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="MenuItem" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-menuitem--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/MenuItem/MenuItem.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/MenuItem/MenuItem.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { MenuItem } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <MenuItem icon={…} />
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
| React + TypeScript | [`MenuItem.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/MenuItem/MenuItem.tsx) |
| CSS Module | [`MenuItem.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/MenuItem/MenuItem.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · MenuItem](/storybook/?path=/docs/components-core-menuitem--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
