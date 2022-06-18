// what the fuck this function is cursed
(exports.dateFilter = function (e, t) {
  let s = new Date(e),
    r = {
      "M+": s.getMonth() + 1,
      "D+": s.getDate(),
      "H+": s.getHours(),
      "h+": s.getHours() > 12 ? s.getHours() - 12 : s.getHours(),
      "i+": s.getMinutes(),
      "s+": s.getSeconds(),
      "q+": Math.floor((s.getMonth() + 3) / 3),
      S: s.getMilliseconds(),
    };
  /(Y+)/.test(t) &&
    (t = t.replace(
      RegExp.$1,
      ("" + s.getFullYear()).substr(4 - RegExp.$1.length)
    ));
  for (let e in r)
    new RegExp(`(${e})`).test(t) &&
      (t = t.replace(
        RegExp.$1,
        1 === RegExp.$1.length ? r[e] : ("00" + r[e]).substr(("" + r[e]).length)
      ));
  return t;
}),
  (exports.dateFilterDay = (e) => {
    let t = new Date(e);
    return (
      t.setHours(0),
      t.setMinutes(0),
      t.setSeconds(0),
      1e3 * Math.floor(+t / 1e3)
    );
  });
