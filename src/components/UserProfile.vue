<script setup lang="ts">
const props = defineProps<{
  name: string;
  title: string;
  img: string;
}>();
</script>

<template>
  <div class="flex flex-row items-center justify-start gap-4 w-full">
    <img :src="img" :alt="name" :width="40" :height="40" class="rounded-full" />
    <div class="flex flex-col h-full leading-none gap-1">
      <h1>{{ name }}</h1>
      <h2 class="opacity-50">{{ title }}</h2>
    </div>
  </div>
</template>
