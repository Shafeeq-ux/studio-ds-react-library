import type { Meta, StoryObj } from "@storybook/react";
import { ReviewSummary } from "./ReviewSummary";
import { Button } from "../Button";

const meta = {
  title: "Components/ReviewSummary",
  component: ReviewSummary,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Role play/Review summary`.",
      },
    },
  },
} satisfies Meta<typeof ReviewSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Presentational content for Studio/Role play/Review summary.</p>,
    actions: <Button variant="secondary" size="sm">Action</Button>,
  },
};
