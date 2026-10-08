import type { Meta, StoryObj } from "@storybook/react";
import { Textarea as TextareaField } from "./Textarea";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Textarea",
  component: TextareaField,
  tags: ["autodocs"],
  args: {
    label: "Scenario description *",
    defaultValue:
      "Sarah Mitchell is evaluating three revenue enablement platforms for Acme Technologies. She believes our solution is more expensive than the incumbent and needs evidence of measurable ROI before making a recommendation.",
    helperText:
      "A clear objective keeps the conversation and evaluation aligned.",
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Maps to Figma Studio/Textarea Default and Focus states.",
      },
    },
  },
} satisfies Meta<typeof TextareaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    defaultValue: "",
    placeholder: "Describe the buyer scenario...",
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const States: Story = {
  render: () => (
    <Stack gap={24}>
      <TextareaField
        label="Scenario description *"
        defaultValue="Practice handling price objections with evidence."
        helperText="A clear objective keeps the conversation and evaluation aligned."
      />
      <TextareaField
        label="Notes"
        placeholder="Optional notes"
        defaultValue=""
      />
      <TextareaField label="Locked" disabled defaultValue="Not editable" />
    </Stack>
  ),
};
