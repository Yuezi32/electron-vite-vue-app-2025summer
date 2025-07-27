import { d as M, a6 as V, i as d, Y as D, a7 as B, a8 as F, a9 as P, c as o, o as l, b as i, a as I, u as t, w as L, aa as C, l as s, ab as $, F as U, D as W, h as w, n as j, x as q, t as z, L as G, _ as K, C as h, ac as Y, ad as H, q as E, ae as J, e as O, af as Q, G as A, ag as R, ah as X } from "./index-B-XIiefs.js";
const Z = {
  "h-full": "",
  flex: "",
  "flex-col": "",
  p2: ""
}, ee = {
  class: "relative mb-1 w-full flex items-center justify-end pb-1",
  border: "b dashed base"
}, te = {
  key: 0,
  class: "absolute left-0 text-xs text-gray-300 dark:text-gray-500"
}, ae = { class: "flex items-center gap-2 px-1" }, le = {
  key: 0,
  class: "recording recording-btn bg-[#ef4444]"
}, oe = {
  key: 1,
  class: "recording-btn bg-black op70 dark:bg-white hover:op100"
}, ne = { class: "flex items-center gap1" }, se = { class: "p2" }, ie = ["onClick"], re = ["onClick"], de = /* @__PURE__ */ M({
  __name: "TimelineLayers",
  props: /* @__PURE__ */ V({
    data: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ V(["select", "clear"], ["update:modelValue"]),
  setup(T, { emit: y }) {
    const m = y, f = D(), c = d(() => f.timelineLayersState.value.recordingState), r = d(() => f.timelineLayersState.value), b = d(() => c.value ? "Stop recording" : "Start recording"), { colorMode: x } = B();
    d(() => x.value === "dark");
    const _ = F(T, "modelValue");
    function u(a) {
      _.value = a, m("select", a), w.value.updateTimelineLayersState({
        selected: a
      });
    }
    P(() => r.value.selected, (a) => {
      _.value = a;
    }, {
      immediate: !0
    });
    function g(a) {
      return {
        mouse: r.value.mouseEventEnabled,
        keyboard: r.value.keyboardEventEnabled,
        "component-event": r.value.componentEventEnabled,
        performance: r.value.performanceEventEnabled
      }[a];
    }
    function p() {
      w.value.updateTimelineLayersState({
        recordingState: !c.value
      });
    }
    function S(a) {
      const v = {
        mouse: "mouseEventEnabled",
        keyboard: "keyboardEventEnabled",
        "component-event": "componentEventEnabled",
        performance: "performanceEventEnabled"
      }[a];
      w.value.updateTimelineLayersState({
        [v]: !g(a)
      });
    }
    return (a, v) => (l(), o("div", Z, [
      i("div", ee, [
        t(c) ? I("", !0) : (l(), o("span", te, "Not recording")),
        i("div", ae, [
          L((l(), o("div", {
            class: "flex items-center gap1",
            onClick: p
          }, [
            t(c) ? (l(), o("span", le)) : (l(), o("span", oe))
          ])), [
            [
              t(C),
              { content: t(b) },
              void 0,
              { "bottom-end": !0 }
            ]
          ]),
          L((l(), o("div", {
            class: "flex items-center gap1",
            onClick: v[0] || (v[0] = (e) => m("clear"))
          }, [
            s(t($), {
              name: "baseline-delete",
              "cursor-pointer": "",
              "text-xl": "",
              op70: "",
              "hover:op100": ""
            })
          ])), [
            [
              t(C),
              { content: "Clear all timelines" },
              void 0,
              { "bottom-end": !0 }
            ]
          ]),
          L((l(), o("div", ne, [
            s(t($), {
              name: "baseline-tips-and-updates",
              "cursor-pointer": "",
              "text-xl": "",
              op70: "",
              "hover:op100": ""
            })
          ])), [
            [
              t(C),
              { content: "<p style='width: 285px'>Timeline events can cause significant performance overhead in large applications, so we recommend enabling it only when needed and on-demand. </p>", html: !0 },
              void 0,
              { "bottom-end": !0 }
            ]
          ])
        ])
      ]),
      i("ul", se, [
        (l(!0), o(U, null, W(a.data, (e) => (l(), o("li", {
          key: e.id,
          class: j(["group relative selectable-item", { active: e.id === _.value, op60: !g(e.id) }]),
          onClick: (n) => u(e.id)
        }, [
          q(z(e.label) + " ", 1),
          i("span", {
            class: "absolute right-2 rounded-1 bg-primary-500 px1 text-3 text-white op0 [.active_&]:bg-primary-400 [.active_&]:dark:bg-gray-600 group-hover:op80 hover:op100!",
            onClick: G((n) => S(e.id), ["stop"])
          }, z(g(e.id) ? "Disable" : "Enable"), 9, re)
        ], 10, ie))), 128))
      ])
    ]));
  }
}), ce = /* @__PURE__ */ K(de, [["__scopeId", "data-v-ba7472d9"]]), ue = { class: "h-full w-full" }, pe = { class: "no-scrollbar h-full flex select-none gap-2 overflow-scroll" }, ve = { class: "h-full flex flex-col" }, me = { class: "no-scrollbar h-full flex select-none gap-2 overflow-scroll" }, fe = { class: "h-full flex flex-col p2" }, _e = /* @__PURE__ */ M({
  __name: "timeline",
  setup(T) {
    const y = h(), m = h(), f = h(!1), { width: c } = Y(m), r = d(() => f.value ? c.value < 700 : !1), b = D(), x = d(() => b.appRecords.value.map((e) => ({
      label: e.name + (e.version ? ` (${e.version})` : ""),
      value: e.id
    }))), _ = d(() => x.value.map((e) => ({
      label: e.label,
      id: e.value
    }))), u = h(b.activeAppRecordId.value);
    H(() => {
      u.value = b.activeAppRecordId.value;
    });
    function g(e) {
      w.value.toggleApp(e).then(() => {
        a();
      });
    }
    const p = h(""), S = [
      {
        label: "Mouse",
        id: "mouse"
      },
      {
        label: "Keyboard",
        id: "keyboard"
      },
      {
        label: "Component events",
        id: "component-event"
      },
      {
        label: "Performance",
        id: "performance"
      }
    ];
    function a() {
      var e;
      (e = y.value) == null || e.clear();
    }
    function v() {
      a();
    }
    return (e, n) => {
      const N = ce;
      return l(), o("div", ue, [
        s(t(J), {
          ref_key: "splitpanesRef",
          ref: m,
          class: "flex-1 overflow-auto",
          horizontal: t(r),
          onReady: n[2] || (n[2] = (k) => f.value = !0)
        }, {
          default: E(() => [
            t(x).length > 1 ? (l(), O(t(R), {
              key: 0,
              border: "base h-full",
              size: "20"
            }, {
              default: E(() => [
                i("div", pe, [
                  s(t(Q), {
                    modelValue: t(u),
                    "onUpdate:modelValue": n[0] || (n[0] = (k) => A(u) ? u.value = k : null),
                    data: t(_),
                    class: "w-full",
                    onSelect: g
                  }, null, 8, ["modelValue", "data"])
                ])
              ]),
              _: 1
            })) : I("", !0),
            s(t(R), {
              border: "base",
              "h-full": ""
            }, {
              default: E(() => [
                i("div", ve, [
                  i("div", me, [
                    s(N, {
                      modelValue: t(p),
                      "onUpdate:modelValue": n[1] || (n[1] = (k) => A(p) ? p.value = k : null),
                      data: S,
                      class: "w-full",
                      onSelect: v,
                      onClear: a
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            }),
            s(t(R), {
              relative: "",
              "h-full": "",
              size: "65"
            }, {
              default: E(() => [
                i("div", fe, [
                  s(t(X), {
                    ref_key: "timelineRef",
                    ref: y,
                    "layer-ids": [t(p)],
                    "header-visible": !1,
                    "doc-link": "",
                    "plugin-id": "",
                    "switcher-visible": !1
                  }, null, 8, ["layer-ids"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["horizontal"])
      ]);
    };
  }
});
export {
  _e as default
};
