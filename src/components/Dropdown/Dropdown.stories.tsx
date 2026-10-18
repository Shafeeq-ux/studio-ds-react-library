import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from "./Dropdown";
import { MenuItem } from "../MenuItem";

const meta = {
  title: "Components/Core/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Dropdown` Open menu surface composed with `Studio/Menu item` rows.",
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    defaultOpen: true,
    children: (
      <>
        <MenuItem>Edit role play</MenuItem>
        <MenuItem>Duplicate</MenuItem>
        <MenuItem>View performance</MenuItem>
        <MenuItem>Archive</MenuItem>
      </>
    ),
  },
};

export const Closed: Story = {
  args: {
    children: (
      <>
        <MenuItem>Edit role play</MenuItem>
        <MenuItem>Duplicate</MenuItem>
      </>
    ),
  },
};
