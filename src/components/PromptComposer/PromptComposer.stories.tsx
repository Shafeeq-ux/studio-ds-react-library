import type { Meta, StoryObj } from "@storybook/react";
import { PromptComposer } from "./PromptComposer";
import { Button } from "../Button";

const meta = {
  title: "Components/PromptComposer",
  component: PromptComposer,
  tags: ["autodocs"],
  args: {
    defaultValue: "Create a pricing objection role play for enterprise AEs.",
    secondaryAction: <Button variant="secondary">Improve prompt</Button>,
  },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/AI/Create with AI`.",
      },
    },
  },
} satisfies Meta<typeof PromptComposer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
