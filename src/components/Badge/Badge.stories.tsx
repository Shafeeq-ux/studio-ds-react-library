import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "All systems operational",
    tone: "positive",
    withDot: true,
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["positive", "neutral", "informative"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Badge` tones: Positive, Neutral, Informative.",
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {};

export const Neutral: Story = {
  args: { tone: "neutral", children: "Draft", withDot: false },
};

export const Informative: Story = {
  args: { tone: "informative", children: "AI assisted", withDot: true },
};

export const AllTones: Story = {
  render: () => (
    <Stack gap={8} direction="row" wrap>
      <Badge tone="positive" withDot>
        All systems operational
      </Badge>
      <Badge tone="neutral">Draft</Badge>
      <Badge tone="informative" withDot>
        In review
      </Badge>
    </Stack>
  ),
};
