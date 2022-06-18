console.log(new Date(), new Date().getMilliseconds(), "[startup] preload");
const e = require("fs"),
  o = require("path"),
  { ipcRenderer: r } = require("electron"),
  n = require("@electron/remote"),
  { require: t } = n;
var s = setImmediate,
  a = clearImmediate;
process.once("loaded", function () {
  (global.setImmediate = s), (global.clearImmediate = a);
});
const i = t("./config.json");
if (e.existsSync(o.join(__dirname, "../channelConfig.json"))) {
  const e = t("./channelConfig.json");
  i.channelId = e.channelId;
}
const l = t("../package.json"),
  c = t("./common/volume-control.js");
let g = {
  _map: new Map(),
  on: (e, o) => {
    g._map.set(o, (e, r) => {
      o(r);
    }),
      r.on(e, g._map.get(o));
  },
  off: (e, o) => {
    let n = g._map.get(o);
    g._map.delete(o), n && r.off(e, n);
  },
};
console.time("storage");
const d = t("./storage/store");
console.timeEnd("storage"),
  (global.Kaiheila = {
    version: l.version,
    buildVersion: l.buildVersion,
    config: i,
    setting: t("./storage/setting.js"),
    store: d,
    eventKeys: { showInvite: "showInvite" },
    ipcRenderer: r,
    autoLaunch: require("./auto-launch.js"),
    Logger: t("./log/logger.js"),
    xlog: t("./common/xlog.js"),
    tasklist: t("./common/tasklist.js"),
    Overlay: t("./overlay/overlay-win.js"),
    CheckFullscreen: t("./common/check-fullscreen.js"),
    Download: t("./common/download.js"),
    System: t("./common/system.js"),
    AutoUpdate: t("./autoupdate/autoupdate.js"),
    VolumeCtrl: c,
    IoHook: g,
    SocketServer: t("./server-proxy/local-socket.js"),
    Voicehook: require("../voicehook/voicehook-render"),
    win: require("./win.js"),
    AudioAIHelper: require("../audio-ai-helper/helper-preload"),
    Screenshot: t("./screenshot/screenshot.js"),
    PCInactive: t("./common/pc-inactive.js"),
    golive: require("../golive/golive-preload"),
  }),
  (global.history.pushState = function (...e) {
    global.history.replaceState(...e);
  }),
  global.addEventListener("error", (e) => {
    global.Kaiheila.Logger.appLogger.error("[webapp] [global]", e.error);
  }),
  c.refreshDeviceList(),
  global.addEventListener("load", () => {
    window.navigator.mediaDevices &&
      window.navigator.mediaDevices.addEventListener("devicechange", () =>
        c.refreshDeviceList()
      );
    let e = t("./log/perfomance");
    e.startRecord(),
      setInterval(() => {
        let o = e.getProcessMemory(process.memoryUsage());
        e.logger.debug("[main render]", o, process.getBlinkMemoryInfo());
      }, e.RECORD_SPAN);
  }),
  console.log(
    new Date(),
    new Date().getMilliseconds(),
    "[startup] preload end",
    typeof window
  );
