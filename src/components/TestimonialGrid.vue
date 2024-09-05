<script setup lang="ts">
import DanielCard from "./cards/DanielCard.vue";
import JeanetteCard from "./cards/JeanetteCard.vue";
import JonathanCard from "./cards/JonathanCard.vue";
import KiraCard from "./cards/KiraCard.vue";
import PatrickCard from "./cards/PatrickCard.vue";
</script>

<template>
  <div class="flex flex-col lg:grid-cols-4 lg:grid-rows-2 lg:grid gap-8 xl:w-2/3">
    <DanielCard />
    <JonathanCard />
    <JeanetteCard />
    <PatrickCard />
    <KiraCard />
  </div>
</template>
