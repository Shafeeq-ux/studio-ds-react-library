import type { Preview } from "@storybook/react";
import "../src/tokens/tokens.css";
import "../src/styles/base.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "studio-surface",
      values: [
        { name: "studio-surface", value: "#f7f6f3" },
        { name: "raised", value: "#ffffff" },
        { name: "ink", value: "#12141a" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="sds-root" style={{ minWidth: "min(100%, 42rem)" }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
