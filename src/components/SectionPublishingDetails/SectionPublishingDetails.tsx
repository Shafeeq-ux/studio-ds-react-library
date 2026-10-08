import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./SectionPublishingDetails.module.css";

export type SectionPublishingDetailsProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function SectionPublishingDetails({
  title = "Publishing details",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: SectionPublishingDetailsProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-section="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
