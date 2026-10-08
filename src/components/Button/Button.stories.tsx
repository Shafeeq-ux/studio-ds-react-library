import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { Stack } from "../Stack";
import { Icon } from "../Icon";

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
  parameters: {
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Button` Appearance Primary/Secondary/Ghost/Danger, Size Compact→sm / Standard→md, Layout icon+label via `icon`.",
      },
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
    <Stack gap={16} align="center" direction="row">
      <Button size="sm">Compact</Button>
      <Button size="md">Standard</Button>
      <Button size="lg">Large</Button>
    </Stack>
  ),
};

export const WithIcon: Story = {
  args: {
    children: "Create",
    icon: <Icon glyph="plus" size={16} />,
    layout: "icon-label",
  },
};

export const IconEnd: Story = {
  args: {
    children: "Continue",
    icon: <Icon glyph="arrow-right" size={16} />,
    iconPosition: "end",
    layout: "icon-label",
  },
};

export const AllVariants: Story = {
  render: () => (
    <Stack gap={16}>
      <Stack gap={8} direction="row">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </Stack>
      <Stack gap={8} direction="row">
        <Button variant="primary" icon={<Icon glyph="sparkles" size={16} />}>
          Generate
        </Button>
        <Button variant="secondary" icon={<Icon glyph="download" size={16} />}>
          Download
        </Button>
      </Stack>
      <Stack gap={8} direction="row">
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
