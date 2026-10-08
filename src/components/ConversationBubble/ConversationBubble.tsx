import type { HTMLAttributes, ReactNode } from "react";
import styles from "./ConversationBubble.module.css";
export type ConversationBubbleTone = "seller" | "buyer";
export type ConversationBubbleProps = {
  speaker: ReactNode; timestamp?: ReactNode; message: ReactNode; tone?: ConversationBubbleTone;
} & HTMLAttributes<HTMLElement>;
export function ConversationBubble({ speaker, timestamp, message, tone = "seller", className, ...rest }: ConversationBubbleProps) {
  return (
    <article className={[styles.root, tone === "buyer" ? styles.buyer : undefined, className].filter(Boolean).join(" ")} data-sds-conversation-bubble={tone} {...rest}>
      <div className={styles.header}>
        <p className={styles.speaker}>{speaker}</p>
        {timestamp ? <p className={styles.time}>{timestamp}</p> : null}
      </div>
      <p className={styles.message}>{message}</p>
    </article>
  );
}
