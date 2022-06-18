const e = require("path"),
  { app: r, shell: t } = require("electron"),
  i = require("fs"),
  { getLogDir: p, Logger: a } = require("./base"),
  n = new a("applog");
module.exports = {
  Logger: a,
  appLogger: n,
  openDir() {
    const e = p();
    t.openPath(e);
  },
  getZipFile: async function () {
    const t = require("util"),
      n = require("pump"),
      o = require("compressing");
    let s = e.join(r.getPath("temp"), "kaihei_applog.zip"),
      l = new o.zip.Stream();
    const u = p();
    a.pauseAll(), l.addEntry(u);
    let g = r.getPath("crashDumps");
    i.existsSync(g) && l.addEntry(g);
    let c = t
      .promisify(n)(l, i.createWriteStream(s))
      .then(() => i.promises.readFile(s));
    return (
      c.finally(() => {
        a.resumeAll();
      }),
      c
    );
  },
};
