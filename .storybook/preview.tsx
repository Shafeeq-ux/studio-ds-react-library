import type { Preview } from "@storybook/react";
import "../src/tokens/tokens.css";
import "../src/styles/base.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Studio DS color mode",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#f5f6f8" },
        { name: "surface", value: "#ffffff" },
        { name: "dark-canvas", value: "#131923" },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme as string) || "light";
      return (
        <div
          className="sds-root"
          data-sds-theme={theme}
          style={{
            minWidth: "min(100%, 42rem)",
            padding: "1rem",
            background:
              theme === "dark"
                ? "var(--sds-color-background-canvas)"
                : "var(--sds-color-background-canvas)",
            color: "var(--sds-color-text-primary)",
            borderRadius: 8,
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
