import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "../components/Stack";
import { Text } from "../components/Text";
import styles from "./docs.module.css";

function WelcomePage() {
  return (
    <Stack gap={28} className={styles.page}>
      <Stack gap={10}>
        <Text variant="display">Welcome</Text>
        <Text className={styles.lead} tone="secondary">
          This is a living document for Studio DS — always in progress.
        </Text>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">We&apos;re glad you&apos;re here</Text>
        <Text>
          Studio DS is the React + TypeScript design system translated from the{" "}
          <a href="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS">
            Studio DS Figma file
          </a>
          . It packages foundations (tokens, type, elevation), a component
          library, and this documentation site so product teams ship a cohesive
          experience.
        </Text>
        <Text>
          As Lead Design Engineering work, the source of truth is Figma
          variables and component sets; this repo is the production-grade
          implementation and docs. Flutter and other native SDKs are out of
          scope.
        </Text>
      </Stack>

      <Stack gap={12}>
        <Text variant="heading">Start here</Text>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <Text variant="label">Get started · Engineering</Text>
            <Text variant="caption" tone="secondary">
              Install, theme, Storybook, and how to use components.
            </Text>
          </div>
          <div className={styles.card}>
            <Text variant="label">Get started · Design</Text>
            <Text variant="caption" tone="secondary">
              Figma libraries, variables, and how to request work.
            </Text>
          </div>
          <div className={styles.card}>
            <Text variant="label">Foundations</Text>
            <Text variant="caption" tone="secondary">
              Color, type, space, elevation, icons, and tokens.
            </Text>
          </div>
          <div className={styles.card}>
            <Text variant="label">Components · Status</Text>
            <Text variant="caption" tone="secondary">
              Stable / beta / draft inventory across the library.
            </Text>
          </div>
        </div>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">What&apos;s included</Text>
        <ul className={styles.list}>
          <li>
            <strong>Foundations</strong> — Studio · Semantic (Light/Dark),
            Typography, Primitives, Elevation mapped to <code>--sds-*</code>{" "}
            CSS variables.
          </li>
          <li>
            <strong>Component library</strong> — Core, forms, navigation, data,
            plus domain shells for AI / role-play / sections.
          </li>
          <li>
            <strong>Docs + playground</strong> — this Storybook site on GitHub
            Pages (guidelines + interactive controls).
          </li>
        </ul>
      </Stack>

      <Stack gap={8}>
        <Text variant="heading">Resources</Text>
        <div className={styles.linkRow}>
          <a href="https://github.com/Shafeeq-ux/studio-ds-react-library">
            GitHub repo
          </a>
          <a href="https://shafeeq-ux.github.io/studio-ds-react-library/">
            GitHub Pages
          </a>
          <a href="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS">
            Figma · Studio DS
          </a>
        </div>
      </Stack>
    </Stack>
  );
}

const meta = {
  title: "Welcome",
  component: WelcomePage,
  parameters: {
    layout: "padded",
    controls: { disable: true },
    options: { showPanel: false },
  },
} satisfies Meta<typeof WelcomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
