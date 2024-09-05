<script setup lang="ts">
import TestimonialCard from "../TestimonialCard.vue";

defineProps<{
  pos: number;
}>();
</script>

<template>
  <TestimonialCard name="Patrick Abrams" title="Verified Graduate" img="/image-patrick.jpg" :theme="2" :pos>
    <template v-slot:headline>
      Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was
      easy.
    </template>
    <template v-slot:content>
      “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to
      be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the
      personal attention you need from an incredible community of smart and amazing people. ”
    </template>
  </TestimonialCard>
</template>
