<template>
  <div style="height: 100vh"></div>
  <div
    ref="box11"
    class="box11"
    style="width: 90vw; height: 400px; border: 2px solid red"
  >
    <div
      ref="box5"
      class="box5"
      style="width: 50px; height: 200px; border: 2px solid red"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
