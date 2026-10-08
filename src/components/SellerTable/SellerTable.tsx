import type { HTMLAttributes, ReactNode } from "react";
export type SellerTableProps = { header?: ReactNode; children?: ReactNode } & HTMLAttributes<HTMLDivElement>;
export function SellerTable({ header, children, className, ...rest }: SellerTableProps) {
  return (
    <div className={className} role="table" data-sds-seller-table="" {...rest}>
      {header}
      <div role="rowgroup">{children}</div>
    </div>
  );
}
