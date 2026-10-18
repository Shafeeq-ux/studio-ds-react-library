import type { Meta, StoryObj } from "@storybook/react-vite";
import { NumberInput } from "./NumberInput";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Forms/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  args: { defaultValue: 3, min: 0, max: 20, "aria-label": "Weight" },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Number input` Compact stepper field (44×104).",
      },
    },
  },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const States: Story = {
  render: () => (
    <Stack gap={16} direction="row" align="center">
      <NumberInput defaultValue={1} aria-label="Weight 1" />
      <NumberInput defaultValue={5} aria-label="Weight 5" />
      <NumberInput defaultValue={0} disabled aria-label="Weight locked" />
    </Stack>
  ),
};
