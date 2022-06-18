const { ipcRenderer: e, contextBridge: n } = require("electron");
let o = ["init_app_config"];
n.exposeInMainWorld("_jsBridge", {
  call: async (n, a) =>
    o.includes(n)
      ? (function (e) {
          let n;
          try {
            n = new URL(e);
          } catch {}
          return !(
            !n ||
            ![
              "kaiheila.cn",
              "www.kaiheila.cn",
              "m.kaiheila.cn",
              "ttt.dev.chuanyuapp.com",
              "m.dev.chuanyuapp.com",
            ].includes(n.hostname)
          );
        })(window.location.href)
        ? new Promise((o, c) => {
            let i = `jsbridge_${n}_callback`;
            e.once(i, (e, n) => {
              0 == n.code ? o(n.data) : c(n);
            }),
              (async function (n, o) {
                let a = await e.invoke("get_main_webcontent_id");
                e.sendTo(a, "jsbridge_" + n, o);
              })(n, { params: a, callbackEventName: i });
          })
        : Promise.reject("当前域名无法执行此方法")
      : Promise.reject("执行未定义的方法：" + n),
}),
  console.log("preload"),
  window.document.addEventListener("keydown", (n) => {
    "F5" == n.key &&
      (n.ctrlKey
        ? e.sendToHost("webview_reloadIgnoringCache")
        : window.location.reload());
  });
