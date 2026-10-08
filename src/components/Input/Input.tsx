import {
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import styles from "./Input.module.css";

/** Maps to Figma Studio/Input State. */
export type InputState = "default" | "error";

export type InputProps = {
  label?: ReactNode;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  /** Visual error state (also set when `errorMessage` is provided). */
  state?: InputState;
  hideLabel?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export function Input({
  label,
  helperText,
  errorMessage,
  state = "default",
  hideLabel = false,
  id,
  className,
  disabled,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const resolvedState: InputState =
    errorMessage || state === "error" ? "error" : "default";
  const describedById =
    resolvedState === "error" && errorMessage
      ? `${inputId}-error`
      : helperText
        ? `${inputId}-helper`
        : undefined;

  const fieldClasses = [
    styles.field,
    resolvedState === "error" ? styles.error : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.root} data-sds-input={resolvedState}>
      {label && !hideLabel ? (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={fieldClasses}
        disabled={disabled}
        aria-invalid={resolvedState === "error" || undefined}
        aria-describedby={describedById}
        {...rest}
      />
      {resolvedState === "error" && errorMessage ? (
        <p id={`${inputId}-error`} className={styles.errorText} role="alert">
          {errorMessage}
        </p>
      ) : helperText ? (
        <p id={`${inputId}-helper`} className={styles.helper}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
