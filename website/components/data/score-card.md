---
title: ScoreCard
description: Studio DS ScoreCard — React + TypeScript documentation
---

# ScoreCard

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **ScoreCard**.

This page documents **ScoreCard** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="ScoreCard" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-data-scorecard--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ScoreCard/ScoreCard.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ScoreCard/ScoreCard.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { ScoreCard } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <ScoreCard eyebrow={"Overall"} score={"86"} scoreLabel={"out of 100"} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `eyebrow` | `ReactNode` | `"Overall"` | — |
| `score` | `ReactNode` | `"86"` | — |
| `scoreLabel` | `ReactNode` | `"out of 100"` | — |
| `summary` | `ReactNode` | `"Strong performance"` | — |
| `detail` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`ScoreCard.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ScoreCard/ScoreCard.tsx) |
| CSS Module | [`ScoreCard.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ScoreCard/ScoreCard.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Data](/components/data)
- [Component status board](/components/status)
- [Storybook · ScoreCard](/storybook/?path=/docs/components-data-scorecard--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
