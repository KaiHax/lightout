const e = 2;
let n = {
  scale: 1,
  displayType: 1,
  position: { isRight: !1, isBottom: !1, x: 0, y: 0, xScale: 0, yScale: 0.39 },
  screenSize: { width: 1024, height: 769 },
};
const { ipcRenderer: i } = require("electron"),
  s = require("@electron/remote"),
  t = s.require("./log/logger").appLogger.label("[OverlayWin]");
t.info("loaded"), console.log("loaded", t);
const a = s.getCurrentWindow(),
  o = document.querySelector(".warpper"),
  l = document.querySelector("#content-box");
i.on("setconfig", (e, i) => {
  t.info("[setconfig]", i),
    console.log("[config]", i),
    Object.assign(n, i),
    (l.style.fontSize = 14 * n.scale + "px");
});
let c = 0,
  r = 0;
a.on("show", () => {
  t.info("[show]"),
    setTimeout(() => {
      !(function (e) {
        const i = n.position;
        let s = i.x,
          t = i.y,
          l = a.getSize(),
          c = l[0],
          r = l[1];
        const d = n.screenSize;
        (s = Math.round(d.width * i.xScale)),
          (t = Math.round(d.height * i.yScale)),
          n.position.isRight
            ? ((s -= c), o.classList.add("isright"))
            : o.classList.remove("isright");
        n.position.isBottom
          ? ((t -= r), o.classList.add("isbottom"))
          : o.classList.remove("isbottom");
        console.log("[position]", s, t),
          a.once("move", () => {
            e && e();
          }),
          a.setPosition(s, t);
      })(),
        (l.style.visibility = "visible"),
        (c = 0),
        clearInterval(r),
        (r = setInterval(() => {
          c > 10
            ? clearInterval(r)
            : (c++,
              t.info("[moveTop] currentWin.isVisible():" + a.isVisible()),
              a.isVisible() && a.moveTop());
        }, 2e3));
    }, 500);
}),
  i.on("hide", () => {
    t.info("[hide]"),
      (l.style.visibility = "hidden"),
      setTimeout(() => {
        a.hide();
      }, 100);
  }),
  i.on("statechange", (e, n) => {
    switch (
      ("talkListChange" != n.type && t.info("[statechange]", n),
      "talkListChange" !== n.type && console.log("event", n),
      n.type)
    ) {
      case "selfChange":
        (s = n.data),
          Object.assign(d, s),
          (function () {
            let e = d;
            const n = document.querySelector(".self-event");
            let i = `<li>\n        <div class="icon" style="background-image: url('${
              e.avatar
            }')"></div>\n        <div class="content">\n            <span class="user-name">${
              e.nickname || e.username
            }</span>\n            ${
              e.isMuted ? '<span class="mute-icon"></span>' : ""
            }\n            ${
              !e.isMuted && e.isInputMuted
                ? '<span class="mute-icon input"><span>'
                : ""
            }\n        </div>\n    </li>`;
            m(e) && (i = ""), (n.innerHTML = i), p();
          })();
        break;
      case "userListChange":
        (i = n.data), (u.list = i), p();
        break;
      case "talkListChange":
        !(function (e) {
          e.forEach((e) => {
            const n = e.id,
              i = u.list.find((e) => e.id == n);
            i &&
              (Object.assign(i, e, { isTalk: !0 }),
              clearTimeout(u.timer[n]),
              (u.timer[n] = setTimeout(() => {
                (i.isTalk = !1), p();
              }, 300)),
              p());
          });
        })(n.data);
        break;
      case "notifyMessage":
        !(function (e) {
          const n = document.querySelector(".message-event"),
            i = document.createElement("li");
          (i.innerHTML = `\n        <div class="icon" style="background-image: url('${e.avatar}')"></div>\n        <div class="content">\n            <span class="user-name">${e.title}</span>\n            <div class="message-content">${e.message}</div></div>`),
            n.appendChild(i),
            setTimeout(() => {
              n.removeChild(i);
            }, 3e3);
        })(n.data);
        break;
      case "notifyChannel":
        !(function (e) {
          !(function (e) {
            const n = document.querySelector(".channel-event"),
              i = document.createElement("li");
            (i.innerHTML = `\n        <div class="icon" style="background-image: url('${
              e.avatar
            }')"></div>\n        <div class="content">\n            <span class="user-name">${
              e.nickname || e.username
            }</span>${
              e.join
                ? '<span class="channel-join">加入语音频道</span>'
                : '<span class="channel-leave">离开语音频道</span>'
            }</div>`),
              n.appendChild(i),
              setTimeout(() => {
                n.removeChild(i);
              }, 3e3);
          })(e);
          const n = u.list.findIndex((n) => n.id == e.id),
            i = -1 !== n;
          e.join && !i && (u.list.push(e), p());
          !e.join && i && (u.list.splice(n, 1), p());
        })(n.data);
    }
    var i, s;
  });
let d = {};
const u = { list: [], timer: {} };
function m(e) {
  return !e.isInputMuted && !e.isMuted;
}
function p() {
  let i = u.list;
  n.displayType === e && (i = i.filter((e) => e.isTalk)),
    m(d) || (i = i.filter((e) => e.id !== d.id)),
    i.forEach((e) => {
      e.id == d.id && Object.assign(e, d);
    });
  const s = document.querySelector(".user-event");
  let t = i.map(
    (e) =>
      `<li style="${
        e.isTalk ? "" : "opacity: 0.12"
      }">\n                <div class="icon" style="background-image: url('${
        e.avatar
      }');}"></div>\n                <div class="content">\n                    <span class="user-name">${
        e.nickname || e.username
      }</span>\n                </div>\n        </li>`
  );
  s.innerHTML = t.join("");
}
