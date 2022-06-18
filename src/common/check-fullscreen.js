const e = require("../addon/support"),
  t = require("../utils/requireAddon");
let s = { isFullscreen() {} };
e.detectFullscreen() && (s = t("detect-fullscreen"));
const l = require("events");
let r = Object.create(new l());
(r = Object.assign(r, {
  interval: 0,
  isFullscreen: !1,
  start() {
    clearInterval(this.interval),
      (this.interval = setInterval(() => {
        let e = s.isFullscreen();
        this.isFullscreen !== e &&
          ((this.isFullscreen = e), this.emit("change", e));
      }, 600));
  },
  stop() {
    clearInterval(this.interval), (this.isFullscreen = !1);
  },
  forceSet(e) {
    let t = e;
    this.isFullscreen !== t &&
      ((this.isFullscreen = t), this.emit("change", t));
  },
})),
  (module.exports = r);
