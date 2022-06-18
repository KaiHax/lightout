const { app: e } = require("electron"),
  l = require("path"),
  { dateFilter: o, dateFilterDay: r } =
    (require("fs"), require("../utils/dateFilter"));
require("crypto"),
  require("../utils/uploadFormData"),
  require("../log/logger").appLogger.label("[xlog]");
l.resolve(e.getPath("userData"), "xlogs");
module.exports = {
  uid: "",
  token: "",
  uploaded: !1,
  nodeXlog: null,
  time_span: 0,
  init: (e, l, o) => {},
  install: () => {},
  _write: (e, l, o) => {},
  info: (e, l = "voice") => {},
  uninstall: () => {},
  _upload: (e) => {},
  uploadToDay: () => {},
  _batchUpload: (e, l) => {},
  uploadPrevTodayLog: () => {},
  uploadAll: (e) => {},
};
