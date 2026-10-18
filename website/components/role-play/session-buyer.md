---
title: SessionBuyer
description: Studio DS SessionBuyer — React + TypeScript documentation
---

# SessionBuyer

<StatusPill status="draft" />

React + TypeScript implementation of Studio DS **SessionBuyer**.

This page documents **SessionBuyer** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="SessionBuyer" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-role-play-sessionbuyer--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SessionBuyer/SessionBuyer.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SessionBuyer/SessionBuyer.module.css" />

## Interactive preview

<StoryPreview id="components-role-play-sessionbuyer--default" title="SessionBuyer · live story" height="420px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { SessionBuyer } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <SessionBuyer name={…} role={…} initials={"SB"} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `ReactNode` | — | — |
| `role` | `ReactNode` | — | — |
| `initials` | `string` | `"SB"` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`SessionBuyer.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SessionBuyer/SessionBuyer.tsx) |
| CSS Module | [`SessionBuyer.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SessionBuyer/SessionBuyer.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Role play](/components/role-play)
- [Component status board](/components/status)
- [Storybook · SessionBuyer](/storybook/?path=/docs/components-role-play-sessionbuyer--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
