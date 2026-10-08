import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableColumnHeading } from "./TableColumnHeading";
const meta = {
  title: "Components/TableColumnHeading",
  component: TableColumnHeading,
  tags: ["autodocs"],
  args: { children: "Average score", sortable: true },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Table column heading`." } } },
} satisfies Meta<typeof TableColumnHeading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Sortable: Story = {};
export const Static: Story = { args: { sortable: false, children: "Buyer" } };
