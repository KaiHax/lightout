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
        s = e.cropHeight || r - o,
        T = e.displayWidth || u,
        f = e.displayHeight || s;
      return (
        this.validateDimension(t),
        this.validateDimension(r),
        this.validateDimension(i),
        this.validateDimension(a),
        this.validateOffset(n),
        this.validateOffset(o),
        this.validateDimension(u),
        this.validateDimension(s),
        this.validateDimension(T),
        this.validateDimension(f),
        {
          width: t,
          height: r,
          chromaWidth: i,
          chromaHeight: a,
          cropLeft: n,
          cropTop: o,
          cropWidth: u,
          cropHeight: s,
          displayWidth: T,
          displayHeight: f,
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
        var s = "function" == typeof require && require;
        if (!u && s) return s(o, !0);
        if (n) return n(o, !0);
        var T = new Error("Cannot find module '" + o + "'");
        throw ((T.code = "MODULE_NOT_FOUND"), T);
      }
      var f = (r[o] = { exports: {} });
      t[o][0].call(
        f.exports,
        function (e) {
          return a(t[o][1][e] || e);
        },
        f,
        f.exports,
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
          var t = e.getContext("2d"),
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
              var s,
                T,
                f,
                h =
                  u.cropWidth != u.displayWidth ||
                  u.cropHeight != u.displayHeight;
              h
                ? (i ||
                    ((T = u.cropWidth),
                    (f = u.cropHeight),
                    (i = new OffscreenCanvas(T, f)),
                    (n = i.getContext("2d"))),
                  (s = n))
                : (s = t),
                s.putImageData(
                  r,
                  -u.cropLeft,
                  -u.cropTop,
                  u.cropLeft,
                  u.cropTop,
                  u.cropWidth,
                  u.cropHeight
                ),
                h && t.drawImage(i, 0, 0, u.displayWidth, u.displayHeight);
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
          var s,
            T,
            f,
            h,
            E,
            c,
            m,
            l,
            d,
            R,
            p = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
            v = {},
            _ = {},
            A = {};
          function g(e, t) {
            return (v[e] && !t) || (v[e] = o.createTexture()), v[e];
          }
          function b(e, t, r, i, a) {
            var u = !v[e] || t,
              s = g(e, t);
            if ((o.activeTexture(o.TEXTURE0), n.stripe)) {
              var T = !v[e + "_temp"] || t,
                f = g(e + "_temp", t);
              o.bindTexture(o.TEXTURE_2D, f),
                T
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
              var h = v[e + "_stripe"],
                E = !h || t;
              E && (h = g(e + "_stripe", t)),
                o.bindTexture(o.TEXTURE_2D, h),
                E &&
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
              o.bindTexture(o.TEXTURE_2D, s),
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
          function x(e, t, i, a) {
            var n = v[e];
            o.useProgram(r);
            var u = _[e];
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
              (u = _[e] = o.createFramebuffer())),
              o.bindFramebuffer(o.FRAMEBUFFER, u),
              o.framebufferTexture2D(
                o.FRAMEBUFFER,
                o.COLOR_ATTACHMENT0,
                o.TEXTURE_2D,
                n,
                0
              );
            var m = v[e + "_temp"];
            o.activeTexture(o.TEXTURE1),
              o.bindTexture(o.TEXTURE_2D, m),
              o.uniform1i(c, 1);
            var l = v[e + "_stripe"];
            o.activeTexture(o.TEXTURE2),
              o.bindTexture(o.TEXTURE_2D, l),
              o.uniform1i(E, 2),
              o.bindBuffer(o.ARRAY_BUFFER, s),
              o.enableVertexAttribArray(T),
              o.vertexAttribPointer(T, 2, o.FLOAT, !1, 0, 0),
              o.bindBuffer(o.ARRAY_BUFFER, f),
              o.enableVertexAttribArray(h),
              o.vertexAttribPointer(h, 2, o.FLOAT, !1, 0, 0),
              o.viewport(0, 0, i, a),
              o.drawArrays(o.TRIANGLES, 0, p.length / 2),
              o.bindFramebuffer(o.FRAMEBUFFER, null);
          }
          function P(e, r, i) {
            o.activeTexture(r),
              o.bindTexture(o.TEXTURE_2D, v[e]),
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
              var v = u.format,
                _ =
                  !t ||
                  e.width !== v.displayWidth ||
                  e.height !== v.displayHeight;
              if (
                (_ &&
                  ((e.width = v.displayWidth),
                  (e.height = v.displayHeight),
                  i.clear()),
                t ||
                  (function () {
                    if (n.stripe) {
                      (r = U(a.vertexStripe, a.fragmentStripe)),
                        o.getAttribLocation(r, "aPosition"),
                        (f = o.createBuffer());
                      var e = new Float32Array([
                        0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
                      ]);
                      o.bindBuffer(o.ARRAY_BUFFER, f),
                        o.bufferData(o.ARRAY_BUFFER, e, o.STATIC_DRAW),
                        (h = o.getAttribLocation(r, "aTexturePosition")),
                        (E = o.getUniformLocation(r, "uStripe")),
                        (c = o.getUniformLocation(r, "uTexture"));
                    }
                    (t = U(a.vertex, a.fragment)),
                      (s = o.createBuffer()),
                      o.bindBuffer(o.ARRAY_BUFFER, s),
                      o.bufferData(o.ARRAY_BUFFER, p, o.STATIC_DRAW),
                      (T = o.getAttribLocation(t, "aPosition")),
                      (m = o.createBuffer()),
                      (l = o.getAttribLocation(t, "aLumaPosition")),
                      (d = o.createBuffer()),
                      (R = o.getAttribLocation(t, "aChromaPosition"));
                  })(),
                _)
              ) {
                var A = function (e, t, r) {
                  var i = v.cropLeft / r,
                    a = (v.cropLeft + v.cropWidth) / r,
                    n = (v.cropTop + v.cropHeight) / v.height,
                    u = v.cropTop / v.height,
                    s = new Float32Array([i, n, a, n, i, u, i, u, a, n, a, u]);
                  o.bindBuffer(o.ARRAY_BUFFER, e),
                    o.bufferData(o.ARRAY_BUFFER, s, o.STATIC_DRAW);
                };
                A(m, 0, u.y.stride),
                  A(d, 0, (u.u.stride * v.width) / v.chromaWidth);
              }
              b("uTextureY", _, u.y.stride, v.height, u.y.bytes),
                b("uTextureCb", _, u.u.stride, v.chromaHeight, u.u.bytes),
                b("uTextureCr", _, u.v.stride, v.chromaHeight, u.v.bytes),
                n.stripe &&
                  (x("uTextureY", _, u.y.stride, v.height),
                  x("uTextureCb", _, u.u.stride, v.chromaHeight),
                  x("uTextureCr", _, u.v.stride, v.chromaHeight)),
                o.useProgram(t),
                o.viewport(0, 0, e.width, e.height),
                P("uTextureY", o.TEXTURE0, 0),
                P("uTextureCb", o.TEXTURE1, 1),
                P("uTextureCr", o.TEXTURE2, 2),
                o.bindBuffer(o.ARRAY_BUFFER, s),
                o.enableVertexAttribArray(T),
                o.vertexAttribPointer(T, 2, o.FLOAT, !1, 0, 0),
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
            return e.getContext("webgl");
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
              s = e.u.bytes,
              T = e.v.bytes,
              f = 0 | e.y.stride,
              h = 0 | e.u.stride,
              E = 0 | e.v.stride,
              c = r << 2,
              m = 0,
              l = 0,
              d = 0,
              R = 0,
              p = 0,
              v = 0,
              _ = 0,
              A = 0,
              g = 0,
              b = 0,
              x = 0,
              P = 0,
              U = 0,
              D = 0,
              y = 0,
              F = 0,
              w = 0,
              L = 0;
            if (1 == n && 1 == o)
              for (_ = 0, A = c, L = 0, F = 0; F < a; F += 2) {
                for (
                  d = ((l = (F * f) | 0) + f) | 0,
                    R = (L * h) | 0,
                    p = (L * E) | 0,
                    y = 0;
                  y < r;
                  y += 2
                )
                  (g = 0 | s[R++]),
                    (P = (((409 * (b = 0 | T[p++])) | 0) - 57088) | 0),
                    (U = (((100 * g) | 0) + ((208 * b) | 0) - 34816) | 0),
                    (D = (((516 * g) | 0) - 70912) | 0),
                    (x = (298 * u[l++]) | 0),
                    (t[_] = (x + P) >> 8),
                    (t[_ + 1] = (x - U) >> 8),
                    (t[_ + 2] = (x + D) >> 8),
                    (_ += 4),
                    (x = (298 * u[l++]) | 0),
                    (t[_] = (x + P) >> 8),
                    (t[_ + 1] = (x - U) >> 8),
                    (t[_ + 2] = (x + D) >> 8),
                    (_ += 4),
                    (x = (298 * u[d++]) | 0),
                    (t[A] = (x + P) >> 8),
                    (t[A + 1] = (x - U) >> 8),
                    (t[A + 2] = (x + D) >> 8),
                    (A += 4),
                    (x = (298 * u[d++]) | 0),
                    (t[A] = (x + P) >> 8),
                    (t[A + 1] = (x - U) >> 8),
                    (t[A + 2] = (x + D) >> 8),
                    (A += 4);
                (_ += c), (A += c), L++;
              }
            else
              for (v = 0, F = 0; F < a; F++)
                for (
                  w = 0,
                    m = (F * f) | 0,
                    R = ((L = F >> o) * h) | 0,
                    p = (L * E) | 0,
                    y = 0;
                  y < r;
                  y++
                )
                  (g = 0 | s[R + (w = y >> n)]),
                    (P = (((409 * (b = 0 | T[p + w])) | 0) - 57088) | 0),
                    (U = (((100 * g) | 0) + ((208 * b) | 0) - 34816) | 0),
                    (D = (((516 * g) | 0) - 70912) | 0),
                    (x = (298 * u[m++]) | 0),
                    (t[v] = (x + P) >> 8),
                    (t[v + 1] = (x - U) >> 8),
                    (t[v + 2] = (x + D) >> 8),
                    (v += 4);
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
            return t ? new o(e, {}) : new n(e, {});
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
  a = null,
  n = null;
let o = null;
var u = !1,
  s = new OffscreenCanvas(1, 1),
  T = Boolean(s.getContext("webgl"));
function f() {
  n &&
    (function (e) {
      const { width: r, height: n } = e;
      let o = e.data,
        u = t.lumaPlane(a, o, e.stride_y, 0),
        s = t.chromaPlane(a, o, e.stride_u, r * n),
        T = t.chromaPlane(a, o, e.stride_v, r * n * 1.25),
        f = t.frame(a, u, s, T);
      i.drawFrame(f);
    })(n),
    (o = requestAnimationFrame(f));
}
onmessage = function (s) {
  const h = s.data,
    { type: E, payload: c } = h;
  switch (E) {
    case "init_canvas": {
      const { width: u, height: s, yuv_frame: E } = c;
      (r = h.canvas),
        (a = t.format({
          width: u,
          height: s,
          chromaWidth: u / 2,
          chromaHeight: s / 2,
          displayWidth: u / 2,
          displayHeight: s / 2,
        })),
        (i = e.attach(r, T)),
        postMessage({ type: "inited" }),
        cancelAnimationFrame(o),
        (o = requestAnimationFrame(f)),
        (n = E);
      break;
    }
    case "yuv_frame": {
      const { yuv_frame: e } = c;
      (n = e),
        u &&
          ((u = !1), cancelAnimationFrame(o), (o = requestAnimationFrame(f)));
      break;
    }
    case "stop":
      (u = !0), cancelAnimationFrame(o);
  }
};
