import { registerApplication, start } from "single-spa";
import { constructApplications, constructRoutes } from "single-spa-layout"

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

/**
 * 之前的
 */
// registerApplication('@single-spa/welcome',() =>
// System.import(
//   "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
// ),(location) => location.pathname === '/');

// registerApplication({
//   name: "@study/layout",
//   app: () => System.import("@study/layout"),
//   activeWhen: ["/layout"]
// });

// registerApplication({
//   name: "@study/todos",
//   app: () => System.import("@study/todos"),
//   activeWhen: ["/todos"]
// });
// registerApplication({
//   name: "@study/realworld",
//   app: () => System.import("@study/realworld"),
//   activeWhen: ["/realworld"]
// });

/**
 * 顶级路由
 */

// 获取路由配置对象
const routes = constructRoutes(document.querySelector("#single-spa-layout"))
// 获取路由信息数组
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name)
  }
})

// 遍历路由信息注册应用
applications.forEach(registerApplication)

start({
  urlRerouteOnly: true,
});
