import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Alert.module.css";

/** Maps to Figma Studio/Alert Tone. */
export type AlertTone = "ai" | "success" | "warning" | "error";

export type AlertProps = {
  title: ReactNode;
  description?: ReactNode;
  tone?: AlertTone;
  icon?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "title" | "children">;

const toneClass: Record<AlertTone, string> = {
  ai: styles.ai,
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
};

function DefaultIcon({ tone }: { tone: AlertTone }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    "aria-hidden": true as const,
    focusable: false as const,
  };

  if (tone === "ai") {
    return (
      <svg {...common} fill="currentColor">
        <path d="M9 1.5 10.2 6.3 15 7.5 10.2 8.7 9 13.5 7.8 8.7 3 7.5l4.8-1.2L9 1.5Z" />
        <circle cx="13.5" cy="3" r="1" />
        <circle cx="14.75" cy="5.25" r="0.75" />
      </svg>
    );
  }

  if (tone === "success") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="9" cy="9" r="6.25" />
        <path d="M6 9.1 8.1 11.2 12.2 6.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (tone === "warning") {
    return (
      <svg {...common} fill="currentColor">
        <path d="M9 2.2 15.5 14.2H2.5L9 2.2Z" opacity="0.15" />
        <path
          d="M9 6.2v4.2M9 12.3h.01"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M8.1 3.4 2.1 13.6a1 1 0 0 0 .88 1.5h12.04a1 1 0 0 0 .88-1.5L9.9 3.4a1 1 0 0 0-1.8 0Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="9" cy="9" r="6.25" />
      <path d="M9 5.8v4M9 12.2h.01" strokeLinecap="round" />
    </svg>
  );
}

export function Alert({
  title,
  description,
  tone = "ai",
  icon,
  className,
  ...rest
}: AlertProps) {
  const classes = [styles.alert, toneClass[tone], className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      role="status"
      data-sds-alert={tone}
      {...rest}
    >
      <span className={styles.icon} aria-hidden={icon ? undefined : true}>
        {icon ?? <DefaultIcon tone={tone} />}
      </span>
      <div className={styles.message}>
        <div className={styles.title}>{title}</div>
        {description ? (
          <div className={styles.description}>{description}</div>
        ) : null}
      </div>
    </div>
  );
}
