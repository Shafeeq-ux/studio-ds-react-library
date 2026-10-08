import type { Meta, StoryObj } from "@storybook/react";
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
    gap: 3,
    children: (
      <>
        <Text variant="title">Stack</Text>
        <Text tone="muted">
          A light layout primitive for composing Studio DS components with
          consistent gaps.
        </Text>
        <Button>Primary action</Button>
      </>
    ),
  },
};

export const Row: Story = {
  args: {
    direction: "row",
    gap: 2,
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
