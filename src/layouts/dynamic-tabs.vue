<template>
  <el-tabs type="card" hide-add :modelValue="getActiveTab?.id" @tabClick="onTabSelect" @edit="onTabClose">
    <el-tab-pane v-for="(tab, index) in getTabList" :key="tab.id" :label="tab.title" :name="tab.id"
      :closable="index > 0"></el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts" name="DynamicTabs">
import { ElMessage } from "element-plus";
import { useAttribute, useTab } from "vue3-vanilla-tab";

const { getTabList, getActiveTab } = useAttribute();
const {
  openTab,
  closeTab,
  refreshTab,
  refreshTabAll,
  closeTabsByLeft,
  closeTabsByRight,
  closeTabsByOther,
  closeTabByAll,
} = useTab();

/**
 * 事件 - tab页右键菜单使用
 * @param tabKey tab页id(uuid)
 * @param menuEvent 自定义菜单事件
 */
const onContextMenuClick = async (tabKey: string, menuEvent: string) => {
  try {
    switch (menuEvent) {
      case "refresh":
        refreshTab(tabKey);
        break;
      case "close-left":
        closeTabsByLeft(tabKey);
        break;
      case "close-right":
        closeTabsByRight(tabKey);
        break;
      case "close-other":
        closeTabsByOther(tabKey);
        break;
      case "close-all":
        closeTabByAll();
        break;
      case "refresh-all":
        refreshTabAll();
        break;
    }
  } catch (error) {
    if (error) {
      ElMessage.error(error.message);
    }
  }
};

/**
 * 事件 - tab页被点击调用
 * @param tabKey tab页id(uuid)
 */
const onTabSelect = ({ paneName }) => {
  try {
    const findTab = getTabList.value.find((tab) => tab.id === paneName);
    if (findTab) {
      const { viewId, props, title } = findTab;
      openTab(viewId, props, { title });
    }
  } catch (error) {
    if (error) {
      ElMessage.error(error.message);
    }
  }
};

/**
 * 事件 - tab页被关闭时调用
 * @param tabKey tab页id(uuid)
 */
const onTabClose = (tabKey: string) => {
  try {
    closeTab(tabKey);
  } catch (error) {
    if (error) {
      ElMessage.error(error.message);
    }
  }
};
</script>

<style scoped>

</style>
