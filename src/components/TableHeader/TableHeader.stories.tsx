import type { Meta, StoryObj } from "@storybook/react";
import { TableHeader } from "./TableHeader";
import { TableColumnHeading } from "../TableColumnHeading";
const meta = {
  title: "Components/TableHeader",
  component: TableHeader,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Table header`." } } },
} satisfies Meta<typeof TableHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const RolePlay: Story = {
  args: {
    columns: "2fr 1.2fr 1fr 1fr 0.8fr 1fr 44px",
    children: (
      <>
        <TableColumnHeading sortable>Role play</TableColumnHeading>
        <TableColumnHeading>Buyer</TableColumnHeading>
        <TableColumnHeading>Difficulty</TableColumnHeading>
        <TableColumnHeading>Status</TableColumnHeading>
        <TableColumnHeading sortable>Score</TableColumnHeading>
        <TableColumnHeading sortable>Updated</TableColumnHeading>
        <TableColumnHeading> </TableColumnHeading>
      </>
    ),
  },
};
