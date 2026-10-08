import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../components/Alert";
import { Avatar } from "../components/Avatar";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { IconButton } from "../components/IconButton";
import { Input } from "../components/Input";
import { PageHeading } from "../components/PageHeading";
import { Select } from "../components/Select";
import { Stack } from "../components/Stack";
import { Switch } from "../components/Switch";
import { Text } from "../components/Text";
import { Textarea } from "../components/Textarea";
import { Toggle } from "../components/Toggle";

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

function OverviewPage() {
  return (
    <Stack gap={32} style={{ maxWidth: "42rem" }}>
      <PageHeading
        title="Studio DS"
        description="Component library on Studio · Semantic tokens — foundations first, then core UI in Storybook."
        action={
          <Stack gap={8} direction="row" align="center">
            <IconButton aria-label="Help" appearance="quiet">
              <HelpIcon />
            </IconButton>
            <Button>Create role play</Button>
          </Stack>
        }
      />

      <Stack gap={16}>
        <Text variant="heading">Composition</Text>
        <Stack gap={8} direction="row" align="center">
          <Avatar initials="JL" size={36} />
          <Stack gap={4}>
            <Text variant="label">Jordan Lee</Text>
            <Badge tone="positive" withDot>
              Active
            </Badge>
          </Stack>
        </Stack>
        <Input
          label="Role play name *"
          defaultValue="Enterprise AI Objection Handling"
        />
        <Select
          label="Product *"
          helperText="The product sellers will position in this role play."
          defaultValue="mindtickle"
          options={[
            { value: "mindtickle", label: "Mindtickle AI Revenue Platform" },
            { value: "enablement", label: "Enablement Cloud" },
          ]}
        />
        <Textarea
          label="Scenario description *"
          defaultValue="Practice handling price objections with measurable ROI evidence."
          helperText="A clear objective keeps the conversation and evaluation aligned."
        />
        <Switch label="Email digests" defaultChecked />
        <Toggle
          label="Challenge weak answers"
          description="Ask for evidence when claims are vague."
          defaultChecked
        />
        <Alert
          tone="ai"
          title="Your work saves as a draft"
          description="Review generated content before continuing."
        />
        <Stack gap={8} direction="row">
          <Button variant="primary">Continue</Button>
          <Button variant="secondary">Cancel</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

const meta = {
  title: "Overview",
  component: OverviewPage,
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
} satisfies Meta<typeof OverviewPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Library: Story = {};
