import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./Link.module.css";

export type LinkProps = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({ children, className, ...rest }: LinkProps) {
  const classes = [styles.link, className].filter(Boolean).join(" ");
  return (
    <a className={classes} data-sds-link="" {...rest}>
      {children}
    </a>
  );
}
