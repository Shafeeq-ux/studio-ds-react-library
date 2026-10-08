import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./GeneratedScenario.module.css";

export type GeneratedScenarioProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function GeneratedScenario({
  title = "Generated Scenario",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: GeneratedScenarioProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-generated-scenario="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
