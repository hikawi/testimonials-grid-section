<script setup lang="ts">
import { computed, onMounted, onUpdated, ref } from "vue";
import PatternQuotation from "./icons/PatternQuotation.vue";
import ScrollableTag from "./ScrollableTag.vue";
import UserProfile from "./UserProfile.vue";

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
  "order-1 lg:col-start-1 lg:row-start-1 col-span-2",
  "order-2 lg:col-start-3 lg:row-start-1",
  "order-3 lg:col-start-4 row-span-2 xl:max-h-full",
  "order-4 lg:col-start-1 lg:row-start-2",
  "order-5 lg:col-start-2 col-span-2 lg:row-start-2",
];
const cardPosition = computed(() => cardPositions[props.pos]);
const normalisedName = props.name.toLowerCase().replace(" ", "-");

let scrollable = ref(false);

function checkScrollable() {
  const el = document.getElementById(`content-${normalisedName}`);
  scrollable.value = el ? el.scrollHeight > el.clientHeight : false;
}

onMounted(() => {
  checkScrollable();
  window.addEventListener("resize", checkScrollable);
  return () => window.removeEventListener("resize", checkScrollable);
});

onUpdated(() => {
  checkScrollable();
});
</script>

<template>
  <div
    class="flex flex-col p-8 gap-4 rounded-lg relative shadow-lg h-full xl:max-h-[360px] hover:duration-100 hover:scale-[1.01] active:opacity-70"
    :class="cardTheme + ' ' + cardPosition"
  >
    <ScrollableTag :show="scrollable" />
    <UserProfile :name :img :title :theme />
    <PatternQuotation v-show="props.theme === 0" class="top-0 right-[15%] absolute" />
    <h3 class="text-2xl font-semibold z-10 leading-tight">
      <slot name="headline"></slot>
    </h3>
    <p class="overflow-y-scroll opacity-70" :id="'content-' + normalisedName">
      <slot name="content"></slot>
    </p>
  </div>
</template>
