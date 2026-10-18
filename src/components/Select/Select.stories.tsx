import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";
import { Stack } from "../Stack";

const productOptions = [
  { value: "mindtickle", label: "Mindtickle AI Revenue Platform" },
  { value: "enablement", label: "Enablement Cloud" },
  { value: "coaching", label: "Coaching Suite" },
];

const meta = {
  title: "Components/Forms/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "Product *",
    helperText: "The product sellers will position in this role play.",
    options: productOptions,
    defaultValue: "mindtickle",
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Select` Default/Focus (native select; Open menu is host-driven).",
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    errorMessage: "Select a product to continue.",
    helperText: undefined,
    defaultValue: "",
    placeholder: "Choose a product",
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const States: Story = {
  render: () => (
    <Stack gap={24}>
      <Select
        label="Product *"
        options={productOptions}
        defaultValue="mindtickle"
        helperText="The product sellers will position in this role play."
      />
      <Select
        label="Team"
        options={[
          { value: "west", label: "West Coast" },
          { value: "east", label: "East Coast" },
        ]}
        placeholder="Select a team"
        defaultValue=""
      />
      <Select
        label="Product *"
        options={productOptions}
        errorMessage="Select a product to continue."
        defaultValue=""
        placeholder="Choose a product"
      />
    </Stack>
  ),
};
