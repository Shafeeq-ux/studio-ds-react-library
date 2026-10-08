import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import { Switch } from "../Switch";
import styles from "./Toggle.module.css";

/**
 * Maps to Figma Studio/Toggle — labeled row with Switch.
 * Composes `Switch` for the control.
 */
export type ToggleProps = {
  label: ReactNode;
  description?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "children">;

export function Toggle({
  label,
  description,
  id,
  className,
  disabled,
  ...rest
}: ToggleProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const classes = [styles.root, className].filter(Boolean).join(" ");

  return (
    <div className={classes} data-sds-toggle="">
      <div className={styles.copy}>
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
      <Switch id={inputId} disabled={disabled} {...rest} />
    </div>
  );
}
