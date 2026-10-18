---
title: Stack
description: Studio DS Stack — React + TypeScript documentation
---

# Stack

<StatusPill status="stable" />

React + TypeScript implementation of Studio DS **Stack**.

This page documents **Stack** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="Stack" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-stack--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Stack/Stack.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Stack/Stack.module.css" />

## Interactive preview

<StoryPreview id="components-core-stack--column" title="Stack · live story" height="280px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Stack, Text } from "studio-ds";

<Stack gap={16}>
  <Text variant="heading">Title</Text>
  <Text>Body</Text>
</Stack>
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `ElementType` | — | — |
| `direction` | `"row" \| "column"` | `"column"` | — |
| `gap` | `SpaceToken` | `16` | — |
| `align` | `"start" \| "center" \| "end" \| "stretch"` | `"stretch"` | — |
| `justify` | `"start" \| "center" \| "end" \| "between"` | `"start"` | — |
| `wrap` | `boolean` | `false` | — |
| `className` | `string` | — | — |
| `style` | `CSSProperties` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Stack.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Stack/Stack.tsx) |
| CSS Module | [`Stack.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Stack/Stack.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · Stack](/storybook/?path=/docs/components-core-stack--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
