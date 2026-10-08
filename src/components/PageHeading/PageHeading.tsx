import type { HTMLAttributes, ReactNode } from "react";
import styles from "./PageHeading.module.css";

export type PageHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "title" | "children">;

export function PageHeading({
  title,
  description,
  action,
  className,
  ...rest
}: PageHeadingProps) {
  const classes = [styles.root, className].filter(Boolean).join(" ");

  return (
    <header className={classes} data-sds-page-heading="" {...rest}>
      <div className={styles.copy}>
        <h1 className={styles.title}>{title}</h1>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </header>
  );
}
