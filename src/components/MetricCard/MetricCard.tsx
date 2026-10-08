import type { HTMLAttributes, ReactNode } from "react";
import styles from "./MetricCard.module.css";

export type MetricTrendTone = "positive" | "negative" | "neutral";

export type MetricCardProps = {
  label: ReactNode;
  value: ReactNode;
  trend?: ReactNode;
  trendTone?: MetricTrendTone;
} & HTMLAttributes<HTMLElement>;

export function MetricCard({
  label,
  value,
  trend,
  trendTone = "positive",
  className,
  ...rest
}: MetricCardProps) {
  const classes = [styles.root, className].filter(Boolean).join(" ");
  const trendClass = [
    styles.trend,
    trendTone === "negative" ? styles.trendNeg : undefined,
    trendTone === "neutral" ? styles.trendNeutral : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={classes} data-sds-metric-card="" {...rest}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
      {trend ? <p className={trendClass}>{trend}</p> : null}
    </article>
  );
}
