import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./Progress";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: { value: 64 },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Progress` Determinate track (6px).",
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Determinate: Story = {};
export const Indeterminate: Story = { args: { value: undefined } };
export const Levels: Story = {
  render: () => (
    <Stack gap={12} style={{ maxWidth: "20rem" }}>
      <Progress value={12} />
      <Progress value={40} />
      <Progress value={72} />
      <Progress value={100} />
    </Stack>
  ),
};
