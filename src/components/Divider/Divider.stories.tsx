import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";
import { Stack } from "../Stack";
import { Text } from "../Text";

const meta = {
  title: "Components/Core/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Hairline rule using `border/default`. No `Studio/Divider` set in Figma — utility from primitives `border/1` + semantic border color.",
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <Stack gap={16} style={{ maxWidth: "24rem" }}>
      <Text>Above</Text>
      <Divider />
      <Text>Below</Text>
    </Stack>
  ),
};
