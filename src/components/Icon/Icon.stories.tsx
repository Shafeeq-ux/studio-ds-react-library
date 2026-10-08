import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { iconGlyphNames } from "./glyphs";
import { Stack } from "../Stack";
import { Text } from "../Text";

const meta = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: { glyph: "search", size: 18 },
  parameters: {
    docs: {
      description: {
        component:
          "Maps to Figma `Studio/Icon` Glyph × Size (14/16/18/28). Paths aligned to the Studio Lucide set.",
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Sizes: Story = {
  render: () => (
    <Stack gap={16} direction="row" align="center">
      {([14, 16, 18, 28] as const).map((s) => (
        <Icon key={s} glyph="sparkles" size={s} />
      ))}
    </Stack>
  ),
};
export const GlyphSet: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(7rem,1fr))", gap: 12 }}>
      {iconGlyphNames.map((g) => (
        <Stack key={g} gap={4} align="center">
          <Icon glyph={g} />
          <Text variant="caption">{g}</Text>
        </Stack>
      ))}
    </div>
  ),
};
