import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionTopSkillGaps } from "./SectionTopSkillGaps";

const meta = {
  title: "Components/SectionTopSkillGaps",
  component: SectionTopSkillGaps,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Top skill gaps`.",
      },
    },
  },
} satisfies Meta<typeof SectionTopSkillGaps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Top skill gaps.</p>,
  },
};
