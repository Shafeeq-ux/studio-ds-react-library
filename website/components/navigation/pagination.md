---
title: Pagination
description: Studio DS Pagination — React + TypeScript documentation
---

# Pagination

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **Pagination**.

This page documents **Pagination** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="Pagination" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-navigation-pagination--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Pagination/Pagination.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Pagination/Pagination.module.css" />

## Interactive preview

<StoryPreview id="components-navigation-pagination--default" title="Pagination · live story" height="360px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Pagination } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Pagination label={"Page 1 of 12"} onPrevious={…} onNext={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` | `"Page 1 of 12"` | — |
| `onPrevious` | `() => void` | — | — |
| `onNext` | `() => void` | — | — |
| `previousDisabled` | `boolean` | — | — |
| `nextDisabled` | `boolean` | — | — |
| `previousLabel` | `string` | `"Previous"` | — |
| `nextLabel` | `string` | `"Next"` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Pagination.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Pagination/Pagination.tsx) |
| CSS Module | [`Pagination.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Pagination/Pagination.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Navigation](/components/navigation)
- [Component status board](/components/status)
- [Storybook · Pagination](/storybook/?path=/docs/components-navigation-pagination--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
