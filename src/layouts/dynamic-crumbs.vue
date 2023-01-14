<template>
  <el-breadcrumb>
    <el-breadcrumb-item v-for="crumb in getCrumbs">
      <a>{{ crumb.title }}</a>
      <template #overlay v-if="crumb.children && crumb.children.length > 0">
        <el-menu @click="onContextMenuClick">
          <template v-for="item in crumb?.children">
            <el-menu-item v-if="item.type == ViewTypeEnum.MENU" :key="item.id">
              <a>{{ item.title }}</a>
            </el-menu-item>
          </template>
        </el-menu>
      </template>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts" name="DynamicCrumbs">
import { ElMessage } from "element-plus";
import { useAttribute, useTab, ViewTypeEnum } from "vue3-vanilla-tab";

const { getCrumbs, getViewList } = useAttribute();
const { openTab } = useTab();

const onContextMenuClick = ({ key }) => {
  try {
    const findView = getViewList.value.find((item) => item.id == key);
    if (findView) {
      const { id, props, title } = findView;
      openTab(id, props as any, { title });
    }
  } catch (error) {
    if (error) {
      ElMessage.error(error.message);
    }
  }
};
</script>

<style scoped>

</style>
