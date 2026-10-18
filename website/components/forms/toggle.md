---
title: Toggle
description: Studio DS Toggle — React + TypeScript documentation
---

# Toggle

<StatusPill status="stable" />

Maps to Figma Studio/Toggle — labeled row with Switch.

This page documents **Toggle** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="Toggle" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-forms-toggle--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Toggle/Toggle.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Toggle/Toggle.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Toggle } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Toggle label={…} description={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` | — | — |
| `description` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Toggle.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Toggle/Toggle.tsx) |
| CSS Module | [`Toggle.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Toggle/Toggle.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Forms](/components/forms)
- [Component status board](/components/status)
- [Storybook · Toggle](/storybook/?path=/docs/components-forms-toggle--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
