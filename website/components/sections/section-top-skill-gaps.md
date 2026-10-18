---
title: SectionTopSkillGaps
description: Studio DS SectionTopSkillGaps — React + TypeScript documentation
---

# SectionTopSkillGaps

<StatusPill status="draft" /> · Presentational shell

React + TypeScript implementation of Studio DS **SectionTopSkillGaps**.

This page documents **SectionTopSkillGaps** in full on the guidelines site. Use the links below for Figma, the interactive Storybook playground, and the React/TypeScript + CSS source.

<ComponentResources name="SectionTopSkillGaps" figma="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS" storybook="/storybook/?path=/docs/components-sections-sectiontopskillgaps--docs" react="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionTopSkillGaps/SectionTopSkillGaps.tsx" css="https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionTopSkillGaps/SectionTopSkillGaps.module.css" />

## When to use

| Do | Don't |
| --- | --- |
| Use for product UI that matches the Studio DS Figma set | Hard-code colors or type that bypass `--sds-*` tokens |
| Prefer semantic props that map to Figma variants | Fork styles in the app unless extending via `className` |
| Check Light and Dark with `data-sds-theme` | Assume Light-only contrast |

## Usage

```tsx
import { SectionTopSkillGaps } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <SectionTopSkillGaps title={"Top skill gaps"} description={…} showHeader={true} />
    </div>
  );
}
```

## API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `"Top skill gaps"` | — |
| `description` | `ReactNode` | — | — |
| `showHeader` | `boolean` | `true` | — |
| `actions` | `ReactNode` | — | — |

## Anatomy & styling

| Layer | Location |
| --- | --- |
| React + TypeScript | [`SectionTopSkillGaps.tsx`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionTopSkillGaps/SectionTopSkillGaps.tsx) |
| CSS Module | [`SectionTopSkillGaps.module.css`](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/components/SectionTopSkillGaps/SectionTopSkillGaps.module.css) |
| Tokens | `src/tokens/` (`--sds-*` CSS variables) |

Styles consume semantic tokens (for example `var(--sds-color-action-primary)`). Do not copy hex values from Light mode into product CSS.

## Related

- Group: [Sections](/components/sections)
- [Component status board](/components/status)
- [Storybook · SectionTopSkillGaps](/storybook/?path=/docs/components-sections-sectiontopskillgaps--docs)
- [Figma · Studio DS](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
