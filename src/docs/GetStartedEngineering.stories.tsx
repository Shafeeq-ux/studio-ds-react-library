import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "../components/Stack";
import { Text } from "../components/Text";
import styles from "./docs.module.css";

function EngineeringPage() {
  return (
    <Stack gap={28} className={styles.page}>
      <Stack gap={10}>
        <Text variant="display">Engineering path</Text>
        <Text className={styles.lead} tone="secondary">
          Install Studio DS, apply themes, and use Storybook as your playground
          and API reference.
        </Text>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">Install</Text>
        <pre className={styles.code}>{`npm install studio-ds
# peer: react, react-dom (^18 or ^19)`}</pre>
        <pre className={styles.code}>{`import { Button, Text, Stack, Icon } from "studio-ds";
import "studio-ds/tokens.css";

export function Example() {
  return (
    <div className="sds-root" data-sds-theme="light">
      <Stack gap={16}>
        <Text variant="heading">Studio DS</Text>
        <Button icon={<Icon glyph="plus" />}>Create</Button>
      </Stack>
    </div>
  );
}`}</pre>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">Theming</Text>
        <Text>
          Wrap UI in <code>className=&quot;sds-root&quot;</code> and set{" "}
          <code>data-sds-theme=&quot;light&quot;</code> or{" "}
          <code>&quot;dark&quot;</code>. Semantic colors resolve from Studio ·
          Semantic variables. Use the Storybook toolbar Theme control to
          preview both modes.
        </Text>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">Component docs shape</Text>
        <Text>
          Each Autodocs page aims for the same contract as production design
          systems:
        </Text>
        <ul className={styles.list}>
          <li>
            <strong>Status</strong> — stable, beta, or draft (see Components →
            Status).
          </li>
          <li>
            <strong>Resources</strong> — this Storybook story + source under{" "}
            <code>src/components/</code>.
          </li>
          <li>
            <strong>Example</strong> — live Controls playground.
          </li>
          <li>
            <strong>API</strong> — TypeScript props table from Autodocs.
          </li>
        </ul>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">Local development</Text>
        <pre className={styles.code}>{`npm ci
npm run storybook          # http://127.0.0.1:44041
npm run build              # library → dist/
npm run build-storybook    # static docs → storybook-static/`}</pre>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">Repo map</Text>
        <ul className={styles.list}>
          <li>
            <code>src/tokens/</code> — CSS + TS tokens
          </li>
          <li>
            <code>src/components/</code> — React components + stories
          </li>
          <li>
            <code>src/docs/</code> — guidelines pages (Welcome, Get started,
            Status)
          </li>
          <li>
            <code>.storybook/</code> — Storybook config + branding
          </li>
        </ul>
      </Stack>
    </Stack>
  );
}

const meta = {
  title: "Get started/Engineering",
  component: EngineeringPage,
  parameters: {
    layout: "padded",
    controls: { disable: true },
    options: { showPanel: false },
  },
} satisfies Meta<typeof EngineeringPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
