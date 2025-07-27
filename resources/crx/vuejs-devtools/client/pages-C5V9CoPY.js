import { d as T, c as r, o, b as n, l as _, u as e, ai as F, C as x, i as b, ad as A, e as $, t as M, q as y, F as k, D as V, n as I, L as z, a as h, aj as j, M as J, x as E, ak as K, al as L, Y, am as S, f as q, Z as G, an as W, a0 as X, h as D, $ as O, ao as Z, G as H, ae as Q, ag as U } from "./index-B-XIiefs.js";
import { _ as ee } from "./SectionBlock-Baq-oFWF.js";
const te = { "p-2": "" }, ne = { class: "flex items-center justify-between" }, oe = /* @__PURE__ */ T({
  __name: "RouteMetaDetail",
  props: {
    meta: {}
  },
  emits: ["close"],
  setup(R) {
    return (i, u) => (o(), r("div", te, [
      n("div", ne, [
        u[1] || (u[1] = n("span", { class: "font-500" }, "Route meta detail", -1)),
        n("div", {
          class: "i-carbon-close cursor-pointer p1 $ui-text",
          onClick: u[0] || (u[0] = (g) => i.$emit("close"))
        })
      ]),
      _(e(F), {
        code: JSON.stringify(i.meta, null, 2),
        lang: "json",
        lines: ""
      }, null, 8, ["code"])
    ]));
  }
}), ae = {
  block: "",
  "cursor-pointer": ""
}, se = { p2: "" }, le = ["onSubmit"], re = {
  flex: "~",
  "items-center": "",
  p2: "",
  "text-sm": "",
  "font-mono": ""
}, ie = { key: 1 }, ue = /* @__PURE__ */ T({
  __name: "RoutePathItem",
  props: {
    route: {}
  },
  emits: ["navigate"],
  setup(R, { emit: i }) {
    const u = R, g = i;
    function f(t) {
      return t.split(/(:\w+[?*+]?(?:\([^)]*\))?[?*+]?)/).filter(Boolean);
    }
    const c = x([]), p = b(() => f(u.route.path));
    A(() => {
      c.value = Array.from({ length: p.value.length }, () => "");
    });
    const d = b(() => p.value.map((t, a) => t[0] === ":" ? c.value[a] : t).join("").replace(/\/+/g, "/")), s = b(() => u.route.path.includes(":"));
    function m() {
      g("navigate", d.value);
    }
    return (t, a) => e(s) ? (o(), $(e(K), { key: 1 }, {
      popper: y(({ hide: l }) => [
        n("div", se, [
          n("form", {
            flex: "~ col",
            onSubmit: z(() => {
              m(), l();
            }, ["prevent"])
          }, [
            e(s) ? (o(), r(k, { key: 0 }, [
              a[0] || (a[0] = n("div", {
                px2: "",
                "text-sm": "",
                op50: ""
              }, " Fill params and navigate: ", -1)),
              n("div", re, [
                (o(!0), r(k, null, V(e(p), (v, w) => (o(), r(k, { key: w }, [
                  v[0] === ":" ? (o(), $(e(j), {
                    key: 0,
                    modelValue: e(c)[w],
                    "onUpdate:modelValue": (N) => e(c)[w] = N,
                    "n-sm": "",
                    "w-20": "",
                    placeholder: v.slice(1)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : (o(), r("span", ie, M(v), 1))
                ], 64))), 128))
              ])
            ], 64)) : h("", !0),
            _(e(J), {
              block: "",
              type: "primary"
            }, {
              default: y(() => a[1] || (a[1] = [
                E(" Navigate ")
              ])),
              _: 1
            })
          ], 40, le)
        ])
      ]),
      default: y(() => [
        n("code", ae, [
          (o(!0), r(k, null, V(e(p), (l, v) => (o(), r("span", {
            key: v,
            class: I(l[0] === ":" ? "text-gray border border-dashed rounded border-gray:50 px1" : "")
          }, M(l[0] === ":" ? l.slice(1) : l), 3))), 128))
        ])
      ]),
      _: 1
    })) : (o(), r("button", {
      key: 0,
      onClick: m
    }, [
      n("code", null, M(t.route.path), 1)
    ]));
  }
}), de = { "w-full": "" }, ce = {
  border: "b base",
  "px-3": ""
}, pe = {
  key: 0,
  "text-left": ""
}, me = {
  "w-20": "",
  "pr-1": ""
}, ve = {
  flex: "",
  "items-center": "",
  "justify-end": ""
}, fe = { "text-sm": "" }, _e = {
  flex: "inline gap3",
  "items-center": ""
}, he = {
  op0: "",
  "group-hover:op100": "",
  flex: "~ gap1"
}, ge = ["onClick"], ye = {
  "w-0": "",
  "ws-nowrap": "",
  "pr-1": "",
  "text-left": "",
  "text-sm": "",
  "font-mono": "",
  op50: ""
}, be = {
  key: 0,
  "w-50": "",
  "ws-nowrap": "",
  "pr-1": "",
  "text-left": "",
  "text-sm": "",
  "font-mono": "",
  op50: "",
  hover: "text-primary op100"
}, xe = ["title", "onClick"], ke = /* @__PURE__ */ T({
  __name: "RoutesTable",
  props: {
    pages: {},
    matched: {},
    matchedPending: {}
  },
  emits: ["navigate", "selectMeta"],
  setup(R) {
    const i = R, u = b(() => [...i.pages].sort((d, s) => d.path.localeCompare(s.path))), g = b(() => L.value), f = Y();
    function c(d, s = 0) {
      const m = JSON.stringify(d, null, s);
      return m === "{}" ? "-" : m;
    }
    const p = b(() => u.value.some((d) => {
      var s;
      return (s = Object.keys(d.meta)) == null ? void 0 : s.length;
    }));
    return (d, s) => {
      const m = ue;
      return o(), r("div", null, [
        n("table", de, [
          n("thead", ce, [
            n("tr", null, [
              s[1] || (s[1] = n("th", { "text-left": "" }, null, -1)),
              s[2] || (s[2] = n("th", { "text-left": "" }, " Route Path ", -1)),
              s[3] || (s[3] = n("th", { "text-left": "" }, " Name ", -1)),
              e(p) ? (o(), r("th", pe, " Route Meta ")) : h("", !0)
            ])
          ]),
          n("tbody", null, [
            (o(!0), r(k, null, V(e(u), (t) => {
              var a;
              return o(), r("tr", {
                key: t.name,
                class: "group",
                "h-7": "",
                border: "b dashed transparent hover:base"
              }, [
                n("td", me, [
                  n("div", ve, [
                    d.matched.find((l) => l.name === t.name) ? (o(), $(e(S), {
                      key: 0,
                      "bg-green-400:10": "",
                      "text-green-400": "",
                      title: "active",
                      textContent: "active"
                    })) : d.matchedPending.find((l) => l.name === t.name) ? (o(), $(e(S), {
                      key: 1,
                      "bg-teal-400:10": "",
                      "text-teal-400": "",
                      title: "next",
                      textContent: "next"
                    })) : h("", !0)
                  ])
                ]),
                n("td", fe, [
                  n("div", _e, [
                    _(m, {
                      route: t,
                      class: I(d.matched.find((l) => l.name === t.name) ? "text-primary-400" : d.matchedPending.find((l) => l.name === t.name) ? "text-teal" : ""),
                      onNavigate: s[0] || (s[0] = (l) => d.$emit("navigate", l))
                    }, null, 8, ["route", "class"]),
                    n("div", he, [
                      (a = t.meta) != null && a.file && e(f).vitePluginDetected.value && e(g) ? (o(), r("button", {
                        key: 0,
                        "text-sm": "",
                        op40: "",
                        hover: "op100 text-primary-400",
                        title: "Open in editor",
                        onClick: (l) => {
                          var v;
                          return e(q)((v = t.meta) == null ? void 0 : v.file);
                        }
                      }, s[4] || (s[4] = [
                        n("div", { "i-carbon-script-reference": "" }, null, -1)
                      ]), 8, ge)) : h("", !0)
                    ])
                  ])
                ]),
                n("td", ye, M(t.name), 1),
                e(p) ? (o(), r("td", be, [
                  n("span", {
                    "inline-block": "",
                    "w-50": "",
                    "cursor-pointer": "",
                    "overflow-hidden": "",
                    "text-ellipsis": "",
                    title: c(t.meta, 2),
                    onClick: () => d.$emit("selectMeta", t.meta)
                  }, M(c(t.meta)), 9, xe)
                ])) : h("", !0)
              ]);
            }), 128))
          ])
        ])
      ]);
    };
  }
}), $e = {
  block: "",
  "h-screen": "",
  "of-auto": ""
}, Re = {
  "h-full": "",
  class: "grid grid-rows-[auto_1fr]"
}, we = {
  border: "b base",
  flex: "~ col gap1",
  px4: "",
  py3: ""
}, Ce = {
  key: 1,
  op50: ""
}, De = {
  key: 0,
  "text-orange": "",
  op75: ""
}, Me = {
  key: 1,
  op50: ""
}, Ve = /* @__PURE__ */ T({
  __name: "pages",
  setup(R) {
    const i = x(""), u = x(null), g = x([]), f = b(() => {
      var t;
      return i.value === ((t = u.value) == null ? void 0 : t.path) ? [] : g.value;
    }), c = x([]), p = x();
    function d(t) {
      var a;
      c.value = t.routes, u.value = t.currentRoute, i.value = ((a = u.value) == null ? void 0 : a.path) ?? "/";
    }
    function s() {
      f.value.length && m(i.value);
    }
    function m(t) {
      D.value.navigate(t);
    }
    return G(() => {
      D.value.getRouterInfo().then((t) => {
        d(t);
      }), D.functions.on(O.ROUTER_INFO_UPDATED, d);
    }), W(i, () => {
      var t;
      i.value !== ((t = u.value) == null ? void 0 : t.path) && D.value.getMatchedRoutes(i.value).then((a) => {
        g.value = a;
      });
    }), X(() => {
      D.functions.off(O.ROUTER_INFO_UPDATED, d);
    }), (t, a) => {
      var N, P;
      const l = ke, v = ee, w = oe;
      return o(), r("div", $e, [
        n("div", Re, [
          n("div", we, [
            n("div", null, [
              (o(), r("span", Ce, "Current route"))
            ]),
            _(e(j), {
              modelValue: e(i),
              "onUpdate:modelValue": a[0] || (a[0] = (C) => H(i) ? i.value = C : null),
              "left-icon": "i-carbon-direction-right-01 scale-y--100",
              class: I(((N = e(u)) == null ? void 0 : N.path) === e(i) ? "" : e(f).length ? "text-green!" : "text-orange!"),
              onKeydown: Z(s, ["enter"])
            }, null, 8, ["modelValue", "class"]),
            n("div", null, [
              ((P = e(u)) == null ? void 0 : P.path) !== e(i) ? (o(), r(k, { key: 0 }, [
                a[6] || (a[6] = n("span", null, [
                  E("Press "),
                  n("b", { "font-bold": "" }, "Enter"),
                  E(" to navigate")
                ], -1)),
                e(f).length ? h("", !0) : (o(), r("span", De, " (no match)"))
              ], 64)) : (o(), r("span", Me, "Edit path above to navigate"))
            ])
          ]),
          _(e(Q), { class: "of-hidden" }, {
            default: y(() => [
              _(e(U), {
                size: "70",
                class: "of-auto!"
              }, {
                default: y(() => [
                  _(v, {
                    icon: "i-carbon-tree-view-alt",
                    text: "All Routes",
                    description: `${e(c).length} routes registered in your application`,
                    padding: !1
                  }, {
                    default: y(() => {
                      var C;
                      return [
                        e(c).length ? (o(), $(l, {
                          key: 0,
                          pages: e(c),
                          matched: ((C = e(u)) == null ? void 0 : C.matched) ?? [],
                          "matched-pending": e(f),
                          onNavigate: m,
                          onSelectMeta: a[1] || (a[1] = (B) => p.value = B)
                        }, null, 8, ["pages", "matched", "matched-pending"])) : h("", !0)
                      ];
                    }),
                    _: 1
                  }, 8, ["description"])
                ]),
                _: 1
              }),
              e(p) ? (o(), $(e(U), {
                key: 0,
                size: "30",
                class: "of-auto!"
              }, {
                default: y(() => [
                  _(w, {
                    meta: e(p),
                    onClose: a[2] || (a[2] = (C) => p.value = void 0)
                  }, null, 8, ["meta"])
                ]),
                _: 1
              })) : h("", !0)
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
export {
  Ve as default
};
