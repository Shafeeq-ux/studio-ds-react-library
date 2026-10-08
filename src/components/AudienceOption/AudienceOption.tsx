import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./AudienceOption.module.css";

export type AudienceOptionProps = {
  children: ReactNode;
  selected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function AudienceOption({ children, selected = false, className, type = "button", ...rest }: AudienceOptionProps) {
  const classes = [styles.root, className].filter(Boolean).join(" ");
  return (
    <button type={type} className={classes} data-sds-audience-option="" data-selected={selected ? "true" : "false"} aria-pressed={selected} {...rest}>
      <span className={styles.check} aria-hidden>{selected ? "✓" : null}</span>
      <span>{children}</span>
    </button>
  );
}
