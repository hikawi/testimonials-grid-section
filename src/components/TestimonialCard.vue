<script setup lang="ts">
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
  "lg:col-start-4 row-span-2",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-2 col-span-2 lg:row-start-2",
];
const cardPosition = cardPositions[props.pos];
const classes = cardTheme + " " + cardPosition;
</script>

<template>
  <div class="flex flex-col p-8 gap-4 rounded-lg relative" :class="classes">
    <UserProfile :name :img :title />
    <PatternQuotation v-show="props.theme === 0" class="top-0 right-[15%] absolute" />
    <h3 class="text-xl font-semibold z-10">
      <slot name="headline"></slot>
    </h3>
    <p class="overflow-y-scroll opacity-70">
      <slot name="content"></slot>
    </p>
  </div>
</template>
