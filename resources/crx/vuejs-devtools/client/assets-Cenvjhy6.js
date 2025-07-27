var ce = Object.defineProperty;
var se = (u) => {
  throw TypeError(u);
};
var pe = (u, t, s) => t in u ? ce(u, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : u[t] = s;
var M = (u, t, s) => pe(u, typeof t != "symbol" ? t + "" : t, s), he = (u, t, s) => t.has(u) || se("Cannot " + s);
var H = (u, t, s) => (he(u, t, "read from private field"), s ? s.call(u) : t.get(u)), ne = (u, t, s) => t.has(u) ? se("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(u) : t.set(u, s);
import { d as F, aq as fe, ay as te, i as $, ad as me, c as f, a as A, o as a, b as r, F as j, D as R, n as q, u as o, t as x, l as B, ai as ve, e as P, q as C, x as W, r as G, M as ee, w as N, aa as Q, az as ye, av as re, k as le, Y as ge, aA as Z, al as be, C as T, aB as we, f as oe, s as J, a5 as ae, ax as Y, G as X, a9 as ie, aj as _e, aC as $e, aD as xe, aw as ke, a0 as Be, at as Ce, O as Ae, P as Pe, v as Se } from "./index-C7XPmmLS.js";
import { _ as ze } from "./SectionBlock-Dp0NIF_b.js";
import { _ as je } from "./IconTitle.vue_vue_type_script_setup_true_lang-CzNAudTz.js";
const Ve = {
  key: 0,
  relative: "",
  "code-block": ""
}, Ie = {
  flex: "~ wrap",
  "w-full": ""
}, De = ["onClick"], Oe = {
  flex: "~ gap-2",
  px3: "",
  pb3: ""
}, Te = /* @__PURE__ */ F({
  __name: "CodeSnippets",
  props: {
    codeSnippets: {},
    eventType: {}
  },
  setup(u) {
    const t = u, s = fe(t.codeSnippets[0]), { copy: e } = te(), i = $(() => {
      var n;
      return ((n = s.value) == null ? void 0 : n.lang) || "text";
    });
    return me(() => {
      t.codeSnippets.includes(s.value) || (s.value = t.codeSnippets[0]);
    }), (n, l) => {
      var c;
      return n.codeSnippets.length ? (a(), f("div", Ve, [
        r("div", Ie, [
          (a(!0), f(j, null, R(n.codeSnippets, (p, m) => (a(), f("button", {
            key: m,
            px4: "",
            py2: "",
            border: "r base",
            hover: "bg-active",
            class: q(p === o(s) ? "" : "border-b"),
            onClick: (z) => s.value = p
          }, [
            r("div", {
              class: q(p === o(s) ? "" : "op30"),
              "font-mono": ""
            }, x(p.name), 3)
          ], 10, De))), 128)),
          l[1] || (l[1] = r("div", {
            border: "b base",
            "flex-auto": ""
          }, null, -1))
        ]),
        o(s) ? (a(), f(j, { key: 0 }, [
          B(o(ve), {
            code: o(s).code,
            lang: o(i),
            lines: !1,
            "w-full": "",
            "of-auto": "",
            p3: ""
          }, null, 8, ["code", "lang"]),
          r("div", Oe, [
            B(o(ee), {
              onClick: l[0] || (l[0] = (p) => o(e)(o(s).code, { silent: !1, type: n.eventType || `code-snippet-${o(s).name}` }))
            }, {
              icon: C(() => [
                G(n.$slots, "i-carbon-copy")
              ]),
              default: C(() => [
                l[2] || (l[2] = W(" Copy "))
              ]),
              _: 3
            }),
            (c = o(s)) != null && c.docs ? (a(), P(o(ee), {
              key: 0,
              to: o(s).docs,
              target: "_blank"
            }, {
              icon: C(() => [
                G(n.$slots, "i-carbon-catalog")
              ]),
              default: C(() => [
                l[3] || (l[3] = W(" Docs "))
              ]),
              _: 3
            }, 8, ["to"])) : A("", !0)
          ])
        ], 64)) : A("", !0)
      ])) : A("", !0);
    };
  }
}), Ue = ["title"], Fe = /* @__PURE__ */ F({
  __name: "FilepathItem",
  props: {
    filepath: {},
    lineBreak: { type: Boolean },
    subpath: { type: Boolean }
  },
  setup(u) {
    const t = u, s = $(
      () => ({ path: t.filepath })
    ), { copy: e } = te();
    return (i, n) => N((a(), f("button", {
      "font-mono": "",
      "hover:underline": "",
      class: q(i.lineBreak ? "" : "ws-nowrap of-hidden truncate"),
      title: i.filepath,
      onClick: n[0] || (n[0] = (l) => o(e)(i.filepath))
    }, [
      W(x(o(s).path), 1)
    ], 10, Ue)), [
      [o(Q), "Copy file path"]
    ]);
  }
});
function Ee(u) {
  return typeof u == "string" ? `'${u}'` : new Me().serialize(u);
}
const Me = /* @__PURE__ */ function() {
  var t;
  class u {
    constructor() {
      ne(this, t, /* @__PURE__ */ new Map());
    }
    compare(e, i) {
      const n = typeof e, l = typeof i;
      return n === "string" && l === "string" ? e.localeCompare(i) : n === "number" && l === "number" ? e - i : String.prototype.localeCompare.call(this.serialize(e, !0), this.serialize(i, !0));
    }
    serialize(e, i) {
      if (e === null) return "null";
      switch (typeof e) {
        case "string":
          return i ? e : `'${e}'`;
        case "bigint":
          return `${e}n`;
        case "object":
          return this.$object(e);
        case "function":
          return this.$function(e);
      }
      return String(e);
    }
    serializeObject(e) {
      const i = Object.prototype.toString.call(e);
      if (i !== "[object Object]") return this.serializeBuiltInType(i.length < 10 ? `unknown:${i}` : i.slice(8, -1), e);
      const n = e.constructor, l = n === Object || n === void 0 ? "" : n.name;
      if (l !== "" && globalThis[l] === n) return this.serializeBuiltInType(l, e);
      if (typeof e.toJSON == "function") {
        const c = e.toJSON();
        return l + (c !== null && typeof c == "object" ? this.$object(c) : `(${this.serialize(c)})`);
      }
      return this.serializeObjectEntries(l, Object.entries(e));
    }
    serializeBuiltInType(e, i) {
      const n = this["$" + e];
      if (n) return n.call(this, i);
      if (typeof (i == null ? void 0 : i.entries) == "function") return this.serializeObjectEntries(e, i.entries());
      throw new Error(`Cannot serialize ${e}`);
    }
    serializeObjectEntries(e, i) {
      const n = Array.from(i).sort((c, p) => this.compare(c[0], p[0]));
      let l = `${e}{`;
      for (let c = 0; c < n.length; c++) {
        const [p, m] = n[c];
        l += `${this.serialize(p, !0)}:${this.serialize(m)}`, c < n.length - 1 && (l += ",");
      }
      return l + "}";
    }
    $object(e) {
      let i = H(this, t).get(e);
      return i === void 0 && (H(this, t).set(e, `#${H(this, t).size}`), i = this.serializeObject(e), H(this, t).set(e, i)), i;
    }
    $function(e) {
      const i = Function.prototype.toString.call(e);
      return i.slice(-15) === "[native code] }" ? `${e.name || ""}()[native]` : `${e.name}(${e.length})${i.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(e) {
      let i = "[";
      for (let n = 0; n < e.length; n++) i += this.serialize(e[n]), n < e.length - 1 && (i += ",");
      return i + "]";
    }
    $Date(e) {
      try {
        return `Date(${e.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(e) {
      return `ArrayBuffer[${new Uint8Array(e).join(",")}]`;
    }
    $Set(e) {
      return `Set${this.$Array(Array.from(e).sort((i, n) => this.compare(i, n)))}`;
    }
    $Map(e) {
      return this.serializeObjectEntries("Map", e.entries());
    }
  }
  t = new WeakMap();
  for (const s of ["Error", "RegExp", "URL"]) u.prototype["$" + s] = function(e) {
    return `${s}(${e})`;
  };
  for (const s of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) u.prototype["$" + s] = function(e) {
    return `${s}[${e.join(",")}]`;
  };
  for (const s of ["BigInt64Array", "BigUint64Array"]) u.prototype["$" + s] = function(e) {
    return `${s}[${e.join("n,")}${e.length > 0 ? "n" : ""}]`;
  };
  return u;
}(), Le = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225], Re = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998], Ne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", L = [];
class qe {
  constructor() {
    M(this, "_data", new K());
    M(this, "_hash", new K([...Le]));
    M(this, "_nDataBytes", 0);
    M(this, "_minBufferSize", 0);
  }
  finalize(t) {
    t && this._append(t);
    const s = this._nDataBytes * 8, e = this._data.sigBytes * 8;
    return this._data.words[e >>> 5] |= 128 << 24 - e % 32, this._data.words[(e + 64 >>> 9 << 4) + 14] = Math.floor(s / 4294967296), this._data.words[(e + 64 >>> 9 << 4) + 15] = s, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash;
  }
  _doProcessBlock(t, s) {
    const e = this._hash.words;
    let i = e[0], n = e[1], l = e[2], c = e[3], p = e[4], m = e[5], z = e[6], O = e[7];
    for (let w = 0; w < 64; w++) {
      if (w < 16) L[w] = t[s + w] | 0;
      else {
        const h = L[w - 15], d = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3, _ = L[w - 2], k = (_ << 15 | _ >>> 17) ^ (_ << 13 | _ >>> 19) ^ _ >>> 10;
        L[w] = d + L[w - 7] + k + L[w - 16];
      }
      const V = p & m ^ ~p & z, E = i & n ^ i & l ^ n & l, b = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22), v = (p << 26 | p >>> 6) ^ (p << 21 | p >>> 11) ^ (p << 7 | p >>> 25), g = O + v + V + Re[w] + L[w], I = b + E;
      O = z, z = m, m = p, p = c + g | 0, c = l, l = n, n = i, i = g + I | 0;
    }
    e[0] = e[0] + i | 0, e[1] = e[1] + n | 0, e[2] = e[2] + l | 0, e[3] = e[3] + c | 0, e[4] = e[4] + p | 0, e[5] = e[5] + m | 0, e[6] = e[6] + z | 0, e[7] = e[7] + O | 0;
  }
  _append(t) {
    typeof t == "string" && (t = K.fromUtf8(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
  }
  _process(t) {
    let s, e = this._data.sigBytes / 64;
    t ? e = Math.ceil(e) : e = Math.max((e | 0) - this._minBufferSize, 0);
    const i = e * 16, n = Math.min(i * 4, this._data.sigBytes);
    if (i) {
      for (let l = 0; l < i; l += 16) this._doProcessBlock(this._data.words, l);
      s = this._data.words.splice(0, i), this._data.sigBytes -= n;
    }
    return new K(s, n);
  }
}
class K {
  constructor(t, s) {
    M(this, "words");
    M(this, "sigBytes");
    t = this.words = t || [], this.sigBytes = s === void 0 ? t.length * 4 : s;
  }
  static fromUtf8(t) {
    const s = unescape(encodeURIComponent(t)), e = s.length, i = [];
    for (let n = 0; n < e; n++) i[n >>> 2] |= (s.charCodeAt(n) & 255) << 24 - n % 4 * 8;
    return new K(i, e);
  }
  toBase64() {
    const t = [];
    for (let s = 0; s < this.sigBytes; s += 3) {
      const e = this.words[s >>> 2] >>> 24 - s % 4 * 8 & 255, i = this.words[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255, n = this.words[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, l = e << 16 | i << 8 | n;
      for (let c = 0; c < 4 && s * 8 + c * 6 < this.sigBytes * 8; c++) t.push(Ne.charAt(l >>> 6 * (3 - c) & 63));
    }
    return t.join("");
  }
  concat(t) {
    if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let s = 0; s < t.sigBytes; s++) {
      const e = t.words[s >>> 2] >>> 24 - s % 4 * 8 & 255;
      this.words[this.sigBytes + s >>> 2] |= e << 24 - (this.sigBytes + s) % 4 * 8;
    }
    else for (let s = 0; s < t.sigBytes; s += 4) this.words[this.sigBytes + s >>> 2] = t.words[s >>> 2];
    this.sigBytes += t.sigBytes;
  }
}
function Ge(u) {
  return new qe().finalize(u).toBase64();
}
function Je(u) {
  return Ge(Ee(u));
}
const Xe = /* @__PURE__ */ F({
  __name: "AssetFontPreview",
  props: {
    asset: {}
  },
  setup(u) {
    const t = u, s = $(() => `devtools-assets-${Je(t.asset)}`);
    return ye($(() => `
  @font-face {
    font-family: '${s.value}';
    src: url('${t.asset.publicPath}');
  }
`)), (e, i) => (a(), f("div", {
      "of-hidden": "",
      style: re({ fontFamily: `'${o(s)}'` })
    }, " Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz ", 4));
  }
}), Ke = {
  flex: "",
  "items-center": "",
  "justify-center": "",
  "of-hidden": "",
  "bg-active": "",
  "object-cover": "",
  p1: ""
}, We = ["src"], Ye = {
  key: 2,
  "i-carbon-document": "",
  "text-3xl": "",
  op20: ""
}, He = {
  key: 3,
  "w-full": "",
  "self-start": "",
  p4: ""
}, Qe = ["textContent"], Ze = { key: 4 }, et = ["src", "autoplay", "controls"], tt = { key: 5 }, st = {
  key: 0,
  "i-carbon-volume-up": "",
  "text-3xl": "",
  op20: ""
}, nt = ["src"], ot = {
  key: 6,
  "i-vscode-icons-file-type-wasm": "",
  "text-3xl": ""
}, it = {
  key: 7,
  "i-carbon-help": "",
  "text-3xl": "",
  op20: ""
}, ue = /* @__PURE__ */ F({
  __name: "AssetPreview",
  props: {
    asset: {},
    textContent: {},
    detail: { type: Boolean }
  },
  setup(u) {
    return (t, s) => {
      const e = Xe;
      return a(), f("div", Ke, [
        t.asset.type === "image" ? (a(), f("img", {
          key: 0,
          src: t.asset.publicPath
        }, null, 8, We)) : t.asset.type === "font" ? (a(), P(e, {
          key: t.asset.publicPath,
          asset: t.asset,
          "self-stretch": "",
          p2: "",
          "text-2xl": ""
        }, null, 8, ["asset"])) : t.asset.type === "text" && !t.textContent ? (a(), f("div", Ye)) : t.asset.type === "text" && t.textContent ? (a(), f("div", He, [
          r("pre", {
            "max-h-10rem": "",
            "of-hidden": "",
            "text-xs": "",
            "font-mono": "",
            textContent: x(t.textContent)
          }, null, 8, Qe)
        ])) : t.asset.type === "video" ? (a(), f("div", Ze, [
          r("video", {
            src: t.asset.publicPath,
            autoplay: t.detail,
            controls: t.detail
          }, null, 8, et)
        ])) : t.asset.type === "audio" ? (a(), f("div", tt, [
          t.detail ? (a(), f("audio", {
            key: 1,
            src: t.asset.publicPath,
            controls: ""
          }, null, 8, nt)) : (a(), f("div", st))
        ])) : t.asset.type === "wasm" ? (a(), f("div", ot)) : (a(), f("div", it))
      ]);
    };
  }
}), rt = {
  flex: "~ col gap-4",
  "min-h-full": "",
  "w-full": "",
  "of-hidden": "",
  p4: ""
}, lt = {
  flex: "~",
  "items-center": "",
  "justify-center": ""
}, at = {
  "max-w-full": "",
  "w-full": "",
  "table-fixed": ""
}, ut = {
  flex: "~ gap-1",
  "w-full": "",
  "items-center": ""
}, dt = {
  flex: "~ gap-1",
  "w-full": "",
  "items-center": "",
  "of-hidden": ""
}, ct = {
  "flex-auto": "",
  "of-hidden": "",
  truncate: "",
  "ws-pre": "",
  "font-mono": ""
}, pt = { capitalize: "" }, ht = { key: 0 }, ft = { op70: "" }, mt = { flex: "~ gap2 wrap" }, vt = /* @__PURE__ */ F({
  __name: "AssetDetails",
  props: {
    modelValue: {}
  },
  setup(u, { emit: t }) {
    const s = u, e = t, i = ge(), n = le(s, "modelValue", e, { passive: !0 }), l = $(() => i.vitePluginDetected.value), c = Z(() => Y.value.getAssetImporters(n.value.publicPath).then((h) => h), []), p = $(() => be.value), m = Z(() => {
      if (n.value.type === "image")
        return Y.value.getImageMeta(n.value.filePath).then((h) => h);
    }), z = T(), O = T(0), w = Z(async () => {
      if (n.value.type !== "text")
        return;
      O.value;
      const h = await Y.value.getTextAssetContent(n.value.filePath).then((d) => d);
      return z.value = h, h;
    }), V = $(() => {
      var d;
      const h = [];
      if (n.value.type === "image") {
        const _ = (d = m.value) != null && d.width ? `
  width="${m.value.width}"
  height="${m.value.height}" ` : " ";
        return h.push(
          { lang: "vue-html", code: `<img${_}
  src="${n.value.publicPath}"
/>`, name: "Plain Image" }
        ), h;
      }
      return h.push({
        lang: "html",
        code: `<a download href="${n.value.publicPath}">
  Download ${n.value.path.split("/").slice(-1)[0]}
</a>`,
        name: "Download link"
      }), h;
    }), { copy: E } = te(), b = we(() => n.value.mtime), v = $(() => {
      const h = n.value.size;
      return h < 1024 ? `${h} B` : h < 1024 * 1024 ? `${(h / 1024).toFixed(2)} KB` : `${(h / 1024 / 1024).toFixed(2)} MB`;
    }), g = $(() => {
      var _, k;
      if (!((_ = m.value) != null && _.width) || !((k = m.value) != null && k.height))
        return "";
      const h = (U, y) => y ? h(y, U % y) : U, d = h(m.value.width, m.value.height);
      return d > 3 ? `${m.value.width / d}:${m.value.height / d}` : "";
    }), I = $(() => [
      "image",
      "text",
      "video",
      "audio",
      "font"
    ].includes(n.value.type));
    return (h, d) => {
      var D;
      const _ = ue, k = Fe, U = ae("RouterLink"), y = Te;
      return a(), f("div", rt, [
        o(I) ? (a(), f(j, { key: 0 }, [
          d[2] || (d[2] = r("div", {
            flex: "~ gap2",
            "mb--2": "",
            "items-center": "",
            op50: ""
          }, [
            r("div", { "x-divider": "" }),
            r("div", { "flex-none": "" }, " Preview "),
            r("div", { "x-divider": "" })
          ], -1)),
          r("div", lt, [
            B(_, {
              detail: "",
              "max-h-80": "",
              "min-h-20": "",
              "min-w-20": "",
              "w-auto": "",
              rounded: "",
              border: "~ base",
              asset: o(n),
              "text-content": o(w)
            }, null, 8, ["asset", "text-content"])
          ])
        ], 64)) : A("", !0),
        d[12] || (d[12] = r("div", {
          flex: "~ gap2",
          "mb--2": "",
          "items-center": "",
          op50: ""
        }, [
          r("div", { "x-divider": "" }),
          r("div", { "flex-none": "" }, " Details "),
          r("div", { "x-divider": "" })
        ], -1)),
        r("table", at, [
          r("tbody", null, [
            r("tr", null, [
              d[3] || (d[3] = r("td", {
                "w-30": "",
                "ws-nowrap": "",
                pr5: "",
                "text-right": "",
                op50: ""
              }, " Filepath ", -1)),
              r("td", null, [
                r("div", ut, [
                  B(k, {
                    filepath: o(n).filePath,
                    "text-left": ""
                  }, null, 8, ["filepath"]),
                  o(l) && o(p) ? N((a(), P(o(J), {
                    key: 0,
                    title: "Open in Editor",
                    icon: "i-carbon-launch",
                    action: "",
                    "flex-none": "",
                    border: !1,
                    onClick: d[0] || (d[0] = (S) => o(oe)(o(n).filePath))
                  }, null, 512)), [
                    [o(Q), "Open in Editor"]
                  ]) : A("", !0)
                ])
              ])
            ]),
            r("tr", null, [
              d[4] || (d[4] = r("td", {
                "w-30": "",
                "ws-nowrap": "",
                pr5: "",
                "text-right": "",
                op50: ""
              }, " Public Path ", -1)),
              r("td", null, [
                r("div", dt, [
                  r("div", ct, x(o(n).publicPath), 1),
                  N(B(o(J), {
                    title: "Copy public path",
                    icon: "i-carbon-copy",
                    action: "",
                    mr1: "",
                    "mt--2px": "",
                    "flex-none": "",
                    border: !1,
                    onClick: d[1] || (d[1] = (S) => o(E)(o(n).publicPath, { type: "assets-public-path" }))
                  }, null, 512), [
                    [o(Q), "Copy public path"]
                  ]),
                  B(U, {
                    to: o(n).publicPath,
                    target: "_blank"
                  }, {
                    default: C(() => [
                      N(B(o(J), {
                        icon: "i-carbon-launch",
                        action: "",
                        "flex-none": "",
                        border: !1,
                        title: "Open in Browser"
                      }, null, 512), [
                        [o(Q), "Open in Browser"]
                      ])
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
              ])
            ]),
            r("tr", null, [
              d[5] || (d[5] = r("td", {
                "w-30": "",
                "ws-nowrap": "",
                pr5: "",
                "text-right": "",
                op50: ""
              }, " Type ", -1)),
              r("td", pt, x(o(n).type), 1)
            ]),
            (D = o(m)) != null && D.width ? (a(), f(j, { key: 0 }, [
              r("tr", null, [
                d[6] || (d[6] = r("td", {
                  "w-30": "",
                  "ws-nowrap": "",
                  pr5: "",
                  "text-right": "",
                  op50: ""
                }, " Image Size ", -1)),
                r("td", null, x(o(m).width) + " x " + x(o(m).height), 1)
              ]),
              o(g) ? (a(), f("tr", ht, [
                d[7] || (d[7] = r("td", {
                  "w-30": "",
                  "ws-nowrap": "",
                  pr5: "",
                  "text-right": "",
                  op50: ""
                }, " Aspect Ratio ", -1)),
                r("td", null, x(o(g)), 1)
              ])) : A("", !0)
            ], 64)) : A("", !0),
            r("tr", null, [
              d[8] || (d[8] = r("td", {
                "w-30": "",
                "ws-nowrap": "",
                pr5: "",
                "text-right": "",
                op50: ""
              }, " File size ", -1)),
              r("td", null, x(o(v)), 1)
            ]),
            r("tr", null, [
              d[9] || (d[9] = r("td", {
                "w-30": "",
                "ws-nowrap": "",
                pr5: "",
                "text-right": "",
                op50: ""
              }, " Last modified ", -1)),
              r("td", null, [
                W(x(new Date(o(n).mtime).toLocaleString()) + " ", 1),
                r("span", ft, "(" + x(o(b)) + ")", 1)
              ])
            ]),
            r("tr", null, [
              d[10] || (d[10] = r("td", {
                "w-30": "",
                "ws-nowrap": "",
                pr5: "",
                "text-right": "",
                "align-top": "",
                op50: ""
              }, " Importers ", -1)),
              r("td", null, [
                o(c).length > 0 ? (a(!0), f(j, { key: 0 }, R(o(c), (S) => (a(), f("div", {
                  key: S.url,
                  flex: "~ gap-1",
                  "w-full": "",
                  "items-center": ""
                }, [
                  B(k, {
                    filepath: S.id || S.url,
                    "text-left": ""
                  }, null, 8, ["filepath"]),
                  o(i).vitePluginDetected.value && o(p) && S.id ? N((a(), P(o(J), {
                    key: 0,
                    title: "Open in Editor",
                    icon: "i-carbon-launch",
                    action: "",
                    "flex-none": "",
                    border: !1,
                    onClick: (de) => o(oe)(S.id)
                  }, null, 8, ["onClick"])), [
                    [o(Q), "Open in Editor"]
                  ]) : A("", !0)
                ]))), 128)) : (a(), f(j, { key: 1 }, [
                  W(" None ")
                ], 64))
              ])
            ])
          ])
        ]),
        d[13] || (d[13] = r("div", {
          flex: "~ gap2",
          "mb--2": "",
          "items-center": "",
          op50: ""
        }, [
          r("div", { "x-divider": "" }),
          r("div", { "flex-none": "" }, " Actions "),
          r("div", { "x-divider": "" })
        ], -1)),
        r("div", mt, [
          B(o(ee), {
            to: o(n).publicPath,
            download: "",
            target: "_blank"
          }, {
            icon: C(() => [
              G(h.$slots, "i-carbon-download")
            ]),
            default: C(() => [
              d[11] || (d[11] = W(" Download "))
            ]),
            _: 3
          }, 8, ["to"])
        ]),
        d[14] || (d[14] = r("div", { "flex-auto": "" }, null, -1)),
        o(V).length ? (a(), P(y, {
          key: 1,
          border: "t base",
          "mx--4": "",
          "mb--4": "",
          "code-snippets": o(V)
        }, null, 8, ["code-snippets"])) : A("", !0)
      ]);
    };
  }
}), yt = /* @__PURE__ */ F({
  __name: "AssetListItem",
  props: {
    item: {},
    index: { default: 0 },
    modelValue: {}
  },
  setup(u, { emit: t }) {
    const s = u, i = le(s, "modelValue", t, { passive: !0 }), n = $(() => {
      var p, m;
      return (m = (p = s.item) == null ? void 0 : p.children) == null ? void 0 : m.length;
    }), l = T(!0), c = $(() => n.value ? "i-carbon-folder" : s.item.type === "image" ? "i-carbon-image" : s.item.type === "video" ? "i-carbon-video" : s.item.type === "audio" ? "i-carbon-volume-up" : s.item.type === "font" ? "i-carbon-text-small-caps" : s.item.type === "text" ? "i-carbon-document" : s.item.type === "json" ? "i-carbon-json" : s.item.type === "wasm" ? "i-vscode-icons-file-type-wasm" : "i-carbon-document-blank");
    return (p, m) => {
      var O, w;
      const z = ae("AssetListItem", !0);
      return a(), f("div", null, [
        r("button", {
          flex: "~ gap-2",
          "w-full": "",
          "items-center": "",
          hover: "bg-active",
          px4: "",
          py1: "",
          style: re({ paddingLeft: `calc(1rem + ${p.index * 1.5}em)` }),
          class: q({ "bg-active": !o(n) && ((O = o(i)) == null ? void 0 : O.filePath) === ((w = p.item) == null ? void 0 : w.filePath) }),
          border: "b base",
          onClick: m[0] || (m[0] = (V) => o(n) ? l.value = !o(l) : i.value = p.item)
        }, [
          r("div", {
            class: q(o(c))
          }, null, 2),
          r("span", {
            class: q({ "flex items-center": o(n) }),
            "flex-auto": "",
            "text-start": "",
            "text-sm": "",
            "font-mono": ""
          }, x(p.item.path), 3),
          o(n) ? (a(), P(o(J), {
            key: 0,
            icon: "carbon:chevron-right",
            "transform-rotate": o(l) ? 90 : 0,
            transition: ""
          }, null, 8, ["transform-rotate"])) : A("", !0)
        ], 6),
        o(l) ? G(p.$slots, "default", { key: 0 }, () => {
          var V;
          return [
            (a(!0), f(j, null, R((V = p.item) == null ? void 0 : V.children, (E) => (a(), P(z, {
              key: E.filepath,
              modelValue: o(i),
              "onUpdate:modelValue": m[1] || (m[1] = (b) => X(i) ? i.value = b : null),
              item: E,
              index: p.index + 1
            }, null, 8, ["modelValue", "item", "index"]))), 128))
          ];
        }) : A("", !0)
      ]);
    };
  }
}), gt = {
  flex: "~ col gap-1",
  hover: "bg-active",
  "items-center": "",
  "of-hidden": "",
  rounded: "",
  p2: ""
}, bt = {
  "w-full": "",
  "of-hidden": "",
  truncate: "",
  "ws-nowrap": "",
  "text-center": "",
  "text-xs": ""
}, wt = /* @__PURE__ */ F({
  __name: "AssetGridItem",
  props: {
    asset: {},
    folder: {}
  },
  setup(u) {
    const t = u, s = $(() => t.folder && t.asset.path.startsWith(t.folder) ? t.asset.path.slice(t.folder.length) : t.asset.path);
    return (e, i) => {
      const n = ue;
      return a(), f("button", gt, [
        B(n, {
          "h-30": "",
          "w-30": "",
          rounded: "",
          border: "~ base",
          asset: e.asset
        }, null, 8, ["asset"]),
        r("div", bt, x(o(s)), 1)
      ]);
    };
  }
}), _t = {
  flex: "~ col gap2",
  border: "b base",
  "flex-1": "",
  p4: "",
  "navbar-glass": ""
}, $t = {
  flex: "~ gap4",
  "items-center": ""
}, xt = /* @__PURE__ */ F({
  __name: "Navbar",
  props: {
    search: {},
    noPadding: { type: Boolean }
  },
  emits: ["update:search"],
  setup(u, { emit: t }) {
    const s = u, e = t, i = T(s.search);
    return ie(() => s.search, (n) => {
      i.value = n;
    }), ie(i, () => {
      e("update:search", i.value);
    }), (n, l) => (a(), f("div", _t, [
      r("div", $t, [
        G(n.$slots, "search", {}, () => [
          n.search !== void 0 ? (a(), P(o(_e), {
            key: 0,
            modelValue: o(i),
            "onUpdate:modelValue": l[0] || (l[0] = (c) => X(i) ? i.value = c : null),
            placeholder: "Search...",
            "left-icon": "i-carbon-search",
            class: q(["flex-auto", { "px-5 py-2": !n.noPadding }])
          }, null, 8, ["modelValue", "class"])) : A("", !0)
        ]),
        G(n.$slots, "actions")
      ]),
      G(n.$slots, "default")
    ]));
  }
}), kt = {
  block: "",
  "h-full": "",
  "of-hidden": "",
  class: "drawer-container relative"
}, Bt = {
  "h-full": "",
  "w-full": "",
  "of-auto": ""
}, Ct = {
  "flex-none": "",
  flex: "~ gap2 items-center",
  "text-lg": ""
}, At = {
  flex: "~ items-center justify-center",
  absolute: "",
  "bottom-0": "",
  "right-2px": "",
  "h-4": "",
  "w-4": "",
  "rounded-full": "",
  "bg-primary-800": "",
  "text-8px": "",
  "text-white": ""
}, Pt = {
  "w-full": "",
  flex: "~ gap-2 items-center",
  rounded: "",
  px2: "",
  py2: ""
}, St = {
  "text-xs": "",
  op75: ""
}, zt = { op50: "" }, jt = { key: 0 }, Vt = {
  "mt--4": "",
  px2: "",
  grid: "~ cols-minmax-8rem"
}, It = {
  key: 1,
  p2: "",
  grid: "~ cols-minmax-8rem"
}, Dt = { key: 1 }, Ot = 50, Mt = /* @__PURE__ */ F({
  __name: "assets",
  setup(u) {
    const t = T(""), s = T(), e = T("grid"), i = T([]), n = $(() => {
      const b = [];
      for (const v of i.value || []) {
        const g = v.path.split(".").pop();
        g && !b.find((I) => I.value === g) && b.push({ label: g, value: g });
      }
      return b;
    }), l = T([]);
    $e(() => n.value, (b) => {
      l.value = b.map((v) => v.value);
    });
    const c = T(), p = $(() => new xe(i.value || [], {
      keys: [
        "path"
      ]
    })), m = $(() => (t.value ? p.value.search(t.value).map((v) => v.item) : i.value || []).filter((v) => {
      const g = v.path.split(".").pop();
      return !g || l.value.includes(g);
    })), z = $(() => {
      const b = {};
      for (const v of m.value) {
        const g = `${v.relativePath.split("/").slice(0, -1).join("/")}/`;
        b[g] || (b[g] = []), b[g].push(v);
      }
      return Object.entries(b).sort(([v], [g]) => v.localeCompare(g));
    }), O = $(() => {
      const b = { children: [] }, v = (g, I, h) => {
        const [d, ..._] = I;
        let k = g.children.find((U) => U.path === d);
        k || (k = { ...h, path: d, children: [] }, g.children.push(k)), _.length > 1 ? v(k, _, h) : _.length === 1 && k.children.push({ ...h, path: _[0] });
      };
      return m.value.forEach((g) => {
        const I = g.relativePath.split("/").filter((h) => h !== "");
        v(b, I, g);
      }), b.children;
    });
    function w() {
      Y.value.getStaticAssets().then((b) => {
        i.value = b;
      });
    }
    function V() {
      w();
    }
    ke(() => {
      w(), Y.functions.on("assetsUpdated", V);
    });
    function E() {
      e.value = e.value === "list" ? "grid" : "list";
    }
    return Be(() => {
      Y.functions.off("assetsUpdated", V);
    }), (b, v) => {
      const g = je, I = xt, h = wt, d = ze, _ = yt, k = vt, U = Se("tooltip");
      return a(), f("div", kt, [
        r("div", Bt, [
          B(I, {
            ref_key: "navbar",
            ref: s,
            search: o(t),
            "onUpdate:search": v[1] || (v[1] = (y) => X(t) ? t.value = y : null),
            pb2: "",
            "no-padding": !0
          }, {
            actions: C(() => [
              r("div", Ct, [
                B(o(Ae), {
                  modelValue: o(l),
                  "onUpdate:modelValue": v[0] || (v[0] = (y) => X(l) ? l.value = y : null),
                  multiple: !0,
                  options: o(n)
                }, {
                  button: C(() => [
                    N((a(), P(g, {
                      icon: "i-carbon-filter hover:op50",
                      border: !1,
                      title: "Filter",
                      relative: "",
                      "cursor-pointer": "",
                      p2: "",
                      "text-lg": "",
                      onClick: () => {
                      }
                    }, {
                      default: C(() => [
                        r("span", At, x(o(l).length), 1)
                      ]),
                      _: 1
                    })), [
                      [
                        U,
                        "Filter",
                        void 0,
                        { "bottom-end": !0 }
                      ]
                    ])
                  ]),
                  item: C(({
                    item: y,
                    active: D
                  }) => [
                    r("div", Pt, [
                      B(o(Pe), { "model-value": D }, null, 8, ["model-value"]),
                      r("span", St, x(y.label), 1)
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "options"]),
                N(B(o(J), {
                  border: !1,
                  icon: o(e) === "grid" ? "i-carbon-list" : "i-carbon-grid",
                  title: "Toggle view",
                  action: "",
                  "cursor-pointer": "",
                  "text-lg": "",
                  onClick: E
                }, null, 8, ["icon"]), [
                  [
                    U,
                    "Toggle View",
                    void 0,
                    { "bottom-end": !0 }
                  ]
                ])
              ])
            ]),
            default: C(() => {
              var y;
              return [
                r("div", zt, [
                  o(t) ? (a(), f("span", jt, x(o(m).length) + " matched · ", 1)) : A("", !0),
                  r("span", null, x((y = o(i)) == null ? void 0 : y.length) + " assets in total", 1)
                ])
              ];
            }),
            _: 1
          }, 8, ["search"]),
          o(e) === "grid" ? (a(), f(j, { key: 0 }, [
            o(z).length > 1 ? (a(!0), f(j, { key: 0 }, R(o(z), ([y, D]) => (a(), P(d, {
              key: y,
              text: y,
              description: `${D.length} items`,
              open: D.length <= Ot,
              padding: !1
            }, {
              default: C(() => [
                r("div", Vt, [
                  (a(!0), f(j, null, R(D, (S) => (a(), P(h, {
                    key: S.path,
                    asset: S,
                    folder: y,
                    onClick: (de) => c.value = S
                  }, null, 8, ["asset", "folder", "onClick"]))), 128))
                ])
              ]),
              _: 2
            }, 1032, ["text", "description", "open"]))), 128)) : (a(), f("div", It, [
              (a(!0), f(j, null, R(o(m), (y) => (a(), P(h, {
                key: y.path,
                asset: y,
                onClick: (D) => c.value = y
              }, null, 8, ["asset", "onClick"]))), 128))
            ]))
          ], 64)) : (a(), f("div", Dt, [
            (a(!0), f(j, null, R(o(O), (y, D) => (a(), P(_, {
              key: D,
              modelValue: o(c),
              "onUpdate:modelValue": v[2] || (v[2] = (S) => X(c) ? c.value = S : null),
              item: y
            }, null, 8, ["modelValue", "item"]))), 128))
          ]))
        ]),
        B(o(Ce), {
          "model-value": !!o(c),
          top: o(s),
          permanent: "",
          "mount-to": ".drawer-container",
          position: "absolute",
          "content-class": "w120 text-sm",
          "onUpdate:modelValue": v[4] || (v[4] = (y) => {
            y || (c.value = void 0);
          })
        }, {
          default: C(() => [
            o(c) ? (a(), P(k, {
              key: 0,
              modelValue: o(c),
              "onUpdate:modelValue": v[3] || (v[3] = (y) => X(c) ? c.value = y : null)
            }, null, 8, ["modelValue"])) : A("", !0)
          ]),
          _: 1
        }, 8, ["model-value", "top"])
      ]);
    };
  }
});
export {
  Mt as default
};
