import type { Meta, StoryObj } from "@storybook/react-vite";
import { GenerationProgress } from "./GenerationProgress";
import { Button } from "../Button";

const meta = {
  title: "Components/GenerationProgress",
  component: GenerationProgress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/AI/Generating a realistic role play`.",
      },
    },
  },
} satisfies Meta<typeof GenerationProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Presentational content for Studio/AI/Generating a realistic role play.</p>,
    actions: <Button variant="secondary" size="sm">Action</Button>,
  },
};
