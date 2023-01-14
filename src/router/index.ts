import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import { IViewList, ViewTypeEnum } from "vue3-vanilla-tab";
/**
 * 路由配置
 */
export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/test",
    component: () => import("../views/test.vue"),
  },
  {
    path: "/eachart",
    component: () => import("../views/eachart.vue"),
  },
  {
    path: "/antion", //动画
    component: () => import("../views/an.vue"),
  },
  {
    path: "/gasp", //动画
    component: () => import("../views/gsap.vue"),
  },
  {
    path: "/one", //动画
    component: () => import("../views/animations/one.vue"),
  },
  {
    path: "/antv", //动画
    component: () => import("../views/antv.vue"),
  },
];
/**
 * tab配置
 */
export const viewTree: IViewList = [
  {
    id: "001",
    name: "Test001",
    title: "首页",
    type: ViewTypeEnum.MENU,
    path: "../views/login/index.vue",
  },
  {
    id: "002",
    name: "Test002",
    title: "测试",
    type: ViewTypeEnum.MENU,
    path: "../views/animations/one.vue",
  },
  {
    id: "003",
    title: "测试目录",
    type: ViewTypeEnum.DIR,
    children: [
      {
        id: "004",
        name: "Test003",
        title: "动画01",
        type: ViewTypeEnum.MENU,
        path: "../views/an.vue",
      },
      {
        id: "006",
        name: "Test006",
        title: "动画02",
        type: ViewTypeEnum.MENU,
        path: "../views/antv.vue",
      },
      {
        id: "007",
        name: "Test007",
        title: "动画03",
        type: ViewTypeEnum.MENU,
        path: "../views/tests/eachart.vue",
      },
    ],
  },
  {
    id: "005",
    title: "内联",
    type: ViewTypeEnum.IFRAME,
    link: "http://139.186.198.135/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.getItem("token");
//   if (to.path == "/") {
//     next();
//   } else {
//     if (isLogin) {
//       next();
//     } else {
//       next("/");
//     }
//   }
// });
