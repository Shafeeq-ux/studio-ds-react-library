import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

/** Project Pages live at /<repo>/ — set STORYBOOK_BASE_PATH in CI (e.g. /studio-ds-react-library/). */
const base = process.env.STORYBOOK_BASE_PATH || "/";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-mcp", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, { base });
  },
};

export default config;
