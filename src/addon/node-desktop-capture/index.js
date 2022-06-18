const { GOLIVE_CONNECT_STATUS: e } = require("../../golive/const"),
  { EventEmitter: t } = require("events"),
  r = require("bindings")("desktop_capture");
require("../../log/logger").appLogger.label("[golive]");
module.exports = {
  desktopCapture: r,
  getMonitorScreenshot: function () {
    return r.getMonitorScreenshot();
  },
  startCapture: function () {
    return managerObject.startCapture(capture_conf, captureOpt);
  },
};
