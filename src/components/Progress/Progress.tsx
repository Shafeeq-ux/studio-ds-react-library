import type { HTMLAttributes } from "react";
import styles from "./Progress.module.css";

export type ProgressProps = {
  /** 0–100 when determinate. Omit for indeterminate. */
  value?: number;
} & HTMLAttributes<HTMLDivElement>;

export function Progress({ value, className, ...rest }: ProgressProps) {
  const determinate = typeof value === "number";
  const clamped = determinate ? Math.max(0, Math.min(100, value)) : undefined;
  const classes = [
    styles.root,
    !determinate ? styles.indeterminate : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      data-sds-progress={determinate ? "determinate" : "indeterminate"}
      {...rest}
    >
      <div
        className={styles.bar}
        style={determinate ? { width: `${clamped}%` } : undefined}
      />
    </div>
  );
}
