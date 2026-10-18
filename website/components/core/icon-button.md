---
title: IconButton
description: Studio DS IconButton — React + TypeScript documentation
---

# IconButton

<StatusPill status="stable" />

Maps to Figma Studio/Icon button Appearance.

This page documents **IconButton** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="IconButton" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-iconbutton--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/IconButton/IconButton.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/IconButton/IconButton.module.css" />

## Interactive preview

<StoryPreview id="components-core-iconbutton--surface" title="IconButton · live story" height="280px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { IconButton } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <IconButton appearance={"surface"} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `appearance` | `IconButtonAppearance` | `"surface"` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`IconButton.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/IconButton/IconButton.tsx) |
| CSS Module | [`IconButton.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/IconButton/IconButton.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · IconButton](/storybook/?path=/docs/components-core-iconbutton--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
