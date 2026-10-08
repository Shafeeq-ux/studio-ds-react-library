import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../components/Text";
import { Stack } from "../components/Stack";
import styles from "./Foundations.module.css";

/**
 * ASSUMPTION: Swatches mirror provisional tokens until Figma export.
 */
const colorSwatches = [
  { name: "Ink", varName: "--sds-color-ink" },
  { name: "Ink muted", varName: "--sds-color-ink-muted" },
  { name: "Surface", varName: "--sds-color-surface" },
  { name: "Surface raised", varName: "--sds-color-surface-raised" },
  { name: "Border", varName: "--sds-color-border" },
  { name: "Primary", varName: "--sds-color-primary" },
  { name: "Danger", varName: "--sds-color-danger" },
] as const;

const spaceSteps = [1, 2, 3, 4, 5, 6, 7] as const;

function FoundationsPage() {
  return (
    <Stack gap={6} className={styles.page}>
      <Stack gap={2}>
        <Text variant="display">Foundations</Text>
        <Text tone="muted">
          Provisional Studio DS tokens. Values are labeled ASSUMPTION in source
          until Figma node 29:1783 can be exported.
        </Text>
      </Stack>

      <Stack gap={3}>
        <Text variant="title">Color</Text>
        <div className={styles.swatchGrid}>
          {colorSwatches.map((swatch) => (
            <div key={swatch.varName} className={styles.swatch}>
              <div
                className={styles.swatchChip}
                style={{ background: `var(${swatch.varName})` }}
              />
              <Text variant="label">{swatch.name}</Text>
              <Text variant="caption">{swatch.varName}</Text>
            </div>
          ))}
        </div>
      </Stack>

      <Stack gap={3}>
        <Text variant="title">Typography</Text>
        <Stack gap={3}>
          <Text variant="display">Fraunces — Display</Text>
          <Text variant="title">Fraunces — Title</Text>
          <Text variant="body">Source Sans 3 — Body copy for UI and reading.</Text>
          <Text variant="label">Source Sans 3 — Label</Text>
          <Text variant="caption">Source Sans 3 — Caption</Text>
        </Stack>
      </Stack>

      <Stack gap={3}>
        <Text variant="title">Spacing</Text>
        <Stack gap={2}>
          {spaceSteps.map((step) => (
            <div key={step} className={styles.spaceRow}>
              <Text variant="label" className={styles.spaceLabel}>
                space-{step}
              </Text>
              <div
                className={styles.spaceBar}
                style={{ width: `var(--sds-space-${step})` }}
              />
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

const meta = {
  title: "Foundations/Tokens",
  component: FoundationsPage,
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
} satisfies Meta<typeof FoundationsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
