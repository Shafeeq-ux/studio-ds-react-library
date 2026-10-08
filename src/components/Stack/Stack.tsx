import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import styles from "./Stack.module.css";
import type { SpaceToken } from "../../tokens";

export type StackProps = {
  children: ReactNode;
  as?: ElementType;
  direction?: "row" | "column";
  gap?: SpaceToken;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
  className?: string;
  style?: CSSProperties;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "style" | "className">;

const alignMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
} as const;

const justifyMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
} as const;

export function Stack({
  children,
  as: Component = "div",
  direction = "column",
  gap = 3,
  align = "stretch",
  justify = "start",
  wrap = false,
  className,
  style,
  ...rest
}: StackProps) {
  const classes = [styles.stack, className].filter(Boolean).join(" ");

  return (
    <Component
      className={classes}
      style={
        {
          ...style,
          "--sds-stack-direction": direction,
          "--sds-stack-gap": `var(--sds-space-${gap})`,
          "--sds-stack-align": alignMap[align],
          "--sds-stack-justify": justifyMap[justify],
          "--sds-stack-wrap": wrap ? "wrap" : "nowrap",
        } as CSSProperties
      }
      data-sds-stack=""
      {...rest}
    >
      {children}
    </Component>
  );
}
