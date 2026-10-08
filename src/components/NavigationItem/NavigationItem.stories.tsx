import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationItem } from "./NavigationItem";
import { Stack } from "../Stack";

const Dot = () => (
  <svg viewBox="0 0 18 18" width="18" height="18" aria-hidden>
    <rect x="3" y="3" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const meta = {
  title: "Components/NavigationItem",
  component: NavigationItem,
  tags: ["autodocs"],
  args: { children: "Library", icon: <Dot /> },
  parameters: {
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Navigation/Navigation item` Sidebar Selected/Hover/Disabled.",
      },
    },
  },
} satisfies Meta<typeof NavigationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Sidebar: Story = {
  render: () => (
    <Stack gap={4} style={{ width: 184 }}>
      <NavigationItem icon={<Dot />} selected>
        Library
      </NavigationItem>
      <NavigationItem icon={<Dot />}>Analytics</NavigationItem>
      <NavigationItem icon={<Dot />}>Settings</NavigationItem>
      <NavigationItem icon={<Dot />} disabled>
        Admin
      </NavigationItem>
    </Stack>
  ),
};
