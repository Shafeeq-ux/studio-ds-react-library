import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "../Icon";
import styles from "./TableColumnHeading.module.css";

export type TableColumnHeadingProps = {
  children: ReactNode;
  sortable?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function TableColumnHeading({ children, sortable = false, className, type = "button", ...rest }: TableColumnHeadingProps) {
  const classes = [styles.root, sortable ? styles.sortable : undefined, className].filter(Boolean).join(" ");
  return (
    <button type={type} className={classes} data-sds-table-column-heading="" disabled={!sortable && !rest.onClick} {...rest}>
      <span>{children}</span>
      {sortable ? <Icon glyph="arrow-down-up" size={14} /> : null}
    </button>
  );
}
