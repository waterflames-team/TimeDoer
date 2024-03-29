import { createRouter, createWebHistory } from "vue-router";

import type { RouteRecordRaw } from "vue-router";
import type { WindowOptions } from "@tauri-apps/api/window";

const commonTitle = "睹时-";

const commonOption: WindowOptions = {
  resizable: false,
  fullscreen: false,
  maximized: false,
  decorations: false,
  transparent: true
};

export const routes = [
  {
    path: "/",
    name: "Starter",
    component: () => import("@/pages/Starter/index.vue")
  },
  {
    path: "/theme",
    name: "Theme",
    component: () => import("@/pages/Theme/index.vue")
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/pages/Main/index.vue"),
    children: [
      {
        path: "timer",
        name: "Timer",
        component: () => import("@/pages/Main/tabs/timer.vue"),
      },
      {
        path: "schedule",
        name: "Schedule",
        component: () => import("@/pages/Main/tabs/schedule.vue"),
      },
      {
        path: "history",
        name: 'History',
        component: () => import("@/pages/Main/tabs/history.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[]
});

export default router;
