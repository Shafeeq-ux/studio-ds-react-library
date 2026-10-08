import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./SelectOption.module.css";

export type SelectOptionItemProps = {
  children: ReactNode;
  selected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SelectOption({
  children,
  selected = false,
  className,
  type = "button",
  ...rest
}: SelectOptionItemProps) {
  const classes = [styles.root, className].filter(Boolean).join(" ");
  return (
    <button
      type={type}
      role="option"
      aria-selected={selected}
      className={classes}
      data-sds-select-option=""
      data-selected={selected ? "true" : "false"}
      {...rest}
    >
      <svg className={styles.check} viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M3.5 8.2 6.4 11l6.1-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={styles.label}>{children}</span>
    </button>
  );
}
