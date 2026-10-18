import type { Meta, StoryObj } from "@storybook/react-vite";
import { GenerationStatus } from "./GenerationStatus";
import { Button } from "../Button";

const meta = {
  title: "Components/AI/GenerationStatus",
  component: GenerationStatus,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/AI/Generation status`.",
      },
    },
  },
} satisfies Meta<typeof GenerationStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Presentational content for Studio/AI/Generation status.</p>,
    actions: <Button variant="secondary" size="sm">Action</Button>,
  },
};
