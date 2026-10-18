import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionSellerPerformance } from "./SectionSellerPerformance";

const meta = {
  title: "Components/Sections/SectionSellerPerformance",
  component: SectionSellerPerformance,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Seller performance`.",
      },
    },
  },
} satisfies Meta<typeof SectionSellerPerformance>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Seller performance.</p>,
  },
};
