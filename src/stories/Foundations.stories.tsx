import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../components/Text";
import { Stack } from "../components/Stack";
import { colorValuesLight } from "../tokens";
import styles from "./Foundations.module.css";

const colorSwatches = [
  { name: "text/primary", hex: colorValuesLight.textPrimary, css: "--sds-color-text-primary" },
  { name: "text/secondary", hex: colorValuesLight.textSecondary, css: "--sds-color-text-secondary" },
  { name: "text/tertiary", hex: colorValuesLight.textTertiary, css: "--sds-color-text-tertiary" },
  { name: "background/canvas", hex: colorValuesLight.backgroundCanvas, css: "--sds-color-background-canvas" },
  { name: "surface/default", hex: colorValuesLight.surfaceDefault, css: "--sds-color-surface-default" },
  { name: "surface/secondary", hex: colorValuesLight.surfaceSecondary, css: "--sds-color-surface-secondary" },
  { name: "border/default", hex: colorValuesLight.borderDefault, css: "--sds-color-border-default" },
  { name: "action/primary", hex: colorValuesLight.actionPrimary, css: "--sds-color-action-primary" },
  { name: "action/hover", hex: colorValuesLight.actionHover, css: "--sds-color-action-hover" },
  { name: "focus/ring", hex: colorValuesLight.focusRing, css: "--sds-color-focus-ring" },
  { name: "status/error", hex: colorValuesLight.statusError, css: "--sds-color-status-error" },
  { name: "status/success", hex: colorValuesLight.statusSuccess, css: "--sds-color-status-success" },
] as const;

const spaceSteps = [4, 8, 16, 24, 32, 40, 48, 64] as const;

function FoundationsPage() {
  return (
    <Stack gap={32} className={styles.page}>
      <Stack gap={8}>
        <Text variant="display">Foundations</Text>
        <Text tone="secondary">
          Tokens sourced from Figma Studio · Semantic / Typography / Primitives
          (node 29:1783 — Colors / Surfaces & text). Toggle Storybook theme for Dark.
        </Text>
      </Stack>

      <Stack gap={16}>
        <Text variant="heading">Color</Text>
        <div className={styles.swatchGrid}>
          {colorSwatches.map((swatch) => (
            <div key={swatch.css} className={styles.swatch}>
              <div
                className={styles.swatchChip}
                style={{ background: `var(${swatch.css})` }}
              />
              <Text variant="label">{swatch.name}</Text>
              <Text variant="caption">{swatch.hex}</Text>
            </div>
          ))}
        </div>
      </Stack>

      <Stack gap={16}>
        <Text variant="heading">Typography</Text>
        <Stack gap={16}>
          <Text variant="display">Inter — Display 32</Text>
          <Text variant="pageTitle">Inter — Page title 28</Text>
          <Text variant="heading">Inter — Heading 20</Text>
          <Text variant="body">Inter — Body 14 for UI and reading.</Text>
          <Text variant="label">Inter — Label 13</Text>
          <Text variant="caption">Inter — Caption 12</Text>
        </Stack>
      </Stack>

      <Stack gap={16}>
        <Text variant="heading">Spacing</Text>
        <Stack gap={8}>
          {spaceSteps.map((step) => (
            <div key={step} className={styles.spaceRow}>
              <Text variant="label" className={styles.spaceLabel}>
                spacing/{step}
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
