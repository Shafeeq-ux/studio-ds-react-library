---
title: Text
description: Studio DS Text — React + TypeScript documentation
---

# Text

<StatusPill status="stable" />

React + TypeScript implementation of Studio DS **Text**.

This page documents **Text** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="Text" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-text--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Text/Text.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Text/Text.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Text } from "studio-ds";

<Text variant="heading">Library</Text>
<Text tone="secondary">Supporting copy</Text>
```

## API

_Props are inherited from native HTML attributes or composed children. See TypeScript source for full typing._

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Text.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Text/Text.tsx) |
| CSS Module | [`Text.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Text/Text.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · Text](/storybook/?path=/docs/components-core-text--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
