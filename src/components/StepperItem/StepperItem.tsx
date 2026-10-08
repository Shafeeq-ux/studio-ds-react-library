import type { HTMLAttributes, ReactNode } from "react";
import styles from "./StepperItem.module.css";

/** Maps to Figma Studio/Stepper item State. */
export type StepperItemState = "current" | "upcoming" | "completed";

export type StepperItemProps = {
  label: ReactNode;
  step?: ReactNode;
  state?: StepperItemState;
} & HTMLAttributes<HTMLDivElement>;

export function StepperItem({
  label,
  step,
  state = "upcoming",
  className,
  ...rest
}: StepperItemProps) {
  const classes = [styles.root, className].filter(Boolean).join(" ");
  return (
    <div className={classes} data-sds-stepper-item={state} data-state={state} {...rest}>
      <span className={styles.marker} aria-hidden>
        {state === "completed" ? "✓" : step}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
