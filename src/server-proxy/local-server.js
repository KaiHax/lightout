const e = require("express"),
  r = require("path"),
  t = require("./check-port"),
  o = require("cors"),
  s = require("events"),
  i = require("../log/logger").appLogger.label("[main]"),
  { globalStore: n, keys: p } = require("../storage/store"),
  a = new s(),
  l = e(),
  u = r.join(__dirname, "../../webapp/build");
l.use(e.static(u)),
  l.use("/app", e.static(u)),
  l.use("/app/*", function (e, t) {
    t.sendFile(r.resolve(u, "index.htm"));
  }),
  l.use(e.json()),
  l.use("/pc_show_invite", o(), (e, r) => {
    a.emit("show-invite", e.body), r.status(200), r.send("ok");
  }),
  (module.exports = {
    on(...e) {
      a.on(...e);
    },
    off(...e) {
      a.off(...e);
    },
    getPort: () => n.get(p.local_server_port, 5888),
    start: function (e) {
      i.info("App start");
      let r = this.getPort();
      t(r, (t, o) => {
        t
          ? i.error("无可用端口")
          : (r != o && n.set(p.local_server_port, o),
            l.listen(o, "127.0.0.1", () => {
              e(o), i.info("App listening at port " + o);
            }));
      });
    },
  });
