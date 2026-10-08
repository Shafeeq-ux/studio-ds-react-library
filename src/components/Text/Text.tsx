import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import styles from "./Text.module.css";

export type TextVariant = "display" | "title" | "body" | "label" | "caption";

type TextOwnProps = {
  children: ReactNode;
  /** Typography style from the Studio DS type scale. */
  variant?: TextVariant;
  /** Semantic element to render. Defaults from the variant. */
  as?: ElementType;
  tone?: "default" | "muted";
  className?: string;
  style?: CSSProperties;
};

export type TextProps = TextOwnProps &
  Omit<HTMLAttributes<HTMLElement>, keyof TextOwnProps>;

const defaultElement: Record<TextVariant, ElementType> = {
  display: "h1",
  title: "h2",
  body: "p",
  label: "span",
  caption: "span",
};

const variantClass: Record<TextVariant, string> = {
  display: styles.display,
  title: styles.title,
  body: styles.body,
  label: styles.label,
  caption: styles.caption,
};

export function Text({
  children,
  variant = "body",
  as,
  tone = "default",
  className,
  style,
  ...rest
}: TextProps) {
  const Component = as ?? defaultElement[variant];
  const classes = [
    styles.text,
    variantClass[variant],
    tone === "muted" ? styles.muted : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} style={style} data-sds-text={variant} {...rest}>
      {children}
    </Component>
  );
}
