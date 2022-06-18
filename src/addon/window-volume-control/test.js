const e = require("./volume_controller.node"),
  t = require("electron").remote,
  { getVolume: o, setVolume: r, isMuted: u, setMute: c } = e,
  {
    getCaptureVolume: l,
    setCaptureVolume: n,
    isCaptureMuted: s,
    setCaptureMute: m,
    getCaptureAgc: i,
    setCaptureAgc: a,
    isSupportCaptureAgc: g,
  } = e,
  { getProcessVolume: d, setProcessVolume: M } = e,
  { getCaptureMicBoostLevel: p, setCaptureMicBoostLevel: v } = e,
  { getMediaDeviceInfo: S } = e,
  { getVolumeByDeviceId: q, setVolumeByDeviceId: y } = e,
  T = document.querySelector("#mic-volume"),
  L = document.querySelector("#speaker-volume"),
  h = document.querySelector("#set-mic"),
  C = document.querySelector("#set-speaker"),
  H = document.querySelector("#mic-gain-support"),
  V = document.querySelector("#mic-gain"),
  k = document.querySelector("#set-mic-gain"),
  $ = document.querySelector("#current-volume"),
  b = document.querySelector("#set-current-volume"),
  B = document.querySelector("#mic-mute"),
  f = document.querySelector("#set-mic-mute"),
  A = document.querySelector("#mic-boost"),
  D = document.querySelector("#set-mic-boost");
let I = o();
(L.innerHTML = I),
  (C.value = I),
  (C.onchange = (e) => {
    let t = e.target.value;
    console.log("setSpeaker", t),
      r(Number(t)),
      setTimeout(() => {
        (I = o()), (L.innerHTML = I);
      }, 200);
  });
let N = null;
try {
  N = l();
} catch (e) {
  console.log(e);
}
(T.innerHTML = N),
  (h.value = N),
  (h.onchange = (e) => {
    let t = e.target.value;
    console.log("setMic", t),
      n(Number(t)),
      setTimeout(() => {
        (N = l()), (T.innerHTML = N);
      }, 200);
  });
let P = g();
H.innerHTML = P;
let w = i();
(V.innerHTML = w),
  (k.onchange = (e) => {
    let t = e.target.checked;
    console.log("setMicGain", t), a(t);
  });
const x = t.require("./addon/window-volume-control/index.js");
document.querySelector("#refresh").onclick = () => {
  x.refreshChildrenProcess();
};
let j = x.getSpeakerVolume();
($.innerHTML = j),
  (b.onchange = (e) => {
    let t = e.target.value;
    console.log("setCurrentVolume", t),
      x.setSpeakerVolume(t),
      setTimeout(() => {
        let e = x.getSpeakerVolume();
        $.innerHTML = e;
      }, 200);
  });
let G = s();
(B.innerHTML = G),
  (f.checked = G),
  (f.onchange = (e) => {
    let t = e.target.checked;
    m(t),
      setTimeout(() => {
        let e = s();
        B.innerHTML = e;
      }, 200);
  });
let _ = p();
(A.innerHTML = `最小值：${_[0]}, 最大值：${_[1]},步长：${_[2]},当前值：${_[3]}`),
  (D.min = _[0]),
  (D.max = _[1]),
  (D.step = _[2]),
  (D.value = _[3]),
  (D.onchange = (e) => {
    let t = e.target.value;
    console.log("setCaptureMicBoostLevel", t),
      v(Number(t)),
      setTimeout(() => {
        let e = p();
        A.innerHTML = `最小值：${e[0]}, 最大值：${e[1]},步长：${e[2]},当前值：${e[3]}`;
      }, 200);
  });
let z = S();
console.log(z);
