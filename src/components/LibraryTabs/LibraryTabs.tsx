import type { ComponentProps } from "react";
import { Tabs, Tab } from "../Tabs";

export type LibraryTabItem = { value: string; label: string; count?: number };

export type LibraryTabsProps = {
  items: LibraryTabItem[];
} & Omit<ComponentProps<typeof Tabs>, "children">;

export function LibraryTabs({ items, ...rest }: LibraryTabsProps) {
  return (
    <Tabs data-sds-library-tabs="" {...rest}>
      {items.map((item) => (
        <Tab key={item.value} value={item.value} count={item.count} showCount={item.count != null}>
          {item.label}
        </Tab>
      ))}
    </Tabs>
  );
}
