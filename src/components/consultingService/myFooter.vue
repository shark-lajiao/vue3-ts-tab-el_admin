<template>
  <div>
    <el-input
      placeholder="请输入内容"
      v-model="input"
      @keyup.enter.native="send"
    >
    </el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "myMain",
  setup(props, { emit }) {
    const input = ref("");
    const send = () => {
      emit("send", input.value);
    };
    return {
      input,
      send,
    };
  },
});
</script>

<style scoped></style>
