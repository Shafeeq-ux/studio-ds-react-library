import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab } from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Tab` + `Studio/Navigation/Library tabs` selected underline pattern.",
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Library: Story = {
  render: () => (
    <Tabs defaultValue="all">
      <Tab value="all" count={128} showCount>
        All
      </Tab>
      <Tab value="published" count={86} showCount>
        Published
      </Tab>
      <Tab value="drafts" count={31} showCount>
        Drafts
      </Tab>
      <Tab value="archived" count={11} showCount>
        Archived
      </Tab>
    </Tabs>
  ),
};

export const WithoutCounts: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <Tab value="overview">Overview</Tab>
      <Tab value="sellers">Sellers</Tab>
      <Tab value="settings">Settings</Tab>
    </Tabs>
  ),
};
