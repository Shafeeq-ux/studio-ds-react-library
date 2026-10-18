import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionPublishingDetails } from "./SectionPublishingDetails";

const meta = {
  title: "Components/Sections/SectionPublishingDetails",
  component: SectionPublishingDetails,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Publishing details`.",
      },
    },
  },
} satisfies Meta<typeof SectionPublishingDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Publishing details.</p>,
  },
};
