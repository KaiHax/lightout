const e = require("../addon/support"),
  t = require("../utils/requireAddon");
let o = {
  getMicVolume: () => 0,
  setMicVolume: (e) => {},
  refreshDeviceList: () => {},
  getMicVolumeByLabel: (e) => 0,
  setMicVolumeByLabel: (e, t) => {},
  getMicBoostByLabel: (e) => ({ min: 0, max: 0, step: 0, value: 0 }),
  setMicBoostByLabel: (e, t) => {},
  getMicMute: () => !1,
  setMicMute: (e) => {},
  getMicMuteByLabel: (e) => {},
  seteMicMuteByLabel: (e, t) => {},
  isSupportMicAgc: () => !1,
  getMicAgc: () => !1,
  setMicAgc: (e) => {},
  setMicAgcByLabel: (e, t) => {},
  setMicAgcAll: (e) => {},
  refreshChildrenProcess() {},
  getSpeakerVolume: () => 0,
  setSpeakerVolume: (e) => {},
  getMicBoost: () => ({ min: 0, max: 0, step: 0, value: 0 }),
  setMicBoost: (e) => {},
  getAllProcessVolume: () => {},
};
e.volumeControl() && (o = t("window-volume-control")), (module.exports = o);
