import type { Meta, StoryObj } from "@storybook/react";
import { ConversationBubble } from "./ConversationBubble";
import { Stack } from "../Stack";
const meta = {
  title: "Components/ConversationBubble",
  component: ConversationBubble,
  tags: ["autodocs"],
  args: { speaker: "You", timestamp: "0:42", message: "We typically see payback within two quarters when teams adopt the coaching loop." },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Conversation bubble`." } } },
} satisfies Meta<typeof ConversationBubble>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Seller: Story = {};
export const Buyer: Story = { args: { tone: "buyer", speaker: "Sarah Mitchell", message: "That’s higher than our current vendor. What evidence do you have?" } };
export const Thread: Story = {
  render: () => (
    <Stack gap={12}>
      <ConversationBubble speaker="Sarah Mitchell" tone="buyer" timestamp="0:18" message="Walk me through pricing for a 200-seat rollout." />
      <ConversationBubble speaker="You" timestamp="0:42" message="Happy to — and I’ll pair it with the ROI model from similar deployments." />
    </Stack>
  ),
};
