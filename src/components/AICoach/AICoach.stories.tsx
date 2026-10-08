import type { Meta, StoryObj } from "@storybook/react-vite";
import { AICoach } from "./AICoach";
import { Button } from "../Button";

const meta = {
  title: "Components/AICoach",
  component: AICoach,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/AI/AI Coach`.",
      },
    },
  },
} satisfies Meta<typeof AICoach>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Presentational content for Studio/AI/AI Coach.</p>,
    actions: <Button variant="secondary" size="sm">Action</Button>,
  },
};
