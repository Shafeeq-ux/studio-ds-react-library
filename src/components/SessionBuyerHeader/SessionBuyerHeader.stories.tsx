import type { Meta, StoryObj } from "@storybook/react-vite";
import { SessionBuyerHeader } from "./SessionBuyerHeader";
import { Badge } from "../Badge";

const meta = {
  title: "Components/Role play/SessionBuyerHeader",
  component: SessionBuyerHeader,
  tags: ["autodocs"],
  args: {
    name: "Sarah Mitchell",
    role: "VP of Enablement",
    initials: "SM",
    end: <Badge tone="informative">Live</Badge>,
  },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Role play/Session buyer header`.",
      },
    },
  },
} satisfies Meta<typeof SessionBuyerHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
