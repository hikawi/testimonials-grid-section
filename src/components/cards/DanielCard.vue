<script setup lang="ts">
import TestimonialCard from "../TestimonialCard.vue";
</script>

<template>
  <TestimonialCard name="Daniel Clifford" title="Verified Graduate" img="./src/assets/image-daniel.jpg" :theme="0" :pos="0">
    <template v-slot:headline>
      I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I
      got every penny's worth.
    </template>
    <template v-slot:content>
      “ I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had
      an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next
      12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working
      as a Software Engineer at a VR startup. ”
    </template>
  </TestimonialCard>
</template>
