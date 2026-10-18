import React from "react";
import {
  DocsContainer,
  type DocsContainerProps,
} from "@storybook/addon-docs/blocks";
import { DocResources } from "../src/docs/DocResources";
import {
  componentLinks,
  componentNameFromTitle,
  siteWideLinks,
} from "../src/docs/siteLinks";
import styles from "../src/docs/docs.module.css";

/**
 * Wraps Autodocs with GitHub · Figma · Storybook resource links.
 * Guideline CSF pages include DocResources manually.
 */
export function StudioDocsContainer({
  children,
  ...props
}: DocsContainerProps & { children?: React.ReactNode }) {
  let title = "";
  try {
    const story = props.context.storyById();
    title = (story as { title?: string })?.title ?? "";
  } catch {
    title = "";
  }

  const componentName = title ? componentNameFromTitle(title) : null;
  const links = componentName
    ? componentLinks(componentName, title)
    : siteWideLinks();

  return (
    <DocsContainer {...props}>
      <div className={`sds-root ${styles.docsContainer}`} data-sds-theme="light">
        <DocResources
          title={componentName ? `Resources · ${componentName}` : "Resources"}
          links={links}
        />
      </div>
      {children}
    </DocsContainer>
  );
}
