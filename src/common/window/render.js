const { ipcRenderer: o } = require("electron");
module.exports = {
  open(e) {
    const n = o.sendSync("common-window-open", e);
    return {
      close() {
        o.send("common-window-close", n);
      },
    };
  },
  restorePosition(e) {
    o.send("common-window-restore-position", e);
  },
  close(e) {
    o.send("common-window-close", e);
  },
};
