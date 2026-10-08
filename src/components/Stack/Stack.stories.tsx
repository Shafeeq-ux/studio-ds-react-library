import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "./Stack";
import { Button } from "../Button";
import { Text } from "../Text";

const meta = {
  title: "Components/Stack",
  component: Stack,
  tags: ["autodocs"],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Column: Story = {
  args: {
    gap: 16,
    children: (
      <>
        <Text variant="heading">Stack</Text>
        <Text tone="secondary">
          Layout primitive using Studio spacing tokens (4–64).
        </Text>
        <Button>Primary action</Button>
      </>
    ),
  },
};

export const Row: Story = {
  args: {
    direction: "row",
    gap: 8,
    align: "center",
    children: (
      <>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="ghost">Reset</Button>
      </>
    ),
  },
};
