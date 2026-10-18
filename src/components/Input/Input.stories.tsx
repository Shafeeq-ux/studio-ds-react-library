import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Forms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Role play name *",
    defaultValue: "Enterprise AI Objection Handling",
    helperText: undefined,
    errorMessage: undefined,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Input` states: Default, Focus (via :focus-visible), Error.",
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelper: Story = {
  args: {
    helperText: "Visible keyboard focus.",
    defaultValue: "",
    placeholder: "Enter a name",
  },
};

export const Error: Story = {
  args: {
    state: "error",
    errorMessage: "Enter a role play name.",
    defaultValue: "",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Read only value",
  },
};

export const States: Story = {
  render: () => (
    <Stack gap={24}>
      <Input label="Default" defaultValue="Enterprise AI Objection Handling" />
      <Input
        label="With helper"
        placeholder="Enter a name"
        helperText="Visible keyboard focus."
      />
      <Input
        label="Error"
        state="error"
        errorMessage="Enter a role play name."
      />
      <Input label="Disabled" disabled defaultValue="Unavailable" />
    </Stack>
  ),
};
