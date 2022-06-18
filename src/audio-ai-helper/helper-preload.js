const { ipcRenderer: e } = require("electron"),
  n = require("fs"),
  o = require("path"),
  { EventNames: t } = require("./const"),
  r = n.readFileSync(
    o.join(__dirname, "../addon/node-audio-ai-helper/audio-ai-processor.js"),
    { encoding: "utf8" }
  );
let a = "";
module.exports = {
  addModule: async (e) => {
    a && window.URL.revokeObjectURL(a),
      (a = window.URL.createObjectURL(
        new Blob([r], { type: "text/javascript" })
      )),
      await e.audioWorklet.addModule(a);
  },
  createNode: (n) => {
    let o = new AudioWorkletNode(n, "audio-ai-processor", {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      outputChannelCount: [1],
    });
    return e.postMessage(t.pipe, "", [o.port]), o;
  },
  setEnableAgc: function (n) {
    e.send(t.enableAgc, n);
  },
  setEnableDenoise: function (n) {
    e.send(t.enableDenoise, n);
  },
  getProcCpuUsageByName: function (n, o, r) {
    return new Promise((a, i) => {
      e.invoke(t.getProcCpuUsageByName, n, o, r).then(a, i);
    });
  },
  enableRecord: (n) => {
    e.send(t.enableRecord, n);
  },
};
