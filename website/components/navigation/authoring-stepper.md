---
title: AuthoringStepper
description: Studio DS AuthoringStepper — React + TypeScript documentation
---

# AuthoringStepper

<StatusPill status="beta" />

React + TypeScript implementation of Studio DS **AuthoringStepper**.

This page documents **AuthoringStepper** in full on the guidelines site. Use the links below for Figma, Storybook, and the React/TypeScript + CSS source. The preview below is the live Storybook story embedded here.

<ComponentResources name="AuthoringStepper" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-navigation-authoringstepper--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AuthoringStepper/AuthoringStepper.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AuthoringStepper/AuthoringStepper.module.css" />

## Interactive preview

<StoryPreview id="components-navigation-authoringstepper--step2" title="AuthoringStepper · live story" height="360px" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { AuthoringStepper } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <AuthoringStepper steps={…} activeStep={1} layout={"wide"} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `steps` | `AuthoringStep[]` | — | — |
| `activeStep` | `number` | `1` | — |
| `layout` | `"wide" \| "compact"` | `"wide"` | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`AuthoringStepper.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AuthoringStepper/AuthoringStepper.tsx) |
| CSS Module | [`AuthoringStepper.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/AuthoringStepper/AuthoringStepper.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Navigation](/components/navigation)
- [Component status board](/components/status)
- [Storybook · AuthoringStepper](/storybook/?path=/docs/components-navigation-authoringstepper--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
