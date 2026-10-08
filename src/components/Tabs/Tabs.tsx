import {
  createContext,
  useContext,
  useId,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import styles from "./Tabs.module.css";

type TabsCtx = {
  value: string;
  setValue: (v: string) => void;
  baseId: string;
};

const Ctx = createContext<TabsCtx | null>(null);

export type TabsProps = {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
} & HTMLAttributes<HTMLDivElement>;

export function Tabs({
  children,
  value: valueProp,
  defaultValue = "",
  onValueChange,
  className,
  ...rest
}: TabsProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = valueProp ?? uncontrolled;
  const setValue = (next: string) => {
    if (valueProp === undefined) setUncontrolled(next);
    onValueChange?.(next);
  };
  const baseId = useId();
  const classes = [styles.list, className].filter(Boolean).join(" ");
  return (
    <Ctx.Provider value={{ value, setValue, baseId }}>
      <div role="tablist" className={classes} data-sds-tabs="" {...rest}>
        {children}
      </div>
    </Ctx.Provider>
  );
}

export type TabProps = {
  value: string;
  children: ReactNode;
  count?: ReactNode;
  showCount?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value" | "children">;

export function Tab({
  value,
  children,
  count,
  showCount = count != null,
  className,
  type = "button",
  ...rest
}: TabProps) {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("Tab must be used within Tabs");
  const selected = ctx.value === value;
  const classes = [styles.tab, className].filter(Boolean).join(" ");
  return (
    <button
      type={type}
      role="tab"
      id={`${ctx.baseId}-${value}`}
      className={classes}
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      onClick={(e) => {
        rest.onClick?.(e);
        ctx.setValue(value);
      }}
      data-sds-tab={selected ? "selected" : "idle"}
      {...rest}
    >
      <span>{children}</span>
      {showCount ? <span className={styles.count}>{count}</span> : null}
    </button>
  );
}
