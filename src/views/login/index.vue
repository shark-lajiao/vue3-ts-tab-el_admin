<template>
  <vxe-table
    border
    show-header-overflow
    show-overflow
    :row-config="{ isHover: true }"
    :data="tableData2"
  >
    <vxe-column type="seq" title="序号" width="60"></vxe-column>
    <vxe-column field="name" title="Name"></vxe-column>
    <vxe-column field="sex" title="Sex"></vxe-column>
    <vxe-column field="age" title="Age"></vxe-column>
    <vxe-column field="address" title="Address"></vxe-column>
  </vxe-table>
  <!-- <ConsultingService :img="imguer" :x="100" :y="100" :mglist="list" /> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ConsultingService from "@/components/consultingService/index.vue";

export default defineComponent({
  setup() {
    const tableData2 = ref([
      {
        id: 10001,
        name: "Test1",
        role: "Develop",
        sex: "Man",
        age: 28,
        address: "test abc",
      },
      {
        id: 10002,
        name: "Test2",
        role: "Test",
        sex: "Women",
        age: 22,
        address: "Guangzhou",
      },
      {
        id: 10003,
        name: "Test3",
        role: "PM",
        sex: "Man",
        age: 32,
        address: "Shanghai",
      },
      {
        id: 10004,
        name: "Test4",
        role: "Designer",
        sex: "Women",
        age: 24,
        address: "Shanghai",
      },
    ]);
    const list = [
      {
        type: "my",
        sender: "0", //发送者id
        senderimg:
          "https://tse1-mm.cn.bing.net/th/id/OIP-C.7PkEg7sZyUr24KBYDuEmuAHaII?w=196&h=216&c=7&r=0&o=5&pid=1.7", //发送者的img
        receiver: "1", //接收方id
        time: "", //发送时间
        msg: "你好", //消息内容
      },
      {
        type: "my",
        sender: "0", //发送者id
        senderimg:
          "https://tse1-mm.cn.bing.net/th/id/OIP-C.7PkEg7sZyUr24KBYDuEmuAHaII?w=196&h=216&c=7&r=0&o=5&pid=1.7", //发送者的img
        receiver: "1", //接收方id
        time: "", //发送时间
        msg: "你好", //消息内容
      },
      {
        type: "user",
        sender: "0", //发送者id
        senderimg:
          "https://tse1-mm.cn.bing.net/th/id/OIP-C.7PkEg7sZyUr24KBYDuEmuAHaII?w=196&h=216&c=7&r=0&o=5&pid=1.7", //发送者的img
        receiver: "1", //接收方id
        time: "", //发送时间
        msg: "你好", //消息内容
      },
    ];
    const imguer = ref("assets/yuwolianxi.svg");
    return {
      tableData2,
      imguer,
      list,
    };
  },
  components: { ConsultingService },
});
</script>

<style lang="scss"></style>
