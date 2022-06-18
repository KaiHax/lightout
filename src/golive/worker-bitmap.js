var e,
  t = {
    validateDimension: function (e) {
      if (e <= 0 || e !== (0 | e))
        throw "YUV plane dimensions must be a positive integer";
    },
    validateOffset: function (e) {
      if (e < 0 || e !== (0 | e))
        throw "YUV plane offsets must be a non-negative integer";
    },
    format: function (e) {
      var t = e.width,
        r = e.height,
        i = e.chromaWidth || t,
        a = e.chromaHeight || r,
        n = e.cropLeft || 0,
        o = e.cropTop || 0,
        u = e.cropWidth || t - n,
        T = e.cropHeight || r - o,
        s = e.displayWidth || u,
        E = e.displayHeight || T;
      return (
        this.validateDimension(t),
        this.validateDimension(r),
        this.validateDimension(i),
        this.validateDimension(a),
        this.validateOffset(n),
        this.validateOffset(o),
        this.validateDimension(u),
        this.validateDimension(T),
        this.validateDimension(s),
        this.validateDimension(E),
        {
          width: t,
          height: r,
          chromaWidth: i,
          chromaHeight: a,
          cropLeft: n,
          cropTop: o,
          cropWidth: u,
          cropHeight: T,
          displayWidth: s,
          displayHeight: E,
        }
      );
    },
    allocPlane: function (e, r) {
      return (
        t.validateDimension(e),
        t.validateDimension(r),
        { bytes: new Uint8Array(e * r), stride: e }
      );
    },
    suitableStride: function (e) {
      t.validateDimension(e);
      var r = e % 4;
      return 0 == r ? e : e + (4 - r);
    },
    allocPlane: function (e, t, r, i, a) {
      var n, o;
      if (
        (this.validateDimension(e),
        this.validateDimension(t),
        (a = a || 0),
        (i = i || this.suitableStride(e)),
        this.validateDimension(i),
        i < e)
      )
        throw "Invalid input stride for YUV plane; must be larger than width";
      if (((n = i * t), r)) {
        if (r.length - a < n)
          throw "Invalid input buffer for YUV plane; must be large enough for stride times height";
        o = r.slice(a, a + n);
      } else (o = new Uint8Array(n)), (i = i || this.suitableStride(e));
      return { bytes: o, stride: i };
    },
    lumaPlane: function (e, t, r, i) {
      return this.allocPlane(e.width, e.height, t, r, i);
    },
    chromaPlane: function (e, t, r, i) {
      return this.allocPlane(e.chromaWidth, e.chromaHeight, t, r, i);
    },
    frame: function (e, t, r, i) {
      return {
        format: e,
        y: (t = t || this.lumaPlane(e)),
        u: (r = r || this.chromaPlane(e)),
        v: (i = i || this.chromaPlane(e)),
      };
    },
    copyPlane: function (e) {
      return { bytes: e.bytes.slice(), stride: e.stride };
    },
    copyFrame: function (e) {
      return {
        format: e.format,
        y: this.copyPlane(e.y),
        u: this.copyPlane(e.u),
        v: this.copyPlane(e.v),
      };
    },
    transferables: function (e) {
      return [e.y.bytes.buffer, e.u.bytes.buffer, e.v.bytes.buffer];
    },
  };
