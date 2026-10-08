import type { Meta, StoryObj } from "@storybook/react";
import { ConversationTimeline } from "./ConversationTimeline";
import { Button } from "../Button";

const meta = {
  title: "Components/ConversationTimeline",
  component: ConversationTimeline,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Role play/Conversation timeline`.",
      },
    },
  },
} satisfies Meta<typeof ConversationTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Presentational content for Studio/Role play/Conversation timeline.</p>,
    actions: <Button variant="secondary" size="sm">Action</Button>,
  },
};
