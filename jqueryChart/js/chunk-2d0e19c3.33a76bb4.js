(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d0e19c3"], {
        "7abe": function (e, n, t) {
            "use strict";
            t.r(n);
            var a = function () {
                    var e = this,
                        n = e.$createElement,
                        t = e._self._c || n;
                    return t("div", [e._v("\n    home\n")])
                },
                u = [],
                c = {
                    mounted: function () {
                        this.$ajax("home/index/mockData", {
                            UserID: 20180728225252,
                            RequestKey: "GetDatabaseTable"
                        }).then(function (e) {})
                    }
                },
                o = c,
                s = t("2877"),
                i = Object(s["a"])(o, a, u, !1, null, null, null);
            n["default"] = i.exports
        }
    }
]);