import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./AICoach.module.css";

export type AICoachProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function AICoach({
  title = "A I Coach",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: AICoachProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-a-i-coach="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
