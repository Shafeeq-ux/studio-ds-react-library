import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Library", href: "#" },
      { label: "Enterprise AI Objection Handling" },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Navigation/Breadcrumbs` parent / current trail.",
      },
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ThreeLevels: Story = {
  args: {
    items: [
      { label: "Library", href: "#" },
      { label: "Drafts", href: "#" },
      { label: "Scenario details" },
    ],
  },
};
