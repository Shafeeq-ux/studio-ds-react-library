import type { HTMLAttributes, ReactNode } from "react";
import { IconButton } from "../IconButton";
import { Icon } from "../Icon";
import styles from "./ConversationStage.module.css";
export type ConversationStageState = "expanded" | "collapsed";
export type ConversationStageProps = {
  step?: ReactNode; title: ReactNode; description?: ReactNode;
  state?: ConversationStageState; onToggle?: () => void; action?: ReactNode;
} & HTMLAttributes<HTMLElement>;
export function ConversationStage({
  step, title, description, state = "expanded", onToggle, action, className, ...rest
}: ConversationStageProps) {
  const collapsed = state === "collapsed";
  return (
    <section className={[styles.root, collapsed ? styles.collapsed : undefined, className].filter(Boolean).join(" ")} data-sds-conversation-stage={state} {...rest}>
      <div className={styles.header}>
        <div>
          {step ? <p className={styles.step}>{step}</p> : null}
          <h3 className={styles.title}>{title}</h3>
        </div>
        {action ?? (
          <IconButton aria-label={collapsed ? "Expand stage" : "Collapse stage"} appearance="quiet" onClick={onToggle}>
            <Icon glyph={collapsed ? "chevron-down" : "chevron-up"} />
          </IconButton>
        )}
      </div>
      {description ? <p className={styles.description}>{description}</p> : null}
    </section>
  );
}
