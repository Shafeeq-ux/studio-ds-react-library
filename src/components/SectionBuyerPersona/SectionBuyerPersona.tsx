import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./SectionBuyerPersona.module.css";

export type SectionBuyerPersonaProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function SectionBuyerPersona({
  title = "Buyer persona",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: SectionBuyerPersonaProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-section="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
