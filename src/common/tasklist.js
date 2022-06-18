const e = require("events"),
  t = require("../log/logger").appLogger.label("[main]"),
  s = require("../addon/support"),
  o = require("../utils/requireAddon");
let r = { getAllProcessesInfos: () => [], getAllWindowsTitles: () => [] };
s.processWindows() && (r = o("node-process-windows").process_windows);
const { getAllProcessesInfos: n, getAllWindowsTitles: l } = r;
function c() {
  const e = n();
  let t = [];
  for (i = 0; i < e.length; i += 6) {
    let s = e[i + 1];
    t.push({
      ProcessId: e[i],
      ProcessName: s.substring(0, s.length - 4),
      Path: e[i + 2],
      Product: e[i + 3],
      Description: e[i + 4],
      StartTime: e[i + 5],
    });
  }
  return (
    (t = t.filter((e) => "Microsoft® Windows® Operating System" != e.Product)),
    t
  );
}
function a() {
  const e = l();
  let t = [];
  for (i = 0; i < e.length; i += 2) t.push({ pid: e[i], title: e[i + 1] });
  return t;
}
const d = [
  "svchost",
  "ApplicationFrameHost",
  "explorer",
  "kaiheila",
  "WindowsInternal.ComposableShell.Experiences.TextInput.InputApp",
  "Calculator",
  "ShellExperienceHost",
  "cmd",
  "SystemSettings",
];
function u() {
  let e = a(),
    t = {};
  e.forEach((e) => {
    let s = t[e.pid];
    s ? e.title && s.push(e.title) : (t[e.pid] = e.title ? [e.title] : []);
  });
  let s = c();
  return (
    (s = s.filter((e) => !d.includes(e.ProcessName))),
    s.forEach((e) => {
      (e.WindowTitleList = t[e.ProcessId] || []),
        (e.MainWindowTitle = e.WindowTitleList[0] || "");
    }),
    s
  );
}
const p = Object.create(new e());
p.isSupport = function () {
  return !0;
};
let g = 0;
(p.start = function () {
  t.info("[start tasklist]"),
    clearInterval(g),
    (g = setInterval(() => {
      let e = [];
      try {
        e = u();
      } catch (e) {
        t.error("[tasklist]", e);
      }
      this.emit("tasklist", e);
    }, 15e3));
}),
  (p.stop = () => {
    t.info("[stop tasklist]"), clearInterval(g);
  }),
  (p.getAllProcess = c),
  (p.getAllWindowTitle = a),
  (p.getWinProcess = u),
  (p.getAllProcessesInfosEx = () => r.getAllProcessesInfosEx()),
  (p.getProcessIdByNameAndCmd = (e, t) => {
    let s = (r.getAllProcessesInfosEx() || []).filter(
      (t) => t.name.indexOf(e) >= 0
    );
    if (s.length > 0)
      for (var i = 0; i < s.length; i++) {
        let e = r.getProcessInfoExByPid(s[i].pid);
        if (null != e.command_line && e.command_line.indexOf(t) >= 0)
          return e.pid;
      }
    return 0;
  }),
  (p.getAudioService = () => {
    const e = require("path");
    return p.getProcessIdByNameAndCmd(
      e.basename(process.execPath),
      "--utility-sub-type=audio.mojom.AudioService"
    );
  }),
  (module.exports = p);
