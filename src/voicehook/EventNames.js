module.exports = {
  EventNames: {
    setVolume: "voicehook-set-volume",
    getRuningMusic: "voicehook-getmusiclist",
    hook: "voicehook-hook",
    hookPort: "voicehook-hook-port",
    hookCallback: "voicehook-hook-callback",
    eventcb: "voicehook-eventcb",
    unhook: "voicehook-unhook",
    checkAccessFile: "voicehook-checkAccessFile",
    enableRecord: "voicehook-enableRecord",
  },
  EnumEventType: {
    hookResult: 0,
    hookExit: 1,
    volumeChange: 2,
    heartbeat: 3,
    pause: 101,
    resume: 102,
  },
};
