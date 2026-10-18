---
title: ConversationBubble
description: Studio DS ConversationBubble — React + TypeScript documentation
---

# ConversationBubble

<StatusPill status="draft" />

React + TypeScript implementation of Studio DS **ConversationBubble**.

This page documents **ConversationBubble** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="ConversationBubble" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-role-play-conversationbubble--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationBubble/ConversationBubble.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationBubble/ConversationBubble.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { ConversationBubble } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <ConversationBubble speaker={…} timestamp={…} message={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `speaker` | `ReactNode` | — | — |
| `timestamp` | `ReactNode` | — | — |
| `message` | `ReactNode` | — | — |
| `tone` | `ConversationBubbleTone` | `"seller"` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`ConversationBubble.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationBubble/ConversationBubble.tsx) |
| CSS Module | [`ConversationBubble.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationBubble/ConversationBubble.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Role play](/components/role-play)
- [Component status board](/components/status)
- [Storybook · ConversationBubble](/storybook/?path=/docs/components-role-play-conversationbubble--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
