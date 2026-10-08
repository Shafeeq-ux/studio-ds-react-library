import type { Meta, StoryObj } from "@storybook/react";
import { AuthoringStepper } from "./AuthoringStepper";
const steps = [
  { id: "1", label: "Scenario" },
  { id: "2", label: "Buyer" },
  { id: "3", label: "Conversation" },
  { id: "4", label: "Evaluation" },
  { id: "5", label: "Review" },
];
const meta = {
  title: "Components/AuthoringStepper",
  component: AuthoringStepper,
  tags: ["autodocs"],
  args: { steps, activeStep: 2, layout: "wide" },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Navigation/Authoring stepper` Active step 1–5." } } },
} satisfies Meta<typeof AuthoringStepper>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Step2: Story = {};
export const Compact: Story = { args: { layout: "compact", activeStep: 3 } };
