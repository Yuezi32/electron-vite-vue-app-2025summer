import { d as c, p, i as t, e as u, u as r, j as i, o as d } from "./index-C7XPmmLS.js";
/* empty css               */
const f = /* @__PURE__ */ c({
  __name: "router",
  setup(m) {
    const { registeredInspector: s } = p(), a = t(() => {
      var e;
      return (e = s.value) == null ? void 0 : e.find((o) => o.packageName === "vue-router");
    }), n = t(() => {
      var e;
      return (e = a.value) == null ? void 0 : e.id;
    });
    return (e, o) => (d(), u(r(i), { id: r(n) }, null, 8, ["id"]));
  }
});
export {
  f as default
};
