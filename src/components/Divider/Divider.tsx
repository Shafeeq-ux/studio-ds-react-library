import type { HTMLAttributes } from "react";
import styles from "./Divider.module.css";

export type DividerOrientation = "horizontal" | "vertical";

export type DividerProps = {
  orientation?: DividerOrientation;
} & HTMLAttributes<HTMLHRElement>;

export function Divider({
  orientation = "horizontal",
  className,
  ...rest
}: DividerProps) {
  const classes = [
    styles.root,
    orientation === "vertical" ? styles.vertical : styles.horizontal,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <hr
      className={classes}
      data-sds-divider={orientation}
      aria-orientation={orientation}
      {...rest}
    />
  );
}
