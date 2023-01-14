<template>
  <el-menu
    :default-active="getActiveTab?.viewId"
    @select="handleSelect"
    unique-opened
  >
    <template v-for="view in getViewTree">
      <!--menu-->
      <template v-if="view.children.length <= 0">
        <el-menu-item :index="view?.id" v-if="!view.hidden">
          <template #icon>
            <component v-if="view.icon" :is="view.icon" />
          </template>
          <span>{{ view.title }}</span>
        </el-menu-item>
      </template>
      <!--subMenu-->
      <template v-else>
        <DynamicMenuItem :view="view" />
      </template>
    </template>
  </el-menu>
</template>

<script lang="ts" setup name="DynamicMenus">
import DynamicMenuItem from "./item.vue";
import { useTab, useAttribute } from "vue3-vanilla-tab";
import { ElMessage } from "element-plus";
const { getActiveTab, getViewTree, getViewList } = useAttribute();
const { openTab } = useTab();

const handleSelect = (key: string) => {
  try {
    const findView = getViewList.value.find((item) => item.id == key);
    if (findView) {
      const { id, props, title } = findView;
      openTab(id, props as any, { title });
    }
  } catch (error) {
    ElMessage.error(error.message);
  }
};
</script>

<style scoped></style>
