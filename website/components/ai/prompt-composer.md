---
title: PromptComposer
description: Studio DS PromptComposer — React + TypeScript documentation
---

# PromptComposer

<StatusPill status="draft" />

React + TypeScript implementation of Studio DS **PromptComposer**.

This page documents **PromptComposer** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="PromptComposer" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-ai-promptcomposer--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PromptComposer/PromptComposer.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PromptComposer/PromptComposer.module.css" />

## Interactive preview

<StoryPreview id="components-ai-promptcomposer--default" title="PromptComposer · live story" height="420px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { PromptComposer } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <PromptComposer title={"Create with AI"} guidance={"Describe the scenario you want to generate."} value="…" />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Create with AI"` | — |
| `guidance` | `ReactNode` | `"Describe the scenario you want to generate."` | — |
| `value` | `string` | — | — |
| `defaultValue` | `string` | — | — |
| `onValueChange` | `(value: string) => void` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `primaryActionLabel` | `string` | `"Generate"` | — |
| `onGenerate` | `() => void` | — | — |
| `secondaryAction` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`PromptComposer.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PromptComposer/PromptComposer.tsx) |
| CSS Module | [`PromptComposer.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PromptComposer/PromptComposer.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [AI](/components/ai)
- [Component status board](/components/status)
- [Storybook · PromptComposer](/storybook/?path=/docs/components-ai-promptcomposer--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
