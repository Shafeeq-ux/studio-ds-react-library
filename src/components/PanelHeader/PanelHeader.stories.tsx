import type { Meta, StoryObj } from "@storybook/react-vite";
import { PanelHeader } from "./PanelHeader";

const meta = {
  title: "Components/PanelHeader",
  component: PanelHeader,
  tags: ["autodocs"],
  args: {
    title: "Scenario details",
    description: "Define the buyer situation and conversation goal.",
  },
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Panel header` Wide/Compact title + optional description.",
      },
    },
  },
} satisfies Meta<typeof PanelHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TitleOnly: Story = { args: { description: undefined, showDescription: false } };
