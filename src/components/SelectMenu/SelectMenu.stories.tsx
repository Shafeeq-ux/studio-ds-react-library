import type { Meta, StoryObj } from "@storybook/react-vite";
import { SelectMenu } from "./SelectMenu";
import { Stack } from "../Stack";
const opts = [
  { value: "mt", label: "Mindtickle AI Revenue Platform" },
  { value: "en", label: "Enablement Cloud" },
  { value: "sr", label: "Sales Readiness Suite" },
];
const meta = {
  title: "Components/SelectMenu",
  component: SelectMenu,
  tags: ["autodocs"],
  args: { label: "Product *", options: opts, defaultOpen: true, defaultValue: "mt", placeholder: "Choose a product" },
  parameters: { docs: { description: { component: "Maps to Figma `Studio/Select` Open list chrome + loading/empty/error states using `Studio/Select option` rows." } } },
} satisfies Meta<typeof SelectMenu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Open: Story = {};
export const Loading: Story = { args: { listState: "loading", defaultValue: undefined } };
export const Empty: Story = { args: { listState: "empty", options: [], defaultValue: undefined } };
export const Error: Story = { args: { listState: "error", defaultValue: undefined } };
export const Closed: Story = { args: { defaultOpen: false } };
export const States: Story = {
  render: () => (
    <Stack gap={24}>
      <SelectMenu label="Ready" options={opts} defaultOpen defaultValue="en" />
      <SelectMenu label="Loading" options={opts} defaultOpen listState="loading" />
      <SelectMenu label="Empty" options={[]} defaultOpen listState="empty" />
    </Stack>
  ),
};
