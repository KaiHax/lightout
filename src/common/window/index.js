const {
    shell: e,
    ipcMain: n,
    screen: o,
    BrowserWindow: t,
  } = require("electron"),
  i = require("path"),
  r = require("../../utils/bindEventDevTools"),
  a = {};
let l = 1;
n.on("common-window-open", (n, o) => {
  let {
      title: s = "开黑啦",
      width: d = 600,
      height: w = 500,
      minWidth: m,
      minHeight: c,
      center: h,
      frame: u = !0,
      show: g = !0,
      backgroundColor: p = "#6d7888",
      reloadUrl: b = !0,
      offscreen: f,
      thickFrame: k,
      data: x,
    } = o,
    C = o.id;
  C || (C = l++);
  let M = a[C];
  if (M) {
    if (
      !M.isVisible() &&
      (M.isMaximized() && M.unmaximize(), M.setSize(d, w), h)
    ) {
      if (t.mainWindow) {
        let e = t.mainWindow.getPosition();
        M.setPosition(...e);
      }
      M.center();
    }
    return (
      g && M.show(),
      b
        ? M.loadURL(o.url).then(() => {
            M.webContents.send("load-data", x);
          })
        : M.webContents.send("load-data", x),
      void (n.returnValue = C)
    );
  }
  (M = a[C] =
    new t({
      title: s,
      width: d,
      height: w,
      minWidth: m,
      minHeight: c,
      center: h,
      frame: u,
      show: g,
      backgroundColor: p,
      offscreen: f,
      thickFrame: k,
      parent: o.dialog ? t.mainWindow : null,
      webPreferences: {
        contextIsolation: !1,
        preload: i.join(__dirname, "../../preload/commonpreload.js"),
      },
    })),
    require("@electron/remote/main").enable(M.webContents),
    M.on("closed", () => {
      a[C] = null;
    }),
    r(M),
    M.webContents.on("new-window", (n, o) => {
      n.preventDefault(), e.openExternal(o);
    }),
    M.loadURL(o.url).then(() => {
      M.webContents.send("load-data", x);
    }),
    M.webContents.on("render-process-gone", (e, n) => {
      console.log("common win render gone", n), M.close(), (a[C] = null);
    }),
    M.webContents.on("unresponsive", () => {
      console.log("common win render unresponsive");
    }),
    (n.returnValue = C),
    n.sender && n.sender.send("common-window-open-callback", C);
}),
  n.on("common-window-close", (e, n) => {
    let o = a[n];
    o && o.close();
  }),
  n.on("common-window-restore-position", (e, n) => {
    let t = a[n];
    if (t) {
      let e = t.getBounds(),
        n = o.getDisplayMatching(e),
        i = e.x,
        r = e.y;
      (i = Math.min(e.x + e.width, n.workArea.x + n.workArea.width) - e.width),
        (r =
          Math.min(e.y + e.height, n.workArea.y + n.workArea.height) -
          e.height),
        (i = Math.max(i, n.workArea.x)),
        (r = Math.max(r, n.workArea.y)),
        (i === e.x && r === e.y) || t.setPosition(i, r);
    }
  });
