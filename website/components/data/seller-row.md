---
title: SellerRow
description: Studio DS SellerRow — React + TypeScript documentation
---

# SellerRow

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **SellerRow**.

This page documents **SellerRow** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="SellerRow" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-data-sellerrow--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SellerRow/SellerRow.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SellerRow/SellerRow.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { SellerRow } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <SellerRow name={…} avatar={…} score={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `ReactNode` | — | — |
| `avatar` | `ReactNode` | — | — |
| `score` | `ReactNode` | — | — |
| `attempts` | `ReactNode` | — | — |
| `trend` | `ReactNode` | — | — |
| `trendTone` | `"positive" \| "negative" \| "neutral"` | `"positive"` | — |
| `columns` | `string` | `"2fr 1fr 1fr 1fr"` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`SellerRow.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SellerRow/SellerRow.tsx) |
| CSS Module | [`SellerRow.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SellerRow/SellerRow.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Data](/components/data)
- [Component status board](/components/status)
- [Storybook · SellerRow](/storybook/?path=/docs/components-data-sellerrow--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
