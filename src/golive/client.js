const { EventEmitter: e } = require("events"),
  t = require("./Stream-transfor"),
  { GOLIVE_CONNECT_STATUS: n } = require("./const"),
  o = {
    info: (...e) => {
      console.log(...e);
    },
  };
module.exports = class extends e {
  constructor(e) {
    super(),
      (this.managerObject = e),
      (this._capture_conf = null),
      (this._join_info = null),
      (this.connectState = n.init),
      (this._localStream = null),
      (this._remoteStreams = {}),
      (this.onSelfCaputreCb = {
        on_preview_video_data: (e) => {
          this._localStream.onYuvFrame(e);
        },
      }),
      (this.onRoomChangeCallbacks = {
        on_join_succeed: (e) => {
          o.info("on_join_succeed", e),
            this.changeConnectState(n.connected),
            (this._join_info = e),
            this.joinSuccessCallback &&
              (this.joinSuccessCallback(e), (this.joinSuccessCallback = null));
        },
        on_reconnect: (e) => {
          o.info("on_reconnect", e);
        },
        on_room_event: (e) => {
          o.info("on_room_event", e);
          const { event: t } = e;
          switch (t) {
            case 0:
            case 1:
              this.changeConnectState(n.disconnected);
              break;
            case 2:
              this.managerObject.stopCapture(),
                this.managerObject.leaveRoom(),
                this.changeConnectState(n.disconnected);
          }
        },
        on_stream_event: (e) => {
          o.info("on_stream_event", e);
          const { event: t } = e;
          switch (t) {
            case 0:
            case 1:
              this.emit("published", { type: 0 == t ? "video" : "audio" });
          }
        },
        on_new_peer: (e) => {
          o.info("on_new_peer", e),
            this.emit("peer-joined", {
              peer: Object.assign({}, e, { id: e.peer_id }),
            });
        },
        on_peer_closed: (e) => {
          o.info("on_peer_closed", e), this.emit("peer-leave", e.peer_id);
        },
        on_new_consumer: (e) => {
          o.info("on_new_consumer", e);
        },
        on_consumer_closed: (e) => {
          o.info("on_consumer_closed", e);
        },
        on_render_video_frame: (e) => {
          o.info("on_render_video_frame", e);
        },
        on_render_audio_data: (e) => {
          o.info("on_render_audio_data", e);
        },
      }),
      window.addEventListener("beforeunload", this.beforeunload.bind(this));
  }
  beforeunload(e) {
    this.managerObject.stopCapture(), this.managerObject.leaveRoom();
  }
  getLocalStream() {
    return this._localStream._stream;
  }
  pauseLocalStream() {
    this._localStream.pause();
  }
  resumeLocalStream() {
    this._localStream.resume();
  }
  startCapture(e) {
    let n = Object.assign({}, e, { pid: 0 });
    return (
      (this._capture_conf = n),
      this._localStream || (this._localStream = new t({ fps: n.fps })),
      new Promise((e) => {
        this.managerObject.startCapture(n, this.onSelfCaputreCb), e(n);
      })
    );
  }
  join(e, t) {
    let n = new URL(e),
      o = {
        host: n.hostname,
        port: Math.floor(n.port),
        nsp: n.pathname + n.search,
      };
    console.log("join _params", o),
      (this.joinSuccessCallback = t),
      this.managerObject.joinRoom(o, this.onRoomChangeCallbacks);
  }
  changeShare(e) {
    return (
      this.managerObject.stopCapture(),
      this._localStream.changeCapture(e),
      e.fps && (this._localStream.fps = e.fps),
      this.startCapture(e)
    );
  }
  publish() {
    if (this.connectState !== n.connected)
      return void o.error("publish failed no connected");
    let e = this._join_info.self_peer.peer_id;
    this.managerObject.startPushVideoStream(e, {
      max_bitrate_bps: 2e7,
      min_bitrate_bps: 2e6,
      max_framerate: 60,
    }),
      this._capture_conf.audio && this.managerObject.startPushAudioStream(e);
  }
  leave() {
    this.connectState != n.disconnected &&
      (this.managerObject.stopCapture(),
      this.managerObject.leaveRoom(),
      this.changeConnectState(n.disconnected),
      this._localStream && this._localStream.clear());
  }
  getVideoScreenshot() {
    return this.managerObject.getVideoScreenshot().then((e) => {
      let t = new Blob([e], { type: "image/jpeg" });
      return Promise.resolve(t);
    });
  }
  changeConnectState(e) {
    let t = this.connectState;
    (this.connectState = e),
      this.emit("connect-state-change", { currentState: e, prevState: t });
  }
};
