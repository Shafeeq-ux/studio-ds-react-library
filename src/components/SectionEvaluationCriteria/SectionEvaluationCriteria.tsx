import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./SectionEvaluationCriteria.module.css";

export type SectionEvaluationCriteriaProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function SectionEvaluationCriteria({
  title = "Evaluation criteria",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: SectionEvaluationCriteriaProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-section="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
