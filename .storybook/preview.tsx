import type { Preview } from "@storybook/react-vite";
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
      options: {
        canvas: { name: "canvas", value: "#f5f6f8" },
        surface: { name: "surface", value: "#ffffff" },
        "dark-canvas": { name: "dark-canvas", value: "#131923" },
      },
    },
    options: {
      storySort: {
        order: [
          "Welcome",
          "Get started",
          ["Engineering", "Design"],
          "Foundations",
          ["Overview", "Tokens"],
          "Components",
          [
            "Status",
            "Core",
            "Forms",
            "Navigation",
            "Data",
            "AI",
            "Role play",
            "Sections",
          ],
          "Examples",
        ],
      },
    },
    docs: {
      toc: true,
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

  initialGlobals: {
    backgrounds: {
      value: "canvas"
    }
  }
};

export default preview;
