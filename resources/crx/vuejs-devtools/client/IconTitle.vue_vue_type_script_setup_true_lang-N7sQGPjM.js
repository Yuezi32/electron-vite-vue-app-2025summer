import { d as t, c as o, o as s, a, r as n, n as r, b as l, t as i } from "./index-B-XIiefs.js";
const c = {
  flex: "~ gap-3",
  "items-center": ""
}, u = /* @__PURE__ */ t({
  __name: "IconTitle",
  props: {
    icon: {},
    text: {}
  },
  setup(p) {
    return (e, d) => (s(), o("div", c, [
      e.icon ? (s(), o("div", {
        key: 0,
        class: r(e.icon)
      }, null, 2)) : a("", !0),
      n(e.$slots, "default", {}, () => [
        l("div", null, i(e.text), 1)
      ])
    ]));
  }
});
export {
  u as _
};
