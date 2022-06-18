const i = require("../km-event/km-event"),
  t = require("events");
let e = new (class extends t {
  constructor() {
    super(),
      (this._timer = 0),
      (this.inactive = !1),
      (this.inactiveTimeSpan = 60),
      (this._activeTimeout = this._activeTimeout.bind(this));
  }
  _activeTimeout() {
    this.inactive && ((this.inactive = !1), this.emit("inactive", !1)),
      clearTimeout(this._timer),
      (this._timer = setTimeout(() => {
        (this.inactive = !0), this.emit("inactive", !0);
      }, 1e3 * this.inactiveTimeSpan));
  }
  start(t) {
    (this.inactive = !1),
      (this.inactiveTimeSpan = t),
      this._activeTimeout(),
      i.on("ioHook", this._activeTimeout);
  }
  stop() {
    clearTimeout(this._timer), i.off("ioHook", this._activeTimeout);
  }
})();
module.exports = e;
