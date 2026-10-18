---
title: Color
---

# Color

Semantic color creates clear interfaces across Light and Dark. Values below are documented **on this site**; Figma remains the design source of truth.

<ResourceLinks />

## Principles

- Prefer **semantic** roles over hex values in product code.
- Pair text/background tokens for contrast.
- Status colors communicate meaning (error, success, warning).
- AI surfaces use dedicated `--sds-color-ai-*` roles.

## Semantic tokens

| Token key | CSS variable | Light reference |
| --- | --- | --- |
| `textPrimary` | `--sds-color-text-primary` | #202630 |
| `textSecondary` | `--sds-color-text-secondary` | #596474 |
| `textTertiary` | `--sds-color-text-tertiary` | #697587 |
| `textReference` | `--sds-color-text-reference` | #1f293b |
| `textOnAction` | `--sds-color-text-on-action` | #ffffff |
| `backgroundCanvas` | `--sds-color-background-canvas` | #f5f6f8 |
| `surfaceDefault` | `--sds-color-surface-default` | #ffffff |
| `surfaceSecondary` | `--sds-color-surface-secondary` | #eef1f5 |
| `surfaceDisabled` | `--sds-color-surface-disabled` | #e8ebf0 |
| `surfaceHover` | `--sds-color-surface-hover` | #f2f5fa |
| `borderDefault` | `--sds-color-border-default` | #dce1e8 |
| `borderControl` | `--sds-color-border-control` | — |
| `actionPrimary` | `--sds-color-action-primary` | #3456c8 |
| `actionHover` | `--sds-color-action-hover` | #2846ae |
| `actionPressed` | `--sds-color-action-pressed` | #223b95 |
| `actionForeground` | `--sds-color-action-foreground` | — |
| `actionSubtle` | `--sds-color-action-subtle` | #eef2ff |
| `actionBorder` | `--sds-color-action-border` | #d9e0fa |
| `focusRing` | `--sds-color-focus-ring` | #2549be |
| `controlThumb` | `--sds-color-control-thumb` | — |
| `controlTrackOff` | `--sds-color-control-track-off` | — |
| `statusError` | `--sds-color-status-error` | #b33434 |
| `statusErrorSurface` | `--sds-color-status-error-surface` | — |
| `statusSuccess` | `--sds-color-status-success` | #237348 |
| `statusSuccessSurface` | `--sds-color-status-success-surface` | — |
| `statusWarning` | `--sds-color-status-warning` | #875b13 |
| `statusWarningSurface` | `--sds-color-status-warning-surface` | — |
| `aiForeground` | `--sds-color-ai-foreground` | — |
| `aiSurface` | `--sds-color-ai-surface` | — |
| `aiBorder` | `--sds-color-ai-border` | — |
| `overlayTooltip` | `--sds-color-overlay-tooltip` | #1a2438 |
| `overlayTooltipSecondary` | `--sds-color-overlay-tooltip-secondary` | #e0e8f5 |
| `overlayTooltipText` | `--sds-color-overlay-tooltip-text` | — |

Dark mode resolves the same CSS variables under `[data-sds-theme="dark"]` in `tokens.css`.

## External references

- [Figma · Studio · Semantic](https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS)
- [Storybook Foundations · Tokens](/storybook/?path=/docs/foundations-tokens--overview)
- [tokens.css on GitHub](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/tokens/tokens.css)
- [colors.ts on GitHub](https://github.com/Shafeeq-ux/studio-ds-react-library/blob/main/src/tokens/colors.ts)
