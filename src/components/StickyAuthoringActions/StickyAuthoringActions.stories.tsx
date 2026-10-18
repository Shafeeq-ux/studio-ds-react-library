import type { Meta, StoryObj } from "@storybook/react-vite";
import { StickyAuthoringActions } from "./StickyAuthoringActions";
import { Button } from "../Button";
const meta = {
  title: "Components/Navigation/StickyAuthoringActions",
  component: StickyAuthoringActions,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Navigation/Sticky authoring actions`." } } },
} satisfies Meta<typeof StickyAuthoringActions>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: (
      <>
        <Button variant="secondary">Save draft</Button>
        <Button>Continue</Button>
      </>
    ),
  },
};
