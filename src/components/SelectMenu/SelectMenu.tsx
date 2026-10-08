import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { SelectOption } from "../SelectOption";
import { Icon } from "../Icon";
import styles from "./SelectMenu.module.css";

export type SelectMenuOption = { value: string; label: ReactNode; disabled?: boolean };

export type SelectMenuProps = {
  label?: ReactNode;
  options: SelectMenuOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  /** Figma Select states beyond Default/Focus/Error */
  listState?: "ready" | "loading" | "empty" | "error";
  emptyMessage?: ReactNode;
  loadingMessage?: ReactNode;
  errorMessage?: ReactNode;
};

export function SelectMenu({
  label,
  options,
  value: valueProp,
  defaultValue = "",
  onValueChange,
  placeholder = "Select…",
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  disabled,
  listState = "ready",
  emptyMessage = "No matches",
  loadingMessage = "Loading…",
  errorMessage = "Couldn’t load options. Retry.",
}: SelectMenuProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const value = valueProp ?? uncontrolled;
  const open = openProp ?? uncontrolledOpen;
  const setOpen = (next: boolean) => {
    if (openProp === undefined) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };
  const setValue = (next: string) => {
    if (valueProp === undefined) setUncontrolled(next);
    onValueChange?.(next);
  };
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        if (openProp === undefined) setUncontrolledOpen(false);
        onOpenChange?.(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open, openProp, onOpenChange]);

  return (
    <div className={styles.root} ref={rootRef} data-sds-select-menu={listState}>
      {label ? <div style={{ marginBottom: 8, fontWeight: 600, fontSize: "0.8125rem" }}>{label}</div> : null}
      <button
        type="button"
        className={styles.trigger}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        onClick={() => setOpen(!open)}
      >
        <span className={selected ? undefined : styles.placeholder}>{selected ? selected.label : placeholder}</span>
        <Icon glyph="chevron-down" size={16} />
      </button>
      {open ? (
        <div id={listId} className={styles.panel} role="listbox">
          {listState === "loading" ? <div className={styles.loading}>{loadingMessage}</div> : null}
          {listState === "empty" ? <div className={styles.empty}>{emptyMessage}</div> : null}
          {listState === "error" ? <div className={styles.error}>{errorMessage}</div> : null}
          {listState === "ready"
            ? options.map((opt) => (
                <SelectOption
                  key={opt.value}
                  selected={opt.value === value}
                  disabled={opt.disabled}
                  onClick={() => {
                    setValue(opt.value);
                    setOpen(false);
                  }}
                >
                  {opt.label}
                </SelectOption>
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
}
