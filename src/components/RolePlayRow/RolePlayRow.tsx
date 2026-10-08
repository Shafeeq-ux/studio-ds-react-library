import type { HTMLAttributes, ReactNode } from "react";
import styles from "./RolePlayRow.module.css";

export type RolePlayRowProps = {
  title: ReactNode;
  metadata?: ReactNode;
  buyer?: ReactNode;
  difficulty?: ReactNode;
  status?: ReactNode;
  score?: ReactNode;
  updated?: ReactNode;
  action?: ReactNode;
  columns?: string;
} & HTMLAttributes<HTMLDivElement>;

export function RolePlayRow({
  title, metadata, buyer, difficulty, status, score, updated, action,
  columns = "2fr 1.2fr 1fr 1fr 0.8fr 1fr auto",
  className, style, ...rest
}: RolePlayRowProps) {
  return (
    <div
      className={[styles.root, className].filter(Boolean).join(" ")}
      style={{ gridTemplateColumns: columns, ...style }}
      role="row"
      data-sds-role-play-row=""
      {...rest}
    >
      <div>
        <p className={styles.title}>{title}</p>
        {metadata ? <p className={styles.meta}>{metadata}</p> : null}
      </div>
      <p className={styles.cell}>{buyer}</p>
      <p className={styles.cell}>{difficulty}</p>
      <p className={styles.cell}>{status}</p>
      <p className={styles.cell}>{score}</p>
      <p className={styles.cell}>{updated}</p>
      <div>{action}</div>
    </div>
  );
}
