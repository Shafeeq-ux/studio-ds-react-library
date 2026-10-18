---
title: BuyerIdentity
description: Studio DS BuyerIdentity — React + TypeScript documentation
---

# BuyerIdentity

<StatusPill status="draft" />

React + TypeScript implementation of Studio DS **BuyerIdentity**.

This page documents **BuyerIdentity** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="BuyerIdentity" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-role-play-buyeridentity--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/BuyerIdentity/BuyerIdentity.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/BuyerIdentity/BuyerIdentity.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { BuyerIdentity } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <BuyerIdentity name={…} role={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `ReactNode` | — | — |
| `role` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`BuyerIdentity.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/BuyerIdentity/BuyerIdentity.tsx) |
| CSS Module | [`BuyerIdentity.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/BuyerIdentity/BuyerIdentity.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Role play](/components/role-play)
- [Component status board](/components/status)
- [Storybook · BuyerIdentity](/storybook/?path=/docs/components-role-play-buyeridentity--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
