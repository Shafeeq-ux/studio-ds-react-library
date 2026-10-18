import type { Meta, StoryObj } from "@storybook/react-vite";
import { DifficultyGroup } from "./DifficultyGroup";
const meta = {
  title: "Components/Forms/DifficultyGroup",
  component: DifficultyGroup,
  tags: ["autodocs"],
  args: { defaultValue: "Intermediate", layout: "wide" },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Difficulty group` Selection Beginner/Intermediate/Advanced." } } },
} satisfies Meta<typeof DifficultyGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Wide: Story = {};
export const Compact: Story = { args: { layout: "compact" } };
export const Advanced: Story = { args: { defaultValue: "Advanced" } };
