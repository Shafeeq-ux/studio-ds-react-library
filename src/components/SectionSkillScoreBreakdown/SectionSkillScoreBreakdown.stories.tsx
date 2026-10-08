import type { Meta, StoryObj } from "@storybook/react";
import { SectionSkillScoreBreakdown } from "./SectionSkillScoreBreakdown";

const meta = {
  title: "Components/SectionSkillScoreBreakdown",
  component: SectionSkillScoreBreakdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Skill score breakdown`.",
      },
    },
  },
} satisfies Meta<typeof SectionSkillScoreBreakdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Skill score breakdown.</p>,
  },
};
