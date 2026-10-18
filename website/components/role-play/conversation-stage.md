---
title: ConversationStage
description: Studio DS ConversationStage — React + TypeScript documentation
---

# ConversationStage

<StatusPill status="draft" />

React + TypeScript implementation of Studio DS **ConversationStage**.

This page documents **ConversationStage** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="ConversationStage" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-role-play-conversationstage--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationStage/ConversationStage.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationStage/ConversationStage.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { ConversationStage } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <ConversationStage step={…} title={…} description={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `step` | `ReactNode` | — | — |
| `title` | `ReactNode` | — | — |
| `description` | `ReactNode` | — | — |
| `state` | `ConversationStageState` | `"expanded"` | — |
| `onToggle` | `() => void` | — | — |
| `action` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`ConversationStage.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationStage/ConversationStage.tsx) |
| CSS Module | [`ConversationStage.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationStage/ConversationStage.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Role play](/components/role-play)
- [Component status board](/components/status)
- [Storybook · ConversationStage](/storybook/?path=/docs/components-role-play-conversationstage--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
