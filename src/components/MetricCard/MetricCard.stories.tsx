import type { Meta, StoryObj } from "@storybook/react";
import { MetricCard } from "./MetricCard";
import { Stack } from "../Stack";

const meta = {
  title: "Components/MetricCard",
  component: MetricCard,
  tags: ["autodocs"],
  args: {
    label: "Average score",
    value: "78",
    trend: "+4 pts vs last month",
  },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Metric card` label / value / trend surface.",
      },
    },
  },
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Negative: Story = {
  args: { trend: "-2 pts vs last month", trendTone: "negative", value: "61" },
};
export const Row: Story = {
  render: () => (
    <Stack gap={16} direction="row" style={{ flexWrap: "wrap" }}>
      <MetricCard label="Average score" value="78" trend="+4 pts" style={{ maxWidth: 220 }} />
      <MetricCard label="Completion" value="86%" trend="+2%" style={{ maxWidth: 220 }} />
      <MetricCard label="Attempts" value="412" trend="Steady" trendTone="neutral" style={{ maxWidth: 220 }} />
    </Stack>
  ),
};
