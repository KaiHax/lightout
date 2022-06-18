const e = require("path"),
  t = require("fs"),
  r = require("crypto"),
  i = require("atomically"),
  { app: s, dialog: a, BrowserWindow: o } = require("electron"),
  { appLogger: n } = require("../log/logger"),
  { mkdirSync: c } = require("../utils"),
  h = n.label("[store]"),
  l = require("./setting"),
  _ = new (require("events"))();
let p = "";
try {
  p = e.join(s.getPath("documents"), s.getName());
} catch {
  p = e.join(s.getPath("home"), "Documents", s.getName());
}
p = l.get(l.keys.store_path, p);
let y = !1;
class u {
  constructor() {
    (this.store = null),
      (this.encryptKey = null),
      (this.name = "config"),
      (this.path = "");
  }
  _deserialize(e) {
    return JSON.parse(e);
  }
  _serialize(e) {
    return JSON.stringify(e, void 0, 2);
  }
  _encrypt(e) {
    if (!this.encryptKey) return e;
    const t = r.randomBytes(16),
      i = r.pbkdf2Sync(this.encryptKey, t.toString(), 1e4, 32, "sha512"),
      s = r.createCipheriv("aes-256-cbc", i, t);
    return (e = Buffer.concat([
      t,
      Buffer.from(":"),
      s.update(Buffer.from(e)),
      s.final(),
    ]));
  }
  _decrypt(e) {
    if (!this.encryptKey) return e.toString();
    try {
      const t = e.slice(0, 16),
        i = r.pbkdf2Sync(this.encryptKey, t.toString(), 1e4, 32, "sha512"),
        s = r.createDecipheriv("aes-256-cbc", i, t);
      e = Buffer.concat([
        s.update(Buffer.from(e.slice(17))),
        s.final(),
      ]).toString("utf8");
    } catch {}
    return e.toString();
  }
  _ensureDirectory() {
    c(e.dirname(this.path));
  }
  _save() {
    let e = this._serialize(this.store);
    if (((e = this._encrypt(e)), this._ensureDirectory(), process.env.SNAP))
      t.writeFileSync(this.path, e);
    else
      try {
        i.writeFileSync(this.path, e);
      } catch (r) {
        if (r && "EXDEV" === r.code) return void t.writeFileSync(this.path, e);
        throw r;
      }
  }
  _read() {
    let e = null;
    try {
      (e = t.readFileSync(this.path, this.encryptKey ? null : "utf8")),
        (e = this._decrypt(e)),
        (this.store = this._deserialize(e)),
        h.debug("[init]", this.store);
    } catch (t) {
      (this.store = {}), h.error("[init]", t, this.path, this.encryptKey, e);
    }
  }
  _tryWitchFolder() {
    try {
      this._save();
    } catch (t) {
      h.error("[_tryWitchFolder]", t);
      let r = e.join(s.getPath("appData"), s.getName() + "_config");
      if (p == r) {
        if (y) return;
        y = !0;
        let e = () => {
          a.showMessageBox(o.mainWindow, {
            title: "提示",
            type: "warning",
            message: "配置文件写入失败，无法保存。请检查目录权限设置。",
            detail: p,
          }),
            _.off("win_ready", e);
        };
        return void _.on("win_ready", e);
      }
      t &&
        ["EPERM", "ENOENT"].includes(t.code) &&
        ((p = r),
        (this.path = e.join(p, this.cwd, this.name)),
        l.set(l.keys.store_path, p),
        this._read(),
        this._tryWitchFolder());
    }
  }
  init({ cwd: t, encrypt: r }) {
    (this.cwd = t),
      (this.path = e.join(p, this.cwd, this.name)),
      r && (this.encryptKey = t),
      this._read(),
      this._tryWitchFolder();
  }
  get(e, t) {
    return this.store
      ? e in this.store
        ? this.store[e]
        : t
      : (console.error("还未初始化!!", e), t);
  }
  set(e, t) {
    this.store[e] = t;
    try {
      this._save();
    } catch (e) {
      h.error("[set]", e);
    }
  }
}
const d = new u(),
  f = new u();
f.init({ cwd: "global" });
module.exports = {
  Store: u,
  keys: {
    win_size_state: "win_size_state",
    disabled_hardware_acceleration: "disabled_hardware_acceleration",
    app_auto_launch: "app_auto_launch",
    app_auto_launch_min: "app_auto_launch_min",
    win_close_to_tray: "win_close_to_tray",
    local_server_port: "local_server_port",
    download_update: "download_update",
    overlay_config: "overlay_config",
    screenshot_shortcat: "screenshot_shortcat",
  },
  userStore: d,
  globalStore: f,
  _eventBar: _,
};
