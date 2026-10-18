import type { Meta, StoryObj } from "@storybook/react-vite";
import { LibraryToolbar } from "./LibraryToolbar";
import { Search } from "../Search";
import { Button } from "../Button";
import { Icon } from "../Icon";
const meta = {
  title: "Components/Data/LibraryToolbar",
  component: LibraryToolbar,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Data/Library toolbar`." } } },
} satisfies Meta<typeof LibraryToolbar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    start: <Search placeholder="Search role plays" style={{ maxWidth: 320 }} />,
    end: <Button><Icon glyph="plus" size={16} /> Create</Button>,
  },
};
