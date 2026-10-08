import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

/** Maps to Figma Studio/Button Appearance. */
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
/** Maps to Figma Size: Standard → md, Compact → sm. */
export type ButtonSize = "sm" | "md" | "lg";
/** Maps to Figma Layout: Label only / Icon + label. */
export type ButtonLayout = "label" | "icon-label";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  layout?: ButtonLayout;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
  danger: styles.danger,
};

const sizeClass: Record<ButtonSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  layout = "label",
  icon,
  iconPosition = "start",
  type = "button",
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const showIcon = Boolean(icon);
  const classes = [
    styles.button,
    variantClass[variant],
    sizeClass[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      data-sds-button={variant}
      data-sds-button-layout={showIcon ? "icon-label" : "label"}
      {...rest}
    >
      {showIcon && icon && iconPosition === "start" ? (
        <span className={styles.icon} aria-hidden>
          {icon}
        </span>
      ) : null}
      <span className={styles.label}>{children}</span>
      {showIcon && icon && iconPosition === "end" ? (
        <span className={styles.icon} aria-hidden>
          {icon}
        </span>
      ) : null}
    </button>
  );
}
