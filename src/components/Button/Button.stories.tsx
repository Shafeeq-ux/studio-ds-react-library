import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Stack } from "../Stack";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Continue",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Cancel" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "Learn more" },
};

export const Danger: Story = {
  args: { variant: "danger", children: "Delete project" },
};

export const Disabled: Story = {
  args: { disabled: true, children: "Unavailable" },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap={3} align="center" direction="row">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </Stack>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Stack gap={3}>
      <Stack gap={2} direction="row">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </Stack>
      <Stack gap={2} direction="row">
        <Button variant="primary" disabled>
          Primary
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="ghost" disabled>
          Ghost
        </Button>
        <Button variant="danger" disabled>
          Danger
        </Button>
      </Stack>
    </Stack>
  ),
};
