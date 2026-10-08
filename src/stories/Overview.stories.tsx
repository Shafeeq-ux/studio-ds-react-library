import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../components/Alert";
import { Avatar } from "../components/Avatar";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Stack } from "../components/Stack";
import { Text } from "../components/Text";

function OverviewPage() {
  return (
    <Stack gap={32} style={{ maxWidth: "40rem" }}>
      <Stack gap={8}>
        <Text variant="display">Studio DS</Text>
        <Text tone="secondary">
          Component library built on Studio · Semantic tokens. Foundations first,
          then core UI documented in Storybook.
        </Text>
      </Stack>

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
