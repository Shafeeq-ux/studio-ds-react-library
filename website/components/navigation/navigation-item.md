---
title: NavigationItem
description: Studio DS NavigationItem — React + TypeScript documentation
---

# NavigationItem

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **NavigationItem**.

This page documents **NavigationItem** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="NavigationItem" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-navigation-navigationitem--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/NavigationItem/NavigationItem.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/NavigationItem/NavigationItem.module.css" />

## Interactive preview

<StoryPreview id="components-navigation-navigationitem--default" title="NavigationItem · live story" height="360px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { NavigationItem } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <NavigationItem />
    </div>
  );
}
```

## API

_Props are inherited from native HTML attributes or composed children. See TypeScript source for full typing._

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`NavigationItem.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/NavigationItem/NavigationItem.tsx) |
| CSS Module | [`NavigationItem.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/NavigationItem/NavigationItem.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Navigation](/components/navigation)
- [Component status board](/components/status)
- [Storybook · NavigationItem](/storybook/?path=/docs/components-navigation-navigationitem--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
