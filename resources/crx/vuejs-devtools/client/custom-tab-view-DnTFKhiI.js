import { d as r, y as m, i as a, R as l, S as i, T as p, e as _, u as f, U as b, o as d } from "./index-C7XPmmLS.js";
const R = /* @__PURE__ */ r({
  __name: "custom-tab-view",
  setup(v) {
    const o = l(), s = p(), { flattenedTabs: n } = m(), u = a(() => o.params.name), t = a(() => n.value.find((e) => u.value === e.name) || null);
    return i(() => {
      if (!t.value) {
        const e = setTimeout(() => {
          if (t.value) {
            clearTimeout(e);
            return;
          }
          s.replace("/overview");
        }, 2e3);
      }
    }), (e, T) => {
      const c = b;
      return d(), _(c, { tab: f(t) }, null, 8, ["tab"]);
    };
  }
});
export {
  R as default
};
