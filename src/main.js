console.log(new Date(), "[startup] main");
const e = require("fs"),
  o = require("@sentry/electron");
o.init({
  dsn: "https://a5c4ab752d6b4699a5086d2c832493d2@o1128081.ingest.sentry.io/6170400",
});
const {
    app: app,
    BrowserWindow,
    Menu: i,
    session: r,
    screen: s,
    powerMonitor: a,
    ipcMain: l,
    dialog: c,
    nativeImage: d,
    Tray: u,
  } = require("electron"),
  p = require("path"),
  m = require("./storage/setting"),
  { globalStore: h, keys: w, _eventBar: g } = require("./storage/store"),
  f = require("./common/system"),
  _ = require("./browser/index"),
  b = require("./config.json"),
  y = require("./log/logger").appLogger.label("[main]"),
  v = require("./server-proxy/local-server.js"),
  k = require("./common/crash-common/index");
let q = null,
  C = __dirname + "/common/tray-common/app-tray.js",
  x = e.existsSync(C);
console.log("console log to chrome exists", x),
  console.log(
    "console log to chrome __dirname",
    __dirname + "/common/tray-common/app-tray.js"
  ),
  x && (q = require("./common/tray-common/app-tray"));
const S = require("./utils/bindEventDevTools");
require("@electron/remote/main").initialize(),
  require("./common/window/index"),
  require("./voicehook/voicehook-main"),
  require("./audio-ai-helper/helper-main"),
  console.log(new Date(), "[startup] main require");
const M = new (require("electron-store"))();
let T = h.get(w.app_auto_launch_min, m.get(m.keys.app_auto_launch_min));
y.info("argv", process.argv);
let z,
  D,
  L = !(
    (process.argv.includes("-autoRun") || process.argv.includes("--hidden")) &&
    T
  ),
  R = !1;
