const { require: remoteRequire, getCurrentWindow } = require("@electron/remote"),
  browserWindow = getCurrentWindow(),
  s = require("../common/window/render"),
  i = require("os"),
  { globalStore: n, keys: r } = remoteRequire("./storage/store");
module.exports = {
  max() {
    browserWindow.maximize();
  },
  unmax() {
    browserWindow.unmaximize();
  },
  min() {
    browserWindow.minimize();
  },
  restore() {
    browserWindow.restore();
  },
  close() {
    browserWindow.webContents.isDevToolsOpened() && browserWindow.webContents.closeDevTools(),
      browserWindow.close();
  },
  hide() {
    browserWindow.hide();
  },
  focus() {
    browserWindow.focus();
  },
  show() {
    browserWindow.show();
  },
  isVisible: () => browserWindow.isVisible(),
  isMax: () => browserWindow.isMaximized(),
  isMin: () => browserWindow.isMinimized(),
  isFocused: () => browserWindow.isFocused(),
  flashFrame(e) {
    browserWindow.flashFrame(e);
  },
  setOverlayIcon(e, t) {
    browserWindow.setOverlayIcon(e, t);
  },
  on(e, t) {
    browserWindow.addListener(e, t);
  },
  off(e, t) {
    browserWindow.removeListener(e, t);
  },
  enableCloseToTray(e) {
    n.set(r.win_close_to_tray, e);
  },
  isEnabledCloseToTray() {
    const t = remoteRequire("./storage/setting.js");
    return n.get(r.win_close_to_tray, t.get(t.keys.win_close_to_tray, !0));
  },
  open: (e) => s.open(e),
  restorePosition: (e) => s.restorePosition(e),
  copy() {
    browserWindow.webContents.copy();
  },
  cut() {
    browserWindow.webContents.cut();
  },
  paste() {
    browserWindow.webContents.paste();
  },
  setSize(e, t) {
    browserWindow.setSize(e, t);
  },
  getSize: () => browserWindow.getSize(),
  center() {
    browserWindow.center();
  },
  setSizeOrigin(e, t) {
    let s = browserWindow.getBounds();
    browserWindow.setBounds({
      x: s.x + Math.round((s.width - e) / 2),
      y: s.y + Math.round((s.height - t) / 2),
      width: e,
      height: t,
    });
  },
  setTitle(e) {
    browserWindow.setTitle(e);
  },
  selectAll() {
    let e = ["ctrl"];
    "darwin" == i.platform() && (e = ["command"]),
      browserWindow.webContents.sendInputEvent({
        type: "keyDown",
        keyCode: "A",
        modifiers: e,
      });
  },
};
