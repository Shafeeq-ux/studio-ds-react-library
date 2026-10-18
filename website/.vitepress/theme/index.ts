import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./custom.css";
import ResourceLinks from "./components/ResourceLinks.vue";
import ComponentResources from "./components/ComponentResources.vue";
import StatusPill from "./components/StatusPill.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ResourceLinks", ResourceLinks);
    app.component("ComponentResources", ComponentResources);
    app.component("StatusPill", StatusPill);
  },
} satisfies Theme;
