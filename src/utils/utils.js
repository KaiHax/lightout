const { clipboard: e, nativeImage: r } = require("electron");
exports.copyImage = function (t) {
  const a = r.createFromDataURL(t);
  return e.writeImage(a);
};
