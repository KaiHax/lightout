const e = require("child_process"),
  { EventEmitter: t } = require("events"),
  o = require("../log/logger").appLogger.label("[km-event]"),
  r = new t();
let n = null;
module.exports = {
  start: function () {
    n && null === n.exitCode
      ? o.debug("already start")
      : (o.debug("start"),
        (n = e.fork(__dirname + "/km-event-child-process.js", {
          detached: !0,
        })),
        n.on("message", (e) => {
          r.emit("ioHook", e);
        }),
        n.on("exit", (e) => {
          o.info("exit", e);
        }));
  },
  on: (...e) => {
    r.on(...e);
  },
  off: (...e) => {
    r.removeListener(...e);
  },
  stop: function () {
    o.debug("stop"), n.kill();
  },
};
