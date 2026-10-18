import type { Meta, StoryObj } from "@storybook/react-vite";
import { LibraryTabs } from "./LibraryTabs";
const meta = {
  title: "Components/Navigation/LibraryTabs",
  component: LibraryTabs,
  tags: ["autodocs"],
  args: {
    defaultValue: "all",
    items: [
      { value: "all", label: "All", count: 128 },
      { value: "published", label: "Published", count: 86 },
      { value: "drafts", label: "Drafts", count: 31 },
      { value: "archived", label: "Archived", count: 11 },
    ],
  },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Navigation/Library tabs`." } } },
} satisfies Meta<typeof LibraryTabs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
