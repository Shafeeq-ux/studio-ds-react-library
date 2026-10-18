---
title: Theming
---

# Theming

Studio DS supports **Light** and **Dark** through semantic tokens — the same names, different values.

<ResourceLinks />

## Apply a theme

Wrap product UI in the root scope:

```html
<div class="sds-root" data-sds-theme="light">
  <!-- app -->
</div>
```

Switch to dark:

```html
<div class="sds-root" data-sds-theme="dark">
```

Import tokens once:

```ts
import "studio-ds/tokens.css";
```

## Preview in Storybook

Use the **Theme** toolbar control (Light / Dark) on any story. Foundations → Tokens shows semantic swatches that resolve with the active theme.

## Rules

- Prefer semantic tokens (`--sds-color-text-primary`) over primitives or hex.
- Do not hard-code Light-only colors inside components.
- Domain shells should inherit theme from the host `sds-root`.
