---
title: GenerationStatus
description: Studio DS GenerationStatus — React + TypeScript documentation
---

# GenerationStatus

<StatusPill status="draft" />

React + TypeScript implementation of Studio DS **GenerationStatus**.

This page documents **GenerationStatus** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="GenerationStatus" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-ai-generationstatus--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/GenerationStatus/GenerationStatus.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/GenerationStatus/GenerationStatus.module.css" />

## Interactive preview

<StoryPreview id="components-ai-generationstatus--default" title="GenerationStatus · live story" height="420px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { GenerationStatus } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <GenerationStatus title={"Generation Status"} description={…} showHeader={true} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Generation Status"` | — |
| `description` | `ReactNode` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `actions` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`GenerationStatus.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/GenerationStatus/GenerationStatus.tsx) |
| CSS Module | [`GenerationStatus.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/GenerationStatus/GenerationStatus.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [AI](/components/ai)
- [Component status board](/components/status)
- [Storybook · GenerationStatus](/storybook/?path=/docs/components-ai-generationstatus--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
