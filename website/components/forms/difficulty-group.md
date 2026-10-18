---
title: DifficultyGroup
description: Studio DS DifficultyGroup — React + TypeScript documentation
---

# DifficultyGroup

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **DifficultyGroup**.

This page documents **DifficultyGroup** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="DifficultyGroup" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-forms-difficultygroup--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/DifficultyGroup/DifficultyGroup.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/DifficultyGroup/DifficultyGroup.module.css" />

## Interactive preview

<StoryPreview id="components-forms-difficultygroup--wide" title="DifficultyGroup · live story" height="280px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { DifficultyGroup } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <DifficultyGroup value={…} defaultValue={"Beginner"} onValueChange={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `DifficultyValue` | — | — |
| `defaultValue` | `DifficultyValue` | `"Beginner"` | — |
| `onValueChange` | `(value: DifficultyValue) => void` | — | — |
| `layout` | `"wide" \| "compact"` | `"wide"` | — |
| `name` | `string` | `"difficulty"` | — |
| `disabled` | `boolean` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`DifficultyGroup.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/DifficultyGroup/DifficultyGroup.tsx) |
| CSS Module | [`DifficultyGroup.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/DifficultyGroup/DifficultyGroup.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Forms](/components/forms)
- [Component status board](/components/status)
- [Storybook · DifficultyGroup](/storybook/?path=/docs/components-forms-difficultygroup--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
