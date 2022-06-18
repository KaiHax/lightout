const { BrowserWindow: e, screen: t } = require("electron"),
  s = require("path"),
  { userStore: i, keys: n } = require("../storage/store"),
  { appLogger: o } = require("../log/logger"),
  a = o.label("[overlay-win]");
let r;
let l = !0;
const d = {
  setConfig(e) {
    let t = d.getConfig();
    Object.assign(t, e), i.set(n.overlay_config, t);
  },
  getConfig() {
    const e = require("../storage/setting");
    return Object.assign(
      {
        scale: 1,
        displayType: 1,
        position: {
          isRight: !1,
          isBottom: !1,
          x: 0,
          y: 0,
          xScale: 0,
          yScale: 0.39,
        },
      },
      i.get(n.overlay_config, e.get("overlay_config"))
    );
  },
  enable(e) {
    l = Boolean(e);
  },
  create(t) {
    a.info("[create]", `callback:${!!t},overlayWindow:${!!r}`),
      r
        ? t && t()
        : ((r = new e({
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            minimizable: !1,
            maximizable: !1,
            show: !1,
            frame: !1,
            skipTaskbar: !0,
            transparent: !0,
            webPreferences: { contextIsolation: !1, nodeIntegration: !0 },
          })),
          require("@electron/remote/main").enable(r.webContents),
          setTimeout(() => {
            r.setAlwaysOnTop(!0, "pop-up-menu");
          }, 1e3),
          r.setIgnoreMouseEvents(!0),
          r.on("closed", () => {
            r = null;
          }),
          r.once("ready-to-show", () => {
            a.info("[ready-to-show]"),
              setTimeout(() => {
                t && t();
              }, 100);
          }),
          r.loadFile(s.join(__dirname, "./index.html")));
  },
  open() {
    if ((a.info(`[open] enabled:${l}, overlayWindow:${!!r}`), l && r)) {
      let e = this.getConfig();
      const s = t.getPrimaryDisplay().workAreaSize;
      if (((e.screenSize = s), r.isDestroyed() || r.webContents.isCrashed()))
        return (
          a.error(
            "[open]",
            `isDestroyed:${r.isDestroyed()}, isCrashed:${r.webContents.isCrashed()}`
          ),
          (r = null),
          void d.create(() => {
            r.webContents.send("setconfig", e),
              r.setSize(s.width - 10, s.height - 10),
              r.showInactive();
          })
        );
      r.webContents.send("setconfig", e),
        r.setSize(s.width - 10, s.height - 10),
        r.showInactive();
    }
  },
  close() {
    r &&
      r.isVisible() &&
      (r.isDestroyed() || r.webContents.isCrashed()
        ? a.error(
            "[close]",
            `isDestroyed:${r.isDestroyed()}, isCrashed:${r.webContents.isCrashed()}`
          )
        : r.webContents.send("hide"));
  },
  dispatch(e) {
    l &&
      r &&
      !r.isDestroyed() &&
      !r.webContents.isCrashed() &&
      r.webContents.send("statechange", e);
  },
  setSelfInfo(e) {
    this.dispatch({ type: "selfChange", data: e });
  },
  notifyChannel(e) {
    this.dispatch({ type: "notifyChannel", data: e });
  },
  notifyMessage(e) {
    this.dispatch({ type: "notifyMessage", data: e });
  },
  talkListChange(e) {
    this.dispatch({ type: "talkListChange", data: e });
  },
  userListChange(e) {
    this.dispatch({ type: "userListChange", data: e });
  },
};
d.enable(!0), (module.exports = d);
