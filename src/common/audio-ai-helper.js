require("../addon/support");
const e = require("../utils/requireAddon");
module.exports = {
  addModule: (o) => e("node-audio-ai-helper").addModule(o),
  createNode: (o, r) => e("node-audio-ai-helper").createNode(o, r),
  createScriptNode: (o) => e("node-audio-ai-helper").createScriptNode(o),
  setEnableAgc: function (o) {
    return e("node-audio-ai-helper").setEnableAgc(o);
  },
  setEnableDenoise: function (o) {
    return e("node-audio-ai-helper").setEnableDenoise(o);
  },
  getProcCpuUsageByName: function () {
    let o = e("node-audio-ai-helper");
    return o.getProcCpuUsageByName(arguments);
  },
};
