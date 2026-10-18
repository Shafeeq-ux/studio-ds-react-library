---
title: TopNavigation
description: Studio DS TopNavigation — React + TypeScript documentation
---

# TopNavigation

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **TopNavigation**.

This page documents **TopNavigation** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="TopNavigation" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-navigation-topnavigation--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/TopNavigation/TopNavigation.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/TopNavigation/TopNavigation.module.css" />

## Interactive preview

<StoryPreview id="components-navigation-topnavigation--default" title="TopNavigation · live story" height="360px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { TopNavigation } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <TopNavigation title={…} start={…} end={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | — | — |
| `start` | `ReactNode` | — | — |
| `end` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`TopNavigation.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/TopNavigation/TopNavigation.tsx) |
| CSS Module | [`TopNavigation.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/TopNavigation/TopNavigation.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Navigation](/components/navigation)
- [Component status board](/components/status)
- [Storybook · TopNavigation](/storybook/?path=/docs/components-navigation-topnavigation--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
