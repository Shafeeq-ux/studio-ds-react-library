import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    title: "Challenge weak answers",
    body: "Ask for evidence when claims are vague or incomplete.",
    placement: "above",
    open: true,
    children: <Button variant="secondary">Hover me</Button>,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Contextual tooltip` Placement Above/Below using overlay/tooltip tokens.",
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Above: Story = {};
export const Below: Story = { args: { placement: "below" } };
export const Interactive: Story = {
  args: { open: undefined, defaultOpen: false },
  render: (args) => (
    <Stack gap={64} align="center" style={{ padding: "4rem 0" }}>
      <Tooltip {...args} />
    </Stack>
  ),
};
