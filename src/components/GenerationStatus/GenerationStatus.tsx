import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./GenerationStatus.module.css";

export type GenerationStatusProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function GenerationStatus({
  title = "Generation Status",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: GenerationStatusProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-generation-status="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
