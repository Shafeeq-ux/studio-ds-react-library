/** Canonical Studio DS resource URLs for docs pages. */

export const SITE = {
  githubRepo: "https://github.com/Shafeeq-ux/studio-ds-react-library",
  githubTree: "https://github.com/Shafeeq-ux/studio-ds-react-library/tree/main",
  figmaFile:
    "https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS",
  /** Guidelines site (VitePress on GitHub Pages). */
  docsSite: "https://shafeeq-ux.github.io/studio-ds-react-library",
  /** Interactive Storybook playground (Pages subdirectory). */
  storybookPages:
    "https://shafeeq-ux.github.io/studio-ds-react-library/storybook",
  issues: "https://github.com/Shafeeq-ux/studio-ds-react-library/issues",
} as const;

export type DocResourceLinks = {
  github: string;
  figma: string;
  storybook: string;
  githubLabel?: string;
  figmaLabel?: string;
  storybookLabel?: string;
};

/** Storybook docs id from a CSF title like `Components/Core/Button`. */
export function storyDocsPath(title: string): string {
  const id = title
    .trim()
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return `/index.html?path=/docs/${id}--docs`;
}

export function githubComponentSource(componentName: string): string {
  return `${SITE.githubTree}/src/components/${componentName}`;
}

export function storybookDocsUrl(title: string): string {
  return `${SITE.storybookPages}${storyDocsPath(title)}`;
}

/** Default site-wide resources (repo root, Figma file, Pages home). */
export function siteWideLinks(): DocResourceLinks {
  return {
    github: SITE.githubRepo,
    figma: SITE.figmaFile,
    storybook: SITE.storybookPages,
    githubLabel: "GitHub repo",
    figmaLabel: "Figma · Studio DS",
    storybookLabel: "Storybook (this site)",
  };
}

/**
 * Per-component resources. Figma deep-links use the file URL + component name
 * in the fragment for discoverability until node-ids are catalogued.
 */
export function componentLinks(
  componentName: string,
  storyTitle: string,
): DocResourceLinks {
  return {
    github: githubComponentSource(componentName),
    figma: SITE.figmaFile,
    storybook: storybookDocsUrl(storyTitle),
    githubLabel: `GitHub · ${componentName}`,
    figmaLabel: "Figma · Studio DS",
    storybookLabel: "Storybook · Docs",
  };
}

/** Parse `Components/Core/Button` → Button */
export function componentNameFromTitle(title: string): string | null {
  const parts = title.split("/").map((p) => p.trim());
  if (parts[0] !== "Components" || parts.length < 2) return null;
  const last = parts[parts.length - 1];
  if (last === "Status") return null;
  return last;
}
