import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionVoice } from "./SectionVoice";

const meta = {
  title: "Components/SectionVoice",
  component: SectionVoice,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Voice`.",
      },
    },
  },
} satisfies Meta<typeof SectionVoice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Voice.</p>,
  },
};
