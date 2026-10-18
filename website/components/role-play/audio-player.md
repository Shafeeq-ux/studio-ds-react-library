---
title: AudioPlayer
description: Studio DS AudioPlayer — React + TypeScript documentation
---

# AudioPlayer

<StatusPill status="draft" />

React + TypeScript implementation of Studio DS **AudioPlayer**.

This page documents **AudioPlayer** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="AudioPlayer" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-role-play-audioplayer--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AudioPlayer/AudioPlayer.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AudioPlayer/AudioPlayer.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { AudioPlayer } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <AudioPlayer label={"Session recording"} status={"Ready"} secondaryAction={…} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `ReactNode` | `"Session recording"` | — |
| `status` | `ReactNode` | `"Ready"` | — |
| `secondaryAction` | `ReactNode` | — | — |
| `showSecondaryAction` | `boolean` | `Boolean(secondaryAction)` | — |
| `onPlay` | `() => void` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`AudioPlayer.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AudioPlayer/AudioPlayer.tsx) |
| CSS Module | [`AudioPlayer.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AudioPlayer/AudioPlayer.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Role play](/components/role-play)
- [Component status board](/components/status)
- [Storybook · AudioPlayer](/storybook/?path=/docs/components-role-play-audioplayer--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
