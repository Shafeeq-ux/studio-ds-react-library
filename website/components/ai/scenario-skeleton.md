---
title: ScenarioSkeleton
description: Studio DS ScenarioSkeleton — React + TypeScript documentation
---

# ScenarioSkeleton

<StatusPill status="draft" />

React + TypeScript implementation of Studio DS **ScenarioSkeleton**.

This page documents **ScenarioSkeleton** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="ScenarioSkeleton" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-ai-scenarioskeleton--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ScenarioSkeleton/ScenarioSkeleton.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ScenarioSkeleton/ScenarioSkeleton.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { ScenarioSkeleton } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <ScenarioSkeleton title={"Scenario Skeleton"} description={…} showHeader={true} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Scenario Skeleton"` | — |
| `description` | `ReactNode` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `actions` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`ScenarioSkeleton.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ScenarioSkeleton/ScenarioSkeleton.tsx) |
| CSS Module | [`ScenarioSkeleton.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ScenarioSkeleton/ScenarioSkeleton.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [AI](/components/ai)
- [Component status board](/components/status)
- [Storybook · ScenarioSkeleton](/storybook/?path=/docs/components-ai-scenarioskeleton--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
