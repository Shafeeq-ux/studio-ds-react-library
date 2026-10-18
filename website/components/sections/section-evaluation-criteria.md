---
title: SectionEvaluationCriteria
description: Studio DS SectionEvaluationCriteria — React + TypeScript documentation
---

# SectionEvaluationCriteria

<StatusPill status="draft" /> · Presentational shell

React + TypeScript implementation of Studio DS **SectionEvaluationCriteria**.

This page documents **SectionEvaluationCriteria** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="SectionEvaluationCriteria" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-sections-sectionevaluationcriteria--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionEvaluationCriteria/SectionEvaluationCriteria.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionEvaluationCriteria/SectionEvaluationCriteria.module.css" />

## Interactive preview

<StoryPreview id="components-sections-sectionevaluationcriteria--default" title="SectionEvaluationCriteria · live story" height="420px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { SectionEvaluationCriteria } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <SectionEvaluationCriteria title={"Evaluation criteria"} description={…} showHeader={true} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Evaluation criteria"` | — |
| `description` | `ReactNode` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `actions` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`SectionEvaluationCriteria.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionEvaluationCriteria/SectionEvaluationCriteria.tsx) |
| CSS Module | [`SectionEvaluationCriteria.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionEvaluationCriteria/SectionEvaluationCriteria.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Sections](/components/sections)
- [Component status board](/components/status)
- [Storybook · SectionEvaluationCriteria](/storybook/?path=/docs/components-sections-sectionevaluationcriteria--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
