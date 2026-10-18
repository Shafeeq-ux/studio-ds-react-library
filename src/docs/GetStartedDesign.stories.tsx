import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "../components/Stack";
import { Text } from "../components/Text";
import { DocResources } from "./DocResources";
import styles from "./docs.module.css";

function DesignPage() {
  return (
    <Stack gap={28} className={styles.page}>
      <Stack gap={10}>
        <Text variant="display">Design path</Text>
        <Text className={styles.lead} tone="secondary">
          Work in Figma first. Studio DS code mirrors variables and component
          sets from the Studio DS file.
        </Text>
      </Stack>

      <DocResources />

      <Stack gap={10}>
        <Text variant="heading">Figma source</Text>
        <Text>
          Primary file:{" "}
          <a href="https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS">
            Studio DS
          </a>
          .
        </Text>
        <ul className={styles.list}>
          <li>
            <strong>Studio · Semantic</strong> — Light/Dark color variables →{" "}
            <code>--sds-color-*</code>
          </li>
          <li>
            <strong>Studio · Typography</strong> + Studio/Type/* →{" "}
            <code>--sds-text-*</code> and <code>Text</code>
          </li>
          <li>
            <strong>Studio · Primitives</strong> — spacing, radius, icon,
            border, motion, target
          </li>
          <li>
            <strong>Studio/Elevation/*</strong> — elevation tokens
          </li>
          <li>
            <strong>Studio/* component sets</strong> → React components in this
            library
          </li>
        </ul>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">How design and code stay aligned</Text>
        <ol className={styles.list}>
          <li>Define or update variables / variants in Figma.</li>
          <li>Map them to semantic tokens (not raw hex in components).</li>
          <li>Implement or update the React API to match Figma variants.</li>
          <li>Document status on the Components → Status board.</li>
          <li>Ship via GitHub Pages (and npm when published).</li>
        </ol>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">Not in Figma yet</Text>
        <Text tone="secondary">
          These are intentionally skipped until design adds sets: Checkbox,
          Modal/Dialog, Tag/Chip (Badge covers many chip cases).
        </Text>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">Requesting a component</Text>
        <Text>
          Open an issue on{" "}
          <a href="https://github.com/Shafeeq-ux/studio-ds-react-library/issues">
            GitHub
          </a>{" "}
          with the Figma node link, intended variants/states, and whether it
          should be Core vs domain shell.
        </Text>
      </Stack>
    </Stack>
  );
}

const meta = {
  title: "Get started/Design",
  component: DesignPage,
  parameters: {
    layout: "padded",
    controls: { disable: true },
    options: { showPanel: false },
  },
} satisfies Meta<typeof DesignPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
