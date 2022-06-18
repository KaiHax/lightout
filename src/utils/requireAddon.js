const path = require("path"),
  fs = require("fs"),
  utils = require("../utils"),
  mystery = {};
module.exports = function (name) {
  const addonLocation = path.join(__dirname, "../addon", name);
  const o = "process_" + path.basename(addonLocation);
  const c = path.join(path.dirname(addonLocation), o);
  if ("electron.exe" === path.basename(process.execPath)) return require(addonLocation);
  if (mystery[c]) return require(c);
  if (fs.existsSync(addonLocation)) {
    if (fs.existsSync(c)) {
      const e = fs.statSync(c);
      if (e.isDirectory()) utils.deleteRecursive(c);
      else {
        if (!e.isFile()) throw Error("addon module file type error");
        fs.unlinkSync(c);
      }
    }
    fs.renameSync(addonLocation, c);
  }
  return (mystery[c] = !0), require(c);
};
