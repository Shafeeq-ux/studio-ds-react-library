import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Forms/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: {
    label: "Beginner",
    name: "difficulty",
    layout: "wide",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Radio option` Selected True/False, State Default/Disabled, Layout Wide/Compact.",
      },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: { defaultChecked: true, label: "Advanced" },
};

export const Compact: Story = {
  args: { layout: "compact", label: "Intermediate" },
};

export const Disabled: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const Group: Story = {
  render: () => (
    <Stack gap={8} direction="row">
      <Radio name="diff" label="Beginner" layout="compact" defaultChecked />
      <Radio name="diff" label="Intermediate" layout="compact" />
      <Radio name="diff" label="Advanced" layout="compact" />
    </Stack>
  ),
};
