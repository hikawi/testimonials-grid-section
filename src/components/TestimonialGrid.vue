<script setup lang="ts">
import { reactive } from "vue";
import DanielCard from "./cards/DanielCard.vue";
import JeanetteCard from "./cards/JeanetteCard.vue";
import JonathanCard from "./cards/JonathanCard.vue";
import KiraCard from "./cards/KiraCard.vue";
import PatrickCard from "./cards/PatrickCard.vue";

const state = reactive({
  daniel: 0,
  jonathan: 1,
  kira: 2,
  jeanette: 3,
  patrick: 4,
});

function shuffleArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function randomizeState() {
  const numbers = [0, 1, 2, 3, 4];
  shuffleArray(numbers);
  [state.daniel, state.jonathan, state.kira, state.jeanette, state.patrick] = numbers;
}
</script>

<template>
  <div class="flex flex-col xl:grid-cols-4 xl:grid-rows-2 lg:w-1/2 xl:grid gap-8 xl:w-full 2xl:w-3/4 3xl:w-2/3 xl:h-1/2">
    <DanielCard :pos="state.daniel" />
    <JonathanCard :pos="state.jonathan" />
    <JeanetteCard :pos="state.jeanette" />
    <PatrickCard :pos="state.patrick" />
    <KiraCard :pos="state.kira" />
  </div>
  <button
    class="bg-primary-black-blue font-semibold text-white fixed bottom-4 left-1/2 -translate-x-1/2 py-2 px-4 rounded-lg z-20"
    @click="randomizeState"
  >
    Randomize
  </button>
</template>
