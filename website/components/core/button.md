---
title: Button
description: Studio DS Button — React + TypeScript documentation
---

# Button

<StatusPill status="stable" />

Maps to Figma Studio/Button Appearance.

This page documents **Button** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="Button" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-button--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Button/Button.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Button/Button.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Button, Icon } from "studio-ds";
import "studio-ds/tokens.css";

<Button variant="primary" size="md">Continue</Button>
<Button variant="secondary" icon={<Icon glyph="plus" />}>Create</Button>
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `ButtonVariant` | `"primary"` | — |
| `size` | `ButtonSize` | `"md"` | — |
| `layout` | `ButtonLayout` | `"label"` | — |
| `icon` | `ReactNode` | — | — |
| `iconPosition` | `"start" \| "end"` | `"start"` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Button.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Button/Button.tsx) |
| CSS Module | [`Button.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Button/Button.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · Button](/storybook/?path=/docs/components-core-button--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
