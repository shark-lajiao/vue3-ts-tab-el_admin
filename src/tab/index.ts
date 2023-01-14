import "vue3-vanilla-tab/style.css";
import {
  createDynamicTabs,
  TransitionEnum,
} from "vue3-vanilla-tab";

const dynamicTabs = createDynamicTabs({
  cache: {
    storage: sessionStorage,
    prefixKey: "Vanilla_",
    timeout: 604800,
  },
  animate: TransitionEnum.ZOOM_FADE,
  modules: import.meta.glob("@/views/**/*.vue"),
  homeView: (viewTree) => viewTree[0],
});

export default dynamicTabs;

console.log(dynamicTabs);
