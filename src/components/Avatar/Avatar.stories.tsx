import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    initials: "JL",
    size: 32,
  },
  argTypes: {
    size: {
      control: "select",
      options: [28, 32, 36, 48, 64],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Avatar` Content=Initials with sizes 28–64.",
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};

export const Sizes: Story = {
  render: () => (
    <Stack gap={16} direction="row" align="center">
      <Avatar initials="JL" size={28} />
      <Avatar initials="JL" size={32} />
      <Avatar initials="JL" size={36} />
      <Avatar initials="AR" size={48} />
      <Avatar initials="AR" size={64} />
    </Stack>
  ),
};
