const e = require("../addon/support"),
  t = require("../utils/requireAddon");
let n = { registEvent() {}, unRegistEvent() {} };
e.kmEvent() && (n = t("window-node-km-event").km_event);
const { registEvent: o, unRegistEvent: u } = n,
  s = 0,
  m = 1;
const v = {
    [256]: "keydown",
    [257]: "keyup",
    [260]: "keydown",
    [261]: "keyup",
  },
  d = 0,
  i = 2,
  p = 1,
  r = 3,
  a = 4,
  c = {
    [1]: { eventName: "mousedown", button: d },
    [2]: { eventName: "mouseup", button: d },
    [4]: { eventName: "mousedown", button: i },
    [8]: { eventName: "mouseup", button: i },
    [16]: { eventName: "mousedown", button: p },
    [32]: { eventName: "mouseup", button: p },
    [64]: { eventName: "mousedown", button: r },
    [128]: { eventName: "mouseup", button: r },
    [256]: { eventName: "mousedown", button: a },
    [512]: { eventName: "mouseup", button: a },
  };
o("km-event", function (e) {
  setTimeout(() => {
    let t = e[0],
      n = e[1],
      o = e[2],
      u = e[2],
      d = e[3],
      i = { type: "" };
    if (t == s) i = { type: v[n], rawcode: o };
    else if (t == m) {
      let e = c[n];
      i = { type: e.eventName, button: e.button, screenX: u, screenY: d };
    }
    process.send(i);
  });
}),
  process.on("exit", () => {
    u();
  }),
  process.on("disconnect", () => {
    process.exit(0);
  });
