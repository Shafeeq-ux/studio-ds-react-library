---
title: Alert
description: Studio DS Alert — React + TypeScript documentation
---

# Alert

<StatusPill status="stable" />

Maps to Figma Studio/Alert Tone.

This page documents **Alert** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="Alert" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-alert--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Alert/Alert.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Alert/Alert.module.css" />

## Interactive preview

<StoryPreview id="components-core-alert--ai" title="Alert · live story" height="280px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { Alert } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Alert title={…} description={…} tone={"ai"} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | — | — |
| `description` | `ReactNode` | — | — |
| `tone` | `AlertTone` | `"ai"` | — |
| `icon` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`Alert.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Alert/Alert.tsx) |
| CSS Module | [`Alert.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/Alert/Alert.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · Alert](/storybook/?path=/docs/components-core-alert--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
