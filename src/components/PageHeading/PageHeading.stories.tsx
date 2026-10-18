import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageHeading } from "./PageHeading";
import { Button } from "../Button";

const meta = {
  title: "Components/Core/PageHeading",
  component: PageHeading,
  tags: ["autodocs"],
  args: {
    title: "Role Plays",
    description:
      "Create realistic selling scenarios that help your sellers practice what matters.",
    action: <Button>Create role play</Button>,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Page heading` (Desktop layout; Mobile stacks via CSS).",
      },
    },
  },
} satisfies Meta<typeof PageHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutAction: Story = {
  args: { action: undefined },
};

export const TitleOnly: Story = {
  args: {
    description: undefined,
    action: undefined,
    title: "Review role play",
  },
};
