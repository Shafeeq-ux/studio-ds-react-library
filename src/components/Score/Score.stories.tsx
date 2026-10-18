import type { Meta, StoryObj } from "@storybook/react-vite";
import { Score } from "./Score";
const meta = {
  title: "Components/Data/Score",
  component: Score,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Score` Insufficient evidence empty state." } } },
} satisfies Meta<typeof Score>;
export default meta;
type Story = StoryObj<typeof meta>;
export const InsufficientEvidence: Story = {};
