const net = require("net")
const address = require("address")
const t = [
    1, 7, 9, 11, 13, 15, 17, 19, 20, 21, 22, 23, 25, 37, 42, 43, 53, 69, 77, 79,
    87, 95, 101, 102, 103, 104, 109, 110, 111, 113, 115, 117, 119, 123, 135,
    137, 139, 143, 161, 179, 389, 427, 465, 512, 513, 514, 515, 526, 530, 531,
    532, 540, 548, 554, 556, 563, 587, 601, 636, 989, 990, 993, 995, 1719, 1720,
    1723, 2049, 3659, 4045, 5060, 5061, 6e3, 6566, 6665, 6666, 6667, 6668, 6669,
    6697, 10080,
  ];
function r(e, t, r) {
  const l = new net.Server();
  l.on("error", (n) => (l.close(), "ENOTFOUND" === n.code ? r(null, e) : r(n))),
    l.listen(e, t, () => ((e = l.address().port), l.close(), r(null, e)));
}
module.exports = (n, l, o) => {
  "function" == typeof n
    ? ((o = n), (n = null))
    : "function" == typeof l && ((o = l), (l = null));
  let u = (n = parseInt(n) || 0) + 10;
  if ((u > 65535 && (u = 65535), "function" == typeof o))
    return (function n(l, o, u, i) {
      function c(e, t) {
        (++o >= u || t) && ((o = 0), (u = 0)), n(l, o, u, i);
      }
      r(o, l, (n, l) =>
        t.includes(l)
          ? c(0, !0)
          : 0 === o
          ? i(n, l)
          : n
          ? c()
          : void r(o, null, (n) => {
              if (n) return c();
              r(o, "localhost", (n) => {
                if (n) return c();
                let t;
                try {
                  t = address.ip();
                } catch (n) {
                  return i(null, l);
                }
                r(o, t, (n, e) => {
                  if (n) return c();
                  i(null, e);
                });
              });
            })
      );
    })(l, n, u, o);
};
