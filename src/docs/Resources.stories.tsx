import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "../components/Stack";
import { Text } from "../components/Text";
import { DocResources } from "./DocResources";
import { SITE, siteWideLinks } from "./siteLinks";
import styles from "./docs.module.css";

function ResourcesPage() {
  return (
    <Stack gap={28} className={styles.page}>
      <Stack gap={10}>
        <Text variant="display">Resources</Text>
        <Text className={styles.lead} tone="secondary">
          Primary links for Studio DS — source code, Figma, and this Storybook
          documentation site. The same trio appears on Autodocs pages for each
          component.
        </Text>
      </Stack>

      <DocResources title="Primary links" links={siteWideLinks()} />

      <Stack gap={12}>
        <Text variant="heading">Where each link goes</Text>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Resource</th>
                <th>URL</th>
                <th>Use for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GitHub repo</td>
                <td>
                  <a href={SITE.githubRepo} target="_blank" rel="noreferrer">
                    {SITE.githubRepo}
                  </a>
                </td>
                <td>Source, issues, PRs, CI / Pages workflow</td>
              </tr>
              <tr>
                <td>Figma · Studio DS</td>
                <td>
                  <a href={SITE.figmaFile} target="_blank" rel="noreferrer">
                    {SITE.figmaFile}
                  </a>
                </td>
                <td>Variables, component sets, design source of truth</td>
              </tr>
              <tr>
                <td>Storybook (Pages)</td>
                <td>
                  <a href={SITE.storybookPages} target="_blank" rel="noreferrer">
                    {SITE.storybookPages}
                  </a>
                </td>
                <td>Guidelines, status board, interactive playground</td>
              </tr>
              <tr>
                <td>GitHub issues</td>
                <td>
                  <a href={SITE.issues} target="_blank" rel="noreferrer">
                    {SITE.issues}
                  </a>
                </td>
                <td>Request components or report gaps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Stack>

      <Stack gap={10}>
        <Text variant="heading">On component docs</Text>
        <Text>
          Open any component under <strong>Components → Core / Forms / …</strong>{" "}
          and switch to the <strong>Docs</strong> tab. The top of the page links
          to that component&apos;s GitHub folder, the Figma file, and the deep
          Storybook Docs URL.
        </Text>
      </Stack>
    </Stack>
  );
}

const meta = {
  title: "Resources",
  component: ResourcesPage,
  parameters: {
    layout: "padded",
    controls: { disable: true },
    options: { showPanel: false },
  },
} satisfies Meta<typeof ResourcesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
