const { require: e, getCurrentWindow: t } = require("@electron/remote"),
  o = t(),
  s = require("../common/window/render"),
  i = require("os"),
  { globalStore: n, keys: r } = e("./storage/store");
module.exports = {
  max() {
    o.maximize();
  },
  unmax() {
    o.unmaximize();
  },
  min() {
    o.minimize();
  },
  restore() {
    o.restore();
  },
  close() {
    o.webContents.isDevToolsOpened() && o.webContents.closeDevTools(),
      o.close();
  },
  hide() {
    o.hide();
  },
  focus() {
    o.focus();
  },
  show() {
    o.show();
  },
  isVisible: () => o.isVisible(),
  isMax: () => o.isMaximized(),
  isMin: () => o.isMinimized(),
  isFocused: () => o.isFocused(),
  flashFrame(e) {
    o.flashFrame(e);
  },
  setOverlayIcon(e, t) {
    o.setOverlayIcon(e, t);
  },
  on(e, t) {
    o.addListener(e, t);
  },
  off(e, t) {
    o.removeListener(e, t);
  },
  enableCloseToTray(e) {
    n.set(r.win_close_to_tray, e);
  },
  isEnabledCloseToTray() {
    const t = e("./storage/setting.js");
    return n.get(r.win_close_to_tray, t.get(t.keys.win_close_to_tray, !0));
  },
  open: (e) => s.open(e),
  restorePosition: (e) => s.restorePosition(e),
  copy() {
    o.webContents.copy();
  },
  cut() {
    o.webContents.cut();
  },
  paste() {
    o.webContents.paste();
  },
  setSize(e, t) {
    o.setSize(e, t);
  },
  getSize: () => o.getSize(),
  center() {
    o.center();
  },
  setSizeOrigin(e, t) {
    let s = o.getBounds();
    o.setBounds({
      x: s.x + Math.round((s.width - e) / 2),
      y: s.y + Math.round((s.height - t) / 2),
      width: e,
      height: t,
    });
  },
  setTitle(e) {
    o.setTitle(e);
  },
  selectAll() {
    let e = ["ctrl"];
    "darwin" == i.platform() && (e = ["command"]),
      o.webContents.sendInputEvent({
        type: "keyDown",
        keyCode: "A",
        modifiers: e,
      });
  },
};
