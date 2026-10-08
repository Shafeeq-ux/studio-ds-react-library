import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReadinessCheck } from "./ReadinessCheck";
import { Button } from "../Button";

const meta = {
  title: "Components/ReadinessCheck",
  component: ReadinessCheck,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/AI/AI readiness check`.",
      },
    },
  },
} satisfies Meta<typeof ReadinessCheck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Presentational content for Studio/AI/AI readiness check.</p>,
    actions: <Button variant="secondary" size="sm">Action</Button>,
  },
};