!(function e(t, r, i) {
  function a(o, u) {
    if (!r[o]) {
      if (!t[o]) {
        var T = "function" == typeof require && require;
        if (!u && T) return T(o, !0);
        if (n) return n(o, !0);
        var s = new Error("Cannot find module '" + o + "'");
        throw ((s.code = "MODULE_NOT_FOUND"), s);
      }
      var E = (r[o] = { exports: {} });
      t[o][0].call(
        E.exports,
        function (e) {
          return a(t[o][1][e] || e);
        },
        E,
        E.exports,
        e,
        t,
        r,
        i
      );
    }
    return r[o].exports;
  }
  for (
    var n = "function" == typeof require && require, o = 0;
    o < i.length;
    o++
  )
    a(i[o]);
  return a;
})(
  {
    1: [
      function (e, t, r) {
        t.exports = {
          vertex:
            "precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aLumaPosition;\nattribute vec2 aChromaPosition;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vLumaPosition = aLumaPosition;\n    vChromaPosition = aChromaPosition;\n}\n",
          fragment:
            "// inspired by https://github.com/mbebenita/Broadway/blob/master/Player/canvas.js\n\nprecision mediump float;\n\nuniform sampler2D uTextureY;\nuniform sampler2D uTextureCb;\nuniform sampler2D uTextureCr;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n   // Y, Cb, and Cr planes are uploaded as ALPHA textures.\n   float fY = texture2D(uTextureY, vLumaPosition).w;\n   float fCb = texture2D(uTextureCb, vChromaPosition).w;\n   float fCr = texture2D(uTextureCr, vChromaPosition).w;\n\n   // Premultipy the Y...\n   float fYmul = fY * 1.1643828125;\n\n   // And convert that to RGB!\n   gl_FragColor = vec4(\n     fYmul + 1.59602734375 * fCr - 0.87078515625,\n     fYmul - 0.39176171875 * fCb - 0.81296875 * fCr + 0.52959375,\n     fYmul + 2.017234375   * fCb - 1.081390625,\n     1\n   );\n}\n",
          vertexStripe:
            "precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aTexturePosition;\nvarying vec2 vTexturePosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vTexturePosition = aTexturePosition;\n}\n",
          fragmentStripe:
            "// extra 'stripe' texture fiddling to work around IE 11's poor performance on gl.LUMINANCE and gl.ALPHA textures\n\nprecision mediump float;\n\nuniform sampler2D uStripe;\nuniform sampler2D uTexture;\nvarying vec2 vTexturePosition;\nvoid main() {\n   // Y, Cb, and Cr planes are mapped into a pseudo-RGBA texture\n   // so we can upload them without expanding the bytes on IE 11\n   // which doesn't allow LUMINANCE or ALPHA textures\n   // The stripe textures mark which channel to keep for each pixel.\n   // Each texture extraction will contain the relevant value in one\n   // channel only.\n\n   float fLuminance = dot(\n      texture2D(uStripe, vTexturePosition),\n      texture2D(uTexture, vTexturePosition)\n   );\n\n   gl_FragColor = vec4(0, 0, 0, fLuminance);\n}\n",
        };
      },
      {},
    ],
    2: [
      function (e, t, r) {
        function i(e, t) {
          throw new Error("abstract");
        }
        (i.prototype.drawFrame = function (e) {
          throw new Error("abstract");
        }),
          (i.prototype.clear = function () {
            throw new Error("abstract");
          }),
          (t.exports = i);
      },
      {},
    ],
    3: [
      function (e, t, r) {
        var i = e("./FrameSink.js"),
          a = e("./YCbCr.js");
        function n(e) {
          var t = e.getContext("2d", { alpha: !1 }),
            r = null,
            i = null,
            n = null;
          return (
            (this.drawFrame = function (o) {
              var u = o.format;
              (e.width === u.displayWidth && e.height === u.displayHeight) ||
                ((e.width = u.displayWidth), (e.height = u.displayHeight)),
                (null !== r && r.width == u.width && r.height == u.height) ||
                  (function (e, i) {
                    for (
                      var a = (r = t.createImageData(e, i)).data,
                        n = e * i * 4,
                        o = 0;
                      o < n;
                      o += 4
                    )
                      a[o + 3] = 255;
                  })(u.width, u.height),
                a.convertYCbCr(o, r.data);
              var T,
                s,
                E,
                f =
                  u.cropWidth != u.displayWidth ||
                  u.cropHeight != u.displayHeight;
              f
                ? (i ||
                    ((s = u.cropWidth),
                    (E = u.cropHeight),
                    (i = new OffscreenCanvas(s, E)),
                    (n = i.getContext("2d"))),
                  (T = n))
                : (T = t),
                T.putImageData(
                  r,
                  -u.cropLeft,
                  -u.cropTop,
                  u.cropLeft,
                  u.cropTop,
                  u.cropWidth,
                  u.cropHeight
                ),
                f && t.drawImage(i, 0, 0, u.displayWidth, u.displayHeight);
            }),
            (this.clear = function () {
              t.clearRect(0, 0, e.width, e.height);
            }),
            this
          );
        }
        (n.prototype = Object.create(i.prototype)), (t.exports = n);
      },
      { "./FrameSink.js": 2, "./YCbCr.js": 5 },
    ],
    4: [
      function (e, t, r) {
        var i = e("./FrameSink.js"),
          a = e("../build/shaders.js");
        function n(e) {
          var t,
            r,
            i = this,
            o = n.contextForCanvas(e);
          if (null === o) throw new Error("WebGL unavailable");
          function u(e, t) {
            var r = o.createShader(e);
            if (
              (o.shaderSource(r, t),
              o.compileShader(r),
              !o.getShaderParameter(r, o.COMPILE_STATUS))
            ) {
              var i = o.getShaderInfoLog(r);
              throw (
                (o.deleteShader(r),
                new Error("GL shader compilation for " + e + " failed: " + i))
              );
            }
            return r;
          }
          var T,
            s,
            E,
            f,
            h,
            c,
            m,
            l,
            d,
            R,
            p = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
            _ = {},
            v = {},
            A = {};
          function g(e, t) {
            return (_[e] && !t) || (_[e] = o.createTexture()), _[e];
          }
          function x(e, t, r, i, a) {
            var u = !_[e] || t,
              T = g(e, t);
            if ((o.activeTexture(o.TEXTURE0), n.stripe)) {
              var s = !_[e + "_temp"] || t,
                E = g(e + "_temp", t);
              o.bindTexture(o.TEXTURE_2D, E),
                s
                  ? (o.texParameteri(
                      o.TEXTURE_2D,
                      o.TEXTURE_WRAP_S,
                      o.CLAMP_TO_EDGE
                    ),
                    o.texParameteri(
                      o.TEXTURE_2D,
                      o.TEXTURE_WRAP_T,
                      o.CLAMP_TO_EDGE
                    ),
                    o.texParameteri(
                      o.TEXTURE_2D,
                      o.TEXTURE_MIN_FILTER,
                      o.NEAREST
                    ),
                    o.texParameteri(
                      o.TEXTURE_2D,
                      o.TEXTURE_MAG_FILTER,
                      o.NEAREST
                    ),
                    o.texImage2D(
                      o.TEXTURE_2D,
                      0,
                      o.RGBA,
                      r / 4,
                      i,
                      0,
                      o.RGBA,
                      o.UNSIGNED_BYTE,
                      a
                    ))
                  : o.texSubImage2D(
                      o.TEXTURE_2D,
                      0,
                      0,
                      0,
                      r / 4,
                      i,
                      o.RGBA,
                      o.UNSIGNED_BYTE,
                      a
                    );
              var f = _[e + "_stripe"],
                h = !f || t;
              h && (f = g(e + "_stripe", t)),
                o.bindTexture(o.TEXTURE_2D, f),
                h &&
                  (o.texParameteri(
                    o.TEXTURE_2D,
                    o.TEXTURE_WRAP_S,
                    o.CLAMP_TO_EDGE
                  ),
                  o.texParameteri(
                    o.TEXTURE_2D,
                    o.TEXTURE_WRAP_T,
                    o.CLAMP_TO_EDGE
                  ),
                  o.texParameteri(
                    o.TEXTURE_2D,
                    o.TEXTURE_MIN_FILTER,
                    o.NEAREST
                  ),
                  o.texParameteri(
                    o.TEXTURE_2D,
                    o.TEXTURE_MAG_FILTER,
                    o.NEAREST
                  ),
                  o.texImage2D(
                    o.TEXTURE_2D,
                    0,
                    o.RGBA,
                    r,
                    1,
                    0,
                    o.RGBA,
                    o.UNSIGNED_BYTE,
                    (function (e) {
                      if (A[e]) return A[e];
                      for (
                        var t = e, r = new Uint32Array(t), i = 0;
                        i < t;
                        i += 4
                      )
                        (r[i] = 255),
                          (r[i + 1] = 65280),
                          (r[i + 2] = 16711680),
                          (r[i + 3] = 4278190080);
                      return (A[e] = new Uint8Array(r.buffer));
                    })(r)
                  ));
            } else
              o.bindTexture(o.TEXTURE_2D, T),
                u
                  ? (o.texParameteri(
                      o.TEXTURE_2D,
                      o.TEXTURE_WRAP_S,
                      o.CLAMP_TO_EDGE
                    ),
                    o.texParameteri(
                      o.TEXTURE_2D,
                      o.TEXTURE_WRAP_T,
                      o.CLAMP_TO_EDGE
                    ),
                    o.texParameteri(
                      o.TEXTURE_2D,
                      o.TEXTURE_MIN_FILTER,
                      o.LINEAR
                    ),
                    o.texParameteri(
                      o.TEXTURE_2D,
                      o.TEXTURE_MAG_FILTER,
                      o.LINEAR
                    ),
                    o.texImage2D(
                      o.TEXTURE_2D,
                      0,
                      o.ALPHA,
                      r,
                      i,
                      0,
                      o.ALPHA,
                      o.UNSIGNED_BYTE,
                      a
                    ))
                  : o.texSubImage2D(
                      o.TEXTURE_2D,
                      0,
                      0,
                      0,
                      r,
                      i,
                      o.ALPHA,
                      o.UNSIGNED_BYTE,
                      a
                    );
          }
          function P(e, t, i, a) {
            var n = _[e];
            o.useProgram(r);
            var u = v[e];
            (u && !t) ||
              (o.activeTexture(o.TEXTURE0),
              o.bindTexture(o.TEXTURE_2D, n),
              o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE),
              o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE),
              o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, o.LINEAR),
              o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, o.LINEAR),
              o.texImage2D(
                o.TEXTURE_2D,
                0,
                o.RGBA,
                i,
                a,
                0,
                o.RGBA,
                o.UNSIGNED_BYTE,
                null
              ),
              (u = v[e] = o.createFramebuffer())),
              o.bindFramebuffer(o.FRAMEBUFFER, u),
              o.framebufferTexture2D(
                o.FRAMEBUFFER,
                o.COLOR_ATTACHMENT0,
                o.TEXTURE_2D,
                n,
                0
              );
            var m = _[e + "_temp"];
            o.activeTexture(o.TEXTURE1),
              o.bindTexture(o.TEXTURE_2D, m),
              o.uniform1i(c, 1);
            var l = _[e + "_stripe"];
            o.activeTexture(o.TEXTURE2),
              o.bindTexture(o.TEXTURE_2D, l),
              o.uniform1i(h, 2),
              o.bindBuffer(o.ARRAY_BUFFER, T),
              o.enableVertexAttribArray(s),
              o.vertexAttribPointer(s, 2, o.FLOAT, !1, 0, 0),
              o.bindBuffer(o.ARRAY_BUFFER, E),
              o.enableVertexAttribArray(f),
              o.vertexAttribPointer(f, 2, o.FLOAT, !1, 0, 0),
              o.viewport(0, 0, i, a),
              o.drawArrays(o.TRIANGLES, 0, p.length / 2),
              o.bindFramebuffer(o.FRAMEBUFFER, null);
          }
          function b(e, r, i) {
            o.activeTexture(r),
              o.bindTexture(o.TEXTURE_2D, _[e]),
              o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE),
              o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE),
              o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, o.LINEAR),
              o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, o.LINEAR),
              o.uniform1i(o.getUniformLocation(t, e), i);
          }
          function U(e, t) {
            var r = u(o.VERTEX_SHADER, e),
              i = u(o.FRAGMENT_SHADER, t),
              a = o.createProgram();
            if (
              (o.attachShader(a, r),
              o.attachShader(a, i),
              o.linkProgram(a),
              !o.getProgramParameter(a, o.LINK_STATUS))
            ) {
              var n = o.getProgramInfoLog(a);
              throw (
                (o.deleteProgram(a),
                new Error("GL program linking failed: " + n))
              );
            }
            return a;
          }
          return (
            (i.drawFrame = function (u) {
              var _ = u.format,
                v =
                  !t ||
                  e.width !== _.displayWidth ||
                  e.height !== _.displayHeight;
              if (
                (v &&
                  ((e.width = _.displayWidth),
                  (e.height = _.displayHeight),
                  i.clear()),
                t ||
                  (function () {
                    if (n.stripe) {
                      (r = U(a.vertexStripe, a.fragmentStripe)),
                        o.getAttribLocation(r, "aPosition"),
                        (E = o.createBuffer());
                      var e = new Float32Array([
                        0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
                      ]);
                      o.bindBuffer(o.ARRAY_BUFFER, E),
                        o.bufferData(o.ARRAY_BUFFER, e, o.STATIC_DRAW),
                        (f = o.getAttribLocation(r, "aTexturePosition")),
                        (h = o.getUniformLocation(r, "uStripe")),
                        (c = o.getUniformLocation(r, "uTexture"));
                    }
                    (t = U(a.vertex, a.fragment)),
                      (T = o.createBuffer()),
                      o.bindBuffer(o.ARRAY_BUFFER, T),
                      o.bufferData(o.ARRAY_BUFFER, p, o.STATIC_DRAW),
                      (s = o.getAttribLocation(t, "aPosition")),
                      (m = o.createBuffer()),
                      (l = o.getAttribLocation(t, "aLumaPosition")),
                      (d = o.createBuffer()),
                      (R = o.getAttribLocation(t, "aChromaPosition"));
                  })(),
                v)
              ) {
                var A = function (e, t, r) {
                  var i = _.cropLeft / r,
                    a = (_.cropLeft + _.cropWidth) / r,
                    n = (_.cropTop + _.cropHeight) / _.height,
                    u = _.cropTop / _.height,
                    T = new Float32Array([i, n, a, n, i, u, i, u, a, n, a, u]);
                  o.bindBuffer(o.ARRAY_BUFFER, e),
                    o.bufferData(o.ARRAY_BUFFER, T, o.STATIC_DRAW);
                };
                A(m, 0, u.y.stride),
                  A(d, 0, (u.u.stride * _.width) / _.chromaWidth);
              }
              x("uTextureY", v, u.y.stride, _.height, u.y.bytes),
                x("uTextureCb", v, u.u.stride, _.chromaHeight, u.u.bytes),
                x("uTextureCr", v, u.v.stride, _.chromaHeight, u.v.bytes),
                n.stripe &&
                  (P("uTextureY", v, u.y.stride, _.height),
                  P("uTextureCb", v, u.u.stride, _.chromaHeight),
                  P("uTextureCr", v, u.v.stride, _.chromaHeight)),
                o.useProgram(t),
                o.viewport(0, 0, e.width, e.height),
                b("uTextureY", o.TEXTURE0, 0),
                b("uTextureCb", o.TEXTURE1, 1),
                b("uTextureCr", o.TEXTURE2, 2),
                o.bindBuffer(o.ARRAY_BUFFER, T),
                o.enableVertexAttribArray(s),
                o.vertexAttribPointer(s, 2, o.FLOAT, !1, 0, 0),
                o.bindBuffer(o.ARRAY_BUFFER, m),
                o.enableVertexAttribArray(l),
                o.vertexAttribPointer(l, 2, o.FLOAT, !1, 0, 0),
                o.bindBuffer(o.ARRAY_BUFFER, d),
                o.enableVertexAttribArray(R),
                o.vertexAttribPointer(R, 2, o.FLOAT, !1, 0, 0),
                o.drawArrays(o.TRIANGLES, 0, p.length / 2);
            }),
            (i.clear = function () {
              o.viewport(0, 0, e.width, e.height),
                o.clearColor(0, 0, 0, 0),
                o.clear(o.COLOR_BUFFER_BIT);
            }),
            i.clear(),
            i
          );
        }
        (n.stripe = !1),
          (n.contextForCanvas = function (e) {
            var t = {
              preferLowPowerToHighPerformance: !0,
              powerPreference: "low-power",
              failIfMajorPerformanceCaveat: !0,
              preserveDrawingBuffer: !0,
            };
            return (
              e.getContext("webgl", t) ||
              e.getContext("experimental-webgl", t) ||
              e.getContext("2d")
            );
          }),
          (n.isAvailable = function () {
            var e,
              t = document.createElement("canvas");
            (t.width = 1), (t.height = 1);
            try {
              e = n.contextForCanvas(t);
            } catch (e) {
              return !1;
            }
            if (e) {
              var r = e.TEXTURE0,
                i = e.createTexture(),
                a = new Uint8Array(16),
                o = n.stripe ? 1 : 4,
                u = n.stripe ? e.RGBA : e.ALPHA,
                T = n.stripe ? e.NEAREST : e.LINEAR;
              return (
                e.activeTexture(r),
                e.bindTexture(e.TEXTURE_2D, i),
                e.texParameteri(
                  e.TEXTURE_2D,
                  e.TEXTURE_WRAP_S,
                  e.CLAMP_TO_EDGE
                ),
                e.texParameteri(
                  e.TEXTURE_2D,
                  e.TEXTURE_WRAP_T,
                  e.CLAMP_TO_EDGE
                ),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, T),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, T),
                e.texImage2D(
                  e.TEXTURE_2D,
                  0,
                  u,
                  o,
                  4,
                  0,
                  u,
                  e.UNSIGNED_BYTE,
                  a
                ),
                !e.getError()
              );
            }
            return !1;
          }),
          (n.prototype = Object.create(i.prototype)),
          (t.exports = n);
      },
      { "../build/shaders.js": 1, "./FrameSink.js": 2 },
    ],
    5: [
      function (e, t, r) {
        var i = e("./depower.js");
        /**
         * Basic YCbCr->RGB conversion
         *
         * @author Brion Vibber <brion@pobox.com>
         * @copyright 2014-2019
         * @license MIT-style
         *
         * @param {YUVFrame} buffer - input frame buffer
         * @param {Uint8ClampedArray} output - array to draw RGBA into
         * Assumes that the output array already has alpha channel set to opaque.
         */ t.exports = {
          convertYCbCr: function (e, t) {
            var r = 0 | e.format.width,
              a = 0 | e.format.height,
              n = 0 | i(e.format.width / e.format.chromaWidth),
              o = 0 | i(e.format.height / e.format.chromaHeight),
              u = e.y.bytes,
              T = e.u.bytes,
              s = e.v.bytes,
              E = 0 | e.y.stride,
              f = 0 | e.u.stride,
              h = 0 | e.v.stride,
              c = r << 2,
              m = 0,
              l = 0,
              d = 0,
              R = 0,
              p = 0,
              _ = 0,
              v = 0,
              A = 0,
              g = 0,
              x = 0,
              P = 0,
              b = 0,
              U = 0,
              D = 0,
              y = 0,
              w = 0,
              L = 0,
              F = 0;
            if (1 == n && 1 == o)
              for (v = 0, A = c, F = 0, w = 0; w < a; w += 2) {
                for (
                  d = ((l = (w * E) | 0) + E) | 0,
                    R = (F * f) | 0,
                    p = (F * h) | 0,
                    y = 0;
                  y < r;
                  y += 2
                )
                  (g = 0 | T[R++]),
                    (b = (((409 * (x = 0 | s[p++])) | 0) - 57088) | 0),
                    (U = (((100 * g) | 0) + ((208 * x) | 0) - 34816) | 0),
                    (D = (((516 * g) | 0) - 70912) | 0),
                    (P = (298 * u[l++]) | 0),
                    (t[v] = (P + b) >> 8),
                    (t[v + 1] = (P - U) >> 8),
                    (t[v + 2] = (P + D) >> 8),
                    (v += 4),
                    (P = (298 * u[l++]) | 0),
                    (t[v] = (P + b) >> 8),
                    (t[v + 1] = (P - U) >> 8),
                    (t[v + 2] = (P + D) >> 8),
                    (v += 4),
                    (P = (298 * u[d++]) | 0),
                    (t[A] = (P + b) >> 8),
                    (t[A + 1] = (P - U) >> 8),
                    (t[A + 2] = (P + D) >> 8),
                    (A += 4),
                    (P = (298 * u[d++]) | 0),
                    (t[A] = (P + b) >> 8),
                    (t[A + 1] = (P - U) >> 8),
                    (t[A + 2] = (P + D) >> 8),
                    (A += 4);
                (v += c), (A += c), F++;
              }
            else
              for (_ = 0, w = 0; w < a; w++)
                for (
                  L = 0,
                    m = (w * E) | 0,
                    R = ((F = w >> o) * f) | 0,
                    p = (F * h) | 0,
                    y = 0;
                  y < r;
                  y++
                )
                  (g = 0 | T[R + (L = y >> n)]),
                    (b = (((409 * (x = 0 | s[p + L])) | 0) - 57088) | 0),
                    (U = (((100 * g) | 0) + ((208 * x) | 0) - 34816) | 0),
                    (D = (((516 * g) | 0) - 70912) | 0),
                    (P = (298 * u[m++]) | 0),
                    (t[_] = (P + b) >> 8),
                    (t[_ + 1] = (P - U) >> 8),
                    (t[_ + 2] = (P + D) >> 8),
                    (_ += 4);
          },
        };
      },
      { "./depower.js": 6 },
    ],
    6: [
      function (e, t, r) {
        t.exports =
          /**
           * Convert a ratio into a bit-shift count; for instance a ratio of 2
           * becomes a bit-shift of 1, while a ratio of 1 is a bit-shift of 0.
           *
           * @author Brion Vibber <brion@pobox.com>
           * @copyright 2016
           * @license MIT-style
           *
           * @param {number} ratio - the integer ratio to convert.
           * @returns {number} - number of bits to shift to multiply/divide by the ratio.
           * @throws exception if given a non-power-of-two
           */
          function (e) {
            for (var t = 0, r = e >> 1; 0 != r; ) (r >>= 1), t++;
            if (e !== 1 << t)
              throw (
                "chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got " +
                e
              );
            return t;
          };
      },
      {},
    ],
    7: [
      function (t, r, i) {
        var a = t("./FrameSink.js"),
          n = t("./SoftwareFrameSink.js"),
          o = t("./WebGLFrameSink.js");
        e = {
          FrameSink: a,
          SoftwareFrameSink: n,
          WebGLFrameSink: o,
          attach: function (e, t) {
            let r = {};
            return t ? new o(e, r) : new n(e, r);
          },
        };
      },
      {
        "./FrameSink.js": 2,
        "./SoftwareFrameSink.js": 3,
        "./WebGLFrameSink.js": 4,
      },
    ],
  },
  {},
  [7]
);
var r = null,
  i = null,
  a = null;
onmessage = function (n) {
  const o = n.data,
    { type: u, payload: T } = o;
  switch (u) {
    case "init_canvas": {
      const { width: n, height: o } = T;
      (r = new OffscreenCanvas(n / 2, o / 2)),
        (a = t.format({
          width: n,
          height: o,
          chromaWidth: n / 2,
          chromaHeight: o / 2,
          displayWidth: n / 2,
          displayHeight: o / 2,
        })),
        (i = e.attach(r, !0)),
        postMessage({ type: "inited" });
      break;
    }
    case "yuv_frame": {
      const { yuv_frame: e } = T,
        { width: n, height: o } = e;
      let u = e.data,
        s = t.lumaPlane(a, u, e.stride_y, 0),
        E = t.chromaPlane(a, u, e.stride_u, n * o),
        f = t.chromaPlane(a, u, e.stride_v, n * o * 1.25),
        h = t.frame(a, s, E, f);
      i.drawFrame(h),
        postMessage({ type: "buffer", data: r.transferToImageBitmap() });
    }
  }
};
