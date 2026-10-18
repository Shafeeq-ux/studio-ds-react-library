import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionConversation } from "./SectionConversation";

const meta = {
  title: "Components/Sections/SectionConversation",
  component: SectionConversation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Conversation`.",
      },
    },
  },
} satisfies Meta<typeof SectionConversation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Conversation.</p>,
  },
};
