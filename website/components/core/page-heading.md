---
title: PageHeading
description: Studio DS PageHeading — React + TypeScript documentation
---

# PageHeading

<StatusPill status="stable" />

React + TypeScript implementation of Studio DS **PageHeading**.

This page documents **PageHeading** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="PageHeading" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-pageheading--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PageHeading/PageHeading.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PageHeading/PageHeading.module.css" />

## Interactive preview

<StoryPreview id="components-core-pageheading--default" title="PageHeading · live story" height="280px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { PageHeading } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <PageHeading title={…} description={…} action={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | — | — |
| `description` | `ReactNode` | — | — |
| `action` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`PageHeading.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PageHeading/PageHeading.tsx) |
| CSS Module | [`PageHeading.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PageHeading/PageHeading.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · PageHeading](/storybook/?path=/docs/components-core-pageheading--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
