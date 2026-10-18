---
title: Badge
description: Studio DS Badge — React + TypeScript documentation
---

# Badge

<StatusPill status="stable" />

Maps to Figma Studio/Badge Tone.

This page documents **Badge** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="Badge" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-badge--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Badge/Badge.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Badge/Badge.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Badge } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Badge tone={"neutral"} withDot={false} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `tone` | `BadgeTone` | `"neutral"` | — |
| `withDot` | `boolean` | `false` | When true, prepends a status dot (common in Figma presets). |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Badge.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Badge/Badge.tsx) |
| CSS Module | [`Badge.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Badge/Badge.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · Badge](/storybook/?path=/docs/components-core-badge--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
