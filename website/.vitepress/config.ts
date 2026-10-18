import { defineConfig } from "vitepress";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "/studio-ds-react-library/";
/** Site-relative — VitePress applies `base` itself. */
const STORYBOOK = "/storybook/";
const GITHUB = "https://github.com/Shafeeq-ux/studio-ds-react-library";
const FIGMA =
  "https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS";

const generatedSidebar = JSON.parse(
  readFileSync(join(__dirname, "sidebar.gen.json"), "utf8"),
);

export default defineConfig({
  title: "Studio DS",
  description:
    "Studio Design System — foundations, React + TypeScript components, and guidelines.",
  base: BASE,
  outDir: "../site-dist",
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    ["link", { rel: "icon", href: `${BASE}favicon.svg` }],
    ["meta", { name: "theme-color", content: "#1a2332" }],
  ],
  themeConfig: {
    logo: { light: "/logo.svg", dark: "/logo.svg", alt: "Studio DS" },
    siteTitle: "Studio DS",
    nav: [
      { text: "Get started", link: "/get-started/" },
      { text: "Foundations", link: "/foundations/" },
      { text: "Components", link: "/components/" },
      { text: "Resources", link: "/resources/" },
      {
        text: "Links",
        items: [
          { text: "Storybook playground", link: STORYBOOK },
          { text: "GitHub", link: GITHUB },
          { text: "Figma", link: FIGMA },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: GITHUB }],
    sidebar: {
      "/get-started/": [
        {
          text: "Get started",
          items: [
            { text: "Overview", link: "/get-started/" },
            { text: "Engineering path", link: "/get-started/engineering" },
            { text: "Design path", link: "/get-started/design" },
            { text: "Theming", link: "/get-started/theming" },
            { text: "Using components", link: "/get-started/using-components" },
          ],
        },
      ],
      "/foundations/": [
        {
          text: "Foundations",
          items: [
            { text: "Overview", link: "/foundations/" },
            { text: "Design tokens", link: "/foundations/design-tokens" },
            { text: "Color", link: "/foundations/color" },
            { text: "Typography", link: "/foundations/typography" },
            { text: "Spacing & radius", link: "/foundations/spacing" },
            { text: "Elevation", link: "/foundations/elevation" },
            { text: "Iconography", link: "/foundations/iconography" },
          ],
        },
      ],
      ...generatedSidebar,
      "/resources/": [
        {
          text: "Resources",
          items: [
            { text: "Tools & resources", link: "/resources/" },
            { text: "Figma libraries", link: "/resources/figma" },
            { text: "Storybook", link: "/resources/storybook" },
            { text: "GitHub & npm", link: "/resources/code" },
            { text: "Changelog", link: "/resources/changelog" },
          ],
        },
      ],
    },
    footer: {
      message: "Studio DS · React + TypeScript design system",
      copyright:
        "Living documentation — always in progress. Hosted on GitHub Pages.",
    },
    search: { provider: "local" },
    outline: { level: [2, 3] },
  },
});
