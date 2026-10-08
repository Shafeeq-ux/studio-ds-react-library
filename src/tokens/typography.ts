/**
 * Typography tokens from Figma Studio · Typography.
 * font-family/sans = Inter
 */
export const fontFamily = {
  sans: "var(--sds-font-sans)",
} as const;

export const fontSize = {
  initialsCompact: "var(--sds-text-initials-compact)",
  metadata: "var(--sds-text-metadata)",
  caption: "var(--sds-text-caption)",
  label: "var(--sds-text-label)",
  body: "var(--sds-text-body)",
  conversation: "var(--sds-text-conversation)",
  sectionTitle: "var(--sds-text-section-title)",
  subheading: "var(--sds-text-subheading)",
  heading: "var(--sds-text-heading)",
  pageTitleMobile: "var(--sds-text-page-title-mobile)",
  pageTitle: "var(--sds-text-page-title)",
  display: "var(--sds-text-display)",
  score: "var(--sds-text-score)",
} as const;

export const fontWeight = {
  regular: "var(--sds-font-weight-regular)",
  semibold: "var(--sds-font-weight-semibold)",
} as const;

export type FontSizeToken = keyof typeof fontSize;
