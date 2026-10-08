import type { Meta, StoryObj } from "@storybook/react-vite";
import { BuyerIdentity } from "./BuyerIdentity";
const meta = {
  title: "Components/BuyerIdentity",
  component: BuyerIdentity,
  tags: ["autodocs"],
  args: { name: "Sarah Mitchell", role: "VP of Enablement", context: "Evaluating three revenue platforms for Acme Technologies." },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Role play/Buyer identity`." } } },
} satisfies Meta<typeof BuyerIdentity>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
