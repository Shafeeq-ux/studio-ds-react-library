import {
  useId,
  type ChangeEvent,
  type InputHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import styles from "./NumberInput.module.css";

export type NumberInputProps = {
  label?: ReactNode;
  hideLabel?: boolean;
  onValueChange?: (value: number | null) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size">;

export function NumberInput({
  label,
  hideLabel = true,
  className,
  id,
  disabled,
  value,
  defaultValue,
  min,
  max,
  step = 1,
  onChange,
  onValueChange,
  "aria-label": ariaLabel,
  ...rest
}: NumberInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const classes = [styles.root, className].filter(Boolean).join(" ");

  const parse = (raw: string | number | readonly string[] | undefined) => {
    if (raw === undefined || raw === "") return null;
    const n = typeof raw === "number" ? raw : Number(raw);
    return Number.isFinite(n) ? n : null;
  };

  const clamp = (n: number) => {
    let next = n;
    if (min !== undefined && next < Number(min)) next = Number(min);
    if (max !== undefined && next > Number(max)) next = Number(max);
    return next;
  };

  const emit = (next: number | null, el: HTMLInputElement) => {
    const display = next === null ? "" : String(next);
    el.value = display;
    onValueChange?.(next);
    onChange?.({
      target: el,
      currentTarget: el,
    } as ChangeEvent<HTMLInputElement>);
  };

  const bump = (dir: 1 | -1) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    if (!input || disabled) return;
    const base = parse(input.value) ?? 0;
    emit(clamp(base + dir * Number(step)), input);
  };

  return (
    <div className={classes} data-sds-number-input="" data-disabled={disabled ? "true" : undefined}>
      {label && !hideLabel ? (
        <label htmlFor={inputId} style={{ position: "absolute", width: 1, height: 1, overflow: "hidden" }}>
          {label}
        </label>
      ) : null}
      <button type="button" className={styles.step} aria-label="Decrease" disabled={disabled} onClick={bump(-1)}>
        −
      </button>
      <input
        id={inputId}
        type="number"
        className={styles.field}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        aria-label={ariaLabel ?? (typeof label === "string" ? label : "Number")}
        onChange={(e) => {
          onChange?.(e);
          onValueChange?.(parse(e.target.value));
        }}
        {...rest}
      />
      <button type="button" className={styles.step} aria-label="Increase" disabled={disabled} onClick={bump(1)}>
        +
      </button>
    </div>
  );
}
