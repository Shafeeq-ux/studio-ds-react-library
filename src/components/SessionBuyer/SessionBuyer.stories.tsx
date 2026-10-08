import type { Meta, StoryObj } from "@storybook/react";
import { SessionBuyer } from "./SessionBuyer";

const meta = {
  title: "Components/SessionBuyer",
  component: SessionBuyer,
  tags: ["autodocs"],
  args: { name: "Sarah Mitchell", role: "VP of Enablement", initials: "SM" },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Role play/Session buyer`.",
      },
    },
  },
} satisfies Meta<typeof SessionBuyer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
