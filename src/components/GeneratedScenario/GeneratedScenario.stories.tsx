import type { Meta, StoryObj } from "@storybook/react-vite";
import { GeneratedScenario } from "./GeneratedScenario";
import { Button } from "../Button";

const meta = {
  title: "Components/GeneratedScenario",
  component: GeneratedScenario,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/AI/Generated scenario`.",
      },
    },
  },
} satisfies Meta<typeof GeneratedScenario>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Presentational content for Studio/AI/Generated scenario.</p>,
    actions: <Button variant="secondary" size="sm">Action</Button>,
  },
};
