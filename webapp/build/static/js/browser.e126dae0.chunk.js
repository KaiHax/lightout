(window["webpackJsonpkaihei-react"] =
  window["webpackJsonpkaihei-react"] || []).push([
  [6],
  {
    139: function (e, t, a) {},
    20: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return i;
      }),
        a.d(t, "h", function () {
          return r;
        }),
        a.d(t, "d", function () {
          return c;
        }),
        a.d(t, "g", function () {
          return s;
        }),
        a.d(t, "e", function () {
          return l;
        }),
        a.d(t, "f", function () {
          return d;
        }),
        a.d(t, "b", function () {
          return u;
        });
      var n = window.navigator.userAgent,
        o = window.screen.width < 450 || n.includes("Mobile"),
        i = n.includes("Electron"),
        r = "Win32" == navigator.platform || "Windows" == navigator.platform,
        c = n.indexOf("Firefox") > 0,
        s =
          (n.indexOf("AppleWebKit"),
          n.indexOf("Safari") > -1 && -1 == n.indexOf("Chrome")),
        l = (n.indexOf("Edge"), /macintosh|mac os x/i.test(n)),
        d = /QQBrowser/i.test(n);
      function u() {
        var e = n;
        return e.includes("MetaSr")
          ? { name: "sougou", label: "\u641c\u72d7" }
          : e.includes("Edg")
          ? {
              name: "edge",
              label: "Edge",
              link: "http://support.kaiheila.cn/af34/f09e#header-4",
            }
          : e.includes("Firefox")
          ? {
              name: "firefox",
              label: "\u706b\u72d0",
              link: "http://support.kaiheila.cn/af34/f09e#header-3",
            }
          : e.includes("QQBrowser")
          ? { name: "qqbrowser", label: "QQ" }
          : e.includes("360EE")
          ? {
              name: "360",
              label: "360",
              link: "http://support.kaiheila.cn/af34/f09e#header-1",
            }
          : e.includes("360SE")
          ? {
              name: "360",
              label: "360",
              link: "http://support.kaiheila.cn/af34/f09e#header-2",
            }
          : e.includes("Safari") && !e.includes("Chrome")
          ? { name: "safari", label: "Safari" }
          : {
              name: "chrome",
              label: "\u8c37\u6b4c",
              link: "http://support.kaiheila.cn/af34/f09e#header-0",
            };
      }
      t.a = { isMobile: o, isElectron: i, isWindows: r, isMac: l };
    },
    306: function (e, t, a) {
      e.exports = a(307);
    },
    307: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(2),
        o = a(3),
        i = a(4),
        r = a(5),
        c = a(0),
        s = a.n(c),
        l = a(17),
        d = a.n(l),
        u = a(9),
        m = a.n(u),
        p = a(39),
        f = a(7),
        w = (a(139), a(314), a(182), a(37));
      a(68);
      console.log(
        new Date(),
        new Date().getMilliseconds(),
        "[startup] index load"
      );
      var h = (function (e) {
        Object(i.a)(a, e);
        var t = Object(r.a)(a);
        function a() {
          var e;
          Object(n.a)(this, a),
            ((e = t.call(this)).refreshHistoryState = function () {
              setTimeout(function () {
                var t = e.refWebview;
                t &&
                  e.setState({
                    canGoBack: t.canGoBack(),
                    canGoForward: t.canGoForward(),
                  });
              });
            }),
            (e.min = function () {
              Kaiheila.win.min();
            }),
            (e.max = function () {
              Kaiheila.win.max();
            }),
            (e.restore = function () {
              Kaiheila.win.unmax();
            }),
            (e.close = function () {
              window.Kaiheila.win.close();
            }),
            (e.goback = function () {
              e.state.canGoBack &&
                (e.setState({ pageLoadError: !1 }), e.refWebview.goBack());
            }),
            (e.forward = function () {
              e.state.canGoForward &&
                (e.setState({ pageLoadError: !1 }), e.refWebview.goForward());
            }),
            (e.reload = function () {
              e.setState({ pageLoadError: !1 }), e.refWebview.reload();
            }),
            (e.copylink = function () {
              !(function (e) {
                var t = document.createElement("input");
                document.body.appendChild(t),
                  t.setAttribute("value", e),
                  t.select();
                var a = document.execCommand("copy");
                document.body.removeChild(t);
              })(e.refWebview.src),
                p.a.hide(e.refCopy),
                e.setState({ tooltipType: "success" }, function () {
                  p.a.show(e.refCopy),
                    clearTimeout(e.timer),
                    (e.timer = setTimeout(function () {
                      p.a.hide(e.refCopy);
                    }, 1500));
                });
            }),
            (e.resetTipCopy = function () {
              e.setState({ tooltipType: "info" });
            }),
            (e.openexternal = function () {
              window.Kaiheila.System.openExternal(e.refWebview.src);
            });
          var o = "";
          return (
            window.Kaiheila && (o = window.Kaiheila.getBrowserPreload()),
            (e.state = {
              userAgent: window.navigator.userAgent.replace(
                /Electron/,
                "electron_browser"
              ),
              preload: o,
              isMax: !1,
              canGoBack: !1,
              canGoForward: !1,
              pageLoadError: !1,
              tooltipType: "info",
              pageLoadingState: "",
              hasError: !1,
            }),
            e
          );
        }
        return (
          Object(o.a)(
            a,
            [
              { key: "componentDidCatch", value: function (e, t) {} },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  console.log(
                    new Date(),
                    new Date().getMilliseconds(),
                    "[startup] componentDidMount"
                  ),
                    this.setState({ isMax: Kaiheila.win.isMax() }),
                    Kaiheila.win.on("maximize", function () {
                      console.log("isMax", !0), e.setState({ isMax: !0 });
                    }),
                    Kaiheila.win.on("unmaximize", function () {
                      console.log("isMax", !1), e.setState({ isMax: !1 });
                    });
                  var t = w.c.get(
                    w.b.THEME_SETTING_KEY,
                    w.a.get(w.b.THEME_SETTING_KEY, {})
                  );
                  console.log("theme", t),
                    document.body.classList.add(t.theme || "theme-dark");
                  var a = this.refWebview;
                  if (a) {
                    var n = window.Kaiheila;
                    n.ipcRenderer.on("loadURL", function (t, n) {
                      console.log("[loadURL]", n),
                        e.setState({ pageLoadError: !1 }),
                        (a.src = n);
                    }),
                      a.addEventListener("new-window", function (e) {
                        n.System.openExternal(e.url);
                      }),
                      a.addEventListener("did-navigate", function (t) {
                        console.log("[did-navigate]"), e.refreshHistoryState();
                      }),
                      a.addEventListener("did-navigate-in-page", function (t) {
                        var a = t.isMainFrame;
                        console.log(
                          "[did-navigate-in-page]",
                          "isMainFrame:".concat(a)
                        ),
                          a && e.refreshHistoryState();
                      }),
                      a.addEventListener("did-start-navigation", function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          a = t.isInPlace,
                          n = t.isMainFrame;
                        console.log(
                          "[did-start-navigation]",
                          "isInPlace:".concat(a, ", isMainFrame:").concat(n)
                        ),
                          n && e.setState({ pageLoadError: !1 });
                      }),
                      a.addEventListener("did-fail-load", function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          a = t.errorCode,
                          n = t.isMainFrame;
                        console.log(
                          "[did-fail-load]",
                          "errorCode:".concat(a, ",isMainFrame:").concat(n)
                        ),
                          -3 != a &&
                            0 != a &&
                            e.setState({ pageLoadError: !0 });
                      }),
                      a.addEventListener("did-start-loading", function () {
                        e.setState({ pageLoadingState: "start" });
                      }),
                      a.addEventListener("did-stop-loading", function () {
                        e.setState({ pageLoadingState: "end" }),
                          setTimeout(function () {
                            e.setState({ pageLoadingState: "" });
                          }, 500);
                      }),
                      a.addEventListener("ipc-message", function (e) {
                        "webview_reloadIgnoringCache" === e.channel &&
                          a.reloadIgnoringCache();
                      }),
                      document.addEventListener("keydown", function (e) {
                        e.altKey &&
                          e.ctrlKey &&
                          "i" == e.key &&
                          (a.isDevToolsOpened()
                            ? a.closeDevTools()
                            : a.openDevTools()),
                          "F5" == e.key &&
                            (e.ctrlKey ? a.reloadIgnoringCache() : a.reload());
                      });
                    var o = new URL(window.location.href).searchParams.get(
                      "url"
                    );
                    a.src = o;
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.userAgent,
                    n = t.preload,
                    o = t.isMax,
                    i = t.canGoBack,
                    r = t.canGoForward,
                    c = t.hasError,
                    l = t.pageLoadError,
                    d = t.pageLoadingState,
                    u = t.tooltipType;
                  return c
                    ? s.a.createElement(
                        "div",
                        { className: "kaihei-error-page" },
                        s.a.createElement(
                          "span",
                          {
                            className: "app-kaihei-link",
                            onClick: this.tryRecover,
                          },
                          "\u672a\u77e5\u5f02\u5e38\u70b9\u51fb\u5c1d\u8bd5\u6062\u590d"
                        )
                      )
                    : s.a.createElement(
                        "div",
                        { className: "win-wapper" },
                        s.a.createElement(
                          "div",
                          { className: "win-title-bar" },
                          s.a.createElement("div", {
                            className: m()("win-title-drag", { ismax: o }),
                          }),
                          s.a.createElement(
                            "div",
                            { className: "win-controler" },
                            s.a.createElement("div", {
                              className: "win-button min",
                              onClick: this.min,
                            }),
                            o
                              ? s.a.createElement("div", {
                                  className: "win-button restore",
                                  onClick: this.restore,
                                })
                              : s.a.createElement("div", {
                                  className: "win-button max",
                                  onClick: this.max,
                                }),
                            s.a.createElement("div", {
                              className: "win-button close",
                              onClick: this.close,
                            })
                          ),
                          s.a.createElement(
                            "div",
                            { className: "browser-tool-bar" },
                            s.a.createElement("div", {
                              className: m()("browser-tool-button goback", {
                                disabled: !i,
                              }),
                              onClick: this.goback,
                              "data-for": "tool-bar-button",
                              "data-tip": "\u540e\u9000",
                            }),
                            s.a.createElement("div", {
                              className: m()("browser-tool-button forward", {
                                disabled: !r,
                              }),
                              onClick: this.forward,
                              "data-for": "tool-bar-button",
                              "data-tip": "\u524d\u8fdb",
                            }),
                            s.a.createElement("div", {
                              className: "browser-tool-button reload",
                              onClick: this.reload,
                              "data-for": "tool-bar-button",
                              "data-tip": "\u91cd\u65b0\u52a0\u8f7d",
                            }),
                            s.a.createElement("div", {
                              className: "browser-tool-split",
                            }),
                            s.a.createElement("div", {
                              className: "browser-tool-button copylink",
                              onClick: this.copylink,
                              ref: function (t) {
                                return (e.refCopy = t);
                              },
                              "data-for": "tool-bar-button-copy",
                              "data-tip":
                                "success" == u
                                  ? window.ext("user_copysucctip")
                                  : "\u590d\u5236\u94fe\u63a5",
                              onMouseLeave: this.resetTipCopy,
                            }),
                            s.a.createElement("div", {
                              className: "browser-tool-button openexternal",
                              onClick: this.openexternal,
                              "data-for": "tool-bar-button",
                              "data-tip":
                                "\u7528\u6d4f\u89c8\u5668\u6253\u5f00",
                            })
                          )
                        ),
                        s.a.createElement(f.Tooltip, {
                          id: "tool-bar-button-copy",
                          place: "bottom",
                          type: u,
                        }),
                        s.a.createElement(f.Tooltip, {
                          id: "tool-bar-button",
                          place: "bottom",
                        }),
                        s.a.createElement(
                          "div",
                          { className: "browser-win-container" },
                          s.a.createElement("webview", {
                            ref: function (t) {
                              return (e.refWebview = t);
                            },
                            className: "webview",
                            useragent: a,
                            preload: n,
                          }),
                          l &&
                            s.a.createElement(
                              "div",
                              { className: "page-load-error" },
                              s.a.createElement(
                                "div",
                                { className: "description" },
                                "\u9875\u9762\u52a0\u8f7d\u5931\u8d25"
                              ),
                              s.a.createElement(
                                f.Button,
                                {
                                  type: "appprimary",
                                  size: "md",
                                  onClick: this.reload,
                                },
                                "\u91cd\u65b0\u52a0\u8f7d"
                              )
                            ),
                          s.a.createElement(
                            "div",
                            { className: "browser-load-progress" },
                            s.a.createElement("div", {
                              ref: function (t) {
                                return (e.refPageLoading = t);
                              },
                              className: m()("browser-load-progress-bar", {
                                "loading-start": "start" == d,
                                "loading-end": "end" == d,
                              }),
                            })
                          )
                        )
                      );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromError",
                value: function (e) {
                  return { hasError: !0 };
                },
              },
            ]
          ),
          a
        );
      })(c.Component);
      d.a.render(
        s.a.createElement(h, null),
        document.getElementById("browser-root")
      );
    },
    314: function (e, t, a) {},
    37: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return m;
      }),
        a.d(t, "a", function () {
          return p;
        }),
        a.d(t, "b", function () {
          return f;
        });
      var n = a(2),
        o = a(3),
        i = a(20),
        r = window,
        c = r.localStorage,
        s = r.Kaiheila,
        l = (function () {
          function e() {
            Object(n.a)(this, e), (this.path = "");
          }
          return (
            Object(o.a)(e, [
              {
                key: "init",
                value: function (e) {
                  var t = e.cwd,
                    a = void 0 === t ? "" : t;
                  e._encrypt;
                  this.path = a;
                },
              },
              {
                key: "_getkey",
                value: function (e) {
                  return this.path ? "".concat(this.path, "_").concat(e) : e;
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  e = this._getkey(e);
                  var a = c.getItem(e);
                  if (null === a) return t;
                  try {
                    return JSON.parse(a);
                  } catch (n) {
                    return a;
                  }
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  (e = this._getkey(e)),
                    (t = JSON.stringify(t)),
                    c.setItem(e, t);
                },
              },
            ]),
            e
          );
        })(),
        d = new l();
      d.init({ cwd: "kaiheila" });
      var u = new l();
      i.c && ((d = s.store.globalStore), (u = s.store.userStore));
      var m = u,
        p = d,
        f = {
          COUNTRY_INFO: "COUNTRY_INFO",
          EMOJI_PREV_SELECTED_CATEGORY: "EMOJI_PREV_SELECTED_CATEGORY",
          AUDIO_CONFIG_KEY: "AUDIO_CONFIG_KEY",
          THEME_SETTING_KEY: "THEME_SETTING_KEY",
          kaihei_app_config: "kaihei_app_config",
          kaihei_emoji_often: "kaihei_emoji_often",
          shortcut_repeat_tip_ignore: "shortcut_repeat_tip_ignore",
          internet_fraud_close_time: "internet_fraud_close_time",
          markdown_tools_visible: "markdown_tools_visible",
          accompaniment_restart_alert: "accompaniment_restart_alert",
        };
    },
  },
  [[306, 9, 0, 2, 5]],
]);
//# sourceMappingURL=browser.e126dae0.chunk.js.map
