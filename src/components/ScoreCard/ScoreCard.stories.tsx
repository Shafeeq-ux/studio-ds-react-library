import type { Meta, StoryObj } from "@storybook/react";
import { ScoreCard } from "./ScoreCard";
const meta = {
  title: "Components/ScoreCard",
  component: ScoreCard,
  tags: ["autodocs"],
  args: {
    detail: "Handled price objections with clear ROI evidence and stayed aligned to the buyer’s evaluation criteria.",
  },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Score card` Strong performance." } } },
} satisfies Meta<typeof ScoreCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Strong: Story = {};
export const NeedsWork: Story = {
  args: { score: "54", summary: "Needs improvement", detail: "Missed discovery questions and skipped quantifying business impact." },
};
