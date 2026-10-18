---
title: EvaluationSuggestions
description: Studio DS EvaluationSuggestions — React + TypeScript documentation
---

# EvaluationSuggestions

<StatusPill status="draft" /> · Presentational shell

React + TypeScript implementation of Studio DS **EvaluationSuggestions**.

This page documents **EvaluationSuggestions** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="EvaluationSuggestions" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-ai-evaluationsuggestions--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/EvaluationSuggestions/EvaluationSuggestions.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/EvaluationSuggestions/EvaluationSuggestions.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { EvaluationSuggestions } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <EvaluationSuggestions title={"Evaluation Suggestions"} description={…} showHeader={true} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Evaluation Suggestions"` | — |
| `description` | `ReactNode` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `actions` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`EvaluationSuggestions.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/EvaluationSuggestions/EvaluationSuggestions.tsx) |
| CSS Module | [`EvaluationSuggestions.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/EvaluationSuggestions/EvaluationSuggestions.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [AI](/components/ai)
- [Component status board](/components/status)
- [Storybook · EvaluationSuggestions](/storybook/?path=/docs/components-ai-evaluationsuggestions--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
