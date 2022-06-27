const { ipcRenderer } = require("electron");
module.exports = {
  open(event) {
    const opened = ipcRenderer.sendSync("common-window-open", event);
    return {
      close() {
        ipcRenderer.send("common-window-close", opened);
      },
    };
  },
  restorePosition(event) {
    ipcRenderer.send("common-window-restore-position", event);
  },
  close(event) {
    ipcRenderer.send("common-window-close", event);
  },
};
