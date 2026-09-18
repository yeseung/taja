(function () {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const d of document.querySelectorAll('link[rel="modulepreload"]')) s(d);
    new MutationObserver(d => {
        for (const y of d) if (y.type === "childList") for (const b of y.addedNodes) b.tagName === "LINK" && b.rel === "modulepreload" && s(b)
    }).observe(document, {childList: !0, subtree: !0});

    function f(d) {
        const y = {};
        return d.integrity && (y.integrity = d.integrity), d.referrerPolicy && (y.referrerPolicy = d.referrerPolicy), d.crossOrigin === "use-credentials" ? y.credentials = "include" : d.crossOrigin === "anonymous" ? y.credentials = "omit" : y.credentials = "same-origin", y
    }

    function s(d) {
        if (d.ep) return;
        d.ep = !0;
        const y = f(d);
        fetch(d.href, y)
    }
})();

function lg(c) {
    return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c
}

var Ii = {exports: {}}, Yn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;

function ag() {
    if (Dm) return Yn;
    Dm = 1;
    var c = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");

    function f(s, d, y) {
        var b = null;
        if (y !== void 0 && (b = "" + y), d.key !== void 0 && (b = "" + d.key), "key" in d) {
            y = {};
            for (var N in d) N !== "key" && (y[N] = d[N])
        } else y = d;
        return d = y.ref, {$$typeof: c, type: s, key: b, ref: d !== void 0 ? d : null, props: y}
    }

    return Yn.Fragment = o, Yn.jsx = f, Yn.jsxs = f, Yn
}

var Cm;

function ng() {
    return Cm || (Cm = 1, Ii.exports = ag()), Ii.exports
}

var r = ng(), Pi = {exports: {}}, et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;

function ug() {
    if (Um) return et;
    Um = 1;
    var c = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), f = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"),
        b = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"),
        g = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), z = Symbol.for("react.activity"),
        D = Symbol.iterator;

    function H(h) {
        return h === null || typeof h != "object" ? null : (h = D && h[D] || h["@@iterator"], typeof h == "function" ? h : null)
    }

    var R = {
        isMounted             : function () {
            return !1
        }, enqueueForceUpdate : function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState    : function () {
        }
    }, q  = Object.assign, L = {};

    function I(h, C, K) {
        this.props = h, this.context = C, this.refs = L, this.updater = K || R
    }

    I.prototype.isReactComponent = {}, I.prototype.setState = function (h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState")
    }, I.prototype.forceUpdate = function (h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate")
    };

    function W() {
    }

    W.prototype = I.prototype;

    function ut(h, C, K) {
        this.props = h, this.context = C, this.refs = L, this.updater = K || R
    }

    var B = ut.prototype = new W;
    B.constructor = ut, q(B, I.prototype), B.isPureReactComponent = !0;
    var ct = Array.isArray;

    function P() {
    }

    var X = {H: null, A: null, T: null, S: null}, Ot = Object.prototype.hasOwnProperty;

    function At(h, C, K) {
        var G = K.ref;
        return {$$typeof: c, type: h, key: C, ref: G !== void 0 ? G : null, props: K}
    }

    function tt(h, C) {
        return At(h.type, C, h.props)
    }

    function Zt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === c
    }

    function Ct(h) {
        var C = {"=": "=0", ":": "=2"};
        return "$" + h.replace(/[=:]/g, function (K) {
            return C[K]
        })
    }

    var Pt = /\/+/g;

    function fe(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? Ct("" + h.key) : C.toString(36)
    }

    function Rt(h) {
        switch (h.status) {
            case"fulfilled":
                return h.value;
            case"rejected":
                throw h.reason;
            default:
                switch (typeof h.status == "string" ? h.then(P, P) : (h.status = "pending", h.then(function (C) {
                    h.status === "pending" && (h.status = "fulfilled", h.value = C)
                }, function (C) {
                    h.status === "pending" && (h.status = "rejected", h.reason = C)
                })), h.status) {
                    case"fulfilled":
                        return h.value;
                    case"rejected":
                        throw h.reason
                }
        }
        throw h
    }

    function _(h, C, K, G, lt) {
        var ot = typeof h;
        (ot === "undefined" || ot === "boolean") && (h = null);
        var vt = !1;
        if (h === null) vt = !0; else switch (ot) {
            case"bigint":
            case"string":
            case"number":
                vt = !0;
                break;
            case"object":
                switch (h.$$typeof) {
                    case c:
                    case o:
                        vt = !0;
                        break;
                    case A:
                        return vt = h._init, _(vt(h._payload), C, K, G, lt)
                }
        }
        if (vt) return lt = lt(h), vt = G === "" ? "." + fe(h, 0) : G, ct(lt) ? (K = "", vt != null && (K = vt.replace(Pt, "$&/") + "/"), _(lt, C, K, "", function (Ja) {
            return Ja
        })) : lt != null && (Zt(lt) && (lt = tt(lt, K + (lt.key == null || h && h.key === lt.key ? "" : ("" + lt.key).replace(Pt, "$&/") + "/") + vt)), C.push(lt)), 1;
        vt = 0;
        var le = G === "" ? "." : G + ":";
        if (ct(h)) for (var Ut = 0; Ut < h.length; Ut++) G = h[Ut], ot = le + fe(G, Ut), vt += _(G, C, K, ot, lt); else if (Ut = H(h), typeof Ut == "function") for (h = Ut.call(h), Ut = 0; !(G = h.next()).done;) G = G.value, ot = le + fe(G, Ut++), vt += _(G, C, K, ot, lt); else if (ot === "object") {
            if (typeof h.then == "function") return _(Rt(h), C, K, G, lt);
            throw C = String(h), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.")
        }
        return vt
    }

    function k(h, C, K) {
        if (h == null) return h;
        var G = [], lt = 0;
        return _(h, G, "", "", function (ot) {
            return C.call(K, ot, lt++)
        }), G
    }

    function $(h) {
        if (h._status === -1) {
            var C = h._result;
            C = C(), C.then(function (K) {
                (h._status === 0 || h._status === -1) && (h._status = 1, h._result = K)
            }, function (K) {
                (h._status === 0 || h._status === -1) && (h._status = 2, h._result = K)
            }), h._status === -1 && (h._status = 0, h._result = C)
        }
        if (h._status === 1) return h._result.default;
        throw h._result
    }

    var mt = typeof reportError == "function" ? reportError : function (h) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var C = new window.ErrorEvent("error", {
                bubbles   : !0,
                cancelable: !0,
                message   : typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
                error     : h
            });
            if (!window.dispatchEvent(C)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", h);
            return
        }
        console.error(h)
    }, gt  = {
        map       : k, forEach: function (h, C, K) {
            k(h, function () {
                C.apply(this, arguments)
            }, K)
        }, count  : function (h) {
            var C = 0;
            return k(h, function () {
                C++
            }), C
        }, toArray: function (h) {
            return k(h, function (C) {
                return C
            }) || []
        }, only   : function (h) {
            if (!Zt(h)) throw Error("React.Children.only expected to receive a single React element child.");
            return h
        }
    };
    return et.Activity = z, et.Children = gt, et.Component = I, et.Fragment = f, et.Profiler = d, et.PureComponent = ut, et.StrictMode = s, et.Suspense = S, et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, et.__COMPILER_RUNTIME = {
        __proto__: null,
        c        : function (h) {
            return X.H.useMemoCache(h)
        }
    }, et.cache = function (h) {
        return function () {
            return h.apply(null, arguments)
        }
    }, et.cacheSignal = function () {
        return null
    }, et.cloneElement = function (h, C, K) {
        if (h == null) throw Error("The argument must be a React element, but you passed " + h + ".");
        var G = q({}, h.props), lt = h.key;
        if (C != null) for (ot in C.key !== void 0 && (lt = "" + C.key), C) !Ot.call(C, ot) || ot === "key" || ot === "__self" || ot === "__source" || ot === "ref" && C.ref === void 0 || (G[ot] = C[ot]);
        var ot = arguments.length - 2;
        if (ot === 1) G.children = K; else if (1 < ot) {
            for (var vt = Array(ot), le = 0; le < ot; le++) vt[le] = arguments[le + 2];
            G.children = vt
        }
        return At(h.type, lt, G)
    }, et.createContext = function (h) {
        return h = {
            $$typeof      : b,
            _currentValue : h,
            _currentValue2: h,
            _threadCount  : 0,
            Provider      : null,
            Consumer      : null
        }, h.Provider = h, h.Consumer = {$$typeof: y, _context: h}, h
    }, et.createElement = function (h, C, K) {
        var G, lt = {}, ot = null;
        if (C != null) for (G in C.key !== void 0 && (ot = "" + C.key), C) Ot.call(C, G) && G !== "key" && G !== "__self" && G !== "__source" && (lt[G] = C[G]);
        var vt = arguments.length - 2;
        if (vt === 1) lt.children = K; else if (1 < vt) {
            for (var le = Array(vt), Ut = 0; Ut < vt; Ut++) le[Ut] = arguments[Ut + 2];
            lt.children = le
        }
        if (h && h.defaultProps) for (G in vt = h.defaultProps, vt) lt[G] === void 0 && (lt[G] = vt[G]);
        return At(h, ot, lt)
    }, et.createRef = function () {
        return {current: null}
    }, et.forwardRef = function (h) {
        return {$$typeof: N, render: h}
    }, et.isValidElement = Zt, et.lazy = function (h) {
        return {$$typeof: A, _payload: {_status: -1, _result: h}, _init: $}
    }, et.memo = function (h, C) {
        return {$$typeof: g, type: h, compare: C === void 0 ? null : C}
    }, et.startTransition = function (h) {
        var C = X.T, K = {};
        X.T = K;
        try {
            var G = h(), lt = X.S;
            lt !== null && lt(K, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(P, mt)
        } catch (ot) {
            mt(ot)
        } finally {
            C !== null && K.types !== null && (C.types = K.types), X.T = C
        }
    }, et.unstable_useCacheRefresh = function () {
        return X.H.useCacheRefresh()
    }, et.use = function (h) {
        return X.H.use(h)
    }, et.useActionState = function (h, C, K) {
        return X.H.useActionState(h, C, K)
    }, et.useCallback = function (h, C) {
        return X.H.useCallback(h, C)
    }, et.useContext = function (h) {
        return X.H.useContext(h)
    }, et.useDebugValue = function () {
    }, et.useDeferredValue = function (h, C) {
        return X.H.useDeferredValue(h, C)
    }, et.useEffect = function (h, C) {
        return X.H.useEffect(h, C)
    }, et.useEffectEvent = function (h) {
        return X.H.useEffectEvent(h)
    }, et.useId = function () {
        return X.H.useId()
    }, et.useImperativeHandle = function (h, C, K) {
        return X.H.useImperativeHandle(h, C, K)
    }, et.useInsertionEffect = function (h, C) {
        return X.H.useInsertionEffect(h, C)
    }, et.useLayoutEffect = function (h, C) {
        return X.H.useLayoutEffect(h, C)
    }, et.useMemo = function (h, C) {
        return X.H.useMemo(h, C)
    }, et.useOptimistic = function (h, C) {
        return X.H.useOptimistic(h, C)
    }, et.useReducer = function (h, C, K) {
        return X.H.useReducer(h, C, K)
    }, et.useRef = function (h) {
        return X.H.useRef(h)
    }, et.useState = function (h) {
        return X.H.useState(h)
    }, et.useSyncExternalStore = function (h, C, K) {
        return X.H.useSyncExternalStore(h, C, K)
    }, et.useTransition = function () {
        return X.H.useTransition()
    }, et.version = "19.2.7", et
}

var Hm;

function ps() {
    return Hm || (Hm = 1, Pi.exports = ug()), Pi.exports
}

var J = ps();
const hc = lg(J);
var ts = {exports: {}}, Gn = {}, es = {exports: {}}, ls = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;

function cg() {
    return qm || (qm = 1, (function (c) {
        function o(_, k) {
            var $ = _.length;
            _.push(k);
            t:for (; 0 < $;) {
                var mt = $ - 1 >>> 1, gt = _[mt];
                if (0 < d(gt, k)) _[mt] = k, _[$] = gt, $ = mt; else break t
            }
        }

        function f(_) {
            return _.length === 0 ? null : _[0]
        }

        function s(_) {
            if (_.length === 0) return null;
            var k = _[0], $ = _.pop();
            if ($ !== k) {
                _[0] = $;
                t:for (var mt = 0, gt = _.length, h = gt >>> 1; mt < h;) {
                    var C = 2 * (mt + 1) - 1, K = _[C], G = C + 1, lt = _[G];
                    if (0 > d(K, $)) G < gt && 0 > d(lt, K) ? (_[mt] = lt, _[G] = $, mt = G) : (_[mt] = K, _[C] = $, mt = C); else if (G < gt && 0 > d(lt, $)) _[mt] = lt, _[G] = $, mt = G; else break t
                }
            }
            return k
        }

        function d(_, k) {
            var $ = _.sortIndex - k.sortIndex;
            return $ !== 0 ? $ : _.id - k.id
        }

        if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var y = performance;
            c.unstable_now = function () {
                return y.now()
            }
        } else {
            var b = Date, N = b.now();
            c.unstable_now = function () {
                return b.now() - N
            }
        }
        var S = [], g = [], A = 1, z = null, D = 3, H = !1, R = !1, q = !1, L = !1,
            I = typeof setTimeout == "function" ? setTimeout : null,
            W = typeof clearTimeout == "function" ? clearTimeout : null,
            ut = typeof setImmediate < "u" ? setImmediate : null;

        function B(_) {
            for (var k = f(g); k !== null;) {
                if (k.callback === null) s(g); else if (k.startTime <= _) s(g), k.sortIndex = k.expirationTime, o(S, k); else break;
                k = f(g)
            }
        }

        function ct(_) {
            if (q = !1, B(_), !R) if (f(S) !== null) R = !0, P || (P = !0, Ct()); else {
                var k = f(g);
                k !== null && Rt(ct, k.startTime - _)
            }
        }

        var P = !1, X = -1, Ot = 5, At = -1;

        function tt() {
            return L ? !0 : !(c.unstable_now() - At < Ot)
        }

        function Zt() {
            if (L = !1, P) {
                var _ = c.unstable_now();
                At = _;
                var k = !0;
                try {
                    t:{
                        R = !1, q && (q = !1, W(X), X = -1), H = !0;
                        var $ = D;
                        try {
                            e:{
                                for (B(_), z = f(S); z !== null && !(z.expirationTime > _ && tt());) {
                                    var mt = z.callback;
                                    if (typeof mt == "function") {
                                        z.callback = null, D = z.priorityLevel;
                                        var gt = mt(z.expirationTime <= _);
                                        if (_ = c.unstable_now(), typeof gt == "function") {
                                            z.callback = gt, B(_), k = !0;
                                            break e
                                        }
                                        z === f(S) && s(S), B(_)
                                    } else s(S);
                                    z = f(S)
                                }
                                if (z !== null) k = !0; else {
                                    var h = f(g);
                                    h !== null && Rt(ct, h.startTime - _), k = !1
                                }
                            }
                            break t
                        } finally {
                            z = null, D = $, H = !1
                        }
                        k = void 0
                    }
                } finally {
                    k ? Ct() : P = !1
                }
            }
        }

        var Ct;
        if (typeof ut == "function") Ct = function () {
            ut(Zt)
        }; else if (typeof MessageChannel < "u") {
            var Pt = new MessageChannel, fe = Pt.port2;
            Pt.port1.onmessage = Zt, Ct = function () {
                fe.postMessage(null)
            }
        } else Ct = function () {
            I(Zt, 0)
        };

        function Rt(_, k) {
            X = I(function () {
                _(c.unstable_now())
            }, k)
        }

        c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function (_) {
            _.callback = null
        }, c.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ot = 0 < _ ? Math.floor(1e3 / _) : 5
        }, c.unstable_getCurrentPriorityLevel = function () {
            return D
        }, c.unstable_next = function (_) {
            switch (D) {
                case 1:
                case 2:
                case 3:
                    var k = 3;
                    break;
                default:
                    k = D
            }
            var $ = D;
            D = k;
            try {
                return _()
            } finally {
                D = $
            }
        }, c.unstable_requestPaint = function () {
            L = !0
        }, c.unstable_runWithPriority = function (_, k) {
            switch (_) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    _ = 3
            }
            var $ = D;
            D = _;
            try {
                return k()
            } finally {
                D = $
            }
        }, c.unstable_scheduleCallback = function (_, k, $) {
            var mt = c.unstable_now();
            switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? mt + $ : mt) : $ = mt, _) {
                case 1:
                    var gt = -1;
                    break;
                case 2:
                    gt = 250;
                    break;
                case 5:
                    gt = 1073741823;
                    break;
                case 4:
                    gt = 1e4;
                    break;
                default:
                    gt = 5e3
            }
            return gt = $ + gt, _ = {
                id            : A++,
                callback      : k,
                priorityLevel : _,
                startTime     : $,
                expirationTime: gt,
                sortIndex     : -1
            }, $ > mt ? (_.sortIndex = $, o(g, _), f(S) === null && _ === f(g) && (q ? (W(X), X = -1) : q = !0, Rt(ct, $ - mt))) : (_.sortIndex = gt, o(S, _), R || H || (R = !0, P || (P = !0, Ct()))), _
        }, c.unstable_shouldYield = tt, c.unstable_wrapCallback = function (_) {
            var k = D;
            return function () {
                var $ = D;
                D = k;
                try {
                    return _.apply(this, arguments)
                } finally {
                    D = $
                }
            }
        }
    })(ls)), ls
}

var Rm;

function og() {
    return Rm || (Rm = 1, es.exports = cg()), es.exports
}

var as = {exports: {}}, te = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;

function ig() {
    if (Lm) return te;
    Lm = 1;
    var c = ps();

    function o(S) {
        var g = "https://react.dev/errors/" + S;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var A = 2; A < arguments.length; A++) g += "&args[]=" + encodeURIComponent(arguments[A])
        }
        return "Minified React error #" + S + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function f() {
    }

    var s = {
        d   : {
            f, r: function () {
                throw Error(o(522))
            }, D: f, C: f, L: f, m: f, X: f, S: f, M: f
        }, p: 0, findDOMNode: null
    }, d  = Symbol.for("react.portal");

    function y(S, g, A) {
        var z = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {$$typeof: d, key: z == null ? null : "" + z, children: S, containerInfo: g, implementation: A}
    }

    var b = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function N(S, g) {
        if (S === "font") return "";
        if (typeof g == "string") return g === "use-credentials" ? g : ""
    }

    return te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, te.createPortal = function (S, g) {
        var A = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(o(299));
        return y(S, g, null, A)
    }, te.flushSync = function (S) {
        var g = b.T, A = s.p;
        try {
            if (b.T = null, s.p = 2, S) return S()
        } finally {
            b.T = g, s.p = A, s.d.f()
        }
    }, te.preconnect = function (S, g) {
        typeof S == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(S, g))
    }, te.prefetchDNS = function (S) {
        typeof S == "string" && s.d.D(S)
    }, te.preinit = function (S, g) {
        if (typeof S == "string" && g && typeof g.as == "string") {
            var A = g.as, z = N(A, g.crossOrigin), D = typeof g.integrity == "string" ? g.integrity : void 0,
                H = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            A === "style" ? s.d.S(S, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin  : z,
                integrity    : D,
                fetchPriority: H
            }) : A === "script" && s.d.X(S, {
                crossOrigin  : z,
                integrity    : D,
                fetchPriority: H,
                nonce        : typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }, te.preinitModule = function (S, g) {
        if (typeof S == "string") if (typeof g == "object" && g !== null) {
            if (g.as == null || g.as === "script") {
                var A = N(g.as, g.crossOrigin);
                s.d.M(S, {
                    crossOrigin: A,
                    integrity  : typeof g.integrity == "string" ? g.integrity : void 0,
                    nonce      : typeof g.nonce == "string" ? g.nonce : void 0
                })
            }
        } else g == null && s.d.M(S)
    }, te.preload = function (S, g) {
        if (typeof S == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var A = g.as, z = N(A, g.crossOrigin);
            s.d.L(S, A, {
                crossOrigin   : z,
                integrity     : typeof g.integrity == "string" ? g.integrity : void 0,
                nonce         : typeof g.nonce == "string" ? g.nonce : void 0,
                type          : typeof g.type == "string" ? g.type : void 0,
                fetchPriority : typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet   : typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes    : typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media         : typeof g.media == "string" ? g.media : void 0
            })
        }
    }, te.preloadModule = function (S, g) {
        if (typeof S == "string") if (g) {
            var A = N(g.as, g.crossOrigin);
            s.d.m(S, {
                as         : typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                crossOrigin: A,
                integrity  : typeof g.integrity == "string" ? g.integrity : void 0
            })
        } else s.d.m(S)
    }, te.requestFormReset = function (S) {
        s.d.r(S)
    }, te.unstable_batchedUpdates = function (S, g) {
        return S(g)
    }, te.useFormState = function (S, g, A) {
        return b.H.useFormState(S, g, A)
    }, te.useFormStatus = function () {
        return b.H.useHostTransitionStatus()
    }, te.version = "19.2.7", te
}

var Bm;

function sg() {
    if (Bm) return as.exports;
    Bm = 1;

    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
        } catch (o) {
            console.error(o)
        }
    }

    return c(), as.exports = ig(), as.exports
}

/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;

function rg() {
    if (Km) return Gn;
    Km = 1;
    var c = og(), o = ps(), f = sg();

    function s(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function d(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }

    function y(t) {
        var e = t, l = t;
        if (t.alternate) for (; e.return;) e = e.return; else {
            t = e;
            do e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return; while (t)
        }
        return e.tag === 3 ? l : null
    }

    function b(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function N(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
        }
        return null
    }

    function S(t) {
        if (y(t) !== t) throw Error(s(188))
    }

    function g(t) {
        var e = t.alternate;
        if (!e) {
            if (e = y(t), e === null) throw Error(s(188));
            return e !== t ? null : t
        }
        for (var l = t, a = e; ;) {
            var n = l.return;
            if (n === null) break;
            var u = n.alternate;
            if (u === null) {
                if (a = n.return, a !== null) {
                    l = a;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u;) {
                    if (u === l) return S(n), t;
                    if (u === a) return S(n), e;
                    u = u.sibling
                }
                throw Error(s(188))
            }
            if (l.return !== a.return) l = n, a = u; else {
                for (var i = !1, m = n.child; m;) {
                    if (m === l) {
                        i = !0, l = n, a = u;
                        break
                    }
                    if (m === a) {
                        i = !0, a = n, l = u;
                        break
                    }
                    m = m.sibling
                }
                if (!i) {
                    for (m = u.child; m;) {
                        if (m === l) {
                            i = !0, l = u, a = n;
                            break
                        }
                        if (m === a) {
                            i = !0, a = u, l = n;
                            break
                        }
                        m = m.sibling
                    }
                    if (!i) throw Error(s(189))
                }
            }
            if (l.alternate !== a) throw Error(s(190))
        }
        if (l.tag !== 3) throw Error(s(188));
        return l.stateNode.current === l ? t : e
    }

    function A(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null;) {
            if (e = A(t), e !== null) return e;
            t = t.sibling
        }
        return null
    }

    var z = Object.assign, D = Symbol.for("react.element"), H = Symbol.for("react.transitional.element"),
        R = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"),
        I = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), ut = Symbol.for("react.context"),
        B = Symbol.for("react.forward_ref"), ct = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"),
        X = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), At = Symbol.for("react.activity"),
        tt = Symbol.for("react.memo_cache_sentinel"), Zt = Symbol.iterator;

    function Ct(t) {
        return t === null || typeof t != "object" ? null : (t = Zt && t[Zt] || t["@@iterator"], typeof t == "function" ? t : null)
    }

    var Pt = Symbol.for("react.client.reference");

    function fe(t) {
        if (t == null) return null;
        if (typeof t == "function") return t.$$typeof === Pt ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case q:
                return "Fragment";
            case I:
                return "Profiler";
            case L:
                return "StrictMode";
            case ct:
                return "Suspense";
            case P:
                return "SuspenseList";
            case At:
                return "Activity"
        }
        if (typeof t == "object") switch (t.$$typeof) {
            case R:
                return "Portal";
            case ut:
                return t.displayName || "Context";
            case W:
                return (t._context.displayName || "Context") + ".Consumer";
            case B:
                var e = t.render;
                return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case X:
                return e = t.displayName || null, e !== null ? e : fe(t.type) || "Memo";
            case Ot:
                e = t._payload, t = t._init;
                try {
                    return fe(t(e))
                } catch {
                }
        }
        return null
    }

    var Rt = Array.isArray, _ = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        k = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        $ = {pending: !1, data: null, method: null, action: null}, mt = [], gt = -1;

    function h(t) {
        return {current: t}
    }

    function C(t) {
        0 > gt || (t.current = mt[gt], mt[gt] = null, gt--)
    }

    function K(t, e) {
        gt++, mt[gt] = t.current, t.current = e
    }

    var G = h(null), lt = h(null), ot = h(null), vt = h(null);

    function le(t, e) {
        switch (K(ot, e), K(lt, t), K(G, null), e.nodeType) {
            case 9:
            case 11:
                t = (t = e.documentElement) && (t = t.namespaceURI) ? lm(t) : 0;
                break;
            default:
                if (t = e.tagName, e = e.namespaceURI) e = lm(e), t = am(e, t); else switch (t) {
                    case"svg":
                        t = 1;
                        break;
                    case"math":
                        t = 2;
                        break;
                    default:
                        t = 0
                }
        }
        C(G), K(G, t)
    }

    function Ut() {
        C(G), C(lt), C(ot)
    }

    function Ja(t) {
        t.memoizedState !== null && K(vt, t);
        var e = G.current, l = am(e, t.type);
        e !== l && (K(lt, t), K(G, l))
    }

    function Fn(t) {
        lt.current === t && (C(G), C(lt)), vt.current === t && (C(vt), Rn._currentValue = $)
    }

    var Dc, ks;

    function Cl(t) {
        if (Dc === void 0) try {
            throw Error()
        } catch (l) {
            var e = l.stack.trim().match(/\n( *(at )?)/);
            Dc = e && e[1] || "", ks = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Dc + t + ks
    }

    var Cc = !1;

    function Uc(t, e) {
        if (!t || Cc) return "";
        Cc = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (e) {
                            var U = function () {
                                throw Error()
                            };
                            if (Object.defineProperty(U.prototype, "props", {
                                set: function () {
                                    throw Error()
                                }
                            }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(U, [])
                                } catch (M) {
                                    var E = M
                                }
                                Reflect.construct(t, [], U)
                            } else {
                                try {
                                    U.call()
                                } catch (M) {
                                    E = M
                                }
                                t.call(U.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (M) {
                                E = M
                            }
                            (U = t()) && typeof U.catch == "function" && U.catch(function () {
                            })
                        }
                    } catch (M) {
                        if (M && E && typeof M.stack == "string") return [M.stack, E.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {value: "DetermineComponentFrameRoot"});
            var u = a.DetermineComponentFrameRoot(), i = u[0], m = u[1];
            if (i && m) {
                var x = i.split(`
`), T = m.split(`
`);
                for (n = a = 0; a < x.length && !x[a].includes("DetermineComponentFrameRoot");) a++;
                for (; n < T.length && !T[n].includes("DetermineComponentFrameRoot");) n++;
                if (a === x.length || n === T.length) for (a = x.length - 1, n = T.length - 1; 1 <= a && 0 <= n && x[a] !== T[n];) n--;
                for (; 1 <= a && 0 <= n; a--, n--) if (x[a] !== T[n]) {
                    if (a !== 1 || n !== 1) do if (a--, n--, 0 > n || x[a] !== T[n]) {
                        var O = `
` + x[a].replace(" at new ", " at ");
                        return t.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", t.displayName)), O
                    } while (1 <= a && 0 <= n);
                    break
                }
            }
        } finally {
            Cc = !1, Error.prepareStackTrace = l
        }
        return (l = t ? t.displayName || t.name : "") ? Cl(l) : ""
    }

    function Dy(t, e) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return Cl(t.type);
            case 16:
                return Cl("Lazy");
            case 13:
                return t.child !== e && e !== null ? Cl("Suspense Fallback") : Cl("Suspense");
            case 19:
                return Cl("SuspenseList");
            case 0:
            case 15:
                return Uc(t.type, !1);
            case 11:
                return Uc(t.type.render, !1);
            case 1:
                return Uc(t.type, !0);
            case 31:
                return Cl("Activity");
            default:
                return ""
        }
    }

    function ws(t) {
        try {
            var e = "", l = null;
            do e += Dy(t, l), l = t, t = t.return; while (t);
            return e
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }

    var Hc = Object.prototype.hasOwnProperty, qc = c.unstable_scheduleCallback, Rc = c.unstable_cancelCallback,
        Cy = c.unstable_shouldYield, Uy = c.unstable_requestPaint, de = c.unstable_now,
        Hy = c.unstable_getCurrentPriorityLevel, Ds = c.unstable_ImmediatePriority,
        Cs = c.unstable_UserBlockingPriority, In = c.unstable_NormalPriority, qy = c.unstable_LowPriority,
        Us = c.unstable_IdlePriority, Ry = c.log, Ly = c.unstable_setDisableYieldValue, $a = null, me = null;

    function cl(t) {
        if (typeof Ry == "function" && Ly(t), me && typeof me.setStrictMode == "function") try {
            me.setStrictMode($a, t)
        } catch {
        }
    }

    var ye = Math.clz32 ? Math.clz32 : Yy, By = Math.log, Ky = Math.LN2;

    function Yy(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (By(t) / Ky | 0) | 0
    }

    var Pn = 256, tu = 262144, eu = 4194304;

    function Ul(t) {
        var e = t & 42;
        if (e !== 0) return e;
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return t & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t
        }
    }

    function lu(t, e, l) {
        var a = t.pendingLanes;
        if (a === 0) return 0;
        var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
        t = t.warmLanes;
        var m = a & 134217727;
        return m !== 0 ? (a = m & ~u, a !== 0 ? n = Ul(a) : (i &= m, i !== 0 ? n = Ul(i) : l || (l = m & ~t, l !== 0 && (n = Ul(l))))) : (m = a & ~u, m !== 0 ? n = Ul(m) : i !== 0 ? n = Ul(i) : l || (l = a & ~t, l !== 0 && (n = Ul(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n
    }

    function Wa(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }

    function Gy(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return e + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Hs() {
        var t = eu;
        return eu <<= 1, (eu & 62914560) === 0 && (eu = 4194304), t
    }

    function Lc(t) {
        for (var e = [], l = 0; 31 > l; l++) e.push(t);
        return e
    }

    function Fa(t, e) {
        t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }

    function Qy(t, e, l, a, n, u) {
        var i = t.pendingLanes;
        t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
        var m = t.entanglements, x = t.expirationTimes, T = t.hiddenUpdates;
        for (l = i & ~l; 0 < l;) {
            var O = 31 - ye(l), U = 1 << O;
            m[O] = 0, x[O] = -1;
            var E = T[O];
            if (E !== null) for (T[O] = null, O = 0; O < E.length; O++) {
                var M = E[O];
                M !== null && (M.lane &= -536870913)
            }
            l &= ~U
        }
        a !== 0 && qs(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e))
    }

    function qs(t, e, l) {
        t.pendingLanes |= e, t.suspendedLanes &= ~e;
        var a = 31 - ye(e);
        t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930
    }

    function Rs(t, e) {
        var l = t.entangledLanes |= e;
        for (t = t.entanglements; l;) {
            var a = 31 - ye(l), n = 1 << a;
            n & e | t[a] & e && (t[a] |= e), l &= ~n
        }
    }

    function Ls(t, e) {
        var l = e & -e;
        return l = (l & 42) !== 0 ? 1 : Bc(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    }

    function Bc(t) {
        switch (t) {
            case 2:
                t = 1;
                break;
            case 8:
                t = 4;
                break;
            case 32:
                t = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                t = 128;
                break;
            case 268435456:
                t = 134217728;
                break;
            default:
                t = 0
        }
        return t
    }

    function Kc(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Bs() {
        var t = k.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Am(t.type))
    }

    function Ks(t, e) {
        var l = k.p;
        try {
            return k.p = t, e()
        } finally {
            k.p = l
        }
    }

    var ol = Math.random().toString(36).slice(2), Vt = "__reactFiber$" + ol, ne = "__reactProps$" + ol,
        ta = "__reactContainer$" + ol, Yc = "__reactEvents$" + ol, Xy = "__reactListeners$" + ol,
        Zy = "__reactHandles$" + ol, Ys = "__reactResources$" + ol, Ia = "__reactMarker$" + ol;

    function Gc(t) {
        delete t[Vt], delete t[ne], delete t[Yc], delete t[Xy], delete t[Zy]
    }

    function ea(t) {
        var e = t[Vt];
        if (e) return e;
        for (var l = t.parentNode; l;) {
            if (e = l[ta] || l[Vt]) {
                if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = rm(t); t !== null;) {
                    if (l = t[Vt]) return l;
                    t = rm(t)
                }
                return e
            }
            t = l, l = t.parentNode
        }
        return null
    }

    function la(t) {
        if (t = t[Vt] || t[ta]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t
        }
        return null
    }

    function Pa(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
        throw Error(s(33))
    }

    function aa(t) {
        var e = t[Ys];
        return e || (e = t[Ys] = {hoistableStyles: new Map, hoistableScripts: new Map}), e
    }

    function Qt(t) {
        t[Ia] = !0
    }

    var Gs = new Set, Qs = {};

    function Hl(t, e) {
        na(t, e), na(t + "Capture", e)
    }

    function na(t, e) {
        for (Qs[t] = e, t = 0; t < e.length; t++) Gs.add(e[t])
    }

    var Vy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Xs = {}, Zs = {};

    function Jy(t) {
        return Hc.call(Zs, t) ? !0 : Hc.call(Xs, t) ? !1 : Vy.test(t) ? Zs[t] = !0 : (Xs[t] = !0, !1)
    }

    function au(t, e, l) {
        if (Jy(e)) if (l === null) t.removeAttribute(e); else {
            switch (typeof l) {
                case"undefined":
                case"function":
                case"symbol":
                    t.removeAttribute(e);
                    return;
                case"boolean":
                    var a = e.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
            }
            t.setAttribute(e, "" + l)
        }
    }

    function nu(t, e, l) {
        if (l === null) t.removeAttribute(e); else {
            switch (typeof l) {
                case"undefined":
                case"function":
                case"symbol":
                case"boolean":
                    t.removeAttribute(e);
                    return
            }
            t.setAttribute(e, "" + l)
        }
    }

    function Ye(t, e, l, a) {
        if (a === null) t.removeAttribute(l); else {
            switch (typeof a) {
                case"undefined":
                case"function":
                case"symbol":
                case"boolean":
                    t.removeAttribute(l);
                    return
            }
            t.setAttributeNS(e, l, "" + a)
        }
    }

    function je(t) {
        switch (typeof t) {
            case"bigint":
            case"boolean":
            case"number":
            case"string":
            case"undefined":
                return t;
            case"object":
                return t;
            default:
                return ""
        }
    }

    function Vs(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }

    function $y(t, e, l) {
        var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get, u = a.set;
            return Object.defineProperty(t, e, {
                configurable: !0, get: function () {
                    return n.call(this)
                }, set      : function (i) {
                    l = "" + i, u.call(this, i)
                }
            }), Object.defineProperty(t, e, {enumerable: a.enumerable}), {
                getValue       : function () {
                    return l
                }, setValue    : function (i) {
                    l = "" + i
                }, stopTracking: function () {
                    t._valueTracker = null, delete t[e]
                }
            }
        }
    }

    function Qc(t) {
        if (!t._valueTracker) {
            var e = Vs(t) ? "checked" : "value";
            t._valueTracker = $y(t, e, "" + t[e])
        }
    }

    function Js(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var l = e.getValue(), a = "";
        return t && (a = Vs(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1
    }

    function uu(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }

    var Wy = /[\n"\\]/g;

    function Te(t) {
        return t.replace(Wy, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }

    function Xc(t, e, l, a, n, u, i, m) {
        t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + je(e)) : t.value !== "" + je(e) && (t.value = "" + je(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? Zc(t, i, je(e)) : l != null ? Zc(t, i, je(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.name = "" + je(m) : t.removeAttribute("name")
    }

    function $s(t, e, l, a, n, u, i, m) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
            if (!(u !== "submit" && u !== "reset" || e != null)) {
                Qc(t);
                return
            }
            l = l != null ? "" + je(l) : "", e = e != null ? "" + je(e) : l, m || e === t.value || (t.value = e), t.defaultValue = e
        }
        a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = m ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), Qc(t)
    }

    function Zc(t, e, l) {
        e === "number" && uu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l)
    }

    function ua(t, e, l, a) {
        if (t = t.options, e) {
            e = {};
            for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
            for (l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0)
        } else {
            for (l = "" + je(l), e = null, n = 0; n < t.length; n++) {
                if (t[n].value === l) {
                    t[n].selected = !0, a && (t[n].defaultSelected = !0);
                    return
                }
                e !== null || t[n].disabled || (e = t[n])
            }
            e !== null && (e.selected = !0)
        }
    }

    function Ws(t, e, l) {
        if (e != null && (e = "" + je(e), e !== t.value && (t.value = e), l == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = l != null ? "" + je(l) : ""
    }

    function Fs(t, e, l, a) {
        if (e == null) {
            if (a != null) {
                if (l != null) throw Error(s(92));
                if (Rt(a)) {
                    if (1 < a.length) throw Error(s(93));
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ""), e = l
        }
        l = je(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), Qc(t)
    }

    function ca(t, e) {
        if (e) {
            var l = t.firstChild;
            if (l && l === t.lastChild && l.nodeType === 3) {
                l.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }

    var Fy = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Is(t, e, l) {
        var a = e.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Fy.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px"
    }

    function Ps(t, e, l) {
        if (e != null && typeof e != "object") throw Error(s(62));
        if (t = t.style, l != null) {
            for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && Is(t, n, a)
        } else for (var u in e) e.hasOwnProperty(u) && Is(t, u, e[u])
    }

    function Vc(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
            case"annotation-xml":
            case"color-profile":
            case"font-face":
            case"font-face-src":
            case"font-face-uri":
            case"font-face-format":
            case"font-face-name":
            case"missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    var Iy = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]),
        Py = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function cu(t) {
        return Py.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }

    function Ge() {
    }

    var Jc = null;

    function $c(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }

    var oa = null, ia = null;

    function tr(t) {
        var e = la(t);
        if (e && (t = e.stateNode)) {
            var l = t[ne] || null;
            t:switch (t = e.stateNode, e.type) {
                case"input":
                    if (Xc(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
                        for (l = t; l.parentNode;) l = l.parentNode;
                        for (l = l.querySelectorAll('input[name="' + Te("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
                            var a = l[e];
                            if (a !== t && a.form === t.form) {
                                var n = a[ne] || null;
                                if (!n) throw Error(s(90));
                                Xc(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                            }
                        }
                        for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && Js(a)
                    }
                    break t;
                case"textarea":
                    Ws(t, l.value, l.defaultValue);
                    break t;
                case"select":
                    e = l.value, e != null && ua(t, !!l.multiple, e, !1)
            }
        }
    }

    var Wc = !1;

    function er(t, e, l) {
        if (Wc) return t(e, l);
        Wc = !0;
        try {
            var a = t(e);
            return a
        } finally {
            if (Wc = !1, (oa !== null || ia !== null) && (Vu(), oa && (e = oa, t = ia, ia = oa = null, tr(e), t))) for (e = 0; e < t.length; e++) tr(t[e])
        }
    }

    function tn(t, e) {
        var l = t.stateNode;
        if (l === null) return null;
        var a = l[ne] || null;
        if (a === null) return null;
        l = a[e];
        t:switch (e) {
            case"onClick":
            case"onClickCapture":
            case"onDoubleClick":
            case"onDoubleClickCapture":
            case"onMouseDown":
            case"onMouseDownCapture":
            case"onMouseMove":
            case"onMouseMoveCapture":
            case"onMouseUp":
            case"onMouseUpCapture":
            case"onMouseEnter":
                (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
                break t;
            default:
                t = !1
        }
        if (t) return null;
        if (l && typeof l != "function") throw Error(s(231, e, typeof l));
        return l
    }

    var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Fc = !1;
    if (Qe) try {
        var en = {};
        Object.defineProperty(en, "passive", {
            get: function () {
                Fc = !0
            }
        }), window.addEventListener("test", en, en), window.removeEventListener("test", en, en)
    } catch {
        Fc = !1
    }
    var il = null, Ic = null, ou = null;

    function lr() {
        if (ou) return ou;
        var t, e = Ic, l = e.length, a, n = "value" in il ? il.value : il.textContent, u = n.length;
        for (t = 0; t < l && e[t] === n[t]; t++) ;
        var i = l - t;
        for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
        return ou = n.slice(t, 1 < a ? 1 - a : void 0)
    }

    function iu(t) {
        var e = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }

    function su() {
        return !0
    }

    function ar() {
        return !1
    }

    function ue(t) {
        function e(l, a, n, u, i) {
            this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
            for (var m in t) t.hasOwnProperty(m) && (l = t[m], this[m] = l ? l(u) : u[m]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? su : ar, this.isPropagationStopped = ar, this
        }

        return z(e.prototype, {
            preventDefault    : function () {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = su)
            }, stopPropagation: function () {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = su)
            }, persist        : function () {
            }, isPersistent   : su
        }), e
    }

    var ql = {
            eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (t) {
                return t.timeStamp || Date.now()
            }, defaultPrevented: 0, isTrusted: 0
        }, ru = ue(ql), ln = z({}, ql, {view: 0, detail: 0}), th = ue(ln), Pc, to, an, fu = z({}, ln, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: lo,
            button: 0,
            buttons: 0,
            relatedTarget: function (t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function (t) {
                return "movementX" in t ? t.movementX : (t !== an && (an && t.type === "mousemove" ? (Pc = t.screenX - an.screenX, to = t.screenY - an.screenY) : to = Pc = 0, an = t), Pc)
            },
            movementY: function (t) {
                return "movementY" in t ? t.movementY : to
            }
        }), nr = ue(fu), eh = z({}, fu, {dataTransfer: 0}), lh = ue(eh), ah = z({}, ln, {relatedTarget: 0}), eo = ue(ah),
        nh = z({}, ql, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), uh = ue(nh), ch = z({}, ql, {
            clipboardData: function (t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }), oh = ue(ch), ih = z({}, ql, {data: 0}), ur = ue(ih), sh = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, rh = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, fh = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

    function dh(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = fh[t]) ? !!e[t] : !1
    }

    function lo() {
        return dh
    }

    var mh = z({}, ln, {
            key: function (t) {
                if (t.key) {
                    var e = sh[t.key] || t.key;
                    if (e !== "Unidentified") return e
                }
                return t.type === "keypress" ? (t = iu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? rh[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: lo,
            charCode: function (t) {
                return t.type === "keypress" ? iu(t) : 0
            },
            keyCode: function (t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function (t) {
                return t.type === "keypress" ? iu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }), yh = ue(mh), hh = z({}, fu, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }), cr = ue(hh), xh = z({}, ln, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: lo
        }), gh = ue(xh), vh = z({}, ql, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), ph = ue(vh), bh = z({}, fu, {
            deltaX: function (t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            }, deltaY: function (t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            }, deltaZ: 0, deltaMode: 0
        }), Sh = ue(bh), jh = z({}, ql, {newState: 0, oldState: 0}), Th = ue(jh), Nh = [9, 13, 27, 32],
        ao = Qe && "CompositionEvent" in window, nn = null;
    Qe && "documentMode" in document && (nn = document.documentMode);
    var Eh = Qe && "TextEvent" in window && !nn, or = Qe && (!ao || nn && 8 < nn && 11 >= nn), ir = " ", sr = !1;

    function rr(t, e) {
        switch (t) {
            case"keyup":
                return Nh.indexOf(e.keyCode) !== -1;
            case"keydown":
                return e.keyCode !== 229;
            case"keypress":
            case"mousedown":
            case"focusout":
                return !0;
            default:
                return !1
        }
    }

    function fr(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }

    var sa = !1;

    function Ah(t, e) {
        switch (t) {
            case"compositionend":
                return fr(e);
            case"keypress":
                return e.which !== 32 ? null : (sr = !0, ir);
            case"textInput":
                return t = e.data, t === ir && sr ? null : t;
            default:
                return null
        }
    }

    function Mh(t, e) {
        if (sa) return t === "compositionend" || !ao && rr(t, e) ? (t = lr(), ou = Ic = il = null, sa = !1, t) : null;
        switch (t) {
            case"paste":
                return null;
            case"keypress":
                if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which)
                }
                return null;
            case"compositionend":
                return or && e.locale !== "ko" ? null : e.data;
            default:
                return null
        }
    }

    var zh = {
        color           : !0,
        date            : !0,
        datetime        : !0,
        "datetime-local": !0,
        email           : !0,
        month           : !0,
        number          : !0,
        password        : !0,
        range           : !0,
        search          : !0,
        tel             : !0,
        text            : !0,
        time            : !0,
        url             : !0,
        week            : !0
    };

    function dr(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!zh[t.type] : e === "textarea"
    }

    function mr(t, e, l, a) {
        oa ? ia ? ia.push(a) : ia = [a] : oa = a, e = tc(e, "onChange"), 0 < e.length && (l = new ru("onChange", "change", null, l, a), t.push({
            event    : l,
            listeners: e
        }))
    }

    var un = null, cn = null;

    function _h(t) {
        Wd(t, 0)
    }

    function du(t) {
        var e = Pa(t);
        if (Js(e)) return t
    }

    function yr(t, e) {
        if (t === "change") return e
    }

    var hr = !1;
    if (Qe) {
        var no;
        if (Qe) {
            var uo = "oninput" in document;
            if (!uo) {
                var xr = document.createElement("div");
                xr.setAttribute("oninput", "return;"), uo = typeof xr.oninput == "function"
            }
            no = uo
        } else no = !1;
        hr = no && (!document.documentMode || 9 < document.documentMode)
    }

    function gr() {
        un && (un.detachEvent("onpropertychange", vr), cn = un = null)
    }

    function vr(t) {
        if (t.propertyName === "value" && du(cn)) {
            var e = [];
            mr(e, cn, t, $c(t)), er(_h, e)
        }
    }

    function Oh(t, e, l) {
        t === "focusin" ? (gr(), un = e, cn = l, un.attachEvent("onpropertychange", vr)) : t === "focusout" && gr()
    }

    function kh(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown") return du(cn)
    }

    function wh(t, e) {
        if (t === "click") return du(e)
    }

    function Dh(t, e) {
        if (t === "input" || t === "change") return du(e)
    }

    function Ch(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }

    var he = typeof Object.is == "function" ? Object.is : Ch;

    function on(t, e) {
        if (he(t, e)) return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
        var l = Object.keys(t), a = Object.keys(e);
        if (l.length !== a.length) return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!Hc.call(e, n) || !he(t[n], e[n])) return !1
        }
        return !0
    }

    function pr(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function br(t, e) {
        var l = pr(t);
        t = 0;
        for (var a; l;) {
            if (l.nodeType === 3) {
                if (a = t + l.textContent.length, t <= e && a >= e) return {node: l, offset: e - t};
                t = a
            }
            t:{
                for (; l;) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break t
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = pr(l)
        }
    }

    function Sr(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Sr(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }

    function jr(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = uu(t.document); e instanceof t.HTMLIFrameElement;) {
            try {
                var l = typeof e.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l) t = e.contentWindow; else break;
            e = uu(t.document)
        }
        return e
    }

    function co(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }

    var Uh = Qe && "documentMode" in document && 11 >= document.documentMode, ra = null, oo = null, sn = null, io = !1;

    function Tr(t, e, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        io || ra == null || ra !== uu(a) || (a = ra, "selectionStart" in a && co(a) ? a = {
            start: a.selectionStart,
            end  : a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode  : a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode   : a.focusNode,
            focusOffset : a.focusOffset
        }), sn && on(sn, a) || (sn = a, a = tc(oo, "onSelect"), 0 < a.length && (e = new ru("onSelect", "select", null, e, l), t.push({
            event    : e,
            listeners: a
        }), e.target = ra)))
    }

    function Rl(t, e) {
        var l = {};
        return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l
    }

    var fa = {
        animationend      : Rl("Animation", "AnimationEnd"),
        animationiteration: Rl("Animation", "AnimationIteration"),
        animationstart    : Rl("Animation", "AnimationStart"),
        transitionrun     : Rl("Transition", "TransitionRun"),
        transitionstart   : Rl("Transition", "TransitionStart"),
        transitioncancel  : Rl("Transition", "TransitionCancel"),
        transitionend     : Rl("Transition", "TransitionEnd")
    }, so  = {}, Nr = {};
    Qe && (Nr = document.createElement("div").style, "AnimationEvent" in window || (delete fa.animationend.animation, delete fa.animationiteration.animation, delete fa.animationstart.animation), "TransitionEvent" in window || delete fa.transitionend.transition);

    function Ll(t) {
        if (so[t]) return so[t];
        if (!fa[t]) return t;
        var e = fa[t], l;
        for (l in e) if (e.hasOwnProperty(l) && l in Nr) return so[t] = e[l];
        return t
    }

    var Er = Ll("animationend"), Ar = Ll("animationiteration"), Mr = Ll("animationstart"), Hh = Ll("transitionrun"),
        qh = Ll("transitionstart"), Rh = Ll("transitioncancel"), zr = Ll("transitionend"), _r = new Map,
        ro = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ro.push("scrollEnd");

    function De(t, e) {
        _r.set(t, e), Hl(e, [t])
    }

    var mu = typeof reportError == "function" ? reportError : function (t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error", {
                bubbles   : !0,
                cancelable: !0,
                message   : typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error     : t
            });
            if (!window.dispatchEvent(e)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }, Ne  = [], da = 0, fo = 0;

    function yu() {
        for (var t = da, e = fo = da = 0; e < t;) {
            var l = Ne[e];
            Ne[e++] = null;
            var a = Ne[e];
            Ne[e++] = null;
            var n = Ne[e];
            Ne[e++] = null;
            var u = Ne[e];
            if (Ne[e++] = null, a !== null && n !== null) {
                var i = a.pending;
                i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n
            }
            u !== 0 && Or(l, n, u)
        }
    }

    function hu(t, e, l, a) {
        Ne[da++] = t, Ne[da++] = e, Ne[da++] = l, Ne[da++] = a, fo |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a)
    }

    function mo(t, e, l, a) {
        return hu(t, e, l, a), xu(t)
    }

    function Bl(t, e) {
        return hu(t, null, null, e), xu(t)
    }

    function Or(t, e, l) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l);
        for (var n = !1, u = t.return; u !== null;) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
        return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ye(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null
    }

    function xu(t) {
        if (50 < kn) throw kn = 0, ji = null, Error(s(185));
        for (var e = t.return; e !== null;) t = e, e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }

    var ma = {};

    function Lh(t, e, l, a) {
        this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function xe(t, e, l, a) {
        return new Lh(t, e, l, a)
    }

    function yo(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }

    function Xe(t, e) {
        var l = t.alternate;
        return l === null ? (l = xe(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
            lanes       : e.lanes,
            firstContext: e.firstContext
        }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l
    }

    function kr(t, e) {
        t.flags &= 65011714;
        var l = t.alternate;
        return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
            lanes       : e.lanes,
            firstContext: e.firstContext
        }), t
    }

    function gu(t, e, l, a, n, u) {
        var i = 0;
        if (a = t, typeof t == "function") yo(t) && (i = 1); else if (typeof t == "string") i = Qx(t, l, G.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5; else t:switch (t) {
            case At:
                return t = xe(31, l, e, n), t.elementType = At, t.lanes = u, t;
            case q:
                return Kl(l.children, n, u, e);
            case L:
                i = 8, n |= 24;
                break;
            case I:
                return t = xe(12, l, e, n | 2), t.elementType = I, t.lanes = u, t;
            case ct:
                return t = xe(13, l, e, n), t.elementType = ct, t.lanes = u, t;
            case P:
                return t = xe(19, l, e, n), t.elementType = P, t.lanes = u, t;
            default:
                if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                    case ut:
                        i = 10;
                        break t;
                    case W:
                        i = 9;
                        break t;
                    case B:
                        i = 11;
                        break t;
                    case X:
                        i = 14;
                        break t;
                    case Ot:
                        i = 16, a = null;
                        break t
                }
                i = 29, l = Error(s(130, t === null ? "null" : typeof t, "")), a = null
        }
        return e = xe(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e
    }

    function Kl(t, e, l, a) {
        return t = xe(7, t, a, e), t.lanes = l, t
    }

    function ho(t, e, l) {
        return t = xe(6, t, null, e), t.lanes = l, t
    }

    function wr(t) {
        var e = xe(18, null, null, 0);
        return e.stateNode = t, e
    }

    function xo(t, e, l) {
        return e = xe(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
            containerInfo  : t.containerInfo,
            pendingChildren: null,
            implementation : t.implementation
        }, e
    }

    var Dr = new WeakMap;

    function Ee(t, e) {
        if (typeof t == "object" && t !== null) {
            var l = Dr.get(t);
            return l !== void 0 ? l : (e = {value: t, source: e, stack: ws(e)}, Dr.set(t, e), e)
        }
        return {value: t, source: e, stack: ws(e)}
    }

    var ya = [], ha = 0, vu = null, rn = 0, Ae = [], Me = 0, sl = null, qe = 1, Re = "";

    function Ze(t, e) {
        ya[ha++] = rn, ya[ha++] = vu, vu = t, rn = e
    }

    function Cr(t, e, l) {
        Ae[Me++] = qe, Ae[Me++] = Re, Ae[Me++] = sl, sl = t;
        var a = qe;
        t = Re;
        var n = 32 - ye(a) - 1;
        a &= ~(1 << n), l += 1;
        var u = 32 - ye(e) + n;
        if (30 < u) {
            var i = n - n % 5;
            u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, qe = 1 << 32 - ye(e) + n | l << n | a, Re = u + t
        } else qe = 1 << u | l << n | a, Re = t
    }

    function go(t) {
        t.return !== null && (Ze(t, 1), Cr(t, 1, 0))
    }

    function vo(t) {
        for (; t === vu;) vu = ya[--ha], ya[ha] = null, rn = ya[--ha], ya[ha] = null;
        for (; t === sl;) sl = Ae[--Me], Ae[Me] = null, Re = Ae[--Me], Ae[Me] = null, qe = Ae[--Me], Ae[Me] = null
    }

    function Ur(t, e) {
        Ae[Me++] = qe, Ae[Me++] = Re, Ae[Me++] = sl, qe = e.id, Re = e.overflow, sl = t
    }

    var Jt = null, Mt = null, dt = !1, rl = null, ze = !1, po = Error(s(519));

    function fl(t) {
        var e = Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw fn(Ee(e, t)), po
    }

    function Hr(t) {
        var e = t.stateNode, l = t.type, a = t.memoizedProps;
        switch (e[Vt] = t, e[ne] = a, l) {
            case"dialog":
                st("cancel", e), st("close", e);
                break;
            case"iframe":
            case"object":
            case"embed":
                st("load", e);
                break;
            case"video":
            case"audio":
                for (l = 0; l < Dn.length; l++) st(Dn[l], e);
                break;
            case"source":
                st("error", e);
                break;
            case"img":
            case"image":
            case"link":
                st("error", e), st("load", e);
                break;
            case"details":
                st("toggle", e);
                break;
            case"input":
                st("invalid", e), $s(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
                break;
            case"select":
                st("invalid", e);
                break;
            case"textarea":
                st("invalid", e), Fs(e, a.value, a.defaultValue, a.children)
        }
        l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || tm(e.textContent, l) ? (a.popover != null && (st("beforetoggle", e), st("toggle", e)), a.onScroll != null && st("scroll", e), a.onScrollEnd != null && st("scrollend", e), a.onClick != null && (e.onclick = Ge), e = !0) : e = !1, e || fl(t, !0)
    }

    function qr(t) {
        for (Jt = t.return; Jt;) switch (Jt.tag) {
            case 5:
            case 31:
            case 13:
                ze = !1;
                return;
            case 27:
            case 3:
                ze = !0;
                return;
            default:
                Jt = Jt.return
        }
    }

    function xa(t) {
        if (t !== Jt) return !1;
        if (!dt) return qr(t), dt = !0, !1;
        var e = t.tag, l;
        if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || qi(t.type, t.memoizedProps)), l = !l), l && Mt && fl(t), qr(t), e === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
            Mt = sm(t)
        } else if (e === 31) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
            Mt = sm(t)
        } else e === 27 ? (e = Mt, El(t.type) ? (t = Yi, Yi = null, Mt = t) : Mt = e) : Mt = Jt ? Oe(t.stateNode.nextSibling) : null;
        return !0
    }

    function Yl() {
        Mt = Jt = null, dt = !1
    }

    function bo() {
        var t = rl;
        return t !== null && (se === null ? se = t : se.push.apply(se, t), rl = null), t
    }

    function fn(t) {
        rl === null ? rl = [t] : rl.push(t)
    }

    var So = h(null), Gl = null, Ve = null;

    function dl(t, e, l) {
        K(So, e._currentValue), e._currentValue = l
    }

    function Je(t) {
        t._currentValue = So.current, C(So)
    }

    function jo(t, e, l) {
        for (; t !== null;) {
            var a = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
            t = t.return
        }
    }

    function To(t, e, l, a) {
        var n = t.child;
        for (n !== null && (n.return = t); n !== null;) {
            var u = n.dependencies;
            if (u !== null) {
                var i = n.child;
                u = u.firstContext;
                t:for (; u !== null;) {
                    var m = u;
                    u = n;
                    for (var x = 0; x < e.length; x++) if (m.context === e[x]) {
                        u.lanes |= l, m = u.alternate, m !== null && (m.lanes |= l), jo(u.return, l, t), a || (i = null);
                        break t
                    }
                    u = m.next
                }
            } else if (n.tag === 18) {
                if (i = n.return, i === null) throw Error(s(341));
                i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), jo(i, l, t), i = null
            } else i = n.child;
            if (i !== null) i.return = n; else for (i = n; i !== null;) {
                if (i === t) {
                    i = null;
                    break
                }
                if (n = i.sibling, n !== null) {
                    n.return = i.return, i = n;
                    break
                }
                i = i.return
            }
            n = i
        }
    }

    function ga(t, e, l, a) {
        t = null;
        for (var n = e, u = !1; n !== null;) {
            if (!u) {
                if ((n.flags & 524288) !== 0) u = !0; else if ((n.flags & 262144) !== 0) break
            }
            if (n.tag === 10) {
                var i = n.alternate;
                if (i === null) throw Error(s(387));
                if (i = i.memoizedProps, i !== null) {
                    var m = n.type;
                    he(n.pendingProps.value, i.value) || (t !== null ? t.push(m) : t = [m])
                }
            } else if (n === vt.current) {
                if (i = n.alternate, i === null) throw Error(s(387));
                i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Rn) : t = [Rn])
            }
            n = n.return
        }
        t !== null && To(e, t, l, a), e.flags |= 262144
    }

    function pu(t) {
        for (t = t.firstContext; t !== null;) {
            if (!he(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next
        }
        return !1
    }

    function Ql(t) {
        Gl = t, Ve = null, t = t.dependencies, t !== null && (t.firstContext = null)
    }

    function $t(t) {
        return Rr(Gl, t)
    }

    function bu(t, e) {
        return Gl === null && Ql(t), Rr(t, e)
    }

    function Rr(t, e) {
        var l = e._currentValue;
        if (e = {context: e, memoizedValue: l, next: null}, Ve === null) {
            if (t === null) throw Error(s(308));
            Ve = e, t.dependencies = {lanes: 0, firstContext: e}, t.flags |= 524288
        } else Ve = Ve.next = e;
        return l
    }

    var Bh = typeof AbortController < "u" ? AbortController : function () {
            var t = [], e = this.signal = {
                aborted: !1, addEventListener: function (l, a) {
                    t.push(a)
                }
            };
            this.abort = function () {
                e.aborted = !0, t.forEach(function (l) {
                    return l()
                })
            }
        }, Kh = c.unstable_scheduleCallback, Yh = c.unstable_NormalPriority,
        Lt = {$$typeof: ut, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0};

    function No() {
        return {controller: new Bh, data: new Map, refCount: 0}
    }

    function dn(t) {
        t.refCount--, t.refCount === 0 && Kh(Yh, function () {
            t.controller.abort()
        })
    }

    var mn = null, Eo = 0, va = 0, pa = null;

    function Gh(t, e) {
        if (mn === null) {
            var l = mn = [];
            Eo = 0, va = zi(), pa = {
                status: "pending", value: void 0, then: function (a) {
                    l.push(a)
                }
            }
        }
        return Eo++, e.then(Lr, Lr), e
    }

    function Lr() {
        if (--Eo === 0 && mn !== null) {
            pa !== null && (pa.status = "fulfilled");
            var t = mn;
            mn = null, va = 0, pa = null;
            for (var e = 0; e < t.length; e++) (0, t[e])()
        }
    }

    function Qh(t, e) {
        var l = [], a = {
            status: "pending", value: null, reason: null, then: function (n) {
                l.push(n)
            }
        };
        return t.then(function () {
            a.status = "fulfilled", a.value = e;
            for (var n = 0; n < l.length; n++) (0, l[n])(e)
        }, function (n) {
            for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0)
        }), a
    }

    var Br = _.S;
    _.S = function (t, e) {
        Nd = de(), typeof e == "object" && e !== null && typeof e.then == "function" && Gh(t, e), Br !== null && Br(t, e)
    };
    var Xl = h(null);

    function Ao() {
        var t = Xl.current;
        return t !== null ? t : Et.pooledCache
    }

    function Su(t, e) {
        e === null ? K(Xl, Xl.current) : K(Xl, e.pool)
    }

    function Kr() {
        var t = Ao();
        return t === null ? null : {parent: Lt._currentValue, pool: t}
    }

    var ba = Error(s(460)), Mo = Error(s(474)), ju = Error(s(542)), Tu = {
        then: function () {
        }
    };

    function Yr(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }

    function Gr(t, e, l) {
        switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ge, Ge), e = l), e.status) {
            case"fulfilled":
                return e.value;
            case"rejected":
                throw t = e.reason, Xr(t), t;
            default:
                if (typeof e.status == "string") e.then(Ge, Ge); else {
                    if (t = Et, t !== null && 100 < t.shellSuspendCounter) throw Error(s(482));
                    t = e, t.status = "pending", t.then(function (a) {
                        if (e.status === "pending") {
                            var n = e;
                            n.status = "fulfilled", n.value = a
                        }
                    }, function (a) {
                        if (e.status === "pending") {
                            var n = e;
                            n.status = "rejected", n.reason = a
                        }
                    })
                }
                switch (e.status) {
                    case"fulfilled":
                        return e.value;
                    case"rejected":
                        throw t = e.reason, Xr(t), t
                }
                throw Vl = e, ba
        }
    }

    function Zl(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (l) {
            throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Vl = l, ba) : l
        }
    }

    var Vl = null;

    function Qr() {
        if (Vl === null) throw Error(s(459));
        var t = Vl;
        return Vl = null, t
    }

    function Xr(t) {
        if (t === ba || t === ju) throw Error(s(483))
    }

    var Sa = null, yn = 0;

    function Nu(t) {
        var e = yn;
        return yn += 1, Sa === null && (Sa = []), Gr(Sa, t, e)
    }

    function hn(t, e) {
        e = e.props.ref, t.ref = e !== void 0 ? e : null
    }

    function Eu(t, e) {
        throw e.$$typeof === D ? Error(s(525)) : (t = Object.prototype.toString.call(e), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }

    function Zr(t) {
        function e(p, v) {
            if (t) {
                var j = p.deletions;
                j === null ? (p.deletions = [v], p.flags |= 16) : j.push(v)
            }
        }

        function l(p, v) {
            if (!t) return null;
            for (; v !== null;) e(p, v), v = v.sibling;
            return null
        }

        function a(p) {
            for (var v = new Map; p !== null;) p.key !== null ? v.set(p.key, p) : v.set(p.index, p), p = p.sibling;
            return v
        }

        function n(p, v) {
            return p = Xe(p, v), p.index = 0, p.sibling = null, p
        }

        function u(p, v, j) {
            return p.index = j, t ? (j = p.alternate, j !== null ? (j = j.index, j < v ? (p.flags |= 67108866, v) : j) : (p.flags |= 67108866, v)) : (p.flags |= 1048576, v)
        }

        function i(p) {
            return t && p.alternate === null && (p.flags |= 67108866), p
        }

        function m(p, v, j, w) {
            return v === null || v.tag !== 6 ? (v = ho(j, p.mode, w), v.return = p, v) : (v = n(v, j), v.return = p, v)
        }

        function x(p, v, j, w) {
            var V = j.type;
            return V === q ? O(p, v, j.props.children, w, j.key) : v !== null && (v.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Ot && Zl(V) === v.type) ? (v = n(v, j.props), hn(v, j), v.return = p, v) : (v = gu(j.type, j.key, j.props, null, p.mode, w), hn(v, j), v.return = p, v)
        }

        function T(p, v, j, w) {
            return v === null || v.tag !== 4 || v.stateNode.containerInfo !== j.containerInfo || v.stateNode.implementation !== j.implementation ? (v = xo(j, p.mode, w), v.return = p, v) : (v = n(v, j.children || []), v.return = p, v)
        }

        function O(p, v, j, w, V) {
            return v === null || v.tag !== 7 ? (v = Kl(j, p.mode, w, V), v.return = p, v) : (v = n(v, j), v.return = p, v)
        }

        function U(p, v, j) {
            if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return v = ho("" + v, p.mode, j), v.return = p, v;
            if (typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                    case H:
                        return j = gu(v.type, v.key, v.props, null, p.mode, j), hn(j, v), j.return = p, j;
                    case R:
                        return v = xo(v, p.mode, j), v.return = p, v;
                    case Ot:
                        return v = Zl(v), U(p, v, j)
                }
                if (Rt(v) || Ct(v)) return v = Kl(v, p.mode, j, null), v.return = p, v;
                if (typeof v.then == "function") return U(p, Nu(v), j);
                if (v.$$typeof === ut) return U(p, bu(p, v), j);
                Eu(p, v)
            }
            return null
        }

        function E(p, v, j, w) {
            var V = v !== null ? v.key : null;
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return V !== null ? null : m(p, v, "" + j, w);
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                    case H:
                        return j.key === V ? x(p, v, j, w) : null;
                    case R:
                        return j.key === V ? T(p, v, j, w) : null;
                    case Ot:
                        return j = Zl(j), E(p, v, j, w)
                }
                if (Rt(j) || Ct(j)) return V !== null ? null : O(p, v, j, w, null);
                if (typeof j.then == "function") return E(p, v, Nu(j), w);
                if (j.$$typeof === ut) return E(p, v, bu(p, j), w);
                Eu(p, j)
            }
            return null
        }

        function M(p, v, j, w, V) {
            if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return p = p.get(j) || null, m(v, p, "" + w, V);
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                    case H:
                        return p = p.get(w.key === null ? j : w.key) || null, x(v, p, w, V);
                    case R:
                        return p = p.get(w.key === null ? j : w.key) || null, T(v, p, w, V);
                    case Ot:
                        return w = Zl(w), M(p, v, j, w, V)
                }
                if (Rt(w) || Ct(w)) return p = p.get(j) || null, O(v, p, w, V, null);
                if (typeof w.then == "function") return M(p, v, j, Nu(w), V);
                if (w.$$typeof === ut) return M(p, v, j, bu(v, w), V);
                Eu(v, w)
            }
            return null
        }

        function Y(p, v, j, w) {
            for (var V = null, yt = null, Q = v, nt = v = 0, ft = null; Q !== null && nt < j.length; nt++) {
                Q.index > nt ? (ft = Q, Q = null) : ft = Q.sibling;
                var ht = E(p, Q, j[nt], w);
                if (ht === null) {
                    Q === null && (Q = ft);
                    break
                }
                t && Q && ht.alternate === null && e(p, Q), v = u(ht, v, nt), yt === null ? V = ht : yt.sibling = ht, yt = ht, Q = ft
            }
            if (nt === j.length) return l(p, Q), dt && Ze(p, nt), V;
            if (Q === null) {
                for (; nt < j.length; nt++) Q = U(p, j[nt], w), Q !== null && (v = u(Q, v, nt), yt === null ? V = Q : yt.sibling = Q, yt = Q);
                return dt && Ze(p, nt), V
            }
            for (Q = a(Q); nt < j.length; nt++) ft = M(Q, p, nt, j[nt], w), ft !== null && (t && ft.alternate !== null && Q.delete(ft.key === null ? nt : ft.key), v = u(ft, v, nt), yt === null ? V = ft : yt.sibling = ft, yt = ft);
            return t && Q.forEach(function (Ol) {
                return e(p, Ol)
            }), dt && Ze(p, nt), V
        }

        function F(p, v, j, w) {
            if (j == null) throw Error(s(151));
            for (var V = null, yt = null, Q = v, nt = v = 0, ft = null, ht = j.next(); Q !== null && !ht.done; nt++, ht = j.next()) {
                Q.index > nt ? (ft = Q, Q = null) : ft = Q.sibling;
                var Ol = E(p, Q, ht.value, w);
                if (Ol === null) {
                    Q === null && (Q = ft);
                    break
                }
                t && Q && Ol.alternate === null && e(p, Q), v = u(Ol, v, nt), yt === null ? V = Ol : yt.sibling = Ol, yt = Ol, Q = ft
            }
            if (ht.done) return l(p, Q), dt && Ze(p, nt), V;
            if (Q === null) {
                for (; !ht.done; nt++, ht = j.next()) ht = U(p, ht.value, w), ht !== null && (v = u(ht, v, nt), yt === null ? V = ht : yt.sibling = ht, yt = ht);
                return dt && Ze(p, nt), V
            }
            for (Q = a(Q); !ht.done; nt++, ht = j.next()) ht = M(Q, p, nt, ht.value, w), ht !== null && (t && ht.alternate !== null && Q.delete(ht.key === null ? nt : ht.key), v = u(ht, v, nt), yt === null ? V = ht : yt.sibling = ht, yt = ht);
            return t && Q.forEach(function (eg) {
                return e(p, eg)
            }), dt && Ze(p, nt), V
        }

        function Tt(p, v, j, w) {
            if (typeof j == "object" && j !== null && j.type === q && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                    case H:
                        t:{
                            for (var V = j.key; v !== null;) {
                                if (v.key === V) {
                                    if (V = j.type, V === q) {
                                        if (v.tag === 7) {
                                            l(p, v.sibling), w = n(v, j.props.children), w.return = p, p = w;
                                            break t
                                        }
                                    } else if (v.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Ot && Zl(V) === v.type) {
                                        l(p, v.sibling), w = n(v, j.props), hn(w, j), w.return = p, p = w;
                                        break t
                                    }
                                    l(p, v);
                                    break
                                } else e(p, v);
                                v = v.sibling
                            }
                            j.type === q ? (w = Kl(j.props.children, p.mode, w, j.key), w.return = p, p = w) : (w = gu(j.type, j.key, j.props, null, p.mode, w), hn(w, j), w.return = p, p = w)
                        }
                        return i(p);
                    case R:
                        t:{
                            for (V = j.key; v !== null;) {
                                if (v.key === V) if (v.tag === 4 && v.stateNode.containerInfo === j.containerInfo && v.stateNode.implementation === j.implementation) {
                                    l(p, v.sibling), w = n(v, j.children || []), w.return = p, p = w;
                                    break t
                                } else {
                                    l(p, v);
                                    break
                                } else e(p, v);
                                v = v.sibling
                            }
                            w = xo(j, p.mode, w), w.return = p, p = w
                        }
                        return i(p);
                    case Ot:
                        return j = Zl(j), Tt(p, v, j, w)
                }
                if (Rt(j)) return Y(p, v, j, w);
                if (Ct(j)) {
                    if (V = Ct(j), typeof V != "function") throw Error(s(150));
                    return j = V.call(j), F(p, v, j, w)
                }
                if (typeof j.then == "function") return Tt(p, v, Nu(j), w);
                if (j.$$typeof === ut) return Tt(p, v, bu(p, j), w);
                Eu(p, j)
            }
            return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, v !== null && v.tag === 6 ? (l(p, v.sibling), w = n(v, j), w.return = p, p = w) : (l(p, v), w = ho(j, p.mode, w), w.return = p, p = w), i(p)) : l(p, v)
        }

        return function (p, v, j, w) {
            try {
                yn = 0;
                var V = Tt(p, v, j, w);
                return Sa = null, V
            } catch (Q) {
                if (Q === ba || Q === ju) throw Q;
                var yt = xe(29, Q, null, p.mode);
                return yt.lanes = w, yt.return = p, yt
            } finally {
            }
        }
    }

    var Jl = Zr(!0), Vr = Zr(!1), ml = !1;

    function zo(t) {
        t.updateQueue = {
            baseState      : t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate : null,
            shared         : {pending: null, lanes: 0, hiddenCallbacks: null},
            callbacks      : null
        }
    }

    function _o(t, e) {
        t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
            baseState      : t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate : t.lastBaseUpdate,
            shared         : t.shared,
            callbacks      : null
        })
    }

    function yl(t) {
        return {lane: t, tag: 0, payload: null, callback: null, next: null}
    }

    function hl(t, e, l) {
        var a = t.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (xt & 2) !== 0) {
            var n = a.pending;
            return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = xu(t), Or(t, null, l), e
        }
        return hu(t, a, e, l), xu(t)
    }

    function xn(t, e, l) {
        if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
            var a = e.lanes;
            a &= t.pendingLanes, l |= a, e.lanes = l, Rs(t, l)
        }
    }

    function Oo(t, e) {
        var l = t.updateQueue, a = t.alternate;
        if (a !== null && (a = a.updateQueue, l === a)) {
            var n = null, u = null;
            if (l = l.firstBaseUpdate, l !== null) {
                do {
                    var i = {lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null};
                    u === null ? n = u = i : u = u.next = i, l = l.next
                } while (l !== null);
                u === null ? n = u = e : u = u.next = e
            } else n = u = e;
            l = {
                baseState      : a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate : u,
                shared         : a.shared,
                callbacks      : a.callbacks
            }, t.updateQueue = l;
            return
        }
        t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e
    }

    var ko = !1;

    function gn() {
        if (ko) {
            var t = pa;
            if (t !== null) throw t
        }
    }

    function vn(t, e, l, a) {
        ko = !1;
        var n = t.updateQueue;
        ml = !1;
        var u = n.firstBaseUpdate, i = n.lastBaseUpdate, m = n.shared.pending;
        if (m !== null) {
            n.shared.pending = null;
            var x = m, T = x.next;
            x.next = null, i === null ? u = T : i.next = T, i = x;
            var O = t.alternate;
            O !== null && (O = O.updateQueue, m = O.lastBaseUpdate, m !== i && (m === null ? O.firstBaseUpdate = T : m.next = T, O.lastBaseUpdate = x))
        }
        if (u !== null) {
            var U = n.baseState;
            i = 0, O = T = x = null, m = u;
            do {
                var E = m.lane & -536870913, M = E !== m.lane;
                if (M ? (rt & E) === E : (a & E) === E) {
                    E !== 0 && E === va && (ko = !0), O !== null && (O = O.next = {
                        lane    : 0,
                        tag     : m.tag,
                        payload : m.payload,
                        callback: null,
                        next    : null
                    });
                    t:{
                        var Y = t, F = m;
                        E = e;
                        var Tt = l;
                        switch (F.tag) {
                            case 1:
                                if (Y = F.payload, typeof Y == "function") {
                                    U = Y.call(Tt, U, E);
                                    break t
                                }
                                U = Y;
                                break t;
                            case 3:
                                Y.flags = Y.flags & -65537 | 128;
                            case 0:
                                if (Y = F.payload, E = typeof Y == "function" ? Y.call(Tt, U, E) : Y, E == null) break t;
                                U = z({}, U, E);
                                break t;
                            case 2:
                                ml = !0
                        }
                    }
                    E = m.callback, E !== null && (t.flags |= 64, M && (t.flags |= 8192), M = n.callbacks, M === null ? n.callbacks = [E] : M.push(E))
                } else M = {
                    lane    : E,
                    tag     : m.tag,
                    payload : m.payload,
                    callback: m.callback,
                    next    : null
                }, O === null ? (T = O = M, x = U) : O = O.next = M, i |= E;
                if (m = m.next, m === null) {
                    if (m = n.shared.pending, m === null) break;
                    M = m, m = M.next, M.next = null, n.lastBaseUpdate = M, n.shared.pending = null
                }
            } while (!0);
            O === null && (x = U), n.baseState = x, n.firstBaseUpdate = T, n.lastBaseUpdate = O, u === null && (n.shared.lanes = 0), bl |= i, t.lanes = i, t.memoizedState = U
        }
    }

    function Jr(t, e) {
        if (typeof t != "function") throw Error(s(191, t));
        t.call(e)
    }

    function $r(t, e) {
        var l = t.callbacks;
        if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) Jr(l[t], e)
    }

    var ja = h(null), Au = h(0);

    function Wr(t, e) {
        t = al, K(Au, t), K(ja, e), al = t | e.baseLanes
    }

    function wo() {
        K(Au, al), K(ja, ja.current)
    }

    function Do() {
        al = Au.current, C(ja), C(Au)
    }

    var ge = h(null), _e = null;

    function xl(t) {
        var e = t.alternate;
        K(Ht, Ht.current & 1), K(ge, t), _e === null && (e === null || ja.current !== null || e.memoizedState !== null) && (_e = t)
    }

    function Co(t) {
        K(Ht, Ht.current), K(ge, t), _e === null && (_e = t)
    }

    function Fr(t) {
        t.tag === 22 ? (K(Ht, Ht.current), K(ge, t), _e === null && (_e = t)) : gl()
    }

    function gl() {
        K(Ht, Ht.current), K(ge, ge.current)
    }

    function ve(t) {
        C(ge), _e === t && (_e = null), C(Ht)
    }

    var Ht = h(0);

    function Mu(t) {
        for (var e = t; e !== null;) {
            if (e.tag === 13) {
                var l = e.memoizedState;
                if (l !== null && (l = l.dehydrated, l === null || Bi(l) || Ki(l))) return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0) return e
            } else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return null;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        return null
    }

    var $e = 0, at = null, St = null, Bt = null, zu = !1, Ta = !1, $l = !1, _u = 0, pn = 0, Na = null, Xh = 0;

    function wt() {
        throw Error(s(321))
    }

    function Uo(t, e) {
        if (e === null) return !1;
        for (var l = 0; l < e.length && l < t.length; l++) if (!he(t[l], e[l])) return !1;
        return !0
    }

    function Ho(t, e, l, a, n, u) {
        return $e = u, at = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, _.H = t === null || t.memoizedState === null ? Uf : Fo, $l = !1, u = l(a, n), $l = !1, Ta && (u = Pr(e, l, a, n)), Ir(t), u
    }

    function Ir(t) {
        _.H = jn;
        var e = St !== null && St.next !== null;
        if ($e = 0, Bt = St = at = null, zu = !1, pn = 0, Na = null, e) throw Error(s(300));
        t === null || Kt || (t = t.dependencies, t !== null && pu(t) && (Kt = !0))
    }

    function Pr(t, e, l, a) {
        at = t;
        var n = 0;
        do {
            if (Ta && (Na = null), pn = 0, Ta = !1, 25 <= n) throw Error(s(301));
            if (n += 1, Bt = St = null, t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
            }
            _.H = Hf, u = e(l, a)
        } while (Ta);
        return u
    }

    function Zh() {
        var t = _.H, e = t.useState()[0];
        return e = typeof e.then == "function" ? bn(e) : e, t = t.useState()[0], (St !== null ? St.memoizedState : null) !== t && (at.flags |= 1024), e
    }

    function qo() {
        var t = _u !== 0;
        return _u = 0, t
    }

    function Ro(t, e, l) {
        e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l
    }

    function Lo(t) {
        if (zu) {
            for (t = t.memoizedState; t !== null;) {
                var e = t.queue;
                e !== null && (e.pending = null), t = t.next
            }
            zu = !1
        }
        $e = 0, Bt = St = at = null, Ta = !1, pn = _u = 0, Na = null
    }

    function ae() {
        var t = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
        return Bt === null ? at.memoizedState = Bt = t : Bt = Bt.next = t, Bt
    }

    function qt() {
        if (St === null) {
            var t = at.alternate;
            t = t !== null ? t.memoizedState : null
        } else t = St.next;
        var e = Bt === null ? at.memoizedState : Bt.next;
        if (e !== null) Bt = e, St = t; else {
            if (t === null) throw at.alternate === null ? Error(s(467)) : Error(s(310));
            St = t, t = {
                memoizedState: St.memoizedState,
                baseState    : St.baseState,
                baseQueue    : St.baseQueue,
                queue        : St.queue,
                next         : null
            }, Bt === null ? at.memoizedState = Bt = t : Bt = Bt.next = t
        }
        return Bt
    }

    function Ou() {
        return {lastEffect: null, events: null, stores: null, memoCache: null}
    }

    function bn(t) {
        var e = pn;
        return pn += 1, Na === null && (Na = []), t = Gr(Na, t, e), e = at, (Bt === null ? e.memoizedState : Bt.next) === null && (e = e.alternate, _.H = e === null || e.memoizedState === null ? Uf : Fo), t
    }

    function ku(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return bn(t);
            if (t.$$typeof === ut) return $t(t)
        }
        throw Error(s(438, String(t)))
    }

    function Bo(t) {
        var e = null, l = at.updateQueue;
        if (l !== null && (e = l.memoCache), e == null) {
            var a = at.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
                data     : a.data.map(function (n) {
                    return n.slice()
                }), index: 0
            })))
        }
        if (e == null && (e = {
            data : [],
            index: 0
        }), l === null && (l = Ou(), at.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = tt;
        return e.index++, l
    }

    function We(t, e) {
        return typeof e == "function" ? e(t) : e
    }

    function wu(t) {
        var e = qt();
        return Ko(e, St, t)
    }

    function Ko(t, e, l) {
        var a = t.queue;
        if (a === null) throw Error(s(311));
        a.lastRenderedReducer = l;
        var n = t.baseQueue, u = a.pending;
        if (u !== null) {
            if (n !== null) {
                var i = n.next;
                n.next = u.next, u.next = i
            }
            e.baseQueue = n = u, a.pending = null
        }
        if (u = t.baseState, n === null) t.memoizedState = u; else {
            e = n.next;
            var m = i = null, x = null, T = e, O = !1;
            do {
                var U = T.lane & -536870913;
                if (U !== T.lane ? (rt & U) === U : ($e & U) === U) {
                    var E = T.revertLane;
                    if (E === 0) x !== null && (x = x.next = {
                        lane         : 0,
                        revertLane   : 0,
                        gesture      : null,
                        action       : T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState   : T.eagerState,
                        next         : null
                    }), U === va && (O = !0); else if (($e & E) === E) {
                        T = T.next, E === va && (O = !0);
                        continue
                    } else U = {
                        lane         : 0,
                        revertLane   : T.revertLane,
                        gesture      : null,
                        action       : T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState   : T.eagerState,
                        next         : null
                    }, x === null ? (m = x = U, i = u) : x = x.next = U, at.lanes |= E, bl |= E;
                    U = T.action, $l && l(u, U), u = T.hasEagerState ? T.eagerState : l(u, U)
                } else E = {
                    lane         : U,
                    revertLane   : T.revertLane,
                    gesture      : T.gesture,
                    action       : T.action,
                    hasEagerState: T.hasEagerState,
                    eagerState   : T.eagerState,
                    next         : null
                }, x === null ? (m = x = E, i = u) : x = x.next = E, at.lanes |= U, bl |= U;
                T = T.next
            } while (T !== null && T !== e);
            if (x === null ? i = u : x.next = m, !he(u, t.memoizedState) && (Kt = !0, O && (l = pa, l !== null))) throw l;
            t.memoizedState = u, t.baseState = i, t.baseQueue = x, a.lastRenderedState = u
        }
        return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
    }

    function Yo(t) {
        var e = qt(), l = e.queue;
        if (l === null) throw Error(s(311));
        l.lastRenderedReducer = t;
        var a = l.dispatch, n = l.pending, u = e.memoizedState;
        if (n !== null) {
            l.pending = null;
            var i = n = n.next;
            do u = t(u, i.action), i = i.next; while (i !== n);
            he(u, e.memoizedState) || (Kt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u
        }
        return [u, a]
    }

    function tf(t, e, l) {
        var a = at, n = qt(), u = dt;
        if (u) {
            if (l === void 0) throw Error(s(407));
            l = l()
        } else l = e();
        var i = !he((St || n).memoizedState, l);
        if (i && (n.memoizedState = l, Kt = !0), n = n.queue, Xo(af.bind(null, a, n, t), [t]), n.getSnapshot !== e || i || Bt !== null && Bt.memoizedState.tag & 1) {
            if (a.flags |= 2048, Ea(9, {destroy: void 0}, lf.bind(null, a, n, l, e), null), Et === null) throw Error(s(349));
            u || ($e & 127) !== 0 || ef(a, e, l)
        }
        return l
    }

    function ef(t, e, l) {
        t.flags |= 16384, t = {
            getSnapshot: e,
            value      : l
        }, e = at.updateQueue, e === null ? (e = Ou(), at.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t))
    }

    function lf(t, e, l, a) {
        e.value = l, e.getSnapshot = a, nf(e) && uf(t)
    }

    function af(t, e, l) {
        return l(function () {
            nf(e) && uf(t)
        })
    }

    function nf(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var l = e();
            return !he(t, l)
        } catch {
            return !0
        }
    }

    function uf(t) {
        var e = Bl(t, 2);
        e !== null && re(e, t, 2)
    }

    function Go(t) {
        var e = ae();
        if (typeof t == "function") {
            var l = t;
            if (t = l(), $l) {
                cl(!0);
                try {
                    l()
                } finally {
                    cl(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t, e.queue = {
            pending            : null,
            lanes              : 0,
            dispatch           : null,
            lastRenderedReducer: We,
            lastRenderedState  : t
        }, e
    }

    function cf(t, e, l, a) {
        return t.baseState = l, Ko(t, St, typeof a == "function" ? a : We)
    }

    function Vh(t, e, l, a, n) {
        if (Uu(t)) throw Error(s(485));
        if (t = e.action, t !== null) {
            var u = {
                payload     : n,
                action      : t,
                next        : null,
                isTransition: !0,
                status      : "pending",
                value       : null,
                reason      : null,
                listeners   : [],
                then        : function (i) {
                    u.listeners.push(i)
                }
            };
            _.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, of(e, u)) : (u.next = l.next, e.pending = l.next = u)
        }
    }

    function of(t, e) {
        var l = e.action, a = e.payload, n = t.state;
        if (e.isTransition) {
            var u = _.T, i = {};
            _.T = i;
            try {
                var m = l(n, a), x = _.S;
                x !== null && x(i, m), sf(t, e, m)
            } catch (T) {
                Qo(t, e, T)
            } finally {
                u !== null && i.types !== null && (u.types = i.types), _.T = u
            }
        } else try {
            u = l(n, a), sf(t, e, u)
        } catch (T) {
            Qo(t, e, T)
        }
    }

    function sf(t, e, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function (a) {
            rf(t, e, a)
        }, function (a) {
            return Qo(t, e, a)
        }) : rf(t, e, l)
    }

    function rf(t, e, l) {
        e.status = "fulfilled", e.value = l, ff(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, of(t, l)))
    }

    function Qo(t, e, l) {
        var a = t.pending;
        if (t.pending = null, a !== null) {
            a = a.next;
            do e.status = "rejected", e.reason = l, ff(e), e = e.next; while (e !== a)
        }
        t.action = null
    }

    function ff(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++) (0, t[e])()
    }

    function df(t, e) {
        return e
    }

    function mf(t, e) {
        if (dt) {
            var l = Et.formState;
            if (l !== null) {
                t:{
                    var a = at;
                    if (dt) {
                        if (Mt) {
                            e:{
                                for (var n = Mt, u = ze; n.nodeType !== 8;) {
                                    if (!u) {
                                        n = null;
                                        break e
                                    }
                                    if (n = Oe(n.nextSibling), n === null) {
                                        n = null;
                                        break e
                                    }
                                }
                                u = n.data, n = u === "F!" || u === "F" ? n : null
                            }
                            if (n) {
                                Mt = Oe(n.nextSibling), a = n.data === "F!";
                                break t
                            }
                        }
                        fl(a)
                    }
                    a = !1
                }
                a && (e = l[0])
            }
        }
        return l = ae(), l.memoizedState = l.baseState = e, a = {
            pending            : null,
            lanes              : 0,
            dispatch           : null,
            lastRenderedReducer: df,
            lastRenderedState  : e
        }, l.queue = a, l = wf.bind(null, at, a), a.dispatch = l, a = Go(!1), u = Wo.bind(null, at, !1, a.queue), a = ae(), n = {
            state   : e,
            dispatch: null,
            action  : t,
            pending : null
        }, a.queue = n, l = Vh.bind(null, at, n, u, l), n.dispatch = l, a.memoizedState = t, [e, l, !1]
    }

    function yf(t) {
        var e = qt();
        return hf(e, St, t)
    }

    function hf(t, e, l) {
        if (e = Ko(t, e, df)[0], t = wu(We)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
            var a = bn(e)
        } catch (i) {
            throw i === ba ? ju : i
        } else a = e;
        e = qt();
        var n = e.queue, u = n.dispatch;
        return l !== e.memoizedState && (at.flags |= 2048, Ea(9, {destroy: void 0}, Jh.bind(null, n, l), null)), [a, u, t]
    }

    function Jh(t, e) {
        t.action = e
    }

    function xf(t) {
        var e = qt(), l = St;
        if (l !== null) return hf(e, l, t);
        qt(), e = e.memoizedState, l = qt();
        var a = l.queue.dispatch;
        return l.memoizedState = t, [e, a, !1]
    }

    function Ea(t, e, l, a) {
        return t = {
            tag   : t,
            create: l,
            deps  : a,
            inst  : e,
            next  : null
        }, e = at.updateQueue, e === null && (e = Ou(), at.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t
    }

    function gf() {
        return qt().memoizedState
    }

    function Du(t, e, l, a) {
        var n = ae();
        at.flags |= t, n.memoizedState = Ea(1 | e, {destroy: void 0}, l, a === void 0 ? null : a)
    }

    function Cu(t, e, l, a) {
        var n = qt();
        a = a === void 0 ? null : a;
        var u = n.memoizedState.inst;
        St !== null && a !== null && Uo(a, St.memoizedState.deps) ? n.memoizedState = Ea(e, u, l, a) : (at.flags |= t, n.memoizedState = Ea(1 | e, u, l, a))
    }

    function vf(t, e) {
        Du(8390656, 8, t, e)
    }

    function Xo(t, e) {
        Cu(2048, 8, t, e)
    }

    function $h(t) {
        at.flags |= 4;
        var e = at.updateQueue;
        if (e === null) e = Ou(), at.updateQueue = e, e.events = [t]; else {
            var l = e.events;
            l === null ? e.events = [t] : l.push(t)
        }
    }

    function pf(t) {
        var e = qt().memoizedState;
        return $h({ref: e, nextImpl: t}), function () {
            if ((xt & 2) !== 0) throw Error(s(440));
            return e.impl.apply(void 0, arguments)
        }
    }

    function bf(t, e) {
        return Cu(4, 2, t, e)
    }

    function Sf(t, e) {
        return Cu(4, 4, t, e)
    }

    function jf(t, e) {
        if (typeof e == "function") {
            t = t();
            var l = e(t);
            return function () {
                typeof l == "function" ? l() : e(null)
            }
        }
        if (e != null) return t = t(), e.current = t, function () {
            e.current = null
        }
    }

    function Tf(t, e, l) {
        l = l != null ? l.concat([t]) : null, Cu(4, 4, jf.bind(null, e, t), l)
    }

    function Zo() {
    }

    function Nf(t, e) {
        var l = qt();
        e = e === void 0 ? null : e;
        var a = l.memoizedState;
        return e !== null && Uo(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t)
    }

    function Ef(t, e) {
        var l = qt();
        e = e === void 0 ? null : e;
        var a = l.memoizedState;
        if (e !== null && Uo(e, a[1])) return a[0];
        if (a = t(), $l) {
            cl(!0);
            try {
                t()
            } finally {
                cl(!1)
            }
        }
        return l.memoizedState = [a, e], a
    }

    function Vo(t, e, l) {
        return l === void 0 || ($e & 1073741824) !== 0 && (rt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Ad(), at.lanes |= t, bl |= t, l)
    }

    function Af(t, e, l, a) {
        return he(l, e) ? l : ja.current !== null ? (t = Vo(t, l, a), he(t, e) || (Kt = !0), t) : ($e & 42) === 0 || ($e & 1073741824) !== 0 && (rt & 261930) === 0 ? (Kt = !0, t.memoizedState = l) : (t = Ad(), at.lanes |= t, bl |= t, e)
    }

    function Mf(t, e, l, a, n) {
        var u = k.p;
        k.p = u !== 0 && 8 > u ? u : 8;
        var i = _.T, m = {};
        _.T = m, Wo(t, !1, e, l);
        try {
            var x = n(), T = _.S;
            if (T !== null && T(m, x), x !== null && typeof x == "object" && typeof x.then == "function") {
                var O = Qh(x, a);
                Sn(t, e, O, Se(t))
            } else Sn(t, e, a, Se(t))
        } catch (U) {
            Sn(t, e, {
                then     : function () {
                }, status: "rejected", reason: U
            }, Se())
        } finally {
            k.p = u, i !== null && m.types !== null && (i.types = m.types), _.T = i
        }
    }

    function Wh() {
    }

    function Jo(t, e, l, a) {
        if (t.tag !== 5) throw Error(s(476));
        var n = zf(t).queue;
        Mf(t, n, e, $, l === null ? Wh : function () {
            return _f(t), l(a)
        })
    }

    function zf(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: $,
            baseState    : $,
            baseQueue    : null,
            queue        : {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: We, lastRenderedState: $},
            next         : null
        };
        var l = {};
        return e.next = {
            memoizedState: l,
            baseState    : l,
            baseQueue    : null,
            queue        : {
                pending            : null,
                lanes              : 0,
                dispatch           : null,
                lastRenderedReducer: We,
                lastRenderedState  : l
            },
            next         : null
        }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
    }

    function _f(t) {
        var e = zf(t);
        e.next === null && (e = t.alternate.memoizedState), Sn(t, e.next.queue, {}, Se())
    }

    function $o() {
        return $t(Rn)
    }

    function Of() {
        return qt().memoizedState
    }

    function kf() {
        return qt().memoizedState
    }

    function Fh(t) {
        for (var e = t.return; e !== null;) {
            switch (e.tag) {
                case 24:
                case 3:
                    var l = Se();
                    t = yl(l);
                    var a = hl(e, t, l);
                    a !== null && (re(a, e, l), xn(a, e, l)), e = {cache: No()}, t.payload = e;
                    return
            }
            e = e.return
        }
    }

    function Ih(t, e, l) {
        var a = Se();
        l = {
            lane         : a,
            revertLane   : 0,
            gesture      : null,
            action       : l,
            hasEagerState: !1,
            eagerState   : null,
            next         : null
        }, Uu(t) ? Df(e, l) : (l = mo(t, e, l, a), l !== null && (re(l, t, a), Cf(l, e, a)))
    }

    function wf(t, e, l) {
        var a = Se();
        Sn(t, e, l, a)
    }

    function Sn(t, e, l, a) {
        var n = {lane: a, revertLane: 0, gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null};
        if (Uu(t)) Df(e, n); else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
                var i = e.lastRenderedState, m = u(i, l);
                if (n.hasEagerState = !0, n.eagerState = m, he(m, i)) return hu(t, e, n, 0), Et === null && yu(), !1
            } catch {
            } finally {
            }
            if (l = mo(t, e, n, a), l !== null) return re(l, t, a), Cf(l, e, a), !0
        }
        return !1
    }

    function Wo(t, e, l, a) {
        if (a = {
            lane         : 2,
            revertLane   : zi(),
            gesture      : null,
            action       : a,
            hasEagerState: !1,
            eagerState   : null,
            next         : null
        }, Uu(t)) {
            if (e) throw Error(s(479))
        } else e = mo(t, l, a, 2), e !== null && re(e, t, 2)
    }

    function Uu(t) {
        var e = t.alternate;
        return t === at || e !== null && e === at
    }

    function Df(t, e) {
        Ta = zu = !0;
        var l = t.pending;
        l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e
    }

    function Cf(t, e, l) {
        if ((l & 4194048) !== 0) {
            var a = e.lanes;
            a &= t.pendingLanes, l |= a, e.lanes = l, Rs(t, l)
        }
    }

    var jn = {
        readContext            : $t,
        use                    : ku,
        useCallback            : wt,
        useContext             : wt,
        useEffect              : wt,
        useImperativeHandle    : wt,
        useLayoutEffect        : wt,
        useInsertionEffect     : wt,
        useMemo                : wt,
        useReducer             : wt,
        useRef                 : wt,
        useState               : wt,
        useDebugValue          : wt,
        useDeferredValue       : wt,
        useTransition          : wt,
        useSyncExternalStore   : wt,
        useId                  : wt,
        useHostTransitionStatus: wt,
        useFormState           : wt,
        useActionState         : wt,
        useOptimistic          : wt,
        useMemoCache           : wt,
        useCacheRefresh        : wt
    };
    jn.useEffectEvent = wt;
    var Uf = {
        readContext               : $t, use: ku, useCallback: function (t, e) {
            return ae().memoizedState = [t, e === void 0 ? null : e], t
        }, useContext             : $t, useEffect: vf, useImperativeHandle: function (t, e, l) {
            l = l != null ? l.concat([t]) : null, Du(4194308, 4, jf.bind(null, e, t), l)
        }, useLayoutEffect        : function (t, e) {
            return Du(4194308, 4, t, e)
        }, useInsertionEffect     : function (t, e) {
            Du(4, 2, t, e)
        }, useMemo                : function (t, e) {
            var l = ae();
            e = e === void 0 ? null : e;
            var a = t();
            if ($l) {
                cl(!0);
                try {
                    t()
                } finally {
                    cl(!1)
                }
            }
            return l.memoizedState = [a, e], a
        }, useReducer             : function (t, e, l) {
            var a = ae();
            if (l !== void 0) {
                var n = l(e);
                if ($l) {
                    cl(!0);
                    try {
                        l(e)
                    } finally {
                        cl(!1)
                    }
                }
            } else n = e;
            return a.memoizedState = a.baseState = n, t = {
                pending            : null,
                lanes              : 0,
                dispatch           : null,
                lastRenderedReducer: t,
                lastRenderedState  : n
            }, a.queue = t, t = t.dispatch = Ih.bind(null, at, t), [a.memoizedState, t]
        }, useRef                 : function (t) {
            var e = ae();
            return t = {current: t}, e.memoizedState = t
        }, useState               : function (t) {
            t = Go(t);
            var e = t.queue, l = wf.bind(null, at, e);
            return e.dispatch = l, [t.memoizedState, l]
        }, useDebugValue          : Zo, useDeferredValue: function (t, e) {
            var l = ae();
            return Vo(l, t, e)
        }, useTransition          : function () {
            var t = Go(!1);
            return t = Mf.bind(null, at, t.queue, !0, !1), ae().memoizedState = t, [!1, t]
        }, useSyncExternalStore   : function (t, e, l) {
            var a = at, n = ae();
            if (dt) {
                if (l === void 0) throw Error(s(407));
                l = l()
            } else {
                if (l = e(), Et === null) throw Error(s(349));
                (rt & 127) !== 0 || ef(a, e, l)
            }
            n.memoizedState = l;
            var u = {value: l, getSnapshot: e};
            return n.queue = u, vf(af.bind(null, a, u, t), [t]), a.flags |= 2048, Ea(9, {destroy: void 0}, lf.bind(null, a, u, l, e), null), l
        }, useId                  : function () {
            var t = ae(), e = Et.identifierPrefix;
            if (dt) {
                var l = Re, a = qe;
                l = (a & ~(1 << 32 - ye(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = _u++, 0 < l && (e += "H" + l.toString(32)), e += "_"
            } else l = Xh++, e = "_" + e + "r_" + l.toString(32) + "_";
            return t.memoizedState = e
        }, useHostTransitionStatus: $o, useFormState: mf, useActionState: mf, useOptimistic: function (t) {
            var e = ae();
            e.memoizedState = e.baseState = t;
            var l = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null};
            return e.queue = l, e = Wo.bind(null, at, !0, l), l.dispatch = e, [t, e]
        }, useMemoCache           : Bo, useCacheRefresh: function () {
            return ae().memoizedState = Fh.bind(null, at)
        }, useEffectEvent         : function (t) {
            var e = ae(), l = {impl: t};
            return e.memoizedState = l, function () {
                if ((xt & 2) !== 0) throw Error(s(440));
                return l.impl.apply(void 0, arguments)
            }
        }
    }, Fo  = {
        readContext            : $t,
        use                    : ku,
        useCallback            : Nf,
        useContext             : $t,
        useEffect              : Xo,
        useImperativeHandle    : Tf,
        useInsertionEffect     : bf,
        useLayoutEffect        : Sf,
        useMemo                : Ef,
        useReducer             : wu,
        useRef                 : gf,
        useState               : function () {
            return wu(We)
        },
        useDebugValue          : Zo,
        useDeferredValue       : function (t, e) {
            var l = qt();
            return Af(l, St.memoizedState, t, e)
        },
        useTransition          : function () {
            var t = wu(We)[0], e = qt().memoizedState;
            return [typeof t == "boolean" ? t : bn(t), e]
        },
        useSyncExternalStore   : tf,
        useId                  : Of,
        useHostTransitionStatus: $o,
        useFormState           : yf,
        useActionState         : yf,
        useOptimistic          : function (t, e) {
            var l = qt();
            return cf(l, St, t, e)
        },
        useMemoCache           : Bo,
        useCacheRefresh        : kf
    };
    Fo.useEffectEvent = pf;
    var Hf = {
        readContext            : $t,
        use                    : ku,
        useCallback            : Nf,
        useContext             : $t,
        useEffect              : Xo,
        useImperativeHandle    : Tf,
        useInsertionEffect     : bf,
        useLayoutEffect        : Sf,
        useMemo                : Ef,
        useReducer             : Yo,
        useRef                 : gf,
        useState               : function () {
            return Yo(We)
        },
        useDebugValue          : Zo,
        useDeferredValue       : function (t, e) {
            var l = qt();
            return St === null ? Vo(l, t, e) : Af(l, St.memoizedState, t, e)
        },
        useTransition          : function () {
            var t = Yo(We)[0], e = qt().memoizedState;
            return [typeof t == "boolean" ? t : bn(t), e]
        },
        useSyncExternalStore   : tf,
        useId                  : Of,
        useHostTransitionStatus: $o,
        useFormState           : xf,
        useActionState         : xf,
        useOptimistic          : function (t, e) {
            var l = qt();
            return St !== null ? cf(l, St, t, e) : (l.baseState = t, [t, l.queue.dispatch])
        },
        useMemoCache           : Bo,
        useCacheRefresh        : kf
    };
    Hf.useEffectEvent = pf;

    function Io(t, e, l, a) {
        e = t.memoizedState, l = l(a, e), l = l == null ? e : z({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l)
    }

    var Po = {
        enqueueSetState       : function (t, e, l) {
            t = t._reactInternals;
            var a = Se(), n = yl(a);
            n.payload = e, l != null && (n.callback = l), e = hl(t, n, a), e !== null && (re(e, t, a), xn(e, t, a))
        }, enqueueReplaceState: function (t, e, l) {
            t = t._reactInternals;
            var a = Se(), n = yl(a);
            n.tag = 1, n.payload = e, l != null && (n.callback = l), e = hl(t, n, a), e !== null && (re(e, t, a), xn(e, t, a))
        }, enqueueForceUpdate : function (t, e) {
            t = t._reactInternals;
            var l = Se(), a = yl(l);
            a.tag = 2, e != null && (a.callback = e), e = hl(t, a, l), e !== null && (re(e, t, l), xn(e, t, l))
        }
    };

    function qf(t, e, l, a, n, u, i) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !on(l, a) || !on(n, u) : !0
    }

    function Rf(t, e, l, a) {
        t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Po.enqueueReplaceState(e, e.state, null)
    }

    function Wl(t, e) {
        var l = e;
        if ("ref" in e) {
            l = {};
            for (var a in e) a !== "ref" && (l[a] = e[a])
        }
        if (t = t.defaultProps) {
            l === e && (l = z({}, l));
            for (var n in t) l[n] === void 0 && (l[n] = t[n])
        }
        return l
    }

    function Lf(t) {
        mu(t)
    }

    function Bf(t) {
        console.error(t)
    }

    function Kf(t) {
        mu(t)
    }

    function Hu(t, e) {
        try {
            var l = t.onUncaughtError;
            l(e.value, {componentStack: e.stack})
        } catch (a) {
            setTimeout(function () {
                throw a
            })
        }
    }

    function Yf(t, e, l) {
        try {
            var a = t.onCaughtError;
            a(l.value, {componentStack: l.stack, errorBoundary: e.tag === 1 ? e.stateNode : null})
        } catch (n) {
            setTimeout(function () {
                throw n
            })
        }
    }

    function ti(t, e, l) {
        return l = yl(l), l.tag = 3, l.payload = {element: null}, l.callback = function () {
            Hu(t, e)
        }, l
    }

    function Gf(t) {
        return t = yl(t), t.tag = 3, t
    }

    function Qf(t, e, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = a.value;
            t.payload = function () {
                return n(u)
            }, t.callback = function () {
                Yf(e, l, a)
            }
        }
        var i = l.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (t.callback = function () {
            Yf(e, l, a), typeof n != "function" && (Sl === null ? Sl = new Set([this]) : Sl.add(this));
            var m = a.stack;
            this.componentDidCatch(a.value, {componentStack: m !== null ? m : ""})
        })
    }

    function Ph(t, e, l, a, n) {
        if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (e = l.alternate, e !== null && ga(e, l, n, !0), l = ge.current, l !== null) {
                switch (l.tag) {
                    case 31:
                    case 13:
                        return _e === null ? Ju() : l.alternate === null && Dt === 0 && (Dt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Tu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = new Set([a]) : e.add(a), Ei(t, a, n)), !1;
                    case 22:
                        return l.flags |= 65536, a === Tu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                            transitions    : null,
                            markerInstances: null,
                            retryQueue     : new Set([a])
                        }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = new Set([a]) : l.add(a)), Ei(t, a, n)), !1
                }
                throw Error(s(435, l.tag))
            }
            return Ei(t, a, n), Ju(), !1
        }
        if (dt) return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== po && (t = Error(s(422), {cause: a}), fn(Ee(t, l)))) : (a !== po && (e = Error(s(423), {cause: a}), fn(Ee(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Ee(a, l), n = ti(t.stateNode, a, n), Oo(t, n), Dt !== 4 && (Dt = 2)), !1;
        var u = Error(s(520), {cause: a});
        if (u = Ee(u, l), On === null ? On = [u] : On.push(u), Dt !== 4 && (Dt = 2), e === null) return !0;
        a = Ee(a, l), l = e;
        do {
            switch (l.tag) {
                case 3:
                    return l.flags |= 65536, t = n & -n, l.lanes |= t, t = ti(l.stateNode, a, t), Oo(l, t), !1;
                case 1:
                    if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Sl === null || !Sl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = Gf(n), Qf(n, t, l, a), Oo(l, n), !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }

    var ei = Error(s(461)), Kt = !1;

    function Wt(t, e, l, a) {
        e.child = t === null ? Vr(e, null, l, a) : Jl(e, t.child, l, a)
    }

    function Xf(t, e, l, a, n) {
        l = l.render;
        var u = e.ref;
        if ("ref" in a) {
            var i = {};
            for (var m in a) m !== "ref" && (i[m] = a[m])
        } else i = a;
        return Ql(e), a = Ho(t, e, l, i, u, n), m = qo(), t !== null && !Kt ? (Ro(t, e, n), Fe(t, e, n)) : (dt && m && go(e), e.flags |= 1, Wt(t, e, a, n), e.child)
    }

    function Zf(t, e, l, a, n) {
        if (t === null) {
            var u = l.type;
            return typeof u == "function" && !yo(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Vf(t, e, u, a, n)) : (t = gu(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t)
        }
        if (u = t.child, !si(t, n)) {
            var i = u.memoizedProps;
            if (l = l.compare, l = l !== null ? l : on, l(i, a) && t.ref === e.ref) return Fe(t, e, n)
        }
        return e.flags |= 1, t = Xe(u, a), t.ref = e.ref, t.return = e, e.child = t
    }

    function Vf(t, e, l, a, n) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (on(u, a) && t.ref === e.ref) if (Kt = !1, e.pendingProps = a = u, si(t, n)) (t.flags & 131072) !== 0 && (Kt = !0); else return e.lanes = t.lanes, Fe(t, e, n)
        }
        return li(t, e, l, a, n)
    }

    function Jf(t, e, l, a) {
        var n = a.children, u = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
            _visibility    : 1,
            _pendingMarkers: null,
            _retryCache    : null,
            _transitions   : null
        }), a.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | l : l, t !== null) {
                    for (a = e.child = t.child, n = 0; a !== null;) n = n | a.lanes | a.childLanes, a = a.sibling;
                    a = n & ~u
                } else a = 0, e.child = null;
                return $f(t, e, u, l, a)
            }
            if ((l & 536870912) !== 0) e.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, t !== null && Su(e, u !== null ? u.cachePool : null), u !== null ? Wr(e, u) : wo(), Fr(e); else return a = e.lanes = 536870912, $f(t, e, u !== null ? u.baseLanes | l : l, l, a)
        } else u !== null ? (Su(e, u.cachePool), Wr(e, u), gl(), e.memoizedState = null) : (t !== null && Su(e, null), wo(), gl());
        return Wt(t, e, n, l), e.child
    }

    function Tn(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility    : 1,
            _pendingMarkers: null,
            _retryCache    : null,
            _transitions   : null
        }), e.sibling
    }

    function $f(t, e, l, a, n) {
        var u = Ao();
        return u = u === null ? null : {parent: Lt._currentValue, pool: u}, e.memoizedState = {
            baseLanes: l,
            cachePool: u
        }, t !== null && Su(e, null), wo(), Fr(e), t !== null && ga(t, e, a, !0), e.childLanes = n, null
    }

    function qu(t, e) {
        return e = Lu({mode: e.mode, children: e.children}, t.mode), e.ref = t.ref, t.child = e, e.return = t, e
    }

    function Wf(t, e, l) {
        return Jl(e, t.child, null, l), t = qu(e, e.pendingProps), t.flags |= 2, ve(e), e.memoizedState = null, t
    }

    function tx(t, e, l) {
        var a = e.pendingProps, n = (e.flags & 128) !== 0;
        if (e.flags &= -129, t === null) {
            if (dt) {
                if (a.mode === "hidden") return t = qu(e, a), e.lanes = 536870912, Tn(null, t);
                if (Co(e), (t = Mt) ? (t = im(t, ze), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
                    dehydrated     : t,
                    treeContext    : sl !== null ? {
                        id      : qe,
                        overflow: Re
                    } : null,
                    retryLane      : 536870912,
                    hydrationErrors: null
                }, l = wr(t), l.return = e, e.child = l, Jt = e, Mt = null)) : t = null, t === null) throw fl(e);
                return e.lanes = 536870912, null
            }
            return qu(e, a)
        }
        var u = t.memoizedState;
        if (u !== null) {
            var i = u.dehydrated;
            if (Co(e), n) if (e.flags & 256) e.flags &= -257, e = Wf(t, e, l); else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null; else throw Error(s(558)); else if (Kt || ga(t, e, l, !1), n = (l & t.childLanes) !== 0, Kt || n) {
                if (a = Et, a !== null && (i = Ls(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Bl(t, i), re(a, t, i), ei;
                Ju(), e = Wf(t, e, l)
            } else t = u.treeContext, Mt = Oe(i.nextSibling), Jt = e, dt = !0, rl = null, ze = !1, t !== null && Ur(e, t), e = qu(e, a), e.flags |= 4096;
            return e
        }
        return t = Xe(t.child, {mode: a.mode, children: a.children}), t.ref = e.ref, e.child = t, t.return = e, t
    }

    function Ru(t, e) {
        var l = e.ref;
        if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816); else {
            if (typeof l != "function" && typeof l != "object") throw Error(s(284));
            (t === null || t.ref !== l) && (e.flags |= 4194816)
        }
    }

    function li(t, e, l, a, n) {
        return Ql(e), l = Ho(t, e, l, a, void 0, n), a = qo(), t !== null && !Kt ? (Ro(t, e, n), Fe(t, e, n)) : (dt && a && go(e), e.flags |= 1, Wt(t, e, l, n), e.child)
    }

    function Ff(t, e, l, a, n, u) {
        return Ql(e), e.updateQueue = null, l = Pr(e, a, l, n), Ir(t), a = qo(), t !== null && !Kt ? (Ro(t, e, u), Fe(t, e, u)) : (dt && a && go(e), e.flags |= 1, Wt(t, e, l, u), e.child)
    }

    function If(t, e, l, a, n) {
        if (Ql(e), e.stateNode === null) {
            var u = ma, i = l.contextType;
            typeof i == "object" && i !== null && (u = $t(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Po, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, zo(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? $t(i) : ma, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Io(e, l, i, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Po.enqueueReplaceState(u, u.state, null), vn(e, a, u, n), gn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0
        } else if (t === null) {
            u = e.stateNode;
            var m = e.memoizedProps, x = Wl(l, m);
            u.props = x;
            var T = u.context, O = l.contextType;
            i = ma, typeof O == "object" && O !== null && (i = $t(O));
            var U = l.getDerivedStateFromProps;
            O = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function", m = e.pendingProps !== m, O || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m || T !== i) && Rf(e, u, a, i), ml = !1;
            var E = e.memoizedState;
            u.state = E, vn(e, a, u, n), gn(), T = e.memoizedState, m || E !== T || ml ? (typeof U == "function" && (Io(e, l, U, a), T = e.memoizedState), (x = ml || qf(e, l, x, a, E, T, i)) ? (O || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = T), u.props = a, u.state = T, u.context = i, a = x) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1)
        } else {
            u = e.stateNode, _o(t, e), i = e.memoizedProps, O = Wl(l, i), u.props = O, U = e.pendingProps, E = u.context, T = l.contextType, x = ma, typeof T == "object" && T !== null && (x = $t(T)), m = l.getDerivedStateFromProps, (T = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== U || E !== x) && Rf(e, u, a, x), ml = !1, E = e.memoizedState, u.state = E, vn(e, a, u, n), gn();
            var M = e.memoizedState;
            i !== U || E !== M || ml || t !== null && t.dependencies !== null && pu(t.dependencies) ? (typeof m == "function" && (Io(e, l, m, a), M = e.memoizedState), (O = ml || qf(e, l, O, a, E, M, x) || t !== null && t.dependencies !== null && pu(t.dependencies)) ? (T || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, x), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, M, x)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = M), u.props = a, u.state = M, u.context = x, a = O) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), a = !1)
        }
        return u = a, Ru(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Jl(e, t.child, null, n), e.child = Jl(e, null, l, n)) : Wt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = Fe(t, e, n), t
    }

    function Pf(t, e, l, a) {
        return Yl(), e.flags |= 256, Wt(t, e, l, a), e.child
    }

    var ai = {dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null};

    function ni(t) {
        return {baseLanes: t, cachePool: Kr()}
    }

    function ui(t, e, l) {
        return t = t !== null ? t.childLanes & ~l : 0, e && (t |= be), t
    }

    function td(t, e, l) {
        var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, i;
        if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Ht.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
            if (dt) {
                if (n ? xl(e) : gl(), (t = Mt) ? (t = im(t, ze), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
                    dehydrated     : t,
                    treeContext    : sl !== null ? {
                        id      : qe,
                        overflow: Re
                    } : null,
                    retryLane      : 536870912,
                    hydrationErrors: null
                }, l = wr(t), l.return = e, e.child = l, Jt = e, Mt = null)) : t = null, t === null) throw fl(e);
                return Ki(t) ? e.lanes = 32 : e.lanes = 536870912, null
            }
            var m = a.children;
            return a = a.fallback, n ? (gl(), n = e.mode, m = Lu({
                mode    : "hidden",
                children: m
            }, n), a = Kl(a, n, l, null), m.return = e, a.return = e, m.sibling = a, e.child = m, a = e.child, a.memoizedState = ni(l), a.childLanes = ui(t, i, l), e.memoizedState = ai, Tn(null, a)) : (xl(e), ci(e, m))
        }
        var x = t.memoizedState;
        if (x !== null && (m = x.dehydrated, m !== null)) {
            if (u) e.flags & 256 ? (xl(e), e.flags &= -257, e = oi(t, e, l)) : e.memoizedState !== null ? (gl(), e.child = t.child, e.flags |= 128, e = null) : (gl(), m = a.fallback, n = e.mode, a = Lu({
                mode    : "visible",
                children: a.children
            }, n), m = Kl(m, n, l, null), m.flags |= 2, a.return = e, m.return = e, a.sibling = m, e.child = a, Jl(e, t.child, null, l), a = e.child, a.memoizedState = ni(l), a.childLanes = ui(t, i, l), e.memoizedState = ai, e = Tn(null, a)); else if (xl(e), Ki(m)) {
                if (i = m.nextSibling && m.nextSibling.dataset, i) var T = i.dgst;
                i = T, a = Error(s(419)), a.stack = "", a.digest = i, fn({
                    value : a,
                    source: null,
                    stack : null
                }), e = oi(t, e, l)
            } else if (Kt || ga(t, e, l, !1), i = (l & t.childLanes) !== 0, Kt || i) {
                if (i = Et, i !== null && (a = Ls(i, l), a !== 0 && a !== x.retryLane)) throw x.retryLane = a, Bl(t, a), re(i, t, a), ei;
                Bi(m) || Ju(), e = oi(t, e, l)
            } else Bi(m) ? (e.flags |= 192, e.child = t.child, e = null) : (t = x.treeContext, Mt = Oe(m.nextSibling), Jt = e, dt = !0, rl = null, ze = !1, t !== null && Ur(e, t), e = ci(e, a.children), e.flags |= 4096);
            return e
        }
        return n ? (gl(), m = a.fallback, n = e.mode, x = t.child, T = x.sibling, a = Xe(x, {
            mode    : "hidden",
            children: a.children
        }), a.subtreeFlags = x.subtreeFlags & 65011712, T !== null ? m = Xe(T, m) : (m = Kl(m, n, l, null), m.flags |= 2), m.return = e, a.return = e, a.sibling = m, e.child = a, Tn(null, a), a = e.child, m = t.child.memoizedState, m === null ? m = ni(l) : (n = m.cachePool, n !== null ? (x = Lt._currentValue, n = n.parent !== x ? {
            parent: x,
            pool  : x
        } : n) : n = Kr(), m = {
            baseLanes: m.baseLanes | l,
            cachePool: n
        }), a.memoizedState = m, a.childLanes = ui(t, i, l), e.memoizedState = ai, Tn(t.child, a)) : (xl(e), l = t.child, t = l.sibling, l = Xe(l, {
            mode    : "visible",
            children: a.children
        }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l)
    }

    function ci(t, e) {
        return e = Lu({mode: "visible", children: e}, t.mode), e.return = t, t.child = e
    }

    function Lu(t, e) {
        return t = xe(22, t, null, e), t.lanes = 0, t
    }

    function oi(t, e, l) {
        return Jl(e, t.child, null, l), t = ci(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
    }

    function ed(t, e, l) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e), jo(t.return, e, l)
    }

    function ii(t, e, l, a, n, u) {
        var i = t.memoizedState;
        i === null ? t.memoizedState = {
            isBackwards       : e,
            rendering         : null,
            renderingStartTime: 0,
            last              : a,
            tail              : l,
            tailMode          : n,
            treeForkCount     : u
        } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n, i.treeForkCount = u)
    }

    function ld(t, e, l) {
        var a = e.pendingProps, n = a.revealOrder, u = a.tail;
        a = a.children;
        var i = Ht.current, m = (i & 2) !== 0;
        if (m ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, K(Ht, i), Wt(t, e, a, l), a = dt ? rn : 0, !m && t !== null && (t.flags & 128) !== 0) t:for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && ed(t, l, e); else if (t.tag === 19) ed(t, l, e); else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break t;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break t;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        switch (n) {
            case"forwards":
                for (l = e.child, n = null; l !== null;) t = l.alternate, t !== null && Mu(t) === null && (n = l), l = l.sibling;
                l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), ii(e, !1, n, l, u, a);
                break;
            case"backwards":
            case"unstable_legacy-backwards":
                for (l = null, n = e.child, e.child = null; n !== null;) {
                    if (t = n.alternate, t !== null && Mu(t) === null) {
                        e.child = n;
                        break
                    }
                    t = n.sibling, n.sibling = l, l = n, n = t
                }
                ii(e, !0, l, null, u, a);
                break;
            case"together":
                ii(e, !1, null, null, void 0, a);
                break;
            default:
                e.memoizedState = null
        }
        return e.child
    }

    function Fe(t, e, l) {
        if (t !== null && (e.dependencies = t.dependencies), bl |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
            if (ga(t, e, l, !1), (l & e.childLanes) === 0) return null
        } else return null;
        if (t !== null && e.child !== t.child) throw Error(s(153));
        if (e.child !== null) {
            for (t = e.child, l = Xe(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null;) t = t.sibling, l = l.sibling = Xe(t, t.pendingProps), l.return = e;
            l.sibling = null
        }
        return e.child
    }

    function si(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && pu(t)))
    }

    function ex(t, e, l) {
        switch (e.tag) {
            case 3:
                le(e, e.stateNode.containerInfo), dl(e, Lt, t.memoizedState.cache), Yl();
                break;
            case 27:
            case 5:
                Ja(e);
                break;
            case 4:
                le(e, e.stateNode.containerInfo);
                break;
            case 10:
                dl(e, e.type, e.memoizedProps.value);
                break;
            case 31:
                if (e.memoizedState !== null) return e.flags |= 128, Co(e), null;
                break;
            case 13:
                var a = e.memoizedState;
                if (a !== null) return a.dehydrated !== null ? (xl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? td(t, e, l) : (xl(e), t = Fe(t, e, l), t !== null ? t.sibling : null);
                xl(e);
                break;
            case 19:
                var n = (t.flags & 128) !== 0;
                if (a = (l & e.childLanes) !== 0, a || (ga(t, e, l, !1), a = (l & e.childLanes) !== 0), n) {
                    if (a) return ld(t, e, l);
                    e.flags |= 128
                }
                if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), K(Ht, Ht.current), a) break;
                return null;
            case 22:
                return e.lanes = 0, Jf(t, e, l, e.pendingProps);
            case 24:
                dl(e, Lt, t.memoizedState.cache)
        }
        return Fe(t, e, l)
    }

    function ad(t, e, l) {
        if (t !== null) if (t.memoizedProps !== e.pendingProps) Kt = !0; else {
            if (!si(t, l) && (e.flags & 128) === 0) return Kt = !1, ex(t, e, l);
            Kt = (t.flags & 131072) !== 0
        } else Kt = !1, dt && (e.flags & 1048576) !== 0 && Cr(e, rn, e.index);
        switch (e.lanes = 0, e.tag) {
            case 16:
                t:{
                    var a = e.pendingProps;
                    if (t = Zl(e.elementType), e.type = t, typeof t == "function") yo(t) ? (a = Wl(t, a), e.tag = 1, e = If(null, e, t, a, l)) : (e.tag = 0, e = li(null, e, t, a, l)); else {
                        if (t != null) {
                            var n = t.$$typeof;
                            if (n === B) {
                                e.tag = 11, e = Xf(null, e, t, a, l);
                                break t
                            } else if (n === X) {
                                e.tag = 14, e = Zf(null, e, t, a, l);
                                break t
                            }
                        }
                        throw e = fe(t) || t, Error(s(306, e, ""))
                    }
                }
                return e;
            case 0:
                return li(t, e, e.type, e.pendingProps, l);
            case 1:
                return a = e.type, n = Wl(a, e.pendingProps), If(t, e, a, n, l);
            case 3:
                t:{
                    if (le(e, e.stateNode.containerInfo), t === null) throw Error(s(387));
                    a = e.pendingProps;
                    var u = e.memoizedState;
                    n = u.element, _o(t, e), vn(e, a, null, l);
                    var i = e.memoizedState;
                    if (a = i.cache, dl(e, Lt, a), a !== u.cache && To(e, [Lt], l, !0), gn(), a = i.element, u.isDehydrated) if (u = {
                        element     : a,
                        isDehydrated: !1,
                        cache       : i.cache
                    }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
                        e = Pf(t, e, a, l);
                        break t
                    } else if (a !== n) {
                        n = Ee(Error(s(424)), e), fn(n), e = Pf(t, e, a, l);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo, t.nodeType) {
                            case 9:
                                t = t.body;
                                break;
                            default:
                                t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Mt = Oe(t.firstChild), Jt = e, dt = !0, rl = null, ze = !0, l = Vr(e, null, a, l), e.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling
                    } else {
                        if (Yl(), a === n) {
                            e = Fe(t, e, l);
                            break t
                        }
                        Wt(t, e, a, l)
                    }
                    e = e.child
                }
                return e;
            case 26:
                return Ru(t, e), t === null ? (l = ym(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : dt || (l = e.type, t = e.pendingProps, a = ec(ot.current).createElement(l), a[Vt] = e, a[ne] = t, Ft(a, l, t), Qt(a), e.stateNode = a) : e.memoizedState = ym(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
            case 27:
                return Ja(e), t === null && dt && (a = e.stateNode = fm(e.type, e.pendingProps, ot.current), Jt = e, ze = !0, n = Mt, El(e.type) ? (Yi = n, Mt = Oe(a.firstChild)) : Mt = n), Wt(t, e, e.pendingProps.children, l), Ru(t, e), t === null && (e.flags |= 4194304), e.child;
            case 5:
                return t === null && dt && ((n = a = Mt) && (a = kx(a, e.type, e.pendingProps, ze), a !== null ? (e.stateNode = a, Jt = e, Mt = Oe(a.firstChild), ze = !1, n = !0) : n = !1), n || fl(e)), Ja(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, qi(n, u) ? a = null : i !== null && qi(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = Ho(t, e, Zh, null, null, l), Rn._currentValue = n), Ru(t, e), Wt(t, e, a, l), e.child;
            case 6:
                return t === null && dt && ((t = l = Mt) && (l = wx(l, e.pendingProps, ze), l !== null ? (e.stateNode = l, Jt = e, Mt = null, t = !0) : t = !1), t || fl(e)), null;
            case 13:
                return td(t, e, l);
            case 4:
                return le(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = Jl(e, null, a, l) : Wt(t, e, a, l), e.child;
            case 11:
                return Xf(t, e, e.type, e.pendingProps, l);
            case 7:
                return Wt(t, e, e.pendingProps, l), e.child;
            case 8:
                return Wt(t, e, e.pendingProps.children, l), e.child;
            case 12:
                return Wt(t, e, e.pendingProps.children, l), e.child;
            case 10:
                return a = e.pendingProps, dl(e, e.type, a.value), Wt(t, e, a.children, l), e.child;
            case 9:
                return n = e.type._context, a = e.pendingProps.children, Ql(e), n = $t(n), a = a(n), e.flags |= 1, Wt(t, e, a, l), e.child;
            case 14:
                return Zf(t, e, e.type, e.pendingProps, l);
            case 15:
                return Vf(t, e, e.type, e.pendingProps, l);
            case 19:
                return ld(t, e, l);
            case 31:
                return tx(t, e, l);
            case 22:
                return Jf(t, e, l, e.pendingProps);
            case 24:
                return Ql(e), a = $t(Lt), t === null ? (n = Ao(), n === null && (n = Et, u = No(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
                    parent: a,
                    cache : n
                }, zo(e), dl(e, Lt, n)) : ((t.lanes & l) !== 0 && (_o(t, e), vn(e, null, null, l), gn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
                    parent: a,
                    cache : a
                }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), dl(e, Lt, a)) : (a = u.cache, dl(e, Lt, a), a !== n.cache && To(e, [Lt], l, !0))), Wt(t, e, e.pendingProps.children, l), e.child;
            case 29:
                throw e.pendingProps
        }
        throw Error(s(156, e.tag))
    }

    function Ie(t) {
        t.flags |= 4
    }

    function ri(t, e, l, a, n) {
        if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
            if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192; else if (Od()) t.flags |= 8192; else throw Vl = Tu, Mo
        } else t.flags &= -16777217
    }

    function nd(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217; else if (t.flags |= 16777216, !pm(e)) if (Od()) t.flags |= 8192; else throw Vl = Tu, Mo
    }

    function Bu(t, e) {
        e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Hs() : 536870912, t.lanes |= e, _a |= e)
    }

    function Nn(t, e) {
        if (!dt) switch (t.tailMode) {
            case"hidden":
                e = t.tail;
                for (var l = null; e !== null;) e.alternate !== null && (l = e), e = e.sibling;
                l === null ? t.tail = null : l.sibling = null;
                break;
            case"collapsed":
                l = t.tail;
                for (var a = null; l !== null;) l.alternate !== null && (a = l), l = l.sibling;
                a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
        }
    }

    function zt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
        if (e) for (var n = t.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling; else for (n = t.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
        return t.subtreeFlags |= a, t.childLanes = l, e
    }

    function lx(t, e, l) {
        var a = e.pendingProps;
        switch (vo(e), e.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return zt(e), null;
            case 1:
                return zt(e), null;
            case 3:
                return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Je(Lt), Ut(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (xa(e) ? Ie(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, bo())), zt(e), null;
            case 26:
                var n = e.type, u = e.memoizedState;
                return t === null ? (Ie(e), u !== null ? (zt(e), nd(e, u)) : (zt(e), ri(e, n, null, a, l))) : u ? u !== t.memoizedState ? (Ie(e), zt(e), nd(e, u)) : (zt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Ie(e), zt(e), ri(e, n, t, a, l)), null;
            case 27:
                if (Fn(e), l = ot.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Ie(e); else {
                    if (!a) {
                        if (e.stateNode === null) throw Error(s(166));
                        return zt(e), null
                    }
                    t = G.current, xa(e) ? Hr(e) : (t = fm(n, a, l), e.stateNode = t, Ie(e))
                }
                return zt(e), null;
            case 5:
                if (Fn(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Ie(e); else {
                    if (!a) {
                        if (e.stateNode === null) throw Error(s(166));
                        return zt(e), null
                    }
                    if (u = G.current, xa(e)) Hr(e); else {
                        var i = ec(ot.current);
                        switch (u) {
                            case 1:
                                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                    case"svg":
                                        u = i.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case"math":
                                        u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    case"script":
                                        u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                                        break;
                                    case"select":
                                        u = typeof a.is == "string" ? i.createElement("select", {is: a.is}) : i.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                                        break;
                                    default:
                                        u = typeof a.is == "string" ? i.createElement(n, {is: a.is}) : i.createElement(n)
                                }
                        }
                        u[Vt] = e, u[ne] = a;
                        t:for (i = e.child; i !== null;) {
                            if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode); else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                                i.child.return = i, i = i.child;
                                continue
                            }
                            if (i === e) break t;
                            for (; i.sibling === null;) {
                                if (i.return === null || i.return === e) break t;
                                i = i.return
                            }
                            i.sibling.return = i.return, i = i.sibling
                        }
                        e.stateNode = u;
                        t:switch (Ft(u, n, a), n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                a = !!a.autoFocus;
                                break t;
                            case"img":
                                a = !0;
                                break t;
                            default:
                                a = !1
                        }
                        a && Ie(e)
                    }
                }
                return zt(e), ri(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== a && Ie(e); else {
                    if (typeof a != "string" && e.stateNode === null) throw Error(s(166));
                    if (t = ot.current, xa(e)) {
                        if (t = e.stateNode, l = e.memoizedProps, a = null, n = Jt, n !== null) switch (n.tag) {
                            case 27:
                            case 5:
                                a = n.memoizedProps
                        }
                        t[Vt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || tm(t.nodeValue, l)), t || fl(e, !0)
                    } else t = ec(t).createTextNode(a), t[Vt] = e, e.stateNode = t
                }
                return zt(e), null;
            case 31:
                if (l = e.memoizedState, t === null || t.memoizedState !== null) {
                    if (a = xa(e), l !== null) {
                        if (t === null) {
                            if (!a) throw Error(s(318));
                            if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(557));
                            t[Vt] = e
                        } else Yl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        zt(e), t = !1
                    } else l = bo(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
                    if (!t) return e.flags & 256 ? (ve(e), e) : (ve(e), null);
                    if ((e.flags & 128) !== 0) throw Error(s(558))
                }
                return zt(e), null;
            case 13:
                if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                    if (n = xa(e), a !== null && a.dehydrated !== null) {
                        if (t === null) {
                            if (!n) throw Error(s(318));
                            if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
                            n[Vt] = e
                        } else Yl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                        zt(e), n = !1
                    } else n = bo(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
                    if (!n) return e.flags & 256 ? (ve(e), e) : (ve(e), null)
                }
                return ve(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Bu(e, e.updateQueue), zt(e), null);
            case 4:
                return Ut(), t === null && wi(e.stateNode.containerInfo), zt(e), null;
            case 10:
                return Je(e.type), zt(e), null;
            case 19:
                if (C(Ht), a = e.memoizedState, a === null) return zt(e), null;
                if (n = (e.flags & 128) !== 0, u = a.rendering, u === null) if (n) Nn(a, !1); else {
                    if (Dt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null;) {
                        if (u = Mu(t), u !== null) {
                            for (e.flags |= 128, Nn(a, !1), t = u.updateQueue, e.updateQueue = t, Bu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null;) kr(l, t), l = l.sibling;
                            return K(Ht, Ht.current & 1 | 2), dt && Ze(e, a.treeForkCount), e.child
                        }
                        t = t.sibling
                    }
                    a.tail !== null && de() > Xu && (e.flags |= 128, n = !0, Nn(a, !1), e.lanes = 4194304)
                } else {
                    if (!n) if (t = Mu(u), t !== null) {
                        if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, Bu(e, t), Nn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !dt) return zt(e), null
                    } else 2 * de() - a.renderingStartTime > Xu && l !== 536870912 && (e.flags |= 128, n = !0, Nn(a, !1), e.lanes = 4194304);
                    a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u)
                }
                return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = de(), t.sibling = null, l = Ht.current, K(Ht, n ? l & 1 | 2 : l & 1), dt && Ze(e, a.treeForkCount), t) : (zt(e), null);
            case 22:
            case 23:
                return ve(e), Do(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : zt(e), l = e.updateQueue, l !== null && Bu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && C(Xl), null;
            case 24:
                return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Je(Lt), zt(e), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(s(156, e.tag))
    }

    function ax(t, e) {
        switch (vo(e), e.tag) {
            case 1:
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 3:
                return Je(Lt), Ut(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
            case 26:
            case 27:
            case 5:
                return Fn(e), null;
            case 31:
                if (e.memoizedState !== null) {
                    if (ve(e), e.alternate === null) throw Error(s(340));
                    Yl()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 13:
                if (ve(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                    if (e.alternate === null) throw Error(s(340));
                    Yl()
                }
                return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 19:
                return C(Ht), null;
            case 4:
                return Ut(), null;
            case 10:
                return Je(e.type), null;
            case 22:
            case 23:
                return ve(e), Do(), t !== null && C(Xl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
            case 24:
                return Je(Lt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function ud(t, e) {
        switch (vo(e), e.tag) {
            case 3:
                Je(Lt), Ut();
                break;
            case 26:
            case 27:
            case 5:
                Fn(e);
                break;
            case 4:
                Ut();
                break;
            case 31:
                e.memoizedState !== null && ve(e);
                break;
            case 13:
                ve(e);
                break;
            case 19:
                C(Ht);
                break;
            case 10:
                Je(e.type);
                break;
            case 22:
            case 23:
                ve(e), Do(), t !== null && C(Xl);
                break;
            case 24:
                Je(Lt)
        }
    }

    function En(t, e) {
        try {
            var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & t) === t) {
                        a = void 0;
                        var u = l.create, i = l.inst;
                        a = u(), i.destroy = a
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (m) {
            bt(e, e.return, m)
        }
    }

    function vl(t, e, l) {
        try {
            var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                a = u;
                do {
                    if ((a.tag & t) === t) {
                        var i = a.inst, m = i.destroy;
                        if (m !== void 0) {
                            i.destroy = void 0, n = e;
                            var x = l, T = m;
                            try {
                                T()
                            } catch (O) {
                                bt(n, x, O)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (O) {
            bt(e, e.return, O)
        }
    }

    function cd(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var l = t.stateNode;
            try {
                $r(e, l)
            } catch (a) {
                bt(t, t.return, a)
            }
        }
    }

    function od(t, e, l) {
        l.props = Wl(t.type, t.memoizedProps), l.state = t.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (a) {
            bt(t, e, a)
        }
    }

    function An(t, e) {
        try {
            var l = t.ref;
            if (l !== null) {
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = t.stateNode;
                        break;
                    case 30:
                        a = t.stateNode;
                        break;
                    default:
                        a = t.stateNode
                }
                typeof l == "function" ? t.refCleanup = l(a) : l.current = a
            }
        } catch (n) {
            bt(t, e, n)
        }
    }

    function Le(t, e) {
        var l = t.ref, a = t.refCleanup;
        if (l !== null) if (typeof a == "function") try {
            a()
        } catch (n) {
            bt(t, e, n)
        } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
        } else if (typeof l == "function") try {
            l(null)
        } catch (n) {
            bt(t, e, n)
        } else l.current = null
    }

    function id(t) {
        var e = t.type, l = t.memoizedProps, a = t.stateNode;
        try {
            t:switch (e) {
                case"button":
                case"input":
                case"select":
                case"textarea":
                    l.autoFocus && a.focus();
                    break t;
                case"img":
                    l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (n) {
            bt(t, t.return, n)
        }
    }

    function fi(t, e, l) {
        try {
            var a = t.stateNode;
            Ex(a, t.type, l, e), a[ne] = e
        } catch (n) {
            bt(t, t.return, n)
        }
    }

    function sd(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && El(t.type) || t.tag === 4
    }

    function di(t) {
        t:for (; ;) {
            for (; t.sibling === null;) {
                if (t.return === null || sd(t.return)) return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && El(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                t.child.return = t, t = t.child
            }
            if (!(t.flags & 2)) return t.stateNode
        }
    }

    function mi(t, e, l) {
        var a = t.tag;
        if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ge)); else if (a !== 4 && (a === 27 && El(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (mi(t, e, l), t = t.sibling; t !== null;) mi(t, e, l), t = t.sibling
    }

    function Ku(t, e, l) {
        var a = t.tag;
        if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t); else if (a !== 4 && (a === 27 && El(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (Ku(t, e, l), t = t.sibling; t !== null;) Ku(t, e, l), t = t.sibling
    }

    function rd(t) {
        var e = t.stateNode, l = t.memoizedProps;
        try {
            for (var a = t.type, n = e.attributes; n.length;) e.removeAttributeNode(n[0]);
            Ft(e, a, l), e[Vt] = t, e[ne] = l
        } catch (u) {
            bt(t, t.return, u)
        }
    }

    var Pe = !1, Yt = !1, yi = !1, fd = typeof WeakSet == "function" ? WeakSet : Set, Xt = null;

    function nx(t, e) {
        if (t = t.containerInfo, Ui = ic, t = jr(t), co(t)) {
            if ("selectionStart" in t) var l = {start: t.selectionStart, end: t.selectionEnd}; else t:{
                l = (l = t.ownerDocument) && l.defaultView || window;
                var a = l.getSelection && l.getSelection();
                if (a && a.rangeCount !== 0) {
                    l = a.anchorNode;
                    var n = a.anchorOffset, u = a.focusNode;
                    a = a.focusOffset;
                    try {
                        l.nodeType, u.nodeType
                    } catch {
                        l = null;
                        break t
                    }
                    var i = 0, m = -1, x = -1, T = 0, O = 0, U = t, E = null;
                    e:for (; ;) {
                        for (var M; U !== l || n !== 0 && U.nodeType !== 3 || (m = i + n), U !== u || a !== 0 && U.nodeType !== 3 || (x = i + a), U.nodeType === 3 && (i += U.nodeValue.length), (M = U.firstChild) !== null;) E = U, U = M;
                        for (; ;) {
                            if (U === t) break e;
                            if (E === l && ++T === n && (m = i), E === u && ++O === a && (x = i), (M = U.nextSibling) !== null) break;
                            U = E, E = U.parentNode
                        }
                        U = M
                    }
                    l = m === -1 || x === -1 ? null : {start: m, end: x}
                } else l = null
            }
            l = l || {start: 0, end: 0}
        } else l = null;
        for (Hi = {
            focusedElem   : t,
            selectionRange: l
        }, ic = !1, Xt = e; Xt !== null;) if (e = Xt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Xt = t; else for (; Xt !== null;) {
            switch (e = Xt, u = e.alternate, t = e.flags, e.tag) {
                case 0:
                    if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (l = 0; l < t.length; l++) n = t[l], n.ref.impl = n.nextImpl;
                    break;
                case 11:
                case 15:
                    break;
                case 1:
                    if ((t & 1024) !== 0 && u !== null) {
                        t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                        try {
                            var Y = Wl(l.type, n);
                            t = a.getSnapshotBeforeUpdate(Y, u), a.__reactInternalSnapshotBeforeUpdate = t
                        } catch (F) {
                            bt(l, l.return, F)
                        }
                    }
                    break;
                case 3:
                    if ((t & 1024) !== 0) {
                        if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) Li(t); else if (l === 1) switch (t.nodeName) {
                            case"HEAD":
                            case"HTML":
                            case"BODY":
                                Li(t);
                                break;
                            default:
                                t.textContent = ""
                        }
                    }
                    break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    if ((t & 1024) !== 0) throw Error(s(163))
            }
            if (t = e.sibling, t !== null) {
                t.return = e.return, Xt = t;
                break
            }
            Xt = e.return
        }
    }

    function dd(t, e, l) {
        var a = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                el(t, l), a & 4 && En(5, l);
                break;
            case 1:
                if (el(t, l), a & 4) if (t = l.stateNode, e === null) try {
                    t.componentDidMount()
                } catch (i) {
                    bt(l, l.return, i)
                } else {
                    var n = Wl(l.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (i) {
                        bt(l, l.return, i)
                    }
                }
                a & 64 && cd(l), a & 512 && An(l, l.return);
                break;
            case 3:
                if (el(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
                    if (e = null, l.child !== null) switch (l.child.tag) {
                        case 27:
                        case 5:
                            e = l.child.stateNode;
                            break;
                        case 1:
                            e = l.child.stateNode
                    }
                    try {
                        $r(t, e)
                    } catch (i) {
                        bt(l, l.return, i)
                    }
                }
                break;
            case 27:
                e === null && a & 4 && rd(l);
            case 26:
            case 5:
                el(t, l), e === null && a & 4 && id(l), a & 512 && An(l, l.return);
                break;
            case 12:
                el(t, l);
                break;
            case 31:
                el(t, l), a & 4 && hd(t, l);
                break;
            case 13:
                el(t, l), a & 4 && xd(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = mx.bind(null, l), Dx(t, l))));
                break;
            case 22:
                if (a = l.memoizedState !== null || Pe, !a) {
                    e = e !== null && e.memoizedState !== null || Yt, n = Pe;
                    var u = Yt;
                    Pe = a, (Yt = e) && !u ? ll(t, l, (l.subtreeFlags & 8772) !== 0) : el(t, l), Pe = n, Yt = u
                }
                break;
            case 30:
                break;
            default:
                el(t, l)
        }
    }

    function md(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null, md(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Gc(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
    }

    var kt = null, ce = !1;

    function tl(t, e, l) {
        for (l = l.child; l !== null;) yd(t, e, l), l = l.sibling
    }

    function yd(t, e, l) {
        if (me && typeof me.onCommitFiberUnmount == "function") try {
            me.onCommitFiberUnmount($a, l)
        } catch {
        }
        switch (l.tag) {
            case 26:
                Yt || Le(l, e), tl(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                break;
            case 27:
                Yt || Le(l, e);
                var a = kt, n = ce;
                El(l.type) && (kt = l.stateNode, ce = !1), tl(t, e, l), Un(l.stateNode), kt = a, ce = n;
                break;
            case 5:
                Yt || Le(l, e);
            case 6:
                if (a = kt, n = ce, kt = null, tl(t, e, l), kt = a, ce = n, kt !== null) if (ce) try {
                    (kt.nodeType === 9 ? kt.body : kt.nodeName === "HTML" ? kt.ownerDocument.body : kt).removeChild(l.stateNode)
                } catch (u) {
                    bt(l, e, u)
                } else try {
                    kt.removeChild(l.stateNode)
                } catch (u) {
                    bt(l, e, u)
                }
                break;
            case 18:
                kt !== null && (ce ? (t = kt, cm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), qa(t)) : cm(kt, l.stateNode));
                break;
            case 4:
                a = kt, n = ce, kt = l.stateNode.containerInfo, ce = !0, tl(t, e, l), kt = a, ce = n;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                vl(2, l, e), Yt || vl(4, l, e), tl(t, e, l);
                break;
            case 1:
                Yt || (Le(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && od(l, e, a)), tl(t, e, l);
                break;
            case 21:
                tl(t, e, l);
                break;
            case 22:
                Yt = (a = Yt) || l.memoizedState !== null, tl(t, e, l), Yt = a;
                break;
            default:
                tl(t, e, l)
        }
    }

    function hd(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
            t = t.dehydrated;
            try {
                qa(t)
            } catch (l) {
                bt(e, e.return, l)
            }
        }
    }

    function xd(t, e) {
        if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
            qa(t)
        } catch (l) {
            bt(e, e.return, l)
        }
    }

    function ux(t) {
        switch (t.tag) {
            case 31:
            case 13:
            case 19:
                var e = t.stateNode;
                return e === null && (e = t.stateNode = new fd), e;
            case 22:
                return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new fd), e;
            default:
                throw Error(s(435, t.tag))
        }
    }

    function Yu(t, e) {
        var l = ux(t);
        e.forEach(function (a) {
            if (!l.has(a)) {
                l.add(a);
                var n = yx.bind(null, t, a);
                a.then(n, n)
            }
        })
    }

    function oe(t, e) {
        var l = e.deletions;
        if (l !== null) for (var a = 0; a < l.length; a++) {
            var n = l[a], u = t, i = e, m = i;
            t:for (; m !== null;) {
                switch (m.tag) {
                    case 27:
                        if (El(m.type)) {
                            kt = m.stateNode, ce = !1;
                            break t
                        }
                        break;
                    case 5:
                        kt = m.stateNode, ce = !1;
                        break t;
                    case 3:
                    case 4:
                        kt = m.stateNode.containerInfo, ce = !0;
                        break t
                }
                m = m.return
            }
            if (kt === null) throw Error(s(160));
            yd(u, i, n), kt = null, ce = !1, u = n.alternate, u !== null && (u.return = null), n.return = null
        }
        if (e.subtreeFlags & 13886) for (e = e.child; e !== null;) gd(e, t), e = e.sibling
    }

    var Ce = null;

    function gd(t, e) {
        var l = t.alternate, a = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                oe(e, t), ie(t), a & 4 && (vl(3, t, t.return), En(3, t), vl(5, t, t.return));
                break;
            case 1:
                oe(e, t), ie(t), a & 512 && (Yt || l === null || Le(l, l.return)), a & 64 && Pe && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
                break;
            case 26:
                var n = Ce;
                if (oe(e, t), ie(t), a & 512 && (Yt || l === null || Le(l, l.return)), a & 4) {
                    var u = l !== null ? l.memoizedState : null;
                    if (a = t.memoizedState, l === null) if (a === null) if (t.stateNode === null) {
                        t:{
                            a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                            e:switch (a) {
                                case"title":
                                    u = n.getElementsByTagName("title")[0], (!u || u[Ia] || u[Vt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Ft(u, a, l), u[Vt] = t, Qt(u), a = u;
                                    break t;
                                case"link":
                                    var i = gm("link", "href", n).get(a + (l.href || ""));
                                    if (i) {
                                        for (var m = 0; m < i.length; m++) if (u = i[m], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                            i.splice(m, 1);
                                            break e
                                        }
                                    }
                                    u = n.createElement(a), Ft(u, a, l), n.head.appendChild(u);
                                    break;
                                case"meta":
                                    if (i = gm("meta", "content", n).get(a + (l.content || ""))) {
                                        for (m = 0; m < i.length; m++) if (u = i[m], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                            i.splice(m, 1);
                                            break e
                                        }
                                    }
                                    u = n.createElement(a), Ft(u, a, l), n.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(s(468, a))
                            }
                            u[Vt] = t, Qt(u), a = u
                        }
                        t.stateNode = a
                    } else vm(n, t.type, t.stateNode); else t.stateNode = xm(n, a, t.memoizedProps); else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? vm(n, t.type, t.stateNode) : xm(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && fi(t, t.memoizedProps, l.memoizedProps)
                }
                break;
            case 27:
                oe(e, t), ie(t), a & 512 && (Yt || l === null || Le(l, l.return)), l !== null && a & 4 && fi(t, t.memoizedProps, l.memoizedProps);
                break;
            case 5:
                if (oe(e, t), ie(t), a & 512 && (Yt || l === null || Le(l, l.return)), t.flags & 32) {
                    n = t.stateNode;
                    try {
                        ca(n, "")
                    } catch (Y) {
                        bt(t, t.return, Y)
                    }
                }
                a & 4 && t.stateNode != null && (n = t.memoizedProps, fi(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (yi = !0);
                break;
            case 6:
                if (oe(e, t), ie(t), a & 4) {
                    if (t.stateNode === null) throw Error(s(162));
                    a = t.memoizedProps, l = t.stateNode;
                    try {
                        l.nodeValue = a
                    } catch (Y) {
                        bt(t, t.return, Y)
                    }
                }
                break;
            case 3:
                if (nc = null, n = Ce, Ce = lc(e.containerInfo), oe(e, t), Ce = n, ie(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
                    qa(e.containerInfo)
                } catch (Y) {
                    bt(t, t.return, Y)
                }
                yi && (yi = !1, vd(t));
                break;
            case 4:
                a = Ce, Ce = lc(t.stateNode.containerInfo), oe(e, t), ie(t), Ce = a;
                break;
            case 12:
                oe(e, t), ie(t);
                break;
            case 31:
                oe(e, t), ie(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Yu(t, a)));
                break;
            case 13:
                oe(e, t), ie(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Qu = de()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Yu(t, a)));
                break;
            case 22:
                n = t.memoizedState !== null;
                var x = l !== null && l.memoizedState !== null, T = Pe, O = Yt;
                if (Pe = T || n, Yt = O || x, oe(e, t), Yt = O, Pe = T, ie(t), a & 8192) t:for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || x || Pe || Yt || Fl(t)), l = null, e = t; ;) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (l === null) {
                            x = l = e;
                            try {
                                if (u = x.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none"; else {
                                    m = x.stateNode;
                                    var U = x.memoizedProps.style,
                                        E = U != null && U.hasOwnProperty("display") ? U.display : null;
                                    m.style.display = E == null || typeof E == "boolean" ? "" : ("" + E).trim()
                                }
                            } catch (Y) {
                                bt(x, x.return, Y)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (l === null) {
                            x = e;
                            try {
                                x.stateNode.nodeValue = n ? "" : x.memoizedProps
                            } catch (Y) {
                                bt(x, x.return, Y)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (l === null) {
                            x = e;
                            try {
                                var M = x.stateNode;
                                n ? om(M, !0) : om(x.stateNode, !1)
                            } catch (Y) {
                                bt(x, x.return, Y)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break t;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t) break t;
                        l === e && (l = null), e = e.return
                    }
                    l === e && (l = null), e.sibling.return = e.return, e = e.sibling
                }
                a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Yu(t, l))));
                break;
            case 19:
                oe(e, t), ie(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Yu(t, a)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                oe(e, t), ie(t)
        }
    }

    function ie(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var l, a = t.return; a !== null;) {
                    if (sd(a)) {
                        l = a;
                        break
                    }
                    a = a.return
                }
                if (l == null) throw Error(s(160));
                switch (l.tag) {
                    case 27:
                        var n = l.stateNode, u = di(t);
                        Ku(t, u, n);
                        break;
                    case 5:
                        var i = l.stateNode;
                        l.flags & 32 && (ca(i, ""), l.flags &= -33);
                        var m = di(t);
                        Ku(t, m, i);
                        break;
                    case 3:
                    case 4:
                        var x = l.stateNode.containerInfo, T = di(t);
                        mi(t, T, x);
                        break;
                    default:
                        throw Error(s(161))
                }
            } catch (O) {
                bt(t, t.return, O)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }

    function vd(t) {
        if (t.subtreeFlags & 1024) for (t = t.child; t !== null;) {
            var e = t;
            vd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
        }
    }

    function el(t, e) {
        if (e.subtreeFlags & 8772) for (e = e.child; e !== null;) dd(t, e.alternate, e), e = e.sibling
    }

    function Fl(t) {
        for (t = t.child; t !== null;) {
            var e = t;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    vl(4, e, e.return), Fl(e);
                    break;
                case 1:
                    Le(e, e.return);
                    var l = e.stateNode;
                    typeof l.componentWillUnmount == "function" && od(e, e.return, l), Fl(e);
                    break;
                case 27:
                    Un(e.stateNode);
                case 26:
                case 5:
                    Le(e, e.return), Fl(e);
                    break;
                case 22:
                    e.memoizedState === null && Fl(e);
                    break;
                case 30:
                    Fl(e);
                    break;
                default:
                    Fl(e)
            }
            t = t.sibling
        }
    }

    function ll(t, e, l) {
        for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
            var a = e.alternate, n = t, u = e, i = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    ll(n, u, l), En(4, u);
                    break;
                case 1:
                    if (ll(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
                        n.componentDidMount()
                    } catch (T) {
                        bt(a, a.return, T)
                    }
                    if (a = u, n = a.updateQueue, n !== null) {
                        var m = a.stateNode;
                        try {
                            var x = n.shared.hiddenCallbacks;
                            if (x !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < x.length; n++) Jr(x[n], m)
                        } catch (T) {
                            bt(a, a.return, T)
                        }
                    }
                    l && i & 64 && cd(u), An(u, u.return);
                    break;
                case 27:
                    rd(u);
                case 26:
                case 5:
                    ll(n, u, l), l && a === null && i & 4 && id(u), An(u, u.return);
                    break;
                case 12:
                    ll(n, u, l);
                    break;
                case 31:
                    ll(n, u, l), l && i & 4 && hd(n, u);
                    break;
                case 13:
                    ll(n, u, l), l && i & 4 && xd(n, u);
                    break;
                case 22:
                    u.memoizedState === null && ll(n, u, l), An(u, u.return);
                    break;
                case 30:
                    break;
                default:
                    ll(n, u, l)
            }
            e = e.sibling
        }
    }

    function hi(t, e) {
        var l = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && dn(l))
    }

    function xi(t, e) {
        t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && dn(t))
    }

    function Ue(t, e, l, a) {
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) pd(t, e, l, a), e = e.sibling
    }

    function pd(t, e, l, a) {
        var n = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Ue(t, e, l, a), n & 2048 && En(9, e);
                break;
            case 1:
                Ue(t, e, l, a);
                break;
            case 3:
                Ue(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && dn(t)));
                break;
            case 12:
                if (n & 2048) {
                    Ue(t, e, l, a), t = e.stateNode;
                    try {
                        var u = e.memoizedProps, i = u.id, m = u.onPostCommit;
                        typeof m == "function" && m(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                    } catch (x) {
                        bt(e, e.return, x)
                    }
                } else Ue(t, e, l, a);
                break;
            case 31:
                Ue(t, e, l, a);
                break;
            case 13:
                Ue(t, e, l, a);
                break;
            case 23:
                break;
            case 22:
                u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Ue(t, e, l, a) : Mn(t, e) : u._visibility & 2 ? Ue(t, e, l, a) : (u._visibility |= 2, Aa(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && hi(i, e);
                break;
            case 24:
                Ue(t, e, l, a), n & 2048 && xi(e.alternate, e);
                break;
            default:
                Ue(t, e, l, a)
        }
    }

    function Aa(t, e, l, a, n) {
        for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) {
            var u = t, i = e, m = l, x = a, T = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    Aa(u, i, m, x, n), En(8, i);
                    break;
                case 23:
                    break;
                case 22:
                    var O = i.stateNode;
                    i.memoizedState !== null ? O._visibility & 2 ? Aa(u, i, m, x, n) : Mn(u, i) : (O._visibility |= 2, Aa(u, i, m, x, n)), n && T & 2048 && hi(i.alternate, i);
                    break;
                case 24:
                    Aa(u, i, m, x, n), n && T & 2048 && xi(i.alternate, i);
                    break;
                default:
                    Aa(u, i, m, x, n)
            }
            e = e.sibling
        }
    }

    function Mn(t, e) {
        if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) {
            var l = t, a = e, n = a.flags;
            switch (a.tag) {
                case 22:
                    Mn(l, a), n & 2048 && hi(a.alternate, a);
                    break;
                case 24:
                    Mn(l, a), n & 2048 && xi(a.alternate, a);
                    break;
                default:
                    Mn(l, a)
            }
            e = e.sibling
        }
    }

    var zn = 8192;

    function Ma(t, e, l) {
        if (t.subtreeFlags & zn) for (t = t.child; t !== null;) bd(t, e, l), t = t.sibling
    }

    function bd(t, e, l) {
        switch (t.tag) {
            case 26:
                Ma(t, e, l), t.flags & zn && t.memoizedState !== null && Xx(l, Ce, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                Ma(t, e, l);
                break;
            case 3:
            case 4:
                var a = Ce;
                Ce = lc(t.stateNode.containerInfo), Ma(t, e, l), Ce = a;
                break;
            case 22:
                t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = zn, zn = 16777216, Ma(t, e, l), zn = a) : Ma(t, e, l));
                break;
            default:
                Ma(t, e, l)
        }
    }

    function Sd(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child, t !== null)) {
            e.child = null;
            do e = t.sibling, t.sibling = null, t = e; while (t !== null)
        }
    }

    function _n(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null) for (var l = 0; l < e.length; l++) {
                var a = e[l];
                Xt = a, Td(a, t)
            }
            Sd(t)
        }
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) jd(t), t = t.sibling
    }

    function jd(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                _n(t), t.flags & 2048 && vl(9, t, t.return);
                break;
            case 3:
                _n(t);
                break;
            case 12:
                _n(t);
                break;
            case 22:
                var e = t.stateNode;
                t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Gu(t)) : _n(t);
                break;
            default:
                _n(t)
        }
    }

    function Gu(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null) for (var l = 0; l < e.length; l++) {
                var a = e[l];
                Xt = a, Td(a, t)
            }
            Sd(t)
        }
        for (t = t.child; t !== null;) {
            switch (e = t, e.tag) {
                case 0:
                case 11:
                case 15:
                    vl(8, e, e.return), Gu(e);
                    break;
                case 22:
                    l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Gu(e));
                    break;
                default:
                    Gu(e)
            }
            t = t.sibling
        }
    }

    function Td(t, e) {
        for (; Xt !== null;) {
            var l = Xt;
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    vl(8, l, e);
                    break;
                case 23:
                case 22:
                    if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                        var a = l.memoizedState.cachePool.pool;
                        a != null && a.refCount++
                    }
                    break;
                case 24:
                    dn(l.memoizedState.cache)
            }
            if (a = l.child, a !== null) a.return = l, Xt = a; else t:for (l = t; Xt !== null;) {
                a = Xt;
                var n = a.sibling, u = a.return;
                if (md(a), a === l) {
                    Xt = null;
                    break t
                }
                if (n !== null) {
                    n.return = u, Xt = n;
                    break t
                }
                Xt = u
            }
        }
    }

    var cx = {
            getCacheForType: function (t) {
                var e = $t(Lt), l = e.data.get(t);
                return l === void 0 && (l = t(), e.data.set(t, l)), l
            }, cacheSignal: function () {
                return $t(Lt).controller.signal
            }
        }, ox = typeof WeakMap == "function" ? WeakMap : Map, xt = 0, Et = null, it = null, rt = 0, pt = 0, pe = null,
        pl = !1, za = !1, gi = !1, al = 0, Dt = 0, bl = 0, Il = 0, vi = 0, be = 0, _a = 0, On = null, se = null,
        pi = !1, Qu = 0, Nd = 0, Xu = 1 / 0, Zu = null, Sl = null, Gt = 0, jl = null, Oa = null, nl = 0, bi = 0,
        Si = null, Ed = null, kn = 0, ji = null;

    function Se() {
        return (xt & 2) !== 0 && rt !== 0 ? rt & -rt : _.T !== null ? zi() : Bs()
    }

    function Ad() {
        if (be === 0) if ((rt & 536870912) === 0 || dt) {
            var t = tu;
            tu <<= 1, (tu & 3932160) === 0 && (tu = 262144), be = t
        } else be = 536870912;
        return t = ge.current, t !== null && (t.flags |= 32), be
    }

    function re(t, e, l) {
        (t === Et && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null) && (ka(t, 0), Tl(t, rt, be, !1)), Fa(t, l), ((xt & 2) === 0 || t !== Et) && (t === Et && ((xt & 2) === 0 && (Il |= l), Dt === 4 && Tl(t, rt, be, !1)), Be(t))
    }

    function Md(t, e, l) {
        if ((xt & 6) !== 0) throw Error(s(327));
        var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Wa(t, e), n = a ? rx(t, e) : Ni(t, e, !0), u = a;
        do {
            if (n === 0) {
                za && !a && Tl(t, e, 0, !1);
                break
            } else {
                if (l = t.current.alternate, u && !ix(l)) {
                    n = Ni(t, e, !1), u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0; else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        e = i;
                        t:{
                            var m = t;
                            n = On;
                            var x = m.current.memoizedState.isDehydrated;
                            if (x && (ka(m, i).flags |= 256), i = Ni(m, i, !1), i !== 2) {
                                if (gi && !x) {
                                    m.errorRecoveryDisabledLanes |= u, Il |= u, n = 4;
                                    break t
                                }
                                u = se, se = n, u !== null && (se === null ? se = u : se.push.apply(se, u))
                            }
                            n = i
                        }
                        if (u = !1, n !== 2) continue
                    }
                }
                if (n === 1) {
                    ka(t, 0), Tl(t, e, 0, !0);
                    break
                }
                t:{
                    switch (a = t, u = n, u) {
                        case 0:
                        case 1:
                            throw Error(s(345));
                        case 4:
                            if ((e & 4194048) !== e) break;
                        case 6:
                            Tl(a, e, be, !pl);
                            break t;
                        case 2:
                            se = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(s(329))
                    }
                    if ((e & 62914560) === e && (n = Qu + 300 - de(), 10 < n)) {
                        if (Tl(a, e, be, !pl), lu(a, 0, !0) !== 0) break t;
                        nl = e, a.timeoutHandle = nm(zd.bind(null, a, l, se, Zu, pi, e, be, Il, _a, pl, u, "Throttled", -0, 0), n);
                        break t
                    }
                    zd(a, l, se, Zu, pi, e, be, Il, _a, pl, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        Be(t)
    }

    function zd(t, e, l, a, n, u, i, m, x, T, O, U, E, M) {
        if (t.timeoutHandle = -1, U = e.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
            U = {
                stylesheets             : null,
                count                   : 0,
                imgCount                : 0,
                imgBytes                : 0,
                suspenseyImages         : [],
                waitingForImages        : !0,
                waitingForViewTransition: !1,
                unsuspend               : Ge
            }, bd(e, u, U);
            var Y = (u & 62914560) === u ? Qu - de() : (u & 4194048) === u ? Nd - de() : 0;
            if (Y = Zx(U, Y), Y !== null) {
                nl = u, t.cancelPendingCommit = Y(Hd.bind(null, t, e, u, l, a, n, i, m, x, O, U, null, E, M)), Tl(t, u, i, !T);
                return
            }
        }
        Hd(t, e, u, l, a, n, i, m, x)
    }

    function ix(t) {
        for (var e = t; ;) {
            var l = e.tag;
            if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for (var a = 0; a < l.length; a++) {
                var n = l[a], u = n.getSnapshot;
                n = n.value;
                try {
                    if (!he(u(), n)) return !1
                } catch {
                    return !1
                }
            }
            if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l; else {
                if (e === t) break;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }
        return !0
    }

    function Tl(t, e, l, a) {
        e &= ~vi, e &= ~Il, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
        for (var n = e; 0 < n;) {
            var u = 31 - ye(n), i = 1 << u;
            a[u] = -1, n &= ~i
        }
        l !== 0 && qs(t, l, e)
    }

    function Vu() {
        return (xt & 6) === 0 ? (wn(0), !1) : !0
    }

    function Ti() {
        if (it !== null) {
            if (pt === 0) var t = it.return; else t = it, Ve = Gl = null, Lo(t), Sa = null, yn = 0, t = it;
            for (; t !== null;) ud(t.alternate, t), t = t.return;
            it = null
        }
    }

    function ka(t, e) {
        var l = t.timeoutHandle;
        l !== -1 && (t.timeoutHandle = -1, zx(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), nl = 0, Ti(), Et = t, it = l = Xe(t.current, null), rt = e, pt = 0, pe = null, pl = !1, za = Wa(t, e), gi = !1, _a = be = vi = Il = bl = Dt = 0, se = On = null, pi = !1, (e & 8) !== 0 && (e |= e & 32);
        var a = t.entangledLanes;
        if (a !== 0) for (t = t.entanglements, a &= e; 0 < a;) {
            var n = 31 - ye(a), u = 1 << n;
            e |= t[n], a &= ~u
        }
        return al = e, yu(), l
    }

    function _d(t, e) {
        at = null, _.H = jn, e === ba || e === ju ? (e = Qr(), pt = 3) : e === Mo ? (e = Qr(), pt = 4) : pt = e === ei ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, pe = e, it === null && (Dt = 1, Hu(t, Ee(e, t.current)))
    }

    function Od() {
        var t = ge.current;
        return t === null ? !0 : (rt & 4194048) === rt ? _e === null : (rt & 62914560) === rt || (rt & 536870912) !== 0 ? t === _e : !1
    }

    function kd() {
        var t = _.H;
        return _.H = jn, t === null ? jn : t
    }

    function wd() {
        var t = _.A;
        return _.A = cx, t
    }

    function Ju() {
        Dt = 4, pl || (rt & 4194048) !== rt && ge.current !== null || (za = !0), (bl & 134217727) === 0 && (Il & 134217727) === 0 || Et === null || Tl(Et, rt, be, !1)
    }

    function Ni(t, e, l) {
        var a = xt;
        xt |= 2;
        var n = kd(), u = wd();
        (Et !== t || rt !== e) && (Zu = null, ka(t, e)), e = !1;
        var i = Dt;
        t:do try {
            if (pt !== 0 && it !== null) {
                var m = it, x = pe;
                switch (pt) {
                    case 8:
                        Ti(), i = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        ge.current === null && (e = !0);
                        var T = pt;
                        if (pt = 0, pe = null, wa(t, m, x, T), l && za) {
                            i = 0;
                            break t
                        }
                        break;
                    default:
                        T = pt, pt = 0, pe = null, wa(t, m, x, T)
                }
            }
            sx(), i = Dt;
            break
        } catch (O) {
            _d(t, O)
        } while (!0);
        return e && t.shellSuspendCounter++, Ve = Gl = null, xt = a, _.H = n, _.A = u, it === null && (Et = null, rt = 0, yu()), i
    }

    function sx() {
        for (; it !== null;) Dd(it)
    }

    function rx(t, e) {
        var l = xt;
        xt |= 2;
        var a = kd(), n = wd();
        Et !== t || rt !== e ? (Zu = null, Xu = de() + 500, ka(t, e)) : za = Wa(t, e);
        t:do try {
            if (pt !== 0 && it !== null) {
                e = it;
                var u = pe;
                e:switch (pt) {
                    case 1:
                        pt = 0, pe = null, wa(t, e, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (Yr(u)) {
                            pt = 0, pe = null, Cd(e);
                            break
                        }
                        e = function () {
                            pt !== 2 && pt !== 9 || Et !== t || (pt = 7), Be(t)
                        }, u.then(e, e);
                        break t;
                    case 3:
                        pt = 7;
                        break t;
                    case 4:
                        pt = 5;
                        break t;
                    case 7:
                        Yr(u) ? (pt = 0, pe = null, Cd(e)) : (pt = 0, pe = null, wa(t, e, u, 7));
                        break;
                    case 5:
                        var i = null;
                        switch (it.tag) {
                            case 26:
                                i = it.memoizedState;
                            case 5:
                            case 27:
                                var m = it;
                                if (i ? pm(i) : m.stateNode.complete) {
                                    pt = 0, pe = null;
                                    var x = m.sibling;
                                    if (x !== null) it = x; else {
                                        var T = m.return;
                                        T !== null ? (it = T, $u(T)) : it = null
                                    }
                                    break e
                                }
                        }
                        pt = 0, pe = null, wa(t, e, u, 5);
                        break;
                    case 6:
                        pt = 0, pe = null, wa(t, e, u, 6);
                        break;
                    case 8:
                        Ti(), Dt = 6;
                        break t;
                    default:
                        throw Error(s(462))
                }
            }
            fx();
            break
        } catch (O) {
            _d(t, O)
        } while (!0);
        return Ve = Gl = null, _.H = a, _.A = n, xt = l, it !== null ? 0 : (Et = null, rt = 0, yu(), Dt)
    }

    function fx() {
        for (; it !== null && !Cy();) Dd(it)
    }

    function Dd(t) {
        var e = ad(t.alternate, t, al);
        t.memoizedProps = t.pendingProps, e === null ? $u(t) : it = e
    }

    function Cd(t) {
        var e = t, l = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = Ff(l, e, e.pendingProps, e.type, void 0, rt);
                break;
            case 11:
                e = Ff(l, e, e.pendingProps, e.type.render, e.ref, rt);
                break;
            case 5:
                Lo(e);
            default:
                ud(l, e), e = it = kr(e, al), e = ad(l, e, al)
        }
        t.memoizedProps = t.pendingProps, e === null ? $u(t) : it = e
    }

    function wa(t, e, l, a) {
        Ve = Gl = null, Lo(e), Sa = null, yn = 0;
        var n = e.return;
        try {
            if (Ph(t, n, e, l, rt)) {
                Dt = 1, Hu(t, Ee(l, t.current)), it = null;
                return
            }
        } catch (u) {
            if (n !== null) throw it = n, u;
            Dt = 1, Hu(t, Ee(l, t.current)), it = null;
            return
        }
        e.flags & 32768 ? (dt || a === 1 ? t = !0 : za || (rt & 536870912) !== 0 ? t = !1 : (pl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ge.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ud(e, t)) : $u(e)
    }

    function $u(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                Ud(e, pl);
                return
            }
            t = e.return;
            var l = lx(e.alternate, e, al);
            if (l !== null) {
                it = l;
                return
            }
            if (e = e.sibling, e !== null) {
                it = e;
                return
            }
            it = e = t
        } while (e !== null);
        Dt === 0 && (Dt = 5)
    }

    function Ud(t, e) {
        do {
            var l = ax(t.alternate, t);
            if (l !== null) {
                l.flags &= 32767, it = l;
                return
            }
            if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
                it = t;
                return
            }
            it = t = l
        } while (t !== null);
        Dt = 6, it = null
    }

    function Hd(t, e, l, a, n, u, i, m, x) {
        t.cancelPendingCommit = null;
        do Wu(); while (Gt !== 0);
        if ((xt & 6) !== 0) throw Error(s(327));
        if (e !== null) {
            if (e === t.current) throw Error(s(177));
            if (u = e.lanes | e.childLanes, u |= fo, Qy(t, l, u, i, m, x), t === Et && (it = Et = null, rt = 0), Oa = e, jl = t, nl = l, bi = u, Si = n, Ed = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, hx(In, function () {
                return Kd(), null
            })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
                a = _.T, _.T = null, n = k.p, k.p = 2, i = xt, xt |= 4;
                try {
                    nx(t, e, l)
                } finally {
                    xt = i, k.p = n, _.T = a
                }
            }
            Gt = 1, qd(), Rd(), Ld()
        }
    }

    function qd() {
        if (Gt === 1) {
            Gt = 0;
            var t = jl, e = Oa, l = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || l) {
                l = _.T, _.T = null;
                var a = k.p;
                k.p = 2;
                var n = xt;
                xt |= 4;
                try {
                    gd(e, t);
                    var u = Hi, i = jr(t.containerInfo), m = u.focusedElem, x = u.selectionRange;
                    if (i !== m && m && m.ownerDocument && Sr(m.ownerDocument.documentElement, m)) {
                        if (x !== null && co(m)) {
                            var T = x.start, O = x.end;
                            if (O === void 0 && (O = T), "selectionStart" in m) m.selectionStart = T, m.selectionEnd = Math.min(O, m.value.length); else {
                                var U = m.ownerDocument || document, E = U && U.defaultView || window;
                                if (E.getSelection) {
                                    var M = E.getSelection(), Y = m.textContent.length, F = Math.min(x.start, Y),
                                        Tt = x.end === void 0 ? F : Math.min(x.end, Y);
                                    !M.extend && F > Tt && (i = Tt, Tt = F, F = i);
                                    var p = br(m, F), v = br(m, Tt);
                                    if (p && v && (M.rangeCount !== 1 || M.anchorNode !== p.node || M.anchorOffset !== p.offset || M.focusNode !== v.node || M.focusOffset !== v.offset)) {
                                        var j = U.createRange();
                                        j.setStart(p.node, p.offset), M.removeAllRanges(), F > Tt ? (M.addRange(j), M.extend(v.node, v.offset)) : (j.setEnd(v.node, v.offset), M.addRange(j))
                                    }
                                }
                            }
                        }
                        for (U = [], M = m; M = M.parentNode;) M.nodeType === 1 && U.push({
                            element: M,
                            left   : M.scrollLeft,
                            top    : M.scrollTop
                        });
                        for (typeof m.focus == "function" && m.focus(), m = 0; m < U.length; m++) {
                            var w = U[m];
                            w.element.scrollLeft = w.left, w.element.scrollTop = w.top
                        }
                    }
                    ic = !!Ui, Hi = Ui = null
                } finally {
                    xt = n, k.p = a, _.T = l
                }
            }
            t.current = e, Gt = 2
        }
    }

    function Rd() {
        if (Gt === 2) {
            Gt = 0;
            var t = jl, e = Oa, l = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || l) {
                l = _.T, _.T = null;
                var a = k.p;
                k.p = 2;
                var n = xt;
                xt |= 4;
                try {
                    dd(t, e.alternate, e)
                } finally {
                    xt = n, k.p = a, _.T = l
                }
            }
            Gt = 3
        }
    }

    function Ld() {
        if (Gt === 4 || Gt === 3) {
            Gt = 0, Uy();
            var t = jl, e = Oa, l = nl, a = Ed;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Gt = 5 : (Gt = 0, Oa = jl = null, Bd(t, t.pendingLanes));
            var n = t.pendingLanes;
            if (n === 0 && (Sl = null), Kc(l), e = e.stateNode, me && typeof me.onCommitFiberRoot == "function") try {
                me.onCommitFiberRoot($a, e, void 0, (e.current.flags & 128) === 128)
            } catch {
            }
            if (a !== null) {
                e = _.T, n = k.p, k.p = 2, _.T = null;
                try {
                    for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
                        var m = a[i];
                        u(m.value, {componentStack: m.stack})
                    }
                } finally {
                    _.T = e, k.p = n
                }
            }
            (nl & 3) !== 0 && Wu(), Be(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === ji ? kn++ : (kn = 0, ji = t) : kn = 0, wn(0)
        }
    }

    function Bd(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, dn(e)))
    }

    function Wu() {
        return qd(), Rd(), Ld(), Kd()
    }

    function Kd() {
        if (Gt !== 5) return !1;
        var t = jl, e = bi;
        bi = 0;
        var l = Kc(nl), a = _.T, n = k.p;
        try {
            k.p = 32 > l ? 32 : l, _.T = null, l = Si, Si = null;
            var u = jl, i = nl;
            if (Gt = 0, Oa = jl = null, nl = 0, (xt & 6) !== 0) throw Error(s(331));
            var m = xt;
            if (xt |= 4, jd(u.current), pd(u, u.current, i, l), xt = m, wn(0, !1), me && typeof me.onPostCommitFiberRoot == "function") try {
                me.onPostCommitFiberRoot($a, u)
            } catch {
            }
            return !0
        } finally {
            k.p = n, _.T = a, Bd(t, e)
        }
    }

    function Yd(t, e, l) {
        e = Ee(l, e), e = ti(t.stateNode, e, 2), t = hl(t, e, 2), t !== null && (Fa(t, 2), Be(t))
    }

    function bt(t, e, l) {
        if (t.tag === 3) Yd(t, t, l); else for (; e !== null;) {
            if (e.tag === 3) {
                Yd(e, t, l);
                break
            } else if (e.tag === 1) {
                var a = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Sl === null || !Sl.has(a))) {
                    t = Ee(l, t), l = Gf(2), a = hl(e, l, 2), a !== null && (Qf(l, a, e, t), Fa(a, 2), Be(a));
                    break
                }
            }
            e = e.return
        }
    }

    function Ei(t, e, l) {
        var a = t.pingCache;
        if (a === null) {
            a = t.pingCache = new ox;
            var n = new Set;
            a.set(e, n)
        } else n = a.get(e), n === void 0 && (n = new Set, a.set(e, n));
        n.has(l) || (gi = !0, n.add(l), t = dx.bind(null, t, e, l), e.then(t, t))
    }

    function dx(t, e, l) {
        var a = t.pingCache;
        a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Et === t && (rt & l) === l && (Dt === 4 || Dt === 3 && (rt & 62914560) === rt && 300 > de() - Qu ? (xt & 2) === 0 && ka(t, 0) : vi |= l, _a === rt && (_a = 0)), Be(t)
    }

    function Gd(t, e) {
        e === 0 && (e = Hs()), t = Bl(t, e), t !== null && (Fa(t, e), Be(t))
    }

    function mx(t) {
        var e = t.memoizedState, l = 0;
        e !== null && (l = e.retryLane), Gd(t, l)
    }

    function yx(t, e) {
        var l = 0;
        switch (t.tag) {
            case 31:
            case 13:
                var a = t.stateNode, n = t.memoizedState;
                n !== null && (l = n.retryLane);
                break;
            case 19:
                a = t.stateNode;
                break;
            case 22:
                a = t.stateNode._retryCache;
                break;
            default:
                throw Error(s(314))
        }
        a !== null && a.delete(e), Gd(t, l)
    }

    function hx(t, e) {
        return qc(t, e)
    }

    var Fu = null, Da = null, Ai = !1, Iu = !1, Mi = !1, Nl = 0;

    function Be(t) {
        t !== Da && t.next === null && (Da === null ? Fu = Da = t : Da = Da.next = t), Iu = !0, Ai || (Ai = !0, gx())
    }

    function wn(t, e) {
        if (!Mi && Iu) {
            Mi = !0;
            do for (var l = !1, a = Fu; a !== null;) {
                if (t !== 0) {
                    var n = a.pendingLanes;
                    if (n === 0) var u = 0; else {
                        var i = a.suspendedLanes, m = a.pingedLanes;
                        u = (1 << 31 - ye(42 | t) + 1) - 1, u &= n & ~(i & ~m), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                    }
                    u !== 0 && (l = !0, Vd(a, u))
                } else u = rt, u = lu(a, a === Et ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Wa(a, u) || (l = !0, Vd(a, u));
                a = a.next
            } while (l);
            Mi = !1
        }
    }

    function xx() {
        Qd()
    }

    function Qd() {
        Iu = Ai = !1;
        var t = 0;
        Nl !== 0 && Mx() && (t = Nl);
        for (var e = de(), l = null, a = Fu; a !== null;) {
            var n = a.next, u = Xd(a, e);
            u === 0 ? (a.next = null, l === null ? Fu = n : l.next = n, n === null && (Da = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Iu = !0)), a = n
        }
        Gt !== 0 && Gt !== 5 || wn(t), Nl !== 0 && (Nl = 0)
    }

    function Xd(t, e) {
        for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;) {
            var i = 31 - ye(u), m = 1 << i, x = n[i];
            x === -1 ? ((m & l) === 0 || (m & a) !== 0) && (n[i] = Gy(m, e)) : x <= e && (t.expiredLanes |= m), u &= ~m
        }
        if (e = Et, l = rt, l = lu(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && Rc(a), t.callbackNode = null, t.callbackPriority = 0;
        if ((l & 3) === 0 || Wa(t, l)) {
            if (e = l & -l, e === t.callbackPriority) return e;
            switch (a !== null && Rc(a), Kc(l)) {
                case 2:
                case 8:
                    l = Cs;
                    break;
                case 32:
                    l = In;
                    break;
                case 268435456:
                    l = Us;
                    break;
                default:
                    l = In
            }
            return a = Zd.bind(null, t), l = qc(l, a), t.callbackPriority = e, t.callbackNode = l, e
        }
        return a !== null && a !== null && Rc(a), t.callbackPriority = 2, t.callbackNode = null, 2
    }

    function Zd(t, e) {
        if (Gt !== 0 && Gt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
        var l = t.callbackNode;
        if (Wu() && t.callbackNode !== l) return null;
        var a = rt;
        return a = lu(t, t === Et ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Md(t, a, e), Xd(t, de()), t.callbackNode != null && t.callbackNode === l ? Zd.bind(null, t) : null)
    }

    function Vd(t, e) {
        if (Wu()) return null;
        Md(t, e, !0)
    }

    function gx() {
        _x(function () {
            (xt & 6) !== 0 ? qc(Ds, xx) : Qd()
        })
    }

    function zi() {
        if (Nl === 0) {
            var t = va;
            t === 0 && (t = Pn, Pn <<= 1, (Pn & 261888) === 0 && (Pn = 256)), Nl = t
        }
        return Nl
    }

    function Jd(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : cu("" + t)
    }

    function $d(t, e) {
        var l = e.ownerDocument.createElement("input");
        return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t
    }

    function vx(t, e, l, a, n) {
        if (e === "submit" && l && l.stateNode === n) {
            var u = Jd((n[ne] || null).action), i = a.submitter;
            i && (e = (e = i[ne] || null) ? Jd(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
            var m = new ru("action", "action", null, a, n);
            t.push({
                event: m, listeners: [{
                    instance        : null, listener: function () {
                        if (a.defaultPrevented) {
                            if (Nl !== 0) {
                                var x = i ? $d(n, i) : new FormData(n);
                                Jo(l, {pending: !0, data: x, method: n.method, action: u}, null, x)
                            }
                        } else typeof u == "function" && (m.preventDefault(), x = i ? $d(n, i) : new FormData(n), Jo(l, {
                            pending: !0,
                            data   : x,
                            method : n.method,
                            action : u
                        }, u, x))
                    }, currentTarget: n
                }]
            })
        }
    }

    for (var _i = 0; _i < ro.length; _i++) {
        var Oi = ro[_i], px = Oi.toLowerCase(), bx = Oi[0].toUpperCase() + Oi.slice(1);
        De(px, "on" + bx)
    }
    De(Er, "onAnimationEnd"), De(Ar, "onAnimationIteration"), De(Mr, "onAnimationStart"), De("dblclick", "onDoubleClick"), De("focusin", "onFocus"), De("focusout", "onBlur"), De(Hh, "onTransitionRun"), De(qh, "onTransitionStart"), De(Rh, "onTransitionCancel"), De(zr, "onTransitionEnd"), na("onMouseEnter", ["mouseout", "mouseover"]), na("onMouseLeave", ["mouseout", "mouseover"]), na("onPointerEnter", ["pointerout", "pointerover"]), na("onPointerLeave", ["pointerout", "pointerover"]), Hl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Hl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Hl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Hl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Hl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Hl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Dn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Sx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dn));

    function Wd(t, e) {
        e = (e & 4) !== 0;
        for (var l = 0; l < t.length; l++) {
            var a = t[l], n = a.event;
            a = a.listeners;
            t:{
                var u = void 0;
                if (e) for (var i = a.length - 1; 0 <= i; i--) {
                    var m = a[i], x = m.instance, T = m.currentTarget;
                    if (m = m.listener, x !== u && n.isPropagationStopped()) break t;
                    u = m, n.currentTarget = T;
                    try {
                        u(n)
                    } catch (O) {
                        mu(O)
                    }
                    n.currentTarget = null, u = x
                } else for (i = 0; i < a.length; i++) {
                    if (m = a[i], x = m.instance, T = m.currentTarget, m = m.listener, x !== u && n.isPropagationStopped()) break t;
                    u = m, n.currentTarget = T;
                    try {
                        u(n)
                    } catch (O) {
                        mu(O)
                    }
                    n.currentTarget = null, u = x
                }
            }
        }
    }

    function st(t, e) {
        var l = e[Yc];
        l === void 0 && (l = e[Yc] = new Set);
        var a = t + "__bubble";
        l.has(a) || (Fd(e, t, 2, !1), l.add(a))
    }

    function ki(t, e, l) {
        var a = 0;
        e && (a |= 4), Fd(l, t, a, e)
    }

    var Pu = "_reactListening" + Math.random().toString(36).slice(2);

    function wi(t) {
        if (!t[Pu]) {
            t[Pu] = !0, Gs.forEach(function (l) {
                l !== "selectionchange" && (Sx.has(l) || ki(l, !1, t), ki(l, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[Pu] || (e[Pu] = !0, ki("selectionchange", !1, e))
        }
    }

    function Fd(t, e, l, a) {
        switch (Am(e)) {
            case 2:
                var n = $x;
                break;
            case 8:
                n = Wx;
                break;
            default:
                n = Vi
        }
        l = n.bind(null, e, l, t), n = void 0, !Fc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
            capture: !0,
            passive: n
        }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {passive: n}) : t.addEventListener(e, l, !1)
    }

    function Di(t, e, l, a, n) {
        var u = a;
        if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t:for (; ;) {
            if (a === null) return;
            var i = a.tag;
            if (i === 3 || i === 4) {
                var m = a.stateNode.containerInfo;
                if (m === n) break;
                if (i === 4) for (i = a.return; i !== null;) {
                    var x = i.tag;
                    if ((x === 3 || x === 4) && i.stateNode.containerInfo === n) return;
                    i = i.return
                }
                for (; m !== null;) {
                    if (i = ea(m), i === null) return;
                    if (x = i.tag, x === 5 || x === 6 || x === 26 || x === 27) {
                        a = u = i;
                        continue t
                    }
                    m = m.parentNode
                }
            }
            a = a.return
        }
        er(function () {
            var T = u, O = $c(l), U = [];
            t:{
                var E = _r.get(t);
                if (E !== void 0) {
                    var M = ru, Y = t;
                    switch (t) {
                        case"keypress":
                            if (iu(l) === 0) break t;
                        case"keydown":
                        case"keyup":
                            M = yh;
                            break;
                        case"focusin":
                            Y = "focus", M = eo;
                            break;
                        case"focusout":
                            Y = "blur", M = eo;
                            break;
                        case"beforeblur":
                        case"afterblur":
                            M = eo;
                            break;
                        case"click":
                            if (l.button === 2) break t;
                        case"auxclick":
                        case"dblclick":
                        case"mousedown":
                        case"mousemove":
                        case"mouseup":
                        case"mouseout":
                        case"mouseover":
                        case"contextmenu":
                            M = nr;
                            break;
                        case"drag":
                        case"dragend":
                        case"dragenter":
                        case"dragexit":
                        case"dragleave":
                        case"dragover":
                        case"dragstart":
                        case"drop":
                            M = lh;
                            break;
                        case"touchcancel":
                        case"touchend":
                        case"touchmove":
                        case"touchstart":
                            M = gh;
                            break;
                        case Er:
                        case Ar:
                        case Mr:
                            M = uh;
                            break;
                        case zr:
                            M = ph;
                            break;
                        case"scroll":
                        case"scrollend":
                            M = th;
                            break;
                        case"wheel":
                            M = Sh;
                            break;
                        case"copy":
                        case"cut":
                        case"paste":
                            M = oh;
                            break;
                        case"gotpointercapture":
                        case"lostpointercapture":
                        case"pointercancel":
                        case"pointerdown":
                        case"pointermove":
                        case"pointerout":
                        case"pointerover":
                        case"pointerup":
                            M = cr;
                            break;
                        case"toggle":
                        case"beforetoggle":
                            M = Th
                    }
                    var F = (e & 4) !== 0, Tt = !F && (t === "scroll" || t === "scrollend"),
                        p = F ? E !== null ? E + "Capture" : null : E;
                    F = [];
                    for (var v = T, j; v !== null;) {
                        var w = v;
                        if (j = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || j === null || p === null || (w = tn(v, p), w != null && F.push(Cn(v, w, j))), Tt) break;
                        v = v.return
                    }
                    0 < F.length && (E = new M(E, Y, null, l, O), U.push({event: E, listeners: F}))
                }
            }
            if ((e & 7) === 0) {
                t:{
                    if (E = t === "mouseover" || t === "pointerover", M = t === "mouseout" || t === "pointerout", E && l !== Jc && (Y = l.relatedTarget || l.fromElement) && (ea(Y) || Y[ta])) break t;
                    if ((M || E) && (E = O.window === O ? O : (E = O.ownerDocument) ? E.defaultView || E.parentWindow : window, M ? (Y = l.relatedTarget || l.toElement, M = T, Y = Y ? ea(Y) : null, Y !== null && (Tt = y(Y), F = Y.tag, Y !== Tt || F !== 5 && F !== 27 && F !== 6) && (Y = null)) : (M = null, Y = T), M !== Y)) {
                        if (F = nr, w = "onMouseLeave", p = "onMouseEnter", v = "mouse", (t === "pointerout" || t === "pointerover") && (F = cr, w = "onPointerLeave", p = "onPointerEnter", v = "pointer"), Tt = M == null ? E : Pa(M), j = Y == null ? E : Pa(Y), E = new F(w, v + "leave", M, l, O), E.target = Tt, E.relatedTarget = j, w = null, ea(O) === T && (F = new F(p, v + "enter", Y, l, O), F.target = j, F.relatedTarget = Tt, w = F), Tt = w, M && Y) e:{
                            for (F = jx, p = M, v = Y, j = 0, w = p; w; w = F(w)) j++;
                            w = 0;
                            for (var V = v; V; V = F(V)) w++;
                            for (; 0 < j - w;) p = F(p), j--;
                            for (; 0 < w - j;) v = F(v), w--;
                            for (; j--;) {
                                if (p === v || v !== null && p === v.alternate) {
                                    F = p;
                                    break e
                                }
                                p = F(p), v = F(v)
                            }
                            F = null
                        } else F = null;
                        M !== null && Id(U, E, M, F, !1), Y !== null && Tt !== null && Id(U, Tt, Y, F, !0)
                    }
                }
                t:{
                    if (E = T ? Pa(T) : window, M = E.nodeName && E.nodeName.toLowerCase(), M === "select" || M === "input" && E.type === "file") var yt = yr; else if (dr(E)) if (hr) yt = Dh; else {
                        yt = kh;
                        var Q = Oh
                    } else M = E.nodeName, !M || M.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? T && Vc(T.elementType) && (yt = yr) : yt = wh;
                    if (yt && (yt = yt(t, T))) {
                        mr(U, yt, l, O);
                        break t
                    }
                    Q && Q(t, E, T), t === "focusout" && T && E.type === "number" && T.memoizedProps.value != null && Zc(E, "number", E.value)
                }
                switch (Q = T ? Pa(T) : window, t) {
                    case"focusin":
                        (dr(Q) || Q.contentEditable === "true") && (ra = Q, oo = T, sn = null);
                        break;
                    case"focusout":
                        sn = oo = ra = null;
                        break;
                    case"mousedown":
                        io = !0;
                        break;
                    case"contextmenu":
                    case"mouseup":
                    case"dragend":
                        io = !1, Tr(U, l, O);
                        break;
                    case"selectionchange":
                        if (Uh) break;
                    case"keydown":
                    case"keyup":
                        Tr(U, l, O)
                }
                var nt;
                if (ao) t:{
                    switch (t) {
                        case"compositionstart":
                            var ft = "onCompositionStart";
                            break t;
                        case"compositionend":
                            ft = "onCompositionEnd";
                            break t;
                        case"compositionupdate":
                            ft = "onCompositionUpdate";
                            break t
                    }
                    ft = void 0
                } else sa ? rr(t, l) && (ft = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ft = "onCompositionStart");
                ft && (or && l.locale !== "ko" && (sa || ft !== "onCompositionStart" ? ft === "onCompositionEnd" && sa && (nt = lr()) : (il = O, Ic = "value" in il ? il.value : il.textContent, sa = !0)), Q = tc(T, ft), 0 < Q.length && (ft = new ur(ft, t, null, l, O), U.push({
                    event    : ft,
                    listeners: Q
                }), nt ? ft.data = nt : (nt = fr(l), nt !== null && (ft.data = nt)))), (nt = Eh ? Ah(t, l) : Mh(t, l)) && (ft = tc(T, "onBeforeInput"), 0 < ft.length && (Q = new ur("onBeforeInput", "beforeinput", null, l, O), U.push({
                    event    : Q,
                    listeners: ft
                }), Q.data = nt)), vx(U, t, T, l, O)
            }
            Wd(U, e)
        })
    }

    function Cn(t, e, l) {
        return {instance: t, listener: e, currentTarget: l}
    }

    function tc(t, e) {
        for (var l = e + "Capture", a = []; t !== null;) {
            var n = t, u = n.stateNode;
            if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = tn(t, l), n != null && a.unshift(Cn(t, n, u)), n = tn(t, e), n != null && a.push(Cn(t, n, u))), t.tag === 3) return a;
            t = t.return
        }
        return []
    }

    function jx(t) {
        if (t === null) return null;
        do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }

    function Id(t, e, l, a, n) {
        for (var u = e._reactName, i = []; l !== null && l !== a;) {
            var m = l, x = m.alternate, T = m.stateNode;
            if (m = m.tag, x !== null && x === a) break;
            m !== 5 && m !== 26 && m !== 27 || T === null || (x = T, n ? (T = tn(l, u), T != null && i.unshift(Cn(l, T, x))) : n || (T = tn(l, u), T != null && i.push(Cn(l, T, x)))), l = l.return
        }
        i.length !== 0 && t.push({event: e, listeners: i})
    }

    var Tx = /\r\n?/g, Nx = /\u0000|\uFFFD/g;

    function Pd(t) {
        return (typeof t == "string" ? t : "" + t).replace(Tx, `
`).replace(Nx, "")
    }

    function tm(t, e) {
        return e = Pd(e), Pd(t) === e
    }

    function jt(t, e, l, a, n, u) {
        switch (l) {
            case"children":
                typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ca(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ca(t, "" + a);
                break;
            case"className":
                nu(t, "class", a);
                break;
            case"tabIndex":
                nu(t, "tabindex", a);
                break;
            case"dir":
            case"role":
            case"viewBox":
            case"width":
            case"height":
                nu(t, l, a);
                break;
            case"style":
                Ps(t, a, u);
                break;
            case"data":
                if (e !== "object") {
                    nu(t, "data", a);
                    break
                }
            case"src":
            case"href":
                if (a === "" && (e !== "a" || l !== "href")) {
                    t.removeAttribute(l);
                    break
                }
                if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                    t.removeAttribute(l);
                    break
                }
                a = cu("" + a), t.setAttribute(l, a);
                break;
            case"action":
            case"formAction":
                if (typeof a == "function") {
                    t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof u == "function" && (l === "formAction" ? (e !== "input" && jt(t, e, "name", n.name, n, null), jt(t, e, "formEncType", n.formEncType, n, null), jt(t, e, "formMethod", n.formMethod, n, null), jt(t, e, "formTarget", n.formTarget, n, null)) : (jt(t, e, "encType", n.encType, n, null), jt(t, e, "method", n.method, n, null), jt(t, e, "target", n.target, n, null)));
                if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                    t.removeAttribute(l);
                    break
                }
                a = cu("" + a), t.setAttribute(l, a);
                break;
            case"onClick":
                a != null && (t.onclick = Ge);
                break;
            case"onScroll":
                a != null && st("scroll", t);
                break;
            case"onScrollEnd":
                a != null && st("scrollend", t);
                break;
            case"dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                    if (l = a.__html, l != null) {
                        if (n.children != null) throw Error(s(60));
                        t.innerHTML = l
                    }
                }
                break;
            case"multiple":
                t.multiple = a && typeof a != "function" && typeof a != "symbol";
                break;
            case"muted":
                t.muted = a && typeof a != "function" && typeof a != "symbol";
                break;
            case"suppressContentEditableWarning":
            case"suppressHydrationWarning":
            case"defaultValue":
            case"defaultChecked":
            case"innerHTML":
            case"ref":
                break;
            case"autoFocus":
                break;
            case"xlinkHref":
                if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                    t.removeAttribute("xlink:href");
                    break
                }
                l = cu("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
                break;
            case"contentEditable":
            case"spellCheck":
            case"draggable":
            case"value":
            case"autoReverse":
            case"externalResourcesRequired":
            case"focusable":
            case"preserveAlpha":
                a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
                break;
            case"inert":
            case"allowFullScreen":
            case"async":
            case"autoPlay":
            case"controls":
            case"default":
            case"defer":
            case"disabled":
            case"disablePictureInPicture":
            case"disableRemotePlayback":
            case"formNoValidate":
            case"hidden":
            case"loop":
            case"noModule":
            case"noValidate":
            case"open":
            case"playsInline":
            case"readOnly":
            case"required":
            case"reversed":
            case"scoped":
            case"seamless":
            case"itemScope":
                a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
                break;
            case"capture":
            case"download":
                a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
                break;
            case"cols":
            case"rows":
            case"size":
            case"span":
                a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
                break;
            case"rowSpan":
            case"start":
                a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
                break;
            case"popover":
                st("beforetoggle", t), st("toggle", t), au(t, "popover", a);
                break;
            case"xlinkActuate":
                Ye(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case"xlinkArcrole":
                Ye(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case"xlinkRole":
                Ye(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case"xlinkShow":
                Ye(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case"xlinkTitle":
                Ye(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case"xlinkType":
                Ye(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case"xmlBase":
                Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case"xmlLang":
                Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case"xmlSpace":
                Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case"is":
                au(t, "is", a);
                break;
            case"innerText":
            case"textContent":
                break;
            default:
                (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Iy.get(l) || l, au(t, l, a))
        }
    }

    function Ci(t, e, l, a, n, u) {
        switch (l) {
            case"style":
                Ps(t, a, u);
                break;
            case"dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                    if (l = a.__html, l != null) {
                        if (n.children != null) throw Error(s(60));
                        t.innerHTML = l
                    }
                }
                break;
            case"children":
                typeof a == "string" ? ca(t, a) : (typeof a == "number" || typeof a == "bigint") && ca(t, "" + a);
                break;
            case"onScroll":
                a != null && st("scroll", t);
                break;
            case"onScrollEnd":
                a != null && st("scrollend", t);
                break;
            case"onClick":
                a != null && (t.onclick = Ge);
                break;
            case"suppressContentEditableWarning":
            case"suppressHydrationWarning":
            case"innerHTML":
            case"ref":
                break;
            case"innerText":
            case"textContent":
                break;
            default:
                if (!Qs.hasOwnProperty(l)) t:{
                    if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[ne] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
                        typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
                        break t
                    }
                    l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : au(t, l, a)
                }
        }
    }

    function Ft(t, e, l) {
        switch (e) {
            case"div":
            case"span":
            case"svg":
            case"path":
            case"a":
            case"g":
            case"p":
            case"li":
                break;
            case"img":
                st("error", t), st("load", t);
                var a = !1, n = !1, u;
                for (u in l) if (l.hasOwnProperty(u)) {
                    var i = l[u];
                    if (i != null) switch (u) {
                        case"src":
                            a = !0;
                            break;
                        case"srcSet":
                            n = !0;
                            break;
                        case"children":
                        case"dangerouslySetInnerHTML":
                            throw Error(s(137, e));
                        default:
                            jt(t, e, u, i, l, null)
                    }
                }
                n && jt(t, e, "srcSet", l.srcSet, l, null), a && jt(t, e, "src", l.src, l, null);
                return;
            case"input":
                st("invalid", t);
                var m = u = i = n = null, x = null, T = null;
                for (a in l) if (l.hasOwnProperty(a)) {
                    var O = l[a];
                    if (O != null) switch (a) {
                        case"name":
                            n = O;
                            break;
                        case"type":
                            i = O;
                            break;
                        case"checked":
                            x = O;
                            break;
                        case"defaultChecked":
                            T = O;
                            break;
                        case"value":
                            u = O;
                            break;
                        case"defaultValue":
                            m = O;
                            break;
                        case"children":
                        case"dangerouslySetInnerHTML":
                            if (O != null) throw Error(s(137, e));
                            break;
                        default:
                            jt(t, e, a, O, l, null)
                    }
                }
                $s(t, u, m, x, T, i, n, !1);
                return;
            case"select":
                st("invalid", t), a = i = u = null;
                for (n in l) if (l.hasOwnProperty(n) && (m = l[n], m != null)) switch (n) {
                    case"value":
                        u = m;
                        break;
                    case"defaultValue":
                        i = m;
                        break;
                    case"multiple":
                        a = m;
                    default:
                        jt(t, e, n, m, l, null)
                }
                e = u, l = i, t.multiple = !!a, e != null ? ua(t, !!a, e, !1) : l != null && ua(t, !!a, l, !0);
                return;
            case"textarea":
                st("invalid", t), u = n = a = null;
                for (i in l) if (l.hasOwnProperty(i) && (m = l[i], m != null)) switch (i) {
                    case"value":
                        a = m;
                        break;
                    case"defaultValue":
                        n = m;
                        break;
                    case"children":
                        u = m;
                        break;
                    case"dangerouslySetInnerHTML":
                        if (m != null) throw Error(s(91));
                        break;
                    default:
                        jt(t, e, i, m, l, null)
                }
                Fs(t, a, n, u);
                return;
            case"option":
                for (x in l) if (l.hasOwnProperty(x) && (a = l[x], a != null)) switch (x) {
                    case"selected":
                        t.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        jt(t, e, x, a, l, null)
                }
                return;
            case"dialog":
                st("beforetoggle", t), st("toggle", t), st("cancel", t), st("close", t);
                break;
            case"iframe":
            case"object":
                st("load", t);
                break;
            case"video":
            case"audio":
                for (a = 0; a < Dn.length; a++) st(Dn[a], t);
                break;
            case"image":
                st("error", t), st("load", t);
                break;
            case"details":
                st("toggle", t);
                break;
            case"embed":
            case"source":
            case"link":
                st("error", t), st("load", t);
            case"area":
            case"base":
            case"br":
            case"col":
            case"hr":
            case"keygen":
            case"meta":
            case"param":
            case"track":
            case"wbr":
            case"menuitem":
                for (T in l) if (l.hasOwnProperty(T) && (a = l[T], a != null)) switch (T) {
                    case"children":
                    case"dangerouslySetInnerHTML":
                        throw Error(s(137, e));
                    default:
                        jt(t, e, T, a, l, null)
                }
                return;
            default:
                if (Vc(e)) {
                    for (O in l) l.hasOwnProperty(O) && (a = l[O], a !== void 0 && Ci(t, e, O, a, l, void 0));
                    return
                }
        }
        for (m in l) l.hasOwnProperty(m) && (a = l[m], a != null && jt(t, e, m, a, l, null))
    }

    function Ex(t, e, l, a) {
        switch (e) {
            case"div":
            case"span":
            case"svg":
            case"path":
            case"a":
            case"g":
            case"p":
            case"li":
                break;
            case"input":
                var n = null, u = null, i = null, m = null, x = null, T = null, O = null;
                for (M in l) {
                    var U = l[M];
                    if (l.hasOwnProperty(M) && U != null) switch (M) {
                        case"checked":
                            break;
                        case"value":
                            break;
                        case"defaultValue":
                            x = U;
                        default:
                            a.hasOwnProperty(M) || jt(t, e, M, null, a, U)
                    }
                }
                for (var E in a) {
                    var M = a[E];
                    if (U = l[E], a.hasOwnProperty(E) && (M != null || U != null)) switch (E) {
                        case"type":
                            u = M;
                            break;
                        case"name":
                            n = M;
                            break;
                        case"checked":
                            T = M;
                            break;
                        case"defaultChecked":
                            O = M;
                            break;
                        case"value":
                            i = M;
                            break;
                        case"defaultValue":
                            m = M;
                            break;
                        case"children":
                        case"dangerouslySetInnerHTML":
                            if (M != null) throw Error(s(137, e));
                            break;
                        default:
                            M !== U && jt(t, e, E, M, a, U)
                    }
                }
                Xc(t, i, m, x, T, O, u, n);
                return;
            case"select":
                M = i = m = E = null;
                for (u in l) if (x = l[u], l.hasOwnProperty(u) && x != null) switch (u) {
                    case"value":
                        break;
                    case"multiple":
                        M = x;
                    default:
                        a.hasOwnProperty(u) || jt(t, e, u, null, a, x)
                }
                for (n in a) if (u = a[n], x = l[n], a.hasOwnProperty(n) && (u != null || x != null)) switch (n) {
                    case"value":
                        E = u;
                        break;
                    case"defaultValue":
                        m = u;
                        break;
                    case"multiple":
                        i = u;
                    default:
                        u !== x && jt(t, e, n, u, a, x)
                }
                e = m, l = i, a = M, E != null ? ua(t, !!l, E, !1) : !!a != !!l && (e != null ? ua(t, !!l, e, !0) : ua(t, !!l, l ? [] : "", !1));
                return;
            case"textarea":
                M = E = null;
                for (m in l) if (n = l[m], l.hasOwnProperty(m) && n != null && !a.hasOwnProperty(m)) switch (m) {
                    case"value":
                        break;
                    case"children":
                        break;
                    default:
                        jt(t, e, m, null, a, n)
                }
                for (i in a) if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
                    case"value":
                        E = n;
                        break;
                    case"defaultValue":
                        M = n;
                        break;
                    case"children":
                        break;
                    case"dangerouslySetInnerHTML":
                        if (n != null) throw Error(s(91));
                        break;
                    default:
                        n !== u && jt(t, e, i, n, a, u)
                }
                Ws(t, E, M);
                return;
            case"option":
                for (var Y in l) if (E = l[Y], l.hasOwnProperty(Y) && E != null && !a.hasOwnProperty(Y)) switch (Y) {
                    case"selected":
                        t.selected = !1;
                        break;
                    default:
                        jt(t, e, Y, null, a, E)
                }
                for (x in a) if (E = a[x], M = l[x], a.hasOwnProperty(x) && E !== M && (E != null || M != null)) switch (x) {
                    case"selected":
                        t.selected = E && typeof E != "function" && typeof E != "symbol";
                        break;
                    default:
                        jt(t, e, x, E, a, M)
                }
                return;
            case"img":
            case"link":
            case"area":
            case"base":
            case"br":
            case"col":
            case"embed":
            case"hr":
            case"keygen":
            case"meta":
            case"param":
            case"source":
            case"track":
            case"wbr":
            case"menuitem":
                for (var F in l) E = l[F], l.hasOwnProperty(F) && E != null && !a.hasOwnProperty(F) && jt(t, e, F, null, a, E);
                for (T in a) if (E = a[T], M = l[T], a.hasOwnProperty(T) && E !== M && (E != null || M != null)) switch (T) {
                    case"children":
                    case"dangerouslySetInnerHTML":
                        if (E != null) throw Error(s(137, e));
                        break;
                    default:
                        jt(t, e, T, E, a, M)
                }
                return;
            default:
                if (Vc(e)) {
                    for (var Tt in l) E = l[Tt], l.hasOwnProperty(Tt) && E !== void 0 && !a.hasOwnProperty(Tt) && Ci(t, e, Tt, void 0, a, E);
                    for (O in a) E = a[O], M = l[O], !a.hasOwnProperty(O) || E === M || E === void 0 && M === void 0 || Ci(t, e, O, E, a, M);
                    return
                }
        }
        for (var p in l) E = l[p], l.hasOwnProperty(p) && E != null && !a.hasOwnProperty(p) && jt(t, e, p, null, a, E);
        for (U in a) E = a[U], M = l[U], !a.hasOwnProperty(U) || E === M || E == null && M == null || jt(t, e, U, E, a, M)
    }

    function em(t) {
        switch (t) {
            case"css":
            case"script":
            case"font":
            case"img":
            case"image":
            case"input":
            case"link":
                return !0;
            default:
                return !1
        }
    }

    function Ax() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
                var n = l[a], u = n.transferSize, i = n.initiatorType, m = n.duration;
                if (u && m && em(i)) {
                    for (i = 0, m = n.responseEnd, a += 1; a < l.length; a++) {
                        var x = l[a], T = x.startTime;
                        if (T > m) break;
                        var O = x.transferSize, U = x.initiatorType;
                        O && em(U) && (x = x.responseEnd, i += O * (x < m ? 1 : (m - T) / (x - T)))
                    }
                    if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break
                }
            }
            if (0 < t) return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5
    }

    var Ui = null, Hi = null;

    function ec(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }

    function lm(t) {
        switch (t) {
            case"http://www.w3.org/2000/svg":
                return 1;
            case"http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function am(t, e) {
        if (t === 0) switch (e) {
            case"svg":
                return 1;
            case"math":
                return 2;
            default:
                return 0
        }
        return t === 1 && e === "foreignObject" ? 0 : t
    }

    function qi(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }

    var Ri = null;

    function Mx() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Ri ? !1 : (Ri = t, !0) : (Ri = null, !1)
    }

    var nm = typeof setTimeout == "function" ? setTimeout : void 0,
        zx = typeof clearTimeout == "function" ? clearTimeout : void 0,
        um = typeof Promise == "function" ? Promise : void 0,
        _x = typeof queueMicrotask == "function" ? queueMicrotask : typeof um < "u" ? function (t) {
            return um.resolve(null).then(t).catch(Ox)
        } : nm;

    function Ox(t) {
        setTimeout(function () {
            throw t
        })
    }

    function El(t) {
        return t === "head"
    }

    function cm(t, e) {
        var l = e, a = 0;
        do {
            var n = l.nextSibling;
            if (t.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
                if (a === 0) {
                    t.removeChild(n), qa(e);
                    return
                }
                a--
            } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++; else if (l === "html") Un(t.ownerDocument.documentElement); else if (l === "head") {
                l = t.ownerDocument.head, Un(l);
                for (var u = l.firstChild; u;) {
                    var i = u.nextSibling, m = u.nodeName;
                    u[Ia] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i
                }
            } else l === "body" && Un(t.ownerDocument.body);
            l = n
        } while (l);
        qa(e)
    }

    function om(t, e) {
        var l = t;
        t = 0;
        do {
            var a = l.nextSibling;
            if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8) if (l = a.data, l === "/$") {
                if (t === 0) break;
                t--
            } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
            l = a
        } while (l)
    }

    function Li(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
            var l = e;
            switch (e = e.nextSibling, l.nodeName) {
                case"HTML":
                case"HEAD":
                case"BODY":
                    Li(l), Gc(l);
                    continue;
                case"SCRIPT":
                case"STYLE":
                    continue;
                case"LINK":
                    if (l.rel.toLowerCase() === "stylesheet") continue
            }
            t.removeChild(l)
        }
    }

    function kx(t, e, l, a) {
        for (; t.nodeType === 1;) {
            var n = l;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
            } else if (a) {
                if (!t[Ia]) switch (e) {
                    case"meta":
                        if (!t.hasAttribute("itemprop")) break;
                        return t;
                    case"link":
                        if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
                        if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title)) break;
                        return t;
                    case"style":
                        if (t.hasAttribute("data-precedence")) break;
                        return t;
                    case"script":
                        if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                        return t;
                    default:
                        return t
                }
            } else if (e === "input" && t.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && t.getAttribute("name") === u) return t
            } else return t;
            if (t = Oe(t.nextSibling), t === null) break
        }
        return null
    }

    function wx(t, e, l) {
        if (e === "") return null;
        for (; t.nodeType !== 3;) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Oe(t.nextSibling), t === null)) return null;
        return t
    }

    function im(t, e) {
        for (; t.nodeType !== 8;) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Oe(t.nextSibling), t === null)) return null;
        return t
    }

    function Bi(t) {
        return t.data === "$?" || t.data === "$~"
    }

    function Ki(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }

    function Dx(t, e) {
        var l = t.ownerDocument;
        if (t.data === "$~") t._reactRetry = e; else if (t.data !== "$?" || l.readyState !== "loading") e(); else {
            var a = function () {
                e(), l.removeEventListener("DOMContentLoaded", a)
            };
            l.addEventListener("DOMContentLoaded", a), t._reactRetry = a
        }
    }

    function Oe(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
                if (e === "/$" || e === "/&") return null
            }
        }
        return t
    }

    var Yi = null;

    function sm(t) {
        t = t.nextSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var l = t.data;
                if (l === "/$" || l === "/&") {
                    if (e === 0) return Oe(t.nextSibling);
                    e--
                } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }

    function rm(t) {
        t = t.previousSibling;
        for (var e = 0; t;) {
            if (t.nodeType === 8) {
                var l = t.data;
                if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                    if (e === 0) return t;
                    e--
                } else l !== "/$" && l !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }

    function fm(t, e, l) {
        switch (e = ec(l), t) {
            case"html":
                if (t = e.documentElement, !t) throw Error(s(452));
                return t;
            case"head":
                if (t = e.head, !t) throw Error(s(453));
                return t;
            case"body":
                if (t = e.body, !t) throw Error(s(454));
                return t;
            default:
                throw Error(s(451))
        }
    }

    function Un(t) {
        for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
        Gc(t)
    }

    var ke = new Map, dm = new Set;

    function lc(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }

    var ul = k.d;
    k.d = {f: Cx, r: Ux, D: Hx, C: qx, L: Rx, m: Lx, X: Kx, S: Bx, M: Yx};

    function Cx() {
        var t = ul.f(), e = Vu();
        return t || e
    }

    function Ux(t) {
        var e = la(t);
        e !== null && e.tag === 5 && e.type === "form" ? _f(e) : ul.r(t)
    }

    var Ca = typeof document > "u" ? null : document;

    function mm(t, e, l) {
        var a = Ca;
        if (a && typeof e == "string" && e) {
            var n = Te(e);
            n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), dm.has(n) || (dm.add(n), t = {
                rel        : t,
                crossOrigin: l,
                href       : e
            }, a.querySelector(n) === null && (e = a.createElement("link"), Ft(e, "link", t), Qt(e), a.head.appendChild(e)))
        }
    }

    function Hx(t) {
        ul.D(t), mm("dns-prefetch", t, null)
    }

    function qx(t, e) {
        ul.C(t, e), mm("preconnect", t, e)
    }

    function Rx(t, e, l) {
        ul.L(t, e, l);
        var a = Ca;
        if (a && t && e) {
            var n = 'link[rel="preload"][as="' + Te(e) + '"]';
            e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Te(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Te(l.imageSizes) + '"]')) : n += '[href="' + Te(t) + '"]';
            var u = n;
            switch (e) {
                case"style":
                    u = Ua(t);
                    break;
                case"script":
                    u = Ha(t)
            }
            ke.has(u) || (t = z({
                rel : "preload",
                href: e === "image" && l && l.imageSrcSet ? void 0 : t,
                as  : e
            }, l), ke.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Hn(u)) || e === "script" && a.querySelector(qn(u)) || (e = a.createElement("link"), Ft(e, "link", t), Qt(e), a.head.appendChild(e)))
        }
    }

    function Lx(t, e) {
        ul.m(t, e);
        var l = Ca;
        if (l && t) {
            var a = e && typeof e.as == "string" ? e.as : "script",
                n = 'link[rel="modulepreload"][as="' + Te(a) + '"][href="' + Te(t) + '"]', u = n;
            switch (a) {
                case"audioworklet":
                case"paintworklet":
                case"serviceworker":
                case"sharedworker":
                case"worker":
                case"script":
                    u = Ha(t)
            }
            if (!ke.has(u) && (t = z({rel: "modulepreload", href: t}, e), ke.set(u, t), l.querySelector(n) === null)) {
                switch (a) {
                    case"audioworklet":
                    case"paintworklet":
                    case"serviceworker":
                    case"sharedworker":
                    case"worker":
                    case"script":
                        if (l.querySelector(qn(u))) return
                }
                a = l.createElement("link"), Ft(a, "link", t), Qt(a), l.head.appendChild(a)
            }
        }
    }

    function Bx(t, e, l) {
        ul.S(t, e, l);
        var a = Ca;
        if (a && t) {
            var n = aa(a).hoistableStyles, u = Ua(t);
            e = e || "default";
            var i = n.get(u);
            if (!i) {
                var m = {loading: 0, preload: null};
                if (i = a.querySelector(Hn(u))) m.loading = 5; else {
                    t = z({rel: "stylesheet", href: t, "data-precedence": e}, l), (l = ke.get(u)) && Gi(t, l);
                    var x = i = a.createElement("link");
                    Qt(x), Ft(x, "link", t), x._p = new Promise(function (T, O) {
                        x.onload = T, x.onerror = O
                    }), x.addEventListener("load", function () {
                        m.loading |= 1
                    }), x.addEventListener("error", function () {
                        m.loading |= 2
                    }), m.loading |= 4, ac(i, e, a)
                }
                i = {type: "stylesheet", instance: i, count: 1, state: m}, n.set(u, i)
            }
        }
    }

    function Kx(t, e) {
        ul.X(t, e);
        var l = Ca;
        if (l && t) {
            var a = aa(l).hoistableScripts, n = Ha(t), u = a.get(n);
            u || (u = l.querySelector(qn(n)), u || (t = z({
                src  : t,
                async: !0
            }, e), (e = ke.get(n)) && Qi(t, e), u = l.createElement("script"), Qt(u), Ft(u, "link", t), l.head.appendChild(u)), u = {
                type    : "script",
                instance: u,
                count   : 1,
                state   : null
            }, a.set(n, u))
        }
    }

    function Yx(t, e) {
        ul.M(t, e);
        var l = Ca;
        if (l && t) {
            var a = aa(l).hoistableScripts, n = Ha(t), u = a.get(n);
            u || (u = l.querySelector(qn(n)), u || (t = z({
                src  : t,
                async: !0,
                type : "module"
            }, e), (e = ke.get(n)) && Qi(t, e), u = l.createElement("script"), Qt(u), Ft(u, "link", t), l.head.appendChild(u)), u = {
                type    : "script",
                instance: u,
                count   : 1,
                state   : null
            }, a.set(n, u))
        }
    }

    function ym(t, e, l, a) {
        var n = (n = ot.current) ? lc(n) : null;
        if (!n) throw Error(s(446));
        switch (t) {
            case"meta":
            case"title":
                return null;
            case"style":
                return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ua(l.href), l = aa(n).hoistableStyles, a = l.get(e), a || (a = {
                    type    : "style",
                    instance: null,
                    count   : 0,
                    state   : null
                }, l.set(e, a)), a) : {type: "void", instance: null, count: 0, state: null};
            case"link":
                if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                    t = Ua(l.href);
                    var u = aa(n).hoistableStyles, i = u.get(t);
                    if (i || (n = n.ownerDocument || n, i = {
                        type    : "stylesheet",
                        instance: null,
                        count   : 0,
                        state   : {loading: 0, preload: null}
                    }, u.set(t, i), (u = n.querySelector(Hn(t))) && !u._p && (i.instance = u, i.state.loading = 5), ke.has(t) || (l = {
                        rel           : "preload",
                        as            : "style",
                        href          : l.href,
                        crossOrigin   : l.crossOrigin,
                        integrity     : l.integrity,
                        media         : l.media,
                        hrefLang      : l.hrefLang,
                        referrerPolicy: l.referrerPolicy
                    }, ke.set(t, l), u || Gx(n, t, l, i.state))), e && a === null) throw Error(s(528, ""));
                    return i
                }
                if (e && a !== null) throw Error(s(529, ""));
                return null;
            case"script":
                return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ha(l), l = aa(n).hoistableScripts, a = l.get(e), a || (a = {
                    type    : "script",
                    instance: null,
                    count   : 0,
                    state   : null
                }, l.set(e, a)), a) : {type: "void", instance: null, count: 0, state: null};
            default:
                throw Error(s(444, t))
        }
    }

    function Ua(t) {
        return 'href="' + Te(t) + '"'
    }

    function Hn(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }

    function hm(t) {
        return z({}, t, {"data-precedence": t.precedence, precedence: null})
    }

    function Gx(t, e, l, a) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function () {
            return a.loading |= 1
        }), e.addEventListener("error", function () {
            return a.loading |= 2
        }), Ft(e, "link", l), Qt(e), t.head.appendChild(e))
    }

    function Ha(t) {
        return '[src="' + Te(t) + '"]'
    }

    function qn(t) {
        return "script[async]" + t
    }

    function xm(t, e, l) {
        if (e.count++, e.instance === null) switch (e.type) {
            case"style":
                var a = t.querySelector('style[data-href~="' + Te(l.href) + '"]');
                if (a) return e.instance = a, Qt(a), a;
                var n = z({}, l, {"data-href": l.href, "data-precedence": l.precedence, href: null, precedence: null});
                return a = (t.ownerDocument || t).createElement("style"), Qt(a), Ft(a, "style", n), ac(a, l.precedence, t), e.instance = a;
            case"stylesheet":
                n = Ua(l.href);
                var u = t.querySelector(Hn(n));
                if (u) return e.state.loading |= 4, e.instance = u, Qt(u), u;
                a = hm(l), (n = ke.get(n)) && Gi(a, n), u = (t.ownerDocument || t).createElement("link"), Qt(u);
                var i = u;
                return i._p = new Promise(function (m, x) {
                    i.onload = m, i.onerror = x
                }), Ft(u, "link", a), e.state.loading |= 4, ac(u, l.precedence, t), e.instance = u;
            case"script":
                return u = Ha(l.src), (n = t.querySelector(qn(u))) ? (e.instance = n, Qt(n), n) : (a = l, (n = ke.get(u)) && (a = z({}, l), Qi(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Qt(n), Ft(n, "link", a), t.head.appendChild(n), e.instance = n);
            case"void":
                return null;
            default:
                throw Error(s(443, e.type))
        } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, ac(a, l.precedence, t));
        return e.instance
    }

    function ac(t, e, l) {
        for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
            var m = a[i];
            if (m.dataset.precedence === e) u = m; else if (u !== n) break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild))
    }

    function Gi(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
    }

    function Qi(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
    }

    var nc = null;

    function gm(t, e, l) {
        if (nc === null) {
            var a = new Map, n = nc = new Map;
            n.set(l, a)
        } else n = nc, a = n.get(l), a || (a = new Map, n.set(l, a));
        if (a.has(t)) return a;
        for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
            var u = l[n];
            if (!(u[Ia] || u[Vt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = u.getAttribute(e) || "";
                i = t + i;
                var m = a.get(i);
                m ? m.push(u) : a.set(i, [u])
            }
        }
        return a
    }

    function vm(t, e, l) {
        t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null)
    }

    function Qx(t, e, l) {
        if (l === 1 || e.itemProp != null) return !1;
        switch (t) {
            case"meta":
            case"title":
                return !0;
            case"style":
                if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
                return !0;
            case"link":
                if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
                switch (e.rel) {
                    case"stylesheet":
                        return t = e.disabled, typeof e.precedence == "string" && t == null;
                    default:
                        return !0
                }
            case"script":
                if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
        }
        return !1
    }

    function pm(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }

    function Xx(t, e, l, a) {
        if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var n = Ua(a.href), u = e.querySelector(Hn(n));
                if (u) {
                    e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = uc.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Qt(u);
                    return
                }
                u = e.ownerDocument || e, a = hm(a), (n = ke.get(n)) && Gi(a, n), u = u.createElement("link"), Qt(u);
                var i = u;
                i._p = new Promise(function (m, x) {
                    i.onload = m, i.onerror = x
                }), Ft(u, "link", a), l.instance = u
            }
            t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = uc.bind(t), e.addEventListener("load", l), e.addEventListener("error", l))
        }
    }

    var Xi = 0;

    function Zx(t, e) {
        return t.stylesheets && t.count === 0 && oc(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function (l) {
            var a = setTimeout(function () {
                if (t.stylesheets && oc(t, t.stylesheets), t.unsuspend) {
                    var u = t.unsuspend;
                    t.unsuspend = null, u()
                }
            }, 6e4 + e);
            0 < t.imgBytes && Xi === 0 && (Xi = 62500 * Ax());
            var n = setTimeout(function () {
                if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && oc(t, t.stylesheets), t.unsuspend)) {
                    var u = t.unsuspend;
                    t.unsuspend = null, u()
                }
            }, (t.imgBytes > Xi ? 50 : 800) + e);
            return t.unsuspend = l, function () {
                t.unsuspend = null, clearTimeout(a), clearTimeout(n)
            }
        } : null
    }

    function uc() {
        if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets) oc(this, this.stylesheets); else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null, t()
            }
        }
    }

    var cc = null;

    function oc(t, e) {
        t.stylesheets = null, t.unsuspend !== null && (t.count++, cc = new Map, e.forEach(Vx, t), cc = null, uc.call(t))
    }

    function Vx(t, e) {
        if (!(e.state.loading & 4)) {
            var l = cc.get(t);
            if (l) var a = l.get(null); else {
                l = new Map, cc.set(t, l);
                for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var i = n[u];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i)
                }
                a && l.set(null, a)
            }
            n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = uc.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4
        }
    }

    var Rn = {$$typeof: ut, Provider: null, Consumer: null, _currentValue: $, _currentValue2: $, _threadCount: 0};

    function Jx(t, e, l, a, n, u, i, m, x) {
        this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Lc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Lc(0), this.hiddenUpdates = Lc(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.incompleteTransitions = new Map
    }

    function bm(t, e, l, a, n, u, i, m, x, T, O, U) {
        return t = new Jx(t, e, l, i, x, T, O, U, m), e = 1, u === !0 && (e |= 24), u = xe(3, null, null, e), t.current = u, u.stateNode = t, e = No(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
            element     : a,
            isDehydrated: l,
            cache       : e
        }, zo(u), t
    }

    function Sm(t) {
        return t ? (t = ma, t) : ma
    }

    function jm(t, e, l, a, n, u) {
        n = Sm(n), a.context === null ? a.context = n : a.pendingContext = n, a = yl(e), a.payload = {element: l}, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = hl(t, a, e), l !== null && (re(l, t, e), xn(l, t, e))
    }

    function Tm(t, e) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var l = t.retryLane;
            t.retryLane = l !== 0 && l < e ? l : e
        }
    }

    function Zi(t, e) {
        Tm(t, e), (t = t.alternate) && Tm(t, e)
    }

    function Nm(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = Bl(t, 67108864);
            e !== null && re(e, t, 67108864), Zi(t, 67108864)
        }
    }

    function Em(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = Se();
            e = Bc(e);
            var l = Bl(t, e);
            l !== null && re(l, t, e), Zi(t, e)
        }
    }

    var ic = !0;

    function $x(t, e, l, a) {
        var n = _.T;
        _.T = null;
        var u = k.p;
        try {
            k.p = 2, Vi(t, e, l, a)
        } finally {
            k.p = u, _.T = n
        }
    }

    function Wx(t, e, l, a) {
        var n = _.T;
        _.T = null;
        var u = k.p;
        try {
            k.p = 8, Vi(t, e, l, a)
        } finally {
            k.p = u, _.T = n
        }
    }

    function Vi(t, e, l, a) {
        if (ic) {
            var n = Ji(a);
            if (n === null) Di(t, e, a, sc, l), Mm(t, a); else if (Ix(n, t, e, l, a)) a.stopPropagation(); else if (Mm(t, a), e & 4 && -1 < Fx.indexOf(t)) {
                for (; n !== null;) {
                    var u = la(n);
                    if (u !== null) switch (u.tag) {
                        case 3:
                            if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                var i = Ul(u.pendingLanes);
                                if (i !== 0) {
                                    var m = u;
                                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; i;) {
                                        var x = 1 << 31 - ye(i);
                                        m.entanglements[1] |= x, i &= ~x
                                    }
                                    Be(u), (xt & 6) === 0 && (Xu = de() + 500, wn(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            m = Bl(u, 2), m !== null && re(m, u, 2), Vu(), Zi(u, 2)
                    }
                    if (u = Ji(a), u === null && Di(t, e, a, sc, l), u === n) break;
                    n = u
                }
                n !== null && a.stopPropagation()
            } else Di(t, e, a, null, l)
        }
    }

    function Ji(t) {
        return t = $c(t), $i(t)
    }

    var sc = null;

    function $i(t) {
        if (sc = null, t = ea(t), t !== null) {
            var e = y(t);
            if (e === null) t = null; else {
                var l = e.tag;
                if (l === 13) {
                    if (t = b(e), t !== null) return t;
                    t = null
                } else if (l === 31) {
                    if (t = N(e), t !== null) return t;
                    t = null
                } else if (l === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else e !== t && (t = null)
            }
        }
        return sc = t, null
    }

    function Am(t) {
        switch (t) {
            case"beforetoggle":
            case"cancel":
            case"click":
            case"close":
            case"contextmenu":
            case"copy":
            case"cut":
            case"auxclick":
            case"dblclick":
            case"dragend":
            case"dragstart":
            case"drop":
            case"focusin":
            case"focusout":
            case"input":
            case"invalid":
            case"keydown":
            case"keypress":
            case"keyup":
            case"mousedown":
            case"mouseup":
            case"paste":
            case"pause":
            case"play":
            case"pointercancel":
            case"pointerdown":
            case"pointerup":
            case"ratechange":
            case"reset":
            case"resize":
            case"seeked":
            case"submit":
            case"toggle":
            case"touchcancel":
            case"touchend":
            case"touchstart":
            case"volumechange":
            case"change":
            case"selectionchange":
            case"textInput":
            case"compositionstart":
            case"compositionend":
            case"compositionupdate":
            case"beforeblur":
            case"afterblur":
            case"beforeinput":
            case"blur":
            case"fullscreenchange":
            case"focus":
            case"hashchange":
            case"popstate":
            case"select":
            case"selectstart":
                return 2;
            case"drag":
            case"dragenter":
            case"dragexit":
            case"dragleave":
            case"dragover":
            case"mousemove":
            case"mouseout":
            case"mouseover":
            case"pointermove":
            case"pointerout":
            case"pointerover":
            case"scroll":
            case"touchmove":
            case"wheel":
            case"mouseenter":
            case"mouseleave":
            case"pointerenter":
            case"pointerleave":
                return 8;
            case"message":
                switch (Hy()) {
                    case Ds:
                        return 2;
                    case Cs:
                        return 8;
                    case In:
                    case qy:
                        return 32;
                    case Us:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }

    var Wi = !1, Al = null, Ml = null, zl = null, Ln = new Map, Bn = new Map, _l = [],
        Fx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Mm(t, e) {
        switch (t) {
            case"focusin":
            case"focusout":
                Al = null;
                break;
            case"dragenter":
            case"dragleave":
                Ml = null;
                break;
            case"mouseover":
            case"mouseout":
                zl = null;
                break;
            case"pointerover":
            case"pointerout":
                Ln.delete(e.pointerId);
                break;
            case"gotpointercapture":
            case"lostpointercapture":
                Bn.delete(e.pointerId)
        }
    }

    function Kn(t, e, l, a, n, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn       : e,
            domEventName    : l,
            eventSystemFlags: a,
            nativeEvent     : u,
            targetContainers: [n]
        }, e !== null && (e = la(e), e !== null && Nm(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t)
    }

    function Ix(t, e, l, a, n) {
        switch (e) {
            case"focusin":
                return Al = Kn(Al, t, e, l, a, n), !0;
            case"dragenter":
                return Ml = Kn(Ml, t, e, l, a, n), !0;
            case"mouseover":
                return zl = Kn(zl, t, e, l, a, n), !0;
            case"pointerover":
                var u = n.pointerId;
                return Ln.set(u, Kn(Ln.get(u) || null, t, e, l, a, n)), !0;
            case"gotpointercapture":
                return u = n.pointerId, Bn.set(u, Kn(Bn.get(u) || null, t, e, l, a, n)), !0
        }
        return !1
    }

    function zm(t) {
        var e = ea(t.target);
        if (e !== null) {
            var l = y(e);
            if (l !== null) {
                if (e = l.tag, e === 13) {
                    if (e = b(l), e !== null) {
                        t.blockedOn = e, Ks(t.priority, function () {
                            Em(l)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = N(l), e !== null) {
                        t.blockedOn = e, Ks(t.priority, function () {
                            Em(l)
                        });
                        return
                    }
                } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }

    function rc(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length;) {
            var l = Ji(t.nativeEvent);
            if (l === null) {
                l = t.nativeEvent;
                var a = new l.constructor(l.type, l);
                Jc = a, l.target.dispatchEvent(a), Jc = null
            } else return e = la(l), e !== null && Nm(e), t.blockedOn = l, !1;
            e.shift()
        }
        return !0
    }

    function _m(t, e, l) {
        rc(t) && l.delete(e)
    }

    function Px() {
        Wi = !1, Al !== null && rc(Al) && (Al = null), Ml !== null && rc(Ml) && (Ml = null), zl !== null && rc(zl) && (zl = null), Ln.forEach(_m), Bn.forEach(_m)
    }

    function fc(t, e) {
        t.blockedOn === e && (t.blockedOn = null, Wi || (Wi = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Px)))
    }

    var dc = null;

    function Om(t) {
        dc !== t && (dc = t, c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
            dc === t && (dc = null);
            for (var e = 0; e < t.length; e += 3) {
                var l = t[e], a = t[e + 1], n = t[e + 2];
                if (typeof a != "function") {
                    if ($i(a || l) === null) continue;
                    break
                }
                var u = la(l);
                u !== null && (t.splice(e, 3), e -= 3, Jo(u, {pending: !0, data: n, method: l.method, action: a}, a, n))
            }
        }))
    }

    function qa(t) {
        function e(x) {
            return fc(x, t)
        }

        Al !== null && fc(Al, t), Ml !== null && fc(Ml, t), zl !== null && fc(zl, t), Ln.forEach(e), Bn.forEach(e);
        for (var l = 0; l < _l.length; l++) {
            var a = _l[l];
            a.blockedOn === t && (a.blockedOn = null)
        }
        for (; 0 < _l.length && (l = _l[0], l.blockedOn === null);) zm(l), l.blockedOn === null && _l.shift();
        if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
            var n = l[a], u = l[a + 1], i = n[ne] || null;
            if (typeof u == "function") i || Om(l); else if (i) {
                var m = null;
                if (u && u.hasAttribute("formAction")) {
                    if (n = u, i = u[ne] || null) m = i.formAction; else if ($i(n) !== null) continue
                } else m = i.action;
                typeof m == "function" ? l[a + 1] = m : (l.splice(a, 3), a -= 3), Om(l)
            }
        }
    }

    function km() {
        function t(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler      : function () {
                    return new Promise(function (i) {
                        return n = i
                    })
                }, focusReset: "manual", scroll: "manual"
            })
        }

        function e() {
            n !== null && (n(), n = null), a || setTimeout(l, 20)
        }

        function l() {
            if (!a && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state  : u.getState(),
                    info   : "react-transition",
                    history: "replace"
                })
            }
        }

        if (typeof navigation == "object") {
            var a = !1, n = null;
            return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function () {
                a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null)
            }
        }
    }

    function Fi(t) {
        this._internalRoot = t
    }

    mc.prototype.render = Fi.prototype.render = function (t) {
        var e = this._internalRoot;
        if (e === null) throw Error(s(409));
        var l = e.current, a = Se();
        jm(l, a, t, e, null, null)
    }, mc.prototype.unmount = Fi.prototype.unmount = function () {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            jm(t.current, 2, null, t, null, null), Vu(), e[ta] = null
        }
    };

    function mc(t) {
        this._internalRoot = t
    }

    mc.prototype.unstable_scheduleHydration = function (t) {
        if (t) {
            var e = Bs();
            t = {blockedOn: null, target: t, priority: e};
            for (var l = 0; l < _l.length && e !== 0 && e < _l[l].priority; l++) ;
            _l.splice(l, 0, t), l === 0 && zm(t)
        }
    };
    var wm = o.version;
    if (wm !== "19.2.7") throw Error(s(527, wm, "19.2.7"));
    k.findDOMNode = function (t) {
        var e = t._reactInternals;
        if (e === void 0) throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
        return t = g(e), t = t !== null ? A(t) : null, t = t === null ? null : t.stateNode, t
    };
    var tg = {
        bundleType          : 0,
        version             : "19.2.7",
        rendererPackageName : "react-dom",
        currentDispatcherRef: _,
        reconcilerVersion   : "19.2.7"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var yc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!yc.isDisabled && yc.supportsFiber) try {
            $a = yc.inject(tg), me = yc
        } catch {
        }
    }
    return Gn.createRoot = function (t, e) {
        if (!d(t)) throw Error(s(299));
        var l = !1, a = "", n = Lf, u = Bf, i = Kf;
        return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = bm(t, 1, !1, null, null, l, a, null, n, u, i, km), t[ta] = e.current, wi(t), new Fi(e)
    }, Gn.hydrateRoot = function (t, e, l) {
        if (!d(t)) throw Error(s(299));
        var a = !1, n = "", u = Lf, i = Bf, m = Kf, x = null;
        return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (x = l.formState)), e = bm(t, 1, !0, e, l ?? null, a, n, x, u, i, m, km), e.context = Sm(null), l = e.current, a = Se(), a = Bc(a), n = yl(a), n.callback = null, hl(l, n, a), l = a, e.current.lanes = l, Fa(e, l), Be(e), t[ta] = e.current, wi(t), new mc(e)
    }, Gn.version = "19.2.7", Gn
}

var Ym;

function fg() {
    if (Ym) return ts.exports;
    Ym = 1;

    function c() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
        } catch (o) {
            console.error(o)
        }
    }

    return c(), ts.exports = rg(), ts.exports
}

var dg = fg();
const Gm = c => {
    let o;
    const f = new Set, s = (g, A) => {
              const z = typeof g == "function" ? g(o) : g;
              if (!Object.is(z, o)) {
                  const D = o;
                  o = A ?? (typeof z != "object" || z === null) ? z : Object.assign({}, o, z), f.forEach(H => H(o, D))
              }
          }, d = () => o,
          N = {setState: s, getState: d, getInitialState: () => S, subscribe: g => (f.add(g), () => f.delete(g))},
          S = o = c(s, d, N);
    return N
}, mg    = (c => c ? Gm(c) : Gm), yg = c => c;

function hg(c, o = yg) {
    const f = hc.useSyncExternalStore(c.subscribe, hc.useCallback(() => o(c.getState()), [c, o]), hc.useCallback(() => o(c.getInitialState()), [c, o]));
    return hc.useDebugValue(f), f
}

const Qm = c => {
    const o = mg(c), f = s => hg(o, s);
    return Object.assign(f, o), f
}, bs    = (c => c ? Qm(c) : Qm);

function xg(c, o) {
    let f;
    try {
        f = c()
    } catch {
        return
    }
    return {
        getItem   : d => {
            var y;
            const b = S => S === null ? null : JSON.parse(S, void 0), N = (y = f.getItem(d)) != null ? y : null;
            return N instanceof Promise ? N.then(b) : b(N)
        }, setItem: (d, y) => f.setItem(d, JSON.stringify(y, void 0)), removeItem: d => f.removeItem(d)
    }
}

const rs = c => o => {
    try {
        const f = c(o);
        return f instanceof Promise ? f : {
            then(s) {
                return rs(s)(f)
            }, catch(s) {
                return this
            }
        }
    } catch (f) {
        return {
            then(s) {
                return this
            }, catch(s) {
                return rs(s)(f)
            }
        }
    }
}, gg    = (c, o) => (f, s, d) => {
    let y = {
        storage   : xg(() => window.localStorage),
        partialize: L => L,
        version   : 0,
        merge     : (L, I) => ({...I, ...L}), ...o
    }, b  = !1, N = 0;
    const S = new Set, g = new Set;
    let A = y.storage;
    if (!A) return c((...L) => {
        console.warn(`[zustand persist middleware] Unable to update item '${y.name}', the given storage is currently unavailable.`), f(...L)
    }, s, d);
    const z = () => {
        const L = y.partialize({...s()});
        return A.setItem(y.name, {state: L, version: y.version})
    }, D    = d.setState;
    d.setState = (L, I) => (D(L, I), z());
    const H = c((...L) => (f(...L), z()), s, d);
    d.getInitialState = () => H;
    let R;
    const q = () => {
        var L, I;
        if (!A) return;
        const W = ++N;
        b = !1, S.forEach(B => {
            var ct;
            return B((ct = s()) != null ? ct : H)
        });
        const ut = ((I = y.onRehydrateStorage) == null ? void 0 : I.call(y, (L = s()) != null ? L : H)) || void 0;
        return rs(A.getItem.bind(A))(y.name).then(B => {
            if (B) if (typeof B.version == "number" && B.version !== y.version) {
                if (y.migrate) {
                    const ct = y.migrate(B.state, B.version);
                    return ct instanceof Promise ? ct.then(P => [!0, P]) : [!0, ct]
                }
                console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
            } else return [!1, B.state];
            return [!1, void 0]
        }).then(B => {
            var ct;
            if (W !== N) return;
            const [P, X] = B;
            if (R = y.merge(X, (ct = s()) != null ? ct : H), f(R, !0), P) return z()
        }).then(() => {
            W === N && (ut == null || ut(s(), void 0), R = s(), b = !0, g.forEach(B => B(R)))
        }).catch(B => {
            W === N && (ut == null || ut(void 0, B))
        })
    };
    return d.persist = {
        setOptions       : L => {
            y = {...y, ...L}, L.storage && (A = L.storage)
        },
        clearStorage     : () => {
            A == null || A.removeItem(y.name)
        },
        getOptions       : () => y,
        rehydrate        : () => q(),
        hasHydrated      : () => b,
        onHydrate        : L => (S.add(L), () => {
            S.delete(L)
        }),
        onFinishHydration: L => (g.add(L), () => {
            g.delete(L)
        })
    }, y.skipHydration || q(), R || H
}, ly    = gg;

function ay(c) {
    if (typeof window > "u") return null;
    const o = new URLSearchParams(window.location.search).get(c);
    return o === "ko" || o === "en" ? o : null
}

const ns = ay("ui"), us = ay("target"), _t = bs()(ly(c => ({
    uiLang       : ns ?? "ko",
    targetLang   : us ?? "ko",
    keyLayout    : "auto",
    setUiLang    : o => c({uiLang: o}),
    setTargetLang: o => c({targetLang: o}),
    setKeyLayout : o => c({keyLayout: o})
}), {
    name : "ktype-settings:v2",
    merge: (c, o) => ({...o, ...c ?? {}, ...ns ? {uiLang: ns} : {}, ...us ? {targetLang: us} : {}})
}));

function Ya(c, o) {
    return c === "auto" ? o ? "cheonjiin" : "qwerty" : c
}

const Tc = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"],
      Ga = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"],
      Qa = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"],
      Ss = 44032, vg = 55203;

function js(c) {
    if (c.length === 0) return !1;
    const o = c.codePointAt(0);
    return o !== void 0 && o >= Ss && o <= vg
}

function fs(c, o, f = 0) {
    return String.fromCharCode(Ss + c * 588 + o * 28 + f)
}

function Ts(c) {
    if (!js(c)) return null;
    const o = c.charCodeAt(0) - Ss;
    return {choIdx: Math.floor(o / 588), jungIdx: Math.floor(o % 588 / 28), jongIdx: o % 28}
}

const ny = {committed: "", composing: null}, kl = {};
Tc.forEach((c, o) => kl[c] = o);
const Pl = {};
Ga.forEach((c, o) => Pl[c] = o);
const La = {};
Qa.forEach((c, o) => {
    c && (La[c] = o)
});
const pg = {ㄱㅅ: "ㄳ", ㄴㅈ: "ㄵ", ㄴㅎ: "ㄶ", ㄹㄱ: "ㄺ", ㄹㅁ: "ㄻ", ㄹㅂ: "ㄼ", ㄹㅅ: "ㄽ", ㄹㅌ: "ㄾ", ㄹㅍ: "ㄿ", ㄹㅎ: "ㅀ", ㅂㅅ: "ㅄ"}, Ns = {
          ㄳ: ["ㄱ", "ㅅ"],
          ㄵ: ["ㄴ", "ㅈ"],
          ㄶ: ["ㄴ", "ㅎ"],
          ㄺ: ["ㄹ", "ㄱ"],
          ㄻ: ["ㄹ", "ㅁ"],
          ㄼ: ["ㄹ", "ㅂ"],
          ㄽ: ["ㄹ", "ㅅ"],
          ㄾ: ["ㄹ", "ㅌ"],
          ㄿ: ["ㄹ", "ㅍ"],
          ㅀ: ["ㄹ", "ㅎ"],
          ㅄ: ["ㅂ", "ㅅ"]
      }, bg = {ㅗㅏ: "ㅘ", ㅗㅐ: "ㅙ", ㅗㅣ: "ㅚ", ㅜㅓ: "ㅝ", ㅜㅔ: "ㅞ", ㅜㅣ: "ㅟ", ㅡㅣ: "ㅢ"},
      uy = {ㅘ: ["ㅗ", "ㅏ"], ㅙ: ["ㅗ", "ㅐ"], ㅚ: ["ㅗ", "ㅣ"], ㅝ: ["ㅜ", "ㅓ"], ㅞ: ["ㅜ", "ㅔ"], ㅟ: ["ㅜ", "ㅣ"], ㅢ: ["ㅡ", "ㅣ"]},
      Sg = c => c in kl, jg = c => c in Pl;

function Xa(c) {
    return c ? c.cho >= 0 && c.jung >= 0 ? fs(c.cho, c.jung, c.jong) : c.cho >= 0 ? Tc[c.cho] : c.jung >= 0 ? Ga[c.jung] : "" : ""
}

function Tg(c) {
    return c.committed + Xa(c.composing)
}

function Ng(c) {
    return c ? {
        cho : c.cho >= 0 ? Tc[c.cho] : "",
        jung: c.jung >= 0 ? Ga[c.jung] : "",
        jong: c.jong > 0 ? Qa[c.jong] : ""
    } : {cho: "", jung: "", jong: ""}
}

const Eg = c => c.cho < 0 && c.jung < 0 && c.jong === 0;

function Ag(c) {
    return c.composing ? {committed: c.committed + Xa(c.composing), composing: null} : c
}

function cy(c, o) {
    return jg(o) ? Mg(c, o) : Sg(o) ? zg(c, o) : ds(c, o)
}

function Mg(c, o) {
    const f = Pl[o], s = c.composing;
    if (!s || s.cho < 0 && s.jung < 0) return {committed: c.committed, composing: {cho: -1, jung: f, jong: 0}};
    if (s.cho >= 0 && s.jung < 0) return {committed: c.committed, composing: {...s, jung: f}};
    if (s.jong > 0) {
        const b = Qa[s.jong], N = Ns[b];
        if (N) {
            const [g, A] = N;
            return {committed: c.committed + fs(s.cho, s.jung, La[g]), composing: {cho: kl[A], jung: f, jong: 0}}
        }
        return {committed: c.committed + fs(s.cho, s.jung, 0), composing: {cho: kl[b], jung: f, jong: 0}}
    }
    const d = bg[Ga[s.jung] + o];
    return d ? {committed: c.committed, composing: {...s, jung: Pl[d]}} : {
        committed: c.committed + Xa(s),
        composing: {cho: -1, jung: f, jong: 0}
    }
}

function zg(c, o) {
    const f = c.composing,
          s = () => ({committed: c.committed + (f ? Xa(f) : ""), composing: {cho: kl[o], jung: -1, jong: 0}});
    if (!f || Eg(f)) return {committed: c.committed, composing: {cho: kl[o], jung: -1, jong: 0}};
    if (f.cho >= 0 && f.jung < 0) return s();
    if (f.cho >= 0 && f.jung >= 0 && f.jong === 0) return o in La ? {
        committed: c.committed,
        composing: {...f, jong: La[o]}
    } : s();
    if (f.cho < 0 && f.jung >= 0) return s();
    const d = pg[Qa[f.jong] + o];
    return d ? {committed: c.committed, composing: {...f, jong: La[d]}} : s()
}

function ds(c, o) {
    return {committed: Ag(c).committed + o, composing: null}
}

function Xm(c) {
    if (c.jong > 0) {
        const o = Ns[Qa[c.jong]];
        return {...c, jong: o ? La[o[0]] : 0}
    }
    if (c.jung >= 0) {
        const o = uy[Ga[c.jung]];
        return {...c, jung: o ? Pl[o[0]] : -1}
    }
    return null
}

function _g(c) {
    const o = Array.from(c), f = o[o.length - 1];
    if (f === void 0) return {committed: c, composing: null};
    const s = o.slice(0, -1).join("");
    if (js(f)) {
        const d = Ts(f);
        return {committed: s, composing: {cho: d.choIdx, jung: d.jungIdx, jong: d.jongIdx}}
    }
    return f in kl ? {committed: s, composing: {cho: kl[f], jung: -1, jong: 0}} : f in Pl ? {
        committed: s,
        composing: {
            cho : -1,
            jung: Pl[f],
            jong: 0
        }
    } : {committed: c, composing: null}
}

function Og(c) {
    if (c.composing) {
        const d = Xm(c.composing);
        return d ? {committed: c.committed, composing: d} : _g(c.committed)
    }
    if (c.committed.length === 0) return c;
    const o = Array.from(c.committed), f = o[o.length - 1], s = o.slice(0, -1).join("");
    if (js(f)) {
        const d = Ts(f), y = Xm({cho: d.choIdx, jung: d.jungIdx, jong: d.jongIdx});
        return {committed: s, composing: y}
    }
    return {committed: s, composing: null}
}

function Ba(c) {
    const o = [];
    for (const f of Array.from(c)) {
        const s = Ts(f);
        if (!s) {
            o.push(f);
            continue
        }
        o.push(Tc[s.choIdx]);
        const d = Ga[s.jungIdx], y = uy[d];
        if (y ? o.push(y[0], y[1]) : o.push(d), s.jongIdx > 0) {
            const b = Qa[s.jongIdx], N = Ns[b];
            N ? o.push(N[0], N[1]) : o.push(b)
        }
    }
    return o
}

function oy(c, o) {
    const s = Array.from(o.committed).length, d = Array.from(c);
    if (s >= d.length) return null;
    const y = Ba(d[s]), b = Xa(o.composing), N = b ? Ba(b).length : 0;
    return y[N] ?? null
}

const pc = {
    KeyQ: {normal: "ㅂ", shift: "ㅃ"},
    KeyW: {normal: "ㅈ", shift: "ㅉ"},
    KeyE: {normal: "ㄷ", shift: "ㄸ"},
    KeyR: {normal: "ㄱ", shift: "ㄲ"},
    KeyT: {normal: "ㅅ", shift: "ㅆ"},
    KeyY: {normal: "ㅛ"},
    KeyU: {normal: "ㅕ"},
    KeyI: {normal: "ㅑ"},
    KeyO: {normal: "ㅐ", shift: "ㅒ"},
    KeyP: {normal: "ㅔ", shift: "ㅖ"},
    KeyA: {normal: "ㅁ"},
    KeyS: {normal: "ㄴ"},
    KeyD: {normal: "ㅇ"},
    KeyF: {normal: "ㄹ"},
    KeyG: {normal: "ㅎ"},
    KeyH: {normal: "ㅗ"},
    KeyJ: {normal: "ㅓ"},
    KeyK: {normal: "ㅏ"},
    KeyL: {normal: "ㅣ"},
    KeyZ: {normal: "ㅋ"},
    KeyX: {normal: "ㅌ"},
    KeyC: {normal: "ㅊ"},
    KeyV: {normal: "ㅍ"},
    KeyB: {normal: "ㅠ"},
    KeyN: {normal: "ㅜ"},
    KeyM: {normal: "ㅡ"}
};

function iy(c, o) {
    const f = pc[c];
    return f ? o && f.shift ? f.shift : f.normal : null
}

const sy = new Set(["ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ", "ㅒ", "ㅖ"]);

function ry(c) {
    for (const o of Object.values(pc)) if (o.shift === c) return o.normal;
    return null
}

const kg = [["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP"], ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL"], ["KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM"]],
      wg = ["ㅣ", "ㆍ", "ㅡ"], Es = {
          ㄱㅋ: ["ㄱ", "ㅋ", "ㄲ"],
          ㄴㄹ: ["ㄴ", "ㄹ"],
          ㄷㅌ: ["ㄷ", "ㅌ", "ㄸ"],
          ㅂㅍ: ["ㅂ", "ㅍ", "ㅃ"],
          ㅅㅎ: ["ㅅ", "ㅎ", "ㅆ"],
          ㅈㅊ: ["ㅈ", "ㅊ", "ㅉ"],
          ㅇㅁ: ["ㅇ", "ㅁ"]
      }, Dg = [["ㅣ", "ㆍ", "ㅡ"], ["ㄱㅋ", "ㄴㄹ", "ㄷㅌ"], ["ㅂㅍ", "ㅅㅎ", "ㅈㅊ"]], Zn = {
          ㅣ: "ㅣ",
          ㅡ: "ㅡ",
          ㅣㆍ: "ㅏ",
          ㅣㆍㆍ: "ㅑ",
          ㆍㅣ: "ㅓ",
          ㆍㆍㅣ: "ㅕ",
          ㆍㅡ: "ㅗ",
          ㆍㆍㅡ: "ㅛ",
          ㅡㆍ: "ㅜ",
          ㅡㆍㆍ: "ㅠ",
          ㅣㆍㅣ: "ㅐ",
          ㆍㅣㅣ: "ㅔ",
          ㆍㅡㅣ: "ㅚ",
          ㅡㅣ: "ㅢ",
          ㆍㅡㅣㆍ: "ㅘ",
          ㅡㆍㆍㅣ: "ㅝ",
          ㅣㆍㆍㅣ: "ㅒ",
          ㆍㆍㅣㅣ: "ㅖ",
          ㆍㅡㅣㆍㅣ: "ㅙ",
          ㅡㆍㆍㅣㅣ: "ㅞ",
          ㅡㆍㅣ: "ㅟ"
      }, Cg = (() => {
          const c = new Set;
          for (const o of Object.keys(Zn)) for (let f = 1; f <= o.length; f++) c.add(o.slice(0, f));
          return c
      })(), Ug = (() => {
          const c = {};
          for (const [o, f] of Object.entries(Zn)) {
              const s = c[f];
              (s === void 0 || o.length < s.length) && (c[f] = o)
          }
          return c
      })(), Hg = (() => {
          const c = {};
          for (const [o, f] of Object.entries(Es)) f.forEach((s, d) => {
              s in c || (c[s] = {key: o, taps: d + 1})
          });
          return c
      })();

function fy(c, o) {
    var s;
    const f = Ug[c];
    return f ? o !== "" && f.startsWith(o) ? f[o.length] ?? null : f[0] ?? null : ((s = Hg[c]) == null ? void 0 : s.key) ?? null
}

const qg = c => wg.includes(c), Rg = c => c in Es, Lg = {jamos: [], seq: "", key: null, cycle: 0, lastMs: 0};

function It(c) {
    return {lang: c, ime: ny, buf: "", tap: Lg}
}

function ee(c) {
    return c.lang === "ko" ? Tg(c.ime) : c.buf
}

const bc = /^[.,!?;:'"()[\]{}<>/\\@#%&*+=_~`^$|-]$/, dy = /^[a-zA-Z0-9]$/;

function my(c, o, f, s) {
    return f === "Backspace" || f === " " || o === "Space" || bc.test(f) ? !0 : c === "en" ? dy.test(f) : iy(o, s) !== null
}

function Bg(c) {
    let o = ny;
    for (const f of c) o = cy(o, f);
    return o
}

function cs(c, o) {
    return {jamos: [...c.jamos, o], seq: "", key: null, cycle: 0, lastMs: c.lastMs}
}

function Sc(c, o, f, s) {
    if (f === "Backspace") return c.lang === "ko" ? {
        ...c,
        ime: Og(c.ime),
        tap: {...c.tap, jamos: c.tap.jamos.slice(0, -1), seq: "", key: null, cycle: 0}
    } : {...c, buf: c.buf.slice(0, -1)};
    if (c.lang === "ko") {
        const d = iy(o, s);
        return d ? {...c, ime: cy(c.ime, d), tap: cs(c.tap, d)} : f === " " || o === "Space" ? {
            ...c,
            ime: ds(c.ime, " "),
            tap: cs(c.tap, " ")
        } : bc.test(f) ? {...c, ime: ds(c.ime, f), tap: cs(c.tap, f)} : c
    }
    return f === " " || o === "Space" ? {...c, buf: c.buf + " "} : dy.test(f) || bc.test(f) ? {...c, buf: c.buf + f} : c
}

function He(c, o, f) {
    if (c === "") return !1;
    if (f === "en") return o.toLowerCase().startsWith(c.toLowerCase());
    const s = Ba(c), d = Ba(o);
    return s.length > d.length ? !1 : s.every((y, b) => d[b] === y)
}

function Jn(c, o, f) {
    if (f === "en") return c.toLowerCase() === o.toLowerCase();
    const s = Ba(c), d = Ba(o);
    return s.length === d.length && s.every((y, b) => d[b] === y)
}

function yy(c, o) {
    const f = ee(c);
    if (f === "") return !1;
    if (c.lang === "ko" && (c.tap.seq !== "" || c.tap.key !== null)) {
        const d = Array.from(f).slice(0, -1).join("");
        return d === "" ? !1 : !He(d, o, c.lang)
    }
    return !He(f, o, c.lang)
}

function Kg(c, o, f) {
    const s = Array.from(c), d = Array.from(o);
    let y = 0;
    for (let b = 0; b < Math.min(s.length, d.length); b++) {
        const N = f === "en" ? s[b].toLowerCase() : s[b], S = f === "en" ? d[b].toLowerCase() : d[b];
        if (N === S) y++; else break
    }
    return y
}

function Yg(c) {
    return c.lang === "ko" ? Array.from(c.ime.committed).length : Array.from(c.buf).length
}

const Gg = 700;

function ms(c, o, f) {
    if (c.lang !== "ko") return c;
    const s = c.tap, d = (y, b) => ({...c, ime: Bg(y), tap: {jamos: y, seq: "", key: null, cycle: 0, lastMs: f, ...b}});
    if (o === "Backspace") return d(s.jamos.slice(0, -1), {});
    if (o === " ") return d([...s.jamos, " "], {});
    if (o === "Commit") return {...c, tap: {...s, seq: "", key: null, cycle: 0, lastMs: f}};
    if (qg(o)) {
        const y = s.seq + o;
        if (s.seq !== "" && Cg.has(y)) {
            const N = Zn[y];
            if (N === void 0) return {...c, tap: {...s, seq: y, key: null, cycle: 0, lastMs: f}};
            const g = Zn[s.seq] !== void 0 ? s.jamos.slice(0, -1) : s.jamos;
            return d([...g, N], {seq: y})
        }
        const b = Zn[o];
        return b === void 0 ? {...c, tap: {...s, seq: o, key: null, cycle: 0, lastMs: f}} : d([...s.jamos, b], {seq: o})
    }
    if (Rg(o)) {
        const y = Es[o];
        if (s.key === o && f - s.lastMs <= Gg) {
            const N = (s.cycle + 1) % y.length;
            return d([...s.jamos.slice(0, -1), y[N]], {key: o, cycle: N})
        }
        return d([...s.jamos, y[0]], {key: o, cycle: 0})
    }
    return bc.test(o) ? d([...s.jamos, o], {}) : c
}

const Qg = [{
    id      : "ko-pos-home",
    kind    : "position",
    order   : 1,
    title   : {ko: "기본자리", en: "Home row"},
    subtitle: {ko: "ㅁㄴㅇㄹ · ㅓㅏㅣ", en: "ㅁㄴㅇㄹ · ㅓㅏㅣ"},
    items   : [{text: "아"}, {text: "어"}, {text: "이"}, {text: "마"}, {text: "머"}, {text: "미"}, {text: "나"}, {text: "너"}, {text: "니"}, {text: "라"}, {text: "러"}, {text: "리"}, {
        text : "나라",
        roman: "nara",
        gloss: "country"
    }, {text: "머리", roman: "meori", gloss: "head"}]
}, {
    id      : "ko-pos-left-top",
    kind    : "position",
    order   : 2,
    title   : {ko: "왼손 윗자리", en: "Left upper row"},
    subtitle: {ko: "ㅂㅈㄷㄱ", en: "ㅂㅈㄷㄱ"},
    items   : [{text: "가"}, {text: "거"}, {text: "기"}, {text: "다"}, {text: "더"}, {text: "디"}, {text: "바"}, {text: "버"}, {text: "비"}, {text: "자"}, {text: "저"}, {text: "지"}, {
        text : "바다",
        roman: "bada",
        gloss: "sea"
    }, {text: "가지", roman: "gaji", gloss: "eggplant"}]
}, {
    id      : "ko-pos-left-bottom",
    kind    : "position",
    order   : 3,
    title   : {ko: "왼손 아랫자리", en: "Left lower row"},
    subtitle: {ko: "ㅋㅌㅊㅍ", en: "ㅋㅌㅊㅍ"},
    items   : [{text: "카"}, {text: "커"}, {text: "키"}, {text: "타"}, {text: "터"}, {text: "티"}, {text: "차"}, {text: "처"}, {text: "치"}, {text: "파"}, {text: "퍼"}, {text: "피"}, {
        text : "치마",
        roman: "chima",
        gloss: "skirt"
    }, {text: "기차", roman: "gicha", gloss: "train"}]
}, {
    id      : "ko-pos-index",
    kind    : "position",
    order   : 4,
    title   : {ko: "검지자리", en: "Index & round vowels"},
    subtitle: {ko: "ㅅㅎ · ㅗㅜㅛㅠ", en: "ㅅㅎ · ㅗㅜㅛㅠ"},
    items   : [{text: "사"}, {text: "서"}, {text: "시"}, {text: "소"}, {text: "수"}, {text: "하"}, {text: "허"}, {text: "히"}, {text: "호"}, {text: "후"}, {text: "슈"}, {text: "휴"}, {
        text : "사자",
        roman: "saja",
        gloss: "lion"
    }, {text: "하마", roman: "hama", gloss: "hippo"}]
}, {
    id      : "ko-pos-right-top",
    kind    : "position",
    order   : 5,
    title   : {ko: "오른손 윗자리", en: "Right upper row"},
    subtitle: {ko: "ㅕㅑㅐㅔ", en: "ㅕㅑㅐㅔ"},
    items   : [{text: "야"}, {text: "여"}, {text: "얘"}, {text: "예"}, {text: "개"}, {text: "새"}, {text: "배"}, {text: "대"}, {text: "재"}, {text: "채"}, {text: "매"}, {text: "해"}, {
        text : "얘기",
        roman: "yaegi",
        gloss: "story"
    }, {text: "새해", roman: "saehae", gloss: "New Year"}]
}, {
    id      : "ko-pos-right-bottom",
    kind    : "position",
    order   : 6,
    title   : {ko: "오른손 아랫자리", en: "Right lower row"},
    subtitle: {ko: "ㅡ", en: "ㅡ"},
    items   : [{text: "그"}, {text: "느"}, {text: "드"}, {text: "르"}, {text: "므"}, {text: "브"}, {text: "스"}, {text: "즈"}, {text: "크"}, {text: "트"}, {text: "프"}, {text: "흐"}, {
        text : "그림",
        roman: "geurim",
        gloss: "picture"
    }, {text: "스키", roman: "seuki", gloss: "ski"}]
}, {
    id      : "ko-pos-batchim",
    kind    : "position",
    order   : 7,
    title   : {ko: "받침", en: "Final consonants"},
    subtitle: {ko: "홑받침", en: "single batchim"},
    items   : [{text: "강"}, {text: "산"}, {text: "말"}, {text: "밥"}, {text: "곰"}, {text: "손"}, {text: "발"}, {text: "문"}, {text: "길"}, {text: "방"}, {
        text : "사람",
        roman: "saram",
        gloss: "person"
    }, {text: "하늘", roman: "haneul", gloss: "sky"}, {text: "가족", roman: "gajok", gloss: "family"}, {
        text : "학교",
        roman: "hakgyo",
        gloss: "school"
    }]
}, {
    id      : "ko-pos-double",
    kind    : "position",
    order   : 8,
    title   : {ko: "겹모음·겹받침", en: "Compound vowels & clusters"},
    subtitle: {ko: "과 의 닭 값", en: "과 의 닭 값"},
    items   : [{text: "과"}, {text: "왜"}, {text: "외"}, {text: "워"}, {text: "의"}, {text: "값"}, {text: "닭"}, {text: "앉"}, {text: "몫"}, {text: "삶"}, {
        text : "과일",
        roman: "gwail",
        gloss: "fruit"
    }, {text: "의자", roman: "uija", gloss: "chair"}, {text: "읽다", roman: "ikda", gloss: "to read"}, {
        text : "괜찮아",
        roman: "gwaenchana",
        gloss: "it's okay"
    }]
}], hy   = [{
    id   : "ko-word-daily",
    kind : "word",
    order: 1,
    title: {ko: "생활 단어", en: "Everyday words"},
    items: [{text: "사과", roman: "sagwa", gloss: "apple"}, {text: "학교", roman: "hakgyo", gloss: "school"}, {
        text : "친구",
        roman: "chingu",
        gloss: "friend"
    }, {text: "가족", roman: "gajok", gloss: "family"}, {text: "사랑", roman: "sarang", gloss: "love"}, {
        text : "시간",
        roman: "sigan",
        gloss: "time"
    }, {text: "사람", roman: "saram", gloss: "person"}, {text: "이름", roman: "ireum", gloss: "name"}, {
        text : "선물",
        roman: "seonmul",
        gloss: "gift"
    }, {text: "여행", roman: "yeohaeng", gloss: "travel"}]
}, {
    id   : "ko-word-nature",
    kind : "word",
    order: 2,
    title: {ko: "자연 · 사물", en: "Nature & objects"},
    items: [{text: "하늘", roman: "haneul", gloss: "sky"}, {text: "바다", roman: "bada", gloss: "sea"}, {
        text : "나무",
        roman: "namu",
        gloss: "tree"
    }, {text: "꽃", roman: "kkot", gloss: "flower"}, {text: "구름", roman: "gureum", gloss: "cloud"}, {
        text : "바람",
        roman: "baram",
        gloss: "wind"
    }, {text: "별", roman: "byeol", gloss: "star"}, {text: "달", roman: "dal", gloss: "moon"}, {
        text : "산",
        roman: "san",
        gloss: "mountain"
    }, {text: "강", roman: "gang", gloss: "river"}]
}, {
    id   : "ko-word-food",
    kind : "word",
    order: 3,
    title: {ko: "음식", en: "Food"},
    items: [{text: "김치", roman: "kimchi", gloss: "kimchi"}, {
        text : "라면",
        roman: "ramyeon",
        gloss: "ramen"
    }, {text: "비빔밥", roman: "bibimbap", gloss: "bibimbap"}, {text: "커피", roman: "keopi", gloss: "coffee"}, {
        text : "우유",
        roman: "uyu",
        gloss: "milk"
    }, {text: "과일", roman: "gwail", gloss: "fruit"}, {text: "딸기", roman: "ttalgi", gloss: "strawberry"}, {
        text : "수박",
        roman: "subak",
        gloss: "watermelon"
    }, {text: "당근", roman: "danggeun", gloss: "carrot"}, {text: "감자", roman: "gamja", gloss: "potato"}]
}, {
    id   : "ko-word-place",
    kind : "word",
    order: 4,
    title: {ko: "장소 · 이동", en: "Places & transport"},
    items: [{text: "집", roman: "jip", gloss: "house"}, {text: "병원", roman: "byeongwon", gloss: "hospital"}, {
        text : "은행",
        roman: "eunhaeng",
        gloss: "bank"
    }, {text: "시장", roman: "sijang", gloss: "market"}, {text: "공원", roman: "gongwon", gloss: "park"}, {
        text : "학교",
        roman: "hakgyo",
        gloss: "school"
    }, {text: "지하철", roman: "jihacheol", gloss: "subway"}, {text: "버스", roman: "beoseu", gloss: "bus"}, {
        text : "택시",
        roman: "taeksi",
        gloss: "taxi"
    }, {text: "카페", roman: "kape", gloss: "cafe"}]
}, {
    id   : "ko-word-verb",
    kind : "word",
    order: 5,
    title: {ko: "동사 · 형용사", en: "Verbs & adjectives"},
    items: [{text: "먹다", roman: "meokda", gloss: "to eat"}, {text: "가다", roman: "gada", gloss: "to go"}, {
        text : "보다",
        roman: "boda",
        gloss: "to see"
    }, {text: "읽다", roman: "ikda", gloss: "to read"}, {text: "좋다", roman: "jota", gloss: "to be good"}, {
        text : "예쁘다",
        roman: "yeppeuda",
        gloss: "to be pretty"
    }, {text: "행복", roman: "haengbok", gloss: "happiness"}, {text: "공부", roman: "gongbu", gloss: "study"}, {
        text : "운동",
        roman: "undong",
        gloss: "exercise"
    }, {text: "노래", roman: "norae", gloss: "song"}]
}, {
    id   : "ko-word-time",
    kind : "word",
    order: 6,
    title: {ko: "시간 · 계절", en: "Time & seasons"},
    items: [{text: "오늘", roman: "oneul", gloss: "today"}, {text: "내일", roman: "naeil", gloss: "tomorrow"}, {
        text : "어제",
        roman: "eoje",
        gloss: "yesterday"
    }, {text: "아침", roman: "achim", gloss: "morning"}, {text: "저녁", roman: "jeonyeok", gloss: "evening"}, {
        text : "봄",
        roman: "bom",
        gloss: "spring"
    }, {text: "여름", roman: "yeoreum", gloss: "summer"}, {text: "가을", roman: "gaeul", gloss: "autumn"}, {
        text : "겨울",
        roman: "gyeoul",
        gloss: "winter"
    }, {text: "시계", roman: "sigye", gloss: "clock"}]
}], Xg   = [{
    id   : "ko-short-greet",
    kind : "short",
    order: 1,
    title: {ko: "인사 표현", en: "Greetings"},
    items: [{text: "안녕하세요", roman: "annyeonghaseyo", gloss: "Hello"}, {
        text : "감사합니다",
        roman: "gamsahamnida",
        gloss: "Thank you"
    }, {text: "만나서 반가워요", roman: "mannaseo bangawoyo", gloss: "Nice to meet you"}, {
        text : "잘 부탁드립니다",
        roman: "jal butakdeurimnida",
        gloss: "I look forward to it"
    }, {text: "안녕히 가세요", roman: "annyeonghi gaseyo", gloss: "Goodbye"}, {
        text : "또 만나요",
        roman: "tto mannayo",
        gloss: "See you again"
    }]
}, {
    id   : "ko-short-daily",
    kind : "short",
    order: 2,
    title: {ko: "생활 표현", en: "Everyday phrases"},
    items: [{text: "맛있게 드세요", roman: "masitge deuseyo", gloss: "Enjoy your meal"}, {
        text : "좋은 하루 되세요",
        roman: "joeun haru doeseyo",
        gloss: "Have a nice day"
    }, {text: "수고하셨습니다", roman: "sugohasyeotseumnida", gloss: "Good job / Thanks for your work"}, {
        text : "잘 먹겠습니다",
        roman: "jal meokgetseumnida",
        gloss: "Thanks for the meal"
    }, {text: "조심히 들어가세요", roman: "josimhi deureogaseyo", gloss: "Get home safely"}, {
        text : "다음에 봐요",
        roman: "daeume bwayo",
        gloss: "See you next time"
    }]
}, {
    id   : "ko-short-question",
    kind : "short",
    order: 3,
    title: {ko: "질문 표현", en: "Questions"},
    items: [{text: "이거 얼마예요", roman: "igeo eolmayeyo", gloss: "How much is this?"}, {
        text : "화장실이 어디예요",
        roman: "hwajangsiri eodiyeyo",
        gloss: "Where is the restroom?"
    }, {text: "이름이 뭐예요", roman: "ireumi mwoyeyo", gloss: "What is your name?"}, {
        text : "지금 몇 시예요",
        roman: "jigeum myeot siyeyo",
        gloss: "What time is it now?"
    }, {text: "천천히 말해 주세요", roman: "cheoncheonhi malhae juseyo", gloss: "Please speak slowly"}, {
        text : "도와주세요",
        roman: "dowajuseyo",
        gloss: "Please help me"
    }]
}, {
    id   : "ko-short-feel",
    kind : "short",
    order: 4,
    title: {ko: "감정 표현", en: "Feelings"},
    items: [{text: "정말 기뻐요", roman: "jeongmal gippeoyo", gloss: "I'm really happy"}, {
        text : "조금 피곤해요",
        roman: "jogeum pigonhaeyo",
        gloss: "I'm a little tired"
    }, {text: "너무 재미있어요", roman: "neomu jaemiisseoyo", gloss: "It's so much fun"}, {
        text : "괜찮아요 걱정 마세요",
        roman: "gwaenchanayo geokjeong maseyo",
        gloss: "It's okay, don't worry"
    }, {text: "축하합니다", roman: "chukahamnida", gloss: "Congratulations"}, {
        text : "사랑합니다",
        roman: "saranghamnida",
        gloss: "I love you"
    }]
}], Zg   = [{
    id   : "ko-long-intro",
    kind : "long",
    order: 1,
    title: {ko: "자기소개 문단", en: "Self-introduction"},
    items: [{
        text : "안녕하세요. 저는 학생입니다. 만나서 반가워요.",
        roman: "annyeonghaseyo. jeoneun haksaengimnida. mannaseo bangawoyo.",
        gloss: "Hello. I am a student. Nice to meet you."
    }, {
        text : "제 취미는 독서와 운동입니다. 주말에는 산책을 자주 해요.",
        roman: "je chwimineun dokseowa undongimnida. jumareneun sanchaegeul jaju haeyo.",
        gloss: "My hobbies are reading and exercise. I often take walks on weekends."
    }, {
        text : "한국어 공부는 조금 어렵지만 정말 재미있어요.",
        roman: "hangugeo gongbuneun jogeum eoryeopjiman jeongmal jaemiisseoyo.",
        gloss: "Studying Korean is a bit hard, but really fun."
    }]
}, {
    id   : "ko-long-daily",
    kind : "long",
    order: 2,
    title: {ko: "일상 문단", en: "Daily life"},
    items: [{
        text : "오늘 날씨가 참 좋네요. 같이 산책할까요?",
        roman: "oneul nalssiga cham jonneyo. gachi sanchaekhalkkayo?",
        gloss: "The weather is nice today. Shall we take a walk?"
    }, {
        text : "아침에 일찍 일어나서 커피를 마셨어요. 기분이 상쾌했어요.",
        roman: "achime iljjik ireonaseo keopireul masyeosseoyo. gibuni sangkwaehaesseoyo.",
        gloss: "I woke up early and had coffee. I felt refreshed."
    }, {
        text : "친구와 함께 영화를 보고 맛있는 저녁을 먹었어요.",
        roman: "chinguwa hamkke yeonghwareul bogo masinneun jeonyeogeul meogeosseoyo.",
        gloss: "I watched a movie with a friend and had a delicious dinner."
    }]
}, {
    id   : "ko-long-proverb",
    kind : "long",
    order: 3,
    title: {ko: "속담", en: "Proverbs"},
    items: [{
        text : "가는 말이 고와야 오는 말이 곱다.",
        roman: "ganeun mari gowaya oneun mari gopda.",
        gloss: "Kind words invite kind words in return."
    }, {
        text : "티끌 모아 태산이 된다.",
        roman: "tikkeul moa taesani doenda.",
        gloss: "Many small things make a mountain."
    }, {
        text : "천 리 길도 한 걸음부터 시작된다.",
        roman: "cheon ri gildo han georeumbuteo sijakdoenda.",
        gloss: "A journey of a thousand li begins with one step."
    }, {
        text : "발 없는 말이 천 리 간다.",
        roman: "bal eomneun mari cheon ri ganda.",
        gloss: "Words travel a thousand li without legs."
    }]
}, {
    id   : "ko-long-quote",
    kind : "long",
    order: 4,
    title: {ko: "명언 · 격언", en: "Wise sayings"},
    items: [{
        text : "오늘 할 일을 내일로 미루지 마라.",
        roman: "oneul hal ireul naeillo miruji mara.",
        gloss: "Don't put off until tomorrow what you can do today."
    }, {
        text : "실패는 성공의 어머니이다.",
        roman: "silpaeneun seonggongui eomeoniida.",
        gloss: "Failure is the mother of success."
    }, {text: "노력은 배신하지 않는다.", roman: "noryeogeun baesinhaji anneunda.", gloss: "Effort never betrays you."}]
}], Vg   = [{
    id      : "en-pos-home",
    kind    : "position",
    order   : 1,
    title   : {ko: "홈로우", en: "Home row"},
    subtitle: {ko: "asdf jkl;", en: "asdf jkl;"},
    items   : [{text: "asdf"}, {text: "jkl;"}, {text: "fj"}, {text: "dk"}, {text: "sl"}, {text: "a;"}, {text: "as"}, {text: "ask"}, {text: "dad"}, {text: "sad"}, {text: "lad"}, {text: "fall"}, {text: "gas"}, {text: "hall"}, {text: "flask"}, {text: "salad"}]
}, {
    id      : "en-pos-top",
    kind    : "position",
    order   : 2,
    title   : {ko: "윗줄", en: "Top row"},
    subtitle: {ko: "qwerty uiop", en: "qwerty uiop"},
    items   : [{text: "we"}, {text: "you"}, {text: "try"}, {text: "type"}, {text: "quiet"}, {text: "power"}, {text: "write"}, {text: "paper"}, {text: "party"}, {text: "report"}, {text: "pretty"}, {text: "typewriter"}]
}, {
    id      : "en-pos-bottom",
    kind    : "position",
    order   : 3,
    title   : {ko: "아랫줄", en: "Bottom row"},
    subtitle: {ko: "zxcv bnm", en: "zxcv bnm"},
    items   : [{text: "van"}, {text: "cab"}, {text: "man"}, {text: "box"}, {text: "zoom"}, {text: "climb"}, {text: "number"}, {text: "voice"}, {text: "brave"}, {text: "vacation"}, {text: "maximum"}, {text: "November"}]
}, {
    id      : "en-pos-full",
    kind    : "position",
    order   : 4,
    title   : {ko: "전체 자판", en: "Full keyboard"},
    subtitle: {ko: "대문자·문장부호", en: "capitals & punctuation"},
    items   : [{text: "The"}, {text: "quick"}, {text: "brown"}, {text: "fox"}, {text: "jumps"}, {text: "Hello, World!"}, {text: "It's a nice day."}, {text: "Type it right."}, {text: "Keep going!"}, {text: "Well done."}]
}], Jg   = [{
    id   : "en-word-common",
    kind : "word",
    order: 1,
    title: {ko: "기본 단어", en: "Common words"},
    items: [{text: "apple", gloss: "사과"}, {text: "house", gloss: "집"}, {text: "water", gloss: "물"}, {
        text : "happy",
        gloss: "행복한"
    }, {text: "music", gloss: "음악"}, {text: "friend", gloss: "친구"}, {text: "school", gloss: "학교"}, {
        text : "family",
        gloss: "가족"
    }, {text: "morning", gloss: "아침"}, {text: "book", gloss: "책"}]
}, {
    id   : "en-word-nature",
    kind : "word",
    order: 2,
    title: {ko: "자연", en: "Nature"},
    items: [{text: "sun", gloss: "해"}, {text: "moon", gloss: "달"}, {text: "star", gloss: "별"}, {
        text : "tree",
        gloss: "나무"
    }, {text: "flower", gloss: "꽃"}, {text: "cloud", gloss: "구름"}, {text: "river", gloss: "강"}, {
        text : "ocean",
        gloss: "바다"
    }, {text: "mountain", gloss: "산"}, {text: "garden", gloss: "정원"}]
}, {
    id   : "en-word-food",
    kind : "word",
    order: 3,
    title: {ko: "음식", en: "Food"},
    items: [{text: "bread", gloss: "빵"}, {text: "milk", gloss: "우유"}, {text: "coffee", gloss: "커피"}, {
        text : "orange",
        gloss: "오렌지"
    }, {text: "banana", gloss: "바나나"}, {text: "cheese", gloss: "치즈"}, {text: "salad", gloss: "샐러드"}, {
        text : "noodle",
        gloss: "국수"
    }, {text: "cookie", gloss: "쿠키"}, {text: "dinner", gloss: "저녁 식사"}]
}, {
    id   : "en-word-verb",
    kind : "word",
    order: 4,
    title: {ko: "동사 · 형용사", en: "Verbs & adjectives"},
    items: [{text: "read", gloss: "읽다"}, {text: "write", gloss: "쓰다"}, {text: "learn", gloss: "배우다"}, {
        text : "smile",
        gloss: "미소짓다"
    }, {text: "dream", gloss: "꿈꾸다"}, {text: "travel", gloss: "여행하다"}, {text: "bright", gloss: "밝은"}, {
        text : "gentle",
        gloss: "부드러운"
    }, {text: "strong", gloss: "강한"}, {text: "wonderful", gloss: "멋진"}]
}], $g   = [{
    id   : "en-short-greet",
    kind : "short",
    order: 1,
    title: {ko: "인사 표현", en: "Greetings"},
    items: [{text: "Nice to meet you.", gloss: "만나서 반가워요."}, {
        text : "How are you today?",
        gloss: "오늘 어떠세요?"
    }, {text: "Have a great day!", gloss: "좋은 하루 되세요!"}, {
        text : "See you tomorrow.",
        gloss: "내일 봐요."
    }, {text: "Take care of yourself.", gloss: "몸조심하세요."}]
}, {
    id   : "en-short-daily",
    kind : "short",
    order: 2,
    title: {ko: "생활 표현", en: "Everyday phrases"},
    items: [{text: "Practice makes perfect.", gloss: "연습이 완벽을 만든다."}, {
        text : "Type fast and stay accurate.",
        gloss: "빠르고 정확하게 치세요."
    }, {text: "Keep your eyes on the screen.", gloss: "화면을 계속 보세요."}, {
        text : "You are doing great.",
        gloss: "정말 잘하고 있어요."
    }, {text: "Let's try one more time.", gloss: "한 번 더 해봐요."}]
}, {
    id   : "en-short-question",
    kind : "short",
    order: 3,
    title: {ko: "질문 표현", en: "Questions"},
    items: [{text: "What is your name?", gloss: "이름이 뭐예요?"}, {
        text : "Where are you from?",
        gloss: "어디에서 왔어요?"
    }, {text: "How much is this?", gloss: "이거 얼마예요?"}, {
        text : "Can you help me, please?",
        gloss: "도와주실 수 있나요?"
    }, {text: "What time is it now?", gloss: "지금 몇 시예요?"}]
}], Wg   = [{
    id   : "en-long-intro",
    kind : "long",
    order: 1,
    title: {ko: "자기소개 문단", en: "Self-introduction"},
    items: [{
        text : "Hello. My name is Alex. I am learning to type.",
        gloss: "안녕하세요. 제 이름은 Alex예요. 저는 타자를 배우고 있어요."
    }, {
        text : "I like reading books and taking long walks in the park.",
        gloss: "저는 책 읽기와 공원에서 긴 산책을 좋아해요."
    }, {text: "Learning a new skill takes time, but it is worth it.", gloss: "새 기술을 배우는 건 시간이 걸리지만 그만한 가치가 있어요."}]
}, {
    id   : "en-long-pangram",
    kind : "long",
    order: 2,
    title: {ko: "팬그램", en: "Pangrams"},
    items: [{
        text : "The quick brown fox jumps over the lazy dog.",
        gloss: "빠른 갈색 여우가 게으른 개를 뛰어넘는다."
    }, {
        text : "Pack my box with five dozen liquor jugs.",
        gloss: "모든 알파벳이 들어간 문장."
    }, {text: "How vexingly quick daft zebras jump!", gloss: "모든 알파벳이 들어간 문장."}]
}, {
    id   : "en-long-quote",
    kind : "long",
    order: 3,
    title: {ko: "명언", en: "Wise sayings"},
    items: [{
        text : "Practice is the best of all instructors.",
        gloss: "연습이 최고의 스승이다."
    }, {
        text : "Slow is smooth, and smooth is fast.",
        gloss: "느린 것이 부드럽고, 부드러운 것이 빠르다."
    }, {text: "Little by little, one walks far.", gloss: "조금씩 가다 보면 멀리 간다."}]
}], Fg   = ["position", "word", "short", "long"], xy = [...Qg, ...hy, ...Xg, ...Zg], gy = [...Vg, ...Jg, ...$g, ...Wg];

function $n(c) {
    return c === "en" ? gy : xy
}

function Zm(c) {
    return [...xy, ...gy].find(o => o.id === c)
}

const Ig = {
    position: {ko: "자리연습", en: "Key drills"},
    word    : {ko: "단어", en: "Words"},
    short   : {ko: "짧은글", en: "Short text"},
    long    : {ko: "긴글", en: "Long text"}
}, Pg    = {position: "⌨️", word: "🔤", short: "💬", long: "📖"}, ys = "quick", hs = 3, Ra = [{
    id    : "chick",
    emoji : "🐣",
    minCpm: 0,
    color : "#f59e0b",
    label : {ko: "병아리", en: "Chick"},
    note  : {ko: "자판이 아직 낯설어요. 자리연습부터!", en: "Still finding the keys. Try key drills!"}
}, {
    id    : "turtle",
    emoji : "🐢",
    minCpm: 100,
    color : "#10b981",
    label : {ko: "거북이", en: "Turtle"},
    note  : {ko: "느리지만 정확하게, 좋은 출발이에요.", en: "Slow and steady — a good start."}
}, {
    id    : "rabbit",
    emoji : "🐇",
    minCpm: 200,
    color : "#38bdf8",
    label : {ko: "토끼", en: "Rabbit"},
    note  : {ko: "성인 평균 구간이에요. 이제 정확도를 올려봐요.", en: "Average adult range. Now push accuracy."}
}, {
    id    : "owl",
    emoji : "🦉",
    minCpm: 300,
    color : "#3aabf7",
    label : {ko: "부엉이", en: "Owl"},
    note  : {ko: "사무직 평균을 넘었어요. 손이 자판을 외웠네요!", en: "Above office-worker average. Your hands know the keys!"}
}, {
    id    : "rocket",
    emoji : "🚀",
    minCpm: 400,
    color : "#a78bfa",
    label : {ko: "로켓", en: "Rocket"},
    note  : {ko: "자격증 합격권 속도. 친구한테 자랑할 만해요.", en: "Certification-level speed. Worth bragging about."}
}, {
    id    : "bolt",
    emoji : "⚡",
    minCpm: 500,
    color : "#fbbf24",
    label : {ko: "번개", en: "Lightning"},
    note  : {ko: "타자 괴물. 게임 모드에서 한계를 시험해요!", en: "Typing monster. Test your limit in the games!"}
}];

function Vn(c) {
    for (let o = Ra.length - 1; o >= 0; o -= 1) if (c >= Ra[o].minCpm) return Ra[o];
    return Ra[0]
}

function tv(c) {
    const o = Vn(c), f = Ra.findIndex(d => d.id === o.id), s = Ra[f + 1];
    return s ? {next: s, remaining: s.minCpm - c} : null
}

function ev(c) {
    return $n(c).filter(o => o.kind === "short").flatMap(o => o.items)
}

function lv(c, o, f = Math.random) {
    const s = [...ev(c)], d = [];
    for (; d.length < o && s.length > 0;) {
        const y = Math.floor(f() * s.length) % s.length;
        d.push(s[y]), s.splice(y, 1)
    }
    return d
}

function av(c, o = Math.random) {
    return {id: ys, kind: "short", order: 0, title: {ko: "스피드체크", en: "Speed check"}, items: lv(c, hs, o)}
}

function xs(c) {
    const o = Math.round(Math.min(100, Math.max(0, c)) / 10);
    return "🟩".repeat(o) + "🟥".repeat(10 - o)
}

function nv(c, o, f, s) {
    const d = Vn(o), y = c === "en" ? "⌨️ K-Type · English speed check" : "⌨️ 한글 타자 · 스피드체크",
          b = c === "en" ? `${d.emoji} ${d.label.en} · ${o} CPM` : `${d.emoji} ${d.label.ko} 등급 · ${o}타/분`,
          N = c === "en" ? `${xs(f)} ${f}% · combo ${s}` : `${xs(f)} 정확도 ${f}% · 콤보 ${s}`;
    return [y, b, N, "https://workmate.tools/ktype"].join(`
`)
}

const Ke = () => Date.now(), uv = 650, xc = c => ({
    itemIndex       : 0,
    typed           : It(c),
    startMs         : null,
    nowMs           : 0,
    keystrokes      : 0,
    correctKeys     : 0,
    errorKeys       : 0,
    combo           : 0,
    maxCombo        : 0,
    correctSyllables: 0,
    itemPrevCorrect : 0,
    itemDone        : !1,
    holdStartMs     : null,
    lastWrong       : null,
    lastHit         : null,
    hitSeq          : 0
}), Z    = bs((c, o) => ({
    phase           : "select", stageId: null, customStage: null, lang: "ko", ...xc("ko"), currentStage: () => {
        const {stageId: f, customStage: s} = o();
        return s && f === s.id ? s : f ? Zm(f) : void 0
    }, currentTarget: () => {
        var s;
        const f = o().currentStage();
        return f ? ((s = f.items[o().itemIndex]) == null ? void 0 : s.text) ?? "" : ""
    }, startStage   : (f, s) => {
        Zm(f) && c({phase: "playing", stageId: f, customStage: null, lang: s, ...xc(s)})
    }, startQuick   : f => {
        const s = av(f);
        c({phase: "playing", stageId: s.id, customStage: s, lang: f, ...xc(f)})
    }, backToSelect : () => c({phase: "select", stageId: null, customStage: null, ...xc(o().lang)}), tick: () => {
        o().phase === "playing" && o().startMs !== null && c({nowMs: Ke()})
    }, advanceItem  : () => {
        const f = o();
        if (f.phase !== "playing" || !f.itemDone) return;
        const s = f.currentStage();
        if (!s) return;
        const d = f.holdStartMs != null ? Ke() - f.holdStartMs : 0, y = f.startMs != null ? f.startMs + d : null,
              b = f.itemIndex + 1 >= s.items.length;
        c({
            startMs        : y,
            nowMs          : Ke(),
            phase          : b ? "done" : "playing",
            itemIndex      : b ? f.itemIndex : f.itemIndex + 1,
            typed          : It(f.lang),
            itemPrevCorrect: 0,
            itemDone       : !1,
            holdStartMs    : null
        })
    }, pressKey     : (f, s, d) => {
        let y = o();
        if (y.phase !== "playing" || !y.currentStage()) return;
        if (s === "Backspace") {
            if (y.itemDone) return;
            c({typed: Sc(y.typed, f, s, d)});
            return
        }
        if (y.itemDone && (o().advanceItem(), y = o(), y.phase !== "playing")) return;
        const b = Sc(y.typed, f, s, d);
        b !== y.typed && Vm(b)
    }, tapKey       : f => {
        let s = o();
        if (!(s.phase !== "playing" || !s.currentStage())) {
            if (f === "Backspace") {
                if (s.itemDone) return;
                c({typed: ms(s.typed, f, Ke())});
                return
            }
            s.itemDone && (o().advanceItem(), s = o(), s.phase !== "playing") || Vm(ms(s.typed, f, Ke()))
        }
    }
}));

function cv(c, o) {
    let f = c;
    for (let s = 0; s < 64; s += 1) {
        const d = f.lang === "ko" && (f.tap.seq !== "" || f.tap.key !== null);
        if (ee(f) === "" && !d || !d && !yy(f, o)) return f;
        f = Sc(f, "Backspace", "Backspace", !1)
    }
    return It(c.lang)
}

function Vm(c) {
    var W;
    const o = Z.setState, f = Z.getState(), s = f.currentStage();
    if (!s) return;
    const d = ((W = s.items[f.itemIndex]) == null ? void 0 : W.text) ?? "", y = f.lang, b = f.startMs ?? Ke(),
          N = ee(c), S = yy(c, d), g = f.hitSeq + 1, A = f.keystrokes + 1;
    if (S) {
        const ut = Array.from(N);
        o({
            typed     : cv(c, d),
            keystrokes: A,
            errorKeys : f.errorKeys + 1,
            combo     : 0,
            startMs   : b,
            nowMs     : Ke(),
            lastWrong : ut[ut.length - 1] ?? null,
            lastHit   : "error",
            hitSeq    : g
        });
        return
    }
    let {combo: z, maxCombo: D, itemPrevCorrect: H} = f;
    const R = f.correctKeys + 1;
    let q = !1;
    const L = Kg(N, d, y);
    if (L > H && (z += L - H, D = Math.max(D, z), H = L, q = !0), Jn(N, d, y)) {
        o({
            typed           : c,
            keystrokes      : A,
            correctKeys     : R,
            combo           : z,
            maxCombo        : D,
            itemPrevCorrect : H,
            correctSyllables: f.correctSyllables + Array.from(d).length,
            startMs         : b,
            nowMs           : Ke(),
            itemDone        : !0,
            holdStartMs     : Ke(),
            lastHit         : "complete",
            hitSeq          : g
        });
        return
    }
    const I = q ? "correct" : "key";
    o({
        typed          : c,
        keystrokes     : A,
        correctKeys    : R,
        combo          : z,
        maxCombo       : D,
        itemPrevCorrect: H,
        startMs        : b,
        nowMs          : Ke(),
        lastHit        : I,
        hitSeq         : g
    })
}

function As(c, o) {
    return o ? c.stars !== o.stars ? c.stars > o.stars : c.cpm > o.cpm : !0
}

const wl                     = bs()(ly((c, o) => ({
    best    : {}, record: (f, s) => {
        const d = o().best[f];
        return As(s, d) ? (c({best: {...o().best, [f]: s}}), !0) : !1
    }, clear: () => c({best: {}})
}), {name: "ktype:v1"})), ov = "(hover: none) and (pointer: coarse)";

function Za() {
    const [c, o] = J.useState(!1);
    return J.useEffect(() => {
        const f = window.matchMedia(ov), s = () => o(f.matches);
        return s(), f.addEventListener("change", s), () => f.removeEventListener("change", s)
    }, []), c
}

function Nc(c, o) {
    if (o <= 0) return {cpm: 0, wpm: 0};
    const f = o / 6e4, s = Math.round(c / f), d = Math.round(c / 5 / f);
    return {cpm: s, wpm: d}
}

function Ec(c, o) {
    const f = c + o;
    return f === 0 ? 100 : Math.round(c / f * 100)
}

function vy(c, o) {
    return c >= 97 && o >= 200 ? 3 : c >= 90 && o >= 120 ? 2 : 1
}

let Qn = null, gs = !0;

function py() {
    if (!gs) return null;
    if (!Qn) try {
        const c = window.AudioContext ?? window.webkitAudioContext;
        if (!c) return null;
        Qn = new c
    } catch {
        return null
    }
    return Qn.state === "suspended" && Qn.resume(), Qn
}

function Xn(c, o, f, s, d = 0) {
    const y = py();
    if (!y) return;
    const b = y.currentTime + d, N = y.createOscillator(), S = y.createGain();
    N.type = f, N.frequency.value = c, S.gain.setValueAtTime(1e-4, b), S.gain.exponentialRampToValueAtTime(s, b + .006), S.gain.exponentialRampToValueAtTime(1e-4, b + o), N.connect(S), S.connect(y.destination), N.start(b), N.stop(b + o + .02)
}

const Nt = {
    setEnabled(c) {
        gs = c
    }, isEnabled() {
        return gs
    }, unlock() {
        py()
    }, key(c) {
        Xn(200 + c % 5 * 12, .028, "square", .03)
    }, correct() {
        Xn(660, .09, "sine", .07)
    }, error() {
        Xn(150, .14, "sawtooth", .06)
    }, combo(c) {
        Xn(520 + Math.min(c, 14) * 36, .1, "triangle", .08)
    }, complete() {
        [523, 659, 784, 1047].forEach((c, o) => Xn(c, .2, "sine", .1, o * .09))
    }
};

function iv(c, o, f, s) {
    const d = "⭐".repeat(s) + "▪️".repeat(3 - s), y = f >= 95 ? "🟩" : f >= 85 ? "🟨" : "🟥";
    return ["⌨️ 한글 타자 · K-Type", `${c}  ${d}`, `${y} ${f}%  ·  ${o}타/분`, "https://workmate.tools/ktype"].join(`
`)
}

async function Va(c) {
    if (typeof navigator < "u" && navigator.share) try {
        return await navigator.share({text: c}), "shared"
    } catch {
    }
    try {
        return await navigator.clipboard.writeText(c), "copied"
    } catch {
        return "failed"
    }
}

function by(c, o) {
    const f = Z(H => H.hitSeq), s = Z(H => H.lastHit), d = Z(H => H.combo), y = Z(H => H.itemDone),
          b = Z(H => H.lastWrong), [N, S] = J.useState("idle"), [g, A] = J.useState(!1), [z, D] = J.useState(null);
    return J.useEffect(() => {
        if (!o || !y) return;
        const H = window.setTimeout(() => Z.getState().advanceItem(), uv);
        return () => window.clearTimeout(H)
    }, [o, y]), J.useEffect(() => {
        if (!o) return;
        const H = R => {
            R.isComposing || my(c, R.code, R.key, R.shiftKey) && (R.preventDefault(), Nt.unlock(), Z.getState().pressKey(R.code, R.key, R.shiftKey))
        };
        return window.addEventListener("keydown", H), () => window.removeEventListener("keydown", H)
    }, [c, o]), J.useEffect(() => {
        if (!o) return;
        const H = window.setInterval(() => Z.getState().tick(), 100);
        return () => window.clearInterval(H)
    }, [o]), J.useEffect(() => {
        if (f !== 0) {
            if (s === "complete") {
                Nt.complete();
                return
            }
            if (s === "error") {
                Nt.error();
                return
            }
            Nt.key(f), s === "correct" && Nt.correct()
        }
    }, [f]), J.useEffect(() => {
        if (f !== 0) {
            if (s === "error") {
                S("oops"), A(!0), D(b);
                const H = window.setTimeout(() => A(!1), 240), R = window.setTimeout(() => {
                    S("idle"), D(null)
                }, 700);
                return () => {
                    window.clearTimeout(H), window.clearTimeout(R)
                }
            }
            D(null), S(s === "complete" ? "celebrate" : d >= 3 ? "happy" : "idle")
        }
    }, [f]), {mood: N, shake: g, wrong: z}
}

function sv() {
    const [c, o] = J.useState(() => typeof document > "u" ? !0 : document.hasFocus());
    return J.useEffect(() => {
        const f = () => o(!0), s = () => o(!1);
        window.addEventListener("focus", f), window.addEventListener("blur", s);
        const d = window.setTimeout(() => o(document.hasFocus()), 50);
        return () => {
            window.removeEventListener("focus", f), window.removeEventListener("blur", s), window.clearTimeout(d)
        }
    }, []), c
}

function rv(c, o = 900) {
    const [f, s] = J.useState(0);
    return J.useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || c <= 0) {
            s(c);
            return
        }
        let y = 0;
        const b = performance.now(), N = S => {
            const g = Math.min(1, (S - b) / o), A = 1 - Math.pow(1 - g, 3);
            s(Math.round(c * A)), g < 1 && (y = requestAnimationFrame(N))
        };
        return y = requestAnimationFrame(N), () => cancelAnimationFrame(y)
    }, [c, o]), f
}

const fv = 28;

function Sy({target: c, typed: o, lang: f, done: s}) {
    const d = ee(o), y = s ? -1 : Yg(o), b = Array.from(c), N = Array.from(d), S = b.length <= fv,
          g = (z, D) => f === "en" ? z.toLowerCase() === D.toLowerCase() : z === D,
          A = (z, D) => s ? "correct" : D === y ? "cursor" : D < N.length ? g(N[D], z) ? "correct" : "wrong" : "pending";
    return r.jsx("div", {
        className   : `flex flex-wrap justify-center ${S ? "gap-1.5" : "gap-x-0.5 gap-y-2 text-3xl font-semibold tracking-wide sm:text-4xl"} ${s ? "ktype-done" : ""}`,
        "aria-label": c,
        children    : b.map((z, D) => {
            const H = A(z, D), R = H === "cursor" && N[D] ? N[D] : null;
            return S ? r.jsx(mv, {
                ch    : z,
                shown : H === "wrong" ? N[D] ?? z : R ?? z,
                status: H,
                ghost : R !== null
            }, D) : r.jsx(yv, {ch: z, status: H}, D)
        })
    })
}

const dv = {
    pending: {
        background: "var(--color-bg-elevated)",
        color     : "var(--color-text-muted)",
        border    : "2px solid var(--color-border-default)",
        boxShadow : "0 3px 0 0 #0b0d14"
    },
    cursor : {
        background: "var(--color-accent-bg)",
        color     : "var(--color-text-hero)",
        border    : "2px solid var(--color-accent-hover)",
        boxShadow : "0 3px 0 0 #0a3a5c, 0 0 18px -2px var(--color-accent)"
    },
    correct: {
        background: "var(--color-success-bg)",
        color     : "#d1fae5",
        border    : "2px solid var(--color-success)",
        boxShadow : "0 3px 0 0 #053b2d"
    },
    wrong  : {
        background    : "var(--color-danger-bg)",
        color         : "#fecaca",
        border        : "2px solid var(--color-danger)",
        boxShadow     : "0 3px 0 0 #3b0f18",
        textDecoration: "underline wavy"
    }
};

function mv({ch: c, shown: o, status: f, ghost: s}) {
    return c === " " ? r.jsx("span", {
        className    : "block w-3",
        "aria-hidden": !0
    }) : r.jsxs("span", {
        className: `relative flex h-12 min-w-12 items-center justify-center rounded-xl px-1.5 text-2xl font-black transition-colors duration-150 sm:h-14 sm:min-w-14 sm:text-3xl ${f === "cursor" ? "ktype-tile-cursor" : f === "correct" ? "ktype-tile-pop" : ""}`,
        style    : dv[f],
        children : [o, s && o !== c && r.jsx("span", {
            className: "absolute -top-2 right-0.5 rounded px-1 text-[10px] font-bold leading-4",
            style    : {background: "var(--color-accent)", color: "#fff"},
            children : c
        })]
    })
}

function yv({ch: c, status: o}) {
    const f = o === "cursor" ? "var(--color-accent-hover)" : o === "correct" ? "var(--color-success)" : o === "wrong" ? "var(--color-danger)" : "var(--color-text-muted)";
    return r.jsx("span", {
        className: `px-0.5 pb-1 transition-colors ${o === "cursor" ? "ktype-caret" : ""}`,
        style    : {
            color                  : f,
            textDecorationLine     : o === "pending" ? "none" : "underline",
            textDecorationStyle    : o === "wrong" ? "wavy" : "solid",
            textDecorationColor    : o === "cursor" ? "var(--color-accent)" : f,
            textDecorationThickness: o === "cursor" ? "3px" : "2px",
            textUnderlineOffset    : "6px",
            minWidth               : c === " " ? "0.4em" : void 0
        },
        children : c === " " ? " " : c
    })
}

const hv = {ko: {cho: "초성", jung: "중성", jong: "종성"}, en: {cho: "initial", jung: "medial", jong: "final"}};

function jy({ime: c, compact: o}) {
    const {cho: f, jung: s, jong: d} = Ng(c.composing), y = Xa(c.composing), b = y !== "", N = _t(A => A.uiLang),
          S = hv[N === "en" ? "en" : "ko"];
    if (o) {
        const A = ({label: z, ch: D}) => r.jsxs("span", {
            className: "flex items-baseline gap-1",
            children : [r.jsx("span", {
                className: "text-[10px]",
                style    : {color: "var(--color-text-muted)"},
                children : z
            }), r.jsx("span", {
                className: "w-5 text-center text-base font-bold",
                style    : {color: D ? "var(--color-accent-hover)" : "var(--color-border-strong)"},
                children : D || "·"
            })]
        });
        return r.jsxs("div", {
            className: "flex items-center justify-center gap-2 rounded-full px-3 py-1",
            style    : {
                background: "var(--color-bg-elevated)",
                border    : "1px solid var(--color-border-subtle)"
            },
            children : [r.jsx(A, {
                label: S.cho,
                ch   : f
            }), r.jsx("span", {style: {color: "var(--color-text-muted)"}, children: "+"}), r.jsx(A, {
                label: S.jung,
                ch   : s
            }), r.jsx("span", {style: {color: "var(--color-text-muted)"}, children: "+"}), r.jsx(A, {
                label: S.jong,
                ch   : d
            }), r.jsx("span", {
                style   : {color: "var(--color-text-muted)"},
                children: "="
            }), r.jsx("span", {
                className: "w-6 text-center text-lg font-black",
                style    : {color: b ? "var(--color-text-hero)" : "var(--color-border-strong)"},
                children : y || "·"
            })]
        })
    }
    const g = ({label: A, ch: z}) => {
        const D = z !== "";
        return r.jsxs("div", {
            className: "flex flex-col items-center gap-0.5",
            style    : {minWidth: 40},
            children : [r.jsx("span", {
                className: "text-xl font-medium leading-none",
                style    : {color: D ? "var(--color-accent-hover)" : "var(--color-border-strong)"},
                children : D ? z : "·"
            }), r.jsx("span", {className: "text-[10px]", style: {color: "var(--color-text-muted)"}, children: A})]
        })
    };
    return r.jsxs("div", {
        className: "flex flex-col items-center gap-3",
        children : [r.jsx("div", {
            className: "flex h-24 w-24 items-center justify-center rounded-2xl text-6xl font-bold transition-all",
            style    : {
                background       : "var(--color-bg-elevated)",
                color            : b ? "var(--color-text-hero)" : "var(--color-text-muted)",
                border           : `1px solid ${b ? "var(--color-accent)" : "var(--color-border-default)"}`,
                borderBottomWidth: b ? 4 : 1,
                boxShadow        : b ? "0 0 24px -8px var(--color-accent)" : "none"
            },
            children : y || "·"
        }), r.jsxs("div", {
            className: "flex items-center gap-1",
            children : [r.jsx(g, {label: S.cho, ch: f}), r.jsx("span", {
                className: "text-sm",
                style    : {color: "var(--color-text-muted)"},
                children : "+"
            }), r.jsx(g, {label: S.jung, ch: s}), r.jsx("span", {
                className: "text-sm",
                style    : {color: "var(--color-text-muted)"},
                children : "+"
            }), r.jsx(g, {label: S.jong, ch: d})]
        })]
    })
}

function os(c) {
    return c.replace("Key", "").toLowerCase()
}

const xv = [{code: "Comma", key: ","}, {code: "Period", key: "."}, {code: "Slash", key: "?"}], gv = {
    ko: {space: "스페이스", back: "지우기", shift: "Shift", hint: "화면 자판을 눌러도 되고, 키보드로 쳐도 됩니다"},
    en: {space: "space", back: "delete", shift: "Shift", hint: "Tap the on-screen keys, or type on your keyboard"}
};

function Ac(c) {
    const {lang: o, layout: f = "qwerty", onTap: s} = c;
    return o === "ko" && f === "cheonjiin" && s ? r.jsx(bv, {...c, onTap: s}) : r.jsx(vv, {...c})
}

function vv({lang: c, uiLang: o, next: f, onKey: s, compact: d, hideHint: y}) {
    const [b, N] = J.useState(!1), S = gv[o], g = d ? "h-9" : "h-11 sm:h-12", A = d ? "text-sm" : "text-base",
          z = R => {
              s(R), b && N(!1)
          }, D = R => {
              if (c === "ko") {
                  z({code: R, key: "", shift: b});
                  return
              }
              const q = os(R);
              z({code: R, key: b ? q.toUpperCase() : q, shift: b})
          }, H = R => {
              if (f === null) return !1;
              if (c === "ko") {
                  const q = pc[R];
                  return !!q && (q.normal === f || q.shift === f)
              }
              return os(R) === f.toLowerCase()
          };
    return r.jsxs("div", {
        className: "flex w-full flex-col items-center gap-1.5 select-none",
        children : [kg.map((R, q) => r.jsx("div", {
            className: "flex w-full justify-center gap-1 sm:gap-1.5",
            children : R.map(L => {
                const I = pc[L], W = H(L), ut = c === "ko" ? b && I.shift ? I.shift : I.normal : os(L);
                return r.jsxs("button", {
                    type         : "button",
                    "aria-label" : ut,
                    onPointerDown: B => {
                        B.preventDefault(), D(L)
                    },
                    className    : `flex ${g} min-w-0 flex-1 flex-col items-center justify-center rounded-md ${A} font-medium transition-colors active:scale-95`,
                    style        : {
                        maxWidth  : d ? 44 : 56,
                        background: W ? "var(--color-accent)" : "var(--color-bg-card)",
                        color     : W ? "#fff" : "var(--color-text-secondary)",
                        border    : `1px solid ${W ? "var(--color-accent-hover)" : "var(--color-border-subtle)"}`
                    },
                    children     : [r.jsx("span", {children: ut}), c === "ko" && I.shift && !d && r.jsx("span", {
                        className: "text-[9px]",
                        style    : {color: W ? "#e0e0ff" : "var(--color-text-muted)"},
                        children : I.shift
                    })]
                }, L)
            })
        }, q)), r.jsxs("div", {
            className: "flex w-full justify-center gap-1 sm:gap-1.5",
            children : [r.jsx(gc, {
                label  : "⇧",
                title  : S.shift,
                h      : g,
                active : b,
                onPress: () => N(R => !R)
            }), xv.map(R => r.jsx(gc, {
                label  : R.key,
                title  : R.key,
                h      : g,
                active : f === R.key,
                onPress: () => z({code: R.code, key: R.key, shift: !1})
            }, R.code)), r.jsx(gc, {
                label  : S.space,
                title  : S.space,
                h      : g,
                grow   : !0,
                active : f === " ",
                onPress: () => z({code: "Space", key: " ", shift: !1})
            }), r.jsx(gc, {
                label  : "⌫",
                title  : S.back,
                h      : g,
                onPress: () => z({code: "Backspace", key: "Backspace", shift: !1})
            })]
        }), !y && r.jsx("div", {
            className: "mt-1 text-center text-[11px]",
            style    : {color: "var(--color-text-muted)"},
            children : S.hint
        })]
    })
}

const pv = {
    ko: {space: "스페이스", back: "지우기", hint: "ㅣ ㆍ ㅡ 조합으로 모음을, 자음은 같은 키를 반복해 바꿔요 · 같은 키를 이어 쓸 땐 → 로 끊어요"},
    en: {
        space: "space",
        back : "delete",
        hint : "Combine ㅣ ㆍ ㅡ for vowels; tap a consonant key again to cycle · press → to start a new letter on the same key"
    }
};

function bv({uiLang: c, onTap: o, nextTap: f, compact: s, hideHint: d}) {
    const y = pv[c], b = s ? "h-10" : "h-12 sm:h-14", N = ({label: S, tap: g, wide: A}) => {
        const z = f === g;
        return r.jsx("button", {
            type         : "button",
            "aria-label" : S,
            onPointerDown: D => {
                D.preventDefault(), o(g)
            },
            className    : `flex ${b} min-w-0 flex-1 items-center justify-center rounded-lg font-bold transition-colors active:scale-95 ${s ? "text-base" : "text-lg"} ${A ? "flex-[2]" : ""}`,
            style        : {
                background: z ? "var(--color-accent)" : "var(--color-bg-card)",
                color     : z ? "#fff" : "var(--color-text-secondary)",
                border    : `1px solid ${z ? "var(--color-accent-hover)" : "var(--color-border-subtle)"}`
            },
            children     : S
        })
    };
    return r.jsxs("div", {
        className: "mx-auto flex w-full max-w-xs flex-col items-center gap-1.5 select-none",
        children : [Dg.map((S, g) => r.jsx("div", {
            className: "flex w-full gap-1.5",
            children : S.map(A => r.jsx(N, {label: A, tap: A}, A))
        }, g)), r.jsxs("div", {
            className: "flex w-full gap-1.5",
            children : [r.jsx(N, {label: "→", tap: "Commit"}), r.jsx(N, {
                label: "ㅇㅁ",
                tap  : "ㅇㅁ"
            }), r.jsx(N, {label: "⌫", tap: "Backspace"})]
        }), r.jsxs("div", {
            className: "flex w-full gap-1.5",
            children : [r.jsx(N, {label: ".", tap: "."}), r.jsx(N, {
                label: ",",
                tap  : ","
            }), r.jsx(N, {label: "?", tap: "?"}), r.jsx(N, {label: y.space, tap: " ", wide: !0})]
        }), !d && r.jsx("div", {
            className: "mt-1 text-center text-[11px]",
            style    : {color: "var(--color-text-muted)"},
            children : y.hint
        })]
    })
}

function gc({label: c, title: o, h: f, onPress: s, active: d, grow: y}) {
    return r.jsx("button", {
        type         : "button",
        "aria-label" : o,
        onPointerDown: b => {
            b.preventDefault(), s()
        },
        className    : `flex ${f} items-center justify-center rounded-md px-2 text-xs font-medium transition-colors active:scale-95 ${y ? "flex-[3]" : "flex-1"}`,
        style        : {
            maxWidth  : y ? 200 : 56,
            background: d ? "var(--color-accent)" : "var(--color-bg-elevated)",
            color     : d ? "#fff" : "var(--color-text-tertiary)",
            border    : `1px solid ${d ? "var(--color-accent-hover)" : "var(--color-border-subtle)"}`
        },
        children     : c
    })
}

function Ka({value: c, onChange: o, options: f, ariaLabel: s}) {
    const d = f ?? [{lang: "ko", label: "한국어"}, {lang: "en", label: "English"}];
    return r.jsx("div", {
        className   : "inline-flex rounded-full p-0.5",
        style       : {
            background: "var(--color-bg-card)",
            border    : "1px solid var(--color-border-subtle)"
        },
        role        : "group",
        "aria-label": s,
        children    : d.map(y => {
            const b = c === y.lang;
            return r.jsx("button", {
                onClick       : () => o(y.lang),
                className     : "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                style         : {
                    background: b ? "var(--color-accent)" : "transparent",
                    color     : b ? "#fff" : "var(--color-text-tertiary)"
                },
                "aria-pressed": b,
                children      : y.label
            }, y.lang)
        })
    })
}

function we({mood: c = "idle", size: o = 72}) {
    const f = c === "happy" || c === "celebrate";
    return r.jsxs("svg", {
        width       : o,
        height      : o,
        viewBox     : "0 0 100 100",
        fill        : "none",
        xmlns       : "http://www.w3.org/2000/svg",
        style       : {
            filter    : f ? "drop-shadow(0 0 12px var(--color-accent))" : "none",
            transition: "filter 0.25s"
        },
        "aria-label": "부엉이 마스코트",
        children    : [r.jsx("defs", {
            children: r.jsxs("linearGradient", {
                id      : "owl-body",
                x1      : "0",
                y1      : "0",
                x2      : "0",
                y2      : "1",
                children: [r.jsx("stop", {offset: "0", stopColor: "#3aabf7"}), r.jsx("stop", {
                    offset   : "1",
                    stopColor: "#0674c4"
                })]
            })
        }), r.jsx("path", {d: "M28 26 L34 10 L42 28 Z", fill: "#0674c4"}), r.jsx("path", {
            d   : "M72 26 L66 10 L58 28 Z",
            fill: "#0674c4"
        }), r.jsx("ellipse", {
            cx  : "50",
            cy  : "56",
            rx  : "34",
            ry  : "36",
            fill: "url(#owl-body)"
        }), r.jsx("ellipse", {
            cx     : "50",
            cy     : "64",
            rx     : "20",
            ry     : "24",
            fill   : "#0a3a5c",
            opacity: "0.55"
        }), r.jsx("circle", {cx: "37", cy: "48", r: "14", fill: "#0e1015"}), r.jsx("circle", {
            cx  : "63",
            cy  : "48",
            r   : "14",
            fill: "#0e1015"
        }), r.jsx(Sv, {mood: c}), r.jsx("path", {d: "M50 58 L45 66 L55 66 Z", fill: "#f59e0b"})]
    })
}

function Sv({mood: c}) {
    return c === "oops" ? r.jsxs(r.Fragment, {
        children: [r.jsx("circle", {
            cx  : "37",
            cy  : "48",
            r   : "5",
            fill: "#eef0f5"
        }), r.jsx("circle", {cx: "63", cy: "48", r: "5", fill: "#eef0f5"}), r.jsx("circle", {
            cx     : "78",
            cy     : "40",
            r      : "3",
            fill   : "#38bdf8",
            opacity: "0.8"
        })]
    }) : c === "happy" ? r.jsxs(r.Fragment, {
        children: [r.jsx("path", {
            d            : "M30 50 Q37 42 44 50",
            stroke       : "#eef0f5",
            strokeWidth  : "3.5",
            fill         : "none",
            strokeLinecap: "round"
        }), r.jsx("path", {
            d            : "M56 50 Q63 42 70 50",
            stroke       : "#eef0f5",
            strokeWidth  : "3.5",
            fill         : "none",
            strokeLinecap: "round"
        })]
    }) : c === "celebrate" ? r.jsxs(r.Fragment, {
        children: [r.jsx(Jm, {cx: 37, cy: 48}), r.jsx(Jm, {
            cx: 63,
            cy: 48
        })]
    }) : r.jsxs(r.Fragment, {
        children: [r.jsx("circle", {
            cx  : "37",
            cy  : "48",
            r   : "8",
            fill: "#eef0f5"
        }), r.jsx("circle", {cx: "63", cy: "48", r: "8", fill: "#eef0f5"}), r.jsx("circle", {
            cx  : "39",
            cy  : "50",
            r   : "4",
            fill: "#0e1015"
        }), r.jsx("circle", {cx: "65", cy: "50", r: "4", fill: "#0e1015"}), r.jsx("circle", {
            cx  : "41",
            cy  : "47",
            r   : "1.4",
            fill: "#fff"
        }), r.jsx("circle", {cx: "67", cy: "47", r: "1.4", fill: "#fff"})]
    })
}

function Jm({cx: c, cy: o}) {
    return r.jsx("path", {
        d   : `M${c} ${o - 7} L${c + 2} ${o - 1} L${c + 7} ${o - 1} L${c + 3} ${o + 3} L${c + 4} ${o + 8} L${c} ${o + 5} L${c - 4} ${o + 8} L${c - 3} ${o + 3} L${c - 7} ${o - 1} L${c - 2} ${o - 1} Z`,
        fill: "#fbbf24"
    })
}

const Ms = {
    ko: {
        title     : "스피드체크",
        sub       : `문장 ${hs}개 · 15초`,
        practice  : "📚 단계별 연습",
        games     : "🎮 게임",
        hint      : "아무 키나 눌러 시작",
        tapHint   : "아래 자판을 눌러 시작",
        cheonjiin : "📱 천지인",
        qwerty    : "⌨️ 두벌식",
        focusHint : "여기를 클릭하고 타이핑 ⌨️",
        next      : "다음",
        cpm       : "타/분",
        acc       : "정확도",
        combo     : "콤보",
        best      : "내 최고",
        again     : "한 번 더",
        enter     : "Enter ↵",
        share     : "결과 공유",
        copied    : "복사됨 ✓",
        shared    : "공유됨 ✓",
        failed    : "공유 실패",
        shiftHint : (c, o) => `⇧ Shift + ${c} = ${o}`,
        wrongChip : c => `✗ ${c}`,
        newBest   : "🎉 신기록",
        nextTier  : (c, o, f) => `${c} ${o}까지 ${f}타/분`,
        top       : "최고 등급 달성!",
        grade     : c => `${c} 등급`,
        toGames   : "🎮 게임으로 겨루기",
        toPractice: "📚 단계별 연습"
    },
    en: {
        title     : "Speed check",
        sub       : `${hs} sentences · 15s`,
        practice  : "📚 Practice",
        games     : "🎮 Games",
        hint      : "Press any key to start",
        tapHint   : "Tap the keys below to start",
        cheonjiin : "📱 Cheonjiin",
        qwerty    : "⌨️ 2-set",
        focusHint : "Click here, then type ⌨️",
        next      : "next",
        cpm       : "CPM",
        acc       : "accuracy",
        combo     : "combo",
        best      : "Best",
        again     : "Again",
        enter     : "Enter ↵",
        share     : "Share",
        copied    : "Copied ✓",
        shared    : "Shared ✓",
        failed    : "Failed",
        shiftHint : (c, o) => `⇧ Hold Shift + ${c} for ${o}`,
        wrongChip : c => `✗ ${c}`,
        newBest   : "🎉 New best",
        nextTier  : (c, o, f) => `${f} CPM to ${c} ${o}`,
        top       : "Top tier reached!",
        grade     : c => `${c} tier`,
        toGames   : "🎮 Play the games",
        toPractice: "📚 Step-by-step practice"
    }
}, vs    = c => `quick:${c}`;

function jv({onPractice: c, onGames: o}) {
    const f = _t(D => D.uiLang), s = _t(D => D.setUiLang), d = _t(D => D.targetLang), y = _t(D => D.setTargetLang),
          b = Z(D => D.phase), N = Z(D => D.stageId), S = Z(D => D.startQuick), g = Ms[f];
    J.useEffect(() => {
        Z.getState().stageId !== ys && S(d)
    }, []);
    const A = D => {
        y(D), S(D)
    }, z    = N === ys;
    return r.jsxs("div", {
        className: "mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col gap-3 px-4 py-4",
        children : [r.jsxs("div", {
            className: "flex flex-wrap items-center justify-between gap-2",
            children : [r.jsxs("div", {
                className: "flex items-center gap-2",
                children : [r.jsxs("span", {
                    className: "text-base font-black tracking-tight",
                    style    : {color: "var(--color-text-hero)"},
                    children : ["⚡ ", g.title]
                }), r.jsx(Ka, {
                    value    : d,
                    onChange : A,
                    ariaLabel: "practice language",
                    options  : [{lang: "ko", label: "🇰🇷 한글"}, {lang: "en", label: "🔤 ABC"}]
                })]
            }), r.jsxs("div", {
                className: "flex items-center gap-1.5",
                children : [r.jsx($m, {onClick: c, children: g.practice}), r.jsx($m, {
                    onClick : o,
                    children: g.games
                }), r.jsx(Ka, {value: f, onChange: s, ariaLabel: "display language"})]
            })]
        }), z && b === "done" ? r.jsx(Nv, {
            uiLang    : f,
            onAgain   : () => S(d),
            onGames   : o,
            onPractice: c
        }) : r.jsx(Tv, {uiLang: f})]
    })
}

function $m({onClick: c, children: o}) {
    return r.jsx("button", {
        onClick  : c,
        className: "rounded-full px-3 py-1.5 text-xs font-bold transition-transform hover:-translate-y-0.5 active:translate-y-0",
        style    : {
            background: "var(--color-bg-card)",
            color     : "var(--color-text-secondary)",
            border    : "1px solid var(--color-border-default)"
        },
        children : o
    })
}

function Tv({uiLang: c}) {
    const o = Ms[c], f = Z(h => h.phase), s = Z(h => h.typed), d = Z(h => h.lang), y = Z(h => h.itemIndex),
          b = Z(h => h.correctKeys), N = Z(h => h.errorKeys), S = Z(h => h.combo), g = Z(h => h.startMs),
          A = Z(h => h.nowMs), z = Z(h => h.currentStage()), D = Z(h => h.itemDone), H = wl(h => h.best[vs(d)]),
          R = _t(h => h.keyLayout), q = _t(h => h.setKeyLayout), L = Za(), I = Ya(R, L), W = sv(), {
              mood: ut,
              shake: B,
              wrong: ct
          } = by(d, f === "playing");
    if (f !== "playing" || !z) return null;
    const P = z.items[y], X = (P == null ? void 0 : P.text) ?? "", Ot = z.items[y + 1], At = g != null,
          tt = At ? A - g : 0, Zt = Nc(b, tt), Ct = Ec(b, N), Pt = d === "ko" ? oy(X, s.ime) : null,
          fe = d === "ko" ? Pt : Array.from(X)[Array.from(ee(s)).length] ?? null, Rt = Pt ? fy(Pt, s.tap.seq) : null,
          _ = Rt !== null && s.tap.key === Rt ? "Commit" : Rt, k = !L && !W && !At, $ = Vn(Zt.cpm),
          mt = Pt && sy.has(Pt) ? Pt : null, gt = mt ? ry(mt) : null;
    return r.jsxs(r.Fragment, {
        children: [r.jsx("div", {
            className    : "ktype-glow-bg",
            style        : {"--ktype-glow": At ? $.color : "var(--color-accent)"},
            "aria-hidden": !0
        }), r.jsxs("div", {
            className: "flex items-center justify-between gap-3",
            children : [r.jsxs("div", {
                className: "flex items-center gap-3",
                children : [r.jsx("div", {
                    className: "ktype-float",
                    children : r.jsx(we, {mood: ut, size: 56})
                }), r.jsxs("div", {
                    className: "flex flex-col",
                    children : [r.jsx("span", {
                        className: "text-4xl font-black leading-none tabular-nums",
                        style    : {
                            color     : At ? $.color : "var(--color-text-muted)",
                            textShadow: At ? `0 0 18px ${$.color}66` : "none"
                        },
                        children : Zt.cpm
                    }), r.jsxs("span", {
                        className: "text-[11px] font-semibold",
                        style    : {color: "var(--color-text-muted)"},
                        children : [o.cpm, " ", At ? $.emoji : ""]
                    })]
                })]
            }), r.jsxs("div", {
                className: "flex items-center gap-4",
                children : [r.jsx(Wm, {
                    label: o.acc,
                    value: `${Ct}%`,
                    warn : Ct < 95 && At
                }), r.jsx(Wm, {
                    label: o.combo,
                    value: S > 0 ? `${S}×` : "—",
                    glow : S >= 3
                }), r.jsx("div", {
                    className   : "flex items-center gap-1",
                    "aria-label": `${y + 1} / ${z.items.length}`,
                    children    : z.items.map((h, C) => r.jsx("span", {
                        className: "block h-2 w-2 rounded-full transition-colors",
                        style    : {background: C < y ? "var(--color-success)" : C === y ? "var(--color-accent-hover)" : "var(--color-border-strong)"}
                    }, C))
                })]
            })]
        }), r.jsxs("div", {
            className: `relative flex flex-col items-center gap-3 rounded-3xl px-4 py-6 ${B ? "ktype-shake" : ""}`,
            style    : {
                background: "var(--color-bg-card)",
                border    : "1px solid var(--color-border-default)",
                boxShadow : "0 6px 0 0 #0b0d14"
            },
            onClick  : () => {
                Nt.unlock(), window.focus()
            },
            children : [r.jsx(Sy, {
                target: X,
                typed : s,
                lang  : d,
                done  : D
            }), ct && r.jsx("span", {
                className: "ktype-wrong-chip absolute right-3 top-3 rounded-full px-2.5 py-1 text-sm font-black",
                style    : {
                    background: "var(--color-danger-bg)",
                    color     : "#fecaca",
                    border    : "1px solid var(--color-danger)"
                },
                children : o.wrongChip(ct)
            }), D && r.jsx("span", {
                className: "ktype-pop absolute left-3 top-3 rounded-full px-2.5 py-1 text-sm font-black",
                style    : {
                    background: "var(--color-success-bg)",
                    color     : "#d1fae5",
                    border    : "1px solid var(--color-success)"
                },
                children : "✓"
            }), ((P == null ? void 0 : P.roman) || (P == null ? void 0 : P.gloss)) && r.jsxs("div", {
                className: "text-center text-sm",
                style    : {color: "var(--color-text-tertiary)"},
                children : [(P == null ? void 0 : P.roman) && r.jsx("span", {
                    className: "italic",
                    children : P.roman
                }), (P == null ? void 0 : P.roman) && (P == null ? void 0 : P.gloss) && r.jsx("span", {children: " · "}), (P == null ? void 0 : P.gloss) && r.jsx("span", {children: P.gloss})]
            }), Ot && r.jsxs("div", {
                className: "text-center text-sm",
                style    : {color: "var(--color-text-muted)", opacity: .55},
                children : [o.next, " · ", Ot.text]
            }), !At && !k && r.jsxs("div", {
                className: "ktype-pulse mt-1 rounded-full px-4 py-1.5 text-sm font-bold",
                style    : {
                    background: "var(--color-accent-bg)",
                    color     : "var(--color-accent-hover)",
                    border    : "1px solid var(--color-accent)"
                },
                children : [L ? `👇 ${o.tapHint}` : `⌨️ ${o.hint}`, " · ", o.sub]
            }), k && r.jsx("button", {
                type     : "button",
                className: "absolute inset-0 flex cursor-pointer items-center justify-center rounded-3xl backdrop-blur-[2px]",
                style    : {background: "rgba(7,8,11,0.55)"},
                onClick  : () => window.focus(),
                children : r.jsx("span", {
                    className: "ktype-pulse rounded-full px-5 py-2.5 text-base font-black",
                    style    : {background: "var(--color-accent)", color: "#fff", boxShadow: "0 4px 0 0 #0a3a5c"},
                    children : o.focusHint
                })
            })]
        }), d === "ko" && r.jsx(jy, {
            ime    : s.ime,
            compact: !0
        }), mt && gt && r.jsx("div", {
            className: "ktype-pop mx-auto rounded-full px-3 py-1 text-xs font-bold",
            style    : {background: "var(--color-warning)", color: "#1a1206"},
            children : o.shiftHint(gt, mt)
        }), H && !At && !L && r.jsxs("div", {
            className: "text-center text-xs font-semibold",
            style    : {color: "var(--color-text-tertiary)"},
            children : [o.best, " · ", Vn(H.cpm).emoji, " ", H.cpm, " ", o.cpm, " · ", H.accuracy, "%"]
        }), r.jsxs("div", {
            className: "mt-auto flex flex-col gap-2",
            children : [d === "ko" && L && r.jsx("div", {
                className: "flex justify-center gap-1.5",
                children : ["cheonjiin", "qwerty"].map(h => r.jsx("button", {
                    type     : "button",
                    onClick  : () => q(h),
                    className: "rounded-full px-3 py-1 text-[11px] font-semibold",
                    style    : {
                        background: I === h ? "var(--color-accent-bg)" : "transparent",
                        color     : I === h ? "var(--color-accent-hover)" : "var(--color-text-muted)",
                        border    : `1px solid ${I === h ? "var(--color-accent)" : "var(--color-border-subtle)"}`
                    },
                    children : h === "cheonjiin" ? o.cheonjiin : o.qwerty
                }, h))
            }), r.jsx(Ac, {
                lang    : d, uiLang: c, layout: I, next: fe, nextTap: _, compact: !L, hideHint: !0, onTap: h => {
                    Nt.unlock(), Z.getState().tapKey(h)
                }, onKey: h => {
                    Nt.unlock(), Z.getState().pressKey(h.code, h.key, h.shift)
                }
            })]
        })]
    })
}

function Wm({label: c, value: o, warn: f, glow: s}) {
    return r.jsxs("div", {
        className: "flex flex-col items-center",
        children : [r.jsx("span", {
            className: "text-xl font-extrabold tabular-nums",
            style    : {
                color     : f ? "var(--color-warning)" : s ? "var(--color-accent-hover)" : "var(--color-text-secondary)",
                textShadow: s ? "0 0 14px var(--color-accent)" : "none"
            },
            children : o
        }), r.jsx("span", {className: "text-[10px]", style: {color: "var(--color-text-muted)"}, children: c})]
    })
}

function Nv({uiLang: c, onAgain: o, onGames: f, onPractice: s}) {
    const d = Ms[c], y = Z(X => X.lang), b = Z(X => X.correctKeys), N = Z(X => X.errorKeys), S = Z(X => X.maxCombo),
          g = Z(X => X.startMs), A = Z(X => X.nowMs), z = g != null ? A - g : 0, D = Nc(b, z), H = Ec(b, N),
          R = Vn(D.cpm), q = tv(D.cpm), L = rv(D.cpm), I = {
              cpm: D.cpm,
              wpm: D.wpm,
              accuracy: H,
              stars: vy(H, D.cpm),
              maxCombo: S
          }, [W] = J.useState(() => wl.getState().best[vs(y)]), ut = As(I, W), [B, ct] = J.useState(null);
    J.useEffect(() => {
        wl.getState().record(vs(y), I)
    }, []), J.useEffect(() => {
        const X = Ot => {
            Ot.key === "Enter" && (Ot.preventDefault(), o())
        };
        return window.addEventListener("keydown", X), () => window.removeEventListener("keydown", X)
    }, [o]);
    const P = async () => {
        ct(await Va(nv(y, D.cpm, H, S)))
    };
    return r.jsxs("div", {
        className: "relative flex flex-col items-center gap-4 py-2", children: [r.jsxs("div", {
            className: "ktype-pop relative flex w-full flex-col items-center gap-2.5 rounded-3xl px-6 py-5",
            style    : {
                background: "var(--color-bg-card)",
                border    : `1px solid ${R.color}55`,
                boxShadow : `0 8px 0 0 #0b0d14, 0 0 40px -12px ${R.color}`
            },
            children : [r.jsx("div", {
                className: "ktype-float",
                children : r.jsx(we, {mood: H >= 90 ? "celebrate" : "happy", size: 56})
            }), r.jsxs("div", {
                className: "ktype-reveal flex items-center gap-2 rounded-full px-4 py-1.5 text-base font-black",
                style    : {background: `${R.color}22`, color: R.color, border: `1px solid ${R.color}`},
                children : [r.jsx("span", {
                    className: "text-2xl",
                    children : R.emoji
                }), r.jsx("span", {children: d.grade(R.label[c])})]
            }), r.jsxs("div", {
                className: "flex items-end gap-2",
                children : [r.jsx("span", {
                    className: "text-6xl font-black leading-none tabular-nums",
                    style    : {color: "var(--color-text-hero)", textShadow: `0 0 30px ${R.color}55`},
                    children : L
                }), r.jsx("span", {
                    className: "pb-2 text-base font-bold",
                    style    : {color: "var(--color-text-tertiary)"},
                    children : d.cpm
                })]
            }), r.jsxs("div", {
                className: "flex flex-col items-center gap-1",
                children : [r.jsx("span", {
                    className   : "text-lg tracking-tight",
                    "aria-label": `${d.acc} ${H}%`,
                    children    : xs(H)
                }), r.jsxs("span", {
                    className: "text-sm font-semibold",
                    style    : {color: "var(--color-text-secondary)"},
                    children : [d.acc, " ", H, "% · ", d.combo, " ", S, "× · ", Math.round(z / 100) / 10, "s"]
                })]
            }), r.jsx("p", {
                className: "text-center text-sm",
                style    : {color: "var(--color-text-tertiary)"},
                children : R.note[c]
            }), r.jsxs("div", {
                className: "flex flex-wrap items-center justify-center gap-2",
                children : [ut && r.jsx("span", {
                    className: "ktype-pop rounded-full px-3 py-1 text-xs font-bold",
                    style    : {background: "var(--color-success-bg)", color: "var(--color-success)"},
                    children : d.newBest
                }), r.jsx("span", {
                    className: "rounded-full px-3 py-1 text-xs font-semibold",
                    style    : {
                        background: "var(--color-bg-elevated)",
                        color     : "var(--color-text-secondary)",
                        border    : "1px solid var(--color-border-subtle)"
                    },
                    children : q ? d.nextTier(q.next.emoji, q.next.label[c], q.remaining) : d.top
                })]
            })]
        }), r.jsxs("div", {
            className: "flex w-full max-w-md flex-col gap-2",
            children : [r.jsxs("div", {
                className: "flex gap-2",
                children : [r.jsxs("button", {
                    onClick  : o,
                    className: "ktype-btn-hard flex-[3] rounded-2xl py-3 text-lg font-black",
                    style    : {background: "var(--color-accent)", color: "#fff"},
                    children : ["🔁 ", d.again, " ", r.jsx("span", {
                        className: "ml-1 text-xs font-semibold opacity-80",
                        children : d.enter
                    })]
                }), r.jsxs("button", {
                    onClick  : P,
                    className: "ktype-btn-hard flex-[2] rounded-2xl py-3 text-base font-bold",
                    style    : {
                        background: "var(--color-bg-elevated)",
                        color     : "var(--color-text-hero)",
                        border    : "1px solid var(--color-border-default)"
                    },
                    children : ["📤 ", B === "copied" ? d.copied : B === "shared" ? d.shared : B === "failed" ? d.failed : d.share]
                })]
            }), r.jsxs("div", {
                className: "flex gap-2",
                children : [r.jsx("button", {
                    onClick  : f,
                    className: "flex-1 rounded-2xl py-2.5 text-sm font-bold active:scale-95",
                    style    : {
                        background: "var(--color-bg-card)",
                        color     : "var(--color-text-secondary)",
                        border    : "1px solid var(--color-border-subtle)"
                    },
                    children : d.toGames
                }), r.jsx("button", {
                    onClick  : s,
                    className: "flex-1 rounded-2xl py-2.5 text-sm font-bold active:scale-95",
                    style    : {
                        background: "var(--color-bg-card)",
                        color     : "var(--color-text-secondary)",
                        border    : "1px solid var(--color-border-subtle)"
                    },
                    children : d.toPractice
                })]
            })]
        })]
    })
}

function Ev(c, o, f) {
    const s = $n(c).filter(b => b.kind === o);
    let d = 0, y = 0;
    for (const b of s) {
        const N = f[b.id];
        N && (d += 1, y += N.stars)
    }
    return {done: d, total: s.length, stars: y, maxStars: s.length * 3}
}

function Ty(c, o) {
    const f = $n(c);
    let s = 0, d = 0;
    for (const y of f) {
        const b = o[y.id];
        b && (s += 1, d += b.stars)
    }
    return {done: s, total: f.length, stars: d}
}

const Av = [{
    id    : "falling",
    emoji : "🌠",
    accent: "#128fe8",
    ready : !0,
    ko    : {name: "별똥별", desc: "떨어지는 단어를 타이핑해 격추"},
    en    : {name: "Meteor", desc: "Shoot down falling words"}
}, {
    id    : "defense",
    emoji : "🛡️",
    accent: "#10b981",
    ready : !0,
    ko    : {name: "성문 방어", desc: "몰려오는 단어를 막아라"},
    en    : {name: "Gate Defense", desc: "Stop the incoming words"}
}, {
    id    : "bubble",
    emoji : "🔵",
    accent: "#38bdf8",
    ready : !0,
    ko    : {name: "버블 팝", desc: "단어 버블을 터뜨려라"},
    en    : {name: "Bubble Pop", desc: "Pop the word bubbles"}
}, {
    id    : "speed",
    emoji : "⚡",
    accent: "#f59e0b",
    ready : !0,
    ko    : {name: "스피드런", desc: "연속 단어를 빠르게"},
    en    : {name: "Speed Run", desc: "Clear words as fast as you can"}
}], Mv   = {
    ko: {
        subtitle     : "K-Type · 타자를 게임처럼",
        displayLabel : "화면",
        practiceLabel: "무엇을 연습할까요?",
        targetKo     : "한글 타자",
        targetEn     : "영어 타자",
        practiceName : "연습 모드",
        practiceDesc : "자판 → 단어 → 문장, 단계별로 익히기",
        gamesLabel   : "🎮 타자 게임",
        soon         : "준비중",
        quick        : "⚡ 스피드체크"
    },
    en: {
        subtitle     : "K-Type · type like a game",
        displayLabel : "Display",
        practiceLabel: "What do you want to practice?",
        targetKo     : "Korean typing",
        targetEn     : "English typing",
        practiceName : "Practice",
        practiceDesc : "Keys → words → sentences, step by step",
        gamesLabel   : "🎮 Typing Games",
        soon         : "Soon",
        quick        : "⚡ Speed check"
    }
};

function zv({onQuick: c, onPractice: o, onGame: f}) {
    const s = _t(A => A.uiLang), d = _t(A => A.setUiLang), y = _t(A => A.targetLang), b = _t(A => A.setTargetLang),
          N = wl(A => A.best), S = Ty(y, N), g = Mv[s];
    return r.jsxs("div", {
        className: "mx-auto flex min-h-[100dvh] w-full max-w-lg flex-col gap-6 px-4 py-8",
        children : [r.jsxs("div", {
            className: "flex items-center justify-between gap-2",
            children : [r.jsxs("button", {
                onClick  : c,
                className: "rounded-full px-3 py-1.5 text-xs font-bold",
                style    : {
                    background: "var(--color-bg-card)",
                    color     : "var(--color-text-secondary)",
                    border    : "1px solid var(--color-border-default)"
                },
                children : ["← ", g.quick]
            }), r.jsxs("div", {
                className: "flex items-center gap-2",
                children : [r.jsx("span", {
                    className: "text-[11px]",
                    style    : {color: "var(--color-text-muted)"},
                    children : g.displayLabel
                }), r.jsx(Ka, {value: s, onChange: d, ariaLabel: g.displayLabel})]
            })]
        }), r.jsxs("header", {
            className: "flex flex-col items-center gap-2 text-center",
            children : [r.jsx("div", {
                className: "ktype-float",
                children : r.jsx(we, {mood: "happy", size: 80})
            }), r.jsx("h1", {
                className: "text-4xl font-black tracking-tight",
                style    : {color: "var(--color-text-hero)"},
                children : s === "en" ? "K-Type" : "한글 타자"
            }), r.jsx("p", {className: "text-sm", style: {color: "var(--color-text-tertiary)"}, children: g.subtitle})]
        }), r.jsxs("div", {
            className: "flex flex-col items-center gap-2 rounded-2xl px-4 py-4",
            style    : {
                background: "var(--color-bg-card)",
                border    : "1px solid var(--color-border-default)"
            },
            children : [r.jsx("span", {
                className: "text-sm font-semibold",
                style    : {color: "var(--color-text-secondary)"},
                children : g.practiceLabel
            }), r.jsx(Ka, {
                value    : y,
                onChange : b,
                ariaLabel: g.practiceLabel,
                options  : [{lang: "ko", label: `🇰🇷 ${g.targetKo}`}, {lang: "en", label: `🔤 ${g.targetEn}`}]
            })]
        }), r.jsxs("button", {
            onClick  : o,
            className: "flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all hover:-translate-y-0.5",
            style    : {background: "var(--color-bg-card)", border: "1px solid var(--color-border-default)"},
            children : [r.jsx("span", {
                className: "text-3xl",
                children : "📚"
            }), r.jsxs("div", {
                className: "flex flex-1 flex-col gap-1",
                children : [r.jsx("span", {
                    className: "text-lg font-bold",
                    style    : {color: "var(--color-text-hero)"},
                    children : g.practiceName
                }), r.jsx("span", {
                    className: "text-xs",
                    style    : {color: "var(--color-text-tertiary)"},
                    children : g.practiceDesc
                }), r.jsxs("div", {
                    className: "mt-1 flex items-center gap-2",
                    children : [r.jsx("div", {
                        className: "h-1.5 flex-1 overflow-hidden rounded-full",
                        style    : {background: "var(--color-bg-elevated)"},
                        children : r.jsx("div", {
                            className: "h-full rounded-full",
                            style    : {
                                width     : `${S.total ? Math.round(S.done / S.total * 100) : 0}%`,
                                background: "var(--color-accent)"
                            }
                        })
                    }), r.jsxs("span", {
                        className: "text-[10px] tabular-nums",
                        style    : {color: "var(--color-text-muted)"},
                        children : [S.done, "/", S.total, " · ", S.stars, "★"]
                    })]
                })]
            }), r.jsx("span", {className: "text-xl", style: {color: "var(--color-accent-hover)"}, children: "›"})]
        }), r.jsxs("section", {
            className: "flex flex-col gap-3",
            children : [r.jsx("h2", {
                className: "px-1 text-sm font-semibold",
                style    : {color: "var(--color-text-secondary)"},
                children : g.gamesLabel
            }), r.jsx("div", {
                className: "grid grid-cols-2 gap-3", children: Av.map(A => {
                    const z = A[s];
                    return r.jsxs("button", {
                        disabled : !A.ready,
                        onClick  : () => A.ready && f(A.id),
                        className: "relative flex flex-col gap-1 rounded-2xl px-4 py-4 text-left transition-all enabled:hover:-translate-y-0.5 disabled:opacity-45",
                        style    : {
                            background: "var(--color-bg-card)",
                            border    : `1px solid ${A.ready ? "var(--color-border-default)" : "var(--color-border-subtle)"}`
                        },
                        children : [r.jsx("span", {
                            className: "text-3xl",
                            style    : {filter: A.ready ? `drop-shadow(0 0 10px ${A.accent}66)` : "none"},
                            children : A.emoji
                        }), r.jsx("span", {
                            className: "mt-1 text-base font-bold",
                            style    : {color: "var(--color-text-hero)"},
                            children : z.name
                        }), r.jsx("span", {
                            className: "text-[11px] leading-snug",
                            style    : {color: "var(--color-text-muted)"},
                            children : z.desc
                        }), !A.ready && r.jsx("span", {
                            className: "absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold",
                            style    : {
                                background: "var(--color-bg-elevated)",
                                color     : "var(--color-text-tertiary)"
                            },
                            children : g.soon
                        })]
                    }, A.id)
                })
            })]
        })]
    })
}

function Fm({ratio: c, color: o}) {
    return r.jsx("div", {
        className: "h-1.5 w-full overflow-hidden rounded-full",
        style    : {background: "var(--color-bg-elevated)"},
        children : r.jsx("div", {
            className: "h-full rounded-full transition-all duration-500",
            style    : {width: `${Math.round(c * 100)}%`, background: o ?? "var(--color-accent)"}
        })
    })
}

function _v({stage: c, index: o, uiLang: f, targetLang: s}) {
    const d = Z(N => N.startStage), y = wl(N => N.best[c.id]), b = !!y;
    return r.jsxs("button", {
        onClick  : () => d(c.id, s),
        className: "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all hover:-translate-y-0.5",
        style    : {
            background: "var(--color-bg-card)",
            border    : `1px solid ${b ? "var(--color-accent)" : "var(--color-border-subtle)"}`
        },
        children : [r.jsx("span", {
            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
            style    : {
                background: b ? "var(--color-accent-bg)" : "var(--color-bg-elevated)",
                color     : b ? "var(--color-accent-hover)" : "var(--color-text-tertiary)",
                border    : `1px solid ${b ? "var(--color-accent)" : "var(--color-border-subtle)"}`
            },
            children : b ? "✓" : o + 1
        }), r.jsxs("div", {
            className: "flex flex-1 flex-col gap-0.5",
            children : [r.jsx("span", {
                className: "text-[15px] font-medium",
                style    : {color: "var(--color-text-primary)"},
                children : c.title[f]
            }), c.subtitle ? r.jsx("span", {
                className: "text-xs",
                style    : {color: "var(--color-text-muted)"},
                children : c.subtitle[f]
            }) : r.jsx("span", {
                className: "text-xs",
                style    : {color: "var(--color-text-muted)"},
                children : f === "en" ? `${c.items.length} items` : `${c.items.length}개`
            })]
        }), b ? r.jsxs("span", {
            className: "text-sm tracking-tight",
            style    : {color: "var(--color-warning)"},
            children : ["★".repeat(y.stars), r.jsx("span", {
                style   : {color: "var(--color-border-strong)"},
                children: "★".repeat(3 - y.stars)
            })]
        }) : r.jsx("span", {
            className: "text-lg transition-transform group-hover:translate-x-0.5",
            style    : {color: "var(--color-accent-hover)"},
            children : "›"
        })]
    })
}

function Ov({onHome: c}) {
    const o = _t(S => S.uiLang), f = _t(S => S.setUiLang), s = _t(S => S.targetLang), d = _t(S => S.setTargetLang),
          y = wl(S => S.best), b = $n(s), N = Ty(s, y);
    return r.jsxs("div", {
        className: "mx-auto flex min-h-[100dvh] w-full max-w-lg flex-col gap-5 px-4 py-7",
        children : [r.jsxs("div", {
            className: "flex items-center justify-between gap-2",
            children : [r.jsxs("button", {
                onClick  : c,
                className: "rounded-lg px-3 py-1.5 text-sm",
                style    : {
                    color : "var(--color-text-tertiary)",
                    border: "1px solid var(--color-border-subtle)"
                },
                children : ["← ", o === "en" ? "Home" : "홈"]
            }), r.jsx(Ka, {value: o, onChange: f, ariaLabel: "display language"})]
        }), r.jsxs("header", {
            className: "flex flex-col items-center gap-3 text-center",
            children : [r.jsx("div", {
                className: "ktype-float",
                children : r.jsx(we, {mood: "happy", size: 64})
            }), r.jsx("h1", {
                className: "text-2xl font-bold",
                style    : {color: "var(--color-text-hero)"},
                children : o === "en" ? "Practice Journey" : "연습 여정"
            }), r.jsx(Ka, {
                value    : s,
                onChange : d,
                options  : [{lang: "ko", label: o === "en" ? "🇰🇷 Korean" : "🇰🇷 한글"}, {
                    lang : "en",
                    label: o === "en" ? "🔤 English" : "🔤 영어"
                }],
                ariaLabel: "practice language"
            }), r.jsxs("div", {
                className: "w-full max-w-xs",
                children : [r.jsxs("div", {
                    className: "mb-1 flex items-center justify-between text-[11px]",
                    style    : {color: "var(--color-text-tertiary)"},
                    children : [r.jsx("span", {children: o === "en" ? "Overall" : "전체 진행"}), r.jsxs("span", {
                        className: "tabular-nums",
                        children : [N.done, "/", N.total, " · ", N.stars, "★"]
                    })]
                }), r.jsx(Fm, {ratio: N.total ? N.done / N.total : 0})]
            })]
        }), Fg.map(S => {
            const g = b.filter(z => z.kind === S);
            if (g.length === 0) return null;
            const A = Ev(s, S, y);
            return r.jsxs("section", {
                className: "flex flex-col gap-2 rounded-2xl p-3",
                style    : {
                    background: "var(--color-bg-elevated)",
                    border    : "1px solid var(--color-border-subtle)"
                },
                children : [r.jsxs("div", {
                    className: "flex items-center gap-2 px-1",
                    children : [r.jsx("span", {
                        className: "text-lg",
                        children : Pg[S]
                    }), r.jsx("h2", {
                        className: "flex-1 text-sm font-bold",
                        style    : {color: "var(--color-text-secondary)"},
                        children : Ig[S][o]
                    }), r.jsxs("span", {
                        className: "text-[11px] tabular-nums",
                        style    : {color: "var(--color-text-muted)"},
                        children : [A.done, "/", A.total]
                    })]
                }), r.jsx("div", {
                    className: "px-1",
                    children : r.jsx(Fm, {ratio: A.total ? A.done / A.total : 0})
                }), r.jsx("div", {
                    className: "flex flex-col gap-1.5",
                    children : g.map((z, D) => r.jsx(_v, {
                        stage     : z,
                        index     : D,
                        uiLang    : o,
                        targetLang: s
                    }, z.id))
                })]
            }, S)
        })]
    })
}

const kv = {ko: {cpm: "타/분", accuracy: "정확도", combo: "콤보"}, en: {cpm: "CPM", accuracy: "accuracy", combo: "combo"}};

function wv({speed: c, accuracy: o, combo: f, uiLang: s}) {
    const d = kv[s];
    return r.jsxs("div", {
        className: "flex items-center justify-center gap-6",
        children : [r.jsx(Im, {label: d.cpm, value: String(c.cpm)}), r.jsx(Im, {
            label: d.accuracy,
            value: `${o}%`,
            dim  : o < 95
        }), r.jsx(Dv, {combo: f, label: d.combo})]
    })
}

function Im({label: c, value: o, dim: f}) {
    return r.jsxs("div", {
        className: "flex flex-col items-center",
        children : [r.jsx("span", {
            className: "text-xl font-bold tabular-nums",
            style    : {color: f ? "var(--color-warning)" : "var(--color-text-secondary)"},
            children : o
        }), r.jsx("span", {className: "text-[10px]", style: {color: "var(--color-text-muted)"}, children: c})]
    })
}

function Dv({combo: c, label: o}) {
    const f = c >= 2;
    return r.jsxs("div", {
        className: "flex flex-col items-center",
        children : [r.jsx("span", {
            className: "text-2xl font-extrabold tabular-nums transition-all",
            style    : {
                color     : f ? "var(--color-accent-hover)" : "var(--color-text-muted)",
                textShadow: f ? "0 0 16px var(--color-accent)" : "none"
            },
            children : c > 0 ? `${c}×` : "—"
        }), r.jsx("span", {
            className: "text-[10px]",
            style    : {color: f ? "var(--color-accent)" : "var(--color-text-muted)"},
            children : o
        })]
    })
}

const Cv = {ko: (c, o) => `⇧ Shift + ${c} = ${o}`, en: (c, o) => `⇧ Hold Shift + ${c} for ${o}`},
      Uv = [{value: "cheonjiin", label: {ko: "📱 천지인", en: "📱 Cheonjiin"}}, {
          value: "qwerty",
          label: {ko: "⌨️ 두벌식", en: "⌨️ 2-set"}
      }];

function Hv() {
    const c = Z(k => k.phase), o = Z(k => k.typed), f = Z(k => k.lang), s = _t(k => k.uiLang), d = Z(k => k.itemIndex),
          y = Z(k => k.correctKeys), b = Z(k => k.errorKeys), N = Z(k => k.combo), S = Z(k => k.startMs),
          g = Z(k => k.nowMs), A = Z(k => k.currentStage()), z = Z(k => k.itemDone), D = Z(k => k.backToSelect),
          H = _t(k => k.keyLayout), R = _t(k => k.setKeyLayout), q = Za(), L = Ya(H, q), {
              mood: I,
              shake: W,
              wrong: ut
          } = by(f, c === "playing");
    if (c !== "playing" || !A) return null;
    const B = A.items[d], ct = (B == null ? void 0 : B.text) ?? "", P = A.items[d + 1], X = S != null ? g - S : 0,
          Ot = Nc(y, X), At = Ec(y, b), tt = f === "ko" ? oy(ct, o.ime) : null,
          Zt = f === "ko" ? tt : Array.from(ct)[Array.from(ee(o)).length] ?? null, Ct = tt ? fy(tt, o.tap.seq) : null,
          Pt = Ct !== null && o.tap.key === Ct ? "Commit" : Ct, fe = (d + (z ? 1 : 0)) / A.items.length * 100,
          Rt = tt && sy.has(tt) ? tt : null, _ = Rt ? ry(Rt) : null;
    return r.jsxs("div", {
        className: "mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col gap-4 px-4 py-5",
        children : [r.jsxs("div", {
            className: "flex items-center justify-between",
            children : [r.jsx("button", {
                onClick  : D,
                className: "rounded-lg px-3 py-1.5 text-sm transition-colors",
                style    : {
                    color : "var(--color-text-tertiary)",
                    border: "1px solid var(--color-border-subtle)"
                },
                children : s === "en" ? "← List" : "← 목록"
            }), r.jsxs("span", {
                className: "text-sm",
                style    : {color: "var(--color-text-secondary)"},
                children : [A.title[s], " · ", d + 1, " / ", A.items.length]
            })]
        }), r.jsx("div", {
            className: "h-1.5 w-full overflow-hidden rounded-full",
            style    : {background: "var(--color-bg-card)"},
            children : r.jsx("div", {
                className: "h-full rounded-full transition-all duration-300",
                style    : {width: `${fe}%`, background: "var(--color-accent)"}
            })
        }), r.jsxs("div", {
            className: "flex items-center justify-between gap-4",
            children : [r.jsx("div", {
                className: "ktype-float",
                children : r.jsx(we, {mood: I, size: 64})
            }), r.jsx(wv, {speed: Ot, accuracy: At, combo: N, uiLang: s})]
        }), r.jsxs("div", {
            className: `relative flex flex-col items-center gap-3 rounded-3xl px-4 py-5 ${W ? "ktype-shake" : ""}`,
            style    : {
                background: "var(--color-bg-card)",
                border    : "1px solid var(--color-border-default)",
                boxShadow : "0 6px 0 0 #0b0d14"
            },
            children : [r.jsx(Sy, {
                target: ct,
                typed : o,
                lang  : f,
                done  : z
            }), ut && r.jsxs("span", {
                className: "ktype-wrong-chip absolute right-3 top-3 rounded-full px-2.5 py-1 text-sm font-black",
                style    : {
                    background: "var(--color-danger-bg)",
                    color     : "#fecaca",
                    border    : "1px solid var(--color-danger)"
                },
                children : ["✗ ", ut]
            }), z && r.jsx("span", {
                className: "ktype-pop absolute left-3 top-3 rounded-full px-2.5 py-1 text-sm font-black",
                style    : {
                    background: "var(--color-success-bg)",
                    color     : "#d1fae5",
                    border    : "1px solid var(--color-success)"
                },
                children : "✓"
            }), ((B == null ? void 0 : B.roman) || (B == null ? void 0 : B.gloss)) && r.jsxs("div", {
                className: "text-center text-sm",
                style    : {color: "var(--color-text-tertiary)"},
                children : [(B == null ? void 0 : B.roman) && r.jsx("span", {
                    className: "italic",
                    children : B.roman
                }), (B == null ? void 0 : B.roman) && (B == null ? void 0 : B.gloss) && r.jsx("span", {children: " · "}), (B == null ? void 0 : B.gloss) && r.jsx("span", {children: B.gloss})]
            }), P && r.jsxs("div", {
                className: "text-center text-base",
                style    : {color: "var(--color-text-muted)", opacity: .5},
                children : [s === "en" ? "next" : "다음", " · ", P.text]
            })]
        }), f === "ko" && r.jsx(jy, {
            ime    : o.ime,
            compact: !0
        }), Rt && _ && r.jsx("div", {
            className: "ktype-pop mx-auto rounded-full px-3 py-1 text-xs font-bold",
            style    : {background: "var(--color-warning)", color: "#1a1206"},
            children : Cv[s](_, Rt)
        }), r.jsxs("div", {
            className: "mt-auto flex flex-col gap-2",
            children : [f === "ko" && r.jsx("div", {
                className: "flex justify-center gap-1.5",
                children : Uv.map(k => r.jsx("button", {
                    type     : "button",
                    onClick  : () => R(k.value),
                    className: "rounded-full px-3 py-1 text-[11px] font-semibold transition-colors",
                    style    : {
                        background: L === k.value ? "var(--color-accent-bg)" : "transparent",
                        color     : L === k.value ? "var(--color-accent-hover)" : "var(--color-text-muted)",
                        border    : `1px solid ${L === k.value ? "var(--color-accent)" : "var(--color-border-subtle)"}`
                    },
                    children : k.label[s]
                }, k.value))
            }), r.jsx(Ac, {
                lang    : f, uiLang: s, layout: L, next: Zt, nextTap: Pt, onTap: k => {
                    Nt.unlock(), Z.getState().tapKey(k)
                }, onKey: k => {
                    Nt.unlock(), Z.getState().pressKey(k.code, k.key, k.shift)
                }
            })]
        })]
    })
}

function qv(c, o, f) {
    const s = [];
    return c >= 100 ? s.push({
        id   : "perfect",
        emoji: "🎯",
        label: {ko: "무결점", en: "Flawless"}
    }) : c >= 95 && s.push({
        id   : "accurate",
        emoji: "✅",
        label: {ko: "정확", en: "Accurate"}
    }), o >= 350 ? s.push({
        id   : "blazing",
        emoji: "🚀",
        label: {ko: "폭주", en: "Blazing"}
    }) : o >= 250 && s.push({
        id   : "speedy",
        emoji: "⚡",
        label: {ko: "스피드", en: "Speedy"}
    }), f >= 20 && s.push({id: "combo", emoji: "🔥", label: {ko: "콤보 마스터", en: "Combo master"}}), s
}

const Pm = ["#128fe8", "#3aabf7", "#10b981", "#f59e0b", "#38bdf8"], is = 95;

function Rv() {
    return r.jsx("div", {
        className    : "pointer-events-none absolute inset-0 overflow-hidden",
        "aria-hidden": !0,
        children     : Array.from({length: 28}).map((c, o) => r.jsx("span", {
            style: {
                position    : "absolute",
                left        : `${(o * 33 + 7) % 100}%`,
                top         : 0,
                width       : 8,
                height      : 8,
                background  : Pm[o % Pm.length],
                borderRadius: o % 2 ? "50%" : 0,
                animation   : `ktype-confetti-fall ${2.4 + o % 4 * .5}s linear ${o % 7 * .18}s infinite`
            }
        }, o))
    })
}

function Lv() {
    const c = Z(tt => tt.currentStage()), o = Z(tt => tt.stageId), f = Z(tt => tt.correctKeys),
          s = Z(tt => tt.errorKeys), d = Z(tt => tt.maxCombo), y = Z(tt => tt.startMs), b = Z(tt => tt.nowMs),
          N = Z(tt => tt.startStage), S = Z(tt => tt.backToSelect), g = Z(tt => tt.lang), A = _t(tt => tt.uiLang),
          z = y != null ? b - y : 0, D = Nc(f, z), H = Ec(f, s), R = vy(H, D.cpm), q = H >= is, L = qv(H, D.cpm, d),
          I = $n(g), W = I[I.findIndex(tt => tt.id === o) + 1], ut = {
              cpm: D.cpm,
              wpm: D.wpm,
              accuracy: H,
              stars: R,
              maxCombo: d
          }, [B] = J.useState(() => o ? wl.getState().best[o] : void 0), ct = As(ut, B), [P, X] = J.useState(null);
    J.useEffect(() => {
        o && wl.getState().record(o, ut)
    }, []);
    const Ot = async () => {
        const tt = iv((c == null ? void 0 : c.title.ko) ?? "한글 타자", D.cpm, H, R);
        X(await Va(tt))
    }, At    = ({label: tt, value: Zt}) => r.jsxs("div", {
        className: "flex flex-col items-center",
        children : [r.jsx("span", {
            className: "text-2xl font-bold tabular-nums",
            style    : {color: "var(--color-text-hero)"},
            children : Zt
        }), r.jsx("span", {className: "text-[11px]", style: {color: "var(--color-text-tertiary)"}, children: tt})]
    });
    return r.jsxs("div", {
        className: "relative mx-auto flex min-h-[100dvh] w-full max-w-md flex-col items-center justify-center gap-6 px-4 py-8",
        children : [q && r.jsx(Rv, {}), r.jsxs("div", {
            className: "ktype-pop relative flex w-full flex-col items-center gap-4 rounded-2xl px-6 py-8",
            style    : {background: "var(--color-bg-card)", border: "1px solid var(--color-border-default)"},
            children : [r.jsx("div", {
                className: "ktype-float",
                children : r.jsx(we, {mood: q ? "celebrate" : "oops", size: 84})
            }), r.jsxs("span", {
                className: "text-sm",
                style    : {color: "var(--color-text-tertiary)"},
                children : [c == null ? void 0 : c.title[A], " ", q ? A === "en" ? "cleared" : "완료" : A === "en" ? "try again" : "다시 도전"]
            }), r.jsxs("div", {
                className   : "text-5xl tracking-widest",
                "aria-label": `별 ${R}개`,
                children    : ["★".repeat(R), r.jsx("span", {
                    style   : {color: "var(--color-border-strong)"},
                    children: "★".repeat(3 - R)
                })]
            }), L.length > 0 && r.jsx("div", {
                className: "flex flex-wrap justify-center gap-1.5",
                children : L.map(tt => r.jsxs("span", {
                    className: "ktype-pop rounded-full px-2.5 py-1 text-xs font-semibold",
                    style    : {
                        background: "var(--color-accent-bg)",
                        color     : "var(--color-accent-hover)",
                        border    : "1px solid var(--color-accent)"
                    },
                    children : [tt.emoji, " ", tt.label[A]]
                }, tt.id))
            }), r.jsxs("div", {
                className: "flex items-center gap-2",
                children : [ct && r.jsxs("span", {
                    className: "ktype-pop rounded-full px-3 py-1 text-xs font-semibold",
                    style    : {background: "var(--color-success-bg)", color: "var(--color-success)"},
                    children : ["🎉 ", A === "en" ? "New best" : "신기록"]
                }), r.jsx("span", {
                    className: "rounded-full px-3 py-1 text-xs font-semibold",
                    style    : q ? {
                        background: "var(--color-success-bg)",
                        color     : "var(--color-success)"
                    } : {background: "var(--color-danger-bg)", color: "var(--color-danger)"},
                    children : A === "en" ? q ? `Accuracy ${H}% · pass` : `Accuracy ${H}% · goal ${is}%` : q ? `정확도 ${H}% · 통과` : `정확도 ${H}% · 목표 ${is}%`
                })]
            }), r.jsxs("div", {
                className: "flex w-full justify-around pt-1",
                children : [r.jsx(At, {
                    label: A === "en" ? "CPM" : "타/분",
                    value: String(D.cpm)
                }), r.jsx(At, {
                    label: "WPM",
                    value: String(D.wpm)
                }), r.jsx(At, {label: A === "en" ? "Max Combo" : "최대 콤보", value: String(d)})]
            }), !q && r.jsx("p", {
                className: "text-center text-xs",
                style    : {color: "var(--color-text-tertiary)"},
                children : A === "en" ? "Accuracy first! Type slowly and precisely." : "속도보다 정확도 먼저! 천천히, 정확하게 쳐보세요."
            })]
        }), r.jsxs("div", {
            className: "relative flex w-full flex-col gap-2",
            children : [q && W ? r.jsxs("button", {
                onClick  : () => N(W.id, g),
                className: "w-full rounded-xl py-3 text-base font-semibold transition-transform active:scale-95",
                style    : {background: "var(--color-accent)", color: "#fff"},
                children : [A === "en" ? "Next: " : "다음 단계: ", W.title[A], " →"]
            }) : null, r.jsx("button", {
                onClick  : () => o && N(o, g),
                className: "w-full rounded-xl py-3 text-base font-semibold transition-transform active:scale-95",
                style    : q && W ? {
                    background: "var(--color-bg-elevated)",
                    color     : "var(--color-text-secondary)",
                    border    : "1px solid var(--color-border-subtle)"
                } : {background: "var(--color-accent)", color: "#fff"},
                children : A === "en" ? "Try again" : "다시 도전"
            }), r.jsxs("div", {
                className: "flex gap-2",
                children : [r.jsx("button", {
                    onClick  : Ot,
                    className: "flex-1 rounded-xl py-2.5 text-sm transition-transform active:scale-95",
                    style    : {
                        background: "var(--color-bg-elevated)",
                        color     : "var(--color-text-secondary)",
                        border    : "1px solid var(--color-border-subtle)"
                    },
                    children : P === "copied" ? A === "en" ? "Copied ✓" : "결과 복사됨 ✓" : P === "shared" ? A === "en" ? "Shared ✓" : "공유됨 ✓" : A === "en" ? "Share result" : "결과 공유"
                }), r.jsx("button", {
                    onClick  : S,
                    className: "flex-1 rounded-xl py-2.5 text-sm transition-transform active:scale-95",
                    style    : {
                        background: "var(--color-bg-elevated)",
                        color     : "var(--color-text-secondary)",
                        border    : "1px solid var(--color-border-subtle)"
                    },
                    children : A === "en" ? "List" : "목록으로"
                })]
            })]
        })]
    })
}

function Bv({onHome: c}) {
    const o = Z(f => f.phase);
    return o === "playing" ? r.jsx(Hv, {}) : o === "done" ? r.jsx(Lv, {}) : r.jsx(Ov, {onHome: c})
}

function Mc(c) {
    return c.t === "key" ? c.key === "Backspace" : c.tap === "Backspace"
}

function Dl(c, o) {
    return o.t === "key" ? Sc(c, o.code, o.key, o.shift) : ms(c, o.tap, o.nowMs)
}

const Kv = hy.flatMap(c => c.items.map(o => ({
          text: o.text,
          roman: o.roman ?? "",
          gloss: o.gloss ?? ""
      }))), Yv = [{text: "김치", roman: "kimchi", gloss: "kimchi"}, {
          text: "라면",
          roman: "ramyeon",
          gloss: "ramen"
      }, {text: "비빔밥", roman: "bibimbap", gloss: "bibimbap"}, {
          text: "지하철",
          roman: "jihacheol",
          gloss: "subway"
      }, {text: "버스", roman: "beoseu", gloss: "bus"}, {text: "택시", roman: "taeksi", gloss: "taxi"}, {
          text: "병원",
          roman: "byeongwon",
          gloss: "hospital"
      }, {text: "은행", roman: "eunhaeng", gloss: "bank"}, {text: "시장", roman: "sijang", gloss: "market"}, {
          text: "공원",
          roman: "gongwon",
          gloss: "park"
      }, {text: "도서관", roman: "doseogwan", gloss: "library"}, {
          text: "편의점",
          roman: "pyeonuijeom",
          gloss: "convenience store"
      }, {text: "카페", roman: "kape", gloss: "cafe"}, {text: "식당", roman: "sikdang", gloss: "restaurant"}, {
          text: "아침",
          roman: "achim",
          gloss: "morning"
      }, {text: "점심", roman: "jeomsim", gloss: "lunch"}, {text: "저녁", roman: "jeonyeok", gloss: "dinner"}, {
          text: "오늘",
          roman: "oneul",
          gloss: "today"
      }, {text: "내일", roman: "naeil", gloss: "tomorrow"}, {text: "어제", roman: "eoje", gloss: "yesterday"}, {
          text: "봄",
          roman: "bom",
          gloss: "spring"
      }, {text: "여름", roman: "yeoreum", gloss: "summer"}, {text: "가을", roman: "gaeul", gloss: "autumn"}, {
          text: "겨울",
          roman: "gyeoul",
          gloss: "winter"
      }, {text: "시계", roman: "sigye", gloss: "clock"}, {text: "우산", roman: "usan", gloss: "umbrella"}, {
          text: "가방",
          roman: "gabang",
          gloss: "bag"
      }, {text: "신발", roman: "sinbal", gloss: "shoes"}, {text: "모자", roman: "moja", gloss: "hat"}, {
          text: "안경",
          roman: "angyeong",
          gloss: "glasses"
      }, {text: "우유", roman: "uyu", gloss: "milk"}, {text: "딸기", roman: "ttalgi", gloss: "strawberry"}, {
          text: "포도",
          roman: "podo",
          gloss: "grape"
      }, {text: "수박", roman: "subak", gloss: "watermelon"}, {
          text: "토마토",
          roman: "tomato",
          gloss: "tomato"
      }, {text: "당근", roman: "danggeun", gloss: "carrot"}, {text: "감자", roman: "gamja", gloss: "potato"}, {
          text: "바람",
          roman: "baram",
          gloss: "wind"
      }, {text: "구름", roman: "gureum", gloss: "cloud"}, {text: "별", roman: "byeol", gloss: "star"}, {
          text: "달",
          roman: "dal",
          gloss: "moon"
      }, {text: "강", roman: "gang", gloss: "river"}, {text: "산", roman: "san", gloss: "mountain"}, {
          text: "눈",
          roman: "nun",
          gloss: "snow/eye"
      }, {text: "비", roman: "bi", gloss: "rain"}], ty = new Set,
      Gv = [...Kv, ...Yv].filter(c => ty.has(c.text) ? !1 : (ty.add(c.text), !0)),
      Qv = [["cat", "고양이"], ["dog", "개"], ["sun", "해"], ["run", "달리다"], ["fun", "재미"], ["big", "큰"], ["red", "빨강"], ["hot", "뜨거운"], ["box", "상자"], ["cup", "컵"], ["star", "별"], ["moon", "달"], ["tree", "나무"], ["book", "책"], ["fish", "물고기"], ["rain", "비"], ["snow", "눈"], ["home", "집"], ["food", "음식"], ["milk", "우유"], ["apple", "사과"], ["house", "집"], ["water", "물"], ["happy", "행복한"], ["music", "음악"], ["cloud", "구름"], ["green", "초록"], ["light", "빛"], ["dream", "꿈"], ["smile", "미소"], ["friend", "친구"], ["school", "학교"], ["family", "가족"], ["flower", "꽃"], ["orange", "오렌지"], ["planet", "행성"], ["rocket", "로켓"], ["garden", "정원"], ["window", "창문"], ["summer", "여름"]].map(([c, o]) => ({
          text: c,
          roman: "",
          gloss: o
      }));

function Wn(c, o = 4) {
    const f = c === "en" ? Qv : Gv, s = f.filter(y => Array.from(y.text).length <= o), d = s.length > 0 ? s : f;
    return d[Math.floor(Math.random() * d.length)]
}

const jc = 440, Xv = 5;

function Ny(c) {
    return {
        lang      : c,
        fallers   : [],
        typed     : It(c),
        score     : 0,
        lives     : Xv,
        level     : 1,
        elapsedMs : 0,
        spawnTimer: 600,
        nextId    : 1,
        status    : "playing",
        fx        : null,
        shake     : 0
    }
}

const Zv = c => .028 + c * .007, Vv = c => Math.max(2e3 - c * 150, 850),
      Jv = (c, o) => c === "en" ? Math.min(3 + o, 7) : Math.min(2 + Math.floor(o / 2), 4),
      $v = (c, o) => Array.from(c.text).length * 10 + o * 5;

function Wv(c) {
    return {id: c.nextId, word: Wn(c.lang, Jv(c.lang, c.level)), xPct: 8 + Math.random() * 78, y: 0}
}

function Fv(c, o) {
    if (o.t === "reset") return Ny(c.lang);
    if (o.t === "tick") {
        if (c.status !== "playing") return c;
        const y = c.elapsedMs + o.dt, b = 1 + Math.floor(y / 18e3), N = Zv(b),
              S = c.fallers.map(W => ({...W, y: W.y + N * o.dt})), g = S.filter(W => W.y >= jc);
        let A = S.filter(W => W.y < jc);
        const z = c.lives - g.length, D = c.shake + (g.length > 0 ? 1 : 0);
        let H = c.typed;
        const R = ee(c.typed);
        R && g.some(W => He(R, W.word.text, c.lang)) && (H = It(c.lang));
        let q = c.spawnTimer - o.dt, L = c.nextId;
        q <= 0 && (q += Vv(b), A = [...A, Wv({...c, level: b})], L += 1);
        const I = z <= 0 ? "over" : "playing";
        return {
            ...c,
            fallers   : A,
            lives     : z,
            level     : b,
            elapsedMs : y,
            spawnTimer: q,
            nextId    : L,
            typed     : H,
            status    : I,
            shake     : D,
            fx        : null
        }
    }
    if (c.status !== "playing") return c;
    if (Mc(o)) return {...c, typed: Dl(c.typed, o)};
    const f = Dl(c.typed, o);
    if (f === c.typed) return c;
    const s = ee(f), d = c.fallers.find(y => Jn(s, y.word.text, c.lang));
    return d ? {
        ...c,
        fallers: c.fallers.filter(y => y.id !== d.id),
        typed  : It(c.lang),
        score  : c.score + $v(d.word, c.level),
        fx     : {id: d.id, xPct: d.xPct, y: d.y, text: d.word.text}
    } : c.fallers.some(y => He(s, y.word.text, c.lang)) ? {...c, typed: f, fx: null} : {
        ...c,
        typed: It(c.lang),
        shake: c.shake + 1,
        fx   : null
    }
}

function zc(c, o) {
    const f = J.useRef(c);
    f.current = c, J.useEffect(() => {
        if (!o) return;
        let s = 0, d = performance.now();
        const y = b => {
            const N = Math.min(b - d, 50);
            d = b, f.current(N), s = requestAnimationFrame(y)
        };
        return s = requestAnimationFrame(y), () => cancelAnimationFrame(s)
    }, [o])
}

function _c(c, o) {
    J.useEffect(() => {
        const f = s => {
            s.isComposing || my(c, s.code, s.key, s.shiftKey) && (s.preventDefault(), Nt.unlock(), Nt.key(performance.now()), o({
                t    : "key",
                code : s.code,
                key  : s.key,
                shift: s.shiftKey
            }))
        };
        return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f)
    }, [c, o])
}

function Oc(c) {
    return o => {
        Nt.unlock(), Nt.key(performance.now()), c({t: "key", ...o})
    }
}

function kc(c) {
    return o => {
        Nt.unlock(), Nt.key(performance.now()), c({t: "tap", tap: o, nowMs: performance.now()})
    }
}

const Iv = {
    home       : "Home",
    retry      : "Retry",
    share      : "Share result",
    copied     : "Copied ✓",
    shared     : "Shared ✓",
    failed     : "Failed",
    score      : "Score",
    level      : "Level",
    wave       : "Wave",
    cleared    : "Cleared",
    popped     : "Popped",
    words      : "Words",
    maxCombo   : "Max Combo",
    gameOver   : "Game Over",
    timeUp     : "Time's up!",
    breached   : "Gate breached!",
    hintFalling: "Type the falling words",
    hintSpeed  : "Type the word",
    hintBubble : "Pop the bubbles",
    hintDefense: "Defend the gate"
}, Pv    = {
    home       : "홈",
    retry      : "다시 하기",
    share      : "결과 공유",
    copied     : "복사됨 ✓",
    shared     : "공유됨 ✓",
    failed     : "공유 실패",
    score      : "점수",
    level      : "레벨",
    wave       : "웨이브",
    cleared    : "클리어",
    popped     : "터뜨림",
    words      : "단어",
    maxCombo   : "최대 콤보",
    gameOver   : "게임 오버",
    timeUp     : "시간 종료!",
    breached   : "성문 함락!",
    hintFalling: "떨어지는 단어를 입력하세요",
    hintSpeed  : "단어를 입력하세요",
    hintBubble : "버블 단어를 입력하세요",
    hintDefense: "다가오는 단어를 입력하세요"
};

function wc(c) {
    return c === "en" ? Iv : Pv
}

const zs = .66;

function _s({height: c, scale: o, background: f, children: s, overlay: d}) {
    return r.jsxs("div", {
        className: "relative w-full overflow-hidden rounded-2xl",
        style    : {
            height    : Math.round(c * o),
            background: f,
            border    : "1px solid var(--color-border-subtle)"
        },
        children : [r.jsx("div", {
            className: "absolute left-0 top-0 origin-top-left",
            style    : {width: `${100 / o}%`, height: c, transform: `scale(${o})`},
            children : s
        }), d]
    })
}

function Os({mood: c, typedText: o, hint: f, lang: s, uiLang: d, layout: y, onKey: b, onTap: N, showKeyboard: S}) {
    return r.jsxs(r.Fragment, {
        children: [r.jsxs("div", {
            className: "flex items-center gap-3",
            children : [r.jsx(we, {
                mood: c,
                size: 44
            }), r.jsx("div", {
                className: "flex h-12 flex-1 items-center justify-center rounded-xl text-2xl font-bold tracking-wide",
                style    : {
                    background: "var(--color-bg-card)",
                    color     : o ? "var(--color-accent-hover)" : "var(--color-text-muted)",
                    border    : "1px solid var(--color-border-subtle)"
                },
                children : o || f
            })]
        }), S && r.jsx(Ac, {
            lang    : s,
            uiLang  : d,
            layout  : y,
            next    : null,
            nextTap : null,
            onKey   : b,
            onTap   : N,
            compact : !0,
            hideHint: !0
        })]
    })
}

function t0({onExit: c, uiLang: o, targetLang: f}) {
    const s = f, [d, y] = J.useReducer(Fv, s, Ny), [b, N] = J.useState(null), [S, g] = J.useState("idle"), A = Za(),
          z = Ya(_t(q => q.keyLayout), A), D = ee(d.typed), H = wc(o);
    _c(s, y), zc(q => y({t: "tick", dt: q}), d.status === "playing"), J.useEffect(() => {
        if (!d.fx) return;
        Nt.correct(), g("happy");
        const q = window.setTimeout(() => g("idle"), 500);
        return () => window.clearTimeout(q)
    }, [d.fx]), J.useEffect(() => {
        if (d.shake === 0) return;
        Nt.error(), g("oops");
        const q = window.setTimeout(() => g("idle"), 400);
        return () => window.clearTimeout(q)
    }, [d.shake]), J.useEffect(() => {
        d.status === "over" && Nt.complete()
    }, [d.status]);
    const R = async () => {
        const q = ["한글 타자 · K-Type 🌠 별똥별", `점수 ${d.score} · 레벨 ${d.level}`, "https://workmate.tools/ktype"].join(`
`), L = await Va(q);
        N(L === "failed" ? "공유 실패" : L === "shared" ? "공유됨 ✓" : "복사됨 ✓")
    };
    return r.jsxs("div", {
        className: "mx-auto flex min-h-[100dvh] w-full max-w-xl flex-col gap-3 px-4 py-4",
        children : [r.jsxs("div", {
            className: "flex items-center justify-between",
            children : [r.jsxs("button", {
                onClick  : c,
                className: "rounded-lg px-3 py-1.5 text-sm",
                style    : {
                    color : "var(--color-text-tertiary)",
                    border: "1px solid var(--color-border-subtle)"
                },
                children : ["← ", H.home]
            }), r.jsxs("div", {
                className: "flex items-center gap-4 text-sm",
                children : [r.jsxs("span", {
                    style   : {color: "var(--color-text-secondary)"},
                    children: ["Lv.", r.jsx("b", {style: {color: "var(--color-accent-hover)"}, children: d.level})]
                }), r.jsxs("span", {
                    "aria-label": `생명 ${d.lives}`,
                    children    : ["❤️".repeat(Math.max(0, d.lives)), r.jsx("span", {
                        style   : {opacity: .25},
                        children: "🤍".repeat(Math.max(0, 5 - d.lives))
                    })]
                }), r.jsx("span", {
                    className: "tabular-nums font-bold",
                    style    : {color: "var(--color-text-hero)"},
                    children : d.score
                })]
            })]
        }), r.jsxs(_s, {
            height    : jc,
            scale     : A ? zs : 1,
            background: "radial-gradient(120% 80% at 50% 0%, #12142b 0%, #07080b 70%)",
            overlay   : d.status === "over" ? r.jsx(n0, {
                score   : d.score,
                level   : d.level,
                shareMsg: b,
                labels  : H,
                onRetry : () => {
                    N(null), y({t: "reset"})
                },
                onShare : R,
                onExit  : c
            }) : null,
            children  : [r.jsx(a0, {}), d.fallers.map(q => r.jsx(e0, {
                faller   : q,
                typedText: D,
                lang     : s
            }, q.id)), d.fx && r.jsx(l0, {xPct: d.fx.xPct, y: d.fx.y})]
        }), r.jsx(Os, {
            mood        : S,
            typedText   : D,
            hint        : H.hintFalling,
            lang        : s,
            uiLang      : o,
            layout      : z,
            onKey       : Oc(y),
            onTap       : kc(y),
            showKeyboard: A
        })]
    })
}

function e0({faller: c, typedText: o, lang: f}) {
    const s = o !== "" && He(o, c.word.text, f), d = s ? Array.from(o).length : 0, y = Array.from(c.word.text),
          b = c.y / jc;
    return r.jsx("div", {
        className: "absolute -translate-x-1/2 whitespace-nowrap rounded-lg px-2 py-1 text-2xl font-bold transition-colors",
        style    : {
            left      : `${c.xPct}%`,
            top       : c.y,
            background: s ? "var(--color-accent-bg)" : "transparent",
            border    : s ? "1px solid var(--color-accent)" : "1px solid transparent",
            boxShadow : s ? "0 0 16px -4px var(--color-accent)" : "none",
            color     : b > .75 ? "var(--color-danger)" : "var(--color-text-hero)"
        },
        children : y.map((N, S) => r.jsx("span", {
            style   : {color: S < d ? "var(--color-accent-hover)" : void 0},
            children: N
        }, S))
    })
}

function l0({xPct: c, y: o}) {
    return r.jsxs("div", {
        className: "pointer-events-none absolute -translate-x-1/2 -translate-y-1/2",
        style    : {left: `${c}%`, top: o},
        children : [Array.from({length: 8}).map((f, s) => r.jsx("span", {
            className: "ktype-pop absolute block h-1.5 w-1.5 rounded-full",
            style    : {
                background: ["#3aabf7", "#fbbf24", "#10b981"][s % 3],
                transform : `rotate(${s * 45}deg) translateY(-14px)`
            }
        }, s)), r.jsx("span", {
            className: "ktype-pop text-lg font-extrabold",
            style    : {color: "var(--color-accent-hover)"},
            children : "✦"
        })]
    })
}

function a0() {
    return r.jsx("div", {
        className    : "pointer-events-none absolute inset-0",
        "aria-hidden": !0,
        children     : Array.from({length: 30}).map((c, o) => r.jsx("span", {
            className: "absolute block rounded-full",
            style    : {
                left      : `${(o * 37 + 5) % 100}%`,
                top       : `${(o * 53 + 11) % 100}%`,
                width     : o % 5 === 0 ? 2.5 : 1.5,
                height    : o % 5 === 0 ? 2.5 : 1.5,
                background: "#b5e1ff",
                opacity   : .35
            }
        }, o))
    })
}

function n0({score: c, level: o, shareMsg: f, labels: s, onRetry: d, onShare: y, onExit: b}) {
    return r.jsxs("div", {
        className: "absolute inset-0 flex flex-col items-center justify-center gap-4 backdrop-blur-sm",
        style    : {background: "rgba(7,8,11,0.82)"},
        children : [r.jsx(we, {mood: "oops", size: 72}), r.jsx("div", {
            className: "text-lg font-semibold",
            style    : {color: "var(--color-text-hero)"},
            children : s.gameOver
        }), r.jsxs("div", {
            className: "flex items-center gap-6",
            children : [r.jsxs("div", {
                className: "flex flex-col items-center",
                children : [r.jsx("span", {
                    className: "text-4xl font-extrabold tabular-nums",
                    style    : {color: "var(--color-accent-hover)"},
                    children : c
                }), r.jsx("span", {
                    className: "text-xs",
                    style    : {color: "var(--color-text-tertiary)"},
                    children : s.score
                })]
            }), r.jsxs("div", {
                className: "flex flex-col items-center",
                children : [r.jsx("span", {
                    className: "text-4xl font-extrabold tabular-nums",
                    style    : {color: "var(--color-text-hero)"},
                    children : o
                }), r.jsx("span", {
                    className: "text-xs",
                    style    : {color: "var(--color-text-tertiary)"},
                    children : s.level
                })]
            })]
        }), r.jsxs("div", {
            className: "flex w-64 flex-col gap-2",
            children : [r.jsx("button", {
                onClick  : d,
                className: "w-full rounded-xl py-3 text-base font-semibold active:scale-95",
                style    : {background: "var(--color-accent)", color: "#fff"},
                children : s.retry
            }), r.jsxs("div", {
                className: "flex gap-2",
                children : [r.jsx("button", {
                    onClick  : y,
                    className: "flex-1 rounded-xl py-2.5 text-sm active:scale-95",
                    style    : {
                        background: "var(--color-bg-elevated)",
                        color     : "var(--color-text-secondary)",
                        border    : "1px solid var(--color-border-subtle)"
                    },
                    children : f ?? s.share
                }), r.jsx("button", {
                    onClick  : b,
                    className: "flex-1 rounded-xl py-2.5 text-sm active:scale-95",
                    style    : {
                        background: "var(--color-bg-elevated)",
                        color     : "var(--color-text-secondary)",
                        border    : "1px solid var(--color-border-subtle)"
                    },
                    children : s.home
                })]
            })]
        })]
    })
}

const Ey = 5, u0 = c => .016 + c * .004, c0 = c => Math.max(2600 - c * 180, 1100),
      o0 = (c, o) => c === "en" ? Math.min(3 + o, 7) : Math.min(2 + Math.floor(o / 2), 4);

function i0(c, o, f) {
    return {
        id      : c,
        word    : Wn(f, o0(f, o)),
        side    : Math.random() < .5 ? "left" : "right",
        pos     : 0,
        laneYPct: 18 + Math.random() * 60
    }
}

function Ay(c) {
    return {
        lang      : c,
        attackers : [],
        typed     : It(c),
        hp        : Ey,
        score     : 0,
        wave      : 1,
        elapsedMs : 0,
        spawnTimer: 700,
        nextId    : 1,
        status    : "playing",
        fxSeq     : 0,
        shake     : 0
    }
}

function s0(c, o) {
    if (o.t === "reset") return Ay(c.lang);
    if (o.t === "tick") {
        if (c.status !== "playing") return c;
        const y = c.elapsedMs + o.dt, b = 1 + Math.floor(y / 2e4), N = u0(b),
              S = c.attackers.map(W => ({...W, pos: W.pos + N * o.dt})), g = S.filter(W => W.pos >= 100);
        let A = S.filter(W => W.pos < 100);
        const z = c.hp - g.length, D = c.shake + (g.length > 0 ? 1 : 0);
        let H = c.typed;
        const R = ee(c.typed);
        R && g.some(W => He(R, W.word.text, c.lang)) && (H = It(c.lang));
        let q = c.spawnTimer - o.dt, L = c.nextId;
        q <= 0 && (q += c0(b), A = [...A, i0(L, b, c.lang)], L += 1);
        const I = z <= 0 ? "over" : "playing";
        return {
            ...c,
            attackers : A,
            hp        : z,
            wave      : b,
            elapsedMs : y,
            spawnTimer: q,
            nextId    : L,
            typed     : H,
            status    : I,
            shake     : D
        }
    }
    if (c.status !== "playing") return c;
    if (Mc(o)) return {...c, typed: Dl(c.typed, o)};
    const f = Dl(c.typed, o);
    if (f === c.typed) return c;
    const s = ee(f), d = c.attackers.find(y => Jn(s, y.word.text, c.lang));
    return d ? {
        ...c,
        attackers: c.attackers.filter(y => y.id !== d.id),
        typed    : It(c.lang),
        score    : c.score + Array.from(d.word.text).length * 12 + c.wave * 3,
        fxSeq    : c.fxSeq + 1
    } : c.attackers.some(y => He(s, y.word.text, c.lang)) ? {...c, typed: f} : {
        ...c,
        typed: It(c.lang),
        shake: c.shake + 1
    }
}

const r0 = 440;

function f0({onExit: c, uiLang: o, targetLang: f}) {
    const s = f, [d, y] = J.useReducer(s0, s, Ay), [b, N] = J.useState("idle"), [S, g] = J.useState(null), A = Za(),
          z = Ya(_t(q => q.keyLayout), A), D = ee(d.typed), H = wc(o);
    _c(s, y), zc(q => y({t: "tick", dt: q}), d.status === "playing"), J.useEffect(() => {
        if (d.fxSeq === 0) return;
        Nt.correct(), N("happy");
        const q = window.setTimeout(() => N("idle"), 350);
        return () => window.clearTimeout(q)
    }, [d.fxSeq]), J.useEffect(() => {
        if (d.shake === 0) return;
        Nt.error(), N("oops");
        const q = window.setTimeout(() => N("idle"), 400);
        return () => window.clearTimeout(q)
    }, [d.shake]), J.useEffect(() => {
        d.status === "over" && Nt.complete()
    }, [d.status]);
    const R = async () => {
        const q = ["한글 타자 · K-Type 🛡️ 성문 방어", `웨이브 ${d.wave} · 점수 ${d.score}`, "https://workmate.tools/ktype"].join(`
`), L = await Va(q);
        g(L === "failed" ? "공유 실패" : L === "shared" ? "공유됨 ✓" : "복사됨 ✓")
    };
    return r.jsxs("div", {
        className: "mx-auto flex min-h-[100dvh] w-full max-w-xl flex-col gap-3 px-4 py-4",
        children : [r.jsxs("div", {
            className: "flex items-center justify-between",
            children : [r.jsxs("button", {
                onClick  : c,
                className: "rounded-lg px-3 py-1.5 text-sm",
                style    : {
                    color : "var(--color-text-tertiary)",
                    border: "1px solid var(--color-border-subtle)"
                },
                children : ["← ", H.home]
            }), r.jsxs("div", {
                className: "flex items-center gap-4 text-sm",
                children : [r.jsxs("span", {
                    style   : {color: "var(--color-text-secondary)"},
                    children: [H.wave, " ", r.jsx("b", {style: {color: "var(--color-accent-hover)"}, children: d.wave})]
                }), r.jsxs("span", {
                    "aria-label": `성문 HP ${d.hp}`,
                    children    : ["🛡️".repeat(Math.max(0, d.hp)), r.jsx("span", {
                        style   : {opacity: .25},
                        children: "▫️".repeat(Math.max(0, Ey - d.hp))
                    })]
                }), r.jsx("span", {
                    className: "tabular-nums font-bold",
                    style    : {color: "var(--color-text-hero)"},
                    children : d.score
                })]
            })]
        }), r.jsxs(_s, {
            height    : r0,
            scale     : A ? zs : 1,
            background: "radial-gradient(120% 100% at 50% 50%, #1a1226 0%, #07080b 72%)",
            overlay   : d.status === "over" ? r.jsxs("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center gap-4 backdrop-blur-sm",
                style    : {background: "rgba(7,8,11,0.85)"},
                children : [r.jsx(we, {mood: "oops", size: 72}), r.jsx("div", {
                    className: "text-lg font-semibold",
                    style    : {color: "var(--color-text-hero)"},
                    children : H.breached
                }), r.jsxs("div", {
                    className: "flex items-center gap-6",
                    children : [r.jsxs("div", {
                        className: "flex flex-col items-center",
                        children : [r.jsx("span", {
                            className: "text-4xl font-extrabold tabular-nums",
                            style    : {color: "var(--color-accent-hover)"},
                            children : d.score
                        }), r.jsx("span", {
                            className: "text-xs",
                            style    : {color: "var(--color-text-tertiary)"},
                            children : H.score
                        })]
                    }), r.jsxs("div", {
                        className: "flex flex-col items-center",
                        children : [r.jsx("span", {
                            className: "text-4xl font-extrabold tabular-nums",
                            style    : {color: "var(--color-text-hero)"},
                            children : d.wave
                        }), r.jsx("span", {
                            className: "text-xs",
                            style    : {color: "var(--color-text-tertiary)"},
                            children : H.wave
                        })]
                    })]
                }), r.jsxs("div", {
                    className: "flex w-64 flex-col gap-2", children: [r.jsx("button", {
                        onClick  : () => {
                            g(null), y({t: "reset"})
                        },
                        className: "w-full rounded-xl py-3 text-base font-semibold active:scale-95",
                        style    : {
                            background: "var(--color-accent)",
                            color     : "#fff"
                        },
                        children : H.retry
                    }), r.jsxs("div", {
                        className: "flex gap-2",
                        children : [r.jsx("button", {
                            onClick  : R,
                            className: "flex-1 rounded-xl py-2.5 text-sm active:scale-95",
                            style    : {
                                background: "var(--color-bg-elevated)",
                                color     : "var(--color-text-secondary)",
                                border    : "1px solid var(--color-border-subtle)"
                            },
                            children : S ?? H.share
                        }), r.jsx("button", {
                            onClick  : c,
                            className: "flex-1 rounded-xl py-2.5 text-sm active:scale-95",
                            style    : {
                                background: "var(--color-bg-elevated)",
                                color     : "var(--color-text-secondary)",
                                border    : "1px solid var(--color-border-subtle)"
                            },
                            children : H.home
                        })]
                    })]
                })]
            }) : null,
            children  : [r.jsx("div", {
                className: "absolute inset-y-0 left-1/2 -translate-x-1/2",
                style    : {width: 2, background: "var(--color-border-strong)"}
            }), r.jsx("div", {
                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl",
                children : "🏯"
            }), d.attackers.map(q => r.jsx(d0, {attacker: q, typedText: D, lang: s}, q.id))]
        }), r.jsx(Os, {
            mood        : b,
            typedText   : D,
            hint        : H.hintDefense,
            lang        : s,
            uiLang      : o,
            layout      : z,
            onKey       : Oc(y),
            onTap       : kc(y),
            showKeyboard: A
        })]
    })
}

function d0({attacker: c, typedText: o, lang: f}) {
    const s = o !== "" && He(o, c.word.text, f), d = s ? Array.from(o).length : 0, y = Array.from(c.word.text),
          b = c.side === "left" ? c.pos * .5 : 100 - c.pos * .5, N = c.pos > 75;
    return r.jsx("div", {
        className: "absolute whitespace-nowrap rounded-lg px-2 py-1 text-xl font-bold transition-colors",
        style    : {
            left      : `${b}%`,
            top       : `${c.laneYPct}%`,
            transform : `translateX(${c.side === "left" ? "0" : "-100%"}) translateY(-50%)`,
            background: s ? "var(--color-accent-bg)" : "transparent",
            border    : s ? "1px solid var(--color-accent)" : "1px solid transparent",
            boxShadow : s ? "0 0 14px -4px var(--color-accent)" : "none",
            color     : N ? "var(--color-danger)" : "var(--color-text-hero)"
        },
        children : y.map((S, g) => r.jsx("span", {
            style   : {color: g < d ? "var(--color-accent-hover)" : void 0},
            children: S
        }, g))
    })
}

const My = 6e4, m0 = 6, y0 = c => c === "en" ? 5 : 3;

function vc(c, o) {
    const f = Math.random() * Math.PI * 2, s = .006 + Math.random() * .006;
    return {
        id  : c,
        word: Wn(o, y0(o)),
        xPct: 15 + Math.random() * 70,
        yPct: 15 + Math.random() * 60,
        vx  : Math.cos(f) * s,
        vy  : Math.sin(f) * s
    }
}

function zy(c) {
    let o = 1;
    const f = [vc(o++, c), vc(o++, c), vc(o++, c)];
    return {
        lang      : c,
        bubbles   : f,
        typed     : It(c),
        score     : 0,
        popped    : 0,
        timeLeftMs: My,
        status    : "playing",
        nextId    : o,
        spawnTimer: 2e3,
        fxSeq     : 0,
        fxPos     : null,
        shake     : 0
    }
}

function h0(c, o) {
    let f = c.xPct + c.vx * o, s = c.yPct + c.vy * o, d = c.vx, y = c.vy;
    return (f < 8 || f > 88) && (d = -d, f = Math.max(8, Math.min(88, f))), (s < 8 || s > 82) && (y = -y, s = Math.max(8, Math.min(82, s))), {
        ...c,
        xPct: f,
        yPct: s,
        vx  : d,
        vy  : y
    }
}

function x0(c, o) {
    if (o.t === "reset") return zy(c.lang);
    if (o.t === "tick") {
        if (c.status !== "playing") return c;
        const y = c.timeLeftMs - o.dt;
        if (y <= 0) return {...c, timeLeftMs: 0, status: "over"};
        let b = c.bubbles.map(g => h0(g, o.dt)), N = c.spawnTimer - o.dt, S = c.nextId;
        return N <= 0 && b.length < m0 && (N += 2400, b = [...b, vc(S, c.lang)], S += 1), {
            ...c,
            bubbles   : b,
            timeLeftMs: y,
            spawnTimer: N,
            nextId    : S,
            fxPos     : null
        }
    }
    if (c.status !== "playing") return c;
    if (Mc(o)) return {...c, typed: Dl(c.typed, o)};
    const f = Dl(c.typed, o);
    if (f === c.typed) return c;
    const s = ee(f), d = c.bubbles.find(y => Jn(s, y.word.text, c.lang));
    return d ? {
        ...c,
        bubbles: c.bubbles.filter(y => y.id !== d.id),
        typed  : It(c.lang),
        score  : c.score + Array.from(d.word.text).length * 15,
        popped : c.popped + 1,
        fxSeq  : c.fxSeq + 1,
        fxPos  : {xPct: d.xPct, yPct: d.yPct}
    } : c.bubbles.some(y => He(s, y.word.text, c.lang)) ? {...c, typed: f} : {
        ...c,
        typed: It(c.lang),
        shake: c.shake + 1
    }
}

const g0 = 440, ey = ["#128fe8", "#38bdf8", "#10b981", "#f59e0b", "#ec4899"];

function v0({onExit: c, uiLang: o, targetLang: f}) {
    const s = f, [d, y] = J.useReducer(x0, s, zy), [b, N] = J.useState("idle"), [S, g] = J.useState(null), A = Za(),
          z = Ya(_t(L => L.keyLayout), A), D = ee(d.typed), H = wc(o), R = d.timeLeftMs / My;
    _c(s, y), zc(L => y({t: "tick", dt: L}), d.status === "playing"), J.useEffect(() => {
        if (d.fxSeq === 0) return;
        Nt.correct(), N("happy");
        const L = window.setTimeout(() => N("idle"), 350);
        return () => window.clearTimeout(L)
    }, [d.fxSeq]), J.useEffect(() => {
        if (d.shake === 0) return;
        Nt.error(), N("oops");
        const L = window.setTimeout(() => N("idle"), 400);
        return () => window.clearTimeout(L)
    }, [d.shake]), J.useEffect(() => {
        d.status === "over" && Nt.complete()
    }, [d.status]);
    const q = async () => {
        const L = ["한글 타자 · K-Type 🫧 버블 팝", `${d.popped}개 · 점수 ${d.score}`, "https://workmate.tools/ktype"].join(`
`), I = await Va(L);
        g(I === "failed" ? "공유 실패" : I === "shared" ? "공유됨 ✓" : "복사됨 ✓")
    };
    return r.jsxs("div", {
        className: "mx-auto flex min-h-[100dvh] w-full max-w-xl flex-col gap-3 px-4 py-4",
        children : [r.jsxs("div", {
            className: "flex items-center justify-between",
            children : [r.jsxs("button", {
                onClick  : c,
                className: "rounded-lg px-3 py-1.5 text-sm",
                style    : {
                    color : "var(--color-text-tertiary)",
                    border: "1px solid var(--color-border-subtle)"
                },
                children : ["← ", H.home]
            }), r.jsxs("div", {
                className: "flex items-center gap-4 text-sm",
                children : [r.jsxs("span", {
                    style   : {color: "var(--color-text-secondary)"},
                    children: [H.popped, " ", r.jsx("b", {
                        style   : {color: "var(--color-text-hero)"},
                        children: d.popped
                    })]
                }), r.jsx("span", {
                    className: "tabular-nums font-bold",
                    style    : {color: "var(--color-text-hero)"},
                    children : d.score
                })]
            })]
        }), r.jsx("div", {
            className: "h-2 w-full overflow-hidden rounded-full",
            style    : {background: "var(--color-bg-card)"},
            children : r.jsx("div", {
                className: "h-full rounded-full transition-[width] duration-100",
                style    : {width: `${R * 100}%`, background: R < .2 ? "var(--color-danger)" : "var(--color-success)"}
            })
        }), r.jsx(_s, {
            height    : g0,
            scale     : A ? zs : 1,
            background: "radial-gradient(120% 90% at 50% 100%, #0d1a24 0%, #07080b 70%)",
            overlay   : d.status === "over" ? r.jsxs("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center gap-4 backdrop-blur-sm",
                style    : {background: "rgba(7,8,11,0.85)"},
                children : [r.jsx(we, {mood: "celebrate", size: 72}), r.jsx("div", {
                    className: "text-lg font-semibold",
                    style    : {color: "var(--color-text-hero)"},
                    children : H.timeUp
                }), r.jsxs("div", {
                    className: "flex items-center gap-6",
                    children : [r.jsxs("div", {
                        className: "flex flex-col items-center",
                        children : [r.jsx("span", {
                            className: "text-4xl font-extrabold tabular-nums",
                            style    : {color: "var(--color-accent-hover)"},
                            children : d.score
                        }), r.jsx("span", {
                            className: "text-xs",
                            style    : {color: "var(--color-text-tertiary)"},
                            children : H.score
                        })]
                    }), r.jsxs("div", {
                        className: "flex flex-col items-center",
                        children : [r.jsx("span", {
                            className: "text-4xl font-extrabold tabular-nums",
                            style    : {color: "var(--color-text-hero)"},
                            children : d.popped
                        }), r.jsx("span", {
                            className: "text-xs",
                            style    : {color: "var(--color-text-tertiary)"},
                            children : H.popped
                        })]
                    })]
                }), r.jsxs("div", {
                    className: "flex w-64 flex-col gap-2", children: [r.jsx("button", {
                        onClick  : () => {
                            g(null), y({t: "reset"})
                        },
                        className: "w-full rounded-xl py-3 text-base font-semibold active:scale-95",
                        style    : {
                            background: "var(--color-accent)",
                            color     : "#fff"
                        },
                        children : H.retry
                    }), r.jsxs("div", {
                        className: "flex gap-2",
                        children : [r.jsx("button", {
                            onClick  : q,
                            className: "flex-1 rounded-xl py-2.5 text-sm active:scale-95",
                            style    : {
                                background: "var(--color-bg-elevated)",
                                color     : "var(--color-text-secondary)",
                                border    : "1px solid var(--color-border-subtle)"
                            },
                            children : S ?? H.share
                        }), r.jsx("button", {
                            onClick  : c,
                            className: "flex-1 rounded-xl py-2.5 text-sm active:scale-95",
                            style    : {
                                background: "var(--color-bg-elevated)",
                                color     : "var(--color-text-secondary)",
                                border    : "1px solid var(--color-border-subtle)"
                            },
                            children : H.home
                        })]
                    })]
                })]
            }) : null,
            children  : d.bubbles.map(L => r.jsx(p0, {
                bubble   : L,
                color    : ey[L.id % ey.length],
                typedText: D,
                lang     : s
            }, L.id))
        }), r.jsx(Os, {
            mood        : b,
            typedText   : D,
            hint        : H.hintBubble,
            lang        : s,
            uiLang      : o,
            layout      : z,
            onKey       : Oc(y),
            onTap       : kc(y),
            showKeyboard: A
        })]
    })
}

function p0({bubble: c, color: o, typedText: f, lang: s}) {
    const d = f !== "" && He(f, c.word.text, s), y = d ? Array.from(f).length : 0, b = Array.from(c.word.text),
          N = 46 + b.length * 16;
    return r.jsx("div", {
        className: "absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xl font-bold",
        style    : {
            left      : `${c.xPct}%`,
            top       : `${c.yPct}%`,
            width     : N,
            height    : N,
            background: `radial-gradient(circle at 35% 30%, ${o}cc, ${o}55)`,
            border    : `2px solid ${d ? "#fff" : o}`,
            boxShadow : d ? `0 0 20px -2px ${o}` : `0 0 12px -6px ${o}`
        },
        children : b.map((S, g) => r.jsx("span", {
            style   : {color: g < y ? "#fff" : "var(--color-text-hero)"},
            children: S
        }, g))
    })
}

const _y = 4e4, Oy = c => c === "en" ? 6 : 4;

function ky(c) {
    return {
        lang      : c,
        word      : Wn(c, Oy(c)),
        typed     : It(c),
        score     : 0,
        cleared   : 0,
        combo     : 0,
        maxCombo  : 0,
        timeLeftMs: _y,
        status    : "playing",
        shake     : 0,
        fxSeq     : 0
    }
}

function b0(c, o) {
    if (o.t === "reset") return ky(c.lang);
    if (o.t === "tick") {
        if (c.status !== "playing") return c;
        const d = c.timeLeftMs - o.dt;
        return d <= 0 ? {...c, timeLeftMs: 0, status: "over"} : {...c, timeLeftMs: d}
    }
    if (c.status !== "playing") return c;
    if (Mc(o)) return {...c, typed: Dl(c.typed, o)};
    const f = Dl(c.typed, o);
    if (f === c.typed) return c;
    const s = ee(f);
    if (Jn(s, c.word.text, c.lang)) {
        const d = c.combo + 1;
        return {
            ...c,
            word    : Wn(c.lang, Oy(c.lang)),
            typed   : It(c.lang),
            score   : c.score + Array.from(c.word.text).length * 10 + d * 2,
            cleared : c.cleared + 1,
            combo   : d,
            maxCombo: Math.max(c.maxCombo, d),
            fxSeq   : c.fxSeq + 1
        }
    }
    return He(s, c.word.text, c.lang) ? {...c, typed: f} : {...c, typed: It(c.lang), combo: 0, shake: c.shake + 1}
}

function S0({onExit: c, uiLang: o, targetLang: f}) {
    const s = f, [d, y] = J.useReducer(b0, s, ky), [b, N] = J.useState("idle"), [S, g] = J.useState(!1), [A, z] = J.useState(null),
          D = Za(), H = Ya(_t(B => B.keyLayout), D), R = ee(d.typed), q = wc(o), L = Array.from(d.word.text),
          I = Array.from(R).length, W = d.timeLeftMs / _y;
    _c(s, y), zc(B => y({t: "tick", dt: B}), d.status === "playing"), J.useEffect(() => {
        if (d.fxSeq === 0) return;
        Nt.correct(), N("happy");
        const B = window.setTimeout(() => N("idle"), 350);
        return () => window.clearTimeout(B)
    }, [d.fxSeq]), J.useEffect(() => {
        if (d.shake === 0) return;
        Nt.error(), g(!0), N("oops");
        const B = window.setTimeout(() => g(!1), 220), ct = window.setTimeout(() => N("idle"), 400);
        return () => {
            window.clearTimeout(B), window.clearTimeout(ct)
        }
    }, [d.shake]), J.useEffect(() => {
        d.status === "over" && Nt.complete()
    }, [d.status]);
    const ut = async () => {
        const B = ["한글 타자 · K-Type ⚡ 스피드런", `${d.cleared}단어 · 점수 ${d.score} · 최대 콤보 ${d.maxCombo}`, "https://workmate.tools/ktype"].join(`
`), ct = await Va(B);
        z(ct === "failed" ? "공유 실패" : ct === "shared" ? "공유됨 ✓" : "복사됨 ✓")
    };
    return r.jsxs("div", {
        className: "mx-auto flex min-h-[100dvh] w-full max-w-xl flex-col gap-4 px-4 py-4",
        children : [r.jsxs("div", {
            className: "flex items-center justify-between",
            children : [r.jsxs("button", {
                onClick  : c,
                className: "rounded-lg px-3 py-1.5 text-sm",
                style    : {
                    color : "var(--color-text-tertiary)",
                    border: "1px solid var(--color-border-subtle)"
                },
                children : ["← ", q.home]
            }), r.jsxs("div", {
                className: "flex items-center gap-4 text-sm",
                children : [r.jsxs("span", {
                    style   : {color: "var(--color-text-secondary)"},
                    children: [q.cleared, " ", r.jsx("b", {
                        style   : {color: "var(--color-text-hero)"},
                        children: d.cleared
                    })]
                }), r.jsxs("span", {
                    style   : {color: d.combo >= 2 ? "var(--color-accent-hover)" : "var(--color-text-muted)"},
                    children: [d.combo, "× ", s === "en" ? "combo" : "콤보"]
                }), r.jsx("span", {
                    className: "tabular-nums font-bold",
                    style    : {color: "var(--color-text-hero)"},
                    children : d.score
                })]
            })]
        }), r.jsx("div", {
            className: "h-2 w-full overflow-hidden rounded-full",
            style    : {background: "var(--color-bg-card)"},
            children : r.jsx("div", {
                className: "h-full rounded-full transition-[width] duration-100",
                style    : {width: `${W * 100}%`, background: W < .25 ? "var(--color-danger)" : "var(--color-accent)"}
            })
        }), r.jsxs("div", {
            className: "relative flex flex-1 flex-col items-center justify-center gap-4",
            children : [r.jsxs("div", {
                className: `text-center ${S ? "ktype-shake" : ""}`,
                children : [r.jsx("div", {
                    className: "text-6xl font-black tracking-wide",
                    children : L.map((B, ct) => r.jsx("span", {
                        style   : {color: ct < I ? "var(--color-accent-hover)" : "var(--color-text-hero)"},
                        children: B
                    }, ct))
                }), (d.word.roman || d.word.gloss) && r.jsxs("div", {
                    className: "mt-2 text-sm",
                    style    : {color: "var(--color-text-tertiary)"},
                    children : [d.word.roman && r.jsx("span", {
                        className: "italic",
                        children : d.word.roman
                    }), d.word.roman && d.word.gloss && " · ", d.word.gloss]
                })]
            }), r.jsx(we, {mood: b, size: 56}), d.status === "over" && r.jsxs("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl backdrop-blur-sm",
                style    : {background: "rgba(7,8,11,0.85)"},
                children : [r.jsx(we, {mood: "celebrate", size: 72}), r.jsx("div", {
                    className: "text-lg font-semibold",
                    style    : {color: "var(--color-text-hero)"},
                    children : q.timeUp
                }), r.jsxs("div", {
                    className: "flex items-center gap-6",
                    children : [r.jsx(ss, {label: q.words, value: d.cleared}), r.jsx(ss, {
                        label : q.score,
                        value : d.score,
                        accent: !0
                    }), r.jsx(ss, {label: q.maxCombo, value: d.maxCombo})]
                }), r.jsxs("div", {
                    className: "flex w-64 flex-col gap-2", children: [r.jsx("button", {
                        onClick  : () => {
                            z(null), y({t: "reset"})
                        },
                        className: "w-full rounded-xl py-3 text-base font-semibold active:scale-95",
                        style    : {
                            background: "var(--color-accent)",
                            color     : "#fff"
                        },
                        children : q.retry
                    }), r.jsxs("div", {
                        className: "flex gap-2",
                        children : [r.jsx("button", {
                            onClick  : ut,
                            className: "flex-1 rounded-xl py-2.5 text-sm active:scale-95",
                            style    : {
                                background: "var(--color-bg-elevated)",
                                color     : "var(--color-text-secondary)",
                                border    : "1px solid var(--color-border-subtle)"
                            },
                            children : A ?? q.share
                        }), r.jsx("button", {
                            onClick  : c,
                            className: "flex-1 rounded-xl py-2.5 text-sm active:scale-95",
                            style    : {
                                background: "var(--color-bg-elevated)",
                                color     : "var(--color-text-secondary)",
                                border    : "1px solid var(--color-border-subtle)"
                            },
                            children : q.home
                        })]
                    })]
                })]
            })]
        }), r.jsx("div", {
            className: "flex h-12 items-center justify-center rounded-xl text-2xl font-bold",
            style    : {
                background: "var(--color-bg-card)",
                color     : R ? "var(--color-accent-hover)" : "var(--color-text-muted)",
                border    : "1px solid var(--color-border-subtle)"
            },
            children : R || q.hintSpeed
        }), D && r.jsx(Ac, {
            lang    : s,
            uiLang  : o,
            layout  : H,
            next    : null,
            nextTap : null,
            onKey   : Oc(y),
            onTap   : kc(y),
            compact : !0,
            hideHint: !0
        })]
    })
}

function ss({label: c, value: o, accent: f}) {
    return r.jsxs("div", {
        className: "flex flex-col items-center",
        children : [r.jsx("span", {
            className: "text-3xl font-extrabold tabular-nums",
            style    : {color: f ? "var(--color-accent-hover)" : "var(--color-text-hero)"},
            children : o
        }), r.jsx("span", {className: "text-xs", style: {color: "var(--color-text-tertiary)"}, children: c})]
    })
}

function j0() {
    const [c, o] = J.useState("quick"), f = _t(N => N.uiLang), s = _t(N => N.targetLang), d = N => () => {
        Z.getState().backToSelect(), o(N)
    }, y         = d("quick"), b = d("home");
    return c === "practice" ? r.jsx(Bv, {onHome: y}) : c === "falling" ? r.jsx(t0, {
        onExit    : b,
        uiLang    : f,
        targetLang: s
    }) : c === "defense" ? r.jsx(f0, {onExit: b, uiLang: f, targetLang: s}) : c === "bubble" ? r.jsx(v0, {
        onExit    : b,
        uiLang    : f,
        targetLang: s
    }) : c === "speed" ? r.jsx(S0, {onExit: b, uiLang: f, targetLang: s}) : c === "home" ? r.jsx(zv, {
        onQuick   : y,
        onPractice: d("practice"),
        onGame    : N => o(N)
    }) : r.jsx(jv, {onPractice: d("practice"), onGames: b})
}

const wy = document.getElementById("root");
if (!wy) throw new Error("#root 엘리먼트를 찾을 수 없습니다.");
dg.createRoot(wy).render(r.jsx(J.StrictMode, {children: r.jsx(j0, {})}));
