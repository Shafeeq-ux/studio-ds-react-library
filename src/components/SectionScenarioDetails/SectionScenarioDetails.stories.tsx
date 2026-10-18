import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionScenarioDetails } from "./SectionScenarioDetails";

const meta = {
  title: "Components/Sections/SectionScenarioDetails",
  component: SectionScenarioDetails,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Maps to Figma `Studio/Sections/Scenario details`.",
      },
    },
  },
} satisfies Meta<typeof SectionScenarioDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Section content authored against Studio/Sections/Scenario details.</p>,
  },
};
