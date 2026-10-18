import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionEvaluationCriteria } from "./SectionEvaluationCriteria";

const meta = {
  title: "Components/Sections/SectionEvaluationCriteria",
  component: SectionEvaluationCriteria,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Evaluation criteria`.",
      },
    },
  },
} satisfies Meta<typeof SectionEvaluationCriteria>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Evaluation criteria.</p>,
  },
};
