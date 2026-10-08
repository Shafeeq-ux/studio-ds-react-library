import type { HTMLAttributes, ReactNode } from "react";
import styles from "./LibraryToolbar.module.css";

export type LibraryToolbarProps = {
  start?: ReactNode;
  end?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function LibraryToolbar({ start, end, className, ...rest }: LibraryToolbarProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-sds-library-toolbar="" {...rest}>
      <div className={styles.start}>{start}</div>
      <div className={styles.end}>{end}</div>
    </div>
  );
}
