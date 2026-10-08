import type { HTMLAttributes } from "react";
import styles from "./Avatar.module.css";

/** Maps to Figma Studio/Avatar Size. */
export type AvatarSize = 28 | 32 | 36 | 48 | 64;

export type AvatarProps = {
  /** Two-letter initials shown when no image is provided. */
  initials: string;
  size?: AvatarSize;
  alt?: string;
  src?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

const sizeClass: Record<AvatarSize, string> = {
  28: styles.size28,
  32: styles.size32,
  36: styles.size36,
  48: styles.size48,
  64: styles.size64,
};

function normalizeInitials(value: string) {
  return value.replace(/\s+/g, "").slice(0, 2).toUpperCase();
}

export function Avatar({
  initials,
  size = 32,
  alt,
  src,
  className,
  ...rest
}: AvatarProps) {
  const classes = [styles.avatar, sizeClass[size], className]
    .filter(Boolean)
    .join(" ");
  const label = alt ?? initials;

  return (
    <span
      className={classes}
      role={src ? "img" : undefined}
      aria-label={label}
      data-sds-avatar=""
      data-size={size}
      {...rest}
    >
      {src ? (
        <img className={styles.image} src={src} alt={label} />
      ) : (
        <span className={styles.initials} aria-hidden>
          {normalizeInitials(initials)}
        </span>
      )}
    </span>
  );
}
