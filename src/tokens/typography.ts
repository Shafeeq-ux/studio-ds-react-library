/**
 * ASSUMPTION: Type scale stand-in until Figma text styles are exported.
 */
export const fontFamily = {
  display: "var(--sds-font-display)",
  body: "var(--sds-font-body)",
} as const;

export const fontSize = {
  xs: "var(--sds-text-xs)",
  sm: "var(--sds-text-sm)",
  md: "var(--sds-text-md)",
  lg: "var(--sds-text-lg)",
  xl: "var(--sds-text-xl)",
  "2xl": "var(--sds-text-2xl)",
} as const;

export const fontWeight = {
  regular: "var(--sds-font-weight-regular)",
  medium: "var(--sds-font-weight-medium)",
  semibold: "var(--sds-font-weight-semibold)",
} as const;

export type FontSizeToken = keyof typeof fontSize;
