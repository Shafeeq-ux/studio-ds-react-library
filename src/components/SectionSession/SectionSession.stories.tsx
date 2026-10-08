import type { Meta, StoryObj } from "@storybook/react";
import { SectionSession } from "./SectionSession";

const meta = {
  title: "Components/SectionSession",
  component: SectionSession,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Session`.",
      },
    },
  },
} satisfies Meta<typeof SectionSession>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Session.</p>,
  },
};
