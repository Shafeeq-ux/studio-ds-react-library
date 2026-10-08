import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Score.module.css";

export type ScoreProps = { title?: ReactNode; message?: ReactNode } & HTMLAttributes<HTMLElement>;

export function Score({
  title = "Insufficient evidence",
  message = "Not enough scored attempts yet to show a reliable average.",
  className,
  ...rest
}: ScoreProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-score="" {...rest}>
      <h2 className={styles.title}>{title}</h2>
      {message ? <p className={styles.message}>{message}</p> : null}
    </section>
  );
}
