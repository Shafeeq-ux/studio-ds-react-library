import type { HTMLAttributes, ReactNode } from "react";
import { Button } from "../Button";
import styles from "./Pagination.module.css";

export type PaginationProps = {
  label?: ReactNode;
  onPrevious?: () => void;
  onNext?: () => void;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  previousLabel?: string;
  nextLabel?: string;
} & HTMLAttributes<HTMLElement>;

export function Pagination({
  label = "Page 1 of 12",
  onPrevious,
  onNext,
  previousDisabled,
  nextDisabled,
  previousLabel = "Previous",
  nextLabel = "Next",
  className,
  ...rest
}: PaginationProps) {
  const classes = [styles.root, className].filter(Boolean).join(" ");
  return (
    <nav className={classes} aria-label="Pagination" data-sds-pagination="" {...rest}>
      <p className={styles.label}>{label}</p>
      <div className={styles.actions}>
        <Button variant="secondary" size="sm" onClick={onPrevious} disabled={previousDisabled}>{previousLabel}</Button>
        <Button variant="secondary" size="sm" onClick={onNext} disabled={nextDisabled}>{nextLabel}</Button>
      </div>
    </nav>
  );
}
