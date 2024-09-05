<script setup lang="ts">
import TestimonialCard from "../TestimonialCard.vue";
</script>

<template>
  <TestimonialCard name="Jonathan Walters" title="Verified Graduate" img="./src/assets/image-jonathan.jpg" :theme="1" :pos="1">
    <template v-slot:headline>The team was very supportive and kept me motivated</template>
    <template v-slot:content>
      “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the
      best investments I've made in myself. ”
    </template>
  </TestimonialCard>
</template>
