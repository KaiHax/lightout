!(function () {
  let e = "",
    t = document.getElementById("imgEditToolbar"),
    l = document.getElementById("brush_list");
  function n(l) {
    let n = l.target;
    (e = n.value),
      console.log("selectBrush", e),
      (function (e) {
        let l = e.value;
        document.getElementById("brush_font_size").style.display =
          "text" == l ? "flex" : "none";
        let n = document.getElementById("brush_weight");
        (n.style.display = "text" == l ? "none" : "flex"),
          (document.getElementById("brush_color").style.display =
            "mosaic" == l ? "none" : "flex"),
          "mosaic" == l
            ? n.classList.add("nosplit")
            : n.classList.remove("nosplit");
        const o = e.parentElement.getBoundingClientRect(),
          i = document.getElementById("brush_submenu");
        i.style = "display: flex;";
        const s = t.getBoundingClientRect();
        let a = o.left + o.width / 2 - i.clientWidth / 2,
          c = o.top + o.height + 16;
        a = Math.max(a, s.left);
        const d = document.getElementById("submenu_arrow");
        c + 50 > document.body.clientHeight
          ? ((c = o.top - i.clientHeight - 16),
            d.classList.remove("top"),
            d.classList.add("bottom"))
          : (d.classList.remove("bottom"), d.classList.add("top"));
        (i.style.left = a + "px"), (i.style.top = c + "px");
        let u = o.left + o.width / 2 - a - 6;
        d.style.left = u + "px";
      })(n);
  }
  l.querySelectorAll("input").forEach((e) => {
    e.addEventListener("change", n);
  }),
    (window.jsdom = null),
    (window.jsdomUtils = null),
    (window.jsdomLiving = null),
    (window.electron = require("electron")),
    (window.nodefs = require("fs")),
    (window.createSelector = function ({
      data: e,
      defaultSelect: t = 0,
      onchange: l,
    }) {
      const n = document.createElement("div");
      n.className = "selector";
      const o = document.createElement("div");
      (o.className = "selector-select"),
        (o.innerHTML = (e[t] || {}).label || "请选择");
      const i = document.createElement("div");
      (i.className = "selector-options"), (i.style.display = "none");
      let s = "";
      e.forEach((e) => {
        s += `<div class="selector-option-item" data-value="${e.value}">${e.label}</div>`;
      }),
        (i.innerHTML = s),
        n.appendChild(o),
        n.appendChild(i);
      let a = !1;
      o.addEventListener("click", (e) => {
        if ((e.stopPropagation(), a)) c();
        else {
          (a = !0),
            (i.style = "display: inline-block;"),
            document.body.addEventListener("click", d);
          let e = n.getBoundingClientRect();
          e.top + i.clientHeight > document.body.clientHeight
            ? (i.style.top = e.top - i.clientHeight - 4 + "px")
            : (i.style.top = e.top + e.height + 4 + "px");
        }
      });
      let c = () => {
          (a = !1),
            (i.style.display = "none"),
            document.body.removeEventListener("click", d);
        },
        d = ({ target: e }) => {
          i.contains(e) || c();
        };
      return (
        i.addEventListener("click", ({ target: t }) => {
          if (t.classList.contains("selector-option-item")) {
            let n = t.dataset.value,
              i = e.find((e) => e.value == n);
            (o.innerHTML = i.label), c(), l && l(i);
          }
        }),
        n
      );
    }),
    (window.fontSizeOptionList = [
      { value: 12, label: "12pt" },
      { value: 16, label: "16pt" },
      { value: 24, label: "24pt" },
      { value: 36, label: "36pt" },
      { value: 48, label: "48pt" },
      { value: 60, label: "60pt" },
      { value: 72, label: "72pt" },
      { value: 96, label: "96pt" },
    ]);
})();
