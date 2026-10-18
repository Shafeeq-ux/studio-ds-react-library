import type { Meta, StoryObj } from "@storybook/react-vite";
import { RolePlayRow } from "./RolePlayRow";
import { Badge } from "../Badge";
import { Dropdown } from "../Dropdown";
import { MenuItem } from "../MenuItem";
const meta = {
  title: "Components/Data/RolePlayRow",
  component: RolePlayRow,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Role play row`." } } },
} satisfies Meta<typeof RolePlayRow>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Enterprise AI Objection Handling",
    metadata: "Value selling · 12 min",
    buyer: "Sarah Mitchell · VP Enablement",
    difficulty: "Advanced",
    status: <Badge tone="positive">Published</Badge>,
    score: "78",
    updated: "2d ago",
    action: (
      <Dropdown defaultOpen={false}>
        <MenuItem>Edit role play</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuItem>Archive</MenuItem>
      </Dropdown>
    ),
  },
};
