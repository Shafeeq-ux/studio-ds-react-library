import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionScoreDistribution } from "./SectionScoreDistribution";

const meta = {
  title: "Components/SectionScoreDistribution",
  component: SectionScoreDistribution,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Score distribution`.",
      },
    },
  },
} satisfies Meta<typeof SectionScoreDistribution>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Score distribution.</p>,
  },
};
