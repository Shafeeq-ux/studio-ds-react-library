import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvaluationCriterion } from "./EvaluationCriterion";
const meta = {
  title: "Components/Role play/EvaluationCriterion",
  component: EvaluationCriterion,
  tags: ["autodocs"],
  args: { criterion: "Quantifies ROI", description: "Uses concrete metrics tied to the buyer’s stated outcomes." },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Evaluation criterion`." } } },
} satisfies Meta<typeof EvaluationCriterion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
