---
title: Radio
description: Studio DS Radio — React + TypeScript documentation
---

# Radio

<StatusPill status="stable" />

Maps to Figma Studio/Radio option Layout.

This page documents **Radio** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="Radio" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-forms-radio--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Radio/Radio.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Radio/Radio.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Radio } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Radio label={…} layout={"wide"} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` | — | — |
| `layout` | `RadioLayout` | `"wide"` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Radio.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Radio/Radio.tsx) |
| CSS Module | [`Radio.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Radio/Radio.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Forms](/components/forms)
- [Component status board](/components/status)
- [Storybook · Radio](/storybook/?path=/docs/components-forms-radio--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
