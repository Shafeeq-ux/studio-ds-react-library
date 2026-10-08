import type { HTMLAttributes, ReactNode } from "react";
import styles from "./PanelHeader.module.css";

export type PanelHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  showDescription?: boolean;
} & Omit<HTMLAttributes<HTMLElement>, "title" | "children">;

export function PanelHeader({
  title,
  description,
  icon,
  showDescription = Boolean(description),
  className,
  ...rest
}: PanelHeaderProps) {
  const classes = [styles.root, className].filter(Boolean).join(" ");
  return (
    <header className={classes} data-sds-panel-header="" {...rest}>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <div className={styles.copy}>
        <h2 className={styles.title}>{title}</h2>
        {showDescription && description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    </header>
  );
}
