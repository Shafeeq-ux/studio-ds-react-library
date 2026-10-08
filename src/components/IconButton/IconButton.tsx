import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./IconButton.module.css";

/** Maps to Figma Studio/Icon button Appearance. */
export type IconButtonAppearance = "surface" | "quiet";

export type IconButtonProps = {
  children: ReactNode;
  appearance?: IconButtonAppearance;
  /** Accessible name — required for icon-only buttons. */
  "aria-label": string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "aria-label">;

const appearanceClass: Record<IconButtonAppearance, string> = {
  surface: styles.surface,
  quiet: styles.quiet,
};

export function IconButton({
  children,
  appearance = "surface",
  type = "button",
  className,
  disabled,
  ...rest
}: IconButtonProps) {
  const classes = [
    styles.button,
    appearanceClass[appearance],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      data-sds-icon-button={appearance}
      {...rest}
    >
      <span className={styles.icon} aria-hidden>
        {children}
      </span>
    </button>
  );
}
