---
title: PanelHeader
description: Studio DS PanelHeader — React + TypeScript documentation
---

# PanelHeader

<StatusPill status="stable" />

React + TypeScript implementation of Studio DS **PanelHeader**.

This page documents **PanelHeader** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="PanelHeader" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-core-panelheader--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PanelHeader/PanelHeader.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PanelHeader/PanelHeader.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { PanelHeader } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <PanelHeader title={…} description={…} icon={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | — | — |
| `description` | `ReactNode` | — | — |
| `icon` | `ReactNode` | — | — |
| `showDescription` | `boolean` | `Boolean(description)` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`PanelHeader.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PanelHeader/PanelHeader.tsx) |
| CSS Module | [`PanelHeader.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/PanelHeader/PanelHeader.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Core](/components/core)
- [Component status board](/components/status)
- [Storybook · PanelHeader](/storybook/?path=/docs/components-core-panelheader--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
