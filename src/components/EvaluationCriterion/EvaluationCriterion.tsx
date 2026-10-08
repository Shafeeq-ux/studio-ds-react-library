import type { HTMLAttributes, ReactNode } from "react";
import { Icon } from "../Icon";
import styles from "./EvaluationCriterion.module.css";
export type EvaluationCriterionProps = {
  criterion: ReactNode; description?: ReactNode; icon?: ReactNode;
} & HTMLAttributes<HTMLElement>;
export function EvaluationCriterion({ criterion, description, icon, className, ...rest }: EvaluationCriterionProps) {
  return (
    <article className={[styles.root, className].filter(Boolean).join(" ")} data-sds-evaluation-criterion="" {...rest}>
      <span className={styles.icon}>{icon ?? <Icon glyph="target" />}</span>
      <div className={styles.copy}>
        <p className={styles.criterion}>{criterion}</p>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
    </article>
  );
}
