import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./ScenarioSkeleton.module.css";

export type ScenarioSkeletonProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function ScenarioSkeleton({
  title = "Scenario Skeleton",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: ScenarioSkeletonProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-scenario-skeleton="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
