import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionAIBehavior } from "./SectionAIBehavior";

const meta = {
  title: "Components/Sections/SectionAIBehavior",
  component: SectionAIBehavior,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/AI behavior`.",
      },
    },
  },
} satisfies Meta<typeof SectionAIBehavior>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/AI behavior.</p>,
  },
};
