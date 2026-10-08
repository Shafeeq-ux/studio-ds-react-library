import type { Meta, StoryObj } from "@storybook/react-vite";
import { RolePlayTable } from "./RolePlayTable";
import { TableHeader } from "../TableHeader";
import { TableColumnHeading } from "../TableColumnHeading";
import { RolePlayRow } from "../RolePlayRow";
import { Badge } from "../Badge";
import { Pagination } from "../Pagination";
const cols = "2fr 1.2fr 1fr 1fr 0.8fr 1fr";
const meta = {
  title: "Components/RolePlayTable",
  component: RolePlayTable,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Data/Role play table`." } } },
} satisfies Meta<typeof RolePlayTable>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => (
    <RolePlayTable
      header={
        <TableHeader columns={cols}>
          <TableColumnHeading sortable>Role play</TableColumnHeading>
          <TableColumnHeading>Buyer</TableColumnHeading>
          <TableColumnHeading>Difficulty</TableColumnHeading>
          <TableColumnHeading>Status</TableColumnHeading>
          <TableColumnHeading sortable>Score</TableColumnHeading>
          <TableColumnHeading sortable>Updated</TableColumnHeading>
        </TableHeader>
      }
      footer={<Pagination label="1–5 of 128" />}
    >
      <RolePlayRow columns={cols} title="Enterprise AI Objection Handling" metadata="Value selling · 12 min" buyer="Sarah Mitchell" difficulty="Advanced" status={<Badge tone="positive">Published</Badge>} score="78" updated="2d ago" />
      <RolePlayRow columns={cols} title="Discovery Call Simulation" metadata="Discovery · 8 min" buyer="Alex Rivera" difficulty="Beginner" status={<Badge tone="neutral">Draft</Badge>} score="—" updated="5h ago" />
    </RolePlayTable>
  ),
};
