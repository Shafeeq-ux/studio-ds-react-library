import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./ConversationTimeline.module.css";

export type ConversationTimelineProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function ConversationTimeline({
  title = "Conversation Timeline",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: ConversationTimelineProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-conversation-timeline="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
