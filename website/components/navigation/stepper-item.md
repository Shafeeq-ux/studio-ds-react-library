---
title: StepperItem
description: Studio DS StepperItem — React + TypeScript documentation
---

# StepperItem

<StatusPill status="beta" />

Maps to Figma Studio/Stepper item State.

This page documents **StepperItem** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="StepperItem" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-navigation-stepperitem--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/StepperItem/StepperItem.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/StepperItem/StepperItem.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { StepperItem } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <StepperItem label={…} step={…} state={"upcoming"} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` | — | — |
| `step` | `ReactNode` | — | — |
| `state` | `StepperItemState` | `"upcoming"` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`StepperItem.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/StepperItem/StepperItem.tsx) |
| CSS Module | [`StepperItem.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/StepperItem/StepperItem.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Navigation](/components/navigation)
- [Component status board](/components/status)
- [Storybook · StepperItem](/storybook/?path=/docs/components-navigation-stepperitem--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
