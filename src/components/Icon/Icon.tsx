import type { HTMLAttributes } from "react";
import { iconGlyphs, type IconGlyph } from "./glyphs";
import styles from "./Icon.module.css";

/** Maps to Figma Studio/Icon Size. */
export type IconSize = 14 | 16 | 18 | 28;

export type IconProps = {
  glyph: IconGlyph;
  size?: IconSize;
  title?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

const sizePx: Record<IconSize, string> = {
  14: "0.875rem",
  16: "1rem",
  18: "1.125rem",
  28: "1.75rem",
};

export function Icon({ glyph, size = 18, title, className, style, ...rest }: IconProps) {
  const d = iconGlyphs[glyph];
  const classes = [styles.icon, className].filter(Boolean).join(" ");
  return (
    <span
      className={classes}
      style={{ width: sizePx[size], height: sizePx[size], ...style }}
      data-sds-icon={glyph}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={d} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export type { IconGlyph };
