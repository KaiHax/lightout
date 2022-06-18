const { ipcMain: e } = require("electron"),
  o = require("fs"),
  n = require("path"),
  { appLogger: r } = require("../log/logger"),
  i = r.label("[voicehook][main]");
function t(e) {
  let n = `${__dirname}/../addon/node-avhook/build/Release/${e}`,
    r = "./" + e,
    t = o.existsSync(n);
  if (t)
    try {
      o.copyFileSync(n, r);
    } catch (e) {
      i.error("文件拷贝失败", e);
    }
  else if (
    ((n = `${__dirname}/../addon/process_node-avhook/build/Release/${e}`),
    (t = o.existsSync(n)),
    t)
  ) {
    o.existsSync(r) &&
      (function (e) {
        try {
          o.unlinkSync(e);
        } catch (o) {
          i.error("文件删除失败 - " + e, o);
        }
      })(r);
    try {
      o.copyFileSync(n, r), o.unlink(n, () => {});
    } catch (e) {
      i.error("文件拷贝失败", e);
    }
  }
}
const l = require("../addon/support"),
  c = require("../utils/requireAddon");
let s = null;
function d() {
  s ||
    (t("audiohook.dll"),
    t("audiotrap.dll"),
    (s = l.avHook()
      ? c("node-avhook")
      : {
          core: {
            detectplayer() {},
            hookplayer() {},
            unhookplayer() {},
            setvolume() {},
          },
        }));
}
const { EventNames: a, EnumEventType: p } = require("./EventNames");
e.handle(
  a.getRuningMusic,
  async (e) =>
    await (function () {
      d();
      const e = require("../common/volume-control"),
        o = require("../utils/requireAddon")(
          "node-process-windows"
        ).process_windows;
      let n = (function () {
        let n = [
            { playername: "QQMusic.exe", pid: 0 },
            { playername: "cloudmusic.exe", pid: 0 },
            { playername: "KuGou.exe", pid: 0 },
            { playername: "KwService.exe", pid: 0 },
            { playername: "Spotify.exe", pid: 0 },
          ],
          r = e.getAllProcessVolume() || [],
          i = o.getAllProcessesInfosEx() || [],
          t = o.getAllWindowsTitlesEx() || [],
          l = r.map((e) => e.pid),
          c = t.map((e) => e.pid);
        for (let e = 0; e < n.length; e++) {
          let r = n[e],
            t = i.filter((e) => e.name == r.playername);
          if (1 == t.length) (r.pid = t[0].pid), (r.path = t[0].path);
          else if (t.length > 1) {
            let e = t.find((e) => l.includes(e.pid));
            if (e) (r.pid = e.pid), (r.path = e.path);
            else {
              for (let e = 0; e < t.length; e++) {
                let o = t[e];
                c.includes(o) && ((r.pid = o.pid), (r.path = o.path));
              }
              if (0 == r.pid) {
                let e = t[0];
                try {
                  let n = o.getParentPidByPid(e.pid),
                    i = t.find((e) => e.pid === n);
                  (i = i || e), (r.pid = i.pid), (r.path = i.path);
                } catch {}
              }
              if (0 == r.pid) {
                let e = t[t.length - 1];
                (r.pid = e.pid), (r.path = e.path);
              }
            }
          }
        }
        return n;
      })();
      return Promise.resolve(n.filter((e) => Boolean(e.pid)));
    })()
);
let u = !1,
  h = n.resolve("voicehook.debug.pcm"),
  m = null;
e.on(a.unhook, (e, o) => {
  i.info("[unhook]", o), s && s.core.unhookplayer(""), (m = null);
}),
  e.on(a.setVolume, (e, o) => {
    d(), s.core.setvolume(Number(o));
  });
let y = !0,
  f = 0;
e.on(a.hookPort, (e, { path: n, pid: r = 0, key: t }) => {
  y = !0;
  const [l] = e.ports;
  if ((d(), i.info("[hook]", r, n, m), !r && "all" !== t)) return;
  if ((m && s.core.unhookplayer(m), (m = r || n), "cloudmusic" === t)) {
    let e = 0 == s.core.checkInjectedByProcessId(parseInt(r)),
      o = 1 == s.core.checkAccessFile(n, 2);
    if (e && o) {
      let e = s.core.terminateProcessByProcName("cloudmusic.exe");
      i.debug("[hook] terminate", e), (r = 0);
    }
  }
  (y = !0), e.sender.send(a.eventcb, { eid: p.pause });
  let c = s.core.hookplayer(
    { pid: r, source: n, mode: 2 },
    (n) => {
      let r = Buffer.from(n);
      l.postMessage(r),
        u &&
          o.appendFile(h, r, (e) => {
            console.error("[voicehook] record", e);
          }),
        y && ((y = !1), e.sender.send(a.eventcb, { eid: p.resume })),
        clearTimeout(f),
        (f = setTimeout(() => {
          (y = !0), e.sender.send(a.eventcb, { eid: p.pause });
        }, 500));
    },
    (o) => {
      e.sender.send(a.eventcb, o);
    }
  );
  i.debug("[hook] result", c),
    process.nextTick(() => {
      e.sender.send(a.eventcb, { eid: 0, code: c });
    });
}),
  e.on(a.checkAccessFile, (e, o, n) => {
    let r = s.core.checkAccessFile(o, n);
    e.returnValue = r;
  }),
  e.on(a.enableRecord, (e, n) => {
    if (((u = n), n))
      try {
        o.unlinkSync(h);
      } catch {}
  }),
  process.on("exit", () => {
    i.info("[exit unhook]", m), s && null != m && s.core.unhookplayer("");
  });
