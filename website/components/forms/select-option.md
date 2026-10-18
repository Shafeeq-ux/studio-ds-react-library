---
title: SelectOption
description: Studio DS SelectOption — React + TypeScript documentation
---

# SelectOption

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **SelectOption**.

This page documents **SelectOption** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="SelectOption" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-forms-selectoption--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SelectOption/SelectOption.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SelectOption/SelectOption.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { SelectOption } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <SelectOption />
    </div>
  );
}
```

## API

_Props are inherited from native HTML attributes or composed children. See TypeScript source for full typing._

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`SelectOption.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SelectOption/SelectOption.tsx) |
| CSS Module | [`SelectOption.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SelectOption/SelectOption.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Forms](/components/forms)
- [Component status board](/components/status)
- [Storybook · SelectOption](/storybook/?path=/docs/components-forms-selectoption--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
