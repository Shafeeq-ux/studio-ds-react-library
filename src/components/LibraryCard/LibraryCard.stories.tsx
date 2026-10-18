import type { Meta, StoryObj } from "@storybook/react-vite";
import { LibraryCard } from "./LibraryCard";
const meta = {
  title: "Components/Data/LibraryCard",
  component: LibraryCard,
  tags: ["autodocs"],
  args: {
    title: "Enterprise AI Objection Handling",
    metadata: "Value selling · 12 min",
    buyer: "Sarah Mitchell · VP Enablement",
    completion: "86% completion",
    score: "Avg score 78",
  },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Role play/Library card`." } } },
} satisfies Meta<typeof LibraryCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
