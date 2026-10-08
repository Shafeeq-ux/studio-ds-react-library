/**
 * Spacing and radius from Figma Studio · Primitives.
 */
export const space = {
  0: "var(--sds-space-0)",
  4: "var(--sds-space-4)",
  8: "var(--sds-space-8)",
  16: "var(--sds-space-16)",
  24: "var(--sds-space-24)",
  32: "var(--sds-space-32)",
  40: "var(--sds-space-40)",
  48: "var(--sds-space-48)",
  64: "var(--sds-space-64)",
} as const;

export const radius = {
  0: "var(--sds-radius-0)",
  6: "var(--sds-radius-6)",
  8: "var(--sds-radius-8)",
  12: "var(--sds-radius-12)",
} as const;

export type SpaceToken = keyof typeof space;
