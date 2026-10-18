---
title: Tabs
description: Studio DS Tabs — React + TypeScript documentation
---

# Tabs

<StatusPill status="stable" />

React + TypeScript implementation of Studio DS **Tabs**.

This page documents **Tabs** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="Tabs" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-navigation-tabs--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Tabs/Tabs.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Tabs/Tabs.module.css" />

## Interactive preview

<StoryPreview id="components-navigation-tabs--library" title="Tabs · live story" height="360px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Tabs } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Tabs value="…" defaultValue={""} onValueChange="…" />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | — | — |
| `defaultValue` | `string` | `""` | — |
| `onValueChange` | `(value: string) => void` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Tabs.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Tabs/Tabs.tsx) |
| CSS Module | [`Tabs.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Tabs/Tabs.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Navigation](/components/navigation)
- [Component status board](/components/status)
- [Storybook · Tabs](/storybook/?path=/docs/components-navigation-tabs--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
