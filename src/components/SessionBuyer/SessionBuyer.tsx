import type { HTMLAttributes, ReactNode } from "react";
import { Avatar } from "../Avatar";
import styles from "./SessionBuyer.module.css";

export type SessionBuyerProps = {
  name: ReactNode;
  role?: ReactNode;
  initials?: string;
} & HTMLAttributes<HTMLElement>;

export function SessionBuyer({ name, role, initials = "SB", className, ...rest }: SessionBuyerProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-sds-session-buyer="" {...rest}>
      <Avatar initials={initials} size={36} />
      <div>
        <p className={styles.name}>{name}</p>
        {role ? <p className={styles.role}>{role}</p> : null}
      </div>
    </div>
  );
}
