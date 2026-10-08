/**
 * ASSUMPTION: 4px-based spacing scale until Figma layout tokens are confirmed.
 */
export const space = {
  1: "var(--sds-space-1)",
  2: "var(--sds-space-2)",
  3: "var(--sds-space-3)",
  4: "var(--sds-space-4)",
  5: "var(--sds-space-5)",
  6: "var(--sds-space-6)",
  7: "var(--sds-space-7)",
} as const;

export const radius = {
  sm: "var(--sds-radius-sm)",
  md: "var(--sds-radius-md)",
  lg: "var(--sds-radius-lg)",
} as const;

export type SpaceToken = keyof typeof space;
