const { ipcRenderer } = require("electron"),
  r = require("path"),
  requireRemote = require("@electron/remote").require,
  i = require("./win");
let n = requireRemote("./config.json");
global.Kaiheila = {
  ipcRenderer,
  win: i,
  config: n,
  Logger: requireRemote("./log/logger.js"),
  Download: requireRemote("./common/download.js"),
  System: requireRemote("./common/system.js"),
  store: requireRemote("./storage/store"),
  getBrowserPreload: () =>
    "file:///" + r.join(__dirname, "../browser/preload-jsbridge.js"),
};