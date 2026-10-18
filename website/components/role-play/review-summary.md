---
title: ReviewSummary
description: Studio DS ReviewSummary — React + TypeScript documentation
---

# ReviewSummary

<StatusPill status="draft" />

React + TypeScript implementation of Studio DS **ReviewSummary**.

This page documents **ReviewSummary** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="ReviewSummary" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-role-play-reviewsummary--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ReviewSummary/ReviewSummary.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ReviewSummary/ReviewSummary.module.css" />

## Interactive preview

<StoryPreview id="components-role-play-reviewsummary--default" title="ReviewSummary · live story" height="420px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { ReviewSummary } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <ReviewSummary title={"Review Summary"} description={…} showHeader={true} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Review Summary"` | — |
| `description` | `ReactNode` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `actions` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`ReviewSummary.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ReviewSummary/ReviewSummary.tsx) |
| CSS Module | [`ReviewSummary.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ReviewSummary/ReviewSummary.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Role play](/components/role-play)
- [Component status board](/components/status)
- [Storybook · ReviewSummary](/storybook/?path=/docs/components-role-play-reviewsummary--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
