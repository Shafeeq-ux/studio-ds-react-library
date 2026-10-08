import type { HTMLAttributes, ReactNode } from "react";
import styles from "./SellerRow.module.css";

export type SellerRowProps = {
  name: ReactNode;
  avatar?: ReactNode;
  score?: ReactNode;
  attempts?: ReactNode;
  trend?: ReactNode;
  trendTone?: "positive" | "negative" | "neutral";
  columns?: string;
} & HTMLAttributes<HTMLDivElement>;

export function SellerRow({
  name, avatar, score, attempts, trend, trendTone = "positive",
  columns = "2fr 1fr 1fr 1fr", className, style, ...rest
}: SellerRowProps) {
  const trendClass = trendTone === "negative" ? styles.trendNeg : trendTone === "positive" ? styles.trendPos : styles.cell;
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} style={{ gridTemplateColumns: columns, ...style }} role="row" data-sds-seller-row="" {...rest}>
      <div className={styles.name}>{avatar}{name}</div>
      <p className={styles.cell}>{score}</p>
      <p className={styles.cell}>{attempts}</p>
      <p className={trendClass}>{trend}</p>
    </div>
  );
}
