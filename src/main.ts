import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
//路由
// import router from "./router";
//tab
import dynamicTabs from "./tab";
import { useElementPlus } from "./plugins/element.plugin";
import { useVxeTable } from "./plugins/vxe.plugin";

createApp(App)
  .use(dynamicTabs)
  .use(store)
  // .use(router)
  .use(useVxeTable)
  .use(useElementPlus)
  .mount("#app");
