const { BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");
const { appLogger: Logger } = require("../log/logger");
const logger = Logger.label("[main browser]");
const server = require("../server-proxy/local-server");
const config = require("../config.json");
const customBindDevTools = require("../utils/bindEventDevTools");
let urlWhiteList = [];
function validateURL(url) {
  let isAllowed = !1;
  try {
    isAllowed = urlWhiteList.some((urlRegex) => urlRegex.test(url));
  } catch {}
  return isAllowed;
}
ipcMain.on("browser_set_white_list", (event, urls) => {
  const { mainWindow: { webContents: webContents = {} } = {} } = BrowserWindow;
  if (event.sender.id == webContents.id)
    try {
      urlWhiteList = urls.map((e) => new RegExp(e, "i"));
    } catch {}
});
ipcMain.handle("get_main_webcontent_id", async (event) => {
  const { mainWindow } = BrowserWindow;
  return mainWindow && mainWindow.webContents ? mainWindow.webContents.id : "";
});
let browserWindow = null;
module.exports = {
  open: function ({ url }) {
    if (!validateURL(url)){
      logger.warn("[open] url invalid:", url);
      shell.openExternal(url);
      return
    }
    if (browserWindow && !browserWindow.isDestroyed() && !browserWindow.webContents.isCrashed()) {
      browserWindow.webContents.send("loadURL", url);
      browserWindow.restore();
      browserWindow.show();
      return
    }
    const { mainWindow } = BrowserWindow;
    let pos = mainWindow.getPosition();
    if (
      ((browserWindow = new BrowserWindow({
        x: pos[0],
        y: pos[1],
        width: 1050,
        height: 800,
        minWidth: 0,
        minHeight: 0,
        backgroundColor: "#42464c",
        frame: !1,
        show: !1,
        webPreferences: {
          contextIsolation: !1,
          webviewTag: !0,
          preload: path.join(__dirname, "../preload/commonpreload.js"),
        },
      })),
      browserWindow.center(),
      browserWindow.on("closed", () => {
        browserWindow = null;
      }),
      browserWindow.once("ready-to-show", () => {
        browserWindow.webContents.send("loadURL", url),
          browserWindow.show(),
          console.log(
            "ready-to-show",
            new Date(),
            new Date().getMilliseconds()
          );
      }),
      customBindDevTools(browserWindow),
      browserWindow.webContents.on("new-window", (e, o) => {
        e.preventDefault(), shell.openExternal(o);
      }),
      require("@electron/remote/main").enable(browserWindow.webContents),
      console.log("loadURL", new Date(), new Date().getMilliseconds()),
      "dev" === config.env)
    )
      return (
        browserWindow.loadURL("https://localhost:3000/browser.html?url=" + url),
        void browserWindow.webContents.openDevTools()
      );
    browserWindow.loadURL(`http://localhost:${server.getPort()}/browser.htm?url=${url}`);
  },
  validateURL: validateURL,
};
