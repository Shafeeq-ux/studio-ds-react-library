import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./MenuItem.module.css";

export type MenuItemProps = {
  children: ReactNode;
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function MenuItem({ children, icon, className, type = "button", ...rest }: MenuItemProps) {
  const classes = [styles.item, className].filter(Boolean).join(" ");
  return (
    <button type={type} className={classes} role="menuitem" data-sds-menu-item="" {...rest}>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <span className={styles.label}>{children}</span>
    </button>
  );
}
