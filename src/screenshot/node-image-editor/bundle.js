!(function (t, e, i, n, r) {
  function o(t) {
    return t && "object" == typeof t && "default" in t ? t : { default: t };
  }
  var s = o(t),
    a = o(e),
    h = o(i),
    l = o(n),
    c = o(r),
    u =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function f(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  var d =
    Array.isArray ||
    function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };
  function g(t) {
    switch (typeof t) {
      case "string":
        return t;
      case "boolean":
        return t ? "true" : "false";
      case "number":
        return isFinite(t) ? t : "";
      default:
        return "";
    }
  }
  function p(t, e, i, n) {
    return (
      (e = e || "&"),
      (i = i || "="),
      null === t && (t = void 0),
      "object" == typeof t
        ? m(v(t), function (n) {
            var r = encodeURIComponent(g(n)) + i;
            return d(t[n])
              ? m(t[n], function (t) {
                  return r + encodeURIComponent(g(t));
                }).join(e)
              : r + encodeURIComponent(g(t[n]));
          }).join(e)
        : n
        ? encodeURIComponent(g(n)) + i + encodeURIComponent(g(t))
        : ""
    );
  }
  function m(t, e) {
    if (t.map) return t.map(e);
    for (var i = [], n = 0; n < t.length; n++) i.push(e(t[n], n));
    return i;
  }
  var v =
    Object.keys ||
    function (t) {
      var e = [];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
      return e;
    };
  function y(t, e, i, n) {
    (e = e || "&"), (i = i || "=");
    var r = {};
    if ("string" != typeof t || 0 === t.length) return r;
    var o = /\+/g;
    t = t.split(e);
    var s = 1e3;
    n && "number" == typeof n.maxKeys && (s = n.maxKeys);
    var a = t.length;
    s > 0 && a > s && (a = s);
    for (var h = 0; h < a; ++h) {
      var l,
        c,
        u,
        g,
        p = t[h].replace(o, "%20"),
        m = p.indexOf(i);
      m >= 0
        ? ((l = p.substr(0, m)), (c = p.substr(m + 1)))
        : ((l = p), (c = "")),
        (u = decodeURIComponent(l)),
        (g = decodeURIComponent(c)),
        f(r, u) ? (d(r[u]) ? r[u].push(g) : (r[u] = [r[u], g])) : (r[u] = g);
    }
    return r;
  }
  var _,
    x = { encode: p, stringify: p, decode: y, parse: y },
    b =
      ((function (t, e) {
        var i,
          n,
          r,
          o,
          s,
          c,
          u,
          f,
          d,
          g,
          p,
          m,
          v,
          y,
          _ = _ || { version: "4.6.0" };
        function x(t, e) {
          var i = t.canvas,
            n = e.targetCanvas;
          (t = n.getContext("2d")).translate(0, n.height),
            t.scale(1, -1),
            (e = i.height - n.height),
            t.drawImage(i, 0, e, n.width, n.height, 0, 0, n.width, n.height);
        }
        function b(t, e) {
          var i = e.targetCanvas.getContext("2d"),
            n = e.destinationWidth,
            r = e.destinationHeight,
            o = n * r * 4;
          (e = new Uint8Array(this.imageBuffer, 0, o)),
            (o = new Uint8ClampedArray(this.imageBuffer, 0, o)),
            t.readPixels(0, 0, n, r, t.RGBA, t.UNSIGNED_BYTE, e),
            (r = new ImageData(o, n, r)),
            i.putImageData(r, 0, 0);
        }
        (e.fabric = _),
          "undefined" != typeof document && "undefined" != typeof window
            ? (document instanceof
              ("undefined" != typeof HTMLDocument ? HTMLDocument : Document)
                ? (_.document = document)
                : (_.document = document.implementation.createHTMLDocument("")),
              (_.window = window))
            : ((i = new a.default.JSDOM(
                decodeURIComponent(
                  "%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"
                ),
                {
                  features: { FetchExternalResources: ["img"] },
                  resources: "usable",
                }
              ).window),
              (_.document = i.document),
              (_.jsdomImplForWrapper = h.default.implForWrapper),
              (_.nodeCanvas = l.default.Canvas),
              (_.window = i),
              (DOMParser = _.window.DOMParser)),
          (_.isTouchSupported =
            "ontouchstart" in _.window ||
            "ontouchstart" in _.document ||
            (_.window &&
              _.window.navigator &&
              0 < _.window.navigator.maxTouchPoints)),
          (_.isLikelyNode =
            "undefined" != typeof Buffer && "undefined" == typeof window),
          (_.SHARED_ATTRIBUTES = [
            "display",
            "transform",
            "fill",
            "fill-opacity",
            "fill-rule",
            "opacity",
            "stroke",
            "stroke-dasharray",
            "stroke-linecap",
            "stroke-dashoffset",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke-width",
            "id",
            "paint-order",
            "vector-effect",
            "instantiated_by_use",
            "clip-path",
          ]),
          (_.DPI = 96),
          (_.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)"),
          (_.commaWsp = "(?:\\s+,?\\s*|,\\s*)"),
          (_.rePathCommand =
            /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi),
          (_.reNonWord = /[ \n\.,;!\?\-]/),
          (_.fontPaths = {}),
          (_.iMatrix = [1, 0, 0, 1, 0, 0]),
          (_.svgNS = "http://www.w3.org/2000/svg"),
          (_.perfLimitSizeTotal = 2097152),
          (_.maxCacheSideLimit = 4096),
          (_.minCacheSideLimit = 256),
          (_.charWidthsCache = {}),
          (_.textureSize = 2048),
          (_.disableStyleCopyPaste = !1),
          (_.enableGLFiltering = !0),
          (_.devicePixelRatio =
            _.window.devicePixelRatio ||
            _.window.webkitDevicePixelRatio ||
            _.window.mozDevicePixelRatio ||
            1),
          (_.browserShadowBlurConstant = 1),
          (_.arcToSegmentsCache = {}),
          (_.boundsOfCurveCache = {}),
          (_.cachesBoundsOfCurve = !0),
          (_.forceGLPutImageData = !1),
          (_.initFilterBackend = function () {
            return _.enableGLFiltering &&
              _.isWebglSupported &&
              _.isWebglSupported(_.textureSize)
              ? (console.log("max texture size: " + _.maxTextureSize),
                new _.WebglFilterBackend({ tileSize: _.textureSize }))
              : _.Canvas2dFilterBackend
              ? new _.Canvas2dFilterBackend()
              : void 0;
          }),
          "undefined" != typeof document &&
            "undefined" != typeof window &&
            (window.fabric = _),
          (function () {
            function t(t, e) {
              this.__eventListeners[t] &&
                ((t = this.__eventListeners[t]),
                e ? (t[t.indexOf(e)] = !1) : _.util.array.fill(t, !1));
            }
            function e(t, e) {
              var i = function () {
                e.apply(this, arguments), this.off(t, i);
              }.bind(this);
              this.on(t, i);
            }
            _.Observable = {
              fire: function (t, e) {
                if (!this.__eventListeners) return this;
                var i = this.__eventListeners[t];
                if (!i) return this;
                for (var n = 0, r = i.length; n < r; n++)
                  i[n] && i[n].call(this, e || {});
                return (
                  (this.__eventListeners[t] = i.filter(function (t) {
                    return !1 !== t;
                  })),
                  this
                );
              },
              on: function (t, e) {
                if (
                  (this.__eventListeners || (this.__eventListeners = {}),
                  1 === arguments.length)
                )
                  for (var i in t) this.on(i, t[i]);
                else
                  this.__eventListeners[t] || (this.__eventListeners[t] = []),
                    this.__eventListeners[t].push(e);
                return this;
              },
              once: function (t, i) {
                if (1 === arguments.length)
                  for (var n in t) e.call(this, n, t[n]);
                else e.call(this, t, i);
                return this;
              },
              off: function (e, i) {
                if (!this.__eventListeners) return this;
                if (0 === arguments.length)
                  for (e in this.__eventListeners) t.call(this, e);
                else if (
                  1 === arguments.length &&
                  "object" == typeof arguments[0]
                )
                  for (var n in e) t.call(this, n, e[n]);
                else t.call(this, e, i);
                return this;
              },
            };
          })(),
          (_.Collection = {
            _objects: [],
            add: function () {
              if (
                (this._objects.push.apply(this._objects, arguments),
                this._onObjectAdded)
              )
                for (var t = 0, e = arguments.length; t < e; t++)
                  this._onObjectAdded(arguments[t]);
              return this.renderOnAddRemove && this.requestRenderAll(), this;
            },
            insertAt: function (t, e, i) {
              var n = this._objects;
              return (
                i ? (n[e] = t) : n.splice(e, 0, t),
                this._onObjectAdded && this._onObjectAdded(t),
                this.renderOnAddRemove && this.requestRenderAll(),
                this
              );
            },
            remove: function () {
              for (
                var t, e = this._objects, i = !1, n = 0, r = arguments.length;
                n < r;
                n++
              )
                -1 !== (t = e.indexOf(arguments[n])) &&
                  ((i = !0),
                  e.splice(t, 1),
                  this._onObjectRemoved && this._onObjectRemoved(arguments[n]));
              return (
                this.renderOnAddRemove && i && this.requestRenderAll(), this
              );
            },
            forEachObject: function (t, e) {
              for (var i = this.getObjects(), n = 0, r = i.length; n < r; n++)
                t.call(e, i[n], n, i);
              return this;
            },
            getObjects: function (t) {
              return void 0 === t
                ? this._objects.concat()
                : this._objects.filter(function (e) {
                    return e.type === t;
                  });
            },
            item: function (t) {
              return this._objects[t];
            },
            isEmpty: function () {
              return 0 === this._objects.length;
            },
            size: function () {
              return this._objects.length;
            },
            contains: function (t, e) {
              return (
                -1 < this._objects.indexOf(t) ||
                (!!e &&
                  this._objects.some(function (e) {
                    return "function" == typeof e.contains && e.contains(t, !0);
                  }))
              );
            },
            complexity: function () {
              return this._objects.reduce(function (t, e) {
                return t + (e.complexity ? e.complexity() : 0);
              }, 0);
            },
          }),
          (_.CommonMethods = {
            _setOptions: function (t) {
              for (var e in t) this.set(e, t[e]);
            },
            _initGradient: function (t, e) {
              !t ||
                !t.colorStops ||
                t instanceof _.Gradient ||
                this.set(e, new _.Gradient(t));
            },
            _initPattern: function (t, e, i) {
              !t || !t.source || t instanceof _.Pattern
                ? i && i()
                : this.set(e, new _.Pattern(t, i));
            },
            _setObject: function (t) {
              for (var e in t) this._set(e, t[e]);
            },
            set: function (t, e) {
              return (
                "object" == typeof t ? this._setObject(t) : this._set(t, e),
                this
              );
            },
            _set: function (t, e) {
              this[t] = e;
            },
            toggle: function (t) {
              var e = this.get(t);
              return "boolean" == typeof e && this.set(t, !e), this;
            },
            get: function (t) {
              return this[t];
            },
          }),
          (d = e),
          (g = Math.sqrt),
          (p = Math.atan2),
          (m = Math.pow),
          (v = Math.PI / 180),
          (y = Math.PI / 2),
          (_.util = {
            cos: function (t) {
              if (0 === t) return 1;
              switch ((t = t < 0 ? -t : t) / y) {
                case 1:
                case 3:
                  return 0;
                case 2:
                  return -1;
              }
              return Math.cos(t);
            },
            sin: function (t) {
              if (0 === t) return 0;
              var e = t < 0 ? -1 : 1;
              switch (t / y) {
                case 1:
                  return e;
                case 2:
                  return 0;
                case 3:
                  return -e;
              }
              return Math.sin(t);
            },
            removeFromArray: function (t, e) {
              return -1 !== (e = t.indexOf(e)) && t.splice(e, 1), t;
            },
            getRandomInt: function (t, e) {
              return Math.floor(Math.random() * (e - t + 1)) + t;
            },
            degreesToRadians: function (t) {
              return t * v;
            },
            radiansToDegrees: function (t) {
              return t / v;
            },
            rotatePoint: function (t, e, i) {
              return (
                (t = new _.Point(t.x - e.x, t.y - e.y)),
                (i = _.util.rotateVector(t, i)),
                new _.Point(i.x, i.y).addEquals(e)
              );
            },
            rotateVector: function (t, e) {
              var i = _.util.sin(e);
              return (
                (e = _.util.cos(e)),
                { x: t.x * e - t.y * i, y: t.x * i + t.y * e }
              );
            },
            transformPoint: function (t, e, i) {
              return i
                ? new _.Point(e[0] * t.x + e[2] * t.y, e[1] * t.x + e[3] * t.y)
                : new _.Point(
                    e[0] * t.x + e[2] * t.y + e[4],
                    e[1] * t.x + e[3] * t.y + e[5]
                  );
            },
            makeBoundingBoxFromPoints: function (t, e) {
              if (e)
                for (var i = 0; i < t.length; i++)
                  t[i] = _.util.transformPoint(t[i], e);
              var n = [t[0].x, t[1].x, t[2].x, t[3].x],
                r = _.util.array.min(n),
                o = _.util.array.max(n) - r,
                s = [t[0].y, t[1].y, t[2].y, t[3].y];
              return {
                left: r,
                top: (n = _.util.array.min(s)),
                width: o,
                height: _.util.array.max(s) - n,
              };
            },
            invertTransform: function (t) {
              var e = [
                (e = 1 / (t[0] * t[3] - t[1] * t[2])) * t[3],
                -e * t[1],
                -e * t[2],
                e * t[0],
              ];
              return (
                (t = _.util.transformPoint({ x: t[4], y: t[5] }, e, !0)),
                (e[4] = -t.x),
                (e[5] = -t.y),
                e
              );
            },
            toFixed: function (t, e) {
              return parseFloat(Number(t).toFixed(e));
            },
            parseUnit: function (t, e) {
              var i = /\D{0,2}$/.exec(t),
                n = parseFloat(t);
              switch (((e = e || _.Text.DEFAULT_SVG_FONT_SIZE), i[0])) {
                case "mm":
                  return (n * _.DPI) / 25.4;
                case "cm":
                  return (n * _.DPI) / 2.54;
                case "in":
                  return n * _.DPI;
                case "pt":
                  return (n * _.DPI) / 72;
                case "pc":
                  return ((n * _.DPI) / 72) * 12;
                case "em":
                  return n * e;
                default:
                  return n;
              }
            },
            falseFunction: function () {
              return !1;
            },
            getKlass: function (t, e) {
              return (
                (t = _.util.string.camelize(
                  t.charAt(0).toUpperCase() + t.slice(1)
                )),
                _.util.resolveNamespace(e)[t]
              );
            },
            getSvgAttributes: function (t) {
              var e = ["instantiated_by_use", "style", "id", "class"];
              switch (t) {
                case "linearGradient":
                  e = e.concat([
                    "x1",
                    "y1",
                    "x2",
                    "y2",
                    "gradientUnits",
                    "gradientTransform",
                  ]);
                  break;
                case "radialGradient":
                  e = e.concat([
                    "gradientUnits",
                    "gradientTransform",
                    "cx",
                    "cy",
                    "r",
                    "fx",
                    "fy",
                    "fr",
                  ]);
                  break;
                case "stop":
                  e = e.concat(["offset", "stop-color", "stop-opacity"]);
              }
              return e;
            },
            resolveNamespace: function (t) {
              if (!t) return _;
              for (
                var e = t.split("."), i = e.length, n = d || _.window, r = 0;
                r < i;
                ++r
              )
                n = n[e[r]];
              return n;
            },
            loadImage: function (t, e, i, n) {
              var r, o;
              t
                ? ((o = function () {
                    e && e.call(i, r, !1), (r = r.onload = r.onerror = null);
                  }),
                  ((r = _.util.createImage()).onload = o),
                  (r.onerror = function () {
                    _.log("Error loading " + r.src),
                      e && e.call(i, null, !0),
                      (r = r.onload = r.onerror = null);
                  }),
                  0 !== t.indexOf("data") && null != n && (r.crossOrigin = n),
                  "data:image/svg" === t.substring(0, 14) &&
                    ((r.onload = null), _.util.loadImageInDom(r, o)),
                  (r.src = t))
                : e && e.call(i, t);
            },
            loadImageInDom: function (t, e) {
              var i = _.document.createElement("div");
              (i.style.width = i.style.height = "1px"),
                (i.style.left = i.style.top = "-100%"),
                (i.style.position = "absolute"),
                i.appendChild(t),
                _.document.querySelector("body").appendChild(i),
                (t.onload = function () {
                  e(), i.parentNode.removeChild(i), (i = null);
                });
            },
            enlivenObjects: function (t, e, i, n) {
              var r = [],
                o = 0,
                s = (t = t || []).length;
              function a() {
                ++o === s &&
                  e &&
                  e(
                    r.filter(function (t) {
                      return t;
                    })
                  );
              }
              s
                ? t.forEach(function (t, e) {
                    t && t.type
                      ? _.util
                          .getKlass(t.type, i)
                          .fromObject(t, function (i, o) {
                            o || (r[e] = i), n && n(t, i, o), a();
                          })
                      : a();
                  })
                : e && e(r);
            },
            enlivenPatterns: function (t, e) {
              function i() {
                ++r === o && e && e(n);
              }
              var n = [],
                r = 0,
                o = (t = t || []).length;
              o
                ? t.forEach(function (t, e) {
                    t && t.source
                      ? new _.Pattern(t, function (t) {
                          (n[e] = t), i();
                        })
                      : ((n[e] = t), i());
                  })
                : e && e(n);
            },
            groupSVGElements: function (t, e, i) {
              return t && 1 === t.length
                ? t[0]
                : (e &&
                    (e.width && e.height
                      ? (e.centerPoint = { x: e.width / 2, y: e.height / 2 })
                      : (delete e.width, delete e.height)),
                  (e = new _.Group(t, e)),
                  void 0 !== i && (e.sourcePath = i),
                  e);
            },
            populateWithProperties: function (t, e, i) {
              if (i && "[object Array]" === Object.prototype.toString.call(i))
                for (var n = 0, r = i.length; n < r; n++)
                  i[n] in t && (e[i[n]] = t[i[n]]);
            },
            drawDashedLine: function (t, e, i, n, r, o) {
              var s = g((n -= e) * n + (r -= i) * r),
                a = ((n = p(r, n)), o.length),
                h = 0,
                l = !0;
              for (
                t.save(), t.translate(e, i), t.moveTo(0, 0), t.rotate(n), e = 0;
                e < s;

              )
                s < (e += o[h++ % a]) && (e = s),
                  t[l ? "lineTo" : "moveTo"](e, 0),
                  (l = !l);
              t.restore();
            },
            createCanvasElement: function () {
              return _.document.createElement("canvas");
            },
            copyCanvasElement: function (t) {
              var e = _.util.createCanvasElement();
              return (
                (e.width = t.width),
                (e.height = t.height),
                e.getContext("2d").drawImage(t, 0, 0),
                e
              );
            },
            toDataURL: function (t, e, i) {
              return t.toDataURL("image/" + e, i);
            },
            createImage: function () {
              return _.document.createElement("img");
            },
            multiplyTransformMatrices: function (t, e, i) {
              return [
                t[0] * e[0] + t[2] * e[1],
                t[1] * e[0] + t[3] * e[1],
                t[0] * e[2] + t[2] * e[3],
                t[1] * e[2] + t[3] * e[3],
                i ? 0 : t[0] * e[4] + t[2] * e[5] + t[4],
                i ? 0 : t[1] * e[4] + t[3] * e[5] + t[5],
              ];
            },
            qrDecompose: function (t) {
              var e = p(t[1], t[0]),
                i = m(t[0], 2) + m(t[1], 2),
                n = g(i),
                r = (t[0] * t[3] - t[2] * t[1]) / n;
              return (
                (i = p(t[0] * t[2] + t[1] * t[3], i)),
                {
                  angle: e / v,
                  scaleX: n,
                  scaleY: r,
                  skewX: i / v,
                  skewY: 0,
                  translateX: t[4],
                  translateY: t[5],
                }
              );
            },
            calcRotateMatrix: function (t) {
              if (!t.angle) return _.iMatrix.concat();
              var e = _.util.degreesToRadians(t.angle);
              return [(t = _.util.cos(e)), (e = _.util.sin(e)), -e, t, 0, 0];
            },
            calcDimensionsMatrix: function (t) {
              var e = void 0 === t.scaleX ? 1 : t.scaleX,
                i = void 0 === t.scaleY ? 1 : t.scaleY,
                n = [t.flipX ? -e : e, 0, 0, t.flipY ? -i : i, 0, 0];
              return (
                (e = _.util.multiplyTransformMatrices),
                (i = _.util.degreesToRadians),
                t.skewX && (n = e(n, [1, 0, Math.tan(i(t.skewX)), 1], !0)),
                t.skewY ? e(n, [1, Math.tan(i(t.skewY)), 0, 1], !0) : n
              );
            },
            composeMatrix: function (t) {
              var e = [1, 0, 0, 1, t.translateX || 0, t.translateY || 0],
                i = _.util.multiplyTransformMatrices;
              return (
                t.angle && (e = i(e, _.util.calcRotateMatrix(t))),
                1 !== t.scaleX ||
                1 !== t.scaleY ||
                t.skewX ||
                t.skewY ||
                t.flipX ||
                t.flipY
                  ? i(e, _.util.calcDimensionsMatrix(t))
                  : e
              );
            },
            resetObjectTransform: function (t) {
              (t.scaleX = 1),
                (t.scaleY = 1),
                (t.skewX = 0),
                (t.skewY = 0),
                (t.flipX = !1),
                (t.flipY = !1),
                t.rotate(0);
            },
            saveObjectTransform: function (t) {
              return {
                scaleX: t.scaleX,
                scaleY: t.scaleY,
                skewX: t.skewX,
                skewY: t.skewY,
                angle: t.angle,
                left: t.left,
                flipX: t.flipX,
                flipY: t.flipY,
                top: t.top,
              };
            },
            isTransparent: function (t, e, i, n) {
              0 < n && (n < e ? (e -= n) : (e = 0), n < i ? (i -= n) : (i = 0));
              for (
                var r = !0,
                  o = t.getImageData(e, i, 2 * n || 1, 2 * n || 1),
                  s = o.data.length,
                  a = 3;
                a < s && 0 != (r = o.data[a] <= 0);
                a += 4
              );
              return (o = null), r;
            },
            parsePreserveAspectRatioAttribute: function (t) {
              var e,
                i = "meet";
              return (
                (t = t.split(" ")) &&
                  t.length &&
                  ("meet" !== (i = t.pop()) && "slice" !== i
                    ? ((e = i), (i = "meet"))
                    : t.length && (e = t.pop())),
                {
                  meetOrSlice: i,
                  alignX: "none" !== e ? e.slice(1, 4) : "none",
                  alignY: "none" !== e ? e.slice(5, 8) : "none",
                }
              );
            },
            clearFabricFontCache: function (t) {
              (t = (t || "").toLowerCase())
                ? _.charWidthsCache[t] && delete _.charWidthsCache[t]
                : (_.charWidthsCache = {});
            },
            limitDimsByArea: function (t, e) {
              return (
                (t = Math.sqrt(e * t)),
                (e = Math.floor(e / t)),
                { x: Math.floor(t), y: e }
              );
            },
            capValue: function (t, e, i) {
              return Math.max(t, Math.min(e, i));
            },
            findScaleToFit: function (t, e) {
              return Math.min(e.width / t.width, e.height / t.height);
            },
            findScaleToCover: function (t, e) {
              return Math.max(e.width / t.width, e.height / t.height);
            },
            matrixToSVG: function (t) {
              return (
                "matrix(" +
                t
                  .map(function (t) {
                    return _.util.toFixed(t, _.Object.NUM_FRACTION_DIGITS);
                  })
                  .join(" ") +
                ")"
              );
            },
            removeTransformFromObject: function (t, e) {
              (e = _.util.invertTransform(e)),
                (e = _.util.multiplyTransformMatrices(e, t.calcOwnMatrix())),
                _.util.applyTransformToObject(t, e);
            },
            addTransformToObject: function (t, e) {
              _.util.applyTransformToObject(
                t,
                _.util.multiplyTransformMatrices(e, t.calcOwnMatrix())
              );
            },
            applyTransformToObject: function (t, e) {
              var i = _.util.qrDecompose(e);
              (e = new _.Point(i.translateX, i.translateY)),
                (t.flipX = !1),
                (t.flipY = !1),
                t.set("scaleX", i.scaleX),
                t.set("scaleY", i.scaleY),
                (t.skewX = i.skewX),
                (t.skewY = i.skewY),
                (t.angle = i.angle),
                t.setPositionByOrigin(e, "center", "center");
            },
            sizeAfterTransform: function (t, e, i) {
              return (
                (e = [
                  { x: -(t /= 2), y: -(e /= 2) },
                  { x: t, y: -e },
                  { x: -t, y: e },
                  { x: t, y: e },
                ]),
                (i = _.util.calcDimensionsMatrix(i)),
                {
                  x: (i = _.util.makeBoundingBoxFromPoints(e, i)).width,
                  y: i.height,
                }
              );
            },
          }),
          (function () {
            var t = Array.prototype.join,
              e = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7 },
              i = { m: "l", M: "L" };
            function n(t, e, i, n, o, s, a) {
              var h = Math.PI,
                l = (a * h) / 180,
                c = _.util.sin(l),
                u = _.util.cos(l),
                f = 0,
                d = 0,
                g = -u * t * 0.5 - c * e * 0.5,
                p = -u * e * 0.5 + c * t * 0.5,
                m = (i = Math.abs(i)) * i,
                v = (n = Math.abs(n)) * n,
                y = p * p,
                x = m * v - m * y - v * (b = g * g);
              (a = 0),
                x < 0
                  ? ((i *= l = Math.sqrt(1 - x / (m * v))), (n *= l))
                  : (a = (o === s ? -1 : 1) * Math.sqrt(x / (m * y + v * b)));
              var b,
                C =
                  u * (b = (a * i * p) / n) -
                  c * (a = (-a * n * g) / i) +
                  0.5 * t,
                S = c * b + u * a + 0.5 * e,
                w = r(1, 0, (g - b) / i, (p - a) / n);
              (a = r((g - b) / i, (p - a) / n, (-g - b) / i, (-p - a) / n)),
                0 === s && 0 < a
                  ? (a -= 2 * h)
                  : 1 === s && a < 0 && (a += 2 * h);
              for (
                var T,
                  O,
                  k,
                  P,
                  E,
                  A,
                  j,
                  M,
                  D,
                  F,
                  I,
                  L,
                  R,
                  B = Math.ceil(Math.abs((a / h) * 2)),
                  X = [],
                  W = a / B,
                  Y =
                    ((8 / 3) * Math.sin(W / 4) * Math.sin(W / 4)) /
                    Math.sin(W / 2),
                  z = w + W,
                  U = 0;
                U < B;
                U++
              )
                (X[U] =
                  ((T = w),
                  (O = z),
                  (k = u),
                  (P = c),
                  (E = i),
                  (A = n),
                  (j = C),
                  (M = S),
                  (D = Y),
                  (F = f),
                  (I = d),
                  (L = _.util.cos(T)),
                  [
                    "C",
                    F + D * (-k * E * (R = _.util.sin(T)) - P * A * L),
                    I + D * (-P * E * R + k * A * L),
                    (j =
                      k * E * (T = _.util.cos(O)) -
                      P * A * (O = _.util.sin(O)) +
                      j) +
                      D * (k * E * O + P * A * T),
                    (M = P * E * T + k * A * O + M) +
                      D * (P * E * O - k * A * T),
                    j,
                    M,
                  ])),
                  (f = X[U][5]),
                  (d = X[U][6]),
                  (w = z),
                  (z += W);
              return X;
            }
            function r(t, e, i, n) {
              return (t = Math.atan2(e, t)) <= (i = Math.atan2(n, i))
                ? i - t
                : 2 * Math.PI - (t - i);
            }
            function o(e, i, n, r, o, s, a, h) {
              var l;
              if (
                _.cachesBoundsOfCurve &&
                ((l = t.call(arguments)), _.boundsOfCurveCache[l])
              )
                return _.boundsOfCurveCache[l];
              for (
                var c,
                  u,
                  f,
                  d = Math.sqrt,
                  g = Math.min,
                  p = Math.max,
                  m = Math.abs,
                  v = [],
                  y = [[], []],
                  x = 6 * e - 12 * n + 6 * o,
                  b = -3 * e + 9 * n - 9 * o + 3 * a,
                  C = 3 * n - 3 * e,
                  S = 0;
                S < 2;
                ++S
              )
                0 < S &&
                  ((x = 6 * i - 12 * r + 6 * s),
                  (b = -3 * i + 9 * r - 9 * s + 3 * h),
                  (C = 3 * r - 3 * i)),
                  m(b) < 1e-12
                    ? m(x) < 1e-12 || (0 < (c = -C / x) && c < 1 && v.push(c))
                    : (u = x * x - 4 * C * b) < 0 ||
                      (0 < (u = (-x + (f = d(u))) / (2 * b)) &&
                        u < 1 &&
                        v.push(u),
                      0 < (f = (-x - f) / (2 * b)) && f < 1 && v.push(f));
              for (var w, T = v.length, O = T; T--; )
                (c = v[T]),
                  (y[0][T] =
                    (w = 1 - c) * w * w * e +
                    3 * w * w * c * n +
                    3 * w * c * c * o +
                    c * c * c * a),
                  (y[1][T] =
                    w * w * w * i +
                    3 * w * w * c * r +
                    3 * w * c * c * s +
                    c * c * c * h);
              return (
                (y[0][O] = e),
                (y[1][O] = i),
                (y[0][O + 1] = a),
                (y[1][O + 1] = h),
                (p = [
                  { x: g.apply(null, y[0]), y: g.apply(null, y[1]) },
                  { x: p.apply(null, y[0]), y: p.apply(null, y[1]) },
                ]),
                _.cachesBoundsOfCurve && (_.boundsOfCurveCache[l] = p),
                p
              );
            }
            function s(t, e, i) {
              for (
                var r = i[1],
                  o = i[2],
                  s = i[3],
                  a = i[4],
                  h = i[5],
                  l = n(i[6] - t, i[7] - e, r, o, a, h, s),
                  c = 0,
                  u = l.length;
                c < u;
                c++
              )
                (l[c][1] += t),
                  (l[c][2] += e),
                  (l[c][3] += t),
                  (l[c][4] += e),
                  (l[c][5] += t),
                  (l[c][6] += e);
              return l;
            }
            function a(t, e, i, n) {
              return Math.sqrt((i - t) * (i - t) + (n - e) * (n - e));
            }
            function h(t, e, i) {
              for (var n, r = { x: e, y: i }, o = 0, s = 1; s <= 100; s += 1)
                (n = t(s / 100)), (o += a(r.x, r.y, n.x, n.y)), (r = n);
              return o;
            }
            function l(t) {
              for (
                var e,
                  i,
                  n,
                  r,
                  o = 0,
                  s = t.length,
                  l = 0,
                  c = 0,
                  u = 0,
                  f = 0,
                  d = [],
                  g = 0;
                g < s;
                g++
              ) {
                switch (((n = { x: l, y: c, command: (e = t[g])[0] }), e[0])) {
                  case "M":
                    (n.length = 0), (u = l = e[1]), (f = c = e[2]);
                    break;
                  case "L":
                    (n.length = a(l, c, e[1], e[2])), (l = e[1]), (c = e[2]);
                    break;
                  case "C":
                    (i = (function (t, e, i, n, r, o, s, a) {
                      return function (h) {
                        var l = h * h * h,
                          c = 3 * h * h * (1 - h),
                          u = 3 * h * (1 - h) * (1 - h);
                        return {
                          x:
                            s * l +
                            r * c +
                            i * u +
                            t * (h = (1 - h) * (1 - h) * (1 - h)),
                          y: a * l + o * c + n * u + e * h,
                        };
                      };
                    })(l, c, e[1], e[2], e[3], e[4], e[5], e[6])),
                      (r = (function (t, e, i, n, r, o, s, a) {
                        return function (h) {
                          var l = 1 - h;
                          return Math.atan2(
                            3 * l * l * (n - e) +
                              6 * l * h * (o - n) +
                              3 * h * h * (a - o),
                            3 * l * l * (i - t) +
                              6 * l * h * (r - i) +
                              3 * h * h * (s - r)
                          );
                        };
                      })(l, c, e[1], e[2], e[3], e[4], e[5], e[6])),
                      (n.iterator = i),
                      (n.angleFinder = r),
                      (n.length = h(i, l, c)),
                      (l = e[5]),
                      (c = e[6]);
                    break;
                  case "Q":
                    (i = (function (t, e, i, n, r, o) {
                      return function (s) {
                        var a = s * s,
                          h = 2 * s * (1 - s);
                        return {
                          x: r * a + i * h + t * (s = (1 - s) * (1 - s)),
                          y: o * a + n * h + e * s,
                        };
                      };
                    })(l, c, e[1], e[2], e[3], e[4])),
                      (r = (function (t, e, i, n, r, o) {
                        return function (s) {
                          var a = 1 - s;
                          return Math.atan2(
                            2 * a * (n - e) + 2 * s * (o - n),
                            2 * a * (i - t) + 2 * s * (r - i)
                          );
                        };
                      })(l, c, e[1], e[2], e[3], e[4])),
                      (n.iterator = i),
                      (n.angleFinder = r),
                      (n.length = h(i, l, c)),
                      (l = e[3]),
                      (c = e[4]);
                    break;
                  case "Z":
                  case "z":
                    (n.destX = u),
                      (n.destY = f),
                      (n.length = a(l, c, u, f)),
                      (l = u),
                      (c = f);
                }
                (o += n.length), d.push(n);
              }
              return d.push({ length: o, x: l, y: c }), d;
            }
            (_.util.joinPath = function (t) {
              return t
                .map(function (t) {
                  return t.join(" ");
                })
                .join(" ");
            }),
              (_.util.parsePath = function (t) {
                var n,
                  r,
                  o,
                  s,
                  a = [],
                  h = [],
                  l = _.rePathCommand,
                  c = "[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?\\s*",
                  u = "(" + c + ")" + _.commaWsp,
                  f = "([01])" + _.commaWsp + "?",
                  d = new RegExp(
                    u + "?" + u + "?" + u + f + f + u + "?(" + c + ")",
                    "g"
                  );
                if (!t || !t.match) return a;
                for (
                  var g,
                    p = 0,
                    m = (g = t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi)).length;
                  p < m;
                  p++
                ) {
                  (s = (n = g[p]).slice(1).trim()), (h.length = 0);
                  var v,
                    y = n.charAt(0),
                    x = [y];
                  if ("a" === y.toLowerCase())
                    for (; (v = d.exec(s)); )
                      for (var b = 1; b < v.length; b++) h.push(v[b]);
                  else for (; (o = l.exec(s)); ) h.push(o[0]);
                  b = 0;
                  for (var C = h.length; b < C; b++)
                    (r = parseFloat(h[b])), isNaN(r) || x.push(r);
                  var S = e[y.toLowerCase()],
                    w = i[y] || y;
                  if (x.length - 1 > S)
                    for (var T = 1, O = x.length; T < O; T += S)
                      a.push([y].concat(x.slice(T, T + S))), (y = w);
                  else a.push(x);
                }
                return a;
              }),
              (_.util.makePathSimpler = function (t) {
                for (
                  var e,
                    i,
                    n,
                    r,
                    o,
                    a = 0,
                    h = 0,
                    l = t.length,
                    c = 0,
                    u = 0,
                    f = [],
                    d = 0;
                  d < l;
                  ++d
                ) {
                  switch (((i = !1), (e = t[d].slice(0))[0])) {
                    case "l":
                      (e[0] = "L"), (e[1] += a), (e[2] += h);
                    case "L":
                      (a = e[1]), (h = e[2]);
                      break;
                    case "h":
                      e[1] += a;
                    case "H":
                      (e[0] = "L"), (e[2] = h), (a = e[1]);
                      break;
                    case "v":
                      e[1] += h;
                    case "V":
                      (e[0] = "L"), (h = e[1]), (e[1] = a), (e[2] = h);
                      break;
                    case "m":
                      (e[0] = "M"), (e[1] += a), (e[2] += h);
                    case "M":
                      (a = e[1]), (h = e[2]), (c = e[1]), (u = e[2]);
                      break;
                    case "c":
                      (e[0] = "C"),
                        (e[1] += a),
                        (e[2] += h),
                        (e[3] += a),
                        (e[4] += h),
                        (e[5] += a),
                        (e[6] += h);
                    case "C":
                      (r = e[3]), (o = e[4]), (a = e[5]), (h = e[6]);
                      break;
                    case "s":
                      (e[0] = "S"),
                        (e[1] += a),
                        (e[2] += h),
                        (e[3] += a),
                        (e[4] += h);
                    case "S":
                      (o =
                        "C" === n
                          ? ((r = 2 * a - r), 2 * h - o)
                          : ((r = a), h)),
                        (a = e[3]),
                        (h = e[4]),
                        (e[0] = "C"),
                        (e[5] = e[3]),
                        (e[6] = e[4]),
                        (e[3] = e[1]),
                        (e[4] = e[2]),
                        (e[1] = r),
                        (e[2] = o),
                        (r = e[3]),
                        (o = e[4]);
                      break;
                    case "q":
                      (e[0] = "Q"),
                        (e[1] += a),
                        (e[2] += h),
                        (e[3] += a),
                        (e[4] += h);
                    case "Q":
                      (r = e[1]), (o = e[2]), (a = e[3]), (h = e[4]);
                      break;
                    case "t":
                      (e[0] = "T"), (e[1] += a), (e[2] += h);
                    case "T":
                      (o =
                        "Q" === n
                          ? ((r = 2 * a - r), 2 * h - o)
                          : ((r = a), h)),
                        (e[0] = "Q"),
                        (a = e[1]),
                        (h = e[2]),
                        (e[1] = r),
                        (e[2] = o),
                        (e[3] = a),
                        (e[4] = h);
                      break;
                    case "a":
                      (e[0] = "A"), (e[6] += a), (e[7] += h);
                    case "A":
                      (i = !0),
                        (f = f.concat(s(a, h, e))),
                        (a = e[6]),
                        (h = e[7]);
                      break;
                    case "z":
                    case "Z":
                      (a = c), (h = u);
                  }
                  i || f.push(e), (n = e[0]);
                }
                return f;
              }),
              (_.util.getSmoothPathFromPoints = function (t, e) {
                var i,
                  n,
                  r = [],
                  o = new _.Point(t[0].x, t[0].y),
                  s = new _.Point(t[1].x, t[1].y),
                  a = t.length,
                  h = 1,
                  l = 0,
                  c = 2 < a;
                for (
                  c &&
                    ((h = t[2].x < s.x ? -1 : t[2].x === s.x ? 0 : 1),
                    (l = t[2].y < s.y ? -1 : t[2].y === s.y ? 0 : 1)),
                    r.push(["M", o.x - h * (e = e || 0), o.y - l * e]),
                    i = 1;
                  i < a;
                  i++
                )
                  o.eq(s) ||
                    ((n = o.midPointFrom(s)),
                    r.push(["Q", o.x, o.y, n.x, n.y])),
                    (o = t[i]),
                    i + 1 < t.length && (s = t[i + 1]);
                return (
                  c &&
                    ((h = o.x > t[i - 2].x ? 1 : o.x === t[i - 2].x ? 0 : -1),
                    (l = o.y > t[i - 2].y ? 1 : o.y === t[i - 2].y ? 0 : -1)),
                  r.push(["L", o.x + h * e, o.y + l * e]),
                  r
                );
              }),
              (_.util.getPathSegmentsInfo = l),
              (_.util.getBoundsOfCurve = o),
              (_.util.getPointOnPath = function (t, e, i) {
                i = i || l(t);
                for (var n = 0; 0 < e - i[n].length && n < i.length - 2; )
                  (e -= i[n].length), n++;
                var r,
                  o = i[n],
                  s = e / o.length,
                  h = o.command,
                  c = t[n];
                switch (h) {
                  case "M":
                    return { x: o.x, y: o.y, angle: 0 };
                  case "Z":
                  case "z":
                    return (
                      ((r = new _.Point(o.x, o.y).lerp(
                        new _.Point(o.destX, o.destY),
                        s
                      )).angle = Math.atan2(o.destY - o.y, o.destX - o.x)),
                      r
                    );
                  case "L":
                    return (
                      ((r = new _.Point(o.x, o.y).lerp(
                        new _.Point(c[1], c[2]),
                        s
                      )).angle = Math.atan2(c[2] - o.y, c[1] - o.x)),
                      r
                    );
                  case "C":
                  case "Q":
                    return (function (t, e) {
                      var i,
                        n,
                        r,
                        o = 0,
                        s = 0,
                        h = t.iterator,
                        l = { x: t.x, y: t.y },
                        c = 0.01;
                      for (t = t.angleFinder; s < e && o <= 1 && 1e-4 < c; )
                        (i = h(o)),
                          (r = o),
                          e < (n = a(l.x, l.y, i.x, i.y)) + s
                            ? (o -= c /= 2)
                            : ((l = i), (o += c), (s += n));
                      return (i.angle = t(r)), i;
                    })(o, e);
                }
              }),
              (_.util.transformPath = function (t, e, i) {
                return (
                  i &&
                    (e = _.util.multiplyTransformMatrices(e, [
                      1,
                      0,
                      0,
                      1,
                      -i.x,
                      -i.y,
                    ])),
                  t.map(function (t) {
                    for (
                      var i = t.slice(0), n = {}, r = 1;
                      r < t.length - 1;
                      r += 2
                    )
                      (n.x = t[r]),
                        (n.y = t[r + 1]),
                        (n = _.util.transformPoint(n, e)),
                        (i[r] = n.x),
                        (i[r + 1] = n.y);
                    return i;
                  })
                );
              }),
              (_.util.fromArcToBeizers = s),
              (_.util.getBoundsOfArc = function (t, e, i, r, s, a, h, l, c) {
                for (
                  var u,
                    f = 0,
                    d = 0,
                    g = [],
                    p = n(l - t, c - e, i, r, a, h, s),
                    m = 0,
                    v = p.length;
                  m < v;
                  m++
                )
                  (u = o(
                    f,
                    d,
                    p[m][1],
                    p[m][2],
                    p[m][3],
                    p[m][4],
                    p[m][5],
                    p[m][6]
                  )),
                    g.push({ x: u[0].x + t, y: u[0].y + e }),
                    g.push({ x: u[1].x + t, y: u[1].y + e }),
                    (f = p[m][5]),
                    (d = p[m][6]);
                return g;
              }),
              (_.util.drawArc = function (t, e, i, n) {
                s(e, i, (n = n.slice(0).unshift("X"))).forEach(function (e) {
                  t.bezierCurveTo.apply(t, e.slice(1));
                });
              });
          })(),
          (function () {
            var t = Array.prototype.slice;
            function e(t, e, i) {
              if (t && 0 !== t.length) {
                var n = t.length - 1,
                  r = e ? t[n][e] : t[n];
                if (e) for (; n--; ) i(t[n][e], r) && (r = t[n][e]);
                else for (; n--; ) i(t[n], r) && (r = t[n]);
                return r;
              }
            }
            _.util.array = {
              fill: function (t, e) {
                for (var i = t.length; i--; ) t[i] = e;
                return t;
              },
              invoke: function (e, i) {
                for (
                  var n = t.call(arguments, 2), r = [], o = 0, s = e.length;
                  o < s;
                  o++
                )
                  r[o] = n.length ? e[o][i].apply(e[o], n) : e[o][i].call(e[o]);
                return r;
              },
              min: function (t, i) {
                return e(t, i, function (t, e) {
                  return t < e;
                });
              },
              max: function (t, i) {
                return e(t, i, function (t, e) {
                  return e <= t;
                });
              },
            };
          })(),
          (function () {
            function t(e, i, n) {
              if (n)
                if (!_.isLikelyNode && i instanceof Element) e = i;
                else if (i instanceof Array) {
                  e = [];
                  for (var r = 0, o = i.length; r < o; r++)
                    e[r] = t({}, i[r], n);
                } else if (i && "object" == typeof i)
                  for (var s in i)
                    "canvas" === s || "group" === s
                      ? (e[s] = null)
                      : i.hasOwnProperty(s) && (e[s] = t({}, i[s], n));
                else e = i;
              else for (var s in i) e[s] = i[s];
              return e;
            }
            (_.util.object = {
              extend: t,
              clone: function (e, i) {
                return t({}, e, i);
              },
            }),
              _.util.object.extend(_.util, _.Observable);
          })(),
          (_.util.string = {
            camelize: function (t) {
              return t.replace(/-+(.)?/g, function (t, e) {
                return e ? e.toUpperCase() : "";
              });
            },
            capitalize: function (t, e) {
              return (
                t.charAt(0).toUpperCase() +
                (e ? t.slice(1) : t.slice(1).toLowerCase())
              );
            },
            escapeXml: function (t) {
              return t
                .replace(/&/g, "&amp;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&apos;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            },
            graphemeSplit: function (t) {
              var e,
                i = 0,
                n = [];
              for (i = 0; i < t.length; i++)
                !1 !==
                  (e = (function (t, e) {
                    var i = t.charCodeAt(e);
                    if (isNaN(i)) return "";
                    if (i < 55296 || 57343 < i) return t.charAt(e);
                    if (55296 <= i && i <= 56319) {
                      if (t.length <= e + 1)
                        throw "High surrogate without following low surrogate";
                      if ((i = t.charCodeAt(e + 1)) < 56320 || 57343 < i)
                        throw "High surrogate without following low surrogate";
                      return t.charAt(e) + t.charAt(e + 1);
                    }
                    if (0 === e)
                      throw "Low surrogate without preceding high surrogate";
                    if ((e = t.charCodeAt(e - 1)) < 55296 || 56319 < e)
                      throw "Low surrogate without preceding high surrogate";
                    return !1;
                  })(t, i)) && n.push(e);
              return n;
            },
          }),
          (function () {
            function t() {}
            var e = Array.prototype.slice,
              i = (function () {
                for (var t in { toString: 1 }) if ("toString" === t) return !1;
                return !0;
              })();
            function n() {}
            function r(t) {
              for (var i = null, n = this; n.constructor.superclass; ) {
                var r = n.constructor.superclass.prototype[t];
                if (n[t] !== r) {
                  i = r;
                  break;
                }
                n = n.constructor.superclass.prototype;
              }
              return i
                ? 1 < arguments.length
                  ? i.apply(this, e.call(arguments, 1))
                  : i.call(this)
                : console.log(
                    "tried to callSuper " +
                      t +
                      ", method not found in prototype chain",
                    this
                  );
            }
            _.util.createClass = function () {
              var o = null,
                s = e.call(arguments, 0);
              function a() {
                this.initialize.apply(this, arguments);
              }
              "function" == typeof s[0] && (o = s.shift()),
                (a.superclass = o),
                (a.subclasses = []),
                o &&
                  ((n.prototype = o.prototype),
                  (a.prototype = new n()),
                  o.subclasses.push(a));
              for (var h = 0, l = s.length; h < l; h++)
                !(function (t, e, n) {
                  for (var r in e)
                    r in t.prototype &&
                    "function" == typeof t.prototype[r] &&
                    -1 < (e[r] + "").indexOf("callSuper")
                      ? (t.prototype[r] = (function (t) {
                          return function () {
                            var i = this.constructor.superclass;
                            this.constructor.superclass = n;
                            var r = e[t].apply(this, arguments);
                            if (
                              ((this.constructor.superclass = i),
                              "initialize" !== t)
                            )
                              return r;
                          };
                        })(r))
                      : (t.prototype[r] = e[r]),
                      i &&
                        (e.toString !== Object.prototype.toString &&
                          (t.prototype.toString = e.toString),
                        e.valueOf !== Object.prototype.valueOf &&
                          (t.prototype.valueOf = e.valueOf));
                })(a, s[h], o);
              return (
                a.prototype.initialize || (a.prototype.initialize = t),
                ((a.prototype.constructor = a).prototype.callSuper = r),
                a
              );
            };
          })(),
          (u = !!_.document.createElement("div").attachEvent),
          (f = ["touchstart", "touchmove", "touchend"]),
          (_.util.addListener = function (t, e, i, n) {
            t && t.addEventListener(e, i, !u && n);
          }),
          (_.util.removeListener = function (t, e, i, n) {
            t && t.removeEventListener(e, i, !u && n);
          }),
          (_.util.getPointer = function (t) {
            var e = t.target,
              i = _.util.getScrollLeftTop(e);
            return {
              x:
                (e = (t = (e = t).changedTouches) && t[0] ? t[0] : e).clientX +
                i.left,
              y: e.clientY + i.top,
            };
          }),
          (_.util.isTouchEvent = function (t) {
            return -1 < f.indexOf(t.type) || "touch" === t.pointerType;
          }),
          (function () {
            var t =
                "string" ==
                typeof (e = _.document.createElement("div")).style.opacity,
              e = "string" == typeof e.style.filter,
              i = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,
              n = function (t) {
                return t;
              };
            t
              ? (n = function (t, e) {
                  return (t.style.opacity = e), t;
                })
              : e &&
                (n = function (t, e) {
                  var n = t.style;
                  return (
                    t.currentStyle && !t.currentStyle.hasLayout && (n.zoom = 1),
                    i.test(n.filter)
                      ? (n.filter = n.filter.replace(
                          i,
                          (e =
                            0.9999 <= e ? "" : "alpha(opacity=" + 100 * e + ")")
                        ))
                      : (n.filter += " alpha(opacity=" + 100 * e + ")"),
                    t
                  );
                }),
              (_.util.setStyle = function (t, e) {
                var i,
                  r = t.style;
                if (!r) return t;
                if ("string" == typeof e)
                  return (
                    (t.style.cssText += ";" + e),
                    -1 < e.indexOf("opacity")
                      ? n(t, e.match(/opacity:\s*(\d?\.?\d*)/)[1])
                      : t
                  );
                for (i in e)
                  "opacity" === i
                    ? n(t, e[i])
                    : (r[
                        "float" === i || "cssFloat" === i
                          ? void 0 === r.styleFloat
                            ? "cssFloat"
                            : "styleFloat"
                          : i
                      ] = e[i]);
                return t;
              });
          })(),
          (function () {
            var t,
              e,
              i,
              n = Array.prototype.slice,
              r = function (t) {
                return n.call(t, 0);
              };
            try {
              e = r(_.document.childNodes) instanceof Array;
            } catch (e) {}
            function o(t, e) {
              var i,
                n = _.document.createElement(t);
              for (i in e)
                "class" === i
                  ? (n.className = e[i])
                  : "for" === i
                  ? (n.htmlFor = e[i])
                  : n.setAttribute(i, e[i]);
              return n;
            }
            function s(t) {
              for (
                var e = 0,
                  i = 0,
                  n = _.document.documentElement,
                  r = _.document.body || { scrollLeft: 0, scrollTop: 0 };
                t &&
                (t.parentNode || t.host) &&
                ((t = t.parentNode || t.host) === _.document
                  ? ((e = r.scrollLeft || n.scrollLeft || 0),
                    (i = r.scrollTop || n.scrollTop || 0))
                  : ((e += t.scrollLeft || 0), (i += t.scrollTop || 0)),
                1 !== t.nodeType || "fixed" !== t.style.position);

              );
              return { left: e, top: i };
            }
            e ||
              (r = function (t) {
                for (var e = new Array(t.length), i = t.length; i--; )
                  e[i] = t[i];
                return e;
              }),
              (t =
                _.document.defaultView &&
                _.document.defaultView.getComputedStyle
                  ? function (t, e) {
                      return (t = _.document.defaultView.getComputedStyle(
                        t,
                        null
                      ))
                        ? t[e]
                        : void 0;
                    }
                  : function (t, e) {
                      var i = t.style[e];
                      return !i && t.currentStyle ? t.currentStyle[e] : i;
                    }),
              (e = _.document.documentElement.style),
              (i =
                "userSelect" in e
                  ? "userSelect"
                  : "MozUserSelect" in e
                  ? "MozUserSelect"
                  : "WebkitUserSelect" in e
                  ? "WebkitUserSelect"
                  : "KhtmlUserSelect" in e
                  ? "KhtmlUserSelect"
                  : ""),
              (_.util.makeElementUnselectable = function (t) {
                return (
                  void 0 !== t.onselectstart &&
                    (t.onselectstart = _.util.falseFunction),
                  i
                    ? (t.style[i] = "none")
                    : "string" == typeof t.unselectable &&
                      (t.unselectable = "on"),
                  t
                );
              }),
              (_.util.makeElementSelectable = function (t) {
                return (
                  void 0 !== t.onselectstart && (t.onselectstart = null),
                  i
                    ? (t.style[i] = "")
                    : "string" == typeof t.unselectable &&
                      (t.unselectable = ""),
                  t
                );
              }),
              (_.util.setImageSmoothing = function (t, e) {
                (t.imageSmoothingEnabled =
                  t.imageSmoothingEnabled ||
                  t.webkitImageSmoothingEnabled ||
                  t.mozImageSmoothingEnabled ||
                  t.msImageSmoothingEnabled ||
                  t.oImageSmoothingEnabled),
                  (t.imageSmoothingEnabled = e);
              }),
              (_.util.getById = function (t) {
                return "string" == typeof t ? _.document.getElementById(t) : t;
              }),
              (_.util.toArray = r),
              (_.util.addClass = function (t, e) {
                t &&
                  -1 === (" " + t.className + " ").indexOf(" " + e + " ") &&
                  (t.className += (t.className ? " " : "") + e);
              }),
              (_.util.makeElement = o),
              (_.util.wrapElement = function (t, e, i) {
                return (
                  "string" == typeof e && (e = o(e, i)),
                  t.parentNode && t.parentNode.replaceChild(e, t),
                  e.appendChild(t),
                  e
                );
              }),
              (_.util.getScrollLeftTop = s),
              (_.util.getElementOffset = function (e) {
                var i,
                  n,
                  r = e && e.ownerDocument,
                  o = { left: 0, top: 0 },
                  a = { left: 0, top: 0 },
                  h = {
                    borderLeftWidth: "left",
                    borderTopWidth: "top",
                    paddingLeft: "left",
                    paddingTop: "top",
                  };
                if (!r) return a;
                for (n in h) a[h[n]] += parseInt(t(e, n), 10) || 0;
                return (
                  (i = r.documentElement),
                  void 0 !== e.getBoundingClientRect &&
                    (o = e.getBoundingClientRect()),
                  (r = s(e)),
                  {
                    left: o.left + r.left - (i.clientLeft || 0) + a.left,
                    top: o.top + r.top - (i.clientTop || 0) + a.top,
                  }
                );
              }),
              (_.util.getNodeCanvas = function (t) {
                return (t = _.jsdomImplForWrapper(t))._canvas || t._image;
              }),
              (_.util.cleanUpJsdomNode = function (t) {
                !_.isLikelyNode ||
                  ((t = _.jsdomImplForWrapper(t)) &&
                    ((t._image = null),
                    (t._canvas = null),
                    (t._currentSrc = null),
                    (t._attributes = null),
                    (t._classList = null)));
              });
          })(),
          (function () {
            function t() {}
            _.util.request = function (e, i) {
              var n,
                r = (i = i || {}).method ? i.method.toUpperCase() : "GET",
                o = i.onComplete || function () {},
                s = new _.window.XMLHttpRequest(),
                a = i.body || i.parameters;
              return (
                (s.onreadystatechange = function () {
                  4 === s.readyState && (o(s), (s.onreadystatechange = t));
                }),
                "GET" === r &&
                  ((a = null),
                  "string" == typeof i.parameters &&
                    ((n = e),
                    (i = i.parameters),
                    (e = n + (/\?/.test(n) ? "&" : "?") + i))),
                s.open(r, e, !0),
                ("POST" !== r && "PUT" !== r) ||
                  s.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded"
                  ),
                s.send(a),
                s
              );
            };
          })(),
          (_.log = console.log),
          (_.warn = console.warn),
          (function () {
            function t() {
              return !1;
            }
            function e(t, e, i, n) {
              return -i * Math.cos((t / n) * (Math.PI / 2)) + i + e;
            }
            var i =
                _.window.requestAnimationFrame ||
                _.window.webkitRequestAnimationFrame ||
                _.window.mozRequestAnimationFrame ||
                _.window.oRequestAnimationFrame ||
                _.window.msRequestAnimationFrame ||
                function (t) {
                  return _.window.setTimeout(t, 1e3 / 60);
                },
              n = _.window.cancelAnimationFrame || _.window.clearTimeout;
            function r() {
              return i.apply(_.window, arguments);
            }
            (_.util.animate = function (i) {
              var n = !1;
              return (
                r(function (o) {
                  i = i || {};
                  var s,
                    a = o || +new Date(),
                    h = i.duration || 500,
                    l = a + h,
                    c = i.onChange || t,
                    u = i.abort || t,
                    f = i.onComplete || t,
                    d = i.easing || e,
                    g = "startValue" in i ? i.startValue : 0,
                    p = "endValue" in i ? i.endValue : 100,
                    m = i.byValue || p - g;
                  i.onStart && i.onStart(),
                    (function t(e) {
                      s = e || +new Date();
                      var i = (o = l < s ? h : s - a) / h,
                        o = ((e = d(o, g, m, h)), Math.abs((e - g) / m));
                      n ||
                        (u(e, o, i)
                          ? f(p, 1, 1)
                          : l < s
                          ? (c(p, 1, 1), f(p, 1, 1))
                          : (c(e, o, i), r(t)));
                    })(a);
                }),
                function () {
                  n = !0;
                }
              );
            }),
              (_.util.requestAnimFrame = r),
              (_.util.cancelAnimFrame = function () {
                return n.apply(_.window, arguments);
              });
          })(),
          (function () {
            function t(t, e, i) {
              var n =
                "rgba(" +
                parseInt(t[0] + i * (e[0] - t[0]), 10) +
                "," +
                parseInt(t[1] + i * (e[1] - t[1]), 10) +
                "," +
                parseInt(t[2] + i * (e[2] - t[2]), 10);
              return (
                (n +=
                  "," + (t && e ? parseFloat(t[3] + i * (e[3] - t[3])) : 1)) +
                ")"
              );
            }
            _.util.animateColor = function (e, i, n, r) {
              e = new _.Color(e).getSource();
              var o = new _.Color(i).getSource(),
                s = r.onComplete,
                a = r.onChange;
              return (
                (r = r || {}),
                _.util.animate(
                  _.util.object.extend(r, {
                    duration: n || 500,
                    startValue: e,
                    endValue: o,
                    byValue: o,
                    easing: function (e, i, n, o) {
                      return t(
                        i,
                        n,
                        r.colorEasing
                          ? r.colorEasing(e, o)
                          : 1 - Math.cos((e / o) * (Math.PI / 2))
                      );
                    },
                    onComplete: function (e, i, n) {
                      if (s) return s(t(o, o, 0), i, n);
                    },
                    onChange: function (e, i, n) {
                      if (a) {
                        if (Array.isArray(e)) return a(t(e, e, 0), i, n);
                        a(e, i, n);
                      }
                    },
                  })
                )
              );
            };
          })(),
          (function () {
            function t(t, e, i, n) {
              return (
                (n =
                  t < Math.abs(e)
                    ? ((t = e), i / 4)
                    : 0 === e && 0 === t
                    ? (i / (2 * Math.PI)) * Math.asin(1)
                    : (i / (2 * Math.PI)) * Math.asin(e / t)),
                { a: t, c: e, p: i, s: n }
              );
            }
            function e(t, e, i) {
              return (
                t.a *
                Math.pow(2, 10 * --e) *
                Math.sin(((e * i - t.s) * (2 * Math.PI)) / t.p)
              );
            }
            function i(t, e, i, r) {
              return i - n(r - t, 0, i, r) + e;
            }
            function n(t, e, i, n) {
              return (t /= n) < 1 / 2.75
                ? i * (7.5625 * t * t) + e
                : t < 2 / 2.75
                ? i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e
                : t < 2.5 / 2.75
                ? i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e
                : i * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e;
            }
            _.util.ease = {
              easeInQuad: function (t, e, i, n) {
                return i * (t /= n) * t + e;
              },
              easeOutQuad: function (t, e, i, n) {
                return -i * (t /= n) * (t - 2) + e;
              },
              easeInOutQuad: function (t, e, i, n) {
                return (t /= n / 2) < 1
                  ? (i / 2) * t * t + e
                  : (-i / 2) * (--t * (t - 2) - 1) + e;
              },
              easeInCubic: function (t, e, i, n) {
                return i * (t /= n) * t * t + e;
              },
              easeOutCubic: function (t, e, i, n) {
                return i * ((t = t / n - 1) * t * t + 1) + e;
              },
              easeInOutCubic: function (t, e, i, n) {
                return (t /= n / 2) < 1
                  ? (i / 2) * t * t * t + e
                  : (i / 2) * ((t -= 2) * t * t + 2) + e;
              },
              easeInQuart: function (t, e, i, n) {
                return i * (t /= n) * t * t * t + e;
              },
              easeOutQuart: function (t, e, i, n) {
                return -i * ((t = t / n - 1) * t * t * t - 1) + e;
              },
              easeInOutQuart: function (t, e, i, n) {
                return (t /= n / 2) < 1
                  ? (i / 2) * t * t * t * t + e
                  : (-i / 2) * ((t -= 2) * t * t * t - 2) + e;
              },
              easeInQuint: function (t, e, i, n) {
                return i * (t /= n) * t * t * t * t + e;
              },
              easeOutQuint: function (t, e, i, n) {
                return i * ((t = t / n - 1) * t * t * t * t + 1) + e;
              },
              easeInOutQuint: function (t, e, i, n) {
                return (t /= n / 2) < 1
                  ? (i / 2) * t * t * t * t * t + e
                  : (i / 2) * ((t -= 2) * t * t * t * t + 2) + e;
              },
              easeInSine: function (t, e, i, n) {
                return -i * Math.cos((t / n) * (Math.PI / 2)) + i + e;
              },
              easeOutSine: function (t, e, i, n) {
                return i * Math.sin((t / n) * (Math.PI / 2)) + e;
              },
              easeInOutSine: function (t, e, i, n) {
                return (-i / 2) * (Math.cos((Math.PI * t) / n) - 1) + e;
              },
              easeInExpo: function (t, e, i, n) {
                return 0 === t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e;
              },
              easeOutExpo: function (t, e, i, n) {
                return t === n
                  ? e + i
                  : i * (1 - Math.pow(2, (-10 * t) / n)) + e;
              },
              easeInOutExpo: function (t, e, i, n) {
                return 0 === t
                  ? e
                  : t === n
                  ? e + i
                  : (t /= n / 2) < 1
                  ? (i / 2) * Math.pow(2, 10 * (t - 1)) + e
                  : (i / 2) * (2 - Math.pow(2, -10 * --t)) + e;
              },
              easeInCirc: function (t, e, i, n) {
                return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
              },
              easeOutCirc: function (t, e, i, n) {
                return i * Math.sqrt(1 - (t = t / n - 1) * t) + e;
              },
              easeInOutCirc: function (t, e, i, n) {
                return (t /= n / 2) < 1
                  ? (-i / 2) * (Math.sqrt(1 - t * t) - 1) + e
                  : (i / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
              },
              easeInElastic: function (i, n, r, o) {
                var s = 0;
                return 0 === i
                  ? n
                  : 1 == (i /= o)
                  ? n + r
                  : -e(t(r, r, (s = s || 0.3 * o), 1.70158), i, o) + n;
              },
              easeOutElastic: function (e, i, n, r) {
                return 0 === e
                  ? i
                  : 1 == (e /= r)
                  ? i + n
                  : (n = t(n, n, 0.3 * r, 1.70158)).a *
                      Math.pow(2, -10 * e) *
                      Math.sin(((e * r - n.s) * (2 * Math.PI)) / n.p) +
                    n.c +
                    i;
              },
              easeInOutElastic: function (i, n, r, o) {
                return 0 === i
                  ? n
                  : 2 == (i /= o / 2)
                  ? n + r
                  : ((r = t(r, r, o * (0.3 * 1.5), 1.70158)),
                    i < 1
                      ? -0.5 * e(r, i, o) + n
                      : r.a *
                          Math.pow(2, -10 * --i) *
                          Math.sin(((i * o - r.s) * (2 * Math.PI)) / r.p) *
                          0.5 +
                        r.c +
                        n);
              },
              easeInBack: function (t, e, i, n, r) {
                return (
                  i *
                    (t /= n) *
                    t *
                    (((r = void 0 === r ? 1.70158 : r) + 1) * t - r) +
                  e
                );
              },
              easeOutBack: function (t, e, i, n, r) {
                return (
                  i *
                    ((t = t / n - 1) *
                      t *
                      (((r = void 0 === r ? 1.70158 : r) + 1) * t + r) +
                      1) +
                  e
                );
              },
              easeInOutBack: function (t, e, i, n, r) {
                return (
                  void 0 === r && (r = 1.70158),
                  (t /= n / 2) < 1
                    ? (i / 2) * (t * t * ((1 + (r *= 1.525)) * t - r)) + e
                    : (i / 2) *
                        ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) +
                      e
                );
              },
              easeInBounce: i,
              easeOutBounce: n,
              easeInOutBounce: function (t, e, r, o) {
                return t < o / 2
                  ? 0.5 * i(2 * t, 0, r, o) + e
                  : 0.5 * n(2 * t - o, 0, r, o) + 0.5 * r + e;
              },
            };
          })(),
          (function (t) {
            var e,
              i,
              n,
              r,
              o,
              s = t.fabric || (t.fabric = {}),
              a = s.util.object.extend,
              h = s.util.object.clone,
              l = s.util.toFixed,
              c = s.util.parseUnit,
              u = s.util.multiplyTransformMatrices,
              f = {
                cx: "left",
                x: "left",
                r: "radius",
                cy: "top",
                y: "top",
                display: "visible",
                visibility: "visible",
                transform: "transformMatrix",
                "fill-opacity": "fillOpacity",
                "fill-rule": "fillRule",
                "font-family": "fontFamily",
                "font-size": "fontSize",
                "font-style": "fontStyle",
                "font-weight": "fontWeight",
                "letter-spacing": "charSpacing",
                "paint-order": "paintFirst",
                "stroke-dasharray": "strokeDashArray",
                "stroke-dashoffset": "strokeDashOffset",
                "stroke-linecap": "strokeLineCap",
                "stroke-linejoin": "strokeLineJoin",
                "stroke-miterlimit": "strokeMiterLimit",
                "stroke-opacity": "strokeOpacity",
                "stroke-width": "strokeWidth",
                "text-decoration": "textDecoration",
                "text-anchor": "textAnchor",
                opacity: "opacity",
                "clip-path": "clipPath",
                "clip-rule": "clipRule",
                "vector-effect": "strokeUniform",
                "image-rendering": "imageSmoothing",
              },
              d = { stroke: "strokeOpacity", fill: "fillOpacity" },
              g = "font-size",
              p = "clip-path";
            function m(t) {
              return new RegExp("^(" + t.join("|") + ")\\b", "i");
            }
            function v(t, e) {
              for (var i, n = [], r = 0, o = e.length; r < o; r++)
                (i = e[r]),
                  (i = t.getElementsByTagName(i)),
                  (n = n.concat(Array.prototype.slice.call(i)));
              return n;
            }
            function y(t, e, i) {
              t[i] = Math.tan(s.util.degreesToRadians(e[0]));
            }
            function _(t, e) {
              var i,
                n = {};
              for (i in s.cssRules[e])
                if (
                  (function (t, e) {
                    var i,
                      n = !0;
                    return (
                      (i = x(t, e.pop())) &&
                        e.length &&
                        (n = (function (t, e) {
                          for (
                            var i, n = !0;
                            t.parentNode &&
                            1 === t.parentNode.nodeType &&
                            e.length;

                          )
                            n && (i = e.pop()), (n = x((t = t.parentNode), i));
                          return 0 === e.length;
                        })(t, e)),
                      i && n && 0 === e.length
                    );
                  })(t, i.split(" "))
                )
                  for (var r in s.cssRules[e][i]) n[r] = s.cssRules[e][i][r];
              return n;
            }
            function x(t, e) {
              var i,
                n = t.nodeName,
                r = t.getAttribute("class"),
                o = ((t = t.getAttribute("id")), new RegExp("^" + n, "i"));
              if (
                ((e = e.replace(o, "")),
                t &&
                  e.length &&
                  ((o = new RegExp("#" + t + "(?![a-zA-Z\\-]+)", "i")),
                  (e = e.replace(o, ""))),
                r && e.length)
              )
                for (i = (r = r.split(" ")).length; i--; )
                  (o = new RegExp("\\." + r[i] + "(?![a-zA-Z\\-]+)", "i")),
                    (e = e.replace(o, ""));
              return 0 === e.length;
            }
            function b(t, e) {
              var i;
              if ((i = t.getElementById ? t.getElementById(e) : i)) return i;
              for (
                var n, r = t.getElementsByTagName("*"), o = 0, s = r.length;
                o < s;
                o++
              )
                if (e === (n = r[o]).getAttribute("id")) return n;
            }
            (s.svgValidTagNamesRegEx = m([
              "path",
              "circle",
              "polygon",
              "polyline",
              "ellipse",
              "rect",
              "line",
              "image",
              "text",
            ])),
              (s.svgViewBoxElementsRegEx = m([
                "symbol",
                "image",
                "marker",
                "pattern",
                "view",
                "svg",
              ])),
              (s.svgInvalidAncestorsRegEx = m([
                "pattern",
                "defs",
                "symbol",
                "metadata",
                "clipPath",
                "mask",
                "desc",
              ])),
              (s.svgValidParentsRegEx = m([
                "symbol",
                "g",
                "a",
                "svg",
                "clipPath",
                "defs",
              ])),
              (s.cssRules = {}),
              (s.gradientDefs = {}),
              (s.clipPaths = {}),
              (s.parseTransformAttribute =
                ((e = s.iMatrix),
                (i = s.reNum),
                (t = s.commaWsp),
                (n =
                  "(?:(?:(matrix)\\s*\\(\\s*(" +
                  i +
                  ")" +
                  t +
                  "(" +
                  i +
                  ")" +
                  t +
                  "(" +
                  i +
                  ")" +
                  t +
                  "(" +
                  i +
                  ")" +
                  t +
                  "(" +
                  i +
                  ")" +
                  t +
                  "(" +
                  i +
                  ")\\s*\\))|(?:(translate)\\s*\\(\\s*(" +
                  i +
                  ")(?:" +
                  t +
                  "(" +
                  i +
                  "))?\\s*\\))|(?:(scale)\\s*\\(\\s*(" +
                  i +
                  ")(?:" +
                  t +
                  "(" +
                  i +
                  "))?\\s*\\))|(?:(rotate)\\s*\\(\\s*(" +
                  i +
                  ")(?:" +
                  t +
                  "(" +
                  i +
                  ")" +
                  t +
                  "(" +
                  i +
                  "))?\\s*\\))|(?:(skewX)\\s*\\(\\s*(" +
                  i +
                  ")\\s*\\))|(?:(skewY)\\s*\\(\\s*(" +
                  i +
                  ")\\s*\\)))"),
                (r = new RegExp(
                  "^\\s*(?:(?:" + n + "(?:" + t + "*" + n + ")*)?)\\s*$"
                )),
                (o = new RegExp(n, "g")),
                function (t) {
                  var i = e.concat(),
                    a = [];
                  if (!t || (t && !r.test(t))) return i;
                  t.replace(o, function (t) {
                    var r,
                      o,
                      h,
                      l,
                      c,
                      u,
                      f = new RegExp(n).exec(t).filter(function (t) {
                        return !!t;
                      }),
                      d = ((t = f[1]), f.slice(2).map(parseFloat));
                    switch (t) {
                      case "translate":
                        (u = d),
                          ((c = i)[4] = u[0]),
                          2 === u.length && (c[5] = u[1]);
                        break;
                      case "rotate":
                        (d[0] = s.util.degreesToRadians(d[0])),
                          (r = i),
                          (c = d),
                          (o = s.util.cos(c[0])),
                          (u = s.util.sin(c[0])),
                          (l = h = 0),
                          3 === c.length && ((h = c[1]), (l = c[2])),
                          (r[0] = o),
                          (r[1] = u),
                          (r[2] = -u),
                          (r[3] = o),
                          (r[4] = h - (o * h - u * l)),
                          (r[5] = l - (u * h + o * l));
                        break;
                      case "scale":
                        (h = i),
                          (l = (o = d)[0]),
                          (o = 2 === o.length ? o[1] : o[0]),
                          (h[0] = l),
                          (h[3] = o);
                        break;
                      case "skewX":
                        y(i, d, 2);
                        break;
                      case "skewY":
                        y(i, d, 1);
                        break;
                      case "matrix":
                        i = d;
                    }
                    a.push(i.concat()), (i = e.concat());
                  });
                  for (var h = a[0]; 1 < a.length; )
                    a.shift(), (h = s.util.multiplyTransformMatrices(h, a[0]));
                  return h;
                }));
            var C = new RegExp(
              "^\\s*(" +
                s.reNum +
                "+)\\s*,?\\s*(" +
                s.reNum +
                "+)\\s*,?\\s*(" +
                s.reNum +
                "+)\\s*,?\\s*(" +
                s.reNum +
                "+)\\s*$"
            );
            function S(t) {
              if (!s.svgViewBoxElementsRegEx.test(t.nodeName)) return {};
              var e,
                i,
                n,
                r,
                o = t.getAttribute("viewBox"),
                a = 1,
                h = 1,
                l = t.getAttribute("width"),
                u = t.getAttribute("height"),
                f = t.getAttribute("x") || 0,
                d = t.getAttribute("y") || 0,
                g = t.getAttribute("preserveAspectRatio") || "",
                p = !o || !(o = o.match(C)),
                m = !l || !u || "100%" === l || "100%" === u,
                v = p && m,
                y = {},
                _ = "",
                x = 0,
                b = 0;
              if (
                ((y.width = 0),
                (y.height = 0),
                (y.toBeParsed = v),
                p &&
                  (f || d) &&
                  t.parentNode &&
                  "#document" !== t.parentNode.nodeName &&
                  ((_ = " translate(" + c(f) + " " + c(d) + ") "),
                  (n = (t.getAttribute("transform") || "") + _),
                  t.setAttribute("transform", n),
                  t.removeAttribute("x"),
                  t.removeAttribute("y")),
                v)
              )
                return y;
              if (p) return (y.width = c(l)), (y.height = c(u)), y;
              if (
                ((e = -parseFloat(o[1])),
                (i = -parseFloat(o[2])),
                (p = parseFloat(o[3])),
                (o = parseFloat(o[4])),
                (y.minX = e),
                (y.minY = i),
                (y.viewBoxWidth = p),
                (y.viewBoxHeight = o),
                m
                  ? ((y.width = p), (y.height = o))
                  : ((y.width = c(l)),
                    (y.height = c(u)),
                    (a = y.width / p),
                    (h = y.height / o)),
                "none" !==
                  (g = s.util.parsePreserveAspectRatioAttribute(g)).alignX &&
                  ("meet" === g.meetOrSlice && (h = a = h < a ? h : a),
                  "slice" === g.meetOrSlice && (h = a = h < a ? a : h),
                  (x = y.width - p * a),
                  (b = y.height - o * a),
                  "Mid" === g.alignX && (x /= 2),
                  "Mid" === g.alignY && (b /= 2),
                  "Min" === g.alignX && (x = 0),
                  "Min" === g.alignY && (b = 0)),
                1 === a && 1 === h && 0 == e && 0 == i && 0 === f && 0 === d)
              )
                return y;
              if (
                ((n =
                  (_ =
                    (f || d) && "#document" !== t.parentNode.nodeName
                      ? " translate(" + c(f) + " " + c(d) + ") "
                      : _) +
                  " matrix(" +
                  a +
                  " 0 0 " +
                  h +
                  " " +
                  (e * a + x) +
                  " " +
                  (i * h + b) +
                  ") "),
                "svg" === t.nodeName)
              ) {
                for (
                  r = t.ownerDocument.createElementNS(s.svgNS, "g");
                  t.firstChild;

                )
                  r.appendChild(t.firstChild);
                t.appendChild(r);
              } else
                (r = t).removeAttribute("x"),
                  r.removeAttribute("y"),
                  (n = r.getAttribute("transform") + n);
              return r.setAttribute("transform", n), y;
            }
            s.parseSVGDocument = function (t, e, i, n) {
              if (t) {
                !(function (t) {
                  for (
                    var e = v(t, ["use", "svg:use"]), i = 0;
                    e.length && i < e.length;

                  ) {
                    var n = e[i];
                    if (
                      null ===
                      (h =
                        n.getAttribute("xlink:href") || n.getAttribute("href"))
                    )
                      return;
                    var r,
                      o = h.substr(1),
                      a = n.getAttribute("x") || 0,
                      h = n.getAttribute("y") || 0,
                      l = b(t, o).cloneNode(!0),
                      c =
                        (l.getAttribute("transform") || "") +
                        " translate(" +
                        a +
                        ", " +
                        h +
                        ")",
                      u = ((h = e.length), s.svgNS);
                    if ((S(l), /^svg$/i.test(l.nodeName))) {
                      for (
                        var f,
                          d = l.ownerDocument.createElementNS(u, "g"),
                          g = 0,
                          p = (f = l.attributes).length;
                        g < p;
                        g++
                      )
                        (r = f.item(g)),
                          d.setAttributeNS(u, r.nodeName, r.nodeValue);
                      for (; l.firstChild; ) d.appendChild(l.firstChild);
                      l = d;
                    }
                    for (g = 0, p = (f = n.attributes).length; g < p; g++)
                      "x" !== (r = f.item(g)).nodeName &&
                        "y" !== r.nodeName &&
                        "xlink:href" !== r.nodeName &&
                        "href" !== r.nodeName &&
                        ("transform" === r.nodeName
                          ? (c = r.nodeValue + " " + c)
                          : l.setAttribute(r.nodeName, r.nodeValue));
                    l.setAttribute("transform", c),
                      l.setAttribute("instantiated_by_use", "1"),
                      l.removeAttribute("id"),
                      n.parentNode.replaceChild(l, n),
                      e.length === h && i++;
                  }
                })(t);
                var r = s.Object.__uid++,
                  o = S(t),
                  a = s.util.toArray(t.getElementsByTagName("*"));
                if (
                  ((o.crossOrigin = n && n.crossOrigin),
                  (o.svgUid = r),
                  0 === a.length && s.isLikelyNode)
                ) {
                  for (
                    var l = [],
                      c = 0,
                      u = (a = t.selectNodes('//*[name(.)!="svg"]')).length;
                    c < u;
                    c++
                  )
                    l[c] = a[c];
                  a = l;
                }
                var f,
                  d = a.filter(function (t) {
                    return (
                      S(t),
                      s.svgValidTagNamesRegEx.test(
                        t.nodeName.replace("svg:", "")
                      ) &&
                        !(function (t, e) {
                          for (; (t = t && t.parentNode); )
                            if (
                              t.nodeName &&
                              e.test(t.nodeName.replace("svg:", "")) &&
                              !t.getAttribute("instantiated_by_use")
                            )
                              return 1;
                        })(t, s.svgInvalidAncestorsRegEx)
                    );
                  });
                !d || (d && !d.length)
                  ? e && e([], {})
                  : ((f = {}),
                    a
                      .filter(function (t) {
                        return "clipPath" === t.nodeName.replace("svg:", "");
                      })
                      .forEach(function (t) {
                        var e = t.getAttribute("id");
                        f[e] = s.util
                          .toArray(t.getElementsByTagName("*"))
                          .filter(function (t) {
                            return s.svgValidTagNamesRegEx.test(
                              t.nodeName.replace("svg:", "")
                            );
                          });
                      }),
                    (s.gradientDefs[r] = s.getGradientDefs(t)),
                    (s.cssRules[r] = s.getCSSRules(t)),
                    (s.clipPaths[r] = f),
                    s.parseElements(
                      d,
                      function (t, i) {
                        e &&
                          (e(t, o, i, a),
                          delete s.gradientDefs[r],
                          delete s.cssRules[r],
                          delete s.clipPaths[r]);
                      },
                      h(o),
                      i,
                      n
                    ));
              }
            };
            var w = new RegExp(
              "(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" +
                s.reNum +
                "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" +
                s.reNum +
                "))?\\s+(.*)"
            );
            a(s, {
              parseFontDeclaration: function (t, e) {
                var i,
                  n,
                  r,
                  o = t.match(w);
                o &&
                  ((i = o[1]),
                  (n = o[3]),
                  (r = o[4]),
                  (t = o[5]),
                  (o = o[6]),
                  i && (e.fontStyle = i),
                  n &&
                    (e.fontWeight = isNaN(parseFloat(n)) ? n : parseFloat(n)),
                  r && (e.fontSize = c(r)),
                  o && (e.fontFamily = o),
                  t && (e.lineHeight = "normal" === t ? 1 : t));
              },
              getGradientDefs: function (t) {
                var e,
                  i = v(t, [
                    "linearGradient",
                    "radialGradient",
                    "svg:linearGradient",
                    "svg:radialGradient",
                  ]),
                  n = 0,
                  r = {};
                for (n = i.length; n--; )
                  (e = i[n]).getAttribute("xlink:href") &&
                    (function t(e, i) {
                      var n = "xlink:href",
                        r = b(e, i.getAttribute(n).substr(1));
                      if (
                        (r && r.getAttribute(n) && t(e, r),
                        [
                          "gradientTransform",
                          "x1",
                          "x2",
                          "y1",
                          "y2",
                          "gradientUnits",
                          "cx",
                          "cy",
                          "r",
                          "fx",
                          "fy",
                        ].forEach(function (t) {
                          r &&
                            !i.hasAttribute(t) &&
                            r.hasAttribute(t) &&
                            i.setAttribute(t, r.getAttribute(t));
                        }),
                        !i.children.length)
                      )
                        for (var o = r.cloneNode(!0); o.firstChild; )
                          i.appendChild(o.firstChild);
                      i.removeAttribute(n);
                    })(t, e),
                    (r[e.getAttribute("id")] = e);
                return r;
              },
              parseAttributes: function (t, e, i) {
                if (t) {
                  var n,
                    r,
                    o = {};
                  void 0 === i && (i = t.getAttribute("svgUid")),
                    t.parentNode &&
                      s.svgValidParentsRegEx.test(t.parentNode.nodeName) &&
                      (o = s.parseAttributes(t.parentNode, e, i));
                  var h = e.reduce(function (e, i) {
                    return (n = t.getAttribute(i)) && (e[i] = n), e;
                  }, {});
                  (i = a(_(t, i), s.parseStyleAttribute(t))),
                    (h = a(h, i)),
                    i[p] && t.setAttribute(p, i[p]),
                    (r = i = o.fontSize || s.Text.DEFAULT_SVG_FONT_SIZE),
                    h[g] && (h[g] = r = c(h[g], i));
                  var m,
                    v,
                    y,
                    x = {};
                  for (v in h)
                    (y = (function (t, e, i, n) {
                      var r,
                        o =
                          "[object Array]" ===
                          Object.prototype.toString.call(e);
                      if (("fill" !== t && "stroke" !== t) || "none" !== e) {
                        if ("strokeUniform" === t)
                          return "non-scaling-stroke" === e;
                        if ("strokeDashArray" === t)
                          e =
                            "none" === e
                              ? null
                              : e
                                  .replace(/,/g, " ")
                                  .split(/\s+/)
                                  .map(parseFloat);
                        else if ("transformMatrix" === t)
                          e =
                            i && i.transformMatrix
                              ? u(
                                  i.transformMatrix,
                                  s.parseTransformAttribute(e)
                                )
                              : s.parseTransformAttribute(e);
                        else if ("visible" === t)
                          (e = "none" !== e && "hidden" !== e),
                            i && !1 === i.visible && (e = !1);
                        else if ("opacity" === t)
                          (e = parseFloat(e)),
                            i && void 0 !== i.opacity && (e *= i.opacity);
                        else if ("textAnchor" === t)
                          e =
                            "start" === e
                              ? "left"
                              : "end" === e
                              ? "right"
                              : "center";
                        else if ("charSpacing" === t) r = (c(e, n) / n) * 1e3;
                        else if ("paintFirst" === t) {
                          var a = e.indexOf("fill");
                          (i = e.indexOf("stroke")),
                            (e = "fill"),
                            ((-1 < a && -1 < i && i < a) ||
                              (-1 === a && -1 < i)) &&
                              (e = "stroke");
                        } else {
                          if (
                            "href" === t ||
                            "xlink:href" === t ||
                            "font" === t
                          )
                            return e;
                          if ("imageSmoothing" === t)
                            return "optimizeQuality" === e;
                          r = o ? e.map(c) : c(e, n);
                        }
                      } else e = "";
                      return !o && isNaN(r) ? e : r;
                    })((m = (y = v) in f ? f[y] : y), h[v], o, r)),
                      (x[m] = y);
                  return (
                    x && x.font && s.parseFontDeclaration(x.font, x),
                    (i = a(o, x)),
                    s.svgValidParentsRegEx.test(t.nodeName)
                      ? i
                      : (function (t) {
                          for (var e in d)
                            if (void 0 !== t[d[e]] && "" !== t[e]) {
                              if (void 0 === t[e]) {
                                if (!s.Object.prototype[e]) continue;
                                t[e] = s.Object.prototype[e];
                              }
                              var i;
                              0 !== t[e].indexOf("url(") &&
                                ((i = new s.Color(t[e])),
                                (t[e] = i
                                  .setAlpha(l(i.getAlpha() * t[d[e]], 2))
                                  .toRgba()));
                            }
                          return t;
                        })(i)
                  );
                }
              },
              parseElements: function (t, e, i, n, r) {
                new s.ElementsParser(t, e, i, n, r).parse();
              },
              parseStyleAttribute: function (t) {
                var e,
                  i,
                  n,
                  r = {};
                return (
                  (t = t.getAttribute("style")) &&
                    ("string" == typeof t
                      ? ((e = r),
                        t
                          .replace(/;\s*$/, "")
                          .split(";")
                          .forEach(function (t) {
                            (t = t.split(":")),
                              (i = t[0].trim().toLowerCase()),
                              (n = t[1].trim()),
                              (e[i] = n);
                          }))
                      : (function (t, e) {
                          var i, n, r;
                          for (r in t)
                            void 0 !== t[r] &&
                              ((i = r.toLowerCase()), (n = t[r]), (e[i] = n));
                        })(t, r)),
                  r
                );
              },
              parsePointsAttribute: function (t) {
                if (!t) return null;
                for (
                  var e = [],
                    i = 0,
                    n = (t = (t = t.replace(/,/g, " ").trim()).split(/\s+/))
                      .length;
                  i < n;
                  i += 2
                )
                  e.push({ x: parseFloat(t[i]), y: parseFloat(t[i + 1]) });
                return e;
              },
              getCSSRules: function (t) {
                for (
                  var e = t.getElementsByTagName("style"),
                    i = {},
                    n = 0,
                    r = e.length;
                  n < r;
                  n++
                ) {
                  var o = e[n].textContent;
                  "" !== (o = o.replace(/\/\*[\s\S]*?\*\//g, "")).trim() &&
                    o
                      .match(/[^{]*\{[\s\S]*?\}/g)
                      .map(function (t) {
                        return t.trim();
                      })
                      .forEach(function (t) {
                        var e = t.match(/([\s\S]*?)\s*\{([^}]*)\}/),
                          o = {},
                          a = e[2]
                            .trim()
                            .replace(/;$/, "")
                            .split(/\s*;\s*/);
                        for (n = 0, r = a.length; n < r; n++) {
                          var h = (l = a[n].split(/\s*:\s*/))[0],
                            l = l[1];
                          o[h] = l;
                        }
                        (t = e[1]).split(",").forEach(function (t) {
                          "" !== (t = t.replace(/^svg/i, "").trim()) &&
                            (i[t]
                              ? s.util.object.extend(i[t], o)
                              : (i[t] = s.util.object.clone(o)));
                        });
                      });
                }
                return i;
              },
              loadSVGFromURL: function (t, e, i, n) {
                (t = t.replace(/^\n\s*/, "").trim()),
                  new s.util.request(t, {
                    method: "get",
                    onComplete: function (t) {
                      if (!(t = t.responseXML) || !t.documentElement)
                        return e && e(null), !1;
                      s.parseSVGDocument(
                        t.documentElement,
                        function (t, i, n, r) {
                          e && e(t, i, n, r);
                        },
                        i,
                        n
                      );
                    },
                  });
              },
              loadSVGFromString: function (t, e, i, n) {
                (t = new s.window.DOMParser().parseFromString(
                  t.trim(),
                  "text/xml"
                )),
                  s.parseSVGDocument(
                    t.documentElement,
                    function (t, i, n, r) {
                      e(t, i, n, r);
                    },
                    i,
                    n
                  );
              },
            });
          })(e),
          (_.ElementsParser = function (t, e, i, n, r, o) {
            (this.elements = t),
              (this.callback = e),
              (this.options = i),
              (this.reviver = n),
              (this.svgUid = (i && i.svgUid) || 0),
              (this.parsingOptions = r),
              (this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g),
              (this.doc = o);
          }),
          ((c = _.ElementsParser.prototype).parse = function () {
            (this.instances = new Array(this.elements.length)),
              (this.numElements = this.elements.length),
              this.createObjects();
          }),
          (c.createObjects = function () {
            var t = this;
            this.elements.forEach(function (e, i) {
              e.setAttribute("svgUid", t.svgUid), t.createObject(e, i);
            });
          }),
          (c.findTag = function (t) {
            return _[_.util.string.capitalize(t.tagName.replace("svg:", ""))];
          }),
          (c.createObject = function (t, e) {
            var i = this.findTag(t);
            if (i && i.fromElement)
              try {
                i.fromElement(t, this.createCallback(e, t), this.options);
              } catch (t) {
                _.log(t);
              }
            else this.checkIfDone();
          }),
          (c.createCallback = function (t, e) {
            var i = this;
            return function (n) {
              var r;
              i.resolveGradient(n, e, "fill"),
                i.resolveGradient(n, e, "stroke"),
                n instanceof _.Image &&
                  n._originalElement &&
                  (r = n.parsePreserveAspectRatioAttribute(e)),
                n._removeTransformMatrix(r),
                i.resolveClipPath(n, e),
                i.reviver && i.reviver(e, n),
                (i.instances[t] = n),
                i.checkIfDone();
            };
          }),
          (c.extractPropertyDefinition = function (t, e, i) {
            if (((t = t[e]), (e = this.regexUrl).test(t)))
              return (
                (e.lastIndex = 0),
                (t = e.exec(t)[1]),
                (e.lastIndex = 0),
                _[i][this.svgUid][t]
              );
          }),
          (c.resolveGradient = function (t, e, i) {
            var n = this.extractPropertyDefinition(t, i, "gradientDefs");
            n &&
              ((e = e.getAttribute(i + "-opacity")),
              (e = _.Gradient.fromElement(n, t, e, this.options)),
              t.set(i, e));
          }),
          (c.createClipPathCallback = function (t, e) {
            return function (t) {
              t._removeTransformMatrix(), (t.fillRule = t.clipRule), e.push(t);
            };
          }),
          (c.resolveClipPath = function (t, e) {
            var i,
              n = this.extractPropertyDefinition(t, "clipPath", "clipPaths");
            if (n) {
              for (
                var r = [],
                  o = _.util.invertTransform(t.calcTransformMatrix()),
                  s = n[0].parentNode,
                  a = e;
                a.parentNode && a.getAttribute("clip-path") !== t.clipPath;

              )
                a = a.parentNode;
              a.parentNode.appendChild(s);
              for (var h = 0; h < n.length; h++)
                (i = n[h]),
                  this.findTag(i).fromElement(
                    i,
                    this.createClipPathCallback(t, r),
                    this.options
                  );
              (n = 1 === r.length ? r[0] : new _.Group(r)),
                (o = _.util.multiplyTransformMatrices(
                  o,
                  n.calcTransformMatrix()
                )),
                n.clipPath && this.resolveClipPath(n, a),
                (o = _.util.qrDecompose(o)),
                (n.flipX = !1),
                (n.flipY = !1),
                n.set("scaleX", o.scaleX),
                n.set("scaleY", o.scaleY),
                (n.angle = o.angle),
                (n.skewX = o.skewX),
                (n.skewY = 0),
                n.setPositionByOrigin(
                  { x: o.translateX, y: o.translateY },
                  "center",
                  "center"
                ),
                (t.clipPath = n);
            } else delete t.clipPath;
          }),
          (c.checkIfDone = function () {
            0 == --this.numElements &&
              ((this.instances = this.instances.filter(function (t) {
                return null != t;
              })),
              this.callback(this.instances, this.elements));
          }),
          (function (t) {
            function e(t, e) {
              (this.x = t), (this.y = e);
            }
            (t = t.fabric || (t.fabric = {})).Point
              ? t.warn("fabric.Point is already defined")
              : ((t.Point = e).prototype = {
                  type: "point",
                  constructor: e,
                  add: function (t) {
                    return new e(this.x + t.x, this.y + t.y);
                  },
                  addEquals: function (t) {
                    return (this.x += t.x), (this.y += t.y), this;
                  },
                  scalarAdd: function (t) {
                    return new e(this.x + t, this.y + t);
                  },
                  scalarAddEquals: function (t) {
                    return (this.x += t), (this.y += t), this;
                  },
                  subtract: function (t) {
                    return new e(this.x - t.x, this.y - t.y);
                  },
                  subtractEquals: function (t) {
                    return (this.x -= t.x), (this.y -= t.y), this;
                  },
                  scalarSubtract: function (t) {
                    return new e(this.x - t, this.y - t);
                  },
                  scalarSubtractEquals: function (t) {
                    return (this.x -= t), (this.y -= t), this;
                  },
                  multiply: function (t) {
                    return new e(this.x * t, this.y * t);
                  },
                  multiplyEquals: function (t) {
                    return (this.x *= t), (this.y *= t), this;
                  },
                  divide: function (t) {
                    return new e(this.x / t, this.y / t);
                  },
                  divideEquals: function (t) {
                    return (this.x /= t), (this.y /= t), this;
                  },
                  eq: function (t) {
                    return this.x === t.x && this.y === t.y;
                  },
                  lt: function (t) {
                    return this.x < t.x && this.y < t.y;
                  },
                  lte: function (t) {
                    return this.x <= t.x && this.y <= t.y;
                  },
                  gt: function (t) {
                    return this.x > t.x && this.y > t.y;
                  },
                  gte: function (t) {
                    return this.x >= t.x && this.y >= t.y;
                  },
                  lerp: function (t, i) {
                    return (
                      void 0 === i && (i = 0.5),
                      (i = Math.max(Math.min(1, i), 0)),
                      new e(
                        this.x + (t.x - this.x) * i,
                        this.y + (t.y - this.y) * i
                      )
                    );
                  },
                  distanceFrom: function (t) {
                    var e = this.x - t.x;
                    return (t = this.y - t.y), Math.sqrt(e * e + t * t);
                  },
                  midPointFrom: function (t) {
                    return this.lerp(t);
                  },
                  min: function (t) {
                    return new e(Math.min(this.x, t.x), Math.min(this.y, t.y));
                  },
                  max: function (t) {
                    return new e(Math.max(this.x, t.x), Math.max(this.y, t.y));
                  },
                  toString: function () {
                    return this.x + "," + this.y;
                  },
                  setXY: function (t, e) {
                    return (this.x = t), (this.y = e), this;
                  },
                  setX: function (t) {
                    return (this.x = t), this;
                  },
                  setY: function (t) {
                    return (this.y = t), this;
                  },
                  setFromPoint: function (t) {
                    return (this.x = t.x), (this.y = t.y), this;
                  },
                  swap: function (t) {
                    var e = this.x,
                      i = this.y;
                    (this.x = t.x), (this.y = t.y), (t.x = e), (t.y = i);
                  },
                  clone: function () {
                    return new e(this.x, this.y);
                  },
                });
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {});
            function i(t) {
              (this.status = t), (this.points = []);
            }
            e.Intersection
              ? e.warn("fabric.Intersection is already defined")
              : ((e.Intersection = i),
                (e.Intersection.prototype = {
                  constructor: i,
                  appendPoint: function (t) {
                    return this.points.push(t), this;
                  },
                  appendPoints: function (t) {
                    return (this.points = this.points.concat(t)), this;
                  },
                }),
                (e.Intersection.intersectLineLine = function (t, n, r, o) {
                  var s,
                    a = (o.x - r.x) * (t.y - r.y) - (o.y - r.y) * (t.x - r.x),
                    h = (n.x - t.x) * (t.y - r.y) - (n.y - t.y) * (t.x - r.x);
                  return (
                    0 !=
                    (o = (o.y - r.y) * (n.x - t.x) - (o.x - r.x) * (n.y - t.y))
                      ? ((r = h / o),
                        0 <= (o = a / o) && o <= 1 && 0 <= r && r <= 1
                          ? (s = new i("Intersection")).appendPoint(
                              new e.Point(
                                t.x + o * (n.x - t.x),
                                t.y + o * (n.y - t.y)
                              )
                            )
                          : (s = new i()))
                      : (s = new i(
                          0 == a || 0 == h ? "Coincident" : "Parallel"
                        )),
                    s
                  );
                }),
                (e.Intersection.intersectLinePolygon = function (t, e, n) {
                  for (var r, o, s = new i(), a = n.length, h = 0; h < a; h++)
                    (r = n[h]),
                      (o = n[(h + 1) % a]),
                      (o = i.intersectLineLine(t, e, r, o)),
                      s.appendPoints(o.points);
                  return 0 < s.points.length && (s.status = "Intersection"), s;
                }),
                (e.Intersection.intersectPolygonPolygon = function (t, e) {
                  for (var n = new i(), r = t.length, o = 0; o < r; o++) {
                    var s = t[o],
                      a = t[(o + 1) % r];
                    (a = i.intersectLinePolygon(s, a, e)),
                      n.appendPoints(a.points);
                  }
                  return 0 < n.points.length && (n.status = "Intersection"), n;
                }),
                (e.Intersection.intersectPolygonRectangle = function (t, n, r) {
                  var o = n.min(r),
                    s = n.max(r),
                    a = new e.Point(s.x, o.y);
                  return (
                    (n = new e.Point(o.x, s.y)),
                    (r = i.intersectLinePolygon(o, a, t)),
                    (a = i.intersectLinePolygon(a, s, t)),
                    (s = i.intersectLinePolygon(s, n, t)),
                    (o = i.intersectLinePolygon(n, o, t)),
                    (t = new i()).appendPoints(r.points),
                    t.appendPoints(a.points),
                    t.appendPoints(s.points),
                    t.appendPoints(o.points),
                    0 < t.points.length && (t.status = "Intersection"),
                    t
                  );
                }));
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {});
            function i(t) {
              t ? this._tryParsingColor(t) : this.setSource([0, 0, 0, 1]);
            }
            function n(t, e, i) {
              return (
                i < 0 && (i += 1),
                1 < i && --i,
                i < 1 / 6
                  ? t + 6 * (e - t) * i
                  : i < 0.5
                  ? e
                  : i < 2 / 3
                  ? t + (e - t) * (2 / 3 - i) * 6
                  : t
              );
            }
            e.Color
              ? e.warn("fabric.Color is already defined.")
              : ((e.Color = i),
                (e.Color.prototype = {
                  _tryParsingColor: function (t) {
                    var e;
                    (e = (e =
                      (e =
                        (e =
                          (e =
                            "transparent" ===
                            (t = t in i.colorNameMap ? i.colorNameMap[t] : t)
                              ? [255, 255, 255, 0]
                              : e) || i.sourceFromHex(t)) ||
                        i.sourceFromRgb(t)) || i.sourceFromHsl(t)) || [
                      0, 0, 0, 1,
                    ]) && this.setSource(e);
                  },
                  _rgbToHsl: function (t, i, n) {
                    var r,
                      o = e.util.array.max([
                        (t /= 255),
                        (i /= 255),
                        (n /= 255),
                      ]),
                      s = e.util.array.min([t, i, n]),
                      a = (o + s) / 2;
                    if (o === s) r = l = 0;
                    else {
                      var h = o - s,
                        l = 0.5 < a ? h / (2 - o - s) : h / (o + s);
                      switch (o) {
                        case t:
                          r = (i - n) / h + (i < n ? 6 : 0);
                          break;
                        case i:
                          r = (n - t) / h + 2;
                          break;
                        case n:
                          r = (t - i) / h + 4;
                      }
                      r /= 6;
                    }
                    return [
                      Math.round(360 * r),
                      Math.round(100 * l),
                      Math.round(100 * a),
                    ];
                  },
                  getSource: function () {
                    return this._source;
                  },
                  setSource: function (t) {
                    this._source = t;
                  },
                  toRgb: function () {
                    var t = this.getSource();
                    return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")";
                  },
                  toRgba: function () {
                    var t = this.getSource();
                    return (
                      "rgba(" +
                      t[0] +
                      "," +
                      t[1] +
                      "," +
                      t[2] +
                      "," +
                      t[3] +
                      ")"
                    );
                  },
                  toHsl: function () {
                    var t = this.getSource();
                    return (
                      "hsl(" +
                      (t = this._rgbToHsl(t[0], t[1], t[2]))[0] +
                      "," +
                      t[1] +
                      "%," +
                      t[2] +
                      "%)"
                    );
                  },
                  toHsla: function () {
                    var t = this.getSource(),
                      e = this._rgbToHsl(t[0], t[1], t[2]);
                    return (
                      "hsla(" +
                      e[0] +
                      "," +
                      e[1] +
                      "%," +
                      e[2] +
                      "%," +
                      t[3] +
                      ")"
                    );
                  },
                  toHex: function () {
                    var t,
                      e = this.getSource(),
                      i = e[0].toString(16);
                    return (
                      (i = 1 === i.length ? "0" + i : i),
                      (t = 1 === (t = e[1].toString(16)).length ? "0" + t : t),
                      (e = 1 === (e = e[2].toString(16)).length ? "0" + e : e),
                      i.toUpperCase() + t.toUpperCase() + e.toUpperCase()
                    );
                  },
                  toHexa: function () {
                    var t = this.getSource();
                    return (
                      (t =
                        1 ===
                        (t = (t = Math.round(255 * t[3])).toString(16)).length
                          ? "0" + t
                          : t),
                      this.toHex() + t.toUpperCase()
                    );
                  },
                  getAlpha: function () {
                    return this.getSource()[3];
                  },
                  setAlpha: function (t) {
                    var e = this.getSource();
                    return (e[3] = t), this.setSource(e), this;
                  },
                  toGrayscale: function () {
                    var t = this.getSource(),
                      e = parseInt(
                        (0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2]).toFixed(0),
                        10
                      );
                    return (t = t[3]), this.setSource([e, e, e, t]), this;
                  },
                  toBlackWhite: function (t) {
                    var e = (
                        0.3 * (i = this.getSource())[0] +
                        0.59 * i[1] +
                        0.11 * i[2]
                      ).toFixed(0),
                      i = i[3];
                    return (
                      (t = t || 127),
                      (e = Number(e) < Number(t) ? 0 : 255),
                      this.setSource([e, e, e, i]),
                      this
                    );
                  },
                  overlayWith: function (t) {
                    t instanceof i || (t = new i(t));
                    for (
                      var e = [],
                        n = this.getAlpha(),
                        r = this.getSource(),
                        o = t.getSource(),
                        s = 0;
                      s < 3;
                      s++
                    )
                      e.push(Math.round(0.5 * r[s] + 0.5 * o[s]));
                    return (e[3] = n), this.setSource(e), this;
                  },
                }),
                (e.Color.reRGBa =
                  /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i),
                (e.Color.reHSLa =
                  /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i),
                (e.Color.reHex =
                  /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i),
                (e.Color.colorNameMap = {
                  aliceblue: "#F0F8FF",
                  antiquewhite: "#FAEBD7",
                  aqua: "#00FFFF",
                  aquamarine: "#7FFFD4",
                  azure: "#F0FFFF",
                  beige: "#F5F5DC",
                  bisque: "#FFE4C4",
                  black: "#000000",
                  blanchedalmond: "#FFEBCD",
                  blue: "#0000FF",
                  blueviolet: "#8A2BE2",
                  brown: "#A52A2A",
                  burlywood: "#DEB887",
                  cadetblue: "#5F9EA0",
                  chartreuse: "#7FFF00",
                  chocolate: "#D2691E",
                  coral: "#FF7F50",
                  cornflowerblue: "#6495ED",
                  cornsilk: "#FFF8DC",
                  crimson: "#DC143C",
                  cyan: "#00FFFF",
                  darkblue: "#00008B",
                  darkcyan: "#008B8B",
                  darkgoldenrod: "#B8860B",
                  darkgray: "#A9A9A9",
                  darkgrey: "#A9A9A9",
                  darkgreen: "#006400",
                  darkkhaki: "#BDB76B",
                  darkmagenta: "#8B008B",
                  darkolivegreen: "#556B2F",
                  darkorange: "#FF8C00",
                  darkorchid: "#9932CC",
                  darkred: "#8B0000",
                  darksalmon: "#E9967A",
                  darkseagreen: "#8FBC8F",
                  darkslateblue: "#483D8B",
                  darkslategray: "#2F4F4F",
                  darkslategrey: "#2F4F4F",
                  darkturquoise: "#00CED1",
                  darkviolet: "#9400D3",
                  deeppink: "#FF1493",
                  deepskyblue: "#00BFFF",
                  dimgray: "#696969",
                  dimgrey: "#696969",
                  dodgerblue: "#1E90FF",
                  firebrick: "#B22222",
                  floralwhite: "#FFFAF0",
                  forestgreen: "#228B22",
                  fuchsia: "#FF00FF",
                  gainsboro: "#DCDCDC",
                  ghostwhite: "#F8F8FF",
                  gold: "#FFD700",
                  goldenrod: "#DAA520",
                  gray: "#808080",
                  grey: "#808080",
                  green: "#008000",
                  greenyellow: "#ADFF2F",
                  honeydew: "#F0FFF0",
                  hotpink: "#FF69B4",
                  indianred: "#CD5C5C",
                  indigo: "#4B0082",
                  ivory: "#FFFFF0",
                  khaki: "#F0E68C",
                  lavender: "#E6E6FA",
                  lavenderblush: "#FFF0F5",
                  lawngreen: "#7CFC00",
                  lemonchiffon: "#FFFACD",
                  lightblue: "#ADD8E6",
                  lightcoral: "#F08080",
                  lightcyan: "#E0FFFF",
                  lightgoldenrodyellow: "#FAFAD2",
                  lightgray: "#D3D3D3",
                  lightgrey: "#D3D3D3",
                  lightgreen: "#90EE90",
                  lightpink: "#FFB6C1",
                  lightsalmon: "#FFA07A",
                  lightseagreen: "#20B2AA",
                  lightskyblue: "#87CEFA",
                  lightslategray: "#778899",
                  lightslategrey: "#778899",
                  lightsteelblue: "#B0C4DE",
                  lightyellow: "#FFFFE0",
                  lime: "#00FF00",
                  limegreen: "#32CD32",
                  linen: "#FAF0E6",
                  magenta: "#FF00FF",
                  maroon: "#800000",
                  mediumaquamarine: "#66CDAA",
                  mediumblue: "#0000CD",
                  mediumorchid: "#BA55D3",
                  mediumpurple: "#9370DB",
                  mediumseagreen: "#3CB371",
                  mediumslateblue: "#7B68EE",
                  mediumspringgreen: "#00FA9A",
                  mediumturquoise: "#48D1CC",
                  mediumvioletred: "#C71585",
                  midnightblue: "#191970",
                  mintcream: "#F5FFFA",
                  mistyrose: "#FFE4E1",
                  moccasin: "#FFE4B5",
                  navajowhite: "#FFDEAD",
                  navy: "#000080",
                  oldlace: "#FDF5E6",
                  olive: "#808000",
                  olivedrab: "#6B8E23",
                  orange: "#FFA500",
                  orangered: "#FF4500",
                  orchid: "#DA70D6",
                  palegoldenrod: "#EEE8AA",
                  palegreen: "#98FB98",
                  paleturquoise: "#AFEEEE",
                  palevioletred: "#DB7093",
                  papayawhip: "#FFEFD5",
                  peachpuff: "#FFDAB9",
                  peru: "#CD853F",
                  pink: "#FFC0CB",
                  plum: "#DDA0DD",
                  powderblue: "#B0E0E6",
                  purple: "#800080",
                  rebeccapurple: "#663399",
                  red: "#FF0000",
                  rosybrown: "#BC8F8F",
                  royalblue: "#4169E1",
                  saddlebrown: "#8B4513",
                  salmon: "#FA8072",
                  sandybrown: "#F4A460",
                  seagreen: "#2E8B57",
                  seashell: "#FFF5EE",
                  sienna: "#A0522D",
                  silver: "#C0C0C0",
                  skyblue: "#87CEEB",
                  slateblue: "#6A5ACD",
                  slategray: "#708090",
                  slategrey: "#708090",
                  snow: "#FFFAFA",
                  springgreen: "#00FF7F",
                  steelblue: "#4682B4",
                  tan: "#D2B48C",
                  teal: "#008080",
                  thistle: "#D8BFD8",
                  tomato: "#FF6347",
                  turquoise: "#40E0D0",
                  violet: "#EE82EE",
                  wheat: "#F5DEB3",
                  white: "#FFFFFF",
                  whitesmoke: "#F5F5F5",
                  yellow: "#FFFF00",
                  yellowgreen: "#9ACD32",
                }),
                (e.Color.fromRgb = function (t) {
                  return i.fromSource(i.sourceFromRgb(t));
                }),
                (e.Color.sourceFromRgb = function (t) {
                  var e = t.match(i.reRGBa);
                  if (e) {
                    var n =
                        (parseInt(e[1], 10) / (/%$/.test(e[1]) ? 100 : 1)) *
                        (/%$/.test(e[1]) ? 255 : 1),
                      r =
                        (parseInt(e[2], 10) / (/%$/.test(e[2]) ? 100 : 1)) *
                        (/%$/.test(e[2]) ? 255 : 1);
                    return (
                      (t =
                        (parseInt(e[3], 10) / (/%$/.test(e[3]) ? 100 : 1)) *
                        (/%$/.test(e[3]) ? 255 : 1)),
                      [
                        parseInt(n, 10),
                        parseInt(r, 10),
                        parseInt(t, 10),
                        e[4] ? parseFloat(e[4]) : 1,
                      ]
                    );
                  }
                }),
                (e.Color.fromRgba = i.fromRgb),
                (e.Color.fromHsl = function (t) {
                  return i.fromSource(i.sourceFromHsl(t));
                }),
                (e.Color.sourceFromHsl = function (t) {
                  var e = t.match(i.reHSLa);
                  if (e) {
                    var r,
                      o,
                      s,
                      a = (((parseFloat(e[1]) % 360) + 360) % 360) / 360,
                      h = parseFloat(e[2]) / (/%$/.test(e[2]) ? 100 : 1);
                    return (
                      (t = parseFloat(e[3]) / (/%$/.test(e[3]) ? 100 : 1)),
                      0 == h
                        ? (r = o = s = t)
                        : ((r = n(
                            (h =
                              2 * t -
                              (t = t <= 0.5 ? t * (1 + h) : t + h - t * h)),
                            t,
                            a + 1 / 3
                          )),
                          (o = n(h, t, a)),
                          (s = n(h, t, a - 1 / 3))),
                      [
                        Math.round(255 * r),
                        Math.round(255 * o),
                        Math.round(255 * s),
                        e[4] ? parseFloat(e[4]) : 1,
                      ]
                    );
                  }
                }),
                (e.Color.fromHsla = i.fromHsl),
                (e.Color.fromHex = function (t) {
                  return i.fromSource(i.sourceFromHex(t));
                }),
                (e.Color.sourceFromHex = function (t) {
                  if (t.match(i.reHex)) {
                    var e =
                        3 === (s = t.slice(t.indexOf("#") + 1)).length ||
                        4 === s.length,
                      n = 8 === s.length || 4 === s.length,
                      r = e ? s.charAt(0) + s.charAt(0) : s.substring(0, 2),
                      o = e ? s.charAt(1) + s.charAt(1) : s.substring(2, 4),
                      s =
                        ((t = e
                          ? s.charAt(2) + s.charAt(2)
                          : s.substring(4, 6)),
                        n
                          ? e
                            ? s.charAt(3) + s.charAt(3)
                            : s.substring(6, 8)
                          : "FF");
                    return [
                      parseInt(r, 16),
                      parseInt(o, 16),
                      parseInt(t, 16),
                      parseFloat((parseInt(s, 16) / 255).toFixed(2)),
                    ];
                  }
                }),
                (e.Color.fromSource = function (t) {
                  var e = new i();
                  return e.setSource(t), e;
                }));
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = ["e", "se", "s", "sw", "w", "nw", "n", "ne", "e"],
              n = ["ns", "nesw", "ew", "nwse"],
              r = {},
              o = "left",
              s = "top",
              a = "right",
              h = "bottom",
              l = "center",
              c = { top: h, bottom: s, left: a, right: o, center: l },
              u = e.util.radiansToDegrees,
              f =
                Math.sign ||
                function (t) {
                  return (0 < t) - (t < 0) || +t;
                };
            function d(t, e) {
              return (
                (e = t.angle + u(Math.atan2(e.y, e.x)) + 360),
                Math.round((e % 360) / 45)
              );
            }
            function g(t, i) {
              var n = i.transform.target,
                r = n.canvas,
                o = e.util.object.clone(i);
              (o.target = n), r && r.fire("object:" + t, o), n.fire(t, i);
            }
            function p(t, e) {
              return (
                (t = t[(e = e.canvas).uniScaleKey]),
                (e.uniformScaling && !t) || (!e.uniformScaling && t)
              );
            }
            function m(t) {
              return t.originX === l && t.originY === l;
            }
            function v(t, e, i) {
              var n = t.lockScalingX;
              return (
                (t = t.lockScalingY),
                !(
                  (!n || !t) &&
                  (e || (!n && !t) || !i) &&
                  (!n || "x" !== e) &&
                  (!t || "y" !== e)
                )
              );
            }
            function y(t, e, i, n) {
              return { e: t, transform: e, pointer: { x: i, y: n } };
            }
            function _(t) {
              return function (e, i, n, r) {
                var o = i.target,
                  s = o.getCenterPoint();
                return (
                  (s = o.translateToOriginPoint(s, i.originX, i.originY)),
                  (r = t(e, i, n, r)),
                  o.setPositionByOrigin(s, i.originX, i.originY),
                  r
                );
              };
            }
            function x(t, e) {
              return function (i, n, r, o) {
                var s = e(i, n, r, o);
                return s && g(t, y(i, n, r, o)), s;
              };
            }
            function b(t, i, n, r, o) {
              var s = t.target,
                a = s.controls[t.corner];
              return (
                (t = s.canvas.getZoom()),
                (t = s.padding / t),
                (n = s.toLocalPoint(new e.Point(r, o), i, n)).x >= t &&
                  (n.x -= t),
                n.x <= -t && (n.x += t),
                n.y >= t && (n.y -= t),
                n.y <= t && (n.y += t),
                (n.x -= a.offsetX),
                (n.y -= a.offsetY),
                n
              );
            }
            function C(t) {
              return t.flipX !== t.flipY;
            }
            function S(t, e, i, n, r) {
              0 !== t[e] &&
                ((n = (r / t._getTransformedDimensions()[n]) * t[i]),
                t.set(i, n));
            }
            function w(t, e, i, n) {
              var r,
                l = e.target,
                c = l._getTransformedDimensions(0, l.skewY);
              return (
                (i = b(e, e.originX, e.originY, i, n)),
                (n = Math.abs(2 * i.x) - c.x),
                (i = l.skewX),
                n < 2
                  ? (r = 0)
                  : ((r = u(Math.atan2(n / l.scaleX, c.y / l.scaleY))),
                    e.originX === o && e.originY === h && (r = -r),
                    e.originX === a && e.originY === s && (r = -r),
                    C(l) && (r = -r)),
                (e = i !== r) &&
                  ((i = l._getTransformedDimensions().y),
                  l.set("skewX", r),
                  S(l, "skewY", "scaleY", "y", i)),
                e
              );
            }
            function T(t, e, i, n) {
              var r,
                l = e.target,
                c = l._getTransformedDimensions(l.skewX, 0);
              return (
                (i = b(e, e.originX, e.originY, i, n)),
                (n = Math.abs(2 * i.y) - c.y),
                (i = l.skewY),
                n < 2
                  ? (r = 0)
                  : ((r = u(Math.atan2(n / l.scaleY, c.x / l.scaleX))),
                    e.originX === o && e.originY === h && (r = -r),
                    e.originX === a && e.originY === s && (r = -r),
                    C(l) && (r = -r)),
                (e = i !== r) &&
                  ((i = l._getTransformedDimensions().x),
                  l.set("skewY", r),
                  S(l, "skewX", "scaleX", "x", i)),
                e
              );
            }
            function O(t, e, i, n, r) {
              var o = e.target,
                s = o.lockScalingX,
                a = o.lockScalingY,
                h = (r = r || {}).by,
                l = p(t, o);
              if (((r = v(o, h, l)), (t = e.gestureScale), r)) return !1;
              if (t) (u = e.scaleX * t), (d = e.scaleY * t);
              else {
                if (
                  ((r = b(e, e.originX, e.originY, i, n)),
                  (t = "y" !== h ? f(r.x) : 1),
                  (g = "x" !== h ? f(r.y) : 1),
                  e.signX || (e.signX = t),
                  e.signY || (e.signY = g),
                  o.lockScalingFlip && (e.signX !== t || e.signY !== g))
                )
                  return !1;
                var u, d;
                (i = o._getTransformedDimensions()),
                  (d =
                    l && !h
                      ? ((n = Math.abs(r.x) + Math.abs(r.y)),
                        (l = e.original),
                        (n /=
                          Math.abs((i.x * l.scaleX) / o.scaleX) +
                          Math.abs((i.y * l.scaleY) / o.scaleY)),
                        (u = l.scaleX * n),
                        l.scaleY * n)
                      : ((u = Math.abs((r.x * o.scaleX) / i.x)),
                        Math.abs((r.y * o.scaleY) / i.y))),
                  m(e) && ((u *= 2), (d *= 2)),
                  e.signX !== t &&
                    "y" !== h &&
                    ((e.originX = c[e.originX]), (u *= -1), (e.signX = t)),
                  e.signY !== g &&
                    "x" !== h &&
                    ((e.originY = c[e.originY]), (d *= -1), (e.signY = g));
              }
              e = o.scaleX;
              var g = o.scaleY;
              return (
                h
                  ? ("x" === h && o.set("scaleX", u),
                    "y" === h && o.set("scaleY", d))
                  : (s || o.set("scaleX", u), a || o.set("scaleY", d)),
                e !== o.scaleX || g !== o.scaleY
              );
            }
            (r.scaleCursorStyleHandler = function (t, e, n) {
              var r = p(t, n);
              return (
                (t = ""),
                0 !== e.x && 0 === e.y
                  ? (t = "x")
                  : 0 === e.x && 0 !== e.y && (t = "y"),
                v(n, t, r) ? "not-allowed" : ((e = d(n, e)), i[e] + "-resize")
              );
            }),
              (r.skewCursorStyleHandler = function (t, e, i) {
                return (0 !== e.x && i.lockSkewingY) ||
                  (0 !== e.y && i.lockSkewingX)
                  ? "not-allowed"
                  : ((e = d(i, e) % 4), n[e] + "-resize");
              }),
              (r.scaleSkewCursorStyleHandler = function (t, e, i) {
                return t[i.canvas.altActionKey]
                  ? r.skewCursorStyleHandler(t, e, i)
                  : r.scaleCursorStyleHandler(t, e, i);
              }),
              (r.rotationWithSnapping = x(
                "rotating",
                _(function (t, e, i, n) {
                  var r = e,
                    o = r.target,
                    s = o.translateToOriginPoint(
                      o.getCenterPoint(),
                      r.originX,
                      r.originY
                    );
                  return (
                    !o.lockRotation &&
                    ((e = Math.atan2(r.ey - s.y, r.ex - s.x)),
                    (n = Math.atan2(n - s.y, i - s.x)),
                    (i = u(n - e + r.theta)),
                    0 < o.snapAngle &&
                      ((n = o.snapAngle),
                      (e = o.snapThreshold || n),
                      (r = Math.ceil(i / n) * n),
                      (n = Math.floor(i / n) * n),
                      Math.abs(i - n) < e
                        ? (i = n)
                        : Math.abs(i - r) < e && (i = r)),
                    i < 0 && (i = 360 + i),
                    (s = o.angle !== (i %= 360)),
                    (o.angle = i),
                    s)
                  );
                })
              )),
              (r.scalingEqually = x(
                "scaling",
                _(function (t, e, i, n) {
                  return O(t, e, i, n);
                })
              )),
              (r.scalingX = x(
                "scaling",
                _(function (t, e, i, n) {
                  return O(t, e, i, n, { by: "x" });
                })
              )),
              (r.scalingY = x(
                "scaling",
                _(function (t, e, i, n) {
                  return O(t, e, i, n, { by: "y" });
                })
              )),
              (r.scalingYOrSkewingX = function (t, e, i, n) {
                return t[e.target.canvas.altActionKey]
                  ? r.skewHandlerX(t, e, i, n)
                  : r.scalingY(t, e, i, n);
              }),
              (r.scalingXOrSkewingY = function (t, e, i, n) {
                return t[e.target.canvas.altActionKey]
                  ? r.skewHandlerY(t, e, i, n)
                  : r.scalingX(t, e, i, n);
              }),
              (r.changeWidth = x(
                "resizing",
                _(function (t, e, i, n) {
                  var r = e.target,
                    o = b(e, e.originX, e.originY, i, n);
                  return (
                    (i = r.strokeWidth / (r.strokeUniform ? r.scaleX : 1)),
                    (n = m(e) ? 2 : 1),
                    (e = r.width),
                    (i = Math.abs((o.x * n) / r.scaleX) - i),
                    r.set("width", Math.max(i, 0)),
                    e !== i
                  );
                })
              )),
              (r.skewHandlerX = function (t, e, i, n) {
                var r,
                  h = e.target,
                  c = h.skewX,
                  u = e.originY;
                return (
                  !h.lockSkewingX &&
                  (0 === c
                    ? (r = 0 < b(e, l, l, i, n).x ? o : a)
                    : (0 < c && (r = u === s ? o : a),
                      c < 0 && (r = u === s ? a : o),
                      C(h) && (r = r === o ? a : o)),
                  (e.originX = r),
                  x("skewing", _(w))(t, e, i, n))
                );
              }),
              (r.skewHandlerY = function (t, e, i, n) {
                var r,
                  a = e.target,
                  c = a.skewY,
                  u = e.originX;
                return (
                  !a.lockSkewingY &&
                  (0 === c
                    ? (r = 0 < b(e, l, l, i, n).y ? s : h)
                    : (0 < c && (r = u === o ? s : h),
                      c < 0 && (r = u === o ? h : s),
                      C(a) && (r = r === s ? h : s)),
                  (e.originY = r),
                  x("skewing", _(T))(t, e, i, n))
                );
              }),
              (r.dragHandler = function (t, e, i, n) {
                var r = e.target,
                  o = i - e.offsetX,
                  s = n - e.offsetY,
                  a = !r.get("lockMovementX") && r.left !== o,
                  h = !r.get("lockMovementY") && r.top !== s;
                return (
                  a && r.set("left", o),
                  h && r.set("top", s),
                  (a || h) && g("moving", y(t, e, i, n)),
                  a || h
                );
              }),
              (r.scaleOrSkewActionName = function (t, e, i) {
                return (
                  (i = t[i.canvas.altActionKey]),
                  0 === e.x
                    ? i
                      ? "skewX"
                      : "scaleY"
                    : 0 === e.y
                    ? i
                      ? "skewY"
                      : "scaleX"
                    : void 0
                );
              }),
              (r.rotationStyleHandler = function (t, e, i) {
                return i.lockRotation ? "not-allowed" : e.cursorStyle;
              }),
              (r.fireEvent = g),
              (r.wrapWithFixedAnchor = _),
              (r.wrapWithFireEvent = x),
              (r.getLocalPoint = b),
              (e.controlsUtils = r);
          })(e),
          (function (t) {
            var e = (t = t.fabric || (t.fabric = {})).util.degreesToRadians;
            ((t = t.controlsUtils).renderCircleControl = function (
              t,
              e,
              i,
              n,
              r
            ) {
              n = n || {};
              var o,
                s = this.sizeX || n.cornerSize || r.cornerSize,
                a = this.sizeY || n.cornerSize || r.cornerSize,
                h = (u = (void 0 !== n.transparentCorners ? n : r)
                  .transparentCorners)
                  ? "stroke"
                  : "fill",
                l = !u && (n.cornerStrokeColor || r.cornerStrokeColor),
                c = e,
                u = i;
              t.save(),
                (t.fillStyle = n.cornerColor || r.cornerColor),
                (t.strokeStyle = n.cornerStrokeColor || r.cornerStrokeColor),
                a < s
                  ? (t.scale(1, a / (o = s)), (u = (i * s) / a))
                  : s < a
                  ? (t.scale(s / (o = a), 1), (c = (e * a) / s))
                  : (o = s),
                (t.lineWidth = 1),
                t.beginPath(),
                t.arc(c, u, o / 2, 0, 2 * Math.PI, !1),
                t[h](),
                l && t.stroke(),
                t.restore();
            }),
              (t.renderSquareControl = function (t, i, n, r, o) {
                r = r || {};
                var s = this.sizeX || r.cornerSize || o.cornerSize,
                  a = this.sizeY || r.cornerSize || o.cornerSize,
                  h = (u = (void 0 !== r.transparentCorners ? r : o)
                    .transparentCorners)
                    ? "stroke"
                    : "fill",
                  l = !u && (r.cornerStrokeColor || o.cornerStrokeColor),
                  c = s / 2,
                  u = a / 2;
                t.save(),
                  (t.fillStyle = r.cornerColor || o.cornerColor),
                  (t.strokeStyle = r.cornerStrokeColor || o.cornerStrokeColor),
                  (t.lineWidth = 1),
                  t.translate(i, n),
                  t.rotate(e(o.angle)),
                  t[h + "Rect"](-c, -u, s, a),
                  l && t.strokeRect(-c, -u, s, a),
                  t.restore();
              });
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {});
            (e.Control = function (t) {
              for (var e in t) this[e] = t[e];
            }),
              (e.Control.prototype = {
                visible: !0,
                actionName: "scale",
                angle: 0,
                x: 0,
                y: 0,
                offsetX: 0,
                offsetY: 0,
                sizeX: null,
                sizeY: null,
                touchSizeX: null,
                touchSizeY: null,
                cursorStyle: "crosshair",
                withConnection: !1,
                actionHandler: function () {},
                mouseDownHandler: function () {},
                mouseUpHandler: function () {},
                getActionHandler: function () {
                  return this.actionHandler;
                },
                getMouseDownHandler: function () {
                  return this.mouseDownHandler;
                },
                getMouseUpHandler: function () {
                  return this.mouseUpHandler;
                },
                cursorStyleHandler: function (t, e) {
                  return e.cursorStyle;
                },
                getActionName: function (t, e) {
                  return e.actionName;
                },
                getVisibility: function (t, e) {
                  return (t = t._controlsVisibility) && void 0 !== t[e]
                    ? t[e]
                    : this.visible;
                },
                setVisibility: function (t) {
                  this.visible = t;
                },
                positionHandler: function (t, i) {
                  return e.util.transformPoint(
                    {
                      x: this.x * t.x + this.offsetX,
                      y: this.y * t.y + this.offsetY,
                    },
                    i
                  );
                },
                calcCornerCoords: function (t, i, n, r, o) {
                  var s,
                    a,
                    h,
                    l,
                    c,
                    u,
                    f = o ? this.touchSizeX : this.sizeX;
                  return (
                    (o = o ? this.touchSizeY : this.sizeY),
                    f && o && f !== o
                      ? ((h = Math.atan2(o, f)),
                        (c = Math.sqrt(f * f + o * o) / 2),
                        (u = h - e.util.degreesToRadians(t)),
                        (l = Math.PI / 2 - h - e.util.degreesToRadians(t)),
                        (s = c * e.util.cos(u)),
                        (a = c * e.util.sin(u)),
                        (h = c * e.util.cos(l)),
                        (l = c * e.util.sin(l)))
                      : ((c = 0.7071067812 * (f && o ? f : i)),
                        (u = e.util.degreesToRadians(45 - t)),
                        (s = h = c * e.util.cos(u)),
                        (a = l = c * e.util.sin(u))),
                    {
                      tl: { x: n - l, y: r - h },
                      tr: { x: n + s, y: r - a },
                      bl: { x: n - s, y: r + a },
                      br: { x: n + l, y: r + h },
                    }
                  );
                },
                render: function (t, i, n, r, o) {
                  ("circle" === ((r = r || {}).cornerStyle || o.cornerStyle)
                    ? e.controlsUtils.renderCircleControl
                    : e.controlsUtils.renderSquareControl
                  ).call(this, t, i, n, r, o);
                },
              });
          })(e),
          (s = _.util.object.clone),
          (_.Gradient = _.util.createClass({
            offsetX: 0,
            offsetY: 0,
            gradientTransform: null,
            gradientUnits: "pixels",
            type: "linear",
            initialize: function (t) {
              (t = t || {}).coords || (t.coords = {});
              var e,
                i = this;
              Object.keys(t).forEach(function (e) {
                i[e] = t[e];
              }),
                this.id
                  ? (this.id += "_" + _.Object.__uid++)
                  : (this.id = _.Object.__uid++),
                (e = {
                  x1: t.coords.x1 || 0,
                  y1: t.coords.y1 || 0,
                  x2: t.coords.x2 || 0,
                  y2: t.coords.y2 || 0,
                }),
                "radial" === this.type &&
                  ((e.r1 = t.coords.r1 || 0), (e.r2 = t.coords.r2 || 0)),
                (this.coords = e),
                (this.colorStops = t.colorStops.slice());
            },
            addColorStop: function (t) {
              for (var e in t) {
                var i = new _.Color(t[e]);
                this.colorStops.push({
                  offset: parseFloat(e),
                  color: i.toRgb(),
                  opacity: i.getAlpha(),
                });
              }
              return this;
            },
            toObject: function (t) {
              var e = {
                type: this.type,
                coords: this.coords,
                colorStops: this.colorStops,
                offsetX: this.offsetX,
                offsetY: this.offsetY,
                gradientUnits: this.gradientUnits,
                gradientTransform:
                  this.gradientTransform && this.gradientTransform.concat(),
              };
              return _.util.populateWithProperties(this, e, t), e;
            },
            toSVG: function (t, e) {
              var i,
                n = s(this.coords, !0),
                r = ((e = e || {}), s(this.colorStops, !0)),
                o = n.r1 > n.r2,
                a = (this.gradientTransform || _.iMatrix).concat(),
                h = -this.offsetX,
                l = -this.offsetY,
                c = !!e.additionalTransform,
                u =
                  "pixels" === this.gradientUnits
                    ? "userSpaceOnUse"
                    : "objectBoundingBox";
              if (
                (r.sort(function (t, e) {
                  return t.offset - e.offset;
                }),
                "objectBoundingBox" == u
                  ? ((h /= t.width), (l /= t.height))
                  : ((h += t.width / 2), (l += t.height / 2)),
                "path" === t.type &&
                  "percentage" !== this.gradientUnits &&
                  ((h -= t.pathOffset.x), (l -= t.pathOffset.y)),
                (a[4] -= h),
                (a[5] -= l),
                (u = 'id="SVGID_' + this.id + '" gradientUnits="' + u + '"'),
                (u +=
                  ' gradientTransform="' +
                  (c ? e.additionalTransform + " " : "") +
                  _.util.matrixToSVG(a) +
                  '" '),
                "linear" === this.type
                  ? (i = [
                      "<linearGradient ",
                      u,
                      ' x1="',
                      n.x1,
                      '" y1="',
                      n.y1,
                      '" x2="',
                      n.x2,
                      '" y2="',
                      n.y2,
                      '">\n',
                    ])
                  : "radial" === this.type &&
                    (i = [
                      "<radialGradient ",
                      u,
                      ' cx="',
                      o ? n.x1 : n.x2,
                      '" cy="',
                      o ? n.y1 : n.y2,
                      '" r="',
                      o ? n.r1 : n.r2,
                      '" fx="',
                      o ? n.x2 : n.x1,
                      '" fy="',
                      o ? n.y2 : n.y1,
                      '">\n',
                    ]),
                "radial" === this.type)
              ) {
                if (o)
                  for (
                    (r = r.concat()).reverse(), d = 0, g = r.length;
                    d < g;
                    d++
                  )
                    r[d].offset = 1 - r[d].offset;
                if (0 < (o = Math.min(n.r1, n.r2)))
                  for (
                    var f = o / Math.max(n.r1, n.r2), d = 0, g = r.length;
                    d < g;
                    d++
                  )
                    r[d].offset += f * (1 - r[d].offset);
              }
              for (d = 0, g = r.length; d < g; d++) {
                var p = r[d];
                i.push(
                  "<stop ",
                  'offset="',
                  100 * p.offset + "%",
                  '" style="stop-color:',
                  p.color,
                  void 0 !== p.opacity ? ";stop-opacity: " + p.opacity : ";",
                  '"/>\n'
                );
              }
              return (
                i.push(
                  "linear" === this.type
                    ? "</linearGradient>\n"
                    : "</radialGradient>\n"
                ),
                i.join("")
              );
            },
            toLive: function (t) {
              var e,
                i,
                n,
                r = _.util.object.clone(this.coords);
              if (this.type) {
                for (
                  "linear" === this.type
                    ? (e = t.createLinearGradient(r.x1, r.y1, r.x2, r.y2))
                    : "radial" === this.type &&
                      (e = t.createRadialGradient(
                        r.x1,
                        r.y1,
                        r.r1,
                        r.x2,
                        r.y2,
                        r.r2
                      )),
                    i = 0,
                    n = this.colorStops.length;
                  i < n;
                  i++
                ) {
                  var o = this.colorStops[i].color,
                    s = this.colorStops[i].opacity,
                    a = this.colorStops[i].offset;
                  void 0 !== s && (o = new _.Color(o).setAlpha(s).toRgba()),
                    e.addColorStop(a, o);
                }
                return e;
              }
            },
          })),
          _.util.object.extend(_.Gradient, {
            fromElement: function (t, e, i, n) {
              var r =
                (r = parseFloat(i) / (/%$/.test(i) ? 100 : 1)) < 0
                  ? 0
                  : 1 < r
                  ? 1
                  : r;
              isNaN(r) && (r = 1);
              for (
                var o,
                  s,
                  a,
                  h,
                  l,
                  c,
                  u = t.getElementsByTagName("stop"),
                  f =
                    "userSpaceOnUse" === t.getAttribute("gradientUnits")
                      ? "pixels"
                      : "percentage",
                  d = t.getAttribute("gradientTransform") || "",
                  g = [],
                  p = 0,
                  m = 0,
                  v =
                    "linearGradient" === t.nodeName ||
                    "LINEARGRADIENT" === t.nodeName
                      ? ((o = "linear"),
                        {
                          x1: (i = t).getAttribute("x1") || 0,
                          y1: i.getAttribute("y1") || 0,
                          x2: i.getAttribute("x2") || "100%",
                          y2: i.getAttribute("y2") || 0,
                        })
                      : ((o = "radial"),
                        {
                          x1:
                            (v = t).getAttribute("fx") ||
                            v.getAttribute("cx") ||
                            "50%",
                          y1:
                            v.getAttribute("fy") ||
                            v.getAttribute("cy") ||
                            "50%",
                          r1: 0,
                          x2: v.getAttribute("cx") || "50%",
                          y2: v.getAttribute("cy") || "50%",
                          r2: v.getAttribute("r") || "50%",
                        }),
                  y = u.length;
                y--;

              )
                g.push(
                  (function (t, e) {
                    var i,
                      n,
                      r,
                      o = t.getAttribute("style"),
                      s = t.getAttribute("offset") || 0;
                    if (
                      ((s =
                        (s = parseFloat(s) / (/%$/.test(s) ? 100 : 1)) < 0
                          ? 0
                          : 1 < s
                          ? 1
                          : s),
                      o)
                    ) {
                      var a = o.split(/\s*;\s*/);
                      for (
                        "" === a[a.length - 1] && a.pop(), r = a.length;
                        r--;

                      ) {
                        var h = (l = a[r].split(/\s*:\s*/))[0].trim(),
                          l = l[1].trim();
                        "stop-color" === h
                          ? (i = l)
                          : "stop-opacity" === h && (n = l);
                      }
                    }
                    return (
                      (i = i || t.getAttribute("stop-color") || "rgb(0,0,0)"),
                      (n = n || t.getAttribute("stop-opacity")),
                      (t = (i = new _.Color(i)).getAlpha()),
                      (n = isNaN(parseFloat(n)) ? 1 : parseFloat(n)),
                      (n *= t * e),
                      { offset: s, color: i.toRgb(), opacity: n }
                    );
                  })(u[y], r)
                );
              return (
                (d = _.parseTransformAttribute(d)),
                (s = v),
                (a = n),
                (h = f),
                Object.keys(s).forEach(function (t) {
                  "Infinity" === (l = s[t])
                    ? (c = 1)
                    : "-Infinity" === l
                    ? (c = 0)
                    : ((c = parseFloat(s[t], 10)),
                      "string" == typeof l &&
                        /^(\d+\.\d+)%|(\d+)%$/.test(l) &&
                        ((c *= 0.01),
                        "pixels" === h &&
                          (("x1" !== t && "x2" !== t && "r2" !== t) ||
                            (c *= a.viewBoxWidth || a.width),
                          ("y1" !== t && "y2" !== t) ||
                            (c *= a.viewBoxHeight || a.height)))),
                    (s[t] = c);
                }),
                "pixels" == f && ((p = -e.left), (m = -e.top)),
                new _.Gradient({
                  id: t.getAttribute("id"),
                  type: o,
                  coords: v,
                  colorStops: g,
                  gradientUnits: f,
                  gradientTransform: d,
                  offsetX: p,
                  offsetY: m,
                })
              );
            },
          }),
          (o = _.util.toFixed),
          (_.Pattern = _.util.createClass({
            repeat: "repeat",
            offsetX: 0,
            offsetY: 0,
            crossOrigin: "",
            patternTransform: null,
            initialize: function (t, e) {
              var i;
              (t = t || {}),
                (this.id = _.Object.__uid++),
                this.setOptions(t),
                !t.source || (t.source && "string" != typeof t.source)
                  ? e && e(this)
                  : (((i = this).source = _.util.createImage()),
                    _.util.loadImage(
                      t.source,
                      function (t, n) {
                        (i.source = t), e && e(i, n);
                      },
                      null,
                      this.crossOrigin
                    ));
            },
            toObject: function (t) {
              var e,
                i = _.Object.NUM_FRACTION_DIGITS;
              return (
                "string" == typeof this.source.src
                  ? (e = this.source.src)
                  : "object" == typeof this.source &&
                    this.source.toDataURL &&
                    (e = this.source.toDataURL()),
                (i = {
                  type: "pattern",
                  source: e,
                  repeat: this.repeat,
                  crossOrigin: this.crossOrigin,
                  offsetX: o(this.offsetX, i),
                  offsetY: o(this.offsetY, i),
                  patternTransform: this.patternTransform
                    ? this.patternTransform.concat()
                    : null,
                }),
                _.util.populateWithProperties(this, i, t),
                i
              );
            },
            toSVG: function (t) {
              var e =
                  "function" == typeof this.source
                    ? this.source()
                    : this.source,
                i = e.width / t.width,
                n = e.height / t.height,
                r = this.offsetX / t.width,
                o = this.offsetY / t.height;
              return (
                (t = ""),
                ("repeat-x" !== this.repeat && "no-repeat" !== this.repeat) ||
                  ((n = 1), o && (n += Math.abs(o))),
                ("repeat-y" !== this.repeat && "no-repeat" !== this.repeat) ||
                  ((i = 1), r && (i += Math.abs(r))),
                e.src ? (t = e.src) : e.toDataURL && (t = e.toDataURL()),
                '<pattern id="SVGID_' +
                  this.id +
                  '" x="' +
                  r +
                  '" y="' +
                  o +
                  '" width="' +
                  i +
                  '" height="' +
                  n +
                  '">\n<image x="0" y="0" width="' +
                  e.width +
                  '" height="' +
                  e.height +
                  '" xlink:href="' +
                  t +
                  '"></image>\n</pattern>\n'
              );
            },
            setOptions: function (t) {
              for (var e in t) this[e] = t[e];
            },
            toLive: function (t) {
              var e = this.source;
              if (!e) return "";
              if (void 0 !== e.src) {
                if (!e.complete) return "";
                if (0 === e.naturalWidth || 0 === e.naturalHeight) return "";
              }
              return t.createPattern(e, this.repeat);
            },
          })),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.util.toFixed;
            e.Shadow
              ? e.warn("fabric.Shadow is already defined.")
              : ((e.Shadow = e.util.createClass({
                  color: "rgb(0,0,0)",
                  blur: 0,
                  offsetX: 0,
                  offsetY: 0,
                  affectStroke: !1,
                  includeDefaultValues: !0,
                  nonScaling: !1,
                  initialize: function (t) {
                    for (var i in (t =
                      "string" == typeof t ? this._parseShadow(t) : t))
                      this[i] = t[i];
                    this.id = e.Object.__uid++;
                  },
                  _parseShadow: function (t) {
                    var i = t.trim();
                    return (
                      (t = e.Shadow.reOffsetsAndBlur.exec(i) || []),
                      {
                        color: (
                          i.replace(e.Shadow.reOffsetsAndBlur, "") ||
                          "rgb(0,0,0)"
                        ).trim(),
                        offsetX: parseFloat(t[1], 10) || 0,
                        offsetY: parseFloat(t[2], 10) || 0,
                        blur: parseFloat(t[3], 10) || 0,
                      }
                    );
                  },
                  toString: function () {
                    return [
                      this.offsetX,
                      this.offsetY,
                      this.blur,
                      this.color,
                    ].join("px ");
                  },
                  toSVG: function (t) {
                    var n = 40,
                      r = 40,
                      o = e.Object.NUM_FRACTION_DIGITS,
                      s = e.util.rotateVector(
                        { x: this.offsetX, y: this.offsetY },
                        e.util.degreesToRadians(-t.angle)
                      ),
                      a = new e.Color(this.color);
                    return (
                      t.width &&
                        t.height &&
                        ((n =
                          100 * i((Math.abs(s.x) + this.blur) / t.width, o) +
                          20),
                        (r =
                          100 * i((Math.abs(s.y) + this.blur) / t.height, o) +
                          20)),
                      t.flipX && (s.x *= -1),
                      t.flipY && (s.y *= -1),
                      '<filter id="SVGID_' +
                        this.id +
                        '" y="-' +
                        r +
                        '%" height="' +
                        (100 + 2 * r) +
                        '%" x="-' +
                        n +
                        '%" width="' +
                        (100 + 2 * n) +
                        '%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="' +
                        i(this.blur ? this.blur / 2 : 0, o) +
                        '"></feGaussianBlur>\n\t<feOffset dx="' +
                        i(s.x, o) +
                        '" dy="' +
                        i(s.y, o) +
                        '" result="oBlur" ></feOffset>\n\t<feFlood flood-color="' +
                        a.toRgb() +
                        '" flood-opacity="' +
                        a.getAlpha() +
                        '"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n'
                    );
                  },
                  toObject: function () {
                    if (this.includeDefaultValues)
                      return {
                        color: this.color,
                        blur: this.blur,
                        offsetX: this.offsetX,
                        offsetY: this.offsetY,
                        affectStroke: this.affectStroke,
                        nonScaling: this.nonScaling,
                      };
                    var t = {},
                      i = e.Shadow.prototype;
                    return (
                      [
                        "color",
                        "blur",
                        "offsetX",
                        "offsetY",
                        "affectStroke",
                        "nonScaling",
                      ].forEach(function (e) {
                        this[e] !== i[e] && (t[e] = this[e]);
                      }, this),
                      t
                    );
                  },
                })),
                (e.Shadow.reOffsetsAndBlur =
                  /(?:\s|^)(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(-?\d+(?:\.\d*)?(?:px)?(?:\s?|$))?(\d+(?:\.\d*)?(?:px)?)?(?:\s?|$)(?:$|\s)/));
          })(e),
          (function () {
            var t, e, i, n, r, o, s, a, h;
            _.StaticCanvas
              ? _.warn("fabric.StaticCanvas is already defined.")
              : ((t = _.util.object.extend),
                (e = _.util.getElementOffset),
                (i = _.util.removeFromArray),
                (n = _.util.toFixed),
                (r = _.util.transformPoint),
                (o = _.util.invertTransform),
                (s = _.util.getNodeCanvas),
                (a = _.util.createCanvasElement),
                (h = new Error("Could not initialize `canvas` element")),
                (_.StaticCanvas = _.util.createClass(_.CommonMethods, {
                  initialize: function (t, e) {
                    (e = e || {}),
                      (this.renderAndResetBound =
                        this.renderAndReset.bind(this)),
                      (this.requestRenderAllBound =
                        this.requestRenderAll.bind(this)),
                      this._initStatic(t, e);
                  },
                  backgroundColor: "",
                  backgroundImage: null,
                  overlayColor: "",
                  overlayImage: null,
                  includeDefaultValues: !0,
                  stateful: !1,
                  renderOnAddRemove: !0,
                  controlsAboveOverlay: !1,
                  allowTouchScrolling: !1,
                  imageSmoothingEnabled: !0,
                  viewportTransform: _.iMatrix.concat(),
                  backgroundVpt: !0,
                  overlayVpt: !0,
                  enableRetinaScaling: !0,
                  vptCoords: {},
                  skipOffscreen: !0,
                  clipPath: void 0,
                  _initStatic: function (t, e) {
                    var i = this.requestRenderAllBound;
                    (this._objects = []),
                      this._createLowerCanvas(t),
                      this._initOptions(e),
                      this.interactive || this._initRetinaScaling(),
                      e.overlayImage && this.setOverlayImage(e.overlayImage, i),
                      e.backgroundImage &&
                        this.setBackgroundImage(e.backgroundImage, i),
                      e.backgroundColor &&
                        this.setBackgroundColor(e.backgroundColor, i),
                      e.overlayColor && this.setOverlayColor(e.overlayColor, i),
                      this.calcOffset();
                  },
                  _isRetinaScaling: function () {
                    return 1 !== _.devicePixelRatio && this.enableRetinaScaling;
                  },
                  getRetinaScaling: function () {
                    return this._isRetinaScaling() ? _.devicePixelRatio : 1;
                  },
                  _initRetinaScaling: function () {
                    var t;
                    this._isRetinaScaling() &&
                      ((t = _.devicePixelRatio),
                      this.__initRetinaScaling(
                        t,
                        this.lowerCanvasEl,
                        this.contextContainer
                      ),
                      this.upperCanvasEl &&
                        this.__initRetinaScaling(
                          t,
                          this.upperCanvasEl,
                          this.contextTop
                        ));
                  },
                  __initRetinaScaling: function (t, e, i) {
                    e.setAttribute("width", this.width * t),
                      e.setAttribute("height", this.height * t),
                      i.scale(t, t);
                  },
                  calcOffset: function () {
                    return (this._offset = e(this.lowerCanvasEl)), this;
                  },
                  setOverlayImage: function (t, e, i) {
                    return this.__setBgOverlayImage("overlayImage", t, e, i);
                  },
                  setBackgroundImage: function (t, e, i) {
                    return this.__setBgOverlayImage("backgroundImage", t, e, i);
                  },
                  setOverlayColor: function (t, e) {
                    return this.__setBgOverlayColor("overlayColor", t, e);
                  },
                  setBackgroundColor: function (t, e) {
                    return this.__setBgOverlayColor("backgroundColor", t, e);
                  },
                  __setBgOverlayImage: function (t, e, i, n) {
                    return (
                      "string" == typeof e
                        ? _.util.loadImage(
                            e,
                            function (e, r) {
                              var o;
                              e &&
                                ((o = new _.Image(e, n)),
                                ((this[t] = o).canvas = this)),
                                i && i(e, r);
                            },
                            this,
                            n && n.crossOrigin
                          )
                        : (n && e.setOptions(n),
                          (this[t] = e) && (e.canvas = this),
                          i && i(e, !1)),
                      this
                    );
                  },
                  __setBgOverlayColor: function (t, e, i) {
                    return (
                      (this[t] = e),
                      this._initGradient(e, t),
                      this._initPattern(e, t, i),
                      this
                    );
                  },
                  _createCanvasElement: function () {
                    var t = a();
                    if (!t) throw h;
                    if ((t.style || (t.style = {}), void 0 === t.getContext))
                      throw h;
                    return t;
                  },
                  _initOptions: function (t) {
                    var e = this.lowerCanvasEl;
                    this._setOptions(t),
                      (this.width = this.width || parseInt(e.width, 10) || 0),
                      (this.height =
                        this.height || parseInt(e.height, 10) || 0),
                      this.lowerCanvasEl.style &&
                        ((e.width = this.width),
                        (e.height = this.height),
                        (e.style.width = this.width + "px"),
                        (e.style.height = this.height + "px"),
                        (this.viewportTransform =
                          this.viewportTransform.slice()));
                  },
                  _createLowerCanvas: function (t) {
                    t && t.getContext
                      ? (this.lowerCanvasEl = t)
                      : (this.lowerCanvasEl =
                          _.util.getById(t) || this._createCanvasElement()),
                      _.util.addClass(this.lowerCanvasEl, "lower-canvas"),
                      (this._originalCanvasStyle = this.lowerCanvasEl.style),
                      this.interactive &&
                        this._applyCanvasStyle(this.lowerCanvasEl),
                      (this.contextContainer =
                        this.lowerCanvasEl.getContext("2d"));
                  },
                  getWidth: function () {
                    return this.width;
                  },
                  getHeight: function () {
                    return this.height;
                  },
                  setWidth: function (t, e) {
                    return this.setDimensions({ width: t }, e);
                  },
                  setHeight: function (t, e) {
                    return this.setDimensions({ height: t }, e);
                  },
                  setDimensions: function (t, e) {
                    var i, n;
                    for (n in ((e = e || {}), t))
                      (i = t[n]),
                        e.cssOnly ||
                          (this._setBackstoreDimension(n, t[n]),
                          (i += "px"),
                          (this.hasLostContext = !0)),
                        e.backstoreOnly || this._setCssDimension(n, i);
                    return (
                      this._isCurrentlyDrawing &&
                        this.freeDrawingBrush &&
                        this.freeDrawingBrush._setBrushStyles(),
                      this._initRetinaScaling(),
                      this.calcOffset(),
                      e.cssOnly || this.requestRenderAll(),
                      this
                    );
                  },
                  _setBackstoreDimension: function (t, e) {
                    return (
                      (this.lowerCanvasEl[t] = e),
                      this.upperCanvasEl && (this.upperCanvasEl[t] = e),
                      this.cacheCanvasEl && (this.cacheCanvasEl[t] = e),
                      (this[t] = e),
                      this
                    );
                  },
                  _setCssDimension: function (t, e) {
                    return (
                      (this.lowerCanvasEl.style[t] = e),
                      this.upperCanvasEl && (this.upperCanvasEl.style[t] = e),
                      this.wrapperEl && (this.wrapperEl.style[t] = e),
                      this
                    );
                  },
                  getZoom: function () {
                    return this.viewportTransform[0];
                  },
                  setViewportTransform: function (t) {
                    var e,
                      i,
                      n,
                      r = this._activeObject,
                      o = this.backgroundImage,
                      s = this.overlayImage;
                    for (
                      this.viewportTransform = t,
                        i = 0,
                        n = this._objects.length;
                      i < n;
                      i++
                    )
                      (e = this._objects[i]).group || e.setCoords(!0);
                    return (
                      r && r.setCoords(),
                      o && o.setCoords(!0),
                      s && s.setCoords(!0),
                      this.calcViewportBoundaries(),
                      this.renderOnAddRemove && this.requestRenderAll(),
                      this
                    );
                  },
                  zoomToPoint: function (t, e) {
                    var i = t,
                      n = this.viewportTransform.slice(0);
                    return (
                      (t = r(t, o(this.viewportTransform))),
                      (n[0] = e),
                      (n[3] = e),
                      (t = r(t, n)),
                      (n[4] += i.x - t.x),
                      (n[5] += i.y - t.y),
                      this.setViewportTransform(n)
                    );
                  },
                  setZoom: function (t) {
                    return this.zoomToPoint(new _.Point(0, 0), t), this;
                  },
                  absolutePan: function (t) {
                    var e = this.viewportTransform.slice(0);
                    return (
                      (e[4] = -t.x), (e[5] = -t.y), this.setViewportTransform(e)
                    );
                  },
                  relativePan: function (t) {
                    return this.absolutePan(
                      new _.Point(
                        -t.x - this.viewportTransform[4],
                        -t.y - this.viewportTransform[5]
                      )
                    );
                  },
                  getElement: function () {
                    return this.lowerCanvasEl;
                  },
                  _onObjectAdded: function (t) {
                    this.stateful && t.setupState(),
                      t._set("canvas", this),
                      t.setCoords(),
                      this.fire("object:added", { target: t }),
                      t.fire("added");
                  },
                  _onObjectRemoved: function (t) {
                    this.fire("object:removed", { target: t }),
                      t.fire("removed"),
                      delete t.canvas;
                  },
                  clearContext: function (t) {
                    return t.clearRect(0, 0, this.width, this.height), this;
                  },
                  getContext: function () {
                    return this.contextContainer;
                  },
                  clear: function () {
                    return (
                      this.remove.apply(this, this.getObjects()),
                      (this.backgroundImage = null),
                      (this.overlayImage = null),
                      (this.backgroundColor = ""),
                      (this.overlayColor = ""),
                      this._hasITextHandlers &&
                        (this.off("mouse:up", this._mouseUpITextHandler),
                        (this._iTextInstances = null),
                        (this._hasITextHandlers = !1)),
                      this.clearContext(this.contextContainer),
                      this.fire("canvas:cleared"),
                      this.renderOnAddRemove && this.requestRenderAll(),
                      this
                    );
                  },
                  renderAll: function () {
                    var t = this.contextContainer;
                    return this.renderCanvas(t, this._objects), this;
                  },
                  renderAndReset: function () {
                    (this.isRendering = 0), this.renderAll();
                  },
                  requestRenderAll: function () {
                    return (
                      this.isRendering ||
                        (this.isRendering = _.util.requestAnimFrame(
                          this.renderAndResetBound
                        )),
                      this
                    );
                  },
                  calcViewportBoundaries: function () {
                    var t = {},
                      e = this.width,
                      i = this.height,
                      n = o(this.viewportTransform);
                    return (
                      (t.tl = r({ x: 0, y: 0 }, n)),
                      (t.br = r({ x: e, y: i }, n)),
                      (t.tr = new _.Point(t.br.x, t.tl.y)),
                      (t.bl = new _.Point(t.tl.x, t.br.y)),
                      (this.vptCoords = t)
                    );
                  },
                  cancelRequestedRender: function () {
                    this.isRendering &&
                      (_.util.cancelAnimFrame(this.isRendering),
                      (this.isRendering = 0));
                  },
                  renderCanvas: function (t, e) {
                    var i = this.viewportTransform,
                      n = this.clipPath;
                    this.cancelRequestedRender(),
                      this.calcViewportBoundaries(),
                      this.clearContext(t),
                      _.util.setImageSmoothing(t, this.imageSmoothingEnabled),
                      this.fire("before:render", { ctx: t }),
                      this._renderBackground(t),
                      t.save(),
                      t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                      this._renderObjects(t, e),
                      t.restore(),
                      !this.controlsAboveOverlay &&
                        this.interactive &&
                        this.drawControls(t),
                      n &&
                        ((n.canvas = this),
                        n.shouldCache(),
                        (n._transformDone = !0),
                        n.renderCache({ forClipping: !0 }),
                        this.drawClipPathOnCanvas(t)),
                      this._renderOverlay(t),
                      this.controlsAboveOverlay &&
                        this.interactive &&
                        this.drawControls(t),
                      this.fire("after:render", { ctx: t });
                  },
                  drawClipPathOnCanvas: function (t) {
                    var e = this.viewportTransform,
                      i = this.clipPath;
                    t.save(),
                      t.transform(e[0], e[1], e[2], e[3], e[4], e[5]),
                      (t.globalCompositeOperation = "destination-in"),
                      i.transform(t),
                      t.scale(1 / i.zoomX, 1 / i.zoomY),
                      t.drawImage(
                        i._cacheCanvas,
                        -i.cacheTranslationX,
                        -i.cacheTranslationY
                      ),
                      t.restore();
                  },
                  _renderObjects: function (t, e) {
                    for (var i = 0, n = e.length; i < n; ++i)
                      e[i] && e[i].render(t);
                  },
                  _renderBackgroundOrOverlay: function (t, e) {
                    var i = this[e + "Color"],
                      n = this[e + "Image"],
                      r = this.viewportTransform;
                    (e = this[e + "Vpt"]),
                      (i || n) &&
                        (i &&
                          (t.save(),
                          t.beginPath(),
                          t.moveTo(0, 0),
                          t.lineTo(this.width, 0),
                          t.lineTo(this.width, this.height),
                          t.lineTo(0, this.height),
                          t.closePath(),
                          (t.fillStyle = i.toLive ? i.toLive(t, this) : i),
                          e && t.transform(r[0], r[1], r[2], r[3], r[4], r[5]),
                          t.transform(
                            1,
                            0,
                            0,
                            1,
                            i.offsetX || 0,
                            i.offsetY || 0
                          ),
                          (i = i.gradientTransform || i.patternTransform) &&
                            t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                          t.fill(),
                          t.restore()),
                        n &&
                          (t.save(),
                          e && t.transform(r[0], r[1], r[2], r[3], r[4], r[5]),
                          n.render(t),
                          t.restore()));
                  },
                  _renderBackground: function (t) {
                    this._renderBackgroundOrOverlay(t, "background");
                  },
                  _renderOverlay: function (t) {
                    this._renderBackgroundOrOverlay(t, "overlay");
                  },
                  getCenter: function () {
                    return { top: this.height / 2, left: this.width / 2 };
                  },
                  centerObjectH: function (t) {
                    return this._centerObject(
                      t,
                      new _.Point(this.getCenter().left, t.getCenterPoint().y)
                    );
                  },
                  centerObjectV: function (t) {
                    return this._centerObject(
                      t,
                      new _.Point(t.getCenterPoint().x, this.getCenter().top)
                    );
                  },
                  centerObject: function (t) {
                    var e = this.getCenter();
                    return this._centerObject(t, new _.Point(e.left, e.top));
                  },
                  viewportCenterObject: function (t) {
                    var e = this.getVpCenter();
                    return this._centerObject(t, e);
                  },
                  viewportCenterObjectH: function (t) {
                    var e = this.getVpCenter();
                    return (
                      this._centerObject(
                        t,
                        new _.Point(e.x, t.getCenterPoint().y)
                      ),
                      this
                    );
                  },
                  viewportCenterObjectV: function (t) {
                    var e = this.getVpCenter();
                    return this._centerObject(
                      t,
                      new _.Point(t.getCenterPoint().x, e.y)
                    );
                  },
                  getVpCenter: function () {
                    var t = this.getCenter(),
                      e = o(this.viewportTransform);
                    return r({ x: t.left, y: t.top }, e);
                  },
                  _centerObject: function (t, e) {
                    return (
                      t.setPositionByOrigin(e, "center", "center"),
                      t.setCoords(),
                      this.renderOnAddRemove && this.requestRenderAll(),
                      this
                    );
                  },
                  toDatalessJSON: function (t) {
                    return this.toDatalessObject(t);
                  },
                  toObject: function (t) {
                    return this._toObjectMethod("toObject", t);
                  },
                  toDatalessObject: function (t) {
                    return this._toObjectMethod("toDatalessObject", t);
                  },
                  _toObjectMethod: function (e, i) {
                    var n = this.clipPath,
                      r = {
                        version: _.version,
                        objects: this._toObjects(e, i),
                      };
                    return (
                      n &&
                        !n.excludeFromExport &&
                        (r.clipPath = this._toObject(this.clipPath, e, i)),
                      t(r, this.__serializeBgOverlay(e, i)),
                      _.util.populateWithProperties(this, r, i),
                      r
                    );
                  },
                  _toObjects: function (t, e) {
                    return this._objects
                      .filter(function (t) {
                        return !t.excludeFromExport;
                      })
                      .map(function (i) {
                        return this._toObject(i, t, e);
                      }, this);
                  },
                  _toObject: function (t, e, i) {
                    var n;
                    return (
                      this.includeDefaultValues ||
                        ((n = t.includeDefaultValues),
                        (t.includeDefaultValues = !1)),
                      (i = t[e](i)),
                      this.includeDefaultValues || (t.includeDefaultValues = n),
                      i
                    );
                  },
                  __serializeBgOverlay: function (t, e) {
                    var i = {},
                      n = this.backgroundImage,
                      r = this.overlayImage,
                      o = this.backgroundColor,
                      s = this.overlayColor;
                    return (
                      o && o.toObject
                        ? o.excludeFromExport || (i.background = o.toObject(e))
                        : o && (i.background = o),
                      s && s.toObject
                        ? s.excludeFromExport || (i.overlay = s.toObject(e))
                        : s && (i.overlay = s),
                      n &&
                        !n.excludeFromExport &&
                        (i.backgroundImage = this._toObject(n, t, e)),
                      r &&
                        !r.excludeFromExport &&
                        (i.overlayImage = this._toObject(r, t, e)),
                      i
                    );
                  },
                  svgViewportTransformation: !0,
                  toSVG: function (t, e) {
                    (t = t || {}).reviver = e;
                    var i = [];
                    return (
                      this._setSVGPreamble(i, t),
                      this._setSVGHeader(i, t),
                      this.clipPath &&
                        i.push(
                          '<g clip-path="url(#' +
                            this.clipPath.clipPathId +
                            ')" >\n'
                        ),
                      this._setSVGBgOverlayColor(i, "background"),
                      this._setSVGBgOverlayImage(i, "backgroundImage", e),
                      this._setSVGObjects(i, e),
                      this.clipPath && i.push("</g>\n"),
                      this._setSVGBgOverlayColor(i, "overlay"),
                      this._setSVGBgOverlayImage(i, "overlayImage", e),
                      i.push("</svg>"),
                      i.join("")
                    );
                  },
                  _setSVGPreamble: function (t, e) {
                    e.suppressPreamble ||
                      t.push(
                        '<?xml version="1.0" encoding="',
                        e.encoding || "UTF-8",
                        '" standalone="no" ?>\n',
                        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',
                        '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
                      );
                  },
                  _setSVGHeader: function (t, e) {
                    var i,
                      r = e.width || this.width,
                      o = e.height || this.height,
                      s =
                        'viewBox="0 0 ' + this.width + " " + this.height + '" ',
                      a = _.Object.NUM_FRACTION_DIGITS;
                    e.viewBox
                      ? (s =
                          'viewBox="' +
                          e.viewBox.x +
                          " " +
                          e.viewBox.y +
                          " " +
                          e.viewBox.width +
                          " " +
                          e.viewBox.height +
                          '" ')
                      : this.svgViewportTransformation &&
                        ((i = this.viewportTransform),
                        (s =
                          'viewBox="' +
                          n(-i[4] / i[0], a) +
                          " " +
                          n(-i[5] / i[3], a) +
                          " " +
                          n(this.width / i[0], a) +
                          " " +
                          n(this.height / i[3], a) +
                          '" ')),
                      t.push(
                        "<svg ",
                        'xmlns="http://www.w3.org/2000/svg" ',
                        'xmlns:xlink="http://www.w3.org/1999/xlink" ',
                        'version="1.1" ',
                        'width="',
                        r,
                        '" ',
                        'height="',
                        o,
                        '" ',
                        s,
                        'xml:space="preserve">\n',
                        "<desc>Created with Fabric.js ",
                        _.version,
                        "</desc>\n",
                        "<defs>\n",
                        this.createSVGFontFacesMarkup(),
                        this.createSVGRefElementsMarkup(),
                        this.createSVGClipPathMarkup(e),
                        "</defs>\n"
                      );
                  },
                  createSVGClipPathMarkup: function (t) {
                    var e = this.clipPath;
                    return e
                      ? ((e.clipPathId = "CLIPPATH_" + _.Object.__uid++),
                        '<clipPath id="' +
                          e.clipPathId +
                          '" >\n' +
                          this.clipPath.toClipPathSVG(t.reviver) +
                          "</clipPath>\n")
                      : "";
                  },
                  createSVGRefElementsMarkup: function () {
                    var t = this;
                    return ["background", "overlay"]
                      .map(function (e) {
                        var i = t[e + "Color"];
                        if (i && i.toLive) {
                          var n = t[e + "Vpt"],
                            r = t.viewportTransform;
                          return (
                            (e = {
                              width: t.width / (n ? r[0] : 1),
                              height: t.height / (n ? r[3] : 1),
                            }),
                            i.toSVG(e, {
                              additionalTransform: n
                                ? _.util.matrixToSVG(r)
                                : "",
                            })
                          );
                        }
                      })
                      .join("");
                  },
                  createSVGFontFacesMarkup: function () {
                    var t,
                      e,
                      i,
                      n,
                      r,
                      o,
                      s,
                      a,
                      h,
                      l = "",
                      c = {},
                      u = _.fontPaths,
                      f = [];
                    for (
                      this._objects.forEach(function t(e) {
                        f.push(e), e._objects && e._objects.forEach(t);
                      }),
                        s = 0,
                        a = f.length;
                      s < a;
                      s++
                    )
                      if (
                        ((e = (t = f[s]).fontFamily),
                        -1 !== t.type.indexOf("text") &&
                          !c[e] &&
                          u[e] &&
                          ((c[e] = !0), t.styles))
                      )
                        for (r in (i = t.styles))
                          for (o in (n = i[r]))
                            !c[(e = n[o].fontFamily)] && u[e] && (c[e] = !0);
                    for (h in c)
                      l += [
                        "\t\t@font-face {\n",
                        "\t\t\tfont-family: '",
                        h,
                        "';\n",
                        "\t\t\tsrc: url('",
                        u[h],
                        "');\n",
                        "\t\t}\n",
                      ].join("");
                    return (
                      l &&
                      [
                        '\t<style type="text/css">',
                        "<![CDATA[\n",
                        l,
                        "]]>",
                        "</style>\n",
                      ].join("")
                    );
                  },
                  _setSVGObjects: function (t, e) {
                    for (
                      var i, n = this._objects, r = 0, o = n.length;
                      r < o;
                      r++
                    )
                      (i = n[r]).excludeFromExport ||
                        this._setSVGObject(t, i, e);
                  },
                  _setSVGObject: function (t, e, i) {
                    t.push(e.toSVG(i));
                  },
                  _setSVGBgOverlayImage: function (t, e, i) {
                    this[e] &&
                      !this[e].excludeFromExport &&
                      this[e].toSVG &&
                      t.push(this[e].toSVG(i));
                  },
                  _setSVGBgOverlayColor: function (t, e) {
                    var i,
                      n = this[e + "Color"],
                      r = this.viewportTransform,
                      o = this.width,
                      s = this.height;
                    n &&
                      (n.toLive
                        ? ((i = n.repeat),
                          (r = _.util.invertTransform(r)),
                          (r = this[e + "Vpt"] ? _.util.matrixToSVG(r) : ""),
                          t.push(
                            '<rect transform="' + r + " translate(",
                            o / 2,
                            ",",
                            s / 2,
                            ')"',
                            ' x="',
                            n.offsetX - o / 2,
                            '" y="',
                            n.offsetY - s / 2,
                            '" ',
                            'width="',
                            "repeat-y" === i || "no-repeat" === i
                              ? n.source.width
                              : o,
                            '" height="',
                            "repeat-x" === i || "no-repeat" === i
                              ? n.source.height
                              : s,
                            '" fill="url(#SVGID_' + n.id + ')"',
                            "></rect>\n"
                          ))
                        : t.push(
                            '<rect x="0" y="0" width="100%" height="100%" ',
                            'fill="',
                            n,
                            '"',
                            "></rect>\n"
                          ));
                  },
                  sendToBack: function (t) {
                    if (!t) return this;
                    var e,
                      n,
                      r,
                      o = this._activeObject;
                    if (t === o && "activeSelection" === t.type)
                      for (e = (r = o._objects).length; e--; )
                        (n = r[e]),
                          i(this._objects, n),
                          this._objects.unshift(n);
                    else i(this._objects, t), this._objects.unshift(t);
                    return (
                      this.renderOnAddRemove && this.requestRenderAll(), this
                    );
                  },
                  bringToFront: function (t) {
                    if (!t) return this;
                    var e,
                      n,
                      r,
                      o = this._activeObject;
                    if (t === o && "activeSelection" === t.type)
                      for (r = o._objects, e = 0; e < r.length; e++)
                        (n = r[e]), i(this._objects, n), this._objects.push(n);
                    else i(this._objects, t), this._objects.push(t);
                    return (
                      this.renderOnAddRemove && this.requestRenderAll(), this
                    );
                  },
                  sendBackwards: function (t, e) {
                    if (!t) return this;
                    var n,
                      r,
                      o,
                      s,
                      a,
                      h = this._activeObject,
                      l = 0;
                    if (t === h && "activeSelection" === t.type)
                      for (a = h._objects, n = 0; n < a.length; n++)
                        (r = a[n]),
                          0 + l < (o = this._objects.indexOf(r)) &&
                            ((s = o - 1),
                            i(this._objects, r),
                            this._objects.splice(s, 0, r)),
                          l++;
                    else
                      0 !== (o = this._objects.indexOf(t)) &&
                        ((s = this._findNewLowerIndex(t, o, e)),
                        i(this._objects, t),
                        this._objects.splice(s, 0, t));
                    return (
                      this.renderOnAddRemove && this.requestRenderAll(), this
                    );
                  },
                  _findNewLowerIndex: function (t, e, i) {
                    var n, r;
                    if (i) {
                      for (r = (n = e) - 1; 0 <= r; --r)
                        if (
                          t.intersectsWithObject(this._objects[r]) ||
                          t.isContainedWithinObject(this._objects[r]) ||
                          this._objects[r].isContainedWithinObject(t)
                        ) {
                          n = r;
                          break;
                        }
                    } else n = e - 1;
                    return n;
                  },
                  bringForward: function (t, e) {
                    if (!t) return this;
                    var n,
                      r,
                      o,
                      s,
                      a,
                      h = this._activeObject,
                      l = 0;
                    if (t === h && "activeSelection" === t.type)
                      for (n = (a = h._objects).length; n--; )
                        (r = a[n]),
                          (o = this._objects.indexOf(r)) <
                            this._objects.length - 1 - l &&
                            ((s = o + 1),
                            i(this._objects, r),
                            this._objects.splice(s, 0, r)),
                          l++;
                    else
                      (o = this._objects.indexOf(t)) !==
                        this._objects.length - 1 &&
                        ((s = this._findNewUpperIndex(t, o, e)),
                        i(this._objects, t),
                        this._objects.splice(s, 0, t));
                    return (
                      this.renderOnAddRemove && this.requestRenderAll(), this
                    );
                  },
                  _findNewUpperIndex: function (t, e, i) {
                    var n, r, o;
                    if (i) {
                      for (
                        r = (n = e) + 1, o = this._objects.length;
                        r < o;
                        ++r
                      )
                        if (
                          t.intersectsWithObject(this._objects[r]) ||
                          t.isContainedWithinObject(this._objects[r]) ||
                          this._objects[r].isContainedWithinObject(t)
                        ) {
                          n = r;
                          break;
                        }
                    } else n = e + 1;
                    return n;
                  },
                  moveTo: function (t, e) {
                    return (
                      i(this._objects, t),
                      this._objects.splice(e, 0, t),
                      this.renderOnAddRemove && this.requestRenderAll()
                    );
                  },
                  dispose: function () {
                    return (
                      this.isRendering &&
                        (_.util.cancelAnimFrame(this.isRendering),
                        (this.isRendering = 0)),
                      this.forEachObject(function (t) {
                        t.dispose && t.dispose();
                      }),
                      (this._objects = []),
                      this.backgroundImage &&
                        this.backgroundImage.dispose &&
                        this.backgroundImage.dispose(),
                      (this.backgroundImage = null),
                      this.overlayImage &&
                        this.overlayImage.dispose &&
                        this.overlayImage.dispose(),
                      (this.overlayImage = null),
                      (this._iTextInstances = null),
                      (this.contextContainer = null),
                      this.lowerCanvasEl.classList.remove("lower-canvas"),
                      (this.lowerCanvasEl.style = this._originalCanvasStyle),
                      delete this._originalCanvasStyle,
                      this.lowerCanvasEl.setAttribute("width", this.width),
                      this.lowerCanvasEl.setAttribute("height", this.height),
                      _.util.cleanUpJsdomNode(this.lowerCanvasEl),
                      (this.lowerCanvasEl = void 0),
                      this
                    );
                  },
                  toString: function () {
                    return (
                      "#<fabric.Canvas (" +
                      this.complexity() +
                      "): { objects: " +
                      this._objects.length +
                      " }>"
                    );
                  },
                })),
                t(_.StaticCanvas.prototype, _.Observable),
                t(_.StaticCanvas.prototype, _.Collection),
                t(_.StaticCanvas.prototype, _.DataURLExporter),
                t(_.StaticCanvas, {
                  EMPTY_JSON: '{"objects": [], "background": "white"}',
                  supports: function (t) {
                    var e = a();
                    return e &&
                      e.getContext &&
                      (e = e.getContext("2d")) &&
                      "setLineDash" === t
                      ? void 0 !== e.setLineDash
                      : null;
                  },
                }),
                (_.StaticCanvas.prototype.toJSON =
                  _.StaticCanvas.prototype.toObject),
                _.isLikelyNode &&
                  ((_.StaticCanvas.prototype.createPNGStream = function () {
                    var t = s(this.lowerCanvasEl);
                    return t && t.createPNGStream();
                  }),
                  (_.StaticCanvas.prototype.createJPEGStream = function (t) {
                    var e = s(this.lowerCanvasEl);
                    return e && e.createJPEGStream(t);
                  })));
          })(),
          (_.BaseBrush = _.util.createClass({
            color: "rgb(0, 0, 0)",
            width: 1,
            shadow: null,
            strokeLineCap: "round",
            strokeLineJoin: "round",
            strokeMiterLimit: 10,
            strokeDashArray: null,
            limitedToCanvasSize: !1,
            _setBrushStyles: function () {
              var t = this.canvas.contextTop;
              (t.strokeStyle = this.color),
                (t.lineWidth = this.width),
                (t.lineCap = this.strokeLineCap),
                (t.miterLimit = this.strokeMiterLimit),
                (t.lineJoin = this.strokeLineJoin),
                t.setLineDash(this.strokeDashArray || []);
            },
            _saveAndTransform: function (t) {
              var e = this.canvas.viewportTransform;
              t.save(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
            },
            _setShadow: function () {
              var t, e, i, n;
              this.shadow &&
                ((t = this.canvas),
                (e = this.shadow),
                (i = t.contextTop),
                (n = t.getZoom()),
                t && t._isRetinaScaling() && (n *= _.devicePixelRatio),
                (i.shadowColor = e.color),
                (i.shadowBlur = e.blur * n),
                (i.shadowOffsetX = e.offsetX * n),
                (i.shadowOffsetY = e.offsetY * n));
            },
            needsFullRender: function () {
              return new _.Color(this.color).getAlpha() < 1 || !!this.shadow;
            },
            _resetShadow: function () {
              var t = this.canvas.contextTop;
              (t.shadowColor = ""),
                (t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0);
            },
            _isOutSideCanvas: function (t) {
              return (
                t.x < 0 ||
                t.x > this.canvas.getWidth() ||
                t.y < 0 ||
                t.y > this.canvas.getHeight()
              );
            },
          })),
          (_.PencilBrush = _.util.createClass(_.BaseBrush, {
            decimate: 0.4,
            initialize: function (t) {
              (this.canvas = t), (this._points = []);
            },
            _drawSegment: function (t, e, i) {
              return (
                (i = e.midPointFrom(i)),
                t.quadraticCurveTo(e.x, e.y, i.x, i.y),
                i
              );
            },
            onMouseDown: function (t, e) {
              this.canvas._isMainEvent(e.e) &&
                (this._prepareForDrawing(t),
                this._captureDrawingPath(t),
                this._render());
            },
            onMouseMove: function (t, e) {
              var i;
              this.canvas._isMainEvent(e.e) &&
                ((!0 === this.limitedToCanvasSize &&
                  this._isOutSideCanvas(t)) ||
                  (this._captureDrawingPath(t) &&
                    1 < this._points.length &&
                    (this.needsFullRender()
                      ? (this.canvas.clearContext(this.canvas.contextTop),
                        this._render())
                      : ((e = (i = this._points).length),
                        (t = this.canvas.contextTop),
                        this._saveAndTransform(t),
                        this.oldEnd &&
                          (t.beginPath(),
                          t.moveTo(this.oldEnd.x, this.oldEnd.y)),
                        (this.oldEnd = this._drawSegment(
                          t,
                          i[e - 2],
                          i[e - 1],
                          !0
                        )),
                        t.stroke(),
                        t.restore()))));
            },
            onMouseUp: function (t) {
              return (
                !this.canvas._isMainEvent(t.e) ||
                ((this.oldEnd = void 0), this._finalizeAndAddPath(), !1)
              );
            },
            _prepareForDrawing: function (t) {
              (t = new _.Point(t.x, t.y)),
                this._reset(),
                this._addPoint(t),
                this.canvas.contextTop.moveTo(t.x, t.y);
            },
            _addPoint: function (t) {
              return !(
                (1 < this._points.length &&
                  t.eq(this._points[this._points.length - 1])) ||
                (this._points.push(t), 0)
              );
            },
            _reset: function () {
              (this._points = []), this._setBrushStyles(), this._setShadow();
            },
            _captureDrawingPath: function (t) {
              return (t = new _.Point(t.x, t.y)), this._addPoint(t);
            },
            _render: function () {
              var t,
                e,
                i,
                n = this.canvas.contextTop,
                r = this._points[0],
                o = this._points[1];
              for (
                this._saveAndTransform(n),
                  n.beginPath(),
                  2 === this._points.length &&
                    r.x === o.x &&
                    r.y === o.y &&
                    ((i = this.width / 1e3),
                    (r = new _.Point(r.x, r.y)),
                    (o = new _.Point(o.x, o.y)),
                    (r.x -= i),
                    (o.x += i)),
                  n.moveTo(r.x, r.y),
                  t = 1,
                  e = this._points.length;
                t < e;
                t++
              )
                this._drawSegment(n, r, o),
                  (r = this._points[t]),
                  (o = this._points[t + 1]);
              n.lineTo(r.x, r.y), n.stroke(), n.restore();
            },
            convertPointsToSVGPath: function (t) {
              var e = this.width / 1e3;
              return _.util.getSmoothPathFromPoints(t, e);
            },
            _isEmptySVGPath: function (t) {
              return "M 0 0 Q 0 0 0 0 L 0 0" === _.util.joinPath(t);
            },
            createPath: function (t) {
              return (
                (t = new _.Path(t, {
                  fill: null,
                  stroke: this.color,
                  strokeWidth: this.width,
                  strokeLineCap: this.strokeLineCap,
                  strokeMiterLimit: this.strokeMiterLimit,
                  strokeLineJoin: this.strokeLineJoin,
                  strokeDashArray: this.strokeDashArray,
                })),
                this.shadow &&
                  ((this.shadow.affectStroke = !0),
                  (t.shadow = new _.Shadow(this.shadow))),
                t
              );
            },
            decimatePoints: function (t, e) {
              if (t.length <= 2) return t;
              for (
                var i = this.canvas.getZoom(),
                  n = Math.pow(e / i, 2),
                  r = t.length - 1,
                  o = t[0],
                  s = [o],
                  a = 1;
                a < r - 1;
                a++
              )
                n <= Math.pow(o.x - t[a].x, 2) + Math.pow(o.y - t[a].y, 2) &&
                  ((o = t[a]), s.push(o));
              return s.push(t[r]), s;
            },
            _finalizeAndAddPath: function () {
              this.canvas.contextTop.closePath(),
                this.decimate &&
                  (this._points = this.decimatePoints(
                    this._points,
                    this.decimate
                  ));
              var t = this.convertPointsToSVGPath(this._points);
              this._isEmptySVGPath(t)
                ? this.canvas.requestRenderAll()
                : ((t = this.createPath(t)),
                  this.canvas.clearContext(this.canvas.contextTop),
                  this.canvas.fire("before:path:created", { path: t }),
                  this.canvas.add(t),
                  this.canvas.requestRenderAll(),
                  t.setCoords(),
                  this._resetShadow(),
                  this.canvas.fire("path:created", { path: t }));
            },
          })),
          (_.CircleBrush = _.util.createClass(_.BaseBrush, {
            width: 10,
            initialize: function (t) {
              (this.canvas = t), (this.points = []);
            },
            drawDot: function (t) {
              var e = this.addPoint(t);
              (t = this.canvas.contextTop),
                this._saveAndTransform(t),
                this.dot(t, e),
                t.restore();
            },
            dot: function (t, e) {
              (t.fillStyle = e.fill),
                t.beginPath(),
                t.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !1),
                t.closePath(),
                t.fill();
            },
            onMouseDown: function (t) {
              (this.points.length = 0),
                this.canvas.clearContext(this.canvas.contextTop),
                this._setShadow(),
                this.drawDot(t);
            },
            _render: function () {
              var t,
                e,
                i = this.canvas.contextTop,
                n = this.points;
              for (this._saveAndTransform(i), t = 0, e = n.length; t < e; t++)
                this.dot(i, n[t]);
              i.restore();
            },
            onMouseMove: function (t) {
              (!0 === this.limitedToCanvasSize && this._isOutSideCanvas(t)) ||
                (this.needsFullRender()
                  ? (this.canvas.clearContext(this.canvas.contextTop),
                    this.addPoint(t),
                    this._render())
                  : this.drawDot(t));
            },
            onMouseUp: function () {
              var t = this.canvas.renderOnAddRemove;
              this.canvas.renderOnAddRemove = !1;
              for (var e = [], i = 0, n = this.points.length; i < n; i++) {
                var r = this.points[i];
                (r = new _.Circle({
                  radius: r.radius,
                  left: r.x,
                  top: r.y,
                  originX: "center",
                  originY: "center",
                  fill: r.fill,
                })),
                  this.shadow && (r.shadow = new _.Shadow(this.shadow)),
                  e.push(r);
              }
              var o = new _.Group(e);
              (o.canvas = this.canvas),
                this.canvas.fire("before:path:created", { path: o }),
                this.canvas.add(o),
                this.canvas.fire("path:created", { path: o }),
                this.canvas.clearContext(this.canvas.contextTop),
                this._resetShadow(),
                (this.canvas.renderOnAddRemove = t),
                this.canvas.requestRenderAll();
            },
            addPoint: function (t) {
              var e = new _.Point(t.x, t.y),
                i =
                  _.util.getRandomInt(
                    Math.max(0, this.width - 20),
                    this.width + 20
                  ) / 2;
              return (
                (t = new _.Color(this.color)
                  .setAlpha(_.util.getRandomInt(0, 100) / 100)
                  .toRgba()),
                (e.radius = i),
                (e.fill = t),
                this.points.push(e),
                e
              );
            },
          })),
          (_.SprayBrush = _.util.createClass(_.BaseBrush, {
            width: 10,
            density: 20,
            dotWidth: 1,
            dotWidthVariance: 1,
            randomOpacity: !1,
            optimizeOverlapping: !0,
            initialize: function (t) {
              (this.canvas = t), (this.sprayChunks = []);
            },
            onMouseDown: function (t) {
              (this.sprayChunks.length = 0),
                this.canvas.clearContext(this.canvas.contextTop),
                this._setShadow(),
                this.addSprayChunk(t),
                this.render(this.sprayChunkPoints);
            },
            onMouseMove: function (t) {
              (!0 === this.limitedToCanvasSize && this._isOutSideCanvas(t)) ||
                (this.addSprayChunk(t), this.render(this.sprayChunkPoints));
            },
            onMouseUp: function () {
              var t = this.canvas.renderOnAddRemove;
              this.canvas.renderOnAddRemove = !1;
              for (var e = [], i = 0, n = this.sprayChunks.length; i < n; i++)
                for (
                  var r = this.sprayChunks[i], o = 0, s = r.length;
                  o < s;
                  o++
                ) {
                  var a = new _.Rect({
                    width: r[o].width,
                    height: r[o].width,
                    left: r[o].x + 1,
                    top: r[o].y + 1,
                    originX: "center",
                    originY: "center",
                    fill: this.color,
                  });
                  e.push(a);
                }
              this.optimizeOverlapping && (e = this._getOptimizedRects(e));
              var h = new _.Group(e);
              this.shadow && h.set("shadow", new _.Shadow(this.shadow)),
                this.canvas.fire("before:path:created", { path: h }),
                this.canvas.add(h),
                this.canvas.fire("path:created", { path: h }),
                this.canvas.clearContext(this.canvas.contextTop),
                this._resetShadow(),
                (this.canvas.renderOnAddRemove = t),
                this.canvas.requestRenderAll();
            },
            _getOptimizedRects: function (t) {
              for (var e, i = {}, n = 0, r = t.length; n < r; n++)
                i[(e = t[n].left + "" + t[n].top)] || (i[e] = t[n]);
              var o = [];
              for (e in i) o.push(i[e]);
              return o;
            },
            render: function (t) {
              var e,
                i,
                n = this.canvas.contextTop;
              for (
                n.fillStyle = this.color,
                  this._saveAndTransform(n),
                  e = 0,
                  i = t.length;
                e < i;
                e++
              ) {
                var r = t[e];
                void 0 !== r.opacity && (n.globalAlpha = r.opacity),
                  n.fillRect(r.x, r.y, r.width, r.width);
              }
              n.restore();
            },
            _render: function () {
              var t,
                e,
                i = this.canvas.contextTop;
              for (
                i.fillStyle = this.color,
                  this._saveAndTransform(i),
                  t = 0,
                  e = this.sprayChunks.length;
                t < e;
                t++
              )
                this.render(this.sprayChunks[t]);
              i.restore();
            },
            addSprayChunk: function (t) {
              this.sprayChunkPoints = [];
              for (var e = this.width / 2, i = 0; i < this.density; i++) {
                var n = _.util.getRandomInt(t.x - e, t.x + e),
                  r = _.util.getRandomInt(t.y - e, t.y + e),
                  o = this.dotWidthVariance
                    ? _.util.getRandomInt(
                        Math.max(1, this.dotWidth - this.dotWidthVariance),
                        this.dotWidth + this.dotWidthVariance
                      )
                    : this.dotWidth;
                ((r = new _.Point(n, r)).width = o),
                  this.randomOpacity &&
                    (r.opacity = _.util.getRandomInt(0, 100) / 100),
                  this.sprayChunkPoints.push(r);
              }
              this.sprayChunks.push(this.sprayChunkPoints);
            },
          })),
          (_.PatternBrush = _.util.createClass(_.PencilBrush, {
            getPatternSrc: function () {
              var t = _.util.createCanvasElement(),
                e = t.getContext("2d");
              return (
                (t.width = t.height = 25),
                (e.fillStyle = this.color),
                e.beginPath(),
                e.arc(10, 10, 10, 0, 2 * Math.PI, !1),
                e.closePath(),
                e.fill(),
                t
              );
            },
            getPatternSrcFunction: function () {
              return String(this.getPatternSrc).replace(
                "this.color",
                '"' + this.color + '"'
              );
            },
            getPattern: function () {
              return this.canvas.contextTop.createPattern(
                this.source || this.getPatternSrc(),
                "repeat"
              );
            },
            _setBrushStyles: function () {
              this.callSuper("_setBrushStyles"),
                (this.canvas.contextTop.strokeStyle = this.getPattern());
            },
            createPath: function (t) {
              var e = this.callSuper("createPath", t);
              return (
                (t = e._getLeftTopCoords().scalarAdd(e.strokeWidth / 2)),
                (e.stroke = new _.Pattern({
                  source: this.source || this.getPatternSrcFunction(),
                  offsetX: -t.x,
                  offsetY: -t.y,
                })),
                e
              );
            },
          })),
          (function () {
            var t,
              e = _.util.getPointer,
              i = _.util.degreesToRadians,
              n = _.util.isTouchEvent;
            for (t in ((_.Canvas = _.util.createClass(_.StaticCanvas, {
              initialize: function (t, e) {
                (e = e || {}),
                  (this.renderAndResetBound = this.renderAndReset.bind(this)),
                  (this.requestRenderAllBound =
                    this.requestRenderAll.bind(this)),
                  this._initStatic(t, e),
                  this._initInteractive(),
                  this._createCacheCanvas();
              },
              uniformScaling: !0,
              uniScaleKey: "shiftKey",
              centeredScaling: !1,
              centeredRotation: !1,
              centeredKey: "altKey",
              altActionKey: "shiftKey",
              interactive: !0,
              selection: !0,
              selectionKey: "shiftKey",
              altSelectionKey: null,
              selectionColor: "rgba(100, 100, 255, 0.3)",
              selectionDashArray: [],
              selectionBorderColor: "rgba(255, 255, 255, 0.3)",
              selectionLineWidth: 1,
              selectionFullyContained: !1,
              hoverCursor: "move",
              moveCursor: "move",
              defaultCursor: "default",
              freeDrawingCursor: "crosshair",
              rotationCursor: "crosshair",
              notAllowedCursor: "not-allowed",
              containerClass: "canvas-container",
              perPixelTargetFind: !1,
              targetFindTolerance: 0,
              skipTargetFind: !1,
              isDrawingMode: !1,
              preserveObjectStacking: !1,
              snapAngle: 0,
              snapThreshold: null,
              stopContextMenu: !1,
              fireRightClick: !1,
              fireMiddleClick: !1,
              targets: [],
              _hoveredTarget: null,
              _hoveredTargets: [],
              _initInteractive: function () {
                (this._currentTransform = null),
                  (this._groupSelector = null),
                  this._initWrapperElement(),
                  this._createUpperCanvas(),
                  this._initEventListeners(),
                  this._initRetinaScaling(),
                  (this.freeDrawingBrush =
                    _.PencilBrush && new _.PencilBrush(this)),
                  this.calcOffset();
              },
              _chooseObjectsToRender: function () {
                var t,
                  e = this.getActiveObjects();
                if (0 < e.length && !this.preserveObjectStacking) {
                  for (
                    var i = [], n = [], r = 0, o = this._objects.length;
                    r < o;
                    r++
                  )
                    (t = this._objects[r]),
                      (-1 === e.indexOf(t) ? i : n).push(t);
                  1 < e.length && (this._activeObject._objects = n),
                    i.push.apply(i, n);
                } else i = this._objects;
                return i;
              },
              renderAll: function () {
                !this.contextTopDirty ||
                  this._groupSelector ||
                  this.isDrawingMode ||
                  (this.clearContext(this.contextTop),
                  (this.contextTopDirty = !1)),
                  this.hasLostContext && this.renderTopLayer(this.contextTop);
                var t = this.contextContainer;
                return (
                  this.renderCanvas(t, this._chooseObjectsToRender()), this
                );
              },
              renderTopLayer: function (t) {
                t.save(),
                  this.isDrawingMode &&
                    this._isCurrentlyDrawing &&
                    (this.freeDrawingBrush && this.freeDrawingBrush._render(),
                    (this.contextTopDirty = !0)),
                  this.selection &&
                    this._groupSelector &&
                    (this._drawSelection(t), (this.contextTopDirty = !0)),
                  t.restore();
              },
              renderTop: function () {
                var t = this.contextTop;
                return (
                  this.clearContext(t),
                  this.renderTopLayer(t),
                  this.fire("after:render"),
                  this
                );
              },
              _normalizePointer: function (t, e) {
                return (
                  (t = t.calcTransformMatrix()),
                  (t = _.util.invertTransform(t)),
                  (e = this.restorePointerVpt(e)),
                  _.util.transformPoint(e, t)
                );
              },
              isTargetTransparent: function (t, e, i) {
                if (
                  t.shouldCache() &&
                  t._cacheCanvas &&
                  t !== this._activeObject
                ) {
                  var n = this._normalizePointer(t, { x: e, y: i }),
                    r = Math.max(t.cacheTranslationX + n.x * t.zoomX, 0),
                    o = Math.max(t.cacheTranslationY + n.y * t.zoomY, 0);
                  return _.util.isTransparent(
                    t._cacheContext,
                    Math.round(r),
                    Math.round(o),
                    this.targetFindTolerance
                  );
                }
                return (
                  (n = this.contextCache),
                  (r = t.selectionBackgroundColor),
                  (o = this.viewportTransform),
                  (t.selectionBackgroundColor = ""),
                  this.clearContext(n),
                  n.save(),
                  n.transform(o[0], o[1], o[2], o[3], o[4], o[5]),
                  t.render(n),
                  n.restore(),
                  (t.selectionBackgroundColor = r),
                  _.util.isTransparent(n, e, i, this.targetFindTolerance)
                );
              },
              _isSelectionKeyPressed: function (t) {
                return "[object Array]" ===
                  Object.prototype.toString.call(this.selectionKey)
                  ? !!this.selectionKey.find(function (e) {
                      return !0 === t[e];
                    })
                  : t[this.selectionKey];
              },
              _shouldClearSelection: function (t, e) {
                var i = this.getActiveObjects(),
                  n = this._activeObject;
                return (
                  !e ||
                  (e &&
                    n &&
                    1 < i.length &&
                    -1 === i.indexOf(e) &&
                    n !== e &&
                    !this._isSelectionKeyPressed(t)) ||
                  (e && !e.evented) ||
                  (e && !e.selectable && n && n !== e)
                );
              },
              _shouldCenterTransform: function (t, e, i) {
                var n;
                if (t)
                  return (
                    "scale" === e ||
                    "scaleX" === e ||
                    "scaleY" === e ||
                    "resizing" === e
                      ? (n = this.centeredScaling || t.centeredScaling)
                      : "rotate" === e &&
                        (n = this.centeredRotation || t.centeredRotation),
                    n ? !i : i
                  );
              },
              _getOriginFromCorner: function (t, e) {
                return (
                  (t = { x: t.originX, y: t.originY }),
                  "ml" === e || "tl" === e || "bl" === e
                    ? (t.x = "right")
                    : ("mr" !== e && "tr" !== e && "br" !== e) ||
                      (t.x = "left"),
                  "tl" === e || "mt" === e || "tr" === e
                    ? (t.y = "bottom")
                    : ("bl" !== e && "mb" !== e && "br" !== e) || (t.y = "top"),
                  t
                );
              },
              _getActionFromCorner: function (t, e, i, n) {
                return e && t
                  ? (e = n.controls[e]).getActionName(i, e, n)
                  : "drag";
              },
              _setupCurrentTransform: function (t, e, n) {
                var r, o, s, a, h;
                e &&
                  ((h = this.getPointer(t)),
                  (r = e.__corner),
                  (a = e.controls[r]),
                  (o =
                    n && r
                      ? a.getActionHandler(t, e, a)
                      : _.controlsUtils.dragHandler),
                  (s = this._getActionFromCorner(n, r, t, e)),
                  (a = this._getOriginFromCorner(e, r)),
                  (n = t[this.centeredKey]),
                  (h = {
                    target: e,
                    action: s,
                    actionHandler: o,
                    corner: r,
                    scaleX: e.scaleX,
                    scaleY: e.scaleY,
                    skewX: e.skewX,
                    skewY: e.skewY,
                    offsetX: h.x - e.left,
                    offsetY: h.y - e.top,
                    originX: a.x,
                    originY: a.y,
                    ex: h.x,
                    ey: h.y,
                    lastX: h.x,
                    lastY: h.y,
                    theta: i(e.angle),
                    width: e.width * e.scaleX,
                    shiftKey: t.shiftKey,
                    altKey: n,
                    original: _.util.saveObjectTransform(e),
                  }),
                  this._shouldCenterTransform(e, s, n) &&
                    ((h.originX = "center"), (h.originY = "center")),
                  (h.original.originX = a.x),
                  (h.original.originY = a.y),
                  (this._currentTransform = h),
                  this._beforeTransform(t));
              },
              setCursor: function (t) {
                this.upperCanvasEl.style.cursor = t;
              },
              _drawSelection: function (t) {
                var e = this._groupSelector,
                  i = new _.Point(e.ex, e.ey),
                  n = _.util.transformPoint(i, this.viewportTransform),
                  r = new _.Point(e.ex + e.left, e.ey + e.top),
                  o = _.util.transformPoint(r, this.viewportTransform);
                (i = Math.min(n.x, o.x)),
                  (e = Math.min(n.y, o.y)),
                  (r = Math.max(n.x, o.x)),
                  (n = Math.max(n.y, o.y)),
                  (o = this.selectionLineWidth / 2),
                  this.selectionColor &&
                    ((t.fillStyle = this.selectionColor),
                    t.fillRect(i, e, r - i, n - e)),
                  this.selectionLineWidth &&
                    this.selectionBorderColor &&
                    ((t.lineWidth = this.selectionLineWidth),
                    (t.strokeStyle = this.selectionBorderColor),
                    (i += o),
                    (e += o),
                    (r -= o),
                    (n -= o),
                    _.Object.prototype._setLineDash.call(
                      this,
                      t,
                      this.selectionDashArray
                    ),
                    t.strokeRect(i, e, r - i, n - e));
              },
              findTarget: function (t, e) {
                if (!this.skipTargetFind) {
                  var i,
                    r,
                    o = this.getPointer(t, !0),
                    s = this._activeObject,
                    a = this.getActiveObjects(),
                    h = n(t),
                    l = (1 < a.length && !e) || 1 === a.length;
                  if (((this.targets = []), l && s._findTargetCorner(o, h)))
                    return s;
                  if (
                    1 < a.length &&
                    !e &&
                    s === this._searchPossibleTargets([s], o)
                  )
                    return s;
                  if (
                    1 === a.length &&
                    s === this._searchPossibleTargets([s], o)
                  ) {
                    if (!this.preserveObjectStacking) return s;
                    (i = s), (r = this.targets), (this.targets = []);
                  }
                  return (
                    (o = this._searchPossibleTargets(this._objects, o)),
                    t[this.altSelectionKey] &&
                      o &&
                      i &&
                      o !== i &&
                      ((o = i), (this.targets = r)),
                    o
                  );
                }
              },
              _checkTarget: function (t, e, i) {
                if (e && e.visible && e.evented && e.containsPoint(t))
                  return (
                    !(
                      (this.perPixelTargetFind || e.perPixelTargetFind) &&
                      !e.isEditing
                    ) ||
                    !this.isTargetTransparent(e, i.x, i.y) ||
                    void 0
                  );
              },
              _searchPossibleTargets: function (t, e) {
                for (var i, n, r = t.length; r--; ) {
                  var o = t[r],
                    s = o.group ? this._normalizePointer(o.group, e) : e;
                  if (this._checkTarget(s, o, e)) {
                    (i = t[r]).subTargetCheck &&
                      i instanceof _.Group &&
                      (n = this._searchPossibleTargets(i._objects, e)) &&
                      this.targets.push(n);
                    break;
                  }
                }
                return i;
              },
              restorePointerVpt: function (t) {
                return _.util.transformPoint(
                  t,
                  _.util.invertTransform(this.viewportTransform)
                );
              },
              getPointer: function (t, i) {
                if (this._absolutePointer && !i) return this._absolutePointer;
                if (this._pointer && i) return this._pointer;
                var n = e(t),
                  r = this.upperCanvasEl,
                  o = r.getBoundingClientRect(),
                  s = o.width || 0;
                return (
                  (t = o.height || 0),
                  (s && t) ||
                    ("top" in o &&
                      "bottom" in o &&
                      (t = Math.abs(o.top - o.bottom)),
                    "right" in o &&
                      "left" in o &&
                      (s = Math.abs(o.right - o.left))),
                  this.calcOffset(),
                  (n.x = n.x - this._offset.left),
                  (n.y = n.y - this._offset.top),
                  i || (n = this.restorePointerVpt(n)),
                  1 !== (i = this.getRetinaScaling()) &&
                    ((n.x /= i), (n.y /= i)),
                  (t =
                    0 === s || 0 === t
                      ? { width: 1, height: 1 }
                      : { width: r.width / s, height: r.height / t }),
                  { x: n.x * t.width, y: n.y * t.height }
                );
              },
              _createUpperCanvas: function () {
                var t = this.lowerCanvasEl.className.replace(
                    /\s*lower-canvas\s*/,
                    ""
                  ),
                  e = this.lowerCanvasEl,
                  i = this.upperCanvasEl;
                i
                  ? (i.className = "")
                  : ((i = this._createCanvasElement()),
                    (this.upperCanvasEl = i)),
                  _.util.addClass(i, "upper-canvas " + t),
                  this.wrapperEl.appendChild(i),
                  this._copyCanvasStyle(e, i),
                  this._applyCanvasStyle(i),
                  (this.contextTop = i.getContext("2d"));
              },
              _createCacheCanvas: function () {
                (this.cacheCanvasEl = this._createCanvasElement()),
                  this.cacheCanvasEl.setAttribute("width", this.width),
                  this.cacheCanvasEl.setAttribute("height", this.height),
                  (this.contextCache = this.cacheCanvasEl.getContext("2d"));
              },
              _initWrapperElement: function () {
                (this.wrapperEl = _.util.wrapElement(
                  this.lowerCanvasEl,
                  "div",
                  { class: this.containerClass }
                )),
                  _.util.setStyle(this.wrapperEl, {
                    width: this.width + "px",
                    height: this.height + "px",
                    position: "relative",
                  }),
                  _.util.makeElementUnselectable(this.wrapperEl);
              },
              _applyCanvasStyle: function (t) {
                var e = this.width || t.width,
                  i = this.height || t.height;
                _.util.setStyle(t, {
                  position: "absolute",
                  width: e + "px",
                  height: i + "px",
                  left: 0,
                  top: 0,
                  "touch-action": this.allowTouchScrolling
                    ? "manipulation"
                    : "none",
                  "-ms-touch-action": this.allowTouchScrolling
                    ? "manipulation"
                    : "none",
                }),
                  (t.width = e),
                  (t.height = i),
                  _.util.makeElementUnselectable(t);
              },
              _copyCanvasStyle: function (t, e) {
                e.style.cssText = t.style.cssText;
              },
              getSelectionContext: function () {
                return this.contextTop;
              },
              getSelectionElement: function () {
                return this.upperCanvasEl;
              },
              getActiveObject: function () {
                return this._activeObject;
              },
              getActiveObjects: function () {
                var t = this._activeObject;
                return t
                  ? "activeSelection" === t.type && t._objects
                    ? t._objects.slice(0)
                    : [t]
                  : [];
              },
              _onObjectRemoved: function (t) {
                t === this._activeObject &&
                  (this.fire("before:selection:cleared", { target: t }),
                  this._discardActiveObject(),
                  this.fire("selection:cleared", { target: t }),
                  t.fire("deselected")),
                  t === this._hoveredTarget &&
                    ((this._hoveredTarget = null), (this._hoveredTargets = [])),
                  this.callSuper("_onObjectRemoved", t);
              },
              _fireSelectionEvents: function (t, e) {
                var i = !1,
                  n = this.getActiveObjects(),
                  r = [],
                  o = [];
                t.forEach(function (t) {
                  -1 === n.indexOf(t) &&
                    ((i = !0),
                    t.fire("deselected", { e, target: t }),
                    o.push(t));
                }),
                  n.forEach(function (n) {
                    -1 === t.indexOf(n) &&
                      ((i = !0),
                      n.fire("selected", { e, target: n }),
                      r.push(n));
                  }),
                  0 < t.length && 0 < n.length
                    ? i &&
                      this.fire("selection:updated", {
                        e,
                        selected: r,
                        deselected: o,
                        updated: r[0] || o[0],
                        target: this._activeObject,
                      })
                    : 0 < n.length
                    ? this.fire("selection:created", {
                        e,
                        selected: r,
                        target: this._activeObject,
                      })
                    : 0 < t.length &&
                      this.fire("selection:cleared", { e, deselected: o });
              },
              setActiveObject: function (t, e) {
                var i = this.getActiveObjects();
                return (
                  this._setActiveObject(t, e),
                  this._fireSelectionEvents(i, e),
                  this
                );
              },
              _setActiveObject: function (t, e) {
                return (
                  this._activeObject !== t &&
                  !!this._discardActiveObject(e, t) &&
                  !t.onSelect({ e }) &&
                  ((this._activeObject = t), !0)
                );
              },
              _discardActiveObject: function (t, e) {
                var i = this._activeObject;
                if (i) {
                  if (i.onDeselect({ e: t, object: e })) return !1;
                  this._activeObject = null;
                }
                return !0;
              },
              discardActiveObject: function (t) {
                var e = this.getActiveObjects(),
                  i = this.getActiveObject();
                return (
                  e.length &&
                    this.fire("before:selection:cleared", { target: i, e: t }),
                  this._discardActiveObject(t),
                  this._fireSelectionEvents(e, t),
                  this
                );
              },
              dispose: function () {
                var t = this.wrapperEl;
                return (
                  this.removeListeners(),
                  t.removeChild(this.upperCanvasEl),
                  t.removeChild(this.lowerCanvasEl),
                  (this.contextCache = null),
                  (this.contextTop = null),
                  ["upperCanvasEl", "cacheCanvasEl"].forEach(
                    function (t) {
                      _.util.cleanUpJsdomNode(this[t]), (this[t] = void 0);
                    }.bind(this)
                  ),
                  t.parentNode &&
                    t.parentNode.replaceChild(
                      this.lowerCanvasEl,
                      this.wrapperEl
                    ),
                  delete this.wrapperEl,
                  _.StaticCanvas.prototype.dispose.call(this),
                  this
                );
              },
              clear: function () {
                return (
                  this.discardActiveObject(),
                  this.clearContext(this.contextTop),
                  this.callSuper("clear")
                );
              },
              drawControls: function (t) {
                var e = this._activeObject;
                e && e._renderControls(t);
              },
              _toObject: function (t, e, i) {
                var n = this._realizeGroupTransformOnObject(t);
                return (
                  (i = this.callSuper("_toObject", t, e, i)),
                  this._unwindGroupTransformOnObject(t, n),
                  i
                );
              },
              _realizeGroupTransformOnObject: function (t) {
                if (
                  t.group &&
                  "activeSelection" === t.group.type &&
                  this._activeObject === t.group
                ) {
                  var e = {};
                  return (
                    [
                      "angle",
                      "flipX",
                      "flipY",
                      "left",
                      "scaleX",
                      "scaleY",
                      "skewX",
                      "skewY",
                      "top",
                    ].forEach(function (i) {
                      e[i] = t[i];
                    }),
                    _.util.addTransformToObject(
                      t,
                      this._activeObject.calcOwnMatrix()
                    ),
                    e
                  );
                }
                return null;
              },
              _unwindGroupTransformOnObject: function (t, e) {
                e && t.set(e);
              },
              _setSVGObject: function (t, e, i) {
                var n = this._realizeGroupTransformOnObject(e);
                this.callSuper("_setSVGObject", t, e, i),
                  this._unwindGroupTransformOnObject(e, n);
              },
              setViewportTransform: function (t) {
                this.renderOnAddRemove &&
                  this._activeObject &&
                  this._activeObject.isEditing &&
                  this._activeObject.clearContextTop(),
                  _.StaticCanvas.prototype.setViewportTransform.call(this, t);
              },
            })),
            _.StaticCanvas))
              "prototype" !== t && (_.Canvas[t] = _.StaticCanvas[t]);
          })(),
          (function () {
            var t = _.util.addListener,
              e = _.util.removeListener,
              i = { passive: !1 };
            function n(t, e) {
              return t.button && t.button === e - 1;
            }
            _.util.object.extend(_.Canvas.prototype, {
              mainTouchId: null,
              _initEventListeners: function () {
                this.removeListeners(),
                  this._bindEvents(),
                  this.addOrRemove(t, "add");
              },
              _getEventPrefix: function () {
                return this.enablePointerEvents ? "pointer" : "mouse";
              },
              addOrRemove: function (t, e) {
                var n = this.upperCanvasEl,
                  r = this._getEventPrefix();
                t(_.window, "resize", this._onResize),
                  t(n, r + "down", this._onMouseDown),
                  t(n, r + "move", this._onMouseMove, i),
                  t(n, r + "out", this._onMouseOut),
                  t(n, r + "enter", this._onMouseEnter),
                  t(n, "wheel", this._onMouseWheel),
                  t(n, "contextmenu", this._onContextMenu),
                  t(n, "dblclick", this._onDoubleClick),
                  t(n, "dragover", this._onDragOver),
                  t(n, "dragenter", this._onDragEnter),
                  t(n, "dragleave", this._onDragLeave),
                  t(n, "drop", this._onDrop),
                  this.enablePointerEvents ||
                    t(n, "touchstart", this._onTouchStart, i),
                  "undefined" != typeof eventjs &&
                    e in eventjs &&
                    (eventjs[e](n, "gesture", this._onGesture),
                    eventjs[e](n, "drag", this._onDrag),
                    eventjs[e](n, "orientation", this._onOrientationChange),
                    eventjs[e](n, "shake", this._onShake),
                    eventjs[e](n, "longpress", this._onLongPress));
              },
              removeListeners: function () {
                this.addOrRemove(e, "remove");
                var t = this._getEventPrefix();
                e(_.document, t + "up", this._onMouseUp),
                  e(_.document, "touchend", this._onTouchEnd, i),
                  e(_.document, t + "move", this._onMouseMove, i),
                  e(_.document, "touchmove", this._onMouseMove, i);
              },
              _bindEvents: function () {
                this.eventsBound ||
                  ((this._onMouseDown = this._onMouseDown.bind(this)),
                  (this._onTouchStart = this._onTouchStart.bind(this)),
                  (this._onMouseMove = this._onMouseMove.bind(this)),
                  (this._onMouseUp = this._onMouseUp.bind(this)),
                  (this._onTouchEnd = this._onTouchEnd.bind(this)),
                  (this._onResize = this._onResize.bind(this)),
                  (this._onGesture = this._onGesture.bind(this)),
                  (this._onDrag = this._onDrag.bind(this)),
                  (this._onShake = this._onShake.bind(this)),
                  (this._onLongPress = this._onLongPress.bind(this)),
                  (this._onOrientationChange =
                    this._onOrientationChange.bind(this)),
                  (this._onMouseWheel = this._onMouseWheel.bind(this)),
                  (this._onMouseOut = this._onMouseOut.bind(this)),
                  (this._onMouseEnter = this._onMouseEnter.bind(this)),
                  (this._onContextMenu = this._onContextMenu.bind(this)),
                  (this._onDoubleClick = this._onDoubleClick.bind(this)),
                  (this._onDragOver = this._onDragOver.bind(this)),
                  (this._onDragEnter = this._simpleEventHandler.bind(
                    this,
                    "dragenter"
                  )),
                  (this._onDragLeave = this._simpleEventHandler.bind(
                    this,
                    "dragleave"
                  )),
                  (this._onDrop = this._simpleEventHandler.bind(this, "drop")),
                  (this.eventsBound = !0));
              },
              _onGesture: function (t, e) {
                this.__onTransformGesture && this.__onTransformGesture(t, e);
              },
              _onDrag: function (t, e) {
                this.__onDrag && this.__onDrag(t, e);
              },
              _onMouseWheel: function (t) {
                this.__onMouseWheel(t);
              },
              _onMouseOut: function (t) {
                var e = this._hoveredTarget;
                this.fire("mouse:out", { target: e, e: t }),
                  (this._hoveredTarget = null),
                  e && e.fire("mouseout", { e: t });
                var i = this;
                this._hoveredTargets.forEach(function (n) {
                  i.fire("mouse:out", { target: e, e: t }),
                    n && e.fire("mouseout", { e: t });
                }),
                  (this._hoveredTargets = []),
                  this._iTextInstances &&
                    this._iTextInstances.forEach(function (t) {
                      t.isEditing && t.hiddenTextarea.focus();
                    });
              },
              _onMouseEnter: function (t) {
                this._currentTransform ||
                  this.findTarget(t) ||
                  (this.fire("mouse:over", { target: null, e: t }),
                  (this._hoveredTarget = null),
                  (this._hoveredTargets = []));
              },
              _onOrientationChange: function (t, e) {
                this.__onOrientationChange && this.__onOrientationChange(t, e);
              },
              _onShake: function (t, e) {
                this.__onShake && this.__onShake(t, e);
              },
              _onLongPress: function (t, e) {
                this.__onLongPress && this.__onLongPress(t, e);
              },
              _onDragOver: function (t) {
                t.preventDefault();
                var e = this._simpleEventHandler("dragover", t);
                this._fireEnterLeaveEvents(e, t);
              },
              _onContextMenu: function (t) {
                return (
                  this.stopContextMenu &&
                    (t.stopPropagation(), t.preventDefault()),
                  !1
                );
              },
              _onDoubleClick: function (t) {
                this._cacheTransformEventData(t),
                  this._handleEvent(t, "dblclick"),
                  this._resetTransformEventData(t);
              },
              getPointerId: function (t) {
                var e = t.changedTouches;
                return e
                  ? e[0] && e[0].identifier
                  : this.enablePointerEvents
                  ? t.pointerId
                  : -1;
              },
              _isMainEvent: function (t) {
                return (
                  !0 === t.isPrimary ||
                  (!1 !== t.isPrimary &&
                    (("touchend" === t.type && 0 === t.touches.length) ||
                      !t.changedTouches ||
                      t.changedTouches[0].identifier === this.mainTouchId))
                );
              },
              _onTouchStart: function (n) {
                n.preventDefault(),
                  null === this.mainTouchId &&
                    (this.mainTouchId = this.getPointerId(n)),
                  this.__onMouseDown(n),
                  this._resetTransformEventData();
                var r = this.upperCanvasEl;
                (n = this._getEventPrefix()),
                  t(_.document, "touchend", this._onTouchEnd, i),
                  t(_.document, "touchmove", this._onMouseMove, i),
                  e(r, n + "down", this._onMouseDown);
              },
              _onMouseDown: function (n) {
                this.__onMouseDown(n), this._resetTransformEventData();
                var r = this.upperCanvasEl;
                (n = this._getEventPrefix()),
                  e(r, n + "move", this._onMouseMove, i),
                  t(_.document, n + "up", this._onMouseUp),
                  t(_.document, n + "move", this._onMouseMove, i);
              },
              _onTouchEnd: function (n) {
                var r, o;
                0 < n.touches.length ||
                  (this.__onMouseUp(n),
                  this._resetTransformEventData(),
                  (this.mainTouchId = null),
                  (r = this._getEventPrefix()),
                  e(_.document, "touchend", this._onTouchEnd, i),
                  e(_.document, "touchmove", this._onMouseMove, i),
                  (o = this)._willAddMouseDown &&
                    clearTimeout(this._willAddMouseDown),
                  (this._willAddMouseDown = setTimeout(function () {
                    t(o.upperCanvasEl, r + "down", o._onMouseDown),
                      (o._willAddMouseDown = 0);
                  }, 400)));
              },
              _onMouseUp: function (n) {
                this.__onMouseUp(n), this._resetTransformEventData();
                var r = this.upperCanvasEl,
                  o = this._getEventPrefix();
                this._isMainEvent(n) &&
                  (e(_.document, o + "up", this._onMouseUp),
                  e(_.document, o + "move", this._onMouseMove, i),
                  t(r, o + "move", this._onMouseMove, i));
              },
              _onMouseMove: function (t) {
                !this.allowTouchScrolling &&
                  t.preventDefault &&
                  t.preventDefault(),
                  this.__onMouseMove(t);
              },
              _onResize: function () {
                this.calcOffset();
              },
              _shouldRender: function (t) {
                var e = this._activeObject;
                return (
                  !!(!!e != !!t || (e && t && e !== t)) ||
                  (e && e.isEditing, !1)
                );
              },
              __onMouseUp: function (t) {
                var e,
                  i = this._currentTransform,
                  r = this._groupSelector,
                  o = !1,
                  s = !r || (0 === r.left && 0 === r.top);
                if (
                  (this._cacheTransformEventData(t),
                  (r = this._target),
                  this._handleEvent(t, "up:before"),
                  n(t, 3))
                )
                  this.fireRightClick && this._handleEvent(t, "up", 3, s);
                else {
                  if (n(t, 2))
                    return (
                      this.fireMiddleClick && this._handleEvent(t, "up", 2, s),
                      void this._resetTransformEventData()
                    );
                  this.isDrawingMode && this._isCurrentlyDrawing
                    ? this._onMouseUpInDrawingMode(t)
                    : this._isMainEvent(t) &&
                      (i &&
                        (this._finalizeCurrentTransform(t),
                        (o = i.actionPerformed)),
                      s ||
                        ((e = r === this._activeObject),
                        this._maybeGroupObjects(t),
                        (o =
                          o ||
                          this._shouldRender(r) ||
                          (!e && r === this._activeObject))),
                      r &&
                        (r.selectable &&
                        r !== this._activeObject &&
                        "up" === r.activeOn
                          ? (this.setActiveObject(r, t), (o = !0))
                          : ((e = r._findTargetCorner(
                              this.getPointer(t, !0),
                              _.util.isTouchEvent(t)
                            )),
                            (e =
                              (e = r.controls[e]) &&
                              e.getMouseUpHandler(t, r, e)) &&
                              e(t, i, (i = this.getPointer(t)).x, i.y)),
                        (r.isMoving = !1)),
                      this._setCursorFromEvent(t, r),
                      this._handleEvent(t, "up", 1, s),
                      (this._groupSelector = null),
                      (this._currentTransform = null),
                      r && (r.__corner = 0),
                      o ? this.requestRenderAll() : s || this.renderTop());
                }
              },
              _simpleEventHandler: function (t, e) {
                var i = this.findTarget(e),
                  n = this.targets,
                  r = { e, target: i, subTargets: n };
                if ((this.fire(t, r), i && i.fire(t, r), !n)) return i;
                for (var o = 0; o < n.length; o++) n[o].fire(t, r);
                return i;
              },
              _handleEvent: function (t, e, i, n) {
                var r = this._target,
                  o = this.targets || [],
                  s = {
                    e: t,
                    target: r,
                    subTargets: o,
                    button: i || 1,
                    isClick: n || !1,
                    pointer: this._pointer,
                    absolutePointer: this._absolutePointer,
                    transform: this._currentTransform,
                  };
                "up" === e &&
                  ((s.currentTarget = this.findTarget(t)),
                  (s.currentSubTargets = this.targets)),
                  this.fire("mouse:" + e, s),
                  r && r.fire("mouse" + e, s);
                for (var a = 0; a < o.length; a++) o[a].fire("mouse" + e, s);
              },
              _finalizeCurrentTransform: function (t) {
                var e = this._currentTransform,
                  i = e.target;
                (t = { e: t, target: i, transform: e, action: e.action }),
                  i._scaling && (i._scaling = !1),
                  i.setCoords(),
                  (e.actionPerformed ||
                    (this.stateful && i.hasStateChanged())) &&
                    (e.actionPerformed &&
                      ((e = this._addEventOptions(t, e)), this._fire(e, t)),
                    this._fire("modified", t));
              },
              _addEventOptions: function (t, e) {
                var i, n;
                switch (e.action) {
                  case "scaleX":
                    (i = "scaled"), (n = "x");
                    break;
                  case "scaleY":
                    (i = "scaled"), (n = "y");
                    break;
                  case "skewX":
                    (i = "skewed"), (n = "x");
                    break;
                  case "skewY":
                    (i = "skewed"), (n = "y");
                    break;
                  case "scale":
                    (i = "scaled"), (n = "equally");
                    break;
                  case "rotate":
                    i = "rotated";
                    break;
                  case "drag":
                    i = "moved";
                }
                return (t.by = n), i;
              },
              _onMouseDownInDrawingMode: function (t) {
                (this._isCurrentlyDrawing = !0),
                  this.getActiveObject() &&
                    this.discardActiveObject(t).requestRenderAll();
                var e = this.getPointer(t);
                this.freeDrawingBrush.onMouseDown(e, { e: t, pointer: e }),
                  this._handleEvent(t, "down");
              },
              _onMouseMoveInDrawingMode: function (t) {
                var e;
                this._isCurrentlyDrawing &&
                  ((e = this.getPointer(t)),
                  this.freeDrawingBrush.onMouseMove(e, { e: t, pointer: e })),
                  this.setCursor(this.freeDrawingCursor),
                  this._handleEvent(t, "move");
              },
              _onMouseUpInDrawingMode: function (t) {
                var e = this.getPointer(t);
                (this._isCurrentlyDrawing = this.freeDrawingBrush.onMouseUp({
                  e: t,
                  pointer: e,
                })),
                  this._handleEvent(t, "up");
              },
              __onMouseDown: function (t) {
                this._cacheTransformEventData(t),
                  this._handleEvent(t, "down:before");
                var e,
                  i,
                  r,
                  o,
                  s,
                  a = this._target;
                n(t, 3)
                  ? this.fireRightClick && this._handleEvent(t, "down", 3)
                  : n(t, 2)
                  ? this.fireMiddleClick && this._handleEvent(t, "down", 2)
                  : this.isDrawingMode
                  ? this._onMouseDownInDrawingMode(t)
                  : this._isMainEvent(t) &&
                    (this._currentTransform ||
                      ((o = this._pointer),
                      (this._previousPointer = o),
                      (e = this._shouldRender(a)),
                      (i = this._shouldGroup(t, a)),
                      this._shouldClearSelection(t, a)
                        ? this.discardActiveObject(t)
                        : i &&
                          (this._handleGrouping(t, a),
                          (a = this._activeObject)),
                      !this.selection ||
                        (a &&
                          (a.selectable ||
                            a.isEditing ||
                            a === this._activeObject)) ||
                        (this._groupSelector = {
                          ex: this._absolutePointer.x,
                          ey: this._absolutePointer.y,
                          top: 0,
                          left: 0,
                        }),
                      a &&
                        ((r = a === this._activeObject),
                        a.selectable &&
                          "down" === a.activeOn &&
                          this.setActiveObject(a, t),
                        (s = a._findTargetCorner(
                          this.getPointer(t, !0),
                          _.util.isTouchEvent(t)
                        )),
                        (a.__corner = s),
                        a !== this._activeObject ||
                          (!s && i) ||
                          (this._setupCurrentTransform(t, a, r),
                          (s = a.controls[s]),
                          (o = this.getPointer(t)),
                          (s = s && s.getMouseDownHandler(t, a, s)) &&
                            s(t, this._currentTransform, o.x, o.y))),
                      this._handleEvent(t, "down"),
                      (e || i) && this.requestRenderAll()));
              },
              _resetTransformEventData: function () {
                (this._target = null),
                  (this._pointer = null),
                  (this._absolutePointer = null);
              },
              _cacheTransformEventData: function (t) {
                this._resetTransformEventData(),
                  (this._pointer = this.getPointer(t, !0)),
                  (this._absolutePointer = this.restorePointerVpt(
                    this._pointer
                  )),
                  (this._target = this._currentTransform
                    ? this._currentTransform.target
                    : this.findTarget(t) || null);
              },
              _beforeTransform: function (t) {
                var e = this._currentTransform;
                this.stateful && e.target.saveState(),
                  this.fire("before:transform", { e: t, transform: e });
              },
              __onMouseMove: function (t) {
                var e, i;
                this._handleEvent(t, "move:before"),
                  this._cacheTransformEventData(t),
                  this.isDrawingMode
                    ? this._onMouseMoveInDrawingMode(t)
                    : this._isMainEvent(t) &&
                      ((i = this._groupSelector)
                        ? ((e = this._absolutePointer),
                          (i.left = e.x - i.ex),
                          (i.top = e.y - i.ey),
                          this.renderTop())
                        : this._currentTransform
                        ? this._transformObject(t)
                        : ((i = this.findTarget(t) || null),
                          this._setCursorFromEvent(t, i),
                          this._fireOverOutEvents(i, t)),
                      this._handleEvent(t, "move"),
                      this._resetTransformEventData());
              },
              _fireOverOutEvents: function (t, e) {
                var i = this._hoveredTarget,
                  n = this._hoveredTargets,
                  r = this.targets,
                  o = Math.max(n.length, r.length);
                this.fireSyntheticInOutEvents(t, e, {
                  oldTarget: i,
                  evtOut: "mouseout",
                  canvasEvtOut: "mouse:out",
                  evtIn: "mouseover",
                  canvasEvtIn: "mouse:over",
                });
                for (var s = 0; s < o; s++)
                  this.fireSyntheticInOutEvents(r[s], e, {
                    oldTarget: n[s],
                    evtOut: "mouseout",
                    evtIn: "mouseover",
                  });
                (this._hoveredTarget = t),
                  (this._hoveredTargets = this.targets.concat());
              },
              _fireEnterLeaveEvents: function (t, e) {
                var i = this._draggedoverTarget,
                  n = this._hoveredTargets,
                  r = this.targets,
                  o = Math.max(n.length, r.length);
                this.fireSyntheticInOutEvents(t, e, {
                  oldTarget: i,
                  evtOut: "dragleave",
                  evtIn: "dragenter",
                });
                for (var s = 0; s < o; s++)
                  this.fireSyntheticInOutEvents(r[s], e, {
                    oldTarget: n[s],
                    evtOut: "dragleave",
                    evtIn: "dragenter",
                  });
                this._draggedoverTarget = t;
              },
              fireSyntheticInOutEvents: function (t, e, i) {
                var n,
                  r,
                  o = i.oldTarget,
                  s = o !== t,
                  a = i.canvasEvtIn,
                  h = i.canvasEvtOut;
                s &&
                  ((n = { e, target: t, previousTarget: o }),
                  (r = { e, target: o, nextTarget: t })),
                  (e = t && s),
                  o && s && (h && this.fire(h, r), o.fire(i.evtOut, r)),
                  e && (a && this.fire(a, n), t.fire(i.evtIn, n));
              },
              __onMouseWheel: function (t) {
                this._cacheTransformEventData(t),
                  this._handleEvent(t, "wheel"),
                  this._resetTransformEventData();
              },
              _transformObject: function (t) {
                var e = this.getPointer(t),
                  i = this._currentTransform;
                (i.reset = !1),
                  (i.shiftKey = t.shiftKey),
                  (i.altKey = t[this.centeredKey]),
                  this._performTransformAction(t, i, e),
                  i.actionPerformed && this.requestRenderAll();
              },
              _performTransformAction: function (t, e, i) {
                var n = i.x,
                  r = i.y,
                  o = e.action,
                  s = !1;
                (i = e.actionHandler) && (s = i(t, e, n, r)),
                  "drag" === o &&
                    s &&
                    ((e.target.isMoving = !0),
                    this.setCursor(e.target.moveCursor || this.moveCursor)),
                  (e.actionPerformed = e.actionPerformed || s);
              },
              _fire: _.controlsUtils.fireEvent,
              _setCursorFromEvent: function (t, e) {
                if (!e) return this.setCursor(this.defaultCursor), !1;
                var i,
                  n = e.hoverCursor || this.hoverCursor;
                (i =
                  (!(i =
                    this._activeObject &&
                    "activeSelection" === this._activeObject.type
                      ? this._activeObject
                      : null) ||
                    !i.contains(e)) &&
                  e._findTargetCorner(this.getPointer(t, !0)))
                  ? this.setCursor(this.getCornerCursor(i, e, t))
                  : (e.subTargetCheck &&
                      this.targets
                        .concat()
                        .reverse()
                        .map(function (t) {
                          n = t.hoverCursor || n;
                        }),
                    this.setCursor(n));
              },
              getCornerCursor: function (t, e, i) {
                return (t = e.controls[t]).cursorStyleHandler(i, t, e);
              },
            });
          })(),
          (n = Math.min),
          (r = Math.max),
          _.util.object.extend(_.Canvas.prototype, {
            _shouldGroup: function (t, e) {
              var i = this._activeObject;
              return (
                i &&
                this._isSelectionKeyPressed(t) &&
                e &&
                e.selectable &&
                this.selection &&
                (i !== e || "activeSelection" === i.type) &&
                !e.onSelect({ e: t })
              );
            },
            _handleGrouping: function (t, e) {
              var i = this._activeObject;
              i.__corner ||
                ((e !== i || ((e = this.findTarget(t, !0)) && e.selectable)) &&
                  (i && "activeSelection" === i.type
                    ? this._updateActiveSelection(e, t)
                    : this._createActiveSelection(e, t)));
            },
            _updateActiveSelection: function (t, e) {
              var i = this._activeObject,
                n = i._objects.slice(0);
              i.contains(t)
                ? (i.removeWithUpdate(t),
                  (this._hoveredTarget = t),
                  (this._hoveredTargets = this.targets.concat()),
                  1 === i.size() && this._setActiveObject(i.item(0), e))
                : (i.addWithUpdate(t),
                  (this._hoveredTarget = i),
                  (this._hoveredTargets = this.targets.concat())),
                this._fireSelectionEvents(n, e);
            },
            _createActiveSelection: function (t, e) {
              var i = this.getActiveObjects();
              (t = this._createGroup(t)),
                (this._hoveredTarget = t),
                this._setActiveObject(t, e),
                this._fireSelectionEvents(i, e);
            },
            _createGroup: function (t) {
              var e = this._objects;
              return (
                (t =
                  e.indexOf(this._activeObject) < e.indexOf(t)
                    ? [this._activeObject, t]
                    : [t, this._activeObject]),
                this._activeObject.isEditing &&
                  this._activeObject.exitEditing(),
                new _.ActiveSelection(t, { canvas: this })
              );
            },
            _groupSelectedObjects: function (t) {
              var e = this._collectObjects(t);
              1 === e.length
                ? this.setActiveObject(e[0], t)
                : 1 < e.length &&
                  ((e = new _.ActiveSelection(e.reverse(), { canvas: this })),
                  this.setActiveObject(e, t));
            },
            _collectObjects: function (t) {
              for (
                var e,
                  i = [],
                  o = this._groupSelector.ex,
                  s = this._groupSelector.ey,
                  a = o + this._groupSelector.left,
                  h = s + this._groupSelector.top,
                  l = new _.Point(n(o, a), n(s, h)),
                  c = new _.Point(r(o, a), r(s, h)),
                  u = !this.selectionFullyContained,
                  f = o === a && s === h,
                  d = this._objects.length;
                d-- &&
                !(
                  (e = this._objects[d]) &&
                  e.selectable &&
                  e.visible &&
                  ((u && e.intersectsWithRect(l, c, !0)) ||
                    e.isContainedWithinRect(l, c, !0) ||
                    (u && e.containsPoint(l, null, !0)) ||
                    (u && e.containsPoint(c, null, !0))) &&
                  (i.push(e), f)
                );

              );
              return 1 < i.length
                ? i.filter(function (e) {
                    return !e.onSelect({ e: t });
                  })
                : i;
            },
            _maybeGroupObjects: function (t) {
              this.selection &&
                this._groupSelector &&
                this._groupSelectedObjects(t),
                this.setCursor(this.defaultCursor),
                (this._groupSelector = null);
            },
          }),
          _.util.object.extend(_.StaticCanvas.prototype, {
            toDataURL: function (t) {
              var e = (t = t || {}).format || "png",
                i = t.quality || 1,
                n =
                  (t.multiplier || 1) *
                  (t.enableRetinaScaling ? this.getRetinaScaling() : 1);
              return (
                (t = this.toCanvasElement(n, t)), _.util.toDataURL(t, e, i)
              );
            },
            toCanvasElement: function (t, e) {
              var i = ((e = e || {}).width || this.width) * (t = t || 1),
                n = (e.height || this.height) * t,
                r = this.getZoom(),
                o = this.width,
                s = this.height,
                a = r * t,
                h = this.viewportTransform,
                l = (h[4] - (e.left || 0)) * t;
              return (
                (r = (h[5] - (e.top || 0)) * t),
                (e = this.interactive),
                (t = [a, 0, 0, a, l, r]),
                (a = this.enableRetinaScaling),
                (l = _.util.createCanvasElement()),
                (r = this.contextTop),
                (l.width = i),
                (l.height = n),
                (this.contextTop = null),
                (this.enableRetinaScaling = !1),
                (this.interactive = !1),
                (this.viewportTransform = t),
                (this.width = i),
                (this.height = n),
                this.calcViewportBoundaries(),
                this.renderCanvas(l.getContext("2d"), this._objects),
                (this.viewportTransform = h),
                (this.width = o),
                (this.height = s),
                this.calcViewportBoundaries(),
                (this.interactive = e),
                (this.enableRetinaScaling = a),
                (this.contextTop = r),
                l
              );
            },
          }),
          _.util.object.extend(_.StaticCanvas.prototype, {
            loadFromJSON: function (t, e, i) {
              if (t) {
                var n =
                    "string" == typeof t
                      ? JSON.parse(t)
                      : _.util.object.clone(t),
                  r = this,
                  o = n.clipPath,
                  s = this.renderOnAddRemove;
                return (
                  (this.renderOnAddRemove = !1),
                  delete n.clipPath,
                  this._enlivenObjects(
                    n.objects,
                    function (t) {
                      r.clear(),
                        r._setBgOverlay(n, function () {
                          o
                            ? r._enlivenObjects([o], function (i) {
                                (r.clipPath = i[0]),
                                  r.__setupCanvas.call(r, n, t, s, e);
                              })
                            : r.__setupCanvas.call(r, n, t, s, e);
                        });
                    },
                    i
                  ),
                  this
                );
              }
            },
            __setupCanvas: function (t, e, i, n) {
              var r = this;
              e.forEach(function (t, e) {
                r.insertAt(t, e);
              }),
                (this.renderOnAddRemove = i),
                delete t.objects,
                delete t.backgroundImage,
                delete t.overlayImage,
                delete t.background,
                delete t.overlay,
                this._setOptions(t),
                this.renderAll(),
                n && n();
            },
            _setBgOverlay: function (t, e) {
              var i,
                n = {
                  backgroundColor: !1,
                  overlayColor: !1,
                  backgroundImage: !1,
                  overlayImage: !1,
                };
              t.backgroundImage || t.overlayImage || t.background || t.overlay
                ? (this.__setBgOverlay(
                    "backgroundImage",
                    t.backgroundImage,
                    n,
                    (i = function () {
                      n.backgroundImage &&
                        n.overlayImage &&
                        n.backgroundColor &&
                        n.overlayColor &&
                        e &&
                        e();
                    })
                  ),
                  this.__setBgOverlay("overlayImage", t.overlayImage, n, i),
                  this.__setBgOverlay("backgroundColor", t.background, n, i),
                  this.__setBgOverlay("overlayColor", t.overlay, n, i))
                : e && e();
            },
            __setBgOverlay: function (t, e, i, n) {
              var r = this;
              if (!e) return (i[t] = !0), void (n && n());
              "backgroundImage" === t || "overlayImage" === t
                ? _.util.enlivenObjects([e], function (e) {
                    (r[t] = e[0]), (i[t] = !0), n && n();
                  })
                : this["set" + _.util.string.capitalize(t, !0)](e, function () {
                    (i[t] = !0), n && n();
                  });
            },
            _enlivenObjects: function (t, e, i) {
              t && 0 !== t.length
                ? _.util.enlivenObjects(
                    t,
                    function (t) {
                      e && e(t);
                    },
                    null,
                    i
                  )
                : e && e([]);
            },
            _toDataURL: function (t, e) {
              this.clone(function (i) {
                e(i.toDataURL(t));
              });
            },
            _toDataURLWithMultiplier: function (t, e, i) {
              this.clone(function (n) {
                i(n.toDataURLWithMultiplier(t, e));
              });
            },
            clone: function (t, e) {
              var i = JSON.stringify(this.toJSON(e));
              this.cloneWithoutData(function (e) {
                e.loadFromJSON(i, function () {
                  t && t(e);
                });
              });
            },
            cloneWithoutData: function (t) {
              var e = _.util.createCanvasElement();
              (e.width = this.width), (e.height = this.height);
              var i = new _.Canvas(e);
              this.backgroundImage
                ? (i.setBackgroundImage(this.backgroundImage.src, function () {
                    i.renderAll(), t && t(i);
                  }),
                  (i.backgroundImageOpacity = this.backgroundImageOpacity),
                  (i.backgroundImageStretch = this.backgroundImageStretch))
                : t && t(i);
            },
          }),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.util.object.extend,
              n = e.util.object.clone,
              r = e.util.toFixed,
              o = e.util.string.capitalize,
              s = e.util.degreesToRadians;
            (t = !e.isLikelyNode),
              e.Object ||
                ((e.Object = e.util.createClass(e.CommonMethods, {
                  type: "object",
                  originX: "left",
                  originY: "top",
                  top: 0,
                  left: 0,
                  width: 0,
                  height: 0,
                  scaleX: 1,
                  scaleY: 1,
                  flipX: !1,
                  flipY: !1,
                  opacity: 1,
                  angle: 0,
                  skewX: 0,
                  skewY: 0,
                  cornerSize: 13,
                  touchCornerSize: 24,
                  transparentCorners: !0,
                  hoverCursor: null,
                  moveCursor: null,
                  padding: 0,
                  borderColor: "rgb(178,204,255)",
                  borderDashArray: null,
                  cornerColor: "rgb(178,204,255)",
                  cornerStrokeColor: null,
                  cornerStyle: "rect",
                  cornerDashArray: null,
                  centeredScaling: !1,
                  centeredRotation: !0,
                  fill: "rgb(0,0,0)",
                  fillRule: "nonzero",
                  globalCompositeOperation: "source-over",
                  backgroundColor: "",
                  selectionBackgroundColor: "",
                  stroke: null,
                  strokeWidth: 1,
                  strokeDashArray: null,
                  strokeDashOffset: 0,
                  strokeLineCap: "butt",
                  strokeLineJoin: "miter",
                  strokeMiterLimit: 4,
                  shadow: null,
                  borderOpacityWhenMoving: 0.4,
                  borderScaleFactor: 1,
                  minScaleLimit: 0,
                  selectable: !0,
                  evented: !0,
                  visible: !0,
                  hasControls: !0,
                  hasBorders: !0,
                  perPixelTargetFind: !1,
                  includeDefaultValues: !0,
                  lockMovementX: !1,
                  lockMovementY: !1,
                  lockRotation: !1,
                  lockScalingX: !1,
                  lockScalingY: !1,
                  lockSkewingX: !1,
                  lockSkewingY: !1,
                  lockScalingFlip: !1,
                  excludeFromExport: !1,
                  objectCaching: t,
                  statefullCache: !1,
                  noScaleCache: !0,
                  strokeUniform: !1,
                  dirty: !0,
                  __corner: 0,
                  paintFirst: "fill",
                  activeOn: "down",
                  stateProperties:
                    "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow visible backgroundColor skewX skewY fillRule paintFirst clipPath strokeUniform".split(
                      " "
                    ),
                  cacheProperties:
                    "fill stroke strokeWidth strokeDashArray width height paintFirst strokeUniform strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(
                      " "
                    ),
                  colorProperties: "fill stroke backgroundColor".split(" "),
                  clipPath: void 0,
                  inverted: !1,
                  absolutePositioned: !1,
                  initialize: function (t) {
                    t && this.setOptions(t);
                  },
                  _createCacheCanvas: function () {
                    (this._cacheProperties = {}),
                      (this._cacheCanvas = e.util.createCanvasElement()),
                      (this._cacheContext = this._cacheCanvas.getContext("2d")),
                      this._updateCacheCanvas(),
                      (this.dirty = !0);
                  },
                  _limitCacheSize: function (t) {
                    var i = e.perfLimitSizeTotal,
                      n = t.width,
                      r = t.height,
                      o = e.maxCacheSideLimit,
                      s = e.minCacheSideLimit;
                    if (n <= o && r <= o && n * r <= i)
                      return n < s && (t.width = s), r < s && (t.height = s), t;
                    var a = e.util.limitDimsByArea(n / r, i),
                      h = e.util.capValue;
                    return (
                      (i = h(s, a.x, o)),
                      (o = h(s, a.y, o)),
                      i < n &&
                        ((t.zoomX /= n / i), (t.width = i), (t.capped = !0)),
                      o < r &&
                        ((t.zoomY /= r / o), (t.height = o), (t.capped = !0)),
                      t
                    );
                  },
                  _getCacheCanvasDimensions: function () {
                    var t,
                      e = this.getTotalObjectScaling(),
                      i =
                        ((t = this._getTransformedDimensions(0, 0)).x *
                          e.scaleX) /
                        this.scaleX;
                    return {
                      width: 2 + i,
                      height: 2 + (t = (t.y * e.scaleY) / this.scaleY),
                      zoomX: e.scaleX,
                      zoomY: e.scaleY,
                      x: i,
                      y: t,
                    };
                  },
                  _updateCacheCanvas: function () {
                    var t = this.canvas;
                    if (this.noScaleCache && t && t._currentTransform) {
                      var i = t._currentTransform.target,
                        n = t._currentTransform.action;
                      if (this === i && n.slice && "scale" === n.slice(0, 5))
                        return !1;
                    }
                    var r = this._cacheCanvas,
                      o = this._limitCacheSize(
                        this._getCacheCanvasDimensions()
                      ),
                      s = e.minCacheSideLimit,
                      a = o.width,
                      h = o.height,
                      l = o.zoomX,
                      c = o.zoomY,
                      u = a !== this.cacheWidth || h !== this.cacheHeight,
                      f = this.zoomX !== l || this.zoomY !== c,
                      d = u || f,
                      g = 0;
                    return (
                      (t = 0),
                      (i = !1),
                      u &&
                        ((n = this._cacheCanvas.width),
                        (f = this._cacheCanvas.height),
                        (i =
                          (u = n < a || f < h) ||
                          ((a < 0.9 * n || h < 0.9 * f) && s < n && s < f)),
                        u &&
                          !o.capped &&
                          (s < a || s < h) &&
                          ((g = 0.1 * a), (t = 0.1 * h))),
                      this instanceof e.Text &&
                        this.path &&
                        ((i = d = !0),
                        (g += this.getHeightOfLine(0) * this.zoomX),
                        (t += this.getHeightOfLine(0) * this.zoomY)),
                      !!d &&
                        (i
                          ? ((r.width = Math.ceil(a + g)),
                            (r.height = Math.ceil(h + t)))
                          : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0),
                            this._cacheContext.clearRect(
                              0,
                              0,
                              r.width,
                              r.height
                            )),
                        (t = o.x / 2),
                        (o = o.y / 2),
                        (this.cacheTranslationX =
                          Math.round(r.width / 2 - t) + t),
                        (this.cacheTranslationY =
                          Math.round(r.height / 2 - o) + o),
                        (this.cacheWidth = a),
                        (this.cacheHeight = h),
                        this._cacheContext.translate(
                          this.cacheTranslationX,
                          this.cacheTranslationY
                        ),
                        this._cacheContext.scale(l, c),
                        (this.zoomX = l),
                        (this.zoomY = c),
                        !0)
                    );
                  },
                  setOptions: function (t) {
                    this._setOptions(t),
                      this._initGradient(t.fill, "fill"),
                      this._initGradient(t.stroke, "stroke"),
                      this._initPattern(t.fill, "fill"),
                      this._initPattern(t.stroke, "stroke");
                  },
                  transform: function (t) {
                    var e =
                      (this.group && !this.group._transformDone) ||
                      (this.group &&
                        this.canvas &&
                        t === this.canvas.contextTop);
                    (e = this.calcTransformMatrix(!e)),
                      t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
                  },
                  toObject: function (t) {
                    var i = e.Object.NUM_FRACTION_DIGITS;
                    return (
                      (i = {
                        type: this.type,
                        version: e.version,
                        originX: this.originX,
                        originY: this.originY,
                        left: r(this.left, i),
                        top: r(this.top, i),
                        width: r(this.width, i),
                        height: r(this.height, i),
                        fill:
                          this.fill && this.fill.toObject
                            ? this.fill.toObject()
                            : this.fill,
                        stroke:
                          this.stroke && this.stroke.toObject
                            ? this.stroke.toObject()
                            : this.stroke,
                        strokeWidth: r(this.strokeWidth, i),
                        strokeDashArray:
                          this.strokeDashArray && this.strokeDashArray.concat(),
                        strokeLineCap: this.strokeLineCap,
                        strokeDashOffset: this.strokeDashOffset,
                        strokeLineJoin: this.strokeLineJoin,
                        strokeUniform: this.strokeUniform,
                        strokeMiterLimit: r(this.strokeMiterLimit, i),
                        scaleX: r(this.scaleX, i),
                        scaleY: r(this.scaleY, i),
                        angle: r(this.angle, i),
                        flipX: this.flipX,
                        flipY: this.flipY,
                        opacity: r(this.opacity, i),
                        shadow:
                          this.shadow && this.shadow.toObject
                            ? this.shadow.toObject()
                            : this.shadow,
                        visible: this.visible,
                        backgroundColor: this.backgroundColor,
                        fillRule: this.fillRule,
                        paintFirst: this.paintFirst,
                        globalCompositeOperation: this.globalCompositeOperation,
                        skewX: r(this.skewX, i),
                        skewY: r(this.skewY, i),
                      }),
                      this.clipPath &&
                        !this.clipPath.excludeFromExport &&
                        ((i.clipPath = this.clipPath.toObject(t)),
                        (i.clipPath.inverted = this.clipPath.inverted),
                        (i.clipPath.absolutePositioned =
                          this.clipPath.absolutePositioned)),
                      e.util.populateWithProperties(this, i, t),
                      this.includeDefaultValues
                        ? i
                        : this._removeDefaultValues(i)
                    );
                  },
                  toDatalessObject: function (t) {
                    return this.toObject(t);
                  },
                  _removeDefaultValues: function (t) {
                    var i = e.util.getKlass(t.type).prototype;
                    return (
                      i.stateProperties.forEach(function (e) {
                        "left" !== e &&
                          "top" !== e &&
                          (t[e] === i[e] && delete t[e],
                          "[object Array]" ===
                            Object.prototype.toString.call(t[e]) &&
                            "[object Array]" ===
                              Object.prototype.toString.call(i[e]) &&
                            0 === t[e].length &&
                            0 === i[e].length &&
                            delete t[e]);
                      }),
                      t
                    );
                  },
                  toString: function () {
                    return "#<fabric." + o(this.type) + ">";
                  },
                  getObjectScaling: function () {
                    if (!this.group)
                      return { scaleX: this.scaleX, scaleY: this.scaleY };
                    var t = e.util.qrDecompose(this.calcTransformMatrix());
                    return {
                      scaleX: Math.abs(t.scaleX),
                      scaleY: Math.abs(t.scaleY),
                    };
                  },
                  getTotalObjectScaling: function () {
                    var t,
                      e = this.getObjectScaling(),
                      i = e.scaleX,
                      n = e.scaleY;
                    return (
                      this.canvas &&
                        ((i *=
                          (t = this.canvas.getZoom()) *
                          (e = this.canvas.getRetinaScaling())),
                        (n *= t * e)),
                      { scaleX: i, scaleY: n }
                    );
                  },
                  getObjectOpacity: function () {
                    var t = this.opacity;
                    return (
                      this.group && (t *= this.group.getObjectOpacity()), t
                    );
                  },
                  _set: function (t, i) {
                    var n,
                      r = this[t] !== i;
                    return (
                      ("scaleX" === t || "scaleY" === t) &&
                        (i = this._constrainScale(i)),
                      "scaleX" === t && i < 0
                        ? ((this.flipX = !this.flipX), (i *= -1))
                        : "scaleY" === t && i < 0
                        ? ((this.flipY = !this.flipY), (i *= -1))
                        : "shadow" !== t || !i || i instanceof e.Shadow
                        ? "dirty" === t &&
                          this.group &&
                          this.group.set("dirty", i)
                        : (i = new e.Shadow(i)),
                      (this[t] = i),
                      r &&
                        ((n = this.group && this.group.isOnACache()),
                        -1 < this.cacheProperties.indexOf(t)
                          ? ((this.dirty = !0),
                            n && this.group.set("dirty", !0))
                          : n &&
                            -1 < this.stateProperties.indexOf(t) &&
                            this.group.set("dirty", !0)),
                      this
                    );
                  },
                  setOnGroup: function () {},
                  getViewportTransform: function () {
                    return this.canvas && this.canvas.viewportTransform
                      ? this.canvas.viewportTransform
                      : e.iMatrix.concat();
                  },
                  isNotVisible: function () {
                    return (
                      0 === this.opacity ||
                      (!this.width && !this.height && 0 === this.strokeWidth) ||
                      !this.visible
                    );
                  },
                  render: function (t) {
                    this.isNotVisible() ||
                      (this.canvas &&
                        this.canvas.skipOffscreen &&
                        !this.group &&
                        !this.isOnScreen()) ||
                      (t.save(),
                      this._setupCompositeOperation(t),
                      this.drawSelectionBackground(t),
                      this.transform(t),
                      this._setOpacity(t),
                      this._setShadow(t, this),
                      this.shouldCache()
                        ? (this.renderCache(), this.drawCacheOnCanvas(t))
                        : (this._removeCacheCanvas(),
                          (this.dirty = !1),
                          this.drawObject(t),
                          this.objectCaching &&
                            this.statefullCache &&
                            this.saveState({ propertySet: "cacheProperties" })),
                      t.restore());
                  },
                  renderCache: function (t) {
                    (t = t || {}),
                      this._cacheCanvas || this._createCacheCanvas(),
                      this.isCacheDirty() &&
                        (this.statefullCache &&
                          this.saveState({ propertySet: "cacheProperties" }),
                        this.drawObject(this._cacheContext, t.forClipping),
                        (this.dirty = !1));
                  },
                  _removeCacheCanvas: function () {
                    (this._cacheCanvas = null),
                      (this.cacheWidth = 0),
                      (this.cacheHeight = 0);
                  },
                  hasStroke: function () {
                    return (
                      this.stroke &&
                      "transparent" !== this.stroke &&
                      0 !== this.strokeWidth
                    );
                  },
                  hasFill: function () {
                    return this.fill && "transparent" !== this.fill;
                  },
                  needsItsOwnCache: function () {
                    return (
                      !(
                        "stroke" !== this.paintFirst ||
                        !this.hasFill() ||
                        !this.hasStroke() ||
                        "object" != typeof this.shadow
                      ) || !!this.clipPath
                    );
                  },
                  shouldCache: function () {
                    return (
                      (this.ownCaching =
                        this.needsItsOwnCache() ||
                        (this.objectCaching &&
                          (!this.group || !this.group.isOnACache()))),
                      this.ownCaching
                    );
                  },
                  willDrawShadow: function () {
                    return (
                      !!this.shadow &&
                      (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY)
                    );
                  },
                  drawClipPathOnCache: function (t) {
                    var i,
                      n = this.clipPath;
                    t.save(),
                      n.inverted
                        ? (t.globalCompositeOperation = "destination-out")
                        : (t.globalCompositeOperation = "destination-in"),
                      n.absolutePositioned &&
                        ((i = e.util.invertTransform(
                          this.calcTransformMatrix()
                        )),
                        t.transform(i[0], i[1], i[2], i[3], i[4], i[5])),
                      n.transform(t),
                      t.scale(1 / n.zoomX, 1 / n.zoomY),
                      t.drawImage(
                        n._cacheCanvas,
                        -n.cacheTranslationX,
                        -n.cacheTranslationY
                      ),
                      t.restore();
                  },
                  drawObject: function (t, e) {
                    var i = this.fill,
                      n = this.stroke;
                    e
                      ? ((this.fill = "black"),
                        (this.stroke = ""),
                        this._setClippingProperties(t))
                      : this._renderBackground(t),
                      this._render(t),
                      this._drawClipPath(t),
                      (this.fill = i),
                      (this.stroke = n);
                  },
                  _drawClipPath: function (t) {
                    var e = this.clipPath;
                    e &&
                      ((e.canvas = this.canvas),
                      e.shouldCache(),
                      (e._transformDone = !0),
                      e.renderCache({ forClipping: !0 }),
                      this.drawClipPathOnCache(t));
                  },
                  drawCacheOnCanvas: function (t) {
                    t.scale(1 / this.zoomX, 1 / this.zoomY),
                      t.drawImage(
                        this._cacheCanvas,
                        -this.cacheTranslationX,
                        -this.cacheTranslationY
                      );
                  },
                  isCacheDirty: function (t) {
                    return !(
                      this.isNotVisible() ||
                      ((!this._cacheCanvas ||
                        t ||
                        !this._updateCacheCanvas()) &&
                        (!(
                          this.dirty ||
                          (this.clipPath && this.clipPath.absolutePositioned) ||
                          (this.statefullCache &&
                            this.hasStateChanged("cacheProperties"))
                        ) ||
                          (this._cacheCanvas &&
                            !t &&
                            ((e = this.cacheWidth / this.zoomX),
                            (t = this.cacheHeight / this.zoomY),
                            this._cacheContext.clearRect(-e / 2, -t / 2, e, t)),
                          0)))
                    );
                    var e;
                  },
                  _renderBackground: function (t) {
                    var e;
                    this.backgroundColor &&
                      ((e = this._getNonTransformedDimensions()),
                      (t.fillStyle = this.backgroundColor),
                      t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y),
                      this._removeShadow(t));
                  },
                  _setOpacity: function (t) {
                    this.group && !this.group._transformDone
                      ? (t.globalAlpha = this.getObjectOpacity())
                      : (t.globalAlpha *= this.opacity);
                  },
                  _setStrokeStyles: function (t, e) {
                    var i = e.stroke;
                    i &&
                      ((t.lineWidth = e.strokeWidth),
                      (t.lineCap = e.strokeLineCap),
                      (t.lineDashOffset = e.strokeDashOffset),
                      (t.lineJoin = e.strokeLineJoin),
                      (t.miterLimit = e.strokeMiterLimit),
                      i.toLive
                        ? "percentage" === i.gradientUnits ||
                          i.gradientTransform ||
                          i.patternTransform
                          ? this._applyPatternForTransformedGradient(t, i)
                          : ((t.strokeStyle = i.toLive(t, this)),
                            this._applyPatternGradientTransform(t, i))
                        : (t.strokeStyle = e.stroke));
                  },
                  _setFillStyles: function (t, e) {
                    var i = e.fill;
                    i &&
                      (i.toLive
                        ? ((t.fillStyle = i.toLive(t, this)),
                          this._applyPatternGradientTransform(t, e.fill))
                        : (t.fillStyle = i));
                  },
                  _setClippingProperties: function (t) {
                    (t.globalAlpha = 1),
                      (t.strokeStyle = "transparent"),
                      (t.fillStyle = "#000000");
                  },
                  _setLineDash: function (t, e) {
                    e &&
                      0 !== e.length &&
                      (1 & e.length && e.push.apply(e, e), t.setLineDash(e));
                  },
                  _renderControls: function (t, i) {
                    var n = this.getViewportTransform(),
                      r = this.calcTransformMatrix(),
                      o = (void 0 !== (i = i || {}).hasBorders ? i : this)
                        .hasBorders,
                      a = (void 0 !== i.hasControls ? i : this).hasControls;
                    (r = e.util.multiplyTransformMatrices(n, r)),
                      (r = e.util.qrDecompose(r)),
                      t.save(),
                      t.translate(r.translateX, r.translateY),
                      (t.lineWidth = +this.borderScaleFactor),
                      this.group ||
                        (t.globalAlpha = this.isMoving
                          ? this.borderOpacityWhenMoving
                          : 1),
                      t.rotate(s(r.angle)),
                      i.forActiveSelection || this.group
                        ? o && this.drawBordersInGroup(t, r, i)
                        : o && this.drawBorders(t, i),
                      a && this.drawControls(t, i),
                      t.restore();
                  },
                  _setShadow: function (t) {
                    var i, n, r, o, s;
                    this.shadow &&
                      ((i = this.shadow),
                      (r = ((n = this.canvas) && n.viewportTransform[0]) || 1),
                      (o = (n && n.viewportTransform[3]) || 1),
                      (s = i.nonScaling
                        ? { scaleX: 1, scaleY: 1 }
                        : this.getObjectScaling()),
                      n &&
                        n._isRetinaScaling() &&
                        ((r *= e.devicePixelRatio), (o *= e.devicePixelRatio)),
                      (t.shadowColor = i.color),
                      (t.shadowBlur =
                        (i.blur *
                          e.browserShadowBlurConstant *
                          (r + o) *
                          (s.scaleX + s.scaleY)) /
                        4),
                      (t.shadowOffsetX = i.offsetX * r * s.scaleX),
                      (t.shadowOffsetY = i.offsetY * o * s.scaleY));
                  },
                  _removeShadow: function (t) {
                    this.shadow &&
                      ((t.shadowColor = ""),
                      (t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0));
                  },
                  _applyPatternGradientTransform: function (t, e) {
                    if (!e || !e.toLive) return { offsetX: 0, offsetY: 0 };
                    var i = e.gradientTransform || e.patternTransform,
                      n = -this.width / 2 + e.offsetX || 0,
                      r = -this.height / 2 + e.offsetY || 0;
                    return (
                      "percentage" === e.gradientUnits
                        ? t.transform(this.width, 0, 0, this.height, n, r)
                        : t.transform(1, 0, 0, 1, n, r),
                      i && t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                      { offsetX: n, offsetY: r }
                    );
                  },
                  _renderPaintInOrder: function (t) {
                    "stroke" === this.paintFirst
                      ? (this._renderStroke(t), this._renderFill(t))
                      : (this._renderFill(t), this._renderStroke(t));
                  },
                  _render: function () {},
                  _renderFill: function (t) {
                    this.fill &&
                      (t.save(),
                      this._setFillStyles(t, this),
                      "evenodd" === this.fillRule
                        ? t.fill("evenodd")
                        : t.fill(),
                      t.restore());
                  },
                  _renderStroke: function (t) {
                    var e;
                    this.stroke &&
                      0 !== this.strokeWidth &&
                      (this.shadow &&
                        !this.shadow.affectStroke &&
                        this._removeShadow(t),
                      t.save(),
                      this.strokeUniform && this.group
                        ? ((e = this.getObjectScaling()),
                          t.scale(1 / e.scaleX, 1 / e.scaleY))
                        : this.strokeUniform &&
                          t.scale(1 / this.scaleX, 1 / this.scaleY),
                      this._setLineDash(t, this.strokeDashArray),
                      this._setStrokeStyles(t, this),
                      t.stroke(),
                      t.restore());
                  },
                  _applyPatternForTransformedGradient: function (t, i) {
                    var n,
                      r = this._limitCacheSize(
                        this._getCacheCanvasDimensions()
                      ),
                      o = e.util.createCanvasElement(),
                      s = this.canvas.getRetinaScaling(),
                      a = r.x / this.scaleX / s,
                      h = r.y / this.scaleY / s;
                    (o.width = a),
                      (o.height = h),
                      (n = o.getContext("2d")).beginPath(),
                      n.moveTo(0, 0),
                      n.lineTo(a, 0),
                      n.lineTo(a, h),
                      n.lineTo(0, h),
                      n.closePath(),
                      n.translate(a / 2, h / 2),
                      n.scale(
                        r.zoomX / this.scaleX / s,
                        r.zoomY / this.scaleY / s
                      ),
                      this._applyPatternGradientTransform(n, i),
                      (n.fillStyle = i.toLive(t)),
                      n.fill(),
                      t.translate(
                        -this.width / 2 - this.strokeWidth / 2,
                        -this.height / 2 - this.strokeWidth / 2
                      ),
                      t.scale(
                        (s * this.scaleX) / r.zoomX,
                        (s * this.scaleY) / r.zoomY
                      ),
                      (t.strokeStyle = n.createPattern(o, "no-repeat"));
                  },
                  _findCenterFromElement: function () {
                    return {
                      x: this.left + this.width / 2,
                      y: this.top + this.height / 2,
                    };
                  },
                  _assignTransformMatrixProps: function () {
                    var t;
                    this.transformMatrix &&
                      ((t = e.util.qrDecompose(this.transformMatrix)),
                      (this.flipX = !1),
                      (this.flipY = !1),
                      this.set("scaleX", t.scaleX),
                      this.set("scaleY", t.scaleY),
                      (this.angle = t.angle),
                      (this.skewX = t.skewX),
                      (this.skewY = 0));
                  },
                  _removeTransformMatrix: function (t) {
                    var i = this._findCenterFromElement();
                    this.transformMatrix &&
                      (this._assignTransformMatrixProps(),
                      (i = e.util.transformPoint(i, this.transformMatrix))),
                      (this.transformMatrix = null),
                      t &&
                        ((this.scaleX *= t.scaleX),
                        (this.scaleY *= t.scaleY),
                        (this.cropX = t.cropX),
                        (this.cropY = t.cropY),
                        (i.x += t.offsetLeft),
                        (i.y += t.offsetTop),
                        (this.width = t.width),
                        (this.height = t.height)),
                      this.setPositionByOrigin(i, "center", "center");
                  },
                  clone: function (t, i) {
                    (i = this.toObject(i)),
                      this.constructor.fromObject
                        ? this.constructor.fromObject(i, t)
                        : e.Object._fromObject("Object", i, t);
                  },
                  cloneAsImage: function (t, i) {
                    return (
                      (i = this.toCanvasElement(i)),
                      t && t(new e.Image(i)),
                      this
                    );
                  },
                  toCanvasElement: function (t) {
                    t = t || {};
                    var i = e.util,
                      n = i.saveObjectTransform(this),
                      r = this.group,
                      o = this.shadow,
                      s = Math.abs,
                      a =
                        (t.multiplier || 1) *
                        (t.enableRetinaScaling ? e.devicePixelRatio : 1);
                    delete this.group,
                      t.withoutTransform && i.resetObjectTransform(this),
                      t.withoutShadow && (this.shadow = null);
                    var h,
                      l = e.util.createCanvasElement(),
                      c = this.getBoundingRect(!0, !0),
                      u = this.shadow,
                      f = { x: 0, y: 0 };
                    return (
                      u &&
                        ((i = u.blur),
                        (h = u.nonScaling
                          ? { scaleX: 1, scaleY: 1 }
                          : this.getObjectScaling()),
                        (f.x = 2 * Math.round(s(u.offsetX) + i) * s(h.scaleX)),
                        (f.y = 2 * Math.round(s(u.offsetY) + i) * s(h.scaleY))),
                      (h = c.width + f.x),
                      (f = c.height + f.y),
                      (l.width = Math.ceil(h)),
                      (l.height = Math.ceil(f)),
                      (f = new e.StaticCanvas(l, {
                        enableRetinaScaling: !1,
                        renderOnAddRemove: !1,
                        skipOffscreen: !1,
                      })),
                      "jpeg" === t.format && (f.backgroundColor = "#fff"),
                      this.setPositionByOrigin(
                        new e.Point(f.width / 2, f.height / 2),
                        "center",
                        "center"
                      ),
                      (l = this.canvas),
                      f.add(this),
                      (t = f.toCanvasElement(a || 1, t)),
                      (this.shadow = o),
                      this.set("canvas", l),
                      r && (this.group = r),
                      this.set(n).setCoords(),
                      (f._objects = []),
                      f.dispose(),
                      (f = null),
                      t
                    );
                  },
                  toDataURL: function (t) {
                    return e.util.toDataURL(
                      this.toCanvasElement((t = t || {})),
                      t.format || "png",
                      t.quality || 1
                    );
                  },
                  isType: function (t) {
                    return this.type === t;
                  },
                  complexity: function () {
                    return 1;
                  },
                  toJSON: function (t) {
                    return this.toObject(t);
                  },
                  rotate: function (t) {
                    var e =
                      ("center" !== this.originX ||
                        "center" !== this.originY) &&
                      this.centeredRotation;
                    return (
                      e && this._setOriginToCenter(),
                      this.set("angle", t),
                      e && this._resetOrigin(),
                      this
                    );
                  },
                  centerH: function () {
                    return this.canvas && this.canvas.centerObjectH(this), this;
                  },
                  viewportCenterH: function () {
                    return (
                      this.canvas && this.canvas.viewportCenterObjectH(this),
                      this
                    );
                  },
                  centerV: function () {
                    return this.canvas && this.canvas.centerObjectV(this), this;
                  },
                  viewportCenterV: function () {
                    return (
                      this.canvas && this.canvas.viewportCenterObjectV(this),
                      this
                    );
                  },
                  center: function () {
                    return this.canvas && this.canvas.centerObject(this), this;
                  },
                  viewportCenter: function () {
                    return (
                      this.canvas && this.canvas.viewportCenterObject(this),
                      this
                    );
                  },
                  getLocalPointer: function (t, i) {
                    return (
                      (i = i || this.canvas.getPointer(t)),
                      (t = new e.Point(i.x, i.y)),
                      (i = this._getLeftTopCoords()),
                      {
                        x:
                          (t = this.angle
                            ? e.util.rotatePoint(t, i, s(-this.angle))
                            : t).x - i.x,
                        y: t.y - i.y,
                      }
                    );
                  },
                  _setupCompositeOperation: function (t) {
                    this.globalCompositeOperation &&
                      (t.globalCompositeOperation =
                        this.globalCompositeOperation);
                  },
                })),
                e.util.createAccessors && e.util.createAccessors(e.Object),
                i(e.Object.prototype, e.Observable),
                (e.Object.NUM_FRACTION_DIGITS = 2),
                (e.Object._fromObject = function (t, i, r, o) {
                  var s = e[t];
                  (i = n(i, !0)),
                    e.util.enlivenPatterns([i.fill, i.stroke], function (t) {
                      void 0 !== t[0] && (i.fill = t[0]),
                        void 0 !== t[1] && (i.stroke = t[1]),
                        e.util.enlivenObjects([i.clipPath], function (t) {
                          (i.clipPath = t[0]),
                            (t = o ? new s(i[o], i) : new s(i)),
                            r && r(t);
                        });
                    });
                }),
                (e.Object.__uid = 0));
          })(e),
          (function () {
            var t = _.util.degreesToRadians,
              e = { left: -0.5, center: 0, right: 0.5 },
              i = { top: -0.5, center: 0, bottom: 0.5 };
            _.util.object.extend(_.Object.prototype, {
              translateToGivenOrigin: function (t, n, r, o, s) {
                var a = t.x,
                  h = t.y;
                return (
                  "string" == typeof n ? (n = e[n]) : (n -= 0.5),
                  "string" == typeof o ? (o = e[o]) : (o -= 0.5),
                  "string" == typeof r ? (r = i[r]) : (r -= 0.5),
                  "string" == typeof s ? (s = i[s]) : (s -= 0.5),
                  (r = s - r),
                  ((o -= n) || r) &&
                    ((n = this._getTransformedDimensions()),
                    (a = t.x + o * n.x),
                    (h = t.y + r * n.y)),
                  new _.Point(a, h)
                );
              },
              translateToCenterPoint: function (e, i, n) {
                return (
                  (n = this.translateToGivenOrigin(
                    e,
                    i,
                    n,
                    "center",
                    "center"
                  )),
                  this.angle ? _.util.rotatePoint(n, e, t(this.angle)) : n
                );
              },
              translateToOriginPoint: function (e, i, n) {
                return (
                  (n = this.translateToGivenOrigin(
                    e,
                    "center",
                    "center",
                    i,
                    n
                  )),
                  this.angle ? _.util.rotatePoint(n, e, t(this.angle)) : n
                );
              },
              getCenterPoint: function () {
                var t = new _.Point(this.left, this.top);
                return this.translateToCenterPoint(
                  t,
                  this.originX,
                  this.originY
                );
              },
              getPointByOrigin: function (t, e) {
                var i = this.getCenterPoint();
                return this.translateToOriginPoint(i, t, e);
              },
              toLocalPoint: function (e, i, n) {
                var r = this.getCenterPoint();
                return (
                  (n =
                    void 0 !== i && void 0 !== n
                      ? this.translateToGivenOrigin(r, "center", "center", i, n)
                      : new _.Point(this.left, this.top)),
                  (e = new _.Point(e.x, e.y)),
                  (e = this.angle
                    ? _.util.rotatePoint(e, r, -t(this.angle))
                    : e).subtractEquals(n)
                );
              },
              setPositionByOrigin: function (t, e, i) {
                (i = this.translateToCenterPoint(t, e, i)),
                  (i = this.translateToOriginPoint(
                    i,
                    this.originX,
                    this.originY
                  )),
                  this.set("left", i.x),
                  this.set("top", i.y);
              },
              adjustPosition: function (i) {
                var n = t(this.angle),
                  r = this.getScaledWidth(),
                  o = _.util.cos(n) * r,
                  s = _.util.sin(n) * r;
                (n =
                  "string" == typeof this.originX
                    ? e[this.originX]
                    : this.originX - 0.5),
                  (r = "string" == typeof i ? e[i] : i - 0.5),
                  (this.left += o * (r - n)),
                  (this.top += s * (r - n)),
                  this.setCoords(),
                  (this.originX = i);
              },
              _setOriginToCenter: function () {
                (this._originalOriginX = this.originX),
                  (this._originalOriginY = this.originY);
                var t = this.getCenterPoint();
                (this.originX = "center"),
                  (this.originY = "center"),
                  (this.left = t.x),
                  (this.top = t.y);
              },
              _resetOrigin: function () {
                var t = this.translateToOriginPoint(
                  this.getCenterPoint(),
                  this._originalOriginX,
                  this._originalOriginY
                );
                (this.originX = this._originalOriginX),
                  (this.originY = this._originalOriginY),
                  (this.left = t.x),
                  (this.top = t.y),
                  (this._originalOriginX = null),
                  (this._originalOriginY = null);
              },
              _getLeftTopCoords: function () {
                return this.translateToOriginPoint(
                  this.getCenterPoint(),
                  "left",
                  "top"
                );
              },
            });
          })(),
          (function () {
            var t = _.util,
              e = t.degreesToRadians,
              i = t.multiplyTransformMatrices,
              n = t.transformPoint;
            t.object.extend(_.Object.prototype, {
              oCoords: null,
              aCoords: null,
              lineCoords: null,
              ownMatrixCache: null,
              matrixCache: null,
              controls: {},
              _getCoords: function (t, e) {
                return e
                  ? t
                    ? this.calcACoords()
                    : this.calcLineCoords()
                  : ((this.aCoords && this.lineCoords) || this.setCoords(!0),
                    t ? this.aCoords : this.lineCoords);
              },
              getCoords: function (t, e) {
                return (
                  (e = this._getCoords(t, e)),
                  [
                    new _.Point(e.tl.x, e.tl.y),
                    new _.Point(e.tr.x, e.tr.y),
                    new _.Point(e.br.x, e.br.y),
                    new _.Point(e.bl.x, e.bl.y),
                  ]
                );
              },
              intersectsWithRect: function (t, e, i, n) {
                return (
                  (n = this.getCoords(i, n)),
                  "Intersection" ===
                    _.Intersection.intersectPolygonRectangle(n, t, e).status
                );
              },
              intersectsWithObject: function (t, e, i) {
                return (
                  "Intersection" ===
                    _.Intersection.intersectPolygonPolygon(
                      this.getCoords(e, i),
                      t.getCoords(e, i)
                    ).status ||
                  t.isContainedWithinObject(this, e, i) ||
                  this.isContainedWithinObject(t, e, i)
                );
              },
              isContainedWithinObject: function (t, e, i) {
                for (
                  var n = this.getCoords(e, i),
                    r = ((e = e ? t.aCoords : t.lineCoords), 0),
                    o = t._getImageLines(e);
                  r < 4;
                  r++
                )
                  if (!t.containsPoint(n[r], o)) return !1;
                return !0;
              },
              isContainedWithinRect: function (t, e, i, n) {
                return (
                  (n = this.getBoundingRect(i, n)).left >= t.x &&
                  n.left + n.width <= e.x &&
                  n.top >= t.y &&
                  n.top + n.height <= e.y
                );
              },
              containsPoint: function (t, e, i, n) {
                return (
                  (n = this._getCoords(i, n)),
                  (e = e || this._getImageLines(n)),
                  0 !== (e = this._findCrossPoints(t, e)) && e % 2 == 1
                );
              },
              isOnScreen: function (t) {
                if (!this.canvas) return !1;
                var e = this.canvas.vptCoords.tl,
                  i = this.canvas.vptCoords.br;
                return (
                  !!this.getCoords(!0, t).some(function (t) {
                    return t.x <= i.x && t.x >= e.x && t.y <= i.y && t.y >= e.y;
                  }) ||
                  !!this.intersectsWithRect(e, i, !0, t) ||
                  this._containsCenterOfCanvas(e, i, t)
                );
              },
              _containsCenterOfCanvas: function (t, e, i) {
                return (
                  (e = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 }),
                  !!this.containsPoint(e, null, !0, i)
                );
              },
              isPartiallyOnScreen: function (t) {
                if (!this.canvas) return !1;
                var e = this.canvas.vptCoords.tl,
                  i = this.canvas.vptCoords.br;
                return (
                  !!this.intersectsWithRect(e, i, !0, t) ||
                  (this.getCoords(!0, t).every(function (t) {
                    return (
                      (t.x >= i.x || t.x <= e.x) && (t.y >= i.y || t.y <= e.y)
                    );
                  }) &&
                    this._containsCenterOfCanvas(e, i, t))
                );
              },
              _getImageLines: function (t) {
                return {
                  topline: { o: t.tl, d: t.tr },
                  rightline: { o: t.tr, d: t.br },
                  bottomline: { o: t.br, d: t.bl },
                  leftline: { o: t.bl, d: t.tl },
                };
              },
              _findCrossPoints: function (t, e) {
                var i,
                  n,
                  r,
                  o = 0;
                for (r in e)
                  if (
                    !(
                      ((n = e[r]).o.y < t.y && n.d.y < t.y) ||
                      (n.o.y >= t.y && n.d.y >= t.y) ||
                      ((n.o.x === n.d.x && n.o.x >= t.x
                        ? n.o.x
                        : ((i = (n.d.y - n.o.y) / (n.d.x - n.o.x)),
                          -(t.y - 0 * t.x - (n.o.y - i * n.o.x)) / (0 - i))) >=
                        t.x && (o += 1),
                      2 !== o)
                    )
                  )
                    break;
                return o;
              },
              getBoundingRect: function (e, i) {
                return (
                  (i = this.getCoords(e, i)), t.makeBoundingBoxFromPoints(i)
                );
              },
              getScaledWidth: function () {
                return this._getTransformedDimensions().x;
              },
              getScaledHeight: function () {
                return this._getTransformedDimensions().y;
              },
              _constrainScale: function (t) {
                return Math.abs(t) < this.minScaleLimit
                  ? t < 0
                    ? -this.minScaleLimit
                    : this.minScaleLimit
                  : 0 === t
                  ? 1e-4
                  : t;
              },
              scale: function (t) {
                return (
                  this._set("scaleX", t),
                  this._set("scaleY", t),
                  this.setCoords()
                );
              },
              scaleToWidth: function (t, e) {
                return (
                  (e = this.getBoundingRect(e).width / this.getScaledWidth()),
                  this.scale(t / this.width / e)
                );
              },
              scaleToHeight: function (t, e) {
                return (
                  (e = this.getBoundingRect(e).height / this.getScaledHeight()),
                  this.scale(t / this.height / e)
                );
              },
              calcCoords: function (t) {
                return t ? this.calcACoords() : this.calcOCoords();
              },
              calcLineCoords: function () {
                var i = this.getViewportTransform(),
                  r = this.padding,
                  o = e(this.angle),
                  s = ((o = (s = t.cos(o) * r) + (a = t.sin(o) * r)), s - a),
                  a = this.calcACoords();
                return (
                  (i = {
                    tl: n(a.tl, i),
                    tr: n(a.tr, i),
                    bl: n(a.bl, i),
                    br: n(a.br, i),
                  }),
                  r &&
                    ((i.tl.x -= s),
                    (i.tl.y -= o),
                    (i.tr.x += o),
                    (i.tr.y -= s),
                    (i.bl.x -= o),
                    (i.bl.y += s),
                    (i.br.x += s),
                    (i.br.y += o)),
                  i
                );
              },
              calcOCoords: function () {
                var t = this._calcRotateMatrix(),
                  e = this._calcTranslateMatrix(),
                  n = this.getViewportTransform(),
                  r = ((e = i(n, e)), i(e, t)),
                  o =
                    ((r = i(r, [1 / n[0], 0, 0, 1 / n[3], 0, 0])),
                    this._calculateCurrentDimensions()),
                  s = {};
                return (
                  this.forEachControl(function (t, e, i) {
                    s[e] = t.positionHandler(o, r, i);
                  }),
                  s
                );
              },
              calcACoords: function () {
                var t = this._calcRotateMatrix(),
                  e = this._calcTranslateMatrix(),
                  r = i(e, t);
                return (
                  (t = (e = this._getTransformedDimensions()).x / 2),
                  (e = e.y / 2),
                  {
                    tl: n({ x: -t, y: -e }, r),
                    tr: n({ x: t, y: -e }, r),
                    bl: n({ x: -t, y: e }, r),
                    br: n({ x: t, y: e }, r),
                  }
                );
              },
              setCoords: function (t) {
                return (
                  (this.aCoords = this.calcACoords()),
                  (this.lineCoords = this.group
                    ? this.aCoords
                    : this.calcLineCoords()),
                  t ||
                    ((this.oCoords = this.calcOCoords()),
                    this._setCornerCoords && this._setCornerCoords()),
                  this
                );
              },
              _calcRotateMatrix: function () {
                return t.calcRotateMatrix(this);
              },
              _calcTranslateMatrix: function () {
                var t = this.getCenterPoint();
                return [1, 0, 0, 1, t.x, t.y];
              },
              transformMatrixKey: function (t) {
                var e = "_",
                  i = "";
                return (
                  (i =
                    !t && this.group
                      ? this.group.transformMatrixKey(t) + e
                      : i) +
                  this.top +
                  e +
                  this.left +
                  e +
                  this.scaleX +
                  e +
                  this.scaleY +
                  e +
                  this.skewX +
                  e +
                  this.skewY +
                  e +
                  this.angle +
                  e +
                  this.originX +
                  e +
                  this.originY +
                  e +
                  this.width +
                  e +
                  this.height +
                  e +
                  this.strokeWidth +
                  this.flipX +
                  this.flipY
                );
              },
              calcTransformMatrix: function (t) {
                var e = this.calcOwnMatrix();
                if (t || !this.group) return e;
                var n = this.transformMatrixKey(t);
                return (t = this.matrixCache || (this.matrixCache = {})).key ===
                  n
                  ? t.value
                  : (this.group &&
                      (e = i(this.group.calcTransformMatrix(!1), e)),
                    (t.key = n),
                    (t.value = e));
              },
              calcOwnMatrix: function () {
                var e = this.transformMatrixKey(!0),
                  i = this.ownMatrixCache || (this.ownMatrixCache = {});
                if (i.key === e) return i.value;
                var n = this._calcTranslateMatrix();
                return (
                  (n = {
                    angle: this.angle,
                    translateX: n[4],
                    translateY: n[5],
                    scaleX: this.scaleX,
                    scaleY: this.scaleY,
                    skewX: this.skewX,
                    skewY: this.skewY,
                    flipX: this.flipX,
                    flipY: this.flipY,
                  }),
                  (i.key = e),
                  (i.value = t.composeMatrix(n)),
                  i.value
                );
              },
              _calcDimensionsTransformMatrix: function (e, i, n) {
                return t.calcDimensionsMatrix({
                  skewX: e,
                  skewY: i,
                  scaleX: this.scaleX * (n && this.flipX ? -1 : 1),
                  scaleY: this.scaleY * (n && this.flipY ? -1 : 1),
                });
              },
              _getNonTransformedDimensions: function () {
                var t = this.strokeWidth;
                return { x: this.width + t, y: this.height + t };
              },
              _getTransformedDimensions: function (e, i) {
                void 0 === e && (e = this.skewX),
                  void 0 === i && (i = this.skewY);
                var n,
                  r = 0 === e && 0 === i,
                  o = this.strokeUniform
                    ? ((n = this.width), this.height)
                    : ((n = (o = this._getNonTransformedDimensions()).x), o.y);
                return r
                  ? this._finalizeDimensions(n * this.scaleX, o * this.scaleY)
                  : ((i = t.sizeAfterTransform(n, o, {
                      scaleX: this.scaleX,
                      scaleY: this.scaleY,
                      skewX: e,
                      skewY: i,
                    })),
                    this._finalizeDimensions(i.x, i.y));
              },
              _finalizeDimensions: function (t, e) {
                return this.strokeUniform
                  ? { x: t + this.strokeWidth, y: e + this.strokeWidth }
                  : { x: t, y: e };
              },
              _calculateCurrentDimensions: function () {
                var t = this.getViewportTransform(),
                  e = this._getTransformedDimensions();
                return n(e, t, !0).scalarAdd(2 * this.padding);
              },
            });
          })(),
          _.util.object.extend(_.Object.prototype, {
            sendToBack: function () {
              return (
                this.group
                  ? _.StaticCanvas.prototype.sendToBack.call(this.group, this)
                  : this.canvas && this.canvas.sendToBack(this),
                this
              );
            },
            bringToFront: function () {
              return (
                this.group
                  ? _.StaticCanvas.prototype.bringToFront.call(this.group, this)
                  : this.canvas && this.canvas.bringToFront(this),
                this
              );
            },
            sendBackwards: function (t) {
              return (
                this.group
                  ? _.StaticCanvas.prototype.sendBackwards.call(
                      this.group,
                      this,
                      t
                    )
                  : this.canvas && this.canvas.sendBackwards(this, t),
                this
              );
            },
            bringForward: function (t) {
              return (
                this.group
                  ? _.StaticCanvas.prototype.bringForward.call(
                      this.group,
                      this,
                      t
                    )
                  : this.canvas && this.canvas.bringForward(this, t),
                this
              );
            },
            moveTo: function (t) {
              return (
                this.group && "activeSelection" !== this.group.type
                  ? _.StaticCanvas.prototype.moveTo.call(this.group, this, t)
                  : this.canvas && this.canvas.moveTo(this, t),
                this
              );
            },
          }),
          (function () {
            function t(t, e) {
              var i;
              return e
                ? e.toLive
                  ? t + ": url(#SVGID_" + e.id + "); "
                  : ((e = t + ": " + (i = new _.Color(e)).toRgb() + "; "),
                    1 !== (i = i.getAlpha()) &&
                      (e += t + "-opacity: " + i.toString() + "; "),
                    e)
                : t + ": none; ";
            }
            var e = _.util.toFixed;
            _.util.object.extend(_.Object.prototype, {
              getSvgStyles: function (e) {
                var i = this.fillRule || "nonzero",
                  n = this.strokeWidth || "0",
                  r = this.strokeDashArray
                    ? this.strokeDashArray.join(" ")
                    : "none",
                  o = this.strokeDashOffset || "0",
                  s = this.strokeLineCap || "butt",
                  a = this.strokeLineJoin || "miter",
                  h = this.strokeMiterLimit || "4",
                  l = void 0 !== this.opacity ? this.opacity : "1",
                  c = this.visible ? "" : " visibility: hidden;",
                  u = e ? "" : this.getSvgFilter();
                return (
                  (e = t("fill", this.fill)),
                  [
                    t("stroke", this.stroke),
                    "stroke-width: ",
                    n,
                    "; ",
                    "stroke-dasharray: ",
                    r,
                    "; ",
                    "stroke-linecap: ",
                    s,
                    "; ",
                    "stroke-dashoffset: ",
                    o,
                    "; ",
                    "stroke-linejoin: ",
                    a,
                    "; ",
                    "stroke-miterlimit: ",
                    h,
                    "; ",
                    e,
                    "fill-rule: ",
                    i,
                    "; ",
                    "opacity: ",
                    l,
                    ";",
                    u,
                    c,
                  ].join("")
                );
              },
              getSvgSpanStyles: function (e, i) {
                var n = "; ",
                  r = e.fontFamily
                    ? "font-family: " +
                      (-1 === e.fontFamily.indexOf("'") &&
                      -1 === e.fontFamily.indexOf('"')
                        ? "'" + e.fontFamily + "'"
                        : e.fontFamily) +
                      n
                    : "",
                  o = e.strokeWidth ? "stroke-width: " + e.strokeWidth + n : "",
                  s =
                    ((r = r),
                    e.fontSize ? "font-size: " + e.fontSize + "px" + n : ""),
                  a = e.fontStyle ? "font-style: " + e.fontStyle + n : "",
                  h = e.fontWeight ? "font-weight: " + e.fontWeight + n : "",
                  l = e.fill ? t("fill", e.fill) : "",
                  c = e.stroke ? t("stroke", e.stroke) : "",
                  u = this.getSvgTextDecoration(e);
                return [
                  c,
                  o,
                  r,
                  s,
                  a,
                  h,
                  (u = u && "text-decoration: " + u + n),
                  l,
                  e.deltaY ? "baseline-shift: " + -e.deltaY + "; " : "",
                  i ? "white-space: pre; " : "",
                ].join("");
              },
              getSvgTextDecoration: function (t) {
                return ["overline", "underline", "line-through"]
                  .filter(function (e) {
                    return t[e.replace("-", "")];
                  })
                  .join(" ");
              },
              getSvgFilter: function () {
                return this.shadow
                  ? "filter: url(#SVGID_" + this.shadow.id + ");"
                  : "";
              },
              getSvgCommons: function () {
                return [
                  this.id ? 'id="' + this.id + '" ' : "",
                  this.clipPath
                    ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" '
                    : "",
                ].join("");
              },
              getSvgTransform: function (t, e) {
                return (
                  (t = t ? this.calcTransformMatrix() : this.calcOwnMatrix()),
                  'transform="' + _.util.matrixToSVG(t) + (e || "") + '" '
                );
              },
              _setSVGBg: function (t) {
                var i;
                this.backgroundColor &&
                  ((i = _.Object.NUM_FRACTION_DIGITS),
                  t.push(
                    "\t\t<rect ",
                    this._getFillAttributes(this.backgroundColor),
                    ' x="',
                    e(-this.width / 2, i),
                    '" y="',
                    e(-this.height / 2, i),
                    '" width="',
                    e(this.width, i),
                    '" height="',
                    e(this.height, i),
                    '"></rect>\n'
                  ));
              },
              toSVG: function (t) {
                return this._createBaseSVGMarkup(this._toSVG(t), {
                  reviver: t,
                });
              },
              toClipPathSVG: function (t) {
                return (
                  "\t" +
                  this._createBaseClipPathSVGMarkup(this._toSVG(t), {
                    reviver: t,
                  })
                );
              },
              _createBaseClipPathSVGMarkup: function (t, e) {
                var i = (e = e || {}).reviver,
                  n = e.additionalTransform || "";
                return (
                  (e = [this.getSvgTransform(!0, n), this.getSvgCommons()].join(
                    ""
                  )),
                  (n = t.indexOf("COMMON_PARTS")),
                  (t[n] = e),
                  i ? i(t.join("")) : t.join("")
                );
              },
              _createBaseSVGMarkup: function (t, e) {
                var i,
                  n = (e = e || {}).noStyle,
                  r = e.reviver,
                  o = n ? "" : 'style="' + this.getSvgStyles() + '" ',
                  s = e.withShadow
                    ? 'style="' + this.getSvgFilter() + '" '
                    : "",
                  a = this.clipPath,
                  h = this.strokeUniform
                    ? 'vector-effect="non-scaling-stroke" '
                    : "",
                  l = a && a.absolutePositioned,
                  c = this.stroke,
                  u = this.fill,
                  f = this.shadow,
                  d = [],
                  g = t.indexOf("COMMON_PARTS");
                return (
                  (e = e.additionalTransform),
                  a &&
                    ((a.clipPathId = "CLIPPATH_" + _.Object.__uid++),
                    (i =
                      '<clipPath id="' +
                      a.clipPathId +
                      '" >\n' +
                      a.toClipPathSVG(r) +
                      "</clipPath>\n")),
                  l && d.push("<g ", s, this.getSvgCommons(), " >\n"),
                  d.push(
                    "<g ",
                    this.getSvgTransform(!1),
                    l ? "" : s + this.getSvgCommons(),
                    " >\n"
                  ),
                  (e = [
                    o,
                    h,
                    n ? "" : this.addPaintOrder(),
                    " ",
                    e ? 'transform="' + e + '" ' : "",
                  ].join("")),
                  (t[g] = e),
                  u && u.toLive && d.push(u.toSVG(this)),
                  c && c.toLive && d.push(c.toSVG(this)),
                  f && d.push(f.toSVG(this)),
                  a && d.push(i),
                  d.push(t.join("")),
                  d.push("</g>\n"),
                  l && d.push("</g>\n"),
                  r ? r(d.join("")) : d.join("")
                );
              },
              addPaintOrder: function () {
                return "fill" !== this.paintFirst
                  ? ' paint-order="' + this.paintFirst + '" '
                  : "";
              },
            });
          })(),
          (function () {
            var t = _.util.object.extend,
              e = "stateProperties";
            function i(e, i, n) {
              var r = {};
              n.forEach(function (t) {
                r[t] = e[t];
              }),
                t(e[i], r, !0);
            }
            _.util.object.extend(_.Object.prototype, {
              hasStateChanged: function (t) {
                var i = "_" + (t = t || e);
                return (
                  Object.keys(this[i]).length < this[t].length ||
                  !(function t(e, i, n) {
                    if (e === i) return 1;
                    if (Array.isArray(e)) {
                      if (Array.isArray(i) && e.length === i.length) {
                        for (var r = 0, o = e.length; r < o; r++)
                          if (!t(e[r], i[r])) return;
                        return 1;
                      }
                    } else if (e && "object" == typeof e) {
                      var s,
                        a = Object.keys(e);
                      if (
                        i &&
                        "object" == typeof i &&
                        (n || a.length === Object.keys(i).length)
                      ) {
                        for (r = 0, o = a.length; r < o; r++)
                          if (
                            "canvas" !== (s = a[r]) &&
                            "group" !== s &&
                            !t(e[s], i[s])
                          )
                            return;
                        return 1;
                      }
                    }
                  })(this[i], this, !0)
                );
              },
              saveState: function (t) {
                var n = (t && t.propertySet) || e,
                  r = "_" + n;
                return this[r]
                  ? (i(this, r, this[n]),
                    t && t.stateProperties && i(this, r, t.stateProperties),
                    this)
                  : this.setupState(t);
              },
              setupState: function (t) {
                var i = (t = t || {}).propertySet || e;
                return (
                  (this["_" + (t.propertySet = i)] = {}),
                  this.saveState(t),
                  this
                );
              },
            });
          })(),
          (function () {
            var t = _.util.degreesToRadians;
            _.util.object.extend(_.Object.prototype, {
              _findTargetCorner: function (t, e) {
                if (
                  !this.hasControls ||
                  this.group ||
                  !this.canvas ||
                  this.canvas._activeObject !== this
                )
                  return !1;
                var i,
                  n,
                  r = t.x,
                  o = t.y,
                  s = Object.keys(this.oCoords),
                  a = s.length - 1;
                for (this.__corner = 0; 0 <= a; a--)
                  if (
                    ((n = s[a]),
                    this.isControlVisible(n) &&
                      ((i = this._getImageLines(
                        e ? this.oCoords[n].touchCorner : this.oCoords[n].corner
                      )),
                      0 !== (i = this._findCrossPoints({ x: r, y: o }, i)) &&
                        i % 2 == 1))
                  )
                    return (this.__corner = n);
                return !1;
              },
              forEachControl: function (t) {
                for (var e in this.controls) t(this.controls[e], e, this);
              },
              _setCornerCoords: function () {
                var t,
                  e = this.oCoords;
                for (t in e) {
                  var i = this.controls[t];
                  (e[t].corner = i.calcCornerCoords(
                    this.angle,
                    this.cornerSize,
                    e[t].x,
                    e[t].y,
                    !1
                  )),
                    (e[t].touchCorner = i.calcCornerCoords(
                      this.angle,
                      this.touchCornerSize,
                      e[t].x,
                      e[t].y,
                      !0
                    ));
                }
              },
              drawSelectionBackground: function (e) {
                if (
                  !this.selectionBackgroundColor ||
                  (this.canvas && !this.canvas.interactive) ||
                  (this.canvas && this.canvas._activeObject !== this)
                )
                  return this;
                e.save();
                var i = this.getCenterPoint(),
                  n = this._calculateCurrentDimensions(),
                  r = this.canvas.viewportTransform;
                return (
                  e.translate(i.x, i.y),
                  e.scale(1 / r[0], 1 / r[3]),
                  e.rotate(t(this.angle)),
                  (e.fillStyle = this.selectionBackgroundColor),
                  e.fillRect(-n.x / 2, -n.y / 2, n.x, n.y),
                  e.restore(),
                  this
                );
              },
              drawBorders: function (t, e) {
                e = e || {};
                var i = this._calculateCurrentDimensions(),
                  n = this.borderScaleFactor,
                  r = i.x + n,
                  o = i.y + n,
                  s =
                    ((n = (void 0 !== e.hasControls ? e : this).hasControls),
                    !1);
                return (
                  t.save(),
                  (t.strokeStyle = e.borderColor || this.borderColor),
                  this._setLineDash(
                    t,
                    e.borderDashArray || this.borderDashArray
                  ),
                  t.strokeRect(-r / 2, -o / 2, r, o),
                  n &&
                    (t.beginPath(),
                    this.forEachControl(function (e, i, n) {
                      e.withConnection &&
                        e.getVisibility(n, i) &&
                        ((s = !0),
                        t.moveTo(e.x * r, e.y * o),
                        t.lineTo(e.x * r + e.offsetX, e.y * o + e.offsetY));
                    }),
                    s && t.stroke()),
                  t.restore(),
                  this
                );
              },
              drawBordersInGroup: function (t, e, i) {
                i = i || {};
                var n = _.util.sizeAfterTransform(this.width, this.height, e),
                  r = this.strokeWidth,
                  o = this.strokeUniform,
                  s = this.borderScaleFactor,
                  a = n.x + r * (o ? this.canvas.getZoom() : e.scaleX) + s;
                return (
                  (s = n.y + r * (o ? this.canvas.getZoom() : e.scaleY) + s),
                  t.save(),
                  this._setLineDash(
                    t,
                    i.borderDashArray || this.borderDashArray
                  ),
                  (t.strokeStyle = i.borderColor || this.borderColor),
                  t.strokeRect(-a / 2, -s / 2, a, s),
                  t.restore(),
                  this
                );
              },
              drawControls: function (t, e) {
                (e = e || {}), t.save();
                var i,
                  n,
                  r = this.canvas.getRetinaScaling();
                return (
                  t.setTransform(r, 0, 0, r, 0, 0),
                  (t.strokeStyle = t.fillStyle =
                    e.cornerColor || this.cornerColor),
                  this.transparentCorners ||
                    (t.strokeStyle =
                      e.cornerStrokeColor || this.cornerStrokeColor),
                  this._setLineDash(
                    t,
                    e.cornerDashArray || this.cornerDashArray
                  ),
                  this.setCoords(),
                  this.group && (i = this.group.calcTransformMatrix()),
                  this.forEachControl(function (r, o, s) {
                    (n = s.oCoords[o]),
                      r.getVisibility(s, o) &&
                        (i && (n = _.util.transformPoint(n, i)),
                        r.render(t, n.x, n.y, e, s));
                  }),
                  t.restore(),
                  this
                );
              },
              isControlVisible: function (t) {
                return (
                  this.controls[t] && this.controls[t].getVisibility(this, t)
                );
              },
              setControlVisible: function (t, e) {
                return (
                  this._controlsVisibility || (this._controlsVisibility = {}),
                  (this._controlsVisibility[t] = e),
                  this
                );
              },
              setControlsVisibility: function (t) {
                for (var e in (t = t || {})) this.setControlVisible(e, t[e]);
                return this;
              },
              onDeselect: function () {},
              onSelect: function () {},
            });
          })(),
          _.util.object.extend(_.StaticCanvas.prototype, {
            FX_DURATION: 500,
            fxCenterObjectH: function (t, e) {
              function i() {}
              var n = (e = e || {}).onComplete || i,
                r = e.onChange || i,
                o = this;
              return (
                _.util.animate({
                  startValue: t.left,
                  endValue: this.getCenter().left,
                  duration: this.FX_DURATION,
                  onChange: function (e) {
                    t.set("left", e), o.requestRenderAll(), r();
                  },
                  onComplete: function () {
                    t.setCoords(), n();
                  },
                }),
                this
              );
            },
            fxCenterObjectV: function (t, e) {
              function i() {}
              var n = (e = e || {}).onComplete || i,
                r = e.onChange || i,
                o = this;
              return (
                _.util.animate({
                  startValue: t.top,
                  endValue: this.getCenter().top,
                  duration: this.FX_DURATION,
                  onChange: function (e) {
                    t.set("top", e), o.requestRenderAll(), r();
                  },
                  onComplete: function () {
                    t.setCoords(), n();
                  },
                }),
                this
              );
            },
            fxRemove: function (t, e) {
              function i() {}
              var n = (e = e || {}).onComplete || i,
                r = e.onChange || i,
                o = this;
              return (
                _.util.animate({
                  startValue: t.opacity,
                  endValue: 0,
                  duration: this.FX_DURATION,
                  onChange: function (e) {
                    t.set("opacity", e), o.requestRenderAll(), r();
                  },
                  onComplete: function () {
                    o.remove(t), n();
                  },
                }),
                this
              );
            },
          }),
          _.util.object.extend(_.Object.prototype, {
            animate: function () {
              if (arguments[0] && "object" == typeof arguments[0]) {
                var t,
                  e,
                  i = [];
                for (t in arguments[0]) i.push(t);
                for (var n = 0, r = i.length; n < r; n++)
                  (t = i[n]),
                    (e = n !== r - 1),
                    this._animate(t, arguments[0][t], arguments[1], e);
              } else this._animate.apply(this, arguments);
              return this;
            },
            _animate: function (t, e, i, n) {
              var r,
                o = this;
              (e = e.toString()),
                (i = i ? _.util.object.clone(i) : {}),
                ~t.indexOf(".") && (r = t.split("."));
              var s =
                  -1 < o.colorProperties.indexOf(t) ||
                  (r && -1 < o.colorProperties.indexOf(r[1])),
                a = r ? this.get(r[0])[r[1]] : this.get(t);
              return (
                "from" in i || (i.from = a),
                s ||
                  (e = ~e.indexOf("=")
                    ? a + parseFloat(e.replace("=", ""))
                    : parseFloat(e)),
                (e = {
                  startValue: i.from,
                  endValue: e,
                  byValue: i.by,
                  easing: i.easing,
                  duration: i.duration,
                  abort:
                    i.abort &&
                    function (t, e, n) {
                      return i.abort.call(o, t, e, n);
                    },
                  onChange: function (e, s, a) {
                    r ? (o[r[0]][r[1]] = e) : o.set(t, e),
                      n || (i.onChange && i.onChange(e, s, a));
                  },
                  onComplete: function (t, e, r) {
                    n || (o.setCoords(), i.onComplete && i.onComplete(t, e, r));
                  },
                }),
                s
                  ? _.util.animateColor(e.startValue, e.endValue, e.duration, e)
                  : _.util.animate(e)
              );
            },
          }),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.util.object.extend,
              n = e.util.object.clone,
              r = { x1: 1, x2: 1, y1: 1, y2: 1 };
            function o(t, e) {
              var i = t.origin,
                n = t.axis1,
                r = t.axis2,
                o = t.dimension,
                s = e.nearest,
                a = e.center,
                h = e.farthest;
              return function () {
                switch (this.get(i)) {
                  case s:
                    return Math.min(this.get(n), this.get(r));
                  case a:
                    return (
                      Math.min(this.get(n), this.get(r)) + 0.5 * this.get(o)
                    );
                  case h:
                    return Math.max(this.get(n), this.get(r));
                }
              };
            }
            e.Line
              ? e.warn("fabric.Line is already defined")
              : ((e.Line = e.util.createClass(e.Object, {
                  type: "line",
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 0,
                  cacheProperties: e.Object.prototype.cacheProperties.concat(
                    "x1",
                    "x2",
                    "y1",
                    "y2"
                  ),
                  initialize: function (t, e) {
                    (t = t || [0, 0, 0, 0]),
                      this.callSuper("initialize", e),
                      this.set("x1", t[0]),
                      this.set("y1", t[1]),
                      this.set("x2", t[2]),
                      this.set("y2", t[3]),
                      this._setWidthHeight(e);
                  },
                  _setWidthHeight: function (t) {
                    (t = t || {}),
                      (this.width = Math.abs(this.x2 - this.x1)),
                      (this.height = Math.abs(this.y2 - this.y1)),
                      (this.left =
                        "left" in t ? t.left : this._getLeftToOriginX()),
                      (this.top = "top" in t ? t.top : this._getTopToOriginY());
                  },
                  _set: function (t, e) {
                    return (
                      this.callSuper("_set", t, e),
                      void 0 !== r[t] && this._setWidthHeight(),
                      this
                    );
                  },
                  _getLeftToOriginX: o(
                    {
                      origin: "originX",
                      axis1: "x1",
                      axis2: "x2",
                      dimension: "width",
                    },
                    { nearest: "left", center: "center", farthest: "right" }
                  ),
                  _getTopToOriginY: o(
                    {
                      origin: "originY",
                      axis1: "y1",
                      axis2: "y2",
                      dimension: "height",
                    },
                    { nearest: "top", center: "center", farthest: "bottom" }
                  ),
                  _render: function (t) {
                    t.beginPath();
                    var e = this.calcLinePoints();
                    t.moveTo(e.x1, e.y1),
                      t.lineTo(e.x2, e.y2),
                      (t.lineWidth = this.strokeWidth),
                      (e = t.strokeStyle),
                      (t.strokeStyle = this.stroke || t.fillStyle),
                      this.stroke && this._renderStroke(t),
                      (t.strokeStyle = e);
                  },
                  _findCenterFromElement: function () {
                    return {
                      x: (this.x1 + this.x2) / 2,
                      y: (this.y1 + this.y2) / 2,
                    };
                  },
                  toObject: function (t) {
                    return i(
                      this.callSuper("toObject", t),
                      this.calcLinePoints()
                    );
                  },
                  _getNonTransformedDimensions: function () {
                    var t = this.callSuper("_getNonTransformedDimensions");
                    return (
                      "butt" === this.strokeLineCap &&
                        (0 === this.width && (t.y -= this.strokeWidth),
                        0 === this.height && (t.x -= this.strokeWidth)),
                      t
                    );
                  },
                  calcLinePoints: function () {
                    var t = this.x1 <= this.x2 ? -1 : 1,
                      e = this.y1 <= this.y2 ? -1 : 1,
                      i = t * this.width * 0.5,
                      n = e * this.height * 0.5;
                    return {
                      x1: i,
                      x2: t * this.width * -0.5,
                      y1: n,
                      y2: e * this.height * -0.5,
                    };
                  },
                  _toSVG: function () {
                    var t = this.calcLinePoints();
                    return [
                      "<line ",
                      "COMMON_PARTS",
                      'x1="',
                      t.x1,
                      '" y1="',
                      t.y1,
                      '" x2="',
                      t.x2,
                      '" y2="',
                      t.y2,
                      '" />\n',
                    ];
                  },
                })),
                (e.Line.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(
                  "x1 y1 x2 y2".split(" ")
                )),
                (e.Line.fromElement = function (t, n, r) {
                  r = r || {};
                  var o = e.parseAttributes(t, e.Line.ATTRIBUTE_NAMES);
                  (t = [o.x1 || 0, o.y1 || 0, o.x2 || 0, o.y2 || 0]),
                    n(new e.Line(t, i(o, r)));
                }),
                (e.Line.fromObject = function (t, i) {
                  var r = n(t, !0);
                  (r.points = [t.x1, t.y1, t.x2, t.y2]),
                    e.Object._fromObject(
                      "Line",
                      r,
                      function (t) {
                        delete t.points, i && i(t);
                      },
                      "points"
                    );
                }));
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = Math.PI;
            e.Circle
              ? e.warn("fabric.Circle is already defined.")
              : ((e.Circle = e.util.createClass(e.Object, {
                  type: "circle",
                  radius: 0,
                  startAngle: 0,
                  endAngle: 2 * i,
                  cacheProperties: e.Object.prototype.cacheProperties.concat(
                    "radius",
                    "startAngle",
                    "endAngle"
                  ),
                  _set: function (t, e) {
                    return (
                      this.callSuper("_set", t, e),
                      "radius" === t && this.setRadius(e),
                      this
                    );
                  },
                  toObject: function (t) {
                    return this.callSuper(
                      "toObject",
                      ["radius", "startAngle", "endAngle"].concat(t)
                    );
                  },
                  _toSVG: function () {
                    var t,
                      n,
                      r,
                      o,
                      s = (this.endAngle - this.startAngle) % (2 * i);
                    return 0 == s
                      ? [
                          "<circle ",
                          "COMMON_PARTS",
                          'cx="0" cy="0" ',
                          'r="',
                          this.radius,
                          '" />\n',
                        ]
                      : ((t = e.util.cos(this.startAngle) * this.radius),
                        (n = e.util.sin(this.startAngle) * this.radius),
                        (r = e.util.cos(this.endAngle) * this.radius),
                        (o = e.util.sin(this.endAngle) * this.radius),
                        [
                          '<path d="M ' + t + " " + n,
                          " A " + this.radius + " " + this.radius,
                          " 0 ",
                          +(i < s ? "1" : "0") + " 1",
                          " " + r + " " + o,
                          '" ',
                          "COMMON_PARTS",
                          " />\n",
                        ]);
                  },
                  _render: function (t) {
                    t.beginPath(),
                      t.arc(
                        0,
                        0,
                        this.radius,
                        this.startAngle,
                        this.endAngle,
                        !1
                      ),
                      this._renderPaintInOrder(t);
                  },
                  getRadiusX: function () {
                    return this.get("radius") * this.get("scaleX");
                  },
                  getRadiusY: function () {
                    return this.get("radius") * this.get("scaleY");
                  },
                  setRadius: function (t) {
                    return (
                      (this.radius = t),
                      this.set("width", 2 * t).set("height", 2 * t)
                    );
                  },
                })),
                (e.Circle.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(
                  "cx cy r".split(" ")
                )),
                (e.Circle.fromElement = function (t, i) {
                  var n = e.parseAttributes(t, e.Circle.ATTRIBUTE_NAMES);
                  if (!("radius" in (t = n) && 0 <= t.radius))
                    throw new Error(
                      "value of `r` attribute is required and can not be negative"
                    );
                  (n.left = (n.left || 0) - n.radius),
                    (n.top = (n.top || 0) - n.radius),
                    i(new e.Circle(n));
                }),
                (e.Circle.fromObject = function (t, i) {
                  e.Object._fromObject("Circle", t, i);
                }));
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {});
            e.Triangle
              ? e.warn("fabric.Triangle is already defined")
              : ((e.Triangle = e.util.createClass(e.Object, {
                  type: "triangle",
                  width: 100,
                  height: 100,
                  _render: function (t) {
                    var e = this.width / 2,
                      i = this.height / 2;
                    t.beginPath(),
                      t.moveTo(-e, i),
                      t.lineTo(0, -i),
                      t.lineTo(e, i),
                      t.closePath(),
                      this._renderPaintInOrder(t);
                  },
                  _toSVG: function () {
                    var t = this.width / 2,
                      e = this.height / 2;
                    return [
                      "<polygon ",
                      "COMMON_PARTS",
                      'points="',
                      [-t + " " + e, "0 " + -e, t + " " + e].join(","),
                      '" />',
                    ];
                  },
                })),
                (e.Triangle.fromObject = function (t, i) {
                  return e.Object._fromObject("Triangle", t, i);
                }));
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = 2 * Math.PI;
            e.Ellipse
              ? e.warn("fabric.Ellipse is already defined.")
              : ((e.Ellipse = e.util.createClass(e.Object, {
                  type: "ellipse",
                  rx: 0,
                  ry: 0,
                  cacheProperties: e.Object.prototype.cacheProperties.concat(
                    "rx",
                    "ry"
                  ),
                  initialize: function (t) {
                    this.callSuper("initialize", t),
                      this.set("rx", (t && t.rx) || 0),
                      this.set("ry", (t && t.ry) || 0);
                  },
                  _set: function (t, e) {
                    switch ((this.callSuper("_set", t, e), t)) {
                      case "rx":
                        (this.rx = e), this.set("width", 2 * e);
                        break;
                      case "ry":
                        (this.ry = e), this.set("height", 2 * e);
                    }
                    return this;
                  },
                  getRx: function () {
                    return this.get("rx") * this.get("scaleX");
                  },
                  getRy: function () {
                    return this.get("ry") * this.get("scaleY");
                  },
                  toObject: function (t) {
                    return this.callSuper("toObject", ["rx", "ry"].concat(t));
                  },
                  _toSVG: function () {
                    return [
                      "<ellipse ",
                      "COMMON_PARTS",
                      'cx="0" cy="0" ',
                      'rx="',
                      this.rx,
                      '" ry="',
                      this.ry,
                      '" />\n',
                    ];
                  },
                  _render: function (t) {
                    t.beginPath(),
                      t.save(),
                      t.transform(1, 0, 0, this.ry / this.rx, 0, 0),
                      t.arc(0, 0, this.rx, 0, i, !1),
                      t.restore(),
                      this._renderPaintInOrder(t);
                  },
                })),
                (e.Ellipse.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(
                  "cx cy rx ry".split(" ")
                )),
                (e.Ellipse.fromElement = function (t, i) {
                  ((t = e.parseAttributes(t, e.Ellipse.ATTRIBUTE_NAMES)).left =
                    (t.left || 0) - t.rx),
                    (t.top = (t.top || 0) - t.ry),
                    i(new e.Ellipse(t));
                }),
                (e.Ellipse.fromObject = function (t, i) {
                  e.Object._fromObject("Ellipse", t, i);
                }));
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.util.object.extend;
            e.Rect
              ? e.warn("fabric.Rect is already defined")
              : ((e.Rect = e.util.createClass(e.Object, {
                  stateProperties: e.Object.prototype.stateProperties.concat(
                    "rx",
                    "ry"
                  ),
                  type: "rect",
                  rx: 0,
                  ry: 0,
                  cacheProperties: e.Object.prototype.cacheProperties.concat(
                    "rx",
                    "ry"
                  ),
                  initialize: function (t) {
                    this.callSuper("initialize", t), this._initRxRy();
                  },
                  _initRxRy: function () {
                    this.rx && !this.ry
                      ? (this.ry = this.rx)
                      : this.ry && !this.rx && (this.rx = this.ry);
                  },
                  _render: function (t) {
                    var e = this.rx ? Math.min(this.rx, this.width / 2) : 0,
                      i = this.ry ? Math.min(this.ry, this.height / 2) : 0,
                      n = this.width,
                      r = this.height,
                      o = -this.width / 2,
                      s = -this.height / 2,
                      a = 0 !== e || 0 !== i,
                      h = 0.4477152502;
                    t.beginPath(),
                      t.moveTo(o + e, s),
                      t.lineTo(o + n - e, s),
                      a &&
                        t.bezierCurveTo(
                          o + n - h * e,
                          s,
                          o + n,
                          s + h * i,
                          o + n,
                          s + i
                        ),
                      t.lineTo(o + n, s + r - i),
                      a &&
                        t.bezierCurveTo(
                          o + n,
                          s + r - h * i,
                          o + n - h * e,
                          s + r,
                          o + n - e,
                          s + r
                        ),
                      t.lineTo(o + e, s + r),
                      a &&
                        t.bezierCurveTo(
                          o + h * e,
                          s + r,
                          o,
                          s + r - h * i,
                          o,
                          s + r - i
                        ),
                      t.lineTo(o, s + i),
                      a &&
                        t.bezierCurveTo(o, s + h * i, o + h * e, s, o + e, s),
                      t.closePath(),
                      this._renderPaintInOrder(t);
                  },
                  toObject: function (t) {
                    return this.callSuper("toObject", ["rx", "ry"].concat(t));
                  },
                  _toSVG: function () {
                    return [
                      "<rect ",
                      "COMMON_PARTS",
                      'x="',
                      -this.width / 2,
                      '" y="',
                      -this.height / 2,
                      '" rx="',
                      this.rx,
                      '" ry="',
                      this.ry,
                      '" width="',
                      this.width,
                      '" height="',
                      this.height,
                      '" />\n',
                    ];
                  },
                })),
                (e.Rect.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(
                  "x y rx ry width height".split(" ")
                )),
                (e.Rect.fromElement = function (t, n, r) {
                  if (!t) return n(null);
                  (r = r || {}),
                    ((t = e.parseAttributes(t, e.Rect.ATTRIBUTE_NAMES)).left =
                      t.left || 0),
                    (t.top = t.top || 0),
                    (t.height = t.height || 0),
                    (t.width = t.width || 0),
                    ((t = new e.Rect(
                      i(r ? e.util.object.clone(r) : {}, t)
                    )).visible = t.visible && 0 < t.width && 0 < t.height),
                    n(t);
                }),
                (e.Rect.fromObject = function (t, i) {
                  return e.Object._fromObject("Rect", t, i);
                }));
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.util.object.extend,
              n = e.util.array.min,
              r = e.util.array.max,
              o = e.util.toFixed;
            e.Polyline
              ? e.warn("fabric.Polyline is already defined")
              : ((e.Polyline = e.util.createClass(e.Object, {
                  type: "polyline",
                  points: null,
                  cacheProperties:
                    e.Object.prototype.cacheProperties.concat("points"),
                  initialize: function (t, e) {
                    (e = e || {}),
                      (this.points = t || []),
                      this.callSuper("initialize", e),
                      this._setPositionDimensions(e);
                  },
                  _setPositionDimensions: function (t) {
                    var e,
                      i = this._calcDimensions(t);
                    (this.width = i.width),
                      (this.height = i.height),
                      t.fromSVG ||
                        (e = this.translateToGivenOrigin(
                          {
                            x: i.left - this.strokeWidth / 2,
                            y: i.top - this.strokeWidth / 2,
                          },
                          "left",
                          "top",
                          this.originX,
                          this.originY
                        )),
                      void 0 === t.left &&
                        (this.left = t.fromSVG ? i.left : e.x),
                      void 0 === t.top && (this.top = t.fromSVG ? i.top : e.y),
                      (this.pathOffset = {
                        x: i.left + this.width / 2,
                        y: i.top + this.height / 2,
                      });
                  },
                  _calcDimensions: function () {
                    var t = this.points,
                      e = n(t, "x") || 0,
                      i = n(t, "y") || 0;
                    return {
                      left: e,
                      top: i,
                      width: (r(t, "x") || 0) - e,
                      height: (r(t, "y") || 0) - i,
                    };
                  },
                  toObject: function (t) {
                    return i(this.callSuper("toObject", t), {
                      points: this.points.concat(),
                    });
                  },
                  _toSVG: function () {
                    for (
                      var t = [],
                        i = this.pathOffset.x,
                        n = this.pathOffset.y,
                        r = e.Object.NUM_FRACTION_DIGITS,
                        s = 0,
                        a = this.points.length;
                      s < a;
                      s++
                    )
                      t.push(
                        o(this.points[s].x - i, r),
                        ",",
                        o(this.points[s].y - n, r),
                        " "
                      );
                    return [
                      "<" + this.type + " ",
                      "COMMON_PARTS",
                      'points="',
                      t.join(""),
                      '" />\n',
                    ];
                  },
                  commonRender: function (t) {
                    var e,
                      i = this.points.length,
                      n = this.pathOffset.x,
                      r = this.pathOffset.y;
                    if (!i || isNaN(this.points[i - 1].y)) return !1;
                    t.beginPath(),
                      t.moveTo(this.points[0].x - n, this.points[0].y - r);
                    for (var o = 0; o < i; o++)
                      (e = this.points[o]), t.lineTo(e.x - n, e.y - r);
                    return !0;
                  },
                  _render: function (t) {
                    this.commonRender(t) && this._renderPaintInOrder(t);
                  },
                  complexity: function () {
                    return this.get("points").length;
                  },
                })),
                (e.Polyline.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat()),
                (e.Polyline.fromElementGenerator = function (t) {
                  return function (n, r, o) {
                    if (!n) return r(null);
                    o = o || {};
                    var s = e.parsePointsAttribute(n.getAttribute("points"));
                    ((n = e.parseAttributes(n, e[t].ATTRIBUTE_NAMES)).fromSVG =
                      !0),
                      r(new e[t](s, i(n, o)));
                  };
                }),
                (e.Polyline.fromElement =
                  e.Polyline.fromElementGenerator("Polyline")),
                (e.Polyline.fromObject = function (t, i) {
                  return e.Object._fromObject("Polyline", t, i, "points");
                }));
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {});
            e.Polygon
              ? e.warn("fabric.Polygon is already defined")
              : ((e.Polygon = e.util.createClass(e.Polyline, {
                  type: "polygon",
                  _render: function (t) {
                    this.commonRender(t) &&
                      (t.closePath(), this._renderPaintInOrder(t));
                  },
                })),
                (e.Polygon.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat()),
                (e.Polygon.fromElement =
                  e.Polyline.fromElementGenerator("Polygon")),
                (e.Polygon.fromObject = function (t, i) {
                  e.Object._fromObject("Polygon", t, i, "points");
                }));
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.util.array.min,
              n = e.util.array.max,
              r = e.util.object.extend,
              o = Object.prototype.toString,
              s = e.util.toFixed;
            e.Path
              ? e.warn("fabric.Path is already defined")
              : ((e.Path = e.util.createClass(e.Object, {
                  type: "path",
                  path: null,
                  cacheProperties: e.Object.prototype.cacheProperties.concat(
                    "path",
                    "fillRule"
                  ),
                  stateProperties:
                    e.Object.prototype.stateProperties.concat("path"),
                  initialize: function (t, i) {
                    this.callSuper("initialize", (i = i || {}));
                    var n = "[object Array]" === o.call((t = t || []));
                    (this.path = e.util.makePathSimpler(
                      n ? t : e.util.parsePath(t)
                    )),
                      this.path &&
                        e.Polyline.prototype._setPositionDimensions.call(
                          this,
                          i
                        );
                  },
                  _renderPathCommands: function (t) {
                    var e,
                      i = 0,
                      n = 0,
                      r = 0,
                      o = 0,
                      s = 0,
                      a = 0,
                      h = -this.pathOffset.x,
                      l = -this.pathOffset.y;
                    t.beginPath();
                    for (var c = 0, u = this.path.length; c < u; ++c)
                      switch ((e = this.path[c])[0]) {
                        case "L":
                          (r = e[1]), (o = e[2]), t.lineTo(r + h, o + l);
                          break;
                        case "M":
                          (i = r = e[1]),
                            (n = o = e[2]),
                            t.moveTo(r + h, o + l);
                          break;
                        case "C":
                          (r = e[5]),
                            (o = e[6]),
                            (s = e[3]),
                            (a = e[4]),
                            t.bezierCurveTo(
                              e[1] + h,
                              e[2] + l,
                              s + h,
                              a + l,
                              r + h,
                              o + l
                            );
                          break;
                        case "Q":
                          t.quadraticCurveTo(
                            e[1] + h,
                            e[2] + l,
                            e[3] + h,
                            e[4] + l
                          ),
                            (r = e[3]),
                            (o = e[4]),
                            (s = e[1]),
                            (a = e[2]);
                          break;
                        case "z":
                        case "Z":
                          (r = i), (o = n), t.closePath();
                      }
                  },
                  _render: function (t) {
                    this._renderPathCommands(t), this._renderPaintInOrder(t);
                  },
                  toString: function () {
                    return (
                      "#<fabric.Path (" +
                      this.complexity() +
                      '): { "top": ' +
                      this.top +
                      ', "left": ' +
                      this.left +
                      " }>"
                    );
                  },
                  toObject: function (t) {
                    return r(this.callSuper("toObject", t), {
                      path: this.path.map(function (t) {
                        return t.slice();
                      }),
                    });
                  },
                  toDatalessObject: function (t) {
                    return (
                      (t = this.toObject(["sourcePath"].concat(t)))
                        .sourcePath && delete t.path,
                      t
                    );
                  },
                  _toSVG: function () {
                    return [
                      "<path ",
                      "COMMON_PARTS",
                      'd="',
                      e.util.joinPath(this.path),
                      '" stroke-linecap="round" ',
                      "/>\n",
                    ];
                  },
                  _getOffsetTransform: function () {
                    var t = e.Object.NUM_FRACTION_DIGITS;
                    return (
                      " translate(" +
                      s(-this.pathOffset.x, t) +
                      ", " +
                      s(-this.pathOffset.y, t) +
                      ")"
                    );
                  },
                  toClipPathSVG: function (t) {
                    var e = this._getOffsetTransform();
                    return (
                      "\t" +
                      this._createBaseClipPathSVGMarkup(this._toSVG(), {
                        reviver: t,
                        additionalTransform: e,
                      })
                    );
                  },
                  toSVG: function (t) {
                    var e = this._getOffsetTransform();
                    return this._createBaseSVGMarkup(this._toSVG(), {
                      reviver: t,
                      additionalTransform: e,
                    });
                  },
                  complexity: function () {
                    return this.path.length;
                  },
                  _calcDimensions: function () {
                    for (
                      var t,
                        r,
                        o = [],
                        s = [],
                        a = 0,
                        h = 0,
                        l = 0,
                        c = 0,
                        u = 0,
                        f = this.path.length;
                      u < f;
                      ++u
                    ) {
                      switch ((t = this.path[u])[0]) {
                        case "L":
                          (l = t[1]), (c = t[2]), (r = []);
                          break;
                        case "M":
                          (a = l = t[1]), (h = c = t[2]), (r = []);
                          break;
                        case "C":
                          (r = e.util.getBoundsOfCurve(
                            l,
                            c,
                            t[1],
                            t[2],
                            t[3],
                            t[4],
                            t[5],
                            t[6]
                          )),
                            (l = t[5]),
                            (c = t[6]);
                          break;
                        case "Q":
                          (r = e.util.getBoundsOfCurve(
                            l,
                            c,
                            t[1],
                            t[2],
                            t[1],
                            t[2],
                            t[3],
                            t[4]
                          )),
                            (l = t[3]),
                            (c = t[4]);
                          break;
                        case "z":
                        case "Z":
                          (l = a), (c = h);
                      }
                      r.forEach(function (t) {
                        o.push(t.x), s.push(t.y);
                      }),
                        o.push(l),
                        s.push(c);
                    }
                    var d = i(o) || 0,
                      g = i(s) || 0;
                    return {
                      left: d,
                      top: g,
                      width: (n(o) || 0) - d,
                      height: (n(s) || 0) - g,
                    };
                  },
                })),
                (e.Path.fromObject = function (t, i) {
                  var n;
                  "string" == typeof t.sourcePath
                    ? ((n = t.sourcePath),
                      e.loadSVGFromURL(n, function (e) {
                        (e = e[0]).setOptions(t), i && i(e);
                      }))
                    : e.Object._fromObject("Path", t, i, "path");
                }),
                (e.Path.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(["d"])),
                (e.Path.fromElement = function (t, i, n) {
                  ((t = e.parseAttributes(t, e.Path.ATTRIBUTE_NAMES)).fromSVG =
                    !0),
                    i(new e.Path(t.d, r(t, n)));
                }));
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.util.array.min,
              n = e.util.array.max;
            e.Group ||
              ((e.Group = e.util.createClass(e.Object, e.Collection, {
                type: "group",
                strokeWidth: 0,
                subTargetCheck: !1,
                cacheProperties: [],
                useSetOnGroup: !1,
                initialize: function (t, e, i) {
                  (e = e || {}),
                    (this._objects = []),
                    i && this.callSuper("initialize", e),
                    (this._objects = t || []);
                  for (var n = this._objects.length; n--; )
                    this._objects[n].group = this;
                  i
                    ? this._updateObjectsACoords()
                    : ((i = e && e.centerPoint),
                      void 0 !== e.originX && (this.originX = e.originX),
                      void 0 !== e.originY && (this.originY = e.originY),
                      i || this._calcBounds(),
                      this._updateObjectsCoords(i),
                      delete e.centerPoint,
                      this.callSuper("initialize", e)),
                    this.setCoords();
                },
                _updateObjectsACoords: function () {
                  for (var t = this._objects.length; t--; )
                    this._objects[t].setCoords(!0);
                },
                _updateObjectsCoords: function (t) {
                  t = t || this.getCenterPoint();
                  for (var e = this._objects.length; e--; )
                    this._updateObjectCoords(this._objects[e], t);
                },
                _updateObjectCoords: function (t, e) {
                  var i = t.left,
                    n = t.top;
                  t.set({ left: i - e.x, top: n - e.y }),
                    (t.group = this),
                    t.setCoords(!0);
                },
                toString: function () {
                  return "#<fabric.Group: (" + this.complexity() + ")>";
                },
                addWithUpdate: function (t) {
                  var i = !!this.group;
                  return (
                    this._restoreObjectsState(),
                    e.util.resetObjectTransform(this),
                    t &&
                      (i &&
                        e.util.removeTransformFromObject(
                          t,
                          this.group.calcTransformMatrix()
                        ),
                      this._objects.push(t),
                      (t.group = this),
                      t._set("canvas", this.canvas)),
                    this._calcBounds(),
                    this._updateObjectsCoords(),
                    (this.dirty = !0),
                    i ? this.group.addWithUpdate() : this.setCoords(),
                    this
                  );
                },
                removeWithUpdate: function (t) {
                  return (
                    this._restoreObjectsState(),
                    e.util.resetObjectTransform(this),
                    this.remove(t),
                    this._calcBounds(),
                    this._updateObjectsCoords(),
                    this.setCoords(),
                    (this.dirty = !0),
                    this
                  );
                },
                _onObjectAdded: function (t) {
                  (this.dirty = !0),
                    (t.group = this),
                    t._set("canvas", this.canvas);
                },
                _onObjectRemoved: function (t) {
                  (this.dirty = !0), delete t.group;
                },
                _set: function (t, i) {
                  var n = this._objects.length;
                  if (this.useSetOnGroup)
                    for (; n--; ) this._objects[n].setOnGroup(t, i);
                  if ("canvas" === t) for (; n--; ) this._objects[n]._set(t, i);
                  e.Object.prototype._set.call(this, t, i);
                },
                toObject: function (t) {
                  var i = this.includeDefaultValues,
                    n = this._objects
                      .filter(function (t) {
                        return !t.excludeFromExport;
                      })
                      .map(function (e) {
                        var n = e.includeDefaultValues;
                        e.includeDefaultValues = i;
                        var r = e.toObject(t);
                        return (e.includeDefaultValues = n), r;
                      }),
                    r = e.Object.prototype.toObject.call(this, t);
                  return (r.objects = n), r;
                },
                toDatalessObject: function (t) {
                  var i,
                    n,
                    r = this.sourcePath;
                  return (
                    (n =
                      r ||
                      ((i = this.includeDefaultValues),
                      this._objects.map(function (e) {
                        var n = e.includeDefaultValues;
                        e.includeDefaultValues = i;
                        var r = e.toDatalessObject(t);
                        return (e.includeDefaultValues = n), r;
                      }))),
                    ((r = e.Object.prototype.toDatalessObject.call(
                      this,
                      t
                    )).objects = n),
                    r
                  );
                },
                render: function (t) {
                  (this._transformDone = !0),
                    this.callSuper("render", t),
                    (this._transformDone = !1);
                },
                shouldCache: function () {
                  var t = e.Object.prototype.shouldCache.call(this);
                  if (t)
                    for (var i = 0, n = this._objects.length; i < n; i++)
                      if (this._objects[i].willDrawShadow())
                        return (this.ownCaching = !1);
                  return t;
                },
                willDrawShadow: function () {
                  if (e.Object.prototype.willDrawShadow.call(this)) return !0;
                  for (var t = 0, i = this._objects.length; t < i; t++)
                    if (this._objects[t].willDrawShadow()) return !0;
                  return !1;
                },
                isOnACache: function () {
                  return (
                    this.ownCaching || (this.group && this.group.isOnACache())
                  );
                },
                drawObject: function (t) {
                  for (var e = 0, i = this._objects.length; e < i; e++)
                    this._objects[e].render(t);
                  this._drawClipPath(t);
                },
                isCacheDirty: function (t) {
                  if (this.callSuper("isCacheDirty", t)) return !0;
                  if (!this.statefullCache) return !1;
                  for (var e, i, n = 0, r = this._objects.length; n < r; n++)
                    if (this._objects[n].isCacheDirty(!0))
                      return (
                        this._cacheCanvas &&
                          ((e = this.cacheWidth / this.zoomX),
                          (i = this.cacheHeight / this.zoomY),
                          this._cacheContext.clearRect(-e / 2, -i / 2, e, i)),
                        !0
                      );
                  return !1;
                },
                _restoreObjectsState: function () {
                  var t = this.calcOwnMatrix();
                  return (
                    this._objects.forEach(function (i) {
                      e.util.addTransformToObject(i, t),
                        delete i.group,
                        i.setCoords();
                    }),
                    this
                  );
                },
                realizeTransform: function (t, i) {
                  return e.util.addTransformToObject(t, i), t;
                },
                destroy: function () {
                  return (
                    this._objects.forEach(function (t) {
                      t.set("dirty", !0);
                    }),
                    this._restoreObjectsState()
                  );
                },
                toActiveSelection: function () {
                  if (this.canvas) {
                    var t = this._objects,
                      i = this.canvas;
                    this._objects = [];
                    var n = this.toObject();
                    delete n.objects;
                    var r = new e.ActiveSelection([]);
                    return (
                      r.set(n),
                      (r.type = "activeSelection"),
                      i.remove(this),
                      t.forEach(function (t) {
                        (t.group = r), (t.dirty = !0), i.add(t);
                      }),
                      (r.canvas = i),
                      (r._objects = t),
                      (i._activeObject = r).setCoords(),
                      r
                    );
                  }
                },
                ungroupOnCanvas: function () {
                  return this._restoreObjectsState();
                },
                setObjectsCoords: function () {
                  return (
                    this.forEachObject(function (t) {
                      t.setCoords(!0);
                    }),
                    this
                  );
                },
                _calcBounds: function (t) {
                  for (
                    var e,
                      i,
                      n,
                      r,
                      o = [],
                      s = [],
                      a = ["tr", "br", "bl", "tl"],
                      h = 0,
                      l = this._objects.length,
                      c = a.length;
                    h < l;
                    ++h
                  ) {
                    for (
                      n = (e = this._objects[h]).calcACoords(), r = 0;
                      r < c;
                      r++
                    )
                      o.push(n[(i = a[r])].x), s.push(n[i].y);
                    e.aCoords = n;
                  }
                  this._getBounds(o, s, t);
                },
                _getBounds: function (t, r, o) {
                  var s = new e.Point(i(t), i(r)),
                    a = new e.Point(n(t), n(r)),
                    h = s.y || 0;
                  (t = s.x || 0),
                    (r = a.x - s.x || 0),
                    (s = a.y - s.y || 0),
                    (this.width = r),
                    (this.height = s),
                    o ||
                      this.setPositionByOrigin({ x: t, y: h }, "left", "top");
                },
                _toSVG: function (t) {
                  for (
                    var e = ["<g ", "COMMON_PARTS", " >\n"],
                      i = 0,
                      n = this._objects.length;
                    i < n;
                    i++
                  )
                    e.push("\t\t", this._objects[i].toSVG(t));
                  return e.push("</g>\n"), e;
                },
                getSvgStyles: function () {
                  var t =
                      void 0 !== this.opacity && 1 !== this.opacity
                        ? "opacity: " + this.opacity + ";"
                        : "",
                    e = this.visible ? "" : " visibility: hidden;";
                  return [t, this.getSvgFilter(), e].join("");
                },
                toClipPathSVG: function (t) {
                  for (var e = [], i = 0, n = this._objects.length; i < n; i++)
                    e.push("\t", this._objects[i].toClipPathSVG(t));
                  return this._createBaseClipPathSVGMarkup(e, { reviver: t });
                },
              })),
              (e.Group.fromObject = function (t, i) {
                var n = t.objects,
                  r = e.util.object.clone(t, !0);
                delete r.objects,
                  "string" != typeof n
                    ? e.util.enlivenObjects(n, function (n) {
                        e.util.enlivenObjects([t.clipPath], function (r) {
                          var o = e.util.object.clone(t, !0);
                          (o.clipPath = r[0]),
                            delete o.objects,
                            i && i(new e.Group(n, o, !0));
                        });
                      })
                    : e.loadSVGFromURL(n, function (o) {
                        (o = e.util.groupSVGElements(o, t, n)).set(r),
                          i && i(o);
                      });
              }));
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {});
            e.ActiveSelection ||
              ((e.ActiveSelection = e.util.createClass(e.Group, {
                type: "activeSelection",
                initialize: function (t, i) {
                  (i = i || {}), (this._objects = t || []);
                  for (var n = this._objects.length; n--; )
                    this._objects[n].group = this;
                  i.originX && (this.originX = i.originX),
                    i.originY && (this.originY = i.originY),
                    this._calcBounds(),
                    this._updateObjectsCoords(),
                    e.Object.prototype.initialize.call(this, i),
                    this.setCoords();
                },
                toGroup: function () {
                  var t = this._objects.concat();
                  this._objects = [];
                  var i = e.Object.prototype.toObject.call(this),
                    n = new e.Group([]);
                  return (
                    delete i.type,
                    n.set(i),
                    t.forEach(function (t) {
                      t.canvas.remove(t), (t.group = n);
                    }),
                    (n._objects = t),
                    this.canvas
                      ? ((t = this.canvas).add(n),
                        (t._activeObject = n).setCoords(),
                        n)
                      : n
                  );
                },
                onDeselect: function () {
                  return this.destroy(), !1;
                },
                toString: function () {
                  return (
                    "#<fabric.ActiveSelection: (" + this.complexity() + ")>"
                  );
                },
                shouldCache: function () {
                  return !1;
                },
                isOnACache: function () {
                  return !1;
                },
                _renderControls: function (t, e, i) {
                  t.save(),
                    (t.globalAlpha = this.isMoving
                      ? this.borderOpacityWhenMoving
                      : 1),
                    this.callSuper("_renderControls", t, e),
                    void 0 === (i = i || {}).hasControls &&
                      (i.hasControls = !1),
                    (i.forActiveSelection = !0);
                  for (var n = 0, r = this._objects.length; n < r; n++)
                    this._objects[n]._renderControls(t, i);
                  t.restore();
                },
              })),
              (e.ActiveSelection.fromObject = function (t, i) {
                e.util.enlivenObjects(t.objects, function (n) {
                  delete t.objects, i && i(new e.ActiveSelection(n, t, !0));
                });
              }));
          })(e),
          (function (t) {
            var e = _.util.object.extend;
            t.fabric || (t.fabric = {}),
              t.fabric.Image
                ? _.warn("fabric.Image is already defined.")
                : ((_.Image = _.util.createClass(_.Object, {
                    type: "image",
                    strokeWidth: 0,
                    srcFromAttribute: !1,
                    _lastScaleX: 1,
                    _lastScaleY: 1,
                    _filterScalingX: 1,
                    _filterScalingY: 1,
                    minimumScaleTrigger: 0.5,
                    stateProperties: _.Object.prototype.stateProperties.concat(
                      "cropX",
                      "cropY"
                    ),
                    cacheProperties: _.Object.prototype.cacheProperties.concat(
                      "cropX",
                      "cropY"
                    ),
                    cacheKey: "",
                    cropX: 0,
                    cropY: 0,
                    imageSmoothing: !0,
                    initialize: function (t, e) {
                      (e = e || {}),
                        (this.filters = []),
                        (this.cacheKey = "texture" + _.Object.__uid++),
                        this.callSuper("initialize", e),
                        this._initElement(t, e);
                    },
                    getElement: function () {
                      return this._element || {};
                    },
                    setElement: function (t, e) {
                      return (
                        this.removeTexture(this.cacheKey),
                        this.removeTexture(this.cacheKey + "_filtered"),
                        (this._element = t),
                        (this._originalElement = t),
                        this._initConfig(e),
                        0 !== this.filters.length && this.applyFilters(),
                        this.resizeFilter && this.applyResizeFilters(),
                        this
                      );
                    },
                    removeTexture: function (t) {
                      var e = _.filterBackend;
                      e && e.evictCachesForKey && e.evictCachesForKey(t);
                    },
                    dispose: function () {
                      this.removeTexture(this.cacheKey),
                        this.removeTexture(this.cacheKey + "_filtered"),
                        (this._cacheContext = void 0),
                        [
                          "_originalElement",
                          "_element",
                          "_filteredEl",
                          "_cacheCanvas",
                        ].forEach(
                          function (t) {
                            _.util.cleanUpJsdomNode(this[t]),
                              (this[t] = void 0);
                          }.bind(this)
                        );
                    },
                    getCrossOrigin: function () {
                      return (
                        this._originalElement &&
                        (this._originalElement.crossOrigin || null)
                      );
                    },
                    getOriginalSize: function () {
                      var t = this.getElement();
                      return {
                        width: t.naturalWidth || t.width,
                        height: t.naturalHeight || t.height,
                      };
                    },
                    _stroke: function (t) {
                      var e, i;
                      this.stroke &&
                        0 !== this.strokeWidth &&
                        ((e = this.width / 2),
                        (i = this.height / 2),
                        t.beginPath(),
                        t.moveTo(-e, -i),
                        t.lineTo(e, -i),
                        t.lineTo(e, i),
                        t.lineTo(-e, i),
                        t.lineTo(-e, -i),
                        t.closePath());
                    },
                    toObject: function (t) {
                      var i = [];
                      return (
                        this.filters.forEach(function (t) {
                          t && i.push(t.toObject());
                        }),
                        (t = e(
                          this.callSuper(
                            "toObject",
                            ["cropX", "cropY"].concat(t)
                          ),
                          {
                            src: this.getSrc(),
                            crossOrigin: this.getCrossOrigin(),
                            filters: i,
                          }
                        )),
                        this.resizeFilter &&
                          (t.resizeFilter = this.resizeFilter.toObject()),
                        t
                      );
                    },
                    hasCrop: function () {
                      return (
                        this.cropX ||
                        this.cropY ||
                        this.width < this._element.width ||
                        this.height < this._element.height
                      );
                    },
                    _toSVG: function () {
                      var t,
                        e,
                        i = [],
                        n = [],
                        r = this._element,
                        o = -this.width / 2,
                        s = -this.height / 2,
                        a = "",
                        h = "";
                      return r
                        ? (this.hasCrop() &&
                            ((e = _.Object.__uid++),
                            i.push(
                              '<clipPath id="imageCrop_' + e + '">\n',
                              '\t<rect x="' +
                                o +
                                '" y="' +
                                s +
                                '" width="' +
                                this.width +
                                '" height="' +
                                this.height +
                                '" />\n',
                              "</clipPath>\n"
                            ),
                            (a = ' clip-path="url(#imageCrop_' + e + ')" ')),
                          this.imageSmoothing ||
                            (h = '" image-rendering="optimizeSpeed'),
                          n.push(
                            "\t<image ",
                            "COMMON_PARTS",
                            'xlink:href="',
                            this.getSvgSrc(!0),
                            '" x="',
                            o - this.cropX,
                            '" y="',
                            s - this.cropY,
                            '" width="',
                            r.width || r.naturalWidth,
                            '" height="',
                            r.height || r.height,
                            h,
                            '"',
                            a,
                            "></image>\n"
                          ),
                          (this.stroke || this.strokeDashArray) &&
                            ((a = this.fill),
                            (this.fill = null),
                            (t = [
                              "\t<rect ",
                              'x="',
                              o,
                              '" y="',
                              s,
                              '" width="',
                              this.width,
                              '" height="',
                              this.height,
                              '" style="',
                              this.getSvgStyles(),
                              '"/>\n',
                            ]),
                            (this.fill = a)),
                          (i =
                            "fill" !== this.paintFirst
                              ? i.concat(t, n)
                              : i.concat(n, t)))
                        : [];
                    },
                    getSrc: function (t) {
                      return (t = t ? this._element : this._originalElement)
                        ? t.toDataURL
                          ? t.toDataURL()
                          : this.srcFromAttribute
                          ? t.getAttribute("src")
                          : t.src
                        : this.src || "";
                    },
                    setSrc: function (t, e, i) {
                      return (
                        _.util.loadImage(
                          t,
                          function (t, n) {
                            this.setElement(t, i),
                              this._setWidthHeight(),
                              e && e(this, n);
                          },
                          this,
                          i && i.crossOrigin
                        ),
                        this
                      );
                    },
                    toString: function () {
                      return (
                        '#<fabric.Image: { src: "' + this.getSrc() + '" }>'
                      );
                    },
                    applyResizeFilters: function () {
                      var t = this.resizeFilter,
                        e = this.minimumScaleTrigger,
                        i = (a = this.getTotalObjectScaling()).scaleX,
                        n = a.scaleY,
                        r = this._filteredEl || this._originalElement;
                      if (
                        (this.group && this.set("dirty", !0),
                        !t || (e < i && e < n))
                      )
                        return (
                          (this._element = r),
                          (this._filterScalingX = 1),
                          (this._filterScalingY = 1),
                          (this._lastScaleX = i),
                          void (this._lastScaleY = n)
                        );
                      _.filterBackend ||
                        (_.filterBackend = _.initFilterBackend());
                      var o = _.util.createCanvasElement(),
                        s = this._filteredEl
                          ? this.cacheKey + "_filtered"
                          : this.cacheKey,
                        a = r.width;
                      (e = r.height),
                        (o.width = a),
                        (o.height = e),
                        (this._element = o),
                        (this._lastScaleX = t.scaleX = i),
                        (this._lastScaleY = t.scaleY = n),
                        _.filterBackend.applyFilters(
                          [t],
                          r,
                          a,
                          e,
                          this._element,
                          s
                        ),
                        (this._filterScalingX =
                          o.width / this._originalElement.width),
                        (this._filterScalingY =
                          o.height / this._originalElement.height);
                    },
                    applyFilters: function (t) {
                      if (
                        ((t = (t = t || this.filters || []).filter(function (
                          t
                        ) {
                          return t && !t.isNeutralState();
                        })),
                        this.set("dirty", !0),
                        this.removeTexture(this.cacheKey + "_filtered"),
                        0 === t.length)
                      )
                        return (
                          (this._element = this._originalElement),
                          (this._filteredEl = null),
                          (this._filterScalingX = 1),
                          (this._filterScalingY = 1),
                          this
                        );
                      var e = this._originalElement,
                        i = e.naturalWidth || e.width,
                        n = e.naturalHeight || e.height;
                      return (
                        this._element === this._originalElement
                          ? (((e = _.util.createCanvasElement()).width = i),
                            (e.height = n),
                            (this._element = e),
                            (this._filteredEl = e))
                          : ((this._element = this._filteredEl),
                            this._filteredEl
                              .getContext("2d")
                              .clearRect(0, 0, i, n),
                            (this._lastScaleX = 1),
                            (this._lastScaleY = 1)),
                        _.filterBackend ||
                          (_.filterBackend = _.initFilterBackend()),
                        _.filterBackend.applyFilters(
                          t,
                          this._originalElement,
                          i,
                          n,
                          this._element,
                          this.cacheKey
                        ),
                        (this._originalElement.width === this._element.width &&
                          this._originalElement.height ===
                            this._element.height) ||
                          ((this._filterScalingX =
                            this._element.width / this._originalElement.width),
                          (this._filterScalingY =
                            this._element.height /
                            this._originalElement.height)),
                        this
                      );
                    },
                    _render: function (t) {
                      _.util.setImageSmoothing(t, this.imageSmoothing),
                        !0 !== this.isMoving &&
                          this.resizeFilter &&
                          this._needsResize() &&
                          this.applyResizeFilters(),
                        this._stroke(t),
                        this._renderPaintInOrder(t);
                    },
                    drawCacheOnCanvas: function (t) {
                      _.util.setImageSmoothing(t, this.imageSmoothing),
                        _.Object.prototype.drawCacheOnCanvas.call(this, t);
                    },
                    shouldCache: function () {
                      return this.needsItsOwnCache();
                    },
                    _renderFill: function (t) {
                      var e,
                        i,
                        n,
                        r,
                        o,
                        s,
                        a,
                        h,
                        l,
                        c,
                        u,
                        f,
                        d,
                        g,
                        p,
                        m = this._element;
                      m &&
                        ((e = this._filterScalingX),
                        (i = this._filterScalingY),
                        (n = this.width),
                        (r = this.height),
                        (o = Math.min),
                        (g = (d = Math.max)(this.cropX, 0)),
                        (p = d(this.cropY, 0)),
                        (s = m.naturalWidth || m.width),
                        (a = m.naturalHeight || m.height),
                        (l = p * i),
                        (c = o(n * e, s - (h = g * e))),
                        (u = o(r * i, a - l)),
                        (f = -n / 2),
                        (d = -r / 2),
                        (g = o(n, s / e - g)),
                        (p = o(r, a / i - p)),
                        m && t.drawImage(m, h, l, c, u, f, d, g, p));
                    },
                    _needsResize: function () {
                      var t = this.getTotalObjectScaling();
                      return (
                        t.scaleX !== this._lastScaleX ||
                        t.scaleY !== this._lastScaleY
                      );
                    },
                    _resetWidthHeight: function () {
                      this.set(this.getOriginalSize());
                    },
                    _initElement: function (t, e) {
                      this.setElement(_.util.getById(t), e),
                        _.util.addClass(this.getElement(), _.Image.CSS_CANVAS);
                    },
                    _initConfig: function (t) {
                      this.setOptions((t = t || {})), this._setWidthHeight(t);
                    },
                    _initFilters: function (t, e) {
                      t && t.length
                        ? _.util.enlivenObjects(
                            t,
                            function (t) {
                              e && e(t);
                            },
                            "fabric.Image.filters"
                          )
                        : e && e();
                    },
                    _setWidthHeight: function (t) {
                      t = t || {};
                      var e = this.getElement();
                      (this.width = t.width || e.naturalWidth || e.width || 0),
                        (this.height =
                          t.height || e.naturalHeight || e.height || 0);
                    },
                    parsePreserveAspectRatioAttribute: function () {
                      var t,
                        e = _.util.parsePreserveAspectRatioAttribute(
                          this.preserveAspectRatio || ""
                        ),
                        i = this._element.width,
                        n = this._element.height,
                        r = 1,
                        o = 1,
                        s = 0,
                        a = 0,
                        h = 0,
                        l = 0,
                        c = this.width,
                        u = this.height,
                        f = { width: c, height: u };
                      return (
                        !e || ("none" === e.alignX && "none" === e.alignY)
                          ? ((r = c / i), (o = u / n))
                          : ("meet" === e.meetOrSlice &&
                              ((t =
                                (c -
                                  i *
                                    (r = o =
                                      _.util.findScaleToFit(
                                        this._element,
                                        f
                                      ))) /
                                2),
                              "Min" === e.alignX && (s = -t),
                              "Max" === e.alignX && (s = t),
                              (t = (u - n * o) / 2),
                              "Min" === e.alignY && (a = -t),
                              "Max" === e.alignY && (a = t)),
                            "slice" === e.meetOrSlice &&
                              ((t =
                                i -
                                c /
                                  (r = o =
                                    _.util.findScaleToCover(this._element, f))),
                              "Mid" === e.alignX && (h = t / 2),
                              "Max" === e.alignX && (h = t),
                              (t = n - u / o),
                              "Mid" === e.alignY && (l = t / 2),
                              "Max" === e.alignY && (l = t),
                              (i = c / r),
                              (n = u / o))),
                        {
                          width: i,
                          height: n,
                          scaleX: r,
                          scaleY: o,
                          offsetLeft: s,
                          offsetTop: a,
                          cropX: h,
                          cropY: l,
                        }
                      );
                    },
                  })),
                  (_.Image.CSS_CANVAS = "canvas-img"),
                  (_.Image.prototype.getSvgSrc = _.Image.prototype.getSrc),
                  (_.Image.fromObject = function (t, e) {
                    var i = _.util.object.clone(t);
                    _.util.loadImage(
                      i.src,
                      function (t, n) {
                        n
                          ? e && e(null, !0)
                          : _.Image.prototype._initFilters.call(
                              i,
                              i.filters,
                              function (n) {
                                (i.filters = n || []),
                                  _.Image.prototype._initFilters.call(
                                    i,
                                    [i.resizeFilter],
                                    function (n) {
                                      (i.resizeFilter = n[0]),
                                        _.util.enlivenObjects(
                                          [i.clipPath],
                                          function (n) {
                                            (i.clipPath = n[0]),
                                              (n = new _.Image(t, i)),
                                              e(n, !1);
                                          }
                                        );
                                    }
                                  );
                              }
                            );
                      },
                      null,
                      i.crossOrigin
                    );
                  }),
                  (_.Image.fromURL = function (t, e, i) {
                    _.util.loadImage(
                      t,
                      function (t, n) {
                        e && e(new _.Image(t, i), n);
                      },
                      null,
                      i && i.crossOrigin
                    );
                  }),
                  (_.Image.ATTRIBUTE_NAMES = _.SHARED_ATTRIBUTES.concat(
                    "x y width height preserveAspectRatio xlink:href crossOrigin image-rendering".split(
                      " "
                    )
                  )),
                  (_.Image.fromElement = function (t, i, n) {
                    (t = _.parseAttributes(t, _.Image.ATTRIBUTE_NAMES)),
                      _.Image.fromURL(
                        t["xlink:href"],
                        i,
                        e(n ? _.util.object.clone(n) : {}, t)
                      );
                  }));
          })(e),
          _.util.object.extend(_.Object.prototype, {
            _getAngleValueForStraighten: function () {
              var t = this.angle % 360;
              return 0 < t
                ? 90 * Math.round((t - 1) / 90)
                : 90 * Math.round(t / 90);
            },
            straighten: function () {
              return this.rotate(this._getAngleValueForStraighten()), this;
            },
            fxStraighten: function (t) {
              function e() {}
              var i = (t = t || {}).onComplete || e,
                n = t.onChange || e,
                r = this;
              return (
                _.util.animate({
                  startValue: this.get("angle"),
                  endValue: this._getAngleValueForStraighten(),
                  duration: this.FX_DURATION,
                  onChange: function (t) {
                    r.rotate(t), n();
                  },
                  onComplete: function () {
                    r.setCoords(), i();
                  },
                }),
                this
              );
            },
          }),
          _.util.object.extend(_.StaticCanvas.prototype, {
            straightenObject: function (t) {
              return t.straighten(), this.requestRenderAll(), this;
            },
            fxStraightenObject: function (t) {
              return (
                t.fxStraighten({ onChange: this.requestRenderAllBound }), this
              );
            },
          }),
          (_.isWebglSupported = function (t) {
            if (_.isLikelyNode) return !1;
            t = t || _.WebglFilterBackend.prototype.tileSize;
            var e,
              i,
              n,
              r =
                (o = document.createElement("canvas")).getContext("webgl") ||
                o.getContext("experimental-webgl"),
              o = !1;
            if (r) {
              (_.maxTextureSize = r.getParameter(r.MAX_TEXTURE_SIZE)),
                (o = _.maxTextureSize >= t);
              for (var s = ["highp", "mediump", "lowp"], a = 0; a < 3; a++)
                if (
                  ((n = "precision " + s[a] + " float;\nvoid main(){}"),
                  (i = (e = r).createShader(e.FRAGMENT_SHADER)),
                  e.shaderSource(i, n),
                  e.compileShader(i),
                  e.getShaderParameter(i, e.COMPILE_STATUS))
                ) {
                  _.webGlPrecision = s[a];
                  break;
                }
            }
            return (this.isSupported = o);
          }),
          ((_.WebglFilterBackend = function (t) {
            t && t.tileSize && (this.tileSize = t.tileSize),
              this.setupGLContext(this.tileSize, this.tileSize),
              this.captureGPUInfo();
          }).prototype = {
            tileSize: 2048,
            resources: {},
            setupGLContext: function (t, e) {
              this.dispose(),
                this.createWebGLCanvas(t, e),
                (this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1])),
                this.chooseFastestCopyGLTo2DMethod(t, e);
            },
            chooseFastestCopyGLTo2DMethod: function (t, e) {
              var i = void 0 !== window.performance;
              try {
                new ImageData(1, 1), (o = !0);
              } catch (t) {
                o = !1;
              }
              var n = "undefined" != typeof ArrayBuffer,
                r = "undefined" != typeof Uint8ClampedArray;
              if (i && o && n && r) {
                var o = _.util.createCanvasElement();
                if (((n = new ArrayBuffer(t * e * 4)), _.forceGLPutImageData))
                  return (this.imageBuffer = n), void (this.copyGLTo2D = b);
                (r = {
                  imageBuffer: n,
                  destinationWidth: t,
                  destinationHeight: e,
                  targetCanvas: o,
                }),
                  (o.width = t),
                  (o.height = e),
                  (o = window.performance.now()),
                  x.call(r, this.gl, r),
                  (e = window.performance.now() - o),
                  (o = window.performance.now()),
                  b.call(r, this.gl, r),
                  window.performance.now() - o < e
                    ? ((this.imageBuffer = n), (this.copyGLTo2D = b))
                    : (this.copyGLTo2D = x);
              }
            },
            createWebGLCanvas: function (t, e) {
              var i = _.util.createCanvasElement();
              (i.width = t),
                (i.height = e),
                (t = {
                  alpha: !0,
                  premultipliedAlpha: !1,
                  depth: !1,
                  stencil: !1,
                  antialias: !1,
                }),
                (e =
                  (e = i.getContext("webgl", t)) ||
                  i.getContext("experimental-webgl", t)) &&
                  (e.clearColor(0, 0, 0, 0), (this.canvas = i), (this.gl = e));
            },
            applyFilters: function (t, e, i, n, r, o) {
              var s,
                a = this.gl;
              o && (s = this.getCachedTexture(o, e));
              var h = {
                originalWidth: e.width || e.originalWidth,
                originalHeight: e.height || e.originalHeight,
                sourceWidth: i,
                sourceHeight: n,
                destinationWidth: i,
                destinationHeight: n,
                context: a,
                sourceTexture: this.createTexture(a, i, n, !s && e),
                targetTexture: this.createTexture(a, i, n),
                originalTexture: s || this.createTexture(a, i, n, !s && e),
                passes: t.length,
                webgl: !0,
                aPosition: this.aPosition,
                programCache: this.programCache,
                pass: 0,
                filterBackend: this,
                targetCanvas: r,
              };
              return (
                (e = a.createFramebuffer()),
                a.bindFramebuffer(a.FRAMEBUFFER, e),
                t.forEach(function (t) {
                  t && t.applyTo(h);
                }),
                (function (t) {
                  var e = t.targetCanvas,
                    i = e.width,
                    n = e.height,
                    r = t.destinationWidth;
                  (t = t.destinationHeight),
                    (i === r && n === t) || ((e.width = r), (e.height = t));
                })(h),
                this.copyGLTo2D(a, h),
                a.bindTexture(a.TEXTURE_2D, null),
                a.deleteTexture(h.sourceTexture),
                a.deleteTexture(h.targetTexture),
                a.deleteFramebuffer(e),
                r.getContext("2d").setTransform(1, 0, 0, 1, 0, 0),
                h
              );
            },
            dispose: function () {
              this.canvas && ((this.canvas = null), (this.gl = null)),
                this.clearWebGLCaches();
            },
            clearWebGLCaches: function () {
              (this.programCache = {}), (this.textureCache = {});
            },
            createTexture: function (t, e, i, n) {
              var r = t.createTexture();
              return (
                t.bindTexture(t.TEXTURE_2D, r),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
                t.texParameteri(
                  t.TEXTURE_2D,
                  t.TEXTURE_WRAP_S,
                  t.CLAMP_TO_EDGE
                ),
                t.texParameteri(
                  t.TEXTURE_2D,
                  t.TEXTURE_WRAP_T,
                  t.CLAMP_TO_EDGE
                ),
                n
                  ? t.texImage2D(
                      t.TEXTURE_2D,
                      0,
                      t.RGBA,
                      t.RGBA,
                      t.UNSIGNED_BYTE,
                      n
                    )
                  : t.texImage2D(
                      t.TEXTURE_2D,
                      0,
                      t.RGBA,
                      e,
                      i,
                      0,
                      t.RGBA,
                      t.UNSIGNED_BYTE,
                      null
                    ),
                r
              );
            },
            getCachedTexture: function (t, e) {
              return this.textureCache[t]
                ? this.textureCache[t]
                : ((e = this.createTexture(this.gl, e.width, e.height, e)),
                  (this.textureCache[t] = e));
            },
            evictCachesForKey: function (t) {
              this.textureCache[t] &&
                (this.gl.deleteTexture(this.textureCache[t]),
                delete this.textureCache[t]);
            },
            copyGLTo2D: x,
            captureGPUInfo: function () {
              if (this.gpuInfo) return this.gpuInfo;
              var t = this.gl,
                e = { renderer: "", vendor: "" };
              if (!t) return e;
              var i,
                n = t.getExtension("WEBGL_debug_renderer_info");
              return (
                n &&
                  ((i = t.getParameter(n.UNMASKED_RENDERER_WEBGL)),
                  (n = t.getParameter(n.UNMASKED_VENDOR_WEBGL)),
                  i && (e.renderer = i.toLowerCase()),
                  n && (e.vendor = n.toLowerCase())),
                (this.gpuInfo = e)
              );
            },
          }),
          (function () {
            function t() {}
            (_.Canvas2dFilterBackend = function () {}).prototype = {
              evictCachesForKey: t,
              dispose: t,
              clearWebGLCaches: t,
              resources: {},
              applyFilters: function (t, e, i, n, r) {
                var o = r.getContext("2d");
                o.drawImage(e, 0, 0, i, n);
                var s = {
                  sourceWidth: i,
                  sourceHeight: n,
                  imageData: o.getImageData(0, 0, i, n),
                  originalEl: e,
                  originalImageData: o.getImageData(0, 0, i, n),
                  canvasEl: r,
                  ctx: o,
                  filterBackend: this,
                };
                return (
                  t.forEach(function (t) {
                    t.applyTo(s);
                  }),
                  (s.imageData.width === i && s.imageData.height === n) ||
                    ((r.width = s.imageData.width),
                    (r.height = s.imageData.height)),
                  o.putImageData(s.imageData, 0, 0),
                  s
                );
              },
            };
          })(),
          (_.Image = _.Image || {}),
          (_.Image.filters = _.Image.filters || {}),
          (_.Image.filters.BaseFilter = _.util.createClass({
            type: "BaseFilter",
            vertexSource:
              "attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvoid main() {\nvTexCoord = aPosition;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
            fragmentSource:
              "precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D uTexture;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\n}",
            initialize: function (t) {
              t && this.setOptions(t);
            },
            setOptions: function (t) {
              for (var e in t) this[e] = t[e];
            },
            createProgram: function (t, e, i) {
              (e = e || this.fragmentSource),
                (i = i || this.vertexSource),
                "highp" !== _.webGlPrecision &&
                  (e = e.replace(
                    /precision highp float/g,
                    "precision " + _.webGlPrecision + " float"
                  ));
              var n = t.createShader(t.VERTEX_SHADER);
              if (
                (t.shaderSource(n, i),
                t.compileShader(n),
                !t.getShaderParameter(n, t.COMPILE_STATUS))
              )
                throw new Error(
                  "Vertex shader compile error for " +
                    this.type +
                    ": " +
                    t.getShaderInfoLog(n)
                );
              if (
                ((i = t.createShader(t.FRAGMENT_SHADER)),
                t.shaderSource(i, e),
                t.compileShader(i),
                !t.getShaderParameter(i, t.COMPILE_STATUS))
              )
                throw new Error(
                  "Fragment shader compile error for " +
                    this.type +
                    ": " +
                    t.getShaderInfoLog(i)
                );
              if (
                ((e = t.createProgram()),
                t.attachShader(e, n),
                t.attachShader(e, i),
                t.linkProgram(e),
                !t.getProgramParameter(e, t.LINK_STATUS))
              )
                throw new Error(
                  'Shader link error for "${this.type}" ' +
                    t.getProgramInfoLog(e)
                );
              return (
                (n = this.getAttributeLocations(t, e)),
                ((i = this.getUniformLocations(t, e) || {}).uStepW =
                  t.getUniformLocation(e, "uStepW")),
                (i.uStepH = t.getUniformLocation(e, "uStepH")),
                { program: e, attributeLocations: n, uniformLocations: i }
              );
            },
            getAttributeLocations: function (t, e) {
              return { aPosition: t.getAttribLocation(e, "aPosition") };
            },
            getUniformLocations: function () {
              return {};
            },
            sendAttributeData: function (t, e, i) {
              var n = e.aPosition;
              (e = t.createBuffer()),
                t.bindBuffer(t.ARRAY_BUFFER, e),
                t.enableVertexAttribArray(n),
                t.vertexAttribPointer(n, 2, t.FLOAT, !1, 0, 0),
                t.bufferData(t.ARRAY_BUFFER, i, t.STATIC_DRAW);
            },
            _setupFrameBuffer: function (t) {
              var e,
                i,
                n = t.context;
              1 < t.passes
                ? ((e = t.destinationWidth),
                  (i = t.destinationHeight),
                  (t.sourceWidth === e && t.sourceHeight === i) ||
                    (n.deleteTexture(t.targetTexture),
                    (t.targetTexture = t.filterBackend.createTexture(n, e, i))),
                  n.framebufferTexture2D(
                    n.FRAMEBUFFER,
                    n.COLOR_ATTACHMENT0,
                    n.TEXTURE_2D,
                    t.targetTexture,
                    0
                  ))
                : (n.bindFramebuffer(n.FRAMEBUFFER, null), n.finish());
            },
            _swapTextures: function (t) {
              t.passes--, t.pass++;
              var e = t.targetTexture;
              (t.targetTexture = t.sourceTexture), (t.sourceTexture = e);
            },
            isNeutralState: function () {
              var t = this.mainParameter,
                e = _.Image.filters[this.type].prototype;
              if (t) {
                if (Array.isArray(e[t])) {
                  for (var i = e[t].length; i--; )
                    if (this[t][i] !== e[t][i]) return !1;
                  return !0;
                }
                return e[t] === this[t];
              }
              return !1;
            },
            applyTo: function (t) {
              t.webgl
                ? (this._setupFrameBuffer(t),
                  this.applyToWebGL(t),
                  this._swapTextures(t))
                : this.applyTo2d(t);
            },
            retrieveShader: function (t) {
              return (
                t.programCache.hasOwnProperty(this.type) ||
                  (t.programCache[this.type] = this.createProgram(t.context)),
                t.programCache[this.type]
              );
            },
            applyToWebGL: function (t) {
              var e = t.context,
                i = this.retrieveShader(t);
              0 === t.pass && t.originalTexture
                ? e.bindTexture(e.TEXTURE_2D, t.originalTexture)
                : e.bindTexture(e.TEXTURE_2D, t.sourceTexture),
                e.useProgram(i.program),
                this.sendAttributeData(e, i.attributeLocations, t.aPosition),
                e.uniform1f(i.uniformLocations.uStepW, 1 / t.sourceWidth),
                e.uniform1f(i.uniformLocations.uStepH, 1 / t.sourceHeight),
                this.sendUniformData(e, i.uniformLocations),
                e.viewport(0, 0, t.destinationWidth, t.destinationHeight),
                e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
            },
            bindAdditionalTexture: function (t, e, i) {
              t.activeTexture(i),
                t.bindTexture(t.TEXTURE_2D, e),
                t.activeTexture(t.TEXTURE0);
            },
            unbindAdditionalTexture: function (t, e) {
              t.activeTexture(e),
                t.bindTexture(t.TEXTURE_2D, null),
                t.activeTexture(t.TEXTURE0);
            },
            getMainParameter: function () {
              return this[this.mainParameter];
            },
            setMainParameter: function (t) {
              this[this.mainParameter] = t;
            },
            sendUniformData: function () {},
            createHelpLayer: function (t) {
              var e;
              t.helpLayer ||
                (((e = document.createElement("canvas")).width = t.sourceWidth),
                (e.height = t.sourceHeight),
                (t.helpLayer = e));
            },
            toObject: function () {
              var t = { type: this.type },
                e = this.mainParameter;
              return e && (t[e] = this[e]), t;
            },
            toJSON: function () {
              return this.toObject();
            },
          })),
          (_.Image.filters.BaseFilter.fromObject = function (t, e) {
            return (t = new _.Image.filters[t.type](t)), e && e(t), t;
          }),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.ColorMatrix = t(i.BaseFilter, {
                type: "ColorMatrix",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nuniform mat4 uColorMatrix;\nuniform vec4 uConstants;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor *= uColorMatrix;\ncolor += uConstants;\ngl_FragColor = color;\n}",
                matrix: [
                  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
                ],
                mainParameter: "matrix",
                colorsOnly: !0,
                initialize: function (t) {
                  this.callSuper("initialize", t),
                    (this.matrix = this.matrix.slice(0));
                },
                applyTo2d: function (t) {
                  for (
                    var e,
                      i,
                      n,
                      r,
                      o = t.imageData.data,
                      s = o.length,
                      a = this.matrix,
                      h = this.colorsOnly,
                      l = 0;
                    l < s;
                    l += 4
                  )
                    (e = o[l]),
                      (i = o[l + 1]),
                      (n = o[l + 2]),
                      h
                        ? ((o[l] = e * a[0] + i * a[1] + n * a[2] + 255 * a[4]),
                          (o[l + 1] =
                            e * a[5] + i * a[6] + n * a[7] + 255 * a[9]),
                          (o[l + 2] =
                            e * a[10] + i * a[11] + n * a[12] + 255 * a[14]))
                        : ((r = o[l + 3]),
                          (o[l] =
                            e * a[0] +
                            i * a[1] +
                            n * a[2] +
                            r * a[3] +
                            255 * a[4]),
                          (o[l + 1] =
                            e * a[5] +
                            i * a[6] +
                            n * a[7] +
                            r * a[8] +
                            255 * a[9]),
                          (o[l + 2] =
                            e * a[10] +
                            i * a[11] +
                            n * a[12] +
                            r * a[13] +
                            255 * a[14]),
                          (o[l + 3] =
                            e * a[15] +
                            i * a[16] +
                            n * a[17] +
                            r * a[18] +
                            255 * a[19]));
                },
                getUniformLocations: function (t, e) {
                  return {
                    uColorMatrix: t.getUniformLocation(e, "uColorMatrix"),
                    uConstants: t.getUniformLocation(e, "uConstants"),
                  };
                },
                sendUniformData: function (t, e) {
                  var i = [
                      (n = this.matrix)[0],
                      n[1],
                      n[2],
                      n[3],
                      n[5],
                      n[6],
                      n[7],
                      n[8],
                      n[10],
                      n[11],
                      n[12],
                      n[13],
                      n[15],
                      n[16],
                      n[17],
                      n[18],
                    ],
                    n = [n[4], n[9], n[14], n[19]];
                  t.uniformMatrix4fv(e.uColorMatrix, !1, i),
                    t.uniform4fv(e.uConstants, n);
                },
              })),
              (e.Image.filters.ColorMatrix.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.Brightness = t(i.BaseFilter, {
                type: "Brightness",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBrightness;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += uBrightness;\ngl_FragColor = color;\n}",
                brightness: 0,
                mainParameter: "brightness",
                applyTo2d: function (t) {
                  if (0 !== this.brightness)
                    for (
                      var e = t.imageData.data,
                        i = e.length,
                        n = Math.round(255 * this.brightness),
                        r = 0;
                      r < i;
                      r += 4
                    )
                      (e[r] = e[r] + n),
                        (e[r + 1] = e[r + 1] + n),
                        (e[r + 2] = e[r + 2] + n);
                },
                getUniformLocations: function (t, e) {
                  return {
                    uBrightness: t.getUniformLocation(e, "uBrightness"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform1f(e.uBrightness, this.brightness);
                },
              })),
              (e.Image.filters.Brightness.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.util.object.extend,
              n = e.Image.filters;
            (t = e.util.createClass),
              (n.Convolute = t(n.BaseFilter, {
                type: "Convolute",
                opaque: !1,
                matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0],
                fragmentSource: {
                  Convolute_3_1:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                  Convolute_3_0:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                  Convolute_5_1:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                  Convolute_5_0:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                  Convolute_7_1:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                  Convolute_7_0:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                  Convolute_9_1:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
                  Convolute_9_0:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
                },
                retrieveShader: function (t) {
                  var e = Math.sqrt(this.matrix.length),
                    i = this.type + "_" + e + "_" + (this.opaque ? 1 : 0);
                  return (
                    (e = this.fragmentSource[i]),
                    t.programCache.hasOwnProperty(i) ||
                      (t.programCache[i] = this.createProgram(t.context, e)),
                    t.programCache[i]
                  );
                },
                applyTo2d: function (t) {
                  for (
                    var e,
                      i,
                      n,
                      r,
                      o,
                      s,
                      a,
                      h,
                      l,
                      c,
                      u,
                      f,
                      d = (f = t.imageData).data,
                      g = this.matrix,
                      p = Math.round(Math.sqrt(g.length)),
                      m = Math.floor(p / 2),
                      v = f.width,
                      y = f.height,
                      _ = (f = t.ctx.createImageData(v, y)).data,
                      x = this.opaque ? 1 : 0,
                      b = 0;
                    b < y;
                    b++
                  )
                    for (l = 0; l < v; l++) {
                      for (
                        o = 4 * (b * v + l), u = r = n = i = e = 0;
                        u < p;
                        u++
                      )
                        for (c = 0; c < p; c++)
                          (a = l + c - m),
                            (s = b + u - m) < 0 ||
                              y <= s ||
                              a < 0 ||
                              v <= a ||
                              ((h = g[u * p + c]),
                              (e += d[(a = 4 * (s * v + a))] * h),
                              (i += d[1 + a] * h),
                              (n += d[2 + a] * h),
                              x || (r += d[3 + a] * h));
                      (_[o] = e),
                        (_[1 + o] = i),
                        (_[2 + o] = n),
                        (_[3 + o] = x ? d[3 + o] : r);
                    }
                  t.imageData = f;
                },
                getUniformLocations: function (t, e) {
                  return {
                    uMatrix: t.getUniformLocation(e, "uMatrix"),
                    uOpaque: t.getUniformLocation(e, "uOpaque"),
                    uHalfSize: t.getUniformLocation(e, "uHalfSize"),
                    uSize: t.getUniformLocation(e, "uSize"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform1fv(e.uMatrix, this.matrix);
                },
                toObject: function () {
                  return i(this.callSuper("toObject"), {
                    opaque: this.opaque,
                    matrix: this.matrix,
                  });
                },
              })),
              (e.Image.filters.Convolute.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.Grayscale = t(i.BaseFilter, {
                type: "Grayscale",
                fragmentSource: {
                  average:
                    "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat average = (color.r + color.b + color.g) / 3.0;\ngl_FragColor = vec4(average, average, average, color.a);\n}",
                  lightness:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\ngl_FragColor = vec4(average, average, average, col.a);\n}",
                  luminosity:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\ngl_FragColor = vec4(average, average, average, col.a);\n}",
                },
                mode: "average",
                mainParameter: "mode",
                applyTo2d: function (t) {
                  for (
                    var e,
                      i = t.imageData.data,
                      n = i.length,
                      r = this.mode,
                      o = 0;
                    o < n;
                    o += 4
                  )
                    "average" === r
                      ? (e = (i[o] + i[o + 1] + i[o + 2]) / 3)
                      : "lightness" === r
                      ? (e =
                          (Math.min(i[o], i[o + 1], i[o + 2]) +
                            Math.max(i[o], i[o + 1], i[o + 2])) /
                          2)
                      : "luminosity" === r &&
                        (e = 0.21 * i[o] + 0.72 * i[o + 1] + 0.07 * i[o + 2]),
                      (i[o] = e),
                      (i[o + 1] = e),
                      (i[o + 2] = e);
                },
                retrieveShader: function (t) {
                  var e,
                    i = this.type + "_" + this.mode;
                  return (
                    t.programCache.hasOwnProperty(i) ||
                      ((e = this.fragmentSource[this.mode]),
                      (t.programCache[i] = this.createProgram(t.context, e))),
                    t.programCache[i]
                  );
                },
                getUniformLocations: function (t, e) {
                  return { uMode: t.getUniformLocation(e, "uMode") };
                },
                sendUniformData: function (t, e) {
                  t.uniform1i(e.uMode, 1);
                },
                isNeutralState: function () {
                  return !1;
                },
              })),
              (e.Image.filters.Grayscale.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.Invert = t(i.BaseFilter, {
                type: "Invert",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform int uInvert;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nif (uInvert == 1) {\ngl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n} else {\ngl_FragColor = color;\n}\n}",
                invert: !0,
                mainParameter: "invert",
                applyTo2d: function (t) {
                  for (
                    var e = t.imageData.data, i = e.length, n = 0;
                    n < i;
                    n += 4
                  )
                    (e[n] = 255 - e[n]),
                      (e[n + 1] = 255 - e[n + 1]),
                      (e[n + 2] = 255 - e[n + 2]);
                },
                isNeutralState: function () {
                  return !this.invert;
                },
                getUniformLocations: function (t, e) {
                  return { uInvert: t.getUniformLocation(e, "uInvert") };
                },
                sendUniformData: function (t, e) {
                  t.uniform1i(e.uInvert, this.invert);
                },
              })),
              (e.Image.filters.Invert.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.util.object.extend,
              n = e.Image.filters;
            (t = e.util.createClass),
              (n.Noise = t(n.BaseFilter, {
                type: "Noise",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uStepH;\nuniform float uNoise;\nuniform float uSeed;\nvarying vec2 vTexCoord;\nfloat rand(vec2 co, float seed, float vScale) {\nreturn fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n}\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\ngl_FragColor = color;\n}",
                mainParameter: "noise",
                noise: 0,
                applyTo2d: function (t) {
                  if (0 !== this.noise)
                    for (
                      var e,
                        i = t.imageData.data,
                        n = (i.length, this.noise),
                        r = 0,
                        o = i.length;
                      r < o;
                      r += 4
                    )
                      (e = (0.5 - Math.random()) * n),
                        (i[r] += e),
                        (i[r + 1] += e),
                        (i[r + 2] += e);
                },
                getUniformLocations: function (t, e) {
                  return {
                    uNoise: t.getUniformLocation(e, "uNoise"),
                    uSeed: t.getUniformLocation(e, "uSeed"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform1f(e.uNoise, this.noise / 255),
                    t.uniform1f(e.uSeed, Math.random());
                },
                toObject: function () {
                  return i(this.callSuper("toObject"), { noise: this.noise });
                },
              })),
              (e.Image.filters.Noise.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.Pixelate = t(i.BaseFilter, {
                type: "Pixelate",
                blocksize: 4,
                mainParameter: "blocksize",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBlocksize;\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nfloat blockW = uBlocksize * uStepW;\nfloat blockH = uBlocksize * uStepW;\nint posX = int(vTexCoord.x / blockW);\nint posY = int(vTexCoord.y / blockH);\nfloat fposX = float(posX);\nfloat fposY = float(posY);\nvec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\nvec4 color = texture2D(uTexture, squareCoords);\ngl_FragColor = color;\n}",
                applyTo2d: function (t) {
                  for (
                    var e,
                      i,
                      n,
                      r,
                      o,
                      s,
                      a,
                      h,
                      l,
                      c,
                      u = (t = t.imageData).data,
                      f = t.height,
                      d = t.width,
                      g = 0;
                    g < f;
                    g += this.blocksize
                  )
                    for (i = 0; i < d; i += this.blocksize)
                      for (
                        n = u[(e = 4 * g * d + 4 * i)],
                          r = u[1 + e],
                          o = u[2 + e],
                          s = u[3 + e],
                          l = Math.min(g + this.blocksize, f),
                          c = Math.min(i + this.blocksize, d),
                          a = g;
                        a < l;
                        a++
                      )
                        for (h = i; h < c; h++)
                          (u[(e = 4 * a * d + 4 * h)] = n),
                            (u[1 + e] = r),
                            (u[2 + e] = o),
                            (u[3 + e] = s);
                },
                isNeutralState: function () {
                  return 1 === this.blocksize;
                },
                getUniformLocations: function (t, e) {
                  return {
                    uBlocksize: t.getUniformLocation(e, "uBlocksize"),
                    uStepW: t.getUniformLocation(e, "uStepW"),
                    uStepH: t.getUniformLocation(e, "uStepH"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform1f(e.uBlocksize, this.blocksize);
                },
              })),
              (e.Image.filters.Pixelate.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.util.object.extend,
              n = e.Image.filters;
            (t = e.util.createClass),
              (n.RemoveColor = t(n.BaseFilter, {
                type: "RemoveColor",
                color: "#FFFFFF",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\nif(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\ngl_FragColor.a = 0.0;\n}\n}",
                distance: 0.02,
                useAlpha: !1,
                applyTo2d: function (t) {
                  for (
                    var i,
                      n,
                      r,
                      o = t.imageData.data,
                      s = 255 * this.distance,
                      a = [
                        (t = new e.Color(this.color).getSource())[0] - s,
                        t[1] - s,
                        t[2] - s,
                      ],
                      h = [t[0] + s, t[1] + s, t[2] + s],
                      l = 0;
                    l < o.length;
                    l += 4
                  )
                    (i = o[l]),
                      (n = o[l + 1]),
                      (r = o[l + 2]),
                      a[0] < i &&
                        a[1] < n &&
                        a[2] < r &&
                        i < h[0] &&
                        n < h[1] &&
                        r < h[2] &&
                        (o[l + 3] = 0);
                },
                getUniformLocations: function (t, e) {
                  return {
                    uLow: t.getUniformLocation(e, "uLow"),
                    uHigh: t.getUniformLocation(e, "uHigh"),
                  };
                },
                sendUniformData: function (t, i) {
                  var n = new e.Color(this.color).getSource(),
                    r = parseFloat(this.distance),
                    o = [
                      0 + n[0] / 255 - r,
                      0 + n[1] / 255 - r,
                      0 + n[2] / 255 - r,
                      1,
                    ];
                  (r = [n[0] / 255 + r, n[1] / 255 + r, n[2] / 255 + r, 1]),
                    t.uniform4fv(i.uLow, o),
                    t.uniform4fv(i.uHigh, r);
                },
                toObject: function () {
                  return i(this.callSuper("toObject"), {
                    color: this.color,
                    distance: this.distance,
                  });
                },
              })),
              (e.Image.filters.RemoveColor.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e,
              i = t.fabric || (t.fabric = {}),
              n = i.Image.filters,
              r = i.util.createClass,
              o = {
                Brownie: [
                  0.5997, 0.34553, -0.27082, 0, 0.186, -0.0377, 0.86095,
                  0.15059, 0, -0.1449, 0.24113, -0.07441, 0.44972, 0, -0.02965,
                  0, 0, 0, 1, 0,
                ],
                Vintage: [
                  0.62793, 0.32021, -0.03965, 0, 0.03784, 0.02578, 0.64411,
                  0.03259, 0, 0.02926, 0.0466, -0.08512, 0.52416, 0, 0.02023, 0,
                  0, 0, 1, 0,
                ],
                Kodachrome: [
                  1.12855, -0.39673, -0.03992, 0, 0.24991, -0.16404, 1.08352,
                  -0.05498, 0, 0.09698, -0.16786, -0.56034, 1.60148, 0, 0.13972,
                  0, 0, 0, 1, 0,
                ],
                Technicolor: [
                  1.91252, -0.85453, -0.09155, 0, 0.04624, -0.30878, 1.76589,
                  -0.10601, 0, -0.27589, -0.2311, -0.75018, 1.84759, 0, 0.12137,
                  0, 0, 0, 1, 0,
                ],
                Polaroid: [
                  1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0,
                  -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
                ],
                Sepia: [
                  0.393, 0.769, 0.189, 0, 0, 0.349, 0.686, 0.168, 0, 0, 0.272,
                  0.534, 0.131, 0, 0, 0, 0, 0, 1, 0,
                ],
                BlackWhite: [
                  1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0,
                  -1, 0, 0, 0, 1, 0,
                ],
              };
            for (e in o)
              (n[e] = r(n.ColorMatrix, {
                type: e,
                matrix: o[e],
                mainParameter: !1,
                colorsOnly: !0,
              })),
                (i.Image.filters[e].fromObject =
                  i.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric,
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.BlendColor = t(i.BaseFilter, {
                type: "BlendColor",
                color: "#F95C63",
                mode: "multiply",
                alpha: 1,
                fragmentSource: {
                  multiply: "gl_FragColor.rgb *= uColor.rgb;\n",
                  screen:
                    "gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);\n",
                  add: "gl_FragColor.rgb += uColor.rgb;\n",
                  diff: "gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n",
                  subtract: "gl_FragColor.rgb -= uColor.rgb;\n",
                  lighten:
                    "gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n",
                  darken:
                    "gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n",
                  exclusion:
                    "gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n",
                  overlay:
                    "if (uColor.r < 0.5) {\ngl_FragColor.r *= 2.0 * uColor.r;\n} else {\ngl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n}\nif (uColor.g < 0.5) {\ngl_FragColor.g *= 2.0 * uColor.g;\n} else {\ngl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n}\nif (uColor.b < 0.5) {\ngl_FragColor.b *= 2.0 * uColor.b;\n} else {\ngl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n}\n",
                  tint: "gl_FragColor.rgb *= (1.0 - uColor.a);\ngl_FragColor.rgb += uColor.rgb;\n",
                },
                buildSource: function (t) {
                  return (
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ngl_FragColor = color;\nif (color.a > 0.0) {\n" +
                    this.fragmentSource[t] +
                    "}\n}"
                  );
                },
                retrieveShader: function (t) {
                  var e,
                    i = this.type + "_" + this.mode;
                  return (
                    t.programCache.hasOwnProperty(i) ||
                      ((e = this.buildSource(this.mode)),
                      (t.programCache[i] = this.createProgram(t.context, e))),
                    t.programCache[i]
                  );
                },
                applyTo2d: function (t) {
                  for (
                    var i,
                      n,
                      r,
                      o = t.imageData.data,
                      s = o.length,
                      a = 1 - this.alpha,
                      h =
                        (t = new e.Color(this.color).getSource())[0] *
                        this.alpha,
                      l = t[1] * this.alpha,
                      c = t[2] * this.alpha,
                      u = 0;
                    u < s;
                    u += 4
                  )
                    switch (
                      ((i = o[u]), (n = o[u + 1]), (r = o[u + 2]), this.mode)
                    ) {
                      case "multiply":
                        (o[u] = (i * h) / 255),
                          (o[u + 1] = (n * l) / 255),
                          (o[u + 2] = (r * c) / 255);
                        break;
                      case "screen":
                        (o[u] = 255 - ((255 - i) * (255 - h)) / 255),
                          (o[u + 1] = 255 - ((255 - n) * (255 - l)) / 255),
                          (o[u + 2] = 255 - ((255 - r) * (255 - c)) / 255);
                        break;
                      case "add":
                        (o[u] = i + h), (o[u + 1] = n + l), (o[u + 2] = r + c);
                        break;
                      case "diff":
                      case "difference":
                        (o[u] = Math.abs(i - h)),
                          (o[u + 1] = Math.abs(n - l)),
                          (o[u + 2] = Math.abs(r - c));
                        break;
                      case "subtract":
                        (o[u] = i - h), (o[u + 1] = n - l), (o[u + 2] = r - c);
                        break;
                      case "darken":
                        (o[u] = Math.min(i, h)),
                          (o[u + 1] = Math.min(n, l)),
                          (o[u + 2] = Math.min(r, c));
                        break;
                      case "lighten":
                        (o[u] = Math.max(i, h)),
                          (o[u + 1] = Math.max(n, l)),
                          (o[u + 2] = Math.max(r, c));
                        break;
                      case "overlay":
                        (o[u] =
                          h < 128
                            ? (2 * i * h) / 255
                            : 255 - (2 * (255 - i) * (255 - h)) / 255),
                          (o[u + 1] =
                            l < 128
                              ? (2 * n * l) / 255
                              : 255 - (2 * (255 - n) * (255 - l)) / 255),
                          (o[u + 2] =
                            c < 128
                              ? (2 * r * c) / 255
                              : 255 - (2 * (255 - r) * (255 - c)) / 255);
                        break;
                      case "exclusion":
                        (o[u] = h + i - (2 * h * i) / 255),
                          (o[u + 1] = l + n - (2 * l * n) / 255),
                          (o[u + 2] = c + r - (2 * c * r) / 255);
                        break;
                      case "tint":
                        (o[u] = h + i * a),
                          (o[u + 1] = l + n * a),
                          (o[u + 2] = c + r * a);
                    }
                },
                getUniformLocations: function (t, e) {
                  return { uColor: t.getUniformLocation(e, "uColor") };
                },
                sendUniformData: function (t, i) {
                  var n = new e.Color(this.color).getSource();
                  (n[0] = (this.alpha * n[0]) / 255),
                    (n[1] = (this.alpha * n[1]) / 255),
                    (n[2] = (this.alpha * n[2]) / 255),
                    (n[3] = this.alpha),
                    t.uniform4fv(i.uColor, n);
                },
                toObject: function () {
                  return {
                    type: this.type,
                    color: this.color,
                    mode: this.mode,
                    alpha: this.alpha,
                  };
                },
              })),
              (e.Image.filters.BlendColor.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric,
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.BlendImage = t(i.BaseFilter, {
                type: "BlendImage",
                image: null,
                mode: "multiply",
                alpha: 1,
                vertexSource:
                  "attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nuniform mat3 uTransformMatrix;\nvoid main() {\nvTexCoord = aPosition;\nvTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
                fragmentSource: {
                  multiply:
                    "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.rgba *= color2.rgba;\ngl_FragColor = color;\n}",
                  mask: "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.a = color2.a;\ngl_FragColor = color;\n}",
                },
                retrieveShader: function (t) {
                  var e = this.type + "_" + this.mode,
                    i = this.fragmentSource[this.mode];
                  return (
                    t.programCache.hasOwnProperty(e) ||
                      (t.programCache[e] = this.createProgram(t.context, i)),
                    t.programCache[e]
                  );
                },
                applyToWebGL: function (t) {
                  var e = t.context,
                    i = this.createTexture(t.filterBackend, this.image);
                  this.bindAdditionalTexture(e, i, e.TEXTURE1),
                    this.callSuper("applyToWebGL", t),
                    this.unbindAdditionalTexture(e, e.TEXTURE1);
                },
                createTexture: function (t, e) {
                  return t.getCachedTexture(e.cacheKey, e._element);
                },
                calculateMatrix: function () {
                  var t = this.image,
                    e = t._element.width,
                    i = t._element.height;
                  return [
                    1 / t.scaleX,
                    0,
                    0,
                    0,
                    1 / t.scaleY,
                    0,
                    -t.left / e,
                    -t.top / i,
                    1,
                  ];
                },
                applyTo2d: function (t) {
                  var i,
                    n,
                    r,
                    o,
                    s,
                    a,
                    h,
                    l,
                    c = t.imageData,
                    u = t.filterBackend.resources,
                    f = c.data,
                    d = f.length,
                    g = c.width,
                    p = c.height;
                  (t = this.image),
                    u.blendImage ||
                      (u.blendImage = e.util.createCanvasElement()),
                    (u = (c = u.blendImage).getContext("2d")),
                    c.width !== g || c.height !== p
                      ? ((c.width = g), (c.height = p))
                      : u.clearRect(0, 0, g, p),
                    u.setTransform(t.scaleX, 0, 0, t.scaleY, t.left, t.top),
                    u.drawImage(t._element, 0, 0, g, p);
                  for (
                    var m = u.getImageData(0, 0, g, p).data, v = 0;
                    v < d;
                    v += 4
                  )
                    switch (
                      ((s = f[v]),
                      (a = f[v + 1]),
                      (h = f[v + 2]),
                      (l = f[v + 3]),
                      (i = m[v]),
                      (n = m[v + 1]),
                      (r = m[v + 2]),
                      (o = m[v + 3]),
                      this.mode)
                    ) {
                      case "multiply":
                        (f[v] = (s * i) / 255),
                          (f[v + 1] = (a * n) / 255),
                          (f[v + 2] = (h * r) / 255),
                          (f[v + 3] = (l * o) / 255);
                        break;
                      case "mask":
                        f[v + 3] = o;
                    }
                },
                getUniformLocations: function (t, e) {
                  return {
                    uTransformMatrix: t.getUniformLocation(
                      e,
                      "uTransformMatrix"
                    ),
                    uImage: t.getUniformLocation(e, "uImage"),
                  };
                },
                sendUniformData: function (t, e) {
                  var i = this.calculateMatrix();
                  t.uniform1i(e.uImage, 1),
                    t.uniformMatrix3fv(e.uTransformMatrix, !1, i);
                },
                toObject: function () {
                  return {
                    type: this.type,
                    image: this.image && this.image.toObject(),
                    mode: this.mode,
                    alpha: this.alpha,
                  };
                },
              })),
              (e.Image.filters.BlendImage.fromObject = function (t, i) {
                e.Image.fromObject(t.image, function (n) {
                  var r = e.util.object.clone(t);
                  (r.image = n), i(new e.Image.filters.BlendImage(r));
                });
              });
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = Math.pow,
              n = Math.floor,
              r = Math.sqrt,
              o = Math.abs,
              s = Math.round,
              a = Math.sin,
              h = Math.ceil,
              l = e.Image.filters;
            (t = e.util.createClass),
              (l.Resize = t(l.BaseFilter, {
                type: "Resize",
                resizeType: "hermite",
                scaleX: 1,
                scaleY: 1,
                lanczosLobes: 3,
                getUniformLocations: function (t, e) {
                  return {
                    uDelta: t.getUniformLocation(e, "uDelta"),
                    uTaps: t.getUniformLocation(e, "uTaps"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform2fv(
                    e.uDelta,
                    this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]
                  ),
                    t.uniform1fv(e.uTaps, this.taps);
                },
                retrieveShader: function (t) {
                  var e = this.getFilterWindow(),
                    i = this.type + "_" + e;
                  return (
                    t.programCache.hasOwnProperty(i) ||
                      ((e = this.generateShader(e)),
                      (t.programCache[i] = this.createProgram(t.context, e))),
                    t.programCache[i]
                  );
                },
                getFilterWindow: function () {
                  var t = this.tempScale;
                  return Math.ceil(this.lanczosLobes / t);
                },
                getTaps: function () {
                  for (
                    var t = this.lanczosCreate(this.lanczosLobes),
                      e = this.tempScale,
                      i = this.getFilterWindow(),
                      n = new Array(i),
                      r = 1;
                    r <= i;
                    r++
                  )
                    n[r - 1] = t(r * e);
                  return n;
                },
                generateShader: function (t) {
                  for (
                    var e = new Array(t), i = this.fragmentSourceTOP, n = 1;
                    n <= t;
                    n++
                  )
                    e[n - 1] = n + ".0 * uDelta";
                  return (
                    (i += "uniform float uTaps[" + t + "];\n"),
                    (i += "void main() {\n"),
                    (i += "  vec4 color = texture2D(uTexture, vTexCoord);\n"),
                    (i += "  float sum = 1.0;\n"),
                    e.forEach(function (t, e) {
                      (i +=
                        "  color += texture2D(uTexture, vTexCoord + " +
                        t +
                        ") * uTaps[" +
                        e +
                        "];\n"),
                        (i +=
                          "  color += texture2D(uTexture, vTexCoord - " +
                          t +
                          ") * uTaps[" +
                          e +
                          "];\n"),
                        (i += "  sum += 2.0 * uTaps[" + e + "];\n");
                    }),
                    (i += "  gl_FragColor = color / sum;\n"),
                    (i += "}")
                  );
                },
                fragmentSourceTOP:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\n",
                applyTo: function (t) {
                  t.webgl
                    ? (t.passes++,
                      (this.width = t.sourceWidth),
                      (this.horizontal = !0),
                      (this.dW = Math.round(this.width * this.scaleX)),
                      (this.dH = t.sourceHeight),
                      (this.tempScale = this.dW / this.width),
                      (this.taps = this.getTaps()),
                      (t.destinationWidth = this.dW),
                      this._setupFrameBuffer(t),
                      this.applyToWebGL(t),
                      this._swapTextures(t),
                      (t.sourceWidth = t.destinationWidth),
                      (this.height = t.sourceHeight),
                      (this.horizontal = !1),
                      (this.dH = Math.round(this.height * this.scaleY)),
                      (this.tempScale = this.dH / this.height),
                      (this.taps = this.getTaps()),
                      (t.destinationHeight = this.dH),
                      this._setupFrameBuffer(t),
                      this.applyToWebGL(t),
                      this._swapTextures(t),
                      (t.sourceHeight = t.destinationHeight))
                    : this.applyTo2d(t);
                },
                isNeutralState: function () {
                  return 1 === this.scaleX && 1 === this.scaleY;
                },
                lanczosCreate: function (t) {
                  return function (e) {
                    if (t <= e || e <= -t) return 0;
                    if (e < 1.1920929e-7 && -1.1920929e-7 < e) return 1;
                    var i = (e *= Math.PI) / t;
                    return ((a(e) / e) * a(i)) / i;
                  };
                },
                applyTo2d: function (t) {
                  var e = t.imageData,
                    i = this.scaleX,
                    n = this.scaleY;
                  (this.rcpScaleX = 1 / i), (this.rcpScaleY = 1 / n);
                  var r,
                    o = e.width;
                  (e = e.height),
                    (i = s(o * i)),
                    (n = s(e * n)),
                    "sliceHack" === this.resizeType
                      ? (r = this.sliceByTwo(t, o, e, i, n))
                      : "hermite" === this.resizeType
                      ? (r = this.hermiteFastResize(t, o, e, i, n))
                      : "bilinear" === this.resizeType
                      ? (r = this.bilinearFiltering(t, o, e, i, n))
                      : "lanczos" === this.resizeType &&
                        (r = this.lanczosResize(t, o, e, i, n)),
                    (t.imageData = r);
                },
                sliceByTwo: function (t, i, r, o, s) {
                  var a,
                    h,
                    l = t.imageData,
                    c = !1,
                    u = !1,
                    f = 0.5 * i,
                    d = 0.5 * r,
                    g = 0,
                    p = 0,
                    m = i,
                    v = 0;
                  for (
                    (t = e.filterBackend.resources).sliceByTwo ||
                      (t.sliceByTwo = document.createElement("canvas")),
                      ((a = t.sliceByTwo).width < 1.5 * i || a.height < r) &&
                        ((a.width = 1.5 * i), (a.height = r)),
                      (h = a.getContext("2d")).clearRect(0, 0, 1.5 * i, r),
                      h.putImageData(l, 0, 0),
                      o = n(o),
                      s = n(s);
                    !c || !u;

                  )
                    (r = d),
                      o < n(0.5 * (i = f))
                        ? (f = n(0.5 * f))
                        : ((f = o), (c = !0)),
                      s < n(0.5 * d) ? (d = n(0.5 * d)) : ((d = s), (u = !0)),
                      h.drawImage(a, g, p, i, r, m, v, f, d),
                      (g = m),
                      (p = v),
                      (v += d);
                  return h.getImageData(g, p, o, s);
                },
                lanczosResize: function (t, e, s, a, l) {
                  var c = t.imageData.data,
                    u = t.ctx.createImageData(a, l),
                    f = u.data,
                    d = this.lanczosCreate(this.lanczosLobes),
                    g = this.rcpScaleX,
                    p = this.rcpScaleY,
                    m = 2 / this.rcpScaleX,
                    v = 2 / this.rcpScaleY,
                    y = h((g * this.lanczosLobes) / 2),
                    _ = h((p * this.lanczosLobes) / 2),
                    x = {},
                    b = {},
                    C = {};
                  return (function t(h) {
                    var S, w, T, O, k, P, E, A, j, M;
                    for (b.x = (h + 0.5) * g, C.x = n(b.x), S = 0; S < l; S++) {
                      for (
                        b.y = (S + 0.5) * p,
                          C.y = n(b.y),
                          A = E = P = k = O = 0,
                          w = C.x - y;
                        w <= C.x + y;
                        w++
                      )
                        if (!(w < 0 || e <= w)) {
                          (j = n(1e3 * o(w - b.x))), x[j] || (x[j] = {});
                          for (var D = C.y - _; D <= C.y + _; D++)
                            D < 0 ||
                              s <= D ||
                              ((M = n(1e3 * o(D - b.y))),
                              x[j][M] ||
                                (x[j][M] = d(
                                  r(i(j * m, 2) + i(M * v, 2)) / 1e3
                                )),
                              0 < (M = x[j][M]) &&
                                ((O += M),
                                (k += M * c[(T = 4 * (D * e + w))]),
                                (P += M * c[T + 1]),
                                (E += M * c[T + 2]),
                                (A += M * c[T + 3])));
                        }
                      (f[(T = 4 * (S * a + h))] = k / O),
                        (f[T + 1] = P / O),
                        (f[T + 2] = E / O),
                        (f[T + 3] = A / O);
                    }
                    return ++h < a ? t(h) : u;
                  })(0);
                },
                bilinearFiltering: function (t, e, i, r, o) {
                  for (
                    var s,
                      a,
                      h,
                      l,
                      c,
                      u,
                      f,
                      d,
                      g,
                      p,
                      m,
                      v = 0,
                      y = this.rcpScaleX,
                      _ = this.rcpScaleY,
                      x = 4 * (e - 1),
                      b = t.imageData.data,
                      C = (t = t.ctx.createImageData(r, o)).data,
                      S = 0;
                    S < o;
                    S++
                  )
                    for (f = 0; f < r; f++)
                      for (
                        d = y * f - (c = n(y * f)),
                          g = _ * S - (u = n(_ * S)),
                          m = 4 * (u * e + c),
                          p = 0;
                        p < 4;
                        p++
                      )
                        (s = b[m + p]),
                          (a = b[4 + m + p]),
                          (h = b[m + x + p]),
                          (l = b[m + x + 4 + p]),
                          (C[v++] =
                            s * (1 - d) * (1 - g) +
                            a * d * (1 - g) +
                            h * g * (1 - d) +
                            l * d * g);
                  return t;
                },
                hermiteFastResize: function (t, e, i, s, a) {
                  for (
                    var l = this.rcpScaleX,
                      c = this.rcpScaleY,
                      u = h(l / 2),
                      f = h(c / 2),
                      d = t.imageData.data,
                      g = (t = t.ctx.createImageData(s, a)).data,
                      p = 0;
                    p < a;
                    p++
                  )
                    for (var m = 0; m < s; m++) {
                      for (
                        var v = 4 * (m + p * s),
                          y = 0,
                          _ = 0,
                          x = 0,
                          b = 0,
                          C = 0,
                          S = 0,
                          w = 0,
                          T = (p + 0.5) * c,
                          O = n(p * c);
                        O < (p + 1) * c;
                        O++
                      )
                        for (
                          var k = o(T - (O + 0.5)) / f,
                            P = (m + 0.5) * l,
                            E = k * k,
                            A = n(m * l);
                          A < (m + 1) * l;
                          A++
                        ) {
                          var j = o(P - (A + 0.5)) / u,
                            M = r(E + j * j);
                          (1 < M && M < -1) ||
                            (0 < (y = 2 * M * M * M - 3 * M * M + 1) &&
                              ((w += y * d[3 + (j = 4 * (A + O * e))]),
                              (x += y),
                              (b +=
                                (y =
                                  d[3 + j] < 255 ? (y * d[3 + j]) / 250 : y) *
                                d[j]),
                              (C += y * d[1 + j]),
                              (S += y * d[2 + j]),
                              (_ += y)));
                        }
                      (g[v] = b / _),
                        (g[1 + v] = C / _),
                        (g[2 + v] = S / _),
                        (g[3 + v] = w / x);
                    }
                  return t;
                },
                toObject: function () {
                  return {
                    type: this.type,
                    scaleX: this.scaleX,
                    scaleY: this.scaleY,
                    resizeType: this.resizeType,
                    lanczosLobes: this.lanczosLobes,
                  };
                },
              })),
              (e.Image.filters.Resize.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.Contrast = t(i.BaseFilter, {
                type: "Contrast",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uContrast;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\ncolor.rgb = contrastF * (color.rgb - 0.5) + 0.5;\ngl_FragColor = color;\n}",
                contrast: 0,
                mainParameter: "contrast",
                applyTo2d: function (t) {
                  if (0 !== this.contrast)
                    for (
                      var e = t.imageData.data,
                        i = e.length,
                        n =
                          (259 *
                            ((t = Math.floor(255 * this.contrast)) + 255)) /
                          (255 * (259 - t)),
                        r = 0;
                      r < i;
                      r += 4
                    )
                      (e[r] = n * (e[r] - 128) + 128),
                        (e[r + 1] = n * (e[r + 1] - 128) + 128),
                        (e[r + 2] = n * (e[r + 2] - 128) + 128);
                },
                getUniformLocations: function (t, e) {
                  return { uContrast: t.getUniformLocation(e, "uContrast") };
                },
                sendUniformData: function (t, e) {
                  t.uniform1f(e.uContrast, this.contrast);
                },
              })),
              (e.Image.filters.Contrast.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.Saturation = t(i.BaseFilter, {
                type: "Saturation",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uSaturation;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat rgMax = max(color.r, color.g);\nfloat rgbMax = max(rgMax, color.b);\ncolor.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\ncolor.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\ncolor.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\ngl_FragColor = color;\n}",
                saturation: 0,
                mainParameter: "saturation",
                applyTo2d: function (t) {
                  if (0 !== this.saturation)
                    for (
                      var e,
                        i = t.imageData.data,
                        n = i.length,
                        r = -this.saturation,
                        o = 0;
                      o < n;
                      o += 4
                    )
                      (e = Math.max(i[o], i[o + 1], i[o + 2])),
                        (i[o] += e !== i[o] ? (e - i[o]) * r : 0),
                        (i[o + 1] += e !== i[o + 1] ? (e - i[o + 1]) * r : 0),
                        (i[o + 2] += e !== i[o + 2] ? (e - i[o + 2]) * r : 0);
                },
                getUniformLocations: function (t, e) {
                  return {
                    uSaturation: t.getUniformLocation(e, "uSaturation"),
                  };
                },
                sendUniformData: function (t, e) {
                  t.uniform1f(e.uSaturation, -this.saturation);
                },
              })),
              (e.Image.filters.Saturation.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.Vibrance = t(i.BaseFilter, {
                type: "Vibrance",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform float uVibrance;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat max = max(color.r, max(color.g, color.b));\nfloat avg = (color.r + color.g + color.b) / 3.0;\nfloat amt = (abs(max - avg) * 2.0) * uVibrance;\ncolor.r += max != color.r ? (max - color.r) * amt : 0.00;\ncolor.g += max != color.g ? (max - color.g) * amt : 0.00;\ncolor.b += max != color.b ? (max - color.b) * amt : 0.00;\ngl_FragColor = color;\n}",
                vibrance: 0,
                mainParameter: "vibrance",
                applyTo2d: function (t) {
                  if (0 !== this.vibrance)
                    for (
                      var e,
                        i,
                        n = t.imageData.data,
                        r = n.length,
                        o = -this.vibrance,
                        s = 0;
                      s < r;
                      s += 4
                    )
                      (e = Math.max(n[s], n[s + 1], n[s + 2])),
                        (i = (n[s] + n[s + 1] + n[s + 2]) / 3),
                        (i = ((2 * Math.abs(e - i)) / 255) * o),
                        (n[s] += e !== n[s] ? (e - n[s]) * i : 0),
                        (n[s + 1] += e !== n[s + 1] ? (e - n[s + 1]) * i : 0),
                        (n[s + 2] += e !== n[s + 2] ? (e - n[s + 2]) * i : 0);
                },
                getUniformLocations: function (t, e) {
                  return { uVibrance: t.getUniformLocation(e, "uVibrance") };
                },
                sendUniformData: function (t, e) {
                  t.uniform1f(e.uVibrance, -this.vibrance);
                },
              })),
              (e.Image.filters.Vibrance.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.Blur = t(i.BaseFilter, {
                type: "Blur",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\nconst float nSamples = 15.0;\nvec3 v3offset = vec3(12.9898, 78.233, 151.7182);\nfloat random(vec3 scale) {\nreturn fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n}\nvoid main() {\nvec4 color = vec4(0.0);\nfloat total = 0.0;\nfloat offset = random(v3offset);\nfor (float t = -nSamples; t <= nSamples; t++) {\nfloat percent = (t + offset - 0.5) / nSamples;\nfloat weight = 1.0 - abs(percent);\ncolor += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\ntotal += weight;\n}\ngl_FragColor = color / total;\n}",
                blur: 0,
                mainParameter: "blur",
                applyTo: function (t) {
                  t.webgl
                    ? ((this.aspectRatio = t.sourceWidth / t.sourceHeight),
                      t.passes++,
                      this._setupFrameBuffer(t),
                      (this.horizontal = !0),
                      this.applyToWebGL(t),
                      this._swapTextures(t),
                      this._setupFrameBuffer(t),
                      (this.horizontal = !1),
                      this.applyToWebGL(t),
                      this._swapTextures(t))
                    : this.applyTo2d(t);
                },
                applyTo2d: function (t) {
                  t.imageData = this.simpleBlur(t);
                },
                simpleBlur: function (t) {
                  var i,
                    n,
                    r = t.filterBackend.resources,
                    o = t.imageData.width,
                    s = t.imageData.height;
                  r.blurLayer1 ||
                    ((r.blurLayer1 = e.util.createCanvasElement()),
                    (r.blurLayer2 = e.util.createCanvasElement())),
                    (i = r.blurLayer1),
                    (n = r.blurLayer2),
                    (i.width === o && i.height === s) ||
                      ((n.width = i.width = o), (n.height = i.height = s));
                  var a,
                    h,
                    l,
                    c,
                    u = i.getContext("2d"),
                    f = n.getContext("2d"),
                    d = 0.06 * this.blur * 0.5;
                  for (
                    u.putImageData(t.imageData, 0, 0),
                      f.clearRect(0, 0, o, s),
                      c = -15;
                    c <= 15;
                    c++
                  )
                    (l =
                      d * (h = c / 15) * o + (a = (Math.random() - 0.5) / 4)),
                      (f.globalAlpha = 1 - Math.abs(h)),
                      f.drawImage(i, l, a),
                      u.drawImage(n, 0, 0),
                      (f.globalAlpha = 1),
                      f.clearRect(0, 0, n.width, n.height);
                  for (c = -15; c <= 15; c++)
                    (l =
                      d * (h = c / 15) * s + (a = (Math.random() - 0.5) / 4)),
                      (f.globalAlpha = 1 - Math.abs(h)),
                      f.drawImage(i, a, l),
                      u.drawImage(n, 0, 0),
                      (f.globalAlpha = 1),
                      f.clearRect(0, 0, n.width, n.height);
                  return (
                    t.ctx.drawImage(i, 0, 0),
                    (t = t.ctx.getImageData(0, 0, i.width, i.height)),
                    (u.globalAlpha = 1),
                    u.clearRect(0, 0, i.width, i.height),
                    t
                  );
                },
                getUniformLocations: function (t, e) {
                  return { delta: t.getUniformLocation(e, "uDelta") };
                },
                sendUniformData: function (t, e) {
                  var i = this.chooseRightDelta();
                  t.uniform2fv(e.delta, i);
                },
                chooseRightDelta: function () {
                  var t = 1,
                    e = [0, 0];
                  return (
                    this.horizontal
                      ? 1 < this.aspectRatio && (t = 1 / this.aspectRatio)
                      : this.aspectRatio < 1 && (t = this.aspectRatio),
                    (t = t * this.blur * 0.12),
                    this.horizontal ? (e[0] = t) : (e[1] = t),
                    e
                  );
                },
              })),
              (i.Blur.fromObject = e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.Gamma = t(i.BaseFilter, {
                type: "Gamma",
                fragmentSource:
                  "precision highp float;\nuniform sampler2D uTexture;\nuniform vec3 uGamma;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec3 correction = (1.0 / uGamma);\ncolor.r = pow(color.r, correction.r);\ncolor.g = pow(color.g, correction.g);\ncolor.b = pow(color.b, correction.b);\ngl_FragColor = color;\ngl_FragColor.rgb *= color.a;\n}",
                gamma: [1, 1, 1],
                mainParameter: "gamma",
                initialize: function (t) {
                  (this.gamma = [1, 1, 1]),
                    i.BaseFilter.prototype.initialize.call(this, t);
                },
                applyTo2d: function (t) {
                  var e,
                    i = t.imageData.data,
                    n = ((t = this.gamma), i.length),
                    r = 1 / t[0],
                    o = 1 / t[1],
                    s = 1 / t[2];
                  for (
                    this.rVals ||
                      ((this.rVals = new Uint8Array(256)),
                      (this.gVals = new Uint8Array(256)),
                      (this.bVals = new Uint8Array(256))),
                      e = 0,
                      n = 256;
                    e < n;
                    e++
                  )
                    (this.rVals[e] = 255 * Math.pow(e / 255, r)),
                      (this.gVals[e] = 255 * Math.pow(e / 255, o)),
                      (this.bVals[e] = 255 * Math.pow(e / 255, s));
                  for (e = 0, n = i.length; e < n; e += 4)
                    (i[e] = this.rVals[i[e]]),
                      (i[e + 1] = this.gVals[i[e + 1]]),
                      (i[e + 2] = this.bVals[i[e + 2]]);
                },
                getUniformLocations: function (t, e) {
                  return { uGamma: t.getUniformLocation(e, "uGamma") };
                },
                sendUniformData: function (t, e) {
                  t.uniform3fv(e.uGamma, this.gamma);
                },
              })),
              (e.Image.filters.Gamma.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.Composed = t(i.BaseFilter, {
                type: "Composed",
                subFilters: [],
                initialize: function (t) {
                  this.callSuper("initialize", t),
                    (this.subFilters = this.subFilters.slice(0));
                },
                applyTo: function (t) {
                  (t.passes += this.subFilters.length - 1),
                    this.subFilters.forEach(function (e) {
                      e.applyTo(t);
                    });
                },
                toObject: function () {
                  return e.util.object.extend(this.callSuper("toObject"), {
                    subFilters: this.subFilters.map(function (t) {
                      return t.toObject();
                    }),
                  });
                },
                isNeutralState: function () {
                  return !this.subFilters.some(function (t) {
                    return !t.isNeutralState();
                  });
                },
              })),
              (e.Image.filters.Composed.fromObject = function (t, i) {
                return (
                  (t = (t.subFilters || []).map(function (t) {
                    return new e.Image.filters[t.type](t);
                  })),
                  (t = new e.Image.filters.Composed({ subFilters: t })),
                  i && i(t),
                  t
                );
              });
          })(e),
          (function (t) {
            var e = t.fabric || (t.fabric = {}),
              i = e.Image.filters;
            (t = e.util.createClass),
              (i.HueRotation = t(i.ColorMatrix, {
                type: "HueRotation",
                rotation: 0,
                mainParameter: "rotation",
                calculateMatrix: function () {
                  var t = this.rotation * Math.PI,
                    i = e.util.cos(t),
                    n = e.util.sin(t);
                  (t = Math.sqrt(1 / 3) * n),
                    (n = 1 - i),
                    (this.matrix = [
                      1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                      0,
                    ]),
                    (this.matrix[0] = i + n / 3),
                    (this.matrix[1] = (1 / 3) * n - t),
                    (this.matrix[2] = (1 / 3) * n + t),
                    (this.matrix[5] = (1 / 3) * n + t),
                    (this.matrix[6] = i + (1 / 3) * n),
                    (this.matrix[7] = (1 / 3) * n - t),
                    (this.matrix[10] = (1 / 3) * n - t),
                    (this.matrix[11] = (1 / 3) * n + t),
                    (this.matrix[12] = i + (1 / 3) * n);
                },
                isNeutralState: function (t) {
                  return (
                    this.calculateMatrix(),
                    i.BaseFilter.prototype.isNeutralState.call(this, t)
                  );
                },
                applyTo: function (t) {
                  this.calculateMatrix(),
                    i.BaseFilter.prototype.applyTo.call(this, t);
                },
              })),
              (e.Image.filters.HueRotation.fromObject =
                e.Image.filters.BaseFilter.fromObject);
          })(e),
          (function (t) {
            var e,
              i = t.fabric || (t.fabric = {}),
              n = i.util.object.clone;
            i.Text
              ? i.warn("fabric.Text is already defined")
              : ((e =
                  "fontFamily fontWeight fontSize text underline overline linethrough textAlign fontStyle lineHeight textBackgroundColor charSpacing styles direction path pathStartOffset pathSide".split(
                    " "
                  )),
                (i.Text = i.util.createClass(i.Object, {
                  _dimensionAffectingProps: [
                    "fontSize",
                    "fontWeight",
                    "fontFamily",
                    "fontStyle",
                    "lineHeight",
                    "text",
                    "charSpacing",
                    "textAlign",
                    "styles",
                    "path",
                    "pathStartOffset",
                    "pathSide",
                  ],
                  _reNewline: /\r?\n/,
                  _reSpacesAndTabs: /[ \t\r]/g,
                  _reSpaceAndTab: /[ \t\r]/,
                  _reWords: /\S+/g,
                  type: "text",
                  fontSize: 40,
                  fontWeight: "normal",
                  fontFamily: "Times New Roman",
                  underline: !1,
                  overline: !1,
                  linethrough: !1,
                  textAlign: "left",
                  fontStyle: "normal",
                  lineHeight: 1.16,
                  superscript: { size: 0.6, baseline: -0.35 },
                  subscript: { size: 0.6, baseline: 0.11 },
                  textBackgroundColor: "",
                  stateProperties: i.Object.prototype.stateProperties.concat(e),
                  cacheProperties: i.Object.prototype.cacheProperties.concat(e),
                  stroke: null,
                  shadow: null,
                  path: null,
                  pathStartOffset: 0,
                  pathSide: "left",
                  _fontSizeFraction: 0.222,
                  offsets: {
                    underline: 0.1,
                    linethrough: -0.315,
                    overline: -0.88,
                  },
                  _fontSizeMult: 1.13,
                  charSpacing: 0,
                  styles: null,
                  _measuringContext: null,
                  deltaY: 0,
                  direction: "ltr",
                  _styleProperties: [
                    "stroke",
                    "strokeWidth",
                    "fill",
                    "fontFamily",
                    "fontSize",
                    "fontWeight",
                    "fontStyle",
                    "underline",
                    "overline",
                    "linethrough",
                    "deltaY",
                    "textBackgroundColor",
                  ],
                  __charBounds: [],
                  CACHE_FONT_SIZE: 400,
                  MIN_TEXT_WIDTH: 2,
                  initialize: function (t, e) {
                    (this.styles = (e && e.styles) || {}),
                      (this.text = t),
                      (this.__skipDimension = !0),
                      this.callSuper("initialize", e),
                      this.path && this.setPathInfo(),
                      (this.__skipDimension = !1),
                      this.initDimensions(),
                      this.setCoords(),
                      this.setupState({
                        propertySet: "_dimensionAffectingProps",
                      });
                  },
                  setPathInfo: function () {
                    var t = this.path;
                    t && (t.segmentsInfo = i.util.getPathSegmentsInfo(t.path));
                  },
                  getMeasuringContext: function () {
                    return (
                      i._measuringContext ||
                        (i._measuringContext =
                          (this.canvas && this.canvas.contextCache) ||
                          i.util.createCanvasElement().getContext("2d")),
                      i._measuringContext
                    );
                  },
                  _splitText: function () {
                    var t = this._splitTextIntoLines(this.text);
                    return (
                      (this.textLines = t.lines),
                      (this._textLines = t.graphemeLines),
                      (this._unwrappedTextLines = t._unwrappedLines),
                      (this._text = t.graphemeText),
                      t
                    );
                  },
                  initDimensions: function () {
                    this.__skipDimension ||
                      (this._splitText(),
                      this._clearCache(),
                      this.path
                        ? ((this.width = this.path.width),
                          (this.height = this.path.height))
                        : ((this.width =
                            this.calcTextWidth() ||
                            this.cursorWidth ||
                            this.MIN_TEXT_WIDTH),
                          (this.height = this.calcTextHeight())),
                      -1 !== this.textAlign.indexOf("justify") &&
                        this.enlargeSpaces(),
                      this.saveState({
                        propertySet: "_dimensionAffectingProps",
                      }));
                  },
                  enlargeSpaces: function () {
                    for (
                      var t, e, i, n, r, o = 0, s = this._textLines.length;
                      o < s;
                      o++
                    )
                      if (
                        ("justify" === this.textAlign ||
                          (o !== s - 1 && !this.isEndOfWrapping(o))) &&
                        ((e = 0),
                        (i = this._textLines[o]),
                        (t = this.getLineWidth(o)) < this.width &&
                          (r = this.textLines[o].match(this._reSpacesAndTabs)))
                      )
                        for (
                          var a = r.length,
                            h = (this.width - t) / a,
                            l = 0,
                            c = i.length;
                          l <= c;
                          l++
                        )
                          (n = this.__charBounds[o][l]),
                            this._reSpaceAndTab.test(i[l])
                              ? ((n.width += h),
                                (n.kernedWidth += h),
                                (n.left += e),
                                (e += h))
                              : (n.left += e);
                  },
                  isEndOfWrapping: function (t) {
                    return t === this._textLines.length - 1;
                  },
                  missingNewlineOffset: function () {
                    return 1;
                  },
                  toString: function () {
                    return (
                      "#<fabric.Text (" +
                      this.complexity() +
                      '): { "text": "' +
                      this.text +
                      '", "fontFamily": "' +
                      this.fontFamily +
                      '" }>'
                    );
                  },
                  _getCacheCanvasDimensions: function () {
                    var t = this.callSuper("_getCacheCanvasDimensions"),
                      e = this.fontSize;
                    return (
                      (t.width += e * t.zoomX), (t.height += e * t.zoomY), t
                    );
                  },
                  _render: function (t) {
                    var e = this.path;
                    e && !e.isNotVisible() && e._render(t),
                      this._setTextStyles(t),
                      this._renderTextLinesBackground(t),
                      this._renderTextDecoration(t, "underline"),
                      this._renderText(t),
                      this._renderTextDecoration(t, "overline"),
                      this._renderTextDecoration(t, "linethrough");
                  },
                  _renderText: function (t) {
                    "stroke" === this.paintFirst
                      ? (this._renderTextStroke(t), this._renderTextFill(t))
                      : (this._renderTextFill(t), this._renderTextStroke(t));
                  },
                  _setTextStyles: function (t, e, i) {
                    (t.textBaseline = "alphabetic"),
                      (t.font = this._getFontDeclaration(e, i));
                  },
                  calcTextWidth: function () {
                    for (
                      var t = this.getLineWidth(0),
                        e = 1,
                        i = this._textLines.length;
                      e < i;
                      e++
                    ) {
                      var n = this.getLineWidth(e);
                      t < n && (t = n);
                    }
                    return t;
                  },
                  _renderTextLine: function (t, e, i, n, r, o) {
                    this._renderChars(t, e, i, n, r, o);
                  },
                  _renderTextLinesBackground: function (t) {
                    if (
                      this.textBackgroundColor ||
                      this.styleHas("textBackgroundColor")
                    ) {
                      for (
                        var e,
                          i,
                          n,
                          r,
                          o = t.fillStyle,
                          s = this._getLeftOffset(),
                          a = this._getTopOffset(),
                          h = 0,
                          l = 0,
                          c = this.path,
                          u = 0,
                          f = this._textLines.length;
                        u < f;
                        u++
                      )
                        if (
                          ((e = this.getHeightOfLine(u)),
                          this.textBackgroundColor ||
                            this.styleHas("textBackgroundColor", u))
                        ) {
                          for (
                            var d = this._textLines[u],
                              g = this._getLineLeftOffset(u),
                              p =
                                ((l = 0),
                                (h = 0),
                                this.getValueOfPropertyAt(
                                  u,
                                  0,
                                  "textBackgroundColor"
                                )),
                              m = 0,
                              v = d.length;
                            m < v;
                            m++
                          )
                            (i = this.__charBounds[u][m]),
                              (n = this.getValueOfPropertyAt(
                                u,
                                m,
                                "textBackgroundColor"
                              )),
                              c
                                ? (t.save(),
                                  t.translate(i.renderLeft, i.renderTop),
                                  t.rotate(i.angle),
                                  (t.fillStyle = n) &&
                                    t.fillRect(
                                      -i.width / 2,
                                      (-e / this.lineHeight) *
                                        (1 - this._fontSizeFraction),
                                      i.width,
                                      e / this.lineHeight
                                    ),
                                  t.restore())
                                : n !== p
                                ? ((r = s + g + h),
                                  "rtl" === this.direction &&
                                    (r = this.width - r - l),
                                  (t.fillStyle = p) &&
                                    t.fillRect(r, a, l, e / this.lineHeight),
                                  (h = i.left),
                                  (l = i.width),
                                  (p = n))
                                : (l += i.kernedWidth);
                          n &&
                            !c &&
                            ((r = s + g + h),
                            "rtl" === this.direction &&
                              (r = this.width - r - l),
                            (t.fillStyle = n),
                            t.fillRect(r, a, l, e / this.lineHeight)),
                            (a += e);
                        } else a += e;
                      (t.fillStyle = o), this._removeShadow(t);
                    }
                  },
                  getFontCache: function (t) {
                    var e = t.fontFamily.toLowerCase();
                    return (
                      i.charWidthsCache[e] || (i.charWidthsCache[e] = {}),
                      (e = i.charWidthsCache[e])[
                        (t =
                          t.fontStyle.toLowerCase() +
                          "_" +
                          (t.fontWeight + "").toLowerCase())
                      ] || (e[t] = {}),
                      e[t]
                    );
                  },
                  _measureChar: function (t, e, i, n) {
                    var r,
                      o,
                      s,
                      a,
                      h,
                      l = this.getFontCache(e),
                      c = i + t,
                      u =
                        this._getFontDeclaration(e) ===
                        this._getFontDeclaration(n);
                    return (
                      (n = e.fontSize / this.CACHE_FONT_SIZE),
                      i && void 0 !== l[i] && (s = l[i]),
                      void 0 !== l[t] && (a = r = l[t]),
                      u && void 0 !== l[c] && (a = (o = l[c]) - s),
                      (void 0 !== r && void 0 !== s && void 0 !== o) ||
                        ((h = this.getMeasuringContext()),
                        this._setTextStyles(h, e, !0)),
                      void 0 === r &&
                        ((a = r = h.measureText(t).width), (l[t] = r)),
                      void 0 === s &&
                        u &&
                        i &&
                        ((s = h.measureText(i).width), (l[i] = s)),
                      u &&
                        void 0 === o &&
                        ((o = h.measureText(c).width), (a = (l[c] = o) - s)),
                      { width: r * n, kernedWidth: a * n }
                    );
                  },
                  getHeightOfChar: function (t, e) {
                    return this.getValueOfPropertyAt(t, e, "fontSize");
                  },
                  measureLine: function (t) {
                    return (
                      (t = this._measureLine(t)),
                      0 !== this.charSpacing &&
                        (t.width -= this._getWidthOfCharSpacing()),
                      t.width < 0 && (t.width = 0),
                      t
                    );
                  },
                  _measureLine: function (t) {
                    var e,
                      n,
                      r,
                      o,
                      s,
                      a,
                      h = 0,
                      l = this._textLines[t],
                      c = new Array(l.length),
                      u = 0,
                      f = this.path,
                      d = "right" === this.pathSide;
                    for (this.__charBounds[t] = c, e = 0; e < l.length; e++)
                      (n = l[e]),
                        (o = this._getGraphemeBox(n, t, e, r)),
                        (h += (c[e] = o).kernedWidth),
                        (r = n);
                    if (
                      ((c[e] = {
                        left: o ? o.left + o.width : 0,
                        width: 0,
                        kernedWidth: 0,
                        height: this.fontSize,
                      }),
                      f)
                    ) {
                      switch (
                        ((a = f.segmentsInfo[f.segmentsInfo.length - 1].length),
                        ((s = i.util.getPointOnPath(
                          f.path,
                          0,
                          f.segmentsInfo
                        )).x += f.pathOffset.x),
                        (s.y += f.pathOffset.y),
                        this.textAlign)
                      ) {
                        case "left":
                          u = d ? a - h : 0;
                          break;
                        case "center":
                          u = (a - h) / 2;
                          break;
                        case "right":
                          u = d ? 0 : a - h;
                      }
                      for (
                        u += this.pathStartOffset * (d ? -1 : 1),
                          e = d ? l.length - 1 : 0;
                        d ? 0 <= e : e < l.length;
                        d ? e-- : e++
                      )
                        (o = c[e]),
                          a < u ? (u %= a) : u < 0 && (u += a),
                          this._setGraphemeOnPath(u, o, s),
                          (u += o.kernedWidth);
                    }
                    return { width: h, numOfSpaces: 0 };
                  },
                  _setGraphemeOnPath: function (t, e, n) {
                    var r = t + e.kernedWidth / 2;
                    (t = this.path),
                      (t = i.util.getPointOnPath(t.path, r, t.segmentsInfo)),
                      (e.renderLeft = t.x - n.x),
                      (e.renderTop = t.y - n.y),
                      (e.angle =
                        t.angle + ("right" === this.pathSide ? Math.PI : 0));
                  },
                  _getGraphemeBox: function (t, e, i, n, r) {
                    var o = this.getCompleteStyleDeclaration(e, i),
                      s = n ? this.getCompleteStyleDeclaration(e, i - 1) : {},
                      a = this._measureChar(t, o, n, s);
                    return (
                      (t = a.kernedWidth),
                      (n = a.width),
                      0 !== this.charSpacing &&
                        ((n += s = this._getWidthOfCharSpacing()), (t += s)),
                      (o = {
                        width: n,
                        left: 0,
                        height: o.fontSize,
                        kernedWidth: t,
                        deltaY: o.deltaY,
                      }),
                      0 < i &&
                        !r &&
                        ((i = this.__charBounds[e][i - 1]),
                        (o.left = i.left + i.width + a.kernedWidth - a.width)),
                      o
                    );
                  },
                  getHeightOfLine: function (t) {
                    if (this.__lineHeights[t]) return this.__lineHeights[t];
                    for (
                      var e = this._textLines[t],
                        i = this.getHeightOfChar(t, 0),
                        n = 1,
                        r = e.length;
                      n < r;
                      n++
                    )
                      i = Math.max(this.getHeightOfChar(t, n), i);
                    return (this.__lineHeights[t] =
                      i * this.lineHeight * this._fontSizeMult);
                  },
                  calcTextHeight: function () {
                    for (
                      var t, e = 0, i = 0, n = this._textLines.length;
                      i < n;
                      i++
                    )
                      (t = this.getHeightOfLine(i)),
                        (e += i === n - 1 ? t / this.lineHeight : t);
                    return e;
                  },
                  _getLeftOffset: function () {
                    return "ltr" === this.direction
                      ? -this.width / 2
                      : this.width / 2;
                  },
                  _getTopOffset: function () {
                    return -this.height / 2;
                  },
                  _renderTextCommon: function (t, e) {
                    t.save();
                    for (
                      var i = 0,
                        n = this._getLeftOffset(),
                        r = this._getTopOffset(),
                        o = 0,
                        s = this._textLines.length;
                      o < s;
                      o++
                    ) {
                      var a = this.getHeightOfLine(o),
                        h = a / this.lineHeight,
                        l = this._getLineLeftOffset(o);
                      this._renderTextLine(
                        e,
                        t,
                        this._textLines[o],
                        n + l,
                        r + i + h,
                        o
                      ),
                        (i += a);
                    }
                    t.restore();
                  },
                  _renderTextFill: function (t) {
                    (this.fill || this.styleHas("fill")) &&
                      this._renderTextCommon(t, "fillText");
                  },
                  _renderTextStroke: function (t) {
                    ((this.stroke && 0 !== this.strokeWidth) ||
                      !this.isEmptyStyles()) &&
                      (this.shadow &&
                        !this.shadow.affectStroke &&
                        this._removeShadow(t),
                      t.save(),
                      this._setLineDash(t, this.strokeDashArray),
                      t.beginPath(),
                      this._renderTextCommon(t, "strokeText"),
                      t.closePath(),
                      t.restore());
                  },
                  _renderChars: function (t, e, i, n, r, o) {
                    var s,
                      a,
                      h,
                      l,
                      c = this.getHeightOfLine(o),
                      u = -1 !== this.textAlign.indexOf("justify"),
                      f = "",
                      d = 0,
                      g = this.path,
                      p =
                        !u &&
                        0 === this.charSpacing &&
                        this.isEmptyStyles(o) &&
                        !g,
                      m = "ltr" === this.direction,
                      v = "ltr" === this.direction ? 1 : -1;
                    if (
                      (e.save(),
                      (r -= (c * this._fontSizeFraction) / this.lineHeight),
                      p)
                    )
                      return (
                        e.canvas.setAttribute("dir", m ? "ltr" : "rtl"),
                        (e.direction = m ? "ltr" : "rtl"),
                        (e.textAlign = m ? "left" : "right"),
                        this._renderChar(t, e, o, 0, i.join(""), n, r, c),
                        void e.restore()
                      );
                    for (var y = 0, _ = i.length - 1; y <= _; y++)
                      (h = y === _ || this.charSpacing || g),
                        (f += i[y]),
                        (l = this.__charBounds[o][y]),
                        0 === d
                          ? ((n += v * (l.kernedWidth - l.width)),
                            (d += l.width))
                          : (d += l.kernedWidth),
                        (h =
                          !(!u || h || !this._reSpaceAndTab.test(i[y])) || h) ||
                          ((s = s || this.getCompleteStyleDeclaration(o, y)),
                          (a = this.getCompleteStyleDeclaration(o, y + 1)),
                          (h = this._hasStyleChanged(s, a))),
                        h &&
                          (g
                            ? (e.save(),
                              e.translate(l.renderLeft, l.renderTop),
                              e.rotate(l.angle),
                              this._renderChar(t, e, o, y, f, -d / 2, 0, c),
                              e.restore())
                            : ((l = n),
                              e.canvas.setAttribute("dir", m ? "ltr" : "rtl"),
                              (e.direction = m ? "ltr" : "rtl"),
                              (e.textAlign = m ? "left" : "right"),
                              this._renderChar(t, e, o, y, f, l, r, c)),
                          (f = ""),
                          (s = a),
                          (n += v * d),
                          (d = 0));
                    e.restore();
                  },
                  _applyPatternGradientTransformText: function (t) {
                    var e,
                      n = i.util.createCanvasElement(),
                      r = this.width + this.strokeWidth,
                      o = this.height + this.strokeWidth;
                    return (
                      (n.width = r),
                      (n.height = o),
                      (e = n.getContext("2d")).beginPath(),
                      e.moveTo(0, 0),
                      e.lineTo(r, 0),
                      e.lineTo(r, o),
                      e.lineTo(0, o),
                      e.closePath(),
                      e.translate(r / 2, o / 2),
                      (e.fillStyle = t.toLive(e)),
                      this._applyPatternGradientTransform(e, t),
                      e.fill(),
                      e.createPattern(n, "no-repeat")
                    );
                  },
                  handleFiller: function (t, e, i) {
                    var n, r;
                    return i.toLive
                      ? "percentage" === i.gradientUnits ||
                        i.gradientTransform ||
                        i.patternTransform
                        ? ((n = -this.width / 2),
                          (r = -this.height / 2),
                          t.translate(n, r),
                          (t[e] = this._applyPatternGradientTransformText(i)),
                          { offsetX: n, offsetY: r })
                        : ((t[e] = i.toLive(t, this)),
                          this._applyPatternGradientTransform(t, i))
                      : ((t[e] = i), { offsetX: 0, offsetY: 0 });
                  },
                  _setStrokeStyles: function (t, e) {
                    return (
                      (t.lineWidth = e.strokeWidth),
                      (t.lineCap = this.strokeLineCap),
                      (t.lineDashOffset = this.strokeDashOffset),
                      (t.lineJoin = this.strokeLineJoin),
                      (t.miterLimit = this.strokeMiterLimit),
                      this.handleFiller(t, "strokeStyle", e.stroke)
                    );
                  },
                  _setFillStyles: function (t, e) {
                    return this.handleFiller(t, "fillStyle", e.fill);
                  },
                  _renderChar: function (t, e, i, n, r, o, s) {
                    var a,
                      h,
                      l = this._getStyleDeclaration(i, n);
                    (i = this.getCompleteStyleDeclaration(i, n)),
                      (n = "fillText" === t && i.fill),
                      ((t = "strokeText" === t && i.stroke && i.strokeWidth) ||
                        n) &&
                        (e.save(),
                        n && (a = this._setFillStyles(e, i)),
                        t && (h = this._setStrokeStyles(e, i)),
                        (e.font = this._getFontDeclaration(i)),
                        l && l.textBackgroundColor && this._removeShadow(e),
                        l && l.deltaY && (s += l.deltaY),
                        n && e.fillText(r, o - a.offsetX, s - a.offsetY),
                        t && e.strokeText(r, o - h.offsetX, s - h.offsetY),
                        e.restore());
                  },
                  setSuperscript: function (t, e) {
                    return this._setScript(t, e, this.superscript);
                  },
                  setSubscript: function (t, e) {
                    return this._setScript(t, e, this.subscript);
                  },
                  _setScript: function (t, e, i) {
                    var n = this.get2DCursorLocation(t, !0),
                      r = this.getValueOfPropertyAt(
                        n.lineIndex,
                        n.charIndex,
                        "fontSize"
                      );
                    return (
                      (n = this.getValueOfPropertyAt(
                        n.lineIndex,
                        n.charIndex,
                        "deltaY"
                      )),
                      (i = {
                        fontSize: r * i.size,
                        deltaY: n + r * i.baseline,
                      }),
                      this.setSelectionStyles(i, t, e),
                      this
                    );
                  },
                  _hasStyleChanged: function (t, e) {
                    return (
                      t.fill !== e.fill ||
                      t.stroke !== e.stroke ||
                      t.strokeWidth !== e.strokeWidth ||
                      t.fontSize !== e.fontSize ||
                      t.fontFamily !== e.fontFamily ||
                      t.fontWeight !== e.fontWeight ||
                      t.fontStyle !== e.fontStyle ||
                      t.deltaY !== e.deltaY
                    );
                  },
                  _hasStyleChangedForSvg: function (t, e) {
                    return (
                      this._hasStyleChanged(t, e) ||
                      t.overline !== e.overline ||
                      t.underline !== e.underline ||
                      t.linethrough !== e.linethrough
                    );
                  },
                  _getLineLeftOffset: function (t) {
                    var e = this.getLineWidth(t),
                      i = this.width - e,
                      n = this.textAlign,
                      r = this.direction;
                    return (
                      (e = 0),
                      (t = this.isEndOfWrapping(t)),
                      "justify" === n ||
                      ("justify-center" === n && !t) ||
                      ("justify-right" === n && !t) ||
                      ("justify-left" === n && !t)
                        ? 0
                        : ("center" === n && (e = i / 2),
                          "right" === n && (e = i),
                          "justify-center" === n && (e = i / 2),
                          "justify-right" === n && (e = i),
                          "rtl" === r && (e -= i),
                          e)
                    );
                  },
                  _clearCache: function () {
                    (this.__lineWidths = []),
                      (this.__lineHeights = []),
                      (this.__charBounds = []);
                  },
                  _shouldClearDimensionCache: function () {
                    var t = this._forceClearCache;
                    return (
                      (t =
                        t ||
                        this.hasStateChanged("_dimensionAffectingProps")) &&
                        ((this.dirty = !0), (this._forceClearCache = !1)),
                      t
                    );
                  },
                  getLineWidth: function (t) {
                    if (this.__lineWidths[t]) return this.__lineWidths[t];
                    var e =
                      "" === this._textLines[t] ? 0 : this.measureLine(t).width;
                    return (this.__lineWidths[t] = e);
                  },
                  _getWidthOfCharSpacing: function () {
                    return 0 !== this.charSpacing
                      ? (this.fontSize * this.charSpacing) / 1e3
                      : 0;
                  },
                  getValueOfPropertyAt: function (t, e, i) {
                    return (
                      (e = this._getStyleDeclaration(t, e)) && void 0 !== e[i]
                        ? e
                        : this
                    )[i];
                  },
                  _renderTextDecoration: function (t, e) {
                    if (this[e] || this.styleHas(e)) {
                      for (
                        var i,
                          n = this._getLeftOffset(),
                          r = this._getTopOffset(),
                          o = this.path,
                          s = this._getWidthOfCharSpacing(),
                          a = this.offsets[e],
                          h = 0,
                          l = this._textLines.length;
                        h < l;
                        h++
                      )
                        if (
                          ((i = this.getHeightOfLine(h)),
                          this[e] || this.styleHas(e, h))
                        ) {
                          for (
                            var c = this._textLines[h],
                              u = i / this.lineHeight,
                              f = this._getLineLeftOffset(h),
                              d = 0,
                              g = 0,
                              p = this.getValueOfPropertyAt(h, 0, e),
                              m = this.getValueOfPropertyAt(h, 0, "fill"),
                              v = r + u * (1 - this._fontSizeFraction),
                              y = this.getHeightOfChar(h, 0),
                              _ = this.getValueOfPropertyAt(h, 0, "deltaY"),
                              x = 0,
                              b = c.length;
                            x < b;
                            x++
                          ) {
                            var C = this.__charBounds[h][x],
                              S = this.getValueOfPropertyAt(h, x, e),
                              w = this.getValueOfPropertyAt(h, x, "fill"),
                              T = this.getHeightOfChar(h, x),
                              O = this.getValueOfPropertyAt(h, x, "deltaY");
                            o && S && w
                              ? (t.save(),
                                (t.fillStyle = m),
                                t.translate(C.renderLeft, C.renderTop),
                                t.rotate(C.angle),
                                t.fillRect(
                                  -C.kernedWidth / 2,
                                  a * T + O,
                                  C.kernedWidth,
                                  this.fontSize / 15
                                ),
                                t.restore())
                              : (S !== p || w !== m || T !== y || O !== _) &&
                                0 < g
                              ? ((k = n + f + d),
                                "rtl" === this.direction &&
                                  (k = this.width - k - g),
                                p &&
                                  m &&
                                  ((t.fillStyle = m),
                                  t.fillRect(
                                    k,
                                    v + a * y + _,
                                    g,
                                    this.fontSize / 15
                                  )),
                                (d = C.left),
                                (g = C.width),
                                (p = S),
                                (m = w),
                                (y = T),
                                (_ = O))
                              : (g += C.kernedWidth);
                          }
                          var k = n + f + d;
                          "rtl" === this.direction && (k = this.width - k - g),
                            (t.fillStyle = w),
                            S &&
                              w &&
                              t.fillRect(
                                k,
                                v + a * y + _,
                                g - s,
                                this.fontSize / 15
                              ),
                            (r += i);
                        } else r += i;
                      this._removeShadow(t);
                    }
                  },
                  _getFontDeclaration: function (t, e) {
                    var n = t || this,
                      r = this.fontFamily;
                    return (
                      (t = -1 < i.Text.genericFonts.indexOf(r.toLowerCase())),
                      (t =
                        void 0 === r ||
                        -1 < r.indexOf("'") ||
                        -1 < r.indexOf(",") ||
                        -1 < r.indexOf('"') ||
                        t
                          ? n.fontFamily
                          : '"' + n.fontFamily + '"'),
                      [
                        i.isLikelyNode ? n.fontWeight : n.fontStyle,
                        i.isLikelyNode ? n.fontStyle : n.fontWeight,
                        e ? this.CACHE_FONT_SIZE + "px" : n.fontSize + "px",
                        t,
                      ].join(" ")
                    );
                  },
                  render: function (t) {
                    this.visible &&
                      ((this.canvas &&
                        this.canvas.skipOffscreen &&
                        !this.group &&
                        !this.isOnScreen()) ||
                        (this._shouldClearDimensionCache() &&
                          this.initDimensions(),
                        this.callSuper("render", t)));
                  },
                  _splitTextIntoLines: function (t) {
                    for (
                      var e = t.split(this._reNewline),
                        n = new Array(e.length),
                        r = ["\n"],
                        o = [],
                        s = 0;
                      s < e.length;
                      s++
                    )
                      (n[s] = i.util.string.graphemeSplit(e[s])),
                        (o = o.concat(n[s], r));
                    return (
                      o.pop(),
                      {
                        _unwrappedLines: n,
                        lines: e,
                        graphemeText: o,
                        graphemeLines: n,
                      }
                    );
                  },
                  toObject: function (t) {
                    return (
                      (t = e.concat(t)),
                      ((t = this.callSuper("toObject", t)).styles = n(
                        this.styles,
                        !0
                      )),
                      t.path && (t.path = this.path.toObject()),
                      t
                    );
                  },
                  set: function (t, e) {
                    this.callSuper("set", t, e);
                    var i = !1,
                      n = !1;
                    if ("object" == typeof t)
                      for (var r in t)
                        "path" === r && this.setPathInfo(),
                          (i =
                            i ||
                            -1 !== this._dimensionAffectingProps.indexOf(r)),
                          (n = n || "path" === r);
                    else
                      (i = -1 !== this._dimensionAffectingProps.indexOf(t)),
                        (n = "path" === t);
                    return (
                      n && this.setPathInfo(),
                      i && (this.initDimensions(), this.setCoords()),
                      this
                    );
                  },
                  complexity: function () {
                    return 1;
                  },
                })),
                (i.Text.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat(
                  "x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(
                    " "
                  )
                )),
                (i.Text.DEFAULT_SVG_FONT_SIZE = 16),
                (i.Text.fromElement = function (t, e, r) {
                  if (!t) return e(null);
                  var o = i.parseAttributes(t, i.Text.ATTRIBUTE_NAMES),
                    s = o.textAnchor || "left";
                  ((r = i.util.object.extend(r ? n(r) : {}, o)).top =
                    r.top || 0),
                    (r.left = r.left || 0),
                    o.textDecoration &&
                      (-1 !== (a = o.textDecoration).indexOf("underline") &&
                        (r.underline = !0),
                      -1 !== a.indexOf("overline") && (r.overline = !0),
                      -1 !== a.indexOf("line-through") && (r.linethrough = !0),
                      delete r.textDecoration),
                    "dx" in o && (r.left += o.dx),
                    "dy" in o && (r.top += o.dy),
                    "fontSize" in r ||
                      (r.fontSize = i.Text.DEFAULT_SVG_FONT_SIZE);
                  var a = "";
                  "textContent" in t
                    ? (a = t.textContent)
                    : "firstChild" in t &&
                      null !== t.firstChild &&
                      "data" in t.firstChild &&
                      null !== t.firstChild.data &&
                      (a = t.firstChild.data),
                    (a = a.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ")),
                    (o = r.strokeWidth),
                    (r.strokeWidth = 0),
                    (a = (t = new i.Text(a, r)).getScaledHeight() / t.height),
                    (r =
                      ((t.height + t.strokeWidth) * t.lineHeight - t.height) *
                      a),
                    (a = t.getScaledHeight() + r),
                    (r = 0),
                    "center" === s && (r = t.getScaledWidth() / 2),
                    "right" === s && (r = t.getScaledWidth()),
                    t.set({
                      left: t.left - r,
                      top:
                        t.top -
                        (a - t.fontSize * (0.07 + t._fontSizeFraction)) /
                          t.lineHeight,
                      strokeWidth: void 0 !== o ? o : 1,
                    }),
                    e(t);
                }),
                (i.Text.fromObject = function (t, e) {
                  var r = n(t),
                    o = t.path;
                  return (
                    delete r.path,
                    i.Object._fromObject(
                      "Text",
                      r,
                      function (t) {
                        o
                          ? i.Object._fromObject(
                              "Path",
                              o,
                              function (i) {
                                t.set("path", i), e(t);
                              },
                              "path"
                            )
                          : e(t);
                      },
                      "text"
                    )
                  );
                }),
                (i.Text.genericFonts = [
                  "sans-serif",
                  "serif",
                  "cursive",
                  "fantasy",
                  "monospace",
                ]),
                i.util.createAccessors && i.util.createAccessors(i.Text));
          })(e),
          _.util.object.extend(_.Text.prototype, {
            isEmptyStyles: function (t) {
              if (!this.styles) return !0;
              if (void 0 !== t && !this.styles[t]) return !0;
              var e,
                i = void 0 === t ? this.styles : { line: this.styles[t] };
              for (e in i) for (var n in i[e]) for (var r in i[e][n]) return !1;
              return !0;
            },
            styleHas: function (t, e) {
              if (!this.styles || !t || "" === t) return !1;
              if (void 0 !== e && !this.styles[e]) return !1;
              var i,
                n = void 0 === e ? this.styles : { 0: this.styles[e] };
              for (i in n)
                for (var r in n[i]) if (void 0 !== n[i][r][t]) return !0;
              return !1;
            },
            cleanStyle: function (t) {
              if (!this.styles || !t || "" === t) return !1;
              var e,
                i,
                n,
                r,
                o = this.styles,
                s = 0,
                a = !0,
                h = 0;
              for (n in o) {
                for (var l in ((e = 0), o[n]))
                  s++,
                    (r = o[n][l]).hasOwnProperty(t)
                      ? (i ? r[t] !== i && (a = !1) : (i = r[t]),
                        r[t] === this[t] && delete r[t])
                      : (a = !1),
                    0 !== Object.keys(r).length ? e++ : delete o[n][l];
                0 === e && delete o[n];
              }
              for (var c = 0; c < this._textLines.length; c++)
                h += this._textLines[c].length;
              a && s === h && ((this[t] = i), this.removeStyle(t));
            },
            removeStyle: function (t) {
              if (this.styles && t && "" !== t) {
                var e,
                  i,
                  n,
                  r = this.styles;
                for (i in r) {
                  for (n in (e = r[i]))
                    delete e[n][t],
                      0 === Object.keys(e[n]).length && delete e[n];
                  0 === Object.keys(e).length && delete r[i];
                }
              }
            },
            _extendStyles: function (t, e) {
              (t = this.get2DCursorLocation(t)),
                this._getLineStyle(t.lineIndex) ||
                  this._setLineStyle(t.lineIndex),
                this._getStyleDeclaration(t.lineIndex, t.charIndex) ||
                  this._setStyleDeclaration(t.lineIndex, t.charIndex, {}),
                _.util.object.extend(
                  this._getStyleDeclaration(t.lineIndex, t.charIndex),
                  e
                );
            },
            get2DCursorLocation: function (t, e) {
              void 0 === t && (t = this.selectionStart);
              for (
                var i = e ? this._unwrappedTextLines : this._textLines,
                  n = i.length,
                  r = 0;
                r < n;
                r++
              ) {
                if (t <= i[r].length) return { lineIndex: r, charIndex: t };
                t -= i[r].length + this.missingNewlineOffset(r);
              }
              return {
                lineIndex: r - 1,
                charIndex: i[r - 1].length < t ? i[r - 1].length : t,
              };
            },
            getSelectionStyles: function (t, e, i) {
              void 0 === t && (t = this.selectionStart || 0),
                void 0 === e && (e = this.selectionEnd || t);
              for (var n = [], r = t; r < e; r++)
                n.push(this.getStyleAtPosition(r, i));
              return n;
            },
            getStyleAtPosition: function (t, e) {
              return (
                (t = this.get2DCursorLocation(t)),
                (e
                  ? this.getCompleteStyleDeclaration(t.lineIndex, t.charIndex)
                  : this._getStyleDeclaration(t.lineIndex, t.charIndex)) || {}
              );
            },
            setSelectionStyles: function (t, e, i) {
              void 0 === e && (e = this.selectionStart || 0),
                void 0 === i && (i = this.selectionEnd || e);
              for (var n = e; n < i; n++) this._extendStyles(n, t);
              return (this._forceClearCache = !0), this;
            },
            _getStyleDeclaration: function (t, e) {
              return (t = this.styles && this.styles[t]) ? t[e] : null;
            },
            getCompleteStyleDeclaration: function (t, e) {
              for (
                var i, n = this._getStyleDeclaration(t, e) || {}, r = {}, o = 0;
                o < this._styleProperties.length;
                o++
              )
                r[(i = this._styleProperties[o])] = (
                  void 0 === n[i] ? this : n
                )[i];
              return r;
            },
            _setStyleDeclaration: function (t, e, i) {
              this.styles[t][e] = i;
            },
            _deleteStyleDeclaration: function (t, e) {
              delete this.styles[t][e];
            },
            _getLineStyle: function (t) {
              return !!this.styles[t];
            },
            _setLineStyle: function (t) {
              this.styles[t] = {};
            },
            _deleteLineStyle: function (t) {
              delete this.styles[t];
            },
          }),
          (function () {
            function t(t) {
              t.textDecoration &&
                (-1 < t.textDecoration.indexOf("underline") &&
                  (t.underline = !0),
                -1 < t.textDecoration.indexOf("line-through") &&
                  (t.linethrough = !0),
                -1 < t.textDecoration.indexOf("overline") && (t.overline = !0),
                delete t.textDecoration);
            }
            (_.IText = _.util.createClass(_.Text, _.Observable, {
              type: "i-text",
              selectionStart: 0,
              selectionEnd: 0,
              selectionColor: "rgba(17,119,255,0.3)",
              isEditing: !1,
              editable: !0,
              editingBorderColor: "rgba(102,153,255,0.25)",
              cursorWidth: 2,
              cursorColor: "",
              cursorDelay: 1e3,
              cursorDuration: 600,
              caching: !0,
              hiddenTextareaContainer: null,
              _reSpace: /\s|\n/,
              _currentCursorOpacity: 0,
              _selectionDirection: null,
              _abortCursorAnimation: !1,
              __widthOfSpace: [],
              inCompositionMode: !1,
              initialize: function (t, e) {
                this.callSuper("initialize", t, e), this.initBehavior();
              },
              setSelectionStart: function (t) {
                (t = Math.max(t, 0)), this._updateAndFire("selectionStart", t);
              },
              setSelectionEnd: function (t) {
                (t = Math.min(t, this.text.length)),
                  this._updateAndFire("selectionEnd", t);
              },
              _updateAndFire: function (t, e) {
                this[t] !== e && (this._fireSelectionChanged(), (this[t] = e)),
                  this._updateTextarea();
              },
              _fireSelectionChanged: function () {
                this.fire("selection:changed"),
                  this.canvas &&
                    this.canvas.fire("text:selection:changed", {
                      target: this,
                    });
              },
              initDimensions: function () {
                this.isEditing && this.initDelayedCursor(),
                  this.clearContextTop(),
                  this.callSuper("initDimensions");
              },
              render: function (t) {
                this.clearContextTop(),
                  this.callSuper("render", t),
                  (this.cursorOffsetCache = {}),
                  this.renderCursorOrSelection();
              },
              _render: function (t) {
                this.callSuper("_render", t);
              },
              clearContextTop: function (t) {
                var e, i;
                this.isEditing &&
                  this.canvas &&
                  this.canvas.contextTop &&
                  ((e = this.canvas.contextTop),
                  (i = this.canvas.viewportTransform),
                  e.save(),
                  e.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                  this.transform(e),
                  this._clearTextArea(e),
                  t || e.restore());
              },
              renderCursorOrSelection: function () {
                var t, e;
                this.isEditing &&
                  this.canvas &&
                  this.canvas.contextTop &&
                  ((t = this._getCursorBoundaries()),
                  (e = this.canvas.contextTop),
                  this.clearContextTop(!0),
                  this.selectionStart === this.selectionEnd
                    ? this.renderCursor(t, e)
                    : this.renderSelection(t, e),
                  e.restore());
              },
              _clearTextArea: function (t) {
                var e = this.width + 4,
                  i = this.height + 4;
                t.clearRect(-e / 2, -i / 2, e, i);
              },
              _getCursorBoundaries: function (t) {
                return (
                  void 0 === t && (t = this.selectionStart),
                  {
                    left: this._getLeftOffset(),
                    top: this._getTopOffset(),
                    leftOffset: (t = this._getCursorBoundariesOffsets(t)).left,
                    topOffset: t.top,
                  }
                );
              },
              _getCursorBoundariesOffsets: function (t) {
                if (this.cursorOffsetCache && "top" in this.cursorOffsetCache)
                  return this.cursorOffsetCache;
                for (
                  var e = 0,
                    i = 0,
                    n = this.get2DCursorLocation(t),
                    r = n.charIndex,
                    o = n.lineIndex,
                    s = 0;
                  s < o;
                  s++
                )
                  e += this.getHeightOfLine(s);
                return (
                  (t = this._getLineLeftOffset(o)),
                  (n = this.__charBounds[o][r]) && (i = n.left),
                  0 !== this.charSpacing &&
                    r === this._textLines[o].length &&
                    (i -= this._getWidthOfCharSpacing()),
                  (i = { top: e, left: t + (0 < i ? i : 0) }),
                  "rtl" === this.direction && (i.left *= -1),
                  (this.cursorOffsetCache = i),
                  this.cursorOffsetCache
                );
              },
              renderCursor: function (t, e) {
                var i = (a = this.get2DCursorLocation()).lineIndex,
                  n = 0 < a.charIndex ? a.charIndex - 1 : 0,
                  r = this.getValueOfPropertyAt(i, n, "fontSize"),
                  o = this.scaleX * this.canvas.getZoom(),
                  s = this.cursorWidth / o,
                  a = t.topOffset;
                (o = this.getValueOfPropertyAt(i, n, "deltaY")),
                  (a +=
                    ((1 - this._fontSizeFraction) * this.getHeightOfLine(i)) /
                      this.lineHeight -
                    r * (1 - this._fontSizeFraction)),
                  this.inCompositionMode && this.renderSelection(t, e),
                  (e.fillStyle =
                    this.cursorColor ||
                    this.getValueOfPropertyAt(i, n, "fill")),
                  (e.globalAlpha = this.__isMousedown
                    ? 1
                    : this._currentCursorOpacity),
                  e.fillRect(
                    t.left + t.leftOffset - s / 2,
                    a + t.top + o,
                    s,
                    r
                  );
              },
              renderSelection: function (t, e) {
                for (
                  var i = (this.inCompositionMode ? this.hiddenTextarea : this)
                      .selectionStart,
                    n = (this.inCompositionMode ? this.hiddenTextarea : this)
                      .selectionEnd,
                    r = -1 !== this.textAlign.indexOf("justify"),
                    o =
                      ((i = this.get2DCursorLocation(i)),
                      (n = this.get2DCursorLocation(n)),
                      i.lineIndex),
                    s = n.lineIndex,
                    a = i.charIndex < 0 ? 0 : i.charIndex,
                    h = n.charIndex < 0 ? 0 : n.charIndex,
                    l = o;
                  l <= s;
                  l++
                ) {
                  var c,
                    u = this._getLineLeftOffset(l) || 0,
                    f = this.getHeightOfLine(l),
                    d = 0,
                    g = 0;
                  l === o && (d = this.__charBounds[o][a].left),
                    o <= l && l < s
                      ? (g =
                          r && !this.isEndOfWrapping(l)
                            ? this.width
                            : this.getLineWidth(l) || 5)
                      : l === s &&
                        (g =
                          0 === h
                            ? this.__charBounds[s][h].left
                            : ((p = this._getWidthOfCharSpacing()),
                              this.__charBounds[s][h - 1].left +
                                this.__charBounds[s][h - 1].width -
                                p)),
                    (c = f),
                    (this.lineHeight < 1 || (l === s && 1 < this.lineHeight)) &&
                      (f /= this.lineHeight);
                  var p = t.left + u + d;
                  (u = g - d),
                    (g = f),
                    (d = 0),
                    this.inCompositionMode
                      ? ((e.fillStyle = this.compositionColor || "black"),
                        (g = 1),
                        (d = f))
                      : (e.fillStyle = this.selectionColor),
                    "rtl" === this.direction && (p = this.width - p - u),
                    e.fillRect(p, t.top + t.topOffset + d, u, g),
                    (t.topOffset += c);
                }
              },
              getCurrentCharFontSize: function () {
                var t = this._getCurrentCharIndex();
                return this.getValueOfPropertyAt(t.l, t.c, "fontSize");
              },
              getCurrentCharColor: function () {
                var t = this._getCurrentCharIndex();
                return this.getValueOfPropertyAt(t.l, t.c, "fill");
              },
              _getCurrentCharIndex: function () {
                var t = this.get2DCursorLocation(this.selectionStart, !0),
                  e = 0 < t.charIndex ? t.charIndex - 1 : 0;
                return { l: t.lineIndex, c: e };
              },
            })),
              (_.IText.fromObject = function (e, i) {
                if ((t(e), e.styles))
                  for (var n in e.styles)
                    for (var r in e.styles[n]) t(e.styles[n][r]);
                _.Object._fromObject("IText", e, i, "text");
              });
          })(),
          (function () {
            var t = _.util.object.clone;
            _.util.object.extend(_.IText.prototype, {
              initBehavior: function () {
                this.initAddedHandler(),
                  this.initRemovedHandler(),
                  this.initCursorSelectionHandlers(),
                  this.initDoubleClickSimulation(),
                  (this.mouseMoveHandler = this.mouseMoveHandler.bind(this));
              },
              onDeselect: function () {
                this.isEditing && this.exitEditing(), (this.selected = !1);
              },
              initAddedHandler: function () {
                var t = this;
                this.on("added", function () {
                  var e = t.canvas;
                  e &&
                    (e._hasITextHandlers ||
                      ((e._hasITextHandlers = !0), t._initCanvasHandlers(e)),
                    (e._iTextInstances = e._iTextInstances || []),
                    e._iTextInstances.push(t));
                });
              },
              initRemovedHandler: function () {
                var t = this;
                this.on("removed", function () {
                  var e = t.canvas;
                  e &&
                    ((e._iTextInstances = e._iTextInstances || []),
                    _.util.removeFromArray(e._iTextInstances, t),
                    0 === e._iTextInstances.length &&
                      ((e._hasITextHandlers = !1), t._removeCanvasHandlers(e)));
                });
              },
              _initCanvasHandlers: function (t) {
                (t._mouseUpITextHandler = function () {
                  t._iTextInstances &&
                    t._iTextInstances.forEach(function (t) {
                      t.__isMousedown = !1;
                    });
                }),
                  t.on("mouse:up", t._mouseUpITextHandler);
              },
              _removeCanvasHandlers: function (t) {
                t.off("mouse:up", t._mouseUpITextHandler);
              },
              _tick: function () {
                this._currentTickState = this._animateCursor(
                  this,
                  1,
                  this.cursorDuration,
                  "_onTickComplete"
                );
              },
              _animateCursor: function (t, e, i, n) {
                var r = {
                  isAborted: !1,
                  abort: function () {
                    this.isAborted = !0;
                  },
                };
                return (
                  t.animate("_currentCursorOpacity", e, {
                    duration: i,
                    onComplete: function () {
                      r.isAborted || t[n]();
                    },
                    onChange: function () {
                      t.canvas &&
                        t.selectionStart === t.selectionEnd &&
                        t.renderCursorOrSelection();
                    },
                    abort: function () {
                      return r.isAborted;
                    },
                  }),
                  r
                );
              },
              _onTickComplete: function () {
                var t = this;
                this._cursorTimeout1 && clearTimeout(this._cursorTimeout1),
                  (this._cursorTimeout1 = setTimeout(function () {
                    t._currentTickCompleteState = t._animateCursor(
                      t,
                      0,
                      this.cursorDuration / 2,
                      "_tick"
                    );
                  }, 100));
              },
              initDelayedCursor: function (t) {
                var e = this;
                (t = t ? 0 : this.cursorDelay),
                  this.abortCursorAnimation(),
                  (this._currentCursorOpacity = 1),
                  (this._cursorTimeout2 = setTimeout(function () {
                    e._tick();
                  }, t));
              },
              abortCursorAnimation: function () {
                var t =
                    this._currentTickState || this._currentTickCompleteState,
                  e = this.canvas;
                this._currentTickState && this._currentTickState.abort(),
                  this._currentTickCompleteState &&
                    this._currentTickCompleteState.abort(),
                  clearTimeout(this._cursorTimeout1),
                  clearTimeout(this._cursorTimeout2),
                  (this._currentCursorOpacity = 0),
                  t && e && e.clearContext(e.contextTop || e.contextContainer);
              },
              selectAll: function () {
                return (
                  (this.selectionStart = 0),
                  (this.selectionEnd = this._text.length),
                  this._fireSelectionChanged(),
                  this._updateTextarea(),
                  this
                );
              },
              getSelectedText: function () {
                return this._text
                  .slice(this.selectionStart, this.selectionEnd)
                  .join("");
              },
              findWordBoundaryLeft: function (t) {
                var e = 0,
                  i = t - 1;
                if (this._reSpace.test(this._text[i]))
                  for (; this._reSpace.test(this._text[i]); ) e++, i--;
                for (; /\S/.test(this._text[i]) && -1 < i; ) e++, i--;
                return t - e;
              },
              findWordBoundaryRight: function (t) {
                var e = 0,
                  i = t;
                if (this._reSpace.test(this._text[i]))
                  for (; this._reSpace.test(this._text[i]); ) e++, i++;
                for (; /\S/.test(this._text[i]) && i < this._text.length; )
                  e++, i++;
                return t + e;
              },
              findLineBoundaryLeft: function (t) {
                for (
                  var e = 0, i = t - 1;
                  !/\n/.test(this._text[i]) && -1 < i;

                )
                  e++, i--;
                return t - e;
              },
              findLineBoundaryRight: function (t) {
                for (
                  var e = 0, i = t;
                  !/\n/.test(this._text[i]) && i < this._text.length;

                )
                  e++, i++;
                return t + e;
              },
              searchWordBoundary: function (t, e) {
                for (
                  var i = this._text,
                    n = this._reSpace.test(i[t]) ? t - 1 : t,
                    r = i[n],
                    o = _.reNonWord;
                  !o.test(r) && 0 < n && n < i.length;

                )
                  r = i[(n += e)];
                return o.test(r) && (n += 1 === e ? 0 : 1), n;
              },
              selectWord: function (t) {
                t = t || this.selectionStart;
                var e = this.searchWordBoundary(t, -1);
                (t = this.searchWordBoundary(t, 1)),
                  (this.selectionStart = e),
                  (this.selectionEnd = t),
                  this._fireSelectionChanged(),
                  this._updateTextarea(),
                  this.renderCursorOrSelection();
              },
              selectLine: function (t) {
                t = t || this.selectionStart;
                var e = this.findLineBoundaryLeft(t);
                return (
                  (t = this.findLineBoundaryRight(t)),
                  (this.selectionStart = e),
                  (this.selectionEnd = t),
                  this._fireSelectionChanged(),
                  this._updateTextarea(),
                  this
                );
              },
              enterEditing: function (t) {
                if (!this.isEditing && this.editable)
                  return (
                    this.canvas &&
                      (this.canvas.calcOffset(),
                      this.exitEditingOnOthers(this.canvas)),
                    (this.isEditing = !0),
                    this.initHiddenTextarea(t),
                    this.hiddenTextarea.focus(),
                    (this.hiddenTextarea.value = this.text),
                    this._updateTextarea(),
                    this._saveEditingProps(),
                    this._setEditingProps(),
                    (this._textBeforeEdit = this.text),
                    this._tick(),
                    this.fire("editing:entered"),
                    this._fireSelectionChanged(),
                    this.canvas &&
                      (this.canvas.fire("text:editing:entered", {
                        target: this,
                      }),
                      this.initMouseMoveHandler(),
                      this.canvas.requestRenderAll()),
                    this
                  );
              },
              exitEditingOnOthers: function (t) {
                t._iTextInstances &&
                  t._iTextInstances.forEach(function (t) {
                    (t.selected = !1), t.isEditing && t.exitEditing();
                  });
              },
              initMouseMoveHandler: function () {
                this.canvas.on("mouse:move", this.mouseMoveHandler);
              },
              mouseMoveHandler: function (t) {
                var e, i;
                this.__isMousedown &&
                  this.isEditing &&
                  ((e = this.getSelectionStartFromPointer(t.e)),
                  (i = this.selectionStart),
                  (t = this.selectionEnd),
                  ((e === this.__selectionStartOnMouseDown && i !== t) ||
                    (i !== e && t !== e)) &&
                    (e > this.__selectionStartOnMouseDown
                      ? ((this.selectionStart =
                          this.__selectionStartOnMouseDown),
                        (this.selectionEnd = e))
                      : ((this.selectionStart = e),
                        (this.selectionEnd = this.__selectionStartOnMouseDown)),
                    (this.selectionStart === i && this.selectionEnd === t) ||
                      (this.restartCursorIfNeeded(),
                      this._fireSelectionChanged(),
                      this._updateTextarea(),
                      this.renderCursorOrSelection())));
              },
              _setEditingProps: function () {
                (this.hoverCursor = "text"),
                  this.canvas &&
                    (this.canvas.defaultCursor = this.canvas.moveCursor =
                      "text"),
                  (this.borderColor = this.editingBorderColor),
                  (this.hasControls = this.selectable = !1),
                  (this.lockMovementX = this.lockMovementY = !0);
              },
              fromStringToGraphemeSelection: function (t, e, i) {
                var n = i.slice(0, t);
                return (
                  (n = _.util.string.graphemeSplit(n).length),
                  t === e
                    ? { selectionStart: n, selectionEnd: n }
                    : ((e = i.slice(t, e)),
                      {
                        selectionStart: n,
                        selectionEnd: n + _.util.string.graphemeSplit(e).length,
                      })
                );
              },
              fromGraphemeToStringSelection: function (t, e, i) {
                var n = i.slice(0, t).join("").length;
                return t === e
                  ? { selectionStart: n, selectionEnd: n }
                  : {
                      selectionStart: n,
                      selectionEnd: n + i.slice(t, e).join("").length,
                    };
              },
              _updateTextarea: function () {
                var t;
                (this.cursorOffsetCache = {}),
                  this.hiddenTextarea &&
                    (this.inCompositionMode ||
                      ((t = this.fromGraphemeToStringSelection(
                        this.selectionStart,
                        this.selectionEnd,
                        this._text
                      )),
                      (this.hiddenTextarea.selectionStart = t.selectionStart),
                      (this.hiddenTextarea.selectionEnd = t.selectionEnd)),
                    this.updateTextareaPosition());
              },
              updateFromTextArea: function () {
                var t;
                this.hiddenTextarea &&
                  ((this.cursorOffsetCache = {}),
                  (this.text = this.hiddenTextarea.value),
                  this._shouldClearDimensionCache() &&
                    (this.initDimensions(), this.setCoords()),
                  (t = this.fromStringToGraphemeSelection(
                    this.hiddenTextarea.selectionStart,
                    this.hiddenTextarea.selectionEnd,
                    this.hiddenTextarea.value
                  )),
                  (this.selectionEnd = this.selectionStart = t.selectionEnd),
                  this.inCompositionMode ||
                    (this.selectionStart = t.selectionStart),
                  this.updateTextareaPosition());
              },
              updateTextareaPosition: function () {
                var t;
                this.selectionStart === this.selectionEnd &&
                  ((t = this._calcTextareaPosition()),
                  (this.hiddenTextarea.style.left = t.left),
                  (this.hiddenTextarea.style.top = t.top));
              },
              _calcTextareaPosition: function () {
                if (!this.canvas) return { x: 1, y: 1 };
                var t = this.inCompositionMode
                    ? this.compositionStart
                    : this.selectionStart,
                  e = this._getCursorBoundaries(t),
                  i = (a = this.get2DCursorLocation(t)).lineIndex,
                  n = a.charIndex,
                  r =
                    this.getValueOfPropertyAt(i, n, "fontSize") *
                    this.lineHeight,
                  o = e.leftOffset,
                  s = this.calcTransformMatrix(),
                  a =
                    ((t = { x: e.left + o, y: e.top + e.topOffset + r }),
                    this.canvas.getRetinaScaling());
                return (
                  (e = (n = (i = this.canvas.upperCanvasEl).width / a) - r),
                  (a = (o = i.height / a) - r),
                  (n = i.clientWidth / n),
                  (o = i.clientHeight / o),
                  (t = _.util.transformPoint(t, s)),
                  ((t = _.util.transformPoint(
                    t,
                    this.canvas.viewportTransform
                  )).x *= n),
                  (t.y *= o),
                  t.x < 0 && (t.x = 0),
                  t.x > e && (t.x = e),
                  t.y < 0 && (t.y = 0),
                  t.y > a && (t.y = a),
                  (t.x += this.canvas._offset.left),
                  (t.y += this.canvas._offset.top),
                  {
                    left: t.x + "px",
                    top: t.y + "px",
                    fontSize: r + "px",
                    charHeight: r,
                  }
                );
              },
              _saveEditingProps: function () {
                this._savedProps = {
                  hasControls: this.hasControls,
                  borderColor: this.borderColor,
                  lockMovementX: this.lockMovementX,
                  lockMovementY: this.lockMovementY,
                  hoverCursor: this.hoverCursor,
                  selectable: this.selectable,
                  defaultCursor: this.canvas && this.canvas.defaultCursor,
                  moveCursor: this.canvas && this.canvas.moveCursor,
                };
              },
              _restoreEditingProps: function () {
                this._savedProps &&
                  ((this.hoverCursor = this._savedProps.hoverCursor),
                  (this.hasControls = this._savedProps.hasControls),
                  (this.borderColor = this._savedProps.borderColor),
                  (this.selectable = this._savedProps.selectable),
                  (this.lockMovementX = this._savedProps.lockMovementX),
                  (this.lockMovementY = this._savedProps.lockMovementY),
                  this.canvas &&
                    ((this.canvas.defaultCursor =
                      this._savedProps.defaultCursor),
                    (this.canvas.moveCursor = this._savedProps.moveCursor)));
              },
              exitEditing: function () {
                var t = this._textBeforeEdit !== this.text,
                  e = this.hiddenTextarea;
                return (
                  (this.selected = !1),
                  (this.isEditing = !1),
                  (this.selectionEnd = this.selectionStart),
                  e &&
                    (e.blur && e.blur(),
                    e.parentNode && e.parentNode.removeChild(e)),
                  (this.hiddenTextarea = null),
                  this.abortCursorAnimation(),
                  this._restoreEditingProps(),
                  (this._currentCursorOpacity = 0),
                  this._shouldClearDimensionCache() &&
                    (this.initDimensions(), this.setCoords()),
                  this.fire("editing:exited"),
                  t && this.fire("modified"),
                  this.canvas &&
                    (this.canvas.off("mouse:move", this.mouseMoveHandler),
                    this.canvas.fire("text:editing:exited", { target: this }),
                    t && this.canvas.fire("object:modified", { target: this })),
                  this
                );
              },
              _removeExtraneousStyles: function () {
                for (var t in this.styles)
                  this._textLines[t] || delete this.styles[t];
              },
              removeStyleFromTo: function (t, e) {
                (t = this.get2DCursorLocation(t, !0)),
                  (e = this.get2DCursorLocation(e, !0));
                var i = t.lineIndex,
                  n = t.charIndex,
                  r = e.lineIndex,
                  o = e.charIndex;
                if (i !== r) {
                  if (this.styles[i])
                    for (c = n; c < this._unwrappedTextLines[i].length; c++)
                      delete this.styles[i][c];
                  if (this.styles[r])
                    for (c = o; c < this._unwrappedTextLines[r].length; c++)
                      (h = this.styles[r][c]) &&
                        (this.styles[i] || (this.styles[i] = {}),
                        (this.styles[i][n + c - o] = h));
                  for (c = i + 1; c <= r; c++) delete this.styles[c];
                  this.shiftLineStyles(r, i - r);
                } else if (this.styles[i]) {
                  for (
                    var s, a, h = this.styles[i], l = o - n, c = n;
                    c < o;
                    c++
                  )
                    delete h[c];
                  for (a in this.styles[i])
                    o <= (s = parseInt(a, 10)) &&
                      ((h[s - l] = h[a]), delete h[a]);
                }
              },
              shiftLineStyles: function (e, i) {
                var n,
                  r = t(this.styles);
                for (n in this.styles) {
                  var o = parseInt(n, 10);
                  e < o &&
                    ((this.styles[o + i] = r[o]),
                    r[o - i] || delete this.styles[o]);
                }
              },
              restartCursorIfNeeded: function () {
                (this._currentTickState &&
                  !this._currentTickState.isAborted &&
                  this._currentTickCompleteState &&
                  !this._currentTickCompleteState.isAborted) ||
                  this.initDelayedCursor();
              },
              insertNewlineStyleObject: function (e, i, n, r) {
                var o,
                  s,
                  a = {},
                  h = !1,
                  l = this._unwrappedTextLines[e].length === i;
                for (s in (this.shiftLineStyles(e, (n = n || 1)),
                this.styles[e] && (o = this.styles[e][0 === i ? i : i - 1]),
                this.styles[e])) {
                  var c = parseInt(s, 10);
                  i <= c &&
                    ((h = !0),
                    (a[c - i] = this.styles[e][s]),
                    (l && 0 === i) || delete this.styles[e][s]);
                }
                var u = !1;
                for (
                  h && !l && ((this.styles[e + n] = a), (u = !0)), u && n--;
                  0 < n;

                )
                  r && r[n - 1]
                    ? (this.styles[e + n] = { 0: t(r[n - 1]) })
                    : o
                    ? (this.styles[e + n] = { 0: t(o) })
                    : delete this.styles[e + n],
                    n--;
                this._forceClearCache = !0;
              },
              insertCharStyleObject: function (e, i, n, r) {
                this.styles || (this.styles = {});
                var o,
                  s = this.styles[e],
                  a = s ? t(s) : {};
                for (o in ((n = n || 1), a)) {
                  var h = parseInt(o, 10);
                  i <= h && ((s[h + n] = a[h]), a[h - n] || delete s[h]);
                }
                if (((this._forceClearCache = !0), r))
                  for (; n--; )
                    Object.keys(r[n]).length &&
                      (this.styles[e] || (this.styles[e] = {}),
                      (this.styles[e][i + n] = t(r[n])));
                else if (s)
                  for (var l = s[i ? i - 1 : 1]; l && n--; )
                    this.styles[e][i + n] = t(l);
              },
              insertNewStyleBlock: function (t, e, i) {
                for (
                  var n = this.get2DCursorLocation(e, !0),
                    r = [0],
                    o = 0,
                    s = 0;
                  s < t.length;
                  s++
                )
                  "\n" === t[s] ? (r[++o] = 0) : r[o]++;
                for (
                  0 < r[0] &&
                    (this.insertCharStyleObject(
                      n.lineIndex,
                      n.charIndex,
                      r[0],
                      i
                    ),
                    (i = i && i.slice(r[0] + 1))),
                    o &&
                      this.insertNewlineStyleObject(
                        n.lineIndex,
                        n.charIndex + r[0],
                        o
                      ),
                    s = 1;
                  s < o;
                  s++
                )
                  0 < r[s]
                    ? this.insertCharStyleObject(n.lineIndex + s, 0, r[s], i)
                    : i && (this.styles[n.lineIndex + s][0] = i[0]),
                    (i = i && i.slice(r[s] + 1));
                0 < r[s] &&
                  this.insertCharStyleObject(n.lineIndex + s, 0, r[s], i);
              },
              setSelectionStartEndWithShift: function (t, e, i) {
                i <= t
                  ? (e === t
                      ? (this._selectionDirection = "left")
                      : "right" === this._selectionDirection &&
                        ((this._selectionDirection = "left"),
                        (this.selectionEnd = t)),
                    (this.selectionStart = i))
                  : t < i && i < e
                  ? "right" === this._selectionDirection
                    ? (this.selectionEnd = i)
                    : (this.selectionStart = i)
                  : (e === t
                      ? (this._selectionDirection = "right")
                      : "left" === this._selectionDirection &&
                        ((this._selectionDirection = "right"),
                        (this.selectionStart = e)),
                    (this.selectionEnd = i));
              },
              setSelectionInBoundaries: function () {
                var t = this.text.length;
                this.selectionStart > t
                  ? (this.selectionStart = t)
                  : this.selectionStart < 0 && (this.selectionStart = 0),
                  this.selectionEnd > t
                    ? (this.selectionEnd = t)
                    : this.selectionEnd < 0 && (this.selectionEnd = 0);
              },
            });
          })(),
          _.util.object.extend(_.IText.prototype, {
            initDoubleClickSimulation: function () {
              (this.__lastClickTime = +new Date()),
                (this.__lastLastClickTime = +new Date()),
                (this.__lastPointer = {}),
                this.on("mousedown", this.onMouseDown);
            },
            onMouseDown: function (t) {
              var e;
              this.canvas &&
                ((this.__newClickTime = +new Date()),
                (e = t.pointer),
                this.isTripleClick(e) &&
                  (this.fire("tripleclick", t), this._stopEvent(t.e)),
                (this.__lastLastClickTime = this.__lastClickTime),
                (this.__lastClickTime = this.__newClickTime),
                (this.__lastPointer = e),
                (this.__lastIsEditing = this.isEditing),
                (this.__lastSelected = this.selected));
            },
            isTripleClick: function (t) {
              return (
                this.__newClickTime - this.__lastClickTime < 500 &&
                this.__lastClickTime - this.__lastLastClickTime < 500 &&
                this.__lastPointer.x === t.x &&
                this.__lastPointer.y === t.y
              );
            },
            _stopEvent: function (t) {
              t.preventDefault && t.preventDefault(),
                t.stopPropagation && t.stopPropagation();
            },
            initCursorSelectionHandlers: function () {
              this.initMousedownHandler(),
                this.initMouseupHandler(),
                this.initClicks();
            },
            doubleClickHandler: function (t) {
              this.isEditing &&
                this.selectWord(this.getSelectionStartFromPointer(t.e));
            },
            tripleClickHandler: function (t) {
              this.isEditing &&
                this.selectLine(this.getSelectionStartFromPointer(t.e));
            },
            initClicks: function () {
              this.on("mousedblclick", this.doubleClickHandler),
                this.on("tripleclick", this.tripleClickHandler);
            },
            _mouseDownHandler: function (t) {
              !this.canvas ||
                !this.editable ||
                (t.e.button && 1 !== t.e.button) ||
                ((this.__isMousedown = !0),
                this.selected &&
                  ((this.inCompositionMode = !1), this.setCursorByClick(t.e)),
                this.isEditing &&
                  ((this.__selectionStartOnMouseDown = this.selectionStart),
                  this.selectionStart === this.selectionEnd &&
                    this.abortCursorAnimation(),
                  this.renderCursorOrSelection()));
            },
            _mouseDownHandlerBefore: function (t) {
              !this.canvas ||
                !this.editable ||
                (t.e.button && 1 !== t.e.button) ||
                (this.selected = this === this.canvas._activeObject);
            },
            initMousedownHandler: function () {
              this.on("mousedown", this._mouseDownHandler),
                this.on("mousedown:before", this._mouseDownHandlerBefore);
            },
            initMouseupHandler: function () {
              this.on("mouseup", this.mouseUpHandler);
            },
            mouseUpHandler: function (t) {
              if (
                ((this.__isMousedown = !1),
                !(
                  !this.editable ||
                  this.group ||
                  (t.transform && t.transform.actionPerformed) ||
                  (t.e.button && 1 !== t.e.button)
                ))
              ) {
                if (this.canvas) {
                  var e = this.canvas._activeObject;
                  if (e && e !== this) return;
                }
                this.__lastSelected && !this.__corner
                  ? ((this.selected = !1),
                    (this.__lastSelected = !1),
                    this.enterEditing(t.e),
                    this.selectionStart === this.selectionEnd
                      ? this.initDelayedCursor(!0)
                      : this.renderCursorOrSelection())
                  : (this.selected = !0);
              }
            },
            setCursorByClick: function (t) {
              var e = this.getSelectionStartFromPointer(t),
                i = this.selectionStart,
                n = this.selectionEnd;
              t.shiftKey
                ? this.setSelectionStartEndWithShift(i, n, e)
                : ((this.selectionStart = e), (this.selectionEnd = e)),
                this.isEditing &&
                  (this._fireSelectionChanged(), this._updateTextarea());
            },
            getSelectionStartFromPointer: function (t) {
              for (
                var e = this.getLocalPointer(t),
                  i = 0,
                  n = 0,
                  r = 0,
                  o = 0,
                  s = 0,
                  a = 0,
                  h = this._textLines.length;
                a < h && r <= e.y;
                a++
              )
                (r += this.getHeightOfLine(a) * this.scaleY),
                  0 < (s = a) &&
                    (o +=
                      this._textLines[a - 1].length +
                      this.missingNewlineOffset(a - 1));
              (n = this._getLineLeftOffset(s) * this.scaleX),
                (t = this._textLines[s]),
                "rtl" === this.direction &&
                  (e.x = this.width * this.scaleX - e.x + n);
              for (
                var l = 0, c = t.length;
                l < c &&
                ((i = n),
                (n += this.__charBounds[s][l].kernedWidth * this.scaleX) <=
                  e.x);
                l++
              )
                o++;
              return this._getNewSelectionStartFromOffset(e, i, n, o, c);
            },
            _getNewSelectionStartFromOffset: function (t, e, i, n, r) {
              return (
                (t = n + ((e = t.x - e) < (t = i - t.x) || t < 0 ? 0 : 1)),
                (t = this.flipX ? r - t : t) > this._text.length
                  ? this._text.length
                  : t
              );
            },
          }),
          _.util.object.extend(_.IText.prototype, {
            initHiddenTextarea: function () {
              (this.hiddenTextarea = _.document.createElement("textarea")),
                this.hiddenTextarea.setAttribute("autocapitalize", "off"),
                this.hiddenTextarea.setAttribute("autocorrect", "off"),
                this.hiddenTextarea.setAttribute("autocomplete", "off"),
                this.hiddenTextarea.setAttribute("spellcheck", "false"),
                this.hiddenTextarea.setAttribute(
                  "data-fabric-hiddentextarea",
                  ""
                ),
                this.hiddenTextarea.setAttribute("wrap", "off");
              var t = this._calcTextareaPosition();
              (this.hiddenTextarea.style.cssText =
                "position: absolute; top: " +
                t.top +
                "; left: " +
                t.left +
                "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; paddingｰtop: " +
                t.fontSize +
                ";"),
                (this.hiddenTextareaContainer || _.document.body).appendChild(
                  this.hiddenTextarea
                ),
                _.util.addListener(
                  this.hiddenTextarea,
                  "keydown",
                  this.onKeyDown.bind(this)
                ),
                _.util.addListener(
                  this.hiddenTextarea,
                  "keyup",
                  this.onKeyUp.bind(this)
                ),
                _.util.addListener(
                  this.hiddenTextarea,
                  "input",
                  this.onInput.bind(this)
                ),
                _.util.addListener(
                  this.hiddenTextarea,
                  "copy",
                  this.copy.bind(this)
                ),
                _.util.addListener(
                  this.hiddenTextarea,
                  "cut",
                  this.copy.bind(this)
                ),
                _.util.addListener(
                  this.hiddenTextarea,
                  "paste",
                  this.paste.bind(this)
                ),
                _.util.addListener(
                  this.hiddenTextarea,
                  "compositionstart",
                  this.onCompositionStart.bind(this)
                ),
                _.util.addListener(
                  this.hiddenTextarea,
                  "compositionupdate",
                  this.onCompositionUpdate.bind(this)
                ),
                _.util.addListener(
                  this.hiddenTextarea,
                  "compositionend",
                  this.onCompositionEnd.bind(this)
                ),
                !this._clickHandlerInitialized &&
                  this.canvas &&
                  (_.util.addListener(
                    this.canvas.upperCanvasEl,
                    "click",
                    this.onClick.bind(this)
                  ),
                  (this._clickHandlerInitialized = !0));
            },
            keysMap: {
              9: "exitEditing",
              27: "exitEditing",
              33: "moveCursorUp",
              34: "moveCursorDown",
              35: "moveCursorRight",
              36: "moveCursorLeft",
              37: "moveCursorLeft",
              38: "moveCursorUp",
              39: "moveCursorRight",
              40: "moveCursorDown",
            },
            keysMapRtl: {
              9: "exitEditing",
              27: "exitEditing",
              33: "moveCursorUp",
              34: "moveCursorDown",
              35: "moveCursorLeft",
              36: "moveCursorRight",
              37: "moveCursorRight",
              38: "moveCursorUp",
              39: "moveCursorLeft",
              40: "moveCursorDown",
            },
            ctrlKeysMapUp: { 67: "copy", 88: "cut" },
            ctrlKeysMapDown: { 65: "selectAll" },
            onClick: function () {
              this.hiddenTextarea && this.hiddenTextarea.focus();
            },
            onKeyDown: function (t) {
              if (this.isEditing) {
                var e =
                  "rtl" === this.direction ? this.keysMapRtl : this.keysMap;
                if (t.keyCode in e) this[e[t.keyCode]](t);
                else {
                  if (
                    !(t.keyCode in this.ctrlKeysMapDown) ||
                    (!t.ctrlKey && !t.metaKey)
                  )
                    return;
                  this[this.ctrlKeysMapDown[t.keyCode]](t);
                }
                t.stopImmediatePropagation(),
                  t.preventDefault(),
                  33 <= t.keyCode && t.keyCode <= 40
                    ? ((this.inCompositionMode = !1),
                      this.clearContextTop(),
                      this.renderCursorOrSelection())
                    : this.canvas && this.canvas.requestRenderAll();
              }
            },
            onKeyUp: function (t) {
              !this.isEditing || this._copyDone || this.inCompositionMode
                ? (this._copyDone = !1)
                : t.keyCode in this.ctrlKeysMapUp &&
                  (t.ctrlKey || t.metaKey) &&
                  (this[this.ctrlKeysMapUp[t.keyCode]](t),
                  t.stopImmediatePropagation(),
                  t.preventDefault(),
                  this.canvas && this.canvas.requestRenderAll());
            },
            onInput: function (t) {
              var e = this.fromPaste;
              if (
                ((this.fromPaste = !1),
                t && t.stopPropagation(),
                this.isEditing)
              ) {
                var i,
                  n,
                  r,
                  o = this._splitTextIntoLines(
                    this.hiddenTextarea.value
                  ).graphemeText,
                  s = this._text.length,
                  a = o.length,
                  h = a - s,
                  l = this.selectionStart,
                  c = this.selectionEnd,
                  u = l !== c;
                if ("" === this.hiddenTextarea.value)
                  return (
                    (this.styles = {}),
                    this.updateFromTextArea(),
                    this.fire("changed"),
                    void (
                      this.canvas &&
                      (this.canvas.fire("text:changed", { target: this }),
                      this.canvas.requestRenderAll())
                    )
                  );
                var f = this.fromStringToGraphemeSelection(
                  this.hiddenTextarea.selectionStart,
                  this.hiddenTextarea.selectionEnd,
                  this.hiddenTextarea.value
                );
                (t = l > f.selectionStart),
                  u
                    ? ((r = this._text.slice(l, c)), (h += c - l))
                    : a < s &&
                      (r = t
                        ? this._text.slice(c + h, c)
                        : this._text.slice(l, l - h)),
                  (f = o.slice(f.selectionEnd - h, f.selectionEnd)),
                  r &&
                    r.length &&
                    (f.length &&
                      ((i = this.getSelectionStyles(l, l + 1, !1)),
                      (i = f.map(function () {
                        return i[0];
                      }))),
                    (r = u
                      ? ((n = l), c)
                      : t
                      ? ((n = c - r.length), c)
                      : (n = c) + r.length),
                    this.removeStyleFromTo(n, r)),
                  f.length &&
                    (e &&
                      f.join("") === _.copiedText &&
                      !_.disableStyleCopyPaste &&
                      (i = _.copiedTextStyle),
                    this.insertNewStyleBlock(f, l, i)),
                  this.updateFromTextArea(),
                  this.fire("changed"),
                  this.canvas &&
                    (this.canvas.fire("text:changed", { target: this }),
                    this.canvas.requestRenderAll());
              }
            },
            onCompositionStart: function () {
              this.inCompositionMode = !0;
            },
            onCompositionEnd: function () {
              this.inCompositionMode = !1;
            },
            onCompositionUpdate: function (t) {
              (this.compositionStart = t.target.selectionStart),
                (this.compositionEnd = t.target.selectionEnd),
                this.updateTextareaPosition();
            },
            copy: function () {
              this.selectionStart !== this.selectionEnd &&
                ((_.copiedText = this.getSelectedText()),
                _.disableStyleCopyPaste
                  ? (_.copiedTextStyle = null)
                  : (_.copiedTextStyle = this.getSelectionStyles(
                      this.selectionStart,
                      this.selectionEnd,
                      !0
                    )),
                (this._copyDone = !0));
            },
            paste: function () {
              this.fromPaste = !0;
            },
            _getClipboardData: function (t) {
              return (t && t.clipboardData) || _.window.clipboardData;
            },
            _getWidthBeforeCursor: function (t, e) {
              var i = this._getLineLeftOffset(t);
              return (
                0 < e &&
                  (i += (e = this.__charBounds[t][e - 1]).left + e.width),
                i
              );
            },
            getDownCursorOffset: function (t, e) {
              var i = this._getSelectionForOffset(t, e),
                n = this.get2DCursorLocation(i);
              return (e = n.lineIndex) === this._textLines.length - 1 ||
                t.metaKey ||
                34 === t.keyCode
                ? this._text.length - i
                : ((i = n.charIndex),
                  (n = this._getWidthBeforeCursor(e, i)),
                  (n = this._getIndexOnLine(e + 1, n)),
                  this._textLines[e].slice(i).length +
                    n +
                    1 +
                    this.missingNewlineOffset(e));
            },
            _getSelectionForOffset: function (t, e) {
              return t.shiftKey &&
                this.selectionStart !== this.selectionEnd &&
                e
                ? this.selectionEnd
                : this.selectionStart;
            },
            getUpCursorOffset: function (t, e) {
              var i = this._getSelectionForOffset(t, e),
                n = this.get2DCursorLocation(i);
              return 0 === (e = n.lineIndex) || t.metaKey || 33 === t.keyCode
                ? -i
                : ((t = n.charIndex),
                  (i = this._getWidthBeforeCursor(e, t)),
                  (n = this._getIndexOnLine(e - 1, i)),
                  (i = this._textLines[e].slice(0, t)),
                  (t = this.missingNewlineOffset(e - 1)),
                  -this._textLines[e - 1].length + n - i.length + (1 - t));
            },
            _getIndexOnLine: function (t, e) {
              for (
                var i = this._textLines[t],
                  n = this._getLineLeftOffset(t),
                  r = 0,
                  o = 0,
                  s = i.length;
                o < s;
                o++
              )
                if (e < (n += l = this.__charBounds[t][o].width)) {
                  var a = !0,
                    h = n,
                    l = Math.abs(n - l - e);
                  r = Math.abs(h - e) < l ? o : o - 1;
                  break;
                }
              return a ? r : i.length - 1;
            },
            moveCursorDown: function (t) {
              (this.selectionStart >= this._text.length &&
                this.selectionEnd >= this._text.length) ||
                this._moveCursorUpOrDown("Down", t);
            },
            moveCursorUp: function (t) {
              (0 === this.selectionStart && 0 === this.selectionEnd) ||
                this._moveCursorUpOrDown("Up", t);
            },
            _moveCursorUpOrDown: function (t, e) {
              (t = this["get" + t + "CursorOffset"](
                e,
                "right" === this._selectionDirection
              )),
                e.shiftKey
                  ? this.moveCursorWithShift(t)
                  : this.moveCursorWithoutShift(t),
                0 !== t &&
                  (this.setSelectionInBoundaries(),
                  this.abortCursorAnimation(),
                  (this._currentCursorOpacity = 1),
                  this.initDelayedCursor(),
                  this._fireSelectionChanged(),
                  this._updateTextarea());
            },
            moveCursorWithShift: function (t) {
              var e =
                "left" === this._selectionDirection
                  ? this.selectionStart + t
                  : this.selectionEnd + t;
              return (
                this.setSelectionStartEndWithShift(
                  this.selectionStart,
                  this.selectionEnd,
                  e
                ),
                0 !== t
              );
            },
            moveCursorWithoutShift: function (t) {
              return (
                t < 0
                  ? ((this.selectionStart += t),
                    (this.selectionEnd = this.selectionStart))
                  : ((this.selectionEnd += t),
                    (this.selectionStart = this.selectionEnd)),
                0 !== t
              );
            },
            moveCursorLeft: function (t) {
              (0 === this.selectionStart && 0 === this.selectionEnd) ||
                this._moveCursorLeftOrRight("Left", t);
            },
            _move: function (t, e, i) {
              var n;
              if (t.altKey) n = this["findWordBoundary" + i](this[e]);
              else {
                if (!t.metaKey && 35 !== t.keyCode && 36 !== t.keyCode)
                  return (this[e] += "Left" === i ? -1 : 1), !0;
                n = this["findLineBoundary" + i](this[e]);
              }
              if (this[e] !== n) return (this[e] = n), !0;
            },
            _moveLeft: function (t, e) {
              return this._move(t, e, "Left");
            },
            _moveRight: function (t, e) {
              return this._move(t, e, "Right");
            },
            moveCursorLeftWithoutShift: function (t) {
              var e = !0;
              return (
                (this._selectionDirection = "left"),
                this.selectionEnd === this.selectionStart &&
                  0 !== this.selectionStart &&
                  (e = this._moveLeft(t, "selectionStart")),
                (this.selectionEnd = this.selectionStart),
                e
              );
            },
            moveCursorLeftWithShift: function (t) {
              return "right" === this._selectionDirection &&
                this.selectionStart !== this.selectionEnd
                ? this._moveLeft(t, "selectionEnd")
                : 0 !== this.selectionStart
                ? ((this._selectionDirection = "left"),
                  this._moveLeft(t, "selectionStart"))
                : void 0;
            },
            moveCursorRight: function (t) {
              (this.selectionStart >= this._text.length &&
                this.selectionEnd >= this._text.length) ||
                this._moveCursorLeftOrRight("Right", t);
            },
            _moveCursorLeftOrRight: function (t, e) {
              (t = "moveCursor" + t + "With"),
                (this._currentCursorOpacity = 1),
                e.shiftKey ? (t += "Shift") : (t += "outShift"),
                this[t](e) &&
                  (this.abortCursorAnimation(),
                  this.initDelayedCursor(),
                  this._fireSelectionChanged(),
                  this._updateTextarea());
            },
            moveCursorRightWithShift: function (t) {
              return "left" === this._selectionDirection &&
                this.selectionStart !== this.selectionEnd
                ? this._moveRight(t, "selectionStart")
                : this.selectionEnd !== this._text.length
                ? ((this._selectionDirection = "right"),
                  this._moveRight(t, "selectionEnd"))
                : void 0;
            },
            moveCursorRightWithoutShift: function (t) {
              var e = !0;
              return (
                (this._selectionDirection = "right"),
                this.selectionStart === this.selectionEnd
                  ? ((e = this._moveRight(t, "selectionStart")),
                    (this.selectionEnd = this.selectionStart))
                  : (this.selectionStart = this.selectionEnd),
                e
              );
            },
            removeChars: function (t, e) {
              this.removeStyleFromTo(t, (e = void 0 === e ? t + 1 : e)),
                this._text.splice(t, e - t),
                (this.text = this._text.join("")),
                this.set("dirty", !0),
                this._shouldClearDimensionCache() &&
                  (this.initDimensions(), this.setCoords()),
                this._removeExtraneousStyles();
            },
            insertChars: function (t, e, i, n) {
              i < (n = void 0 === n ? i : n) && this.removeStyleFromTo(i, n),
                (t = _.util.string.graphemeSplit(t)),
                this.insertNewStyleBlock(t, i, e),
                (this._text = [].concat(
                  this._text.slice(0, i),
                  t,
                  this._text.slice(n)
                )),
                (this.text = this._text.join("")),
                this.set("dirty", !0),
                this._shouldClearDimensionCache() &&
                  (this.initDimensions(), this.setCoords()),
                this._removeExtraneousStyles();
            },
          }),
          (function () {
            var t = _.util.toFixed,
              e = /  +/g;
            _.util.object.extend(_.Text.prototype, {
              _toSVG: function () {
                var t = this._getSVGLeftTopOffsets();
                return (
                  (t = this._getSVGTextAndBg(t.textTop, t.textLeft)),
                  this._wrapSVGTextAndBg(t)
                );
              },
              toSVG: function (t) {
                return this._createBaseSVGMarkup(this._toSVG(), {
                  reviver: t,
                  noStyle: !0,
                  withShadow: !0,
                });
              },
              _getSVGLeftTopOffsets: function () {
                return {
                  textLeft: -this.width / 2,
                  textTop: -this.height / 2,
                  lineTop: this.getHeightOfLine(0),
                };
              },
              _wrapSVGTextAndBg: function (t) {
                var e = this.getSvgTextDecoration(this);
                return [
                  t.textBgRects.join(""),
                  '\t\t<text xml:space="preserve" ',
                  this.fontFamily
                    ? 'font-family="' +
                      this.fontFamily.replace(/"/g, "'") +
                      '" '
                    : "",
                  this.fontSize ? 'font-size="' + this.fontSize + '" ' : "",
                  this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "",
                  this.fontWeight
                    ? 'font-weight="' + this.fontWeight + '" '
                    : "",
                  e ? 'text-decoration="' + e + '" ' : "",
                  'style="',
                  this.getSvgStyles(!0),
                  '"',
                  this.addPaintOrder(),
                  " >",
                  t.textSpans.join(""),
                  "</text>\n",
                ];
              },
              _getSVGTextAndBg: function (t, e) {
                var i,
                  n = [],
                  r = [],
                  o = t;
                this._setSVGBg(r);
                for (var s = 0, a = this._textLines.length; s < a; s++)
                  (i = this._getLineLeftOffset(s)),
                    (this.textBackgroundColor ||
                      this.styleHas("textBackgroundColor", s)) &&
                      this._setSVGTextLineBg(r, s, e + i, o),
                    this._setSVGTextLineText(n, s, e + i, o),
                    (o += this.getHeightOfLine(s));
                return { textSpans: n, textBgRects: r };
              },
              _createTextCharSpan: function (i, n, r, o) {
                var s = i !== i.trim() || i.match(e),
                  a = (h = this.getSvgSpanStyles(n, s))
                    ? 'style="' + h + '"'
                    : "",
                  h = ((s = n.deltaY), "");
                return (
                  (n = _.Object.NUM_FRACTION_DIGITS),
                  s && (h = ' dy="' + t(s, n) + '" '),
                  [
                    '<tspan x="',
                    t(r, n),
                    '" y="',
                    t(o, n),
                    '" ',
                    h,
                    a,
                    ">",
                    _.util.string.escapeXml(i),
                    "</tspan>",
                  ].join("")
                );
              },
              _setSVGTextLineText: function (t, e, i, n) {
                var r,
                  o,
                  s,
                  a,
                  h = this.getHeightOfLine(e),
                  l = -1 !== this.textAlign.indexOf("justify"),
                  c = "",
                  u = 0,
                  f = this._textLines[e];
                n += (h * (1 - this._fontSizeFraction)) / this.lineHeight;
                for (var d = 0, g = f.length - 1; d <= g; d++)
                  (a = d === g || this.charSpacing),
                    (c += f[d]),
                    (s = this.__charBounds[e][d]),
                    0 === u
                      ? ((i += s.kernedWidth - s.width), (u += s.width))
                      : (u += s.kernedWidth),
                    (a = !(!l || a || !this._reSpaceAndTab.test(f[d])) || a) ||
                      ((r = r || this.getCompleteStyleDeclaration(e, d)),
                      (o = this.getCompleteStyleDeclaration(e, d + 1)),
                      (a = this._hasStyleChangedForSvg(r, o))),
                    a &&
                      ((a = this._getStyleDeclaration(e, d) || {}),
                      t.push(this._createTextCharSpan(c, a, i, n)),
                      (c = ""),
                      (r = o),
                      (i += u),
                      (u = 0));
              },
              _pushTextBgRect: function (e, i, n, r, o, s) {
                var a = _.Object.NUM_FRACTION_DIGITS;
                e.push(
                  "\t\t<rect ",
                  this._getFillAttributes(i),
                  ' x="',
                  t(n, a),
                  '" y="',
                  t(r, a),
                  '" width="',
                  t(o, a),
                  '" height="',
                  t(s, a),
                  '"></rect>\n'
                );
              },
              _setSVGTextLineBg: function (t, e, i, n) {
                for (
                  var r,
                    o,
                    s = this._textLines[e],
                    a = this.getHeightOfLine(e) / this.lineHeight,
                    h = 0,
                    l = 0,
                    c = this.getValueOfPropertyAt(e, 0, "textBackgroundColor"),
                    u = 0,
                    f = s.length;
                  u < f;
                  u++
                )
                  (r = this.__charBounds[e][u]),
                    (o = this.getValueOfPropertyAt(
                      e,
                      u,
                      "textBackgroundColor"
                    )) !== c
                      ? (c && this._pushTextBgRect(t, c, i + l, n, h, a),
                        (l = r.left),
                        (h = r.width),
                        (c = o))
                      : (h += r.kernedWidth);
                o && this._pushTextBgRect(t, o, i + l, n, h, a);
              },
              _getFillAttributes: function (t) {
                var e = t && "string" == typeof t ? new _.Color(t) : "";
                return e && e.getSource() && 1 !== e.getAlpha()
                  ? 'opacity="' +
                      e.getAlpha() +
                      '" fill="' +
                      e.setAlpha(1).toRgb() +
                      '"'
                  : 'fill="' + t + '"';
              },
              _getSVGLineTopOffset: function (t) {
                for (var e, i = 0, n = 0; n < t; n++)
                  i += this.getHeightOfLine(n);
                return (
                  (e = this.getHeightOfLine(n)),
                  {
                    lineTop: i,
                    offset:
                      ((this._fontSizeMult - this._fontSizeFraction) * e) /
                      (this.lineHeight * this._fontSizeMult),
                  }
                );
              },
              getSvgStyles: function (t) {
                return (
                  _.Object.prototype.getSvgStyles.call(this, t) +
                  " white-space: pre;"
                );
              },
            });
          })(),
          (function (t) {
            var e = t.fabric || (t.fabric = {});
            (e.Textbox = e.util.createClass(e.IText, e.Observable, {
              type: "textbox",
              minWidth: 20,
              dynamicMinWidth: 2,
              __cachedLines: null,
              lockScalingFlip: !0,
              noScaleCache: !1,
              _dimensionAffectingProps:
                e.Text.prototype._dimensionAffectingProps.concat("width"),
              _wordJoiners: /[ \t\r]/,
              splitByGrapheme: !1,
              initDimensions: function () {
                this.__skipDimension ||
                  (this.isEditing && this.initDelayedCursor(),
                  this.clearContextTop(),
                  this._clearCache(),
                  (this.dynamicMinWidth = 0),
                  (this._styleMap = this._generateStyleMap(this._splitText())),
                  this.dynamicMinWidth > this.width &&
                    this._set("width", this.dynamicMinWidth),
                  -1 !== this.textAlign.indexOf("justify") &&
                    this.enlargeSpaces(),
                  (this.height = this.calcTextHeight()),
                  this.saveState({ propertySet: "_dimensionAffectingProps" }));
              },
              _generateStyleMap: function (t) {
                for (
                  var e = 0, i = 0, n = 0, r = {}, o = 0;
                  o < t.graphemeLines.length;
                  o++
                )
                  "\n" === t.graphemeText[n] && 0 < o
                    ? ((i = 0), n++, e++)
                    : !this.splitByGrapheme &&
                      this._reSpaceAndTab.test(t.graphemeText[n]) &&
                      0 < o &&
                      (i++, n++),
                    (r[o] = { line: e, offset: i }),
                    (n += t.graphemeLines[o].length),
                    (i += t.graphemeLines[o].length);
                return r;
              },
              styleHas: function (t, i) {
                var n;
                return (
                  !this._styleMap ||
                    this.isWrapping ||
                    ((n = this._styleMap[i]) && (i = n.line)),
                  e.Text.prototype.styleHas.call(this, t, i)
                );
              },
              isEmptyStyles: function (t) {
                if (!this.styles) return !0;
                var e,
                  i,
                  n,
                  r = 0,
                  o = !1,
                  s = this._styleMap[t],
                  a = this._styleMap[t + 1];
                for (n in (s && ((t = s.line), (r = s.offset)),
                a && ((o = a.line === t), (e = a.offset)),
                (i = void 0 === t ? this.styles : { line: this.styles[t] })))
                  for (var h in i[n])
                    if (r <= h && (!o || h < e))
                      for (var l in i[n][h]) return !1;
                return !0;
              },
              _getStyleDeclaration: function (t, e) {
                if (this._styleMap && !this.isWrapping) {
                  var i = this._styleMap[t];
                  if (!i) return null;
                  (t = i.line), (e = i.offset + e);
                }
                return this.callSuper("_getStyleDeclaration", t, e);
              },
              _setStyleDeclaration: function (t, e, i) {
                var n = this._styleMap[t];
                (t = n.line), (e = n.offset + e), (this.styles[t][e] = i);
              },
              _deleteStyleDeclaration: function (t, e) {
                var i = this._styleMap[t];
                (t = i.line), (e = i.offset + e), delete this.styles[t][e];
              },
              _getLineStyle: function (t) {
                return (t = this._styleMap[t]), !!this.styles[t.line];
              },
              _setLineStyle: function (t) {
                (t = this._styleMap[t]), (this.styles[t.line] = {});
              },
              _wrapText: function (t, e) {
                var i,
                  n = [];
                for (this.isWrapping = !0, i = 0; i < t.length; i++)
                  n = n.concat(this._wrapLine(t[i], i, e));
                return (this.isWrapping = !1), n;
              },
              _measureWord: function (t, e, i) {
                var n,
                  r = 0;
                i = i || 0;
                for (var o = 0, s = t.length; o < s; o++)
                  (r += this._getGraphemeBox(
                    t[o],
                    e,
                    o + i,
                    n,
                    !0
                  ).kernedWidth),
                    (n = t[o]);
                return r;
              },
              _wrapLine: function (t, i, n, r) {
                var o,
                  s,
                  a = 0,
                  h = this.splitByGrapheme,
                  l = [],
                  c = [],
                  u = h
                    ? e.util.string.graphemeSplit(t)
                    : t.split(this._wordJoiners),
                  f = 0,
                  d = h ? "" : " ",
                  g = 0,
                  p = 0,
                  m = !0,
                  v = this._getWidthOfCharSpacing();
                (r = r || 0), 0 === u.length && u.push([]), (n -= r);
                for (var y = 0; y < u.length; y++)
                  (o = h ? u[y] : e.util.string.graphemeSplit(u[y])),
                    (s = this._measureWord(o, i, f)),
                    (f += o.length),
                    n < (a += g + s - v) && !m
                      ? (l.push(c), (c = []), (a = s), (m = !0))
                      : (a += v),
                    m || h || c.push(d),
                    (c = c.concat(o)),
                    (g = h ? 0 : this._measureWord([d], i, f)),
                    f++,
                    (m = !1),
                    p < s && (p = s);
                return (
                  y && l.push(c),
                  p + r > this.dynamicMinWidth &&
                    (this.dynamicMinWidth = p - v + r),
                  l
                );
              },
              isEndOfWrapping: function (t) {
                return (
                  !this._styleMap[t + 1] ||
                  this._styleMap[t + 1].line !== this._styleMap[t].line
                );
              },
              missingNewlineOffset: function (t) {
                return !this.splitByGrapheme || this.isEndOfWrapping(t) ? 1 : 0;
              },
              _splitTextIntoLines: function (t) {
                t = e.Text.prototype._splitTextIntoLines.call(this, t);
                for (
                  var i = this._wrapText(t.lines, this.width),
                    n = new Array(i.length),
                    r = 0;
                  r < i.length;
                  r++
                )
                  n[r] = i[r].join("");
                return (t.lines = n), (t.graphemeLines = i), t;
              },
              getMinWidth: function () {
                return Math.max(this.minWidth, this.dynamicMinWidth);
              },
              _removeExtraneousStyles: function () {
                var t,
                  e = {};
                for (t in this._styleMap)
                  this._textLines[t] && (e[this._styleMap[t].line] = 1);
                for (t in this.styles) e[t] || delete this.styles[t];
              },
              toObject: function (t) {
                return this.callSuper(
                  "toObject",
                  ["minWidth", "splitByGrapheme"].concat(t)
                );
              },
            })),
              (e.Textbox.fromObject = function (t, i) {
                return e.Object._fromObject("Textbox", t, i, "text");
              });
          })(e),
          (function () {
            var t = _.controlsUtils,
              e = t.scaleSkewCursorStyleHandler,
              i = t.scaleCursorStyleHandler,
              n = t.scalingEqually,
              r = t.scalingYOrSkewingX,
              o = t.scalingXOrSkewingY,
              s = t.scaleOrSkewActionName,
              a = _.Object.prototype.controls;
            (a.ml = new _.Control({
              x: -0.5,
              y: 0,
              cursorStyleHandler: e,
              actionHandler: o,
              getActionName: s,
            })),
              (a.mr = new _.Control({
                x: 0.5,
                y: 0,
                cursorStyleHandler: e,
                actionHandler: o,
                getActionName: s,
              })),
              (a.mb = new _.Control({
                x: 0,
                y: 0.5,
                cursorStyleHandler: e,
                actionHandler: r,
                getActionName: s,
              })),
              (a.mt = new _.Control({
                x: 0,
                y: -0.5,
                cursorStyleHandler: e,
                actionHandler: r,
                getActionName: s,
              })),
              (a.tl = new _.Control({
                x: -0.5,
                y: -0.5,
                cursorStyleHandler: i,
                actionHandler: n,
              })),
              (a.tr = new _.Control({
                x: 0.5,
                y: -0.5,
                cursorStyleHandler: i,
                actionHandler: n,
              })),
              (a.bl = new _.Control({
                x: -0.5,
                y: 0.5,
                cursorStyleHandler: i,
                actionHandler: n,
              })),
              (a.br = new _.Control({
                x: 0.5,
                y: 0.5,
                cursorStyleHandler: i,
                actionHandler: n,
              })),
              (a.mtr = new _.Control({
                x: 0,
                y: -0.5,
                actionHandler: t.rotationWithSnapping,
                cursorStyleHandler: t.rotationStyleHandler,
                offsetY: -40,
                withConnection: !0,
                actionName: "rotate",
              })),
              _.Textbox &&
                (((n = _.Textbox.prototype.controls = {}).mtr = a.mtr),
                (n.tr = a.tr),
                (n.br = a.br),
                (n.tl = a.tl),
                (n.bl = a.bl),
                (n.mt = a.mt),
                (n.mb = a.mb),
                (n.mr = new _.Control({
                  x: 0.5,
                  y: 0,
                  actionHandler: t.changeWidth,
                  cursorStyleHandler: e,
                  actionName: "resizing",
                })),
                (n.ml = new _.Control({
                  x: -0.5,
                  y: 0,
                  actionHandler: t.changeWidth,
                  cursorStyleHandler: e,
                  actionName: "resizing",
                })));
          })();
      })((_ = { exports: {} }), _.exports),
      _.exports);
  function C() {}
  b.fabric,
    (fabric.Object.prototype.noScaleCache = !1),
    (C.setFsControls = function (t, e) {
      (t.cornerStyle = "circle"),
        (t.borderColor = "rgb(51, 112, 255, 1.0)"),
        (t.transparentCorners = !1),
        (t.cornerColor = "rgb(51, 112, 255, 1.0)"),
        (t.cornerSize = 8),
        (t.cornerStrokeColor = "white"),
        (t.selectable = !0),
        (t.hasControls = e),
        (t.hasBorders = !1),
        (t.lockMovementX = !1),
        (t.lockMovementY = !1),
        (t.perPixelTargetFind = !0),
        t.setControlsVisibility({ mtr: !1 }),
        (t.strokeUniform = !0);
    }),
    (C.fabricCanvasToBase64String = function (t, e) {
      var i = null;
      if (null != e) {
        t.remove(e);
        const n = e.getBoundingRect();
        i = t.toDataURL({
          format: "png",
          multiplier: 1,
          left: n.left,
          top: n.top,
          width: n.width,
          height: n.height,
          enableRetinaScaling: !0,
        });
      } else
        i = t.toDataURL({
          format: "png",
          multiplier: 1,
          left: 0,
          top: 0,
          width: t.width,
          height: t.height,
        });
      return i;
    }),
    (C.saveClipToClipboard = function (t, e) {
      var i = C.fabricCanvasToBase64String(t, e);
      const { clipboard: n, nativeImage: r } = s.default,
        o = r.createFromDataURL(i);
      n.writeImage(o);
    }),
    (C.saveClipToFile = function (t, e, i) {
      var n = C.fabricCanvasToBase64String(t, e);
      n = n.replace("data:image/png;base64,", "");
      return c.default.promises.writeFile(i, n, "base64");
    }),
    (C.getMousePointerWindowRect = function (t, e, i, n, r, o) {
      let s, a, h, l;
      if (null != n && n.length) {
        let c = null;
        for (let r = 0; r < n.length; r++)
          if (
            !(
              "Electron" == n[r].title ||
              ("" == n[r].title && n[r].pname.indexOf("explorer.exe") >= 0)
            ) &&
            i.left + t.x * e >= n[r].rect.left &&
            i.left + t.x * e < n[r].rect.right &&
            i.top + t.y * e >= n[r].rect.top &&
            i.top + t.y * e < n[r].rect.bottom
          ) {
            c = n[r].rect;
            break;
          }
        null != c &&
          ((s = c.left - i.left < 0 ? 0 : c.left - i.left),
          (h = c.left + c.width),
          (h = h - i.left > r * e ? r * e : h - i.left),
          (a = c.top - i.top < 0 ? 0 : c.top - i.top),
          (l = c.top + c.height),
          (l = l - i.top > o * e ? o * e : l - i.top));
      }
      return { left: s, top: a, right: h, bottom: l };
    }),
    (C.checkMousePointerInCanvas = function (t, e) {
      let i = t.x,
        n = t.y;
      return !(i < 0 || (i > e.width) | (n < 0) || n > e.height);
    }),
    (C.checkPointerBounding = function (t, e) {
      let i = !1,
        n = t.x,
        r = t.y,
        o = e.top,
        s = o + e.height * e.scaleX,
        a = e.left,
        h = a + e.width * e.scaleY;
      return (
        n <= a ? ((n = a), (i = !0)) : n >= h && ((n = h), (i = !0)),
        r <= o ? ((r = o), (i = !0)) : r >= s && ((r = s), (i = !0)),
        { outOfRange: i, x: n, y: r }
      );
    }),
    (C.limitObjectScaling = function (t, e) {
      let i = t.getBoundingRect(),
        n = i.top,
        r = n + i.height,
        o = i.left,
        s = o + i.width,
        a = e.top,
        h = a + e.height,
        l = e.left,
        c = l + e.width,
        u = Math.min(Math.max(o, l), c - i.width),
        f = Math.min(Math.max(n, a), h - i.height),
        d = t.scaleX,
        g = t.scaleY,
        p = t.width,
        m = t.height;
      return (
        s > c && ((d = (c - o) / t.width), (p = c - o)),
        r > h && ((g = (h - n) / t.height), (m = h - n)),
        { left: u, top: f, width: p, height: m, scaleX: d, scaleY: g }
      );
    }),
    (C.limitObjectMoving = function (t, e) {
      let i = t.top,
        n = t.left,
        r = e.top,
        o = r + e.height,
        s = e.left,
        a = s + e.width;
      return {
        left: Math.min(Math.max(n, s), a - t.width),
        top: Math.min(Math.max(i, r), o - t.height),
      };
    }),
    (C.setDpiText = function (t, e, i, n = !0) {
      let r = document.getElementById(t);
      if (((r.style.visibility = n ? "visible" : "hidden"), null != e)) {
        let t = e.left,
          n = 0,
          o = 16;
        (n = e.top >= r.offsetHeight + o ? e.top - (r.offsetHeight + o) : 0),
          (r.style.position = "absolute"),
          (r.style.left = t + "px"),
          (r.style.top = n + "px"),
          (r.children[0].innerHTML = i);
      }
    }),
    (C.setToolBarLocation = function (t, e, i, n = !0) {
      var r = document.getElementById(t);
      if (((r.style.visibility = n ? "visible" : "hidden"), null != e)) {
        let t = 0,
          n = 0,
          o = 16;
        (t = e.left + e.width - r.offsetWidth),
          (n =
            e.top + e.height + r.offsetHeight + o / window.ratio <= i
              ? e.top + e.height + o / window.ratio
              : e.top >= r.offsetHeight + o / window.ratio
              ? e.top - r.offsetHeight - o / window.ratio
              : i - r.offsetHeight),
          (t = Math.max(t, 0)),
          (r.style.position = "absolute"),
          (r.style.left = t + "px"),
          (r.style.top = n + "px");
      }
    });
  var S = { Utils: C };
  const w = b.fabric;
  let T = window.ratio;
  w.MagnifyingGlass = w.util.createClass(w.Rect, {
    type: "MagnifyingGlass",
    initialize: function (t) {
      this.callSuper("initialize", t), this._initRxRy(), (T = window.ratio);
    },
    _initRxRy: function () {
      this.rx && !this.ry
        ? (this.ry = this.rx)
        : this.ry && !this.rx && (this.rx = this.ry);
    },
    imageSource: null,
    cursorPx: null,
    cursorPy: null,
    setCusorPosition: function (t, e) {
      (this.cursorPx = t), (this.cursorPy = e);
    },
    rgbToHex: function (t, e, i) {
      return (
        "#" +
        (16777216 + ((t << 16) | (e << 8) | (i << 0)))
          .toString(16)
          .toUpperCase()
          .slice(1)
      );
    },
    canvasGetColor: null,
    _render: function (t) {
      t.save(),
        this.rx && Math.min(this.rx, this.width / 2),
        this.ry && Math.min(this.ry, this.height / 2);
      var e = this.width,
        i = this.height,
        n = -this.width / 2,
        r = -this.height / 2;
      null == this.imageSource &&
        ((this.imageSource = new Image()),
        (this.imageSource.src = window.imgUrl));
      let o = (this.width * T) / 4,
        s = o,
        a = this.cursorPx * T - o / 2,
        h = this.cursorPy * T - s / 2;
      null != this.cursorPx &&
        null != this.cursorPy &&
        t.drawImage(this.imageSource, a, h, o, s, n, r, e, e);
      let l = "HEX:",
        c = "RGB:";
      if (
        (null == this.canvasGetColor &&
          ((this.canvasGetColor = document.createElement("canvas")),
          (this.canvasGetColor.width = this.imageSource.width),
          (this.canvasGetColor.height = this.imageSource.height),
          this.canvasGetColor
            .getContext("2d")
            .drawImage(
              this.imageSource,
              0,
              0,
              this.imageSource.width,
              this.imageSource.height
            )),
        null != this.canvasGetColor)
      ) {
        var u = this.canvasGetColor
          .getContext("2d")
          .getImageData(this.cursorPx * T, this.cursorPy * T, 1, 1).data;
        (l += this.rgbToHex(u[0], u[1], u[2])),
          (c += "(" + u[0] + "," + u[1] + "," + u[2] + ")");
      }
      (t.fillStyle = "#5F5F5F"),
        t.fillRect(n, r + e, e, i - e),
        t.beginPath(),
        t.moveTo(n + e / 2, r),
        t.lineTo(n + e / 2, r + e),
        t.moveTo(n, r + e / 2),
        t.lineTo(n + e, r + e / 2),
        t.closePath(),
        (t.strokeStyle = "#4699FF"),
        (t.strokeWidth = this.strokeWidth),
        t.stroke(),
        t.beginPath(),
        t.moveTo(n, r),
        t.lineTo(n + e, r),
        t.moveTo(n + e, r),
        t.lineTo(n + e, r + i),
        t.moveTo(n + e, r + i),
        t.lineTo(n, r + i),
        t.moveTo(n, r + i),
        t.lineTo(n, r),
        t.closePath(),
        (t.strokeStyle = "#9E9E9E"),
        (t.strokeWidth = this.strokeWidth),
        t.stroke(),
        (t.font = "8px 微软雅黑"),
        (t.fillStyle = "white"),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"),
        t.fillText(l, n + e / 2, r + e + (i - e) / 4),
        t.fillText(c, n + e / 2, r + e + (3 * (i - e)) / 4),
        t.restore(),
        this._renderPaintInOrder(t);
    },
    toObject: function (t) {
      return this.callSuper("toObject", ["rx", "ry"].concat(t));
    },
  });
  var O = w.MagnifyingGlass;
  const k = S.Utils,
    P = { MagnifyingGlass: O }.MagnifyingGlass;
  let E = window.ratio,
    A = window.originImg;
  console.log("window.ratio=" + window.ratio);
  let j = null,
    M = null,
    D = null,
    F = null,
    I = null,
    L = null,
    R = null,
    B = null,
    X = !1,
    W = 0,
    Y = 0,
    z = 0,
    U = 0,
    H = 0,
    G = 0;
  function N(t, e) {
    k.setToolBarLocation("imgEditToolbar", t, j.height / E, e);
  }
  function V(t, e) {
    let i = Math.round(t.width * E) + "*" + Math.round(t.height * E);
    k.setDpiText("dpiTextToolBar", t, i, e);
  }
  let q = null;
  function K(t, e = !0) {
    if ((j.contains(q) && (j.remove(q), (q = null)), null == t)) return;
    let i = t.x - 5 - 80;
    i = i >= 0 ? i : t.x + 5;
    let n = t.y + 5;
    (n = n + 100 <= j.height ? n : t.y - 5 - 100),
      e &&
        null == q &&
        ((q = new P({
          left: i,
          top: n,
          width: 80,
          height: 100,
          hasBorders: !1,
          evented: !1,
          selectable: !1,
          strokeWidth: 1,
          padding: 0,
        })),
        q.setCusorPosition(t.x, t.y),
        j.add(q),
        j.renderAll());
  }
  function J(t, e) {
    j.contains(e) && j.remove(e),
      (e.evented = !1),
      (e.selectable = !1),
      (e.hasControls = !1),
      (e.hasBorders = !1),
      (e.perPixelTargetFind = !1),
      (e.isTemp = !0),
      e.set({
        left: t.left,
        top: t.top,
        cropX: t.left * E,
        cropY: t.top * E,
        width: t.width * E,
        height: t.height * E,
        padding: 0,
        strokeWidth: 0,
        scaleX: 1 / E,
        scaleY: 1 / E,
      }),
      j.contains(e) || j.add(e);
  }
  function Z(t, e, i, n, r, o) {
    let s = new fabric.Rect({
      left: t,
      top: e,
      width: i - 2,
      height: n - 2,
      fill: "transparent",
      stroke: "#4285f4",
      strokeWidth: 2,
      padding: 0,
    });
    return (
      k.setFsControls(s, !0),
      (s.hasBorder = !1),
      (s.perPixelTargetFind = o),
      (s.isTemp = !0),
      s
    );
  }
  function $() {
    return (
      (X = !1),
      (F.selectable = !1),
      (F.perPixelTargetFind = !0),
      (F.hasBorders = !1),
      F.setCoords(),
      j.contains(A) && (console.log("移除背景高亮"), j.remove(A)),
      j.contains(F) && (console.log("移除选择区域"), j.remove(F)),
      j.discardActiveObject(),
      j.renderAll(),
      F
    );
  }
  function Q(t) {
    let e = k.getMousePointerWindowRect(t, E, M, D, j.width, j.height);
    if (
      null == R ||
      R.left != e.left ||
      R.top != e.top ||
      R.right != e.right ||
      R.bottom != e.bottom
    ) {
      (R = e), null != L && j.contains(L) && (j.remove(L), (L = null));
      let t = e.left / E,
        i = e.top / E,
        n = (e.right - e.left) / E,
        r = (e.bottom - e.top) / E;
      null == L && ((L = Z(t, i, n, r, 0, !0)), j.add(L)),
        J(L, A),
        L.bringToFront();
    }
    return L;
  }
  let tt = !1;
  var et = {
    startClip: function (t, e, i, n, r) {
      if (
        ((A = window.originImg),
        (E = window.ratio),
        (j = t),
        (M = e),
        (D = i),
        (B = r),
        (X = !0),
        (j.isDrawingMode = !1),
        j.on("mouse:out", (t) => {
          K(null, !1);
        }),
        j.on("object:scaling", (t) => {
          if (X && t.target == F) {
            let e = t.target;
            e.getBoundingRect(), e.setCoords();
            let i = e.getBoundingRect(),
              n = { left: 0, top: 0, width: j.width, height: j.height };
            i.width + i.left >= n.left + n.width ||
            i.height + i.top >= n.top + n.height ||
            i.left < n.left ||
            i.top < n.top
              ? ((e.left = W),
                (e.top = Y),
                (e.scaleX = z),
                (e.scaleY = U),
                (e.width = H),
                (e.height = G))
              : ((W = e.left),
                (Y = e.top),
                (z = e.scaleX),
                (U = e.scaleY),
                (H = e.width),
                (G = e.height)),
              F.setCoords(),
              J(F.getBoundingRect(), A),
              N(F.getBoundingRect(), !1),
              V(F.getBoundingRect(), !0),
              F.bringToFront(),
              j.discardActiveObject();
          }
        }),
        j.on("object:moving", (t) => {
          if (X && t.target == F) {
            let t = F;
            t.setCoords();
            let e = k.limitObjectMoving(t.getBoundingRect(), {
              left: 0,
              top: 0,
              width: j.width,
              height: j.height,
              scaleX: 1,
              scaleY: 1,
            });
            (t.left == e.left && t.top == e.top) ||
              t.set({ left: e.left, top: e.top }),
              t.setCoords(),
              F.setCoords(),
              J(F.getBoundingRect(), A),
              N(F.getBoundingRect(), !1),
              V(F.getBoundingRect(), !0),
              F.bringToFront(),
              j.discardActiveObject();
          }
        }),
        j.on("object:scaled", (t) => {
          X && t.target == F && j.setActiveObject(F);
        }),
        j.on("object:moved", (t) => {
          X && t.target == F && j.setActiveObject(F);
        }),
        j.on("mouse:down", function (t) {
          X &&
            null == t.target &&
            (null != B && B({ eventType: "BeginClip", eventArgs: null }),
            (I = j.getPointer(t.e)),
            null != L && j.contains(L) && j.remove(L),
            j.contains(A) && j.remove(A),
            null != F && j.contains(F) && (j.remove(F), (F = null)),
            null == F && ((F = Z(I.x, I.y, 0, 0, 0, !1)), j.add(F)),
            N(F.getBoundingRect(), !1),
            V(F.getBoundingRect(), !1));
        }),
        j.on("mouse:move", function (t) {
          if (!X) return;
          let e = j.getPointer(t.e);
          if (
            ((null != F && null == I) || K(e),
            null == I && null == F && Q(e),
            null != I && null != F)
          ) {
            if (0 == k.checkMousePointerInCanvas(e, j)) return;
            let t = e.x - I.x,
              i = e.y - I.y;
            j.contains(F) && (j.remove(F), (F = null)),
              j.contains(A) && j.remove(A);
            let n = I.x,
              r = I.y;
            t < 0 && ((n += t), (t = Math.abs(t))),
              i < 0 && ((r += i), (i = Math.abs(i))),
              (F = Z(n, r, t, i, 0, !1)),
              j.add(F),
              J(F.getBoundingRect(), A),
              N(F.getBoundingRect(), !1),
              V(F.getBoundingRect(), !0),
              F.bringToFront();
          }
        }),
        j.on("mouse:up", function (t) {
          if (X && ((I = null), K(null, !1), null != F)) {
            F.setCoords();
            let t = F.getBoundingRect().left,
              e = F.getBoundingRect().top,
              i = F.getBoundingRect().width,
              n = F.getBoundingRect().height;
            (F.width <= 0 || F.height <= 0) &&
              null != L &&
              (L.setCoords(),
              (t = L.getBoundingRect().left),
              (e = L.getBoundingRect().top),
              (i = L.getBoundingRect().width),
              (n = L.getBoundingRect().height)),
              null != L && j.contains(L) && j.remove(L),
              j.contains(A) && j.remove(A),
              (L = null),
              null != F && j.contains(F) && (j.remove(F), (F = null)),
              (F = Z(t, e, i, n, 0, !1)),
              j.add(F),
              J(F.getBoundingRect(), A),
              N(F.getBoundingRect(), !0),
              V(F.getBoundingRect()),
              j.bringToFront(F),
              j.setActiveObject(F),
              j.requestRenderAll();
          }
        }),
        null != n &&
          null != M &&
          n.cursorX >= M.left &&
          n.cursorY >= M.top &&
          n.cursorX < M.right &&
          n.cursorY < M.bottom)
      ) {
        let t = (n.cursorX - M.left) / window.ratio,
          e = (n.cursorY - M.top) / window.ratio;
        Q({ x: t, y: e }), K({ x: t, y: e }, !0);
      }
    },
    stopClip: $,
    clearClip: function () {
      K(null, !1),
        N(F, !1),
        V(F, !1),
        null != F && j.contains(F) && (j.remove(F), (F = null)),
        null != A && j.contains(A) && j.remove(A),
        j.renderAll();
    },
    setEnableClip: function (t) {
      console.log("setEnableClip = " + t), t || $();
    },
    setKeydown: function (t) {
      switch (t.code) {
        case "ShiftLeft":
        case "ShiftRight":
          if (!tt) {
            tt = !0;
            let t = j.getActiveObject();
            null != t &&
              (t.setControlsVisibility({ ml: !1, mr: !1, mt: !1, mb: !1 }),
              j.renderAll());
          }
      }
    },
    setKeyup: function (t) {
      tt = !1;
      let e = j.getActiveObject();
      null != e &&
        (e.setControlsVisibility({ ml: !0, mr: !0, mt: !0, mb: !0 }),
        j.renderAll());
    },
  };
  function it() {
    (this.maxStackSize = 1e4),
      (this.undoStack = []),
      (this.redoStack = []),
      (this.undoCallback = null);
  }
  (it.sharedInst = null),
    (it.getInst = function (t) {
      return (
        null === it.sharedInst && (it.sharedInst = new it(t)), it.sharedInst
      );
    }),
    (it.prototype.set = function (t) {
      for (; this.undoStack.length >= this.maxStackSize; )
        this.undoStack.shift();
      this.undoStack.push(t), (this.redoStack = []), this.fireUndoSizeChanged();
    }),
    (it.prototype.prev = function () {
      if (this.undoStack.length > 0) {
        let t = this.undoStack.pop();
        for (; this.redoStack.length >= this.maxStackSize; )
          this.redoStack.shift();
        return this.redoStack.push(t), this.fireUndoSizeChanged(), t;
      }
      return !1;
    }),
    (it.prototype.next = function () {
      if (this.redoStack.length > 0) {
        let t = this.redoStack.pop();
        for (; this.undoStack.length >= this.maxStackSize; )
          this.undoStack.shift();
        return this.undoStack.push(t), this.fireUndoSizeChanged(), t;
      }
      return !1;
    }),
    (it.prototype.clear = function () {
      (this.undoStack = []), (this.redoStack = []);
    }),
    (it.prototype.undoSize = function () {
      return this.undoStack.length;
    }),
    (it.prototype.fireUndoSizeChanged = function () {
      null != this.undoCallback &&
        this.undoCallback({ undoSize: this.undoStack.length });
    }),
    (it.prototype.registUndoSizeChanged = function (t) {
      this.undoCallback = t;
    });
  var nt = { Editing: it };
  const rt = b.fabric;
  (rt.ArrowLine = rt.util.createClass(rt.Line, {
    type: "arrowLine",
    initialize: function (t, e) {
      e || (e = {}), this.callSuper("initialize", t, e);
    },
    toObject: function () {
      return rt.util.object.extend(this.callSuper("toObject"), {
        heads: this.heads,
      });
    },
    drawTemp: function (t, e, i, n) {
      let r = 2 * this.strokeWidth,
        o = 4 * this.strokeWidth,
        s = i - t,
        a = n - e,
        h = Math.atan2(a, s),
        l = n - Math.sin(h) * o,
        c = i - Math.cos(h) * o,
        u = l - Math.sin(Math.PI / 2 - h) * r,
        f = c + Math.cos(Math.PI / 2 - h) * r,
        d = l - Math.sin(Math.PI / 2 - h) * r * 0.5,
        g = c + Math.cos(Math.PI / 2 - h) * r * 0.5,
        p = l + Math.sin(Math.PI / 2 - h) * r,
        m = c - Math.cos(Math.PI / 2 - h) * r,
        v = l + Math.sin(Math.PI / 2 - h) * r * 0.5,
        y = c - Math.cos(Math.PI / 2 - h) * r * 0.5;
      this.ctx.save(),
        this.ctx.beginPath(),
        this.ctx.moveTo(t, e),
        this.ctx.lineTo(g, d),
        this.ctx.lineTo(f, u),
        this.ctx.lineTo(i, n),
        this.ctx.lineTo(m, p),
        this.ctx.lineTo(y, v),
        this.ctx.lineTo(t, e),
        (this.ctx.strokeStyle = this.stroke),
        (this.ctx.lineWidth = this.strokeWidth),
        this.ctx.stroke(),
        (this.ctx.fillStyle = this.stroke),
        this.ctx.fill(),
        this.ctx.closePath(),
        this.ctx.restore();
    },
    _render: function (t) {
      this.ctx = t;
      let e = this.calcLinePoints();
      this.drawTemp(e.x1, e.y1, e.x2, e.y2);
    },
    drawArrow: function (t, e, i, n) {
      this.ctx.save(),
        n &&
          (this.ctx.translate(e, i),
          this.ctx.rotate(t),
          this.ctx.beginPath(),
          this.ctx.moveTo(0, 0),
          this.ctx.lineTo(
            (-15 * this.strokeWidth) / 8,
            (15 * this.strokeWidth) / 8
          ),
          this.ctx.lineTo(
            (-15 * this.strokeWidth) / 8,
            (-15 * this.strokeWidth) / 8
          ),
          this.ctx.closePath()),
        (this.ctx.fillStyle = this.stroke),
        this.ctx.fill(),
        this.ctx.restore();
    },
  })),
    (rt.ArrowLine.fromObject = function (t, e) {
      e && e(new rt.ArrowLine([t.x1, t.y1, t.x2, t.y2], t));
    }),
    (rt.ArrowLine.async = !0);
  var ot = { ArrowLine: rt.ArrowLine };
  const st = b.fabric;
  let at = window.ratio,
    ht = window.userClipPath;
  st.MosaicBrush = st.util.createClass(st.BaseBrush, {
    width: 10,
    density: 1,
    dotWidth: 2,
    dotWidthVariance: 1,
    randomOpacity: !1,
    optimizeOverlapping: !0,
    initialize: function (t) {
      (this.canvas = t),
        (this.sprayChunks = []),
        (at = window.ratio),
        (ht = window.userClipPath);
    },
    onMouseDown: function (t) {
      (this.sprayChunks.length = 0),
        this.canvas.clearContext(this.canvas.contextTop),
        this._setShadow(),
        this.addSprayChunk(t),
        this.render(this.sprayChunkPoints);
    },
    onMouseMove: function (t) {
      (!0 === this.limitedToCanvasSize && this._isOutSideCanvas(t)) ||
        (this.addSprayChunk(t), this.render(this.sprayChunkPoints));
    },
    onMouseUp: function () {
      var t = this.canvas.renderOnAddRemove;
      this.canvas.renderOnAddRemove = !1;
      for (var e = [], i = 0, n = this.sprayChunks.length; i < n; i++)
        for (var r = this.sprayChunks[i], o = 0, s = r.length; o < s; o++) {
          var a = new st.Rect({
            width: r[o].width,
            height: r[o].width,
            left: r[o].x + 1,
            top: r[o].y + 1,
            originX: "center",
            originY: "center",
            fill: r[o].fill,
          });
          e.push(a);
        }
      this.optimizeOverlapping && (e = this._getOptimizedRects(e));
      var h = new st.Group(e);
      this.shadow && h.set("shadow", new st.Shadow(this.shadow)),
        this.canvas.fire("before:path:created", { path: h }),
        this.canvas.add(h),
        this.canvas.fire("path:created", { path: h }),
        this.canvas.clearContext(this.canvas.contextTop),
        this._resetShadow(),
        (this.canvas.renderOnAddRemove = t),
        this.canvas.requestRenderAll();
    },
    _getOptimizedRects: function (t) {
      var e,
        i,
        n,
        r = {};
      for (i = 0, n = t.length; i < n; i++)
        r[(e = t[i].left + "" + t[i].top)] || (r[e] = t[i]);
      var o = [];
      for (e in r) o.push(r[e]);
      return o;
    },
    render: function (t) {
      var e,
        i,
        n = this.canvas.contextTop;
      for (
        n.fillStyle = this.color,
          this._saveAndTransform(n),
          e = 0,
          i = t.length;
        e < i;
        e++
      ) {
        var r = t[e];
        void 0 !== r.opacity && (n.globalAlpha = r.opacity),
          (n.fillStyle = r.fill),
          n.fillRect(r.x, r.y, r.width, r.width);
      }
      n.restore();
    },
    _render: function () {
      var t,
        e,
        i = this.canvas.contextTop;
      for (
        i.fillStyle = this.color,
          this._saveAndTransform(i),
          t = 0,
          e = this.sprayChunks.length;
        t < e;
        t++
      )
        this.render(this.sprayChunks[t]);
      i.restore();
    },
    getRandomColor: function () {
      let t = [
        "#F8F9F9",
        "#F4F6F6",
        "#F2F4F4",
        "#F2F3F4",
        "#EAEDED",
        "#F2F4F4",
        "#E5E7E9",
        "#D5DBDB",
        "#CCD1D1",
        "#D7DBDD",
        "#BFC9CA",
        "#B2BABB",
      ];
      return t[Math.floor(Math.random() * t.length)];
    },
    imageSource: null,
    canvasGetColor: null,
    rgbToHex: function (t, e, i) {
      return (
        "#" +
        (16777216 + ((t << 16) | (e << 8) | (i << 0)))
          .toString(16)
          .toUpperCase()
          .slice(1)
      );
    },
    getImageData: function (t, e, i, n) {
      if (null != this.canvasGetColor) {
        let r = t * at,
          o = e * at;
        if (null != this.canvasGetColor) {
          return this.canvasGetColor.getContext("2d").getImageData(r, o, i, n)
            .data;
        }
      }
      return null;
    },
    getImageDataAvg: function (t, e, i, n) {
      if (null != this.canvasGetColor) {
        let r = t * at,
          o = e * at;
        if (null != this.canvasGetColor) {
          let t = this.canvasGetColor
              .getContext("2d")
              .getImageData(r - i / 2, o - n / 2, i, n).data,
            e = 0,
            s = 0,
            a = 0,
            h = t.length / 4;
          for (let i = 0; i < h; i++)
            (e += t[4 * i + 0]), (s += t[4 * i + 1]), (a += t[4 * i + 2]);
          return [e / h, s / h, a / h, 255];
        }
      }
      return null;
    },
    addSprayChunk: function (t) {
      (this.sprayChunkPoints = []),
        null == this.imageSource &&
          ((this.imageSource = new Image()),
          (this.imageSource.src = window.imgUrl)),
        null == this.canvasGetColor &&
          ((this.canvasGetColor = document.createElement("canvas")),
          (this.canvasGetColor.width = this.imageSource.width),
          (this.canvasGetColor.height = this.imageSource.height),
          this.canvasGetColor
            .getContext("2d")
            .drawImage(
              this.imageSource,
              0,
              0,
              this.imageSource.width,
              this.imageSource.height
            ));
      let e = ht.left + t.x,
        i = ht.top + t.y,
        n = this.getImageDataAvg(e, i, 3, 3),
        r = new st.Point(t.x, t.y);
      (r.width = this.width / 2),
        (r.fill = this.rgbToHex(n[0], n[1], n[2])),
        this.sprayChunkPoints.push(r),
        this.sprayChunks.push(this.sprayChunkPoints);
    },
  });
  var lt = { MosaicBrush: st.MosaicBrush };
  const ct = nt.Editing,
    ut = ot.ArrowLine,
    ft = S.Utils;
  let dt = 0,
    gt = null,
    pt = null,
    mt = null,
    vt = null,
    yt = null,
    _t = null;
  const xt = "pen",
    bt = "mosaic",
    Ct = "arrow",
    St = "eclipse",
    wt = "rect",
    Tt = "text";
  let Ot,
    kt = null,
    Pt = wt,
    Et = "#F3493B",
    At = 4,
    jt = 24;
  function Mt(t) {
    null != t &&
      "circle" == t.type &&
      (t.on("selected", function (e) {
        (t.visible = !0),
          null != t.startLine
            ? (t.startLine.endCircle.visible = !0)
            : null != t.endLine && (t.endLine.startCircle.visible = !0);
      }),
      t.on("deselected", function (e) {
        (t.visible = !1),
          null != t.startLine
            ? (t.startLine.endCircle.visible = !1)
            : null != t.endLine && (t.endLine.startCircle.visible = !1);
      }),
      t.on("moving", function (e) {
        Ot.getActiveObject() == t &&
          (null != t.startLine &&
            (t.startLine.set({
              x1: t.left + 4,
              y1: t.top + 4,
              x2: t.startLine.endCircle.left + 4,
              y2: t.startLine.endCircle.top + 4,
            }),
            t.startLine.setCoords()),
          null != t.endLine &&
            (t.endLine.set({
              x1: t.endLine.startCircle.left + 4,
              y1: t.endLine.startCircle.top + 4,
              x2: t.left + 4,
              y2: t.top + 4,
            }),
            t.endLine.setCoords()));
      }));
  }
  function Dt(t) {
    (null != t.isTemp && t.isTemp) ||
      (t.saveState(),
      ct
        .getInst()
        .set({
          action: "modified",
          target: t,
          state: JSON.stringify(t._stateProperties),
        }));
  }
  var Ft = {
    startPaint: function (t) {
      (Ot = t),
        (Ot.isDrawingMode = !1),
        (Ot.freeDrawingBrush.color = "#E34F51"),
        (Ot.freeDrawingBrush.width = 5),
        (Ot.freeDrawingCursor = Ot.defaultCursor),
        console.log(_t),
        (null != _t && Ot.contains(_t)) ||
          (console.log("添加新画布"),
          (_t = new fabric.Rect({
            id: dt++,
            left: 0,
            top: 0,
            width: Ot.width - 2,
            height: Ot.height - 2,
            fill: "transparent",
            stroke: "#4285f4",
            strokeWidth: 2,
            padding: 0,
          })),
          ft.setFsControls(_t, !0),
          (_t.perPixelTargetFind = !1),
          (_t.hasBorders = !1),
          (_t.isTemp = !0),
          (_t.evented = !1),
          Ot.add(_t)),
        Ot.on("object:added", function (t) {
          let e = t.target;
          (null != e.isTemp && e.isTemp) ||
            (e.saveState(),
            ct
              .getInst()
              .set({
                action: "added",
                target: e,
                state: JSON.stringify(e._stateProperties),
              }));
        }),
        Ot.on("object:modified", function (t) {
          let e = t.target;
          (null != e.isTemp && e.isTemp) ||
            (e.saveState(),
            ct
              .getInst()
              .set({
                action: "modified",
                target: e,
                state: JSON.stringify(e._stateProperties),
              }));
        }),
        Ot.on({
          "mouse:down:before": (t) => {
            null != t.target || (Pt != xt && Pt != bt)
              ? (Ot.isDrawingMode = !1)
              : ((Ot.isDrawingMode = !0),
                (Ot.freeDrawingBrush.color = Et),
                (Ot.freeDrawingBrush.width = Pt == bt ? At + 8 : At));
          },
        }),
        Ot.on({
          "path:created": (t) => {
            console.log("-----path:created-------"),
              (t.path.id = dt++),
              (t.path.selectable = !0),
              (t.path.hasControls = !1),
              (t.path.hasBorders = !1),
              Pt == bt
                ? ((t.path.evented = !1),
                  (t.path.selectable = !1),
                  (t.path.lockMovementX = !0),
                  (t.path.lockMovementY = !0))
                : ((t.path.lockMovementX = !1), (t.path.lockMovementY = !1)),
              (t.path.perPixelTargetFind = !0),
              t.path.saveState(),
              (Ot.isDrawingMode = !1);
          },
        }),
        Ot.on("object:scaling", (t) => {
          t.target, 0;
        }),
        Ot.on("object:moving", (t) => {
          t.target, 0;
        }),
        Ot.on("mouse:down", function (t) {
          var e;
          if (
            null == t.target &&
            ((gt = Ot.getPointer(t.e)),
            Pt == wt &&
              ((pt = new fabric.Rect({
                id: dt++,
                left: gt.x,
                top: gt.y,
                width: 0,
                height: 0,
                fill: "transparent",
                stroke: Et,
                strokeWidth: At,
              })),
              ft.setFsControls(pt, !0),
              (pt.isTemp = !0)),
            Pt == St &&
              ((mt = new fabric.Ellipse({
                id: dt++,
                left: gt.x,
                top: gt.y,
                rx: 0,
                ry: 0,
                fill: "transparent",
                stroke: Et,
                strokeWidth: At,
              })),
              ft.setFsControls(mt, !0),
              (mt.isTemp = !0)),
            Pt == Ct &&
              ((vt = new ut([gt.x, gt.y, gt.x, gt.y], {
                strokeWidth: At,
                fill: Et,
                stroke: Et,
                originX: "center",
                originY: "center",
                hasBorders: !1,
                hasControls: !1,
                objectCaching: !1,
                perPixelTargetFind: !0,
                heads: [1, 0],
              })),
              (vt.isTemp = !0),
              ft.setFsControls(vt, !0),
              null != (e = vt) &&
                "arrowLine" == e.type &&
                (e.on("selected", function (t) {
                  null == e.startCircle
                    ? ((e.startCircle = new fabric.Circle({
                        left: e.x1 - 4,
                        top: e.y1 - 4,
                        radius: 4,
                        fill: "rgb(51, 112, 255, 1.0)",
                        stroke: "white",
                        strokeWidth: 1,
                        hasControls: !1,
                        hasBorders: !1,
                      })),
                      (e.startCircle.isTemp = !0),
                      (e.startCircle.startLine = e),
                      Mt(e.startCircle),
                      Ot.add(e.startCircle))
                    : (e.startCircle.visible = !0),
                    null == e.endCircle
                      ? ((e.endCircle = new fabric.Circle({
                          left: e.x2 - 4,
                          top: e.y2 - 4,
                          radius: 4,
                          fill: "rgb(51, 112, 255, 1.0)",
                          stroke: "white",
                          strokeWidth: 1,
                          hasControls: !1,
                          hasBorders: !1,
                        })),
                        (e.endCircle.isTemp = !0),
                        (e.endCircle.endLine = e),
                        Mt(e.endCircle),
                        Ot.add(e.endCircle))
                      : (e.endCircle.visible = !0);
                }),
                e.on("deselected", function (t) {
                  null != e.startCircle && (e.startCircle.visible = !1),
                    null != e.endCircle && (e.endCircle.visible = !1);
                }),
                e.on("moving", function (t) {
                  e.setCoords();
                  let i = e.calcLinePoints();
                  null != e.startCircle &&
                    (e.startCircle.set({
                      left:
                        e.getBoundingRect().left +
                        e.getBoundingRect().width / 2 +
                        i.x1 -
                        4,
                      top:
                        e.getBoundingRect().top +
                        e.getBoundingRect().height / 2 +
                        i.y1 -
                        4,
                    }),
                    e.startCircle.setCoords()),
                    null != e.endCircle &&
                      (e.endCircle.set({
                        left:
                          e.getBoundingRect().left +
                          e.getBoundingRect().width / 2 +
                          i.x2 -
                          4,
                        top:
                          e.getBoundingRect().top +
                          e.getBoundingRect().height / 2 +
                          i.y2 -
                          4,
                      }),
                      e.endCircle.setCoords()),
                    Ot.renderAll();
                }))),
            Pt == Tt)
          ) {
            if (null != yt) return void (yt = null);
            (yt = new fabric.IText("  ", {
              id: dt++,
              left: gt.x,
              top: gt.y,
              fontSize: jt,
              textAlign: "left",
              fill: Et,
              borderColor: "rgb(51, 112, 255, 1.0)",
            })),
              (yt.selectable = !0),
              (yt.hasControls = !1),
              (yt.hasBorders = !0),
              (yt.lockMovementX = !1),
              (yt.lockMovementY = !1),
              yt.setControlsVisibility({ mtr: !1 }),
              Ot.add(yt),
              Ot.setActiveObject(yt),
              yt.enterEditing(),
              yt.hiddenTextarea.focus();
          }
        }),
        Ot.on("mouse:move", function (t) {
          let e = Ot.getPointer(t.e);
          Pt == wt &&
            null != pt &&
            e.x - gt.x > 0 &&
            e.y - gt.y > 0 &&
            (pt.set("width", e.x - gt.x).set("height", e.y - gt.y),
            Math.abs(e.x - gt.x) > 5 || Math.abs(e.y - gt.y) > 5
              ? Ot.contains(pt) || Ot.add(pt)
              : Ot.contains(pt) && Ot.remove(pt),
            Ot.renderAll()),
            Pt == St &&
              null != mt &&
              e.x - gt.x > 0 &&
              e.y - gt.y > 0 &&
              (mt.set("rx", (e.x - gt.x) / 2).set("ry", (e.y - gt.y) / 2),
              Math.abs(e.x - gt.x) > 5 || Math.abs(e.y - gt.y) > 5
                ? Ot.contains(mt) || Ot.add(mt)
                : Ot.contains(mt) && Ot.remove(mt),
              Ot.renderAll()),
            Pt == Ct &&
              null != vt &&
              (vt.set({ x2: e.x, y2: e.y }),
              Math.abs(e.x - gt.x) > 5 || Math.abs(e.y - gt.y) > 5
                ? Ot.contains(vt) || Ot.add(vt)
                : Ot.contains(vt) && Ot.remove(vt),
              Ot.renderAll());
        }),
        Ot.on("mouse:up", function (t) {
          if (
            (Pt == wt &&
              (null != pt &&
                (Ot.contains(pt) && Ot.remove(pt),
                (pt.isTemp = !1),
                pt.setCoords(),
                Ot.add(pt)),
              (pt = null)),
            Pt == St &&
              (null != mt &&
                (Ot.contains(mt) && Ot.remove(mt),
                (mt.isTemp = !1),
                mt.setCoords(),
                Ot.add(mt)),
              (mt = null)),
            Pt == Ct)
          ) {
            if (null != vt) {
              if (
                (Ot.contains(vt) && Ot.remove(vt),
                Math.pow(vt.x2 - vt.x1, 2) <= 1 &&
                  Math.pow(vt.y2 - vt.y1, 2) <= 1)
              )
                return void (vt = null);
              vt.setControlsVisibility({
                mtr: !1,
                ml: !1,
                mr: !1,
                mt: !1,
                mb: !1,
                tl: !1,
                tr: !1,
                bl: !1,
                br: !1,
              }),
                (vt.isTemp = !1),
                vt.setCoords(),
                Ot.add(vt);
            }
            vt = null;
          }
          Ot.renderAll();
        });
    },
    stopPaint: function () {
      return _t;
    },
    deleteActiveObject: function () {
      let t = Ot.getActiveObject();
      null != t && Ot.contains(t) && (Ot.remove(t), Ot.renderAll());
    },
    redo: function () {},
    undo: function () {
      Ot.discardActiveObject();
      let t = ct.getInst().prev();
      null != t &&
        null != t.target &&
        ("added" == t.action
          ? Ot.remove(t.target)
          : (t.target.setOptions(JSON.parse(t.state)), t.target.setCoords()),
        Ot.renderAll());
    },
    setDrawMode: function (t) {
      if (((Pt = t), Pt == xt || Pt == bt))
        if ((null == kt && (kt = Ot.freeDrawingBrush), Pt == xt))
          (Ot.isDrawingMode = !0),
            (Ot.freeDrawingBrush = kt),
            (Ot.freeDrawingBrush.color = Et),
            (Ot.freeDrawingBrush.width = At);
        else if (Pt == bt) {
          Ot.isDrawingMode = !0;
          let t = new (0, lt.MosaicBrush)(Ot);
          (t.color = Et), (t.width = At + 8), (Ot.freeDrawingBrush = t);
        }
    },
    setLineColor: function (t) {
      (Et = t),
        null != Ot.getActiveObject() &&
          (Dt(Ot.getActiveObject()),
          "i-text" == Ot.getActiveObject().type
            ? Ot.getActiveObject().set({ fill: Et })
            : Ot.getActiveObject().set({ stroke: Et }),
          Ot.getActiveObject().setCoords(),
          Ot.renderAll());
    },
    setLineWidth: function (t) {
      (At = t),
        null != Ot.getActiveObject() &&
          (Dt(Ot.getActiveObject()),
          Ot.getActiveObject().set({ strokeWidth: At }),
          Ot.getActiveObject().setCoords(),
          Ot.renderAll());
    },
    setTextFontSize: function (t) {
      (jt = t),
        null != Ot.getActiveObject() &&
          (Dt(Ot.getActiveObject()),
          Ot.getActiveObject().set({ fontSize: jt }),
          Ot.getActiveObject().setCoords(),
          Ot.renderAll());
    },
    undoSize: function () {
      return ct.getInst().undoSize();
    },
    registUndoSizeChanged: function (t) {
      ct.getInst().registUndoSizeChanged(t);
    },
  };
  const { remote: It, ipcRenderer: Lt } = s.default;
  let Rt = x.parse(u.location.search),
    Bt = JSON.parse(Rt["?data"]);
  const Xt = "init";
  (window.userClipPath = null), (window.originImg = null);
  let Wt = window.originImg,
    Yt = window.userClipPath,
    zt = Bt.index;
  function Ut(t) {
    Lt.send("screenshot-close-event", { screenIndex: zt, saveToClipboard: t });
  }
  Lt.on("screenshot-close-all-event", (t, e) => {
    qt.close();
  }),
    document.addEventListener("mousedown", function (t) {
      2 == t.button && Ut(!1);
    }),
    document.addEventListener("keydown", function (t) {
      switch (t.code) {
        case "Delete":
          null != se && Ft.deleteActiveObject();
          break;
        case "Escape":
          Ut(!1);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          et.setKeydown(t);
      }
    }),
    document.addEventListener("keyup", function (t) {
      switch (t.code) {
        case "ShiftLeft":
        case "ShiftRight":
          et.setKeyup(t);
          break;
        case "KeyZ":
          t.ctrlKey && null != se && Ft.undo();
      }
    });
  var Ht = s.default.remote.getGlobal("varsForWindow");
  let Gt = Ht.allMonitors[zt],
    Nt = Ht.desktopWindowInfo;
  window.screenshotCursorPos = Ht.screenshotCursorPos;
  let Vt = window.screenshotCursorPos;
  (window.imgUrl = URL.createObjectURL(
    new Blob([Ht.allMonitors[zt].imgBuf.buffer], { type: "image/png" })
  )),
    (document.getElementById("screenshot-img").src = window.imgUrl);
  const qt = It.getCurrentWindow();
  window.ratio = window.devicePixelRatio;
  let Kt = window.ratio;
  function Jt() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  function Zt() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }
  console.log("Width:  " + Jt()), console.log("Height: " + Zt());
  const $t = Jt(),
    Qt = Zt(),
    te = b.fabric,
    ee = S.Utils;
  document.querySelectorAll("input[name='drawType']").forEach((t) => {
    t.addEventListener("change", (t) => {
      console.log(t.target.value),
        (he = t.target.value),
        he != Xt && ae(),
        Ft.setDrawMode(he);
    });
  }),
    document.querySelectorAll("input[name='lineColor']").forEach((t) => {
      t.addEventListener("change", (t) => {
        Ft.setLineColor(t.target.value);
      });
    }),
    document.querySelectorAll("input[name='lineWidth']").forEach((t) => {
      t.addEventListener("change", (t) => {
        Ft.setLineWidth(parseInt(t.target.value));
      });
    });
  let ie = window.createSelector({
    data: window.fontSizeOptionList,
    defaultSelect: 2,
    onchange: (t) => {
      Ft.setTextFontSize(parseInt(t.value));
    },
  });
  document.getElementById("brush_font_size").appendChild(ie),
    document.getElementById("btnUndo").addEventListener("click", function () {
      Ft.undo();
    }),
    document
      .getElementById("btnSaveToFile")
      .addEventListener("click", function () {
        const { dialog: t } = s.default.remote;
        function e(t, e = 2) {
          return t.toString().padStart(e, "0");
        }
        let i = new Date(),
          n =
            "khl" +
            i.getFullYear() +
            e(i.getMonth() + 1) +
            e(i.getDate()) +
            e(i.getHours()) +
            e(i.getMinutes()) +
            e(i.getMilliseconds(), 3) +
            ".png";
        Lt.send("screenshot-save-event"),
          t
            .showSaveDialog({
              title: "保存图片",
              defaultPath: n,
              buttonLabel: "确认保存",
              filters: [{ name: "图片", extensions: ["png"] }],
            })
            .then((t) => {
              console.log(t),
                t.canceled ||
                  (null == se && ae(),
                  (Yt = window.userClipPath = Ft.stopPaint()),
                  ee.saveClipToFile(se, Yt, t.filePath).then(
                    () => {
                      Ut(!1);
                    },
                    (t) => {
                      console.log(t), Ut(!1);
                    }
                  ));
            })
            .catch((t) => {
              console.log(t);
            });
      }),
    document.getElementById("btnExit").addEventListener("click", function () {
      Ut(!1);
    }),
    document
      .getElementById("btnSaveToClipboard")
      .addEventListener("click", function () {
        null == se && ae(),
          (Yt = window.userClipPath = Ft.stopPaint()),
          ee.saveClipToClipboard(se, Yt),
          Ut(!0);
      });
  const ne = new te.Canvas("js-canvas", {
    width: $t,
    height: Qt,
    selection: !1,
    preserveObjectStacking: !0,
    renderOnAddRemove: !1,
  });
  let re = Math.floor($t * window.ratio),
    oe = Math.floor(Qt * window.ratio);
  ne.setDimensions({ width: re, height: oe });
  let se = null;
  function ae() {
    if (
      ((Yt = window.userClipPath = et.stopClip()), null != Yt && null == se)
    ) {
      se = new te.Canvas("js-canvas-paint", {
        width:
          Math.round(Yt.getBoundingRect().width * window.ratio) / window.ratio,
        height:
          Math.round(Yt.getBoundingRect().height * window.ratio) / window.ratio,
        selection: !1,
        preserveObjectStacking: !0,
      });
      let t = document.getElementById("js-canvas-paint-div");
      (t.style.visibility = "visible"),
        console.log(Yt.getBoundingRect()),
        (function (t, e) {
          se.contains(e) && se.remove(e);
          (e.evented = !1),
            (e.selectable = !1),
            (e.hasControls = !1),
            (e.hasBorders = !1),
            (e.perPixelTargetFind = !1),
            (e.isTemp = !0),
            e.set({
              left: 0,
              top: 0,
              cropX: Math.round(t.left * Kt),
              cropY: Math.round(t.top * Kt),
              width: Math.round(t.width * Kt),
              height: Math.round(t.height * Kt),
              padding: 0,
              strokeWidth: 0,
              scaleX: 1 / Kt,
              scaleY: 1 / Kt,
            }),
            se.contains(e) || se.add(e);
        })(Yt.getBoundingRect(), Wt),
        (t.style.position = "absolute"),
        (t.style.left =
          Math.round(Yt.getBoundingRect().left * window.ratio) / window.ratio +
          "px"),
        (t.style.top =
          Math.round(Yt.getBoundingRect().top * window.ratio) / window.ratio +
          "px"),
        Ft.startPaint(se),
        Lt.send("screenshot-clip-event", {
          screenIndex: zt,
          eventType: "BeginPaint",
          eventArgs: null,
        });
    }
  }
  Ft.registUndoSizeChanged((t) => {
    console.log("---undosizechanged--"), console.log(t.undoSize);
    let e = document.getElementById("btnUndo");
    t.undoSize ? e.classList.remove("disabled") : e.classList.add("disabled");
  }),
    Lt.on("screenshot-clip-event", (t, e) => {
      e.screenIndex != zt &&
        ("BeginClip" == e.eventType && et.clearClip(),
        "BeginPaint" == e.eventType && et.setEnableClip(!1));
    });
  let he = Xt;
  te.Image.fromURL(imgUrl, function (t) {
    (Wt = window.originImg = t),
      et.startClip(ne, Gt, Nt, Vt, (t) => {
        Lt.send("screenshot-clip-event", {
          screenIndex: zt,
          eventType: t.eventType,
          eventArgs: t.eventArgs,
        });
      });
  });
})(electron, jsdom, jsdomLiving, jsdomUtils, nodefs);
