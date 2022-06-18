const { ipcRenderer: e } = require("electron"),
  { EventNames: o, EnumEventType: n } = require("./EventNames"),
  t = {
    getRuningMusic: async () => await e.invoke(o.getRuningMusic),
    hook(n, c) {
      e.send(o.hook, n),
        t.onhook && e.off(o.hookCallback, t.onhook),
        (t.onhook = (e, ...o) => {
          c(...o);
        }),
        e.on(o.hookCallback, t.onhook);
    },
    hookPort(n, t) {
      e.postMessage(o.hookPort, n, [t]);
    },
    unhook(n) {
      e.send(o.unhook, n), t.onhook && e.off(o.hookCallback, t.onhook);
    },
    setEventCB(n) {
      t.handleEvent && e.off(o.eventcb, t.handleEvent),
        (t.handleEvent = (e, ...o) => {
          n(...o);
        }),
        e.on(o.eventcb, t.handleEvent);
    },
    unsetEventCB() {
      t.handleEvent && e.off(o.eventcb, t.handleEvent);
    },
    setVolume(n) {
      e.send(o.setVolume, n);
    },
    checkAccessFile: (...n) => e.sendSync(o.checkAccessFile, ...n),
    enableRecord(n) {
      e.send(o.enableRecord, n);
    },
    EnumEventType: n,
  };
module.exports = t;
