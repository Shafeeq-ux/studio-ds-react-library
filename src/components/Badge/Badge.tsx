import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Badge.module.css";

/** Maps to Figma Studio/Badge Tone. */
export type BadgeTone = "positive" | "neutral" | "informative";

export type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
  /** When true, prepends a status dot (common in Figma presets). */
  withDot?: boolean;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

const toneClass: Record<BadgeTone, string> = {
  positive: styles.positive,
  neutral: styles.neutral,
  informative: styles.informative,
};

export function Badge({
  children,
  tone = "neutral",
  withDot = false,
  className,
  ...rest
}: BadgeProps) {
  const classes = [styles.badge, toneClass[tone], className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} data-sds-badge={tone} {...rest}>
      {withDot ? <span className={styles.dot} aria-hidden /> : null}
      {children}
    </span>
  );
}
