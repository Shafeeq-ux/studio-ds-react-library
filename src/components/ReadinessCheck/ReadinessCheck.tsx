import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./ReadinessCheck.module.css";

export type ReadinessCheckProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function ReadinessCheck({
  title = "Readiness Check",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: ReadinessCheckProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-readiness-check="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
