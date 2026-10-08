import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./SectionScenarioDetails.module.css";

export type SectionScenarioDetailsProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function SectionScenarioDetails({
  title = "Scenario details",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: SectionScenarioDetailsProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-section="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
