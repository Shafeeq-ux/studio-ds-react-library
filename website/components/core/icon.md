---
title: Icon
description: Studio DS Icon — React + TypeScript documentation
---

# Icon

<StatusPill status="stable" />

Maps to Figma Studio/Icon Size.

This page documents **Icon** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="Icon" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-icon--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Icon/Icon.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Icon/Icon.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Icon } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Icon glyph={…} size={18} title="…" />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `glyph` | `IconGlyph` | — | — |
| `size` | `IconSize` | `18` | — |
| `title` | `string` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Icon.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Icon/Icon.tsx) |
| CSS Module | [`Icon.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Icon/Icon.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · Icon](/storybook/?path=/docs/components-core-icon--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
