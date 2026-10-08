import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import styles from "./EvaluationSuggestions.module.css";

export type EvaluationSuggestionsProps = {
  title?: ReactNode;
  description?: ReactNode;
  showHeader?: boolean;
  children?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function EvaluationSuggestions({
  title = "Evaluation Suggestions",
  description,
  showHeader = true,
  children,
  actions,
  className,
  ...rest
}: EvaluationSuggestionsProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-evaluation-suggestions="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={description} /> : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
