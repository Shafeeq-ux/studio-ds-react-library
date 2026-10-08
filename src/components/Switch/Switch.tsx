import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Switch.module.css";

export type SwitchProps = {
  label?: ReactNode;
  /** When set without `label`, still provides an accessible name. */
  "aria-label"?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "children">;

export function Switch({
  label,
  className,
  id,
  disabled,
  checked,
  defaultChecked,
  "aria-label": ariaLabel,
  ...rest
}: SwitchProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const classes = [styles.root, className].filter(Boolean).join(" ");

  const control = (
    <span className={styles.control}>
      <input
        id={inputId}
        type="checkbox"
        role="switch"
        className={styles.input}
        disabled={disabled}
        checked={checked}
        defaultChecked={defaultChecked}
        aria-label={label ? undefined : ariaLabel}
        {...rest}
      />
      <span className={styles.track} aria-hidden>
        <span className={styles.thumb} />
      </span>
    </span>
  );

  if (!label) {
    return <span className={classes} data-sds-switch="">{control}</span>;
  }

  return (
    <label className={classes} data-sds-switch="" htmlFor={inputId}>
      <span className={styles.labelText}>{label}</span>
      {control}
    </label>
  );
}
