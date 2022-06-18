const {
    BrowserWindow: e,
    dialog: o,
    screen: n,
    ipcMain: t,
    app: r,
  } = require("electron"),
  s = require("path");
let l = !1,
  i = () => {},
  a = null;
t.on("screenshot-close-event", (e, o) => {
  for (let e = 0; e < c.length; e++)
    c[e].webContents.send("screenshot-close-all-event");
  (l = !1), null != a && (a(o), o.saveToClipboard && i("confirm")), (a = null);
}),
  t.on("screenshot-save-event", (e) => {
    i("save");
  }),
  t.on("screenshot-clip-event", (e, o) => {
    for (let e = 0; e < c.length; e++)
      c[e].webContents.send("screenshot-clip-event", o);
  });
let c = [];
global.varsForWindow = { desktopWindowInfo: [] };
(exports.startSreenshot = function (t = null, i = !0, u = !0, h = null) {
  a = h;
  const d = require("../node-screenshot/build/Release/screenshot");
  global.varsForWindow.desktopWindowInfo = d.getDeskTopWindowInfo();
  let f = !i;
  console.log("needCombine= " + f), console.time("截图耗时");
  let b = d.getMultiScreenshot(f);
  console.timeEnd("截图耗时"),
    (global.varsForWindow.allMonitors = b.allMonitors),
    (global.varsForWindow.screenshotCursorPos = {
      cursorX: b.cursorX,
      cursorY: b.cursorY,
    }),
    n.getCursorScreenPoint();
  let g = 0;
  for (let e = 0; e < b.allMonitors.length; e++)
    b.allMonitors[e].hasCursor && (g = e);
  if (null != t) {
    let e = null;
    if (((e = i ? b.allMonitors[g] : b.combineMonitor), null != e)) {
      let n = e.imgBuf,
        r = n.buffer.slice(n.byteOffset, n.byteLength + n.byteOffset);
      require("fs").writeFile(t, Buffer.from(r), function (e) {
        e && o.showErrorBox("错误！", "截图保存失败，目录没有权限");
      });
    }
  }
  let w = n.getAllDisplays();
  if (u && !l) {
    (l = !0), (c = []);
    for (let o = 0; o < w.length; o++) {
      let n = w[o],
        t = new e({
          x: n.bounds.x,
          y: n.bounds.y,
          width: n.bounds.width,
          height: n.bounds.height,
          transparent: !0,
          frame: !1,
          movable: !1,
          resizable: !1,
          enableLargerThanScreen: !0,
          skipTaskbar: !0,
          hasShadow: !1,
          thickFrame: !1,
          webPreferences: {
            nodeIntegration: !0,
            enableRemoteModule: !0,
            contextIsolation: !1,
            zoomFactor: n.scaleFactor,
          },
        });
      t.on("closed", function () {
        l = !1;
      });
      let i = { index: o };
      c.push(t),
        t.loadFile(s.join(__dirname, "screenshot_window.html"), {
          query: { data: JSON.stringify(i) },
        }),
        t.setSize(n.bounds.width, n.bounds.height),
        t.webContents.on("render-process-gone", (e, n) => {
          console.log("[screenshot main]", n), t.close();
          try {
            const e = require("fs"),
              n = require("path");
            e.writeFile(
              n.join(r.getPath("temp"), "screenshot.png"),
              global.varsForWindow.allMonitors[o].imgBuf.buffer
            );
          } catch {}
        });
    }
  }
}),
  (exports.setCallEvent = (e) => {
    i = e;
  });
