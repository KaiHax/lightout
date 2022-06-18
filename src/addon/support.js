let e = "win32" === require("os").platform();
module.exports = {
  detectFullscreen: () => e,
  avHook: () => e,
  checkAdmin: () => e,
  processWindows: () => e,
  kmEvent: () => e,
  volumeControl: () => e,
  audioAIHelper: () => e,
};
