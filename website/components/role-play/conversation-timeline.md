---
title: ConversationTimeline
description: Studio DS ConversationTimeline — React + TypeScript documentation
---

# ConversationTimeline

<StatusPill status="draft" />

React + TypeScript implementation of Studio DS **ConversationTimeline**.

This page documents **ConversationTimeline** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="ConversationTimeline" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-role-play-conversationtimeline--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationTimeline/ConversationTimeline.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationTimeline/ConversationTimeline.module.css" />

## Interactive preview

<StoryPreview id="components-role-play-conversationtimeline--default" title="ConversationTimeline · live story" height="420px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { ConversationTimeline } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <ConversationTimeline title={"Conversation Timeline"} description={…} showHeader={true} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Conversation Timeline"` | — |
| `description` | `ReactNode` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `actions` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`ConversationTimeline.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationTimeline/ConversationTimeline.tsx) |
| CSS Module | [`ConversationTimeline.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/ConversationTimeline/ConversationTimeline.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Role play](/components/role-play)
- [Component status board](/components/status)
- [Storybook · ConversationTimeline](/storybook/?path=/docs/components-role-play-conversationtimeline--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
