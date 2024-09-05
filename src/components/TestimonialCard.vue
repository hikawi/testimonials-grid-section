<script setup lang="ts">
import { computed, nextTick, onMounted, onUpdated, ref, useTemplateRef } from "vue";
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
const normalisedName = props.name.toLowerCase().replace(" ", "-");

let scrollable = ref(false);

onUpdated(() => {
  scrollable.value = isScrollable();
});

function isScrollable() {
  const el = document.getElementById(`content-${normalisedName}`);
  console.log(normalisedName, el?.scrollHeight, el?.offsetHeight);
  return el ? el.scrollHeight > el.clientHeight : false;
}
</script>

<template>
  <div
    class="flex flex-col p-8 gap-4 rounded-lg relative shadow-lg max-h-[360px] hover:duration-100 hover:scale-105 active:opacity-70"
    :class="cardTheme + ' ' + cardPosition"
  >
    <div class="absolute top-0 right-0 z-20 translate-x-2 -translate-y-2 bg-sky-300 text-black py-1 px-3" v-show="scrollable">
      Scrollable
    </div>
    <UserProfile :name :img :title :theme />
    <PatternQuotation v-show="props.theme === 0" class="top-0 right-[15%] absolute" />
    <h3 class="text-2xl font-semibold z-10">
      <slot name="headline"></slot>
    </h3>
    <p class="overflow-y-scroll opacity-70" :id="'content-' + normalisedName">
      <slot name="content"></slot>
    </p>
  </div>
</template>
