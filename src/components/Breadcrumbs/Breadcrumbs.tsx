import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Breadcrumbs.module.css";

export type BreadcrumbItem = {
  label: ReactNode;
  href?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
} & HTMLAttributes<HTMLElement>;

export function Breadcrumbs({ items, className, ...rest }: BreadcrumbsProps) {
  const classes = [styles.list, className].filter(Boolean).join(" ");
  return (
    <nav aria-label="Breadcrumb" data-sds-breadcrumbs="" {...rest}>
      <ol className={classes}>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={index} className={styles.item}>
              {index > 0 ? <span className={styles.sep} aria-hidden>/</span> : null}
              {last || !item.href ? (
                <span className={last ? styles.current : undefined} aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              ) : (
                <a className={styles.link} href={item.href}>
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
