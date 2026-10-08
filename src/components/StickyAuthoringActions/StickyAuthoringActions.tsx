import type { HTMLAttributes, ReactNode } from "react";
import styles from "./StickyAuthoringActions.module.css";

export type StickyAuthoringActionsProps = { children?: ReactNode } & HTMLAttributes<HTMLElement>;

export function StickyAuthoringActions({ children, className, ...rest }: StickyAuthoringActionsProps) {
  const classes = [styles.root, className].filter(Boolean).join(" ");
  return (
    <footer className={classes} data-sds-sticky-authoring-actions="" {...rest}>
      {children}
    </footer>
  );
}
