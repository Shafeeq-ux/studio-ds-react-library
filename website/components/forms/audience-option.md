---
title: AudienceOption
description: Studio DS AudienceOption — React + TypeScript documentation
---

# AudienceOption

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **AudienceOption**.

This page documents **AudienceOption** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="AudienceOption" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-forms-audienceoption--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AudienceOption/AudienceOption.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AudienceOption/AudienceOption.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { AudienceOption } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <AudienceOption selected={false} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `selected` | `boolean` | `false` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`AudienceOption.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AudienceOption/AudienceOption.tsx) |
| CSS Module | [`AudienceOption.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AudienceOption/AudienceOption.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Forms](/components/forms)
- [Component status board](/components/status)
- [Storybook · AudienceOption](/storybook/?path=/docs/components-forms-audienceoption--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
