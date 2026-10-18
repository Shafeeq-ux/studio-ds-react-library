---
title: Score
description: Studio DS Score — React + TypeScript documentation
---

# Score

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **Score**.

This page documents **Score** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="Score" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-data-score--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Score/Score.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Score/Score.module.css" />

## Interactive preview

<StoryPreview id="components-data-score--insufficient-evidence" title="Score · live story" height="360px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Score } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Score title={"Insufficient evidence"} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Insufficient evidence"` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Score.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Score/Score.tsx) |
| CSS Module | [`Score.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Score/Score.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Data](/components/data)
- [Component status board](/components/status)
- [Storybook · Score](/storybook/?path=/docs/components-data-score--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
