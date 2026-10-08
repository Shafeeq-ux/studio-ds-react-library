import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./NavigationItem.module.css";

type Shared = {
  children: ReactNode;
  icon?: ReactNode;
  selected?: boolean;
  showIcon?: boolean;
};

export type NavigationItemButtonProps = Shared &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type NavigationItemLinkProps = Shared &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type NavigationItemProps = NavigationItemButtonProps | NavigationItemLinkProps;

export function NavigationItem(props: NavigationItemProps) {
  const {
    children,
    icon,
    selected = false,
    showIcon = Boolean(icon),
    className,
    ...rest
  } = props;
  const classes = [styles.item, className].filter(Boolean).join(" ");
  const content = (
    <>
      {showIcon && icon ? <span className={styles.icon}>{icon}</span> : null}
      <span className={styles.label}>{children}</span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        href={href}
        className={classes}
        data-sds-nav-item=""
        data-selected={selected ? "true" : "false"}
        aria-current={selected ? "page" : undefined}
        {...anchorRest}
      >
        {content}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={buttonRest.type ?? "button"}
      className={classes}
      data-sds-nav-item=""
      data-selected={selected ? "true" : "false"}
      aria-current={selected ? "page" : undefined}
      {...buttonRest}
    >
      {content}
    </button>
  );
}
