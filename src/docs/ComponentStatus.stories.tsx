import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "../components/Stack";
import { Text } from "../components/Text";
import {
  componentStatusRows,
  missingFromFigma,
  statusCounts,
  type ComponentStatus,
} from "./componentStatus";
import { DocResources } from "./DocResources";
import styles from "./docs.module.css";

function pillClass(status: ComponentStatus) {
  if (status === "stable") return `${styles.pill} ${styles.pillStable}`;
  if (status === "beta") return `${styles.pill} ${styles.pillBeta}`;
  return `${styles.pill} ${styles.pillDraft}`;
}

function StatusPage() {
  const counts = statusCounts(componentStatusRows);

  return (
    <Stack gap={28} className={styles.page} style={{ maxWidth: "52rem" }}>
      <Stack gap={10}>
        <Text variant="display">Component status</Text>
        <Text className={styles.lead} tone="secondary">
          Health of the React library relative to Figma. Core leans stable;
          AI / role-play / section shells stay draft until product owns
          behavior.
        </Text>
      </Stack>

      <DocResources />

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <Text variant="label">Stable</Text>
          <Text variant="heading">{counts.stable}</Text>
        </div>
        <div className={styles.card}>
          <Text variant="label">Beta</Text>
          <Text variant="heading">{counts.beta}</Text>
        </div>
        <div className={styles.card}>
          <Text variant="label">Draft</Text>
          <Text variant="heading">{counts.draft}</Text>
        </div>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Component</th>
              <th>Group</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {componentStatusRows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.group}</td>
                <td>
                  <span className={pillClass(row.status)}>{row.status}</span>
                </td>
                <td>{row.note ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Stack gap={10}>
        <Text variant="heading">Not shipped (missing Figma sets)</Text>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {missingFromFigma.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Stack>
    </Stack>
  );
}

const meta = {
  title: "Components/Status",
  component: StatusPage,
  parameters: {
    layout: "padded",
    controls: { disable: true },
    options: { showPanel: false },
  },
} satisfies Meta<typeof StatusPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Board: Story = {};
