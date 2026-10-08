import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "./MenuItem";
import { Stack } from "../Stack";

const Pencil = () => (
  <svg viewBox="0 0 18 18" width="18" height="18" fill="none" aria-hidden>
    <path d="M3 12.5 11.5 4l2.5 2.5L5.5 15H3v-2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

const meta = {
  title: "Components/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  args: { children: "Edit role play", icon: <Pencil /> },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Menu item` Compact list action row.",
      },
    },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithoutIcon: Story = { args: { icon: undefined, children: "Duplicate" } };
export const Disabled: Story = { args: { disabled: true } };
export const List: Story = {
  render: () => (
    <Stack gap={4} style={{ width: 196 }}>
      <MenuItem icon={<Pencil />}>Edit role play</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuItem>View performance</MenuItem>
      <MenuItem>Archive</MenuItem>
    </Stack>
  ),
};
