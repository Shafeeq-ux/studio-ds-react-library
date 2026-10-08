import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";
import { Stack } from "../Stack";

function HelpIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.2 7.1a1.85 1.85 0 0 1 3.5.7c0 1.1-.9 1.5-1.45 1.85-.4.25-.55.45-.55.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="9" cy="12.6" r="0.7" fill="currentColor" />
    </svg>
  );
}

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    "aria-label": "Help",
    appearance: "surface",
    children: <HelpIcon />,
  },
  argTypes: {
    appearance: {
      control: "select",
      options: ["surface", "quiet"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Icon button` Appearance Surface / Quiet (44×44).",
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Surface: Story = {};

export const Quiet: Story = {
  args: { appearance: "quiet" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Appearances: Story = {
  render: () => (
    <Stack gap={16} direction="row" align="center">
      <IconButton aria-label="Help surface" appearance="surface">
        <HelpIcon />
      </IconButton>
      <IconButton aria-label="Help quiet" appearance="quiet">
        <HelpIcon />
      </IconButton>
      <IconButton aria-label="Help disabled" appearance="surface" disabled>
        <HelpIcon />
      </IconButton>
    </Stack>
  ),
};
