<script setup lang="ts">
import { withBase } from "vitepress";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    /** Storybook story id, e.g. components-core-button--primary */
    id: string;
    title?: string;
    height?: string;
  }>(),
  {
    title: "Interactive preview",
    height: "280px",
  },
);

const src = computed(() =>
  withBase(
    `/storybook/iframe.html?id=${encodeURIComponent(props.id)}&viewMode=story&shortcuts=false&singleStory=true`,
  ),
);

const openHref = computed(() =>
  withBase(`/storybook/?path=/story/${props.id}`),
);
</script>

<template>
  <div class="sds-preview">
    <div class="sds-preview__bar">
      <strong>{{ title }}</strong>
      <a :href="openHref" target="_blank" rel="noreferrer">Open in Storybook ↗</a>
    </div>
    <iframe
      class="sds-preview__frame"
      :src="src"
      :title="title"
      :style="{ height }"
      loading="lazy"
      allow="clipboard-write"
    />
  </div>
</template>
