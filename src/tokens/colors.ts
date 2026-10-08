/**
 * ASSUMPTION: Palette stand-in until Figma Studio DS styles are exported.
 * Keep in sync with `tokens.css`.
 */
export const colors = {
  ink: "var(--sds-color-ink)",
  inkMuted: "var(--sds-color-ink-muted)",
  surface: "var(--sds-color-surface)",
  surfaceRaised: "var(--sds-color-surface-raised)",
  border: "var(--sds-color-border)",
  borderStrong: "var(--sds-color-border-strong)",
  primary: "var(--sds-color-primary)",
  primaryHover: "var(--sds-color-primary-hover)",
  primaryContrast: "var(--sds-color-primary-contrast)",
  danger: "var(--sds-color-danger)",
  dangerHover: "var(--sds-color-danger-hover)",
  dangerContrast: "var(--sds-color-danger-contrast)",
  focusRing: "var(--sds-color-focus-ring)",
} as const;

export type ColorToken = keyof typeof colors;
