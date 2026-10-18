---
title: SectionAvailability
description: Studio DS SectionAvailability — React + TypeScript documentation
---

# SectionAvailability

<StatusPill status="draft" /> · Presentational shell

React + TypeScript implementation of Studio DS **SectionAvailability**.

This page documents **SectionAvailability** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="SectionAvailability" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-sections-sectionavailability--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionAvailability/SectionAvailability.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionAvailability/SectionAvailability.module.css" />

## Interactive preview

<StoryPreview id="components-sections-sectionavailability--default" title="SectionAvailability · live story" height="420px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { SectionAvailability } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <SectionAvailability title={"Availability"} description={…} showHeader={true} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Availability"` | — |
| `description` | `ReactNode` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `actions` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`SectionAvailability.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionAvailability/SectionAvailability.tsx) |
| CSS Module | [`SectionAvailability.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionAvailability/SectionAvailability.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Sections](/components/sections)
- [Component status board](/components/status)
- [Storybook · SectionAvailability](/storybook/?path=/docs/components-sections-sectionavailability--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
