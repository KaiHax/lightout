const { Logger: e } = require("./logger"),
  t = require("os"),
  { app: r } = require("electron"),
  a = new e("perfomance", {
    isConsole: !1,
    rotateFileOptions: { maxFiles: 2 },
  });
function o(e, t = "G", r = 2) {
  let a = ["B", "K", "M", "G"].indexOf(t);
  return (e / Math.pow(1024, a)).toFixed(r) + t;
}
function n() {
  for (var e = 0, r = 0, a = t.cpus(), o = 0, n = a.length; o < n; o++) {
    var l = a[o];
    for (var s in l.times) r += l.times[s];
    e += l.times.idle;
  }
  return {
    totalIdle: e,
    totalTick: r,
    avgIdle: e / a.length,
    avgTotal: r / a.length,
  };
}
async function l() {
  let e = await (function (e = 1e3) {
      return new Promise(function (t) {
        var r = n();
        setTimeout(function () {
          var e = n(),
            a = e.avgIdle - r.avgIdle,
            o = e.avgTotal - r.avgTotal,
            l = (1e4 - Math.round((1e4 * a) / o)) / 100;
          return t(l);
        }, e);
      });
    })(),
    a = r.getAppMetrics();
  return {
    total: o(t.totalmem(), "G"),
    free: o(t.freemem(), "G"),
    cpu: e,
    AppMetrics: a,
  };
}
let s = 0;
(exports.startRecord = function () {
  clearInterval(s),
    (s = setInterval(async () => {
      let e = await l();
      a.debug(e);
    }, 6e4));
}),
  (exports.stopRecord = function () {
    clearInterval(s);
  }),
  (exports.logger = a),
  (exports.RECORD_SPAN = 6e4),
  (exports.getProcessMemory = function (e) {
    return {
      rss: o(e.rss, "M"),
      heapTotal: o(e.heapTotal, "M"),
      heapUsed: o(e.heapUsed, "M"),
      external: o(e.external, "M"),
      arrayBuffers: o(e.arrayBuffers, "M"),
    };
  });
