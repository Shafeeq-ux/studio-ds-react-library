/**
 * Semantic color tokens from Figma Studio · Semantic (Light resolved).
 * CSS custom properties support Light/Dark via `[data-sds-theme]`.
 */
export const colors = {
  textPrimary: "var(--sds-color-text-primary)",
  textSecondary: "var(--sds-color-text-secondary)",
  textTertiary: "var(--sds-color-text-tertiary)",
  textReference: "var(--sds-color-text-reference)",
  textOnAction: "var(--sds-color-text-on-action)",
  backgroundCanvas: "var(--sds-color-background-canvas)",
  surfaceDefault: "var(--sds-color-surface-default)",
  surfaceSecondary: "var(--sds-color-surface-secondary)",
  surfaceDisabled: "var(--sds-color-surface-disabled)",
  surfaceHover: "var(--sds-color-surface-hover)",
  borderDefault: "var(--sds-color-border-default)",
  borderControl: "var(--sds-color-border-control)",
  actionPrimary: "var(--sds-color-action-primary)",
  actionHover: "var(--sds-color-action-hover)",
  actionPressed: "var(--sds-color-action-pressed)",
  actionForeground: "var(--sds-color-action-foreground)",
  actionSubtle: "var(--sds-color-action-subtle)",
  actionBorder: "var(--sds-color-action-border)",
  focusRing: "var(--sds-color-focus-ring)",
  statusError: "var(--sds-color-status-error)",
  statusErrorSurface: "var(--sds-color-status-error-surface)",
  statusSuccess: "var(--sds-color-status-success)",
  statusSuccessSurface: "var(--sds-color-status-success-surface)",
  statusWarning: "var(--sds-color-status-warning)",
  statusWarningSurface: "var(--sds-color-status-warning-surface)",
  aiForeground: "var(--sds-color-ai-foreground)",
  aiSurface: "var(--sds-color-ai-surface)",
  aiBorder: "var(--sds-color-ai-border)",
} as const;

/** Resolved Light-mode hex values from Figma (node 29:1783 + Semantic collection). */
export const colorValuesLight = {
  textPrimary: "#202630",
  textSecondary: "#596474",
  textTertiary: "#697587",
  textReference: "#1f293b",
  textOnAction: "#ffffff",
  backgroundCanvas: "#f5f6f8",
  surfaceDefault: "#ffffff",
  surfaceSecondary: "#eef1f5",
  surfaceDisabled: "#e8ebf0",
  surfaceHover: "#f2f5fa",
  borderDefault: "#dce1e8",
  actionPrimary: "#3456c8",
  actionHover: "#2846ae",
  actionPressed: "#223b95",
  actionSubtle: "#eef2ff",
  actionBorder: "#d9e0fa",
  focusRing: "#2549be",
  statusError: "#b33434",
  statusSuccess: "#237348",
  statusWarning: "#875b13",
} as const;

export type ColorToken = keyof typeof colors;
