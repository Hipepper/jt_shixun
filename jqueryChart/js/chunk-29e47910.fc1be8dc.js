(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-29e47910"], {
        "1e35": function (t, e, n) {},
        "1eb7": function (t, e, n) {
            "use strict";
            var r = n("1e35"),
                a = n.n(r);
            a.a
        },
        "2c4d": function (t, e, n) {
            "use strict";
            n.r(e);
            var r = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "test__plug"
                    }, ["digital" === t.id ? n("digital", {
                        attrs: {
                            data: 52123103
                        }
                    }) : t._e(), "tree" === t.id ? n("tree") : t._e()], 1)
                },
                a = [],
                i = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        ref: "led",
                        staticClass: "test__plug__digital"
                    }, t._l(String(t.cdata).length, function (e, r) {
                        return n("span", {
                            key: r
                        }, [n("span", {
                            staticClass: "to__led-number",
                            class: {
                                "to__led-number--no": "," == t.numberArr[r]
                            }
                        }, [n("span", {
                            staticClass: "to__hiden"
                        }, [t._v(t._s(t.numberArr[r]))]), n("span", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: 0 == t.timer,
                                expression: "timer == false"
                            }],
                            staticClass: "to__value"
                        })])])
                    }), 0)
                },
                c = [],
                s = n("75fc"),
                u = (n("28a5"), n("c5f6"), n("9004")),
                o = {
                    props: {
                        data: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function () {
                        return {
                            timer: !1,
                            numberArr: []
                        }
                    },
                    computed: {
                        cdata: function () {
                            return Object(u["thousandFormat"])(this.data, 0)
                        }
                    },
                    methods: {
                        getDom: function (t, e) {
                            t.innerText = e ? this.numberArr[String(this.cdata).length - e] : Math.floor(9 * Math.random())
                        },
                        getArr: function () {
                            var t, e = this,
                                n = this.cdata;
                            this.numberArr = [];
                            var r = String(n).length,
                                a = String(n).split("");
                            (t = this.numberArr).push.apply(t, Object(s["a"])(a.map(function (t) {
                                return t
                            })));
                            for (var i = {}, c = 0, u = function (t) {
                                    var n = e.$refs.led.querySelectorAll(".to__led-number .to__value");
                                    if (n.length > 0) {
                                        var a = r - t - 1;
                                        c += 500, setTimeout(function () {
                                            "," == e.numberArr[a] ? e.getDom(n[a], t + 1) : (i["a" + t] = setInterval(function () {
                                                e.getDom(n[a])
                                            }, 50), setTimeout(function () {
                                                window.clearInterval(i["a" + t]), e.getDom(n[a], t + 1)
                                            }, c / 2 + (1e3 * (1 * Math.random()).toFixed(2) + 1)))
                                        }, c), "," == e.numberArr[a] && (c -= 1e3)
                                    }
                                }, o = 0; o < r; o++) u(o)
                        }
                    },
                    watch: {
                        data: function () {
                            this.getArr()
                        }
                    },
                    mounted: function () {
                        this.getArr()
                    }
                },
                l = o,
                f = (n("e36c"), n("2877")),
                d = Object(f["a"])(l, i, c, !1, null, "1f902832", null),
                m = d.exports,
                _ = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "views__plug__tree"
                    }, [n("menu-item", {
                        attrs: {
                            data: t.data
                        }
                    })], 1)
                },
                p = [],
                h = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "views__example__plug__tree"
                    }, [n("nav", t._l(t.data, function (e, r) {
                        return n("li", {
                            key: r,
                            on: {
                                click: function (n) {
                                    return t.navClick(e, r)
                                }
                            }
                        }, [n("div", {
                            staticClass: "to__name"
                        }, [t._v(t._s(e.name))]), e.children.length > 0 ? n("menu-item", {
                            attrs: {
                                data: e.children
                            }
                        }) : t._e()], 1)
                    }), 0)])
                },
                v = [],
                g = {
                    name: "menu-item",
                    props: {
                        data: {
                            type: Array
                        }
                    }
                },
                b = g,
                A = (n("d4ad"), Object(f["a"])(b, h, v, !1, null, "0e7fb043", null)),
                I = A.exports,
                N = {
                    components: {
                        MenuItem: I
                    },
                    data: function () {
                        return {
                            data: [{
                                name: "公司A",
                                children: [{
                                    name: "部门A",
                                    children: []
                                }, {
                                    name: "部门B",
                                    children: []
                                }, {
                                    name: "部门C",
                                    children: [{
                                        name: "人员A",
                                        children: []
                                    }, {
                                        name: "人员B",
                                        children: []
                                    }]
                                }]
                            }, {
                                name: "公司B",
                                children: []
                            }, {
                                name: "公司C",
                                children: []
                            }]
                        }
                    }
                },
                E = N,
                w = Object(f["a"])(E, _, p, !1, null, null, null),
                C = w.exports,
                x = {
                    components: {
                        Digital: m,
                        Tree: C
                    },
                    computed: {
                        id: function () {
                            var t = this.$route.params,
                                e = t ? t.id : "";
                            return e
                        }
                    }
                },
                S = x,
                y = (n("1eb7"), Object(f["a"])(S, r, a, !1, null, "6e523d16", null));
            e["default"] = y.exports
        },
        "540e": function (t, e, n) {},
        aa77: function (t, e, n) {
            var r = n("5ca1"),
                a = n("be13"),
                i = n("79e5"),
                c = n("fdef"),
                s = "[" + c + "]",
                u = "​",
                o = RegExp("^" + s + s + "*"),
                l = RegExp(s + s + "*$"),
                f = function (t, e, n) {
                    var a = {},
                        s = i(function () {
                            return !!c[t]() || u[t]() != u
                        }),
                        o = a[t] = s ? e(d) : c[t];
                    n && (a[n] = o), r(r.P + r.F * s, "String", a)
                },
                d = f.trim = function (t, e) {
                    return t = String(a(t)), 1 & e && (t = t.replace(o, "")), 2 & e && (t = t.replace(l, "")), t
                };
            t.exports = f
        },
        ab75: function (t, e, n) {},
        c5f6: function (t, e, n) {
            "use strict";
            var r = n("7726"),
                a = n("69a8"),
                i = n("2d95"),
                c = n("5dbc"),
                s = n("6a99"),
                u = n("79e5"),
                o = n("9093").f,
                l = n("11e9").f,
                f = n("86cc").f,
                d = n("aa77").trim,
                m = "Number",
                _ = r[m],
                p = _,
                h = _.prototype,
                v = i(n("2aeb")(h)) == m,
                g = "trim" in String.prototype,
                b = function (t) {
                    var e = s(t, !1);
                    if ("string" == typeof e && e.length > 2) {
                        e = g ? e.trim() : d(e, 3);
                        var n, r, a, i = e.charCodeAt(0);
                        if (43 === i || 45 === i) {
                            if (n = e.charCodeAt(2), 88 === n || 120 === n) return NaN
                        } else if (48 === i) {
                            switch (e.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    r = 2, a = 49;
                                    break;
                                case 79:
                                case 111:
                                    r = 8, a = 55;
                                    break;
                                default:
                                    return +e
                            }
                            for (var c, u = e.slice(2), o = 0, l = u.length; o < l; o++)
                                if (c = u.charCodeAt(o), c < 48 || c > a) return NaN;
                            return parseInt(u, r)
                        }
                    }
                    return +e
                };
            if (!_(" 0o1") || !_("0b1") || _("+0x1")) {
                _ = function (t) {
                    var e = arguments.length < 1 ? 0 : t,
                        n = this;
                    return n instanceof _ && (v ? u(function () {
                        h.valueOf.call(n)
                    }) : i(n) != m) ? c(new p(b(e)), n, _) : b(e)
                };
                for (var A, I = n("9e1e") ? o(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), N = 0; I.length > N; N++) a(p, A = I[N]) && !a(_, A) && f(_, A, l(p, A));
                _.prototype = h, h.constructor = _, n("2aba")(r, m, _)
            }
        },
        d4ad: function (t, e, n) {
            "use strict";
            var r = n("540e"),
                a = n.n(r);
            a.a
        },
        e36c: function (t, e, n) {
            "use strict";
            var r = n("ab75"),
                a = n.n(r);
            a.a
        },
        fdef: function (t, e) {
            t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
        }
    }
]);