import {
  useId,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import styles from "./Tooltip.module.css";

/** Maps to Figma Studio/Contextual tooltip Placement. */
export type TooltipPlacement = "above" | "below";

export type TooltipProps = {
  title?: ReactNode;
  body?: ReactNode;
  children: ReactNode;
  placement?: TooltipPlacement;
  defaultOpen?: boolean;
  open?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, "title" | "children">;

export function Tooltip({
  title,
  body,
  children,
  placement = "above",
  defaultOpen = false,
  open: openProp,
  className,
  ...rest
}: TooltipProps) {
  const [hover, setHover] = useState(defaultOpen);
  const open = openProp ?? hover;
  const tipId = useId();
  const classes = [styles.root, className].filter(Boolean).join(" ");
  const bubbleClass = [
    styles.bubble,
    placement === "below" ? styles.below : styles.above,
  ].join(" ");

  return (
    <div
      className={classes}
      data-sds-tooltip={placement}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      {...rest}
    >
      <span className={styles.trigger} aria-describedby={open ? tipId : undefined}>
        {children}
      </span>
      {open ? (
        <div id={tipId} role="tooltip" className={bubbleClass}>
          {title ? <p className={styles.title}>{title}</p> : null}
          {body ? <p className={styles.body}>{body}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
