---
title: Input
description: Studio DS Input — React + TypeScript documentation
---

# Input

<StatusPill status="stable" />

Maps to Figma Studio/Input State.

This page documents **Input** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="Input" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-forms-input--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Input/Input.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Input/Input.module.css" />

## Interactive preview

<StoryPreview id="components-forms-input--default" title="Input · live story" height="280px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Input } from "studio-ds";
import "studio-ds/tokens.css";

<Input label="Role play name" placeholder="Enter a name" />
<Input label="Email" errorMessage="Required" />
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` | — | — |
| `helperText` | `ReactNode` | — | — |
| `errorMessage` | `ReactNode` | — | — |
| `state` | `InputState` | `"default"` | Visual error state (also set when `errorMessage` is provided). |
| `hideLabel` | `boolean` | `false` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Input.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Input/Input.tsx) |
| CSS Module | [`Input.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Input/Input.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Forms](/components/forms)
- [Component status board](/components/status)
- [Storybook · Input](/storybook/?path=/docs/components-forms-input--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
