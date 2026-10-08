import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./Search";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Search",
  component: Search,
  tags: ["autodocs"],
  args: {
    placeholder: "Search role plays",
  },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Search` Default / Focus / Typing / Disabled field.",
      },
    },
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Filled: Story = { args: { defaultValue: "Enterprise AI" } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "Locked query" } };
export const States: Story = {
  render: () => (
    <Stack gap={16} style={{ maxWidth: "28rem" }}>
      <Search placeholder="Search role plays" />
      <Search defaultValue="Objection handling" />
      <Search disabled placeholder="Disabled" />
    </Stack>
  ),
};
