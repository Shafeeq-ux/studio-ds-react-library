import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Radio.module.css";

/** Maps to Figma Studio/Radio option Layout. */
export type RadioLayout = "wide" | "compact";

export type RadioProps = {
  label: ReactNode;
  layout?: RadioLayout;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "children">;

export function Radio({
  label,
  layout = "wide",
  className,
  id,
  disabled,
  checked,
  defaultChecked,
  ...rest
}: RadioProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const selected =
    checked ?? (defaultChecked === undefined ? undefined : Boolean(defaultChecked));
  const classes = [
    styles.root,
    layout === "compact" ? styles.compact : styles.wide,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label
      className={classes}
      data-sds-radio={layout}
      data-selected={selected === undefined ? undefined : String(selected)}
      data-disabled={disabled ? "true" : undefined}
    >
      <input
        id={inputId}
        type="radio"
        className={styles.input}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        {...rest}
      />
      <span className={styles.control} aria-hidden>
        <span className={styles.dot} />
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  );
}
