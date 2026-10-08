import type { Meta, StoryObj } from "@storybook/react";
import { SellerRow } from "./SellerRow";
import { Avatar } from "../Avatar";
const meta = {
  title: "Components/SellerRow",
  component: SellerRow,
  tags: ["autodocs"],
  args: { name: "Sam Chen", avatar: <Avatar initials="SC" size={32} />, score: "84", attempts: "12", trend: "+6 pts" },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Seller row`." } } },
} satisfies Meta<typeof SellerRow>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Down: Story = { args: { trend: "-3 pts", trendTone: "negative", name: "Ava Jones", avatar: <Avatar initials="AJ" size={32} /> } };
