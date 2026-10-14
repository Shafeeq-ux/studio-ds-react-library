import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "node:path";

const isStorybook = Boolean(process.env.STORYBOOK);

export default defineConfig({
  plugins: isStorybook
    ? [react()]
    : [
        react(),
        libInjectCss(),
        dts({
          include: ["src"],
          exclude: ["src/**/*.stories.tsx", "src/**/*.stories.ts"],
          rollupTypes: true,
          tsconfigPath: "./tsconfig.build.json",
        }),
        viteStaticCopy({
          targets: [
            {
              src: "src/tokens/tokens.css",
              dest: ".",
              rename: "tokens.css",
            },
          ],
        }),
      ],
  build: isStorybook
    ? {}
    : {
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "StudioDS",
          formats: ["es"],
          fileName: "studio-ds",
        },
        rollupOptions: {
          external: ["react", "react-dom", "react/jsx-runtime"],
        },
      },
});
