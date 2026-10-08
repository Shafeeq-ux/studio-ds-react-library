import { type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Search.module.css";

function SearchGlyph() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden width="18" height="18">
      <circle cx="8" cy="8" r="5.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12.2 12.2 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export type SearchProps = {
  icon?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size">;

export function Search({
  className,
  disabled,
  icon,
  "aria-label": ariaLabel = "Search",
  ...rest
}: SearchProps) {
  const classes = [styles.root, className].filter(Boolean).join(" ");
  return (
    <div className={classes} data-sds-search="" data-disabled={disabled ? "true" : undefined}>
      <span className={styles.icon}>{icon ?? <SearchGlyph />}</span>
      <input
        type="search"
        className={styles.field}
        disabled={disabled}
        aria-label={ariaLabel}
        {...rest}
      />
    </div>
  );
}
