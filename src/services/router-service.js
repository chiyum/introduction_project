import { createRouter, createWebHashHistory } from "vue-router";
import createRoutes from "@/_app/routes";

/* 設定預設導入頁面 */
const options = {
  defaultPath: "/home",
};
/* 建立router */
const router = createRouter({
  //hash模式
  history: createWebHashHistory(import.meta.env.BASE_URL),
  //掛載處理好的routes
  routes: createRoutes(options),
  scrollBehavior() {
    /** 換頁捲軸回到上方 */
    return { top: 0 };
  },
});

// router.beforeEach(() => {
//   console.log("切換頁面");
// });

export default router;
