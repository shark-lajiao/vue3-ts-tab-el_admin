<template>
  <el-sub-menu :index="view.id">
    <template #icon>
      <component v-if="view.icon" :is="view.icon" />
    </template>
    <template #title>{{ view.title }}</template>
    <template v-for="item in view.children">
      <template v-if="item.children.length <= 0">
        <el-menu-item :index="item.id" v-if="!item.hidden">
          <template #icon>
            <component v-if="item.icon" :is="item.icon" />
          </template>
          {{ item.title }}
        </el-menu-item>
      </template>
      <template v-else>
        <DynamicMenuItem :view="item" />
      </template>
    </template>
  </el-sub-menu>
</template>

<script lang="ts" setup>
import DynamicMenuItem from "./item.vue";
import { toRefs } from "vue";
import { View } from "vue3-vanilla-tab";

const props = defineProps<{
  view: View;
}>();

const { view } = toRefs(props);
</script>

<style scoped></style>
