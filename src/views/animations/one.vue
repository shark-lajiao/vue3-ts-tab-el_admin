<template>
  <div class="container">
    <div class="box"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
  setup() {
    onMounted(() => {
      gsap.to(".box", {
        scrollTrigger: {
          trigger: ".box",
          markers: true,
          scrub: true,
        },
        x: 500,
        y: 500,
        backgroundColor: "red",
        duration: 5,
      });
    });

    return {};
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .box {
    width: 100px;
    height: 100px;
    background-color: red;
    margin-top: 1000px;
    margin-bottom: 1000px;
  }
}
</style>
