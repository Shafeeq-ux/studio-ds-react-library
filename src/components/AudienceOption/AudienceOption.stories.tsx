import type { Meta, StoryObj } from "@storybook/react";
import { AudienceOption } from "./AudienceOption";
import { Stack } from "../Stack";
const meta = {
  title: "Components/AudienceOption",
  component: AudienceOption,
  tags: ["autodocs"],
  args: { children: "Enterprise AEs · Mid-market" },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Audience option` Selected True/False." } } },
} satisfies Meta<typeof AudienceOption>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };
export const Group: Story = {
  render: () => (
    <Stack gap={8} style={{ maxWidth: 320 }}>
      <AudienceOption selected>Enterprise AEs</AudienceOption>
      <AudienceOption>New hires</AudienceOption>
      <AudienceOption>Managers</AudienceOption>
    </Stack>
  ),
};
