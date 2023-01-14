<template>
  <div name="旅途" ref="journey" @click="tap">旅途</div>
</template>

<script lang="ts">
import { ref, onMounted, reactive } from "vue";

export default {
  setup() {
    const obj = reactive({});
    const journey = ref();
    console.log(journey, "journey");

    console.log(journey.value);
    const getref = (value) => {
      console.log(value, "value");

      const name = value.getAttribute("name");
      console.log(name);
    };
    const tap = () => {
      getref(journey.value);
      console.log(obj);
    };
    return { tap, journey };
  },
};
</script>

<style lang="scss" scoped></style>
