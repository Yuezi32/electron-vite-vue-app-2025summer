import { _ as g } from "./IconTitle.vue_vue_type_script_setup_true_lang-N7sQGPjM.js";
import { d as y, k as _, c as l, o as a, F as B, b as o, u as i, w as $, n as r, l as h, q as k, r as s, e as b, a as p, s as w, v as C, x as d, t as c, _ as x } from "./index-B-XIiefs.js";
const V = ["open"], N = { "text-base": "" }, S = {
  key: 0,
  "text-sm": "",
  op50: ""
}, z = /* @__PURE__ */ y({
  __name: "SectionBlock",
  props: {
    icon: {},
    text: {},
    description: {},
    containerClass: { default: "" },
    collapse: { type: Boolean, default: !0 },
    open: { type: Boolean, default: !0 },
    padding: { type: [Boolean, String], default: !0 }
  },
  setup(u) {
    const t = _(u, "open", void 0, { passive: !0 });
    function v(e) {
      t.value = e.target.open;
    }
    return (e, n) => {
      const f = g, m = C("lazy-show");
      return a(), l(B, null, [
        o("details", {
          open: i(t),
          onToggle: v
        }, [
          o("summary", {
            class: r(["cursor-pointer select-none hover:bg-active p4", e.collapse ? "" : "pointer-events-none"])
          }, [
            h(f, {
              icon: e.icon,
              text: e.text,
              "text-xl": "",
              transition: "",
              class: r(i(t) ? "op100" : "op60")
            }, {
              default: k(() => [
                o("div", null, [
                  o("div", N, [
                    s(e.$slots, "text", {}, () => [
                      d(c(e.text), 1)
                    ], !0)
                  ]),
                  e.description || e.$slots.description ? (a(), l("div", S, [
                    s(e.$slots, "description", {}, () => [
                      d(c(e.description), 1)
                    ], !0)
                  ])) : p("", !0)
                ]),
                n[0] || (n[0] = o("div", { class: "flex-auto" }, null, -1)),
                s(e.$slots, "actions", {}, void 0, !0),
                e.collapse ? (a(), b(i(w), {
                  key: 0,
                  icon: "i-carbon-chevron-down",
                  class: "chevron",
                  "cursor-pointer": "",
                  "place-self-start": "",
                  op75: "",
                  transition: "",
                  "duration-500": "",
                  "text-base": ""
                })) : p("", !0)
              ]),
              _: 3
            }, 8, ["icon", "text", "class"])
          ], 2),
          $((a(), l("div", {
            class: r(["flex flex-col flex-gap2 pb6 pt2", typeof e.padding == "string" ? e.padding : e.padding ? "px4" : ""])
          }, [
            s(e.$slots, "details", {}, void 0, !0),
            o("div", {
              class: r([e.containerClass, "mt1"])
            }, [
              s(e.$slots, "default", {}, void 0, !0)
            ], 2),
            s(e.$slots, "footer", {}, void 0, !0)
          ], 2)), [
            [m, i(t)]
          ])
        ], 40, V),
        n[1] || (n[1] = o("div", { class: "x-divider" }, null, -1))
      ], 64);
    };
  }
}), I = /* @__PURE__ */ x(z, [["__scopeId", "data-v-785c4654"]]);
export {
  I as _
};
