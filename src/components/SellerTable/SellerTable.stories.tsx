import type { Meta, StoryObj } from "@storybook/react";
import { SellerTable } from "./SellerTable";
import { TableHeader } from "../TableHeader";
import { TableColumnHeading } from "../TableColumnHeading";
import { SellerRow } from "../SellerRow";
import { Avatar } from "../Avatar";
const cols = "2fr 1fr 1fr 1fr";
const meta = {
  title: "Components/SellerTable",
  component: SellerTable,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Data/Seller table`." } } },
} satisfies Meta<typeof SellerTable>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => (
    <SellerTable
      header={
        <TableHeader columns={cols}>
          <TableColumnHeading sortable>Seller</TableColumnHeading>
          <TableColumnHeading sortable>Score</TableColumnHeading>
          <TableColumnHeading>Attempts</TableColumnHeading>
          <TableColumnHeading sortable>Trend</TableColumnHeading>
        </TableHeader>
      }
    >
      <SellerRow columns={cols} name="Sam Chen" avatar={<Avatar initials="SC" size={32} />} score="84" attempts="12" trend="+6" />
      <SellerRow columns={cols} name="Ava Jones" avatar={<Avatar initials="AJ" size={32} />} score="71" attempts="8" trend="-2" trendTone="negative" />
    </SellerTable>
  ),
};
