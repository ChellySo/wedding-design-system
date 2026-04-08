import e3, { forwardRef as t2, useState as r3, useEffect as t3 } from "react";
var f2 = { exports: {} }, s2 = {};
var T2;
function o3() {
  if (T2) return s2;
  T2 = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(t, s, a) {
    var l = null;
    if (a !== void 0 && (l = "" + a), s.key !== void 0 && (l = "" + s.key), "key" in s) {
      a = {};
      for (var f in s)
        f !== "key" && (a[f] = s[f]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: t,
      key: l,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return s2.Fragment = o, s2.jsx = r, s2.jsxs = r, s2;
}
var a2 = {};
var E2;
function n3() {
  return E2 || (E2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === C2 ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case R:
          return "Fragment";
        case Q:
          return "Profiler";
        case Z:
          return "StrictMode";
        case G:
          return "Suspense";
        case q:
          return "SuspenseList";
        case i2:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case M:
            return "Portal";
          case W:
            return n.displayName || "Context";
          case H:
            return (n._context.displayName || "Context") + ".Consumer";
          case D:
            var p = n.render;
            return n = n.displayName, n || (n = p.displayName || p.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case c:
            return p = n.displayName || null, p !== null ? p : e(n.type) || "Memo";
          case z:
            p = n._payload, n = n._init;
            try {
              return e(n(p));
            } catch {
            }
        }
      return null;
    }
    function o(n) {
      return "" + n;
    }
    function r(n) {
      try {
        o(n);
        var p = !1;
      } catch {
        p = !0;
      }
      if (p) {
        p = console;
        var v = p.error, w = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return v.call(
          p,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          w
        ), o(n);
      }
    }
    function t(n) {
      if (n === R) return "<>";
      if (typeof n == "object" && n !== null && n.$$typeof === z)
        return "<...>";
      try {
        var p = e(n);
        return p ? "<" + p + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var n = Y.A;
      return n === null ? null : n.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function l(n) {
      if (o2.call(n, "key")) {
        var p = Object.getOwnPropertyDescriptor(n, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function f(n, p) {
      function v() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: v,
        configurable: !0
      });
    }
    function m() {
      var n = e(this.type);
      return L[n] || (L[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function b(n, p, v, w, T, E) {
      var y = v.ref;
      return n = {
        $$typeof: A,
        type: n,
        key: p,
        props: v,
        _owner: w
      }, (y !== void 0 ? y : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(n, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(n, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function h(n, p, v, w, T, E) {
      var y = p.children;
      if (y !== void 0)
        if (w)
          if (n2(y)) {
            for (w = 0; w < y.length; w++)
              x(y[w]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else x(y);
      if (o2.call(p, "key")) {
        y = e(n);
        var V = Object.keys(p).filter(function(c2) {
          return c2 !== "key";
        });
        w = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", d[y + w] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          w,
          y,
          V,
          y
        ), d[y + w] = !0);
      }
      if (y = null, v !== void 0 && (r(v), y = "" + v), l(p) && (r(p.key), y = "" + p.key), "key" in p) {
        v = {};
        for (var j in p)
          j !== "key" && (v[j] = p[j]);
      } else v = p;
      return y && f(
        v,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), b(
        n,
        y,
        v,
        s(),
        T,
        E
      );
    }
    function x(n) {
      k(n) ? n._store && (n._store.validated = 1) : typeof n == "object" && n !== null && n.$$typeof === z && (n._payload.status === "fulfilled" ? k(n._payload.value) && n._payload.value._store && (n._payload.value._store.validated = 1) : n._store && (n._store.validated = 1));
    }
    function k(n) {
      return typeof n == "object" && n !== null && n.$$typeof === A;
    }
    var S = e3, A = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), Z = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), H = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), D = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), q = /* @__PURE__ */ Symbol.for("react.suspense_list"), c = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), i2 = /* @__PURE__ */ Symbol.for("react.activity"), C2 = /* @__PURE__ */ Symbol.for("react.client.reference"), Y = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, o2 = Object.prototype.hasOwnProperty, n2 = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(n) {
        return n();
      }
    };
    var N, L = {}, K = S.react_stack_bottom_frame.bind(
      S,
      a
    )(), e2 = I(t(a)), d = {};
    a2.Fragment = R, a2.jsx = function(n, p, v) {
      var w = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return h(
        n,
        p,
        v,
        !1,
        w ? Error("react-stack-top-frame") : K,
        w ? I(t(n)) : e2
      );
    }, a2.jsxs = function(n, p, v) {
      var w = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return h(
        n,
        p,
        v,
        !0,
        w ? Error("react-stack-top-frame") : K,
        w ? I(t(n)) : e2
      );
    };
  })()), a2;
}
var _2;
function s3() {
  return _2 || (_2 = 1, process.env.NODE_ENV === "production" ? f2.exports = o3() : f2.exports = n3()), f2.exports;
}
var u = s3();
function Z2(e) {
  var o, r, t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (o = 0; o < s; o++) e[o] && (r = Z2(e[o])) && (t && (t += " "), t += r);
  } else for (r in e) e[r] && (t && (t += " "), t += r);
  return t;
}
function G2() {
  for (var e, o, r = 0, t = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (o = Z2(e)) && (t && (t += " "), t += o);
  return t;
}
const M2 = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, z2 = G2, k2 = (e, o) => (r) => {
  var t;
  if (o?.variants == null) return z2(e, r?.class, r?.className);
  const { variants: s, defaultVariants: a } = o, l = Object.keys(s).map((b) => {
    const h = r?.[b], x = a?.[b];
    if (h === null) return null;
    const k = M2(h) || M2(x);
    return s[b][k];
  }), f = r && Object.entries(r).reduce((b, h) => {
    let [x, k] = h;
    return k === void 0 || (b[x] = k), b;
  }, {}), m = o == null || (t = o.compoundVariants) === null || t === void 0 ? void 0 : t.reduce((b, h) => {
    let { class: x, className: k, ...S } = h;
    return Object.entries(S).every((A) => {
      let [M, R] = A;
      return Array.isArray(R) ? R.includes({
        ...a,
        ...f
      }[M]) : {
        ...a,
        ...f
      }[M] === R;
    }) ? [
      ...b,
      x,
      k
    ] : b;
  }, []);
  return z2(e, l, m, r?.class, r?.className);
}, a3 = (e, o) => {
  const r = new Array(e.length + o.length);
  for (let t = 0; t < e.length; t++)
    r[t] = e[t];
  for (let t = 0; t < o.length; t++)
    r[e.length + t] = o[t];
  return r;
}, l3 = (e, o) => ({
  classGroupId: e,
  validator: o
}), V2 = (e = /* @__PURE__ */ new Map(), o = null, r) => ({
  nextPart: e,
  validators: o,
  classGroupId: r
}), g2 = "-", S2 = [], i3 = "arbitrary..", C3 = (e) => {
  const o = d3(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: t
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return c3(l);
      const f = l.split(g2), m = f[0] === "" && f.length > 1 ? 1 : 0;
      return F2(f, m, o);
    },
    getConflictingClassGroupIds: (l, f) => {
      if (f) {
        const m = t[l], b = r[l];
        return m ? b ? a3(b, m) : m : b || S2;
      }
      return r[l] || S2;
    }
  };
}, F2 = (e, o, r) => {
  if (e.length - o === 0)
    return r.classGroupId;
  const s = e[o], a = r.nextPart.get(s);
  if (a) {
    const b = F2(e, o + 1, a);
    if (b) return b;
  }
  const l = r.validators;
  if (l === null)
    return;
  const f = o === 0 ? e.join(g2) : e.slice(o).join(g2), m = l.length;
  for (let b = 0; b < m; b++) {
    const h = l[b];
    if (h.validator(f))
      return h.classGroupId;
  }
}, c3 = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const o = e.slice(1, -1), r = o.indexOf(":"), t = o.slice(0, r);
  return t ? i3 + t : void 0;
})(), d3 = (e) => {
  const {
    theme: o,
    classGroups: r
  } = e;
  return u3(r, o);
}, u3 = (e, o) => {
  const r = V2();
  for (const t in e) {
    const s = e[t];
    j2(s, r, t, o);
  }
  return r;
}, j2 = (e, o, r, t) => {
  const s = e.length;
  for (let a = 0; a < s; a++) {
    const l = e[a];
    m3(l, o, r, t);
  }
}, m3 = (e, o, r, t) => {
  if (typeof e == "string") {
    f3(e, o, r);
    return;
  }
  if (typeof e == "function") {
    b3(e, o, r, t);
    return;
  }
  p3(e, o, r, t);
}, f3 = (e, o, r) => {
  const t = e === "" ? o : W2(o, e);
  t.classGroupId = r;
}, b3 = (e, o, r, t) => {
  if (g3(e)) {
    j2(e(t), o, r, t);
    return;
  }
  o.validators === null && (o.validators = []), o.validators.push(l3(r, e));
}, p3 = (e, o, r, t) => {
  const s = Object.entries(e), a = s.length;
  for (let l = 0; l < a; l++) {
    const [f, m] = s[l];
    j2(m, W2(o, f), r, t);
  }
}, W2 = (e, o) => {
  let r = e;
  const t = o.split(g2), s = t.length;
  for (let a = 0; a < s; a++) {
    const l = t[a];
    let f = r.nextPart.get(l);
    f || (f = V2(), r.nextPart.set(l, f)), r = f;
  }
  return r;
}, g3 = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, h3 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let o = 0, r = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  const s = (a, l) => {
    r[a] = l, o++, o > e && (o = 0, t = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(a) {
      let l = r[a];
      if (l !== void 0)
        return l;
      if ((l = t[a]) !== void 0)
        return s(a, l), l;
    },
    set(a, l) {
      a in r ? r[a] = l : s(a, l);
    }
  };
}, v2 = "!", A2 = ":", x3 = [], N2 = (e, o, r, t, s) => ({
  modifiers: e,
  hasImportantModifier: o,
  baseClassName: r,
  maybePostfixModifierPosition: t,
  isExternal: s
}), v3 = (e) => {
  const {
    prefix: o,
    experimentalParseClassName: r
  } = e;
  let t = (s) => {
    const a = [];
    let l = 0, f = 0, m = 0, b;
    const h = s.length;
    for (let M = 0; M < h; M++) {
      const R = s[M];
      if (l === 0 && f === 0) {
        if (R === A2) {
          a.push(s.slice(m, M)), m = M + 1;
          continue;
        }
        if (R === "/") {
          b = M;
          continue;
        }
      }
      R === "[" ? l++ : R === "]" ? l-- : R === "(" ? f++ : R === ")" && f--;
    }
    const x = a.length === 0 ? s : s.slice(m);
    let k = x, S = !1;
    x.endsWith(v2) ? (k = x.slice(0, -1), S = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      x.startsWith(v2) && (k = x.slice(1), S = !0)
    );
    const A = b && b > m ? b - m : void 0;
    return N2(a, S, k, A);
  };
  if (o) {
    const s = o + A2, a = t;
    t = (l) => l.startsWith(s) ? a(l.slice(s.length)) : N2(x3, !1, l, void 0, !0);
  }
  if (r) {
    const s = t;
    t = (a) => r({
      className: a,
      parseClassName: s
    });
  }
  return t;
}, y3 = (e) => {
  const o = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, t) => {
    o.set(r, 1e6 + t);
  }), (r) => {
    const t = [];
    let s = [];
    for (let a = 0; a < r.length; a++) {
      const l = r[a], f = l[0] === "[", m = o.has(l);
      f || m ? (s.length > 0 && (s.sort(), t.push(...s), s = []), t.push(l)) : s.push(l);
    }
    return s.length > 0 && (s.sort(), t.push(...s)), t;
  };
}, w3 = (e) => ({
  cache: h3(e.cacheSize),
  parseClassName: v3(e),
  sortModifiers: y3(e),
  ...C3(e)
}), k3 = /\s+/, j3 = (e, o) => {
  const {
    parseClassName: r,
    getClassGroupId: t,
    getConflictingClassGroupIds: s,
    sortModifiers: a
  } = o, l = [], f = e.trim().split(k3);
  let m = "";
  for (let b = f.length - 1; b >= 0; b -= 1) {
    const h = f[b], {
      isExternal: x,
      modifiers: k,
      hasImportantModifier: S,
      baseClassName: A,
      maybePostfixModifierPosition: M
    } = r(h);
    if (x) {
      m = h + (m.length > 0 ? " " + m : m);
      continue;
    }
    let R = !!M, Z = t(R ? A.substring(0, M) : A);
    if (!Z) {
      if (!R) {
        m = h + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (Z = t(A), !Z) {
        m = h + (m.length > 0 ? " " + m : m);
        continue;
      }
      R = !1;
    }
    const Q = k.length === 0 ? "" : k.length === 1 ? k[0] : a(k).join(":"), H = S ? Q + v2 : Q, W = H + Z;
    if (l.indexOf(W) > -1)
      continue;
    l.push(W);
    const D = s(Z, R);
    for (let G = 0; G < D.length; ++G) {
      const q = D[G];
      l.push(H + q);
    }
    m = h + (m.length > 0 ? " " + m : m);
  }
  return m;
}, R3 = (...e) => {
  let o = 0, r, t, s = "";
  for (; o < e.length; )
    (r = e[o++]) && (t = D2(r)) && (s && (s += " "), s += t);
  return s;
}, D2 = (e) => {
  if (typeof e == "string")
    return e;
  let o, r = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (o = D2(e[t])) && (r && (r += " "), r += o);
  return r;
}, T3 = (e, ...o) => {
  let r, t, s, a;
  const l = (m) => {
    const b = o.reduce((h, x) => x(h), e());
    return r = w3(b), t = r.cache.get, s = r.cache.set, a = f, f(m);
  }, f = (m) => {
    const b = t(m);
    if (b)
      return b;
    const h = j3(m, r);
    return s(m, h), h;
  };
  return a = l, (...m) => a(R3(...m));
}, E3 = [], _ = (e) => {
  const o = (r) => r[e] || E3;
  return o.isThemeGetter = !0, o;
}, Y2 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, B2 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, _3 = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, M3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, z3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, S3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, A3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, N3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, B = (e) => _3.test(e), g = (e) => !!e && !Number.isNaN(Number(e)), $ = (e) => !!e && Number.isInteger(Number(e)), x2 = (e) => e.endsWith("%") && g(e.slice(0, -1)), F = (e) => M3.test(e), $2 = () => !0, P3 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  z3.test(e) && !S3.test(e)
), R2 = () => !1, O3 = (e) => A3.test(e), I3 = (e) => N3.test(e), L3 = (e) => !i(e) && !C(e), Z3 = (e) => U(e, q2, R2), i = (e) => Y2.test(e), J = (e) => U(e, J2, P3), P2 = (e) => U(e, $3, g), G3 = (e) => U(e, Q2, $2), V3 = (e) => U(e, X2, R2), O2 = (e) => U(e, U2, R2), F3 = (e) => U(e, H2, I3), b2 = (e) => U(e, K2, O3), C = (e) => B2.test(e), l2 = (e) => X(e, J2), W3 = (e) => X(e, X2), I2 = (e) => X(e, U2), D3 = (e) => X(e, q2), Y3 = (e) => X(e, H2), p2 = (e) => X(e, K2, !0), B3 = (e) => X(e, Q2, !0), U = (e, o, r) => {
  const t = Y2.exec(e);
  return t ? t[1] ? o(t[1]) : r(t[2]) : !1;
}, X = (e, o, r = !1) => {
  const t = B2.exec(e);
  return t ? t[1] ? o(t[1]) : r : !1;
}, U2 = (e) => e === "position" || e === "percentage", H2 = (e) => e === "image" || e === "url", q2 = (e) => e === "length" || e === "size" || e === "bg-size", J2 = (e) => e === "length", $3 = (e) => e === "number", X2 = (e) => e === "family-name", Q2 = (e) => e === "number" || e === "weight", K2 = (e) => e === "shadow", U3 = () => {
  const e = _("color"), o = _("font"), r = _("text"), t = _("font-weight"), s = _("tracking"), a = _("leading"), l = _("breakpoint"), f = _("container"), m = _("spacing"), b = _("radius"), h = _("shadow"), x = _("inset-shadow"), k = _("text-shadow"), S = _("drop-shadow"), A = _("blur"), M = _("perspective"), R = _("aspect"), Z = _("ease"), Q = _("animate"), H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [
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
  ], D = () => [...W(), C, i], G = () => ["auto", "hidden", "clip", "visible", "scroll"], q = () => ["auto", "contain", "none"], c = () => [C, i, m], z = () => [B, "full", "auto", ...c()], i2 = () => [$, "none", "subgrid", C, i], C2 = () => ["auto", {
    span: ["full", $, C, i]
  }, $, C, i], Y = () => [$, "auto", C, i], o2 = () => ["auto", "min", "max", "fr", C, i], n2 = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], I = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], N = () => ["auto", ...c()], L = () => [B, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...c()], K = () => [B, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...c()], e2 = () => [B, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...c()], d = () => [e, C, i], n = () => [...W(), I2, O2, {
    position: [C, i]
  }], p = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], v = () => ["auto", "cover", "contain", D3, Z3, {
    size: [C, i]
  }], w = () => [x2, l2, J], T = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    b,
    C,
    i
  ], E = () => ["", g, l2, J], y = () => ["solid", "dashed", "dotted", "double"], V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => [g, x2, I2, O2], c2 = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    A,
    C,
    i
  ], d2 = () => ["none", g, C, i], u2 = () => ["none", g, C, i], h2 = () => [g, C, i], m2 = () => [B, "full", ...c()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [F],
      breakpoint: [F],
      color: [$2],
      container: [F],
      "drop-shadow": [F],
      ease: ["in", "out", "in-out"],
      font: [L3],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [F],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [F],
      shadow: [F],
      spacing: ["px", g],
      text: [F],
      "text-shadow": [F],
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
        aspect: ["auto", "square", B, i, C, R]
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
        columns: [g, i, C, f]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
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
        object: D()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: G()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": G()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": G()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": q()
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
        inset: z()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": z()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": z()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": z(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: z()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": z(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: z()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": z()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": z()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: z()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: z()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: z()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: z()
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
        z: [$, "auto", C, i]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [B, "full", "auto", f, ...c()]
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
        flex: [g, B, "auto", "initial", "none", i]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", g, C, i]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", g, C, i]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [$, "first", "last", "none", C, i]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": i2()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: C2()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": i2()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: C2()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
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
        "auto-cols": o2()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": o2()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: c()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": c()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": c()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...n2(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...I(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...I()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...n2()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...I(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...I(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": n2()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...I(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...I()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: c()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: c()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: c()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: c()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: c()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: c()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: c()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: c()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: c()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: c()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: c()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: N()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: N()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: N()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: N()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: N()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: N()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: N()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: N()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: N()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: N()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: N()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": c()
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
        "space-y": c()
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
        inline: ["auto", ...K()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...K()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...K()]
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
        text: ["base", r, l2, J]
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
        font: [t, B3, G3]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", x2, i]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [W3, V3, o]
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
        tracking: [s, C, i]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [g, "none", C, P2]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...c()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", C, i]
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
        list: ["disc", "decimal", "none", C, i]
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
        placeholder: d()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: d()
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
        decoration: [...y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [g, "from-font", "auto", C, J]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: d()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [g, "auto", C, i]
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
        indent: c()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", C, i]
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
        content: ["none", C, i]
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
        bg: n()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: p()
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
          }, $, C, i],
          radial: ["", C, i],
          conic: [$, C, i]
        }, Y3, F3]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: d()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: w()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: w()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: w()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: d()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: d()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: d()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: T()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": T()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": T()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": T()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": T()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": T()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": T()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": T()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": T()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": T()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": T()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": T()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": T()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": T()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": T()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: E()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": E()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": E()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": E()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": E()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": E()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": E()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": E()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": E()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": E()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": E()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": E()
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
        "divide-y": E()
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
        border: [...y(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...y(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: d()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": d()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": d()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": d()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": d()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": d()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": d()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": d()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": d()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": d()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": d()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: d()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...y(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [g, C, i]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", g, l2, J]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: d()
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
          h,
          p2,
          b2
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: d()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", x, p2, b2]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": d()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: E()
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
        ring: d()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [g, J]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": d()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": E()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": d()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", k, p2, b2]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": d()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [g, C, i]
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
        "mask-linear": [g]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": j()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": j()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": d()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": d()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": j()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": j()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": d()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": d()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": j()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": j()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": d()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": d()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": j()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": j()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": d()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": d()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": j()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": j()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": d()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": d()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": j()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": j()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": d()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": d()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": j()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": j()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": d()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": d()
      }],
      "mask-image-radial": [{
        "mask-radial": [C, i]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": j()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": j()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": d()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": d()
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
        "mask-radial-at": W()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [g]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": j()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": j()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": d()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": d()
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
        mask: n()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: p()
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
        mask: ["none", C, i]
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
          C,
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
        brightness: [g, C, i]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [g, C, i]
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
          S,
          p2,
          b2
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": d()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", g, C, i]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [g, C, i]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", g, C, i]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [g, C, i]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", g, C, i]
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
          C,
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
        "backdrop-brightness": [g, C, i]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [g, C, i]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", g, C, i]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g, C, i]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", g, C, i]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [g, C, i]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [g, C, i]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", g, C, i]
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
        "border-spacing": c()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": c()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": c()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", C, i]
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
        duration: [g, "initial", C, i]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", Z, C, i]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [g, C, i]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", Q, C, i]
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
        perspective: [M, C, i]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": D()
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
        scale: u2()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": u2()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": u2()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": u2()
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
        skew: h2()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": h2()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": h2()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [C, i, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: D()
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
        translate: m2()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": m2()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": m2()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": m2()
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
        accent: d()
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
        caret: d()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", C, i]
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
        "scroll-m": c()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": c()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": c()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": c()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": c()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": c()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": c()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": c()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": c()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": c()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": c()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": c()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": c()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": c()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": c()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": c()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": c()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": c()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": c()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": c()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": c()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": c()
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
        "will-change": ["auto", "scroll", "contents", "transform", C, i]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...d()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [g, l2, J, P2]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...d()]
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
}, H3 = /* @__PURE__ */ T3(U3);
function O(...e) {
  return H3(G2(e));
}
const q3 = "flex space-x-xs items-center justify-center duration-150 outline-none ring-offset-transparent focus-visible:outline-none", r2 = {
  default: "cursor-pointer py-1.5 px-6 rounded-4xl font-mono font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-burgundy-950",
  primary: "bg-burgundy-950 text-rose-white hover:bg-burgundy-700 active:bg-burgundy-950",
  secondary: "border-2 border-burgundy-950 bg-transparent text-burgundy-950 hover:border-burgundy-950 hover:text-rose-white hover:bg-burgundy-600 focus:ring-1 active:text-rose-white active:bg-burgundy-700",
  tertiary: "text-burgundy-950 hover:underline active:underline active:font-semibold"
}, J3 = k2(q3, {
  variants: {
    variant: {
      primary: O(r2.default, r2.primary),
      secondary: O(r2.default, r2.secondary),
      tertiary: O(r2.default, r2.tertiary)
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
}), X3 = t2(
  ({ variant: e, size: o, fullWidth: r, disabled: t, className: s, children: a, ...l }, f) => /* @__PURE__ */ u.jsx(
    "button",
    {
      disabled: t,
      ref: f,
      className: O(O, J3({ fullWidth: r, disabled: t, variant: e, size: o }), s),
      ...l,
      children: a
    }
  )
);
X3.displayName = "Button";
const Q3 = k2("font-bold", {
  variants: {
    color: {
      burgundy: "text-burgundy-950",
      teal: "text-teal-950",
      white: "text-rose-white"
    },
    size: {
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base"
    }
  },
  defaultVariants: {
    color: "teal",
    size: "h1"
  }
}), y2 = t2(
  ({ as: e = "h1", color: o, size: r, className: t, children: s, ...a }, l) => /* @__PURE__ */ u.jsx(
    e,
    {
      ref: l,
      className: O(t, Q3({ color: o, size: r, className: t })),
      ...a,
      children: s
    }
  )
);
y2.displayName = "Heading";
const s4 = ({ href: e, children: o, className: r, ...t }) => /* @__PURE__ */ u.jsx("a", { href: e, className: r, target: "_blank", rel: "noopener noreferrer", ...t, children: o }), L2 = ({ href: e, children: o, className: r, as: t = "a", ...s }) => /* @__PURE__ */ u.jsx(t, { href: e, className: r, ...s, children: o }), w2 = ({ color: e, ...o }) => e === "teal" ? /* @__PURE__ */ u.jsx("svg", { width: "285", height: "61", viewBox: "0 0 285 61", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o, children: /* @__PURE__ */ u.jsx("path", { d: "M16.172 49.92C13.0173 49.92 10.2093 49.2787 7.74801 47.996C5.32134 46.748 3.41467 44.8933 2.02801 42.432C0.676005 39.936 5.00679e-06 36.8853 5.00679e-06 33.28C5.00679e-06 31.1307 0.277338 28.9813 0.832005 26.832C1.38667 24.6827 2.13201 22.62 3.06801 20.644C4.03867 18.668 5.11334 16.848 6.29201 15.184C5.77201 13.104 5.51201 10.8507 5.51201 8.424C5.51201 6.58667 5.72001 4.836 6.13601 3.172C6.27467 2.68667 6.51734 2.444 6.864 2.444C7.14134 2.444 7.26267 2.61734 7.22801 2.964C7.12401 3.65734 7.03734 4.40267 6.96801 5.2C6.89867 5.96267 6.864 6.88134 6.864 7.956C6.864 9.96667 7.05467 11.8733 7.43601 13.676C7.78267 13.2253 8.12934 12.8093 8.47601 12.428C9.89734 10.868 11.5787 9.412 13.52 8.06C15.4613 6.67334 17.6107 5.564 19.968 4.732C22.36 3.9 24.8907 3.484 27.56 3.484C30.056 3.484 32.344 3.952 34.424 4.888C36.504 5.78934 38.168 7.10667 39.416 8.84C40.6987 10.5387 41.34 12.6013 41.34 15.028C41.34 16.5533 40.924 18.1133 40.092 19.708C39.2947 21.3027 38.1333 22.776 36.608 24.128C35.1173 25.4453 33.2973 26.52 31.148 27.352C29.0333 28.184 26.6587 28.6 24.024 28.6C20.5573 28.6 17.3853 27.8373 14.508 26.312C11.6307 24.7867 9.39467 22.464 7.80001 19.344C6.41334 21.8053 5.39067 24.3013 4.73201 26.832C4.07334 29.3627 3.744 31.772 3.744 34.06C3.744 37.388 4.29867 40.092 5.40801 42.172C6.51734 44.252 8.04267 45.7773 9.98401 46.748C11.96 47.7533 14.2133 48.256 16.744 48.256C21.2507 48.256 25.2027 47.112 28.6 44.824C32.032 42.5707 34.8573 39.0693 37.076 34.32C37.492 34.32 37.7 34.476 37.7 34.788C35.5507 39.9187 32.604 43.7147 28.86 46.176C25.1507 48.672 20.9213 49.92 16.172 49.92ZM10.036 15.86C9.58534 16.484 9.15201 17.1253 8.73601 17.784C9.94934 20.6267 11.804 22.9147 14.3 24.648C16.796 26.3813 19.9333 27.248 23.712 27.248C26.104 27.248 28.236 26.884 30.108 26.156C32.0147 25.428 33.6093 24.4573 34.892 23.244C36.2093 22.0307 37.2147 20.696 37.908 19.24C38.6013 17.7493 38.948 16.2587 38.948 14.768C38.948 12.9307 38.4453 11.3187 37.44 9.932C36.4693 8.54534 35.1347 7.47067 33.436 6.708C31.7373 5.91067 29.8133 5.512 27.664 5.512C25.5147 5.512 23.348 5.96267 21.164 6.864C19.0147 7.76534 16.9693 8.996 15.028 10.556C13.1213 12.116 11.4573 13.884 10.036 15.86ZM36.0368 44.772C37.4928 41.7907 39.0008 38.6707 40.5608 35.412C42.1555 32.1187 43.7848 28.808 45.4488 25.48C47.1128 22.152 48.7595 18.98 50.3888 15.964C50.9782 14.924 51.5155 14.1093 52.0008 13.52C52.5208 12.9307 53.1968 12.636 54.0288 12.636C54.3408 12.636 54.7048 12.688 55.1208 12.792C55.5368 12.896 55.9355 12.9133 56.3168 12.844C55.8662 13.3293 55.2422 14.1787 54.4448 15.392C53.6822 16.6053 52.8155 18.0613 51.8448 19.76C50.9088 21.4587 49.9035 23.296 48.8288 25.272C47.7888 27.2133 46.7488 29.1893 45.7088 31.2C44.7035 33.176 43.7675 35.0307 42.9008 36.764C43.5942 35.8627 44.3048 35.0133 45.0328 34.216C45.7608 33.4187 46.4715 32.7253 47.1648 32.136C47.9275 31.4427 48.8808 30.7147 50.0248 29.952C51.2035 29.1893 52.3648 28.5307 53.5088 27.976C54.6875 27.4213 55.6235 27.144 56.3168 27.144C56.5595 27.144 56.7328 27.1613 56.8368 27.196C56.8368 27.196 56.6462 27.5427 56.2648 28.236C55.8835 28.9293 55.3982 29.8133 54.8088 30.888C54.2542 31.9627 53.6648 33.124 53.0408 34.372C52.4515 35.62 51.9315 36.816 51.4808 37.96C51.0302 39.0693 50.7355 39.988 50.5968 40.716C50.4928 41.2707 50.4408 41.7387 50.4408 42.12C50.4408 42.6747 50.5448 43.056 50.7528 43.264C50.9608 43.4373 51.1862 43.524 51.4288 43.524C52.0182 43.524 52.6422 43.2293 53.3008 42.64C53.9942 42.016 54.6702 41.236 55.3288 40.3C55.9875 39.364 56.5942 38.376 57.1488 37.336C57.7382 36.2613 58.2062 35.256 58.5528 34.32C58.9688 34.32 59.1768 34.476 59.1768 34.788C58.7955 35.724 58.3102 36.764 57.7208 37.908C57.1662 39.0173 56.5248 40.0747 55.7968 41.08C55.0688 42.0853 54.2715 42.9173 53.4048 43.576C52.5382 44.2347 51.6195 44.564 50.6488 44.564C49.9555 44.564 49.2448 44.3213 48.5168 43.836C47.7888 43.3507 47.4248 42.4667 47.4248 41.184C47.4248 40.8027 47.4595 40.404 47.5288 39.988C47.5982 39.5373 47.7195 39.0347 47.8928 38.48C48.1008 37.7867 48.4475 37.024 48.9328 36.192C49.4182 35.3253 50.0422 34.2507 50.8048 32.968C51.1515 32.3787 51.3248 31.9107 51.3248 31.564C51.3248 31.148 51.1168 30.94 50.7008 30.94C50.3542 30.94 49.8862 31.1133 49.2968 31.46C48.7075 31.8067 47.9622 32.4133 47.0608 33.28C46.1942 34.112 45.1195 35.3253 43.8368 36.92C42.5542 38.5147 41.1848 40.7507 39.7288 43.628C39.4862 44.0787 39.2088 44.3213 38.8968 44.356C38.6195 44.356 38.2382 44.3733 37.7528 44.408C37.4408 44.4427 37.1288 44.46 36.8168 44.46C36.5048 44.4947 36.2448 44.5987 36.0368 44.772ZM62.2936 44.564C61.0109 44.564 59.8496 44.148 58.8096 43.316C57.8042 42.484 57.3016 41.2187 57.3016 39.52C57.3016 38.0987 57.6136 36.5907 58.2376 34.996C58.8962 33.4013 59.7456 31.9107 60.7856 30.524C61.8602 29.1027 63.0389 27.9587 64.3216 27.092C65.6389 26.1907 66.9562 25.74 68.2736 25.74C68.9322 25.74 69.5736 25.9307 70.1976 26.312C70.8216 26.6933 71.1336 27.352 71.1336 28.288C71.1336 29.1547 70.8042 30.108 70.1456 31.148C69.4869 32.188 68.5509 33.1587 67.3376 34.06C66.8176 34.4413 66.1589 34.8053 65.3616 35.152C64.5642 35.4987 63.7669 35.7933 62.9696 36.036C62.1722 36.244 61.5136 36.348 60.9936 36.348C60.8202 36.764 60.6469 37.3187 60.4736 38.012C60.3349 38.7053 60.2656 39.416 60.2656 40.144C60.2656 41.0107 60.4389 41.7907 60.7856 42.484C61.1322 43.1773 61.7736 43.524 62.7096 43.524C63.8536 43.524 64.9109 43.1947 65.8816 42.536C66.8869 41.8773 67.7709 41.0453 68.5336 40.04C69.3309 39.0347 70.0069 38.012 70.5616 36.972C71.1162 35.932 71.5496 35.048 71.8616 34.32C72.2776 34.32 72.4856 34.476 72.4856 34.788C72.0349 35.7587 71.5149 36.816 70.9256 37.96C70.3709 39.104 69.6949 40.1787 68.8976 41.184C68.1349 42.1547 67.1989 42.9693 66.0896 43.628C65.0149 44.252 63.7496 44.564 62.2936 44.564ZM61.3576 35.412C61.8429 35.412 62.6576 35.2387 63.8016 34.892C64.9456 34.5107 65.9856 33.9213 66.9216 33.124C67.8229 32.3267 68.5162 31.46 69.0016 30.524C69.4869 29.5533 69.7296 28.7387 69.7296 28.08C69.7296 27.3173 69.4522 26.936 68.8976 26.936C68.4816 26.936 67.9096 27.2133 67.1816 27.768C66.4536 28.3227 65.5522 29.2587 64.4776 30.576C63.8189 31.408 63.1949 32.3093 62.6056 33.28C62.0162 34.2507 61.6002 34.9613 61.3576 35.412ZM74.2983 44.512C73.0156 44.512 72.0623 44.1307 71.4383 43.368C70.8489 42.5707 70.5543 41.6347 70.5543 40.56C70.5543 39.4507 70.7103 38.3067 71.0223 37.128C71.3343 35.9493 71.6116 34.9613 71.8543 34.164C72.4089 32.2227 73.1023 30.16 73.9343 27.976C74.8009 25.7573 75.7369 23.5907 76.7423 21.476C77.7823 19.3267 78.8049 17.4027 79.8103 15.704C80.6076 14.352 81.4569 13.3467 82.3583 12.688C83.2943 11.9947 84.1089 11.648 84.8023 11.648C85.3569 11.648 85.7903 11.856 86.1023 12.272C86.4489 12.6533 86.6223 13.2427 86.6223 14.04C86.6223 14.5947 86.5183 15.2533 86.3103 16.016C86.1369 16.7787 85.8249 17.6453 85.3743 18.616C84.1609 21.32 82.7049 24.024 81.0063 26.728C79.3423 29.432 77.2276 31.9627 74.6623 34.32C74.2463 35.2907 73.8996 36.3307 73.6223 37.44C73.3449 38.5493 73.2063 39.4507 73.2063 40.144C73.2063 42.2933 73.9343 43.368 75.3903 43.368C76.4996 43.368 77.7303 42.5707 79.0823 40.976C80.4343 39.3467 81.7169 37.128 82.9303 34.32C83.0689 34.32 83.2076 34.3547 83.3463 34.424C83.4849 34.4587 83.5543 34.58 83.5543 34.788C83.1729 35.724 82.6876 36.764 82.0983 37.908C81.5436 39.0173 80.8849 40.0747 80.1223 41.08C79.3943 42.0853 78.5449 42.9173 77.5743 43.576C76.6036 44.2 75.5116 44.512 74.2983 44.512ZM75.0783 32.656C76.3263 31.3733 77.5396 29.9 78.7183 28.236C79.8969 26.5373 80.9889 24.7867 81.9943 22.984C83.0343 21.1467 83.9009 19.4133 84.5943 17.784C84.8369 17.264 85.0276 16.692 85.1663 16.068C85.3396 15.444 85.4263 14.924 85.4263 14.508C85.4263 14.0227 85.3049 13.78 85.0623 13.78C84.9236 13.78 84.7156 13.9187 84.4383 14.196C84.1609 14.4387 83.7969 14.872 83.3463 15.496C82.6876 16.3627 81.9596 17.5413 81.1623 19.032C80.3996 20.5227 79.6196 22.1173 78.8223 23.816C78.0249 25.5147 77.2969 27.1613 76.6383 28.756C75.9796 30.316 75.4596 31.616 75.0783 32.656ZM85.3686 44.512C84.0859 44.512 83.1326 44.1307 82.5086 43.368C81.9192 42.5707 81.6246 41.6347 81.6246 40.56C81.6246 39.4507 81.7806 38.3067 82.0926 37.128C82.4046 35.9493 82.6819 34.9613 82.9246 34.164C83.4792 32.2227 84.1726 30.16 85.0046 27.976C85.8712 25.7573 86.8072 23.5907 87.8126 21.476C88.8526 19.3267 89.8752 17.4027 90.8806 15.704C91.6779 14.352 92.5272 13.3467 93.4286 12.688C94.3646 11.9947 95.1792 11.648 95.8726 11.648C96.4272 11.648 96.8606 11.856 97.1726 12.272C97.5192 12.6533 97.6926 13.2427 97.6926 14.04C97.6926 14.5947 97.5886 15.2533 97.3806 16.016C97.2072 16.7787 96.8952 17.6453 96.4446 18.616C95.2312 21.32 93.7752 24.024 92.0766 26.728C90.4126 29.432 88.2979 31.9627 85.7326 34.32C85.3166 35.2907 84.9699 36.3307 84.6926 37.44C84.4152 38.5493 84.2766 39.4507 84.2766 40.144C84.2766 42.2933 85.0046 43.368 86.4606 43.368C87.5699 43.368 88.8006 42.5707 90.1526 40.976C91.5046 39.3467 92.7872 37.128 94.0006 34.32C94.1392 34.32 94.2779 34.3547 94.4166 34.424C94.5552 34.4587 94.6246 34.58 94.6246 34.788C94.2432 35.724 93.7579 36.764 93.1686 37.908C92.6139 39.0173 91.9552 40.0747 91.1926 41.08C90.4646 42.0853 89.6152 42.9173 88.6446 43.576C87.6739 44.2 86.5819 44.512 85.3686 44.512ZM86.1486 32.656C87.3966 31.3733 88.6099 29.9 89.7886 28.236C90.9672 26.5373 92.0592 24.7867 93.0646 22.984C94.1046 21.1467 94.9712 19.4133 95.6646 17.784C95.9072 17.264 96.0979 16.692 96.2366 16.068C96.4099 15.444 96.4966 14.924 96.4966 14.508C96.4966 14.0227 96.3752 13.78 96.1326 13.78C95.9939 13.78 95.7859 13.9187 95.5086 14.196C95.2312 14.4387 94.8672 14.872 94.4166 15.496C93.7579 16.3627 93.0299 17.5413 92.2326 19.032C91.4699 20.5227 90.6899 22.1173 89.8926 23.816C89.0952 25.5147 88.3672 27.1613 87.7086 28.756C87.0499 30.316 86.5299 31.616 86.1486 32.656ZM86.8189 60.944C85.0162 60.944 83.7335 60.58 82.9709 59.852C82.2082 59.1587 81.8269 58.3267 81.8269 57.356C81.8269 55.8653 82.3815 54.4787 83.4909 53.196C84.5655 51.948 85.9002 50.9427 87.4949 50.18C89.2975 49.348 91.3429 48.672 93.6309 48.152C95.9535 47.632 98.1722 47.06 100.287 46.436C100.946 45.292 101.552 43.992 102.107 42.536C102.662 41.0453 103.164 39.6067 103.615 38.22C104.066 36.7987 104.43 35.6373 104.707 34.736C104.291 35.4987 103.754 36.4347 103.095 37.544C102.471 38.6187 101.76 39.676 100.963 40.716C100.166 41.756 99.2989 42.6227 98.3629 43.316C97.4615 44.0093 96.5082 44.356 95.5029 44.356C95.1215 44.356 94.6535 44.2693 94.0989 44.096C93.5789 43.9227 93.1109 43.6107 92.6949 43.16C92.3135 42.6747 92.1229 41.964 92.1229 41.028C92.1229 40.1267 92.4002 39.1387 92.9549 38.064C93.5095 36.9547 94.0642 35.8627 94.6189 34.788C94.4455 34.788 94.2895 34.7707 94.1509 34.736C94.0469 34.7013 93.9949 34.5627 93.9949 34.32C94.0989 34.112 94.3069 33.6613 94.6189 32.968C94.9309 32.2747 95.2775 31.512 95.6589 30.68C96.0749 29.848 96.4389 29.12 96.7509 28.496C97.1322 27.6987 97.5482 27.144 97.9989 26.832C98.4842 26.52 98.9522 26.364 99.4029 26.364H102.627C102.384 26.572 102.072 26.8147 101.691 27.092C101.344 27.3347 101.015 27.716 100.703 28.236C99.7669 29.8307 98.9522 31.3733 98.2589 32.864C97.5655 34.32 96.8202 35.88 96.0229 37.544C95.6415 38.3413 95.3642 39.0693 95.1909 39.728C95.0175 40.3867 94.9309 40.9587 94.9309 41.444C94.9309 42.588 95.3122 43.16 96.0749 43.16C96.9069 43.16 97.9122 42.484 99.0909 41.132C100.062 39.988 101.032 38.636 102.003 37.076C103.008 35.4813 103.962 33.852 104.863 32.188C105.799 30.4893 106.614 28.9293 107.307 27.508C107.688 26.7453 108.364 26.364 109.335 26.364H112.195C111.19 27.0573 110.41 27.9587 109.855 29.068C109.335 30.1773 108.746 31.5987 108.087 33.332C107.359 35.2387 106.666 37.2147 106.007 39.26C105.348 41.3053 104.62 43.4027 103.823 45.552C105.522 44.9627 106.943 44.2 108.087 43.264C109.231 42.328 110.236 41.132 111.103 39.676C112.004 38.1853 112.906 36.4 113.807 34.32C114.223 34.32 114.431 34.476 114.431 34.788C113.668 36.3827 112.975 37.7867 112.351 39C111.727 40.2133 111.034 41.288 110.271 42.224C109.508 43.1253 108.555 43.9573 107.411 44.72C106.267 45.5173 104.794 46.28 102.991 47.008C102.159 48.4987 101.206 50.0413 100.131 51.636C99.0909 53.2653 97.8949 54.7733 96.5429 56.16C95.2255 57.5813 93.7522 58.7253 92.1229 59.592C90.5282 60.4933 88.7602 60.944 86.8189 60.944ZM85.5709 59.904C86.7149 59.904 87.8935 59.5573 89.1069 58.864C90.3202 58.1707 91.4989 57.2867 92.6429 56.212C93.7869 55.172 94.8269 54.0973 95.7629 52.988C96.7335 51.9133 97.5135 50.96 98.1029 50.128C98.2762 49.8853 98.4669 49.5733 98.6749 49.192C98.8829 48.8107 99.0909 48.4467 99.2989 48.1C97.6002 48.5507 95.7282 49.036 93.6829 49.556C91.6722 50.1107 89.9215 50.7173 88.4309 51.376C86.7669 52.0693 85.4669 53.0573 84.5309 54.34C83.5602 55.6227 83.0749 56.7667 83.0749 57.772C83.0749 58.396 83.2829 58.8987 83.6989 59.28C84.0802 59.696 84.7042 59.904 85.5709 59.904ZM134.869 46.696C131.922 46.696 129.478 46.228 127.537 45.292C125.595 44.3907 124.139 43.1947 123.169 41.704C122.233 40.1787 121.765 38.5667 121.765 36.868C121.765 34.9613 122.337 33.072 123.481 31.2C124.625 29.2933 126.323 27.664 128.577 26.312C130.865 24.9253 133.655 24.0587 136.949 23.712C136.463 23.0533 136.099 22.308 135.857 21.476C135.614 20.6093 135.493 19.7947 135.493 19.032C135.527 17.1947 136.047 15.5827 137.053 14.196C138.058 12.7747 139.341 11.5787 140.901 10.608C142.495 9.63734 144.194 8.90934 145.997 8.424C147.799 7.904 149.498 7.644 151.093 7.644C152.063 7.644 153.051 7.78267 154.057 8.06C155.062 8.30267 155.911 8.75334 156.605 9.412C157.298 10.0707 157.645 11.0067 157.645 12.22C157.645 13.2253 157.333 14.1267 156.709 14.924C156.085 15.7213 155.322 16.12 154.421 16.12C153.762 16.12 153.19 15.8773 152.705 15.392C152.219 14.9067 151.977 14.352 151.977 13.728C151.977 13 152.202 12.4107 152.653 11.96C153.138 11.4747 153.727 11.232 154.421 11.232C154.733 11.232 155.079 11.336 155.461 11.544C155.877 11.752 156.137 11.96 156.241 12.168C156.275 12.0293 156.293 11.8387 156.293 11.596C156.293 10.66 155.911 10.0013 155.149 9.62C154.386 9.23867 153.571 9.048 152.705 9.048C151.318 9.048 149.706 9.39467 147.869 10.088C146.031 10.7467 144.246 11.8387 142.513 13.364C141.889 13.9187 141.247 14.6467 140.589 15.548C139.93 16.4493 139.375 17.42 138.925 18.46C138.474 19.4653 138.249 20.488 138.249 21.528C138.249 22.3253 138.387 23.0187 138.665 23.608C139.185 23.608 139.774 23.5907 140.433 23.556C141.126 23.4867 141.837 23.452 142.565 23.452C143.466 23.452 144.177 23.6427 144.697 24.024C145.217 24.4053 145.477 24.8387 145.477 25.324C145.477 25.6707 145.269 26 144.853 26.312C144.437 26.624 143.778 26.78 142.877 26.78C141.733 26.78 140.693 26.5373 139.757 26.052C138.855 25.532 138.145 25.012 137.625 24.492C135.337 24.804 133.395 25.6533 131.801 27.04C130.206 28.4267 128.993 30.0733 128.161 31.98C127.329 33.852 126.913 35.724 126.913 37.596C126.913 39.0867 127.19 40.4733 127.745 41.756C128.334 43.0387 129.218 44.0613 130.397 44.824C131.575 45.6213 133.066 46.02 134.869 46.02C136.741 46.02 138.439 45.6733 139.965 44.98C141.525 44.3213 142.859 43.4547 143.969 42.38C145.078 41.3053 145.927 40.1787 146.517 39C147.141 37.7867 147.453 36.66 147.453 35.62C147.453 34.7187 147.123 33.9733 146.465 33.384C145.841 32.76 145.009 32.3093 143.969 32.032C142.929 31.72 141.819 31.564 140.641 31.564C139.427 31.564 138.214 31.7373 137.001 32.084C135.822 32.396 134.817 32.8987 133.985 33.592C133.153 34.2507 132.65 35.1 132.477 36.14C132.477 36.2093 132.459 36.296 132.425 36.4C132.425 36.4693 132.425 36.5387 132.425 36.608C132.425 37.3707 132.702 38.1333 133.257 38.896C133.846 39.624 134.747 40.3 135.961 40.924C136.273 41.0627 136.429 41.3227 136.429 41.704C136.429 42.0853 136.255 42.1893 135.909 42.016C134.002 41.0107 132.598 39.9187 131.697 38.74C130.83 37.5267 130.397 36.3827 130.397 35.308C130.397 33.748 131.229 32.4133 132.893 31.304C134.591 30.16 137.001 29.588 140.121 29.588H149.325C149.879 29.588 150.694 29.4667 151.769 29.224C152.878 28.9813 154.005 28.6347 155.149 28.184C156.293 27.6987 157.263 27.144 158.061 26.52C158.893 25.8613 159.309 25.116 159.309 24.284C159.309 23.8333 159.153 23.348 158.841 22.828C158.771 22.724 158.737 22.6027 158.737 22.464C158.737 22.256 158.823 22.152 158.997 22.152C159.135 22.152 159.257 22.2387 159.361 22.412C159.881 23.1747 160.141 23.9547 160.141 24.752C160.141 25.688 159.794 26.5547 159.101 27.352C158.442 28.1493 157.541 28.86 156.397 29.484C155.253 30.0733 153.97 30.524 152.549 30.836C151.162 31.148 149.741 31.2867 148.285 31.252C148.943 31.8067 149.429 32.4307 149.741 33.124C150.053 33.8173 150.209 34.5453 150.209 35.308C150.209 36.5907 149.827 37.908 149.065 39.26C148.302 40.5773 147.227 41.808 145.841 42.952C144.454 44.0613 142.825 44.9627 140.953 45.656C139.115 46.3493 137.087 46.696 134.869 46.696ZM142.877 25.896C144.021 25.896 144.593 25.6707 144.593 25.22C144.593 25.0467 144.437 24.8733 144.125 24.7C143.847 24.492 143.466 24.3707 142.981 24.336C142.773 24.3013 142.426 24.284 141.941 24.284C141.455 24.284 140.935 24.284 140.381 24.284C139.861 24.284 139.427 24.284 139.081 24.284C139.947 25.3587 141.213 25.896 142.877 25.896ZM225.778 53.976C223.351 53.976 220.994 53.2133 218.706 51.688C216.452 50.1973 214.528 47.7013 212.934 44.2C212.24 42.64 211.668 41.0627 211.218 39.468C210.802 37.8733 210.49 36.3827 210.282 34.996C210.074 33.6093 209.97 32.4653 209.97 31.564C209.97 30.4547 210.091 29.8307 210.334 29.692C210.992 29.7613 212.084 29.484 213.61 28.86C215.17 28.236 217.007 27.3173 219.122 26.104C221.271 24.8907 223.576 23.4347 226.038 21.736C228.534 20.0027 231.03 18.0613 233.526 15.912C236.056 13.7627 238.483 11.44 240.806 8.944C243.128 6.448 245.174 3.83067 246.942 1.092C247.184 0.710669 247.375 0.433335 247.514 0.260002C247.652 0.086669 247.791 2.38419e-06 247.93 2.38419e-06C248.103 2.38419e-06 248.259 0.086669 248.398 0.260002C248.536 0.398669 248.606 0.554669 248.606 0.728002C248.606 1.00534 248.484 1.33467 248.242 1.716C246.578 4.48934 244.602 7.21067 242.314 9.88C240.06 12.5147 237.651 14.9933 235.086 17.316C232.52 19.6387 229.938 21.736 227.338 23.608C224.738 25.48 222.259 27.04 219.902 28.288C217.544 29.536 215.464 30.3853 213.662 30.836C213.558 30.7667 213.506 30.94 213.506 31.356C213.506 31.9453 213.627 32.8987 213.87 34.216C214.112 35.4987 214.476 36.972 214.962 38.636C215.482 40.2653 216.106 41.9293 216.834 43.628C218.151 46.7133 219.694 48.828 221.462 49.972C223.264 51.1507 225.119 51.74 227.026 51.74C228.239 51.74 229.487 51.4973 230.77 51.012C232.052 50.5267 233.231 49.8507 234.306 48.984C235.38 48.152 236.212 47.164 236.802 46.02C237.01 45.6733 237.166 45.5 237.27 45.5C237.512 45.5 237.634 45.6387 237.634 45.916C237.634 46.02 237.599 46.124 237.53 46.228C237.495 46.3667 237.391 46.6267 237.218 47.008C236.732 47.9787 235.918 49.0013 234.774 50.076C233.664 51.1853 232.33 52.104 230.77 52.832C229.244 53.5947 227.58 53.976 225.778 53.976ZM181.63 53.3C179.272 53.3 176.984 52.9707 174.766 52.312C172.582 51.688 170.606 50.752 168.838 49.504C167.104 48.256 165.718 46.7307 164.678 44.928C163.672 43.1253 163.17 41.08 163.17 38.792C163.17 37.128 163.412 35.6547 163.898 34.372C164.418 33.0547 165.042 31.9627 165.77 31.096C166.532 30.2293 167.278 29.5707 168.006 29.12C168.768 28.6693 169.392 28.444 169.878 28.444C170.224 28.444 170.398 28.548 170.398 28.756C170.398 28.9293 170.311 29.068 170.138 29.172C169.34 29.588 168.526 30.1947 167.694 30.992C166.862 31.7893 166.168 32.8293 165.614 34.112C165.059 35.3947 164.782 36.9893 164.782 38.896C164.782 40.976 165.215 42.7613 166.082 44.252C166.983 45.708 168.144 46.904 169.566 47.84C171.022 48.776 172.582 49.452 174.246 49.868C175.91 50.3187 177.504 50.544 179.03 50.544C182.427 50.544 185.599 49.8853 188.546 48.568C191.492 47.2507 194.179 45.5 196.606 43.316C199.067 41.0973 201.234 38.636 203.106 35.932C204.978 33.228 206.52 30.4893 207.734 27.716C208.184 26.7107 208.722 25.5147 209.346 24.128C209.97 22.7067 210.646 21.1987 211.374 19.604C212.102 18.0093 212.812 16.4493 213.506 14.924C214.199 13.3987 214.823 12.0293 215.378 10.816C215.967 9.568 216.435 8.61467 216.782 7.956C214.459 8.23334 211.946 8.49334 209.242 8.736C206.572 8.944 204.024 9.39467 201.598 10.088C198.894 10.8507 196.675 11.96 194.942 13.416C193.243 14.872 191.978 16.4493 191.146 18.148C190.348 19.8467 189.95 21.4413 189.95 22.932C189.95 24.7347 190.4 26.2253 191.302 27.404C192.203 28.548 193.503 29.12 195.202 29.12C196.484 29.12 197.628 28.756 198.634 28.028C199.639 27.2653 200.436 26.2947 201.026 25.116C201.615 23.9027 201.91 22.62 201.91 21.268C201.91 20.7133 201.858 20.2453 201.754 19.864C201.65 19.4827 201.598 19.188 201.598 18.98C201.598 18.7373 201.684 18.616 201.858 18.616C202.1 18.616 202.326 18.824 202.534 19.24C202.88 20.0373 203.054 20.8173 203.054 21.58C203.054 23.2093 202.655 24.6827 201.858 26C201.06 27.2827 200.038 28.3053 198.79 29.068C197.542 29.8307 196.224 30.212 194.838 30.212C193.208 30.212 191.787 29.8307 190.574 29.068C189.395 28.2707 188.476 27.2307 187.818 25.948C187.159 24.6653 186.83 23.2787 186.83 21.788C186.83 20.0893 187.298 18.3733 188.234 16.64C189.17 14.872 190.678 13.2773 192.758 11.856C194.838 10.4 197.576 9.29067 200.974 8.528C203.816 7.904 206.711 7.50534 209.658 7.332C212.604 7.124 215.204 6.916 217.458 6.708C218.671 4.836 219.659 3.65734 220.422 3.172C221.184 2.652 221.878 2.392 222.502 2.392C223.126 2.392 223.611 2.56534 223.958 2.912C224.339 3.25867 224.53 3.67467 224.53 4.16C224.53 4.85334 224.044 5.59867 223.074 6.396C222.138 7.15867 220.543 7.66134 218.29 7.904C217.18 9.94934 216.158 12.2373 215.222 14.768C214.286 17.264 213.35 19.8813 212.414 22.62C211.478 25.3587 210.455 28.08 209.346 30.784C207.474 35.2907 205.255 39.2427 202.69 42.64C200.124 46.0027 197.108 48.62 193.642 50.492C190.175 52.364 186.171 53.3 181.63 53.3ZM219.278 6.604C220.144 6.53467 220.976 6.292 221.774 5.876C222.571 5.42534 222.97 4.94 222.97 4.42C222.97 4.07334 222.796 3.9 222.45 3.9C222.138 3.9 221.704 4.108 221.15 4.524C220.595 4.90534 219.971 5.59867 219.278 6.604ZM231.192 44.564C229.909 44.564 228.748 44.148 227.708 43.316C226.703 42.484 226.2 41.2187 226.2 39.52C226.2 38.0987 226.512 36.5907 227.136 34.996C227.795 33.4013 228.644 31.9107 229.684 30.524C230.759 29.1027 231.937 27.9587 233.22 27.092C234.537 26.1907 235.855 25.74 237.172 25.74C237.831 25.74 238.472 25.9307 239.096 26.312C239.72 26.6933 240.032 27.352 240.032 28.288C240.032 29.1547 239.703 30.108 239.044 31.148C238.385 32.188 237.449 33.1587 236.236 34.06C235.716 34.4413 235.057 34.8053 234.26 35.152C233.463 35.4987 232.665 35.7933 231.868 36.036C231.071 36.244 230.412 36.348 229.892 36.348C229.719 36.764 229.545 37.3187 229.372 38.012C229.233 38.7053 229.164 39.416 229.164 40.144C229.164 41.0107 229.337 41.7907 229.684 42.484C230.031 43.1773 230.672 43.524 231.608 43.524C232.752 43.524 233.809 43.1947 234.78 42.536C235.785 41.8773 236.669 41.0453 237.432 40.04C238.229 39.0347 238.905 38.012 239.46 36.972C240.015 35.932 240.448 35.048 240.76 34.32C241.176 34.32 241.384 34.476 241.384 34.788C240.933 35.7587 240.413 36.816 239.824 37.96C239.269 39.104 238.593 40.1787 237.796 41.184C237.033 42.1547 236.097 42.9693 234.988 43.628C233.913 44.252 232.648 44.564 231.192 44.564ZM230.256 35.412C230.741 35.412 231.556 35.2387 232.7 34.892C233.844 34.5107 234.884 33.9213 235.82 33.124C236.721 32.3267 237.415 31.46 237.9 30.524C238.385 29.5533 238.628 28.7387 238.628 28.08C238.628 27.3173 238.351 26.936 237.796 26.936C237.38 26.936 236.808 27.2133 236.08 27.768C235.352 28.3227 234.451 29.2587 233.376 30.576C232.717 31.408 232.093 32.3093 231.504 33.28C230.915 34.2507 230.499 34.9613 230.256 35.412ZM242.469 44.72C241.394 44.72 240.649 44.4427 240.233 43.888C239.817 43.3333 239.609 42.6227 239.609 41.756C239.609 40.8547 239.765 39.832 240.077 38.688C240.389 37.544 240.805 36.2613 241.325 34.84C240.943 34.84 240.753 34.6667 240.753 34.32C241.03 33.6267 241.325 32.8467 241.637 31.98C241.983 31.0787 242.157 30.0733 242.157 28.964C242.157 28.4093 242.087 27.9413 241.949 27.56C241.81 27.1787 241.602 26.9533 241.325 26.884C241.325 26.884 241.498 26.8493 241.845 26.78C242.226 26.7107 242.625 26.6413 243.041 26.572C243.457 26.5027 243.734 26.468 243.873 26.468C244.081 26.4333 244.271 26.416 244.445 26.416C244.618 26.3813 244.774 26.364 244.913 26.364C245.259 26.364 245.485 26.5027 245.589 26.78C245.727 27.0573 245.779 27.664 245.745 28.6C245.71 29.4667 245.537 30.524 245.225 31.772C244.913 32.9853 244.583 34.0427 244.237 34.944C243.786 36.1227 243.37 37.3187 242.989 38.532C242.607 39.7453 242.417 40.7507 242.417 41.548C242.417 42.2413 242.607 42.692 242.989 42.9C243.266 43.004 243.509 43.056 243.717 43.056C244.514 43.056 245.294 42.6747 246.057 41.912C246.819 41.1493 247.53 40.2307 248.189 39.156C248.882 38.0467 249.454 36.9893 249.905 35.984C249.697 35.1867 249.593 34.2333 249.593 33.124C249.593 31.9453 249.731 30.7493 250.009 29.536C250.286 28.3227 250.719 27.3173 251.309 26.52C251.898 25.688 252.661 25.272 253.597 25.272C254.255 25.272 254.585 25.5667 254.585 26.156C254.585 26.2947 254.411 26.884 254.065 27.924C253.753 28.964 253.337 30.1947 252.817 31.616C252.297 33.0373 251.742 34.4067 251.153 35.724C251.014 36.0013 250.893 36.2787 250.789 36.556C250.927 37.1453 251.187 37.6307 251.569 38.012C251.95 38.3587 252.418 38.532 252.973 38.532C253.666 38.532 254.307 38.22 254.897 37.596C255.521 36.9373 256.162 35.8453 256.821 34.32C257.237 34.32 257.445 34.476 257.445 34.788C256.89 36.1747 256.214 37.284 255.417 38.116C254.654 38.948 253.787 39.364 252.817 39.364C251.638 39.364 250.789 38.7573 250.269 37.544C249.679 38.7573 248.986 39.9187 248.189 41.028C247.391 42.1027 246.507 42.9867 245.537 43.68C244.601 44.3733 243.578 44.72 242.469 44.72ZM258.256 44.356C256.973 44.356 256.072 43.992 255.552 43.264C255.032 42.5013 254.772 41.6347 254.772 40.664C254.772 40.144 254.824 39.624 254.928 39.104C255.066 38.5493 255.222 38.0467 255.396 37.596L258.88 28.704C258.984 28.4267 259.036 28.184 259.036 27.976C259.036 27.6293 258.949 27.3347 258.776 27.092C258.602 26.8147 258.481 26.624 258.412 26.52L261.272 26.416C261.792 26.3813 262.156 26.4507 262.364 26.624C262.606 26.7627 262.728 26.936 262.728 27.144C262.728 27.352 262.606 27.7333 262.364 28.288C262.017 29.12 261.549 30.16 260.96 31.408C260.37 32.656 259.781 33.9387 259.192 35.256C258.637 36.5733 258.152 37.804 257.736 38.948C257.354 40.092 257.164 40.976 257.164 41.6C257.164 42.0507 257.268 42.432 257.476 42.744C257.718 43.056 258.117 43.212 258.672 43.212C259.4 43.212 260.11 42.9347 260.804 42.38C261.532 41.7907 262.208 41.0453 262.832 40.144C263.456 39.2427 264.028 38.272 264.548 37.232C265.102 36.192 265.57 35.2213 265.952 34.32C266.368 34.32 266.576 34.476 266.576 34.788C266.229 35.6547 265.778 36.6427 265.224 37.752C264.669 38.8613 264.028 39.9187 263.3 40.924C262.606 41.8947 261.826 42.7093 260.96 43.368C260.128 44.0267 259.226 44.356 258.256 44.356ZM262.884 23.192C262.433 23.192 262.034 23.0187 261.688 22.672C261.376 22.3253 261.22 21.9093 261.22 21.424C261.22 20.8347 261.462 20.3147 261.948 19.864C262.433 19.3787 262.97 19.136 263.56 19.136C264.045 19.136 264.461 19.292 264.808 19.604C265.154 19.916 265.328 20.3147 265.328 20.8C265.328 21.424 265.085 21.9787 264.6 22.464C264.114 22.9493 263.542 23.192 262.884 23.192ZM260.948 44.772C262.196 42.2413 263.392 39.7453 264.536 37.284C265.68 34.788 266.859 32.4133 268.072 30.16C268.766 28.912 269.355 28.0453 269.84 27.56C270.326 27.04 270.967 26.78 271.764 26.78C272.042 26.78 272.336 26.832 272.648 26.936C272.96 27.0053 273.272 27.04 273.584 27.04C273.792 27.04 273.948 27.0227 274.052 26.988C273.567 27.2653 272.926 27.9587 272.128 29.068C271.366 30.1427 270.586 31.3907 269.788 32.812C268.991 34.2333 268.28 35.568 267.656 36.816C268.315 36.0187 269.008 35.2213 269.736 34.424C270.464 33.6267 271.262 32.864 272.128 32.136C272.96 31.408 273.948 30.6627 275.092 29.9C276.271 29.1027 277.415 28.444 278.524 27.924C279.634 27.404 280.518 27.144 281.176 27.144C281.419 27.144 281.592 27.1613 281.696 27.196C281.696 27.196 281.506 27.5427 281.124 28.236C280.743 28.8947 280.258 29.7787 279.668 30.888C279.114 31.9627 278.542 33.124 277.952 34.372C277.363 35.5853 276.826 36.764 276.34 37.908C275.89 39.0173 275.595 39.9533 275.456 40.716C275.352 41.1667 275.3 41.5827 275.3 41.964C275.3 42.5187 275.404 42.8827 275.612 43.056C275.82 43.2293 276.046 43.316 276.288 43.316C276.947 43.316 277.623 43.0213 278.316 42.432C279.01 41.8427 279.668 41.0973 280.292 40.196C280.951 39.26 281.558 38.272 282.112 37.232C282.667 36.192 283.135 35.2213 283.516 34.32C283.932 34.32 284.14 34.476 284.14 34.788C283.759 35.724 283.274 36.764 282.684 37.908C282.13 39.0173 281.488 40.0747 280.76 41.08C280.067 42.0853 279.287 42.9173 278.42 43.576C277.554 44.2347 276.618 44.564 275.612 44.564C274.919 44.564 274.191 44.3213 273.428 43.836C272.7 43.3507 272.336 42.4493 272.336 41.132C272.336 40.7507 272.371 40.352 272.44 39.936C272.51 39.4853 272.631 39 272.804 38.48C273.082 37.7867 273.411 37.0413 273.792 36.244C274.174 35.4467 274.798 34.3547 275.664 32.968C275.907 32.5867 276.046 32.292 276.08 32.084C276.15 31.876 276.184 31.7027 276.184 31.564C276.184 31.148 275.994 30.94 275.612 30.94C275.3 30.94 274.832 31.1133 274.208 31.46C273.619 31.8067 272.874 32.4133 271.972 33.28C271.106 34.112 270.066 35.2907 268.852 36.816C267.674 38.3413 266.304 40.5947 264.744 43.576C264.502 44.0267 264.224 44.2693 263.912 44.304C263.635 44.3387 263.236 44.3733 262.716 44.408C262.37 44.4427 262.04 44.46 261.728 44.46C261.416 44.4947 261.156 44.5987 260.948 44.772Z", fill: "#1B3828" }) }) : /* @__PURE__ */ u.jsx("svg", { width: "285", height: "61", viewBox: "0 0 285 61", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o, children: /* @__PURE__ */ u.jsx("path", { d: "M16.172 49.92C13.0173 49.92 10.2093 49.2787 7.74801 47.996C5.32134 46.748 3.41467 44.8933 2.02801 42.432C0.676005 39.936 5.00679e-06 36.8853 5.00679e-06 33.28C5.00679e-06 31.1307 0.277338 28.9813 0.832005 26.832C1.38667 24.6827 2.13201 22.62 3.06801 20.644C4.03867 18.668 5.11334 16.848 6.29201 15.184C5.77201 13.104 5.51201 10.8507 5.51201 8.424C5.51201 6.58667 5.72001 4.83601 6.13601 3.172C6.27467 2.68667 6.51734 2.444 6.864 2.444C7.14134 2.444 7.26267 2.61734 7.22801 2.964C7.12401 3.65734 7.03734 4.40267 6.96801 5.20001C6.89867 5.96267 6.864 6.88134 6.864 7.956C6.864 9.96667 7.05467 11.8733 7.43601 13.676C7.78267 13.2253 8.12934 12.8093 8.47601 12.428C9.89734 10.868 11.5787 9.41201 13.52 8.06001C15.4613 6.67334 17.6107 5.564 19.968 4.73201C22.36 3.90001 24.8907 3.48401 27.56 3.48401C30.056 3.48401 32.344 3.95201 34.424 4.888C36.504 5.78934 38.168 7.10667 39.416 8.84001C40.6987 10.5387 41.34 12.6013 41.34 15.028C41.34 16.5533 40.924 18.1133 40.092 19.708C39.2947 21.3027 38.1333 22.776 36.608 24.128C35.1173 25.4453 33.2973 26.52 31.148 27.352C29.0333 28.184 26.6587 28.6 24.024 28.6C20.5573 28.6 17.3853 27.8373 14.508 26.312C11.6307 24.7867 9.39467 22.464 7.80001 19.344C6.41334 21.8053 5.39067 24.3013 4.73201 26.832C4.07334 29.3627 3.744 31.772 3.744 34.06C3.744 37.388 4.29867 40.092 5.40801 42.172C6.51734 44.252 8.04267 45.7773 9.98401 46.748C11.96 47.7533 14.2133 48.256 16.744 48.256C21.2507 48.256 25.2027 47.112 28.6 44.824C32.032 42.5707 34.8573 39.0693 37.076 34.32C37.492 34.32 37.7 34.476 37.7 34.788C35.5507 39.9187 32.604 43.7147 28.86 46.176C25.1507 48.672 20.9213 49.92 16.172 49.92ZM10.036 15.86C9.58534 16.484 9.15201 17.1253 8.73601 17.784C9.94934 20.6267 11.804 22.9147 14.3 24.648C16.796 26.3813 19.9333 27.248 23.712 27.248C26.104 27.248 28.236 26.884 30.108 26.156C32.0147 25.428 33.6093 24.4573 34.892 23.244C36.2093 22.0307 37.2147 20.696 37.908 19.24C38.6013 17.7493 38.948 16.2587 38.948 14.768C38.948 12.9307 38.4453 11.3187 37.44 9.932C36.4693 8.54534 35.1347 7.47067 33.436 6.708C31.7373 5.91067 29.8133 5.512 27.664 5.512C25.5147 5.512 23.348 5.96267 21.164 6.86401C19.0147 7.76534 16.9693 8.996 15.028 10.556C13.1213 12.116 11.4573 13.884 10.036 15.86ZM36.0368 44.772C37.4928 41.7907 39.0008 38.6707 40.5608 35.412C42.1555 32.1187 43.7848 28.808 45.4488 25.48C47.1128 22.152 48.7595 18.98 50.3888 15.964C50.9782 14.924 51.5155 14.1093 52.0008 13.52C52.5208 12.9307 53.1968 12.636 54.0288 12.636C54.3408 12.636 54.7048 12.688 55.1208 12.792C55.5368 12.896 55.9355 12.9133 56.3168 12.844C55.8662 13.3293 55.2422 14.1787 54.4448 15.392C53.6822 16.6053 52.8155 18.0613 51.8448 19.76C50.9088 21.4587 49.9035 23.296 48.8288 25.272C47.7888 27.2133 46.7488 29.1893 45.7088 31.2C44.7035 33.176 43.7675 35.0307 42.9008 36.764C43.5942 35.8627 44.3048 35.0133 45.0328 34.216C45.7608 33.4187 46.4715 32.7253 47.1648 32.136C47.9275 31.4427 48.8808 30.7147 50.0248 29.952C51.2035 29.1893 52.3648 28.5307 53.5088 27.976C54.6875 27.4213 55.6235 27.144 56.3168 27.144C56.5595 27.144 56.7328 27.1613 56.8368 27.196C56.8368 27.196 56.6462 27.5427 56.2648 28.236C55.8835 28.9293 55.3982 29.8133 54.8088 30.888C54.2542 31.9627 53.6648 33.124 53.0408 34.372C52.4515 35.62 51.9315 36.816 51.4808 37.96C51.0302 39.0693 50.7355 39.988 50.5968 40.716C50.4928 41.2707 50.4408 41.7387 50.4408 42.12C50.4408 42.6747 50.5448 43.056 50.7528 43.264C50.9608 43.4373 51.1862 43.524 51.4288 43.524C52.0182 43.524 52.6422 43.2293 53.3008 42.64C53.9942 42.016 54.6702 41.236 55.3288 40.3C55.9875 39.364 56.5942 38.376 57.1488 37.336C57.7382 36.2613 58.2062 35.256 58.5528 34.32C58.9688 34.32 59.1768 34.476 59.1768 34.788C58.7955 35.724 58.3102 36.764 57.7208 37.908C57.1662 39.0173 56.5248 40.0747 55.7968 41.08C55.0688 42.0853 54.2715 42.9173 53.4048 43.576C52.5382 44.2347 51.6195 44.564 50.6488 44.564C49.9555 44.564 49.2448 44.3213 48.5168 43.836C47.7888 43.3507 47.4248 42.4667 47.4248 41.184C47.4248 40.8027 47.4595 40.404 47.5288 39.988C47.5982 39.5373 47.7195 39.0347 47.8928 38.48C48.1008 37.7867 48.4475 37.024 48.9328 36.192C49.4182 35.3253 50.0422 34.2507 50.8048 32.968C51.1515 32.3787 51.3248 31.9107 51.3248 31.564C51.3248 31.148 51.1168 30.94 50.7008 30.94C50.3542 30.94 49.8862 31.1133 49.2968 31.46C48.7075 31.8067 47.9622 32.4133 47.0608 33.28C46.1942 34.112 45.1195 35.3253 43.8368 36.92C42.5542 38.5147 41.1848 40.7507 39.7288 43.628C39.4862 44.0787 39.2088 44.3213 38.8968 44.356C38.6195 44.356 38.2382 44.3733 37.7528 44.408C37.4408 44.4427 37.1288 44.46 36.8168 44.46C36.5048 44.4947 36.2448 44.5987 36.0368 44.772ZM62.2936 44.564C61.0109 44.564 59.8496 44.148 58.8096 43.316C57.8042 42.484 57.3016 41.2187 57.3016 39.52C57.3016 38.0987 57.6136 36.5907 58.2376 34.996C58.8962 33.4013 59.7456 31.9107 60.7856 30.524C61.8602 29.1027 63.0389 27.9587 64.3216 27.092C65.6389 26.1907 66.9562 25.74 68.2736 25.74C68.9322 25.74 69.5736 25.9307 70.1976 26.312C70.8216 26.6933 71.1336 27.352 71.1336 28.288C71.1336 29.1547 70.8042 30.108 70.1456 31.148C69.4869 32.188 68.5509 33.1587 67.3376 34.06C66.8176 34.4413 66.1589 34.8053 65.3616 35.152C64.5642 35.4987 63.7669 35.7933 62.9696 36.036C62.1722 36.244 61.5136 36.348 60.9936 36.348C60.8202 36.764 60.6469 37.3187 60.4736 38.012C60.3349 38.7053 60.2656 39.416 60.2656 40.144C60.2656 41.0107 60.4389 41.7907 60.7856 42.484C61.1322 43.1773 61.7736 43.524 62.7096 43.524C63.8536 43.524 64.9109 43.1947 65.8816 42.536C66.8869 41.8773 67.7709 41.0453 68.5336 40.04C69.3309 39.0347 70.0069 38.012 70.5616 36.972C71.1162 35.932 71.5496 35.048 71.8616 34.32C72.2776 34.32 72.4856 34.476 72.4856 34.788C72.0349 35.7587 71.5149 36.816 70.9256 37.96C70.3709 39.104 69.6949 40.1787 68.8976 41.184C68.1349 42.1547 67.1989 42.9693 66.0896 43.628C65.0149 44.252 63.7496 44.564 62.2936 44.564ZM61.3576 35.412C61.8429 35.412 62.6576 35.2387 63.8016 34.892C64.9456 34.5107 65.9856 33.9213 66.9216 33.124C67.8229 32.3267 68.5162 31.46 69.0016 30.524C69.4869 29.5533 69.7296 28.7387 69.7296 28.08C69.7296 27.3173 69.4522 26.936 68.8976 26.936C68.4816 26.936 67.9096 27.2133 67.1816 27.768C66.4536 28.3227 65.5522 29.2587 64.4776 30.576C63.8189 31.408 63.1949 32.3093 62.6056 33.28C62.0162 34.2507 61.6002 34.9613 61.3576 35.412ZM74.2983 44.512C73.0156 44.512 72.0623 44.1307 71.4383 43.368C70.8489 42.5707 70.5543 41.6347 70.5543 40.56C70.5543 39.4507 70.7103 38.3067 71.0223 37.128C71.3343 35.9493 71.6116 34.9613 71.8543 34.164C72.4089 32.2227 73.1023 30.16 73.9343 27.976C74.8009 25.7573 75.7369 23.5907 76.7423 21.476C77.7823 19.3267 78.8049 17.4027 79.8103 15.704C80.6076 14.352 81.4569 13.3467 82.3583 12.688C83.2943 11.9947 84.1089 11.648 84.8023 11.648C85.3569 11.648 85.7903 11.856 86.1023 12.272C86.4489 12.6533 86.6223 13.2427 86.6223 14.04C86.6223 14.5947 86.5183 15.2533 86.3103 16.016C86.1369 16.7787 85.8249 17.6453 85.3743 18.616C84.1609 21.32 82.7049 24.024 81.0063 26.728C79.3423 29.432 77.2276 31.9627 74.6623 34.32C74.2463 35.2907 73.8996 36.3307 73.6223 37.44C73.3449 38.5493 73.2063 39.4507 73.2063 40.144C73.2063 42.2933 73.9343 43.368 75.3903 43.368C76.4996 43.368 77.7303 42.5707 79.0823 40.976C80.4343 39.3467 81.7169 37.128 82.9303 34.32C83.0689 34.32 83.2076 34.3547 83.3463 34.424C83.4849 34.4587 83.5543 34.58 83.5543 34.788C83.1729 35.724 82.6876 36.764 82.0983 37.908C81.5436 39.0173 80.8849 40.0747 80.1223 41.08C79.3943 42.0853 78.5449 42.9173 77.5743 43.576C76.6036 44.2 75.5116 44.512 74.2983 44.512ZM75.0783 32.656C76.3263 31.3733 77.5396 29.9 78.7183 28.236C79.8969 26.5373 80.9889 24.7867 81.9943 22.984C83.0343 21.1467 83.9009 19.4133 84.5943 17.784C84.8369 17.264 85.0276 16.692 85.1663 16.068C85.3396 15.444 85.4263 14.924 85.4263 14.508C85.4263 14.0227 85.3049 13.78 85.0623 13.78C84.9236 13.78 84.7156 13.9187 84.4383 14.196C84.1609 14.4387 83.7969 14.872 83.3463 15.496C82.6876 16.3627 81.9596 17.5413 81.1623 19.032C80.3996 20.5227 79.6196 22.1173 78.8223 23.816C78.0249 25.5147 77.2969 27.1613 76.6383 28.756C75.9796 30.316 75.4596 31.616 75.0783 32.656ZM85.3686 44.512C84.0859 44.512 83.1326 44.1307 82.5086 43.368C81.9192 42.5707 81.6246 41.6347 81.6246 40.56C81.6246 39.4507 81.7806 38.3067 82.0926 37.128C82.4046 35.9493 82.6819 34.9613 82.9246 34.164C83.4792 32.2227 84.1726 30.16 85.0046 27.976C85.8712 25.7573 86.8072 23.5907 87.8126 21.476C88.8526 19.3267 89.8752 17.4027 90.8806 15.704C91.6779 14.352 92.5272 13.3467 93.4286 12.688C94.3646 11.9947 95.1792 11.648 95.8726 11.648C96.4272 11.648 96.8606 11.856 97.1726 12.272C97.5192 12.6533 97.6926 13.2427 97.6926 14.04C97.6926 14.5947 97.5886 15.2533 97.3806 16.016C97.2072 16.7787 96.8952 17.6453 96.4446 18.616C95.2312 21.32 93.7752 24.024 92.0766 26.728C90.4126 29.432 88.2979 31.9627 85.7326 34.32C85.3166 35.2907 84.9699 36.3307 84.6926 37.44C84.4152 38.5493 84.2766 39.4507 84.2766 40.144C84.2766 42.2933 85.0046 43.368 86.4606 43.368C87.5699 43.368 88.8006 42.5707 90.1526 40.976C91.5046 39.3467 92.7872 37.128 94.0006 34.32C94.1392 34.32 94.2779 34.3547 94.4166 34.424C94.5552 34.4587 94.6246 34.58 94.6246 34.788C94.2432 35.724 93.7579 36.764 93.1686 37.908C92.6139 39.0173 91.9552 40.0747 91.1926 41.08C90.4646 42.0853 89.6152 42.9173 88.6446 43.576C87.6739 44.2 86.5819 44.512 85.3686 44.512ZM86.1486 32.656C87.3966 31.3733 88.6099 29.9 89.7886 28.236C90.9672 26.5373 92.0592 24.7867 93.0646 22.984C94.1046 21.1467 94.9712 19.4133 95.6646 17.784C95.9072 17.264 96.0979 16.692 96.2366 16.068C96.4099 15.444 96.4966 14.924 96.4966 14.508C96.4966 14.0227 96.3752 13.78 96.1326 13.78C95.9939 13.78 95.7859 13.9187 95.5086 14.196C95.2312 14.4387 94.8672 14.872 94.4166 15.496C93.7579 16.3627 93.0299 17.5413 92.2326 19.032C91.4699 20.5227 90.6899 22.1173 89.8926 23.816C89.0952 25.5147 88.3672 27.1613 87.7086 28.756C87.0499 30.316 86.5299 31.616 86.1486 32.656ZM86.8189 60.944C85.0162 60.944 83.7335 60.58 82.9709 59.852C82.2082 59.1587 81.8269 58.3267 81.8269 57.356C81.8269 55.8653 82.3815 54.4787 83.4909 53.196C84.5655 51.948 85.9002 50.9427 87.4949 50.18C89.2975 49.348 91.3429 48.672 93.6309 48.152C95.9535 47.632 98.1722 47.06 100.287 46.436C100.946 45.292 101.552 43.992 102.107 42.536C102.662 41.0453 103.164 39.6067 103.615 38.22C104.066 36.7987 104.43 35.6373 104.707 34.736C104.291 35.4987 103.754 36.4347 103.095 37.544C102.471 38.6187 101.76 39.676 100.963 40.716C100.166 41.756 99.2989 42.6227 98.3629 43.316C97.4615 44.0093 96.5082 44.356 95.5029 44.356C95.1215 44.356 94.6535 44.2693 94.0989 44.096C93.5789 43.9227 93.1109 43.6107 92.6949 43.16C92.3135 42.6747 92.1229 41.964 92.1229 41.028C92.1229 40.1267 92.4002 39.1387 92.9549 38.064C93.5095 36.9547 94.0642 35.8627 94.6189 34.788C94.4455 34.788 94.2895 34.7707 94.1509 34.736C94.0469 34.7013 93.9949 34.5627 93.9949 34.32C94.0989 34.112 94.3069 33.6613 94.6189 32.968C94.9309 32.2747 95.2775 31.512 95.6589 30.68C96.0749 29.848 96.4389 29.12 96.7509 28.496C97.1322 27.6987 97.5482 27.144 97.9989 26.832C98.4842 26.52 98.9522 26.364 99.4029 26.364H102.627C102.384 26.572 102.072 26.8147 101.691 27.092C101.344 27.3347 101.015 27.716 100.703 28.236C99.7669 29.8307 98.9522 31.3733 98.2589 32.864C97.5655 34.32 96.8202 35.88 96.0229 37.544C95.6415 38.3413 95.3642 39.0693 95.1909 39.728C95.0175 40.3867 94.9309 40.9587 94.9309 41.444C94.9309 42.588 95.3122 43.16 96.0749 43.16C96.9069 43.16 97.9122 42.484 99.0909 41.132C100.062 39.988 101.032 38.636 102.003 37.076C103.008 35.4813 103.962 33.852 104.863 32.188C105.799 30.4893 106.614 28.9293 107.307 27.508C107.688 26.7453 108.364 26.364 109.335 26.364H112.195C111.19 27.0573 110.41 27.9587 109.855 29.068C109.335 30.1773 108.746 31.5987 108.087 33.332C107.359 35.2387 106.666 37.2147 106.007 39.26C105.348 41.3053 104.62 43.4027 103.823 45.552C105.522 44.9627 106.943 44.2 108.087 43.264C109.231 42.328 110.236 41.132 111.103 39.676C112.004 38.1853 112.906 36.4 113.807 34.32C114.223 34.32 114.431 34.476 114.431 34.788C113.668 36.3827 112.975 37.7867 112.351 39C111.727 40.2133 111.034 41.288 110.271 42.224C109.508 43.1253 108.555 43.9573 107.411 44.72C106.267 45.5173 104.794 46.28 102.991 47.008C102.159 48.4987 101.206 50.0413 100.131 51.636C99.0909 53.2653 97.8949 54.7733 96.5429 56.16C95.2255 57.5813 93.7522 58.7253 92.1229 59.592C90.5282 60.4933 88.7602 60.944 86.8189 60.944ZM85.5709 59.904C86.7149 59.904 87.8935 59.5573 89.1069 58.864C90.3202 58.1707 91.4989 57.2867 92.6429 56.212C93.7869 55.172 94.8269 54.0973 95.7629 52.988C96.7335 51.9133 97.5135 50.96 98.1029 50.128C98.2762 49.8853 98.4669 49.5733 98.6749 49.192C98.8829 48.8107 99.0909 48.4467 99.2989 48.1C97.6002 48.5507 95.7282 49.036 93.6829 49.556C91.6722 50.1107 89.9215 50.7173 88.4309 51.376C86.7669 52.0693 85.4669 53.0573 84.5309 54.34C83.5602 55.6227 83.0749 56.7667 83.0749 57.772C83.0749 58.396 83.2829 58.8987 83.6989 59.28C84.0802 59.696 84.7042 59.904 85.5709 59.904ZM134.869 46.696C131.922 46.696 129.478 46.228 127.537 45.292C125.595 44.3907 124.139 43.1947 123.169 41.704C122.233 40.1787 121.765 38.5667 121.765 36.868C121.765 34.9613 122.337 33.072 123.481 31.2C124.625 29.2933 126.323 27.664 128.577 26.312C130.865 24.9253 133.655 24.0587 136.949 23.712C136.463 23.0533 136.099 22.308 135.857 21.476C135.614 20.6093 135.493 19.7947 135.493 19.032C135.527 17.1947 136.047 15.5827 137.053 14.196C138.058 12.7747 139.341 11.5787 140.901 10.608C142.495 9.63734 144.194 8.90934 145.997 8.424C147.799 7.904 149.498 7.64401 151.093 7.64401C152.063 7.64401 153.051 7.78267 154.057 8.06001C155.062 8.30267 155.911 8.75334 156.605 9.412C157.298 10.0707 157.645 11.0067 157.645 12.22C157.645 13.2253 157.333 14.1267 156.709 14.924C156.085 15.7213 155.322 16.12 154.421 16.12C153.762 16.12 153.19 15.8773 152.705 15.392C152.219 14.9067 151.977 14.352 151.977 13.728C151.977 13 152.202 12.4107 152.653 11.96C153.138 11.4747 153.727 11.232 154.421 11.232C154.733 11.232 155.079 11.336 155.461 11.544C155.877 11.752 156.137 11.96 156.241 12.168C156.275 12.0293 156.293 11.8387 156.293 11.596C156.293 10.66 155.911 10.0013 155.149 9.62C154.386 9.23867 153.571 9.04801 152.705 9.04801C151.318 9.04801 149.706 9.39467 147.869 10.088C146.031 10.7467 144.246 11.8387 142.513 13.364C141.889 13.9187 141.247 14.6467 140.589 15.548C139.93 16.4493 139.375 17.42 138.925 18.46C138.474 19.4653 138.249 20.488 138.249 21.528C138.249 22.3253 138.387 23.0187 138.665 23.608C139.185 23.608 139.774 23.5907 140.433 23.556C141.126 23.4867 141.837 23.452 142.565 23.452C143.466 23.452 144.177 23.6427 144.697 24.024C145.217 24.4053 145.477 24.8387 145.477 25.324C145.477 25.6707 145.269 26 144.853 26.312C144.437 26.624 143.778 26.78 142.877 26.78C141.733 26.78 140.693 26.5373 139.757 26.052C138.855 25.532 138.145 25.012 137.625 24.492C135.337 24.804 133.395 25.6533 131.801 27.04C130.206 28.4267 128.993 30.0733 128.161 31.98C127.329 33.852 126.913 35.724 126.913 37.596C126.913 39.0867 127.19 40.4733 127.745 41.756C128.334 43.0387 129.218 44.0613 130.397 44.824C131.575 45.6213 133.066 46.02 134.869 46.02C136.741 46.02 138.439 45.6733 139.965 44.98C141.525 44.3213 142.859 43.4547 143.969 42.38C145.078 41.3053 145.927 40.1787 146.517 39C147.141 37.7867 147.453 36.66 147.453 35.62C147.453 34.7187 147.123 33.9733 146.465 33.384C145.841 32.76 145.009 32.3093 143.969 32.032C142.929 31.72 141.819 31.564 140.641 31.564C139.427 31.564 138.214 31.7373 137.001 32.084C135.822 32.396 134.817 32.8987 133.985 33.592C133.153 34.2507 132.65 35.1 132.477 36.14C132.477 36.2093 132.459 36.296 132.425 36.4C132.425 36.4693 132.425 36.5387 132.425 36.608C132.425 37.3707 132.702 38.1333 133.257 38.896C133.846 39.624 134.747 40.3 135.961 40.924C136.273 41.0627 136.429 41.3227 136.429 41.704C136.429 42.0853 136.255 42.1893 135.909 42.016C134.002 41.0107 132.598 39.9187 131.697 38.74C130.83 37.5267 130.397 36.3827 130.397 35.308C130.397 33.748 131.229 32.4133 132.893 31.304C134.591 30.16 137.001 29.588 140.121 29.588H149.325C149.879 29.588 150.694 29.4667 151.769 29.224C152.878 28.9813 154.005 28.6347 155.149 28.184C156.293 27.6987 157.263 27.144 158.061 26.52C158.893 25.8613 159.309 25.116 159.309 24.284C159.309 23.8333 159.153 23.348 158.841 22.828C158.771 22.724 158.737 22.6027 158.737 22.464C158.737 22.256 158.823 22.152 158.997 22.152C159.135 22.152 159.257 22.2387 159.361 22.412C159.881 23.1747 160.141 23.9547 160.141 24.752C160.141 25.688 159.794 26.5547 159.101 27.352C158.442 28.1493 157.541 28.86 156.397 29.484C155.253 30.0733 153.97 30.524 152.549 30.836C151.162 31.148 149.741 31.2867 148.285 31.252C148.943 31.8067 149.429 32.4307 149.741 33.124C150.053 33.8173 150.209 34.5453 150.209 35.308C150.209 36.5907 149.827 37.908 149.065 39.26C148.302 40.5773 147.227 41.808 145.841 42.952C144.454 44.0613 142.825 44.9627 140.953 45.656C139.115 46.3493 137.087 46.696 134.869 46.696ZM142.877 25.896C144.021 25.896 144.593 25.6707 144.593 25.22C144.593 25.0467 144.437 24.8733 144.125 24.7C143.847 24.492 143.466 24.3707 142.981 24.336C142.773 24.3013 142.426 24.284 141.941 24.284C141.455 24.284 140.935 24.284 140.381 24.284C139.861 24.284 139.427 24.284 139.081 24.284C139.947 25.3587 141.213 25.896 142.877 25.896ZM225.778 53.976C223.351 53.976 220.994 53.2133 218.706 51.688C216.452 50.1973 214.528 47.7013 212.934 44.2C212.24 42.64 211.668 41.0627 211.218 39.468C210.802 37.8733 210.49 36.3827 210.282 34.996C210.074 33.6093 209.97 32.4653 209.97 31.564C209.97 30.4547 210.091 29.8307 210.334 29.692C210.992 29.7613 212.084 29.484 213.61 28.86C215.17 28.236 217.007 27.3173 219.122 26.104C221.271 24.8907 223.576 23.4347 226.038 21.736C228.534 20.0027 231.03 18.0613 233.526 15.912C236.056 13.7627 238.483 11.44 240.806 8.944C243.128 6.448 245.174 3.83067 246.942 1.09201C247.184 0.710671 247.375 0.433337 247.514 0.260004C247.652 0.0866709 247.791 4.29153e-06 247.93 4.29153e-06C248.103 4.29153e-06 248.259 0.0866709 248.398 0.260004C248.536 0.398671 248.606 0.554671 248.606 0.728004C248.606 1.00534 248.484 1.33467 248.242 1.716C246.578 4.48934 244.602 7.21067 242.314 9.88C240.06 12.5147 237.651 14.9933 235.086 17.316C232.52 19.6387 229.938 21.736 227.338 23.608C224.738 25.48 222.259 27.04 219.902 28.288C217.544 29.536 215.464 30.3853 213.662 30.836C213.558 30.7667 213.506 30.94 213.506 31.356C213.506 31.9453 213.627 32.8987 213.87 34.216C214.112 35.4987 214.476 36.972 214.962 38.636C215.482 40.2653 216.106 41.9293 216.834 43.628C218.151 46.7133 219.694 48.828 221.462 49.972C223.264 51.1507 225.119 51.74 227.026 51.74C228.239 51.74 229.487 51.4973 230.77 51.012C232.052 50.5267 233.231 49.8507 234.306 48.984C235.38 48.152 236.212 47.164 236.802 46.02C237.01 45.6733 237.166 45.5 237.27 45.5C237.512 45.5 237.634 45.6387 237.634 45.916C237.634 46.02 237.599 46.124 237.53 46.228C237.495 46.3667 237.391 46.6267 237.218 47.008C236.732 47.9787 235.918 49.0013 234.774 50.076C233.664 51.1853 232.33 52.104 230.77 52.832C229.244 53.5947 227.58 53.976 225.778 53.976ZM181.63 53.3C179.272 53.3 176.984 52.9707 174.766 52.312C172.582 51.688 170.606 50.752 168.838 49.504C167.104 48.256 165.718 46.7307 164.678 44.928C163.672 43.1253 163.17 41.08 163.17 38.792C163.17 37.128 163.412 35.6547 163.898 34.372C164.418 33.0547 165.042 31.9627 165.77 31.096C166.532 30.2293 167.278 29.5707 168.006 29.12C168.768 28.6693 169.392 28.444 169.878 28.444C170.224 28.444 170.398 28.548 170.398 28.756C170.398 28.9293 170.311 29.068 170.138 29.172C169.34 29.588 168.526 30.1947 167.694 30.992C166.862 31.7893 166.168 32.8293 165.614 34.112C165.059 35.3947 164.782 36.9893 164.782 38.896C164.782 40.976 165.215 42.7613 166.082 44.252C166.983 45.708 168.144 46.904 169.566 47.84C171.022 48.776 172.582 49.452 174.246 49.868C175.91 50.3187 177.504 50.544 179.03 50.544C182.427 50.544 185.599 49.8853 188.546 48.568C191.492 47.2507 194.179 45.5 196.606 43.316C199.067 41.0973 201.234 38.636 203.106 35.932C204.978 33.228 206.52 30.4893 207.734 27.716C208.184 26.7107 208.722 25.5147 209.346 24.128C209.97 22.7067 210.646 21.1987 211.374 19.604C212.102 18.0093 212.812 16.4493 213.506 14.924C214.199 13.3987 214.823 12.0293 215.378 10.816C215.967 9.568 216.435 8.61467 216.782 7.956C214.459 8.23334 211.946 8.49334 209.242 8.736C206.572 8.944 204.024 9.39467 201.598 10.088C198.894 10.8507 196.675 11.96 194.942 13.416C193.243 14.872 191.978 16.4493 191.146 18.148C190.348 19.8467 189.95 21.4413 189.95 22.932C189.95 24.7347 190.4 26.2253 191.302 27.404C192.203 28.548 193.503 29.12 195.202 29.12C196.484 29.12 197.628 28.756 198.634 28.028C199.639 27.2653 200.436 26.2947 201.026 25.116C201.615 23.9027 201.91 22.62 201.91 21.268C201.91 20.7133 201.858 20.2453 201.754 19.864C201.65 19.4827 201.598 19.188 201.598 18.98C201.598 18.7373 201.684 18.616 201.858 18.616C202.1 18.616 202.326 18.824 202.534 19.24C202.88 20.0373 203.054 20.8173 203.054 21.58C203.054 23.2093 202.655 24.6827 201.858 26C201.06 27.2827 200.038 28.3053 198.79 29.068C197.542 29.8307 196.224 30.212 194.838 30.212C193.208 30.212 191.787 29.8307 190.574 29.068C189.395 28.2707 188.476 27.2307 187.818 25.948C187.159 24.6653 186.83 23.2787 186.83 21.788C186.83 20.0893 187.298 18.3733 188.234 16.64C189.17 14.872 190.678 13.2773 192.758 11.856C194.838 10.4 197.576 9.29067 200.974 8.52801C203.816 7.90401 206.711 7.50534 209.658 7.33201C212.604 7.124 215.204 6.916 217.458 6.708C218.671 4.836 219.659 3.65734 220.422 3.172C221.184 2.652 221.878 2.392 222.502 2.392C223.126 2.392 223.611 2.56534 223.958 2.912C224.339 3.25867 224.53 3.67467 224.53 4.16C224.53 4.85334 224.044 5.59867 223.074 6.39601C222.138 7.15867 220.543 7.66134 218.29 7.904C217.18 9.94934 216.158 12.2373 215.222 14.768C214.286 17.264 213.35 19.8813 212.414 22.62C211.478 25.3587 210.455 28.08 209.346 30.784C207.474 35.2907 205.255 39.2427 202.69 42.64C200.124 46.0027 197.108 48.62 193.642 50.492C190.175 52.364 186.171 53.3 181.63 53.3ZM219.278 6.60401C220.144 6.53467 220.976 6.292 221.774 5.87601C222.571 5.42534 222.97 4.94001 222.97 4.42001C222.97 4.07334 222.796 3.9 222.45 3.9C222.138 3.9 221.704 4.108 221.15 4.524C220.595 4.90534 219.971 5.59867 219.278 6.60401ZM231.192 44.564C229.909 44.564 228.748 44.148 227.708 43.316C226.703 42.484 226.2 41.2187 226.2 39.52C226.2 38.0987 226.512 36.5907 227.136 34.996C227.795 33.4013 228.644 31.9107 229.684 30.524C230.759 29.1027 231.937 27.9587 233.22 27.092C234.537 26.1907 235.855 25.74 237.172 25.74C237.831 25.74 238.472 25.9307 239.096 26.312C239.72 26.6933 240.032 27.352 240.032 28.288C240.032 29.1547 239.703 30.108 239.044 31.148C238.385 32.188 237.449 33.1587 236.236 34.06C235.716 34.4413 235.057 34.8053 234.26 35.152C233.463 35.4987 232.665 35.7933 231.868 36.036C231.071 36.244 230.412 36.348 229.892 36.348C229.719 36.764 229.545 37.3187 229.372 38.012C229.233 38.7053 229.164 39.416 229.164 40.144C229.164 41.0107 229.337 41.7907 229.684 42.484C230.031 43.1773 230.672 43.524 231.608 43.524C232.752 43.524 233.809 43.1947 234.78 42.536C235.785 41.8773 236.669 41.0453 237.432 40.04C238.229 39.0347 238.905 38.012 239.46 36.972C240.015 35.932 240.448 35.048 240.76 34.32C241.176 34.32 241.384 34.476 241.384 34.788C240.933 35.7587 240.413 36.816 239.824 37.96C239.269 39.104 238.593 40.1787 237.796 41.184C237.033 42.1547 236.097 42.9693 234.988 43.628C233.913 44.252 232.648 44.564 231.192 44.564ZM230.256 35.412C230.741 35.412 231.556 35.2387 232.7 34.892C233.844 34.5107 234.884 33.9213 235.82 33.124C236.721 32.3267 237.415 31.46 237.9 30.524C238.385 29.5533 238.628 28.7387 238.628 28.08C238.628 27.3173 238.351 26.936 237.796 26.936C237.38 26.936 236.808 27.2133 236.08 27.768C235.352 28.3227 234.451 29.2587 233.376 30.576C232.717 31.408 232.093 32.3093 231.504 33.28C230.915 34.2507 230.499 34.9613 230.256 35.412ZM242.469 44.72C241.394 44.72 240.649 44.4427 240.233 43.888C239.817 43.3333 239.609 42.6227 239.609 41.756C239.609 40.8547 239.765 39.832 240.077 38.688C240.389 37.544 240.805 36.2613 241.325 34.84C240.943 34.84 240.753 34.6667 240.753 34.32C241.03 33.6267 241.325 32.8467 241.637 31.98C241.983 31.0787 242.157 30.0733 242.157 28.964C242.157 28.4093 242.087 27.9413 241.949 27.56C241.81 27.1787 241.602 26.9533 241.325 26.884C241.325 26.884 241.498 26.8493 241.845 26.78C242.226 26.7107 242.625 26.6413 243.041 26.572C243.457 26.5027 243.734 26.468 243.873 26.468C244.081 26.4333 244.271 26.416 244.445 26.416C244.618 26.3813 244.774 26.364 244.913 26.364C245.259 26.364 245.485 26.5027 245.589 26.78C245.727 27.0573 245.779 27.664 245.745 28.6C245.71 29.4667 245.537 30.524 245.225 31.772C244.913 32.9853 244.583 34.0427 244.237 34.944C243.786 36.1227 243.37 37.3187 242.989 38.532C242.607 39.7453 242.417 40.7507 242.417 41.548C242.417 42.2413 242.607 42.692 242.989 42.9C243.266 43.004 243.509 43.056 243.717 43.056C244.514 43.056 245.294 42.6747 246.057 41.912C246.819 41.1493 247.53 40.2307 248.189 39.156C248.882 38.0467 249.454 36.9893 249.905 35.984C249.697 35.1867 249.593 34.2333 249.593 33.124C249.593 31.9453 249.731 30.7493 250.009 29.536C250.286 28.3227 250.719 27.3173 251.309 26.52C251.898 25.688 252.661 25.272 253.597 25.272C254.255 25.272 254.585 25.5667 254.585 26.156C254.585 26.2947 254.411 26.884 254.065 27.924C253.753 28.964 253.337 30.1947 252.817 31.616C252.297 33.0373 251.742 34.4067 251.153 35.724C251.014 36.0013 250.893 36.2787 250.789 36.556C250.927 37.1453 251.187 37.6307 251.569 38.012C251.95 38.3587 252.418 38.532 252.973 38.532C253.666 38.532 254.307 38.22 254.897 37.596C255.521 36.9373 256.162 35.8453 256.821 34.32C257.237 34.32 257.445 34.476 257.445 34.788C256.89 36.1747 256.214 37.284 255.417 38.116C254.654 38.948 253.787 39.364 252.817 39.364C251.638 39.364 250.789 38.7573 250.269 37.544C249.679 38.7573 248.986 39.9187 248.189 41.028C247.391 42.1027 246.507 42.9867 245.537 43.68C244.601 44.3733 243.578 44.72 242.469 44.72ZM258.256 44.356C256.973 44.356 256.072 43.992 255.552 43.264C255.032 42.5013 254.772 41.6347 254.772 40.664C254.772 40.144 254.824 39.624 254.928 39.104C255.066 38.5493 255.222 38.0467 255.396 37.596L258.88 28.704C258.984 28.4267 259.036 28.184 259.036 27.976C259.036 27.6293 258.949 27.3347 258.776 27.092C258.602 26.8147 258.481 26.624 258.412 26.52L261.272 26.416C261.792 26.3813 262.156 26.4507 262.364 26.624C262.606 26.7627 262.728 26.936 262.728 27.144C262.728 27.352 262.606 27.7333 262.364 28.288C262.017 29.12 261.549 30.16 260.96 31.408C260.37 32.656 259.781 33.9387 259.192 35.256C258.637 36.5733 258.152 37.804 257.736 38.948C257.354 40.092 257.164 40.976 257.164 41.6C257.164 42.0507 257.268 42.432 257.476 42.744C257.718 43.056 258.117 43.212 258.672 43.212C259.4 43.212 260.11 42.9347 260.804 42.38C261.532 41.7907 262.208 41.0453 262.832 40.144C263.456 39.2427 264.028 38.272 264.548 37.232C265.102 36.192 265.57 35.2213 265.952 34.32C266.368 34.32 266.576 34.476 266.576 34.788C266.229 35.6547 265.778 36.6427 265.224 37.752C264.669 38.8613 264.028 39.9187 263.3 40.924C262.606 41.8947 261.826 42.7093 260.96 43.368C260.128 44.0267 259.226 44.356 258.256 44.356ZM262.884 23.192C262.433 23.192 262.034 23.0187 261.688 22.672C261.376 22.3253 261.22 21.9093 261.22 21.424C261.22 20.8347 261.462 20.3147 261.948 19.864C262.433 19.3787 262.97 19.136 263.56 19.136C264.045 19.136 264.461 19.292 264.808 19.604C265.154 19.916 265.328 20.3147 265.328 20.8C265.328 21.424 265.085 21.9787 264.6 22.464C264.114 22.9493 263.542 23.192 262.884 23.192ZM260.948 44.772C262.196 42.2413 263.392 39.7453 264.536 37.284C265.68 34.788 266.859 32.4133 268.072 30.16C268.766 28.912 269.355 28.0453 269.84 27.56C270.326 27.04 270.967 26.78 271.764 26.78C272.042 26.78 272.336 26.832 272.648 26.936C272.96 27.0053 273.272 27.04 273.584 27.04C273.792 27.04 273.948 27.0227 274.052 26.988C273.567 27.2653 272.926 27.9587 272.128 29.068C271.366 30.1427 270.586 31.3907 269.788 32.812C268.991 34.2333 268.28 35.568 267.656 36.816C268.315 36.0187 269.008 35.2213 269.736 34.424C270.464 33.6267 271.262 32.864 272.128 32.136C272.96 31.408 273.948 30.6627 275.092 29.9C276.271 29.1027 277.415 28.444 278.524 27.924C279.634 27.404 280.518 27.144 281.176 27.144C281.419 27.144 281.592 27.1613 281.696 27.196C281.696 27.196 281.506 27.5427 281.124 28.236C280.743 28.8947 280.258 29.7787 279.668 30.888C279.114 31.9627 278.542 33.124 277.952 34.372C277.363 35.5853 276.826 36.764 276.34 37.908C275.89 39.0173 275.595 39.9533 275.456 40.716C275.352 41.1667 275.3 41.5827 275.3 41.964C275.3 42.5187 275.404 42.8827 275.612 43.056C275.82 43.2293 276.046 43.316 276.288 43.316C276.947 43.316 277.623 43.0213 278.316 42.432C279.01 41.8427 279.668 41.0973 280.292 40.196C280.951 39.26 281.558 38.272 282.112 37.232C282.667 36.192 283.135 35.2213 283.516 34.32C283.932 34.32 284.14 34.476 284.14 34.788C283.759 35.724 283.274 36.764 282.684 37.908C282.13 39.0173 281.488 40.0747 280.76 41.08C280.067 42.0853 279.287 42.9173 278.42 43.576C277.554 44.2347 276.618 44.564 275.612 44.564C274.919 44.564 274.191 44.3213 273.428 43.836C272.7 43.3507 272.336 42.4493 272.336 41.132C272.336 40.7507 272.371 40.352 272.44 39.936C272.51 39.4853 272.631 39 272.804 38.48C273.082 37.7867 273.411 37.0413 273.792 36.244C274.174 35.4467 274.798 34.3547 275.664 32.968C275.907 32.5867 276.046 32.292 276.08 32.084C276.15 31.876 276.184 31.7027 276.184 31.564C276.184 31.148 275.994 30.94 275.612 30.94C275.3 30.94 274.832 31.1133 274.208 31.46C273.619 31.8067 272.874 32.4133 271.972 33.28C271.106 34.112 270.066 35.2907 268.852 36.816C267.674 38.3413 266.304 40.5947 264.744 43.576C264.502 44.0267 264.224 44.2693 263.912 44.304C263.635 44.3387 263.236 44.3733 262.716 44.408C262.37 44.4427 262.04 44.46 261.728 44.46C261.416 44.4947 261.156 44.5987 260.948 44.772Z", fill: "#FAF7F8" }) });
w2.displayName = "Logo";
const K3 = ({ ...e }) => /* @__PURE__ */ u.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "#58131B", version: "1.1", id: "Capa_1", width: "800px", height: "800px", viewBox: "0 0 378.94 378.94", ...e, children: /* @__PURE__ */ u.jsx("g", { children: /* @__PURE__ */ u.jsx("path", { d: "M348.151,54.514c-19.883-19.884-46.315-30.826-74.435-30.826c-28.124,0-54.559,10.942-74.449,30.826l-9.798,9.8l-9.798-9.8   c-19.884-19.884-46.325-30.826-74.443-30.826c-28.117,0-54.56,10.942-74.442,30.826c-41.049,41.053-41.049,107.848,0,148.885   l147.09,147.091c2.405,2.414,5.399,3.892,8.527,4.461c1.049,0.207,2.104,0.303,3.161,0.303c4.161,0,8.329-1.587,11.498-4.764   l147.09-147.091C389.203,162.362,389.203,95.567,348.151,54.514z M325.155,180.404L189.47,316.091L53.782,180.404   c-28.368-28.364-28.368-74.514,0-102.893c13.741-13.739,32.017-21.296,51.446-21.296c19.431,0,37.702,7.557,51.438,21.296   l21.305,21.312c6.107,6.098,16.897,6.098,23.003,0l21.297-21.312c13.737-13.739,32.009-21.296,51.446-21.296   c19.431,0,37.701,7.557,51.438,21.296C353.526,105.89,353.526,152.039,325.155,180.404z" }) }) }), e4 = k2("font-medium", {
  variants: {
    variant: {
      burgundy: "text-burgundy-950",
      teal: "text-teal-950",
      white: "text-rose-white"
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
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
}), P = t2(
  ({ as: e = "p", variant: o, size: r, className: t, children: s, ...a }, l) => /* @__PURE__ */ u.jsx(
    e,
    {
      ref: l,
      className: O(t, e4({ variant: o, size: r, className: t })),
      ...a,
      children: s
    }
  )
);
P.displayName = "Typography";
const r4 = t2(
  ({ className: e, title: o, text: r, heartIcon: t, icon: s }, a) => /* @__PURE__ */ u.jsx(u.Fragment, { children: t ? /* @__PURE__ */ u.jsxs("div", { className: O(e, "grid grid-cols-[auto_1px_1fr] gap-4 items-start"), ref: a, children: [
    /* @__PURE__ */ u.jsx("div", { className: "flex justify-center mr-4 self-center", children: s }),
    /* @__PURE__ */ u.jsxs("div", { className: "relative flex flex-col items-center h-full", children: [
      /* @__PURE__ */ u.jsx(K3, { className: "w-8 h-8  text-burgundy-950 z-10" }),
      /* @__PURE__ */ u.jsx("div", { className: "bg-burgundy-950 w-[4px] flex-1" })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "mb-12 mx-4", children: [
      /* @__PURE__ */ u.jsx(y2, { color: "teal", size: "h3", children: o }),
      /* @__PURE__ */ u.jsx(P, { variant: "teal", size: "md", children: r })
    ] })
  ] }) : /* @__PURE__ */ u.jsxs("div", { className: O(e, "grid grid-cols-[auto_1px_1fr] gap-4 items-start"), children: [
    /* @__PURE__ */ u.jsx("div", { className: "flex justify-center mr-4 self-center", children: s }),
    /* @__PURE__ */ u.jsx("div", { className: "bg-burgundy-950 w-[3px] h-full" }),
    /* @__PURE__ */ u.jsxs("div", { className: "mb-12 mx-4", children: [
      /* @__PURE__ */ u.jsx(y2, { color: "teal", size: "h3", children: o }),
      /* @__PURE__ */ u.jsx(P, { variant: "teal", size: "md", children: r })
    ] })
  ] }) })
);
r4.displayName = "Timeline";
const t4 = t2(
  ({ color: e, children: o, className: r, ...t }, s) => e === "teal" ? /* @__PURE__ */ u.jsxs("nav", { className: O("text-teal-950 w-full py-8", r), ref: s, ...t, children: [
    /* @__PURE__ */ u.jsx(L2, { href: "/", className: "block w-fit mx-auto mb-8", children: /* @__PURE__ */ u.jsx(w2, { color: "teal" }) }),
    /* @__PURE__ */ u.jsx("div", { className: "grid grid-flow-col auto-cols-max gap-16 justify-center text-center", children: o })
  ] }) : /* @__PURE__ */ u.jsxs("nav", { className: O("text-rose-white w-full py-8", r), ref: s, ...t, children: [
    /* @__PURE__ */ u.jsx(L2, { href: "/", className: "block w-fit mx-auto mb-8", children: /* @__PURE__ */ u.jsx(w2, { color: "white" }) }),
    /* @__PURE__ */ u.jsx("div", { className: "grid grid-flow-col auto-cols-max gap-16 justify-center text-center", children: o })
  ] })
);
t4.displayName = "NavBar";
const o4 = t2(
  ({ weddingDate: e, className: o, ...r }, t) => {
    const s = () => {
      const f = /* @__PURE__ */ new Date(), m = new Date(e), b = f.getTime(), x = m.getTime() - b, k = Math.floor(x / (1e3 * 60 * 60 * 24)), S = Math.floor(x % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)), A = Math.floor(x % (1e3 * 60 * 60) / (1e3 * 60)), M = Math.floor(x % (1e3 * 60) / 1e3);
      return { days: k, hours: S, minutes: A, seconds: M };
    }, [a, l] = r3(s());
    return t3(() => {
      const f = setInterval(() => {
        l(s());
      }, 1e3);
      return () => clearInterval(f);
    }, []), /* @__PURE__ */ u.jsx("div", { className: O("bg-burgundy-950 w-full", o), ref: t, ...r, children: a.days < 0 ? /* @__PURE__ */ u.jsx("div", { className: "mx-auto justify-center text-center py-24", children: /* @__PURE__ */ u.jsx(P, { variant: "white", size: "7xl", children: "WEDDING TIME!" }) }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(P, { variant: "white", size: "7xl", className: "justify-center text-center py-12", children: "Counting down to our wedding day" }),
      /* @__PURE__ */ u.jsxs("div", { className: "mx-auto grid grid-cols-4 gap-6 justify-center text-center", children: [
        /* @__PURE__ */ u.jsx(P, { variant: "white", size: "7xl", children: a.days }),
        /* @__PURE__ */ u.jsx(P, { variant: "white", size: "7xl", children: a.hours }),
        /* @__PURE__ */ u.jsx(P, { variant: "white", size: "7xl", children: a.minutes }),
        /* @__PURE__ */ u.jsx(P, { variant: "white", size: "7xl", children: a.seconds })
      ] }),
      /* @__PURE__ */ u.jsxs("div", { className: "mx-auto grid grid-cols-4 gap-6 justify-center text-center py-12", children: [
        /* @__PURE__ */ u.jsx(P, { variant: "white", size: "7xl", children: "days " }),
        /* @__PURE__ */ u.jsx(P, { variant: "white", size: "7xl", children: "hours " }),
        /* @__PURE__ */ u.jsx(P, { variant: "white", size: "7xl", children: "minutes " }),
        /* @__PURE__ */ u.jsx(P, { variant: "white", size: "7xl", children: "seconds " })
      ] })
    ] }) });
  }
);
o4.displayName = "Countdown";
export {
  q3 as BASE_BUTTON_STYLES,
  r2 as BUTTON_STYLES,
  X3 as Button,
  o4 as Countdown,
  y2 as Heading,
  s4 as LinkExternal,
  L2 as LinkInternal,
  w2 as Logo,
  t4 as NavBar,
  r4 as Timeline,
  P as Typography,
  J3 as buttonStyles,
  Q3 as headingStyles,
  e4 as typographyStyles
};
