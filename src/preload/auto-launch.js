const e = require("auto-launch"),
  { require: a } = require("@electron/remote"),
  t = a("./storage/setting.js"),
  { globalStore: n, keys: o } = a("./storage/store");
let l = new e({ name: "开黑啦", path: process.execPath, isHidden: !0 }),
  s = !0;
l.isEnabled().then((e) => {
  (s = n.get(o.app_auto_launch, t.get("app_auto_launch"))),
    s !== e && (void 0 !== s ? (s ? l.enable() : l.disable()) : (s = e));
}),
  (module.exports = {
    startMin(e) {
      n.set(o.app_auto_launch_min, Boolean(e));
    },
    isStartMin: () =>
      Boolean(n.get(o.app_auto_launch_min, t.get("app_auto_launch_min"))),
    enable(e) {
      e ? l.enable() : l.disable(), (s = e), n.set(o.app_auto_launch, e);
    },
    isEnabled: () => s,
  });
