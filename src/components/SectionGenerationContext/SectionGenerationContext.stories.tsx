import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionGenerationContext } from "./SectionGenerationContext";

const meta = {
  title: "Components/Sections/SectionGenerationContext",
  component: SectionGenerationContext,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Generation context`.",
      },
    },
  },
} satisfies Meta<typeof SectionGenerationContext>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Generation context.</p>,
  },
};
