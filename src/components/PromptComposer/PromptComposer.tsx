import type { HTMLAttributes, ReactNode } from "react";
import { PanelHeader } from "../PanelHeader";
import { Textarea } from "../Textarea";
import { Button } from "../Button";
import { Icon } from "../Icon";
import styles from "./PromptComposer.module.css";

export type PromptComposerProps = {
  title?: ReactNode;
  guidance?: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  showHeader?: boolean;
  primaryActionLabel?: string;
  onGenerate?: () => void;
  secondaryAction?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "defaultValue" | "onChange">;

export function PromptComposer({
  title = "Create with AI",
  guidance = "Describe the scenario you want to generate.",
  value,
  defaultValue,
  onValueChange,
  showHeader = true,
  primaryActionLabel = "Generate",
  onGenerate,
  secondaryAction,
  className,
  ...rest
}: PromptComposerProps) {
  return (
    <section className={[styles.root, className].filter(Boolean).join(" ")} data-sds-prompt-composer="" {...rest}>
      {showHeader ? <PanelHeader title={title} description={guidance} /> : null}
      <Textarea
        hideLabel
        aria-label="Prompt"
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onValueChange?.(e.target.value)}
        placeholder="A VP evaluating pricing for a 200-seat rollout…"
      />
      <div className={styles.actions}>
        {secondaryAction}
        <Button onClick={onGenerate}>
          <Icon glyph="sparkles" size={16} /> {primaryActionLabel}
        </Button>
      </div>
    </section>
  );
}
