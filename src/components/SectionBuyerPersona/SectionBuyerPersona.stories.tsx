import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionBuyerPersona } from "./SectionBuyerPersona";

const meta = {
  title: "Components/SectionBuyerPersona",
  component: SectionBuyerPersona,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Buyer Persona`.",
      },
    },
  },
} satisfies Meta<typeof SectionBuyerPersona>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Buyer Persona.</p>,
  },
};
