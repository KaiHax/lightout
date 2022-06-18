const { ipcMain: e } = require("electron"),
  { EventNames: o } = require("./const"),
  n = require("fs"),
  r = require("path");
let s = !1,
  i = r.resolve("voice_origin.debug.pcm"),
  t = r.resolve("voice_ai.debug.pcm");
e.on(o.pipe, (e) => {
  const { audioAIHelper: o } = require("../addon/node-audio-ai-helper"),
    [r] = e.ports;
  let a = new o.AudioAIHelperObject();
  r.start(),
    r.addListener("message", (e) => {
      const o = e.data;
      if (s) {
        let e = o.buffer.slice(o.byteOffset, o.byteLength + o.byteOffset);
        n.appendFile(i, Buffer.from(e), (e) => {
          e && console.error(e);
        });
      }
      a.promiseNosieCancelRawData(o).then(
        (e) => {
          if (s) {
            let o = e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset);
            n.appendFile(t, Buffer.from(o), (e) => {
              e && console.error(e);
            });
          }
          r.postMessage(e);
        },
        (e) => {
          r.postMessage(o), console.error(e);
        }
      );
    }),
    r.postMessage(null);
}),
  e.on(o.enableAgc, (e, o) => {
    const { audioAIHelper: n } = require("../addon/node-audio-ai-helper");
    n.setEnableAgc(o);
  }),
  e.on(o.enableDenoise, (e, o) => {
    const { audioAIHelper: n } = require("../addon/node-audio-ai-helper");
    n.setEnableDenoise(o);
  }),
  e.handle(o.getProcCpuUsageByName, (e, o, n, r) => {
    const { audioAIHelper: s } = require("../addon/node-audio-ai-helper");
    return new Promise((e, i) => {
      s.getProcCpuUsageByName(o, n, r).then(e, i);
    });
  }),
  e.on(o.enableRecord, (e, o) => {
    o &&
      (n.existsSync(i) && n.unlinkSync(i), n.existsSync(t) && n.unlinkSync(t)),
      (s = o);
  });
