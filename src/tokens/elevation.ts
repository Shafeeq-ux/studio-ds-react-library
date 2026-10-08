/**
 * Elevation / effect styles from Figma Studio/Elevation/*.
 */
export const elevation = {
  subtle: "var(--sds-elevation-subtle)",
  popover: "var(--sds-elevation-popover)",
} as const;

export const iconSize = {
  16: "var(--sds-icon-16)",
  18: "var(--sds-icon-18)",
  20: "var(--sds-icon-20)",
  24: "var(--sds-icon-24)",
} as const;

export type ElevationToken = keyof typeof elevation;
