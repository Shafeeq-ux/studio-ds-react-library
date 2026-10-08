import type { HTMLAttributes, ReactNode } from "react";
import styles from "./TopNavigation.module.css";

export type TopNavigationProps = {
  title?: ReactNode;
  start?: ReactNode;
  end?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function TopNavigation({ title, start, end, className, ...rest }: TopNavigationProps) {
  const classes = [styles.root, className].filter(Boolean).join(" ");
  return (
    <header className={classes} data-sds-top-navigation="" {...rest}>
      <div className={styles.start}>
        {start}
        {title ? <p className={styles.title}>{title}</p> : null}
      </div>
      <div className={styles.end}>{end}</div>
    </header>
  );
}
