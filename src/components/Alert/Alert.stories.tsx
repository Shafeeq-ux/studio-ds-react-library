import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Core/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    title: "Your work saves as a draft",
    description: "Review generated content before continuing.",
    tone: "ai",
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["ai", "success", "warning", "error"],
    },
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Alert` tones: AI, Success, Warning, Error.",
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AI: Story = {};

export const Success: Story = {
  args: { tone: "success", title: "Scenario published" },
};

export const Warning: Story = {
  args: {
    tone: "warning",
    title: "Voice preview unavailable",
    description: "You can still edit the script and retry later.",
  },
};

export const Error: Story = {
  args: {
    tone: "error",
    title: "Generation failed",
    description: "Check your prompt and try again.",
  },
};

export const AllTones: Story = {
  render: () => (
    <Stack gap={16}>
      <Alert
        tone="ai"
        title="Your work saves as a draft"
        description="Review generated content before continuing."
      />
      <Alert
        tone="success"
        title="Scenario published"
        description="Learners can start this role play now."
      />
      <Alert
        tone="warning"
        title="Incomplete criteria"
        description="Add at least one evaluation criterion."
      />
      <Alert
        tone="error"
        title="Generation failed"
        description="Check your prompt and try again."
      />
    </Stack>
  ),
};
