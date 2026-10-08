import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Studio DS typography",
    variant: "body",
    tone: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "title", "body", "label", "caption"],
    },
    tone: {
      control: "select",
      options: ["default", "muted"],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {
    children:
      "Body text sets the reading voice for Studio interfaces — clear, calm, and slightly editorial.",
  },
};

export const Display: Story = {
  args: {
    variant: "display",
    children: "Studio DS",
  },
};

export const TypeScale: Story = {
  render: () => (
    <Stack gap={4}>
      <Text variant="display">Display — Studio DS</Text>
      <Text variant="title">Title — Foundations</Text>
      <Text variant="body">
        Body — Use for paragraphs, descriptions, and most interface copy.
      </Text>
      <Text variant="label">Label — Field and control labels</Text>
      <Text variant="caption">Caption — Hints, metadata, and quiet asides</Text>
      <Text variant="body" tone="muted">
        Muted body — secondary supporting copy.
      </Text>
    </Stack>
  ),
};
