const e = require("fs"),
  t = (require("path"), require("request")),
  r = require("events");
class s extends r {
  constructor() {
    super();
  }
  static create() {
    return new s();
  }
  start(r, s) {
    if (!this._request) {
      try {
        new URL(s);
      } catch (e) {
        return void process.nextTick(() => {
          this.emit("error", "Invalid url");
        });
      }
      e.unlink(r, () => {
        const i = e.createWriteStream(r);
        let n = 0,
          o = 0,
          u = null;
        const l = (this._request = t({ url: s }));
        l.on("response", (e) => {
          200 === e.statusCode
            ? ((n = Number(e.headers["content-length"] || 0)),
              this.emit("response", n))
            : (u = e.statusCode);
        }),
          l.pipe(i),
          i.on("error", (e) => {
            u = e;
          }),
          i.on("close", () => {
            u
              ? e.unlink(r, () => {
                  this.emit("error", u);
                })
              : e.stat(r, (t, s) => {
                  t
                    ? this.emit("error", t)
                    : 0 != s.size && s.size === n
                    ? this.emit("complete", r)
                    : e.unlink(r, () => {
                        this.emit("error", "文件下载不完整");
                      });
                });
          }),
          l.on("data", (e) => {
            (o += e.length),
              this.emit("progress", { totalSize: n, downloadSize: o });
          }),
          l.on("error", (t) => {
            i.close(),
              e.unlink(r, () => {
                this.emit("error", t);
              });
          });
      });
    }
  }
}
module.exports = s;
