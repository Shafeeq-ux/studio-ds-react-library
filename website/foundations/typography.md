---
title: Typography
---

# Typography

Typography supports hierarchy of information. Studio DS uses **Inter** (Regular 400 / Semi Bold 600).

<ResourceLinks />

## Text variants

| Variant | Figma style | Use |
| --- | --- | --- |
| `display` | Studio/Type/32/Semi Bold | Hero moments |
| `pageTitle` | 28/Semi Bold | Page titles |
| `heading` | 20/Semi Bold | Section headings |
| `subheading` | 18/Semi Bold | Subsections |
| `sectionTitle` | 16/Semi Bold | Card / panel titles |
| `body` | 14/Regular | Default copy |
| `label` | 13/Semi Bold | Labels |
| `caption` | 12/Regular | Meta / hints |

## Usage

```tsx
import { Text } from "studio-ds";

<Text variant="heading">Library</Text>
<Text tone="secondary">Secondary supporting copy</Text>
```

See specimens in [Storybook Foundations](/studio-ds-react-library/storybook/?path=/docs/foundations-tokens--overview).
