---
title: SectionConversation
description: Studio DS SectionConversation — React + TypeScript documentation
---

# SectionConversation

<StatusPill status="draft" /> · Presentational shell

React + TypeScript implementation of Studio DS **SectionConversation**.

This page documents **SectionConversation** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="SectionConversation" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-sections-sectionconversation--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionConversation/SectionConversation.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionConversation/SectionConversation.module.css" />

## Interactive preview

<StoryPreview id="components-sections-sectionconversation--default" title="SectionConversation · live story" height="420px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { SectionConversation } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <SectionConversation title={"Conversation"} description={…} showHeader={true} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Conversation"` | — |
| `description` | `ReactNode` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `actions` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`SectionConversation.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionConversation/SectionConversation.tsx) |
| CSS Module | [`SectionConversation.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionConversation/SectionConversation.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Sections](/components/sections)
- [Component status board](/components/status)
- [Storybook · SectionConversation](/storybook/?path=/docs/components-sections-sectionconversation--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
