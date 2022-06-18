const i = require("fs");
module.exports = {
  mkdirSync: function n(e) {
    const r = require("path");
    return (
      !!i.existsSync(e) || (n(r.dirname(e)) ? (i.mkdirSync(e), !0) : void 0)
    );
  },
  deleteRecursive: function n(e) {
    if (i.existsSync(e)) {
      const r = i.statSync(e);
      if (r.isFile()) return void i.unlinkSync(e);
      let c = [];
      r.isDirectory() &&
        ((c = i.readdirSync(e)),
        c.forEach(function (i) {
          n(e + "/" + i);
        }),
        i.rmdirSync(e));
    }
  },
};
