---
title: Using components
---

# Using components

Patterns for consuming Studio DS in product apps.

<ResourceLinks />

## Import

Named exports from the package root:

```ts
import { Button, Input, Stack, Text } from "studio-ds";
import "studio-ds/tokens.css";
```

## Composition

Use `Stack` and `Text` for layout and hierarchy instead of ad-hoc margins and font sizes.

## Core vs domain shells

| Kind | Examples | Guidance |
| --- | --- | --- |
| Core / Forms / Navigation | Button, Input, Tabs | Prefer for all products; aim for `stable` |
| Data | Tables, scores, metrics | Reuse when the data shape matches |
| AI / Role play / Sections | PromptComposer, SectionVoice | Presentational shells — host apps own state |

## Docs contract

On each component Autodocs page (Storybook Docs tab):

1. **Status** — stable / beta / draft  
2. **Resources** — GitHub source, Figma file, Storybook deep link  
3. **Example** — live Controls  
4. **API** — TypeScript props  

Start with [Button](/studio-ds-react-library/storybook/?path=/docs/components-core-button--docs).
