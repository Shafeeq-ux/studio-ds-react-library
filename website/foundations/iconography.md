---
title: Iconography
---

# Iconography

Icons are visual representations of common actions.

<ResourceLinks />

## Icon component

```tsx
import { Icon, IconButton } from "studio-ds";

<Icon glyph="plus" size={16} />
<IconButton aria-label="Add"><Icon glyph="plus" /></IconButton>
```

- Sizes: **14 / 16 / 18 / 28** (and related primitives)
- Color via `currentColor` — inherit from text/action tokens
- ~46 glyphs aligned to Studio naming

## Playground

[Icon stories](/studio-ds-react-library/storybook/?path=/docs/components-core-icon--docs)
