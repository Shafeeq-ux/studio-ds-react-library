import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "../components/Text";
import { Stack } from "../components/Stack";
import { DocResources } from "../docs/DocResources";
import { colorValuesLight } from "../tokens";
import styles from "./Foundations.module.css";

const semanticColors = [
  { name: "text/primary", hex: colorValuesLight.textPrimary, css: "--sds-color-text-primary" },
  { name: "text/secondary", hex: colorValuesLight.textSecondary, css: "--sds-color-text-secondary" },
  { name: "text/tertiary", hex: colorValuesLight.textTertiary, css: "--sds-color-text-tertiary" },
  { name: "text/reference", hex: colorValuesLight.textReference, css: "--sds-color-text-reference" },
  { name: "background/canvas", hex: colorValuesLight.backgroundCanvas, css: "--sds-color-background-canvas" },
  { name: "surface/default", hex: colorValuesLight.surfaceDefault, css: "--sds-color-surface-default" },
  { name: "surface/secondary", hex: colorValuesLight.surfaceSecondary, css: "--sds-color-surface-secondary" },
  { name: "surface/disabled", hex: "#e8ebf0", css: "--sds-color-surface-disabled" },
  { name: "surface/hover", hex: "#f2f5fa", css: "--sds-color-surface-hover" },
  { name: "border/default", hex: colorValuesLight.borderDefault, css: "--sds-color-border-default" },
  { name: "action/primary", hex: colorValuesLight.actionPrimary, css: "--sds-color-action-primary" },
  { name: "action/hover", hex: colorValuesLight.actionHover, css: "--sds-color-action-hover" },
  { name: "action/subtle", hex: colorValuesLight.actionSubtle, css: "--sds-color-action-subtle" },
  { name: "focus/ring", hex: colorValuesLight.focusRing, css: "--sds-color-focus-ring" },
  { name: "status/error", hex: colorValuesLight.statusError, css: "--sds-color-status-error" },
  { name: "status/success", hex: colorValuesLight.statusSuccess, css: "--sds-color-status-success" },
  { name: "status/warning", hex: colorValuesLight.statusWarning, css: "--sds-color-status-warning" },
  { name: "ai/foreground", hex: "#6953a4", css: "--sds-color-ai-foreground" },
  { name: "ai/surface", hex: "#f4f1fa", css: "--sds-color-ai-surface" },
  { name: "overlay/tooltip", hex: colorValuesLight.overlayTooltip, css: "--sds-color-overlay-tooltip" },
] as const;

const typeSamples = [
  { name: "Studio/Type/32/Semi Bold", variant: "display" as const },
  { name: "Studio/Type/28/Semi Bold", variant: "pageTitle" as const },
  { name: "Studio/Type/20/Semi Bold", variant: "heading" as const },
  { name: "Studio/Type/18/Semi Bold", variant: "subheading" as const },
  { name: "Studio/Type/16/Semi Bold", variant: "sectionTitle" as const },
  { name: "Studio/Type/14/Regular", variant: "body" as const },
  { name: "Studio/Type/13/Semi Bold", variant: "label" as const },
  { name: "Studio/Type/12/Regular", variant: "caption" as const },
];

const spaceSteps = [4, 8, 16, 24, 32, 40, 48, 64] as const;
const radiusSteps = [6, 8, 12] as const;

function FoundationsPage() {
  return (
    <Stack gap={40} className={styles.page}>
      <Stack gap={8}>
        <Text variant="display">Foundations</Text>
        <Text tone="secondary">
          Variables and styles from Figma collections Studio · Semantic (Light/Dark),
          Studio · Typography, Studio · Primitives, plus Studio/Elevation effect styles.
          Use the Storybook theme toolbar for Dark.
        </Text>
      </Stack>

      <DocResources />

      <Stack gap={16}>
        <Text variant="heading">Color · Semantic variables</Text>
        <Text tone="secondary" variant="caption">
          Bound to Studio · Semantic; Light hex shown. Dark resolves via data-sds-theme.
        </Text>
        <div className={styles.swatchGrid}>
          {semanticColors.map((swatch) => (
            <div key={swatch.css} className={styles.swatch}>
              <div
                className={styles.swatchChip}
                style={{ background: `var(${swatch.css})` }}
              />
              <Text variant="label">{swatch.name}</Text>
              <Text variant="caption">{swatch.hex}</Text>
              <Text variant="caption" tone="secondary">
                {swatch.css}
              </Text>
            </div>
          ))}
        </div>
      </Stack>

      <Stack gap={16}>
        <Text variant="heading">Typography · Text styles</Text>
        <Text tone="secondary" variant="caption">
          Inter Regular 400 / Semi Bold 600 — Studio/Type/* styles and font-size/* variables.
        </Text>
        <Stack gap={16}>
          {typeSamples.map((sample) => (
            <Stack key={sample.name} gap={4}>
              <Text variant="caption" tone="secondary">
                {sample.name}
              </Text>
              <Text variant={sample.variant}>The quick brown fox — {sample.variant}</Text>
            </Stack>
          ))}
          <Stack gap={4}>
            <Text variant="caption" tone="secondary">
              font-size/score · 56 Semi Bold
            </Text>
            <Text style={{ fontSize: "var(--sds-text-score)", fontWeight: 600, letterSpacing: "-0.02em" }}>
              86
            </Text>
          </Stack>
        </Stack>
      </Stack>

      <Stack gap={16}>
        <Text variant="heading">Spacing · Primitives</Text>
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

      <Stack gap={16}>
        <Text variant="heading">Radius · Primitives</Text>
        <div className={styles.swatchGrid}>
          {radiusSteps.map((r) => (
            <div key={r} className={styles.swatch}>
              <div
                className={styles.radiusChip}
                style={{ borderRadius: `var(--sds-radius-${r})` }}
              />
              <Text variant="label">radius/{r}</Text>
              <Text variant="caption">--sds-radius-{r}</Text>
            </div>
          ))}
        </div>
      </Stack>

      <Stack gap={16}>
        <Text variant="heading">Effects · Elevation</Text>
        <Text tone="secondary" variant="caption">
          Figma effect styles Studio/Elevation/Subtle and Studio/Elevation/Popover.
        </Text>
        <div className={styles.elevationGrid}>
          <div className={styles.elevationCard} style={{ boxShadow: "var(--sds-elevation-subtle)" }}>
            <Text variant="label">Studio/Elevation/Subtle</Text>
            <Text variant="caption">0 6px 20px #14203814</Text>
          </div>
          <div className={styles.elevationCard} style={{ boxShadow: "var(--sds-elevation-popover)" }}>
            <Text variant="label">Studio/Elevation/Popover</Text>
            <Text variant="caption">0 2px 6px #14203808</Text>
          </div>
        </div>
      </Stack>

      <Stack gap={16}>
        <Text variant="heading">Icon & border primitives</Text>
        <Text variant="body">
          icon/16–24 → --sds-icon-*; border/1–2 → --sds-border-*; target/44 → --sds-target-44;
          motion/120|160|200 → --sds-motion-*.
        </Text>
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
