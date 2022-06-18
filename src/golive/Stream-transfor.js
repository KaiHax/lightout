const e = require("fs"),
  t = require("path"),
  s = e.readFileSync(t.join(__dirname, "./worker-transfor.js"), {
    encoding: "utf8",
  });
let i = "";
module.exports = class {
  constructor(e) {
    const { fps: t, id: r, width: a = 1080, height: o = 720 } = e || {};
    (this.id = r || Math.floor(1e5 * Math.random())),
      i && window.URL.revokeObjectURL(i),
      (i = window.URL.createObjectURL(
        new Blob([s], { type: "text/javascript" })
      ));
    var n = document.createElement("canvas");
    Object.assign(n.style, {
      position: "fixed",
      left: "30px",
      bottom: "30px",
      zIndex: 99999,
      width: "1px",
      height: "1px",
      visibility: "hidden",
      pointerEvents: "none",
    }),
      document.body.appendChild(n),
      (this._canvas = n.transferControlToOffscreen()),
      (this.worker = new Worker(i)),
      (this.paused = !1),
      (this.fps = t),
      (this.worker_inited = !1),
      (this._stream = n.captureStream(20)),
      (this._lastDrawTime = 0),
      console.log("golive stream fps:%s", t);
  }
  set fps(e) {
    this._fps !== e && ((this._fps = e), (this.rateTime = 1e3 / e));
  }
  clear() {
    this.worker.postMessage({ type: "stop" });
  }
  pause() {
    (this.paused = !0), this.worker.postMessage({ type: "stop" });
  }
  resume() {
    this.paused = !1;
  }
  changeCapture(e) {
    this._yuv_format = null;
  }
  onYuvFrame(e) {
    if (this.paused) return;
    const { width: t, height: s } = e;
    t <= 0 ||
      s <= 0 ||
      (this.worker_inited
        ? this.worker.postMessage({
            type: "yuv_frame",
            payload: { yuv_frame: e },
          })
        : (this.worker.postMessage(
            {
              type: "init_canvas",
              canvas: this._canvas,
              payload: { width: t, height: s, yuv_frame: e },
            },
            [this._canvas]
          ),
          (this.worker_inited = !0)));
  }
};
