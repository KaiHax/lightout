const e = require("path"),
  {
    Tray: t,
    BrowserWindow: i,
    app: s,
    Menu: n,
    nativeImage: o,
    screen: r,
    ipcMain: a,
  } = require("electron"),
  h = require("../../config.json"),
  l = require("../../log/logger").appLogger.label("[main]"),
  d = require("lodash"),
  c = new (require("electron-store"))();
module.exports = class {
  constructor() {
    const { mainWindow: s } = i;
    (this.img = o.createFromPath(
      e.join(__dirname, "../../../resourse/kaiheila.ico")
    )),
      (this.imgpng = o.createFromPath(null)),
      (this.tray = new t(this.img)),
      (this.isLeave = !0),
      (this.isLeaveBox = !0),
      (this.win = null),
      (this.flickerTimer = null),
      (this.count = 0),
      (this.size = 0),
      (this.isFocus = !0),
      c.set({
        messageAll: [],
        friends: [],
        guildList: [],
        currentChannelInfo: null,
        readList: [],
      });
    const n = r.getPrimaryDisplay(),
      { width: l, height: g } = n.workAreaSize;
    (this.screenWidth = l),
      (this.screenHeight = g),
      this.createWindow(),
      this.setToolTip(h.productName),
      this.setContextMenu(),
      this.bindEvent(),
      this.tray.on("mouse-move", (e, t) => {
        this.isLeave &&
          ((this.isLeave = !1), this.showBox(), this.checkTrayLeave());
      }),
      s.on("blur", (e) => {
        this.isFocus = !1;
        let t = c.get("messageAll"),
          i = c.get("friends");
        if (2 == c.get("isOpen")) return;
        let s = !1;
        d.forEach(t, (e) => {
          e.isShow && (s = !0);
        }),
          i && i.length > 0 && (s = !0),
          s && this.startFlicker();
      }),
      s.on("hide", (e) => {
        this.isFocus = !1;
        let t = c.get("messageAll"),
          i = c.get("friends");
        if (2 == c.get("isOpen")) return;
        let s = !1;
        d.forEach(t, (e) => {
          e.isShow && (s = !0);
        }),
          i && i.length > 0 && (s = !0),
          s && this.startFlicker();
      }),
      s.on("focus", (e) => {
        this.isFocus = !0;
        let t = c.get("readList");
        t || (t = []),
          d.forEach(t, (e) => {
            this.setBoxInfo(e);
          }),
          c.set({ readList: [] });
      }),
      a.on("hide_all_box", (t, i) => {
        let s = c.get("messageAll");
        d.forEach(s, (e) => {
          e.isShow = !1;
        }),
          c.set({ messageAll: s }),
          c.set({ friends: [] }),
          (this.img = o.createFromPath(
            e.join(__dirname, "../../../resourse/kaiheila.ico")
          )),
          this.hideBox(),
          this.stopFlicker();
      }),
      a.on("hide_item", (e, t) => {
        let i = c.get("messageAll");
        d.forEach(i, (e) => {
          e.id == t.id && (e.isShow = !1);
        }),
          c.set({ messageAll: i }),
          this.hideBox(),
          this.clearIconRed(i);
      }),
      a.on("open_setting", (e, t) => {
        s && !s.isDestroyed() && (s.isMinimized() && s.restore(), s.show()),
          s.webContents.send("open_notify_setting"),
          this.hideBox();
      }),
      a.on("change_size", (e, t) => {
        this.size = t.size;
      }),
      a.on("open_friend", (e, t) => {
        s && !s.isDestroyed() && (s.isMinimized() && s.restore(), s.show()),
          s.webContents.send("open_friend"),
          this.hideBox();
      }),
      a.on("open_guild", (e, t) => {
        this.toGuild(t);
      }),
      a.on("open_private", (e, t) => {
        this.toPrivate(t);
      }),
      a.on("change_tray_open", (t, i) => {
        let s = i.isOpen;
        if ((c.set({ isOpen: s }), 2 == s)) {
          this.hideBox();
          let t = c.get("friends"),
            i = !1;
          d.forEach(messageAll, (e) => {
            e.isShow && (i = !0);
          }),
            (i || (t && t.length > 0)) &&
              (this.img = o.createFromPath(
                e.join(__dirname, "../../../resourse/redkaiheila.ico")
              )),
            this.stopFlicker();
        } else {
          this.img = o.createFromPath(
            e.join(__dirname, "../../../resourse/kaiheila.ico")
          );
          let t = c.get("friends"),
            i = !1;
          d.forEach(messageAll, (e) => {
            e.isShow && (i = !0);
          }),
            (i || (t && t.length > 0)) && this.startFlicker();
        }
      }),
      a.on("message_box_over", (e, t) => {
        (this.isLeaveBox = !1), (this.isLeave = !1);
      }),
      a.on("message_box_out", (e, t) => {
        (this.isLeaveBox = !0), (this.isLeave = !0), this.checkTrayLeave();
      });
  }
  checkTrayLeave() {
    let e = this.tray.getBounds();
    clearInterval(this.leaveInter),
      (this.leaveInter = setInterval(() => {
        let t = r.getCursorScreenPoint();
        (t = r.getCursorScreenPoint()),
          (e.x < t.x &&
            e.y < t.y &&
            t.x < e.x + e.width &&
            t.y < e.y + e.height) ||
            ((this.isLeave = !0),
            this.leaveBox(),
            clearInterval(this.leaveInter));
      }, 200));
  }
  leaveBox() {
    setTimeout(() => {
      this.isLeaveBox &&
        this.win &&
        !this.win.isDestroyed() &&
        ((this.isLeave = !0),
        this.win.hide(),
        clearInterval(this.leaveInter),
        (this.isLeaveBox = !0));
    }, 500);
  }
  toPrivate(e) {
    this.showMainWindow("open_private_message", e);
    let t = this.removeSingleData(e, 2);
    this.clearIconRed(t), this.hideBox();
  }
  showMainWindow(e, t) {
    const { mainWindow: s } = i;
    s &&
      !s.isDestroyed() &&
      (s.isMinimized() && s.restore(), s.show(), e && s.webContents.send(e, t));
  }
  removeSingleData(e, t) {
    let i = c.get("messageAll"),
      s = -1;
    return (
      d.forEach(i, (i, n) => {
        let o = 1 == t ? e.guild_id : e.targetId;
        i.id == o && (s = n);
      }),
      s >= 0 && i.splice(s, 1),
      c.set({ messageAll: i }),
      i
    );
  }
  toGuild(e) {
    this.showMainWindow("open_channel_message", e);
    let t = this.removeSingleData(e, 1);
    c.set({ messageAll: t }), this.clearIconRed(t), this.hideBox();
  }
  setCurrentFriend(e) {
    e.id
      ? c.set({ currentChannelInfo: { id: e.id, type: "friend" } })
      : c.set({ currentChannelInfo: null });
  }
  setToolTip(e) {
    this.tray.setToolTip(e);
  }
  setBoxFriend(e) {
    let t = c.get("messageAll"),
      i = d.get(e, "payload", []);
    c.set({ friends: i }),
      i && i.length > 0 ? this.startFlicker() : this.clearIconRed(t);
  }
  pushReadList(e, t) {
    let i = !1,
      s = c.get("readList");
    s || (s = []);
    let n = c.get("currentChannelInfo");
    if ((n || (n = {}), n.id == e && !this.isFocus)) {
      let n = !1;
      d.forEach(s, (t) => {
        e == d.get(t, "message.content.body.guild_id", "") && (n = !0);
      }),
        n || (s.push(t), c.set({ readList: s })),
        (i = !0);
    }
    return i;
  }
  pushBatchReadList(e, t, i) {
    let s = !1,
      n = c.get("readList");
    n || (n = []);
    let o = c.get("currentChannelInfo");
    if ((o || (o = {}), e)) {
      if ("friend" == o.type && !this.isFocus) {
        let e = !1;
        d.forEach(n, (t) => {
          d.get(t, "message.content.body.user_chat", "") && (e = !0);
        }),
          e || (n.push(i), c.set({ readList: n })),
          (s = !0);
      }
    } else if (t && o.id == t.guild_id && !this.isFocus) {
      let e = !1;
      d.forEach(n, (i) => {
        t.guild_id == d.get(i, "message.content.body.guild_id", "") && (e = !0);
      }),
        e ||
          (n.push({
            message: {
              content: {
                type: "mark_as_read_mention",
                body: { channel_id: t.channel_id, guild_id: t.guild_id },
              },
            },
          }),
          c.set({ readList: n })),
        (s = !0);
    }
    return s;
  }
  setBoxInfo(e, t) {
    t && this.setBoxGuild(e);
    let i = c.get("messageAll"),
      s = d.get(e, "message", {});
    i || (i = []);
    let n = d.get(s, "content.type", "");
    if ("desktop_notification" == n) {
      let e = d.get(s, "content.body.title", ""),
        t = d.get(s, "content.body.content", "");
      if ("请求加为好友" == e || "请求加为好友" == t) return;
      let n = d.get(s, "content.body.extra.chat_user_id", ""),
        o = d.get(s, "content.body.extra.guild_id", ""),
        r = d.get(s, "targetId", ""),
        a = d.get(s, "sentTime", ""),
        h = d.get(s, "messageUId", ""),
        l = d.get(s, "content.body", "");
      l.targetId = r;
      let g = !1,
        m = -1;
      d.forEach(i, (e, t) => {
        (e.id != n && e.id != o) || ((g = !0), (m = t));
      }),
        g
          ? (i[m].body.push(l), (i[m].isShow = !0))
          : i.push({
              id: n || o,
              type: n ? "private" : "guild",
              sentTime: a,
              messageUId: h,
              body: [l],
              isShow: !0,
            }),
        c.set({ messageAll: i }),
        this.startFlicker(),
        this.win &&
          !this.win.isDestroyed() &&
          this.win.webContents.send("reload_message_box");
    } else if ("mark_as_read_mention" == n) {
      let t = d.get(s, "content.body.guild_id", "");
      if (this.pushReadList(t, e)) return;
      if (t) {
        let e = -1;
        d.forEach(i, (i, s) => {
          i.id == t && (e = s);
        }),
          e >= 0 && i.splice(e, 1),
          c.set({ messageAll: i }),
          this.clearIconRed(i);
      }
    } else if ("mark_as_batchread" == n) {
      let t = d.get(s, "content.body.user_chat", ""),
        n = d.get(s, "content.body.channel", "");
      if (t) {
        if (this.pushBatchReadList(t, n, e)) return;
        let s = d.filter(i, (e) => "guild" == e.type);
        c.set({ messageAll: s }), this.clearIconRed(s);
      } else
        n &&
          (d.forEach(n, (s) => {
            let n = s.guild_id;
            if (this.pushBatchReadList(t, s, e)) return !1;
            let o = -1;
            d.forEach(i, (e, t) => {
              e.id == n && (o = t);
            }),
              o >= 0 && i.splice(o, 1);
          }),
          c.set({ messageAll: i }),
          this.clearIconRed(i));
    }
  }
  clearIconRed(t) {
    let i = c.get("friends"),
      s = !1;
    d.forEach(t, (e) => {
      e.isShow && (s = !0);
    }),
      s ||
        (i && !(i.length <= 0)) ||
        ((this.img = o.createFromPath(
          e.join(__dirname, "../../../resourse/kaiheila.ico")
        )),
        this.stopFlicker(),
        this.hideBox());
  }
  setBoxGuild(e) {
    let t = d.get(e, "state", {}),
      i = d.get(e, "state.currentChannelInfo.guild_id", {});
    i && c.set({ currentChannelInfo: { id: i, type: "guild" } });
    let s = [];
    d.forEach(t.guildMenus, (e) => {
      s.push({
        id: e.id,
        name: e.name,
        icon: e.icon,
        roles: e.roles,
        userInfo: t.userInfo,
        my_nickname: e.my_nickname,
      });
    }),
      c.set({ guildList: s });
  }
  showBox() {
    let e = c.get("messageAll"),
      t = c.get("friends"),
      i = !1;
    d.forEach(e, (e) => {
      e.isShow && (i = !0);
    }),
      t && t.length > 0 && (i = !0),
      i && this.createWindow();
  }
  createWindow() {
    const t = r.getPrimaryDisplay(),
      { width: s, height: n } = t.workAreaSize;
    (this.screenWidth = s), (this.screenHeight = n);
    const { mainWindow: o } = i;
    let a = this.tray.getBounds(),
      h = "bottom",
      l = a.y - 416;
    l <= 0 && ((l = a.height), (h = "top")),
      l > this.screenHeight && (l = this.screenHeight);
    let d = a.x - 136;
    a.x <= 200 && ((d = 75), (l = a.y - 416 + 3 * a.height)),
      a.x >= this.screenWidth - 150 &&
        ((d = this.screenWidth - 272 - 10), (l = a.y - 416 + 3 * a.height)),
      this.win
        ? this.win &&
          !this.win.isDestroyed() &&
          (this.win.setSize(272, 416),
          this.win.setPosition(d, l),
          this.win.webContents.send("reload_message_box", { type: h }),
          this.win.show())
        : ((this.win = new i({
            width: 272,
            height: 416,
            maximizable: !1,
            resizable: !1,
            movable: !1,
            minimizable: !1,
            closable: !1,
            alwaysOnTop: !0,
            fullscreenable: !1,
            frame: !1,
            thickFrame: !1,
            y: l,
            x: d,
            titleBarStyle: "hidden",
            parent: o,
            momodalable: !0,
            useContentSize: !0,
            focusable: !0,
            skipTaskbar: !0,
            transparent: !0,
            autoHideMenuBar: !0,
            webPreferences: { contextIsolation: !1, nodeIntegration: !0 },
          })),
          this.win.loadFile(e.join(__dirname, "./index.html")),
          this.win.hide());
  }
  openSetting() {}
  hideBox() {
    (this.isLeave = !0),
      this.win &&
        !this.win.isDestroyed() &&
        (this.win.hide(),
        clearInterval(this.leaveInter),
        (this.isLeaveBox = !0));
  }
  bindEvent() {
    this.tray.on("click", () => {
      const { mainWindow: e } = i;
      if (e && !e.isDestroyed()) {
        e.isMinimized() && e.restore(), e.show();
        let t = c.get("messageAll"),
          i = c.get("friends");
        if (t && t.length > 0) {
          let e = d.get(t, `[${t.length - 1}]`, {});
          if ("guild" == e.type) {
            let t = e.body,
              i = d.get(t, `[${t.length - 1}].extra`, {});
            this.toGuild({
              guild_id: i.guild_id,
              channel_id: i.channel_id,
              messageId: i.msg_id,
            });
          } else this.toPrivate({ targetId: e.id });
        } else
          i.length > 0 &&
            (e &&
              !e.isDestroyed() &&
              (e.isMinimized() && e.restore(), e.show()),
            e.webContents.send("open_friend"),
            this.hideBox());
      }
    });
  }
  startFlicker() {
    if (2 == c.get("isOpen"))
      return (
        (this.img = o.createFromPath(
          e.join(__dirname, "../../../resourse/redkaiheila.ico")
        )),
        this.tray.setImage(this.img),
        void clearInterval(this.flickerTimer)
      );
    (this.img = o.createFromPath(
      e.join(__dirname, "../../../resourse/kaiheila.ico")
    )),
      this.tray.setImage(this.img),
      this.flickerTimer ||
        (this.flickerTimer = setInterval(() => {
          this.tray.setImage(this.count++ % 2 == 0 ? this.img : this.imgpng);
        }, 500));
  }
  stopFlicker() {
    this.flickerTimer && clearInterval(this.flickerTimer),
      (this.flickerTimer = null),
      this.tray.setImage(this.img);
  }
  setContextMenu() {
    const e = n.buildFromTemplate([
      {
        label: "显示主界面",
        click: () => {
          const { mainWindow: e } = i;
          e && !e.isDestroyed() && (e.isMinimized() && e.restore(), e.show());
        },
      },
      {
        label: "退出",
        click: () => {
          const { session: e } = require("electron");
          e.defaultSession.cookies.flushStore().finally(() => {
            e.defaultSession.flushStorageData(), l.info("[exit]"), s.exit();
          });
        },
      },
    ]);
    this.tray.setContextMenu(e);
  }
};
