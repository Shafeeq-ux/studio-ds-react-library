import {
  useId,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import styles from "./Select.module.css";

export type SelectOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

export type SelectProps = {
  label?: ReactNode;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  options: SelectOption[];
  hideLabel?: boolean;
  placeholder?: string;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "children" | "size">;

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden focusable="false">
      <path
        d="M4.2 6.2 8 10l3.8-3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Select({
  label,
  helperText,
  errorMessage,
  options,
  hideLabel = false,
  placeholder,
  id,
  className,
  disabled,
  ...rest
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const hasError = Boolean(errorMessage);
  const describedById = hasError
    ? `${selectId}-error`
    : helperText
      ? `${selectId}-helper`
      : undefined;

  const controlClasses = [
    styles.control,
    hasError ? styles.error : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.root} data-sds-select={hasError ? "error" : "default"}>
      {label && !hideLabel ? (
        <label className={styles.label} htmlFor={selectId}>
          {label}
        </label>
      ) : null}
      <div className={controlClasses}>
        <select
          id={selectId}
          className={styles.select}
          disabled={disabled}
          aria-invalid={hasError || undefined}
          aria-describedby={describedById}
          {...rest}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        <span className={styles.chevron} aria-hidden>
          <ChevronIcon />
        </span>
      </div>
      {hasError ? (
        <p id={`${selectId}-error`} className={styles.errorText} role="alert">
          {errorMessage}
        </p>
      ) : helperText ? (
        <p id={`${selectId}-helper`} className={styles.helper}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
