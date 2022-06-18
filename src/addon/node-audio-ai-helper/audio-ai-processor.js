class e extends AudioWorkletProcessor {
  constructor() {
    super(),
      (this.cacheBuffer = []),
      (this.processedBuffer = []),
      (this.active = !1),
      (this.port.onmessage = (e) => {
        let t = e.data;
        if (null == t) return;
        let s = this.chunking(t, 128);
        this.processedBuffer.push(...s),
          this.processedBuffer.length >= 200 &&
            this.processedBuffer.splice(0, 100);
      });
  }
  chunking(e, t) {
    let s = [];
    for (let r = 0; r < e.length; r += t) s.push(e.subarray(r, r + t));
    return s;
  }
  concatFloat32Array(e) {
    let t = e.reduce((e, t) => t.length + e, 0),
      s = new Float32Array(t),
      r = 0;
    for (let t = 0; t < e.length; t++) {
      let h = e[t];
      s.set(h, r), (r += h.length);
    }
    return s;
  }
  process(e, t, s) {
    const r = e[0],
      h = t[0];
    if (0 == r.length) return !0;
    let c = r[0],
      i = h[0];
    if ((this.cacheBuffer.push(Array.from(c)), this.cacheBuffer.length >= 8)) {
      let e = this.concatFloat32Array(this.cacheBuffer);
      this.port.postMessage(e), (this.cacheBuffer = []);
    }
    if (
      (1 == this.active &&
        0 == this.processedBuffer.length &&
        (this.active = !1),
      0 == this.active && this.processedBuffer.length > 4 && (this.active = !0),
      !this.active)
    )
      return !0;
    let [o] = this.processedBuffer.splice(0, 1);
    return i.set(o), !0;
  }
}
registerProcessor("audio-ai-processor", e);
