import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionConversationLength } from "./SectionConversationLength";

const meta = {
  title: "Components/Sections/SectionConversationLength",
  component: SectionConversationLength,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Conversation length`.",
      },
    },
  },
} satisfies Meta<typeof SectionConversationLength>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Conversation length.</p>,
  },
};
