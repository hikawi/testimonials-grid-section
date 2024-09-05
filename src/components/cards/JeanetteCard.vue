<script setup lang="ts">
import TestimonialCard from "../TestimonialCard.vue";

defineProps<{
  pos: number;
}>();
</script>

<template>
  <TestimonialCard name="Jeanette Harmon" title="Verified Graduate" img="/image-jeanette.jpg" :theme="3" :pos>
    <template v-slot:headline>An overall wonderful and rewarding experience</template>
    <template v-slot:content>
      “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
    </template>
  </TestimonialCard>
</template>
