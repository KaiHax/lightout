const e = require("path"),
  { app: t, BrowserWindow: r, dialog: n } = require("electron"),
  o = require("./node-image-editor/screenshot-startup"),
  { mkdirSync: i } = require("../utils");
module.exports = {
  start: async (e = !1) => (
    e && r.mainWindow && (r.mainWindow.hide(), r.mainWindow.minimize()),
    new Promise((t, n) => {
      o.startSreenshot(null, !0, !0, (n) => {
        e && r.mainWindow && (r.mainWindow.restore(), r.mainWindow.show()),
          t(n);
      });
    })
  ),
  full(t, r) {
    try {
      i(t), o.startSreenshot(e.join(t, r), !0, !1);
    } catch (e) {
      n.showErrorBox("错误！", "截图保存目录没有权限, 请更换其他目录");
    }
  },
  getDefaultPath() {
    let r = "";
    try {
      (r = e.join(t.getPath("home"), "Pictures/screenshots")), i(r);
    } catch {
      console.log("截图目录不存在");
    }
    return r;
  },
  setCallEvent(e) {
    o.setCallEvent(e);
  },
};
