import type { HTMLAttributes, ReactNode } from "react";
import styles from "./BuyerIdentity.module.css";
export type BuyerIdentityProps = { name: ReactNode; role?: ReactNode; context?: ReactNode } & HTMLAttributes<HTMLElement>;
export function BuyerIdentity({ name, role, context, className, ...rest }: BuyerIdentityProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")} data-sds-buyer-identity="" {...rest}>
      <p className={styles.name}>{name}</p>
      {role ? <p className={styles.role}>{role}</p> : null}
      {context ? <p className={styles.context}>{context}</p> : null}
    </div>
  );
}
