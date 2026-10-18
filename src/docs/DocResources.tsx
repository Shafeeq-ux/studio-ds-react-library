import { Text } from "../components/Text";
import type { DocResourceLinks } from "./siteLinks";
import { siteWideLinks } from "./siteLinks";
import styles from "./docs.module.css";

type DocResourcesProps = {
  title?: string;
  links?: DocResourceLinks;
};

/** Resource strip: GitHub source · Figma · Storybook — for guideline + Autodocs pages. */
export function DocResources({
  title = "Resources",
  links = siteWideLinks(),
}: DocResourcesProps) {
  const items = [
    { href: links.github, label: links.githubLabel ?? "GitHub" },
    { href: links.figma, label: links.figmaLabel ?? "Figma" },
    { href: links.storybook, label: links.storybookLabel ?? "Storybook" },
  ];

  return (
    <div className={styles.resources} data-sds-doc-resources>
      <Text variant="label">{title}</Text>
      <div className={styles.resourceGrid}>
        {items.map((item) => (
          <a
            key={item.href + item.label}
            className={styles.resourceCard}
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.resourceLabel}>{item.label}</span>
            <span className={styles.resourceHint}>Open ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
