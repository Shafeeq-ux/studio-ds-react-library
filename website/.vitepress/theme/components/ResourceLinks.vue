<script setup lang="ts">
import { withBase } from "vitepress";

const props = withDefaults(
  defineProps<{
    github?: string;
    figma?: string;
    storybook?: string;
    githubLabel?: string;
    figmaLabel?: string;
    storybookLabel?: string;
  }>(),
  {
    github: "https://github.com/Shafeeq-ux/studio-ds-react-library",
    figma: "https://www.figma.com/design/8wXGfy006ncSwwx6BPrAAh/Studio-DS",
    storybook: "",
    githubLabel: "GitHub repo",
    figmaLabel: "Figma · Studio DS",
    storybookLabel: "Storybook playground",
  },
);

const storybookHref = props.storybook || withBase("/storybook/");

const items = [
  { href: props.github, label: props.githubLabel, hint: "Source & issues" },
  { href: props.figma, label: props.figmaLabel, hint: "Design source of truth" },
  {
    href: storybookHref,
    label: props.storybookLabel,
    hint: "Interactive controls & API",
  },
];
</script>

<template>
  <div class="sds-resource-grid">
    <a
      v-for="item in items"
      :key="item.href"
      class="sds-resource-card"
      :href="item.href"
      :target="item.href.startsWith('http') ? '_blank' : undefined"
      :rel="item.href.startsWith('http') ? 'noreferrer' : undefined"
    >
      <strong>{{ item.label }}</strong>
      <span>{{ item.hint }}</span>
    </a>
  </div>
</template>
