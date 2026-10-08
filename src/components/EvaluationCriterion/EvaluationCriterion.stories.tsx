import type { Meta, StoryObj } from "@storybook/react";
import { EvaluationCriterion } from "./EvaluationCriterion";
const meta = {
  title: "Components/EvaluationCriterion",
  component: EvaluationCriterion,
  tags: ["autodocs"],
  args: { criterion: "Quantifies ROI", description: "Uses concrete metrics tied to the buyer’s stated outcomes." },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Evaluation criterion`." } } },
} satisfies Meta<typeof EvaluationCriterion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
