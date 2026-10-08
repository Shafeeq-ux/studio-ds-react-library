import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./ReviewSummary.module.css";

export type ReviewSummaryProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function ReviewSummary({
  title = "Review Summary",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: ReviewSummaryProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-review-summary="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
