<script setup lang="ts">
defineProps<{ status: "stable" | "beta" | "draft" }>();
</script>

<template>
  <span class="sds-status" :class="`sds-status--${status}`">{{ status }}</span>
</template>
