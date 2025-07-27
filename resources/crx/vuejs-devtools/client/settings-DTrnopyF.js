import { d as ee, y as le, z as B, A as te, B as E, C as oe, i as ne, c as m, l as a, b as l, F as x, D as $, u as t, a as U, q as d, E as O, M as F, G as p, H as se, I as ae, o as r, e as R, t as I, J as h, n as z, K as ie, L as D, N as ue, x as j, O as H, P as V, Q as de } from "./index-C7XPmmLS.js";
import { _ as re } from "./IconTitle.vue_vue_type_script_setup_true_lang-CzNAudTz.js";
const pe = {
  "h-full": "",
  "w-full": "",
  "of-auto": "",
  px8: "",
  py6: ""
}, me = {
  grid: "~ md:cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-x-10 gap-y-3",
  "max-w-300": ""
}, ve = { flex: "~ col gap-2" }, fe = {
  flex: "~ gap-2",
  "flex-auto": "",
  "items-center": "",
  "justify-start": ""
}, xe = {
  capitalize: "",
  op75: ""
}, ge = {
  flex: "~ gap-2",
  "flex-auto": "",
  "items-center": "",
  "justify-start": "",
  "pr-4": "",
  "text-sm": ""
}, ce = ["onClick"], be = ["onClick"], ye = ["onClick"], Ve = { flex: "~ col gap-2" }, ke = { flex: "~ gap2" }, Ce = { class: "flex items-center gap2 text-sm" }, we = { class: "flex items-center gap2 text-sm" }, Se = { class: "flex items-center gap2 text-sm" }, Te = { class: "flex items-center gap2 text-sm" }, Ue = { flex: "~ gap-2" }, De = /* @__PURE__ */ ee({
  __name: "settings",
  setup(Oe) {
    const { categorizedTabs: _ } = le(), L = ae(), q = L === "iframe" || L === "separate-window", { scale: k, interactionCloseOnOutsideClick: C, showPanel: w, minimizePanelInteractive: g, expandSidebar: S, scrollableSidebar: T, reduceMotion: G } = B(te(E)), J = [
      ["Tiny", 12 / 15],
      ["Small", 14 / 15],
      ["Normal", 1],
      ["Large", 16 / 15],
      ["Huge", 18 / 15]
    ], K = [
      ["Always", 0],
      ["1s", 1e3],
      ["2s", 2e3],
      ["5s", 5e3],
      ["10s", 1e4],
      ["Never", -1]
    ], { hiddenTabCategories: c, hiddenTabs: b, pinnedTabs: i } = B(E.value.tabSettings);
    function Q(n, e) {
      e ? b.value = b.value.filter((u) => u !== n) : b.value.push(n);
    }
    function W(n, e) {
      e ? c.value = c.value.filter((u) => u !== n) : c.value.push(n);
    }
    function X(n) {
      i.value.includes(n) ? i.value = i.value.filter((e) => e !== n) : i.value.push(n);
    }
    function N(n, e) {
      const u = i.value.indexOf(n);
      if (u === -1)
        return;
      const v = u + e;
      if (v < 0 || v >= i.value.length)
        return;
      const o = [...i.value];
      o.splice(u, 1), o.splice(v, 0, n), i.value = o;
    }
    const y = oe(!1);
    async function Y() {
      de(), window.location.reload();
    }
    const P = K.map(([n, e]) => ({ label: n, value: e })), Z = ne(() => {
      const n = P.find((e) => e.value === g.value);
      return `${(n == null ? void 0 : n.label) ?? "Select..."}`;
    });
    return (n, e) => {
      const u = re, v = ie;
      return r(), m("div", pe, [
        a(u, {
          class: "mb-5 text-xl op75",
          icon: "i-carbon-settings-adjust",
          text: "DevTools Settings"
        }),
        l("div", me, [
          l("div", ve, [
            e[12] || (e[12] = l("h3", { "text-lg": "" }, " Tabs ", -1)),
            (r(!0), m(x, null, $(t(_), ([{ name: o, hidden: f }, A]) => (r(), m(x, { key: o }, [
              A.length ? (r(), R(t(O), {
                key: 0,
                p3: "",
                flex: "~ col gap-1",
                class: z(f ? "op50 grayscale" : "")
              }, {
                default: d(() => [
                  a(t(h), {
                    "model-value": !t(c).includes(o),
                    class: "row-reverse flex hover:bg-active py1 pl2 pr1",
                    "onUpdate:modelValue": (s) => W(o, s)
                  }, {
                    default: d(() => [
                      l("div", fe, [
                        l("span", xe, I(o), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["model-value", "onUpdate:modelValue"]),
                  e[11] || (e[11] = l("div", {
                    "mx--1": "",
                    my1: "",
                    "h-1px": "",
                    border: "b base",
                    op75: ""
                  }, null, -1)),
                  (r(!0), m(x, null, $(A, (s) => (r(), R(t(h), {
                    key: s.name,
                    class: z(["row-reverse n-primary flex hover:bg-active py1 pl2 pr1", s.hidden ? "op35" : ""]),
                    "model-value": !t(b).includes(s.name),
                    "onUpdate:modelValue": (M) => Q(s.name, M)
                  }, {
                    default: d(() => [
                      l("div", ge, [
                        a(v, {
                          "text-xl": "",
                          icon: s.icon,
                          fallback: s.fallbackIcon,
                          title: s.title
                        }, null, 8, ["icon", "fallback", "title"]),
                        l("span", null, I(s.title), 1),
                        e[10] || (e[10] = l("div", { "flex-auto": "" }, null, -1)),
                        t(i).includes(s.name) ? (r(), m(x, { key: 0 }, [
                          l("button", {
                            class: "flex items-center hover:bg-active hover:op100 px1 py1 text-sm op65",
                            onClick: D(() => {
                              t(i).indexOf(s.name) !== 0 && N(s.name, -1);
                            }, ["stop"])
                          }, e[8] || (e[8] = [
                            l("div", { class: "i-carbon-caret-up" }, null, -1)
                          ]), 8, ce),
                          l("button", {
                            class: "flex items-center hover:bg-active hover:op100 px1 py1 text-sm op65",
                            onClick: D(() => {
                              t(i).indexOf(s.name) !== t(i).length - 1 && N(s.name, 1);
                            }, ["stop"])
                          }, e[9] || (e[9] = [
                            l("div", { class: "i-carbon-caret-down" }, null, -1)
                          ]), 8, be)
                        ], 64)) : U("", !0),
                        l("button", {
                          class: "flex items-center hover:bg-active hover:op100 px1 py1 text-sm op65",
                          onClick: D((M) => X(s.name), ["stop"])
                        }, [
                          l("div", {
                            class: z(t(i).includes(s.name) ? " i-carbon-pin-filled rotate--45" : " i-carbon-pin op45")
                          }, null, 2)
                        ], 8, ye)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["model-value", "class", "onUpdate:modelValue"]))), 128))
                ]),
                _: 2
              }, 1032, ["class"])) : U("", !0)
            ], 64))), 128))
          ]),
          l("div", Ve, [
            e[25] || (e[25] = l("h3", { "text-lg": "" }, " Appearance ", -1)),
            a(t(O), {
              p4: "",
              flex: "~ col gap-2"
            }, {
              default: d(() => [
                l("div", ke, [
                  a(t(ue), {
                    animation: !t(G)
                  }, {
                    default: d(({ isDark: o, toggle: f }) => [
                      a(t(F), {
                        outlined: "",
                        type: "primary",
                        onClick: f
                      }, {
                        default: d(() => [
                          e[13] || (e[13] = l("div", {
                            "i-carbon-sun": "",
                            "dark:i-carbon-moon": "",
                            "translate-y--1px": ""
                          }, null, -1)),
                          j(" " + I(o ? "Dark" : "Light"), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["animation"])
                ]),
                e[16] || (e[16] = l("div", {
                  "mx--2": "",
                  my1: "",
                  "h-1px": "",
                  border: "b base",
                  op75: ""
                }, null, -1)),
                e[17] || (e[17] = l("p", null, "UI Scale", -1)),
                l("div", null, [
                  a(t(H), {
                    modelValue: t(k),
                    "onUpdate:modelValue": e[0] || (e[0] = (o) => p(k) ? k.value = o : null),
                    options: J.map(([o, f]) => ({ label: o, value: f })),
                    "button-props": { outlined: !0 }
                  }, null, 8, ["modelValue", "options"])
                ]),
                e[18] || (e[18] = l("div", {
                  "mx--2": "",
                  my1: "",
                  "h-1px": "",
                  border: "b base",
                  op75: ""
                }, null, -1)),
                l("div", Ce, [
                  a(t(V), {
                    modelValue: t(S),
                    "onUpdate:modelValue": e[1] || (e[1] = (o) => p(S) ? S.value = o : null)
                  }, null, 8, ["modelValue"]),
                  e[14] || (e[14] = l("span", { op75: "" }, "Expand Sidebar", -1))
                ]),
                l("div", we, [
                  a(t(V), {
                    modelValue: t(T),
                    "onUpdate:modelValue": e[2] || (e[2] = (o) => p(T) ? T.value = o : null)
                  }, null, 8, ["modelValue"]),
                  e[15] || (e[15] = l("span", { op75: "" }, "Scrollable Sidebar", -1))
                ])
              ]),
              _: 1
            }),
            t(q) ? (r(), m(x, { key: 0 }, [
              e[23] || (e[23] = l("h3", {
                mt2: "",
                "text-lg": ""
              }, " Features ", -1)),
              a(t(O), {
                p4: "",
                flex: "~ col gap-2"
              }, {
                default: d(() => [
                  l("div", Se, [
                    a(t(V), {
                      modelValue: t(C),
                      "onUpdate:modelValue": e[3] || (e[3] = (o) => p(C) ? C.value = o : null)
                    }, null, 8, ["modelValue"]),
                    e[19] || (e[19] = l("span", { op75: "" }, "Close DevTools when clicking outside", -1))
                  ]),
                  l("div", Te, [
                    a(t(V), {
                      modelValue: t(w),
                      "onUpdate:modelValue": e[4] || (e[4] = (o) => p(w) ? w.value = o : null)
                    }, null, 8, ["modelValue"]),
                    e[20] || (e[20] = l("span", { op75: "" }, "Always show the floating panel", -1))
                  ]),
                  e[21] || (e[21] = l("div", {
                    "mx--2": "",
                    my1: "",
                    "h-1px": "",
                    border: "b base",
                    op75: ""
                  }, null, -1)),
                  e[22] || (e[22] = l("p", null, "Minimize floating panel on inactive", -1)),
                  l("div", null, [
                    a(t(H), {
                      modelValue: t(g),
                      "onUpdate:modelValue": e[5] || (e[5] = (o) => p(g) ? g.value = o : null),
                      "button-props": { outlined: !0 },
                      options: t(P),
                      placeholder: t(Z)
                    }, null, 8, ["modelValue", "options", "placeholder"])
                  ])
                ]),
                _: 1
              })
            ], 64)) : U("", !0),
            e[26] || (e[26] = l("h3", {
              mt2: "",
              "text-lg": ""
            }, " Debug ", -1)),
            l("div", Ue, [
              a(t(F), {
                outlined: "",
                type: "warning",
                onClick: e[6] || (e[6] = (o) => y.value = !0)
              }, {
                default: d(() => e[24] || (e[24] = [
                  l("div", { "i-carbon-breaking-change": "" }, null, -1),
                  j(" Reset Local Settings & State ")
                ])),
                _: 1
              }),
              a(t(se), {
                modelValue: t(y),
                "onUpdate:modelValue": e[7] || (e[7] = (o) => p(y) ? y.value = o : null),
                title: "Clear Local Settings & State",
                width: "40%",
                height: "200px",
                content: "Are you sure you to reset all local settings & state? Devtools will reload.",
                onConfirm: Y
              }, null, 8, ["modelValue"])
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  De as default
};
