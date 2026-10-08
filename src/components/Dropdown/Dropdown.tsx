import {
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import styles from "./Dropdown.module.css";

function MoreIcon() {
  return (
    <svg viewBox="0 0 18 18" width="18" height="18" fill="currentColor" aria-hidden>
      <circle cx="9" cy="4.5" r="1.25" />
      <circle cx="9" cy="9" r="1.25" />
      <circle cx="9" cy="13.5" r="1.25" />
    </svg>
  );
}

export type DropdownProps = {
  children: ReactNode;
  label?: string;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

export function Dropdown({
  children,
  label = "Open menu",
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  triggerProps,
}: DropdownProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultOpen);
  const open = openProp ?? uncontrolled;
  const setOpen = (next: boolean) => {
    if (openProp === undefined) setUncontrolled(next);
    onOpenChange?.(next);
  };
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = () => {
      if (openProp === undefined) setUncontrolled(false);
      onOpenChange?.(false);
    };
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, openProp, onOpenChange]);

  return (
    <div className={styles.root} ref={rootRef} data-sds-dropdown={open ? "open" : "closed"}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={label}
        onClick={() => setOpen(!open)}
        {...triggerProps}
      >
        <MoreIcon />
      </button>
      {open ? (
        <div id={menuId} className={styles.menu} role="menu">
          {children}
        </div>
      ) : null}
    </div>
  );
}
