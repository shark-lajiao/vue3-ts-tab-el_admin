<template>
  <div class="container">
    <div class="header">
      <DynamicCrumbs />
    </div>
    <div class="body">
      <div class="menu">
        <DynamicMenus />
      </div>
      <div class="main">
        <div class="tabs">
          <DynamicTabs />
        </div>
        <div class="content">
          <DynamicContent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import DynamicCrumbs from "./layouts/dynamic-crumbs.vue";
import DynamicTabs from "./layouts/dynamic-tabs.vue";
import DynamicMenus from "./layouts/dynamic-menus/index.vue";
import { DynamicContent } from "vue3-vanilla-tab";
import dynamicTabs from "@/tab";
import { viewTree } from "@/router/index";

dynamicTabs.destory();

onMounted(() => {
  dynamicTabs.initDynamicViews(viewTree);
});
</script>

<style scoped>
.container {
  height: 100%;
}

.container .header {
  height: 40px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container .body {
  height: calc(100vh - 40px);
  display: flex;
}

.container .body .menu {
  width: 240px;
  height: 100%;
  border-right: 1px solid #ccc;
}

.container .body .main {
  flex: 1;
}

.container .body .main .tabs :deep(.ant-tabs-nav) {
  margin: 0;
}

.container .body .main .content {
  height: calc(100% - 48px);
  overflow-x: hidden;
  padding: 8px;
}
</style>
