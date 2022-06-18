const e = require("./client");
module.exports = {
  getMonitorScreenshot: () =>
    require("../addon/node-desktop-capture/build/Release/desktop_capture.node").getMonitorScreenshot(),
  createClient() {
    let t =
      new (require("../addon/node-desktop-capture/build/Release/desktop_capture.node").CaptureManagerObject)();
    return new e(t);
  },
};
