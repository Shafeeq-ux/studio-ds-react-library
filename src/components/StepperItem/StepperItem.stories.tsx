import type { Meta, StoryObj } from "@storybook/react-vite";
import { StepperItem } from "./StepperItem";
import { Stack } from "../Stack";

const meta = {
  title: "Components/StepperItem",
  component: StepperItem,
  tags: ["autodocs"],
  args: { label: "Scenario", step: "1", state: "current" },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Stepper item` Current / Upcoming / Completed.",
      },
    },
  },
} satisfies Meta<typeof StepperItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Current: Story = {};
export const Upcoming: Story = { args: { state: "upcoming", step: "2", label: "Buyer" } };
export const Completed: Story = { args: { state: "completed", step: "1", label: "Scenario" } };
export const Trail: Story = {
  render: () => (
    <Stack gap={8}>
      <StepperItem state="completed" step="1" label="Scenario" />
      <StepperItem state="current" step="2" label="Buyer" />
      <StepperItem state="upcoming" step="3" label="Conversation" />
      <StepperItem state="upcoming" step="4" label="Evaluation" />
      <StepperItem state="upcoming" step="5" label="Review" />
    </Stack>
  ),
};
