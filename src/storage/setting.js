const e = require("fs"),
  r = require("path"),
  { app: t } = require("electron"),
  { appLogger: a } = require("../log/logger"),
  o = a.label("[setting]"),
  _ = r.join(t.getPath("userData"), "setting.json");
let i = {};
try {
  (i = e.readFileSync(_, { encoding: "utf8" })),
    (i = JSON.parse(i)),
    o.debug("[init]", i);
} catch (e) {
  o.error("read error", e, i), (i = {});
}
module.exports = {
  keys: {
    store_path: "store_path",
    win_size_state: "win_size_state",
    disabled_hardware_acceleration: "disabled_hardware_acceleration",
    app_auto_launch: "app_auto_launch",
    app_auto_launch_min: "app_auto_launch_min",
    win_close_to_tray: "win_close_to_tray",
    local_server_port: "local_server_port",
  },
  get(e, r) {
    const t = i[e];
    return void 0 === t ? r : t;
  },
  set(r, t) {
    i[r] = t;
    const a = JSON.stringify(i);
    e.writeFile(_, a, (e) => {
      e && o.error("write error", e);
    });
  },
};
