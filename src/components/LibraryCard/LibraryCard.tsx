import type { HTMLAttributes, ReactNode } from "react";
import styles from "./LibraryCard.module.css";
export type LibraryCardProps = {
  title: ReactNode; metadata?: ReactNode; buyer?: ReactNode; completion?: ReactNode; score?: ReactNode;
} & HTMLAttributes<HTMLElement>;
export function LibraryCard({ title, metadata, buyer, completion, score, className, ...rest }: LibraryCardProps) {
  return (
    <article className={[styles.root, className].filter(Boolean).join(" ")} data-sds-library-card="" {...rest}>
      <h3 className={styles.title}>{title}</h3>
      {metadata ? <p className={styles.meta}>{metadata}</p> : null}
      {buyer ? <p className={styles.buyer}>{buyer}</p> : null}
      {completion ? <p className={styles.completion}>{completion}</p> : null}
      {score ? <p className={styles.score}>{score}</p> : null}
    </article>
  );
}
