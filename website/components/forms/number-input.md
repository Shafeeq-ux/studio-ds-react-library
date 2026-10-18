---
title: NumberInput
description: Studio DS NumberInput — React + TypeScript documentation
---

# NumberInput

<StatusPill status="stable" />

React + TypeScript implementation of Studio DS **NumberInput**.

This page documents **NumberInput** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="NumberInput" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-forms-numberinput--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/NumberInput/NumberInput.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/NumberInput/NumberInput.module.css" />

## Interactive preview

<StoryPreview id="components-forms-numberinput--default" title="NumberInput · live story" height="280px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { NumberInput } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <NumberInput label={…} hideLabel={true} onValueChange={0} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` | — | — |
| `hideLabel` | `boolean` | `true` | — |
| `onValueChange` | `(value: number \| null) => void` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`NumberInput.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/NumberInput/NumberInput.tsx) |
| CSS Module | [`NumberInput.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/NumberInput/NumberInput.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Forms](/components/forms)
- [Component status board](/components/status)
- [Storybook · NumberInput](/storybook/?path=/docs/components-forms-numberinput--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
