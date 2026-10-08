import type { Meta, StoryObj } from "@storybook/react-vite";
import { TopNavigation } from "./TopNavigation";
import { IconButton } from "../IconButton";
import { Icon } from "../Icon";
import { Avatar } from "../Avatar";
const meta = {
  title: "Components/TopNavigation",
  component: TopNavigation,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Navigation/Top navigation`." } } },
} satisfies Meta<typeof TopNavigation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Library",
    start: <IconButton aria-label="Menu" appearance="quiet"><Icon glyph="menu" /></IconButton>,
    end: (
      <>
        <IconButton aria-label="Notifications" appearance="quiet"><Icon glyph="bell" /></IconButton>
        <Avatar initials="JL" size={32} />
      </>
    ),
  },
};
