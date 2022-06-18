(window["webpackJsonpkaihei-react"] =
  window["webpackJsonpkaihei-react"] || []).push([
  [13],
  {
    119: function (e, t, n) {
      "use strict";
      var a = n(79),
        r = n(106);
      var o = n(131);
      function i(e, t, n) {
        return (i = Object(o.a)()
          ? Reflect.construct
          : function (e, t, n) {
              var a = [null];
              a.push.apply(a, t);
              var o = new (Function.bind.apply(e, a))();
              return n && Object(r.a)(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function c(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (c = function (e) {
          if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
          )
            return e;
          var n;
          if ("function" !== typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, o);
          }
          function o() {
            return i(e, arguments, Object(a.a)(this).constructor);
          }
          return (
            (o.prototype = Object.create(e.prototype, {
              constructor: {
                value: o,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            Object(r.a)(o, e)
          );
        })(e);
      }
      n.d(t, "a", function () {
        return c;
      });
    },
    144: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      function a() {
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
      }
    },
    185: function (e, t) {},
    67: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var a = /^1\d{10}$/,
        r = /^[\u4e00-\u9fa5]/;
      t.c = {
        phoneNumber: /^[0-9]{3,30}$/,
        password: /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,30}$/,
        username: /^\S{1,30}$/,
        checkcode: /^\w{6}$/,
        chinese: r,
        chinese_phoneNumber: a,
      };
    },
    696: function (e, t, n) {
      e.exports = n(701);
    },
    697: function (e, t, n) {},
    698: function (e, t) {
      var n =
        ("undefined" !== typeof globalThis && globalThis) ||
        ("undefined" !== typeof self && self) ||
        ("undefined" !== typeof global && global);
      if ("undefined" === typeof n.AbortController) {
        var a = {};
        (n.AbortSignal = (function () {
          function e(e) {
            if (e !== a) throw new TypeError("Illegal constructor.");
            EventTarget.call(this), (this._aborted = !1);
          }
          return (
            (e.prototype = Object.create(EventTarget.prototype)),
            (e.prototype.constructor = e),
            Object.defineProperty(e.prototype, "onabort", {
              get: function () {
                return this._onabort;
              },
              set: function (e) {
                var t = this._onabort;
                t && this.removeEventListener("abort", t),
                  (this._onabort = e),
                  this.addEventListener("abort", e);
              },
            }),
            Object.defineProperty(e.prototype, "aborted", {
              get: function () {
                return this._aborted;
              },
            }),
            e
          );
        })()),
          (n.AbortController = (function () {
            function e() {
              this._signal = new AbortSignal(a);
            }
            return (
              (e.prototype = Object.create(Object.prototype)),
              Object.defineProperty(e.prototype, "signal", {
                get: function () {
                  return this._signal;
                },
              }),
              (e.prototype.abort = function () {
                var e = this.signal;
                e.aborted ||
                  ((e._aborted = !0), e.dispatchEvent(new Event("abort")));
              }),
              e
            );
          })());
      }
    },
    699: function (e, t, n) {},
    701: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        o = n(17),
        i = n.n(o),
        c = n(2),
        s = n(3),
        l = n(4),
        u = n(5),
        m = n(95),
        d = n(67);
      n(697);
      var f = n(119);
      n(698), n(188);
      function h() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = Object(m.stringify)(t, { arrayFormat: "comma" });
        return n.length ? "".concat(e, "?").concat(n) : e;
      }
      var v = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n(e) {
            var a,
              r = e.code,
              o = void 0 === r ? 400 : r,
              i = e.message,
              s = void 0 === i ? "\u51fa\u73b0\u9519\u8bef" : i,
              l = e.error,
              u = void 0 === l ? "\u63a5\u53e3400,\u65e0error\u4fe1\u606f" : l;
            return (
              Object(c.a)(this, n),
              ((a = t.call(this)).errorResponse = {
                code: o,
                message: s,
                error: u,
              }),
              a
            );
          }
          return Object(s.a)(n);
        })(Object(f.a)(Error)),
        g = function () {
          return function (e) {
            if (e.status >= 200 && e.status < 300) return e;
            if (400 === e.status)
              return e.text().then(function (e) {
                var t = new v({});
                try {
                  t = new v(JSON.parse(e));
                } finally {
                  throw t.errorResponse;
                }
              });
            if (401 === e.status) {
              var t = new v({
                code: 401,
                message: "\u8bf7\u5148\u767b\u5f55",
                error: "\u767b\u9646\u72b6\u6001\u5931\u6548",
              });
              throw (
                ((window.location.href = "/login?redir=".concat(
                  window.location.href
                )),
                t.errorResponse)
              );
            }
            if (403 === e.status)
              throw new v({
                code: 403,
                message:
                  "\u6ca1\u6709\u6743\u9650\u6267\u884c\u6b64\u64cd\u4f5c",
                error: "\u8d8a\u6743\u8bbf\u95ee",
              }).errorResponse;
            return Promise.reject("\u7f51\u7edc\u9519\u8bef");
          };
        },
        p = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "POST",
            n = arguments.length > 2 ? arguments[2] : void 0,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            r =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 5e3,
            o = {
              method: t,
              timeout: r,
              credentials: "include",
              redirect: "error",
              headers: { "Content-Type": "application/json; charset=utf-8" },
            };
          if (
            (a.urlExt && (e = "".concat(e, "/").concat(a.urlExt)), "GET" !== t)
          )
            o.body = JSON.stringify(n);
          else {
            var i = h(e, n);
            n && (e = i);
          }
          return fetch(e, o)
            .then(g())
            .then(function (e) {
              return 204 === e.status ? Promise.resolve() : e.json();
            })
            .catch(function (e) {
              throw e;
            });
        },
        b = function (e, t, n) {
          return p(e, "GET", t, n);
        },
        w = function () {
          return Object(m.parse)(window.location.search.slice(1), !0);
        };
      var E = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n(e) {
            var a;
            return (
              Object(c.a)(this, n),
              ((a = t.call(this, e)).getWidgetInfo = function (e) {
                return b("/api/guilds/".concat(e, "/widget.json"));
              }),
              (a.state = { loading: !0, widgetInfo: {} }),
              a
            );
          }
          return (
            Object(s.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  console.log("query:", w());
                  var t = w().id;
                  t &&
                    this.getWidgetInfo(t).then(function (t) {
                      t && e.setState({ widgetInfo: t, loading: !1 });
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.loading,
                    n = e.widgetInfo,
                    a = n.name,
                    o = n.online_count,
                    i = n.open_id,
                    c = n.icon,
                    s = void 0 === c ? "" : c,
                    l = n.channels,
                    u = void 0 === l ? [] : l,
                    m = n.members,
                    f = void 0 === m ? [] : m,
                    h = n.invite_link;
                  return r.a.createElement(
                    "div",
                    { className: "kaihei-widget theme-dialog-footer" },
                    t
                      ? r.a.createElement(
                          "div",
                          { className: "widget-loading" },
                          r.a.createElement("i", {
                            className:
                              "loading-ico iconfont iconloading theme-color-base",
                          })
                        )
                      : r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            "header",
                            { className: "widget-header theme-bgcolor-3" },
                            r.a.createElement(
                              "div",
                              {
                                className: "guild-icon",
                                style: {
                                  backgroundImage: "url(".concat(s, ")"),
                                },
                              },
                              s
                                ? null
                                : (function (e) {
                                    var t = "",
                                      n = !1;
                                    return (
                                      d.a.test(e)
                                        ? ((t = e.slice(0, 4)), (n = !0))
                                        : (t = e.slice(0, 1)),
                                      r.a.createElement(
                                        "span",
                                        { className: n ? "chinese" : "" },
                                        t
                                      )
                                    );
                                  })(a)
                            ),
                            r.a.createElement(
                              "div",
                              { className: "guild-info flex1 text-line1" },
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "guild-name theme-color-base text-line1",
                                },
                                a
                              ),
                              r.a.createElement(
                                "div",
                                { className: "guild-bottom theme-color-60" },
                                r.a.createElement("span", {
                                  className: "green-pointer",
                                }),
                                " ",
                                r.a.createElement(
                                  "span",
                                  { className: "online-count" },
                                  o,
                                  window.ext("channel_onlinelab")
                                ),
                                Boolean(i) &&
                                  r.a.createElement(
                                    "span",
                                    null,
                                    window.ext("severoverview_idlab"),
                                    "\xa0",
                                    i
                                  )
                              )
                            )
                          ),
                          r.a.createElement(
                            "section",
                            { className: "widget-section theme-scroll-bar" },
                            r.a.createElement(
                              "div",
                              { className: "list-tips theme-color-60" },
                              window.ext("obs_voicechannel")
                            ),
                            r.a.createElement(
                              "div",
                              { className: "audio-channel-list" },
                              u.map(function (e) {
                                return r.a.createElement(
                                  "div",
                                  { className: "channel-item", key: e.id },
                                  r.a.createElement(
                                    "div",
                                    { className: "channel-title" },
                                    r.a.createElement("i", {
                                      className: " iconfont iconhome_ic_voice",
                                    }),
                                    r.a.createElement(
                                      "span",
                                      { className: "theme-color-87" },
                                      e.name
                                    )
                                  ),
                                  e.users &&
                                    e.users.length > 0 &&
                                    r.a.createElement(
                                      "div",
                                      { className: "channel-users-list" },
                                      e.users.map(function (e) {
                                        return r.a.createElement(
                                          "div",
                                          {
                                            key: e.id,
                                            className: "channel-user",
                                          },
                                          r.a.createElement(
                                            "div",
                                            { className: "left text-line1" },
                                            r.a.createElement("div", {
                                              className: "user-avator",
                                              style: {
                                                backgroundImage: "url(".concat(
                                                  e.avatar,
                                                  ")"
                                                ),
                                              },
                                            }),
                                            r.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "user-name text-line1 theme-color-38",
                                              },
                                              e.nickname || e.username
                                            )
                                          ),
                                          r.a.createElement(
                                            "div",
                                            {
                                              className: "right theme-color-38",
                                            },
                                            Boolean(e.muteInput) &&
                                              r.a.createElement("i", {
                                                className:
                                                  "iconfont iconmkf-mute",
                                              }),
                                            Boolean(e.muteHeadset) &&
                                              r.a.createElement("i", {
                                                className:
                                                  "iconfont iconhead-mute",
                                              })
                                          )
                                        );
                                      })
                                    )
                                );
                              })
                            ),
                            r.a.createElement(
                              "div",
                              { className: "list-tips theme-color-60" },
                              "\u5728\u7ebf\u6210\u5458"
                            ),
                            r.a.createElement(
                              "div",
                              { className: "online-user-list" },
                              f.map(function (e) {
                                return r.a.createElement(
                                  "div",
                                  {
                                    key: e.id,
                                    className: "member-item text-line1",
                                  },
                                  r.a.createElement(
                                    "div",
                                    { className: "left text-line1" },
                                    r.a.createElement("div", {
                                      className: "user-avator",
                                      style: {
                                        backgroundImage: "url(".concat(
                                          e.avatar,
                                          ")"
                                        ),
                                      },
                                    }),
                                    r.a.createElement(
                                      "div",
                                      { className: "user-name text-line1" },
                                      e.nickname || e.username
                                    )
                                  ),
                                  Boolean(e.activity) &&
                                    r.a.createElement(
                                      "div",
                                      { className: "right text-line1" },
                                      e.activity
                                    )
                                );
                              })
                            )
                          ),
                          r.a.createElement(
                            "footer",
                            { className: "widget-footer" },
                            r.a.createElement(
                              "a",
                              {
                                className: "logo",
                                href: "https://kaiheila.cn/?utm_source=kaiheila widget&utm_medium=logo",
                                target: "_blank",
                                rel: "noreferrer",
                              },
                              r.a.createElement("img", {
                                src: "https://kaiheila.cn/css/image/logo.svg",
                                className: "logo-img",
                              }),
                              r.a.createElement("img", {
                                src: "https://kaiheila.cn/css/image/logo-font.svg",
                                className: "logo-font",
                              })
                            ),
                            Boolean(h) &&
                              r.a.createElement(
                                "a",
                                {
                                  href: "".concat(
                                    h,
                                    "?utm_source=kaiheila widget&utm_medium=connect"
                                  ),
                                  target: "_blank",
                                  className: "status-button connect-btn",
                                  rel: "noreferrer",
                                },
                                "\u8fde\u63a5\u8bed\u97f3"
                              )
                          )
                        )
                  );
                },
              },
            ]),
            n
          );
        })(a.Component),
        y = n(144);
      n(699), n(68);
      !(function (e) {
        var t = (function (e) {
            var t = new RegExp("(^|&)".concat(e, "=([^&]*)(&|$)"), "i"),
              n = window.location.search.substr(1).match(t);
            return null != n ? unescape(n[2]) : "";
          })("theme"),
          n = "theme-dark";
        ["dark", "light"].includes(t) && (n = "theme-".concat(t));
        var a = n,
          r = "theme-light" === a ? "theme-dark" : "theme-light";
        document.body.classList.add(a),
          document.body.classList.remove(r),
          e && e(a);
      })(),
        i.a.render(r.a.createElement(E, null), document.getElementById("root")),
        y.a();
    },
  },
  [[696, 12, 0, 1, 5]],
]);
//# sourceMappingURL=widget.c300e7b5.chunk.js.map
