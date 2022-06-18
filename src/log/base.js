const e = require("winston"),
  r = require("winston-daily-rotate-file"),
  t = require("path"),
  s = require("mkdirp"),
  { app: o } = require("electron"),
  n = require("../../package.json"),
  i = require("events");
let a = t.resolve(o.getPath("userData"), "logs");
const l = new i();
try {
  a.includes(")") && (a = t.join(t.dirname(o.getPath("exe")), "logs")),
    s.sync(a);
} catch (e) {
  console.error(e);
}
module.exports = {
  Logger: class {
    static pauseAll() {
      l.emit("pause");
    }
    static resumeAll() {
      l.emit("resume");
    }
    constructor(s = "", { isConsole: o = !0, rotateFileOptions: i = {} } = {}) {
      const u = t.resolve(a, s + "%DATE%.log"),
        { combine: g, timestamp: m, printf: c } = e.format,
        h = [];
      try {
        h.push(new r({ filename: u, maxSize: "5m", maxFiles: "10", ...i }));
      } catch (e) {
        console.error(e);
      }
      o && h.push(new e.transports.Console()),
        (this.logger = new e.createLogger({
          level: "debug",
          format: g(
            m({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
            c(({ level: e, message: r, timestamp: t }) => {
              r = r.map((e) => {
                if ("object" == typeof e) {
                  let r = new Set();
                  return JSON.stringify(e, (e, t) => {
                    if ("object" == typeof t && null !== t) {
                      if (r.has(t)) return;
                      r.add(t);
                    }
                    return t;
                  });
                }
                return e;
              });
              let s = `[${e}]`.padEnd(8);
              return `[${t}] [v${n.buildVersion}] ${s} ${r.join(" ")}`;
            })
          ),
          transports: h,
        })),
        l.on("pause", () => {
          this.pause();
        }),
        l.on("resume", () => {
          this.resume();
        });
    }
    pause() {
      console.log("winston ------ pause"), (this.logger.silent = !0);
    }
    resume() {
      console.log("winston ------ resume"), (this.logger.silent = !1);
    }
    debug(...e) {
      this.logger.debug(e);
    }
    info(...e) {
      this.logger.info(e);
    }
    warn(...e) {
      this.logger.warn(e);
    }
    error(...e) {
      (e = e.map((e) =>
        e instanceof Error ? e.name + e.message + e.stack : e
      )),
        this.logger.error(e);
    }
    label(e) {
      return {
        debug: (...r) => {
          r.unshift(e), this.debug(...r);
        },
        info: (...r) => {
          r.unshift(e), this.info(...r);
        },
        warn: (...r) => {
          r.unshift(e), this.warn(...r);
        },
        error: (...r) => {
          r.unshift(e), this.error(...r);
        },
      };
    }
  },
  getLogDir: () => a,
};
