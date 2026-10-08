import type { HTMLAttributes, ReactNode } from "react";
import styles from "./ScoreCard.module.css";

export type ScoreCardProps = {
  eyebrow?: ReactNode;
  score?: ReactNode;
  scoreLabel?: ReactNode;
  summary?: ReactNode;
  detail?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function ScoreCard({
  eyebrow = "Overall",
  score = "86",
  scoreLabel = "out of 100",
  summary = "Strong performance",
  detail,
  className,
  ...rest
}: ScoreCardProps) {
  return (
    <article className={[styles.root, className].filter(Boolean).join(" ")} data-sds-score-card="" {...rest}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <div className={styles.scoreRow}>
        <p className={styles.score}>{score}</p>
        <p className={styles.scoreLabel}>{scoreLabel}</p>
      </div>
      <p className={styles.summary}>{summary}</p>
      {detail ? <p className={styles.detail}>{detail}</p> : null}
    </article>
  );
}
