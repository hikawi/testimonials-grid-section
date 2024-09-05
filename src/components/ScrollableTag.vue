<script setup lang="tsx">
defineProps<{
  show: boolean;
}>();
</script>

<template>
  <div class="absolute top-0 right-0 z-20 translate-x-2 -translate-y-2 bg-sky-300 text-black py-1 px-3" v-show="show">Scrollable</div>
</template>
