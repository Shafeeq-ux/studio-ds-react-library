import type { Meta, StoryObj } from "@storybook/react";
import { SectionAvailability } from "./SectionAvailability";

const meta = {
  title: "Components/SectionAvailability",
  component: SectionAvailability,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Availability`.",
      },
    },
  },
} satisfies Meta<typeof SectionAvailability>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Availability.</p>,
  },
};
