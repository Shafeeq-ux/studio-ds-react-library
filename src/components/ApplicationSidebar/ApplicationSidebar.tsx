import type { HTMLAttributes, ReactNode } from "react";
import styles from "./ApplicationSidebar.module.css";

export type ApplicationSidebarProps = {
  wordmark?: ReactNode;
  workspace?: ReactNode;
  workspaceNote?: ReactNode;
  identity?: ReactNode;
  identityMeta?: ReactNode;
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function ApplicationSidebar({
  wordmark = "Studio",
  workspace,
  workspaceNote,
  identity,
  identityMeta,
  children,
  className,
  ...rest
}: ApplicationSidebarProps) {
  const classes = [styles.root, className].filter(Boolean).join(" ");
  return (
    <aside className={classes} data-sds-application-sidebar="" {...rest}>
      <div className={styles.brand}>
        <p className={styles.wordmark}>{wordmark}</p>
        {workspace ? <p className={styles.workspace}>{workspace}</p> : null}
        {workspaceNote ? <p className={styles.workspace}>{workspaceNote}</p> : null}
      </div>
      <nav className={styles.nav}>{children}</nav>
      {(identity || identityMeta) ? (
        <div className={styles.footer}>
          {identity ? <p className={styles.identity}>{identity}</p> : null}
          {identityMeta ? <p className={styles.identityMeta}>{identityMeta}</p> : null}
        </div>
      ) : null}
    </aside>
  );
}
