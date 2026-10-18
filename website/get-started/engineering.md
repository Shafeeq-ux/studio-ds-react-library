---
title: Engineering path
---

# Engineering path

Elevate your experience with Studio DS — from install to Storybook to source.

<ResourceLinks />

## Official documentation

This **guidelines site** is the narrative source of truth (like Mews Design System’s Supernova site). For each component you will also find:

| Block | Where |
| --- | --- |
| Status | [Status board](/components/status) + Autodocs description |
| Resources | GitHub · Figma · Storybook links on every Docs page |
| Example | Storybook Controls playground |
| API | Autodocs props table from TypeScript |

## Install

```bash
npm install studio-ds
# peer dependencies: react, react-dom (^18 or ^19)
```

```tsx
import { Button, Text, Stack, Icon } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Stack gap={16}>
        <Text variant="heading">Studio DS</Text>
        <Button icon={<Icon glyph="plus" />}>Create</Button>
      </Stack>
    </div>
  );
}
```

## Storybook

[Open Storybook](/storybook/) for interactive Controls, themes, and Autodocs. Prefer the Docs tab for API tables; use Canvas for playgrounds.

Locally:

```bash
npm ci
npm run storybook   # http://127.0.0.1:44041
```

## Code repository

Inspect [`src/components`](https://github.com/Shafeeq-ux/studio-ds-react-library/tree/main/src/components) and [`src/tokens`](https://github.com/Shafeeq-ux/studio-ds-react-library/tree/main/src/tokens) on GitHub to learn how components and tokens are structured.

| Path | Purpose |
| --- | --- |
| `src/tokens/` | CSS + TS design tokens |
| `src/components/` | React components + stories |
| `src/docs/` | Storybook guideline stories |
| `website/` | This VitePress documentation site |
| `.storybook/` | Storybook config |

## Where next

- [Using components](./using-components)
- [Theming](./theming)
- [Components overview](/components/)
