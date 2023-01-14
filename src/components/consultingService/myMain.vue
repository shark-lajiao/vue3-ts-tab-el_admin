<template>
  <div class="div1">
    <div v-for="(list, index) in msgList" :key="index">
      <div>
        <p :class="{ right: list.type == 'my' }">
          <el-avatar
            v-if="list.type == 'user'"
            :src="list.senderimg"
          ></el-avatar>
          <el-avatar
            v-if="list.type == 'my'"
            :src="list.senderimg"
            style="float: right"
          ></el-avatar>
          <span class="content">{{ list.msg }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  msgList: any;
}>();
</script>

<style scoped>
.div1 {
  width: 100%;
}
.div1 P {
  width: 100%;
  height: 50px;
}
.content {
  background-color: antiquewhite;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
}
.right {
  text-align: right;
}
</style>
