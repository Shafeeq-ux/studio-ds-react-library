import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionConversationSettings } from "./SectionConversationSettings";

const meta = {
  title: "Components/SectionConversationSettings",
  component: SectionConversationSettings,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Conversation settings`.",
      },
    },
  },
} satisfies Meta<typeof SectionConversationSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Conversation settings.</p>,
  },
};
