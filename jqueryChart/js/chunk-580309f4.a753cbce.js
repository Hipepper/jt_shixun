(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-580309f4"], {
        "1bcc": function (t, e, i) {},
        "1ecc": function (t, e, i) {},
        "33b3": function (t, e, i) {
            "use strict";
            var l = i("7e51"),
                o = i.n(l);
            o.a
        },
        4295: function (t, e, i) {
            "use strict";
            var l = i("8abd"),
                o = i.n(l);
            o.a
        },
        6707: function (t, e, i) {
            "use strict";
            var l = i("1ecc"),
                o = i.n(l);
            o.a
        },
        6740: function (t, e, i) {
            "use strict";
            var l = i("8a31"),
                o = i.n(l);
            o.a
        },
        "6bc0": function (t, e, i) {
            "use strict";
            var l = i("976f"),
                o = i.n(l);
            o.a
        },
        "7e51": function (t, e, i) {},
        "8a31": function (t, e, i) {},
        "8abd": function (t, e, i) {},
        "8d84": function (t, e, i) {
            "use strict";
            i.r(e);
            var l = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "test__layout"
                    }, ["render-horizontal" === t.id ? i("render-horizontal") : t._e(), "render-vertical" === t.id ? i("render-vertical") : t._e()], 1)
                },
                o = [],
                a = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "views__example__layout__render-horizontal to__layout-horizontal"
                    }, [i("to-layout", {
                        attrs: {
                            width: "26%",
                            height: "100%",
                            orient: "vertical"
                        }
                    }, [i("model", {
                        attrs: {
                            width: "100%",
                            height: "40%",
                            title: "A-1"
                        }
                    }, [i("div", [t._v("A-1")])]), i("model", {
                        attrs: {
                            width: "100%",
                            height: "30%",
                            title: "A-2"
                        }
                    }, [i("div", [t._v("A-2")])]), i("model", {
                        attrs: {
                            width: "100%",
                            height: "30%",
                            title: "A-3"
                        }
                    }, [i("div", [t._v("A-3")])])], 1), i("to-layout", {
                        attrs: {
                            width: "48%",
                            height: "100%"
                        }
                    }, [i("model", {
                        attrs: {
                            width: "100%",
                            height: "70%",
                            title: "B-1"
                        }
                    }, [i("div", [t._v("B-1")])]), i("model", {
                        attrs: {
                            width: "100%",
                            height: "30%",
                            orient: "horizontal"
                        }
                    }, [i("sub-model", {
                        attrs: {
                            width: "40%",
                            height: "100%",
                            title: "D-1"
                        }
                    }, [i("div", [t._v("D-1")])]), i("sub-model", {
                        attrs: {
                            width: "30%",
                            height: "100%",
                            title: "D-2"
                        }
                    }, [i("div", [t._v("D-2")])]), i("sub-model", {
                        attrs: {
                            width: "30%",
                            height: "100%",
                            title: "D-3"
                        }
                    }, [i("div", [t._v("D-3")])])], 1)], 1), i("to-layout", {
                        attrs: {
                            width: "26%",
                            height: "100%"
                        }
                    }, [i("model", {
                        attrs: {
                            width: "100%",
                            height: "100%",
                            orient: "vertical"
                        }
                    }, [i("sub-model", {
                        attrs: {
                            width: "100%",
                            height: "40%",
                            title: "C-1"
                        }
                    }, [i("div", [t._v("C-1")])]), i("sub-model", {
                        attrs: {
                            width: "100%",
                            height: "30%",
                            title: "C-2"
                        }
                    }, [i("div", [t._v("C-2")])]), i("sub-model", {
                        attrs: {
                            width: "100%",
                            height: "30%",
                            title: "C-3"
                        }
                    }, [i("div", [t._v("C-3")])])], 1)], 1)], 1)
                },
                s = [],
                d = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "components__plug__block__layout",
                        class: t.orient,
                        style: {
                            width: t.width,
                            height: t.height
                        }
                    }, [t._t("default")], 2)
                },
                n = [],
                r = {
                    props: {
                        width: {
                            type: String
                        },
                        height: {
                            type: String
                        },
                        orient: {
                            type: String
                        }
                    }
                },
                h = r,
                c = (i("4295"), i("2877")),
                _ = Object(c["a"])(h, d, n, !1, null, "25c7573a", null),
                u = _.exports,
                v = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "components__plug__block__model",
                        class: [t.orient, {
                            "abs-title": !0 === t.absTitle,
                            "title-bg": !0 === t.titleBackground,
                            "model-bg": !0 === t.background
                        }],
                        style: {
                            width: t.width,
                            height: t.height
                        }
                    }, [i("div", {
                        staticClass: "block__model__bg ",
                        class: {
                            "block__model__no-title": "" === t.title
                        }
                    }, [t.title ? i("div", {
                        staticClass: "block__model__title"
                    }, [t._v(t._s(t.title))]) : t._e(), i("div", {
                        staticClass: "block__model__content"
                    }, [t._t("default")], 2)])])
                },
                g = [],
                b = {
                    props: {
                        width: {
                            type: String
                        },
                        height: {
                            type: String
                        },
                        orient: {
                            type: String
                        },
                        title: {
                            type: String,
                            default: ""
                        },
                        absTitle: {
                            type: Boolean
                        },
                        titleBackground: {
                            type: Boolean,
                            default: !0
                        },
                        background: {
                            type: Boolean,
                            default: !0
                        }
                    }
                },
                m = b,
                w = (i("6bc0"), Object(c["a"])(m, v, g, !1, null, "07042bd4", null)),
                p = w.exports,
                f = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "components__plug__block__sub-model",
                        class: {
                            "abs-title": !0 === t.absTitle
                        },
                        style: {
                            width: t.width,
                            height: t.height
                        }
                    }, [i("div", {
                        staticClass: "block__sub-model__bg"
                    }, [t.title ? i("div", {
                        staticClass: "block__sub-model__title"
                    }, [t._v(t._s(t.title))]) : t._e(), i("div", {
                        staticClass: "block__sub-model__content"
                    }, [t._t("default")], 2)])])
                },
                y = [],
                C = {
                    props: {
                        width: {
                            type: String
                        },
                        height: {
                            type: String
                        },
                        title: {
                            type: String
                        },
                        absTitle: {
                            type: Boolean
                        }
                    }
                },
                k = C,
                B = (i("6740"), Object(c["a"])(k, f, y, !1, null, "b3c1794a", null)),
                D = B.exports,
                S = {
                    components: {
                        ToLayout: u,
                        Model: p,
                        SubModel: D
                    }
                },
                A = S,
                z = (i("6707"), Object(c["a"])(A, a, s, !1, null, "2d7994d2", null)),
                x = z.exports,
                $ = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "views__example__layout__render-vertical to__layout-vertical"
                    }, [i("to-layout", {
                        attrs: {
                            width: "100%",
                            height: "40%",
                            orient: "horizontal"
                        }
                    }, [i("model", {
                        attrs: {
                            width: "40%",
                            height: "100%",
                            orient: "horizontal"
                        }
                    }, [i("sub-model", {
                        attrs: {
                            width: "40%",
                            height: "100%",
                            title: "D-1"
                        }
                    }, [i("div", [t._v("D-1")])]), i("sub-model", {
                        attrs: {
                            width: "30%",
                            height: "100%",
                            title: "D-2"
                        }
                    }, [i("div", [t._v("D-2")])]), i("sub-model", {
                        attrs: {
                            width: "30%",
                            height: "100%",
                            title: "D-3"
                        }
                    }, [i("div", [t._v("D-3")])])], 1), i("model", {
                        attrs: {
                            width: "30%",
                            height: "100%",
                            title: "A-1"
                        }
                    }, [i("div", [t._v("A-1")])]), i("model", {
                        attrs: {
                            width: "30%",
                            height: "100%",
                            title: "A-2"
                        }
                    }, [i("div", [t._v("A-2")])])], 1), i("to-layout", {
                        attrs: {
                            width: "100%",
                            height: "60%",
                            orient: "horizontal"
                        }
                    }, [i("model", {
                        attrs: {
                            width: "40%",
                            height: "100%",
                            orient: "vertical"
                        }
                    }, [i("sub-model", {
                        attrs: {
                            width: "100%",
                            height: "40%",
                            title: "C-1"
                        }
                    }, [i("div", [t._v("C-1")])]), i("sub-model", {
                        attrs: {
                            width: "100%",
                            height: "30%",
                            title: "C-2"
                        }
                    }, [i("div", [t._v("C-2")])]), i("sub-model", {
                        attrs: {
                            width: "100%",
                            height: "30%",
                            title: "C-3"
                        }
                    }, [i("div", [t._v("C-3")])])], 1), i("model", {
                        attrs: {
                            width: "30%",
                            height: "100%",
                            title: "B-1"
                        }
                    }, [i("div", [t._v("B-1")])]), i("model", {
                        attrs: {
                            width: "30%",
                            height: "100%",
                            title: "B-2"
                        }
                    }, [i("div", [t._v("B-2")])])], 1)], 1)
                },
                j = [],
                E = {
                    components: {
                        ToLayout: u,
                        Model: p,
                        SubModel: D
                    }
                },
                O = E,
                T = (i("a8a6"), Object(c["a"])(O, $, j, !1, null, "a52937da", null)),
                M = T.exports,
                J = {
                    components: {
                        RenderHorizontal: x,
                        RenderVertical: M
                    },
                    computed: {
                        id: function () {
                            var t = this.$route.params,
                                e = t ? t.id : "";
                            return e
                        }
                    }
                },
                L = J,
                R = (i("33b3"), Object(c["a"])(L, l, o, !1, null, "24114076", null));
            e["default"] = R.exports
        },
        "976f": function (t, e, i) {},
        a8a6: function (t, e, i) {
            "use strict";
            var l = i("1bcc"),
                o = i.n(l);
            o.a
        }
    }
]);