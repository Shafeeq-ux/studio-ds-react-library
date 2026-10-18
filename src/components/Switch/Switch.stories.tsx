import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    "aria-label": "Enable notifications",
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Switch` Value On/Off and State Default/Disabled.",
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const On: Story = {
  args: { defaultChecked: true },
};

export const Off: Story = {
  args: { defaultChecked: false },
};

export const WithLabel: Story = {
  args: {
    label: "Email digests",
    defaultChecked: true,
  },
};
export const Disabled: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const States: Story = {
  render: () => (
    <Stack gap={16}>
      <Switch aria-label="On" defaultChecked />
      <Switch aria-label="Off" defaultChecked={false} />
      <Switch aria-label="Disabled on" defaultChecked disabled />
      <Switch aria-label="Disabled off" defaultChecked={false} disabled />
    </Stack>
  ),
};
