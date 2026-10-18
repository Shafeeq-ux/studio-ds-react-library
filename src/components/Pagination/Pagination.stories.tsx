import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./Pagination";
const meta = {
  title: "Components/Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: { label: "Showing 1–10 of 128 role plays" },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Navigation/Pagination`." } } },
} satisfies Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const FirstPage: Story = { args: { previousDisabled: true } };
