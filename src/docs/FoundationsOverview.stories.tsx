import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "../components/Stack";
import { Text } from "../components/Text";
import styles from "./docs.module.css";

function FoundationsOverviewPage() {
  return (
    <Stack gap={28} className={styles.page}>
      <Stack gap={10}>
        <Text variant="display">Foundations</Text>
        <Text className={styles.lead} tone="secondary">
          Interlocking design elements that underwrite every Studio DS
          component. Prefer semantic tokens over raw values.
        </Text>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">Token hierarchy</Text>
        <ul className={styles.list}>
          <li>
            <strong>Primitives</strong> — raw scales (space, radius, font size)
            from Studio · Primitives.
          </li>
          <li>
            <strong>Semantic / theme</strong> — meaningful roles (text/primary,
            action/primary) from Studio · Semantic Light/Dark.
          </li>
          <li>
            <strong>Component</strong> — only when a control needs a dedicated
            mapping; default to semantic tokens.
          </li>
        </ul>
      </Stack>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <Text variant="label">Color</Text>
          <Text variant="caption" tone="secondary">
            Semantic surfaces, text, action, status, AI — switch Light/Dark via
            toolbar.
          </Text>
        </div>
        <div className={styles.card}>
          <Text variant="label">Typography</Text>
          <Text variant="caption" tone="secondary">
            Inter 400/600 mapped through the Text component variants.
          </Text>
        </div>
        <div className={styles.card}>
          <Text variant="label">Spacing &amp; radius</Text>
          <Text variant="caption" tone="secondary">
            4–64 space steps and 6/8/12 radius tokens.
          </Text>
        </div>
        <div className={styles.card}>
          <Text variant="label">Elevation</Text>
          <Text variant="caption" tone="secondary">
            Subtle and popover elevations from Studio/Elevation/*.
          </Text>
        </div>
        <div className={styles.card}>
          <Text variant="label">Iconography</Text>
          <Text variant="caption" tone="secondary">
            Icon glyphs + sizes 14/16/18/28; color via currentColor.
          </Text>
        </div>
      </div>

      <Stack gap={8}>
        <Text variant="heading">Interactive reference</Text>
        <Text>
          Open <strong>Foundations → Tokens</strong> for live swatches and type
          specimens. Use the Theme toolbar to verify Dark mode.
        </Text>
      </Stack>
    </Stack>
  );
}

const meta = {
  title: "Foundations/Overview",
  component: FoundationsOverviewPage,
  parameters: {
    layout: "padded",
    controls: { disable: true },
    options: { showPanel: false },
  },
} satisfies Meta<typeof FoundationsOverviewPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
