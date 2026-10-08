import {
  useId,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";
import styles from "./Textarea.module.css";

export type TextareaProps = {
  label?: ReactNode;
  helperText?: ReactNode;
  hideLabel?: boolean;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "children">;

export function Textarea({
  label,
  helperText,
  hideLabel = false,
  id,
  className,
  disabled,
  rows = 4,
  ...rest
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const helperId = helperText ? `${textareaId}-helper` : undefined;
  const fieldClasses = [styles.field, className].filter(Boolean).join(" ");

  return (
    <div className={styles.root} data-sds-textarea="">
      {label && !hideLabel ? (
        <label className={styles.label} htmlFor={textareaId}>
          {label}
        </label>
      ) : null}
      <textarea
        id={textareaId}
        className={fieldClasses}
        disabled={disabled}
        rows={rows}
        aria-describedby={helperId}
        {...rest}
      />
      {helperText ? (
        <p id={helperId} className={styles.helper}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
