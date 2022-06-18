const e = require("path"),
  {
    BrowserWindow: t,
    screen: i,
    ipcMain: n,
    shell: o,
    app: r,
  } = require("electron"),
  { globalStore: a, keys: s } = require("../../storage/store"),
  h = require("../../storage/setting");
module.exports = class {
  constructor() {}
  createWindow(l) {
    let c = i.getPrimaryDisplay();
    const g = {
      width: 1050,
      height: 700,
      ...a.get(s.win_size_state, h.get(h.keys.win_size_state)),
    };
    let d = new t({
      title: "崩溃提示",
      width: Math.min(c.size.width - 70, g.width),
      height: Math.min(c.size.height - 50, g.height),
      minWidth: Math.min(c.size.width - 70, 1050),
      minHeight: Math.min(c.size.height - 50, 700),
      backgroundColor: "#EDEEF0",
      frame: !0,
      show: !0,
      webPreferences: { contextIsolation: !1, nodeIntegration: !0 },
    });
    d.loadFile(e.join(__dirname, "./index.html")),
      d.on("close", function (e) {
        r.exit();
      }),
      n.on("btn_reopen_app", (e, t) => {
        l && l();
      }),
      n.on("btn_open_link", (e, t) => {
        o.openExternal("https://support.kaiheila.cn/af34/a9aa");
      });
  }
};
