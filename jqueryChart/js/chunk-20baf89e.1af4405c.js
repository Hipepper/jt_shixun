(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-20baf89e"], {
        1754: function (t, e, n) {
            "use strict";
            var a = n("6464"),
                c = n.n(a);
            c.a
        },
        6464: function (t, e, n) {},
        ceda: function (t, e, n) {
            "use strict";
            n.r(e);
            var a = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "views__example"
                    }, ["/example" === t.route ? n("nav", t._l(t.data, function (e, a) {
                        return n("div", {
                            key: a,
                            staticClass: "to__item"
                        }, [n("div", {
                            staticClass: "to__name"
                        }, [t._v(t._s(e.name))]), t._l(e.children, function (a, c) {
                            return n("div", {
                                key: c,
                                staticClass: "to__item to__children",
                                on: {
                                    click: function (n) {
                                        return t.navClick(e, a, c)
                                    }
                                }
                            }, [n("div", {
                                staticClass: "to__name"
                            }, [t._v(t._s(a.name))])])
                        })], 2)
                    }), 0) : t._e(), n("router-view")], 1)
                },
                c = [],
                i = (n("7f7f"), {
                    computed: {
                        route: function () {
                            return this.$route.path
                        }
                    },
                    data: function () {
                        return {
                            data: [{
                                name: "echarts",
                                children: [{
                                    name: "barx",
                                    children: []
                                }]
                            }]
                        }
                    },
                    methods: {
                        navClick: function (t, e, n) {
                            this.$router.push("/example/".concat(t.name, "/").concat(e.name))
                        }
                    }
                }),
                r = i,
                s = (n("1754"), n("2877")),
                o = Object(s["a"])(r, a, c, !1, null, "597af666", null);
            e["default"] = o.exports
        }
    }
]);