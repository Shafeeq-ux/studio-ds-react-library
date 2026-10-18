---
title: StickyAuthoringActions
description: Studio DS StickyAuthoringActions — React + TypeScript documentation
---

# StickyAuthoringActions

<StatusPill status="draft" />

React + TypeScript implementation of Studio DS **StickyAuthoringActions**.

This page documents **StickyAuthoringActions** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="StickyAuthoringActions" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-navigation-stickyauthoringactions--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/StickyAuthoringActions/StickyAuthoringActions.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/StickyAuthoringActions/StickyAuthoringActions.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { StickyAuthoringActions } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <StickyAuthoringActions />
    </div>
  );
}
```

## API

_Props are inherited from native HTML attributes or composed children. See TypeScript source for full typing._

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`StickyAuthoringActions.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/StickyAuthoringActions/StickyAuthoringActions.tsx) |
| CSS Module | [`StickyAuthoringActions.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/StickyAuthoringActions/StickyAuthoringActions.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Navigation](/components/navigation)
- [Component status board](/components/status)
- [Storybook · StickyAuthoringActions](/storybook/?path=/docs/components-navigation-stickyauthoringactions--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
