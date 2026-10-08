import type { HTMLAttributes, ReactNode } from "react";
import styles from "./TableHeader.module.css";

export type TableHeaderProps = {
  children: ReactNode;
  columns?: string;
} & HTMLAttributes<HTMLDivElement>;

export function TableHeader({ children, columns, className, style, ...rest }: TableHeaderProps) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      style={{ gridTemplateColumns: columns, ...style }}
      role="row"
      data-sds-table-header=""
      {...rest}
    >
      {children}
    </div>
  );
}
