import type { HTMLAttributes, ReactNode } from "react";

export type RolePlayTableProps = {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function RolePlayTable({ header, children, footer, className, ...rest }: RolePlayTableProps) {
  return (
    <div className={className} role="table" data-sds-role-play-table="" {...rest}>
      {header}
      <div role="rowgroup">{children}</div>
      {footer}
    </div>
  );
}
