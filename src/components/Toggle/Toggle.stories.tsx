import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  args: {
    label: "Challenge weak answers",
    description: "Ask for evidence when claims are vague.",
    defaultChecked: true,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Toggle` — labeled row composing `Switch`.",
      },
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const On: Story = {};

export const Off: Story = {
  args: { defaultChecked: false },
};

export const WithoutDescription: Story = {
  args: { description: undefined, label: "Challenge weak answers" },
};

export const Pair: Story = {
  render: () => (
    <Stack gap={16}>
      <Toggle
        label="Challenge weak answers"
        description="Ask for evidence when claims are vague."
        defaultChecked
      />
      <Toggle
        label="Interrupt politely"
        description="Allow brief interruptions when the buyer stalls."
        defaultChecked={false}
      />
    </Stack>
  ),
};
