const e = require("fs"),
  t = require("path"),
  s = e.readFileSync(t.join(__dirname, "./worker-bitmap.js"), {
    encoding: "utf8",
  });
let i = "";
module.exports = class {
  constructor(e) {
    const { fps: t, id: r, width: a = 1080, height: n = 720 } = e || {};
    (this.id = r || Math.floor(1e5 * Math.random())),
      i && window.URL.revokeObjectURL(i),
      (i = window.URL.createObjectURL(
        new Blob([s], { type: "text/javascript" })
      ));
    var o = document.createElement("canvas");
    (this._canvas = o),
      (this._bitmap_context = o.getContext("bitmaprenderer")),
      (this.worker = new Worker(i)),
      (this.worker_inited = !1),
      (this.worker.onmessage = (e) => {
        const { type: t, data: s } = e.data;
        switch (t) {
          case "buffer":
            this._bitmap_context.transferFromImageBitmap(s),
              (this.running = !1);
            break;
          case "inited":
            this.worker_inited = !0;
        }
      }),
      (this.paused = !1),
      (this.fps = t),
      (this._stream = o.captureStream(Math.min(30, t))),
      (this._lastDrawTime = 0),
      console.log("golive stream fps:%s", t);
  }
  set fps(e) {
    this._fps !== e && ((this._fps = e), (this.rateTime = 1e3 / e));
  }
  clear() {
    this._yuv_canvas.clear();
  }
  pause() {
    this.paused = !0;
  }
  resume() {
    this.paused = !1;
  }
  changeCapture(e) {
    (this.worker_inited = !1), (this._yuv_format = null);
  }
  onYuvFrame(e) {
    if (this.paused) return;
    const { width: t, height: s } = e;
    t <= 0 ||
      s <= 0 ||
      this.running ||
      (this.worker_inited
        ? (this.worker.postMessage({
            type: "yuv_frame",
            payload: { yuv_frame: e },
          }),
          (this.running = !0))
        : this.worker.postMessage({
            type: "init_canvas",
            payload: { width: t, height: s },
          }));
  }
};
