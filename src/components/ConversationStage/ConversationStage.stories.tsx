import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConversationStage } from "./ConversationStage";
const meta = {
  title: "Components/Role play/ConversationStage",
  component: ConversationStage,
  tags: ["autodocs"],
  args: { step: "Stage 02", title: "Handle price objection", description: "Acknowledge concern, quantify value, and ask for the decision criteria." },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Conversation stage` Expanded/Collapsed." } } },
} satisfies Meta<typeof ConversationStage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Expanded: Story = {};
export const Collapsed: Story = { args: { state: "collapsed" } };
