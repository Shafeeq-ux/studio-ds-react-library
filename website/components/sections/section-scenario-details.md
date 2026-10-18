---
title: SectionScenarioDetails
description: Studio DS SectionScenarioDetails — React + TypeScript documentation
---

# SectionScenarioDetails

<StatusPill status="draft" /> · Presentational shell

React + TypeScript implementation of Studio DS **SectionScenarioDetails**.

This page documents **SectionScenarioDetails** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="SectionScenarioDetails" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-sections-sectionscenariodetails--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionScenarioDetails/SectionScenarioDetails.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionScenarioDetails/SectionScenarioDetails.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { SectionScenarioDetails } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <SectionScenarioDetails title={"Scenario details"} description={…} showHeader={true} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Scenario details"` | — |
| `description` | `ReactNode` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `actions` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`SectionScenarioDetails.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionScenarioDetails/SectionScenarioDetails.tsx) |
| CSS Module | [`SectionScenarioDetails.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionScenarioDetails/SectionScenarioDetails.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Sections](/components/sections)
- [Component status board](/components/status)
- [Storybook · SectionScenarioDetails](/storybook/?path=/docs/components-sections-sectionscenariodetails--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
