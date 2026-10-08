import type { Meta, StoryObj } from "@storybook/react";
import { ScenarioSkeleton } from "./ScenarioSkeleton";
import { Button } from "../Button";

const meta = {
  title: "Components/ScenarioSkeleton",
  component: ScenarioSkeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/AI/Scenario skeleton`.",
      },
    },
  },
} satisfies Meta<typeof ScenarioSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Presentational content for Studio/AI/Scenario skeleton.</p>,
    actions: <Button variant="secondary" size="sm">Action</Button>,
  },
};
