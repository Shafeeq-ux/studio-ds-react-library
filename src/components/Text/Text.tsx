import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import styles from "./Text.module.css";

/** Maps to Studio · Typography roles used in product UI. */
export type TextVariant =
  | "display"
  | "pageTitle"
  | "heading"
  | "subheading"
  | "body"
  | "label"
  | "caption";

type TextOwnProps = {
  children: ReactNode;
  variant?: TextVariant;
  as?: ElementType;
  tone?: "default" | "secondary" | "tertiary";
  className?: string;
  style?: CSSProperties;
};

export type TextProps = TextOwnProps &
  Omit<HTMLAttributes<HTMLElement>, keyof TextOwnProps>;

const defaultElement: Record<TextVariant, ElementType> = {
  display: "h1",
  pageTitle: "h1",
  heading: "h2",
  subheading: "h3",
  body: "p",
  label: "span",
  caption: "span",
};

const variantClass: Record<TextVariant, string> = {
  display: styles.display,
  pageTitle: styles.pageTitle,
  heading: styles.heading,
  subheading: styles.subheading,
  body: styles.body,
  label: styles.label,
  caption: styles.caption,
};

const toneClass = {
  default: undefined,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
} as const;

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
    toneClass[tone],
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
