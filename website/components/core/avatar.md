---
title: Avatar
description: Studio DS Avatar — React + TypeScript documentation
---

# Avatar

<StatusPill status="stable" />

Maps to Figma Studio/Avatar Size.

This page documents **Avatar** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="Avatar" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-avatar--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Avatar/Avatar.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Avatar/Avatar.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Avatar } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Avatar initials="…" size={32} alt="…" />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `initials` | `string` | — | Two-letter initials shown when no image is provided. |
| `size` | `AvatarSize` | `32` | — |
| `alt` | `string` | — | — |
| `src` | `string` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Avatar.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Avatar/Avatar.tsx) |
| CSS Module | [`Avatar.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Avatar/Avatar.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · Avatar](/storybook/?path=/docs/components-core-avatar--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
