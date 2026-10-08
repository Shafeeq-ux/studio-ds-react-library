import type { HTMLAttributes, ReactNode } from "react";
import { SessionBuyer } from "../SessionBuyer";
import styles from "./SessionBuyerHeader.module.css";

export type SessionBuyerHeaderProps = {
  name: ReactNode;
  role?: ReactNode;
  initials?: string;
  end?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function SessionBuyerHeader({ name, role, initials, end, className, ...rest }: SessionBuyerHeaderProps) {
  return (
    <header className={[styles.root, className].filter(Boolean).join(" ")} data-sds-session-buyer-header="" {...rest}>
      <SessionBuyer name={name} role={role} initials={initials} />
      <div className={styles.end}>{end}</div>
    </header>
  );
}
