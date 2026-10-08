import type { HTMLAttributes } from "react";
import { StepperItem, type StepperItemState } from "../StepperItem";
import styles from "./AuthoringStepper.module.css";

export type AuthoringStep = { id: string; label: string };

export type AuthoringStepperProps = {
  steps: AuthoringStep[];
  activeStep?: number; // 1-based
  layout?: "wide" | "compact";
} & HTMLAttributes<HTMLElement>;

export function AuthoringStepper({
  steps,
  activeStep = 1,
  layout = "wide",
  className,
  ...rest
}: AuthoringStepperProps) {
  const classes = [styles.root, layout === "compact" ? styles.compact : undefined, className].filter(Boolean).join(" ");
  return (
    <nav className={classes} aria-label="Authoring steps" data-sds-authoring-stepper={layout} {...rest}>
      {steps.map((step, i) => {
        const n = i + 1;
        let state: StepperItemState = "upcoming";
        if (n < activeStep) state = "completed";
        if (n === activeStep) state = "current";
        return <StepperItem key={step.id} label={step.label} step={String(n)} state={state} />;
      })}
    </nav>
  );
}
