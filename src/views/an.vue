<template>
  <div><div v-for="item in arr" :class="box"></div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const box = "box";
    const arr = ref(1);
    setInterval(() => {
      arr.value++;
    }, 1000);
    return { box, arr };
  },
});
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
  margin: 10px;
  animation: name 5s forwards;
  opacity: 0;
}
/* 动画依次加载 */
@keyframes name {
  /*百分比指的是动画完成时的百分比*/
  0% {
    opacity: 0.1;
  }
  10% {
    opacity: 0.2;
  }
  20% {
    opacity: 0.3;
  }
  30% {
    opacity: 0.4;
  }
  40% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
