import e1, { forwardRef as H, useState as t1, useEffect as r1 } from "react";
var f2 = { exports: {} }, s2 = {};
var Z2;
function o1() {
  if (Z2) return s2;
  Z2 = 1;
  var C = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function e(t, s, n) {
    var l = null;
    if (n !== void 0 && (l = "" + n), s.key !== void 0 && (l = "" + s.key), "key" in s) {
      n = {};
      for (var f in s)
        f !== "key" && (n[f] = s[f]);
    } else n = s;
    return s = n.ref, {
      $$typeof: C,
      type: t,
      key: l,
      ref: s !== void 0 ? s : null,
      props: n
    };
  }
  return s2.Fragment = r, s2.jsx = e, s2.jsxs = e, s2;
}
var n2 = {};
var R2;
function s1() {
  return R2 || (R2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function C(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === i2 ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case y:
          return "Fragment";
        case K:
          return "Profiler";
        case I:
          return "StrictMode";
        case F:
          return "Suspense";
        case J:
          return "SuspenseList";
        case l2:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case T:
            return "Portal";
          case D:
            return o.displayName || "Context";
          case q:
            return (o._context.displayName || "Context") + ".Consumer";
          case B:
            var b = o.render;
            return o = o.displayName, o || (o = b.displayName || b.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case m:
            return b = o.displayName || null, b !== null ? b : C(o.type) || "Memo";
          case E:
            b = o._payload, o = o._init;
            try {
              return C(o(b));
            } catch {
            }
        }
      return null;
    }
    function r(o) {
      return "" + o;
    }
    function e(o) {
      try {
        r(o);
        var b = !1;
      } catch {
        b = !0;
      }
      if (b) {
        b = console;
        var v = b.error, k = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return v.call(
          b,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), r(o);
      }
    }
    function t(o) {
      if (o === y) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === E)
        return "<...>";
      try {
        var b = C(o);
        return b ? "<" + b + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var o = W.A;
      return o === null ? null : o.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function l(o) {
      if (r2.call(o, "key")) {
        var b = Object.getOwnPropertyDescriptor(o, "key").get;
        if (b && b.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function f(o, b) {
      function v() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          b
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: v,
        configurable: !0
      });
    }
    function d() {
      var o = C(this.type);
      return L[o] || (L[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function x(o, b, v, k, N, Z) {
      var w = v.ref;
      return o = {
        $$typeof: A,
        type: o,
        key: b,
        props: v,
        _owner: k
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function g(o, b, v, k, N, Z) {
      var w = b.children;
      if (w !== void 0)
        if (k)
          if (o2(w)) {
            for (k = 0; k < w.length; k++)
              j(w[k]);
            Object.freeze && Object.freeze(w);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(w);
      if (r2.call(b, "key")) {
        w = C(o);
        var V = Object.keys(b).filter(function(c2) {
          return c2 !== "key";
        });
        k = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", u[w + k] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          w,
          V,
          w
        ), u[w + k] = !0);
      }
      if (w = null, v !== void 0 && (e(v), w = "" + v), l(b) && (e(b.key), w = "" + b.key), "key" in b) {
        v = {};
        for (var M in b)
          M !== "key" && (v[M] = b[M]);
      } else v = b;
      return w && f(
        v,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), x(
        o,
        w,
        v,
        s(),
        N,
        Z
      );
    }
    function j(o) {
      h(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === E && (o._payload.status === "fulfilled" ? h(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function h(o) {
      return typeof o == "object" && o !== null && o.$$typeof === A;
    }
    var _ = e1, A = /* @__PURE__ */ Symbol.for("react.transitional.element"), T = /* @__PURE__ */ Symbol.for("react.portal"), y = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), q = /* @__PURE__ */ Symbol.for("react.consumer"), D = /* @__PURE__ */ Symbol.for("react.context"), B = /* @__PURE__ */ Symbol.for("react.forward_ref"), F = /* @__PURE__ */ Symbol.for("react.suspense"), J = /* @__PURE__ */ Symbol.for("react.suspense_list"), m = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), l2 = /* @__PURE__ */ Symbol.for("react.activity"), i2 = /* @__PURE__ */ Symbol.for("react.client.reference"), W = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, r2 = Object.prototype.hasOwnProperty, o2 = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var S, L = {}, C2 = _.react_stack_bottom_frame.bind(
      _,
      n
    )(), e2 = O(t(n)), u = {};
    n2.Fragment = y, n2.jsx = function(o, b, v) {
      var k = 1e4 > W.recentlyCreatedOwnerStacks++;
      return g(
        o,
        b,
        v,
        !1,
        k ? Error("react-stack-top-frame") : C2,
        k ? O(t(o)) : e2
      );
    }, n2.jsxs = function(o, b, v) {
      var k = 1e4 > W.recentlyCreatedOwnerStacks++;
      return g(
        o,
        b,
        v,
        !0,
        k ? Error("react-stack-top-frame") : C2,
        k ? O(t(o)) : e2
      );
    };
  })()), n2;
}
var T2;
function n1() {
  return T2 || (T2 = 1, process.env.NODE_ENV === "production" ? f2.exports = o1() : f2.exports = s1()), f2.exports;
}
var a = n1();
const a1 = ({ ...C }) => /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "#58131B", version: "1.1", id: "Capa_1", width: "800px", height: "800px", viewBox: "0 0 378.94 378.94", ...C, children: /* @__PURE__ */ a.jsx("g", { children: /* @__PURE__ */ a.jsx("path", { d: "M348.151,54.514c-19.883-19.884-46.315-30.826-74.435-30.826c-28.124,0-54.559,10.942-74.449,30.826l-9.798,9.8l-9.798-9.8   c-19.884-19.884-46.325-30.826-74.443-30.826c-28.117,0-54.56,10.942-74.442,30.826c-41.049,41.053-41.049,107.848,0,148.885   l147.09,147.091c2.405,2.414,5.399,3.892,8.527,4.461c1.049,0.207,2.104,0.303,3.161,0.303c4.161,0,8.329-1.587,11.498-4.764   l147.09-147.091C389.203,162.362,389.203,95.567,348.151,54.514z M325.155,180.404L189.47,316.091L53.782,180.404   c-28.368-28.364-28.368-74.514,0-102.893c13.741-13.739,32.017-21.296,51.446-21.296c19.431,0,37.702,7.557,51.438,21.296   l21.305,21.312c6.107,6.098,16.897,6.098,23.003,0l21.297-21.312c13.737-13.739,32.009-21.296,51.446-21.296   c19.431,0,37.701,7.557,51.438,21.296C353.526,105.89,353.526,152.039,325.155,180.404z" }) }) });
function I2(C) {
  var r, e, t = "";
  if (typeof C == "string" || typeof C == "number") t += C;
  else if (typeof C == "object") if (Array.isArray(C)) {
    var s = C.length;
    for (r = 0; r < s; r++) C[r] && (e = I2(C[r])) && (t && (t += " "), t += e);
  } else for (e in C) C[e] && (t && (t += " "), t += e);
  return t;
}
function F2() {
  for (var C, r, e = 0, t = "", s = arguments.length; e < s; e++) (C = arguments[e]) && (r = I2(C)) && (t && (t += " "), t += r);
  return t;
}
const E2 = (C) => typeof C == "boolean" ? `${C}` : C === 0 ? "0" : C, _2 = F2, M2 = (C, r) => (e) => {
  var t;
  if (r?.variants == null) return _2(C, e?.class, e?.className);
  const { variants: s, defaultVariants: n } = r, l = Object.keys(s).map((x) => {
    const g = e?.[x], j = n?.[x];
    if (g === null) return null;
    const h = E2(g) || E2(j);
    return s[x][h];
  }), f = e && Object.entries(e).reduce((x, g) => {
    let [j, h] = g;
    return h === void 0 || (x[j] = h), x;
  }, {}), d = r == null || (t = r.compoundVariants) === null || t === void 0 ? void 0 : t.reduce((x, g) => {
    let { class: j, className: h, ..._ } = g;
    return Object.entries(_).every((A) => {
      let [T, y] = A;
      return Array.isArray(y) ? y.includes({
        ...n,
        ...f
      }[T]) : {
        ...n,
        ...f
      }[T] === y;
    }) ? [
      ...x,
      j,
      h
    ] : x;
  }, []);
  return _2(C, l, d, e?.class, e?.className);
}, l1 = (C, r) => {
  const e = new Array(C.length + r.length);
  for (let t = 0; t < C.length; t++)
    e[t] = C[t];
  for (let t = 0; t < r.length; t++)
    e[C.length + t] = r[t];
  return e;
}, i1 = (C, r) => ({
  classGroupId: C,
  validator: r
}), V2 = (C = /* @__PURE__ */ new Map(), r = null, e) => ({
  nextPart: C,
  validators: r,
  classGroupId: e
}), p2 = "-", A2 = [], c1 = "arbitrary..", d1 = (C) => {
  const r = u1(C), {
    conflictingClassGroups: e,
    conflictingClassGroupModifiers: t
  } = C;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return m1(l);
      const f = l.split(p2), d = f[0] === "" && f.length > 1 ? 1 : 0;
      return G2(f, d, r);
    },
    getConflictingClassGroupIds: (l, f) => {
      if (f) {
        const d = t[l], x = e[l];
        return d ? x ? l1(x, d) : d : x || A2;
      }
      return e[l] || A2;
    }
  };
}, G2 = (C, r, e) => {
  if (C.length - r === 0)
    return e.classGroupId;
  const s = C[r], n = e.nextPart.get(s);
  if (n) {
    const x = G2(C, r + 1, n);
    if (x) return x;
  }
  const l = e.validators;
  if (l === null)
    return;
  const f = r === 0 ? C.join(p2) : C.slice(r).join(p2), d = l.length;
  for (let x = 0; x < d; x++) {
    const g = l[x];
    if (g.validator(f))
      return g.classGroupId;
  }
}, m1 = (C) => C.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const r = C.slice(1, -1), e = r.indexOf(":"), t = r.slice(0, e);
  return t ? c1 + t : void 0;
})(), u1 = (C) => {
  const {
    theme: r,
    classGroups: e
  } = C;
  return f1(e, r);
}, f1 = (C, r) => {
  const e = V2();
  for (const t in C) {
    const s = C[t];
    j2(s, e, t, r);
  }
  return e;
}, j2 = (C, r, e, t) => {
  const s = C.length;
  for (let n = 0; n < s; n++) {
    const l = C[n];
    x1(l, r, e, t);
  }
}, x1 = (C, r, e, t) => {
  if (typeof C == "string") {
    b1(C, r, e);
    return;
  }
  if (typeof C == "function") {
    p1(C, r, e, t);
    return;
  }
  g1(C, r, e, t);
}, b1 = (C, r, e) => {
  const t = C === "" ? r : D2(r, C);
  t.classGroupId = e;
}, p1 = (C, r, e, t) => {
  if (h1(C)) {
    j2(C(t), r, e, t);
    return;
  }
  r.validators === null && (r.validators = []), r.validators.push(i1(e, C));
}, g1 = (C, r, e, t) => {
  const s = Object.entries(C), n = s.length;
  for (let l = 0; l < n; l++) {
    const [f, d] = s[l];
    j2(d, D2(r, f), e, t);
  }
}, D2 = (C, r) => {
  let e = C;
  const t = r.split(p2), s = t.length;
  for (let n = 0; n < s; n++) {
    const l = t[n];
    let f = e.nextPart.get(l);
    f || (f = V2(), e.nextPart.set(l, f)), e = f;
  }
  return e;
}, h1 = (C) => "isThemeGetter" in C && C.isThemeGetter === !0, v1 = (C) => {
  if (C < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, e = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  const s = (n, l) => {
    e[n] = l, r++, r > C && (r = 0, t = e, e = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(n) {
      let l = e[n];
      if (l !== void 0)
        return l;
      if ((l = t[n]) !== void 0)
        return s(n, l), l;
    },
    set(n, l) {
      n in e ? e[n] = l : s(n, l);
    }
  };
}, k2 = "!", S2 = ":", w1 = [], z2 = (C, r, e, t, s) => ({
  modifiers: C,
  hasImportantModifier: r,
  baseClassName: e,
  maybePostfixModifierPosition: t,
  isExternal: s
}), y1 = (C) => {
  const {
    prefix: r,
    experimentalParseClassName: e
  } = C;
  let t = (s) => {
    const n = [];
    let l = 0, f = 0, d = 0, x;
    const g = s.length;
    for (let T = 0; T < g; T++) {
      const y = s[T];
      if (l === 0 && f === 0) {
        if (y === S2) {
          n.push(s.slice(d, T)), d = T + 1;
          continue;
        }
        if (y === "/") {
          x = T;
          continue;
        }
      }
      y === "[" ? l++ : y === "]" ? l-- : y === "(" ? f++ : y === ")" && f--;
    }
    const j = n.length === 0 ? s : s.slice(d);
    let h = j, _ = !1;
    j.endsWith(k2) ? (h = j.slice(0, -1), _ = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      j.startsWith(k2) && (h = j.slice(1), _ = !0)
    );
    const A = x && x > d ? x - d : void 0;
    return z2(n, _, h, A);
  };
  if (r) {
    const s = r + S2, n = t;
    t = (l) => l.startsWith(s) ? n(l.slice(s.length)) : z2(w1, !1, l, void 0, !0);
  }
  if (e) {
    const s = t;
    t = (n) => e({
      className: n,
      parseClassName: s
    });
  }
  return t;
}, k1 = (C) => {
  const r = /* @__PURE__ */ new Map();
  return C.orderSensitiveModifiers.forEach((e, t) => {
    r.set(e, 1e6 + t);
  }), (e) => {
    const t = [];
    let s = [];
    for (let n = 0; n < e.length; n++) {
      const l = e[n], f = l[0] === "[", d = r.has(l);
      f || d ? (s.length > 0 && (s.sort(), t.push(...s), s = []), t.push(l)) : s.push(l);
    }
    return s.length > 0 && (s.sort(), t.push(...s)), t;
  };
}, M1 = (C) => ({
  cache: v1(C.cacheSize),
  parseClassName: y1(C),
  sortModifiers: k1(C),
  ...d1(C)
}), j1 = /\s+/, N1 = (C, r) => {
  const {
    parseClassName: e,
    getClassGroupId: t,
    getConflictingClassGroupIds: s,
    sortModifiers: n
  } = r, l = [], f = C.trim().split(j1);
  let d = "";
  for (let x = f.length - 1; x >= 0; x -= 1) {
    const g = f[x], {
      isExternal: j,
      modifiers: h,
      hasImportantModifier: _,
      baseClassName: A,
      maybePostfixModifierPosition: T
    } = e(g);
    if (j) {
      d = g + (d.length > 0 ? " " + d : d);
      continue;
    }
    let y = !!T, I = t(y ? A.substring(0, T) : A);
    if (!I) {
      if (!y) {
        d = g + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (I = t(A), !I) {
        d = g + (d.length > 0 ? " " + d : d);
        continue;
      }
      y = !1;
    }
    const K = h.length === 0 ? "" : h.length === 1 ? h[0] : n(h).join(":"), q = _ ? K + k2 : K, D = q + I;
    if (l.indexOf(D) > -1)
      continue;
    l.push(D);
    const B = s(I, y);
    for (let F = 0; F < B.length; ++F) {
      const J = B[F];
      l.push(q + J);
    }
    d = g + (d.length > 0 ? " " + d : d);
  }
  return d;
}, Z1 = (...C) => {
  let r = 0, e, t, s = "";
  for (; r < C.length; )
    (e = C[r++]) && (t = B2(e)) && (s && (s += " "), s += t);
  return s;
}, B2 = (C) => {
  if (typeof C == "string")
    return C;
  let r, e = "";
  for (let t = 0; t < C.length; t++)
    C[t] && (r = B2(C[t])) && (e && (e += " "), e += r);
  return e;
}, R1 = (C, ...r) => {
  let e, t, s, n;
  const l = (d) => {
    const x = r.reduce((g, j) => j(g), C());
    return e = M1(x), t = e.cache.get, s = e.cache.set, n = f, f(d);
  }, f = (d) => {
    const x = t(d);
    if (x)
      return x;
    const g = N1(d, e);
    return s(d, g), g;
  };
  return n = l, (...d) => n(Z1(...d));
}, T1 = [], R = (C) => {
  const r = (e) => e[C] || T1;
  return r.isThemeGetter = !0, r;
}, W2 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Y2 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, E1 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, _1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, A1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, S1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, z1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, P1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Y = (C) => E1.test(C), p = (C) => !!C && !Number.isNaN(Number(C)), $ = (C) => !!C && Number.isInteger(Number(C)), y2 = (C) => C.endsWith("%") && p(C.slice(0, -1)), G = (C) => _1.test(C), $2 = () => !0, O1 = (C) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  A1.test(C) && !S1.test(C)
), N2 = () => !1, L1 = (C) => z1.test(C), I1 = (C) => P1.test(C), F1 = (C) => !i(C) && !c(C), V1 = (C) => U(C, q2, N2), i = (C) => W2.test(C), X = (C) => U(C, J2, O1), P2 = (C) => U(C, U1, p), G1 = (C) => U(C, Q2, $2), D1 = (C) => U(C, X2, N2), O2 = (C) => U(C, H2, N2), B1 = (C) => U(C, U2, I1), x2 = (C) => U(C, K2, L1), c = (C) => Y2.test(C), a2 = (C) => Q(C, J2), W1 = (C) => Q(C, X2), L2 = (C) => Q(C, H2), Y1 = (C) => Q(C, q2), $1 = (C) => Q(C, U2), b2 = (C) => Q(C, K2, !0), H1 = (C) => Q(C, Q2, !0), U = (C, r, e) => {
  const t = W2.exec(C);
  return t ? t[1] ? r(t[1]) : e(t[2]) : !1;
}, Q = (C, r, e = !1) => {
  const t = Y2.exec(C);
  return t ? t[1] ? r(t[1]) : e : !1;
}, H2 = (C) => C === "position" || C === "percentage", U2 = (C) => C === "image" || C === "url", q2 = (C) => C === "length" || C === "size" || C === "bg-size", J2 = (C) => C === "length", U1 = (C) => C === "number", X2 = (C) => C === "family-name", Q2 = (C) => C === "number" || C === "weight", K2 = (C) => C === "shadow", q1 = () => {
  const C = R("color"), r = R("font"), e = R("text"), t = R("font-weight"), s = R("tracking"), n = R("leading"), l = R("breakpoint"), f = R("container"), d = R("spacing"), x = R("radius"), g = R("shadow"), j = R("inset-shadow"), h = R("text-shadow"), _ = R("drop-shadow"), A = R("blur"), T = R("perspective"), y = R("aspect"), I = R("ease"), K = R("animate"), q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], D = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], B = () => [...D(), c, i], F = () => ["auto", "hidden", "clip", "visible", "scroll"], J = () => ["auto", "contain", "none"], m = () => [c, i, d], E = () => [Y, "full", "auto", ...m()], l2 = () => [$, "none", "subgrid", c, i], i2 = () => ["auto", {
    span: ["full", $, c, i]
  }, $, c, i], W = () => [$, "auto", c, i], r2 = () => ["auto", "min", "max", "fr", c, i], o2 = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], O = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], S = () => ["auto", ...m()], L = () => [Y, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...m()], C2 = () => [Y, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...m()], e2 = () => [Y, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...m()], u = () => [C, c, i], o = () => [...D(), L2, O2, {
    position: [c, i]
  }], b = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], v = () => ["auto", "cover", "contain", Y1, V1, {
    size: [c, i]
  }], k = () => [y2, a2, X], N = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    x,
    c,
    i
  ], Z = () => ["", p, a2, X], w = () => ["solid", "dashed", "dotted", "double"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], M = () => [p, y2, L2, O2], c2 = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    A,
    c,
    i
  ], d2 = () => ["none", p, c, i], m2 = () => ["none", p, c, i], w2 = () => [p, c, i], u2 = () => [Y, "full", ...m()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [G],
      breakpoint: [G],
      color: [$2],
      container: [G],
      "drop-shadow": [G],
      ease: ["in", "out", "in-out"],
      font: [F1],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [G],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [G],
      shadow: [G],
      spacing: ["px", p],
      text: [G],
      "text-shadow": [G],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Y, i, c, y]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [p, i, c, f]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: B()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: F()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": F()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": F()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: E()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": E()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": E()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": E(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: E()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": E(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: E()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": E()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": E()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: E()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: E()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: E()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: E()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [$, "auto", c, i]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Y, "full", "auto", f, ...m()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [p, Y, "auto", "initial", "none", i]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", p, c, i]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", p, c, i]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [$, "first", "last", "none", c, i]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": l2()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: i2()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": l2()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: i2()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": r2()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": r2()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: m()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": m()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": m()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...o2(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...O(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...O()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...o2()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...O(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...O(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": o2()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...O(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...O()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: m()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: m()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: m()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: m()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: m()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: m()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: m()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: m()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: m()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: m()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: m()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: S()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: S()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: S()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: S()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: S()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: S()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: S()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: S()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: S()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: S()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: S()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": m()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": m()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: L()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...C2()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...C2()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...C2()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...e2()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...e2()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...e2()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [f, "screen", ...L()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          f,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...L()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          f,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...L()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...L()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...L()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...L()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", e, a2, X]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [t, H1, G1]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", y2, i]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [W1, D1, r]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [i]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, c, i]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [p, "none", c, P2]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          n,
          ...m()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", c, i]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", c, i]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: u()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: u()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...w(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [p, "from-font", "auto", c, X]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: u()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [p, "auto", c, i]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: m()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", c, i]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", c, i]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: o()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: b()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: v()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, $, c, i],
          radial: ["", c, i],
          conic: [$, c, i]
        }, $1, B1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: u()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: k()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: k()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: k()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: u()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: u()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: u()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: N()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": N()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": N()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": N()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": N()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": N()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": N()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": N()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": N()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": N()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": N()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": N()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": N()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": N()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": N()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Z()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Z()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Z()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Z()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Z()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": Z()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": Z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Z()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": Z()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...w(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...w(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: u()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": u()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": u()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": u()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": u()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": u()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": u()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": u()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": u()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": u()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": u()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: u()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...w(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [p, c, i]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", p, a2, X]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: u()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          b2,
          x2
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: u()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", j, b2, x2]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": u()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Z()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: u()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [p, X]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": u()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": u()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, b2, x2]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": u()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [p, c, i]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...V(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [p]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": M()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": u()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": u()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": M()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": u()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": u()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": M()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": u()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": u()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": M()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": u()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": u()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": M()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": u()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": u()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": M()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": u()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": u()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": M()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": u()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": u()
      }],
      "mask-image-radial": [{
        "mask-radial": [c, i]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": M()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": u()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": u()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": D()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [p]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": M()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": u()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": u()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: o()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: b()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: v()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", c, i]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          c,
          i
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: c2()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [p, c, i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p, c, i]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          _,
          b2,
          x2
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": u()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", p, c, i]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p, c, i]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", p, c, i]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [p, c, i]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", p, c, i]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          c,
          i
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": c2()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [p, c, i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p, c, i]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", p, c, i]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p, c, i]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", p, c, i]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [p, c, i]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [p, c, i]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", p, c, i]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": m()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": m()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": m()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", c, i]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [p, "initial", c, i]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", I, c, i]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [p, c, i]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", K, c, i]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [T, c, i]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": B()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: d2()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": d2()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": d2()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": d2()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: m2()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": m2()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": m2()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": m2()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: w2()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": w2()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": w2()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [c, i, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: B()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: u2()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": u2()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": u2()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": u2()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: u()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: u()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", c, i]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": m()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": m()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": m()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": m()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": m()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": m()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": m()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": m()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": m()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": m()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": m()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": m()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": m()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": m()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": m()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": m()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": m()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": m()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": m()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": m()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": m()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": m()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", c, i]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...u()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [p, a2, X, P2]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...u()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, J1 = /* @__PURE__ */ R1(q1);
function z(...C) {
  return J1(F2(C));
}
const X1 = "flex space-x-xs items-center justify-center duration-150 outline-none ring-offset-transparent focus-visible:outline-none", t2 = {
  default: "cursor-pointer py-1.5 px-6 rounded-4xl font-mono font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-burgundy-950",
  primary: "bg-burgundy-950 text-rose-white hover:bg-burgundy-700 active:bg-burgundy-950",
  secondary: "border-2 border-burgundy-950 bg-transparent text-burgundy-950 hover:border-burgundy-950 hover:text-rose-white hover:bg-burgundy-600 focus:ring-1 active:text-rose-white active:bg-burgundy-700",
  tertiary: "text-burgundy-950 hover:underline active:underline active:font-semibold"
}, Q1 = M2(X1, {
  variants: {
    variant: {
      primary: z(t2.default, t2.primary),
      secondary: z(t2.default, t2.secondary),
      tertiary: z(t2.default, t2.tertiary)
    },
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl"
    },
    fullWidth: {
      true: "w-full"
    },
    disabled: {
      true: "bg-burgundy-100 text-burgundy-200 border-none pointer-events-none"
    }
  }
}), C1 = H(
  ({ variant: C, size: r, fullWidth: e, disabled: t, className: s, children: n, ...l }, f) => /* @__PURE__ */ a.jsx(
    "button",
    {
      disabled: t,
      ref: f,
      className: z(z, Q1({ fullWidth: e, disabled: t, variant: C, size: r }), s),
      ...l,
      children: n
    }
  )
);
C1.displayName = "Button";
const K1 = M2("font-bold", {
  variants: {
    color: {
      burgundy: "text-burgundy-950",
      teal: "text-teal-950",
      white: "text-rose-white"
    },
    size: {
      h1: "text-2xl sm:text-4xl",
      h2: "text-xl sm:text-3xl",
      h3: "text-lg sm:text-2xl",
      h4: "text-lg sm:text-xl",
      h5: "text-base sm:text-lg",
      h6: "text-sm sm:text-base"
    }
  },
  defaultVariants: {
    color: "teal",
    size: "h1"
  }
}), g2 = H(
  ({ as: C = "h1", color: r, size: e, className: t, children: s, ...n }, l) => /* @__PURE__ */ a.jsx(
    C,
    {
      ref: l,
      className: z(K1({ color: r, size: e }), t),
      ...n,
      children: s
    }
  )
);
g2.displayName = "Heading";
const h2 = ({ href: C, children: r, className: e, as: t = "a", ...s }) => /* @__PURE__ */ a.jsx(t, { href: C, className: e, ...s, children: r }), C3 = H(({ className: C, imageSrc: r, title: e, children: t, size: s, buttonText: n, hrefButtonLink: l, disableButton: f }, d) => /* @__PURE__ */ a.jsxs("div", { className: z(C, `${s === "sm" ? "max-w-sm" : "max-w-2xl"}`, "w-full bg-white shadow-md rounded-sm flex flex-col h-full"), ref: d, children: [
  r && /* @__PURE__ */ a.jsx("div", { className: "lg:h-70 md:h-57 h-70 overflow-hidden", children: /* @__PURE__ */ a.jsx("img", { className: "w-full h-full object-cover", src: r, alt: "" }) }),
  /* @__PURE__ */ a.jsxs("div", { className: "p-4 text-center justify-items-center flex flex-col flex-1", children: [
    e && /* @__PURE__ */ a.jsx(g2, { className: "mb-4", size: "h1", color: "teal", children: e }),
    /* @__PURE__ */ a.jsx("div", { className: "flex-1 my-4", children: t }),
    n && /* @__PURE__ */ a.jsx("div", { className: "mt-auto pt-4 justify-items-center", children: /* @__PURE__ */ a.jsx(C1, { variant: "primary", size: "lg", disabled: f, children: /* @__PURE__ */ a.jsx(h2, { href: l || "/", children: n }) }) })
  ] })
] }));
C3.displayName = "Card";
const e3 = M2("font-normal", {
  variants: {
    variant: {
      burgundy: "text-burgundy-950",
      teal: "text-teal-950",
      white: "text-rose-white"
    },
    size: {
      sm: "text-xs sm:text-sm",
      md: "text-sm sm:text-base",
      lg: "text-md sm:text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl"
    }
  },
  defaultVariants: {
    variant: "teal",
    size: "md"
  }
}), P = H(
  ({ as: C = "p", variant: r, size: e, className: t, children: s, ...n }, l) => /* @__PURE__ */ a.jsx(
    C,
    {
      ref: l,
      className: z(e3({ variant: r, size: e }), t),
      ...n,
      children: s
    }
  )
);
P.displayName = "Typography";
const t3 = H(
  ({ weddingDate: C, className: r, ...e }, t) => {
    const s = () => {
      const d = /* @__PURE__ */ new Date(), x = new Date(C), g = d.getTime(), h = x.getTime() - g, _ = Math.floor(h / (1e3 * 60 * 60 * 24)), A = Math.floor(h % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), T = Math.floor(h % (1e3 * 60 * 60) / (1e3 * 60)), y = Math.floor(h % (1e3 * 60) / 1e3);
      return { days: _, hours: A, minutes: T, seconds: y };
    }, [n, l] = t1(s());
    r1(() => {
      const d = setInterval(() => {
        l(s());
      }, 1e3);
      return () => clearInterval(d);
    }, []);
    const f = (d, x, g) => d === 1 ? x : g;
    return /* @__PURE__ */ a.jsx("div", { className: z("bg-burgundy-950 w-full", r), ref: t, ...e, children: n.days < 0 ? /* @__PURE__ */ a.jsx("div", { className: "mx-auto justify-center text-center py-24", children: /* @__PURE__ */ a.jsx(P, { variant: "white", className: "font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl", children: "Tijd voor de bruiloft!" }) }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(P, { variant: "white", className: "font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl justify-center text-center py-12", children: "Aftellen naar onze bruiloft" }),
      /* @__PURE__ */ a.jsxs("div", { className: "mx-auto grid grid-cols-4 gap-2 md:gap-4 xl:gap-6 justify-center text-center", children: [
        /* @__PURE__ */ a.jsx(P, { variant: "white", className: "font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl", children: n.days }),
        /* @__PURE__ */ a.jsx(P, { variant: "white", className: "font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl", children: n.hours }),
        /* @__PURE__ */ a.jsx(P, { variant: "white", className: "font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl", children: n.minutes }),
        /* @__PURE__ */ a.jsx(P, { variant: "white", className: "font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl", children: n.seconds })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "mx-auto grid grid-cols-4 sm:gap-2 gap-0 md:gap-4 xl:gap-6 justify-center text-center py-12", children: [
        /* @__PURE__ */ a.jsx(P, { variant: "white", className: "font-normal text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl", children: f(n.days, "dag", "dagen") }),
        /* @__PURE__ */ a.jsx(P, { variant: "white", className: "font-normal text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl", children: f(n.hours, "uur", "uren") }),
        /* @__PURE__ */ a.jsx(P, { variant: "white", className: "font-normal text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl", children: f(n.minutes, "minuut", "minuten") }),
        /* @__PURE__ */ a.jsx(P, { variant: "white", className: "font-normal text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl", children: f(n.seconds, "seconde", "seconden") })
      ] })
    ] }) });
  }
);
t3.displayName = "Countdown";
const r3 = () => /* @__PURE__ */ a.jsx("svg", { width: "93", height: "15", viewBox: "0 0 124 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a.jsx("path", { d: "M0.37197 18.5691C0.24797 18.5691 0.15497 18.5381 0.0929698 18.4761C0.0309697 18.4141 0.0103031 18.3624 0.0309697 18.3211C1.4363 15.7997 2.84164 13.2887 4.24697 10.7881C5.6523 8.26674 7.05764 5.75574 8.46297 3.25507C7.65697 3.97841 6.84064 4.67074 6.01397 5.33207C5.1873 5.97274 4.30897 6.57207 3.37897 7.13007C3.33764 7.15074 3.27564 7.16107 3.19297 7.16107C3.15164 7.14041 3.12064 7.09907 3.09997 7.03707C3.09997 6.97507 3.09997 6.92341 3.09997 6.88207C3.09997 6.79941 3.13097 6.72707 3.19297 6.66507C4.0403 6.02441 4.99097 5.30107 6.04497 4.49507C7.09897 3.66841 8.04964 2.80041 8.89697 1.89107C9.1243 1.64307 9.35164 1.41574 9.57897 1.20907C9.8063 1.00241 10.044 0.88874 10.292 0.868074L11.253 0.775073C11.2943 0.754407 11.3253 0.754407 11.346 0.775073C11.3873 0.775073 11.4286 0.775073 11.47 0.775073V0.930073L1.98397 18.3521C1.8393 18.4347 1.58097 18.4761 1.20897 18.4761C0.83697 18.4967 0.55797 18.5277 0.37197 18.5691ZM14.0967 18.8481C13.8694 18.8481 13.5284 18.7654 13.0737 18.6001C12.6191 18.4554 12.1334 18.2797 11.6167 18.0731C11.1001 17.8457 10.6144 17.6391 10.1597 17.4531C9.72574 17.2464 9.41574 17.1017 9.22974 17.0191L7.09074 18.7241C7.00807 18.7654 6.90474 18.7551 6.78074 18.6931C6.65674 18.6311 6.6154 18.5587 6.65674 18.4761C6.6774 18.4347 6.8324 18.2487 7.12174 17.9181C7.41107 17.5667 7.75207 17.1844 8.14474 16.7711C8.51674 16.3371 8.85774 15.9547 9.16774 15.6241C9.47774 15.2934 9.6534 15.1177 9.69474 15.0971H9.97374C10.0977 15.0971 10.2424 15.1177 10.4077 15.1591C10.9244 14.7044 11.5857 14.1051 12.3917 13.3611C13.1977 12.6171 14.0451 11.7904 14.9337 10.8811C15.8224 9.97174 16.6594 9.04174 17.4447 8.09107C18.2507 7.11974 18.9017 6.18974 19.3977 5.30107C19.8937 4.39174 20.1417 3.58574 20.1417 2.88307C20.1417 2.38707 20.0074 2.03574 19.7387 1.82907C19.4701 1.62241 19.0981 1.51907 18.6227 1.51907C17.8374 1.51907 17.1037 1.77741 16.4217 2.29407C15.7397 2.81074 15.1404 3.45141 14.6237 4.21607C14.1277 4.96007 13.7454 5.67307 13.4767 6.35507C13.4354 6.43774 13.3941 6.47907 13.3527 6.47907C13.2287 6.54107 13.1047 6.54107 12.9807 6.47907C12.9394 6.37574 12.9291 6.30341 12.9497 6.26207C13.2804 5.35274 13.7454 4.46407 14.3447 3.59607C14.9647 2.70741 15.7087 1.97374 16.5767 1.39507C17.4447 0.816406 18.4057 0.527072 19.4597 0.527072C20.2451 0.527072 20.9064 0.754406 21.4437 1.20907C22.0017 1.64307 22.2807 2.28374 22.2807 3.13107C22.2807 3.68907 22.0637 4.32974 21.6297 5.05307C21.1957 5.77641 20.6171 6.54107 19.8937 7.34707C19.1704 8.15307 18.3851 8.95907 17.5377 9.76507C16.6904 10.5711 15.8431 11.3357 14.9957 12.0591C14.1484 12.7824 13.3734 13.4334 12.6707 14.0121C11.9681 14.5701 11.4204 15.0144 11.0277 15.3451C11.2344 15.4277 11.5341 15.5724 11.9267 15.7791C12.3194 15.9651 12.7431 16.1614 13.1977 16.3681C13.6524 16.5747 14.0657 16.7504 14.4377 16.8951C14.8304 17.0397 15.1197 17.1121 15.3057 17.1121C15.7397 17.1121 16.1427 17.0087 16.5147 16.8021C16.9074 16.5747 17.2587 16.3164 17.5687 16.0271C17.8787 15.7377 18.1371 15.4794 18.3437 15.2521C18.5711 15.0041 18.7261 14.8697 18.8087 14.8491C18.8501 14.8284 18.9017 14.8491 18.9637 14.9111C19.0464 14.9731 19.0774 15.0557 19.0567 15.1591C18.8087 15.4691 18.4884 15.8307 18.0957 16.2441C17.7237 16.6574 17.3001 17.0604 16.8247 17.4531C16.3701 17.8457 15.9051 18.1764 15.4297 18.4451C14.9544 18.7137 14.5101 18.8481 14.0967 18.8481ZM24.6864 11.9661C24.5831 11.9661 24.5314 11.9247 24.5314 11.8421C24.5314 11.6974 24.5831 11.5321 24.6864 11.3461C24.8104 11.1394 25.0377 11.0361 25.3684 11.0361H32.7154C32.8187 11.0361 32.8704 11.0774 32.8704 11.1601C32.8704 11.3874 32.8084 11.5837 32.6844 11.7491C32.5604 11.8937 32.3227 11.9661 31.9714 11.9661H24.6864ZM37.6536 18.8481C36.8889 18.8481 36.2483 18.6621 35.7316 18.2901C35.2356 17.8974 34.8636 17.3911 34.6156 16.7711C34.3676 16.1511 34.2436 15.4897 34.2436 14.7871C34.2436 14.0017 34.3986 13.1027 34.7086 12.0901C35.0186 11.0774 35.4423 10.0337 35.9796 8.95907C36.5376 7.88441 37.1783 6.84074 37.9016 5.82807C38.6249 4.81541 39.3999 3.90607 40.2266 3.10007C41.0739 2.27341 41.9419 1.62241 42.8306 1.14707C43.7193 0.67174 44.5976 0.434074 45.4656 0.434074C46.5609 0.434074 47.3153 0.775074 47.7286 1.45707C48.1626 2.11841 48.3796 2.93474 48.3796 3.90607C48.3796 4.73274 48.2453 5.67307 47.9766 6.72707C47.7079 7.76041 47.3256 8.84541 46.8296 9.98207C46.3543 11.0981 45.7859 12.1831 45.1246 13.2371C44.4633 14.2911 43.7296 15.2417 42.9236 16.0891C42.1383 16.9364 41.3013 17.6081 40.4126 18.1041C39.5239 18.6001 38.6043 18.8481 37.6536 18.8481ZM38.0256 18.2281C38.7283 18.2281 39.4413 17.9594 40.1646 17.4221C40.8879 16.8641 41.5906 16.1304 42.2726 15.2211C42.9546 14.2911 43.5849 13.2784 44.1636 12.1831C44.7629 11.0671 45.2899 9.95107 45.7446 8.83507C46.1993 7.69841 46.5506 6.65474 46.7986 5.70407C47.0466 4.73274 47.1706 3.93707 47.1706 3.31707C47.1706 2.71774 47.0569 2.19074 46.8296 1.73607C46.6023 1.26074 46.1579 1.02307 45.4966 1.02307C44.8146 1.02307 44.1119 1.30207 43.3886 1.86007C42.6653 2.41807 41.9523 3.16207 41.2496 4.09207C40.5676 5.00141 39.9166 6.01407 39.2966 7.13007C38.6766 8.24607 38.1289 9.36207 37.6536 10.4781C37.1783 11.5941 36.8063 12.6274 36.5376 13.5781C36.2689 14.5081 36.1346 15.2624 36.1346 15.8411C36.1346 16.4817 36.2689 17.0397 36.5376 17.5151C36.8063 17.9904 37.3023 18.2281 38.0256 18.2281ZM49.4338 19.1891C49.3098 19.1064 49.2685 19.0031 49.3098 18.8791C49.3305 18.8377 49.3718 18.7861 49.4338 18.7241C51.7485 17.0707 53.7325 15.1694 55.3858 13.0201C57.0392 10.8707 58.2275 8.39074 58.9508 5.58007C59.0748 5.10474 59.1575 4.70174 59.1988 4.37107C59.2608 4.04041 59.2918 3.68907 59.2918 3.31707C59.2918 2.71774 59.1575 2.21141 58.8888 1.79807C58.6408 1.36407 58.1862 1.14707 57.5248 1.14707C56.7808 1.14707 56.0575 1.39507 55.3548 1.89107C54.6522 2.38707 54.0115 3.01741 53.4328 3.78207C52.8542 4.54674 52.3892 5.35274 52.0378 6.20007C51.7072 7.02674 51.5418 7.78107 51.5418 8.46307C51.5418 8.95907 51.6658 9.37241 51.9138 9.70307C52.1825 10.0337 52.5855 10.1991 53.1228 10.1991C53.8462 10.1991 54.4765 9.96141 55.0138 9.48607C55.5718 8.99007 56.0472 8.41141 56.4398 7.75007C56.8325 7.06807 57.1528 6.44807 57.4008 5.89007C57.4215 5.82807 57.4628 5.78674 57.5248 5.76607C57.6282 5.72474 57.7418 5.73507 57.8658 5.79707C57.9278 5.85907 57.9382 5.92107 57.8968 5.98307C57.6902 6.54107 57.3905 7.16107 56.9978 7.84307C56.6258 8.52507 56.1815 9.18641 55.6648 9.82707C55.1482 10.4677 54.5798 10.9947 53.9598 11.4081C53.3398 11.8007 52.6888 11.9971 52.0068 11.9971C51.2628 11.9971 50.7048 11.7697 50.3328 11.3151C49.9608 10.8397 49.7748 10.2611 49.7748 9.57907C49.7748 8.87641 49.9402 8.12207 50.2708 7.31607C50.6222 6.48941 51.0872 5.68341 51.6658 4.89807C52.2445 4.09207 52.8955 3.35841 53.6188 2.69707C54.3422 2.03574 55.0862 1.50874 55.8508 1.11607C56.6155 0.723406 57.3595 0.527072 58.0828 0.527072C58.8062 0.527072 59.3952 0.713073 59.8498 1.08507C60.3045 1.43641 60.6352 1.90141 60.8418 2.48007C61.0692 3.03807 61.1828 3.63741 61.1828 4.27807C61.1828 5.43541 60.9245 6.60307 60.4078 7.78107C59.9118 8.93841 59.2402 10.0751 58.3928 11.1911C57.5662 12.2864 56.6362 13.3404 55.6028 14.3531C54.5902 15.3451 53.5672 16.2544 52.5338 17.0811C51.5005 17.8871 50.5395 18.5897 49.6508 19.1891C49.5888 19.2304 49.5165 19.2304 49.4338 19.1891ZM63.8905 11.9661C63.7872 11.9661 63.7355 11.9247 63.7355 11.8421C63.7355 11.6974 63.7872 11.5321 63.8905 11.3461C64.0145 11.1394 64.2418 11.0361 64.5725 11.0361H71.9195C72.0228 11.0361 72.0745 11.0774 72.0745 11.1601C72.0745 11.3874 72.0125 11.5837 71.8885 11.7491C71.7645 11.8937 71.5268 11.9661 71.1755 11.9661H63.8905ZM77.9737 18.8481C77.7464 18.8481 77.4054 18.7654 76.9507 18.6001C76.496 18.4554 76.0104 18.2797 75.4937 18.0731C74.977 17.8457 74.4914 17.6391 74.0367 17.4531C73.6027 17.2464 73.2927 17.1017 73.1067 17.0191L70.9677 18.7241C70.885 18.7654 70.7817 18.7551 70.6577 18.6931C70.5337 18.6311 70.4924 18.5587 70.5337 18.4761C70.5544 18.4347 70.7094 18.2487 70.9987 17.9181C71.288 17.5667 71.629 17.1844 72.0217 16.7711C72.3937 16.3371 72.7347 15.9547 73.0447 15.6241C73.3547 15.2934 73.5304 15.1177 73.5717 15.0971H73.8507C73.9747 15.0971 74.1194 15.1177 74.2847 15.1591C74.8014 14.7044 75.4627 14.1051 76.2687 13.3611C77.0747 12.6171 77.922 11.7904 78.8107 10.8811C79.6994 9.97174 80.5364 9.04174 81.3217 8.09107C82.1277 7.11974 82.7787 6.18974 83.2747 5.30107C83.7707 4.39174 84.0187 3.58574 84.0187 2.88307C84.0187 2.38707 83.8844 2.03574 83.6157 1.82907C83.347 1.62241 82.975 1.51907 82.4997 1.51907C81.7144 1.51907 80.9807 1.77741 80.2987 2.29407C79.6167 2.81074 79.0174 3.45141 78.5007 4.21607C78.0047 4.96007 77.6224 5.67307 77.3537 6.35507C77.3124 6.43774 77.271 6.47907 77.2297 6.47907C77.1057 6.54107 76.9817 6.54107 76.8577 6.47907C76.8164 6.37574 76.806 6.30341 76.8267 6.26207C77.1574 5.35274 77.6224 4.46407 78.2217 3.59607C78.8417 2.70741 79.5857 1.97374 80.4537 1.39507C81.3217 0.816406 82.2827 0.527072 83.3367 0.527072C84.122 0.527072 84.7834 0.754406 85.3207 1.20907C85.8787 1.64307 86.1577 2.28374 86.1577 3.13107C86.1577 3.68907 85.9407 4.32974 85.5067 5.05307C85.0727 5.77641 84.494 6.54107 83.7707 7.34707C83.0474 8.15307 82.262 8.95907 81.4147 9.76507C80.5674 10.5711 79.72 11.3357 78.8727 12.0591C78.0254 12.7824 77.2504 13.4334 76.5477 14.0121C75.845 14.5701 75.2974 15.0144 74.9047 15.3451C75.1114 15.4277 75.411 15.5724 75.8037 15.7791C76.1964 15.9651 76.62 16.1614 77.0747 16.3681C77.5294 16.5747 77.9427 16.7504 78.3147 16.8951C78.7074 17.0397 78.9967 17.1121 79.1827 17.1121C79.6167 17.1121 80.0197 17.0087 80.3917 16.8021C80.7844 16.5747 81.1357 16.3164 81.4457 16.0271C81.7557 15.7377 82.014 15.4794 82.2207 15.2521C82.448 15.0041 82.603 14.8697 82.6857 14.8491C82.727 14.8284 82.7787 14.8491 82.8407 14.9111C82.9234 14.9731 82.9544 15.0557 82.9337 15.1591C82.6857 15.4691 82.3654 15.8307 81.9727 16.2441C81.6007 16.6574 81.177 17.0604 80.7017 17.4531C80.247 17.8457 79.782 18.1764 79.3067 18.4451C78.8314 18.7137 78.387 18.8481 77.9737 18.8481ZM88.9973 18.8481C88.2327 18.8481 87.592 18.6621 87.0753 18.2901C86.5793 17.8974 86.2073 17.3911 85.9593 16.7711C85.7113 16.1511 85.5873 15.4897 85.5873 14.7871C85.5873 14.0017 85.7423 13.1027 86.0523 12.0901C86.3623 11.0774 86.786 10.0337 87.3233 8.95907C87.8813 7.88441 88.522 6.84074 89.2453 5.82807C89.9687 4.81541 90.7437 3.90607 91.5703 3.10007C92.4177 2.27341 93.2857 1.62241 94.1743 1.14707C95.063 0.67174 95.9413 0.434074 96.8093 0.434074C97.9047 0.434074 98.659 0.775074 99.0723 1.45707C99.5063 2.11841 99.7233 2.93474 99.7233 3.90607C99.7233 4.73274 99.589 5.67307 99.3203 6.72707C99.0517 7.76041 98.6693 8.84541 98.1733 9.98207C97.698 11.0981 97.1297 12.1831 96.4683 13.2371C95.807 14.2911 95.0733 15.2417 94.2673 16.0891C93.482 16.9364 92.645 17.6081 91.7563 18.1041C90.8677 18.6001 89.948 18.8481 88.9973 18.8481ZM89.3693 18.2281C90.072 18.2281 90.785 17.9594 91.5083 17.4221C92.2317 16.8641 92.9343 16.1304 93.6163 15.2211C94.2983 14.2911 94.9287 13.2784 95.5073 12.1831C96.1067 11.0671 96.6337 9.95107 97.0883 8.83507C97.543 7.69841 97.8943 6.65474 98.1423 5.70407C98.3903 4.73274 98.5143 3.93707 98.5143 3.31707C98.5143 2.71774 98.4007 2.19074 98.1733 1.73607C97.946 1.26074 97.5017 1.02307 96.8403 1.02307C96.1583 1.02307 95.4557 1.30207 94.7323 1.86007C94.009 2.41807 93.296 3.16207 92.5933 4.09207C91.9113 5.00141 91.2603 6.01407 90.6403 7.13007C90.0203 8.24607 89.4727 9.36207 88.9973 10.4781C88.522 11.5941 88.15 12.6274 87.8813 13.5781C87.6127 14.5081 87.4783 15.2624 87.4783 15.8411C87.4783 16.4817 87.6127 17.0397 87.8813 17.5151C88.15 17.9904 88.646 18.2281 89.3693 18.2281ZM104.312 18.8481C104.084 18.8481 103.743 18.7654 103.289 18.6001C102.834 18.4554 102.348 18.2797 101.832 18.0731C101.315 17.8457 100.829 17.6391 100.375 17.4531C99.9406 17.2464 99.6306 17.1017 99.4446 17.0191L97.3056 18.7241C97.2229 18.7654 97.1196 18.7551 96.9956 18.6931C96.8716 18.6311 96.8302 18.5587 96.8716 18.4761C96.8922 18.4347 97.0472 18.2487 97.3366 17.9181C97.6259 17.5667 97.9669 17.1844 98.3596 16.7711C98.7316 16.3371 99.0726 15.9547 99.3826 15.6241C99.6926 15.2934 99.8682 15.1177 99.9096 15.0971H100.189C100.313 15.0971 100.457 15.1177 100.623 15.1591C101.139 14.7044 101.801 14.1051 102.607 13.3611C103.413 12.6171 104.26 11.7904 105.149 10.8811C106.037 9.97174 106.874 9.04174 107.66 8.09107C108.466 7.11974 109.117 6.18974 109.613 5.30107C110.109 4.39174 110.357 3.58574 110.357 2.88307C110.357 2.38707 110.222 2.03574 109.954 1.82907C109.685 1.62241 109.313 1.51907 108.838 1.51907C108.052 1.51907 107.319 1.77741 106.637 2.29407C105.955 2.81074 105.355 3.45141 104.839 4.21607C104.343 4.96007 103.96 5.67307 103.692 6.35507C103.65 6.43774 103.609 6.47907 103.568 6.47907C103.444 6.54107 103.32 6.54107 103.196 6.47907C103.154 6.37574 103.144 6.30341 103.165 6.26207C103.495 5.35274 103.96 4.46407 104.56 3.59607C105.18 2.70741 105.924 1.97374 106.792 1.39507C107.66 0.816406 108.621 0.527072 109.675 0.527072C110.46 0.527072 111.121 0.754406 111.659 1.20907C112.217 1.64307 112.496 2.28374 112.496 3.13107C112.496 3.68907 112.279 4.32974 111.845 5.05307C111.411 5.77641 110.832 6.54107 110.109 7.34707C109.385 8.15307 108.6 8.95907 107.753 9.76507C106.905 10.5711 106.058 11.3357 105.211 12.0591C104.363 12.7824 103.588 13.4334 102.886 14.0121C102.183 14.5701 101.635 15.0144 101.243 15.3451C101.449 15.4277 101.749 15.5724 102.142 15.7791C102.534 15.9651 102.958 16.1614 103.413 16.3681C103.867 16.5747 104.281 16.7504 104.653 16.8951C105.045 17.0397 105.335 17.1121 105.521 17.1121C105.955 17.1121 106.358 17.0087 106.73 16.8021C107.122 16.5747 107.474 16.3164 107.784 16.0271C108.094 15.7377 108.352 15.4794 108.559 15.2521C108.786 15.0041 108.941 14.8697 109.024 14.8491C109.065 14.8284 109.117 14.8491 109.179 14.9111C109.261 14.9731 109.292 15.0557 109.272 15.1591C109.024 15.4691 108.703 15.8307 108.311 16.2441C107.939 16.6574 107.515 17.0604 107.04 17.4531C106.585 17.8457 106.12 18.1764 105.645 18.4451C105.169 18.7137 104.725 18.8481 104.312 18.8481ZM114.653 18.8481C113.62 18.8481 112.793 18.5587 112.173 17.9801C111.553 17.3807 111.243 16.5437 111.243 15.4691C111.243 14.3324 111.512 13.1751 112.049 11.9971C112.607 10.8191 113.331 9.65141 114.219 8.49407C115.108 7.33674 116.09 6.23107 117.164 5.17707C118.239 4.12307 119.303 3.17241 120.357 2.32507C121.432 1.45707 122.403 0.723407 123.271 0.124074C123.375 0.0414071 123.468 0.0724067 123.55 0.217073C123.654 0.36174 123.674 0.465073 123.612 0.527072C123.261 0.85774 122.879 1.20907 122.465 1.58107C122.073 1.93241 121.701 2.26307 121.349 2.57307C120.647 3.21374 119.944 3.92674 119.241 4.71207C118.539 5.47674 117.908 6.22074 117.35 6.94407C116.916 7.52274 116.451 8.18407 115.955 8.92807C115.459 9.67207 114.994 10.4677 114.56 11.3151C114.147 12.1417 113.796 12.9787 113.506 13.8261C113.238 14.6527 113.103 15.4381 113.103 16.1821C113.103 16.6987 113.248 17.1534 113.537 17.5461C113.827 17.9181 114.25 18.1041 114.808 18.1041C115.552 18.1041 116.276 17.8251 116.978 17.2671C117.681 16.7091 118.301 16.0064 118.838 15.1591C119.396 14.2911 119.841 13.4127 120.171 12.5241C120.502 11.6354 120.667 10.8604 120.667 10.1991C120.667 9.84774 120.595 9.55841 120.45 9.33107C120.306 9.08307 120.037 8.95907 119.644 8.95907C119.128 8.95907 118.632 9.13474 118.156 9.48607C117.681 9.83741 117.237 10.2817 116.823 10.8191C116.431 11.3357 116.09 11.8731 115.8 12.4311C115.511 12.9891 115.284 13.4747 115.118 13.8881C115.098 14.0121 115.056 14.0741 114.994 14.0741C114.932 14.0947 114.85 14.1051 114.746 14.1051C114.602 14.0637 114.56 13.9914 114.622 13.8881C114.767 13.2887 115.015 12.6481 115.366 11.9661C115.718 11.2841 116.152 10.6434 116.668 10.0441C117.185 9.44474 117.753 8.95907 118.373 8.58707C119.014 8.19441 119.686 7.99807 120.388 7.99807C121.112 7.99807 121.67 8.22541 122.062 8.68007C122.455 9.13474 122.651 9.70307 122.651 10.3851C122.651 11.2737 122.403 12.2141 121.907 13.2061C121.432 14.1774 120.802 15.0971 120.016 15.9651C119.231 16.8124 118.363 17.5047 117.412 18.0421C116.482 18.5794 115.563 18.8481 114.653 18.8481Z", fill: "#FDFDFD" }) }), v2 = ({ color: C, shortName: r = !1, ...e }) => r ? C === "teal" ? /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 285 61", className: "w-[200px] sm:w-[285px] h-auto", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M16.172 49.92C13.0173 49.92 10.2093 49.2787 7.74801 47.996C5.32134 46.748 3.41467 44.8933 2.02801 42.432C0.676005 39.936 5.00679e-06 36.8853 5.00679e-06 33.28C5.00679e-06 31.1307 0.277338 28.9813 0.832005 26.832C1.38667 24.6827 2.13201 22.62 3.06801 20.644C4.03867 18.668 5.11334 16.848 6.29201 15.184C5.77201 13.104 5.51201 10.8507 5.51201 8.424C5.51201 6.58667 5.72001 4.836 6.13601 3.172C6.27467 2.68667 6.51734 2.444 6.864 2.444C7.14134 2.444 7.26267 2.61734 7.22801 2.964C7.12401 3.65734 7.03734 4.40267 6.96801 5.2C6.89867 5.96267 6.864 6.88134 6.864 7.956C6.864 9.96667 7.05467 11.8733 7.43601 13.676C7.78267 13.2253 8.12934 12.8093 8.47601 12.428C9.89734 10.868 11.5787 9.412 13.52 8.06C15.4613 6.67334 17.6107 5.564 19.968 4.732C22.36 3.9 24.8907 3.484 27.56 3.484C30.056 3.484 32.344 3.952 34.424 4.888C36.504 5.78934 38.168 7.10667 39.416 8.84C40.6987 10.5387 41.34 12.6013 41.34 15.028C41.34 16.5533 40.924 18.1133 40.092 19.708C39.2947 21.3027 38.1333 22.776 36.608 24.128C35.1173 25.4453 33.2973 26.52 31.148 27.352C29.0333 28.184 26.6587 28.6 24.024 28.6C20.5573 28.6 17.3853 27.8373 14.508 26.312C11.6307 24.7867 9.39467 22.464 7.80001 19.344C6.41334 21.8053 5.39067 24.3013 4.73201 26.832C4.07334 29.3627 3.744 31.772 3.744 34.06C3.744 37.388 4.29867 40.092 5.40801 42.172C6.51734 44.252 8.04267 45.7773 9.98401 46.748C11.96 47.7533 14.2133 48.256 16.744 48.256C21.2507 48.256 25.2027 47.112 28.6 44.824C32.032 42.5707 34.8573 39.0693 37.076 34.32C37.492 34.32 37.7 34.476 37.7 34.788C35.5507 39.9187 32.604 43.7147 28.86 46.176C25.1507 48.672 20.9213 49.92 16.172 49.92ZM10.036 15.86C9.58534 16.484 9.15201 17.1253 8.73601 17.784C9.94934 20.6267 11.804 22.9147 14.3 24.648C16.796 26.3813 19.9333 27.248 23.712 27.248C26.104 27.248 28.236 26.884 30.108 26.156C32.0147 25.428 33.6093 24.4573 34.892 23.244C36.2093 22.0307 37.2147 20.696 37.908 19.24C38.6013 17.7493 38.948 16.2587 38.948 14.768C38.948 12.9307 38.4453 11.3187 37.44 9.932C36.4693 8.54534 35.1347 7.47067 33.436 6.708C31.7373 5.91067 29.8133 5.512 27.664 5.512C25.5147 5.512 23.348 5.96267 21.164 6.864C19.0147 7.76534 16.9693 8.996 15.028 10.556C13.1213 12.116 11.4573 13.884 10.036 15.86ZM36.0368 44.772C37.4928 41.7907 39.0008 38.6707 40.5608 35.412C42.1555 32.1187 43.7848 28.808 45.4488 25.48C47.1128 22.152 48.7595 18.98 50.3888 15.964C50.9782 14.924 51.5155 14.1093 52.0008 13.52C52.5208 12.9307 53.1968 12.636 54.0288 12.636C54.3408 12.636 54.7048 12.688 55.1208 12.792C55.5368 12.896 55.9355 12.9133 56.3168 12.844C55.8662 13.3293 55.2422 14.1787 54.4448 15.392C53.6822 16.6053 52.8155 18.0613 51.8448 19.76C50.9088 21.4587 49.9035 23.296 48.8288 25.272C47.7888 27.2133 46.7488 29.1893 45.7088 31.2C44.7035 33.176 43.7675 35.0307 42.9008 36.764C43.5942 35.8627 44.3048 35.0133 45.0328 34.216C45.7608 33.4187 46.4715 32.7253 47.1648 32.136C47.9275 31.4427 48.8808 30.7147 50.0248 29.952C51.2035 29.1893 52.3648 28.5307 53.5088 27.976C54.6875 27.4213 55.6235 27.144 56.3168 27.144C56.5595 27.144 56.7328 27.1613 56.8368 27.196C56.8368 27.196 56.6462 27.5427 56.2648 28.236C55.8835 28.9293 55.3982 29.8133 54.8088 30.888C54.2542 31.9627 53.6648 33.124 53.0408 34.372C52.4515 35.62 51.9315 36.816 51.4808 37.96C51.0302 39.0693 50.7355 39.988 50.5968 40.716C50.4928 41.2707 50.4408 41.7387 50.4408 42.12C50.4408 42.6747 50.5448 43.056 50.7528 43.264C50.9608 43.4373 51.1862 43.524 51.4288 43.524C52.0182 43.524 52.6422 43.2293 53.3008 42.64C53.9942 42.016 54.6702 41.236 55.3288 40.3C55.9875 39.364 56.5942 38.376 57.1488 37.336C57.7382 36.2613 58.2062 35.256 58.5528 34.32C58.9688 34.32 59.1768 34.476 59.1768 34.788C58.7955 35.724 58.3102 36.764 57.7208 37.908C57.1662 39.0173 56.5248 40.0747 55.7968 41.08C55.0688 42.0853 54.2715 42.9173 53.4048 43.576C52.5382 44.2347 51.6195 44.564 50.6488 44.564C49.9555 44.564 49.2448 44.3213 48.5168 43.836C47.7888 43.3507 47.4248 42.4667 47.4248 41.184C47.4248 40.8027 47.4595 40.404 47.5288 39.988C47.5982 39.5373 47.7195 39.0347 47.8928 38.48C48.1008 37.7867 48.4475 37.024 48.9328 36.192C49.4182 35.3253 50.0422 34.2507 50.8048 32.968C51.1515 32.3787 51.3248 31.9107 51.3248 31.564C51.3248 31.148 51.1168 30.94 50.7008 30.94C50.3542 30.94 49.8862 31.1133 49.2968 31.46C48.7075 31.8067 47.9622 32.4133 47.0608 33.28C46.1942 34.112 45.1195 35.3253 43.8368 36.92C42.5542 38.5147 41.1848 40.7507 39.7288 43.628C39.4862 44.0787 39.2088 44.3213 38.8968 44.356C38.6195 44.356 38.2382 44.3733 37.7528 44.408C37.4408 44.4427 37.1288 44.46 36.8168 44.46C36.5048 44.4947 36.2448 44.5987 36.0368 44.772ZM62.2936 44.564C61.0109 44.564 59.8496 44.148 58.8096 43.316C57.8042 42.484 57.3016 41.2187 57.3016 39.52C57.3016 38.0987 57.6136 36.5907 58.2376 34.996C58.8962 33.4013 59.7456 31.9107 60.7856 30.524C61.8602 29.1027 63.0389 27.9587 64.3216 27.092C65.6389 26.1907 66.9562 25.74 68.2736 25.74C68.9322 25.74 69.5736 25.9307 70.1976 26.312C70.8216 26.6933 71.1336 27.352 71.1336 28.288C71.1336 29.1547 70.8042 30.108 70.1456 31.148C69.4869 32.188 68.5509 33.1587 67.3376 34.06C66.8176 34.4413 66.1589 34.8053 65.3616 35.152C64.5642 35.4987 63.7669 35.7933 62.9696 36.036C62.1722 36.244 61.5136 36.348 60.9936 36.348C60.8202 36.764 60.6469 37.3187 60.4736 38.012C60.3349 38.7053 60.2656 39.416 60.2656 40.144C60.2656 41.0107 60.4389 41.7907 60.7856 42.484C61.1322 43.1773 61.7736 43.524 62.7096 43.524C63.8536 43.524 64.9109 43.1947 65.8816 42.536C66.8869 41.8773 67.7709 41.0453 68.5336 40.04C69.3309 39.0347 70.0069 38.012 70.5616 36.972C71.1162 35.932 71.5496 35.048 71.8616 34.32C72.2776 34.32 72.4856 34.476 72.4856 34.788C72.0349 35.7587 71.5149 36.816 70.9256 37.96C70.3709 39.104 69.6949 40.1787 68.8976 41.184C68.1349 42.1547 67.1989 42.9693 66.0896 43.628C65.0149 44.252 63.7496 44.564 62.2936 44.564ZM61.3576 35.412C61.8429 35.412 62.6576 35.2387 63.8016 34.892C64.9456 34.5107 65.9856 33.9213 66.9216 33.124C67.8229 32.3267 68.5162 31.46 69.0016 30.524C69.4869 29.5533 69.7296 28.7387 69.7296 28.08C69.7296 27.3173 69.4522 26.936 68.8976 26.936C68.4816 26.936 67.9096 27.2133 67.1816 27.768C66.4536 28.3227 65.5522 29.2587 64.4776 30.576C63.8189 31.408 63.1949 32.3093 62.6056 33.28C62.0162 34.2507 61.6002 34.9613 61.3576 35.412ZM74.2983 44.512C73.0156 44.512 72.0623 44.1307 71.4383 43.368C70.8489 42.5707 70.5543 41.6347 70.5543 40.56C70.5543 39.4507 70.7103 38.3067 71.0223 37.128C71.3343 35.9493 71.6116 34.9613 71.8543 34.164C72.4089 32.2227 73.1023 30.16 73.9343 27.976C74.8009 25.7573 75.7369 23.5907 76.7423 21.476C77.7823 19.3267 78.8049 17.4027 79.8103 15.704C80.6076 14.352 81.4569 13.3467 82.3583 12.688C83.2943 11.9947 84.1089 11.648 84.8023 11.648C85.3569 11.648 85.7903 11.856 86.1023 12.272C86.4489 12.6533 86.6223 13.2427 86.6223 14.04C86.6223 14.5947 86.5183 15.2533 86.3103 16.016C86.1369 16.7787 85.8249 17.6453 85.3743 18.616C84.1609 21.32 82.7049 24.024 81.0063 26.728C79.3423 29.432 77.2276 31.9627 74.6623 34.32C74.2463 35.2907 73.8996 36.3307 73.6223 37.44C73.3449 38.5493 73.2063 39.4507 73.2063 40.144C73.2063 42.2933 73.9343 43.368 75.3903 43.368C76.4996 43.368 77.7303 42.5707 79.0823 40.976C80.4343 39.3467 81.7169 37.128 82.9303 34.32C83.0689 34.32 83.2076 34.3547 83.3463 34.424C83.4849 34.4587 83.5543 34.58 83.5543 34.788C83.1729 35.724 82.6876 36.764 82.0983 37.908C81.5436 39.0173 80.8849 40.0747 80.1223 41.08C79.3943 42.0853 78.5449 42.9173 77.5743 43.576C76.6036 44.2 75.5116 44.512 74.2983 44.512ZM75.0783 32.656C76.3263 31.3733 77.5396 29.9 78.7183 28.236C79.8969 26.5373 80.9889 24.7867 81.9943 22.984C83.0343 21.1467 83.9009 19.4133 84.5943 17.784C84.8369 17.264 85.0276 16.692 85.1663 16.068C85.3396 15.444 85.4263 14.924 85.4263 14.508C85.4263 14.0227 85.3049 13.78 85.0623 13.78C84.9236 13.78 84.7156 13.9187 84.4383 14.196C84.1609 14.4387 83.7969 14.872 83.3463 15.496C82.6876 16.3627 81.9596 17.5413 81.1623 19.032C80.3996 20.5227 79.6196 22.1173 78.8223 23.816C78.0249 25.5147 77.2969 27.1613 76.6383 28.756C75.9796 30.316 75.4596 31.616 75.0783 32.656ZM85.3686 44.512C84.0859 44.512 83.1326 44.1307 82.5086 43.368C81.9192 42.5707 81.6246 41.6347 81.6246 40.56C81.6246 39.4507 81.7806 38.3067 82.0926 37.128C82.4046 35.9493 82.6819 34.9613 82.9246 34.164C83.4792 32.2227 84.1726 30.16 85.0046 27.976C85.8712 25.7573 86.8072 23.5907 87.8126 21.476C88.8526 19.3267 89.8752 17.4027 90.8806 15.704C91.6779 14.352 92.5272 13.3467 93.4286 12.688C94.3646 11.9947 95.1792 11.648 95.8726 11.648C96.4272 11.648 96.8606 11.856 97.1726 12.272C97.5192 12.6533 97.6926 13.2427 97.6926 14.04C97.6926 14.5947 97.5886 15.2533 97.3806 16.016C97.2072 16.7787 96.8952 17.6453 96.4446 18.616C95.2312 21.32 93.7752 24.024 92.0766 26.728C90.4126 29.432 88.2979 31.9627 85.7326 34.32C85.3166 35.2907 84.9699 36.3307 84.6926 37.44C84.4152 38.5493 84.2766 39.4507 84.2766 40.144C84.2766 42.2933 85.0046 43.368 86.4606 43.368C87.5699 43.368 88.8006 42.5707 90.1526 40.976C91.5046 39.3467 92.7872 37.128 94.0006 34.32C94.1392 34.32 94.2779 34.3547 94.4166 34.424C94.5552 34.4587 94.6246 34.58 94.6246 34.788C94.2432 35.724 93.7579 36.764 93.1686 37.908C92.6139 39.0173 91.9552 40.0747 91.1926 41.08C90.4646 42.0853 89.6152 42.9173 88.6446 43.576C87.6739 44.2 86.5819 44.512 85.3686 44.512ZM86.1486 32.656C87.3966 31.3733 88.6099 29.9 89.7886 28.236C90.9672 26.5373 92.0592 24.7867 93.0646 22.984C94.1046 21.1467 94.9712 19.4133 95.6646 17.784C95.9072 17.264 96.0979 16.692 96.2366 16.068C96.4099 15.444 96.4966 14.924 96.4966 14.508C96.4966 14.0227 96.3752 13.78 96.1326 13.78C95.9939 13.78 95.7859 13.9187 95.5086 14.196C95.2312 14.4387 94.8672 14.872 94.4166 15.496C93.7579 16.3627 93.0299 17.5413 92.2326 19.032C91.4699 20.5227 90.6899 22.1173 89.8926 23.816C89.0952 25.5147 88.3672 27.1613 87.7086 28.756C87.0499 30.316 86.5299 31.616 86.1486 32.656ZM86.8189 60.944C85.0162 60.944 83.7335 60.58 82.9709 59.852C82.2082 59.1587 81.8269 58.3267 81.8269 57.356C81.8269 55.8653 82.3815 54.4787 83.4909 53.196C84.5655 51.948 85.9002 50.9427 87.4949 50.18C89.2975 49.348 91.3429 48.672 93.6309 48.152C95.9535 47.632 98.1722 47.06 100.287 46.436C100.946 45.292 101.552 43.992 102.107 42.536C102.662 41.0453 103.164 39.6067 103.615 38.22C104.066 36.7987 104.43 35.6373 104.707 34.736C104.291 35.4987 103.754 36.4347 103.095 37.544C102.471 38.6187 101.76 39.676 100.963 40.716C100.166 41.756 99.2989 42.6227 98.3629 43.316C97.4615 44.0093 96.5082 44.356 95.5029 44.356C95.1215 44.356 94.6535 44.2693 94.0989 44.096C93.5789 43.9227 93.1109 43.6107 92.6949 43.16C92.3135 42.6747 92.1229 41.964 92.1229 41.028C92.1229 40.1267 92.4002 39.1387 92.9549 38.064C93.5095 36.9547 94.0642 35.8627 94.6189 34.788C94.4455 34.788 94.2895 34.7707 94.1509 34.736C94.0469 34.7013 93.9949 34.5627 93.9949 34.32C94.0989 34.112 94.3069 33.6613 94.6189 32.968C94.9309 32.2747 95.2775 31.512 95.6589 30.68C96.0749 29.848 96.4389 29.12 96.7509 28.496C97.1322 27.6987 97.5482 27.144 97.9989 26.832C98.4842 26.52 98.9522 26.364 99.4029 26.364H102.627C102.384 26.572 102.072 26.8147 101.691 27.092C101.344 27.3347 101.015 27.716 100.703 28.236C99.7669 29.8307 98.9522 31.3733 98.2589 32.864C97.5655 34.32 96.8202 35.88 96.0229 37.544C95.6415 38.3413 95.3642 39.0693 95.1909 39.728C95.0175 40.3867 94.9309 40.9587 94.9309 41.444C94.9309 42.588 95.3122 43.16 96.0749 43.16C96.9069 43.16 97.9122 42.484 99.0909 41.132C100.062 39.988 101.032 38.636 102.003 37.076C103.008 35.4813 103.962 33.852 104.863 32.188C105.799 30.4893 106.614 28.9293 107.307 27.508C107.688 26.7453 108.364 26.364 109.335 26.364H112.195C111.19 27.0573 110.41 27.9587 109.855 29.068C109.335 30.1773 108.746 31.5987 108.087 33.332C107.359 35.2387 106.666 37.2147 106.007 39.26C105.348 41.3053 104.62 43.4027 103.823 45.552C105.522 44.9627 106.943 44.2 108.087 43.264C109.231 42.328 110.236 41.132 111.103 39.676C112.004 38.1853 112.906 36.4 113.807 34.32C114.223 34.32 114.431 34.476 114.431 34.788C113.668 36.3827 112.975 37.7867 112.351 39C111.727 40.2133 111.034 41.288 110.271 42.224C109.508 43.1253 108.555 43.9573 107.411 44.72C106.267 45.5173 104.794 46.28 102.991 47.008C102.159 48.4987 101.206 50.0413 100.131 51.636C99.0909 53.2653 97.8949 54.7733 96.5429 56.16C95.2255 57.5813 93.7522 58.7253 92.1229 59.592C90.5282 60.4933 88.7602 60.944 86.8189 60.944ZM85.5709 59.904C86.7149 59.904 87.8935 59.5573 89.1069 58.864C90.3202 58.1707 91.4989 57.2867 92.6429 56.212C93.7869 55.172 94.8269 54.0973 95.7629 52.988C96.7335 51.9133 97.5135 50.96 98.1029 50.128C98.2762 49.8853 98.4669 49.5733 98.6749 49.192C98.8829 48.8107 99.0909 48.4467 99.2989 48.1C97.6002 48.5507 95.7282 49.036 93.6829 49.556C91.6722 50.1107 89.9215 50.7173 88.4309 51.376C86.7669 52.0693 85.4669 53.0573 84.5309 54.34C83.5602 55.6227 83.0749 56.7667 83.0749 57.772C83.0749 58.396 83.2829 58.8987 83.6989 59.28C84.0802 59.696 84.7042 59.904 85.5709 59.904ZM134.869 46.696C131.922 46.696 129.478 46.228 127.537 45.292C125.595 44.3907 124.139 43.1947 123.169 41.704C122.233 40.1787 121.765 38.5667 121.765 36.868C121.765 34.9613 122.337 33.072 123.481 31.2C124.625 29.2933 126.323 27.664 128.577 26.312C130.865 24.9253 133.655 24.0587 136.949 23.712C136.463 23.0533 136.099 22.308 135.857 21.476C135.614 20.6093 135.493 19.7947 135.493 19.032C135.527 17.1947 136.047 15.5827 137.053 14.196C138.058 12.7747 139.341 11.5787 140.901 10.608C142.495 9.63734 144.194 8.90934 145.997 8.424C147.799 7.904 149.498 7.644 151.093 7.644C152.063 7.644 153.051 7.78267 154.057 8.06C155.062 8.30267 155.911 8.75334 156.605 9.412C157.298 10.0707 157.645 11.0067 157.645 12.22C157.645 13.2253 157.333 14.1267 156.709 14.924C156.085 15.7213 155.322 16.12 154.421 16.12C153.762 16.12 153.19 15.8773 152.705 15.392C152.219 14.9067 151.977 14.352 151.977 13.728C151.977 13 152.202 12.4107 152.653 11.96C153.138 11.4747 153.727 11.232 154.421 11.232C154.733 11.232 155.079 11.336 155.461 11.544C155.877 11.752 156.137 11.96 156.241 12.168C156.275 12.0293 156.293 11.8387 156.293 11.596C156.293 10.66 155.911 10.0013 155.149 9.62C154.386 9.23867 153.571 9.048 152.705 9.048C151.318 9.048 149.706 9.39467 147.869 10.088C146.031 10.7467 144.246 11.8387 142.513 13.364C141.889 13.9187 141.247 14.6467 140.589 15.548C139.93 16.4493 139.375 17.42 138.925 18.46C138.474 19.4653 138.249 20.488 138.249 21.528C138.249 22.3253 138.387 23.0187 138.665 23.608C139.185 23.608 139.774 23.5907 140.433 23.556C141.126 23.4867 141.837 23.452 142.565 23.452C143.466 23.452 144.177 23.6427 144.697 24.024C145.217 24.4053 145.477 24.8387 145.477 25.324C145.477 25.6707 145.269 26 144.853 26.312C144.437 26.624 143.778 26.78 142.877 26.78C141.733 26.78 140.693 26.5373 139.757 26.052C138.855 25.532 138.145 25.012 137.625 24.492C135.337 24.804 133.395 25.6533 131.801 27.04C130.206 28.4267 128.993 30.0733 128.161 31.98C127.329 33.852 126.913 35.724 126.913 37.596C126.913 39.0867 127.19 40.4733 127.745 41.756C128.334 43.0387 129.218 44.0613 130.397 44.824C131.575 45.6213 133.066 46.02 134.869 46.02C136.741 46.02 138.439 45.6733 139.965 44.98C141.525 44.3213 142.859 43.4547 143.969 42.38C145.078 41.3053 145.927 40.1787 146.517 39C147.141 37.7867 147.453 36.66 147.453 35.62C147.453 34.7187 147.123 33.9733 146.465 33.384C145.841 32.76 145.009 32.3093 143.969 32.032C142.929 31.72 141.819 31.564 140.641 31.564C139.427 31.564 138.214 31.7373 137.001 32.084C135.822 32.396 134.817 32.8987 133.985 33.592C133.153 34.2507 132.65 35.1 132.477 36.14C132.477 36.2093 132.459 36.296 132.425 36.4C132.425 36.4693 132.425 36.5387 132.425 36.608C132.425 37.3707 132.702 38.1333 133.257 38.896C133.846 39.624 134.747 40.3 135.961 40.924C136.273 41.0627 136.429 41.3227 136.429 41.704C136.429 42.0853 136.255 42.1893 135.909 42.016C134.002 41.0107 132.598 39.9187 131.697 38.74C130.83 37.5267 130.397 36.3827 130.397 35.308C130.397 33.748 131.229 32.4133 132.893 31.304C134.591 30.16 137.001 29.588 140.121 29.588H149.325C149.879 29.588 150.694 29.4667 151.769 29.224C152.878 28.9813 154.005 28.6347 155.149 28.184C156.293 27.6987 157.263 27.144 158.061 26.52C158.893 25.8613 159.309 25.116 159.309 24.284C159.309 23.8333 159.153 23.348 158.841 22.828C158.771 22.724 158.737 22.6027 158.737 22.464C158.737 22.256 158.823 22.152 158.997 22.152C159.135 22.152 159.257 22.2387 159.361 22.412C159.881 23.1747 160.141 23.9547 160.141 24.752C160.141 25.688 159.794 26.5547 159.101 27.352C158.442 28.1493 157.541 28.86 156.397 29.484C155.253 30.0733 153.97 30.524 152.549 30.836C151.162 31.148 149.741 31.2867 148.285 31.252C148.943 31.8067 149.429 32.4307 149.741 33.124C150.053 33.8173 150.209 34.5453 150.209 35.308C150.209 36.5907 149.827 37.908 149.065 39.26C148.302 40.5773 147.227 41.808 145.841 42.952C144.454 44.0613 142.825 44.9627 140.953 45.656C139.115 46.3493 137.087 46.696 134.869 46.696ZM142.877 25.896C144.021 25.896 144.593 25.6707 144.593 25.22C144.593 25.0467 144.437 24.8733 144.125 24.7C143.847 24.492 143.466 24.3707 142.981 24.336C142.773 24.3013 142.426 24.284 141.941 24.284C141.455 24.284 140.935 24.284 140.381 24.284C139.861 24.284 139.427 24.284 139.081 24.284C139.947 25.3587 141.213 25.896 142.877 25.896ZM225.778 53.976C223.351 53.976 220.994 53.2133 218.706 51.688C216.452 50.1973 214.528 47.7013 212.934 44.2C212.24 42.64 211.668 41.0627 211.218 39.468C210.802 37.8733 210.49 36.3827 210.282 34.996C210.074 33.6093 209.97 32.4653 209.97 31.564C209.97 30.4547 210.091 29.8307 210.334 29.692C210.992 29.7613 212.084 29.484 213.61 28.86C215.17 28.236 217.007 27.3173 219.122 26.104C221.271 24.8907 223.576 23.4347 226.038 21.736C228.534 20.0027 231.03 18.0613 233.526 15.912C236.056 13.7627 238.483 11.44 240.806 8.944C243.128 6.448 245.174 3.83067 246.942 1.092C247.184 0.710669 247.375 0.433335 247.514 0.260002C247.652 0.086669 247.791 2.38419e-06 247.93 2.38419e-06C248.103 2.38419e-06 248.259 0.086669 248.398 0.260002C248.536 0.398669 248.606 0.554669 248.606 0.728002C248.606 1.00534 248.484 1.33467 248.242 1.716C246.578 4.48934 244.602 7.21067 242.314 9.88C240.06 12.5147 237.651 14.9933 235.086 17.316C232.52 19.6387 229.938 21.736 227.338 23.608C224.738 25.48 222.259 27.04 219.902 28.288C217.544 29.536 215.464 30.3853 213.662 30.836C213.558 30.7667 213.506 30.94 213.506 31.356C213.506 31.9453 213.627 32.8987 213.87 34.216C214.112 35.4987 214.476 36.972 214.962 38.636C215.482 40.2653 216.106 41.9293 216.834 43.628C218.151 46.7133 219.694 48.828 221.462 49.972C223.264 51.1507 225.119 51.74 227.026 51.74C228.239 51.74 229.487 51.4973 230.77 51.012C232.052 50.5267 233.231 49.8507 234.306 48.984C235.38 48.152 236.212 47.164 236.802 46.02C237.01 45.6733 237.166 45.5 237.27 45.5C237.512 45.5 237.634 45.6387 237.634 45.916C237.634 46.02 237.599 46.124 237.53 46.228C237.495 46.3667 237.391 46.6267 237.218 47.008C236.732 47.9787 235.918 49.0013 234.774 50.076C233.664 51.1853 232.33 52.104 230.77 52.832C229.244 53.5947 227.58 53.976 225.778 53.976ZM181.63 53.3C179.272 53.3 176.984 52.9707 174.766 52.312C172.582 51.688 170.606 50.752 168.838 49.504C167.104 48.256 165.718 46.7307 164.678 44.928C163.672 43.1253 163.17 41.08 163.17 38.792C163.17 37.128 163.412 35.6547 163.898 34.372C164.418 33.0547 165.042 31.9627 165.77 31.096C166.532 30.2293 167.278 29.5707 168.006 29.12C168.768 28.6693 169.392 28.444 169.878 28.444C170.224 28.444 170.398 28.548 170.398 28.756C170.398 28.9293 170.311 29.068 170.138 29.172C169.34 29.588 168.526 30.1947 167.694 30.992C166.862 31.7893 166.168 32.8293 165.614 34.112C165.059 35.3947 164.782 36.9893 164.782 38.896C164.782 40.976 165.215 42.7613 166.082 44.252C166.983 45.708 168.144 46.904 169.566 47.84C171.022 48.776 172.582 49.452 174.246 49.868C175.91 50.3187 177.504 50.544 179.03 50.544C182.427 50.544 185.599 49.8853 188.546 48.568C191.492 47.2507 194.179 45.5 196.606 43.316C199.067 41.0973 201.234 38.636 203.106 35.932C204.978 33.228 206.52 30.4893 207.734 27.716C208.184 26.7107 208.722 25.5147 209.346 24.128C209.97 22.7067 210.646 21.1987 211.374 19.604C212.102 18.0093 212.812 16.4493 213.506 14.924C214.199 13.3987 214.823 12.0293 215.378 10.816C215.967 9.568 216.435 8.61467 216.782 7.956C214.459 8.23334 211.946 8.49334 209.242 8.736C206.572 8.944 204.024 9.39467 201.598 10.088C198.894 10.8507 196.675 11.96 194.942 13.416C193.243 14.872 191.978 16.4493 191.146 18.148C190.348 19.8467 189.95 21.4413 189.95 22.932C189.95 24.7347 190.4 26.2253 191.302 27.404C192.203 28.548 193.503 29.12 195.202 29.12C196.484 29.12 197.628 28.756 198.634 28.028C199.639 27.2653 200.436 26.2947 201.026 25.116C201.615 23.9027 201.91 22.62 201.91 21.268C201.91 20.7133 201.858 20.2453 201.754 19.864C201.65 19.4827 201.598 19.188 201.598 18.98C201.598 18.7373 201.684 18.616 201.858 18.616C202.1 18.616 202.326 18.824 202.534 19.24C202.88 20.0373 203.054 20.8173 203.054 21.58C203.054 23.2093 202.655 24.6827 201.858 26C201.06 27.2827 200.038 28.3053 198.79 29.068C197.542 29.8307 196.224 30.212 194.838 30.212C193.208 30.212 191.787 29.8307 190.574 29.068C189.395 28.2707 188.476 27.2307 187.818 25.948C187.159 24.6653 186.83 23.2787 186.83 21.788C186.83 20.0893 187.298 18.3733 188.234 16.64C189.17 14.872 190.678 13.2773 192.758 11.856C194.838 10.4 197.576 9.29067 200.974 8.528C203.816 7.904 206.711 7.50534 209.658 7.332C212.604 7.124 215.204 6.916 217.458 6.708C218.671 4.836 219.659 3.65734 220.422 3.172C221.184 2.652 221.878 2.392 222.502 2.392C223.126 2.392 223.611 2.56534 223.958 2.912C224.339 3.25867 224.53 3.67467 224.53 4.16C224.53 4.85334 224.044 5.59867 223.074 6.396C222.138 7.15867 220.543 7.66134 218.29 7.904C217.18 9.94934 216.158 12.2373 215.222 14.768C214.286 17.264 213.35 19.8813 212.414 22.62C211.478 25.3587 210.455 28.08 209.346 30.784C207.474 35.2907 205.255 39.2427 202.69 42.64C200.124 46.0027 197.108 48.62 193.642 50.492C190.175 52.364 186.171 53.3 181.63 53.3ZM219.278 6.604C220.144 6.53467 220.976 6.292 221.774 5.876C222.571 5.42534 222.97 4.94 222.97 4.42C222.97 4.07334 222.796 3.9 222.45 3.9C222.138 3.9 221.704 4.108 221.15 4.524C220.595 4.90534 219.971 5.59867 219.278 6.604ZM231.192 44.564C229.909 44.564 228.748 44.148 227.708 43.316C226.703 42.484 226.2 41.2187 226.2 39.52C226.2 38.0987 226.512 36.5907 227.136 34.996C227.795 33.4013 228.644 31.9107 229.684 30.524C230.759 29.1027 231.937 27.9587 233.22 27.092C234.537 26.1907 235.855 25.74 237.172 25.74C237.831 25.74 238.472 25.9307 239.096 26.312C239.72 26.6933 240.032 27.352 240.032 28.288C240.032 29.1547 239.703 30.108 239.044 31.148C238.385 32.188 237.449 33.1587 236.236 34.06C235.716 34.4413 235.057 34.8053 234.26 35.152C233.463 35.4987 232.665 35.7933 231.868 36.036C231.071 36.244 230.412 36.348 229.892 36.348C229.719 36.764 229.545 37.3187 229.372 38.012C229.233 38.7053 229.164 39.416 229.164 40.144C229.164 41.0107 229.337 41.7907 229.684 42.484C230.031 43.1773 230.672 43.524 231.608 43.524C232.752 43.524 233.809 43.1947 234.78 42.536C235.785 41.8773 236.669 41.0453 237.432 40.04C238.229 39.0347 238.905 38.012 239.46 36.972C240.015 35.932 240.448 35.048 240.76 34.32C241.176 34.32 241.384 34.476 241.384 34.788C240.933 35.7587 240.413 36.816 239.824 37.96C239.269 39.104 238.593 40.1787 237.796 41.184C237.033 42.1547 236.097 42.9693 234.988 43.628C233.913 44.252 232.648 44.564 231.192 44.564ZM230.256 35.412C230.741 35.412 231.556 35.2387 232.7 34.892C233.844 34.5107 234.884 33.9213 235.82 33.124C236.721 32.3267 237.415 31.46 237.9 30.524C238.385 29.5533 238.628 28.7387 238.628 28.08C238.628 27.3173 238.351 26.936 237.796 26.936C237.38 26.936 236.808 27.2133 236.08 27.768C235.352 28.3227 234.451 29.2587 233.376 30.576C232.717 31.408 232.093 32.3093 231.504 33.28C230.915 34.2507 230.499 34.9613 230.256 35.412ZM242.469 44.72C241.394 44.72 240.649 44.4427 240.233 43.888C239.817 43.3333 239.609 42.6227 239.609 41.756C239.609 40.8547 239.765 39.832 240.077 38.688C240.389 37.544 240.805 36.2613 241.325 34.84C240.943 34.84 240.753 34.6667 240.753 34.32C241.03 33.6267 241.325 32.8467 241.637 31.98C241.983 31.0787 242.157 30.0733 242.157 28.964C242.157 28.4093 242.087 27.9413 241.949 27.56C241.81 27.1787 241.602 26.9533 241.325 26.884C241.325 26.884 241.498 26.8493 241.845 26.78C242.226 26.7107 242.625 26.6413 243.041 26.572C243.457 26.5027 243.734 26.468 243.873 26.468C244.081 26.4333 244.271 26.416 244.445 26.416C244.618 26.3813 244.774 26.364 244.913 26.364C245.259 26.364 245.485 26.5027 245.589 26.78C245.727 27.0573 245.779 27.664 245.745 28.6C245.71 29.4667 245.537 30.524 245.225 31.772C244.913 32.9853 244.583 34.0427 244.237 34.944C243.786 36.1227 243.37 37.3187 242.989 38.532C242.607 39.7453 242.417 40.7507 242.417 41.548C242.417 42.2413 242.607 42.692 242.989 42.9C243.266 43.004 243.509 43.056 243.717 43.056C244.514 43.056 245.294 42.6747 246.057 41.912C246.819 41.1493 247.53 40.2307 248.189 39.156C248.882 38.0467 249.454 36.9893 249.905 35.984C249.697 35.1867 249.593 34.2333 249.593 33.124C249.593 31.9453 249.731 30.7493 250.009 29.536C250.286 28.3227 250.719 27.3173 251.309 26.52C251.898 25.688 252.661 25.272 253.597 25.272C254.255 25.272 254.585 25.5667 254.585 26.156C254.585 26.2947 254.411 26.884 254.065 27.924C253.753 28.964 253.337 30.1947 252.817 31.616C252.297 33.0373 251.742 34.4067 251.153 35.724C251.014 36.0013 250.893 36.2787 250.789 36.556C250.927 37.1453 251.187 37.6307 251.569 38.012C251.95 38.3587 252.418 38.532 252.973 38.532C253.666 38.532 254.307 38.22 254.897 37.596C255.521 36.9373 256.162 35.8453 256.821 34.32C257.237 34.32 257.445 34.476 257.445 34.788C256.89 36.1747 256.214 37.284 255.417 38.116C254.654 38.948 253.787 39.364 252.817 39.364C251.638 39.364 250.789 38.7573 250.269 37.544C249.679 38.7573 248.986 39.9187 248.189 41.028C247.391 42.1027 246.507 42.9867 245.537 43.68C244.601 44.3733 243.578 44.72 242.469 44.72ZM258.256 44.356C256.973 44.356 256.072 43.992 255.552 43.264C255.032 42.5013 254.772 41.6347 254.772 40.664C254.772 40.144 254.824 39.624 254.928 39.104C255.066 38.5493 255.222 38.0467 255.396 37.596L258.88 28.704C258.984 28.4267 259.036 28.184 259.036 27.976C259.036 27.6293 258.949 27.3347 258.776 27.092C258.602 26.8147 258.481 26.624 258.412 26.52L261.272 26.416C261.792 26.3813 262.156 26.4507 262.364 26.624C262.606 26.7627 262.728 26.936 262.728 27.144C262.728 27.352 262.606 27.7333 262.364 28.288C262.017 29.12 261.549 30.16 260.96 31.408C260.37 32.656 259.781 33.9387 259.192 35.256C258.637 36.5733 258.152 37.804 257.736 38.948C257.354 40.092 257.164 40.976 257.164 41.6C257.164 42.0507 257.268 42.432 257.476 42.744C257.718 43.056 258.117 43.212 258.672 43.212C259.4 43.212 260.11 42.9347 260.804 42.38C261.532 41.7907 262.208 41.0453 262.832 40.144C263.456 39.2427 264.028 38.272 264.548 37.232C265.102 36.192 265.57 35.2213 265.952 34.32C266.368 34.32 266.576 34.476 266.576 34.788C266.229 35.6547 265.778 36.6427 265.224 37.752C264.669 38.8613 264.028 39.9187 263.3 40.924C262.606 41.8947 261.826 42.7093 260.96 43.368C260.128 44.0267 259.226 44.356 258.256 44.356ZM262.884 23.192C262.433 23.192 262.034 23.0187 261.688 22.672C261.376 22.3253 261.22 21.9093 261.22 21.424C261.22 20.8347 261.462 20.3147 261.948 19.864C262.433 19.3787 262.97 19.136 263.56 19.136C264.045 19.136 264.461 19.292 264.808 19.604C265.154 19.916 265.328 20.3147 265.328 20.8C265.328 21.424 265.085 21.9787 264.6 22.464C264.114 22.9493 263.542 23.192 262.884 23.192ZM260.948 44.772C262.196 42.2413 263.392 39.7453 264.536 37.284C265.68 34.788 266.859 32.4133 268.072 30.16C268.766 28.912 269.355 28.0453 269.84 27.56C270.326 27.04 270.967 26.78 271.764 26.78C272.042 26.78 272.336 26.832 272.648 26.936C272.96 27.0053 273.272 27.04 273.584 27.04C273.792 27.04 273.948 27.0227 274.052 26.988C273.567 27.2653 272.926 27.9587 272.128 29.068C271.366 30.1427 270.586 31.3907 269.788 32.812C268.991 34.2333 268.28 35.568 267.656 36.816C268.315 36.0187 269.008 35.2213 269.736 34.424C270.464 33.6267 271.262 32.864 272.128 32.136C272.96 31.408 273.948 30.6627 275.092 29.9C276.271 29.1027 277.415 28.444 278.524 27.924C279.634 27.404 280.518 27.144 281.176 27.144C281.419 27.144 281.592 27.1613 281.696 27.196C281.696 27.196 281.506 27.5427 281.124 28.236C280.743 28.8947 280.258 29.7787 279.668 30.888C279.114 31.9627 278.542 33.124 277.952 34.372C277.363 35.5853 276.826 36.764 276.34 37.908C275.89 39.0173 275.595 39.9533 275.456 40.716C275.352 41.1667 275.3 41.5827 275.3 41.964C275.3 42.5187 275.404 42.8827 275.612 43.056C275.82 43.2293 276.046 43.316 276.288 43.316C276.947 43.316 277.623 43.0213 278.316 42.432C279.01 41.8427 279.668 41.0973 280.292 40.196C280.951 39.26 281.558 38.272 282.112 37.232C282.667 36.192 283.135 35.2213 283.516 34.32C283.932 34.32 284.14 34.476 284.14 34.788C283.759 35.724 283.274 36.764 282.684 37.908C282.13 39.0173 281.488 40.0747 280.76 41.08C280.067 42.0853 279.287 42.9173 278.42 43.576C277.554 44.2347 276.618 44.564 275.612 44.564C274.919 44.564 274.191 44.3213 273.428 43.836C272.7 43.3507 272.336 42.4493 272.336 41.132C272.336 40.7507 272.371 40.352 272.44 39.936C272.51 39.4853 272.631 39 272.804 38.48C273.082 37.7867 273.411 37.0413 273.792 36.244C274.174 35.4467 274.798 34.3547 275.664 32.968C275.907 32.5867 276.046 32.292 276.08 32.084C276.15 31.876 276.184 31.7027 276.184 31.564C276.184 31.148 275.994 30.94 275.612 30.94C275.3 30.94 274.832 31.1133 274.208 31.46C273.619 31.8067 272.874 32.4133 271.972 33.28C271.106 34.112 270.066 35.2907 268.852 36.816C267.674 38.3413 266.304 40.5947 264.744 43.576C264.502 44.0267 264.224 44.2693 263.912 44.304C263.635 44.3387 263.236 44.3733 262.716 44.408C262.37 44.4427 262.04 44.46 261.728 44.46C261.416 44.4947 261.156 44.5987 260.948 44.772Z", fill: "#1B3828" }) }) : /* @__PURE__ */ a.jsx("svg", { viewBox: "0 0 285 61", className: "w-[200px] sm:w-[285px] h-auto", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M16.172 49.92C13.0173 49.92 10.2093 49.2787 7.74801 47.996C5.32134 46.748 3.41467 44.8933 2.02801 42.432C0.676005 39.936 5.00679e-06 36.8853 5.00679e-06 33.28C5.00679e-06 31.1307 0.277338 28.9813 0.832005 26.832C1.38667 24.6827 2.13201 22.62 3.06801 20.644C4.03867 18.668 5.11334 16.848 6.29201 15.184C5.77201 13.104 5.51201 10.8507 5.51201 8.424C5.51201 6.58667 5.72001 4.83601 6.13601 3.172C6.27467 2.68667 6.51734 2.444 6.864 2.444C7.14134 2.444 7.26267 2.61734 7.22801 2.964C7.12401 3.65734 7.03734 4.40267 6.96801 5.20001C6.89867 5.96267 6.864 6.88134 6.864 7.956C6.864 9.96667 7.05467 11.8733 7.43601 13.676C7.78267 13.2253 8.12934 12.8093 8.47601 12.428C9.89734 10.868 11.5787 9.41201 13.52 8.06001C15.4613 6.67334 17.6107 5.564 19.968 4.73201C22.36 3.90001 24.8907 3.48401 27.56 3.48401C30.056 3.48401 32.344 3.95201 34.424 4.888C36.504 5.78934 38.168 7.10667 39.416 8.84001C40.6987 10.5387 41.34 12.6013 41.34 15.028C41.34 16.5533 40.924 18.1133 40.092 19.708C39.2947 21.3027 38.1333 22.776 36.608 24.128C35.1173 25.4453 33.2973 26.52 31.148 27.352C29.0333 28.184 26.6587 28.6 24.024 28.6C20.5573 28.6 17.3853 27.8373 14.508 26.312C11.6307 24.7867 9.39467 22.464 7.80001 19.344C6.41334 21.8053 5.39067 24.3013 4.73201 26.832C4.07334 29.3627 3.744 31.772 3.744 34.06C3.744 37.388 4.29867 40.092 5.40801 42.172C6.51734 44.252 8.04267 45.7773 9.98401 46.748C11.96 47.7533 14.2133 48.256 16.744 48.256C21.2507 48.256 25.2027 47.112 28.6 44.824C32.032 42.5707 34.8573 39.0693 37.076 34.32C37.492 34.32 37.7 34.476 37.7 34.788C35.5507 39.9187 32.604 43.7147 28.86 46.176C25.1507 48.672 20.9213 49.92 16.172 49.92ZM10.036 15.86C9.58534 16.484 9.15201 17.1253 8.73601 17.784C9.94934 20.6267 11.804 22.9147 14.3 24.648C16.796 26.3813 19.9333 27.248 23.712 27.248C26.104 27.248 28.236 26.884 30.108 26.156C32.0147 25.428 33.6093 24.4573 34.892 23.244C36.2093 22.0307 37.2147 20.696 37.908 19.24C38.6013 17.7493 38.948 16.2587 38.948 14.768C38.948 12.9307 38.4453 11.3187 37.44 9.932C36.4693 8.54534 35.1347 7.47067 33.436 6.708C31.7373 5.91067 29.8133 5.512 27.664 5.512C25.5147 5.512 23.348 5.96267 21.164 6.86401C19.0147 7.76534 16.9693 8.996 15.028 10.556C13.1213 12.116 11.4573 13.884 10.036 15.86ZM36.0368 44.772C37.4928 41.7907 39.0008 38.6707 40.5608 35.412C42.1555 32.1187 43.7848 28.808 45.4488 25.48C47.1128 22.152 48.7595 18.98 50.3888 15.964C50.9782 14.924 51.5155 14.1093 52.0008 13.52C52.5208 12.9307 53.1968 12.636 54.0288 12.636C54.3408 12.636 54.7048 12.688 55.1208 12.792C55.5368 12.896 55.9355 12.9133 56.3168 12.844C55.8662 13.3293 55.2422 14.1787 54.4448 15.392C53.6822 16.6053 52.8155 18.0613 51.8448 19.76C50.9088 21.4587 49.9035 23.296 48.8288 25.272C47.7888 27.2133 46.7488 29.1893 45.7088 31.2C44.7035 33.176 43.7675 35.0307 42.9008 36.764C43.5942 35.8627 44.3048 35.0133 45.0328 34.216C45.7608 33.4187 46.4715 32.7253 47.1648 32.136C47.9275 31.4427 48.8808 30.7147 50.0248 29.952C51.2035 29.1893 52.3648 28.5307 53.5088 27.976C54.6875 27.4213 55.6235 27.144 56.3168 27.144C56.5595 27.144 56.7328 27.1613 56.8368 27.196C56.8368 27.196 56.6462 27.5427 56.2648 28.236C55.8835 28.9293 55.3982 29.8133 54.8088 30.888C54.2542 31.9627 53.6648 33.124 53.0408 34.372C52.4515 35.62 51.9315 36.816 51.4808 37.96C51.0302 39.0693 50.7355 39.988 50.5968 40.716C50.4928 41.2707 50.4408 41.7387 50.4408 42.12C50.4408 42.6747 50.5448 43.056 50.7528 43.264C50.9608 43.4373 51.1862 43.524 51.4288 43.524C52.0182 43.524 52.6422 43.2293 53.3008 42.64C53.9942 42.016 54.6702 41.236 55.3288 40.3C55.9875 39.364 56.5942 38.376 57.1488 37.336C57.7382 36.2613 58.2062 35.256 58.5528 34.32C58.9688 34.32 59.1768 34.476 59.1768 34.788C58.7955 35.724 58.3102 36.764 57.7208 37.908C57.1662 39.0173 56.5248 40.0747 55.7968 41.08C55.0688 42.0853 54.2715 42.9173 53.4048 43.576C52.5382 44.2347 51.6195 44.564 50.6488 44.564C49.9555 44.564 49.2448 44.3213 48.5168 43.836C47.7888 43.3507 47.4248 42.4667 47.4248 41.184C47.4248 40.8027 47.4595 40.404 47.5288 39.988C47.5982 39.5373 47.7195 39.0347 47.8928 38.48C48.1008 37.7867 48.4475 37.024 48.9328 36.192C49.4182 35.3253 50.0422 34.2507 50.8048 32.968C51.1515 32.3787 51.3248 31.9107 51.3248 31.564C51.3248 31.148 51.1168 30.94 50.7008 30.94C50.3542 30.94 49.8862 31.1133 49.2968 31.46C48.7075 31.8067 47.9622 32.4133 47.0608 33.28C46.1942 34.112 45.1195 35.3253 43.8368 36.92C42.5542 38.5147 41.1848 40.7507 39.7288 43.628C39.4862 44.0787 39.2088 44.3213 38.8968 44.356C38.6195 44.356 38.2382 44.3733 37.7528 44.408C37.4408 44.4427 37.1288 44.46 36.8168 44.46C36.5048 44.4947 36.2448 44.5987 36.0368 44.772ZM62.2936 44.564C61.0109 44.564 59.8496 44.148 58.8096 43.316C57.8042 42.484 57.3016 41.2187 57.3016 39.52C57.3016 38.0987 57.6136 36.5907 58.2376 34.996C58.8962 33.4013 59.7456 31.9107 60.7856 30.524C61.8602 29.1027 63.0389 27.9587 64.3216 27.092C65.6389 26.1907 66.9562 25.74 68.2736 25.74C68.9322 25.74 69.5736 25.9307 70.1976 26.312C70.8216 26.6933 71.1336 27.352 71.1336 28.288C71.1336 29.1547 70.8042 30.108 70.1456 31.148C69.4869 32.188 68.5509 33.1587 67.3376 34.06C66.8176 34.4413 66.1589 34.8053 65.3616 35.152C64.5642 35.4987 63.7669 35.7933 62.9696 36.036C62.1722 36.244 61.5136 36.348 60.9936 36.348C60.8202 36.764 60.6469 37.3187 60.4736 38.012C60.3349 38.7053 60.2656 39.416 60.2656 40.144C60.2656 41.0107 60.4389 41.7907 60.7856 42.484C61.1322 43.1773 61.7736 43.524 62.7096 43.524C63.8536 43.524 64.9109 43.1947 65.8816 42.536C66.8869 41.8773 67.7709 41.0453 68.5336 40.04C69.3309 39.0347 70.0069 38.012 70.5616 36.972C71.1162 35.932 71.5496 35.048 71.8616 34.32C72.2776 34.32 72.4856 34.476 72.4856 34.788C72.0349 35.7587 71.5149 36.816 70.9256 37.96C70.3709 39.104 69.6949 40.1787 68.8976 41.184C68.1349 42.1547 67.1989 42.9693 66.0896 43.628C65.0149 44.252 63.7496 44.564 62.2936 44.564ZM61.3576 35.412C61.8429 35.412 62.6576 35.2387 63.8016 34.892C64.9456 34.5107 65.9856 33.9213 66.9216 33.124C67.8229 32.3267 68.5162 31.46 69.0016 30.524C69.4869 29.5533 69.7296 28.7387 69.7296 28.08C69.7296 27.3173 69.4522 26.936 68.8976 26.936C68.4816 26.936 67.9096 27.2133 67.1816 27.768C66.4536 28.3227 65.5522 29.2587 64.4776 30.576C63.8189 31.408 63.1949 32.3093 62.6056 33.28C62.0162 34.2507 61.6002 34.9613 61.3576 35.412ZM74.2983 44.512C73.0156 44.512 72.0623 44.1307 71.4383 43.368C70.8489 42.5707 70.5543 41.6347 70.5543 40.56C70.5543 39.4507 70.7103 38.3067 71.0223 37.128C71.3343 35.9493 71.6116 34.9613 71.8543 34.164C72.4089 32.2227 73.1023 30.16 73.9343 27.976C74.8009 25.7573 75.7369 23.5907 76.7423 21.476C77.7823 19.3267 78.8049 17.4027 79.8103 15.704C80.6076 14.352 81.4569 13.3467 82.3583 12.688C83.2943 11.9947 84.1089 11.648 84.8023 11.648C85.3569 11.648 85.7903 11.856 86.1023 12.272C86.4489 12.6533 86.6223 13.2427 86.6223 14.04C86.6223 14.5947 86.5183 15.2533 86.3103 16.016C86.1369 16.7787 85.8249 17.6453 85.3743 18.616C84.1609 21.32 82.7049 24.024 81.0063 26.728C79.3423 29.432 77.2276 31.9627 74.6623 34.32C74.2463 35.2907 73.8996 36.3307 73.6223 37.44C73.3449 38.5493 73.2063 39.4507 73.2063 40.144C73.2063 42.2933 73.9343 43.368 75.3903 43.368C76.4996 43.368 77.7303 42.5707 79.0823 40.976C80.4343 39.3467 81.7169 37.128 82.9303 34.32C83.0689 34.32 83.2076 34.3547 83.3463 34.424C83.4849 34.4587 83.5543 34.58 83.5543 34.788C83.1729 35.724 82.6876 36.764 82.0983 37.908C81.5436 39.0173 80.8849 40.0747 80.1223 41.08C79.3943 42.0853 78.5449 42.9173 77.5743 43.576C76.6036 44.2 75.5116 44.512 74.2983 44.512ZM75.0783 32.656C76.3263 31.3733 77.5396 29.9 78.7183 28.236C79.8969 26.5373 80.9889 24.7867 81.9943 22.984C83.0343 21.1467 83.9009 19.4133 84.5943 17.784C84.8369 17.264 85.0276 16.692 85.1663 16.068C85.3396 15.444 85.4263 14.924 85.4263 14.508C85.4263 14.0227 85.3049 13.78 85.0623 13.78C84.9236 13.78 84.7156 13.9187 84.4383 14.196C84.1609 14.4387 83.7969 14.872 83.3463 15.496C82.6876 16.3627 81.9596 17.5413 81.1623 19.032C80.3996 20.5227 79.6196 22.1173 78.8223 23.816C78.0249 25.5147 77.2969 27.1613 76.6383 28.756C75.9796 30.316 75.4596 31.616 75.0783 32.656ZM85.3686 44.512C84.0859 44.512 83.1326 44.1307 82.5086 43.368C81.9192 42.5707 81.6246 41.6347 81.6246 40.56C81.6246 39.4507 81.7806 38.3067 82.0926 37.128C82.4046 35.9493 82.6819 34.9613 82.9246 34.164C83.4792 32.2227 84.1726 30.16 85.0046 27.976C85.8712 25.7573 86.8072 23.5907 87.8126 21.476C88.8526 19.3267 89.8752 17.4027 90.8806 15.704C91.6779 14.352 92.5272 13.3467 93.4286 12.688C94.3646 11.9947 95.1792 11.648 95.8726 11.648C96.4272 11.648 96.8606 11.856 97.1726 12.272C97.5192 12.6533 97.6926 13.2427 97.6926 14.04C97.6926 14.5947 97.5886 15.2533 97.3806 16.016C97.2072 16.7787 96.8952 17.6453 96.4446 18.616C95.2312 21.32 93.7752 24.024 92.0766 26.728C90.4126 29.432 88.2979 31.9627 85.7326 34.32C85.3166 35.2907 84.9699 36.3307 84.6926 37.44C84.4152 38.5493 84.2766 39.4507 84.2766 40.144C84.2766 42.2933 85.0046 43.368 86.4606 43.368C87.5699 43.368 88.8006 42.5707 90.1526 40.976C91.5046 39.3467 92.7872 37.128 94.0006 34.32C94.1392 34.32 94.2779 34.3547 94.4166 34.424C94.5552 34.4587 94.6246 34.58 94.6246 34.788C94.2432 35.724 93.7579 36.764 93.1686 37.908C92.6139 39.0173 91.9552 40.0747 91.1926 41.08C90.4646 42.0853 89.6152 42.9173 88.6446 43.576C87.6739 44.2 86.5819 44.512 85.3686 44.512ZM86.1486 32.656C87.3966 31.3733 88.6099 29.9 89.7886 28.236C90.9672 26.5373 92.0592 24.7867 93.0646 22.984C94.1046 21.1467 94.9712 19.4133 95.6646 17.784C95.9072 17.264 96.0979 16.692 96.2366 16.068C96.4099 15.444 96.4966 14.924 96.4966 14.508C96.4966 14.0227 96.3752 13.78 96.1326 13.78C95.9939 13.78 95.7859 13.9187 95.5086 14.196C95.2312 14.4387 94.8672 14.872 94.4166 15.496C93.7579 16.3627 93.0299 17.5413 92.2326 19.032C91.4699 20.5227 90.6899 22.1173 89.8926 23.816C89.0952 25.5147 88.3672 27.1613 87.7086 28.756C87.0499 30.316 86.5299 31.616 86.1486 32.656ZM86.8189 60.944C85.0162 60.944 83.7335 60.58 82.9709 59.852C82.2082 59.1587 81.8269 58.3267 81.8269 57.356C81.8269 55.8653 82.3815 54.4787 83.4909 53.196C84.5655 51.948 85.9002 50.9427 87.4949 50.18C89.2975 49.348 91.3429 48.672 93.6309 48.152C95.9535 47.632 98.1722 47.06 100.287 46.436C100.946 45.292 101.552 43.992 102.107 42.536C102.662 41.0453 103.164 39.6067 103.615 38.22C104.066 36.7987 104.43 35.6373 104.707 34.736C104.291 35.4987 103.754 36.4347 103.095 37.544C102.471 38.6187 101.76 39.676 100.963 40.716C100.166 41.756 99.2989 42.6227 98.3629 43.316C97.4615 44.0093 96.5082 44.356 95.5029 44.356C95.1215 44.356 94.6535 44.2693 94.0989 44.096C93.5789 43.9227 93.1109 43.6107 92.6949 43.16C92.3135 42.6747 92.1229 41.964 92.1229 41.028C92.1229 40.1267 92.4002 39.1387 92.9549 38.064C93.5095 36.9547 94.0642 35.8627 94.6189 34.788C94.4455 34.788 94.2895 34.7707 94.1509 34.736C94.0469 34.7013 93.9949 34.5627 93.9949 34.32C94.0989 34.112 94.3069 33.6613 94.6189 32.968C94.9309 32.2747 95.2775 31.512 95.6589 30.68C96.0749 29.848 96.4389 29.12 96.7509 28.496C97.1322 27.6987 97.5482 27.144 97.9989 26.832C98.4842 26.52 98.9522 26.364 99.4029 26.364H102.627C102.384 26.572 102.072 26.8147 101.691 27.092C101.344 27.3347 101.015 27.716 100.703 28.236C99.7669 29.8307 98.9522 31.3733 98.2589 32.864C97.5655 34.32 96.8202 35.88 96.0229 37.544C95.6415 38.3413 95.3642 39.0693 95.1909 39.728C95.0175 40.3867 94.9309 40.9587 94.9309 41.444C94.9309 42.588 95.3122 43.16 96.0749 43.16C96.9069 43.16 97.9122 42.484 99.0909 41.132C100.062 39.988 101.032 38.636 102.003 37.076C103.008 35.4813 103.962 33.852 104.863 32.188C105.799 30.4893 106.614 28.9293 107.307 27.508C107.688 26.7453 108.364 26.364 109.335 26.364H112.195C111.19 27.0573 110.41 27.9587 109.855 29.068C109.335 30.1773 108.746 31.5987 108.087 33.332C107.359 35.2387 106.666 37.2147 106.007 39.26C105.348 41.3053 104.62 43.4027 103.823 45.552C105.522 44.9627 106.943 44.2 108.087 43.264C109.231 42.328 110.236 41.132 111.103 39.676C112.004 38.1853 112.906 36.4 113.807 34.32C114.223 34.32 114.431 34.476 114.431 34.788C113.668 36.3827 112.975 37.7867 112.351 39C111.727 40.2133 111.034 41.288 110.271 42.224C109.508 43.1253 108.555 43.9573 107.411 44.72C106.267 45.5173 104.794 46.28 102.991 47.008C102.159 48.4987 101.206 50.0413 100.131 51.636C99.0909 53.2653 97.8949 54.7733 96.5429 56.16C95.2255 57.5813 93.7522 58.7253 92.1229 59.592C90.5282 60.4933 88.7602 60.944 86.8189 60.944ZM85.5709 59.904C86.7149 59.904 87.8935 59.5573 89.1069 58.864C90.3202 58.1707 91.4989 57.2867 92.6429 56.212C93.7869 55.172 94.8269 54.0973 95.7629 52.988C96.7335 51.9133 97.5135 50.96 98.1029 50.128C98.2762 49.8853 98.4669 49.5733 98.6749 49.192C98.8829 48.8107 99.0909 48.4467 99.2989 48.1C97.6002 48.5507 95.7282 49.036 93.6829 49.556C91.6722 50.1107 89.9215 50.7173 88.4309 51.376C86.7669 52.0693 85.4669 53.0573 84.5309 54.34C83.5602 55.6227 83.0749 56.7667 83.0749 57.772C83.0749 58.396 83.2829 58.8987 83.6989 59.28C84.0802 59.696 84.7042 59.904 85.5709 59.904ZM134.869 46.696C131.922 46.696 129.478 46.228 127.537 45.292C125.595 44.3907 124.139 43.1947 123.169 41.704C122.233 40.1787 121.765 38.5667 121.765 36.868C121.765 34.9613 122.337 33.072 123.481 31.2C124.625 29.2933 126.323 27.664 128.577 26.312C130.865 24.9253 133.655 24.0587 136.949 23.712C136.463 23.0533 136.099 22.308 135.857 21.476C135.614 20.6093 135.493 19.7947 135.493 19.032C135.527 17.1947 136.047 15.5827 137.053 14.196C138.058 12.7747 139.341 11.5787 140.901 10.608C142.495 9.63734 144.194 8.90934 145.997 8.424C147.799 7.904 149.498 7.64401 151.093 7.64401C152.063 7.64401 153.051 7.78267 154.057 8.06001C155.062 8.30267 155.911 8.75334 156.605 9.412C157.298 10.0707 157.645 11.0067 157.645 12.22C157.645 13.2253 157.333 14.1267 156.709 14.924C156.085 15.7213 155.322 16.12 154.421 16.12C153.762 16.12 153.19 15.8773 152.705 15.392C152.219 14.9067 151.977 14.352 151.977 13.728C151.977 13 152.202 12.4107 152.653 11.96C153.138 11.4747 153.727 11.232 154.421 11.232C154.733 11.232 155.079 11.336 155.461 11.544C155.877 11.752 156.137 11.96 156.241 12.168C156.275 12.0293 156.293 11.8387 156.293 11.596C156.293 10.66 155.911 10.0013 155.149 9.62C154.386 9.23867 153.571 9.04801 152.705 9.04801C151.318 9.04801 149.706 9.39467 147.869 10.088C146.031 10.7467 144.246 11.8387 142.513 13.364C141.889 13.9187 141.247 14.6467 140.589 15.548C139.93 16.4493 139.375 17.42 138.925 18.46C138.474 19.4653 138.249 20.488 138.249 21.528C138.249 22.3253 138.387 23.0187 138.665 23.608C139.185 23.608 139.774 23.5907 140.433 23.556C141.126 23.4867 141.837 23.452 142.565 23.452C143.466 23.452 144.177 23.6427 144.697 24.024C145.217 24.4053 145.477 24.8387 145.477 25.324C145.477 25.6707 145.269 26 144.853 26.312C144.437 26.624 143.778 26.78 142.877 26.78C141.733 26.78 140.693 26.5373 139.757 26.052C138.855 25.532 138.145 25.012 137.625 24.492C135.337 24.804 133.395 25.6533 131.801 27.04C130.206 28.4267 128.993 30.0733 128.161 31.98C127.329 33.852 126.913 35.724 126.913 37.596C126.913 39.0867 127.19 40.4733 127.745 41.756C128.334 43.0387 129.218 44.0613 130.397 44.824C131.575 45.6213 133.066 46.02 134.869 46.02C136.741 46.02 138.439 45.6733 139.965 44.98C141.525 44.3213 142.859 43.4547 143.969 42.38C145.078 41.3053 145.927 40.1787 146.517 39C147.141 37.7867 147.453 36.66 147.453 35.62C147.453 34.7187 147.123 33.9733 146.465 33.384C145.841 32.76 145.009 32.3093 143.969 32.032C142.929 31.72 141.819 31.564 140.641 31.564C139.427 31.564 138.214 31.7373 137.001 32.084C135.822 32.396 134.817 32.8987 133.985 33.592C133.153 34.2507 132.65 35.1 132.477 36.14C132.477 36.2093 132.459 36.296 132.425 36.4C132.425 36.4693 132.425 36.5387 132.425 36.608C132.425 37.3707 132.702 38.1333 133.257 38.896C133.846 39.624 134.747 40.3 135.961 40.924C136.273 41.0627 136.429 41.3227 136.429 41.704C136.429 42.0853 136.255 42.1893 135.909 42.016C134.002 41.0107 132.598 39.9187 131.697 38.74C130.83 37.5267 130.397 36.3827 130.397 35.308C130.397 33.748 131.229 32.4133 132.893 31.304C134.591 30.16 137.001 29.588 140.121 29.588H149.325C149.879 29.588 150.694 29.4667 151.769 29.224C152.878 28.9813 154.005 28.6347 155.149 28.184C156.293 27.6987 157.263 27.144 158.061 26.52C158.893 25.8613 159.309 25.116 159.309 24.284C159.309 23.8333 159.153 23.348 158.841 22.828C158.771 22.724 158.737 22.6027 158.737 22.464C158.737 22.256 158.823 22.152 158.997 22.152C159.135 22.152 159.257 22.2387 159.361 22.412C159.881 23.1747 160.141 23.9547 160.141 24.752C160.141 25.688 159.794 26.5547 159.101 27.352C158.442 28.1493 157.541 28.86 156.397 29.484C155.253 30.0733 153.97 30.524 152.549 30.836C151.162 31.148 149.741 31.2867 148.285 31.252C148.943 31.8067 149.429 32.4307 149.741 33.124C150.053 33.8173 150.209 34.5453 150.209 35.308C150.209 36.5907 149.827 37.908 149.065 39.26C148.302 40.5773 147.227 41.808 145.841 42.952C144.454 44.0613 142.825 44.9627 140.953 45.656C139.115 46.3493 137.087 46.696 134.869 46.696ZM142.877 25.896C144.021 25.896 144.593 25.6707 144.593 25.22C144.593 25.0467 144.437 24.8733 144.125 24.7C143.847 24.492 143.466 24.3707 142.981 24.336C142.773 24.3013 142.426 24.284 141.941 24.284C141.455 24.284 140.935 24.284 140.381 24.284C139.861 24.284 139.427 24.284 139.081 24.284C139.947 25.3587 141.213 25.896 142.877 25.896ZM225.778 53.976C223.351 53.976 220.994 53.2133 218.706 51.688C216.452 50.1973 214.528 47.7013 212.934 44.2C212.24 42.64 211.668 41.0627 211.218 39.468C210.802 37.8733 210.49 36.3827 210.282 34.996C210.074 33.6093 209.97 32.4653 209.97 31.564C209.97 30.4547 210.091 29.8307 210.334 29.692C210.992 29.7613 212.084 29.484 213.61 28.86C215.17 28.236 217.007 27.3173 219.122 26.104C221.271 24.8907 223.576 23.4347 226.038 21.736C228.534 20.0027 231.03 18.0613 233.526 15.912C236.056 13.7627 238.483 11.44 240.806 8.944C243.128 6.448 245.174 3.83067 246.942 1.09201C247.184 0.710671 247.375 0.433337 247.514 0.260004C247.652 0.0866709 247.791 4.29153e-06 247.93 4.29153e-06C248.103 4.29153e-06 248.259 0.0866709 248.398 0.260004C248.536 0.398671 248.606 0.554671 248.606 0.728004C248.606 1.00534 248.484 1.33467 248.242 1.716C246.578 4.48934 244.602 7.21067 242.314 9.88C240.06 12.5147 237.651 14.9933 235.086 17.316C232.52 19.6387 229.938 21.736 227.338 23.608C224.738 25.48 222.259 27.04 219.902 28.288C217.544 29.536 215.464 30.3853 213.662 30.836C213.558 30.7667 213.506 30.94 213.506 31.356C213.506 31.9453 213.627 32.8987 213.87 34.216C214.112 35.4987 214.476 36.972 214.962 38.636C215.482 40.2653 216.106 41.9293 216.834 43.628C218.151 46.7133 219.694 48.828 221.462 49.972C223.264 51.1507 225.119 51.74 227.026 51.74C228.239 51.74 229.487 51.4973 230.77 51.012C232.052 50.5267 233.231 49.8507 234.306 48.984C235.38 48.152 236.212 47.164 236.802 46.02C237.01 45.6733 237.166 45.5 237.27 45.5C237.512 45.5 237.634 45.6387 237.634 45.916C237.634 46.02 237.599 46.124 237.53 46.228C237.495 46.3667 237.391 46.6267 237.218 47.008C236.732 47.9787 235.918 49.0013 234.774 50.076C233.664 51.1853 232.33 52.104 230.77 52.832C229.244 53.5947 227.58 53.976 225.778 53.976ZM181.63 53.3C179.272 53.3 176.984 52.9707 174.766 52.312C172.582 51.688 170.606 50.752 168.838 49.504C167.104 48.256 165.718 46.7307 164.678 44.928C163.672 43.1253 163.17 41.08 163.17 38.792C163.17 37.128 163.412 35.6547 163.898 34.372C164.418 33.0547 165.042 31.9627 165.77 31.096C166.532 30.2293 167.278 29.5707 168.006 29.12C168.768 28.6693 169.392 28.444 169.878 28.444C170.224 28.444 170.398 28.548 170.398 28.756C170.398 28.9293 170.311 29.068 170.138 29.172C169.34 29.588 168.526 30.1947 167.694 30.992C166.862 31.7893 166.168 32.8293 165.614 34.112C165.059 35.3947 164.782 36.9893 164.782 38.896C164.782 40.976 165.215 42.7613 166.082 44.252C166.983 45.708 168.144 46.904 169.566 47.84C171.022 48.776 172.582 49.452 174.246 49.868C175.91 50.3187 177.504 50.544 179.03 50.544C182.427 50.544 185.599 49.8853 188.546 48.568C191.492 47.2507 194.179 45.5 196.606 43.316C199.067 41.0973 201.234 38.636 203.106 35.932C204.978 33.228 206.52 30.4893 207.734 27.716C208.184 26.7107 208.722 25.5147 209.346 24.128C209.97 22.7067 210.646 21.1987 211.374 19.604C212.102 18.0093 212.812 16.4493 213.506 14.924C214.199 13.3987 214.823 12.0293 215.378 10.816C215.967 9.568 216.435 8.61467 216.782 7.956C214.459 8.23334 211.946 8.49334 209.242 8.736C206.572 8.944 204.024 9.39467 201.598 10.088C198.894 10.8507 196.675 11.96 194.942 13.416C193.243 14.872 191.978 16.4493 191.146 18.148C190.348 19.8467 189.95 21.4413 189.95 22.932C189.95 24.7347 190.4 26.2253 191.302 27.404C192.203 28.548 193.503 29.12 195.202 29.12C196.484 29.12 197.628 28.756 198.634 28.028C199.639 27.2653 200.436 26.2947 201.026 25.116C201.615 23.9027 201.91 22.62 201.91 21.268C201.91 20.7133 201.858 20.2453 201.754 19.864C201.65 19.4827 201.598 19.188 201.598 18.98C201.598 18.7373 201.684 18.616 201.858 18.616C202.1 18.616 202.326 18.824 202.534 19.24C202.88 20.0373 203.054 20.8173 203.054 21.58C203.054 23.2093 202.655 24.6827 201.858 26C201.06 27.2827 200.038 28.3053 198.79 29.068C197.542 29.8307 196.224 30.212 194.838 30.212C193.208 30.212 191.787 29.8307 190.574 29.068C189.395 28.2707 188.476 27.2307 187.818 25.948C187.159 24.6653 186.83 23.2787 186.83 21.788C186.83 20.0893 187.298 18.3733 188.234 16.64C189.17 14.872 190.678 13.2773 192.758 11.856C194.838 10.4 197.576 9.29067 200.974 8.52801C203.816 7.90401 206.711 7.50534 209.658 7.33201C212.604 7.124 215.204 6.916 217.458 6.708C218.671 4.836 219.659 3.65734 220.422 3.172C221.184 2.652 221.878 2.392 222.502 2.392C223.126 2.392 223.611 2.56534 223.958 2.912C224.339 3.25867 224.53 3.67467 224.53 4.16C224.53 4.85334 224.044 5.59867 223.074 6.39601C222.138 7.15867 220.543 7.66134 218.29 7.904C217.18 9.94934 216.158 12.2373 215.222 14.768C214.286 17.264 213.35 19.8813 212.414 22.62C211.478 25.3587 210.455 28.08 209.346 30.784C207.474 35.2907 205.255 39.2427 202.69 42.64C200.124 46.0027 197.108 48.62 193.642 50.492C190.175 52.364 186.171 53.3 181.63 53.3ZM219.278 6.60401C220.144 6.53467 220.976 6.292 221.774 5.87601C222.571 5.42534 222.97 4.94001 222.97 4.42001C222.97 4.07334 222.796 3.9 222.45 3.9C222.138 3.9 221.704 4.108 221.15 4.524C220.595 4.90534 219.971 5.59867 219.278 6.60401ZM231.192 44.564C229.909 44.564 228.748 44.148 227.708 43.316C226.703 42.484 226.2 41.2187 226.2 39.52C226.2 38.0987 226.512 36.5907 227.136 34.996C227.795 33.4013 228.644 31.9107 229.684 30.524C230.759 29.1027 231.937 27.9587 233.22 27.092C234.537 26.1907 235.855 25.74 237.172 25.74C237.831 25.74 238.472 25.9307 239.096 26.312C239.72 26.6933 240.032 27.352 240.032 28.288C240.032 29.1547 239.703 30.108 239.044 31.148C238.385 32.188 237.449 33.1587 236.236 34.06C235.716 34.4413 235.057 34.8053 234.26 35.152C233.463 35.4987 232.665 35.7933 231.868 36.036C231.071 36.244 230.412 36.348 229.892 36.348C229.719 36.764 229.545 37.3187 229.372 38.012C229.233 38.7053 229.164 39.416 229.164 40.144C229.164 41.0107 229.337 41.7907 229.684 42.484C230.031 43.1773 230.672 43.524 231.608 43.524C232.752 43.524 233.809 43.1947 234.78 42.536C235.785 41.8773 236.669 41.0453 237.432 40.04C238.229 39.0347 238.905 38.012 239.46 36.972C240.015 35.932 240.448 35.048 240.76 34.32C241.176 34.32 241.384 34.476 241.384 34.788C240.933 35.7587 240.413 36.816 239.824 37.96C239.269 39.104 238.593 40.1787 237.796 41.184C237.033 42.1547 236.097 42.9693 234.988 43.628C233.913 44.252 232.648 44.564 231.192 44.564ZM230.256 35.412C230.741 35.412 231.556 35.2387 232.7 34.892C233.844 34.5107 234.884 33.9213 235.82 33.124C236.721 32.3267 237.415 31.46 237.9 30.524C238.385 29.5533 238.628 28.7387 238.628 28.08C238.628 27.3173 238.351 26.936 237.796 26.936C237.38 26.936 236.808 27.2133 236.08 27.768C235.352 28.3227 234.451 29.2587 233.376 30.576C232.717 31.408 232.093 32.3093 231.504 33.28C230.915 34.2507 230.499 34.9613 230.256 35.412ZM242.469 44.72C241.394 44.72 240.649 44.4427 240.233 43.888C239.817 43.3333 239.609 42.6227 239.609 41.756C239.609 40.8547 239.765 39.832 240.077 38.688C240.389 37.544 240.805 36.2613 241.325 34.84C240.943 34.84 240.753 34.6667 240.753 34.32C241.03 33.6267 241.325 32.8467 241.637 31.98C241.983 31.0787 242.157 30.0733 242.157 28.964C242.157 28.4093 242.087 27.9413 241.949 27.56C241.81 27.1787 241.602 26.9533 241.325 26.884C241.325 26.884 241.498 26.8493 241.845 26.78C242.226 26.7107 242.625 26.6413 243.041 26.572C243.457 26.5027 243.734 26.468 243.873 26.468C244.081 26.4333 244.271 26.416 244.445 26.416C244.618 26.3813 244.774 26.364 244.913 26.364C245.259 26.364 245.485 26.5027 245.589 26.78C245.727 27.0573 245.779 27.664 245.745 28.6C245.71 29.4667 245.537 30.524 245.225 31.772C244.913 32.9853 244.583 34.0427 244.237 34.944C243.786 36.1227 243.37 37.3187 242.989 38.532C242.607 39.7453 242.417 40.7507 242.417 41.548C242.417 42.2413 242.607 42.692 242.989 42.9C243.266 43.004 243.509 43.056 243.717 43.056C244.514 43.056 245.294 42.6747 246.057 41.912C246.819 41.1493 247.53 40.2307 248.189 39.156C248.882 38.0467 249.454 36.9893 249.905 35.984C249.697 35.1867 249.593 34.2333 249.593 33.124C249.593 31.9453 249.731 30.7493 250.009 29.536C250.286 28.3227 250.719 27.3173 251.309 26.52C251.898 25.688 252.661 25.272 253.597 25.272C254.255 25.272 254.585 25.5667 254.585 26.156C254.585 26.2947 254.411 26.884 254.065 27.924C253.753 28.964 253.337 30.1947 252.817 31.616C252.297 33.0373 251.742 34.4067 251.153 35.724C251.014 36.0013 250.893 36.2787 250.789 36.556C250.927 37.1453 251.187 37.6307 251.569 38.012C251.95 38.3587 252.418 38.532 252.973 38.532C253.666 38.532 254.307 38.22 254.897 37.596C255.521 36.9373 256.162 35.8453 256.821 34.32C257.237 34.32 257.445 34.476 257.445 34.788C256.89 36.1747 256.214 37.284 255.417 38.116C254.654 38.948 253.787 39.364 252.817 39.364C251.638 39.364 250.789 38.7573 250.269 37.544C249.679 38.7573 248.986 39.9187 248.189 41.028C247.391 42.1027 246.507 42.9867 245.537 43.68C244.601 44.3733 243.578 44.72 242.469 44.72ZM258.256 44.356C256.973 44.356 256.072 43.992 255.552 43.264C255.032 42.5013 254.772 41.6347 254.772 40.664C254.772 40.144 254.824 39.624 254.928 39.104C255.066 38.5493 255.222 38.0467 255.396 37.596L258.88 28.704C258.984 28.4267 259.036 28.184 259.036 27.976C259.036 27.6293 258.949 27.3347 258.776 27.092C258.602 26.8147 258.481 26.624 258.412 26.52L261.272 26.416C261.792 26.3813 262.156 26.4507 262.364 26.624C262.606 26.7627 262.728 26.936 262.728 27.144C262.728 27.352 262.606 27.7333 262.364 28.288C262.017 29.12 261.549 30.16 260.96 31.408C260.37 32.656 259.781 33.9387 259.192 35.256C258.637 36.5733 258.152 37.804 257.736 38.948C257.354 40.092 257.164 40.976 257.164 41.6C257.164 42.0507 257.268 42.432 257.476 42.744C257.718 43.056 258.117 43.212 258.672 43.212C259.4 43.212 260.11 42.9347 260.804 42.38C261.532 41.7907 262.208 41.0453 262.832 40.144C263.456 39.2427 264.028 38.272 264.548 37.232C265.102 36.192 265.57 35.2213 265.952 34.32C266.368 34.32 266.576 34.476 266.576 34.788C266.229 35.6547 265.778 36.6427 265.224 37.752C264.669 38.8613 264.028 39.9187 263.3 40.924C262.606 41.8947 261.826 42.7093 260.96 43.368C260.128 44.0267 259.226 44.356 258.256 44.356ZM262.884 23.192C262.433 23.192 262.034 23.0187 261.688 22.672C261.376 22.3253 261.22 21.9093 261.22 21.424C261.22 20.8347 261.462 20.3147 261.948 19.864C262.433 19.3787 262.97 19.136 263.56 19.136C264.045 19.136 264.461 19.292 264.808 19.604C265.154 19.916 265.328 20.3147 265.328 20.8C265.328 21.424 265.085 21.9787 264.6 22.464C264.114 22.9493 263.542 23.192 262.884 23.192ZM260.948 44.772C262.196 42.2413 263.392 39.7453 264.536 37.284C265.68 34.788 266.859 32.4133 268.072 30.16C268.766 28.912 269.355 28.0453 269.84 27.56C270.326 27.04 270.967 26.78 271.764 26.78C272.042 26.78 272.336 26.832 272.648 26.936C272.96 27.0053 273.272 27.04 273.584 27.04C273.792 27.04 273.948 27.0227 274.052 26.988C273.567 27.2653 272.926 27.9587 272.128 29.068C271.366 30.1427 270.586 31.3907 269.788 32.812C268.991 34.2333 268.28 35.568 267.656 36.816C268.315 36.0187 269.008 35.2213 269.736 34.424C270.464 33.6267 271.262 32.864 272.128 32.136C272.96 31.408 273.948 30.6627 275.092 29.9C276.271 29.1027 277.415 28.444 278.524 27.924C279.634 27.404 280.518 27.144 281.176 27.144C281.419 27.144 281.592 27.1613 281.696 27.196C281.696 27.196 281.506 27.5427 281.124 28.236C280.743 28.8947 280.258 29.7787 279.668 30.888C279.114 31.9627 278.542 33.124 277.952 34.372C277.363 35.5853 276.826 36.764 276.34 37.908C275.89 39.0173 275.595 39.9533 275.456 40.716C275.352 41.1667 275.3 41.5827 275.3 41.964C275.3 42.5187 275.404 42.8827 275.612 43.056C275.82 43.2293 276.046 43.316 276.288 43.316C276.947 43.316 277.623 43.0213 278.316 42.432C279.01 41.8427 279.668 41.0973 280.292 40.196C280.951 39.26 281.558 38.272 282.112 37.232C282.667 36.192 283.135 35.2213 283.516 34.32C283.932 34.32 284.14 34.476 284.14 34.788C283.759 35.724 283.274 36.764 282.684 37.908C282.13 39.0173 281.488 40.0747 280.76 41.08C280.067 42.0853 279.287 42.9173 278.42 43.576C277.554 44.2347 276.618 44.564 275.612 44.564C274.919 44.564 274.191 44.3213 273.428 43.836C272.7 43.3507 272.336 42.4493 272.336 41.132C272.336 40.7507 272.371 40.352 272.44 39.936C272.51 39.4853 272.631 39 272.804 38.48C273.082 37.7867 273.411 37.0413 273.792 36.244C274.174 35.4467 274.798 34.3547 275.664 32.968C275.907 32.5867 276.046 32.292 276.08 32.084C276.15 31.876 276.184 31.7027 276.184 31.564C276.184 31.148 275.994 30.94 275.612 30.94C275.3 30.94 274.832 31.1133 274.208 31.46C273.619 31.8067 272.874 32.4133 271.972 33.28C271.106 34.112 270.066 35.2907 268.852 36.816C267.674 38.3413 266.304 40.5947 264.744 43.576C264.502 44.0267 264.224 44.2693 263.912 44.304C263.635 44.3387 263.236 44.3733 262.716 44.408C262.37 44.4427 262.04 44.46 261.728 44.46C261.416 44.4947 261.156 44.5987 260.948 44.772Z", fill: "#FAF7F8" }) }) : C === "teal" ? /* @__PURE__ */ a.jsx("svg", { width: "314", height: "61", viewBox: "0 0 314 61", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M16.172 49.92C13.0173 49.92 10.2093 49.2786 7.74801 47.996C5.32134 46.748 3.41467 44.8933 2.02801 42.432C0.676005 39.936 5.00679e-06 36.8853 5.00679e-06 33.28C5.00679e-06 31.1306 0.277338 28.9813 0.832005 26.832C1.38667 24.6826 2.13201 22.62 3.06801 20.644C4.03867 18.668 5.11334 16.848 6.29201 15.184C5.77201 13.104 5.51201 10.8506 5.51201 8.42395C5.51201 6.58662 5.72001 4.83596 6.13601 3.17195C6.27467 2.68662 6.51734 2.44395 6.864 2.44395C7.14134 2.44395 7.26267 2.61729 7.22801 2.96395C7.12401 3.65729 7.03734 4.40262 6.96801 5.19996C6.89867 5.96262 6.864 6.88129 6.864 7.95595C6.864 9.96662 7.05467 11.8733 7.43601 13.676C7.78267 13.2253 8.12934 12.8093 8.47601 12.428C9.89734 10.868 11.5787 9.41196 13.52 8.05996C15.4613 6.67329 17.6107 5.56396 19.968 4.73196C22.36 3.89996 24.8907 3.48396 27.56 3.48396C30.056 3.48396 32.344 3.95196 34.424 4.88795C36.504 5.78929 38.168 7.10662 39.416 8.83996C40.6987 10.5386 41.34 12.6013 41.34 15.028C41.34 16.5533 40.924 18.1133 40.092 19.708C39.2947 21.3026 38.1333 22.776 36.608 24.128C35.1173 25.4453 33.2973 26.52 31.148 27.352C29.0333 28.184 26.6587 28.6 24.024 28.6C20.5573 28.6 17.3853 27.8373 14.508 26.312C11.6307 24.7866 9.39467 22.464 7.80001 19.344C6.41334 21.8053 5.39067 24.3013 4.73201 26.832C4.07334 29.3626 3.744 31.772 3.744 34.06C3.744 37.388 4.29867 40.092 5.40801 42.172C6.51734 44.252 8.04267 45.7773 9.98401 46.748C11.96 47.7533 14.2133 48.256 16.744 48.256C21.2507 48.256 25.2027 47.112 28.6 44.824C32.032 42.5706 34.8573 39.0693 37.076 34.32C37.492 34.32 37.7 34.476 37.7 34.788C35.5507 39.9186 32.604 43.7146 28.86 46.176C25.1507 48.672 20.9213 49.92 16.172 49.92ZM10.036 15.86C9.58534 16.484 9.15201 17.1253 8.73601 17.784C9.94934 20.6266 11.804 22.9146 14.3 24.648C16.796 26.3813 19.9333 27.248 23.712 27.248C26.104 27.248 28.236 26.884 30.108 26.156C32.0147 25.428 33.6093 24.4573 34.892 23.244C36.2093 22.0306 37.2147 20.696 37.908 19.24C38.6013 17.7493 38.948 16.2586 38.948 14.768C38.948 12.9306 38.4453 11.3186 37.44 9.93195C36.4693 8.54529 35.1347 7.47062 33.436 6.70796C31.7373 5.91062 29.8133 5.51196 27.664 5.51196C25.5147 5.51196 23.348 5.96262 21.164 6.86396C19.0147 7.76529 16.9693 8.99595 15.028 10.556C13.1213 12.116 11.4573 13.884 10.036 15.86ZM36.0368 44.772C37.4928 41.7906 39.0008 38.6706 40.5608 35.412C42.1555 32.1186 43.7848 28.808 45.4488 25.48C47.1128 22.152 48.7595 18.98 50.3888 15.964C50.9782 14.924 51.5155 14.1093 52.0008 13.52C52.5208 12.9306 53.1968 12.636 54.0288 12.636C54.3408 12.636 54.7048 12.688 55.1208 12.792C55.5368 12.896 55.9355 12.9133 56.3168 12.844C55.8662 13.3293 55.2422 14.1786 54.4448 15.392C53.6822 16.6053 52.8155 18.0613 51.8448 19.76C50.9088 21.4586 49.9035 23.296 48.8288 25.272C47.7888 27.2133 46.7488 29.1893 45.7088 31.2C44.7035 33.176 43.7675 35.0306 42.9008 36.764C43.5942 35.8626 44.3048 35.0133 45.0328 34.216C45.7608 33.4186 46.4715 32.7253 47.1648 32.136C47.9275 31.4426 48.8808 30.7146 50.0248 29.952C51.2035 29.1893 52.3648 28.5306 53.5088 27.976C54.6875 27.4213 55.6235 27.144 56.3168 27.144C56.5595 27.144 56.7328 27.1613 56.8368 27.196C56.8368 27.196 56.6462 27.5426 56.2648 28.236C55.8835 28.9293 55.3982 29.8133 54.8088 30.888C54.2542 31.9626 53.6648 33.124 53.0408 34.372C52.4515 35.62 51.9315 36.816 51.4808 37.96C51.0302 39.0693 50.7355 39.988 50.5968 40.716C50.4928 41.2706 50.4408 41.7386 50.4408 42.12C50.4408 42.6746 50.5448 43.056 50.7528 43.264C50.9608 43.4373 51.1862 43.524 51.4288 43.524C52.0182 43.524 52.6422 43.2293 53.3008 42.64C53.9942 42.016 54.6702 41.236 55.3288 40.3C55.9875 39.364 56.5942 38.376 57.1488 37.336C57.7382 36.2613 58.2062 35.256 58.5528 34.32C58.9688 34.32 59.1768 34.476 59.1768 34.788C58.7955 35.724 58.3102 36.764 57.7208 37.908C57.1662 39.0173 56.5248 40.0746 55.7968 41.08C55.0688 42.0853 54.2715 42.9173 53.4048 43.576C52.5382 44.2346 51.6195 44.564 50.6488 44.564C49.9555 44.564 49.2448 44.3213 48.5168 43.836C47.7888 43.3506 47.4248 42.4666 47.4248 41.184C47.4248 40.8026 47.4595 40.404 47.5288 39.988C47.5982 39.5373 47.7195 39.0346 47.8928 38.48C48.1008 37.7866 48.4475 37.024 48.9328 36.192C49.4182 35.3253 50.0422 34.2506 50.8048 32.968C51.1515 32.3786 51.3248 31.9106 51.3248 31.564C51.3248 31.148 51.1168 30.94 50.7008 30.94C50.3542 30.94 49.8862 31.1133 49.2968 31.46C48.7075 31.8066 47.9622 32.4133 47.0608 33.28C46.1942 34.112 45.1195 35.3253 43.8368 36.92C42.5542 38.5146 41.1848 40.7506 39.7288 43.628C39.4862 44.0786 39.2088 44.3213 38.8968 44.356C38.6195 44.356 38.2382 44.3733 37.7528 44.408C37.4408 44.4426 37.1288 44.46 36.8168 44.46C36.5048 44.4946 36.2448 44.5986 36.0368 44.772ZM62.2936 44.564C61.0109 44.564 59.8496 44.148 58.8096 43.316C57.8042 42.484 57.3016 41.2186 57.3016 39.52C57.3016 38.0986 57.6136 36.5906 58.2376 34.996C58.8962 33.4013 59.7456 31.9106 60.7856 30.524C61.8602 29.1026 63.0389 27.9586 64.3216 27.092C65.6389 26.1906 66.9562 25.74 68.2736 25.74C68.9322 25.74 69.5736 25.9306 70.1976 26.312C70.8216 26.6933 71.1336 27.352 71.1336 28.288C71.1336 29.1546 70.8042 30.108 70.1456 31.148C69.4869 32.188 68.5509 33.1586 67.3376 34.06C66.8176 34.4413 66.1589 34.8053 65.3616 35.152C64.5642 35.4986 63.7669 35.7933 62.9696 36.036C62.1722 36.244 61.5136 36.348 60.9936 36.348C60.8202 36.764 60.6469 37.3186 60.4736 38.012C60.3349 38.7053 60.2656 39.416 60.2656 40.144C60.2656 41.0106 60.4389 41.7906 60.7856 42.484C61.1322 43.1773 61.7736 43.524 62.7096 43.524C63.8536 43.524 64.9109 43.1946 65.8816 42.536C66.8869 41.8773 67.7709 41.0453 68.5336 40.04C69.3309 39.0346 70.0069 38.012 70.5616 36.972C71.1162 35.932 71.5496 35.048 71.8616 34.32C72.2776 34.32 72.4856 34.476 72.4856 34.788C72.0349 35.7586 71.5149 36.816 70.9256 37.96C70.3709 39.104 69.6949 40.1786 68.8976 41.184C68.1349 42.1546 67.1989 42.9693 66.0896 43.628C65.0149 44.252 63.7496 44.564 62.2936 44.564ZM61.3576 35.412C61.8429 35.412 62.6576 35.2386 63.8016 34.892C64.9456 34.5106 65.9856 33.9213 66.9216 33.124C67.8229 32.3266 68.5162 31.46 69.0016 30.524C69.4869 29.5533 69.7296 28.7386 69.7296 28.08C69.7296 27.3173 69.4522 26.936 68.8976 26.936C68.4816 26.936 67.9096 27.2133 67.1816 27.768C66.4536 28.3226 65.5522 29.2586 64.4776 30.576C63.8189 31.408 63.1949 32.3093 62.6056 33.28C62.0162 34.2506 61.6002 34.9613 61.3576 35.412ZM73.5703 44.72C72.4956 44.72 71.7503 44.4426 71.3343 43.888C70.9183 43.3333 70.7103 42.6226 70.7103 41.756C70.7103 40.8546 70.8663 39.832 71.1783 38.688C71.4903 37.544 71.9063 36.2613 72.4263 34.84C72.0449 34.84 71.8543 34.6666 71.8543 34.32C72.1316 33.6266 72.4263 32.8466 72.7383 31.98C73.0849 31.0786 73.2583 30.0733 73.2583 28.964C73.2583 28.4093 73.1889 27.9413 73.0503 27.56C72.9116 27.1786 72.7036 26.9533 72.4263 26.884C72.4263 26.884 72.5996 26.8493 72.9463 26.78C73.3276 26.7106 73.7263 26.6413 74.1423 26.572C74.5583 26.5026 74.8356 26.468 74.9743 26.468C75.1823 26.4333 75.3729 26.416 75.5463 26.416C75.7196 26.3813 75.8756 26.364 76.0143 26.364C76.3609 26.364 76.5863 26.5026 76.6903 26.78C76.8289 27.0573 76.8809 27.664 76.8463 28.6C76.8116 29.4666 76.6383 30.524 76.3263 31.772C76.0143 32.9853 75.6849 34.0426 75.3383 34.944C74.8876 36.1226 74.4716 37.3186 74.0903 38.532C73.7089 39.7453 73.5183 40.7506 73.5183 41.548C73.5183 42.2413 73.7089 42.692 74.0903 42.9C74.3676 43.004 74.6103 43.056 74.8183 43.056C75.6156 43.056 76.3956 42.6746 77.1583 41.912C77.9209 41.1493 78.6316 40.2306 79.2903 39.156C79.9836 38.0466 80.5556 36.9893 81.0063 35.984C80.7983 35.1866 80.6943 34.2333 80.6943 33.124C80.6943 31.9453 80.8329 30.7493 81.1103 29.536C81.3876 28.3226 81.8209 27.3173 82.4103 26.52C82.9996 25.688 83.7623 25.272 84.6983 25.272C85.3569 25.272 85.6863 25.5666 85.6863 26.156C85.6863 26.2946 85.5129 26.884 85.1663 27.924C84.8543 28.964 84.4383 30.1946 83.9183 31.616C83.3983 33.0373 82.8436 34.4066 82.2543 35.724C82.1156 36.0013 81.9943 36.2786 81.8903 36.556C82.0289 37.1453 82.2889 37.6306 82.6703 38.012C83.0516 38.3586 83.5196 38.532 84.0743 38.532C84.7676 38.532 85.4089 38.22 85.9983 37.596C86.6223 36.9373 87.2636 35.8453 87.9223 34.32C88.3383 34.32 88.5463 34.476 88.5463 34.788C87.9916 36.1746 87.3156 37.284 86.5183 38.116C85.7556 38.948 84.8889 39.364 83.9183 39.364C82.7396 39.364 81.8903 38.7573 81.3703 37.544C80.7809 38.7573 80.0876 39.9186 79.2903 41.028C78.4929 42.1026 77.6089 42.9866 76.6383 43.68C75.7023 44.3733 74.6796 44.72 73.5703 44.72ZM91.6451 44.564C90.3625 44.564 89.2011 44.148 88.1611 43.316C87.1558 42.484 86.6531 41.2186 86.6531 39.52C86.6531 38.0986 86.9651 36.5906 87.5891 34.996C88.2478 33.4013 89.0971 31.9106 90.1371 30.524C91.2118 29.1026 92.3905 27.9586 93.6731 27.092C94.9905 26.1906 96.3078 25.74 97.6251 25.74C98.2838 25.74 98.9251 25.9306 99.5491 26.312C100.173 26.6933 100.485 27.352 100.485 28.288C100.485 29.1546 100.156 30.108 99.4971 31.148C98.8385 32.188 97.9025 33.1586 96.6891 34.06C96.1691 34.4413 95.5105 34.8053 94.7131 35.152C93.9158 35.4986 93.1185 35.7933 92.3211 36.036C91.5238 36.244 90.8651 36.348 90.3451 36.348C90.1718 36.764 89.9985 37.3186 89.8251 38.012C89.6865 38.7053 89.6171 39.416 89.6171 40.144C89.6171 41.0106 89.7905 41.7906 90.1371 42.484C90.4838 43.1773 91.1251 43.524 92.0611 43.524C93.2051 43.524 94.2625 43.1946 95.2331 42.536C96.2385 41.8773 97.1225 41.0453 97.8851 40.04C98.6825 39.0346 99.3585 38.012 99.9131 36.972C100.468 35.932 100.901 35.048 101.213 34.32C101.629 34.32 101.837 34.476 101.837 34.788C101.386 35.7586 100.866 36.816 100.277 37.96C99.7225 39.104 99.0465 40.1786 98.2491 41.184C97.4865 42.1546 96.5505 42.9693 95.4411 43.628C94.3665 44.252 93.1011 44.564 91.6451 44.564ZM90.7091 35.412C91.1945 35.412 92.0091 35.2386 93.1531 34.892C94.2971 34.5106 95.3371 33.9213 96.2731 33.124C97.1745 32.3266 97.8678 31.46 98.3531 30.524C98.8385 29.5533 99.0811 28.7386 99.0811 28.08C99.0811 27.3173 98.8038 26.936 98.2491 26.936C97.8331 26.936 97.2611 27.2133 96.5331 27.768C95.8051 28.3226 94.9038 29.2586 93.8291 30.576C93.1705 31.408 92.5465 32.3093 91.9571 33.28C91.3678 34.2506 90.9518 34.9613 90.7091 35.412ZM103.65 44.512C102.367 44.512 101.414 44.1306 100.79 43.368C100.2 42.5706 99.9058 41.6346 99.9058 40.56C99.9058 39.4506 100.062 38.3066 100.374 37.128C100.686 35.9493 100.963 34.9613 101.206 34.164C101.76 32.2226 102.454 30.16 103.286 27.976C104.152 25.7573 105.088 23.5906 106.094 21.476C107.134 19.3266 108.156 17.4026 109.162 15.704C109.959 14.352 110.808 13.3466 111.71 12.688C112.646 11.9946 113.46 11.648 114.154 11.648C114.708 11.648 115.142 11.856 115.454 12.272C115.8 12.6533 115.974 13.2426 115.974 14.04C115.974 14.5946 115.87 15.2533 115.662 16.016C115.488 16.7786 115.176 17.6453 114.726 18.616C113.512 21.32 112.056 24.024 110.358 26.728C108.694 29.432 106.579 31.9626 104.014 34.32C103.598 35.2906 103.251 36.3306 102.974 37.44C102.696 38.5493 102.558 39.4506 102.558 40.144C102.558 42.2933 103.286 43.368 104.742 43.368C105.851 43.368 107.082 42.5706 108.434 40.976C109.786 39.3466 111.068 37.128 112.282 34.32C112.42 34.32 112.559 34.3546 112.698 34.424C112.836 34.4586 112.906 34.58 112.906 34.788C112.524 35.724 112.039 36.764 111.45 37.908C110.895 39.0173 110.236 40.0746 109.474 41.08C108.746 42.0853 107.896 42.9173 106.926 43.576C105.955 44.2 104.863 44.512 103.65 44.512ZM104.43 32.656C105.678 31.3733 106.891 29.9 108.07 28.236C109.248 26.5373 110.34 24.7866 111.346 22.984C112.386 21.1466 113.252 19.4133 113.946 17.784C114.188 17.264 114.379 16.692 114.518 16.068C114.691 15.444 114.778 14.924 114.778 14.508C114.778 14.0226 114.656 13.78 114.414 13.78C114.275 13.78 114.067 13.9186 113.79 14.196C113.512 14.4386 113.148 14.872 112.698 15.496C112.039 16.3626 111.311 17.5413 110.514 19.032C109.751 20.5226 108.971 22.1173 108.174 23.816C107.376 25.5146 106.648 27.1613 105.99 28.756C105.331 30.316 104.811 31.616 104.43 32.656ZM114.72 44.512C113.437 44.512 112.484 44.1306 111.86 43.368C111.271 42.5706 110.976 41.6346 110.976 40.56C110.976 39.4506 111.132 38.3066 111.444 37.128C111.756 35.9493 112.033 34.9613 112.276 34.164C112.831 32.2226 113.524 30.16 114.356 27.976C115.223 25.7573 116.159 23.5906 117.164 21.476C118.204 19.3266 119.227 17.4026 120.232 15.704C121.029 14.352 121.879 13.3466 122.78 12.688C123.716 11.9946 124.531 11.648 125.224 11.648C125.779 11.648 126.212 11.856 126.524 12.272C126.871 12.6533 127.044 13.2426 127.044 14.04C127.044 14.5946 126.94 15.2533 126.732 16.016C126.559 16.7786 126.247 17.6453 125.796 18.616C124.583 21.32 123.127 24.024 121.428 26.728C119.764 29.432 117.649 31.9626 115.084 34.32C114.668 35.2906 114.321 36.3306 114.044 37.44C113.767 38.5493 113.628 39.4506 113.628 40.144C113.628 42.2933 114.356 43.368 115.812 43.368C116.921 43.368 118.152 42.5706 119.504 40.976C120.856 39.3466 122.139 37.128 123.352 34.32C123.491 34.32 123.629 34.3546 123.768 34.424C123.907 34.4586 123.976 34.58 123.976 34.788C123.595 35.724 123.109 36.764 122.52 37.908C121.965 39.0173 121.307 40.0746 120.544 41.08C119.816 42.0853 118.967 42.9173 117.996 43.576C117.025 44.2 115.933 44.512 114.72 44.512ZM115.5 32.656C116.748 31.3733 117.961 29.9 119.14 28.236C120.319 26.5373 121.411 24.7866 122.416 22.984C123.456 21.1466 124.323 19.4133 125.016 17.784C125.259 17.264 125.449 16.692 125.588 16.068C125.761 15.444 125.848 14.924 125.848 14.508C125.848 14.0226 125.727 13.78 125.484 13.78C125.345 13.78 125.137 13.9186 124.86 14.196C124.583 14.4386 124.219 14.872 123.768 15.496C123.109 16.3626 122.381 17.5413 121.584 19.032C120.821 20.5226 120.041 22.1173 119.244 23.816C118.447 25.5146 117.719 27.1613 117.06 28.756C116.401 30.316 115.881 31.616 115.5 32.656ZM116.17 60.944C114.368 60.944 113.085 60.58 112.322 59.852C111.56 59.1586 111.178 58.3266 111.178 57.356C111.178 55.8653 111.733 54.4786 112.842 53.196C113.917 51.948 115.252 50.9426 116.846 50.18C118.649 49.348 120.694 48.672 122.982 48.152C125.305 47.632 127.524 47.06 129.638 46.436C130.297 45.292 130.904 43.992 131.458 42.536C132.013 41.0453 132.516 39.6066 132.966 38.22C133.417 36.7986 133.781 35.6373 134.058 34.736C133.642 35.4986 133.105 36.4346 132.446 37.544C131.822 38.6186 131.112 39.676 130.314 40.716C129.517 41.756 128.65 42.6226 127.714 43.316C126.813 44.0093 125.86 44.356 124.854 44.356C124.473 44.356 124.005 44.2693 123.45 44.096C122.93 43.9226 122.462 43.6106 122.046 43.16C121.665 42.6746 121.474 41.964 121.474 41.028C121.474 40.1266 121.752 39.1386 122.306 38.064C122.861 36.9546 123.416 35.8626 123.97 34.788C123.797 34.788 123.641 34.7706 123.502 34.736C123.398 34.7013 123.346 34.5626 123.346 34.32C123.45 34.112 123.658 33.6613 123.97 32.968C124.282 32.2746 124.629 31.512 125.01 30.68C125.426 29.848 125.79 29.12 126.102 28.496C126.484 27.6986 126.9 27.144 127.35 26.832C127.836 26.52 128.304 26.364 128.754 26.364H131.978C131.736 26.572 131.424 26.8146 131.042 27.092C130.696 27.3346 130.366 27.716 130.054 28.236C129.118 29.8306 128.304 31.3733 127.61 32.864C126.917 34.32 126.172 35.88 125.374 37.544C124.993 38.3413 124.716 39.0693 124.542 39.728C124.369 40.3866 124.282 40.9586 124.282 41.444C124.282 42.588 124.664 43.16 125.426 43.16C126.258 43.16 127.264 42.484 128.442 41.132C129.413 39.988 130.384 38.636 131.354 37.076C132.36 35.4813 133.313 33.852 134.214 32.188C135.15 30.4893 135.965 28.9293 136.658 27.508C137.04 26.7453 137.716 26.364 138.686 26.364H141.546C140.541 27.0573 139.761 27.9586 139.206 29.068C138.686 30.1773 138.097 31.5986 137.438 33.332C136.71 35.2386 136.017 37.2146 135.358 39.26C134.7 41.3053 133.972 43.4026 133.174 45.552C134.873 44.9626 136.294 44.2 137.438 43.264C138.582 42.328 139.588 41.132 140.454 39.676C141.356 38.1853 142.257 36.4 143.158 34.32C143.574 34.32 143.782 34.476 143.782 34.788C143.02 36.3826 142.326 37.7866 141.702 39C141.078 40.2133 140.385 41.288 139.622 42.224C138.86 43.1253 137.906 43.9573 136.762 44.72C135.618 45.5173 134.145 46.28 132.342 47.008C131.51 48.4986 130.557 50.0413 129.482 51.636C128.442 53.2653 127.246 54.7733 125.894 56.16C124.577 57.5813 123.104 58.7253 121.474 59.592C119.88 60.4933 118.112 60.944 116.17 60.944ZM114.922 59.904C116.066 59.904 117.245 59.5573 118.458 58.864C119.672 58.1706 120.85 57.2866 121.994 56.212C123.138 55.172 124.178 54.0973 125.114 52.988C126.085 51.9133 126.865 50.96 127.454 50.128C127.628 49.8853 127.818 49.5733 128.026 49.192C128.234 48.8106 128.442 48.4466 128.65 48.1C126.952 48.5506 125.08 49.036 123.034 49.556C121.024 50.1106 119.273 50.7173 117.782 51.376C116.118 52.0693 114.818 53.0573 113.882 54.34C112.912 55.6226 112.426 56.7666 112.426 57.772C112.426 58.396 112.634 58.8986 113.05 59.28C113.432 59.696 114.056 59.904 114.922 59.904ZM164.22 46.696C161.273 46.696 158.829 46.228 156.888 45.292C154.947 44.3906 153.491 43.1946 152.52 41.704C151.584 40.1786 151.116 38.5666 151.116 36.868C151.116 34.9613 151.688 33.072 152.832 31.2C153.976 29.2933 155.675 27.664 157.928 26.312C160.216 24.9253 163.007 24.0586 166.3 23.712C165.815 23.0533 165.451 22.308 165.208 21.476C164.965 20.6093 164.844 19.7946 164.844 19.032C164.879 17.1946 165.399 15.5826 166.404 14.196C167.409 12.7746 168.692 11.5786 170.252 10.608C171.847 9.63729 173.545 8.90929 175.348 8.42395C177.151 7.90396 178.849 7.64396 180.444 7.64396C181.415 7.64396 182.403 7.78262 183.408 8.05996C184.413 8.30262 185.263 8.75329 185.956 9.41195C186.649 10.0706 186.996 11.0066 186.996 12.22C186.996 13.2253 186.684 14.1266 186.06 14.924C185.436 15.7213 184.673 16.12 183.772 16.12C183.113 16.12 182.541 15.8773 182.056 15.392C181.571 14.9066 181.328 14.352 181.328 13.728C181.328 13 181.553 12.4106 182.004 11.96C182.489 11.4746 183.079 11.232 183.772 11.232C184.084 11.232 184.431 11.336 184.812 11.544C185.228 11.752 185.488 11.96 185.592 12.168C185.627 12.0293 185.644 11.8386 185.644 11.596C185.644 10.66 185.263 10.0013 184.5 9.61995C183.737 9.23862 182.923 9.04796 182.056 9.04796C180.669 9.04796 179.057 9.39462 177.22 10.088C175.383 10.7466 173.597 11.8386 171.864 13.364C171.24 13.9186 170.599 14.6466 169.94 15.548C169.281 16.4493 168.727 17.42 168.276 18.46C167.825 19.4653 167.6 20.488 167.6 21.528C167.6 22.3253 167.739 23.0186 168.016 23.608C168.536 23.608 169.125 23.5906 169.784 23.556C170.477 23.4866 171.188 23.452 171.916 23.452C172.817 23.452 173.528 23.6426 174.048 24.024C174.568 24.4053 174.828 24.8386 174.828 25.324C174.828 25.6706 174.62 26 174.204 26.312C173.788 26.624 173.129 26.78 172.228 26.78C171.084 26.78 170.044 26.5373 169.108 26.052C168.207 25.532 167.496 25.012 166.976 24.492C164.688 24.804 162.747 25.6533 161.152 27.04C159.557 28.4266 158.344 30.0733 157.512 31.98C156.68 33.852 156.264 35.724 156.264 37.596C156.264 39.0866 156.541 40.4733 157.096 41.756C157.685 43.0386 158.569 44.0613 159.748 44.824C160.927 45.6213 162.417 46.02 164.22 46.02C166.092 46.02 167.791 45.6733 169.316 44.98C170.876 44.3213 172.211 43.4546 173.32 42.38C174.429 41.3053 175.279 40.1786 175.868 39C176.492 37.7866 176.804 36.66 176.804 35.62C176.804 34.7186 176.475 33.9733 175.816 33.384C175.192 32.76 174.36 32.3093 173.32 32.032C172.28 31.72 171.171 31.564 169.992 31.564C168.779 31.564 167.565 31.7373 166.352 32.084C165.173 32.396 164.168 32.8986 163.336 33.592C162.504 34.2506 162.001 35.1 161.828 36.14C161.828 36.2093 161.811 36.296 161.776 36.4C161.776 36.4693 161.776 36.5386 161.776 36.608C161.776 37.3706 162.053 38.1333 162.608 38.896C163.197 39.624 164.099 40.3 165.312 40.924C165.624 41.0626 165.78 41.3226 165.78 41.704C165.78 42.0853 165.607 42.1893 165.26 42.016C163.353 41.0106 161.949 39.9186 161.048 38.74C160.181 37.5266 159.748 36.3826 159.748 35.308C159.748 33.748 160.58 32.4133 162.244 31.304C163.943 30.16 166.352 29.588 169.472 29.588H178.676C179.231 29.588 180.045 29.4666 181.12 29.224C182.229 28.9813 183.356 28.6346 184.5 28.184C185.644 27.6986 186.615 27.144 187.412 26.52C188.244 25.8613 188.66 25.116 188.66 24.284C188.66 23.8333 188.504 23.348 188.192 22.828C188.123 22.724 188.088 22.6026 188.088 22.464C188.088 22.256 188.175 22.152 188.348 22.152C188.487 22.152 188.608 22.2386 188.712 22.412C189.232 23.1746 189.492 23.9546 189.492 24.752C189.492 25.688 189.145 26.5546 188.452 27.352C187.793 28.1493 186.892 28.86 185.748 29.484C184.604 30.0733 183.321 30.524 181.9 30.836C180.513 31.148 179.092 31.2866 177.636 31.252C178.295 31.8066 178.78 32.4306 179.092 33.124C179.404 33.8173 179.56 34.5453 179.56 35.308C179.56 36.5906 179.179 37.908 178.416 39.26C177.653 40.5773 176.579 41.808 175.192 42.952C173.805 44.0613 172.176 44.9626 170.304 45.656C168.467 46.3493 166.439 46.696 164.22 46.696ZM172.228 25.896C173.372 25.896 173.944 25.6706 173.944 25.22C173.944 25.0466 173.788 24.8733 173.476 24.7C173.199 24.492 172.817 24.3706 172.332 24.336C172.124 24.3013 171.777 24.284 171.292 24.284C170.807 24.284 170.287 24.284 169.732 24.284C169.212 24.284 168.779 24.284 168.432 24.284C169.299 25.3586 170.564 25.896 172.228 25.896ZM255.129 53.976C252.702 53.976 250.345 53.2133 248.057 51.688C245.804 50.1973 243.88 47.7013 242.285 44.2C241.592 42.64 241.02 41.0626 240.569 39.468C240.153 37.8733 239.841 36.3826 239.633 34.996C239.425 33.6093 239.321 32.4653 239.321 31.564C239.321 30.4546 239.442 29.8306 239.685 29.692C240.344 29.7613 241.436 29.484 242.961 28.86C244.521 28.236 246.358 27.3173 248.473 26.104C250.622 24.8906 252.928 23.4346 255.389 21.736C257.885 20.0026 260.381 18.0613 262.877 15.912C265.408 13.7626 267.834 11.44 270.157 8.94395C272.48 6.44796 274.525 3.83062 276.293 1.09196C276.536 0.710622 276.726 0.433288 276.865 0.259954C277.004 0.0866213 277.142 -4.52995e-05 277.281 -4.52995e-05C277.454 -4.52995e-05 277.61 0.0866213 277.749 0.259954C277.888 0.398621 277.957 0.554621 277.957 0.727955C277.957 1.00529 277.836 1.33462 277.593 1.71595C275.929 4.48929 273.953 7.21062 271.665 9.87995C269.412 12.5146 267.002 14.9933 264.437 17.316C261.872 19.6386 259.289 21.736 256.689 23.608C254.089 25.48 251.61 27.04 249.253 28.288C246.896 29.536 244.816 30.3853 243.013 30.836C242.909 30.7666 242.857 30.94 242.857 31.356C242.857 31.9453 242.978 32.8986 243.221 34.216C243.464 35.4986 243.828 36.972 244.313 38.636C244.833 40.2653 245.457 41.9293 246.185 43.628C247.502 46.7133 249.045 48.828 250.813 49.972C252.616 51.1506 254.47 51.74 256.377 51.74C257.59 51.74 258.838 51.4973 260.121 51.012C261.404 50.5266 262.582 49.8506 263.657 48.984C264.732 48.152 265.564 47.164 266.153 46.02C266.361 45.6733 266.517 45.5 266.621 45.5C266.864 45.5 266.985 45.6386 266.985 45.916C266.985 46.02 266.95 46.124 266.881 46.228C266.846 46.3666 266.742 46.6266 266.569 47.008C266.084 47.9786 265.269 49.0013 264.125 50.076C263.016 51.1853 261.681 52.104 260.121 52.832C258.596 53.5946 256.932 53.976 255.129 53.976ZM210.981 53.3C208.624 53.3 206.336 52.9706 204.117 52.312C201.933 51.688 199.957 50.752 198.189 49.504C196.456 48.256 195.069 46.7306 194.029 44.928C193.024 43.1253 192.521 41.08 192.521 38.792C192.521 37.128 192.764 35.6546 193.249 34.372C193.769 33.0546 194.393 31.9626 195.121 31.096C195.884 30.2293 196.629 29.5706 197.357 29.12C198.12 28.6693 198.744 28.444 199.229 28.444C199.576 28.444 199.749 28.548 199.749 28.756C199.749 28.9293 199.662 29.068 199.489 29.172C198.692 29.588 197.877 30.1946 197.045 30.992C196.213 31.7893 195.52 32.8293 194.965 34.112C194.41 35.3946 194.133 36.9893 194.133 38.896C194.133 40.976 194.566 42.7613 195.433 44.252C196.334 45.708 197.496 46.904 198.917 47.84C200.373 48.776 201.933 49.452 203.597 49.868C205.261 50.3186 206.856 50.544 208.381 50.544C211.778 50.544 214.95 49.8853 217.897 48.568C220.844 47.2506 223.53 45.5 225.957 43.316C228.418 41.0973 230.585 38.636 232.457 35.932C234.329 33.228 235.872 30.4893 237.085 27.716C237.536 26.7106 238.073 25.5146 238.697 24.128C239.321 22.7066 239.997 21.1986 240.725 19.604C241.453 18.0093 242.164 16.4493 242.857 14.924C243.55 13.3986 244.174 12.0293 244.729 10.816C245.318 9.56795 245.786 8.61462 246.133 7.95595C243.81 8.23329 241.297 8.49329 238.593 8.73595C235.924 8.94396 233.376 9.39462 230.949 10.088C228.245 10.8506 226.026 11.96 224.293 13.416C222.594 14.872 221.329 16.4493 220.497 18.148C219.7 19.8466 219.301 21.4413 219.301 22.932C219.301 24.7346 219.752 26.2253 220.653 27.404C221.554 28.548 222.854 29.12 224.553 29.12C225.836 29.12 226.98 28.756 227.985 28.028C228.99 27.2653 229.788 26.2946 230.377 25.116C230.966 23.9026 231.261 22.62 231.261 21.268C231.261 20.7133 231.209 20.2453 231.105 19.864C231.001 19.4826 230.949 19.188 230.949 18.98C230.949 18.7373 231.036 18.616 231.209 18.616C231.452 18.616 231.677 18.824 231.885 19.24C232.232 20.0373 232.405 20.8173 232.405 21.58C232.405 23.2093 232.006 24.6826 231.209 26C230.412 27.2826 229.389 28.3053 228.141 29.068C226.893 29.8306 225.576 30.212 224.189 30.212C222.56 30.212 221.138 29.8306 219.925 29.068C218.746 28.2706 217.828 27.2306 217.169 25.948C216.51 24.6653 216.181 23.2786 216.181 21.788C216.181 20.0893 216.649 18.3733 217.585 16.64C218.521 14.872 220.029 13.2773 222.109 11.856C224.189 10.4 226.928 9.29062 230.325 8.52796C233.168 7.90396 236.062 7.50529 239.009 7.33196C241.956 7.12395 244.556 6.91595 246.809 6.70796C248.022 4.83595 249.01 3.65729 249.773 3.17195C250.536 2.65195 251.229 2.39195 251.853 2.39195C252.477 2.39195 252.962 2.56529 253.309 2.91195C253.69 3.25862 253.881 3.67462 253.881 4.15995C253.881 4.85329 253.396 5.59862 252.425 6.39596C251.489 7.15862 249.894 7.66129 247.641 7.90396C246.532 9.94929 245.509 12.2373 244.573 14.768C243.637 17.264 242.701 19.8813 241.765 22.62C240.829 25.3586 239.806 28.08 238.697 30.784C236.825 35.2906 234.606 39.2426 232.041 42.64C229.476 46.0026 226.46 48.62 222.993 50.492C219.526 52.364 215.522 53.3 210.981 53.3ZM248.629 6.60396C249.496 6.53462 250.328 6.29196 251.125 5.87596C251.922 5.42529 252.321 4.93996 252.321 4.41996C252.321 4.07329 252.148 3.89995 251.801 3.89995C251.489 3.89995 251.056 4.10795 250.501 4.52396C249.946 4.90529 249.322 5.59862 248.629 6.60396ZM260.544 44.564C259.261 44.564 258.1 44.148 257.06 43.316C256.054 42.484 255.552 41.2186 255.552 39.52C255.552 38.0986 255.864 36.5906 256.488 34.996C257.146 33.4013 257.996 31.9106 259.036 30.524C260.11 29.1026 261.289 27.9586 262.572 27.092C263.889 26.1906 265.206 25.74 266.524 25.74C267.182 25.74 267.824 25.9306 268.448 26.312C269.072 26.6933 269.384 27.352 269.384 28.288C269.384 29.1546 269.054 30.108 268.396 31.148C267.737 32.188 266.801 33.1586 265.588 34.06C265.068 34.4413 264.409 34.8053 263.612 35.152C262.814 35.4986 262.017 35.7933 261.22 36.036C260.422 36.244 259.764 36.348 259.244 36.348C259.07 36.764 258.897 37.3186 258.724 38.012C258.585 38.7053 258.516 39.416 258.516 40.144C258.516 41.0106 258.689 41.7906 259.036 42.484C259.382 43.1773 260.024 43.524 260.96 43.524C262.104 43.524 263.161 43.1946 264.132 42.536C265.137 41.8773 266.021 41.0453 266.784 40.04C267.581 39.0346 268.257 38.012 268.812 36.972C269.366 35.932 269.8 35.048 270.112 34.32C270.528 34.32 270.736 34.476 270.736 34.788C270.285 35.7586 269.765 36.816 269.176 37.96C268.621 39.104 267.945 40.1786 267.148 41.184C266.385 42.1546 265.449 42.9693 264.34 43.628C263.265 44.252 262 44.564 260.544 44.564ZM259.608 35.412C260.093 35.412 260.908 35.2386 262.052 34.892C263.196 34.5106 264.236 33.9213 265.172 33.124C266.073 32.3266 266.766 31.46 267.252 30.524C267.737 29.5533 267.98 28.7386 267.98 28.08C267.98 27.3173 267.702 26.936 267.148 26.936C266.732 26.936 266.16 27.2133 265.432 27.768C264.704 28.3226 263.802 29.2586 262.728 30.576C262.069 31.408 261.445 32.3093 260.856 33.28C260.266 34.2506 259.85 34.9613 259.608 35.412ZM271.82 44.72C270.746 44.72 270 44.4426 269.584 43.888C269.168 43.3333 268.96 42.6226 268.96 41.756C268.96 40.8546 269.116 39.832 269.428 38.688C269.74 37.544 270.156 36.2613 270.676 34.84C270.295 34.84 270.104 34.6666 270.104 34.32C270.382 33.6266 270.676 32.8466 270.988 31.98C271.335 31.0786 271.508 30.0733 271.508 28.964C271.508 28.4093 271.439 27.9413 271.3 27.56C271.162 27.1786 270.954 26.9533 270.676 26.884C270.676 26.884 270.85 26.8493 271.196 26.78C271.578 26.7106 271.976 26.6413 272.392 26.572C272.808 26.5026 273.086 26.468 273.224 26.468C273.432 26.4333 273.623 26.416 273.796 26.416C273.97 26.3813 274.126 26.364 274.264 26.364C274.611 26.364 274.836 26.5026 274.94 26.78C275.079 27.0573 275.131 27.664 275.096 28.6C275.062 29.4666 274.888 30.524 274.576 31.772C274.264 32.9853 273.935 34.0426 273.588 34.944C273.138 36.1226 272.722 37.3186 272.34 38.532C271.959 39.7453 271.768 40.7506 271.768 41.548C271.768 42.2413 271.959 42.692 272.34 42.9C272.618 43.004 272.86 43.056 273.068 43.056C273.866 43.056 274.646 42.6746 275.408 41.912C276.171 41.1493 276.882 40.2306 277.54 39.156C278.234 38.0466 278.806 36.9893 279.256 35.984C279.048 35.1866 278.944 34.2333 278.944 33.124C278.944 31.9453 279.083 30.7493 279.36 29.536C279.638 28.3226 280.071 27.3173 280.66 26.52C281.25 25.688 282.012 25.272 282.948 25.272C283.607 25.272 283.936 25.5666 283.936 26.156C283.936 26.2946 283.763 26.884 283.416 27.924C283.104 28.964 282.688 30.1946 282.168 31.616C281.648 33.0373 281.094 34.4066 280.504 35.724C280.366 36.0013 280.244 36.2786 280.14 36.556C280.279 37.1453 280.539 37.6306 280.92 38.012C281.302 38.3586 281.77 38.532 282.324 38.532C283.018 38.532 283.659 38.22 284.248 37.596C284.872 36.9373 285.514 35.8453 286.172 34.32C286.588 34.32 286.796 34.476 286.796 34.788C286.242 36.1746 285.566 37.284 284.768 38.116C284.006 38.948 283.139 39.364 282.168 39.364C280.99 39.364 280.14 38.7573 279.62 37.544C279.031 38.7573 278.338 39.9186 277.54 41.028C276.743 42.1026 275.859 42.9866 274.888 43.68C273.952 44.3733 272.93 44.72 271.82 44.72ZM287.607 44.356C286.324 44.356 285.423 43.992 284.903 43.264C284.383 42.5013 284.123 41.6346 284.123 40.664C284.123 40.144 284.175 39.624 284.279 39.104C284.418 38.5493 284.574 38.0466 284.747 37.596L288.231 28.704C288.335 28.4266 288.387 28.184 288.387 27.976C288.387 27.6293 288.3 27.3346 288.127 27.092C287.954 26.8146 287.832 26.624 287.763 26.52L290.623 26.416C291.143 26.3813 291.507 26.4506 291.715 26.624C291.958 26.7626 292.079 26.936 292.079 27.144C292.079 27.352 291.958 27.7333 291.715 28.288C291.368 29.12 290.9 30.16 290.311 31.408C289.722 32.656 289.132 33.9386 288.543 35.256C287.988 36.5733 287.503 37.804 287.087 38.948C286.706 40.092 286.515 40.976 286.515 41.6C286.515 42.0506 286.619 42.432 286.827 42.744C287.07 43.056 287.468 43.212 288.023 43.212C288.751 43.212 289.462 42.9346 290.155 42.38C290.883 41.7906 291.559 41.0453 292.183 40.144C292.807 39.2426 293.379 38.272 293.899 37.232C294.454 36.192 294.922 35.2213 295.303 34.32C295.719 34.32 295.927 34.476 295.927 34.788C295.58 35.6546 295.13 36.6426 294.575 37.752C294.02 38.8613 293.379 39.9186 292.651 40.924C291.958 41.8946 291.178 42.7093 290.311 43.368C289.479 44.0266 288.578 44.356 287.607 44.356ZM292.235 23.192C291.784 23.192 291.386 23.0186 291.039 22.672C290.727 22.3253 290.571 21.9093 290.571 21.424C290.571 20.8346 290.814 20.3146 291.299 19.864C291.784 19.3786 292.322 19.136 292.911 19.136C293.396 19.136 293.812 19.292 294.159 19.604C294.506 19.916 294.679 20.3146 294.679 20.8C294.679 21.424 294.436 21.9786 293.951 22.464C293.466 22.9493 292.894 23.192 292.235 23.192ZM290.3 44.772C291.548 42.2413 292.744 39.7453 293.888 37.284C295.032 34.788 296.21 32.4133 297.424 30.16C298.117 28.912 298.706 28.0453 299.192 27.56C299.677 27.04 300.318 26.78 301.116 26.78C301.393 26.78 301.688 26.832 302 26.936C302.312 27.0053 302.624 27.04 302.936 27.04C303.144 27.04 303.3 27.0226 303.404 26.988C302.918 27.2653 302.277 27.9586 301.48 29.068C300.717 30.1426 299.937 31.3906 299.14 32.812C298.342 34.2333 297.632 35.568 297.008 36.816C297.666 36.0186 298.36 35.2213 299.088 34.424C299.816 33.6266 300.613 32.864 301.48 32.136C302.312 31.408 303.3 30.6626 304.444 29.9C305.622 29.1026 306.766 28.444 307.876 27.924C308.985 27.404 309.869 27.144 310.528 27.144C310.77 27.144 310.944 27.1613 311.048 27.196C311.048 27.196 310.857 27.5426 310.476 28.236C310.094 28.8946 309.609 29.7786 309.02 30.888C308.465 31.9626 307.893 33.124 307.304 34.372C306.714 35.5853 306.177 36.764 305.692 37.908C305.241 39.0173 304.946 39.9533 304.808 40.716C304.704 41.1666 304.652 41.5826 304.652 41.964C304.652 42.5186 304.756 42.8826 304.964 43.056C305.172 43.2293 305.397 43.316 305.64 43.316C306.298 43.316 306.974 43.0213 307.668 42.432C308.361 41.8426 309.02 41.0973 309.644 40.196C310.302 39.26 310.909 38.272 311.464 37.232C312.018 36.192 312.486 35.2213 312.868 34.32C313.284 34.32 313.492 34.476 313.492 34.788C313.11 35.724 312.625 36.764 312.036 37.908C311.481 39.0173 310.84 40.0746 310.112 41.08C309.418 42.0853 308.638 42.9173 307.772 43.576C306.905 44.2346 305.969 44.564 304.964 44.564C304.27 44.564 303.542 44.3213 302.78 43.836C302.052 43.3506 301.688 42.4493 301.688 41.132C301.688 40.7506 301.722 40.352 301.792 39.936C301.861 39.4853 301.982 39 302.156 38.48C302.433 37.7866 302.762 37.0413 303.144 36.244C303.525 35.4466 304.149 34.3546 305.016 32.968C305.258 32.5866 305.397 32.292 305.432 32.084C305.501 31.876 305.536 31.7026 305.536 31.564C305.536 31.148 305.345 30.94 304.964 30.94C304.652 30.94 304.184 31.1133 303.56 31.46C302.97 31.8066 302.225 32.4133 301.324 33.28C300.457 34.112 299.417 35.2906 298.204 36.816C297.025 38.3413 295.656 40.5946 294.096 43.576C293.853 44.0266 293.576 44.2693 293.264 44.304C292.986 44.3386 292.588 44.3733 292.068 44.408C291.721 44.4426 291.392 44.46 291.08 44.46C290.768 44.4946 290.508 44.5986 290.3 44.772Z", fill: "#0A2717" }) }) : /* @__PURE__ */ a.jsx("svg", { width: "314", height: "61", viewBox: "0 0 314 61", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e, children: /* @__PURE__ */ a.jsx("path", { d: "M16.172 49.92C13.0173 49.92 10.2093 49.2786 7.74801 47.996C5.32134 46.748 3.41467 44.8933 2.02801 42.432C0.676005 39.936 5.00679e-06 36.8853 5.00679e-06 33.28C5.00679e-06 31.1306 0.277338 28.9813 0.832005 26.832C1.38667 24.6826 2.13201 22.62 3.06801 20.644C4.03867 18.668 5.11334 16.848 6.29201 15.184C5.77201 13.104 5.51201 10.8506 5.51201 8.42395C5.51201 6.58662 5.72001 4.83596 6.13601 3.17195C6.27467 2.68662 6.51734 2.44395 6.864 2.44395C7.14134 2.44395 7.26267 2.61729 7.22801 2.96395C7.12401 3.65729 7.03734 4.40262 6.96801 5.19996C6.89867 5.96262 6.864 6.88129 6.864 7.95595C6.864 9.96662 7.05467 11.8733 7.43601 13.676C7.78267 13.2253 8.12934 12.8093 8.47601 12.428C9.89734 10.868 11.5787 9.41196 13.52 8.05996C15.4613 6.67329 17.6107 5.56396 19.968 4.73196C22.36 3.89996 24.8907 3.48396 27.56 3.48396C30.056 3.48396 32.344 3.95196 34.424 4.88795C36.504 5.78929 38.168 7.10662 39.416 8.83996C40.6987 10.5386 41.34 12.6013 41.34 15.028C41.34 16.5533 40.924 18.1133 40.092 19.708C39.2947 21.3026 38.1333 22.776 36.608 24.128C35.1173 25.4453 33.2973 26.52 31.148 27.352C29.0333 28.184 26.6587 28.6 24.024 28.6C20.5573 28.6 17.3853 27.8373 14.508 26.312C11.6307 24.7866 9.39467 22.464 7.80001 19.344C6.41334 21.8053 5.39067 24.3013 4.73201 26.832C4.07334 29.3626 3.744 31.772 3.744 34.06C3.744 37.388 4.29867 40.092 5.40801 42.172C6.51734 44.252 8.04267 45.7773 9.98401 46.748C11.96 47.7533 14.2133 48.256 16.744 48.256C21.2507 48.256 25.2027 47.112 28.6 44.824C32.032 42.5706 34.8573 39.0693 37.076 34.32C37.492 34.32 37.7 34.476 37.7 34.788C35.5507 39.9186 32.604 43.7146 28.86 46.176C25.1507 48.672 20.9213 49.92 16.172 49.92ZM10.036 15.86C9.58534 16.484 9.15201 17.1253 8.73601 17.784C9.94934 20.6266 11.804 22.9146 14.3 24.648C16.796 26.3813 19.9333 27.248 23.712 27.248C26.104 27.248 28.236 26.884 30.108 26.156C32.0147 25.428 33.6093 24.4573 34.892 23.244C36.2093 22.0306 37.2147 20.696 37.908 19.24C38.6013 17.7493 38.948 16.2586 38.948 14.768C38.948 12.9306 38.4453 11.3186 37.44 9.93195C36.4693 8.54529 35.1347 7.47062 33.436 6.70796C31.7373 5.91062 29.8133 5.51196 27.664 5.51196C25.5147 5.51196 23.348 5.96262 21.164 6.86396C19.0147 7.76529 16.9693 8.99595 15.028 10.556C13.1213 12.116 11.4573 13.884 10.036 15.86ZM36.0368 44.772C37.4928 41.7906 39.0008 38.6706 40.5608 35.412C42.1555 32.1186 43.7848 28.808 45.4488 25.48C47.1128 22.152 48.7595 18.98 50.3888 15.964C50.9782 14.924 51.5155 14.1093 52.0008 13.52C52.5208 12.9306 53.1968 12.636 54.0288 12.636C54.3408 12.636 54.7048 12.688 55.1208 12.792C55.5368 12.896 55.9355 12.9133 56.3168 12.844C55.8662 13.3293 55.2422 14.1786 54.4448 15.392C53.6822 16.6053 52.8155 18.0613 51.8448 19.76C50.9088 21.4586 49.9035 23.296 48.8288 25.272C47.7888 27.2133 46.7488 29.1893 45.7088 31.2C44.7035 33.176 43.7675 35.0306 42.9008 36.764C43.5942 35.8626 44.3048 35.0133 45.0328 34.216C45.7608 33.4186 46.4715 32.7253 47.1648 32.136C47.9275 31.4426 48.8808 30.7146 50.0248 29.952C51.2035 29.1893 52.3648 28.5306 53.5088 27.976C54.6875 27.4213 55.6235 27.144 56.3168 27.144C56.5595 27.144 56.7328 27.1613 56.8368 27.196C56.8368 27.196 56.6462 27.5426 56.2648 28.236C55.8835 28.9293 55.3982 29.8133 54.8088 30.888C54.2542 31.9626 53.6648 33.124 53.0408 34.372C52.4515 35.62 51.9315 36.816 51.4808 37.96C51.0302 39.0693 50.7355 39.988 50.5968 40.716C50.4928 41.2706 50.4408 41.7386 50.4408 42.12C50.4408 42.6746 50.5448 43.056 50.7528 43.264C50.9608 43.4373 51.1862 43.524 51.4288 43.524C52.0182 43.524 52.6422 43.2293 53.3008 42.64C53.9942 42.016 54.6702 41.236 55.3288 40.3C55.9875 39.364 56.5942 38.376 57.1488 37.336C57.7382 36.2613 58.2062 35.256 58.5528 34.32C58.9688 34.32 59.1768 34.476 59.1768 34.788C58.7955 35.724 58.3102 36.764 57.7208 37.908C57.1662 39.0173 56.5248 40.0746 55.7968 41.08C55.0688 42.0853 54.2715 42.9173 53.4048 43.576C52.5382 44.2346 51.6195 44.564 50.6488 44.564C49.9555 44.564 49.2448 44.3213 48.5168 43.836C47.7888 43.3506 47.4248 42.4666 47.4248 41.184C47.4248 40.8026 47.4595 40.404 47.5288 39.988C47.5982 39.5373 47.7195 39.0346 47.8928 38.48C48.1008 37.7866 48.4475 37.024 48.9328 36.192C49.4182 35.3253 50.0422 34.2506 50.8048 32.968C51.1515 32.3786 51.3248 31.9106 51.3248 31.564C51.3248 31.148 51.1168 30.94 50.7008 30.94C50.3542 30.94 49.8862 31.1133 49.2968 31.46C48.7075 31.8066 47.9622 32.4133 47.0608 33.28C46.1942 34.112 45.1195 35.3253 43.8368 36.92C42.5542 38.5146 41.1848 40.7506 39.7288 43.628C39.4862 44.0786 39.2088 44.3213 38.8968 44.356C38.6195 44.356 38.2382 44.3733 37.7528 44.408C37.4408 44.4426 37.1288 44.46 36.8168 44.46C36.5048 44.4946 36.2448 44.5986 36.0368 44.772ZM62.2936 44.564C61.0109 44.564 59.8496 44.148 58.8096 43.316C57.8042 42.484 57.3016 41.2186 57.3016 39.52C57.3016 38.0986 57.6136 36.5906 58.2376 34.996C58.8962 33.4013 59.7456 31.9106 60.7856 30.524C61.8602 29.1026 63.0389 27.9586 64.3216 27.092C65.6389 26.1906 66.9562 25.74 68.2736 25.74C68.9322 25.74 69.5736 25.9306 70.1976 26.312C70.8216 26.6933 71.1336 27.352 71.1336 28.288C71.1336 29.1546 70.8042 30.108 70.1456 31.148C69.4869 32.188 68.5509 33.1586 67.3376 34.06C66.8176 34.4413 66.1589 34.8053 65.3616 35.152C64.5642 35.4986 63.7669 35.7933 62.9696 36.036C62.1722 36.244 61.5136 36.348 60.9936 36.348C60.8202 36.764 60.6469 37.3186 60.4736 38.012C60.3349 38.7053 60.2656 39.416 60.2656 40.144C60.2656 41.0106 60.4389 41.7906 60.7856 42.484C61.1322 43.1773 61.7736 43.524 62.7096 43.524C63.8536 43.524 64.9109 43.1946 65.8816 42.536C66.8869 41.8773 67.7709 41.0453 68.5336 40.04C69.3309 39.0346 70.0069 38.012 70.5616 36.972C71.1162 35.932 71.5496 35.048 71.8616 34.32C72.2776 34.32 72.4856 34.476 72.4856 34.788C72.0349 35.7586 71.5149 36.816 70.9256 37.96C70.3709 39.104 69.6949 40.1786 68.8976 41.184C68.1349 42.1546 67.1989 42.9693 66.0896 43.628C65.0149 44.252 63.7496 44.564 62.2936 44.564ZM61.3576 35.412C61.8429 35.412 62.6576 35.2386 63.8016 34.892C64.9456 34.5106 65.9856 33.9213 66.9216 33.124C67.8229 32.3266 68.5162 31.46 69.0016 30.524C69.4869 29.5533 69.7296 28.7386 69.7296 28.08C69.7296 27.3173 69.4522 26.936 68.8976 26.936C68.4816 26.936 67.9096 27.2133 67.1816 27.768C66.4536 28.3226 65.5522 29.2586 64.4776 30.576C63.8189 31.408 63.1949 32.3093 62.6056 33.28C62.0162 34.2506 61.6002 34.9613 61.3576 35.412ZM73.5703 44.72C72.4956 44.72 71.7503 44.4426 71.3343 43.888C70.9183 43.3333 70.7103 42.6226 70.7103 41.756C70.7103 40.8546 70.8663 39.832 71.1783 38.688C71.4903 37.544 71.9063 36.2613 72.4263 34.84C72.0449 34.84 71.8543 34.6666 71.8543 34.32C72.1316 33.6266 72.4263 32.8466 72.7383 31.98C73.0849 31.0786 73.2583 30.0733 73.2583 28.964C73.2583 28.4093 73.1889 27.9413 73.0503 27.56C72.9116 27.1786 72.7036 26.9533 72.4263 26.884C72.4263 26.884 72.5996 26.8493 72.9463 26.78C73.3276 26.7106 73.7263 26.6413 74.1423 26.572C74.5583 26.5026 74.8356 26.468 74.9743 26.468C75.1823 26.4333 75.3729 26.416 75.5463 26.416C75.7196 26.3813 75.8756 26.364 76.0143 26.364C76.3609 26.364 76.5863 26.5026 76.6903 26.78C76.8289 27.0573 76.8809 27.664 76.8463 28.6C76.8116 29.4666 76.6383 30.524 76.3263 31.772C76.0143 32.9853 75.6849 34.0426 75.3383 34.944C74.8876 36.1226 74.4716 37.3186 74.0903 38.532C73.7089 39.7453 73.5183 40.7506 73.5183 41.548C73.5183 42.2413 73.7089 42.692 74.0903 42.9C74.3676 43.004 74.6103 43.056 74.8183 43.056C75.6156 43.056 76.3956 42.6746 77.1583 41.912C77.9209 41.1493 78.6316 40.2306 79.2903 39.156C79.9836 38.0466 80.5556 36.9893 81.0063 35.984C80.7983 35.1866 80.6943 34.2333 80.6943 33.124C80.6943 31.9453 80.8329 30.7493 81.1103 29.536C81.3876 28.3226 81.8209 27.3173 82.4103 26.52C82.9996 25.688 83.7623 25.272 84.6983 25.272C85.3569 25.272 85.6863 25.5666 85.6863 26.156C85.6863 26.2946 85.5129 26.884 85.1663 27.924C84.8543 28.964 84.4383 30.1946 83.9183 31.616C83.3983 33.0373 82.8436 34.4066 82.2543 35.724C82.1156 36.0013 81.9943 36.2786 81.8903 36.556C82.0289 37.1453 82.2889 37.6306 82.6703 38.012C83.0516 38.3586 83.5196 38.532 84.0743 38.532C84.7676 38.532 85.4089 38.22 85.9983 37.596C86.6223 36.9373 87.2636 35.8453 87.9223 34.32C88.3383 34.32 88.5463 34.476 88.5463 34.788C87.9916 36.1746 87.3156 37.284 86.5183 38.116C85.7556 38.948 84.8889 39.364 83.9183 39.364C82.7396 39.364 81.8903 38.7573 81.3703 37.544C80.7809 38.7573 80.0876 39.9186 79.2903 41.028C78.4929 42.1026 77.6089 42.9866 76.6383 43.68C75.7023 44.3733 74.6796 44.72 73.5703 44.72ZM91.6451 44.564C90.3625 44.564 89.2011 44.148 88.1611 43.316C87.1558 42.484 86.6531 41.2186 86.6531 39.52C86.6531 38.0986 86.9651 36.5906 87.5891 34.996C88.2478 33.4013 89.0971 31.9106 90.1371 30.524C91.2118 29.1026 92.3905 27.9586 93.6731 27.092C94.9905 26.1906 96.3078 25.74 97.6251 25.74C98.2838 25.74 98.9251 25.9306 99.5491 26.312C100.173 26.6933 100.485 27.352 100.485 28.288C100.485 29.1546 100.156 30.108 99.4971 31.148C98.8385 32.188 97.9025 33.1586 96.6891 34.06C96.1691 34.4413 95.5105 34.8053 94.7131 35.152C93.9158 35.4986 93.1185 35.7933 92.3211 36.036C91.5238 36.244 90.8651 36.348 90.3451 36.348C90.1718 36.764 89.9985 37.3186 89.8251 38.012C89.6865 38.7053 89.6171 39.416 89.6171 40.144C89.6171 41.0106 89.7905 41.7906 90.1371 42.484C90.4838 43.1773 91.1251 43.524 92.0611 43.524C93.2051 43.524 94.2625 43.1946 95.2331 42.536C96.2385 41.8773 97.1225 41.0453 97.8851 40.04C98.6825 39.0346 99.3585 38.012 99.9131 36.972C100.468 35.932 100.901 35.048 101.213 34.32C101.629 34.32 101.837 34.476 101.837 34.788C101.386 35.7586 100.866 36.816 100.277 37.96C99.7225 39.104 99.0465 40.1786 98.2491 41.184C97.4865 42.1546 96.5505 42.9693 95.4411 43.628C94.3665 44.252 93.1011 44.564 91.6451 44.564ZM90.7091 35.412C91.1945 35.412 92.0091 35.2386 93.1531 34.892C94.2971 34.5106 95.3371 33.9213 96.2731 33.124C97.1745 32.3266 97.8678 31.46 98.3531 30.524C98.8385 29.5533 99.0811 28.7386 99.0811 28.08C99.0811 27.3173 98.8038 26.936 98.2491 26.936C97.8331 26.936 97.2611 27.2133 96.5331 27.768C95.8051 28.3226 94.9038 29.2586 93.8291 30.576C93.1705 31.408 92.5465 32.3093 91.9571 33.28C91.3678 34.2506 90.9518 34.9613 90.7091 35.412ZM103.65 44.512C102.367 44.512 101.414 44.1306 100.79 43.368C100.2 42.5706 99.9058 41.6346 99.9058 40.56C99.9058 39.4506 100.062 38.3066 100.374 37.128C100.686 35.9493 100.963 34.9613 101.206 34.164C101.76 32.2226 102.454 30.16 103.286 27.976C104.152 25.7573 105.088 23.5906 106.094 21.476C107.134 19.3266 108.156 17.4026 109.162 15.704C109.959 14.352 110.808 13.3466 111.71 12.688C112.646 11.9946 113.46 11.648 114.154 11.648C114.708 11.648 115.142 11.856 115.454 12.272C115.8 12.6533 115.974 13.2426 115.974 14.04C115.974 14.5946 115.87 15.2533 115.662 16.016C115.488 16.7786 115.176 17.6453 114.726 18.616C113.512 21.32 112.056 24.024 110.358 26.728C108.694 29.432 106.579 31.9626 104.014 34.32C103.598 35.2906 103.251 36.3306 102.974 37.44C102.696 38.5493 102.558 39.4506 102.558 40.144C102.558 42.2933 103.286 43.368 104.742 43.368C105.851 43.368 107.082 42.5706 108.434 40.976C109.786 39.3466 111.068 37.128 112.282 34.32C112.42 34.32 112.559 34.3546 112.698 34.424C112.836 34.4586 112.906 34.58 112.906 34.788C112.524 35.724 112.039 36.764 111.45 37.908C110.895 39.0173 110.236 40.0746 109.474 41.08C108.746 42.0853 107.896 42.9173 106.926 43.576C105.955 44.2 104.863 44.512 103.65 44.512ZM104.43 32.656C105.678 31.3733 106.891 29.9 108.07 28.236C109.248 26.5373 110.34 24.7866 111.346 22.984C112.386 21.1466 113.252 19.4133 113.946 17.784C114.188 17.264 114.379 16.692 114.518 16.068C114.691 15.444 114.778 14.924 114.778 14.508C114.778 14.0226 114.656 13.78 114.414 13.78C114.275 13.78 114.067 13.9186 113.79 14.196C113.512 14.4386 113.148 14.872 112.698 15.496C112.039 16.3626 111.311 17.5413 110.514 19.032C109.751 20.5226 108.971 22.1173 108.174 23.816C107.376 25.5146 106.648 27.1613 105.99 28.756C105.331 30.316 104.811 31.616 104.43 32.656ZM114.72 44.512C113.437 44.512 112.484 44.1306 111.86 43.368C111.271 42.5706 110.976 41.6346 110.976 40.56C110.976 39.4506 111.132 38.3066 111.444 37.128C111.756 35.9493 112.033 34.9613 112.276 34.164C112.831 32.2226 113.524 30.16 114.356 27.976C115.223 25.7573 116.159 23.5906 117.164 21.476C118.204 19.3266 119.227 17.4026 120.232 15.704C121.029 14.352 121.879 13.3466 122.78 12.688C123.716 11.9946 124.531 11.648 125.224 11.648C125.779 11.648 126.212 11.856 126.524 12.272C126.871 12.6533 127.044 13.2426 127.044 14.04C127.044 14.5946 126.94 15.2533 126.732 16.016C126.559 16.7786 126.247 17.6453 125.796 18.616C124.583 21.32 123.127 24.024 121.428 26.728C119.764 29.432 117.649 31.9626 115.084 34.32C114.668 35.2906 114.321 36.3306 114.044 37.44C113.767 38.5493 113.628 39.4506 113.628 40.144C113.628 42.2933 114.356 43.368 115.812 43.368C116.921 43.368 118.152 42.5706 119.504 40.976C120.856 39.3466 122.139 37.128 123.352 34.32C123.491 34.32 123.629 34.3546 123.768 34.424C123.907 34.4586 123.976 34.58 123.976 34.788C123.595 35.724 123.109 36.764 122.52 37.908C121.965 39.0173 121.307 40.0746 120.544 41.08C119.816 42.0853 118.967 42.9173 117.996 43.576C117.025 44.2 115.933 44.512 114.72 44.512ZM115.5 32.656C116.748 31.3733 117.961 29.9 119.14 28.236C120.319 26.5373 121.411 24.7866 122.416 22.984C123.456 21.1466 124.323 19.4133 125.016 17.784C125.259 17.264 125.449 16.692 125.588 16.068C125.761 15.444 125.848 14.924 125.848 14.508C125.848 14.0226 125.727 13.78 125.484 13.78C125.345 13.78 125.137 13.9186 124.86 14.196C124.583 14.4386 124.219 14.872 123.768 15.496C123.109 16.3626 122.381 17.5413 121.584 19.032C120.821 20.5226 120.041 22.1173 119.244 23.816C118.447 25.5146 117.719 27.1613 117.06 28.756C116.401 30.316 115.881 31.616 115.5 32.656ZM116.17 60.944C114.368 60.944 113.085 60.58 112.322 59.852C111.56 59.1586 111.178 58.3266 111.178 57.356C111.178 55.8653 111.733 54.4786 112.842 53.196C113.917 51.948 115.252 50.9426 116.846 50.18C118.649 49.348 120.694 48.672 122.982 48.152C125.305 47.632 127.524 47.06 129.638 46.436C130.297 45.292 130.904 43.992 131.458 42.536C132.013 41.0453 132.516 39.6066 132.966 38.22C133.417 36.7986 133.781 35.6373 134.058 34.736C133.642 35.4986 133.105 36.4346 132.446 37.544C131.822 38.6186 131.112 39.676 130.314 40.716C129.517 41.756 128.65 42.6226 127.714 43.316C126.813 44.0093 125.86 44.356 124.854 44.356C124.473 44.356 124.005 44.2693 123.45 44.096C122.93 43.9226 122.462 43.6106 122.046 43.16C121.665 42.6746 121.474 41.964 121.474 41.028C121.474 40.1266 121.752 39.1386 122.306 38.064C122.861 36.9546 123.416 35.8626 123.97 34.788C123.797 34.788 123.641 34.7706 123.502 34.736C123.398 34.7013 123.346 34.5626 123.346 34.32C123.45 34.112 123.658 33.6613 123.97 32.968C124.282 32.2746 124.629 31.512 125.01 30.68C125.426 29.848 125.79 29.12 126.102 28.496C126.484 27.6986 126.9 27.144 127.35 26.832C127.836 26.52 128.304 26.364 128.754 26.364H131.978C131.736 26.572 131.424 26.8146 131.042 27.092C130.696 27.3346 130.366 27.716 130.054 28.236C129.118 29.8306 128.304 31.3733 127.61 32.864C126.917 34.32 126.172 35.88 125.374 37.544C124.993 38.3413 124.716 39.0693 124.542 39.728C124.369 40.3866 124.282 40.9586 124.282 41.444C124.282 42.588 124.664 43.16 125.426 43.16C126.258 43.16 127.264 42.484 128.442 41.132C129.413 39.988 130.384 38.636 131.354 37.076C132.36 35.4813 133.313 33.852 134.214 32.188C135.15 30.4893 135.965 28.9293 136.658 27.508C137.04 26.7453 137.716 26.364 138.686 26.364H141.546C140.541 27.0573 139.761 27.9586 139.206 29.068C138.686 30.1773 138.097 31.5986 137.438 33.332C136.71 35.2386 136.017 37.2146 135.358 39.26C134.7 41.3053 133.972 43.4026 133.174 45.552C134.873 44.9626 136.294 44.2 137.438 43.264C138.582 42.328 139.588 41.132 140.454 39.676C141.356 38.1853 142.257 36.4 143.158 34.32C143.574 34.32 143.782 34.476 143.782 34.788C143.02 36.3826 142.326 37.7866 141.702 39C141.078 40.2133 140.385 41.288 139.622 42.224C138.86 43.1253 137.906 43.9573 136.762 44.72C135.618 45.5173 134.145 46.28 132.342 47.008C131.51 48.4986 130.557 50.0413 129.482 51.636C128.442 53.2653 127.246 54.7733 125.894 56.16C124.577 57.5813 123.104 58.7253 121.474 59.592C119.88 60.4933 118.112 60.944 116.17 60.944ZM114.922 59.904C116.066 59.904 117.245 59.5573 118.458 58.864C119.672 58.1706 120.85 57.2866 121.994 56.212C123.138 55.172 124.178 54.0973 125.114 52.988C126.085 51.9133 126.865 50.96 127.454 50.128C127.628 49.8853 127.818 49.5733 128.026 49.192C128.234 48.8106 128.442 48.4466 128.65 48.1C126.952 48.5506 125.08 49.036 123.034 49.556C121.024 50.1106 119.273 50.7173 117.782 51.376C116.118 52.0693 114.818 53.0573 113.882 54.34C112.912 55.6226 112.426 56.7666 112.426 57.772C112.426 58.396 112.634 58.8986 113.05 59.28C113.432 59.696 114.056 59.904 114.922 59.904ZM164.22 46.696C161.273 46.696 158.829 46.228 156.888 45.292C154.947 44.3906 153.491 43.1946 152.52 41.704C151.584 40.1786 151.116 38.5666 151.116 36.868C151.116 34.9613 151.688 33.072 152.832 31.2C153.976 29.2933 155.675 27.664 157.928 26.312C160.216 24.9253 163.007 24.0586 166.3 23.712C165.815 23.0533 165.451 22.308 165.208 21.476C164.965 20.6093 164.844 19.7946 164.844 19.032C164.879 17.1946 165.399 15.5826 166.404 14.196C167.409 12.7746 168.692 11.5786 170.252 10.608C171.847 9.63729 173.545 8.90929 175.348 8.42395C177.151 7.90396 178.849 7.64396 180.444 7.64396C181.415 7.64396 182.403 7.78262 183.408 8.05996C184.413 8.30262 185.263 8.75329 185.956 9.41195C186.649 10.0706 186.996 11.0066 186.996 12.22C186.996 13.2253 186.684 14.1266 186.06 14.924C185.436 15.7213 184.673 16.12 183.772 16.12C183.113 16.12 182.541 15.8773 182.056 15.392C181.571 14.9066 181.328 14.352 181.328 13.728C181.328 13 181.553 12.4106 182.004 11.96C182.489 11.4746 183.079 11.232 183.772 11.232C184.084 11.232 184.431 11.336 184.812 11.544C185.228 11.752 185.488 11.96 185.592 12.168C185.627 12.0293 185.644 11.8386 185.644 11.596C185.644 10.66 185.263 10.0013 184.5 9.61995C183.737 9.23862 182.923 9.04796 182.056 9.04796C180.669 9.04796 179.057 9.39462 177.22 10.088C175.383 10.7466 173.597 11.8386 171.864 13.364C171.24 13.9186 170.599 14.6466 169.94 15.548C169.281 16.4493 168.727 17.42 168.276 18.46C167.825 19.4653 167.6 20.488 167.6 21.528C167.6 22.3253 167.739 23.0186 168.016 23.608C168.536 23.608 169.125 23.5906 169.784 23.556C170.477 23.4866 171.188 23.452 171.916 23.452C172.817 23.452 173.528 23.6426 174.048 24.024C174.568 24.4053 174.828 24.8386 174.828 25.324C174.828 25.6706 174.62 26 174.204 26.312C173.788 26.624 173.129 26.78 172.228 26.78C171.084 26.78 170.044 26.5373 169.108 26.052C168.207 25.532 167.496 25.012 166.976 24.492C164.688 24.804 162.747 25.6533 161.152 27.04C159.557 28.4266 158.344 30.0733 157.512 31.98C156.68 33.852 156.264 35.724 156.264 37.596C156.264 39.0866 156.541 40.4733 157.096 41.756C157.685 43.0386 158.569 44.0613 159.748 44.824C160.927 45.6213 162.417 46.02 164.22 46.02C166.092 46.02 167.791 45.6733 169.316 44.98C170.876 44.3213 172.211 43.4546 173.32 42.38C174.429 41.3053 175.279 40.1786 175.868 39C176.492 37.7866 176.804 36.66 176.804 35.62C176.804 34.7186 176.475 33.9733 175.816 33.384C175.192 32.76 174.36 32.3093 173.32 32.032C172.28 31.72 171.171 31.564 169.992 31.564C168.779 31.564 167.565 31.7373 166.352 32.084C165.173 32.396 164.168 32.8986 163.336 33.592C162.504 34.2506 162.001 35.1 161.828 36.14C161.828 36.2093 161.811 36.296 161.776 36.4C161.776 36.4693 161.776 36.5386 161.776 36.608C161.776 37.3706 162.053 38.1333 162.608 38.896C163.197 39.624 164.099 40.3 165.312 40.924C165.624 41.0626 165.78 41.3226 165.78 41.704C165.78 42.0853 165.607 42.1893 165.26 42.016C163.353 41.0106 161.949 39.9186 161.048 38.74C160.181 37.5266 159.748 36.3826 159.748 35.308C159.748 33.748 160.58 32.4133 162.244 31.304C163.943 30.16 166.352 29.588 169.472 29.588H178.676C179.231 29.588 180.045 29.4666 181.12 29.224C182.229 28.9813 183.356 28.6346 184.5 28.184C185.644 27.6986 186.615 27.144 187.412 26.52C188.244 25.8613 188.66 25.116 188.66 24.284C188.66 23.8333 188.504 23.348 188.192 22.828C188.123 22.724 188.088 22.6026 188.088 22.464C188.088 22.256 188.175 22.152 188.348 22.152C188.487 22.152 188.608 22.2386 188.712 22.412C189.232 23.1746 189.492 23.9546 189.492 24.752C189.492 25.688 189.145 26.5546 188.452 27.352C187.793 28.1493 186.892 28.86 185.748 29.484C184.604 30.0733 183.321 30.524 181.9 30.836C180.513 31.148 179.092 31.2866 177.636 31.252C178.295 31.8066 178.78 32.4306 179.092 33.124C179.404 33.8173 179.56 34.5453 179.56 35.308C179.56 36.5906 179.179 37.908 178.416 39.26C177.653 40.5773 176.579 41.808 175.192 42.952C173.805 44.0613 172.176 44.9626 170.304 45.656C168.467 46.3493 166.439 46.696 164.22 46.696ZM172.228 25.896C173.372 25.896 173.944 25.6706 173.944 25.22C173.944 25.0466 173.788 24.8733 173.476 24.7C173.199 24.492 172.817 24.3706 172.332 24.336C172.124 24.3013 171.777 24.284 171.292 24.284C170.807 24.284 170.287 24.284 169.732 24.284C169.212 24.284 168.779 24.284 168.432 24.284C169.299 25.3586 170.564 25.896 172.228 25.896ZM255.129 53.976C252.702 53.976 250.345 53.2133 248.057 51.688C245.804 50.1973 243.88 47.7013 242.285 44.2C241.592 42.64 241.02 41.0626 240.569 39.468C240.153 37.8733 239.841 36.3826 239.633 34.996C239.425 33.6093 239.321 32.4653 239.321 31.564C239.321 30.4546 239.442 29.8306 239.685 29.692C240.344 29.7613 241.436 29.484 242.961 28.86C244.521 28.236 246.358 27.3173 248.473 26.104C250.622 24.8906 252.928 23.4346 255.389 21.736C257.885 20.0026 260.381 18.0613 262.877 15.912C265.408 13.7626 267.834 11.44 270.157 8.94395C272.48 6.44796 274.525 3.83062 276.293 1.09196C276.536 0.710622 276.726 0.433288 276.865 0.259954C277.004 0.0866213 277.142 -4.52995e-05 277.281 -4.52995e-05C277.454 -4.52995e-05 277.61 0.0866213 277.749 0.259954C277.888 0.398621 277.957 0.554621 277.957 0.727955C277.957 1.00529 277.836 1.33462 277.593 1.71595C275.929 4.48929 273.953 7.21062 271.665 9.87995C269.412 12.5146 267.002 14.9933 264.437 17.316C261.872 19.6386 259.289 21.736 256.689 23.608C254.089 25.48 251.61 27.04 249.253 28.288C246.896 29.536 244.816 30.3853 243.013 30.836C242.909 30.7666 242.857 30.94 242.857 31.356C242.857 31.9453 242.978 32.8986 243.221 34.216C243.464 35.4986 243.828 36.972 244.313 38.636C244.833 40.2653 245.457 41.9293 246.185 43.628C247.502 46.7133 249.045 48.828 250.813 49.972C252.616 51.1506 254.47 51.74 256.377 51.74C257.59 51.74 258.838 51.4973 260.121 51.012C261.404 50.5266 262.582 49.8506 263.657 48.984C264.732 48.152 265.564 47.164 266.153 46.02C266.361 45.6733 266.517 45.5 266.621 45.5C266.864 45.5 266.985 45.6386 266.985 45.916C266.985 46.02 266.95 46.124 266.881 46.228C266.846 46.3666 266.742 46.6266 266.569 47.008C266.084 47.9786 265.269 49.0013 264.125 50.076C263.016 51.1853 261.681 52.104 260.121 52.832C258.596 53.5946 256.932 53.976 255.129 53.976ZM210.981 53.3C208.624 53.3 206.336 52.9706 204.117 52.312C201.933 51.688 199.957 50.752 198.189 49.504C196.456 48.256 195.069 46.7306 194.029 44.928C193.024 43.1253 192.521 41.08 192.521 38.792C192.521 37.128 192.764 35.6546 193.249 34.372C193.769 33.0546 194.393 31.9626 195.121 31.096C195.884 30.2293 196.629 29.5706 197.357 29.12C198.12 28.6693 198.744 28.444 199.229 28.444C199.576 28.444 199.749 28.548 199.749 28.756C199.749 28.9293 199.662 29.068 199.489 29.172C198.692 29.588 197.877 30.1946 197.045 30.992C196.213 31.7893 195.52 32.8293 194.965 34.112C194.41 35.3946 194.133 36.9893 194.133 38.896C194.133 40.976 194.566 42.7613 195.433 44.252C196.334 45.708 197.496 46.904 198.917 47.84C200.373 48.776 201.933 49.452 203.597 49.868C205.261 50.3186 206.856 50.544 208.381 50.544C211.778 50.544 214.95 49.8853 217.897 48.568C220.844 47.2506 223.53 45.5 225.957 43.316C228.418 41.0973 230.585 38.636 232.457 35.932C234.329 33.228 235.872 30.4893 237.085 27.716C237.536 26.7106 238.073 25.5146 238.697 24.128C239.321 22.7066 239.997 21.1986 240.725 19.604C241.453 18.0093 242.164 16.4493 242.857 14.924C243.55 13.3986 244.174 12.0293 244.729 10.816C245.318 9.56795 245.786 8.61462 246.133 7.95595C243.81 8.23329 241.297 8.49329 238.593 8.73595C235.924 8.94396 233.376 9.39462 230.949 10.088C228.245 10.8506 226.026 11.96 224.293 13.416C222.594 14.872 221.329 16.4493 220.497 18.148C219.7 19.8466 219.301 21.4413 219.301 22.932C219.301 24.7346 219.752 26.2253 220.653 27.404C221.554 28.548 222.854 29.12 224.553 29.12C225.836 29.12 226.98 28.756 227.985 28.028C228.99 27.2653 229.788 26.2946 230.377 25.116C230.966 23.9026 231.261 22.62 231.261 21.268C231.261 20.7133 231.209 20.2453 231.105 19.864C231.001 19.4826 230.949 19.188 230.949 18.98C230.949 18.7373 231.036 18.616 231.209 18.616C231.452 18.616 231.677 18.824 231.885 19.24C232.232 20.0373 232.405 20.8173 232.405 21.58C232.405 23.2093 232.006 24.6826 231.209 26C230.412 27.2826 229.389 28.3053 228.141 29.068C226.893 29.8306 225.576 30.212 224.189 30.212C222.56 30.212 221.138 29.8306 219.925 29.068C218.746 28.2706 217.828 27.2306 217.169 25.948C216.51 24.6653 216.181 23.2786 216.181 21.788C216.181 20.0893 216.649 18.3733 217.585 16.64C218.521 14.872 220.029 13.2773 222.109 11.856C224.189 10.4 226.928 9.29062 230.325 8.52796C233.168 7.90396 236.062 7.50529 239.009 7.33196C241.956 7.12395 244.556 6.91595 246.809 6.70796C248.022 4.83595 249.01 3.65729 249.773 3.17195C250.536 2.65195 251.229 2.39195 251.853 2.39195C252.477 2.39195 252.962 2.56529 253.309 2.91195C253.69 3.25862 253.881 3.67462 253.881 4.15995C253.881 4.85329 253.396 5.59862 252.425 6.39596C251.489 7.15862 249.894 7.66129 247.641 7.90396C246.532 9.94929 245.509 12.2373 244.573 14.768C243.637 17.264 242.701 19.8813 241.765 22.62C240.829 25.3586 239.806 28.08 238.697 30.784C236.825 35.2906 234.606 39.2426 232.041 42.64C229.476 46.0026 226.46 48.62 222.993 50.492C219.526 52.364 215.522 53.3 210.981 53.3ZM248.629 6.60396C249.496 6.53462 250.328 6.29196 251.125 5.87596C251.922 5.42529 252.321 4.93996 252.321 4.41996C252.321 4.07329 252.148 3.89995 251.801 3.89995C251.489 3.89995 251.056 4.10795 250.501 4.52396C249.946 4.90529 249.322 5.59862 248.629 6.60396ZM260.544 44.564C259.261 44.564 258.1 44.148 257.06 43.316C256.054 42.484 255.552 41.2186 255.552 39.52C255.552 38.0986 255.864 36.5906 256.488 34.996C257.146 33.4013 257.996 31.9106 259.036 30.524C260.11 29.1026 261.289 27.9586 262.572 27.092C263.889 26.1906 265.206 25.74 266.524 25.74C267.182 25.74 267.824 25.9306 268.448 26.312C269.072 26.6933 269.384 27.352 269.384 28.288C269.384 29.1546 269.054 30.108 268.396 31.148C267.737 32.188 266.801 33.1586 265.588 34.06C265.068 34.4413 264.409 34.8053 263.612 35.152C262.814 35.4986 262.017 35.7933 261.22 36.036C260.422 36.244 259.764 36.348 259.244 36.348C259.07 36.764 258.897 37.3186 258.724 38.012C258.585 38.7053 258.516 39.416 258.516 40.144C258.516 41.0106 258.689 41.7906 259.036 42.484C259.382 43.1773 260.024 43.524 260.96 43.524C262.104 43.524 263.161 43.1946 264.132 42.536C265.137 41.8773 266.021 41.0453 266.784 40.04C267.581 39.0346 268.257 38.012 268.812 36.972C269.366 35.932 269.8 35.048 270.112 34.32C270.528 34.32 270.736 34.476 270.736 34.788C270.285 35.7586 269.765 36.816 269.176 37.96C268.621 39.104 267.945 40.1786 267.148 41.184C266.385 42.1546 265.449 42.9693 264.34 43.628C263.265 44.252 262 44.564 260.544 44.564ZM259.608 35.412C260.093 35.412 260.908 35.2386 262.052 34.892C263.196 34.5106 264.236 33.9213 265.172 33.124C266.073 32.3266 266.766 31.46 267.252 30.524C267.737 29.5533 267.98 28.7386 267.98 28.08C267.98 27.3173 267.702 26.936 267.148 26.936C266.732 26.936 266.16 27.2133 265.432 27.768C264.704 28.3226 263.802 29.2586 262.728 30.576C262.069 31.408 261.445 32.3093 260.856 33.28C260.266 34.2506 259.85 34.9613 259.608 35.412ZM271.82 44.72C270.746 44.72 270 44.4426 269.584 43.888C269.168 43.3333 268.96 42.6226 268.96 41.756C268.96 40.8546 269.116 39.832 269.428 38.688C269.74 37.544 270.156 36.2613 270.676 34.84C270.295 34.84 270.104 34.6666 270.104 34.32C270.382 33.6266 270.676 32.8466 270.988 31.98C271.335 31.0786 271.508 30.0733 271.508 28.964C271.508 28.4093 271.439 27.9413 271.3 27.56C271.162 27.1786 270.954 26.9533 270.676 26.884C270.676 26.884 270.85 26.8493 271.196 26.78C271.578 26.7106 271.976 26.6413 272.392 26.572C272.808 26.5026 273.086 26.468 273.224 26.468C273.432 26.4333 273.623 26.416 273.796 26.416C273.97 26.3813 274.126 26.364 274.264 26.364C274.611 26.364 274.836 26.5026 274.94 26.78C275.079 27.0573 275.131 27.664 275.096 28.6C275.062 29.4666 274.888 30.524 274.576 31.772C274.264 32.9853 273.935 34.0426 273.588 34.944C273.138 36.1226 272.722 37.3186 272.34 38.532C271.959 39.7453 271.768 40.7506 271.768 41.548C271.768 42.2413 271.959 42.692 272.34 42.9C272.618 43.004 272.86 43.056 273.068 43.056C273.866 43.056 274.646 42.6746 275.408 41.912C276.171 41.1493 276.882 40.2306 277.54 39.156C278.234 38.0466 278.806 36.9893 279.256 35.984C279.048 35.1866 278.944 34.2333 278.944 33.124C278.944 31.9453 279.083 30.7493 279.36 29.536C279.638 28.3226 280.071 27.3173 280.66 26.52C281.25 25.688 282.012 25.272 282.948 25.272C283.607 25.272 283.936 25.5666 283.936 26.156C283.936 26.2946 283.763 26.884 283.416 27.924C283.104 28.964 282.688 30.1946 282.168 31.616C281.648 33.0373 281.094 34.4066 280.504 35.724C280.366 36.0013 280.244 36.2786 280.14 36.556C280.279 37.1453 280.539 37.6306 280.92 38.012C281.302 38.3586 281.77 38.532 282.324 38.532C283.018 38.532 283.659 38.22 284.248 37.596C284.872 36.9373 285.514 35.8453 286.172 34.32C286.588 34.32 286.796 34.476 286.796 34.788C286.242 36.1746 285.566 37.284 284.768 38.116C284.006 38.948 283.139 39.364 282.168 39.364C280.99 39.364 280.14 38.7573 279.62 37.544C279.031 38.7573 278.338 39.9186 277.54 41.028C276.743 42.1026 275.859 42.9866 274.888 43.68C273.952 44.3733 272.93 44.72 271.82 44.72ZM287.607 44.356C286.324 44.356 285.423 43.992 284.903 43.264C284.383 42.5013 284.123 41.6346 284.123 40.664C284.123 40.144 284.175 39.624 284.279 39.104C284.418 38.5493 284.574 38.0466 284.747 37.596L288.231 28.704C288.335 28.4266 288.387 28.184 288.387 27.976C288.387 27.6293 288.3 27.3346 288.127 27.092C287.954 26.8146 287.832 26.624 287.763 26.52L290.623 26.416C291.143 26.3813 291.507 26.4506 291.715 26.624C291.958 26.7626 292.079 26.936 292.079 27.144C292.079 27.352 291.958 27.7333 291.715 28.288C291.368 29.12 290.9 30.16 290.311 31.408C289.722 32.656 289.132 33.9386 288.543 35.256C287.988 36.5733 287.503 37.804 287.087 38.948C286.706 40.092 286.515 40.976 286.515 41.6C286.515 42.0506 286.619 42.432 286.827 42.744C287.07 43.056 287.468 43.212 288.023 43.212C288.751 43.212 289.462 42.9346 290.155 42.38C290.883 41.7906 291.559 41.0453 292.183 40.144C292.807 39.2426 293.379 38.272 293.899 37.232C294.454 36.192 294.922 35.2213 295.303 34.32C295.719 34.32 295.927 34.476 295.927 34.788C295.58 35.6546 295.13 36.6426 294.575 37.752C294.02 38.8613 293.379 39.9186 292.651 40.924C291.958 41.8946 291.178 42.7093 290.311 43.368C289.479 44.0266 288.578 44.356 287.607 44.356ZM292.235 23.192C291.784 23.192 291.386 23.0186 291.039 22.672C290.727 22.3253 290.571 21.9093 290.571 21.424C290.571 20.8346 290.814 20.3146 291.299 19.864C291.784 19.3786 292.322 19.136 292.911 19.136C293.396 19.136 293.812 19.292 294.159 19.604C294.506 19.916 294.679 20.3146 294.679 20.8C294.679 21.424 294.436 21.9786 293.951 22.464C293.466 22.9493 292.894 23.192 292.235 23.192ZM290.3 44.772C291.548 42.2413 292.744 39.7453 293.888 37.284C295.032 34.788 296.21 32.4133 297.424 30.16C298.117 28.912 298.706 28.0453 299.192 27.56C299.677 27.04 300.318 26.78 301.116 26.78C301.393 26.78 301.688 26.832 302 26.936C302.312 27.0053 302.624 27.04 302.936 27.04C303.144 27.04 303.3 27.0226 303.404 26.988C302.918 27.2653 302.277 27.9586 301.48 29.068C300.717 30.1426 299.937 31.3906 299.14 32.812C298.342 34.2333 297.632 35.568 297.008 36.816C297.666 36.0186 298.36 35.2213 299.088 34.424C299.816 33.6266 300.613 32.864 301.48 32.136C302.312 31.408 303.3 30.6626 304.444 29.9C305.622 29.1026 306.766 28.444 307.876 27.924C308.985 27.404 309.869 27.144 310.528 27.144C310.77 27.144 310.944 27.1613 311.048 27.196C311.048 27.196 310.857 27.5426 310.476 28.236C310.094 28.8946 309.609 29.7786 309.02 30.888C308.465 31.9626 307.893 33.124 307.304 34.372C306.714 35.5853 306.177 36.764 305.692 37.908C305.241 39.0173 304.946 39.9533 304.808 40.716C304.704 41.1666 304.652 41.5826 304.652 41.964C304.652 42.5186 304.756 42.8826 304.964 43.056C305.172 43.2293 305.397 43.316 305.64 43.316C306.298 43.316 306.974 43.0213 307.668 42.432C308.361 41.8426 309.02 41.0973 309.644 40.196C310.302 39.26 310.909 38.272 311.464 37.232C312.018 36.192 312.486 35.2213 312.868 34.32C313.284 34.32 313.492 34.476 313.492 34.788C313.11 35.724 312.625 36.764 312.036 37.908C311.481 39.0173 310.84 40.0746 310.112 41.08C309.418 42.0853 308.638 42.9173 307.772 43.576C306.905 44.2346 305.969 44.564 304.964 44.564C304.27 44.564 303.542 44.3213 302.78 43.836C302.052 43.3506 301.688 42.4493 301.688 41.132C301.688 40.7506 301.722 40.352 301.792 39.936C301.861 39.4853 301.982 39 302.156 38.48C302.433 37.7866 302.762 37.0413 303.144 36.244C303.525 35.4466 304.149 34.3546 305.016 32.968C305.258 32.5866 305.397 32.292 305.432 32.084C305.501 31.876 305.536 31.7026 305.536 31.564C305.536 31.148 305.345 30.94 304.964 30.94C304.652 30.94 304.184 31.1133 303.56 31.46C302.97 31.8066 302.225 32.4133 301.324 33.28C300.457 34.112 299.417 35.2906 298.204 36.816C297.025 38.3413 295.656 40.5946 294.096 43.576C293.853 44.0266 293.576 44.2693 293.264 44.304C292.986 44.3386 292.588 44.3733 292.068 44.408C291.721 44.4426 291.392 44.46 291.08 44.46C290.768 44.4946 290.508 44.5986 290.3 44.772Z", fill: "#FDFDFD" }) });
v2.displayName = "Logo";
const o3 = H(
  ({ children: C, className: r, ...e }, t) => /* @__PURE__ */ a.jsxs("footer", { className: z("bg-burgundy-950 w-full p-10", r), ref: t, ...e, children: [
    /* @__PURE__ */ a.jsx(h2, { href: "/", className: "block w-fit mx-auto mb-5", children: /* @__PURE__ */ a.jsx(v2, { color: "white" }) }),
    /* @__PURE__ */ a.jsx("div", { className: "justify-items-center mt-2", children: /* @__PURE__ */ a.jsx(r3, {}) }),
    /* @__PURE__ */ a.jsx("div", { className: "grid grid-flow-col auto-cols-max md:gap-20 sm:gap-14 gap-6 justify-center text-center mt-16", children: C })
  ] })
);
o3.displayName = "Footer";
const l3 = ({ href: C, children: r, className: e, ...t }) => /* @__PURE__ */ a.jsx("a", { href: C, className: e, target: "_blank", rel: "noopener noreferrer", ...t, children: r }), s3 = H(
  ({ color: C, children: r, className: e, ...t }, s) => C === "teal" ? /* @__PURE__ */ a.jsxs("nav", { className: z("text-teal-950 w-full py-8", e), ref: s, ...t, children: [
    /* @__PURE__ */ a.jsx(h2, { href: "/", className: "block w-fit mx-auto mb-8", children: /* @__PURE__ */ a.jsx(v2, { color: "teal" }) }),
    /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-center md:gap-20 sm:gap-14 gap-6", children: r })
  ] }) : /* @__PURE__ */ a.jsxs("nav", { className: z("text-rose-white w-full py-8", e), ref: s, ...t, children: [
    /* @__PURE__ */ a.jsx(h2, { href: "/", className: "block w-fit mx-auto mb-8", children: /* @__PURE__ */ a.jsx(v2, { color: "white" }) }),
    /* @__PURE__ */ a.jsx("div", { className: "flex items-center justify-center md:gap-20 sm:gap-14 gap-6", children: r })
  ] })
);
s3.displayName = "NavBar";
const n3 = H(
  ({ className: C, title: r, icon: e, children: t }, s) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: z(C, "sm:grid hidden grid-cols-[auto_1px_1fr] gap-4 items-start"), ref: s, children: [
      /* @__PURE__ */ a.jsx("div", { className: "hidden sm:flex justify-center mr-4 self-center", children: e }),
      /* @__PURE__ */ a.jsx("div", { className: "bg-burgundy-950 w-[3px] h-full" }),
      /* @__PURE__ */ a.jsxs("div", { className: "mb-12 mx-4", children: [
        /* @__PURE__ */ a.jsx(g2, { color: "teal", size: "h3", children: r }),
        /* @__PURE__ */ a.jsx(P, { variant: "teal", size: "md", children: t })
      ] })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: z(C, "sm:hidden grid grid-cols-[auto_1fr] items-start"), ref: s, children: [
      /* @__PURE__ */ a.jsxs("div", { className: "relative flex flex-col items-center h-full", children: [
        /* @__PURE__ */ a.jsx(a1, { className: "w-8 h-8  text-burgundy-950 z-10" }),
        /* @__PURE__ */ a.jsx("div", { className: "bg-burgundy-950 w-[4px] flex-1" })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "mb-12 mx-4", children: [
        /* @__PURE__ */ a.jsx(g2, { color: "teal", size: "h3", children: r }),
        /* @__PURE__ */ a.jsx(P, { variant: "teal", size: "md", children: t })
      ] })
    ] })
  ] })
);
n3.displayName = "Timeline";
export {
  X1 as BASE_BUTTON_STYLES,
  t2 as BUTTON_STYLES,
  C1 as Button,
  C3 as Card,
  t3 as Countdown,
  r3 as DateLogo,
  o3 as Footer,
  g2 as Heading,
  l3 as LinkExternal,
  h2 as LinkInternal,
  v2 as Logo,
  s3 as NavBar,
  n3 as Timeline,
  P as Typography,
  Q1 as buttonStyles,
  K1 as headingStyles,
  e3 as typographyStyles
};
