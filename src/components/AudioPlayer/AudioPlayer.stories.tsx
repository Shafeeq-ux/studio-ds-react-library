import type { Meta, StoryObj } from "@storybook/react-vite";
import { AudioPlayer } from "./AudioPlayer";
import { Button } from "../Button";
const meta = {
  title: "Components/Role play/AudioPlayer",
  component: AudioPlayer,
  tags: ["autodocs"],
  args: { secondaryAction: <Button variant="secondary">Download</Button>, showSecondaryAction: true },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Audio player` Ready." } } },
} satisfies Meta<typeof AudioPlayer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Ready: Story = {};
