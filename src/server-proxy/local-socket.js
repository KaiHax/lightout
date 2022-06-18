const s = require("ws"),
  { EventEmitter: e } = require("events"),
  t = require("./check-port"),
  i = require("../log/logger").appLogger.label("[websocket]"),
  r = require("querystring");
class o extends e {
  constructor(s, e) {
    super(),
      (this._ws = s),
      (this.query = e),
      s.on("message", (s) => {
        this.emit("message", s);
      }),
      s.on("close", () => {
        this.emit("close");
      }),
      s.on("error", () => {
        this.emit("close");
      });
  }
  close(...s) {
    this._ws.close(...s), this.emit("close");
  }
  send(s) {
    this._ws.send(JSON.stringify(s));
  }
}
let n = 0;
module.exports = new (class extends e {
  constructor() {
    super(), (this.wsClientList = []);
  }
  start() {
    this._wss ||
      t(5988, (e, t) => {
        e
          ? i.error("无可用端口")
          : (i.info("socket server 启动成功:" + t),
            (this._wss = new s.Server({ host: "127.0.0.1", port: t })),
            this._wss.on("connection", (s, e) => {
              let t;
              e.url.includes("?") &&
                (t = r.parse(e.url.substr(e.url.indexOf("?") + 1)));
              let i = new o(s, t);
              (i.id = n++),
                (i.headers = { ...e.headers }),
                i.on("close", () => {
                  let s = this.wsClientList.indexOf(i);
                  this.wsClientList.splice(s, 1);
                }),
                this.wsClientList.push(i),
                this.emit("connection", i);
            }));
      });
  }
  getPort() {
    return this._wss.options.port;
  }
  closeAllClient() {
    this._wss &&
      this._wss.clients.forEach((s) => {
        s.close();
      });
  }
  stop() {
    this._wss && (this._wss.close(), (this._wss = null));
  }
})();
