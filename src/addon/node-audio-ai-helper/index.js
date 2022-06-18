const e = require("bindings")("audio_ai_helper"),
  t = require("fs"),
  n = require("path"),
  r = t.readFileSync(n.join(__dirname, "./audio-ai-processor.js"), {
    encoding: "utf8",
  });
let o = "",
  a = [],
  s = [],
  u = 2;
module.exports = {
  audioAIHelper: e,
  addModule: async (e) => {
    o && window.URL.revokeObjectURL(o),
      (o = window.URL.createObjectURL(
        new Blob([r], { type: "text/javascript" })
      )),
      await e.audioWorklet.addModule(o);
  },
  createNode: async function (t) {
    return await (async function (t) {
      let n = new AudioWorkletNode(t, "audio-ai-processor", {
          numberOfInputs: 1,
          numberOfOutputs: 1,
          outputChannelCount: [1],
        }),
        r = new e.AudioAIHelperObject();
      return (
        (n.port.onmessage = (e) => {
          const t = e.data;
          r.promiseNosieCancelRawData(t).then(
            (e) => {
              n.port.postMessage(e);
            },
            (e) => {
              console.error(e);
            }
          );
        }),
        n
      );
    })(t);
  },
  createScriptNode: function (t) {
    return (function (t) {
      let n = t.createScriptProcessor(1024, 1, 1),
        r = new e.AudioAIHelperObject();
      return (
        (n.onaudioprocess = function (e) {
          const t = e.inputBuffer,
            n = e.outputBuffer,
            o = t.getChannelData(0),
            i = n.getChannelData(0);
          if ((a.push(o), s.length >= 1))
            if (u <= 0) {
              let e = s.splice(0, 1)[0];
              i.set(e);
            } else u--;
          else i.set(o);
          if (a.length >= 4) {
            let e = a.splice(0, 1)[0];
            r.promiseNosieCancelRawData(e).then(
              (e) => {
                null != e && s.push(e);
              },
              (e) => {
                console.error(e);
              }
            );
          }
        }),
        n
      );
    })(t);
  },
  setEnableAgc: function (t) {
    return e.setEnableAgc(t);
  },
  setEnableDenoise: function (t) {
    return e.setEnableDenoise(t);
  },
  getProcCpuUsageByName: function (t, n = 3e3, r = !0) {
    return e.getProcCpuUsageByName(t, n, r);
  },
  getNumberOfPhysicalCores: function () {
    return e.getNumberOfPhysicalCores(procName, msInterval);
  },
  getNumberOfSystemCores: function () {
    return e.getNumberOfSystemCores();
  },
};
