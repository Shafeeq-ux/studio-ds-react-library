<script setup lang="ts">
import { withBase } from "vitepress";
import { computed } from "vue";

const props = defineProps<{
  figma: string;
  storybook: string;
  react: string;
  css?: string;
  name: string;
}>();

const storybookHref = computed(() =>
  props.storybook.startsWith("http")
    ? props.storybook
    : withBase(props.storybook),
);
</script>

<template>
  <div class="sds-resource-grid">
    <a class="sds-resource-card" :href="figma" target="_blank" rel="noreferrer">
      <strong>Figma · Studio DS</strong>
      <span>Design source of truth</span>
    </a>
    <a class="sds-resource-card" :href="storybookHref">
      <strong>Storybook</strong>
      <span>Interactive playground &amp; Controls</span>
    </a>
    <a class="sds-resource-card" :href="react" target="_blank" rel="noreferrer">
      <strong>React + TypeScript</strong>
      <span>{{ name }}.tsx source</span>
    </a>
    <a
      v-if="css"
      class="sds-resource-card"
      :href="css"
      target="_blank"
      rel="noreferrer"
    >
      <strong>CSS Module</strong>
      <span>{{ name }}.module.css</span>
    </a>
  </div>
</template>
