const { volume: e } = require("node-audio-windows"),
  { getVolume: o, setVolume: t, isMuted: c, setMute: s } = e,
  {
    getCaptureVolume: l,
    setCaptureVolume: n,
    isCaptureMuted: u,
    setCaptureMute: g,
  } = e,
  { getCaptureAgc: r, setCaptureAgc: d, isSupportCaptureAgc: a } = e,
  { getProcessVolume: p, setProcessVolume: v } = e,
  { getCaptureMicBoostLevel: m, setCaptureMicBoostLevel: C } = e,
  { getMediaDeviceInfo: I } = e,
  { getVolumeByDeviceId: B, setVolumeByDeviceId: y } = e,
  { getCaptureVolumeByDeviceId: A, setCaptureVolumeByDeviceId: D } = e,
  {
    getCaptureMicBoostLevelByDeviceId: V,
    setCaptureMicBoostLevelByDeviceId: f,
  } = e,
  {
    getCaptureAgcByDeviceId: M,
    setCaptureAgcByDeviceId: L,
    isSupportCaptureAgcByDeviceId: h,
  } = e,
  q = require("random");
console.log(
  "-----------------------麦克风加强：控制(by设备Id)--------------------------"
);
{
  let e = I(),
    o = [];
  for (i = 0; i < e.length; i += 3)
    o.push({ id: e[i], type: e[i + 1], name: e[i + 2] });
  for (devInfo of o)
    console.log(
      "设备id:" +
        devInfo.id +
        " 设备类型:" +
        devInfo.type +
        " 设备名称:" +
        devInfo.name
    );
  let t = o[1].id;
  {
    const e = A(t);
    console.log("麦克风音量:" + e);
    const o = q.float((min = 0), (max = 1));
    D(t, o), console.log("设置麦克风音量:" + o);
    const c = A(t);
    console.log("麦克风音量:" + c);
    const s = h(t);
    console.log("麦克风是否支持Agc:" + s);
    const l = M(t);
    console.log("麦克风Agc:" + l), L(t, !l), console.log("改变麦克风Agc:" + l);
    const n = M(t);
    console.log("麦克风Agc:" + n);
  }
  {
    const e = V(t);
    console.log("麦克风加强-最小值：" + e[0]),
      console.log("麦克风加强-最大值：" + e[1]),
      console.log("麦克风加强-步长：" + e[2]),
      console.log("麦克风加强-当前值：" + e[3]);
    const o = e[3] < e[1] ? e[3] + e[2] : e[3] - e[2];
    f(t, o), console.log("设置麦克风加强:" + o);
    const c = V(t);
    console.log("麦克风加强-当前值：" + c[3]);
  }
}
