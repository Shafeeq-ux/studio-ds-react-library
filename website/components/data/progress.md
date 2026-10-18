---
title: Progress
description: Studio DS Progress — React + TypeScript documentation
---

# Progress

<StatusPill status="stable" />

React + TypeScript implementation of Studio DS **Progress**.

This page documents **Progress** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="Progress" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-data-progress--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Progress/Progress.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Progress/Progress.module.css" />

## Interactive preview

<StoryPreview id="components-data-progress--determinate" title="Progress · live story" height="360px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Progress } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Progress value={0} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | — | 0–100 when determinate. Omit for indeterminate. |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Progress.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Progress/Progress.tsx) |
| CSS Module | [`Progress.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Progress/Progress.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Data](/components/data)
- [Component status board](/components/status)
- [Storybook · Progress](/storybook/?path=/docs/components-data-progress--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
