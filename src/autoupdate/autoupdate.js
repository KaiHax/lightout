const { app: e } = require("electron"),
  t = require("fs"),
  o = require("path"),
  r = require("events"),
  a = require("child_process"),
  n = require("../common/download"),
  { globalStore: s, keys: d } = require("../storage/store"),
  i = require("../common/system"),
  u = require("../log/logger").appLogger.label("[autoupdate]");
module.exports = new (class extends r {
  checkLocal(e) {
    const o = require("../storage/setting"),
      r = s.get(d.download_update, o.get("download_update"));
    if (r)
      return (
        (this.download_update = r),
        void t.stat(r.path, (o, a) => {
          if (o) return s.set(d.download_update, !1), void e(null);
          a.size === r.size
            ? e(this.download_update)
            : t.unlink(r.path, () => {
                s.set(d.download_update, !1), e(null);
              });
        })
      );
    e(null);
  }
  download({ version: r, url: a, update_method: i }) {
    if (this.download_update && this.download_update.path)
      try {
        t.unlinkSync(this.download_update.path);
      } catch (e) {
        u.error("[download] clear file:", e);
      }
    const l = e.getPath("temp"),
      p = n.create(),
      c = `kaiheila.${r}.zip`,
      h = o.join(l, c);
    return (
      p.start(h, a),
      u.info("[download] start:", a),
      p.on("response", (e) => {
        (this.download_update = {
          version: r,
          size: Number(e),
          path: h,
          update_method: i,
        }),
          s.set(d.download_update, this.download_update);
      }),
      p.on("complete", (e) => {
        u.info("[download] complete:", e);
      }),
      p.on("error", (e) => {
        u.error("[download] error:", e);
      }),
      p
    );
  }
  _unzipRelunach() {
    const r = this.download_update.path;
    if ("electron.exe" === o.basename(process.execPath))
      return new Promise((e) => {
        setTimeout(() => {
          t.unlinkSync(r), s.set(d.download_update, !1);
        }, 2e3);
      });
    const a = e.getAppPath();
    return (
      u.info("[unzip]", r, a),
      i
        .unzipAndRemove(r, a)
        .then(() => {
          s.set(d.download_update, !1), i.relunach();
        })
        .catch((e) => {
          throw (u.error("[unzip]", e), t.unlinkSync(r), e);
        })
    );
  }
  unzipRelunach() {
    const { download_update: r = {} } = this,
      n = r.path;
    if ("electron.exe" === o.basename(process.execPath))
      return Promise.resolve();
    let i = t.existsSync(n),
      l = "";
    switch (Number(r.update_method)) {
      case 1:
        l = e.getAppPath();
        break;
      case 2:
        l = o.dirname(process.execPath);
    }
    const p = o.join(
      o.dirname(process.execPath),
      "./resources/KaiHeiLaUpdate/KaiHeiLaUpdate.exe"
    );
    if (
      (u.info(
        `[unzipFullRelunach] pid:${process.pid} exe:${p} dest: ${l}, target:${n}, exist:${i}`
      ),
      !i)
    )
      return Promise.reject({ message: "更新包不存在" });
    if (!l) return Promise.reject({ message: "更新方式错误" });
    try {
      a.spawn(
        p,
        ["-pname", "kaiheila.exe", "-z", n, "-d", l, "-r", process.execPath],
        { detached: !0, shell: !1, stdio: "ignore" }
      ).unref();
    } catch (e) {
      return (
        u.error("unzip error:", e),
        Promise.reject({ message: "更新程序损坏或者被安全软件阻止！" })
      );
    }
    return s.set(d.download_update, !1), e.exit(), Promise.resolve();
  }
})();
