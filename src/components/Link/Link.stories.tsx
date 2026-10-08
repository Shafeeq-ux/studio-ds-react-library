import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";
import { Text } from "../Text";

const meta = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  args: { children: "View performance", href: "#" },
  parameters: {
    docs: {
      description: {
        component:
          "Text link using `action/foreground`. No dedicated `Studio/Link` component set in Figma — derived from action + type tokens for nav/inline use.",
      },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Inline: Story = {
  render: () => (
    <Text>
      Review the <Link href="#">role play library</Link> before publishing.
    </Text>
  ),
};
