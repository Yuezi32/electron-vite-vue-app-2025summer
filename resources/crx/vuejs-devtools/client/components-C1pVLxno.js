import { d as p, e as a, u as n, f as s, g as r, o as c, h as e } from "./index-B-XIiefs.js";
/* empty css               */
const d = /* @__PURE__ */ p({
  __name: "components",
  setup(m) {
    function o() {
      e.value.emit("toggle-panel", !1);
    }
    function t() {
      e.value.emit("toggle-panel", !0);
    }
    return (l, u) => (c(), a(n(r), {
      onOpenInEditor: n(s),
      onOnInspectComponentStart: o,
      onOnInspectComponentEnd: t
    }, null, 8, ["onOpenInEditor"]));
  }
});
export {
  d as default
};