function H() {
  clearTimeout(D),
    (D = setTimeout(() => {
      y.info(
        "[didFailLoad] reload",
        "not destroyed: " + (z && !z.isDestroyed())
      ),
        z && !z.isDestroyed() && ((R = !1), z.reload());
    }, 6e3));
}
function I() {
  R = !1;
  let e = s.getPrimaryDisplay();
  const o = {
    width: 1050,
    height: 700,
    ...h.get(w.win_size_state, m.get(m.keys.win_size_state)),
  };
  let r;
  function a() {
    z &&
      (z.destroy(),
      (z = null),
      process.nextTick(() => {
        B();
      }));
  }
  (z = new BrowserWindow({
    title: "开黑啦",
    width: Math.min(e.size.width - 70, o.width),
    height: Math.min(e.size.height - 50, o.height),
    minWidth: Math.min(e.size.width - 70, 1050),
    minHeight: Math.min(e.size.height - 50, 700),
    backgroundColor: "#42464c",
    frame: !1,
    show: L,
    webPreferences: {
      webSecurity: !1,
      contextIsolation: !1,
      preload: p.join(__dirname, "preload/preload.js"),
    },
  })),
    (BrowserWindow.mainWindow = z),
    L &&
      o.isMaximized &&
      setTimeout(() => {
        z.maximize();
      }),
    require("@electron/remote/main").enable(z.webContents),
    z.webContents.on("did-fail-load", (e, o, n, t, i, r, s) => {
      y.error("[webContents] [did-fail-load]", o, n, t, i, r, s),
        i && -3 !== o && ((R = !0), H());
    }),
    z.webContents.on("did-redirect-navigation", (e, o, n) => {
      y.error("[webContents] [did-redirect-navigation]", o, n);
    }),
    z.webContents.on("new-window", (e, o) => {
      e.preventDefault(), _.open({ url: o });
    }),
    z.webContents.on("render-process-gone", (e, o) => {
      if ("killed" === (o = o || {}).reason) return app.exit();
      let t = M.get("audioChannelInfo"),
        i = M.get("reconnetTime");
      var r = new Date().getTime();
      if ((i || (i = 0), t && (r - i) / 1e3 / 60 > 2)) {
        M.set({ reconnetTime: r, audioChannelInfo: null });
        z.webContents.getURL();
        return (
          z.destroy(),
          void process.nextTick(() => {
            I(),
              setTimeout(() => {
                z.loadURL("https://localhost:3000/app/discover"),
                  setTimeout(() => {
                    z.webContents.send("crash-reconnet-audio", t);
                  }, 3e3);
              }, 2e3);
          })
        );
      }
      z.destroy(),
        (z = null),
        process.nextTick(() => {
          B();
        });
    }),
    z.webContents.on("unresponsive", (e) => {
      y.error("[webContents] [unresponsive]", e),
        clearTimeout(r),
        (r = setTimeout(a, 1e4));
    }),
    z.webContents.on("responsive", (e) => {
      y.error("[webContents] [responsive]", e), clearTimeout(r);
    }),
    z.webContents.on("plugin-crashed", (e, o, n) => {
      y.error("[webContents] [plugin-crashed]", e, o, n);
    }),
    S(z),
    z.on("resize", () => {
      let e = h.get(w.win_size_state, m.get(m.keys.win_size_state));
      if (z.isMaximized()) e = { ...e, isMaximized: !0 };
      else {
        const o = z.getBounds();
        e = { ...e, ...o, isMaximized: !1 };
      }
      h.set(w.win_size_state, e);
    }),
    z.on("closed", function (e) {
      (z = null), clearTimeout(r);
    }),
    z.on("close", function (e) {
      h.get(w.win_close_to_tray, m.get(m.keys.win_close_to_tray, !0))
        ? (e.preventDefault(), z.hide())
        : app.exit();
    }),
    (function () {
      /*if (q) U = new q();
      else {
        let e = d.createFromPath(p.join(__dirname, "../resourse/kaiheila.ico"));
        (j = new u(e)),
          j.setToolTip(b.productName),
          j.on("click", () => {
            const { mainWindow: e } = BrowserWindow;
            e && !e.isDestroyed() && (e.isMinimized() && e.restore(), e.show());
          });
        const o = i.buildFromTemplate([
          {
            label: "显示主界面",
            click: () => {
              const { mainWindow: e } = BrowserWindow;
              e &&
                !e.isDestroyed() &&
                (e.isMinimized() && e.restore(), e.show());
            },
          },
          {
            label: "退出",
            click: () => {
              const { session: e } = require("electron");
              e.defaultSession.cookies.flushStore().finally(() => {
                e.defaultSession.flushStorageData(), y.info("[exit]"), app.exit();
              });
            },
          },
        ]);
        j.setContextMenu(o);
      }*/ //comment out kaiheila's tray icon as it seems remarkably broken
    })();
}
function B() {
  new k().createWindow(() => {
    app.relaunch({ args: process.argv.slice(1).concat(["--relaunch"]) }),
      app.exit(0);
  });
}
let U = null,
  j = null;
let F = !f.getHardwareAcceleration();
y.info("[disableHardwareAcceleration]", F),
  app.commandLine.appendSwitch("disable-accelerated-2d-canvas"),
  F &&
    (app.disableHardwareAcceleration(),
    app.commandLine.appendSwitch("in-process-gpu"),
    app.commandLine.appendSwitch("disable-software-rasterizer")),
  app.commandLine.appendSwitch(
    "disable-features",
    "SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure"
  ),
  app.setAppUserModelId("cn.kaiheila.pc"),
  app.on("window-all-closed", function () {
    app.quit();
  }),
  app.on("activate", function () {
    null === z ? I() : z.show();
  });
let W = [],
  A = [];
app.on("certificate-error", (e, o, n, t, i, r) => {
  let s = "";
  try {
    s = new URL(n).hostname;
  } catch {}
  if (!s) return;
  if ("localhost" == s) return e.preventDefault(), r(!0);
  if (W.includes(s)) return e.preventDefault(), r(!0);
  if (A.includes(s)) return r(!1);
  if (z && z.webContents.id == o.id) return r(!1);
  let a = c.showMessageBoxSync({
    type: "warning",
    title: "警告：面临潜在的安全风险",
    message: `检测到潜在的安全威胁，因此没有继续访问 ${s}。若您访问此网站，攻击者可能会尝试窃取您的密码、电子邮件、信用卡等信息。`,
    detail: `此服务器无法证明它是${s}；您计算机的操作系统不信任其安全证书。出现此问题的原因可能是配置有误或您的连接被拦截了。`,
    buttons: ["继续前往（不推荐）", "停止访问（推荐）"],
  });
  0 == a
    ? (e.preventDefault(), W.push(s), r(!0))
    : 1 == a && (A.push(s), r(!1));
}),
  app.on("child-process-gone", (e, o) => {
    y.error("[app] [child-process-gone]", o);
  }),
  app.on("render-process-gone", (e, o, n) => {
    y.error(
      "[app] [render-process-gone]",
      { id: o.id, mainFrame: o.mainFrame, options: o.browserWindowOptions },
      n
    );
  });
