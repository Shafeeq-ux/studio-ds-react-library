import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Core/Text",
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
      options: [
        "display",
        "pageTitle",
        "heading",
        "subheading",
        "body",
        "label",
        "caption",
      ],
    },
    tone: {
      control: "select",
      options: ["default", "secondary", "tertiary"],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {
    children:
      "Body text (14 / Inter) is the default reading voice for Studio interfaces.",
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
    <Stack gap={16}>
      <Text variant="display">Display — 32</Text>
      <Text variant="pageTitle">Page title — 28</Text>
      <Text variant="heading">Heading — 20</Text>
      <Text variant="subheading">Subheading — 18</Text>
      <Text variant="body">Body — 14 · Primary reading on neutral surfaces.</Text>
      <Text variant="label">Label — 13</Text>
      <Text variant="caption">Caption — 12</Text>
      <Text variant="body" tone="secondary">
        Secondary tone — supporting information.
      </Text>
      <Text variant="body" tone="tertiary">
        Tertiary tone — low-emphasis metadata.
      </Text>
    </Stack>
  ),
};
