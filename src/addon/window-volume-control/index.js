const e = require("./volume_controller.node"),
  t = require("../../utils/requireAddon"),
  {
    process_windows: { getPidsByPPid: r },
  } = t("node-process-windows");
let c = [],
  u = [];
function o(e = "", t) {
  return u.find(
    (r) => (e.startsWith(r.name) || r.name.startsWith(e)) && t == r.type
  );
}
module.exports = {
  getMicVolume: () => {
    try {
      return Number(e.getCaptureVolume().toFixed(2));
    } catch (e) {
      return 0;
    }
  },
  setMicVolume: (t) => {
    try {
      e.setCaptureVolume(Number(t));
    } catch (e) {}
  },
  refreshDeviceList: () => {
    let t = e.getMediaDeviceInfo(),
      r = [];
    for (i = 0; i < t.length; i += 2)
      for (i = 0; i < t.length; i += 3)
        r.push({ id: t[i], type: t[i + 1], name: t[i + 2] });
    u = r;
  },
  getMicVolumeByLabel: (t) => {
    try {
      let r = o(t, "input");
      return r
        ? (console.log("[getMicVolumeByLabel]", r),
          e.getCaptureVolumeByDeviceId(r.id))
        : 0;
    } catch (e) {
      return 0;
    }
  },
  setMicVolumeByLabel: (t, r) => {
    try {
      let c = o(t, "input");
      c &&
        (e.setCaptureVolumeByDeviceId(c.id, Number(r)),
        e.setCaptureMuteByDeviceId(c.id, 0 == Number(r)));
    } catch (e) {}
  },
  getMicBoostByLabel: (t) => {
    let r = [0, 0, 0, 0];
    try {
      let c = o(t, "input");
      c && (r = e.getCaptureMicBoostLevelByDeviceId(c.id));
    } catch (e) {}
    return { min: r[0], max: r[1], step: r[2], value: r[3] };
  },
  setMicBoostByLabel: (t, r) => {
    try {
      let c = o(t, "input");
      c && e.setCaptureMicBoostLevelByDeviceId(c.id, Number(r));
    } catch (e) {}
  },
  getMicMute: () => {
    try {
      return e.isCaptureMuted();
    } catch (e) {
      return !1;
    }
  },
  setMicMute: (t) => {
    try {
      e.setCaptureMute(Boolean(t));
    } catch (e) {}
  },
  getMicMuteByLabel: (t) => {
    try {
      let r = o(t, "input");
      if (r) return e.isCaptureMutedByDeviceId(r.id);
    } catch (e) {}
  },
  seteMicMuteByLabel: (t, r) => {
    try {
      let c = o(t, "input");
      c && e.setCaptureMuteByDeviceId(c.id, Boolean(r));
    } catch (e) {}
  },
  isSupportMicAgc: () => {
    try {
      return e.isSupportCaptureAgc();
    } catch (e) {
      return !1;
    }
  },
  getMicAgc: () => {
    try {
      return e.getCaptureAgc();
    } catch (e) {
      return !1;
    }
  },
  setMicAgc: (t) => {
    try {
      e.setCaptureAgc(Boolean(t));
    } catch (e) {}
  },
  setMicAgcByLabel: (t, r) => {
    try {
      let c = o(t, "input");
      c && e.setCaptureAgcByDeviceId(c.id, Boolean(r));
    } catch (e) {}
  },
  setMicAgcAll: (t) => {
    try {
      u.forEach((r) => {
        "input" == r.type && e.setCaptureAgcByDeviceId(r.id, Boolean(t));
      });
    } catch (e) {}
  },
  refreshChildrenProcess: function () {
    let e = process.pid,
      t = r(e);
    c = t.map((e) => ({ pid: e }));
  },
  getSpeakerVolume: () => {
    let t = 0;
    return (
      c.some((r) => {
        try {
          t = e.getProcessVolume(Number(r.pid));
        } catch (e) {}
        return t;
      }),
      t
    );
  },
  setSpeakerVolume: (t) => {
    c.forEach((r) => {
      try {
        e.setProcessVolume(Number(r.pid), Number(t));
      } catch (e) {}
    });
  },
  getMicBoost: () => {
    let t = [];
    try {
      t = e.getCaptureMicBoostLevel();
    } catch (e) {}
    return t.length >= 4
      ? { min: t[0], max: t[1], step: t[2], value: t[3] }
      : null;
  },
  setMicBoost: (t) => {
    try {
      e.setCaptureMicBoostLevel(Number(t));
    } catch (e) {}
  },
  getAllProcessVolume: () => e.getAllProcessVolume(),
};
