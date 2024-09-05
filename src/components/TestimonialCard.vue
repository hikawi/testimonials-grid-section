<script setup lang="ts">
import { computed } from "vue";
import UserProfile from "./UserProfile.vue";
import PatternQuotation from "./icons/PatternQuotation.vue";

const props = defineProps<{
  name: string;
  img: string;
  title: string;
  theme: number;
  pos: number;
}>();

const cardThemes = [
  "bg-primary-violet text-white",
  "bg-primary-gray-blue text-white",
  "bg-primary-black-blue text-white",
  "bg-white text-primary-black-blue",
];
const cardTheme = cardThemes[props.theme];

const cardPositions = [
  "lg:col-start-1 lg:row-start-1 col-span-2",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-4 row-span-2 max-h-full",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-2 col-span-2 lg:row-start-2",
];
const cardPosition = computed(() => cardPositions[props.pos]);
</script>

<template>
  <div class="flex flex-col p-8 gap-4 rounded-lg relative shadow-lg max-h-[360px]" :class="cardTheme + ' ' + cardPosition">
    <UserProfile :name :img :title :theme />
    <PatternQuotation v-show="props.theme === 0" class="top-0 right-[15%] absolute" />
    <h3 class="text-2xl font-semibold z-10">
      <slot name="headline"></slot>
    </h3>
    <p class="overflow-y-scroll opacity-70">
      <slot name="content"></slot>
    </p>
  </div>
</template>
