---
title: Tooltip
description: Studio DS Tooltip — React + TypeScript documentation
---

# Tooltip

<StatusPill status="beta" />

Maps to Figma Studio/Contextual tooltip Placement.

This page documents **Tooltip** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="Tooltip" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-tooltip--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Tooltip/Tooltip.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Tooltip/Tooltip.module.css" />

## Interactive preview

<StoryPreview id="components-core-tooltip--above" title="Tooltip · live story" height="280px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Tooltip } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Tooltip title={…} body={…} placement={"above"} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | — | — |
| `body` | `ReactNode` | — | — |
| `placement` | `TooltipPlacement` | `"above"` | — |
| `defaultOpen` | `boolean` | `false` | — |
| `open` | `boolean` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Tooltip.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Tooltip/Tooltip.tsx) |
| CSS Module | [`Tooltip.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Tooltip/Tooltip.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · Tooltip](/storybook/?path=/docs/components-core-tooltip--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
