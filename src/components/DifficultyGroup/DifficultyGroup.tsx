import type { HTMLAttributes } from "react";
import { Radio, type RadioLayout } from "../Radio";
import styles from "./DifficultyGroup.module.css";

export type DifficultyValue = "Beginner" | "Intermediate" | "Advanced";

export type DifficultyGroupProps = {
  value?: DifficultyValue;
  defaultValue?: DifficultyValue;
  onValueChange?: (value: DifficultyValue) => void;
  layout?: "wide" | "compact";
  name?: string;
  disabled?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">;

const OPTIONS: DifficultyValue[] = ["Beginner", "Intermediate", "Advanced"];

export function DifficultyGroup({
  value,
  defaultValue = "Beginner",
  onValueChange,
  layout = "wide",
  name = "difficulty",
  disabled,
  className,
  ...rest
}: DifficultyGroupProps) {
  const classes = [styles.root, layout === "compact" ? styles.compact : styles.wide, className].filter(Boolean).join(" ");
  const radioLayout: RadioLayout = layout === "compact" ? "compact" : "wide";
  return (
    <div className={classes} role="radiogroup" aria-label="Difficulty" data-sds-difficulty-group={layout} {...rest}>
      {OPTIONS.map((opt) => (
        <Radio
          key={opt}
          className={styles.option}
          name={name}
          label={opt}
          layout={radioLayout}
          disabled={disabled}
          checked={value !== undefined ? value === opt : undefined}
          defaultChecked={value === undefined ? defaultValue === opt : undefined}
          onChange={() => onValueChange?.(opt)}
        />
      ))}
    </div>
  );
}
