import type { Meta, StoryObj } from "@storybook/react";
import { ApplicationSidebar } from "./ApplicationSidebar";
import { NavigationItem } from "../NavigationItem";
import { Icon } from "../Icon";
const meta = {
  title: "Components/ApplicationSidebar",
  component: ApplicationSidebar,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Navigation/Application sidebar`." } } },
} satisfies Meta<typeof ApplicationSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    wordmark: "AI Role Play",
    workspace: "Acme Enablement",
    identity: "Jordan Lee",
    identityMeta: "Admin",
    children: (
      <>
        <NavigationItem icon={<Icon glyph="library" />} selected>Library</NavigationItem>
        <NavigationItem icon={<Icon glyph="chart-no-axes-combined" />}>Analytics</NavigationItem>
        <NavigationItem icon={<Icon glyph="settings" />}>Settings</NavigationItem>
      </>
    ),
  },
};
