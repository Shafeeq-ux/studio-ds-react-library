import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./GenerationProgress.module.css";

export type GenerationProgressProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function GenerationProgress({
  title = "Generation Progress",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: GenerationProgressProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-generation-progress="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
