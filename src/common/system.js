const {
    app: e,
    powerMonitor: r,
    dialog: t,
    BrowserWindow: i,
    globalShortcut: n,
    shell: s,
    session: o,
  } = require("electron"),
  a = require("path"),
  u = require("fs"),
  { globalStore: l, keys: c } = require("../storage/store"),
  d = require("os"),
  { EventEmitter: g } = require("events"),
  p = require("child_process"),
  h = new g();
require("../addon/support"), require("../utils/requireAddon");
let m = { checkAdmin() {} };
const { copyImage: D } = require("../utils/utils");
let w = !1,
  f = "win32" == d.platform() && d.release().startsWith("6.1"),
  y = "win32" == d.platform() && d.release().startsWith("6.2"),
  E = "win32" == d.platform() && d.release().startsWith("6.3");
(f || y || E) && (w = !0);
const A = {
  REDUCE100: 0,
  REDUCE80: 1,
  REDUCE50: 2,
  REDUCE0: 3,
  get() {
    const e = require("winreg");
    let r = new e({
      hive: e.HKCU,
      key: "\\SOFTWARE\\Microsoft\\Multimedia\\Audio",
    });
    return new Promise((e, t) => {
      r.get("UserDuckingPreference", (r, i) => {
        r ? t(r) : e(i);
      });
    });
  },
  set(e) {
    const r = require("winreg");
    if ([A.REDUCE0, A.REDUCE50, A.REDUCE80, A.REDUCE100].includes(e)) {
      let e = new r({
        hive: r.HKCU,
        key: "\\SOFTWARE\\Microsoft\\Multimedia\\Audio",
      });
      return new Promise((r, t) => {
        e.set("UserDuckingPreference", "REG_DWORD", "0x3", (e, i) => {
          e ? t(e) : r(i);
        });
      });
    }
    return Promise.reject("参数无效");
  },
};
e.on("ready", () => {
  r.on("suspend", () => {
    h.emit("suspend");
  }),
    r.on("resume", () => {
      h.emit("resume");
    });
});
const q = {
  register: (e, r) => n.register(e, r),
  unregister(e) {
    n.unregister(e);
  },
  isRegistered: (e) => n.isRegistered(e),
};
module.exports = {
  on(e, r) {
    h.on(e, r);
  },
  off(e, r) {
    h.off(e, r);
  },
  getHardwareAcceleration() {
    const e = require("../storage/setting");
    return !l.get(
      c.disabled_hardware_acceleration,
      e.get(e.keys.disabled_hardware_acceleration, w)
    );
  },
  setHardwareAcceleration(e) {
    l.set(c.disabled_hardware_acceleration, !e);
  },
  getSoursePath: () => a.join(e.getAppPath(), "resources/app"),
  unzipAndRemove(e, r) {
    const t = require("decompress"),
      i = require("decompress-unzip");
    return t(e, r, { plugins: [i()] }).then(() => u.promises.unlink(e));
  },
  relunach() {
    e.relaunch({ args: process.argv.slice(1).concat(["--relaunch"]) }),
      e.exit();
  },
  holdOtherAppVoice: A,
  checkAdmin: () => m.checkAdmin(),
  copyImage: (e) => D(e),
  showSaveDialog(r) {
    const { filename: n = Date.now() } = r;
    let s = a.extname(n).substring(1),
      o = [{ name: "All File", extensions: ["*"] }];
    s && o.unshift({ name: s.toUpperCase() + " File", extensions: [s] });
    let u = "";
    try {
      u = a.join(e.getPath("downloads"), n);
    } catch {}
    let l = [{ defaultPath: u, filters: o, ...r }];
    return r.dialog && l.unshift(i.mainWindow), t.showSaveDialog(...l);
  },
  showOpenDialog(e) {
    let r = [{ ...e }];
    return e.dialog && r.unshift(i.mainWindow), t.showOpenDialog(...r);
  },
  async getDxdiaginfo() {
    let r = new Date().getTime() + ".dxdiag",
      t = "";
    try {
      t = a.join(e.getPath("temp"), r);
    } catch (i) {
      t = a.join(e.getPath("userData"), r);
    }
    await new Promise(async (e, r) => {
      p.exec("dxdiag /whql:off /x " + t, (t) => {
        if (t) return r(t);
        e();
      });
    });
    let i = await u.promises.readFile(t, { encoding: "utf8" });
    return require("xml2js")
      .parseStringPromise(i, { trim: !0, ignoreAttrs: !0, explicitArray: !1 })
      .then(({ DxDiag: e }) => {
        const {
          SystemInformation: r = {},
          DisplayDevices: { DisplayDevice: t = [] } = {},
          DirectSound: {
            SoundDevices: { SoundDevice: i = [] } = {},
            SoundCaptureDevices: { SoundCaptureDevice: n = [] } = {},
          } = {},
        } = e;
        return {
          SystemInformation: r,
          DisplayDevices: Array.isArray(t) ? t : [t],
          SoundDevices: Array.isArray(i) ? i : [i],
          SoundCaptureDevices: Array.isArray(n) ? n : [n],
        };
      });
  },
  shortcut: q,
  getPath: (r) => e.getPath(r),
  openPath: (e) => s.openPath(e),
  getFile(e) {
    const r = require("mime");
    return this.showOpenDialog(e).then((e) => {
      let t = e.filePaths.map((e) =>
        u.promises.readFile(e).then((t) => {
          let i = a.basename(e);
          return { name: i, buffer: t, type: r.getType(a.extname(i)) };
        })
      );
      return Promise.all(t);
    });
  },
  openExternal: (...e) => s.openExternal(...e),
  logout() {
    let e = require("../config.json");
    o.defaultSession.cookies.remove(e.appServer, "auth");
  },
};
