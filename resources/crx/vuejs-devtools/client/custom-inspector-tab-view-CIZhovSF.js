import { d as m, C as d, V as p, i as f, R as x, c as v, e as _, a as g, u as t, b as s, x as b, t as T, W as k, o as i, T as y } from "./index-B-XIiefs.js";
/* empty css               */
const B = {
  key: 0,
  flex: "~ col",
  "h-full": "",
  "items-center": "",
  "justify-center": ""
}, C = {
  flex: "~ col gap2",
  mxa: "",
  "items-center": ""
}, I = { "text-xl": "" }, R = { "text-rose": "" }, N = /* @__PURE__ */ m({
  __name: "custom-inspector-tab-view",
  setup(V) {
    const a = x(), u = y(), n = d(!1), c = p(), r = f(() => {
      var o;
      return (o = c.value.find((e) => e.name === a.params.name)) == null ? void 0 : o.pluginId;
    });
    function l() {
      n.value = !0;
      const o = setTimeout(() => {
        clearTimeout(o), u.replace("/overview");
      }, 2e3);
    }
    return (o, e) => t(n) ? (i(), v("div", B, [
      s("div", C, [
        e[1] || (e[1] = s("div", {
          "i-carbon-queued": "",
          mb2: "",
          "text-5xl": "",
          op50: ""
        }, null, -1)),
        s("p", I, [
          s("code", R, T(t(a).params.name), 1),
          e[0] || (e[0] = b(" not found "))
        ]),
        e[2] || (e[2] = s("p", {
          mt8: "",
          "animate-pulse": ""
        }, " Redirecting to overview page... ", -1))
      ])
    ])) : !t(n) && t(r) ? (i(), _(t(k), {
      key: 1,
      id: t(a).params.name,
      "plugin-id": t(r),
      onLoadError: l
    }, null, 8, ["id", "plugin-id"])) : g("", !0);
  }
});
export {
  N as default
};
