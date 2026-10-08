import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../components/Alert";
import { Avatar } from "../components/Avatar";
import { Badge } from "../components/Badge";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Button } from "../components/Button";
import { IconButton } from "../components/IconButton";
import { Input } from "../components/Input";
import { NumberInput } from "../components/NumberInput";
import { PageHeading } from "../components/PageHeading";
import { Progress } from "../components/Progress";
import { Radio } from "../components/Radio";
import { Search } from "../components/Search";
import { Select } from "../components/Select";
import { Stack } from "../components/Stack";
import { Switch } from "../components/Switch";
import { Tab, Tabs } from "../components/Tabs";
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
      <Breadcrumbs
        items={[
          { label: "Library", href: "#" },
          { label: "Create role play" },
        ]}
      />
      <PageHeading
        title="Studio DS"
        description="Component library on Studio · Semantic tokens — foundations, forms, and navigation in Storybook."
        action={
          <Stack gap={8} direction="row" align="center">
            <IconButton aria-label="Help" appearance="quiet">
              <HelpIcon />
            </IconButton>
            <Button>Create role play</Button>
          </Stack>
        }
      />

      <Tabs defaultValue="details">
        <Tab value="details">Details</Tab>
        <Tab value="audience" count={3} showCount>
          Audience
        </Tab>
        <Tab value="review">Review</Tab>
      </Tabs>

      <Stack gap={16}>
        <Text variant="heading">Composition</Text>
        <Search placeholder="Search role plays" />
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
        <Stack gap={8}>
          <Text variant="label">Difficulty</Text>
          <Stack gap={8} direction="row">
            <Radio name="difficulty" label="Beginner" layout="compact" defaultChecked />
            <Radio name="difficulty" label="Intermediate" layout="compact" />
            <Radio name="difficulty" label="Advanced" layout="compact" />
          </Stack>
        </Stack>
        <Stack gap={8} direction="row" align="center">
          <Text variant="label">Weight</Text>
          <NumberInput defaultValue={3} min={0} max={10} aria-label="Criterion weight" />
        </Stack>
        <Progress value={42} aria-label="Authoring progress" />
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
