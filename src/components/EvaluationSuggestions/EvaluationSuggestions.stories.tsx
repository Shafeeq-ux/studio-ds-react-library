import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvaluationSuggestions } from "./EvaluationSuggestions";
import { Button } from "../Button";

const meta = {
  title: "Components/EvaluationSuggestions",
  component: EvaluationSuggestions,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/AI/Evaluation suggestions`.",
      },
    },
  },
} satisfies Meta<typeof EvaluationSuggestions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Presentational content for Studio/AI/Evaluation suggestions.</p>,
    actions: <Button variant="secondary" size="sm">Action</Button>,
  },
};