app.requestSingleInstanceLock()
  ? (app.on("second-instance", (e, o) => {
      z && (z.isMinimized() && z.restore(), z.show());
    }),
    app.on("ready", function () {
      console.log(new Date(), "[startup] ready"),
        y.info("[appready]", process.argv),
        a.on("resume", () => {
          y.info("[powerMonitor] resume", "isDidFailLoad: " + R), R && H();
        }),
        a.on("suspend", () => {
          y.info("[powerMonitor] suspend");
        }),
        require("./server-proxy/local-socket").start(),
        i.setApplicationMenu(null),
        I(),
        g.emit("win_ready"),
        v.start((e) => {
          y.info("[startup] loadlServer");
          const { session: o } = require("electron");
          if (
            (o.defaultSession.cookies.on("changed", (e, n) => {
              "auth" === n.name &&
                o.defaultSession.cookies.flushStore(() => {});
            }),
            "dev" === b.env)
          )
            return (
              z.loadURL("https://localhost:3000/app/checkupdate"),
              void z.webContents.openDevTools()
            );
          const n = process.argv.includes("--relaunch");
          z.loadURL(
            `http://localhost:${e}/app/checkupdate${n ? "#relaunch" : ""}`
          );
        }),
        v.on("show-invite", (e) => {
          z.webContents.send("showInvite", e),
            z.isMinimized() && z.restore(),
            z.show();
        }),
        (function () {
          let e = null;
          try {
            (e = require("./km-event/km-event.js")),
              e.start(),
              e.on("ioHook", (...e) => {
                z &&
                  z.webContents &&
                  !z.webContents.isCrashed() &&
                  z.webContents.send("ioHook", ...e);
              });
          } catch (e) {
            y.error("iohook load", e);
          }
          process.on("exit", () => {
            e && e.stop();
          });
        })(),
        l.on("third-app-callback", (e, o) => {
          z && z.webContents.send("third-app-callback", o);
        }),
        l.on("set_sentry_userinfo", (e, n) => {
          o.setUser(n);
        }),
        l.on("set_message_box_info", (e, o) => {
          U && U.setBoxInfo(o, !0);
        }),
        l.on("set_message_box_friend", (e, o) => {
          U && U.setBoxFriend(o);
        }),
        l.on("set_friend_message_box_id", (e, o) => {
          U && U.setCurrentFriend(o);
        }),
        l.on("set_audio_channel_info", (e, o) => {
          M.set({ audioChannelInfo: o });
        }),
        l.on("clear_audio_channel_info", (e, o) => {
          M.set({ audioChannelInfo: null });
        }),
        l.on("get-disk-space", (e) => {}),
        r.defaultSession.webRequest.onBeforeSendHeaders(
          { urls: ["*://*/*"] },
          (e, o) => {
            let n = { pathname: "" };
            try {
              n = new URL(e.requestHeaders.Referer);
            } catch (e) {}
            "localhost" === n.hostname &&
              (e.requestHeaders.Referer = b.appServer + n.pathname),
              o({ requestHeaders: e.requestHeaders });
          }
        );
    }))
  : app.quit();
const { crashReporter: $ } = require("electron");

//CUSTOM LIGHTOUT CODE

require("./lightout/stub-tray.js")(); // a stub tray while i debug the real one

//END OF CUSTOM LIGHTOUT CODE

  process.on("uncaughtException", (e, o) => {
    y.error("[uncaughtException]", e, o);
  }),
  console.log(new Date(), "[startup] main load");
