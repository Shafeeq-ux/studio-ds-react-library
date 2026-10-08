import type { Meta, StoryObj } from "@storybook/react";
import { SelectOption } from "./SelectOption";
import { Stack } from "../Stack";

const meta = {
  title: "Components/SelectOption",
  component: SelectOption,
  tags: ["autodocs"],
  args: { children: "Mindtickle AI Revenue Platform" },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Select option` Selected True/False list row.",
      },
    },
  },
} satisfies Meta<typeof SelectOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };
export const List: Story = {
  render: () => (
    <Stack gap={0} style={{ maxWidth: "28rem", border: "1px solid var(--sds-color-border-default)", borderRadius: 8, padding: 8 }}>
      <SelectOption selected>Mindtickle AI Revenue Platform</SelectOption>
      <SelectOption>Enablement Cloud</SelectOption>
      <SelectOption>Sales Readiness Suite</SelectOption>
    </Stack>
  ),
};
