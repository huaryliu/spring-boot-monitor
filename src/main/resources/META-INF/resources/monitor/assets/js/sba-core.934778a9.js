(function(t) {
    function e(e) {
        for (var a, i, o = e[0], c = e[1], l = e[2], u = 0, p = []; u < o.length; u++) i = o[u], s[i] && p.push(s[i][0]), s[i] = 0;
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
        d && d(e);
        while (p.length) p.shift()();
        return r.push.apply(r, l || []), n()
    }

    function n() {
        for (var t, e = 0; e < r.length; e++) {
            for (var n = r[e], a = !0, i = 1; i < n.length; i++) {
                var c = n[i];
                0 !== s[c] && (a = !1)
            }
            a && (r.splice(e--, 1), t = o(o.s = n[0]))
        }
        return t
    }
    var a = {},
        s = {
            "sba-core": 0
        },
        r = [];

    function i(t) {
        return o.p + "assets/js/" + ({
            "event-source-polyfill": "event-source-polyfill"
        }[t] || t) + "." + {
            "event-source-polyfill": "d5755618"
        }[t] + ".js"
    }

    function o(e) {
        if (a[e]) return a[e].exports;
        var n = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.e = function(t) {
        var e = [],
            n = s[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var a = new Promise(function(e, a) {
                    n = s[t] = [e, a]
                });
                e.push(n[2] = a);
                var r, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, o.nc && c.setAttribute("nonce", o.nc), c.src = i(t), r = function(e) {
                    c.onerror = c.onload = null, clearTimeout(l);
                    var n = s[t];
                    if (0 !== n) {
                        if (n) {
                            var a = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src,
                                i = new Error("Loading chunk " + t + " failed.\n(" + a + ": " + r + ")");
                            i.type = a, i.request = r, n[1](i)
                        }
                        s[t] = void 0
                    }
                };
                var l = setTimeout(function() {
                    r({
                        type: "timeout",
                        target: c
                    })
                }, 12e4);
                c.onerror = c.onload = r, document.head.appendChild(c)
            }
        return Promise.all(e)
    }, o.m = t, o.c = a, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var a in t) o.d(n, a, function(e) {
                return t[e]
            }.bind(null, a));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o.oe = function(t) {
        throw console.error(t), t
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var u = 0; u < c.length; u++) e(c[u]);
    var d = l;
    r.push([0, "chunk-vendors", "chunk-common"]), n()
})({
    0: function(t, e, n) {
        t.exports = n("e906")
    },
    "0405": function(t, e, n) {},
    "0475": function(t, e, n) {
        "use strict";
        var a = n("b6f2"),
            s = n.n(a);
        s.a
    },
    "063e": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.hasTags ? n("div", {
                    staticClass: "field is-grouped is-grouped-multiline"
                }, t._l(t.tags, function(e, a) {
                    return n("div", {
                        key: a,
                        staticClass: "control"
                    }, [n("div", {
                        staticClass: "tags has-addons"
                    }, [n("span", {
                        staticClass: "tag is-dark",
                        domProps: {
                            textContent: t._s(a)
                        }
                    }), n("span", {
                        staticClass: "tag is-light",
                        domProps: {
                            textContent: t._s(e)
                        }
                    })])])
                }), 0) : t._e()
            },
            s = [],
            r = n("a4bb"),
            i = n.n(r),
            o = {
                props: {
                    tags: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    hasTags: function() {
                        return i()(this.tags).length > 0
                    }
                }
            },
            c = o,
            l = n("2877"),
            u = Object(l["a"])(c, a, s, !1, null, null, null);
        e["default"] = u.exports
    },
    "09a2": function(t, e, n) {
        "use strict";
        var a = n("4b10"),
            s = n.n(a);
        s.a
    },
    "09b1": function(t, e, n) {},
    "0a03": function(t, e, n) {
        "use strict";
        var a = n("0ab4"),
            s = n.n(a);
        s.a
    },
    "0ab4": function(t, e, n) {},
    "0de9": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "card panel"
                }, [t.title || t.$slots["header"] ? n("header", {
                    directives: [{
                        name: "sticks-below",
                        rawName: "v-sticks-below",
                        value: t.headerSticksBelow,
                        expression: "headerSticksBelow"
                    }],
                    staticClass: "card-header",
                    class: {
                        "panel__header--sticky": t.headerSticksBelow
                    }
                }, [n("p", {
                    staticClass: "card-header-title"
                }, [n("span", {
                    domProps: {
                        textContent: t._s(t.title)
                    }
                }), t._t("header")], 2), n("div", {
                    staticClass: "panel__close"
                }, [t.closeable ? n("sba-icon-button", {
                    attrs: {
                        icon: ["far", "times-circle"]
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.close(e)
                        }
                    }
                }) : t._e()], 1)]) : t._e(), t.$slots["default"] ? n("div", {
                    staticClass: "card-content"
                }, [t._t("default")], 2) : t._e()])
            },
            s = [],
            r = n("cc40"),
            i = n("310e"),
            o = {
                components: {
                    SbaIconButton: i["default"]
                },
                directives: {
                    sticksBelow: r["a"]
                },
                props: {
                    title: {
                        type: String,
                        required: !0
                    },
                    closeable: {
                        type: Boolean,
                        default: !1
                    },
                    headerSticksBelow: {
                        type: Array,
                        default: void 0
                    }
                },
                methods: {
                    close: function(t) {
                        this.$emit("close", t)
                    }
                }
            },
            c = o,
            l = (n("aa77"), n("2877")),
            u = Object(l["a"])(c, a, s, !1, null, null, null);
        e["default"] = u.exports
    },
    "0f24": function(t, e, n) {},
    "10b3": function(t, e, n) {},
    "12b1": function(t, e, n) {
        var a = {
            "./font-awesome-icon.js": "bcf5",
            "./index.js": "686a",
            "./sba-confirm-button.vue": "61b6",
            "./sba-formatted-obj.vue": "dbf5",
            "./sba-icon-button.vue": "310e",
            "./sba-panel.vue": "0de9",
            "./sba-status.vue": "aca8",
            "./sba-tags.vue": "063e",
            "./sba-time-ago.js": "6155"
        };

        function s(t) {
            var e = r(t);
            return n(e)
        }

        function r(t) {
            var e = a[t];
            if (!(e + 1)) {
                var n = new Error("Cannot find module '" + t + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            return e
        }
        s.keys = function() {
            return Object.keys(a)
        }, s.resolve = r, t.exports = s, s.id = "12b1"
    },
    1357: function(t, e, n) {},
    "16b7": function(t, e, n) {
        "use strict";
        var a = n("71e1"),
            s = n.n(a);
        s.a
    },
    "17b8": function(t, e, n) {
        "use strict";
        var a = n("a2f7"),
            s = n.n(a);
        s.a
    },
    "1e4c": function(t, e, n) {
        "use strict";
        var a = n("f73b"),
            s = n.n(a);
        s.a
    },
    "1fac": function(t, e, n) {
        "use strict";
        var a = n("5554"),
            s = n.n(a);
        s.a
    },
    2353: function(t, e, n) {
        "use strict";
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("table", {
                    staticClass: "metrics table is-fullwidth"
                }, [n("thead", [n("tr", [n("th", {
                    staticClass: "metrics__label",
                    attrs: {
                        title: t.description
                    },
                    domProps: {
                        textContent: t._s(t.metricName)
                    }
                }), t._l(t.statistics, function(e) {
                    return n("th", {
                        key: "head-" + e,
                        staticClass: "metrics__statistic-name"
                    }, [n("span", {
                        domProps: {
                            textContent: t._s(e)
                        }
                    }), n("div", {
                        staticClass: "select is-small is-pulled-right"
                    }, [n("select", {
                        domProps: {
                            value: t.statisticTypes[e]
                        },
                        on: {
                            change: function(n) {
                                return t.$emit("type-select", t.metricName, e, n.target.value)
                            }
                        }
                    }, [n("option", {
                        domProps: {
                            value: void 0
                        }
                    }, [t._v("\n              -\n            ")]), n("option", {
                        attrs: {
                            value: "integer"
                        }
                    }, [t._v("\n              Integer\n            ")]), n("option", {
                        attrs: {
                            value: "float"
                        }
                    }, [t._v("\n              Float\n            ")]), n("option", {
                        attrs: {
                            value: "duration"
                        }
                    }, [t._v("\n              Duration\n            ")]), n("option", {
                        attrs: {
                            value: "millis"
                        }
                    }, [t._v("\n              Milliseconds\n            ")]), n("option", {
                        attrs: {
                            value: "bytes"
                        }
                    }, [t._v("\n              Bytes\n            ")])])])])
                }), n("td")], 2)]), n("tbody", t._l(t.tagSelections, function(e, a) {
                    return n("tr", {
                        key: a
                    }, [n("td", {
                        staticClass: "metrics__label"
                    }, [n("span", {
                        domProps: {
                            textContent: t._s(t.getLabel(e))
                        }
                    }), t.errors[a] ? n("span", {
                        staticClass: "has-text-warning",
                        attrs: {
                            title: t.errors[a]
                        }
                    }, [n("font-awesome-icon", {
                        attrs: {
                            icon: "exclamation-triangle"
                        }
                    })], 1) : t._e()]), t._l(t.statistics, function(e) {
                        return n("td", {
                            key: "value-" + a + "-" + e,
                            staticClass: "metrics__statistic-value",
                            domProps: {
                                textContent: t._s(t.getValue(t.measurements[a], e))
                            }
                        })
                    }), n("td", {
                        staticClass: "metrics__actions"
                    }, [n("sba-icon-button", {
                        attrs: {
                            icon: "trash"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.handleRemove(a)
                            }
                        }
                    })], 1)], 2)
                }), 0)])
            },
            s = [],
            r = (n("6762"), n("2fdb"), n("ac6a"), n("96cf"), n("3b8d")),
            i = n("768b"),
            o = n("2d1f"),
            c = n.n(o),
            l = (n("7514"), n("d76e")),
            u = n("df0d"),
            d = n("8be7"),
            p = n("c1df"),
            h = n.n(p),
            f = n("94df"),
            m = n.n(f),
            v = function(t, e) {
                var n = h.a.duration(b(t, e));
                return "".concat(Math.floor(n.asDays()), "d ").concat(n.hours(), "h ").concat(n.minutes(), "m ").concat(n.seconds(), "s")
            },
            g = function(t, e) {
                var n = h.a.duration(b(t, e));
                return "".concat(h.a.duration(n).asMilliseconds().toFixed(0), " ms")
            },
            b = function(t, e) {
                switch (e) {
                    case "nanoseconds":
                        return t / 1e6;
                    case "microseconds":
                        return t / 1e3;
                    case "milliseconds":
                        return t;
                    case "seconds":
                    default:
                        return 1e3 * t
                }
            },
            _ = {
                name: "Metric",
                mixins: [l["a"]],
                props: {
                    metricName: {
                        type: String,
                        required: !0
                    },
                    instance: {
                        type: u["a"],
                        required: !0
                    },
                    tagSelections: {
                        type: Array,
                        default: function() {
                            return [{}]
                        }
                    },
                    statisticTypes: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                },
                data: function() {
                    return {
                        description: "",
                        baseUnit: void 0,
                        measurements: [],
                        statistics: [],
                        errors: []
                    }
                },
                methods: {
                    handleRemove: function(t) {
                        this.$emit("remove", this.metricName, t)
                    },
                    getValue: function(t, e) {
                        var n = t && t.find(function(t) {
                            return t.statistic === e
                        });
                        if (n) {
                            var a = this.statisticTypes[e];
                            switch (a) {
                                case "integer":
                                    return n.value.toFixed(0);
                                case "float":
                                    return n.value.toFixed(4);
                                case "duration":
                                    return v(n.value);
                                case "millis":
                                    return g(n.value);
                                case "bytes":
                                    return m()(n.value);
                                default:
                                    return n.value
                            }
                        }
                    },
                    getLabel: function(t) {
                        return c()(t).filter(function(t) {
                            var e = Object(i["a"])(t, 2),
                                n = e[1];
                            return "undefined" !== typeof n
                        }).map(function(t) {
                            return t.join(":")
                        }).join("\n") || "(no tags)"
                    },
                    fetchMetric: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t(e, n) {
                            var a;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, this.instance.fetchMetric(this.metricName, e);
                                    case 3:
                                        a = t.sent, this.$set(this.errors, n, null), this.$set(this.measurements, n, a.data.measurements), 0 === n && (this.description = a.data.description, this.baseUnit = a.data.baseUnit, this.statistics = a.data.measurements.map(function(t) {
                                            return t.statistic
                                        })), t.next = 13;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t["catch"](0), console.warn("Fetching metric ".concat(this.metricName, " failed:"), t.t0), this.$set(this.errors, n, t.t0);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [0, 9]
                            ])
                        }));

                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchAllTags: function() {
                        return Object(d["m"])(this.tagSelections).pipe(Object(d["h"])(this.fetchMetric))
                    },
                    createSubscription: function() {
                        var t = this;
                        return Object(d["u"])(0, 2500).pipe(Object(d["h"])(t.fetchAllTags)).subscribe({
                            next: function() {}
                        })
                    }
                },
                watch: {
                    tagSelections: function(t, e) {
                        var n = this;
                        t.map(function(t, e) {
                            return [t, e]
                        }).filter(function(t) {
                            var n = Object(i["a"])(t, 1),
                                a = n[0];
                            return !e.includes(a)
                        }).forEach(function(t) {
                            var e = Object(i["a"])(t, 2),
                                a = e[0],
                                s = e[1];
                            return n.fetchMetric(a, s)
                        })
                    }
                }
            },
            C = _,
            y = (n("c39c"), n("2877"));
        n.d(e, "b", function() {
            return b
        });
        var x = Object(y["a"])(C, a, s, !1, null, null, null);
        e["a"] = x.exports
    },
    2363: function(t, e, n) {},
    "28dc": function(t, e, n) {
        "use strict";
        n("ac6a");
        var a = [],
            s = n("37cf");
        s.keys().forEach(function(t) {
            var e = s(t).default;
            e && e.install && a.push(e)
        }), e["a"] = a
    },
    "297c": function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return c
        });
        var a = n("cebc"),
            s = (n("b54a"), n("6bc5")),
            r = n.n(s),
            i = {
                urls: {
                    schemeMatches: !0,
                    wwwMatches: !1,
                    tldMatches: !1
                },
                email: !1,
                phone: !1,
                mention: !1,
                hashtag: !1,
                stripPrefix: !1,
                stripTrailingSlash: !1,
                newWindow: !0,
                truncate: {
                    length: 0,
                    location: "smart"
                },
                className: ""
            },
            o = new r.a(i);

        function c(t) {
            var e = this;
            return this.autolinker = new r.a(Object(a["a"])({}, i, t)),
                function(t) {
                    return e.autolinker.link(t)
                }
        }
        e["b"] = function(t) {
            return o.link(t)
        }
    },
    "2c25": function(t, e, n) {
        "use strict";
        var a = n("4895"),
            s = n.n(a);
        s.a
    },
    "2d42": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "section logfile-view",
                    class: {
                        "is-loading": !t.hasLoaded
                    }
                }, [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n        Fetching logfile failed.\n      ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.hasLoaded ? n("div", {
                    staticClass: "logfile-view-actions"
                }, [n("div", {
                    staticClass: "logfile-view-actions__navigation"
                }, [n("sba-icon-button", {
                    attrs: {
                        disabled: t.atTop,
                        icon: "step-backward",
                        size: "lg",
                        "icon-class": "rotated"
                    },
                    on: {
                        click: t.scrollToTop
                    }
                }), n("sba-icon-button", {
                    attrs: {
                        disabled: t.atBottom,
                        icon: "step-forward",
                        size: "lg",
                        "icon-class": "rotated"
                    },
                    on: {
                        click: t.scrollToBottom
                    }
                })], 1), n("a", {
                    staticClass: "button",
                    attrs: {
                        href: "instances/" + t.instance.id + "/actuator/logfile",
                        target: "_blank"
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "download"
                    }
                }), t._v(" Download\n    ")], 1)]) : t._e(), t.skippedBytes ? n("p", {
                    domProps: {
                        textContent: t._s("skipped " + t.prettyBytes(t.skippedBytes))
                    }
                }) : t._e()])
            },
            s = [],
            r = (n("ac6a"), n("28a5"), n("d76e")),
            i = n("df0d"),
            o = n("297c"),
            c = n("8be7"),
            l = n("1386"),
            u = n.n(l),
            d = n("91c8"),
            p = n.n(d),
            h = n("94df"),
            f = n.n(h),
            m = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                mixins: [r["a"]],
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        atBottom: !0,
                        atTop: !1,
                        skippedBytes: null
                    }
                },
                created: function() {
                    this.ansiUp = new u.a
                },
                mounted: function() {
                    window.addEventListener("scroll", this.onScroll)
                },
                beforeDestroy: function() {
                    window.removeEventListener("scroll", this.onScroll)
                },
                methods: {
                    prettyBytes: f.a,
                    createSubscription: function() {
                        var t = this,
                            e = this;
                        return e.error = null, this.instance.streamLogfile(1e3).pipe(Object(c["t"])(function(t) {
                            return e.skippedBytes = e.skippedBytes || t.skipped
                        }), Object(c["h"])(function(t) {
                            return p()(t.addendum.split(/\r?\n/), 250)
                        }), Object(c["p"])(function(t) {
                            return Object(c["r"])(t, c["d"])
                        }), Object(c["g"])()).subscribe({
                            next: function(n) {
                                e.hasLoaded = !0, n.forEach(function(n) {
                                    var a = document.createElement("pre");
                                    a.innerHTML = Object(o["b"])(t.ansiUp.ansi_to_html(n)), e.$el.appendChild(a)
                                }), e.atBottom && e.scrollToBottom()
                            },
                            error: function(t) {
                                e.hasLoaded = !0, console.warn("Fetching logfile failed:", t), e.error = t
                            }
                        })
                    },
                    onScroll: function() {
                        var t = document.scrollingElement,
                            e = document.documentElement.clientHeight;
                        this.atBottom = e === t.scrollHeight - t.scrollTop, this.atTop = t.scrollTop <= 0
                    },
                    scrollToTop: function() {
                        document.scrollingElement.scrollTop = 0
                    },
                    scrollToBottom: function() {
                        document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/logfile",
                        parent: "instances",
                        path: "logfile",
                        component: this,
                        label: "Logfile",
                        group: "Logging",
                        order: 200,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("logfile")
                        }
                    })
                }
            },
            v = m,
            g = (n("8cdb"), n("2877")),
            b = Object(g["a"])(v, a, s, !1, null, null, null);
        e["default"] = b.exports
    },
    "2d8a": function(t, e, n) {
        "use strict";
        e["a"] = function(t) {
            for (var e = t[0], n = 0; n < (arguments.length <= 1 ? 0 : arguments.length - 1); ++n) e += encodeURIComponent(n + 1 < 1 || arguments.length <= n + 1 ? void 0 : arguments[n + 1]) + t[n + 1];
            return e
        }
    },
    "2dfc": function(t, e, n) {
        "use strict";
        var a = n("b188"),
            s = n.n(a);
        s.a
    },
    "2e0d": function(t, e, n) {},
    "2fb9": function(t, e, n) {
        "use strict";
        var a = n("a093"),
            s = n.n(a);
        s.a
    },
    "310e": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("button", t._g({
                    staticClass: "icon-button",
                    attrs: {
                        type: "button",
                        disabled: t.disabled
                    }
                }, t.$listeners), [n("font-awesome-icon", {
                    class: t.iconClass,
                    attrs: {
                        icon: t.icon,
                        size: t.size
                    }
                })], 1)
            },
            s = [],
            r = {
                props: {
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    icon: {
                        type: [String, Array],
                        required: !0
                    },
                    size: {
                        type: String,
                        default: null
                    },
                    iconClass: {
                        type: String,
                        default: null
                    }
                }
            },
            i = r,
            o = (n("5dda"), n("2877")),
            c = Object(o["a"])(i, a, s, !1, null, null, null);
        e["default"] = c.exports
    },
    "31e4": function(t, e, n) {},
    "34ce": function(t, e, n) {
        "use strict";
        var a = n("fc9c"),
            s = n.n(a);
        s.a
    },
    3627: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section heapdump"
                }, [n("div", [t._m(0), t._m(1), n("a", {
                    staticClass: "button is-primary",
                    attrs: {
                        href: "instances/" + t.instance.id + "/actuator/heapdump",
                        target: "_blank"
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "download"
                    }
                }), t._v(" Download Heap Dump\n    ")], 1)])])
            },
            s = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "message is-warning"
                    }, [n("div", {
                        staticClass: "message-body"
                    }, [t._v("\n        A heap dump may contain "), n("strong", [t._v("sensitive data")]), t._v(". Please handle with care.\n      ")])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "message is-warning"
                    }, [n("div", {
                        staticClass: "message-body"
                    }, [t._v("\n        Dumping the heap may be expensive in terms of cpu and disk space.\n      ")])])
                }
            ],
            r = n("df0d"),
            i = {
                props: {
                    instance: {
                        type: r["a"],
                        required: !0
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/heapdump",
                        parent: "instances",
                        path: "heapdump",
                        component: this,
                        label: "Heap Dump",
                        group: "JVM",
                        order: 800,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("heapdump")
                        }
                    })
                }
            },
            o = i,
            c = (n("16b7"), n("2877")),
            l = Object(c["a"])(o, a, s, !1, null, null, null);
        e["default"] = l.exports
    },
    3792: function(t, e, n) {
        "use strict";
        (function(t) {
            var a = n("aede"),
                s = (n("96cf"), n("3b8d")),
                r = (n("7f7f"), n("5176")),
                i = n.n(r),
                o = n("a8db"),
                c = n("d225"),
                l = n("b0b4"),
                u = n("a2c4"),
                d = n("2d8a"),
                p = n("c1df"),
                h = n.n(p);

            function f() {
                var t = Object(a["a"])(["notifications/filters/", ""]);
                return f = function() {
                    return t
                }, t
            }
            var m = function() {
                function e(t) {
                    var n = t.expiry,
                        a = Object(o["a"])(t, ["expiry"]);
                    Object(c["a"])(this, e), i()(this, a), this.expiry = n ? h()(n) : null
                }
                return Object(l["a"])(e, [{
                    key: "affects",
                    value: function(t) {
                        return !!t && (this.isApplicationFilter ? this.applicationName === t.name : !!this.isInstanceFilter && this.instanceId === t.id)
                    }
                }, {
                    key: "delete",
                    value: function() {
                        var t = Object(s["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", u["a"].delete(Object(d["a"])(f(), this.id)));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "isApplicationFilter",
                    get: function() {
                        return this.hasOwnProperty("applicationName")
                    }
                }, {
                    key: "isInstanceFilter",
                    get: function() {
                        return this.hasOwnProperty("instanceId")
                    }
                }], [{
                    key: "isSupported",
                    value: function() {
                        return Boolean(t.SBA && t.SBA.uiSettings && t.SBA.uiSettings.notificationFilterEnabled)
                    }
                }, {
                    key: "getFilters",
                    value: function() {
                        var t = Object(s["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", u["a"].get("notifications/filters", {
                                            transformResponse: e._transformResponse
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function n() {
                            return t.apply(this, arguments)
                        }
                        return n
                    }()
                }, {
                    key: "addFilter",
                    value: function() {
                        var t = Object(s["a"])(regeneratorRuntime.mark(function t(n, a) {
                            var s;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return s = {
                                            ttl: a
                                        }, n.hasOwnProperty("name") ? s.applicationName = n.name : n.hasOwnProperty("id") && (s.instanceId = n.id), t.abrupt("return", u["a"].post("notifications/filters", null, {
                                            params: s,
                                            transformResponse: e._transformResponse
                                        }));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function n(e, n) {
                            return t.apply(this, arguments)
                        }
                        return n
                    }()
                }, {
                    key: "_transformResponse",
                    value: function(t) {
                        if (!t) return t;
                        var n = JSON.parse(t);
                        return n instanceof Array ? n.map(e._toNotificationFilters).filter(function(t) {
                            return !t.expired
                        }) : e._toNotificationFilters(n)
                    }
                }, {
                    key: "_toNotificationFilters",
                    value: function(t) {
                        return new e(t)
                    }
                }]), e
            }();
            e["a"] = m
        }).call(this, n("c8ba"))
    },
    "37cf": function(t, e, n) {
        var a = {
            "./about/index.vue": "a20f",
            "./applications/index.vue": "dc6e",
            "./instances/auditevents/index.vue": "6440",
            "./instances/beans/index.vue": "c43b",
            "./instances/caches/index.vue": "92af",
            "./instances/configprops/index.vue": "8208",
            "./instances/details/index.vue": "7e47",
            "./instances/env/index.vue": "69ff",
            "./instances/flyway/index.vue": "9bd0",
            "./instances/gateway/index.vue": "f1f7",
            "./instances/heapdump/index.vue": "3627",
            "./instances/httptrace/index.vue": "4baa",
            "./instances/jolokia/index.vue": "e819",
            "./instances/liquibase/index.vue": "cda4",
            "./instances/logfile/index.vue": "2d42",
            "./instances/loggers/index.vue": "5918",
            "./instances/mappings/index.vue": "e325",
            "./instances/metrics/index.vue": "e3af",
            "./instances/scheduledtasks/index.vue": "380a",
            "./instances/sessions/index.vue": "9e78",
            "./instances/shell/index.vue": "82fb",
            "./instances/threaddump/index.vue": "6fa1",
            "./journal/index.vue": "e4a1",
            "./wallboard/index.vue": "3b10"
        };

        function s(t) {
            var e = r(t);
            return n(e)
        }

        function r(t) {
            var e = a[t];
            if (!(e + 1)) {
                var n = new Error("Cannot find module '" + t + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            return e
        }
        s.keys = function() {
            return Object.keys(a)
        }, s.resolve = r, t.exports = s, s.id = "37cf"
    },
    "380a": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    class: {
                        "is-loading": !t.hasLoaded
                    }
                }, [t.hasLoaded ? [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching scheduled tasks failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t.hasData ? t._e() : n("div", {
                    staticClass: "message is-warning"
                }, [n("div", {
                    staticClass: "message-body"
                }, [t._v("\n        No scheduled tasks present.\n      ")])]), t.hasCronData ? [n("h3", {
                    staticClass: "title"
                }, [t._v("\n        Cron\n      ")]), n("table", {
                    staticClass: "table is-fullwidth"
                }, [t._m(0), t._l(t.cron, function(e) {
                    return n("tbody", {
                        key: e.runnable.target
                    }, [n("tr", [n("td", {
                        domProps: {
                            textContent: t._s(e.runnable.target)
                        }
                    }), n("td", {
                        staticClass: "monospaced",
                        domProps: {
                            textContent: t._s(e.expression)
                        }
                    })])])
                })], 2)] : t._e(), t.hasFixedDelayData ? [n("h3", {
                    staticClass: "title"
                }, [t._v("\n        Fixed Delay\n      ")]), n("table", {
                    staticClass: "metrics table is-fullwidth"
                }, [t._m(1), t._l(t.fixedDelay, function(e) {
                    return n("tbody", {
                        key: e.runnable.target
                    }, [n("tr", [n("td", {
                        domProps: {
                            textContent: t._s(e.runnable.target)
                        }
                    }), n("td", {
                        domProps: {
                            textContent: t._s(e.initialDelay)
                        }
                    }), n("td", {
                        domProps: {
                            textContent: t._s(e.interval)
                        }
                    })])])
                })], 2)] : t._e(), t.hasFixedRateData ? [n("h3", {
                    staticClass: "title"
                }, [t._v("\n        Fixed Rate\n      ")]), n("table", {
                    staticClass: "metrics table is-fullwidth"
                }, [t._m(2), t._l(t.fixedRate, function(e) {
                    return n("tbody", {
                        key: e.runnable.target
                    }, [n("tr", [n("td", {
                        domProps: {
                            textContent: t._s(e.runnable.target)
                        }
                    }), n("td", {
                        domProps: {
                            textContent: t._s(e.initialDelay)
                        }
                    }), n("td", {
                        domProps: {
                            textContent: t._s(e.interval)
                        }
                    })])])
                })], 2)] : t._e()] : t._e()], 2)
            },
            s = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("thead", [n("tr", [n("th", [t._v("Runnable")]), n("th", [t._v("Expression")])])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("thead", [n("tr", [n("th", [t._v("Runnable")]), n("th", [t._v("Initial Delay (ms)")]), n("th", [t._v("Interval (ms)")])])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("thead", [n("tr", [n("th", [t._v("Runnable")]), n("th", [t._v("Initial Delay (ms)")]), n("th", [t._v("Interval (ms)")])])])
                }
            ],
            r = (n("96cf"), n("3b8d")),
            i = n("df0d"),
            o = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        cron: null,
                        fixedDelay: null,
                        fixedRate: null
                    }
                },
                computed: {
                    hasCronData: function() {
                        return this.cron && this.cron.length
                    },
                    hasFixedDelayData: function() {
                        return this.fixedDelay && this.fixedDelay.length
                    },
                    hasFixedRateData: function() {
                        return this.fixedRate && this.fixedRate.length
                    },
                    hasData: function() {
                        return this.hasCronData || this.hasFixedDelayData || this.hasFixedRateData
                    }
                },
                created: function() {
                    this.fetchScheduledTasks()
                },
                methods: {
                    fetchScheduledTasks: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, t.prev = 1, t.next = 4, this.instance.fetchScheduledTasks();
                                    case 4:
                                        e = t.sent, this.cron = e.data.cron, this.fixedDelay = e.data.fixedDelay, this.fixedRate = e.data.fixedRate, t.next = 14;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t["catch"](1), console.warn("Fetching scheduled tasks failed:", t.t0), this.error = t.t0;
                                    case 14:
                                        this.hasLoaded = !0;
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 10]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/scheduledtasks",
                        parent: "instances",
                        path: "scheduledtasks",
                        component: this,
                        label: "Scheduled Tasks",
                        group: "Insights",
                        order: 950,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("scheduledtasks")
                        }
                    })
                }
            },
            c = o,
            l = n("2877"),
            u = Object(l["a"])(c, a, s, !1, null, null, null);
        e["default"] = u.exports
    },
    "386e": function(t, e, n) {},
    "39bf": function(t, e, n) {},
    "3b10": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "wallboard section"
                }, [t.applicationsInitialized ? t._e() : n("p", {
                    staticClass: "is-muted is-loading"
                }, [t._v("\n    Loading applications...\n  ")]), t.applicationsInitialized ? n("hex-mesh", {
                    attrs: {
                        items: t.applications,
                        "class-for-item": t.classForApplication
                    },
                    on: {
                        click: t.select
                    },
                    scopedSlots: t._u([{
                        key: "item",
                        fn: function(e) {
                            var a = e.item;
                            return n("div", {
                                key: a.name,
                                staticClass: "hex__body application"
                            }, [n("div", {
                                staticClass: "application__header application__time-ago is-muted"
                            }, [n("sba-time-ago", {
                                attrs: {
                                    date: a.statusTimestamp
                                }
                            })], 1), n("div", {
                                staticClass: "application__body"
                            }, [n("h1", {
                                staticClass: "application__name",
                                domProps: {
                                    textContent: t._s(a.name)
                                }
                            }), n("p", {
                                staticClass: "application__instances is-muted"
                            }, [n("span", {
                                domProps: {
                                    textContent: t._s(a.instances.length)
                                }
                            }), t._v(" instances\n        ")])]), n("h2", {
                                staticClass: "application__footer application__version",
                                domProps: {
                                    textContent: t._s(a.buildVersion)
                                }
                            })])
                        }
                    }], null, !1, 3400248571)
                }) : t._e()], 1)
            },
            s = [],
            r = (n("7f7f"), function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "on-resize",
                        rawName: "v-on-resize",
                        value: t.onResize,
                        expression: "onResize"
                    }],
                    staticClass: "hex-mesh"
                }, [n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: t.meshWidth,
                        height: t.meshHeight
                    }
                }, [n("defs", [n("clipPath", {
                    attrs: {
                        id: "hex-clip"
                    }
                }, [n("polygon", {
                    attrs: {
                        points: t.hexPath
                    }
                })])]), [t._l(t.rows, function(e) {
                    return t._l(t.cols + (e % 2 ? 0 : -1), function(a) {
                        return n("g", {
                            key: a + "-" + e,
                            staticClass: "hex",
                            class: t.classForItem(t.item(a, e)),
                            attrs: {
                                transform: t.translate(a, e)
                            },
                            on: {
                                click: function(n) {
                                    return t.click(n, a, e)
                                }
                            }
                        }, [n("polygon", {
                            attrs: {
                                points: t.hexPath
                            }
                        }), t.item(a, e) ? n("foreignObject", {
                            staticStyle: {
                                "pointer-events": "none"
                            },
                            attrs: {
                                x: "0",
                                y: "0",
                                width: t.hexWidth,
                                height: t.hexHeight
                            }
                        }, [t._t("item", null, {
                            item: t.item(a, e)
                        })], 2) : t._e()], 1)
                    })
                })]], 2)])
            }),
            i = [],
            o = n("5d73"),
            c = n.n(o),
            l = n("1b81"),
            u = n.n(l),
            d = n("6dd8"),
            p = new u.a,
            h = function(t, e) {
                f(t);
                var n = new d["a"](e.value);
                n.observe(t), p.set(t, n)
            },
            f = function(t) {
                var e = p.get(t);
                e && (e.disconnect(), p.delete(t))
            },
            m = {
                bind: h,
                update: function(t, e) {
                    e.value !== e.oldValue && h(t, e)
                },
                unbind: f
            },
            v = function(t, e) {
                var n = Math.floor(e / 2);
                return e * t - n
            },
            g = function(t, e, n, a) {
                var s = t / n / Math.sqrt(3),
                    r = 2 * e / (3 * a + 1);
                return Math.min(s, r)
            },
            b = function(t, e, n) {
                var a = 1,
                    s = 1,
                    r = g(e, n, a, s);
                while (t > v(a, s)) {
                    var i = g(e, n, a + 1, s),
                        o = g(e, n, a, s + 1);
                    i > o ? (r = i, a++) : (r = o, s++)
                }
                return {
                    cols: a,
                    rows: s,
                    sideLength: r
                }
            },
            _ = {
                props: {
                    items: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    classForItem: {
                        type: Function,
                        default: function() {}
                    }
                },
                directives: {
                    onResize: m
                },
                data: function() {
                    return {
                        cols: 1,
                        rows: 1,
                        sideLength: 1
                    }
                },
                methods: {
                    translate: function(t, e) {
                        var n = (t - 1) * this.hexWidth + (e % 2 ? 0 : this.hexWidth / 2),
                            a = (e - 1) * this.sideLength * 1.5;
                        return "translate(".concat(n, ",").concat(a, ")")
                    },
                    item: function(t, e) {
                        var n = (e - 1) * this.cols - Math.max(Math.floor((e - 1) / 2), 0),
                            a = n + t - 1;
                        return this.items[a]
                    },
                    point: function(t) {
                        var e = .95 * this.sideLength,
                            n = this.hexHeight / 2,
                            a = this.hexWidth / 2;
                        return "".concat(a + e * Math.cos((1 + 2 * t) * Math.PI / 6), ",").concat(n + e * Math.sin((1 + 2 * t) * Math.PI / 6))
                    },
                    click: function(t, e, n) {
                        var a = this.item(e, n);
                        a && this.$emit("click", a, t)
                    },
                    updateLayout: function() {
                        if (this.$el) {
                            var t = this.$el.getBoundingClientRect(),
                                e = b(this.itemCount, t.width, t.height);
                            this.cols = e.cols, this.rows = e.rows, this.sideLength = e.sideLength
                        }
                    },
                    onResize: function(t) {
                        var e = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var s, r = c()(t); !(e = (s = r.next()).done); e = !0) {
                                var i = s.value;
                                i.target === this.$el && this.updateLayout()
                            }
                        } catch (o) {
                            n = !0, a = o
                        } finally {
                            try {
                                e || null == r.return || r.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                    }
                },
                computed: {
                    itemCount: function() {
                        return this.items.length
                    },
                    hexPath: function() {
                        return "".concat(this.point(0), " ").concat(this.point(1), " ").concat(this.point(2), " ").concat(this.point(3), " ").concat(this.point(4), " ").concat(this.point(5))
                    },
                    hexHeight: function() {
                        return 2 * this.sideLength
                    },
                    hexWidth: function() {
                        return this.sideLength * Math.sqrt(3)
                    },
                    meshWidth: function() {
                        return this.hexWidth * this.cols
                    },
                    meshHeight: function() {
                        return this.sideLength * (2 + 1.5 * (this.rows - 1))
                    }
                },
                watch: {
                    sideLength: function(t) {
                        this.$el.style["font-size"] = "".concat(t / 9.5, "px")
                    },
                    itemCount: {
                        handler: "updateLayout",
                        immediate: !0
                    }
                }
            },
            C = _,
            y = (n("8fbb"), n("2877")),
            x = Object(y["a"])(C, r, i, !1, null, null, null),
            w = x.exports,
            k = {
                components: {
                    hexMesh: w
                },
                props: {
                    applications: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    error: {
                        type: Error,
                        default: null
                    },
                    applicationsInitialized: {
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    classForApplication: function(t) {
                        return t ? "UP" === t.status ? "is-selectable is-primary" : "RESTRICTED" === t.status ? "is-selectable is-warning" : "DOWN" === t.status ? "is-selectable is-danger" : "OUT_OF_SERVICE" === t.status ? "is-selectable is-danger" : (t.status, "is-selectable is-light") : null
                    },
                    select: function(t) {
                        1 === t.instances.length ? this.$router.push({
                            name: "instances/details",
                            params: {
                                instanceId: t.instances[0].id
                            }
                        }) : this.$router.push({
                            name: "applications",
                            params: {
                                selected: t.name
                            }
                        })
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        path: "/wallboard",
                        name: "wallboard",
                        label: "Wallboard",
                        order: -100,
                        component: this
                    })
                }
            },
            j = k,
            O = (n("77264"), Object(y["a"])(j, a, s, !1, null, null, null));
        e["default"] = O.exports
    },
    "3b8f": function(t, e, n) {},
    "40b7": function(t, e, n) {},
    "42eb": function(t, e, n) {},
    4678: function(t, e, n) {
        var a = {
            "./af": "2bfb",
            "./af.js": "2bfb",
            "./ar": "8e73",
            "./ar-dz": "a356",
            "./ar-dz.js": "a356",
            "./ar-kw": "423e",
            "./ar-kw.js": "423e",
            "./ar-ly": "1cfd",
            "./ar-ly.js": "1cfd",
            "./ar-ma": "0a84",
            "./ar-ma.js": "0a84",
            "./ar-sa": "8230",
            "./ar-sa.js": "8230",
            "./ar-tn": "6d83",
            "./ar-tn.js": "6d83",
            "./ar.js": "8e73",
            "./az": "485c",
            "./az.js": "485c",
            "./be": "1fc1",
            "./be.js": "1fc1",
            "./bg": "84aa",
            "./bg.js": "84aa",
            "./bm": "a7fa",
            "./bm.js": "a7fa",
            "./bn": "9043",
            "./bn.js": "9043",
            "./bo": "d26a",
            "./bo.js": "d26a",
            "./br": "6887",
            "./br.js": "6887",
            "./bs": "2554",
            "./bs.js": "2554",
            "./ca": "d716",
            "./ca.js": "d716",
            "./cs": "3c0d",
            "./cs.js": "3c0d",
            "./cv": "03ec",
            "./cv.js": "03ec",
            "./cy": "9797",
            "./cy.js": "9797",
            "./da": "0f14",
            "./da.js": "0f14",
            "./de": "b469",
            "./de-at": "b3eb",
            "./de-at.js": "b3eb",
            "./de-ch": "bb71",
            "./de-ch.js": "bb71",
            "./de.js": "b469",
            "./dv": "598a",
            "./dv.js": "598a",
            "./el": "8d47",
            "./el.js": "8d47",
            "./en-SG": "cdab",
            "./en-SG.js": "cdab",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50",
            "./eo": "65db",
            "./eo.js": "65db",
            "./es": "898b",
            "./es-do": "0a3c",
            "./es-do.js": "0a3c",
            "./es-us": "55c9",
            "./es-us.js": "55c9",
            "./es.js": "898b",
            "./et": "ec18",
            "./et.js": "ec18",
            "./eu": "0ff2",
            "./eu.js": "0ff2",
            "./fa": "8df4",
            "./fa.js": "8df4",
            "./fi": "81e9",
            "./fi.js": "81e9",
            "./fo": "0721",
            "./fo.js": "0721",
            "./fr": "9f26",
            "./fr-ca": "d9f8",
            "./fr-ca.js": "d9f8",
            "./fr-ch": "0e49",
            "./fr-ch.js": "0e49",
            "./fr.js": "9f26",
            "./fy": "7118",
            "./fy.js": "7118",
            "./ga": "5120",
            "./ga.js": "5120",
            "./gd": "f6b4",
            "./gd.js": "f6b4",
            "./gl": "8840",
            "./gl.js": "8840",
            "./gom-latn": "0caa",
            "./gom-latn.js": "0caa",
            "./gu": "e0c5",
            "./gu.js": "e0c5",
            "./he": "c7aa",
            "./he.js": "c7aa",
            "./hi": "dc4d",
            "./hi.js": "dc4d",
            "./hr": "4ba9",
            "./hr.js": "4ba9",
            "./hu": "5b14",
            "./hu.js": "5b14",
            "./hy-am": "d6b6",
            "./hy-am.js": "d6b6",
            "./id": "5038",
            "./id.js": "5038",
            "./is": "0558",
            "./is.js": "0558",
            "./it": "6e98",
            "./it-ch": "6f12",
            "./it-ch.js": "6f12",
            "./it.js": "6e98",
            "./ja": "079e",
            "./ja.js": "079e",
            "./jv": "b540",
            "./jv.js": "b540",
            "./ka": "201b",
            "./ka.js": "201b",
            "./kk": "6d79",
            "./kk.js": "6d79",
            "./km": "e81d",
            "./km.js": "e81d",
            "./kn": "3e92",
            "./kn.js": "3e92",
            "./ko": "22f8",
            "./ko.js": "22f8",
            "./ku": "2421",
            "./ku.js": "2421",
            "./ky": "9609",
            "./ky.js": "9609",
            "./lb": "440c",
            "./lb.js": "440c",
            "./lo": "b29d",
            "./lo.js": "b29d",
            "./lt": "26f9",
            "./lt.js": "26f9",
            "./lv": "b97c",
            "./lv.js": "b97c",
            "./me": "293c",
            "./me.js": "293c",
            "./mi": "688b",
            "./mi.js": "688b",
            "./mk": "6909",
            "./mk.js": "6909",
            "./ml": "02fb",
            "./ml.js": "02fb",
            "./mn": "958b",
            "./mn.js": "958b",
            "./mr": "39bd",
            "./mr.js": "39bd",
            "./ms": "ebe4",
            "./ms-my": "6403",
            "./ms-my.js": "6403",
            "./ms.js": "ebe4",
            "./mt": "1b45",
            "./mt.js": "1b45",
            "./my": "8689",
            "./my.js": "8689",
            "./nb": "6ce3",
            "./nb.js": "6ce3",
            "./ne": "3a39",
            "./ne.js": "3a39",
            "./nl": "facd",
            "./nl-be": "db29",
            "./nl-be.js": "db29",
            "./nl.js": "facd",
            "./nn": "b84c",
            "./nn.js": "b84c",
            "./pa-in": "f3ff",
            "./pa-in.js": "f3ff",
            "./pl": "8d57",
            "./pl.js": "8d57",
            "./pt": "f260",
            "./pt-br": "d2d4",
            "./pt-br.js": "d2d4",
            "./pt.js": "f260",
            "./ro": "972c",
            "./ro.js": "972c",
            "./ru": "957c",
            "./ru.js": "957c",
            "./sd": "6784",
            "./sd.js": "6784",
            "./se": "ffff",
            "./se.js": "ffff",
            "./si": "eda5",
            "./si.js": "eda5",
            "./sk": "7be6",
            "./sk.js": "7be6",
            "./sl": "8155",
            "./sl.js": "8155",
            "./sq": "c8f3",
            "./sq.js": "c8f3",
            "./sr": "cf1e",
            "./sr-cyrl": "13e9",
            "./sr-cyrl.js": "13e9",
            "./sr.js": "cf1e",
            "./ss": "52bd",
            "./ss.js": "52bd",
            "./sv": "5fbd",
            "./sv.js": "5fbd",
            "./sw": "74dc",
            "./sw.js": "74dc",
            "./ta": "3de5",
            "./ta.js": "3de5",
            "./te": "5cbb",
            "./te.js": "5cbb",
            "./tet": "576c",
            "./tet.js": "576c",
            "./tg": "3b1b",
            "./tg.js": "3b1b",
            "./th": "10e8",
            "./th.js": "10e8",
            "./tl-ph": "0f38",
            "./tl-ph.js": "0f38",
            "./tlh": "cf75",
            "./tlh.js": "cf75",
            "./tr": "0e81",
            "./tr.js": "0e81",
            "./tzl": "cf51",
            "./tzl.js": "cf51",
            "./tzm": "c109",
            "./tzm-latn": "b53d",
            "./tzm-latn.js": "b53d",
            "./tzm.js": "c109",
            "./ug-cn": "6117",
            "./ug-cn.js": "6117",
            "./uk": "ada2",
            "./uk.js": "ada2",
            "./ur": "5294",
            "./ur.js": "5294",
            "./uz": "2e8c",
            "./uz-latn": "010e",
            "./uz-latn.js": "010e",
            "./uz.js": "2e8c",
            "./vi": "2921",
            "./vi.js": "2921",
            "./x-pseudo": "fd7e",
            "./x-pseudo.js": "fd7e",
            "./yo": "7f33",
            "./yo.js": "7f33",
            "./zh-cn": "5c3a",
            "./zh-cn.js": "5c3a",
            "./zh-hk": "49ab",
            "./zh-hk.js": "49ab",
            "./zh-tw": "90ea",
            "./zh-tw.js": "90ea"
        };

        function s(t) {
            var e = r(t);
            return n(e)
        }

        function r(t) {
            var e = a[t];
            if (!(e + 1)) {
                var n = new Error("Cannot find module '" + t + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            return e
        }
        s.keys = function() {
            return Object.keys(a)
        }, s.resolve = r, t.exports = s, s.id = "4678"
    },
    "46df": function(t, e, n) {},
    4700: function(t, e, n) {
        "use strict";
        var a = n("cebc"),
            s = n("bc17"),
            r = n("4611"),
            i = n("5f8f"),
            o = n("ce24"),
            c = n("fd32"),
            l = n("f1df"),
            u = n("b607");
        e["a"] = Object(a["a"])({}, s, r, i, o, c, l, u)
    },
    4712: function(t, e, n) {},
    4895: function(t, e, n) {},
    "4b10": function(t, e, n) {},
    "4baa": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    class: {
                        "is-loading": !t.hasLoaded
                    }
                }, [t.hasLoaded ? [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching traces failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.hasLoaded ? [n("div", {
                    staticClass: "field is-horizontal"
                }, [n("div", {
                    staticClass: "field-body"
                }, [n("div", {
                    staticClass: "field has-addons"
                }, [n("p", {
                    staticClass: "control is-expanded has-icons-left"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.filter,
                        expression: "filter"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "search",
                        placeholder: "Path"
                    },
                    domProps: {
                        value: t.filter
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.filter = e.target.value)
                        }
                    }
                }), n("span", {
                    staticClass: "icon is-small is-left"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "filter"
                    }
                })], 1)]), n("p", {
                    staticClass: "control"
                }, [n("span", {
                    staticClass: "button is-static"
                }, [n("span", {
                    domProps: {
                        textContent: t._s(t.filteredTraces.length)
                    }
                }), t._v("\n                /\n                "), n("span", {
                    domProps: {
                        textContent: t._s(t.traces.length)
                    }
                })])])]), n("div", {
                    staticClass: "field is-narrow has-addons"
                }, [t._m(0), n("p", {
                    staticClass: "control"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.limit,
                        expression: "limit"
                    }],
                    staticClass: "input httptraces__limit",
                    attrs: {
                        min: "0",
                        type: "number",
                        placeholder: "trace limit"
                    },
                    domProps: {
                        value: t.limit
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.limit = e.target.value)
                        }
                    }
                })])])])]), n("div", {
                    staticClass: "field-body"
                }, [n("div", {
                    staticClass: "field is-narrow"
                }, [n("div", {
                    staticClass: "control"
                }, [n("label", {
                    staticClass: "checkbox"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.showSuccess,
                        expression: "showSuccess"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.showSuccess) ? t._i(t.showSuccess, null) > -1 : t.showSuccess
                    },
                    on: {
                        change: function(e) {
                            var n = t.showSuccess,
                                a = e.target,
                                s = !!a.checked;
                            if (Array.isArray(n)) {
                                var r = null,
                                    i = t._i(n, r);
                                a.checked ? i < 0 && (t.showSuccess = n.concat([r])) : i > -1 && (t.showSuccess = n.slice(0, i).concat(n.slice(i + 1)))
                            } else t.showSuccess = s
                        }
                    }
                }), t._v("\n              success\n            ")])])]), n("div", {
                    staticClass: "field is-narrow"
                }, [n("div", {
                    staticClass: "control"
                }, [n("label", {
                    staticClass: "checkbox"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.showClientErrors,
                        expression: "showClientErrors"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.showClientErrors) ? t._i(t.showClientErrors, null) > -1 : t.showClientErrors
                    },
                    on: {
                        change: function(e) {
                            var n = t.showClientErrors,
                                a = e.target,
                                s = !!a.checked;
                            if (Array.isArray(n)) {
                                var r = null,
                                    i = t._i(n, r);
                                a.checked ? i < 0 && (t.showClientErrors = n.concat([r])) : i > -1 && (t.showClientErrors = n.slice(0, i).concat(n.slice(i + 1)))
                            } else t.showClientErrors = s
                        }
                    }
                }), t._v("\n              client errors\n            ")])])]), n("div", {
                    staticClass: "field is-narrow"
                }, [n("div", {
                    staticClass: "control"
                }, [n("label", {
                    staticClass: "checkbox"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.showServerErrors,
                        expression: "showServerErrors"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.showServerErrors) ? t._i(t.showServerErrors, null) > -1 : t.showServerErrors
                    },
                    on: {
                        change: function(e) {
                            var n = t.showServerErrors,
                                a = e.target,
                                s = !!a.checked;
                            if (Array.isArray(n)) {
                                var r = null,
                                    i = t._i(n, r);
                                a.checked ? i < 0 && (t.showServerErrors = n.concat([r])) : i > -1 && (t.showServerErrors = n.slice(0, i).concat(n.slice(i + 1)))
                            } else t.showServerErrors = s
                        }
                    }
                }), t._v("\n              server errors\n            ")])])]), t.actuatorPath ? n("div", {
                    staticClass: "field is-narrow"
                }, [n("div", {
                    staticClass: "control"
                }, [n("label", {
                    staticClass: "checkbox"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.excludeActuator,
                        expression: "excludeActuator"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.excludeActuator) ? t._i(t.excludeActuator, null) > -1 : t.excludeActuator
                    },
                    on: {
                        change: function(e) {
                            var n = t.excludeActuator,
                                a = e.target,
                                s = !!a.checked;
                            if (Array.isArray(n)) {
                                var r = null,
                                    i = t._i(n, r);
                                a.checked ? i < 0 && (t.excludeActuator = n.concat([r])) : i > -1 && (t.excludeActuator = n.slice(0, i).concat(n.slice(i + 1)))
                            } else t.excludeActuator = s
                        }
                    }
                }), t._v("\n              exclude "), n("span", {
                    domProps: {
                        textContent: t._s(t.actuatorPath)
                    }
                }), t._v("/**\n            ")])])]) : t._e()]), n("sba-traces-chart", {
                    attrs: {
                        traces: t.filteredTraces
                    },
                    on: {
                        selected: function(e) {
                            return t.selection = e
                        }
                    }
                }), n("sba-traces-list", {
                    attrs: {
                        traces: t.selectedTraces
                    }
                })] : t._e()] : t._e()], 2)
            },
            s = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("p", {
                        staticClass: "control"
                    }, [n("span", {
                        staticClass: "button is-static"
                    }, [t._v("\n                limit\n              ")])])
                }
            ],
            r = n("75fc"),
            i = (n("55dd"), n("96cf"), n("3b8d")),
            o = n("768b"),
            c = (n("f559"), n("6762"), n("2fdb"), n("e814")),
            l = n.n(c),
            u = n("5176"),
            d = n.n(u),
            p = n("a8db"),
            h = n("d225"),
            f = n("b0b4"),
            m = n("d76e"),
            v = n("df0d"),
            g = n("8be7"),
            b = n("c1df"),
            _ = n.n(b),
            C = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "trace-chart"
                }, [t.tooltipSelection ? n("div", {
                    staticClass: "trace-chart__tooltip",
                    class: "trace-chart__tooltip--" + (this.x(t.tooltipSelection[0]) > this.width / 2 ? "left" : "right")
                }, [n("table", {
                    staticClass: "is-narrow is-size-7"
                }, [n("tr", [n("th", [t._v("total requests")]), n("td", {
                    domProps: {
                        textContent: t._s(t.tooltipContent.totalCount)
                    }
                })]), n("tr", [n("th", [t._v("successful")]), n("td", {
                    domProps: {
                        textContent: t._s(t.tooltipContent.totalSuccess)
                    }
                })]), n("tr", [n("th", [t._v("status 4xx")]), n("td", {
                    domProps: {
                        textContent: t._s(t.tooltipContent.totalClientErrors)
                    }
                })]), n("tr", [n("th", [t._v("status 5xx")]), n("td", {
                    domProps: {
                        textContent: t._s(t.tooltipContent.totalServerErrors)
                    }
                })]), n("tr", [n("th", [t._v("max duration")]), n("td", {
                    domProps: {
                        textContent: t._s(t.tooltipContent.maxTime + "ms")
                    }
                })]), n("tr", [n("th", [t._v("ø duration")]), n("td", {
                    domProps: {
                        textContent: t._s(t.tooltipContent.avgTime + "ms")
                    }
                })])])]) : t._e(), n("svg", {
                    staticClass: "trace-chart__svg"
                })])
            },
            y = [],
            x = (n("ac6a"), n("cebc")),
            w = n("4700"),
            k = n("fd32"),
            j = 1e3,
            O = {
                props: {
                    traces: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {
                        brushSelection: null,
                        hovered: null
                    }
                },
                computed: {
                    chartData: function() {
                        if (this.traces.length <= 0) return [];
                        for (var t = [], e = _()().valueOf(), n = this.traces.length - 1, a = this.traces[this.traces.length - 1].timestamp.valueOf(), s = Math.floor(a.valueOf() / j) * j; s < e; s += j) {
                            var r = {
                                timeStart: s,
                                timeEnd: s + j,
                                totalCount: 0,
                                totalSuccess: 0,
                                totalClientErrors: 0,
                                totalServerErrors: 0,
                                totalTime: 0,
                                maxTime: 0
                            };
                            while (n >= 0 && this.traces[n].timestamp.valueOf() < s + j) {
                                var i = this.traces[n];
                                r.totalCount++, i.isSuccess() ? r.totalSuccess++ : i.isClientError() ? r.totalClientErrors++ : i.isServerError() && r.totalServerErrors++, i.timeTaken && (r.totalTime += i.timeTaken, r.maxTime = Math.max(r.maxTime, i.timeTaken)), n--
                            }
                            t.push(r)
                        }
                        return t
                    },
                    tooltipSelection: function() {
                        return this.brushSelection ? this.brushSelection : this.hovered ? [this.hovered, this.hovered + j] : null
                    },
                    tooltipContent: function() {
                        var t = this.tooltipSelection,
                            e = this.chartData.filter(function(e) {
                                return e.timeStart.valueOf() >= t[0] && e.timeStart.valueOf() < t[1]
                            }).reduce(function(t, e) {
                                return {
                                    totalCount: t.totalCount + e.totalCount,
                                    totalSuccess: t.totalSuccess + e.totalSuccess,
                                    totalClientErrors: t.totalClientErrors + e.totalClientErrors,
                                    totalServerErrors: t.totalServerErrors + e.totalServerErrors,
                                    totalTime: t.totalTime + e.totalTime,
                                    maxTime: Math.max(t.maxTime, e.maxTime)
                                }
                            }, {
                                totalCount: 0,
                                totalSuccess: 0,
                                totalClientErrors: 0,
                                totalServerErrors: 0,
                                totalTime: 0,
                                maxTime: 0
                            });
                        return Object(x["a"])({}, e, {
                            avgTime: e.totalCount > 0 ? Math.floor(e.totalTime / e.totalCount) : 0
                        })
                    }
                },
                methods: {
                    drawChart: function(t) {
                        var e = this,
                            n = w["a"].scaleTime().range([0, e.width]).domain(w["a"].extent(t, function(t) {
                                return t.timeStart
                            }));
                        this.x = n;
                        var a = w["a"].scaleLinear().range([e.height, 0]).domain([0, w["a"].max(t, function(t) {
                                return t.totalCount
                            })]),
                            s = w["a"].area().x(function(t) {
                                return n(t.data.timeStart)
                            }).y0(function(t) {
                                return a(t[0])
                            }).y1(function(t) {
                                return a(t[1])
                            }),
                            r = w["a"].stack().keys(["totalSuccess", "totalClientErrors", "totalServerErrors"]),
                            i = e.areas.selectAll(".trace-chart__area").data(r(t));
                        i.enter().append("path").merge(i).attr("class", function(t) {
                            return "trace-chart__area trace-chart__area--".concat(t.key)
                        }).attr("d", s), i.exit().remove(), e.xAxis.call(w["a"].axisBottom(n).ticks(10).tickFormat(function(t) {
                            return _()(t).format("HH:mm:ss")
                        })), e.yAxis.call(w["a"].axisRight(a).ticks(Math.min(5, w["a"].max(t, function(t) {
                            return t.totalCount
                        }))).tickSize(this.width)).call(function(t) {
                            return t.selectAll(".tick text").attr("x", -2).attr("dy", 2).attr("text-anchor", "end")
                        });
                        var o = w["a"].brushX().extent([
                            [0, 0],
                            [e.width, e.height]
                        ]).on("start", function() {
                            k["event"].selection && (e.isBrushing = !0, e.hovered = null)
                        }).on("brush", function() {
                            if (null !== k["event"].sourceEvent && "brush" !== k["event"].sourceEvent.type && k["event"].selection) {
                                var t = Math.floor(n.invert(k["event"].selection[0]) / j) * j,
                                    a = Math.ceil(n.invert(k["event"].selection[1]) / j) * j;
                                w["a"].select(this).call(k["event"].target.move, [t, a].map(n)), e.brushSelection = [t, a]
                            }
                        }).on("end", function() {
                            e.isBrushing = !1, k["event"].selection || (e.brushSelection = null)
                        });
                        e.brushGroup.call(o).on("mousemove", function() {
                            if (!e.isBrushing) {
                                var t = w["a"].mouse(e.brushGroup.select(".overlay").node())[0];
                                e.hovered = Math.floor(n.invert(t) / j) * j
                            }
                        }).on("mouseout", function() {
                            e.hovered = null
                        }), o.move(e.brushGroup, e.brushSelection ? e.brushSelection.map(n) : null)
                    }
                },
                mounted: function() {
                    var t = {
                        top: 20,
                        right: 20,
                        bottom: 30,
                        left: 20
                    };
                    this.width = this.$el.getBoundingClientRect().width - t.left - t.right, this.height = this.$el.getBoundingClientRect().height - t.top - t.bottom, this.chartLayer = w["a"].select(this.$el.querySelector(".trace-chart__svg")).append("g").attr("transform", "translate(".concat(t.left, ",").concat(t.top, ")")), this.xAxis = this.chartLayer.append("g").attr("class", "trace-chart__axis-x").attr("transform", "translate(0,".concat(this.height, ")")), this.yAxis = this.chartLayer.append("g").attr("class", "trace-chart__axis-y").attr("stroke", null), this.areas = this.chartLayer.append("g"), this.hover = this.chartLayer.append("path").attr("class", "trace-chart__hover").attr("opacity", 0), this.brushGroup = this.chartLayer.append("g").attr("class", "trace-chart__brush"), this.drawChart(this.chartData)
                },
                watch: {
                    chartData: "drawChart",
                    hovered: function(t) {
                        t ? this.hover.attr("opacity", 1).attr("d", "M".concat(this.x(t), ",").concat(this.height, " ").concat(this.x(t), ",0")) : this.hover.attr("opacity", 0)
                    },
                    brushSelection: function(t) {
                        this.$emit("selected", t)
                    }
                }
            },
            S = O,
            P = (n("2c25"), n("2877")),
            E = Object(P["a"])(S, C, y, !1, null, null, null),
            R = E.exports,
            L = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("table", {
                    staticClass: "httptraces table is-hoverable is-fullwidth"
                }, [t._m(0), n("tbody", [t._l(t.traces, function(e) {
                    return [n("tr", {
                        key: e.key,
                        staticClass: "is-selectable",
                        class: {
                            "httptraces__trace---is-detailed": t.showDetails[e.key]
                        },
                        on: {
                            click: function(n) {
                                t.showDetails[e.key] ? t.$delete(t.showDetails, e.key) : t.$set(t.showDetails, e.key, !0)
                            }
                        }
                    }, [n("td", {
                        staticClass: "httptraces__trace-timestamp",
                        domProps: {
                            textContent: t._s(e.timestamp.format("L HH:mm:ss.SSS"))
                        }
                    }), n("td", {
                        staticClass: "httptraces__trace-method",
                        domProps: {
                            textContent: t._s(e.request.method)
                        }
                    }), n("td", {
                        staticClass: "httptraces__trace-uri",
                        domProps: {
                            textContent: t._s(e.request.uri)
                        }
                    }), n("td", {
                        staticClass: "httptraces__trace-status"
                    }, [n("span", {
                        staticClass: "tag",
                        class: {
                            "is-success": e.isSuccess(),
                            "is-warning": e.isClientError(),
                            "is-danger": e.isServerError()
                        },
                        domProps: {
                            textContent: t._s(e.response.status)
                        }
                    })]), n("td", {
                        staticClass: "httptraces__trace-contentType",
                        domProps: {
                            textContent: t._s(e.contentType)
                        }
                    }), n("td", {
                        staticClass: "httptraces__trace-contentLength",
                        domProps: {
                            textContent: t._s(e.contentLength ? t.prettyBytes(e.contentLength) : "")
                        }
                    }), n("td", {
                        staticClass: "httptraces__trace-timeTaken",
                        domProps: {
                            textContent: t._s(null !== e.timeTaken && "undefined" !== typeof e.timeTaken ? e.timeTaken + " ms" : "")
                        }
                    })]), t.showDetails[e.key] ? n("tr", {
                        key: e.key + "-detail"
                    }, [n("td", {
                        attrs: {
                            colspan: "7"
                        }
                    }, [n("pre", {
                        staticClass: "httptraces__trace-detail",
                        domProps: {
                            textContent: t._s(t.toJson(e))
                        }
                    })])]) : t._e()]
                }), 0 === t.traces.length ? n("tr", [n("td", {
                    staticClass: "is-muted",
                    attrs: {
                        colspan: "7"
                    }
                }, [t._v("\n        No traces found.\n      ")])]) : t._e()], 2)])
            },
            A = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("thead", [n("tr", [n("th", {
                        staticClass: "httptraces__trace-timestamp"
                    }, [t._v("\n        Timestamp\n      ")]), n("th", {
                        staticClass: "httptraces__trace-method"
                    }, [t._v("\n        Method\n      ")]), n("th", {
                        staticClass: "httptraces__trace-uri"
                    }, [t._v("\n        Path\n      ")]), n("th", {
                        staticClass: "httptraces__trace-status"
                    }, [t._v("\n        Status\n      ")]), n("th", {
                        staticClass: "httptraces__trace-contentType"
                    }, [t._v("\n        Content-Type\n      ")]), n("th", {
                        staticClass: "httptraces__trace-contentLength"
                    }, [t._v("\n        Length\n      ")]), n("th", {
                        staticClass: "httptraces__trace-timeTaken"
                    }, [t._v("\n        Time\n      ")])])])
                }
            ],
            F = n("f499"),
            M = n.n(F),
            T = n("94df"),
            $ = n.n(T),
            I = {
                props: {
                    traces: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {
                        showDetails: {}
                    }
                },
                methods: {
                    prettyBytes: $.a,
                    toJson: function(t) {
                        return M()(t, null, 4)
                    }
                }
            },
            N = I,
            B = (n("dc74"), Object(P["a"])(N, L, A, !1, null, null, null)),
            D = B.exports,
            q = function(t, e) {
                return t ? function(n, a) {
                    return t(n, a) && e(n, a)
                } : e
            },
            U = function() {
                function t(e) {
                    var n = e.timestamp,
                        a = Object(p["a"])(e, ["timestamp"]);
                    Object(h["a"])(this, t), d()(this, a), this.timestamp = _()(n)
                }
                return Object(f["a"])(t, [{
                    key: "compareTo",
                    value: function(t) {
                        return this.timestamp - t.timestamp
                    }
                }, {
                    key: "isSuccess",
                    value: function() {
                        return this.response.status <= 399
                    }
                }, {
                    key: "isClientError",
                    value: function() {
                        return this.response.status >= 400 && this.response.status <= 499
                    }
                }, {
                    key: "isServerError",
                    value: function() {
                        return this.response.status >= 500 && this.response.status <= 599
                    }
                }, {
                    key: "key",
                    get: function() {
                        return "".concat(this.timestamp, "-").concat(this.request.method, "-").concat(this.request.uri)
                    }
                }, {
                    key: "contentLength",
                    get: function() {
                        var t = this.response.headers["Content-Length"] && this.response.headers["Content-Length"][0];
                        return t && /^\d+$/.test(t) ? l()(t) : null
                    }
                }, {
                    key: "contentType",
                    get: function() {
                        var t = this.response.headers["Content-Type"] && this.response.headers["Content-Type"][0];
                        if (t) {
                            var e = t.indexOf(";");
                            return e >= 0 ? t.substring(0, e) : t
                        }
                        return null
                    }
                }]), t
            }(),
            H = {
                props: {
                    instance: {
                        type: v["a"],
                        required: !0
                    }
                },
                mixins: [m["a"]],
                components: {
                    sbaTracesList: D,
                    sbaTracesChart: R
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        traces: [],
                        filter: null,
                        limit: 1e3,
                        excludeActuator: !0,
                        showSuccess: !0,
                        showClientErrors: !0,
                        showServerErrors: !0,
                        selection: null
                    }
                },
                computed: {
                    actuatorPath: function() {
                        if (this.instance.registration.managementUrl.includes(this.instance.registration.serviceUrl)) {
                            var t = this.instance.registration.managementUrl.substring(this.instance.registration.serviceUrl.length);
                            if (t.length > 0) return t.startsWith("/") ? t : "/".concat(t)
                        }
                        return null
                    },
                    filteredTraces: function() {
                        var t = this.getFilterFn();
                        return t ? this.traces.filter(t) : this.traces
                    },
                    selectedTraces: function() {
                        if (null === this.selection) return this.filteredTraces;
                        var t = Object(o["a"])(this.selection, 2),
                            e = t[0],
                            n = t[1];
                        return this.filteredTraces.filter(function(t) {
                            return !t.timestamp.isBefore(e) && !t.timestamp.isAfter(n)
                        })
                    },
                    lastTimestamp: function() {
                        return this.traces.length > 0 ? this.traces[0].timestamp : _()(0)
                    }
                },
                watch: {
                    limit: function(t) {
                        this.traces.length > t && (this.traces = this.traces.slice(0, t))
                    }
                },
                methods: {
                    fetchHttptrace: function() {
                        var t = Object(i["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a = this;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.instance.fetchHttptrace();
                                    case 2:
                                        return e = t.sent, n = e.data.traces.map(function(t) {
                                            return new U(t)
                                        }).filter(function(t) {
                                            return t.timestamp.isAfter(a.lastTimestamp)
                                        }), n.sort(function(t, e) {
                                            return -1 * t.compareTo(e)
                                        }), t.abrupt("return", n);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return Object(g["u"])(0, 5e3).pipe(Object(g["h"])(t.fetchHttptrace)).subscribe({
                            next: function(e) {
                                t.hasLoaded = !0, t.traces = [].concat(Object(r["a"])(e), Object(r["a"])(t.traces)).slice(0, t.limit)
                            },
                            error: function(e) {
                                t.hasLoaded = !0, console.warn("Fetching traces failed:", e), t.error = e
                            }
                        })
                    },
                    getFilterFn: function() {
                        var t = this,
                            e = null;
                        if (null !== this.actuatorPath && this.excludeActuator && (e = q(e, function(e) {
                            return !e.request.uri.includes(t.actuatorPath)
                        })), this.filter) {
                            var n = this.filter.toLowerCase();
                            e = q(e, function(t) {
                                return t.request.uri.toLowerCase().includes(n)
                            })
                        }
                        return this.showSuccess || (e = q(e, function(t) {
                            return !t.isSuccess()
                        })), this.showClientErrors || (e = q(e, function(t) {
                            return !t.isClientError()
                        })), this.showServerErrors || (e = q(e, function(t) {
                            return !t.isServerError()
                        })), e
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/httptrace",
                        parent: "instances",
                        path: "httptrace",
                        component: this,
                        label: "Http Traces",
                        group: "Web",
                        order: 500,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("httptrace")
                        }
                    })
                }
            },
            V = H,
            z = (n("cbfa"), Object(P["a"])(V, a, s, !1, null, null, null));
        e["default"] = z.exports
    },
    "4f18": function(t, e, n) {
        "use strict";
        var a = n("e7bc"),
            s = n.n(a);
        s.a
    },
    "4f32": function(t, e, n) {},
    5327: function(t, e, n) {},
    5554: function(t, e, n) {},
    "55fe": function(t, e, n) {
        "use strict";
        var a = n("795b"),
            s = n.n(a),
            r = (n("96cf"), n("3b8d"));
        e["a"] = Object(r["a"])(regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function(t) {
                while (1) switch (t.prev = t.next) {
                    case 0:
                        if ("undefined" !== typeof window.EventSource) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return", n.e("event-source-polyfill").then(n.t.bind(null, "91a3", 7)));
                    case 2:
                        return t.abrupt("return", s.a.resolve());
                    case 3:
                    case "end":
                        return t.stop()
                }
            }, t)
        }))
    },
    5643: function(t, e, n) {
        "use strict";
        var a = n("31e4"),
            s = n.n(a);
        s.a
    },
    "579f": function(t, e, n) {
        "use strict";
        var a = n("a486"),
            s = n.n(a);
        s.a
    },
    5918: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    class: {
                        "is-loading": !t.hasLoaded
                    }
                }, [t.hasLoaded ? [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching loggers failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.loggerConfig ? [n("div", {
                    staticClass: "field-body"
                }, [n("div", {
                    staticClass: "field has-addons"
                }, [n("p", {
                    staticClass: "control is-expanded has-icons-left"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.filter,
                        expression: "filter"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "search"
                    },
                    domProps: {
                        value: t.filter
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.filter = e.target.value)
                        }
                    }
                }), n("span", {
                    staticClass: "icon is-small is-left"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "filter"
                    }
                })], 1)]), n("p", {
                    staticClass: "control"
                }, [n("span", {
                    staticClass: "button is-static"
                }, [n("span", {
                    domProps: {
                        textContent: t._s(t.filteredLoggers.length)
                    }
                }), t._v("\n              /\n              "), n("span", {
                    domProps: {
                        textContent: t._s(t.loggerConfig.loggers.length)
                    }
                })])])])]), n("div", {
                    staticClass: "field-body"
                }, [n("div", {
                    staticClass: "field is-narrow"
                }, [n("div", {
                    staticClass: "control"
                }, [n("label", {
                    staticClass: "checkbox"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.showClassLoggersOnly,
                        expression: "showClassLoggersOnly"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.showClassLoggersOnly) ? t._i(t.showClassLoggersOnly, null) > -1 : t.showClassLoggersOnly
                    },
                    on: {
                        change: function(e) {
                            var n = t.showClassLoggersOnly,
                                a = e.target,
                                s = !!a.checked;
                            if (Array.isArray(n)) {
                                var r = null,
                                    i = t._i(n, r);
                                a.checked ? i < 0 && (t.showClassLoggersOnly = n.concat([r])) : i > -1 && (t.showClassLoggersOnly = n.slice(0, i).concat(n.slice(i + 1)))
                            } else t.showClassLoggersOnly = s
                        }
                    }
                }), t._v("\n              class only\n            ")])])]), n("div", {
                    staticClass: "field is-narrow"
                }, [n("div", {
                    staticClass: "control"
                }, [n("label", {
                    staticClass: "checkbox"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.showConfiguredLoggersOnly,
                        expression: "showConfiguredLoggersOnly"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.showConfiguredLoggersOnly) ? t._i(t.showConfiguredLoggersOnly, null) > -1 : t.showConfiguredLoggersOnly
                    },
                    on: {
                        change: function(e) {
                            var n = t.showConfiguredLoggersOnly,
                                a = e.target,
                                s = !!a.checked;
                            if (Array.isArray(n)) {
                                var r = null,
                                    i = t._i(n, r);
                                a.checked ? i < 0 && (t.showConfiguredLoggersOnly = n.concat([r])) : i > -1 && (t.showConfiguredLoggersOnly = n.slice(0, i).concat(n.slice(i + 1)))
                            } else t.showConfiguredLoggersOnly = s
                        }
                    }
                }), t._v("\n              configured\n            ")])])])])] : t._e(), t.loggerConfig ? n("table", {
                    staticClass: "table is-hoverable is-fullwidth"
                }, [n("tbody", [t._l(t.limitedLoggers, function(e) {
                    return n("tr", {
                        key: e.name
                    }, [n("td", [n("span", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }), e.name in t.failed ? n("span", {
                        staticClass: "has-text-danger"
                    }, [n("font-awesome-icon", {
                        staticClass: "has-text-danger",
                        attrs: {
                            icon: "exclamation-triangle"
                        }
                    }), n("span", {
                        domProps: {
                            textContent: t._s("Configuring " + t.failed[e.name] + " failed.")
                        }
                    })], 1) : t._e(), n("sba-logger-control", {
                        staticClass: "is-pulled-right",
                        attrs: {
                            "level-options": t.levels,
                            "effective-level": e.effectiveLevel,
                            "configured-level": e.configuredLevel,
                            "is-loading": t.loading[e.name],
                            "has-failed": t.failed[e.name],
                            "allow-reset": "ROOT" !== e.name
                        },
                        on: {
                            input: function(n) {
                                return t.configureLogger(e, n)
                            }
                        }
                    })], 1)])
                }), 0 === t.limitedLoggers.length ? n("tr", [n("td", {
                    staticClass: "is-muted",
                    attrs: {
                        colspan: "5"
                    }
                }, [t._v("\n            No loggers found.\n          ")])]) : t._e()], 2)]) : t._e()] : t._e()], 2)
            },
            s = [],
            r = (n("6762"), n("2fdb"), n("7f7f"), n("96cf"), n("3b8d")),
            i = n("df0d"),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "field is-grouped logger-control"
                }, [n("div", {
                    staticClass: "control buttons has-addons"
                }, t._l(t.levelOptions, function(e) {
                    return n("button", {
                        key: e,
                        staticClass: "button logger-control__level",
                        class: t.cssClass(e),
                        domProps: {
                            textContent: t._s(e)
                        },
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), t.selectLevel(e)
                            }
                        }
                    })
                }), 0), n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button is-light",
                    class: {
                        "is-loading": null === t.isLoading
                    },
                    attrs: {
                        disabled: !t.configured || !t.allowReset
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.selectLevel(null)
                        }
                    }
                }, [t._v("\n      Reset\n    ")])])])
            },
            c = [],
            l = {
                props: {
                    effectiveLevel: {
                        type: String,
                        required: !0
                    },
                    configuredLevel: {
                        type: String,
                        default: null
                    },
                    levelOptions: {
                        type: Array,
                        required: !0
                    },
                    allowReset: {
                        type: Boolean,
                        default: !0
                    },
                    isLoading: {
                        type: String,
                        default: void 0
                    }
                },
                computed: {
                    level: function() {
                        return this.configuredLevel || this.effectiveLevel
                    },
                    configured: function() {
                        return !!this.configuredLevel
                    }
                },
                methods: {
                    selectLevel: function(t) {
                        this.$emit("input", t)
                    },
                    cssClass: function(t) {
                        return {
                            "logger-control__level--inherited": this.level === t && !this.configured,
                            "is-active is-danger": this.level === t && "TRACE" === this.level,
                            "is-active is-warning": this.level === t && "DEBUG" === this.level,
                            "is-active is-info": this.level === t && "INFO" === this.level,
                            "is-active is-success": this.level === t && "WARN" === this.level,
                            "is-active is-light": this.level === t && "ERROR" === this.level,
                            "is-active is-black": this.level === t && "OFF" === this.level,
                            "is-loading": this.isLoading === t
                        }
                    }
                }
            },
            u = l,
            d = (n("879f"), n("2877")),
            p = Object(d["a"])(u, o, c, !1, null, null, null),
            h = p.exports,
            f = function(t) {
                return /\.[A-Z]/.test(t)
            },
            m = function(t, e) {
                return t ? function(n, a) {
                    return t(n, a) && e(n, a)
                } : e
            },
            v = {
                components: {
                    sbaLoggerControl: h
                },
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        loggerConfig: null,
                        filter: "",
                        showClassLoggersOnly: !1,
                        showConfiguredLoggersOnly: !1,
                        visibleLimit: 25,
                        loading: {},
                        failed: {}
                    }
                },
                computed: {
                    levels: function() {
                        return this.loggerConfig.levels
                    },
                    limitedLoggers: function() {
                        return this.visibleLimit > 0 ? this.filteredLoggers.slice(0, this.visibleLimit) : this.filteredLoggers
                    },
                    filteredLoggers: function() {
                        var t = this.getFilterFn();
                        return t ? this.loggerConfig.loggers.filter(t) : this.loggerConfig.loggers
                    }
                },
                methods: {
                    configureLogger: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t(e, n) {
                            var a, s;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = this, s = setTimeout(function() {
                                            return a.$set(a.loading, e.name, n)
                                        }, 150), t.prev = 2, t.next = 5, this.instance.configureLogger(e.name, n);
                                    case 5:
                                        a.$delete(a.failed, e.name, n), t.next = 12;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](2), console.warn("Configuring logger '".concat(e.name, "' failed:"), t.t0), a.$set(a.failed, e.name, n);
                                    case 12:
                                        return t.prev = 12, t.next = 15, this.fetchLoggers();
                                    case 15:
                                        return t.prev = 15, a.$delete(a.loading, e.name), clearTimeout(s), t.finish(15);
                                    case 19:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [2, 8],
                                [12, , 15, 19]
                            ])
                        }));

                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchLoggers: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, t.prev = 1, t.next = 4, this.instance.fetchLoggers();
                                    case 4:
                                        e = t.sent, this.loggerConfig = e.data, t.next = 12;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1), console.warn("Fetching loggers failed:", t.t0), this.error = t.t0;
                                    case 12:
                                        this.hasLoaded = !0;
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    onScroll: function() {
                        this.loggerConfig && this.$el.getBoundingClientRect().bottom - 400 <= window.innerHeight && this.visibleLimit < this.filteredLoggers.length && (this.visibleLimit += 25)
                    },
                    getFilterFn: function() {
                        var t = null;
                        if (this.showClassLoggersOnly && (t = m(t, function(t) {
                            return f(t.name)
                        })), this.showConfiguredLoggersOnly && (t = m(t, function(t) {
                            return !!t.configuredLevel
                        })), this.filter) {
                            var e = this.filter.toLowerCase();
                            t = m(t, function(t) {
                                return t.name.toLowerCase().includes(e)
                            })
                        }
                        return t
                    }
                },
                created: function() {
                    this.fetchLoggers()
                },
                mounted: function() {
                    window.addEventListener("scroll", this.onScroll)
                },
                beforeDestroy: function() {
                    window.removeEventListener("scroll", this.onScroll)
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/loggers",
                        parent: "instances",
                        path: "loggers",
                        component: this,
                        label: "Loggers",
                        group: "Logging",
                        order: 300,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("loggers")
                        }
                    })
                }
            },
            g = v,
            b = Object(d["a"])(g, a, s, !1, null, null, null);
        e["default"] = b.exports
    },
    "594c": function(t, e, n) {
        "use strict";
        var a = n("8d9a"),
            s = n.n(a);
        s.a
    },
    "5dda": function(t, e, n) {
        "use strict";
        var a = n("1357"),
            s = n.n(a);
        s.a
    },
    "5e79": function(t, e, n) {
        "use strict";
        var a = n("76bb"),
            s = n.n(a);
        s.a
    },
    "5e8b": function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return f
        });
        n("7f7f");
        var a = n("774e"),
            s = n.n(a),
            r = n("75fc"),
            i = (n("ac6a"), n("7514"), n("5d73")),
            o = n.n(i),
            c = n("2d7d"),
            l = n.n(c),
            u = n("d225"),
            d = n("b0b4"),
            p = n("aac3"),
            h = n("8be7"),
            f = function() {
                function t() {
                    var e = this;
                    Object(u["a"])(this, t), this._listeners = {}, this._applications = new l.a, this.applications = [], this.applications.findInstance = function(t) {
                        var n = !0,
                            a = !1,
                            s = void 0;
                        try {
                            for (var r, i = o()(e.applications); !(n = (r = i.next()).done); n = !0) {
                                var c = r.value,
                                    l = c.findInstance(t);
                                if (l) return l
                            }
                        } catch (u) {
                            a = !0, s = u
                        } finally {
                            try {
                                n || null == i.return || i.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                    }, this.applications.findApplicationForInstance = function(t) {
                        return e.applications.find(function(e) {
                            return Boolean(e.findInstance(t))
                        })
                    }
                }
                return Object(d["a"])(t, [{
                    key: "addEventListener",
                    value: function(t, e) {
                        t in this._listeners || (this._listeners[t] = []), this._listeners[t].push(e)
                    }
                }, {
                    key: "removeEventListener",
                    value: function(t, e) {
                        if (t in this._listeners) {
                            var n = this._listeners[t].indexOf(e);
                            n > 0 && this._listeners[t].splice(n, 1)
                        }
                    }
                }, {
                    key: "_dispatchEvent",
                    value: function(t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) n[a - 1] = arguments[a];
                        if (t in this._listeners) {
                            var s = this;
                            this._listeners[t].forEach(function(t) {
                                return t.call.apply(t, [s].concat(n))
                            })
                        }
                    }
                }, {
                    key: "start",
                    value: function() {
                        var t = this,
                            e = Object(h["j"])(function() {
                                return p["a"].list()
                            }).pipe(Object(h["t"])(void 0, void 0, function() {
                                return t._dispatchEvent("connected")
                            }), Object(h["h"])(function(t) {
                                return t.data
                            })),
                            n = null;
                        this.subscription = Object(h["f"])(e, n).pipe(Object(h["s"])(function(e) {
                            return e.pipe(Object(h["t"])(function(e) {
                                return t._dispatchEvent("error", e)
                            }), Object(h["k"])(5e3))
                        }), Object(h["e"])(250), Object(h["l"])(function(t) {
                            return t.length > 0
                        })).subscribe({
                            next: function(e) {
                                return t.updateApplications(e)
                            }
                        })
                    }
                }, {
                    key: "updateApplications",
                    value: function(t) {
                        var e, n = this;
                        t.forEach(function(t) {
                            return n.updateApplication(t)
                        }), (e = this.applications).splice.apply(e, [0, this.applications.length].concat(Object(r["a"])(s()(this._applications.values()))))
                    }
                }, {
                    key: "updateApplication",
                    value: function(t) {
                        var e = this._applications.get(t.name);
                        !e && t.instances.length > 0 ? (this._applications.set(t.name, t), this._dispatchEvent("added", t)) : e && t.instances.length > 0 ? (this._applications.set(t.name, t), this._dispatchEvent("updated", t, e)) : e && t.instances.length <= 0 && (this._applications.delete(t.name), this._dispatchEvent("removed", e))
                    }
                }, {
                    key: "stop",
                    value: function() {
                        if (this.subscription) try {
                            !this.subscription.closed && this.subscription.unsubscribe()
                        } finally {
                            this.subscription = null
                        }
                    }
                }]), t
            }()
    },
    "5e98": function(t, e, n) {},
    "5fc5": function(t, e, n) {
        "use strict";
        var a = n("6848"),
            s = n.n(a);
        s.a
    },
    6155: function(t, e, n) {
        "use strict";
        n.r(e);
        n("c5f6");
        var a = n("36f7"),
            s = n.n(a);
        e["default"] = {
            props: {
                date: {
                    type: [String, Date, Number, s.a],
                    default: null
                }
            },
            data: function() {
                return {
                    now: s()(),
                    timer: null
                }
            },
            computed: {
                timeAgo: function() {
                    return s()(this.date).short(!0, this.now)
                }
            },
            created: function() {
                var t = this;
                this.timer = window.setInterval(function() {
                    t.now = s()()
                }, 1e3)
            },
            render: function() {
                return this._v(this.timeAgo)
            },
            beforeDestroy: function() {
                this.timer && window.clearInterval(this.timer)
            }
        }
    },
    "61b6": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("button", {
                    directives: [{
                        name: "on-clickaway",
                        rawName: "v-on-clickaway",
                        value: t.abort,
                        expression: "abort"
                    }],
                    staticClass: "confirm-button",
                    class: {
                        "is-warning": t.confirm
                    },
                    on: {
                        click: t.click
                    }
                }, [t.confirm ? t._t("confirm", [t._v("\n    Confirm\n  ")]) : t._t("default")], 2)
            },
            s = [],
            r = n("723b"),
            i = {
                directives: {
                    onClickaway: r["directive"]
                },
                data: function() {
                    return {
                        confirm: !1
                    }
                },
                methods: {
                    abort: function() {
                        this.confirm = !1
                    },
                    click: function(t) {
                        if (this.confirm) this.$el.style.width = null, this.$emit("click", t);
                        else {
                            var e = this.$el.getBoundingClientRect().width;
                            this.$el.style.width = "".concat(e, "px"), t.stopPropagation()
                        }
                        this.confirm = !this.confirm
                    }
                }
            },
            o = i,
            c = (n("62ad"), n("2877")),
            l = Object(c["a"])(o, a, s, !1, null, null, null);
        e["default"] = l.exports
    },
    "62ad": function(t, e, n) {
        "use strict";
        var a = n("4f32"),
            s = n.n(a);
        s.a
    },
    6440: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section"
                }, [n("div", {
                    staticClass: "field is-horizontal"
                }, [n("div", {
                    staticClass: "field-body"
                }, [n("div", {
                    staticClass: "field"
                }, [n("p", {
                    staticClass: "control is-expanded"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.filter.principal,
                        expression: "filter.principal",
                        modifiers: {
                            trim: !0
                        }
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "search",
                        placeholder: "Principal"
                    },
                    domProps: {
                        value: t.filter.principal
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.filter, "principal", e.target.value.trim())
                        },
                        blur: function(e) {
                            return t.$forceUpdate()
                        }
                    }
                })])]), n("div", {
                    staticClass: "field"
                }, [n("p", {
                    staticClass: "control is-expanded"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.filter.type,
                        expression: "filter.type"
                    }],
                    staticClass: "input",
                    attrs: {
                        list: "auditevent-type",
                        type: "search",
                        placeholder: "Type"
                    },
                    domProps: {
                        value: t.filter.type
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || t.$set(t.filter, "type", e.target.value)
                        }
                    }
                }), t._m(0)])]), n("div", {
                    staticClass: "field"
                }, [n("p", {
                    staticClass: "control is-expanded"
                }, [n("input", {
                    staticClass: "input",
                    attrs: {
                        type: "datetime-local",
                        placeholder: "Date"
                    },
                    domProps: {
                        value: t.formatDate(t.filter.after)
                    },
                    on: {
                        input: function(e) {
                            t.filter.after = t.parseDate(e.target.value)
                        }
                    }
                })])])])]), [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching audit events failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.isOldAuditevents ? n("div", {
                    staticClass: "message is-warning"
                }, [n("div", {
                    staticClass: "message-body"
                }, [t._v("\n        Audit Log is not supported for Spring Boot 1.x applications.\n      ")])]) : t._e(), n("auditevents-list", {
                    attrs: {
                        instance: t.instance,
                        events: t.events,
                        "is-loading": t.isLoading
                    }
                })]], 2)
            },
            s = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("datalist", {
                        attrs: {
                            id: "auditevent-type"
                        }
                    }, [n("option", {
                        attrs: {
                            value: "AUTHENTICATION_FAILURE"
                        }
                    }), n("option", {
                        attrs: {
                            value: "AUTHENTICATION_SUCCESS"
                        }
                    }), n("option", {
                        attrs: {
                            value: "AUTHENTICATION_SWITCH"
                        }
                    }), n("option", {
                        attrs: {
                            value: "AUTHORIZATION_FAILURE"
                        }
                    })])
                }
            ],
            r = (n("96cf"), n("3b8d")),
            i = (n("6762"), n("2fdb"), n("5176")),
            o = n.n(i),
            c = n("a8db"),
            l = n("d225"),
            u = n("b0b4"),
            d = n("d76e"),
            p = n("df0d"),
            h = n("8be7"),
            f = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("table", {
                    staticClass: "auditevents table is-hoverable is-fullwidth"
                }, [t._m(0), n("tbody", [t._l(t.events, function(e) {
                    return [n("tr", {
                        key: e.key,
                        staticClass: "is-selectable",
                        class: {
                            "auditevents__event--is-detailed": t.showDetails[e.key]
                        },
                        on: {
                            click: function(n) {
                                t.showDetails[e.key] ? t.$delete(t.showDetails, e.key) : t.$set(t.showDetails, e.key, !0)
                            }
                        }
                    }, [n("td", {
                        domProps: {
                            textContent: t._s(e.timestamp.format("L HH:mm:ss.SSS"))
                        }
                    }), n("td", [n("span", {
                        staticClass: "tag",
                        class: {
                            "is-success": e.isSuccess(),
                            "is-danger": e.isFailure()
                        },
                        domProps: {
                            textContent: t._s(e.type)
                        }
                    })]), t.hasSessionEndpoint && e.principal ? n("td", [n("router-link", {
                        attrs: {
                            to: {
                                name: "instances/sessions",
                                params: {
                                    instanceId: t.instance.id
                                },
                                query: {
                                    username: e.principal
                                }
                            }
                        },
                        domProps: {
                            textContent: t._s(e.principal)
                        }
                    })], 1) : n("td", {
                        domProps: {
                            textContent: t._s(e.principal)
                        }
                    }), n("td", {
                        domProps: {
                            textContent: t._s(e.remoteAddress)
                        }
                    }), t.hasSessionEndpoint && e.sessionId ? n("td", [n("router-link", {
                        attrs: {
                            to: {
                                name: "instances/sessions",
                                params: {
                                    instanceId: t.instance.id
                                },
                                query: {
                                    sessionId: e.sessionId
                                }
                            }
                        },
                        domProps: {
                            textContent: t._s(e.sessionId)
                        }
                    })], 1) : n("td", {
                        domProps: {
                            textContent: t._s(e.sessionId)
                        }
                    })]), t.showDetails[e.key] ? n("tr", {
                        key: e.key + "-detail"
                    }, [n("td", {
                        attrs: {
                            colspan: "5"
                        }
                    }, [n("pre", {
                        staticClass: "auditevents__event-detail",
                        domProps: {
                            textContent: t._s(t.toJson(e.data))
                        }
                    })])]) : t._e()]
                }), 0 === t.events.length ? n("tr", [n("td", {
                    staticClass: "is-muted",
                    attrs: {
                        colspan: "5"
                    }
                }, [t.isLoading ? n("p", {
                    staticClass: "is-loading"
                }, [t._v("\n          Loading Audit Events...\n        ")]) : n("p", [t._v("\n          No Audit Events found.\n        ")])])]) : t._e()], 2)])
            },
            m = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("thead", [n("tr", [n("th", [t._v("Timestamp")]), n("th", [t._v("Event")]), n("th", [t._v("Principal")]), n("th", [t._v("Remote address")]), n("th", [t._v("Session Id")])])])
                }
            ],
            v = n("f499"),
            g = n.n(v),
            b = n("94df"),
            _ = n.n(b),
            C = {
                props: {
                    events: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    instance: {
                        type: p["a"],
                        required: !0
                    },
                    isLoading: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        showDetails: {}
                    }
                },
                computed: {
                    hasSessionEndpoint: function() {
                        return this.instance.hasEndpoint("sessions")
                    }
                },
                methods: {
                    prettyBytes: _.a,
                    toJson: function(t) {
                        return g()(t, null, 4)
                    }
                }
            },
            y = C,
            x = (n("0a03"), n("2877")),
            w = Object(x["a"])(y, f, m, !1, null, null, null),
            k = w.exports,
            j = n("a8fc"),
            O = n.n(j),
            S = n("c1df"),
            P = n.n(S),
            E = function() {
                function t(e) {
                    var n = e.timestamp,
                        a = Object(c["a"])(e, ["timestamp"]);
                    Object(l["a"])(this, t), o()(this, a), this.timestamp = P()(n)
                }
                return Object(u["a"])(t, [{
                    key: "isSuccess",
                    value: function() {
                        return this.type.toLowerCase().includes("success")
                    }
                }, {
                    key: "isFailure",
                    value: function() {
                        return this.type.toLowerCase().includes("failure")
                    }
                }, {
                    key: "key",
                    get: function() {
                        return "".concat(this.timestamp, "-").concat(this.type, "-").concat(this.principal)
                    }
                }, {
                    key: "remoteAddress",
                    get: function() {
                        return this.data && this.data.details && this.data.details.remoteAddress || null
                    }
                }, {
                    key: "sessionId",
                    get: function() {
                        return this.data && this.data.details && this.data.details.sessionId || null
                    }
                }]), t
            }(),
            R = {
                props: {
                    instance: {
                        type: p["a"],
                        required: !0
                    }
                },
                mixins: [d["a"]],
                components: {
                    AuditeventsList: k
                },
                data: function() {
                    return {
                        isLoading: !1,
                        error: null,
                        events: [],
                        filter: {
                            after: P()().startOf("day"),
                            type: null,
                            principal: null
                        },
                        isOldAuditevents: !1
                    }
                },
                watch: {
                    filter: {
                        deep: !0,
                        handler: function() {
                            this.filterChanged.next()
                        }
                    }
                },
                methods: {
                    formatDate: function(t) {
                        return t.format(P.a.HTML5_FMT.DATETIME_LOCAL)
                    },
                    parseDate: function(t) {
                        return P()(t, P.a.HTML5_FMT.DATETIME_LOCAL, !0)
                    },
                    fetchAuditevents: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e, n;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.isLoading = !0, t.next = 3, this.instance.fetchAuditevents(this.filter);
                                    case 3:
                                        return e = t.sent, n = e.data.events.map(function(t) {
                                            return new E(t)
                                        }), n.reverse(), this.isLoading = !1, t.abrupt("return", n);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return t.filterChanged = new h["c"], t.error = null, Object(h["u"])(0, 5e3).pipe(Object(h["q"])(t.filterChanged.pipe(Object(h["i"])(250), Object(h["t"])({
                            next: function() {
                                return t.events = []
                            }
                        }))), Object(h["h"])(this.fetchAuditevents)).subscribe({
                            next: function(e) {
                                t.addEvents(e)
                            },
                            error: function(e) {
                                console.warn("Fetching audit events failed:", e), e.response.headers["content-type"].includes("application/vnd.spring-boot.actuator.v2") ? t.error = e : t.isOldAuditevents = !0
                            }
                        })
                    },
                    addEvents: function(t) {
                        this.events = O()(this.events ? t.concat(this.events) : t, function(t) {
                            return t.key
                        })
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/auditevents",
                        parent: "instances",
                        path: "auditevents",
                        component: this,
                        label: "Audit Log",
                        group: "Security",
                        order: 600,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("auditevents")
                        }
                    })
                }
            },
            L = R,
            A = Object(x["a"])(L, a, s, !1, null, null, null);
        e["default"] = A.exports
    },
    6848: function(t, e, n) {},
    "686a": function(t, e, n) {
        "use strict";
        n.r(e);
        n("7f7f"), n("ac6a");
        var a = [],
            s = n("12b1");
        s.keys().forEach(function(t) {
            var e = /^(.\/)+(.*)\.(vue|js)$/.exec(t)[2];
            a.push({
                name: e,
                component: s(t).default
            })
        }), e["default"] = {
            install: function(t) {
                a.forEach(function(e) {
                    return t.component(e.name, e.component)
                })
            }
        }
    },
    "69d1": function(t, e, n) {
        "use strict";
        (function(t) {
            n("7f7f");
            var a = n("75fc"),
                s = (n("55dd"), n("3b2b"), n("4917"), n("d50b")),
                r = function(t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                };
            e["a"] = {
                data: function() {
                    return {
                        showMenu: !1,
                        brand: '<img src="assets/img/icon-spring-boot-admin.svg"><span>Spring Boot Admin</span>',
                        userName: null,
                        csrfToken: null,
                        csrfParameterName: null
                    }
                },
                props: {
                    views: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    applications: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    error: {
                        type: Error,
                        default: null
                    }
                },
                computed: {
                    enabledViews: function() {
                        return Object(a["a"])(this.views).filter(function(t) {
                            return t.handle && ("undefined" === typeof t.isEnabled || t.isEnabled())
                        }).sort(Object(s["b"])(function(t) {
                            return t.order
                        }))
                    }
                },
                created: function() {
                    t.SBA && (t.SBA.uiSettings && (this.brand = t.SBA.uiSettings.brand || this.brand), t.SBA.user && (this.userName = t.SBA.user.name)), this.csrfToken = r("XSRF-TOKEN"), this.csrfParameterName = t.SBA && t.SBA.csrf && t.SBA.csrf.parameterName || "_csrf"
                },
                mounted: function() {
                    document.documentElement.classList.add("has-navbar-fixed-top")
                },
                beforeDestroy: function() {
                    document.documentElement.classList.remove("has-navbar-fixed-top")
                }
            }
        }).call(this, n("c8ba"))
    },
    "69ff": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    class: {
                        "is-loading": !t.hasLoaded
                    }
                }, [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n        Fetching environment failed.\n      ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.env && t.env.activeProfiles.length > 0 ? n("div", {
                    staticClass: "field is-grouped is-grouped-multiline"
                }, t._l(t.env.activeProfiles, function(e) {
                    return n("div", {
                        key: e,
                        staticClass: "control"
                    }, [n("div", {
                        staticClass: "tags has-addons"
                    }, [n("span", {
                        staticClass: "tag is-medium is-primary"
                    }, [t._v("\n          Profile\n        ")]), n("span", {
                        staticClass: "tag is-medium",
                        domProps: {
                            textContent: t._s(e)
                        }
                    })])])
                }), 0) : t._e(), t.env && t.hasEnvManagerSupport ? n("sba-env-manager", {
                    attrs: {
                        instance: t.instance,
                        "property-sources": t.env.propertySources
                    },
                    on: {
                        refresh: function(e) {
                            return t.fetchEnv()
                        },
                        update: t.fetchEnv,
                        reset: function(e) {
                            return t.fetchEnv()
                        }
                    }
                }) : t._e(), t.env ? n("div", {
                    staticClass: "field"
                }, [n("p", {
                    staticClass: "control is-expanded has-icons-left"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.filter,
                        expression: "filter"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "search"
                    },
                    domProps: {
                        value: t.filter
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.filter = e.target.value)
                        }
                    }
                }), n("span", {
                    staticClass: "icon is-small is-left"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "filter"
                    }
                })], 1)])]) : t._e(), t._l(t.propertySources, function(e) {
                    return n("sba-panel", {
                        key: e.name,
                        attrs: {
                            "header-sticks-below": ["#navigation"],
                            title: e.name
                        }
                    }, [Object.keys(e.properties).length > 0 ? n("table", {
                        staticClass: "table is-fullwidth"
                    }, t._l(e.properties, function(a, s) {
                        return n("tr", {
                            key: e.name + "-" + s
                        }, [n("td", [n("span", {
                            domProps: {
                                textContent: t._s(s)
                            }
                        }), n("br"), a.origin ? n("small", {
                            staticClass: "is-muted",
                            domProps: {
                                textContent: t._s(a.origin)
                            }
                        }) : t._e()]), n("td", {
                            staticClass: "is-breakable",
                            domProps: {
                                textContent: t._s(a.value)
                            }
                        })])
                    }), 0) : n("p", {
                        staticClass: "is-muted"
                    }, [t._v("\n      No properties set\n    ")])])
                })], 2)
            },
            s = [],
            r = (n("96cf"), n("3b8d")),
            i = n("a4bb"),
            o = n.n(i),
            c = n("cebc"),
            l = (n("6b54"), n("6762"), n("2fdb"), n("df0d")),
            u = n("77c1"),
            d = n.n(u),
            p = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "box"
                }, [n("h1", {
                    staticClass: "is-size-6"
                }, [t._v("\n    Environment Manager\n  ")]), n("datalist", {
                    attrs: {
                        id: "allPropertyNames"
                    }
                }, t._l(t.allPropertyNames, function(e) {
                    return n("option", {
                        key: e,
                        domProps: {
                            textContent: t._s(e)
                        }
                    })
                }), 0), t._l(t.managedProperties, function(e, a) {
                    return n("div", {
                        key: "managed-" + a,
                        staticClass: "field is-horizontal"
                    }, [n("div", {
                        staticClass: "field-body"
                    }, [n("div", {
                        staticClass: "field"
                    }, [n("div", {
                        staticClass: "control"
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.name,
                            expression: "prop.name"
                        }],
                        staticClass: "input",
                        attrs: {
                            type: "text",
                            placeholder: "Property name",
                            list: "allPropertyNames"
                        },
                        domProps: {
                            value: e.name
                        },
                        on: {
                            input: [
                                function(n) {
                                    n.target.composing || t.$set(e, "name", n.target.value)
                                },
                                function(n) {
                                    return t.handlePropertyNameChange(e, a)
                                }
                            ]
                        }
                    })]), n("p", {
                        staticClass: "help is-danger",
                        domProps: {
                            textContent: t._s(e.validation)
                        }
                    })]), n("div", {
                        staticClass: "field"
                    }, [n("div", {
                        staticClass: "control has-icons-right",
                        class: {
                            "is-loading": "executing" === e.status
                        }
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.input,
                            expression: "prop.input"
                        }],
                        staticClass: "input",
                        attrs: {
                            type: "text",
                            placeholder: "Value"
                        },
                        domProps: {
                            value: e.input
                        },
                        on: {
                            input: [
                                function(n) {
                                    n.target.composing || t.$set(e, "input", n.target.value)
                                },
                                function(t) {
                                    e.status = null
                                }
                            ]
                        }
                    }), "completed" === e.status ? n("span", {
                        staticClass: "icon is-right has-text-success"
                    }, [n("font-awesome-icon", {
                        attrs: {
                            icon: "check"
                        }
                    })], 1) : "failed" === e.status ? n("span", {
                        staticClass: "icon is-right has-text-warning"
                    }, [n("font-awesome-icon", {
                        attrs: {
                            icon: "exclamation-triangle"
                        }
                    })], 1) : e.input !== e.value ? n("span", {
                        staticClass: "icon is-right"
                    }, [n("font-awesome-icon", {
                        attrs: {
                            icon: "pencil-alt"
                        }
                    })], 1) : t._e()])])])])
                }), n("div", {
                    staticClass: "field is-horizontal"
                }, [t.instance.hasEndpoint("refresh") ? n("div", {
                    staticClass: "field-body"
                }, [n("div", {
                    staticClass: "field"
                }, [n("div", {
                    staticClass: "control"
                }, [n("sba-confirm-button", {
                    staticClass: "button is-light",
                    class: {
                        "is-loading": "executing" === t.refreshStatus,
                        "is-danger": "failed" === t.refreshStatus,
                        "is-info": "completed" === t.refreshStatus
                    },
                    attrs: {
                        disabled: "executing" === t.refreshStatus
                    },
                    on: {
                        click: t.refreshContext
                    }
                }, ["completed" === t.refreshStatus ? n("span", [t._v("\n              Context refreshed\n            ")]) : "failed" === t.refreshStatus ? n("span", [t._v("\n              Failed\n            ")]) : n("span", [t._v("\n              Refresh Context\n            ")])])], 1)])]) : t._e(), n("div", {
                    staticClass: "field-body"
                }, [n("div", {
                    staticClass: "field is-grouped is-grouped-right"
                }, [n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button is-light",
                    class: {
                        "is-loading": "executing" === t.resetStatus,
                        "is-danger": "failed" === t.resetStatus,
                        "is-success": "completed" === t.resetStatus
                    },
                    attrs: {
                        disabled: !t.hasManagedProperty || "executing" === t.resetStatus
                    },
                    on: {
                        click: t.resetEnvironment
                    }
                }, ["completed" === t.resetStatus ? n("span", [t._v("\n              Resetted\n            ")]) : "failed" === t.resetStatus ? n("span", [t._v("\n              Failed\n            ")]) : n("span", [t._v("\n              Reset\n            ")])])]), n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button is-primary",
                    class: {
                        "is-loading": "executing" === t.updateStatus,
                        "is-danger": "failed" === t.updateStatus,
                        "is-success": "completed" === t.updateStatus
                    },
                    attrs: {
                        disabled: t.hasErrorProperty || !t.hasChangedProperty || "executing" === t.updateStatus
                    },
                    on: {
                        click: t.updateEnvironment
                    }
                }, ["completed" === t.updateStatus ? n("span", [t._v("\n              Updated\n            ")]) : "failed" === t.updateStatus ? n("span", [t._v("\n              Failed\n            ")]) : n("span", [t._v("\n              Update\n            ")])])])])])])], 2)
            },
            h = [],
            f = n("768b"),
            m = n("2d1f"),
            v = n.n(m),
            g = (n("ac6a"), n("20d6"), n("7f7f"), n("7514"), n("55dd"), n("8be7")),
            b = n("b047c"),
            _ = n.n(b),
            C = n("eed6"),
            y = n.n(C),
            x = {
                props: {
                    instance: {
                        type: l["a"],
                        required: !0
                    },
                    propertySources: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {
                        error: null,
                        refreshStatus: null,
                        resetStatus: null,
                        updateStatus: null,
                        managedProperties: [{
                            name: null,
                            input: null,
                            value: null,
                            status: null,
                            validation: null
                        }]
                    }
                },
                computed: {
                    allPropertyNames: function() {
                        return y()(this.propertySources.map(function(t) {
                            return o()(t.properties)
                        }).reduce(function(t, e) {
                            return t.concat(e)
                        }).sort())
                    },
                    managerPropertySource: function() {
                        return this.propertySources.find(function(t) {
                            return "manager" === t.name
                        }) || {
                            name: "manager",
                            properties: {}
                        }
                    },
                    hasManagedProperty: function() {
                        return this.managedProperties.findIndex(function(t) {
                            return !!t.name
                        }) >= 0
                    },
                    hasChangedProperty: function() {
                        return this.managedProperties.findIndex(function(t) {
                            return t.input !== t.value
                        }) >= 0
                    },
                    hasErrorProperty: function() {
                        return this.managedProperties.findIndex(function(t) {
                            return null !== t.validation
                        }) >= 0
                    }
                },
                methods: {
                    handlePropertyNameChange: _()(function(t, e) {
                        t.name && e === this.managedProperties.length - 1 && this.managedProperties.push({
                            name: null,
                            input: null,
                            value: null,
                            status: null,
                            validation: null
                        })
                    }, 250),
                    refreshContext: function() {
                        var t = this;
                        Object(g["m"])(t.instance.refreshContext()).pipe(Object(g["o"])(function(e) {
                            return t.refreshStatus = e
                        })).subscribe({
                            complete: function() {
                                return setTimeout(function() {
                                    return t.refreshStatus = null
                                }, 2500), t.$emit("reset")
                            },
                            error: function() {
                                return t.$emit("reset")
                            }
                        })
                    },
                    updateEnvironment: function() {
                        var t = this;
                        Object(g["m"])(t.managedProperties).pipe(Object(g["l"])(function(t) {
                            return !!t.name && t.input !== t.value
                        }), Object(g["o"])(function(e) {
                            return t.updateStatus = e
                        }), Object(g["h"])(function(e) {
                            return Object(g["m"])(t.instance.setEnv(e.name, e.input)).pipe(Object(g["o"])(function(t) {
                                return e.status = t
                            }))
                        })).subscribe({
                            complete: function() {
                                return setTimeout(function() {
                                    return t.updateStatus = null
                                }, 2500), t.$emit("update")
                            },
                            error: function() {
                                return t.$emit("update")
                            }
                        })
                    },
                    resetEnvironment: function() {
                        var t = this;
                        Object(g["m"])(t.instance.resetEnv()).pipe(Object(g["o"])(function(e) {
                            return t.resetStatus = e
                        })).subscribe({
                            complete: function() {
                                return t.managedProperties = [{
                                    name: null,
                                    input: null,
                                    value: null,
                                    status: null,
                                    validation: null
                                }], setTimeout(function() {
                                    return t.resetStatus = null
                                }, 2500), t.$emit("refresh")
                            },
                            error: function() {
                                return t.$emit("refresh")
                            }
                        })
                    },
                    updateManagedProperties: function(t) {
                        var e = this;
                        v()(t.properties).forEach(function(t) {
                            var n = Object(f["a"])(t, 2),
                                a = n[0],
                                s = n[1],
                                r = e.managedProperties.find(function(t) {
                                    return t.name === a
                                });
                            if (r) r.value = s.value;
                            else {
                                var i = e.managedProperties.length - 1;
                                e.managedProperties.splice(i, 0, {
                                    name: a,
                                    input: s.value,
                                    value: s.value,
                                    status: null,
                                    validation: null
                                })
                            }
                        })
                    }
                },
                watch: {
                    managerPropertySource: {
                        handler: "updateManagedProperties",
                        immediate: !0
                    },
                    managedProperties: {
                        deep: !0,
                        handler: function() {
                            var t = this.managedProperties.reduce(function(t, e) {
                                return e.name && (t[e.name] = (t[e.name] || 0) + 1), t
                            }, {});
                            this.managedProperties.forEach(function(e) {
                                if (e.name) {
                                    var n = t[e.name] || 0;
                                    e.validation = n > 1 ? "Property name must be unique" : null
                                } else e.input && (e.validation = "Property name is required")
                            })
                        }
                    }
                }
            },
            w = x,
            k = n("2877"),
            j = Object(k["a"])(w, p, h, !1, null, null, null),
            O = j.exports,
            S = function(t) {
                return function(e, n) {
                    return n.toString().toLowerCase().includes(t) || e.value.toString().toLowerCase().includes(t)
                }
            },
            P = function(t, e) {
                return d()(e, S(t))
            },
            E = function(t) {
                return function(e) {
                    return e && e.properties ? Object(c["a"])({}, e, {
                        properties: P(t, e.properties)
                    }) : null
                }
            },
            R = {
                props: {
                    instance: {
                        type: l["a"],
                        required: !0
                    }
                },
                components: {
                    sbaEnvManager: O
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        env: null,
                        filter: null,
                        hasEnvManagerSupport: !1
                    }
                },
                computed: {
                    propertySources: function() {
                        return this.env ? this.filter ? this.env.propertySources.map(E(this.filter.toLowerCase())).filter(function(t) {
                            return t && o()(t.properties).length > 0
                        }) : this.env.propertySources : []
                    }
                },
                created: function() {
                    this.fetchEnv(), this.determineEnvManagerSupport()
                },
                methods: {
                    fetchEnv: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, t.prev = 1, t.next = 4, this.instance.fetchEnv();
                                    case 4:
                                        e = t.sent, this.env = e.data, t.next = 12;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1), console.warn("Fetching environment failed:", t.t0), this.error = t.t0;
                                    case 12:
                                        this.hasLoaded = !0;
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    determineEnvManagerSupport: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, this.instance.hasEnvManagerSupport();
                                    case 3:
                                        this.hasEnvManagerSupport = t.sent, t.next = 10;
                                        break;
                                    case 6:
                                        t.prev = 6, t.t0 = t["catch"](0), console.warn("Determine env manager support failed:", t.t0), this.hasEnvManagerSupport = !1;
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [0, 6]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/env",
                        parent: "instances",
                        path: "env",
                        component: this,
                        label: "Environment",
                        group: "Insights",
                        order: 100,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("env")
                        }
                    })
                }
            },
            L = R,
            A = Object(k["a"])(L, a, s, !1, null, null, null);
        e["default"] = A.exports
    },
    "6fa1": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    class: {
                        "is-loading": !t.hasLoaded
                    }
                }, [t.hasLoaded ? [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching threaddump failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.threads ? n("threads-list", {
                    attrs: {
                        "thread-timelines": t.threads
                    }
                }) : t._e()] : t._e()], 2)
            },
            s = [],
            r = (n("96cf"), n("3b8d")),
            i = (n("ac6a"), n("e814")),
            o = n.n(i),
            c = n("768b"),
            l = n("2d1f"),
            u = n.n(l),
            d = n("d76e"),
            p = n("df0d"),
            h = n("8be7"),
            f = n("c04c"),
            m = n.n(f),
            v = n("36f7"),
            g = n.n(v),
            b = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("table", {
                    staticClass: "threads table is-fullwidth is-hoverable"
                }, [n("thead", [n("tr", [n("th", {
                    staticClass: "threads__thread-name"
                }, [t._v("\n        Name\n      ")]), n("th", {
                    staticClass: "threads__timeline"
                }, [n("svg", {
                    staticClass: "threads__scale",
                    attrs: {
                        height: "24px"
                    }
                })])])]), n("tbody", [t._l(t.threadTimelines, function(e) {
                    return [n("tr", {
                        key: e.threadId,
                        staticClass: "is-selectable",
                        on: {
                            click: function(n) {
                                t.showDetails[e.threadId] ? t.$delete(t.showDetails, e.threadId) : t.$set(t.showDetails, e.threadId, !0)
                            }
                        }
                    }, [n("td", {
                        staticClass: "threads__thread-name"
                    }, [n("thread-tag", {
                        attrs: {
                            "thread-state": e.threadState
                        }
                    }), n("span", {
                        domProps: {
                            textContent: t._s(e.threadName)
                        }
                    })], 1), n("td", {
                        staticClass: "threads__timeline"
                    }, [n("svg", {
                        attrs: {
                            id: "thread-" + e.threadId,
                            height: "26px"
                        }
                    })])]), t.showDetails[e.threadId] ? n("tr", {
                        key: e.threadId + "-detail"
                    }, [n("td", {
                        attrs: {
                            colspan: "2"
                        }
                    }, [n("table", {
                        staticClass: "threads__thread-details table is-narrow is-fullwidth has-background-white-ter"
                    }, [n("tr", [n("td", [t._v("Thread Id")]), n("td", {
                        domProps: {
                            textContent: t._s(e.threadId)
                        }
                    })]), n("tr", [n("td", [t._v("Thread name")]), n("td", {
                        domProps: {
                            textContent: t._s(e.threadName)
                        }
                    })]), n("tr", [n("td", [t._v("Thread state")]), n("td", {
                        domProps: {
                            textContent: t._s(e.threadState)
                        }
                    })]), null !== e.details ? [n("tr", [n("td", [t._v("Blocked count")]), n("td", {
                        domProps: {
                            textContent: t._s(e.details.blockedCount)
                        }
                    })]), n("tr", [n("td", [t._v("Blocked time")]), n("td", {
                        domProps: {
                            textContent: t._s(e.details.blockedTime)
                        }
                    })]), n("tr", [n("td", [t._v("Waited count")]), n("td", {
                        domProps: {
                            textContent: t._s(e.details.waitedCount)
                        }
                    })]), n("tr", [n("td", [t._v("Waited time")]), n("td", {
                        domProps: {
                            textContent: t._s(e.details.waitedTime)
                        }
                    })]), n("tr", [n("td", [t._v("Lock name")]), n("td", {
                        domProps: {
                            textContent: t._s(e.details.lockName)
                        }
                    })]), n("tr", [n("td", [t._v("Lock owner id")]), n("td", {
                        domProps: {
                            textContent: t._s(e.details.lockOwnerId)
                        }
                    })]), n("tr", [n("td", [t._v("Lock owner name")]), n("td", {
                        domProps: {
                            textContent: t._s(e.details.lockOwnerName)
                        }
                    })]), e.details.stackTrace.length > 0 ? n("tr", [n("td", {
                        attrs: {
                            colspan: "2"
                        }
                    }, [t._v("\n                  Stacktrace\n                  "), n("pre", {
                        staticClass: "threads__thread-stacktrace"
                    }, [t._l(e.details.stackTrace, function(a, s) {
                        return [n("span", {
                            key: "frame-" + e.threadId + "-" + s,
                            domProps: {
                                textContent: t._s(a.className + "." + a.methodName + "(" + a.fileName + ":" + a.lineNumber + ")")
                            }
                        }), t._v(" "), a.nativeMethod ? n("span", {
                            key: "frame-" + e.threadId + "-" + s + "-native",
                            staticClass: "tag is-dark"
                        }, [t._v("native")]) : t._e(), t._v("\n                  ")]
                    })], 2)])]) : t._e()] : t._e()], 2)])]) : t._e()]
                })], 2)])
            },
            _ = [],
            C = n("60f8"),
            y = n.n(C),
            x = n("8bd2"),
            w = n.n(x),
            k = n("4700"),
            j = n("c1df"),
            O = n.n(j),
            S = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("span", {
                    staticClass: "tag thread-tag",
                    class: "thread-tag--" + t.threadState.toLowerCase(),
                    attrs: {
                        title: t.threadState
                    }
                })
            },
            P = [],
            E = {
                props: {
                    threadState: {
                        type: String,
                        required: !0
                    }
                }
            },
            R = E,
            L = (n("9c36"), n("2877")),
            A = Object(L["a"])(R, S, P, !1, null, null, null),
            F = A.exports,
            M = 15,
            T = {
                props: {
                    threadTimelines: {
                        type: Object,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        showDetails: {},
                        lastEndPosition: 0
                    }
                },
                components: {
                    threadTag: F
                },
                watch: {
                    threadTimelines: {
                        deep: !0,
                        handler: "drawTimelines",
                        immediate: !0
                    }
                },
                methods: {
                    getTimeExtent: function(t) {
                        return u()(t).map(function(t) {
                            var e = Object(c["a"])(t, 2),
                                n = e[1];
                            return n.timeline
                        }).map(function(t) {
                            return {
                                start: t[0].start,
                                end: t[t.length - 1].end
                            }
                        }).reduce(function(t, e) {
                            return {
                                start: Math.min(t.start, e.start),
                                end: Math.max(t.end, e.end)
                            }
                        }, {
                            start: w.a,
                            end: y.a
                        })
                    },
                    drawTimelines: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t(e) {
                            var n, a, s, r, i, o, l, d;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!e) {
                                            t.next = 12;
                                            break
                                        }
                                        return n = this.isInView(this.lastEndPosition), t.next = 4, this.$nextTick();
                                    case 4:
                                        a = this.getTimeExtent(e), s = a.start, r = a.end, i = this.$el.querySelector(".threads__timeline").getBoundingClientRect().width, o = Math.floor(i / M), l = k["a"].scaleTime().range([0, i]).domain([s, Math.max(s + 1e3 * (o + 1), r)]), k["a"].select(".threads__scale").attr("width", i).call(k["a"].axisBottom(l).ticks(Math.max(2, Math.floor(i / 50))).tickFormat(function(t) {
                                            return O()(t).format("HH:mm:ss")
                                        })), u()(e).forEach(function(t) {
                                            var e = Object(c["a"])(t, 2),
                                                n = e[0],
                                                a = e[1],
                                                s = k["a"].select("#thread-".concat(n)).attr("width", i),
                                                r = s.selectAll("rect").data(a.timeline);
                                            r.enter().append("rect").merge(r).attr("class", function(t) {
                                                return "thread--".concat(t.threadState.toLowerCase())
                                            }).attr("height", "2em").attr("x", function(t) {
                                                return l(t.start)
                                            }).transition(150).attr("width", function(t) {
                                                return Math.max(l(t.end) - l(t.start), l(t.start + 500) - l(t.start))
                                            })
                                        }), this.lastEndPosition = l(r), n && !this.isInView(this.lastEndPosition) && (d = this.$el, d.scroll(this.lastEndPosition, d.scrollHeight));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    isInView: function(t) {
                        var e = this.$el;
                        return e && t >= e.scrollLeft && t <= e.scrollLeft + e.clientWidth
                    }
                }
            },
            $ = T,
            I = (n("b745"), Object(L["a"])($, b, _, !1, null, null, null)),
            N = I.exports,
            B = {
                props: {
                    instance: {
                        type: p["a"],
                        required: !0
                    }
                },
                mixins: [d["a"]],
                components: {
                    threadsList: N
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        threads: null
                    }
                },
                computed: {},
                methods: {
                    updateTimelines: function(t) {
                        var e = this,
                            n = g()().valueOf();
                        e.threads = e.threads || {};
                        var a = u()(e.threads).filter(function(t) {
                            var e = Object(c["a"])(t, 2),
                                n = e[1];
                            return "TERMINATED" !== n.threadState
                        }).map(function(t) {
                            var e = Object(c["a"])(t, 1),
                                n = e[0];
                            return o()(n)
                        });
                        t.forEach(function(t) {
                            if (e.threads[t.threadId]) {
                                var s = e.threads[t.threadId];
                                s.details = t, s.threadState !== t.threadState ? (s.threadState = t.threadState, s.timeline.push({
                                    start: s.timeline[s.timeline.length - 1].end,
                                    end: n,
                                    threadState: t.threadState
                                })) : s.timeline[s.timeline.length - 1].end = n
                            } else e.$set(e.threads, t.threadId, {
                                threadId: t.threadId,
                                threadState: t.threadState,
                                threadName: t.threadName,
                                details: t,
                                timeline: [{
                                    start: n,
                                    end: n,
                                    threadState: t.threadState
                                }]
                            });
                            m()(a, function(e) {
                                return e === t.threadId
                            })
                        }), a.forEach(function(t) {
                            var a = e.threads[t];
                            a.threadState = "TERMINATED", a.details = null, a.timeline[a.timeline.length - 1].end = n
                        })
                    },
                    fetchThreaddump: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.instance.fetchThreaddump();
                                    case 2:
                                        return e = t.sent, t.abrupt("return", e.data.threads);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return t.error = null, Object(h["u"])(0, 1e3).pipe(Object(h["h"])(t.fetchThreaddump)).subscribe({
                            next: function(e) {
                                t.hasLoaded = !0, t.updateTimelines(e)
                            },
                            error: function(e) {
                                t.hasLoaded = !0, console.warn("Fetching threaddump failed:", e), t.error = e
                            }
                        })
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/threaddump",
                        parent: "instances",
                        path: "threaddump",
                        component: this,
                        label: "Threads",
                        group: "JVM",
                        order: 400,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("threaddump")
                        }
                    })
                }
            },
            D = B,
            q = Object(L["a"])(D, a, s, !1, null, null, null);
        e["default"] = q.exports
    },
    "71a8": function(t, e, n) {
        "use strict";
        var a = n("e17c"),
            s = n.n(a);
        s.a
    },
    "71e1": function(t, e, n) {},
    7213: function(t, e, n) {
        "use strict";
        var a = n("d3b2"),
            s = n.n(a);
        s.a
    },
    7351: function(t, e, n) {},
    7398: function(t, e, n) {},
    "76bb": function(t, e, n) {},
    "76c1": function(t, e, n) {
        "use strict";
        (function(t) {
            n("ac6a");
            var a = n("5d73"),
                s = n.n(a),
                r = (n("7f7f"), n("96cf"), n("3b8d")),
                i = n("8be7"),
                o = n("6edf"),
                c = n.n(o),
                l = n("3ff1"),
                u = n.n(l),
                d = !1,
                p = {
                    favicon: "assets/img/favicon.png",
                    faviconDanger: "assets/img/favicon-danger.png"
                };
            t.SBA && t.SBA.uiSettings && (t.SBA.uiSettings.favicon && (p.favicon = t.SBA.uiSettings.favicon), t.SBA.uiSettings.faviconDanger && (p.faviconDanger = t.SBA.uiSettings.faviconDanger));
            var h = function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (!("Notification" in window)) {
                                        t.next = 7;
                                        break
                                    }
                                    if (d = "granted" === window.Notification.permission, d || "denied" === window.Notification.permission) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 5, window.Notification.requestPermission();
                                case 5:
                                    e = t.sent, d = "granted" === e;
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                f = function(t, e) {
                    return v("".concat(t.name, " is now ").concat(t.status), {
                        tag: "".concat(t.name, "-").concat(t.status),
                        lang: "en",
                        body: "was ".concat(e.status, "."),
                        icon: "UP" === t.status ? p.favicon : p.faviconDanger,
                        renotify: !0,
                        timeout: 5e3
                    })
                },
                m = function(t) {
                    var e = t.count,
                        n = t.status,
                        a = t.oldStatus;
                    return v("".concat(e, " applications are now ").concat(n), {
                        lang: "en",
                        body: "was ".concat(a, "."),
                        icon: "UP" === n ? p.favicon : p.faviconDanger,
                        timeout: 5e3
                    })
                },
                v = function(t, e) {
                    if (d) {
                        var n = new window.Notification(t, e);
                        null !== e.url && (n.onclick = function() {
                            window.focus(), window.open(e.url, "_self")
                        }), e.timeout > 0 && (n.onshow = function() {
                            return setTimeout(function() {
                                return n.close()
                            }, e.timeout)
                        })
                    }
                };
            e["a"] = {
                install: function(t) {
                    var e = t.applicationStore;
                    h();
                    var n = new i["c"];
                    n.pipe(Object(i["e"])(1e3), Object(i["l"])(function(t) {
                        return t.length > 0
                    })).subscribe({
                        next: function(t) {
                            var e = c()(t, function(t) {
                                    return "".concat(t.oldApplication.status, "-").concat(t.application.status)
                                }),
                                n = !0,
                                a = !1,
                                r = void 0;
                            try {
                                for (var i, o = s()(u()(e)); !(n = (i = o.next()).done); n = !0) {
                                    var l = i.value;
                                    l.length <= 5 ? l.forEach(function(t) {
                                        f(t.application, t.oldApplication)
                                    }) : m({
                                        status: l[0].application.status,
                                        oldStatus: l[0].oldApplication.status,
                                        count: t.length
                                    })
                                }
                            } catch (d) {
                                a = !0, r = d
                            } finally {
                                try {
                                    n || null == o.return || o.return()
                                } finally {
                                    if (a) throw r
                                }
                            }
                        }
                    }), e.addEventListener("updated", function(t, e) {
                        t.status !== e.status && n.next({
                            application: t,
                            oldApplication: e
                        })
                    })
                }
            }
        }).call(this, n("c8ba"))
    },
    "76dc": function(t, e, n) {
        "use strict";
        var a = n("39bf"),
            s = n.n(a);
        s.a
    },
    7723: function(t, e, n) {
        "use strict";
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("sba-navbar", {
                    attrs: {
                        views: t.mainViews,
                        applications: t.applications,
                        error: t.error,
                        "applications-initialized": t.applicationsInitialized
                    }
                }), n("router-view", {
                    attrs: {
                        views: t.childViews,
                        applications: t.applications,
                        error: t.error,
                        "applications-initialized": t.applicationsInitialized
                    }
                })], 1)
            },
            s = [],
            r = (n("7f7f"), function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("nav", {
                    staticClass: "navbar is-fixed-top",
                    attrs: {
                        id: "navigation"
                    }
                }, [n("div", {
                    staticClass: "container"
                }, [n("div", {
                    staticClass: "navbar-brand"
                }, [n("router-link", {
                    staticClass: "navbar-item logo",
                    attrs: {
                        to: "/"
                    },
                    domProps: {
                        innerHTML: t._s(t.brand)
                    }
                }), n("div", {
                    staticClass: "navbar-burger burger",
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.showMenu = !t.showMenu
                        }
                    }
                }, [n("span"), n("span"), n("span")])], 1), n("div", {
                    staticClass: "navbar-menu",
                    class: {
                        "is-active": t.showMenu
                    }
                }, [n("div", {
                    staticClass: "navbar-end"
                }, [t._l(t.enabledViews, function(e) {
                    return n("router-link", {
                        key: e.name,
                        staticClass: "navbar-item",
                        attrs: {
                            to: {
                                name: e.name
                            }
                        }
                    }, [n(e.handle, {
                        tag: "component",
                        attrs: {
                            applications: t.applications,
                            error: t.error
                        }
                    })], 1)
                }), t.userName ? n("div", {
                    staticClass: "navbar-item has-dropdown is-hoverable"
                }, [n("a", {
                    staticClass: "navbar-link"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "user-circle",
                        size: "lg"
                    }
                }), t._v(" "), n("span", {
                    domProps: {
                        textContent: t._s(t.userName)
                    }
                })], 1), n("div", {
                    staticClass: "navbar-dropdown"
                }, [n("a", {
                    staticClass: "navbar-item"
                }, [n("form", {
                    attrs: {
                        action: "logout",
                        method: "post"
                    }
                }, [t.csrfToken ? n("input", {
                    attrs: {
                        type: "hidden",
                        name: t.csrfParameterName
                    },
                    domProps: {
                        value: t.csrfToken
                    }
                }) : t._e(), n("button", {
                    staticClass: "button is-icon",
                    attrs: {
                        type: "submit",
                        value: "logout"
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "sign-out-alt"
                    }
                }), t._v(" Log out\n                ")], 1)])])])]) : t._e()], 2)])])])
            }),
            i = [],
            o = n("69d1"),
            c = o["a"],
            l = (n("8a74"), n("2877")),
            u = Object(l["a"])(c, r, i, !1, null, null, null),
            d = u.exports,
            p = {
                props: {
                    views: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    applications: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    error: {
                        type: Error,
                        default: null
                    },
                    applicationsInitialized: {
                        type: Boolean,
                        default: !1
                    }
                },
                components: {
                    sbaNavbar: d
                },
                computed: {
                    mainViews: function() {
                        return this.views.filter(function(t) {
                            return !t.parent
                        })
                    },
                    activeMainViewName: function() {
                        var t = this.$route.meta.view;
                        return t && (t.parent || t.name)
                    },
                    childViews: function() {
                        var t = this;
                        return this.views.filter(function(e) {
                            return e.parent === t.activeMainViewName
                        })
                    }
                }
            },
            h = p,
            f = Object(l["a"])(h, a, s, !1, null, null, null);
        e["a"] = f.exports
    },
    77264: function(t, e, n) {
        "use strict";
        var a = n("b442"),
            s = n.n(a);
        s.a
    },
    "7ba9": function(t, e, n) {},
    "7e47": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section"
                }, [n("div", {
                    staticClass: "details-header"
                }, [t.instance ? n("h1", {
                    staticClass: "title",
                    domProps: {
                        textContent: t._s(t.instance.registration.name)
                    }
                }) : t._e(), t.instance ? n("h2", {
                    staticClass: "subtitle is-5"
                }, [t._v("\n      Id: "), n("span", {
                    domProps: {
                        textContent: t._s(t.instance.id)
                    }
                })]) : t._e(), t.instance ? n("sba-tags", {
                    attrs: {
                        tags: t.instance.tags
                    }
                }) : t._e(), n("div", {
                    staticClass: "details-header__urls"
                }, [n("a", {
                    staticClass: "button is-small ",
                    attrs: {
                        href: t.instance.registration.serviceUrl
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "home"
                    }
                }), t._v(" \n        "), n("span", {
                    domProps: {
                        textContent: t._s(t.instance.registration.serviceUrl)
                    }
                })], 1), n("a", {
                    staticClass: "button is-small ",
                    attrs: {
                        href: t.instance.registration.managementUrl
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "wrench"
                    }
                }), t._v(" \n        "), n("span", {
                    domProps: {
                        textContent: t._s(t.instance.registration.managementUrl)
                    }
                })], 1), n("a", {
                    staticClass: "button is-small ",
                    attrs: {
                        href: t.instance.registration.healthUrl
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "heartbeat"
                    }
                }), t._v(" \n        "), n("span", {
                    domProps: {
                        textContent: t._s(t.instance.registration.healthUrl)
                    }
                })], 1)])], 1), n("hr"), t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n        Fetching metrics index failed.\n      ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("div", {
                    staticClass: "columns is-desktop"
                }, [n("div", {
                    staticClass: "column is-half-desktop"
                }, [t.hasInfo ? n("details-info", {
                    attrs: {
                        instance: t.instance
                    }
                }) : t._e(), t.hasMetadata ? n("details-metadata", {
                    attrs: {
                        instance: t.instance
                    }
                }) : t._e()], 1), n("div", {
                    staticClass: "column is-half-desktop"
                }, [n("details-health", {
                    attrs: {
                        instance: t.instance
                    }
                })], 1)]), n("div", {
                    staticClass: "columns is-desktop"
                }, [n("div", {
                    staticClass: "column is-half-desktop"
                }, [t.hasProcess ? n("details-process", {
                    attrs: {
                        instance: t.instance
                    }
                }) : t._e(), t.hasGc ? n("details-gc", {
                    attrs: {
                        instance: t.instance
                    }
                }) : t._e()], 1), n("div", {
                    staticClass: "column is-half-desktop"
                }, [t.hasThreads ? n("details-threads", {
                    attrs: {
                        instance: t.instance
                    }
                }) : t._e()], 1)]), n("div", {
                    staticClass: "columns is-desktop"
                }, [n("div", {
                    staticClass: "column is-half-desktop"
                }, [t.hasMemory ? n("details-memory", {
                    attrs: {
                        instance: t.instance,
                        type: "heap"
                    }
                }) : t._e()], 1), n("div", {
                    staticClass: "column is-half-desktop"
                }, [t.hasMemory ? n("details-memory", {
                    attrs: {
                        instance: t.instance,
                        type: "nonheap"
                    }
                }) : t._e()], 1)]), n("div", {
                    staticClass: "columns is-desktop"
                }, [n("div", {
                    staticClass: "column is-half-desktop"
                }, [t.hasDatasources ? n("details-datasources", {
                    attrs: {
                        instance: t.instance
                    }
                }) : t._e()], 1), n("div", {
                    staticClass: "column is-half-desktop"
                }, [t.hasCaches ? n("details-caches", {
                    attrs: {
                        instance: t.instance
                    }
                }) : t._e()], 1)])])
            },
            s = [],
            r = (n("96cf"), n("3b8d")),
            i = (n("6762"), n("2fdb"), n("df0d")),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", t._l(t.caches, function(e) {
                    return n("details-cache", {
                        key: e,
                        attrs: {
                            instance: t.instance,
                            "cache-name": e
                        }
                    })
                }), 1)
            },
            c = [],
            l = (n("ac6a"), n("d76e")),
            u = n("8be7"),
            d = n("eed6"),
            p = n.n(d),
            h = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.hasLoaded ? n("sba-panel", {
                    attrs: {
                        title: "Cache: " + t.cacheName
                    }
                }, [n("div", [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching cache metrics failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.current ? n("div", {
                    staticClass: "level cache-current"
                }, [void 0 !== t.current.hit ? n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading has-bullet has-bullet-info"
                }, [t._v("\n            Hits\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.current.hit)
                    }
                })])]) : t._e(), void 0 !== t.current.miss ? n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading has-bullet has-bullet-warning"
                }, [t._v("\n            Misses\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.current.miss)
                    }
                })])]) : t._e(), void 0 !== t.ratio ? n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            Hit ratio\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.ratio)
                    }
                })])]) : t._e(), void 0 !== t.current.size ? n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            Size\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.current.size)
                    }
                })])]) : t._e()]) : t._e(), t.chartData.length > 0 ? n("cache-chart", {
                    attrs: {
                        data: t.chartData
                    }
                }) : t._e()], 1)]) : t._e()
            },
            f = [],
            m = n("cebc"),
            v = n("795b"),
            g = n.n(v),
            b = (n("5df3"), n("768b")),
            _ = n("ab8c"),
            C = n.n(_),
            y = n("c1df"),
            x = n.n(y),
            w = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "cache-chart"
                }, [n("svg", {
                    staticClass: "cache-chart__svg"
                })])
            },
            k = [],
            j = n("4700"),
            O = {
                props: {
                    data: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {}
                },
                methods: {
                    drawChart: function(t) {
                        var e = this,
                            n = 1 === t.length ? t.concat([Object(m["a"])({}, t[0], {
                                timestamp: t[0].timestamp + 1
                            })]) : t,
                            a = j["a"].extent(n, function(t) {
                                return t.timestamp
                            }),
                            s = j["a"].scaleTime().range([0, e.width]).domain(a),
                            r = j["a"].scaleLinear().range([e.height, 0]).domain([0, 1.05 * j["a"].max(n, function(t) {
                                return t.total
                            })]),
                            i = e.areas.selectAll(".cache-chart__area--miss").data([n]);
                        i.enter().append("path").merge(i).attr("class", "cache-chart__area--miss").attr("d", j["a"].area().x(function(t) {
                            return s(t.timestamp)
                        }).y0(function(t) {
                            return r(t.hit)
                        }).y1(function(t) {
                            return r(t.total)
                        })), i.exit().remove();
                        var o = e.areas.selectAll(".cache-chart__area--hit").data([n]);
                        o.enter().append("path").merge(o).attr("class", "cache-chart__area--hit").attr("d", j["a"].area().x(function(t) {
                            return s(t.timestamp)
                        }).y0(r(0)).y1(function(t) {
                            return r(t.hit)
                        })), o.exit().remove(), e.xAxis.call(j["a"].axisBottom(s).ticks(5).tickFormat(function(t) {
                            return x()(t).format("HH:mm:ss")
                        })), e.yAxis.call(j["a"].axisLeft(r).ticks(5).tickFormat(function(t) {
                            return t <= 1e3 ? t : (t / 1e3).toFixed(1) + "K"
                        }))
                    }
                },
                mounted: function() {
                    var t = {
                        top: 5,
                        right: 5,
                        bottom: 30,
                        left: 50
                    };
                    this.width = this.$el.getBoundingClientRect().width - t.left - t.right, this.height = this.$el.getBoundingClientRect().height - t.top - t.bottom, this.chartLayer = j["a"].select(this.$el.querySelector(".cache-chart__svg")).append("g").attr("transform", "translate(".concat(t.left, ",").concat(t.top, ")")), this.xAxis = this.chartLayer.append("g").attr("class", "cache-chart__axis-x").attr("transform", "translate(0,".concat(this.height, ")")), this.yAxis = this.chartLayer.append("g").attr("class", "cache-chart__axis-y").attr("stroke", null), this.areas = this.chartLayer.append("g"), this.drawChart(this.data)
                },
                watch: {
                    data: "drawChart"
                }
            },
            S = O,
            P = (n("be22"), n("2877")),
            E = Object(P["a"])(S, w, k, !1, null, null, null),
            R = E.exports,
            L = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    },
                    cacheName: {
                        type: String,
                        required: !0
                    }
                },
                mixins: [l["a"]],
                components: {
                    cacheChart: R
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        current: null,
                        shouldFetchCacheSize: !0,
                        shouldFetchCacheHits: !0,
                        shouldFetchCacheMisses: !0,
                        chartData: []
                    }
                },
                computed: {
                    ratio: function() {
                        if (C()(this.current.hit) && C()(this.current)) {
                            var t = this.current.hit + this.current.miss;
                            return t > 0 ? (this.current.hit / t * 100).toFixed(2) + "%" : "-"
                        }
                    }
                },
                methods: {
                    fetchMetrics: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, s, r;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, g.a.all([this.fetchCacheHits(), this.fetchCacheMisses(), this.fetchCacheSize()]);
                                    case 2:
                                        return e = t.sent, n = Object(b["a"])(e, 3), a = n[0], s = n[1], r = n[2], t.abrupt("return", {
                                            hit: a,
                                            miss: s,
                                            total: a + (s || 0),
                                            size: r
                                        });
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchCacheHits: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.shouldFetchCacheHits) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.prev = 1, t.next = 4, this.instance.fetchMetric("cache.gets", {
                                            name: this.cacheName,
                                            result: "hit"
                                        });
                                    case 4:
                                        return e = t.sent, t.abrupt("return", e.data.measurements[0].value);
                                    case 8:
                                        return t.prev = 8, t.t0 = t["catch"](1), this.shouldFetchCacheHits = !1, console.warn("Fetching cache ".concat(this.cacheName, " hits failed - error is ignored"), t.t0), t.abrupt("return", void 0);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchCacheMisses: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.shouldFetchCacheMisses) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.prev = 1, t.next = 4, this.instance.fetchMetric("cache.gets", {
                                            name: this.cacheName,
                                            result: "miss"
                                        });
                                    case 4:
                                        return e = t.sent, t.abrupt("return", e.data.measurements[0].value);
                                    case 8:
                                        return t.prev = 8, t.t0 = t["catch"](1), this.shouldFetchCacheMisses = !1, console.warn("Fetching cache ".concat(this.cacheName, " misses failed - error is ignored"), t.t0), t.abrupt("return", void 0);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchCacheSize: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.shouldFetchCacheSize) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.prev = 1, t.next = 4, this.instance.fetchMetric("cache.size", {
                                            name: this.cacheName
                                        });
                                    case 4:
                                        return e = t.sent, t.abrupt("return", e.data.measurements[0].value);
                                    case 8:
                                        return t.prev = 8, t.t0 = t["catch"](1), this.shouldFetchCacheSize = !1, console.warn("Fetching cache ".concat(this.cacheName, " size failed - error is ignored"), t.t0), t.abrupt("return", void 0);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return Object(u["u"])(0, 2500).pipe(Object(u["h"])(t.fetchMetrics)).subscribe({
                            next: function(e) {
                                t.hasLoaded = !0, t.current = e, t.chartData.push(Object(m["a"])({}, e, {
                                    timestamp: x()().valueOf()
                                }))
                            },
                            error: function(e) {
                                t.hasLoaded = !0, console.warn("Fetching cache ".concat(t.cacheName, " metrics failed:"), e), t.error = e
                            }
                        })
                    }
                }
            },
            A = L,
            F = (n("4f18"), Object(P["a"])(A, h, f, !1, null, null, null)),
            M = F.exports,
            T = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                mixins: [l["a"]],
                components: {
                    detailsCache: M
                },
                data: function() {
                    return {
                        caches: []
                    }
                },
                methods: {
                    fetchCaches: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.instance.fetchMetric("cache.gets");
                                    case 2:
                                        return e = t.sent, t.abrupt("return", p()(e.data.availableTags.filter(function(t) {
                                            return "name" === t.tag
                                        })[0].values));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return Object(u["u"])(0, 2500).pipe(Object(u["h"])(this.fetchCaches)).subscribe({
                            next: function(e) {
                                t.caches = e
                            },
                            error: function(t) {
                                console.warn("Fetching caches failed:", t)
                            }
                        })
                    }
                }
            },
            $ = T,
            I = Object(P["a"])($, o, c, !1, null, null, null),
            N = I.exports,
            B = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", t._l(t.dataSources, function(e) {
                    return n("details-datasource", {
                        key: e,
                        attrs: {
                            instance: t.instance,
                            "data-source": e
                        }
                    })
                }), 1)
            },
            D = [],
            q = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.hasLoaded ? n("sba-panel", {
                    attrs: {
                        title: "Datasource: " + t.dataSource
                    }
                }, [n("div", [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching datasource metrics failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.current ? n("div", {
                    staticClass: "level datasource-current"
                }, [n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading has-bullet has-bullet-info"
                }, [t._v("\n            Active connections\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.current.active)
                    }
                })])]), n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            Min connections\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.current.min)
                    }
                })])]), n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            Max connections\n          ")]), t.current.max >= 0 ? n("p", {
                    domProps: {
                        textContent: t._s(t.current.max)
                    }
                }) : n("p", [t._v("\n            unlimited\n          ")])])])]) : t._e(), t.chartData.length > 0 ? n("datasource-chart", {
                    attrs: {
                        data: t.chartData
                    }
                }) : t._e()], 1)]) : t._e()
            },
            U = [],
            H = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "datasource-chart"
                }, [n("svg", {
                    staticClass: "datasource-chart__svg"
                })])
            },
            V = [],
            z = {
                props: {
                    data: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                methods: {
                    drawChart: function(t) {
                        var e = this,
                            n = 1 === t.length ? t.concat([Object(m["a"])({}, t[0], {
                                timestamp: t[0].timestamp + 1
                            })]) : t,
                            a = j["a"].extent(n, function(t) {
                                return t.timestamp
                            }),
                            s = j["a"].scaleTime().range([0, e.width]).domain(a),
                            r = j["a"].scaleLinear().range([e.height, 0]).domain([0, 1.05 * j["a"].max(n, function(t) {
                                return t.active
                            })]),
                            i = e.areas.selectAll(".datasource-chart__line--max").data([n]);
                        i.enter().append("path").merge(i).attr("class", "datasource-chart__line--max").attr("d", j["a"].line().x(function(t) {
                            return s(t.timestamp)
                        }).y(function(t) {
                            return r(t.max)
                        })), i.exit().remove();
                        var o = e.areas.selectAll(".datasource-chart__area--active").data([n]);
                        o.enter().append("path").merge(o).attr("class", "datasource-chart__area--active").attr("d", j["a"].area().x(function(t) {
                            return s(t.timestamp)
                        }).y0(r(0)).y1(function(t) {
                            return r(t.active)
                        })), o.exit().remove(), e.xAxis.call(j["a"].axisBottom(s).ticks(5).tickFormat(function(t) {
                            return x()(t).format("HH:mm:ss")
                        })), e.yAxis.call(j["a"].axisLeft(r).ticks(5))
                    }
                },
                mounted: function() {
                    var t = {
                        top: 5,
                        right: 5,
                        bottom: 30,
                        left: 50
                    };
                    this.width = this.$el.getBoundingClientRect().width - t.left - t.right, this.height = this.$el.getBoundingClientRect().height - t.top - t.bottom, this.chartLayer = j["a"].select(this.$el.querySelector(".datasource-chart__svg")).append("g").attr("transform", "translate(".concat(t.left, ",").concat(t.top, ")")), this.xAxis = this.chartLayer.append("g").attr("class", "datasource-chart__axis-x").attr("transform", "translate(0,".concat(this.height, ")")), this.yAxis = this.chartLayer.append("g").attr("class", "datasource-chart__axis-y").attr("stroke", null), this.areas = this.chartLayer.append("g"), this.drawChart(this.data)
                },
                watch: {
                    data: "drawChart"
                }
            },
            G = z,
            W = (n("b58b"), Object(P["a"])(G, H, V, !1, null, null, null)),
            J = W.exports,
            X = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    },
                    dataSource: {
                        type: String,
                        required: !0
                    }
                },
                mixins: [l["a"]],
                components: {
                    datasourceChart: J
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        current: null,
                        chartData: []
                    }
                },
                methods: {
                    fetchMetrics: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.instance.fetchMetric("data.source.active.connections", {
                                            name: this.dataSource
                                        }), n = this.instance.fetchMetric("data.source.min.connections", {
                                            name: this.dataSource
                                        }), a = this.instance.fetchMetric("data.source.max.connections", {
                                            name: this.dataSource
                                        }), t.next = 5, e;
                                    case 5:
                                        return t.t0 = t.sent.data.measurements[0].value, t.next = 8, n;
                                    case 8:
                                        return t.t1 = t.sent.data.measurements[0].value, t.next = 11, a;
                                    case 11:
                                        return t.t2 = t.sent.data.measurements[0].value, t.abrupt("return", {
                                            active: t.t0,
                                            min: t.t1,
                                            max: t.t2
                                        });
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return Object(u["u"])(0, 2500).pipe(Object(u["h"])(t.fetchMetrics)).subscribe({
                            next: function(e) {
                                t.hasLoaded = !0, t.current = e, t.chartData.push(Object(m["a"])({}, e, {
                                    timestamp: x()().valueOf()
                                }))
                            },
                            error: function(e) {
                                t.hasLoaded = !0, console.warn("Fetching datasource ".concat(t.dataSource, " metrics failed:"), e), t.error = e
                            }
                        })
                    }
                }
            },
            K = X,
            Y = (n("7213"), Object(P["a"])(K, q, U, !1, null, null, null)),
            Z = Y.exports,
            Q = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                mixins: [l["a"]],
                components: {
                    detailsDatasource: Z
                },
                data: function() {
                    return {
                        dataSources: []
                    }
                },
                methods: {
                    fetchDataSources: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.instance.fetchMetric("data.source.active.connections");
                                    case 2:
                                        return e = t.sent, t.abrupt("return", e.data.availableTags.filter(function(t) {
                                            return "name" === t.tag
                                        })[0].values);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return Object(u["u"])(0, 2500).pipe(Object(u["h"])(this.fetchDataSources)).subscribe({
                            next: function(e) {
                                t.dataSources = e
                            },
                            error: function(t) {
                                console.warn("Fetching datasources failed:", t)
                            }
                        })
                    }
                }
            },
            tt = Q,
            et = Object(P["a"])(tt, B, D, !1, null, null, null),
            nt = et.exports,
            at = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.hasLoaded ? n("sba-panel", {
                    attrs: {
                        title: "Garbage Collection Pauses"
                    }
                }, [n("div", [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching GC metrics failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.current ? n("div", {
                    staticClass: "level"
                }, [n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            Count\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.current.count)
                    }
                })])]), n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            Total time spent\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.current.total_time.asSeconds().toFixed(4) + "s")
                    }
                })])]), n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            Max time spent\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.current.max.asSeconds().toFixed(4) + "s")
                    }
                })])])]) : t._e()])]) : t._e()
            },
            st = [],
            rt = n("bd86"),
            it = n("2353"),
            ot = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                mixins: [l["a"]],
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        current: null
                    }
                },
                methods: {
                    fetchMetrics: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e, n;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.instance.fetchMetric("jvm.gc.pause");
                                    case 2:
                                        return e = t.sent, n = e.data.measurements.reduce(function(t, e) {
                                            return Object(m["a"])({}, t, Object(rt["a"])({}, e.statistic.toLowerCase(), e.value))
                                        }, {}), t.abrupt("return", Object(m["a"])({}, n, {
                                            total_time: x.a.duration(Object(it["b"])(n.total_time, e.baseUnit)),
                                            max: x.a.duration(Object(it["b"])(n.max, e.baseUnit))
                                        }));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return Object(u["u"])(0, 2500).pipe(Object(u["h"])(this.fetchMetrics)).subscribe({
                            next: function(e) {
                                t.hasLoaded = !0, t.current = e
                            },
                            error: function(e) {
                                t.hasLoaded = !0, console.warn("Fetching GC metrics failed:", e), t.error = e
                            }
                        })
                    }
                }
            },
            ct = ot,
            lt = Object(P["a"])(ct, at, st, !1, null, null, null),
            ut = lt.exports,
            dt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("sba-panel", {
                    attrs: {
                        title: "Health"
                    }
                }, [n("div", [t.error ? n("div", {
                    staticClass: "message is-warning"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-warning",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching live health status failed. This is the last known information.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("health-details", {
                    attrs: {
                        name: "Instance",
                        health: t.health
                    }
                })], 1)])
            },
            pt = [],
            ht = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("table", {
                    staticClass: "health-details table is-fullwidth"
                }, [n("tr", [n("th", {
                    attrs: {
                        colspan: "2"
                    }
                }, [n("span", {
                    domProps: {
                        textContent: t._s(t.name)
                    }
                }), n("span", {
                    staticClass: "health-details__status",
                    class: "health-details__status--" + t.health.status,
                    domProps: {
                        textContent: t._s(t.health.status)
                    }
                })])]), t.details && t.details.length > 0 ? n("tr", [n("td", {
                    staticClass: "health-details__nested",
                    attrs: {
                        colspan: "2"
                    }
                }, [n("table", {
                    staticClass: "health-details table is-fullwidth"
                }, t._l(t.details, function(e) {
                    return n("tr", {
                        key: e.name,
                        staticClass: "health-details__detail"
                    }, [n("td", {
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }), "diskSpace" === t.name ? n("td", {
                        domProps: {
                            textContent: t._s(t.prettyBytes(e.value))
                        }
                    }) : n("td", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.value)
                        }
                    })])
                }), 0)])]) : t._e(), t._l(t.childHealth, function(t) {
                    return n("tr", {
                        key: t.name
                    }, [n("td", {
                        staticClass: "health-details__nested",
                        attrs: {
                            colspan: "2"
                        }
                    }, [n("health-details", {
                        attrs: {
                            name: t.name,
                            health: t.value
                        }
                    })], 1)])
                })], 2)
            },
            ft = [],
            mt = n("2d1f"),
            vt = n.n(mt),
            gt = n("7618"),
            bt = n("94df"),
            _t = n.n(bt),
            Ct = function(t) {
                return null !== t && "object" === Object(gt["a"])(t) && t.hasOwnProperty("status")
            },
            yt = {
                name: "HealthDetails",
                props: {
                    name: {
                        type: String,
                        required: !0
                    },
                    health: {
                        type: Object,
                        required: !0
                    }
                },
                methods: {
                    prettyBytes: _t.a
                },
                computed: {
                    details: function() {
                        return this.health.details ? vt()(this.health.details).filter(function(t) {
                            var e = Object(b["a"])(t, 2),
                                n = e[1];
                            return !Ct(n)
                        }).map(function(t) {
                            var e = Object(b["a"])(t, 2),
                                n = e[0],
                                a = e[1];
                            return {
                                name: n,
                                value: a
                            }
                        }) : []
                    },
                    childHealth: function() {
                        return this.health.details ? vt()(this.health.details).filter(function(t) {
                            var e = Object(b["a"])(t, 2),
                                n = e[1];
                            return Ct(n)
                        }).map(function(t) {
                            var e = Object(b["a"])(t, 2),
                                n = e[0],
                                a = e[1];
                            return {
                                name: n,
                                value: a
                            }
                        }) : []
                    }
                }
            },
            xt = yt,
            wt = (n("2fb9"), Object(P["a"])(xt, ht, ft, !1, null, null, null)),
            kt = wt.exports,
            jt = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                components: {
                    healthDetails: kt
                },
                data: function() {
                    return {
                        error: null,
                        liveHealth: null
                    }
                },
                created: function() {
                    this.fetchHealth()
                },
                computed: {
                    health: function() {
                        return this.liveHealth || this.instance.statusInfo
                    }
                },
                methods: {
                    fetchHealth: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, t.prev = 1, t.next = 4, this.instance.fetchHealth();
                                    case 4:
                                        e = t.sent, this.liveHealth = e.data, t.next = 12;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1), console.warn("Fetching live health failed:", t.t0), this.error = t.t0;
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            },
            Ot = jt,
            St = Object(P["a"])(Ot, dt, pt, !1, null, null, null),
            Pt = St.exports,
            Et = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("sba-panel", {
                    attrs: {
                        title: "Info"
                    }
                }, [n("div", [t.error ? n("div", {
                    staticClass: "message is-warning"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-warning",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching live info failed. This is the last known information.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("div", {
                    staticClass: "content info"
                }, [t.isEmptyInfo ? n("p", {
                    staticClass: "is-muted"
                }, [t._v("\n        No info provided.\n      ")]) : n("table", {
                    staticClass: "table"
                }, t._l(t.info, function(e, a) {
                    return n("tr", {
                        key: a
                    }, [n("td", {
                        staticClass: "info__key",
                        domProps: {
                            textContent: t._s(a)
                        }
                    }), n("td", [n("sba-formatted-obj", {
                        attrs: {
                            value: e
                        }
                    })], 1)])
                }), 0)])])])
            },
            Rt = [],
            Lt = n("a4bb"),
            At = n.n(Lt),
            Ft = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        error: null,
                        liveInfo: null
                    }
                },
                computed: {
                    info: function() {
                        return this.liveInfo || this.instance.info
                    },
                    isEmptyInfo: function() {
                        return At()(this.info).length <= 0
                    }
                },
                created: function() {
                    this.fetchInfo()
                },
                methods: {
                    fetchInfo: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.instance.hasEndpoint("info")) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.prev = 1, this.error = null, t.next = 5, this.instance.fetchInfo();
                                    case 5:
                                        e = t.sent, this.liveInfo = e.data, t.next = 13;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t["catch"](1), this.error = t.t0, console.warn("Fetching info failed:", t.t0);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 9]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            },
            Mt = Ft,
            Tt = (n("5643"), Object(P["a"])(Mt, Et, Rt, !1, null, null, null)),
            $t = Tt.exports,
            It = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.hasLoaded ? n("sba-panel", {
                    attrs: {
                        title: "Memory: " + t.name
                    }
                }, [n("div", [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching memory metrics failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.current ? n("div", {
                    staticClass: "level memory-current"
                }, [t.current.metaspace ? n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading has-bullet has-bullet-primary"
                }, [t._v("\n            Metaspace\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.prettyBytes(t.current.metaspace))
                    }
                })])]) : t._e(), n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading has-bullet has-bullet-info"
                }, [t._v("\n            Used\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.prettyBytes(t.current.used))
                    }
                })])]), n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading has-bullet has-bullet-warning"
                }, [t._v("\n            Size\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.prettyBytes(t.current.committed))
                    }
                })])]), t.current.max >= 0 ? n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            Max\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.prettyBytes(t.current.max))
                    }
                })])]) : t._e()]) : t._e(), t.chartData.length > 0 ? n("mem-chart", {
                    attrs: {
                        data: t.chartData
                    }
                }) : t._e()], 1)]) : t._e()
            },
            Nt = [],
            Bt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "mem-chart"
                }, [n("svg", {
                    staticClass: "mem-chart__svg"
                })])
            },
            Dt = [],
            qt = {
                props: {
                    data: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {}
                },
                methods: {
                    drawChart: function(t) {
                        var e = this,
                            n = 1 === t.length ? t.concat([Object(m["a"])({}, t[0], {
                                timestamp: t[0].timestamp + 1
                            })]) : t,
                            a = j["a"].extent(n, function(t) {
                                return t.timestamp
                            }),
                            s = j["a"].scaleTime().range([0, e.width]).domain(a),
                            r = j["a"].scaleLinear().range([e.height, 0]).domain([0, 1.05 * j["a"].max(n, function(t) {
                                return t.committed
                            })]),
                            i = e.areas.selectAll(".mem-chart__line--max").data([n]);
                        i.enter().append("path").merge(i).attr("class", "mem-chart__line--max").attr("d", j["a"].line().x(function(t) {
                            return s(t.timestamp)
                        }).y(function(t) {
                            return r(t.max)
                        })), i.exit().remove();
                        var o = e.areas.selectAll(".mem-chart__area--committed").data([n]);
                        o.enter().append("path").merge(o).attr("class", "mem-chart__area--committed").attr("d", j["a"].area().x(function(t) {
                            return s(t.timestamp)
                        }).y0(function(t) {
                            return r(t.used)
                        }).y1(function(t) {
                            return r(t.committed)
                        })), o.exit().remove();
                        var c = e.areas.selectAll(".mem-chart__area--used").data([n]);
                        c.enter().append("path").merge(c).attr("class", "mem-chart__area--used").attr("d", j["a"].area().x(function(t) {
                            return s(t.timestamp)
                        }).y0(function(t) {
                            return r(t.metaspace || 0)
                        }).y1(function(t) {
                            return r(t.used)
                        })), c.exit().remove();
                        var l = e.areas.selectAll(".mem-chart__area--metaspace").data([n]);
                        l.enter().append("path").merge(l).attr("class", "mem-chart__area--metaspace").attr("d", j["a"].area().x(function(t) {
                            return s(t.timestamp)
                        }).y0(r(0)).y1(function(t) {
                            return r(t.metaspace)
                        })), l.exit().remove(), e.xAxis.call(j["a"].axisBottom(s).ticks(5).tickFormat(function(t) {
                            return x()(t).format("HH:mm:ss")
                        })), e.yAxis.call(j["a"].axisLeft(r).ticks(5).tickFormat(_t.a))
                    }
                },
                mounted: function() {
                    var t = {
                        top: 5,
                        right: 5,
                        bottom: 30,
                        left: 50
                    };
                    this.width = this.$el.getBoundingClientRect().width - t.left - t.right, this.height = this.$el.getBoundingClientRect().height - t.top - t.bottom, this.chartLayer = j["a"].select(this.$el.querySelector(".mem-chart__svg")).append("g").attr("transform", "translate(".concat(t.left, ",").concat(t.top, ")")), this.xAxis = this.chartLayer.append("g").attr("class", "mem-chart__axis-x").attr("transform", "translate(0,".concat(this.height, ")")), this.yAxis = this.chartLayer.append("g").attr("class", "mem-chart__axis-y").attr("stroke", null), this.areas = this.chartLayer.append("g"), this.drawChart(this.data)
                },
                watch: {
                    data: "drawChart"
                }
            },
            Ut = qt,
            Ht = (n("837e"), Object(P["a"])(Ut, Bt, Dt, !1, null, null, null)),
            Vt = Ht.exports,
            zt = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    },
                    type: {
                        type: String,
                        required: !0
                    }
                },
                mixins: [l["a"]],
                components: {
                    memChart: Vt
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        current: null,
                        chartData: []
                    }
                },
                computed: {
                    name: function() {
                        switch (this.type) {
                            case "heap":
                                return "Heap";
                            case "nonheap":
                                return "Non heap";
                            default:
                                return this.type
                        }
                    }
                },
                methods: {
                    prettyBytes: _t.a,
                    fetchMetrics: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, s;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.instance.fetchMetric("jvm.memory.max", {
                                            area: this.type
                                        }), n = this.instance.fetchMetric("jvm.memory.used", {
                                            area: this.type
                                        }), a = "nonheap" === this.type ? this.instance.fetchMetric("jvm.memory.used", {
                                            area: this.type,
                                            id: "Metaspace"
                                        }) : null, s = this.instance.fetchMetric("jvm.memory.committed", {
                                            area: this.type
                                        }), t.next = 6, e;
                                    case 6:
                                        return t.t0 = t.sent.data.measurements[0].value, t.next = 9, n;
                                    case 9:
                                        if (t.t1 = t.sent.data.measurements[0].value, !a) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.next = 13, a;
                                    case 13:
                                        t.t2 = t.sent.data.measurements[0].value, t.next = 17;
                                        break;
                                    case 16:
                                        t.t2 = null;
                                    case 17:
                                        return t.t3 = t.t2, t.next = 20, s;
                                    case 20:
                                        return t.t4 = t.sent.data.measurements[0].value, t.abrupt("return", {
                                            max: t.t0,
                                            used: t.t1,
                                            metaspace: t.t3,
                                            committed: t.t4
                                        });
                                    case 22:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return Object(u["u"])(0, 2500).pipe(Object(u["h"])(this.fetchMetrics)).subscribe({
                            next: function(e) {
                                t.hasLoaded = !0, t.current = e, t.chartData.push(Object(m["a"])({}, e, {
                                    timestamp: x()().valueOf()
                                }))
                            },
                            error: function(e) {
                                t.hasLoaded = !0, console.warn("Fetching memory metrics failed:", e), t.error = e
                            }
                        })
                    }
                }
            },
            Gt = zt,
            Wt = (n("2dfc"), Object(P["a"])(Gt, It, Nt, !1, null, null, null)),
            Jt = Wt.exports,
            Xt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("sba-panel", {
                    attrs: {
                        title: "Metadata"
                    }
                }, [t.metadata ? n("div", {
                    staticClass: "content metadata"
                }, [t.isEmptyMetadata ? n("p", {
                    staticClass: "is-muted"
                }, [t._v("\n      No metadata provided.\n    ")]) : n("table", {
                    staticClass: "table"
                }, t._l(t.metadata, function(e, a) {
                    return n("tr", {
                        key: a
                    }, [n("td", {
                        staticClass: "metadata__key",
                        domProps: {
                            textContent: t._s(a)
                        }
                    }), n("td", [n("sba-formatted-obj", {
                        attrs: {
                            value: e
                        }
                    })], 1)])
                }), 0)]) : t._e()])
            },
            Kt = [],
            Yt = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                computed: {
                    metadata: function() {
                        return this.instance.registration.metadata
                    },
                    isEmptyMetadata: function() {
                        return At()(this.metadata).length <= 0
                    }
                }
            },
            Zt = Yt,
            Qt = (n("34ce"), Object(P["a"])(Zt, Xt, Kt, !1, null, null, null)),
            te = Qt.exports,
            ee = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.hasLoaded ? n("sba-panel", {
                    attrs: {
                        title: "Process"
                    }
                }, [n("div", [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching process metrics failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("div", {
                    staticClass: "level"
                }, [t.pid ? n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            PID\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.pid)
                    }
                })])]) : t._e(), t.uptime ? n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            Uptime\n          ")]), n("p", [n("process-uptime", {
                    attrs: {
                        value: t.toMillis(t.uptime.value, t.uptime.baseUnit)
                    }
                })], 1)])]) : t._e(), t.processCpuLoad ? n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            Process CPU Usage\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.processCpuLoad.toFixed(2))
                    }
                })])]) : t._e(), t.systemCpuLoad ? n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            System CPU Usage\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.systemCpuLoad.toFixed(2))
                    }
                })])]) : t._e(), t.systemCpuCount ? n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            CPUs\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.systemCpuCount)
                    }
                })])]) : t._e()])])]) : t._e()
            },
            ne = [],
            ae = {
                props: ["value"],
                mixins: [l["a"]],
                data: function() {
                    return {
                        startTs: null,
                        offset: null
                    }
                },
                render: function() {
                    return this._v(this.clock)
                },
                computed: {
                    clock: function() {
                        if (!this.value) return null;
                        var t = x.a.duration(this.value + this.offset);
                        return "".concat(Math.floor(t.asDays()), "d ").concat(t.hours(), "h ").concat(t.minutes(), "m ").concat(t.seconds(), "s")
                    }
                },
                watch: {
                    value: "subscribe"
                },
                methods: {
                    createSubscription: function() {
                        if (this.value) {
                            var t = this;
                            return t.startTs = x()(), t.offset = 0, Object(u["u"])(0, 1e3).subscribe({
                                next: function() {
                                    t.offset = x()().valueOf() - t.startTs.valueOf()
                                }
                            })
                        }
                    }
                }
            },
            se = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                mixins: [l["a"]],
                components: {
                    processUptime: ae
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        pid: null,
                        uptime: {
                            value: null,
                            baseUnit: null
                        },
                        systemCpuLoad: null,
                        processCpuLoad: null,
                        systemCpuCount: null
                    }
                },
                created: function() {
                    this.fetchPid(), this.fetchUptime(), this.fetchCpuCount()
                },
                methods: {
                    toMillis: it["b"],
                    fetchUptime: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, this.fetchMetric("process.uptime");
                                    case 3:
                                        e = t.sent, this.uptime = {
                                            value: e.measurements[0].value,
                                            baseUnit: e.baseUnit
                                        }, t.next = 11;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t["catch"](0), this.error = t.t0, console.warn("Fetching Uptime failed:", t.t0);
                                    case 11:
                                        this.hasLoaded = !0;
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [0, 7]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchPid: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.instance.hasEndpoint("env")) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.prev = 1, t.next = 4, this.instance.fetchEnv("PID");
                                    case 4:
                                        e = t.sent, this.pid = e.data.property.value, t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1), console.warn("Fetching PID failed:", t.t0);
                                    case 11:
                                        this.hasLoaded = !0;
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchCpuCount: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, this.fetchMetric("system.cpu.count");
                                    case 3:
                                        this.systemCpuCount = t.sent.measurements[0].value, t.next = 9;
                                        break;
                                    case 6:
                                        t.prev = 6, t.t0 = t["catch"](0), console.warn("Fetching Cpu Count failed:", t.t0);
                                    case 9:
                                        this.hasLoaded = !0;
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [0, 6]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return Object(u["u"])(0, 2500).pipe(Object(u["h"])(this.fetchCpuLoadMetrics)).subscribe({
                            next: function(e) {
                                t.processCpuLoad = e.processCpuLoad, t.systemCpuLoad = e.systemCpuLoad
                            },
                            error: function(e) {
                                t.hasLoaded = !0, console.warn("Fetching CPU Usage metrics failed:", e), t.error = e
                            }
                        })
                    },
                    fetchCpuLoadMetrics: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a, s;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.fetchMetric("process.cpu.usage"), n = this.fetchMetric("system.cpu.usage"), t.prev = 2, t.next = 5, e;
                                    case 5:
                                        a = t.sent.measurements[0].value, t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](2), console.warn("Fetching Process CPU Load failed:", t.t0);
                                    case 11:
                                        return t.prev = 11, t.next = 14, n;
                                    case 14:
                                        s = t.sent.measurements[0].value, t.next = 20;
                                        break;
                                    case 17:
                                        t.prev = 17, t.t1 = t["catch"](11), console.warn("Fetching Sytem CPU Load failed:", t.t1);
                                    case 20:
                                        return t.abrupt("return", {
                                            processCpuLoad: a,
                                            systemCpuLoad: s
                                        });
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [2, 8],
                                [11, 17]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchMetric: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t(e) {
                            var n;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.instance.fetchMetric(e);
                                    case 2:
                                        return n = t.sent, t.abrupt("return", n.data);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            },
            re = se,
            ie = Object(P["a"])(re, ee, ne, !1, null, null, null),
            oe = ie.exports,
            ce = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return t.hasLoaded ? n("sba-panel", {
                    attrs: {
                        title: "Threads"
                    }
                }, [n("div", [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching threads metrics failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.current ? n("div", {
                    staticClass: "level threads-current"
                }, [n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading has-bullet has-bullet-warning"
                }, [t._v("\n            Live\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.current.live)
                    }
                })])]), n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading  has-bullet has-bullet-info"
                }, [t._v("\n            Daemon\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.current.daemon)
                    }
                })])]), n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n            Peak Live\n          ")]), n("p", {
                    domProps: {
                        textContent: t._s(t.current.peak)
                    }
                })])])]) : t._e(), t.chartData.length > 0 ? n("threads-chart", {
                    attrs: {
                        data: t.chartData
                    }
                }) : t._e()], 1)]) : t._e()
            },
            le = [],
            ue = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "threads-chart"
                }, [n("svg", {
                    staticClass: "threads-chart__svg"
                })])
            },
            de = [],
            pe = {
                props: {
                    data: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                methods: {
                    drawChart: function(t) {
                        var e = this,
                            n = 1 === t.length ? t.concat([Object(m["a"])({}, t[0], {
                                timestamp: t[0].timestamp + 1
                            })]) : t,
                            a = j["a"].extent(n, function(t) {
                                return t.timestamp
                            }),
                            s = j["a"].scaleTime().range([0, e.width]).domain(a),
                            r = j["a"].scaleLinear().range([e.height, 0]).domain([0, 1.05 * j["a"].max(n, function(t) {
                                return t.live
                            })]),
                            i = e.areas.selectAll(".threads-chart__area--live").data([n]);
                        i.enter().append("path").merge(i).attr("class", "threads-chart__area--live").attr("d", j["a"].area().x(function(t) {
                            return s(t.timestamp)
                        }).y0(function(t) {
                            return r(t.daemon)
                        }).y1(function(t) {
                            return r(t.live)
                        })), i.exit().remove();
                        var o = e.areas.selectAll(".threads-chart__area--daemon").data([n]);
                        o.enter().append("path").merge(o).attr("class", "threads-chart__area--daemon").attr("d", j["a"].area().x(function(t) {
                            return s(t.timestamp)
                        }).y0(r(0)).y1(function(t) {
                            return r(t.daemon)
                        })), o.exit().remove(), e.xAxis.call(j["a"].axisBottom(s).ticks(5).tickFormat(function(t) {
                            return x()(t).format("HH:mm:ss")
                        })), e.yAxis.call(j["a"].axisLeft(r).ticks(5))
                    }
                },
                mounted: function() {
                    var t = {
                        top: 5,
                        right: 5,
                        bottom: 30,
                        left: 50
                    };
                    this.width = this.$el.getBoundingClientRect().width - t.left - t.right, this.height = this.$el.getBoundingClientRect().height - t.top - t.bottom, this.chartLayer = j["a"].select(this.$el.querySelector(".threads-chart__svg")).append("g").attr("transform", "translate(".concat(t.left, ",").concat(t.top, ")")), this.xAxis = this.chartLayer.append("g").attr("class", "threads-chart__axis-x").attr("transform", "translate(0,".concat(this.height, ")")), this.yAxis = this.chartLayer.append("g").attr("class", "threads-chart__axis-y").attr("stroke", null), this.areas = this.chartLayer.append("g"), this.drawChart(this.data)
                },
                watch: {
                    data: "drawChart"
                }
            },
            he = pe,
            fe = (n("5fc5"), Object(P["a"])(he, ue, de, !1, null, null, null)),
            me = fe.exports,
            ve = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                mixins: [l["a"]],
                components: {
                    threadsChart: me
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        current: null,
                        chartData: []
                    }
                },
                methods: {
                    fetchMetrics: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e, n, a;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.instance.fetchMetric("jvm.threads.live"), n = this.instance.fetchMetric("jvm.threads.peak"), a = this.instance.fetchMetric("jvm.threads.daemon"), t.next = 5, e;
                                    case 5:
                                        return t.t0 = t.sent.data.measurements[0].value, t.next = 8, n;
                                    case 8:
                                        return t.t1 = t.sent.data.measurements[0].value, t.next = 11, a;
                                    case 11:
                                        return t.t2 = t.sent.data.measurements[0].value, t.abrupt("return", {
                                            live: t.t0,
                                            peak: t.t1,
                                            daemon: t.t2
                                        });
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return Object(u["u"])(0, 2500).pipe(Object(u["h"])(this.fetchMetrics)).subscribe({
                            next: function(e) {
                                t.hasLoaded = !0, t.current = e, t.chartData.push(Object(m["a"])({}, e, {
                                    timestamp: x()().valueOf()
                                }))
                            },
                            error: function(e) {
                                t.hasLoaded = !0, console.warn("Fetching threads metrics failed:", e), t.error = e
                            }
                        })
                    }
                }
            },
            ge = ve,
            be = (n("579f"), Object(P["a"])(ge, ce, le, !1, null, null, null)),
            _e = be.exports,
            Ce = {
                components: {
                    detailsHealth: Pt,
                    detailsInfo: $t,
                    detailsProcess: oe,
                    detailsThreads: _e,
                    detailsDatasources: nt,
                    detailsMemory: Jt,
                    detailsGc: ut,
                    detailsCaches: N,
                    detailsMetadata: te
                },
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        metrics: []
                    }
                },
                computed: {
                    hasCaches: function() {
                        return this.hasMetric("cache.gets")
                    },
                    hasDatasources: function() {
                        return this.hasMetric("data.source.active.connections")
                    },
                    hasGc: function() {
                        return this.hasMetric("jvm.gc.pause")
                    },
                    hasInfo: function() {
                        return this.instance.hasEndpoint("info")
                    },
                    hasMemory: function() {
                        return this.hasMetric("jvm.memory.max")
                    },
                    hasProcess: function() {
                        return this.hasMetric("process.uptime")
                    },
                    hasThreads: function() {
                        return this.hasMetric("jvm.threads.live")
                    },
                    hasMetadata: function() {
                        return this.instance.registration && this.instance.registration.metadata
                    }
                },
                created: function() {
                    this.fetchMetricIndex()
                },
                methods: {
                    hasMetric: function(t) {
                        return this.metrics && this.metrics.includes(t)
                    },
                    fetchMetricIndex: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.instance.hasEndpoint("metrics")) {
                                            t.next = 14;
                                            break
                                        }
                                        return this.error = null, t.prev = 2, t.next = 5, this.instance.fetchMetrics();
                                    case 5:
                                        e = t.sent, this.metrics = e.data.names, t.next = 13;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t["catch"](2), console.warn("Fetching metric index failed:", t.t0), this.error = t.t0;
                                    case 13:
                                        this.hasLoaded = !0;
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [2, 9]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/details",
                        parent: "instances",
                        path: "details",
                        component: this,
                        label: "Details",
                        group: "Insights",
                        order: 0
                    })
                }
            },
            ye = Ce,
            xe = (n("c5ec"), Object(P["a"])(ye, a, s, !1, null, null, null));
        e["default"] = xe.exports
    },
    8208: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    class: {
                        "is-loading": !t.hasLoaded
                    }
                }, [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n        Fetching configuration properties failed.\n      ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("div", {
                    staticClass: "field"
                }, [n("p", {
                    staticClass: "control is-expanded has-icons-left"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.filter,
                        expression: "filter"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "search"
                    },
                    domProps: {
                        value: t.filter
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.filter = e.target.value)
                        }
                    }
                }), n("span", {
                    staticClass: "icon is-small is-left"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "filter"
                    }
                })], 1)])]), t._l(t.configurationPropertiesBeans, function(e) {
                    return n("sba-panel", {
                        key: e.name,
                        attrs: {
                            "header-sticks-below": ["#navigation"],
                            title: e.name
                        }
                    }, [Object.keys(e.properties).length > 0 ? n("table", {
                        staticClass: "table is-fullwidth"
                    }, t._l(e.properties, function(a, s) {
                        return n("tr", {
                            key: e.name + "-" + s
                        }, [n("td", {
                            domProps: {
                                textContent: t._s(s)
                            }
                        }), n("td", {
                            staticClass: "is-breakable",
                            domProps: {
                                textContent: t._s(a)
                            }
                        })])
                    }), 0) : n("p", {
                        staticClass: "is-muted"
                    }, [t._v("\n      No properties set\n    ")])])
                })], 2)
            },
            s = [],
            r = (n("96cf"), n("3b8d")),
            i = n("5d73"),
            o = n.n(i),
            c = n("a4bb"),
            l = n.n(c),
            u = n("768b"),
            d = n("2d1f"),
            p = n.n(d),
            h = n("a745"),
            f = n.n(h),
            m = n("bd86"),
            v = n("cebc"),
            g = (n("6b54"), n("6762"), n("2fdb"), n("df0d")),
            b = n("13ea"),
            _ = n.n(b),
            C = n("4472"),
            y = n.n(C),
            x = n("77c1"),
            w = n.n(x),
            k = function(t) {
                return function(e, n) {
                    return n.toString().toLowerCase().includes(t) || e.toString().toLowerCase().includes(t)
                }
            },
            j = function(t, e) {
                return w()(e, k(t))
            },
            O = function(t) {
                return function(e) {
                    return e && e.properties ? Object(v["a"])({}, e, {
                        properties: j(t, e.properties)
                    }) : null
                }
            };

        function S(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return Object(t) !== t ? Object(m["a"])({}, e, t) : f()(t) ? 0 === t.length ? Object(m["a"])({}, e, []) : t.map(function(t, n) {
                return S(t, "".concat(e, "[").concat(n, "]"))
            }).reduce(function(t, e) {
                return Object(v["a"])({}, t, e)
            }, {}) : _()(t) ? Object(m["a"])({}, e, {}) : p()(t).map(function(t) {
                var n = Object(u["a"])(t, 2),
                    a = n[0],
                    s = n[1];
                return S(s, e ? "".concat(e, ".").concat(a) : a)
            }).reduce(function(t, e) {
                return Object(v["a"])({}, t, e)
            }, {})
        }
        var P = function(t) {
                var e = [],
                    n = l()(t.contexts),
                    a = !0,
                    s = !1,
                    r = void 0;
                try {
                    for (var i, c = o()(n); !(a = (i = c.next()).done); a = !0) {
                        var u = i.value,
                            d = t.contexts[u],
                            p = l()(d.beans),
                            h = !0,
                            f = !1,
                            m = void 0;
                        try {
                            for (var v, g = function() {
                                var t = v.value,
                                    a = d.beans[t],
                                    s = y()(S(a.properties), function(t, e) {
                                        return "".concat(a.prefix, ".").concat(e)
                                    });
                                e.push({
                                    name: n.length > 1 ? "".concat(u, ": ").concat(t) : t,
                                    properties: s
                                })
                            }, b = o()(p); !(h = (v = b.next()).done); h = !0) g()
                        } catch (_) {
                            f = !0, m = _
                        } finally {
                            try {
                                h || null == b.return || b.return()
                            } finally {
                                if (f) throw m
                            }
                        }
                    }
                } catch (_) {
                    s = !0, r = _
                } finally {
                    try {
                        a || null == c.return || c.return()
                    } finally {
                        if (s) throw r
                    }
                }
                return e
            },
            E = {
                props: {
                    instance: {
                        type: g["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        configprops: null,
                        filter: null
                    }
                },
                computed: {
                    configurationPropertiesBeans: function() {
                        if (!this.configprops) return [];
                        var t = P(this.configprops);
                        return this.filter ? t.map(O(this.filter.toLowerCase())).filter(function(t) {
                            return t && l()(t.properties).length > 0
                        }) : t
                    }
                },
                created: function() {
                    this.fetchConfigprops()
                },
                methods: {
                    fetchConfigprops: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, t.prev = 1, t.next = 4, this.instance.fetchConfigprops();
                                    case 4:
                                        e = t.sent, this.configprops = e.data, t.next = 12;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1), console.warn("Fetching configuration properties failed:", t.t0), this.error = t.t0;
                                    case 12:
                                        this.hasLoaded = !0;
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/configprops",
                        parent: "instances",
                        path: "configprops",
                        component: this,
                        label: "Configuration Properties",
                        group: "Insights",
                        order: 110,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("configprops")
                        }
                    })
                }
            },
            R = E,
            L = n("2877"),
            A = Object(L["a"])(R, a, s, !1, null, null, null);
        e["default"] = A.exports
    },
    "82fb": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "instances"
                }, [n("div", {
                    staticClass: "instances__body"
                }, [n("div", {
                    staticClass: "instances__sidebar"
                }, [n("instance-sidebar", {
                    attrs: {
                        views: t.views,
                        instance: t.instance,
                        application: t.application
                    }
                })], 1), n("div", {
                    staticClass: "instances__view"
                }, [t.instance ? n("router-view", {
                    attrs: {
                        instance: t.instance,
                        application: t.application
                    }
                }) : t._e()], 1)])])
            },
            s = [],
            r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("aside", {
                    staticClass: "sidebar"
                }, [t.instance ? n("div", {
                    directives: [{
                        name: "sticks-below",
                        rawName: "v-sticks-below",
                        value: ["#navigation"],
                        expression: "['#navigation']"
                    }]
                }, [n("router-link", {
                    staticClass: "instance-summary",
                    class: "instance-summary--" + t.instance.statusInfo.status,
                    attrs: {
                        to: {
                            name: "instances/details",
                            params: {
                                instanceId: t.instance.id
                            }
                        }
                    }
                }, [n("div", {
                    staticClass: "instance-summary__name",
                    domProps: {
                        textContent: t._s(t.instance.registration.name)
                    }
                }), n("div", {
                    staticClass: "instance-summary__id",
                    domProps: {
                        textContent: t._s(t.instance.id)
                    }
                })]), n("ul", t._l(t.enabledGroupedViews, function(e) {
                    return n("li", {
                        key: e.name,
                        staticClass: "sidebar-group",
                        class: {
                            "is-active": t.isActiveGroup(e)
                        },
                        on: {
                            mouseenter: function(n) {
                                t.hasMultipleViews(e) && !t.isActiveGroup(e) && t.showFlyout(n)
                            },
                            mouseleave: function(n) {
                                t.hasMultipleViews(e) && !t.isActiveGroup(e) && t.hideFlyout(n)
                            }
                        }
                    }, [n("router-link", {
                        class: {
                            "is-active": t.isActiveGroup(e)
                        },
                        attrs: {
                            to: {
                                name: e.views[0].name,
                                params: {
                                    instanceId: t.instance.id
                                }
                            },
                            "active-class": "",
                            "exact-active-class": ""
                        },
                        domProps: {
                            textContent: t._s(t.hasMultipleViews(e) ? e.name : e.views[0].label)
                        }
                    }), t.hasMultipleViews(e) ? n("ul", {
                        staticClass: "sidebar-group-items"
                    }, t._l(e.views, function(e) {
                        return n("li", {
                            key: e.name
                        }, [n("router-link", {
                            attrs: {
                                to: {
                                    name: e.name,
                                    params: {
                                        instanceId: t.instance.id
                                    }
                                }
                            }
                        }, [n(e.handle, {
                            tag: "component"
                        })], 1)], 1)
                    }), 0) : t._e()], 1)
                }), 0)], 1) : t._e()])
            },
            i = [],
            o = (n("6762"), n("2fdb"), n("774e")),
            c = n.n(o),
            l = n("cebc"),
            u = n("8bd2"),
            d = n.n(u),
            p = (n("ac6a"), n("2d7d")),
            h = n.n(p),
            f = n("75fc"),
            m = (n("55dd"), n("cc40")),
            v = n("aac3"),
            g = n("df0d"),
            b = n("d50b"),
            _ = {
                props: {
                    views: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    instance: {
                        type: g["a"],
                        default: null
                    },
                    application: {
                        type: v["a"],
                        default: null
                    }
                },
                directives: {
                    sticksBelow: m["a"]
                },
                data: function() {
                    return {
                        isStuck: !1
                    }
                },
                computed: {
                    enabledViews: function() {
                        var t = this;
                        return this.instance ? Object(f["a"])(this.views).filter(function(e) {
                            return "undefined" === typeof e.isEnabled || e.isEnabled({
                                instance: t.instance
                            })
                        }).sort(Object(b["b"])(function(t) {
                            return t.order
                        })) : []
                    },
                    enabledGroupedViews: function() {
                        var t = new h.a;
                        return this.enabledViews.forEach(function(e) {
                            var n = e.group || e.label,
                                a = t.get(n) || {
                                    name: n,
                                    order: d.a,
                                    views: []
                                };
                            t.set(n, Object(l["a"])({}, a, {
                                order: Math.min(a.order, e.order),
                                views: [].concat(Object(f["a"])(a.views), [e])
                            }))
                        }), c()(t.values())
                    }
                },
                methods: {
                    isActiveGroup: function(t) {
                        return t.views.includes(this.$route.meta.view)
                    },
                    hasMultipleViews: function(t) {
                        return t.views.length > 1
                    },
                    onScroll: function() {
                        this.isStuck = this.$el.getBoundingClientRect().top <= 52
                    },
                    showFlyout: function(t) {
                        var e = t.target;
                        e.classList.add("is-showing-flyout");
                        var n = e.getBoundingClientRect(),
                            a = t.target.querySelector(".sidebar-group-items");
                        a.style.top = "".concat(n.top, "px"), a.style.left = "".concat(n.right + 1, "px")
                    },
                    hideFlyout: function(t) {
                        var e = t.target;
                        e.classList.remove("is-showing-flyout");
                        var n = t.target.querySelector(".sidebar-group-items");
                        n.style = void 0
                    }
                },
                mounted: function() {
                    window.addEventListener("scroll", this.onScroll)
                },
                beforeDestroy: function() {
                    window.removeEventListener("scroll", this.onScroll)
                }
            },
            C = _,
            y = (n("f5cb"), n("2877")),
            x = Object(y["a"])(C, r, i, !1, null, null, null),
            w = x.exports,
            k = {
                components: {
                    InstanceSidebar: w
                },
                props: {
                    instanceId: {
                        type: String,
                        required: !0
                    },
                    views: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    applications: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    error: {
                        type: Error,
                        default: null
                    }
                },
                computed: {
                    instance: function() {
                        return this.applications.findInstance(this.instanceId)
                    },
                    application: function() {
                        return this.applications.findApplicationForInstance(this.instanceId)
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances",
                        path: "/instances/:instanceId",
                        component: this,
                        props: !0
                    })
                }
            },
            j = k,
            O = (n("b38f"), Object(y["a"])(j, a, s, !1, null, null, null));
        e["default"] = O.exports
    },
    "837e": function(t, e, n) {
        "use strict";
        var a = n("bdf8"),
            s = n.n(a);
        s.a
    },
    "879f": function(t, e, n) {
        "use strict";
        var a = n("ead1"),
            s = n.n(a);
        s.a
    },
    "8a74": function(t, e, n) {
        "use strict";
        var a = n("09b1"),
            s = n.n(a);
        s.a
    },
    "8be7": function(t, e, n) {
        "use strict";
        n.d(e, "o", function() {
            return k
        });
        var a = n("6ff9"),
            s = n("a560"),
            r = n("23ae");
        n.d(e, "r", function() {
            return r["of"]
        }), n.d(e, "j", function() {
            return a["defer"]
        });
        var i = n("20a3");
        n.d(e, "f", function() {
            return i["concat"]
        });
        var o = n("6891");
        n.d(e, "a", function() {
            return o["EMPTY"]
        });
        var c = n("813a");
        n.d(e, "m", function() {
            return c["from"]
        });
        var l = n("789d");
        n.d(e, "u", function() {
            return l["timer"]
        });
        var u = n("4351");
        n.d(e, "b", function() {
            return u["Observable"]
        });
        var d = n("76ce");
        n.d(e, "c", function() {
            return d["Subject"]
        });
        var p = n("1f47");
        n.d(e, "d", function() {
            return p["animationFrame"]
        });
        var h = n("ccbf");
        n.d(e, "h", function() {
            return h["concatMap"]
        });
        var f = n("536a");
        n.d(e, "k", function() {
            return f["delay"]
        });
        var m = n("74c0");
        n.d(e, "i", function() {
            return m["debounceTime"]
        });
        var v = n("7078");
        n.d(e, "q", function() {
            return v["merge"]
        });
        var g = n("ab72");
        n.d(e, "p", function() {
            return g["map"]
        });
        var b = n("1759");
        n.d(e, "s", function() {
            return b["retryWhen"]
        }), n.d(e, "t", function() {
            return s["tap"]
        });
        var _ = n("e229");
        n.d(e, "l", function() {
            return _["filter"]
        });
        var C = n("7385");
        n.d(e, "g", function() {
            return C["concatAll"]
        });
        var y = n("0d73");
        n.d(e, "n", function() {
            return y["ignoreElements"]
        });
        var x = n("414c");
        n.d(e, "e", function() {
            return x["bufferTime"]
        });
        var w = function(t) {
                return function(e) {
                    return Object(a["defer"])(function() {
                        return t(), e
                    })
                }
            },
            k = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 150;
                return function(n) {
                    var a = null;
                    return n.pipe(w(function() {
                        return a = setTimeout(function() {
                            return t("executing")
                        }, e)
                    }), Object(s["tap"])({
                        complete: function() {
                            a && clearTimeout(a), t("completed")
                        },
                        error: function(e) {
                            console.warn("Operation failed:", e), a && clearTimeout(a), t("failed")
                        }
                    }))
                }
            }
    },
    "8cdb": function(t, e, n) {
        "use strict";
        var a = n("7351"),
            s = n.n(a);
        s.a
    },
    "8d9a": function(t, e, n) {},
    "8fbb": function(t, e, n) {
        "use strict";
        var a = n("386e"),
            s = n.n(a);
        s.a
    },
    "92af": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section"
                }, [n("div", {
                    staticClass: "container"
                }, [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching caches failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("div", {
                    staticClass: "field-body"
                }, [n("div", {
                    staticClass: "field has-addons has-icons-left"
                }, [n("p", {
                    staticClass: "control is-expanded has-icons-left"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.filter,
                        expression: "filter"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "search"
                    },
                    domProps: {
                        value: t.filter
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.filter = e.target.value)
                        }
                    }
                }), n("span", {
                    staticClass: "icon is-small is-left"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "filter"
                    }
                })], 1)]), n("p", {
                    staticClass: "control"
                }, [n("span", {
                    staticClass: "button is-static"
                }, [n("span", {
                    domProps: {
                        textContent: t._s(t.filteredCaches.length)
                    }
                }), t._v("\n            /\n            "), n("span", {
                    domProps: {
                        textContent: t._s(t.caches.length)
                    }
                })])])])]), n("caches-list", {
                    attrs: {
                        instance: t.instance,
                        caches: t.filteredCaches,
                        "is-loading": t.isLoading
                    }
                })], 1)])
            },
            s = [],
            r = (n("7f7f"), n("6762"), n("2fdb"), n("96cf"), n("3b8d")),
            i = (n("55dd"), n("a4bb")),
            o = n.n(i),
            c = n("768b"),
            l = n("2d1f"),
            u = n.n(l),
            d = n("df0d"),
            p = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("table", {
                    staticClass: "caches table is-fullwidth"
                }, [n("thead", [n("tr", [n("th", [t._v("Name")]), n("th", [t._v("Cache Manager")]), n("th", {
                    staticClass: "is-narrow"
                }, [n("sba-confirm-button", {
                    staticClass: "button",
                    class: {
                        "is-loading": "executing" === t.clearingAll,
                        "is-info": "completed" === t.clearingAll,
                        "is-danger": "failed" === t.clearingAll
                    },
                    attrs: {
                        disabled: null !== t.clearingAll
                    },
                    on: {
                        click: t.clearCaches
                    }
                }, ["completed" === t.clearingAll ? n("span", [t._v("\n            Cleared\n          ")]) : "failed" === t.clearingAll ? n("span", [t._v("\n            Failed\n          ")]) : n("span", [n("font-awesome-icon", {
                    attrs: {
                        icon: "trash"
                    }
                }), t._v(" Clear\n          ")], 1)])], 1)])]), n("tbody", [t._l(t.caches, function(e) {
                    return n("tr", {
                        key: e.key
                    }, [n("td", [n("span", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    })]), n("td", [n("span", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.cacheManager)
                        }
                    })]), n("td", {
                        staticClass: "is-narrow"
                    }, [n("button", {
                        staticClass: "button",
                        class: {
                            "is-loading": "executing" === t.clearing[e.name],
                            "is-info": "completed" === t.clearing[e.name],
                            "is-danger": "failed" === t.clearing[e.name]
                        },
                        attrs: {
                            disabled: e.name in t.clearing
                        },
                        on: {
                            click: function(n) {
                                return t.clearCache(e.name)
                            }
                        }
                    }, ["completed" === t.clearing[e.name] ? n("span", [t._v("\n            Cleared\n          ")]) : "failed" === t.clearing[e.name] ? n("span", [t._v("\n            Failed\n          ")]) : n("span", [n("font-awesome-icon", {
                        attrs: {
                            icon: "trash"
                        }
                    }), t._v(" Clear\n          ")], 1)])])])
                }), 0 === t.caches.length ? n("tr", [n("td", {
                    staticClass: "is-muted",
                    attrs: {
                        colspan: "3 "
                    }
                }, [t.isLoading ? n("p", {
                    staticClass: "is-loading"
                }, [t._v("\n          Loading Caches...\n        ")]) : n("p", [t._v("\n          No caches found.\n        ")])])]) : t._e()], 2)])
            },
            h = [],
            f = n("8be7"),
            m = {
                name: "CachesList",
                props: {
                    caches: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    instance: {
                        type: d["a"],
                        required: !0
                    },
                    isLoading: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        clearing: {},
                        clearingAll: null
                    }
                },
                methods: {
                    clearCaches: function() {
                        var t = this;
                        Object(f["m"])(t.instance.clearCaches()).pipe(Object(f["o"])(function(e) {
                            return t.clearingAll = e
                        })).subscribe({
                            complete: function() {
                                return setTimeout(function() {
                                    return t.clearingAll = null
                                }, 2500), t.$emit("cleared", "*")
                            }
                        })
                    },
                    clearCache: function(t) {
                        var e = this;
                        e._clearCache(t).pipe(Object(f["o"])(function(n) {
                            return e.$set(e.clearing, t, n)
                        })).subscribe({
                            complete: function() {
                                return setTimeout(function() {
                                    return e.$delete(e.clearing, t)
                                }, 2500), e.$emit("cleared", t)
                            }
                        })
                    },
                    _clearCache: function(t) {
                        var e = this;
                        return Object(f["r"])(t).pipe(Object(f["h"])(function() {
                            var t = Object(r["a"])(regeneratorRuntime.mark(function t(n) {
                                return regeneratorRuntime.wrap(function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.instance.clearCache(n);
                                        case 2:
                                            return t.abrupt("return", n);
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()), Object(f["t"])({
                            error: function(e) {
                                console.warn("Clearing cache ".concat(t, " failed:"), e)
                            }
                        }))
                    }
                }
            },
            v = m,
            g = (n("17b8"), n("2877")),
            b = Object(g["a"])(v, p, h, !1, null, null, null),
            _ = b.exports,
            C = n("e9a8"),
            y = n.n(C),
            x = n("13ea"),
            w = n.n(x),
            k = function(t) {
                if (w()(t.cacheManagers)) return [];
                var e = y()(u()(t.cacheManagers), function(t) {
                    var e = Object(c["a"])(t, 2),
                        n = e[0],
                        a = e[1];
                    return o()(a.caches).map(function(t) {
                        return {
                            cacheManager: n,
                            name: t,
                            key: "".concat(n, ":").concat(t)
                        }
                    })
                });
                return e.sort(function(t, e) {
                    return t.key.localeCompare(e.key)
                })
            },
            j = {
                components: {
                    CachesList: _
                },
                props: {
                    instance: {
                        type: d["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        isLoading: !1,
                        error: null,
                        caches: [],
                        filter: ""
                    }
                },
                computed: {
                    filteredCaches: function() {
                        var t = this.getFilterFn();
                        return t ? this.caches.filter(t) : this.caches
                    }
                },
                methods: {
                    fetchCaches: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, this.isLoading = !0, t.prev = 2, t.next = 5, this.instance.fetchCaches();
                                    case 5:
                                        e = t.sent, this.caches = k(e.data), t.next = 13;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t["catch"](2), console.warn("Fetching caches failed:", t.t0), this.error = t.t0;
                                    case 13:
                                        this.isLoading = !1;
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [2, 9]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    getFilterFn: function() {
                        var t = null;
                        if (this.filter) {
                            var e = this.filter.toLowerCase();
                            t = function(t) {
                                return t.name.toLowerCase().includes(e)
                            }
                        }
                        return t
                    }
                },
                created: function() {
                    this.fetchCaches()
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/caches",
                        parent: "instances",
                        path: "caches",
                        group: "Data",
                        component: this,
                        label: "Caches",
                        order: 970,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("caches")
                        }
                    })
                }
            },
            O = j,
            S = Object(g["a"])(O, a, s, !1, null, null, null);
        e["default"] = S.exports
    },
    "931b": function(t, e, n) {
        "use strict";
        var a = n("40b7"),
            s = n.n(a);
        s.a
    },
    "99a3": function(t, e, n) {
        "use strict";
        var a = n("7ba9"),
            s = n.n(a);
        s.a
    },
    "9bd0": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    class: {
                        "is-loading": !t.hasLoaded
                    }
                }, [t.hasLoaded ? [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching Flyway reports failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t._l(t.contexts, function(e, a) {
                    return [n("h3", {
                        key: a,
                        staticClass: "title",
                        domProps: {
                            textContent: t._s(a)
                        }
                    }), t._l(e.flywayBeans, function(e, s) {
                        return n("sba-panel", {
                            key: a + "-" + s,
                            staticClass: "migration",
                            attrs: {
                                title: s,
                                "header-sticks-below": ["#navigation"]
                            }
                        }, [n("table", {
                            staticClass: "table is-fullwidth"
                        }, [n("thead", [n("tr", [n("th", [t._v("Type")]), n("th", [t._v("Checksum")]), n("th", [t._v("Version")]), n("th", [t._v("Description")]), n("th", [t._v("Script")]), n("th", [t._v("State")]), n("th", [t._v("Installed by")]), n("th", [t._v("Installed on")]), n("th", [t._v("Installed rank")]), n("th", [t._v("Execution Time")])])]), n("tbody", t._l(e.migrations, function(e) {
                            return n("tr", {
                                key: e.checksum
                            }, [n("td", {
                                domProps: {
                                    textContent: t._s(e.type)
                                }
                            }), n("td", {
                                domProps: {
                                    textContent: t._s(e.checksum)
                                }
                            }), n("td", {
                                domProps: {
                                    textContent: t._s(e.version)
                                }
                            }), n("td", {
                                staticClass: "is-breakable",
                                domProps: {
                                    textContent: t._s(e.description)
                                }
                            }), n("td", {
                                staticClass: "is-breakable",
                                domProps: {
                                    textContent: t._s(e.script)
                                }
                            }), n("td", [n("span", {
                                staticClass: "tag",
                                class: t.stateClass(e.state),
                                domProps: {
                                    textContent: t._s(e.state)
                                }
                            })]), n("td", {
                                domProps: {
                                    textContent: t._s(e.installedBy)
                                }
                            }), n("td", {
                                domProps: {
                                    textContent: t._s(e.installedOn)
                                }
                            }), n("td", {
                                domProps: {
                                    textContent: t._s(e.installedRank)
                                }
                            }), n("td", {
                                domProps: {
                                    textContent: t._s(e.executionTime + "ms")
                                }
                            })])
                        }), 0)])])
                    })]
                })] : t._e()], 2)
            },
            s = [],
            r = (n("96cf"), n("3b8d")),
            i = n("df0d"),
            o = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        contexts: null
                    }
                },
                computed: {},
                created: function() {
                    this.fetchFlyway()
                },
                methods: {
                    fetchFlyway: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, t.prev = 1, t.next = 4, this.instance.fetchFlyway();
                                    case 4:
                                        e = t.sent, this.contexts = e.data.contexts, t.next = 12;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1), console.warn("Fetching flyway reports failed:", t.t0), this.error = t.t0;
                                    case 12:
                                        this.hasLoaded = !0;
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    stateClass: function(t) {
                        switch (t) {
                            case "BASELINE":
                            case "MISSING_SUCCESS":
                            case "SUCCESS":
                            case "OUT_OF_ORDER":
                            case "FUTURE_SUCCESS":
                                return "is-success";
                            case "PENDING":
                            case "ABOVE_TARGET":
                            case "PREINIT":
                            case "BELOW_BASELINE":
                            case "IGNORED":
                                return "is-warning";
                            case "MISSING_FAILED":
                            case "FAILED":
                            case "FUTURE_FAILED":
                                return "is-danger";
                            default:
                                return "is-light"
                        }
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/flyway",
                        parent: "instances",
                        path: "flyway",
                        component: this,
                        label: "Flyway",
                        group: "Data",
                        order: 900,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("flyway")
                        }
                    })
                }
            },
            c = o,
            l = n("2877"),
            u = Object(l["a"])(c, a, s, !1, null, null, null);
        e["default"] = u.exports
    },
    "9c36": function(t, e, n) {
        "use strict";
        var a = n("10b3"),
            s = n.n(a);
        s.a
    },
    "9e78": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section"
                }, [n("div", {
                    staticClass: "field has-addons"
                }, [n("div", {
                    staticClass: "control"
                }, [n("span", {
                    staticClass: "select"
                }, [n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.filter.type,
                        expression: "filter.type"
                    }],
                    on: {
                        change: function(e) {
                            var n = Array.prototype.filter.call(e.target.options, function(t) {
                                return t.selected
                            }).map(function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            });
                            t.$set(t.filter, "type", e.target.multiple ? n : n[0])
                        }
                    }
                }, [n("option", {
                    attrs: {
                        value: "username"
                    }
                }, [t._v("\n            Username\n          ")]), n("option", {
                    attrs: {
                        value: "sessionId"
                    }
                }, [t._v("\n            SessionId\n          ")])])])]), n("div", {
                    staticClass: "control is-expanded"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.filter.value,
                        expression: "filter.value"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.filter.value
                    },
                    on: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.fetchSessionsByUsername()
                        },
                        paste: t.handlePaste,
                        input: function(e) {
                            e.target.composing || t.$set(t.filter, "value", e.target.value)
                        }
                    }
                })])]), t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n        Fetching sessions failed.\n      ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("sba-sessions-list", {
                    attrs: {
                        instance: t.instance,
                        sessions: t.sessions,
                        "is-loading": t.isLoading
                    },
                    on: {
                        deleted: t.fetch
                    }
                })], 1)
            },
            s = [],
            r = (n("a481"), n("bd86")),
            i = n("768b"),
            o = n("2d1f"),
            c = n.n(o),
            l = (n("4917"), n("96cf"), n("3b8d")),
            u = n("5176"),
            d = n.n(u),
            p = n("a8db"),
            h = n("d225"),
            f = n("df0d"),
            m = n("b047c"),
            v = n.n(m),
            g = n("63ea"),
            b = n.n(g),
            _ = n("c1df"),
            C = n.n(_),
            y = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("table", {
                    staticClass: "sessions table is-fullwidth"
                }, [n("thead", [n("tr", [n("th", [t._v("Session Id")]), n("th", [t._v("Created at")]), n("th", [t._v("Last accessed at")]), n("th", [t._v("Expiry")]), t._m(0), n("th", [t._v("Attributes")]), n("th", [t.sessions.length > 1 ? n("sba-confirm-button", {
                    staticClass: "button",
                    class: {
                        "is-loading": "executing" === t.deletingAll,
                        "is-info": "completed" === t.deletingAll,
                        "is-danger": "failed" === t.deletingAll
                    },
                    attrs: {
                        disabled: null !== t.deletingAll
                    },
                    on: {
                        click: function(e) {
                            return t.deleteAllSessions()
                        }
                    }
                }, ["completed" === t.deletingAll ? n("span", [t._v("\n            Deleted\n          ")]) : "failed" === t.deletingAll ? n("span", [t._v("\n            Failed\n          ")]) : n("span", [n("font-awesome-icon", {
                    attrs: {
                        icon: "trash"
                    }
                }), t._v(" Delete\n          ")], 1)]) : t._e()], 1)])]), t._l(t.sessions, function(e) {
                    return n("tr", {
                        key: e.id
                    }, [n("td", [n("router-link", {
                        attrs: {
                            to: {
                                name: "instances/sessions",
                                params: {
                                    instanceId: t.instance.id
                                },
                                query: {
                                    sessionId: e.id
                                }
                            }
                        },
                        domProps: {
                            textContent: t._s(e.id)
                        }
                    })], 1), n("td", {
                        domProps: {
                            textContent: t._s(e.creationTime.format("L HH:mm:ss.SSS"))
                        }
                    }), n("td", {
                        domProps: {
                            textContent: t._s(e.lastAccessedTime.format("L HH:mm:ss.SSS"))
                        }
                    }), n("td", [e.expired ? n("span", {
                        staticClass: "tag is-info"
                    }, [t._v("\n        Expired\n      ")]) : t._e()]), n("td", [e.maxInactiveInterval >= 0 ? n("span", {
                        domProps: {
                            textContent: t._s(e.maxInactiveInterval + "s")
                        }
                    }) : n("span", [t._v("\n        unlimited\n      ")])]), n("td", t._l(e.attributeNames, function(a) {
                        return n("span", {
                            key: e.id + "-" + a,
                            staticClass: "tag",
                            domProps: {
                                textContent: t._s(a)
                            }
                        })
                    }), 0), n("td", [n("button", {
                        staticClass: "button",
                        class: {
                            "is-loading": "executing" === t.deleting[e.id],
                            "is-info": "completed" === t.deleting[e.id],
                            "is-danger": "failed" === t.deleting[e.id]
                        },
                        attrs: {
                            disabled: e.id in t.deleting
                        },
                        on: {
                            click: function(n) {
                                return t.deleteSession(e.id)
                            }
                        }
                    }, ["completed" === t.deleting[e.id] ? n("span", [t._v("\n          Deleted\n        ")]) : "failed" === t.deleting[e.id] ? n("span", [t._v("\n          Failed\n        ")]) : n("span", [n("font-awesome-icon", {
                        attrs: {
                            icon: "trash"
                        }
                    }), t._v(" Delete\n        ")], 1)])])])
                }), 0 === t.sessions.length ? n("tr", [n("td", {
                    staticClass: "is-muted",
                    attrs: {
                        colspan: "7"
                    }
                }, [t.isLoading ? n("p", {
                    staticClass: "is-loading"
                }, [t._v("\n        Loading Sessions...\n      ")]) : n("p", [t._v("\n        No Sessions found.\n      ")])])]) : t._e()], 2)
            },
            x = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", [t._v("Max. inactive"), n("br"), t._v("interval")])
                }
            ],
            w = n("8be7"),
            k = n("94df"),
            j = n.n(k),
            O = {
                props: {
                    sessions: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    instance: {
                        type: f["a"],
                        required: !0
                    },
                    isLoading: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        deletingAll: null,
                        deleting: {}
                    }
                },
                methods: {
                    prettyBytes: j.a,
                    deleteAllSessions: function() {
                        var t = this;
                        t.subscription = Object(w["m"])(t.sessions).pipe(Object(w["p"])(function(t) {
                            return t.id
                        }), Object(w["h"])(t._deleteSession), Object(w["o"])(function(e) {
                            return t.deletingAll = e
                        })).subscribe({
                            complete: function() {
                                t.$emit("deleted", "*")
                            }
                        })
                    },
                    deleteSession: function(t) {
                        var e = this;
                        e._deleteSession(t).pipe(Object(w["o"])(function(n) {
                            return e.$set(e.deleting, t, n)
                        })).subscribe({
                            complete: function() {
                                return e.$emit("deleted", t)
                            }
                        })
                    },
                    _deleteSession: function(t) {
                        var e = this;
                        return Object(w["r"])(t).pipe(Object(w["h"])(function() {
                            var t = Object(l["a"])(regeneratorRuntime.mark(function t(n) {
                                return regeneratorRuntime.wrap(function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.instance.deleteSession(n);
                                        case 2:
                                            return t.abrupt("return", n);
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t)
                            }));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()), Object(w["t"])({
                            error: function(e) {
                                console.warn("Deleting session ".concat(t, " failed:"), e)
                            }
                        }))
                    }
                }
            },
            S = O,
            P = (n("09a2"), n("2877")),
            E = Object(P["a"])(S, y, x, !1, null, null, null),
            R = E.exports,
            L = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,
            A = function t(e) {
                var n = e.creationTime,
                    a = e.lastAccessedTime,
                    s = Object(p["a"])(e, ["creationTime", "lastAccessedTime"]);
                Object(h["a"])(this, t), d()(this, s), this.creationTime = C()(n), this.lastAccessedTime = C()(a)
            },
            F = {
                props: {
                    instance: {
                        type: f["a"],
                        required: !0
                    }
                },
                components: {
                    sbaSessionsList: R
                },
                data: function() {
                    return {
                        error: null,
                        filter: {
                            value: "",
                            type: null
                        },
                        sessions: [],
                        isLoading: !1
                    }
                },
                methods: {
                    fetch: v()(Object(l["a"])(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (this.error = null, this.filter.value) {
                                        t.next = 4;
                                        break
                                    }
                                    return this.sessions = [], t.abrupt("return");
                                case 4:
                                    if (this.isLoading = !0, t.prev = 5, "sessionId" !== this.filter.type) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.next = 9, this.fetchSession();
                                case 9:
                                    this.sessions = t.sent, t.next = 15;
                                    break;
                                case 12:
                                    return t.next = 14, this.fetchSessionsByUsername();
                                case 14:
                                    this.sessions = t.sent;
                                case 15:
                                    t.next = 21;
                                    break;
                                case 17:
                                    t.prev = 17, t.t0 = t["catch"](5), console.warn("Fetching sessions failed:", t.t0), this.error = t.t0;
                                case 21:
                                    this.isLoading = !1;
                                case 22:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [5, 17]
                        ])
                    })), 250),
                    fetchSession: function() {
                        var t = Object(l["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, this.instance.fetchSession(this.filter.value);
                                    case 3:
                                        return e = t.sent, t.abrupt("return", [new A(e.data)]);
                                    case 7:
                                        if (t.prev = 7, t.t0 = t["catch"](0), 404 !== t.t0.response.status) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.abrupt("return", []);
                                    case 13:
                                        throw t.t0;
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [0, 7]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchSessionsByUsername: function() {
                        var t = Object(l["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.instance.fetchSessionsByUsername(this.filter.value);
                                    case 2:
                                        return e = t.sent, t.abrupt("return", e.data.sessions.map(function(t) {
                                            return new A(t)
                                        }));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    handlePaste: function(t) {
                        var e = t.clipboardData.getData("text").match(L);
                        e && (this.filter.type = "sessionId")
                    }
                },
                watch: {
                    "$route.query": {
                        immediate: !0,
                        handler: function() {
                            this.filter = c()(this.$route.query).reduce(function(t, e) {
                                var n = Object(i["a"])(e, 2),
                                    a = n[0],
                                    s = n[1];
                                return t.type = a, t.value = s, t
                            }, {
                                type: "username",
                                value: ""
                            })
                        }
                    },
                    filter: {
                        deep: !0,
                        immediate: !0,
                        handler: function() {
                            var t = Object(r["a"])({}, this.filter.type, this.filter.value);
                            b()(t, !this.$route.query) || this.$router.replace({
                                name: "instances/sessions",
                                query: t
                            }), this.fetch()
                        }
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/sessions",
                        parent: "instances",
                        path: "sessions",
                        component: this,
                        label: "Sessions",
                        group: "Security",
                        order: 700,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("sessions")
                        }
                    })
                }
            },
            M = F,
            T = Object(P["a"])(M, a, s, !1, null, null, null);
        e["default"] = T.exports
    },
    a093: function(t, e, n) {},
    a20f: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "section"
                }, [n("div", {
                    staticClass: "container"
                }, [n("h1", {
                    staticClass: "title"
                }, [t._v("\n      About Spring Boot Admin\n    ")]), t.version ? n("h2", {
                    staticClass: "subtitle",
                    domProps: {
                        textContent: t._s("Version " + t.version)
                    }
                }) : t._e(), n("div", {
                    staticClass: "content"
                }, [n("p", [t._v("\n        This is an administration UI for Spring Boot applications.\n      ")]), n("p", [t._v("\n        To monitor applications, they must be registered at this server. This is either done by including the\n        "), n("a", {
                    attrs: {
                        href: t.documentationBaseUrl + "/#register-clients-via-spring-boot-admin"
                    }
                }, [t._v("\n          Spring Boot Admin Client\n        ")]), t._v("\n        or using a\n        "), n("a", {
                    attrs: {
                        href: t.documentationBaseUrl + "/#discover-clients-via-spring-cloud-discovery"
                    }
                }, [t._v("\n          Spring Cloud Discovery Client\n        ")]), t._v(" implementation.\n      ")]), n("p", [t._v("\n        If you have any question please consult the\n        "), n("a", {
                    attrs: {
                        href: "" + t.documentationBaseUrl
                    }
                }, [t._v("\n          Reference Guide\n        ")]), t._v(", ask\n        on "), n("a", {
                    attrs: {
                        href: "https://stackoverflow.com/questions/tagged/spring-boot-admin"
                    }
                }, [t._v("\n          Stack Overflow\n        ")]), t._v(" or\n        have a chat on the "), n("a", {
                    attrs: {
                        href: "https://gitter.im/codecentric/spring-boot-admin"
                    }
                }, [t._v("\n          Gitter\n        ")]), t._v(" channel.\n      ")]), t._m(0), n("div", {
                    staticClass: "about-links"
                }, [n("a", {
                    staticClass: "button is-primary is-outlined",
                    attrs: {
                        href: "" + t.documentationBaseUrl
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        size: "lg",
                        icon: "book"
                    }
                }), t._v(" Reference Guide\n        ")], 1), n("a", {
                    staticClass: "button is-black is-outlined",
                    attrs: {
                        href: "https://github.com/codecentric/spring-boot-admin"
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        size: "lg",
                        icon: ["fab", "github"]
                    }
                }), t._v(" Sources\n        ")], 1), n("a", {
                    staticClass: "button is-stackoverflow is-outlined",
                    attrs: {
                        href: "https://stackoverflow.com/questions/tagged/spring-boot-admin"
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        size: "lg",
                        icon: ["fab", "stack-overflow"]
                    }
                }), t._v(" Stack Overflow\n        ")], 1), n("a", {
                    staticClass: "button is-gitter is-outlined",
                    attrs: {
                        href: "https://gitter.im/codecentric/spring-boot-admin"
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        size: "lg",
                        icon: ["fab", "gitter"]
                    }
                }), t._v(" Gitter\n        ")], 1)])]), n("h1", {
                    staticClass: "title is-5"
                }, [t._v("\n      Trademarks and Licenses\n    ")]), t._m(1)])])
            },
            s = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("p", [t._v("\n        If you found a bug, want to propose a feature or submit a pull request please use the\n        "), n("a", {
                        attrs: {
                            href: "https://github.com/codecentric/spring-boot-admin/issues"
                        }
                    }, [t._v("\n          issue tracker\n        ")]), t._v(".\n      ")])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "content"
                    }, [n("p", [t._v("\n        The source code of Spring Boot Admin is licensed under "), n("a", {
                        attrs: {
                            href: "https://www.apache.org/licenses/LICENSE-2.0"
                        }
                    }, [t._v("\n          Apache License 2.0\n        ")]), t._v(".\n      ")]), n("p", [t._v("\n        Spring, Spring Boot and Spring Cloud are trademarks of "), n("a", {
                        attrs: {
                            href: "https://pivotal.io/"
                        }
                    }, [t._v("\n          Pivotal\n          Software, Inc.\n        ")]), t._v(" in the U.S. and other countries.\n      ")])])
                }
            ],
            r = {
                data: function() {
                    return {
                        version: "2.1.5"
                    }
                },
                computed: {
                    documentationBaseUrl: function() {
                        return "https://codecentric.github.io/spring-boot-admin/".concat(this.version || "current")
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        path: "/about",
                        name: "about",
                        label: "About",
                        order: 200,
                        component: this
                    })
                }
            },
            i = r,
            o = (n("594c"), n("2877")),
            c = Object(o["a"])(i, a, s, !1, null, null, null);
        e["default"] = c.exports
    },
    a2c4: function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "b", function() {
                return o
            });
            var a = n("795b"),
                s = n.n(a),
                r = n("bc3a"),
                i = n.n(r);
            i.a.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", t.SBA && t.SBA.csrf && t.SBA.csrf.headerName && (i.a.defaults.xsrfHeaderName = t.SBA.csrf.headerName);
            var o = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                        return !0
                    };
                    return function(e) {
                        return e.response && 401 === e.response.status && t(e) && window.location.assign("login?redirectTo=".concat(encodeURIComponent(window.location.href))), s.a.reject(e)
                    }
                },
                c = i.a.create();
            c.interceptors.response.use(function(t) {
                return t
            }, o()), c.create = i.a.create, e["a"] = c
        }).call(this, n("c8ba"))
    },
    a2f7: function(t, e, n) {},
    a3e8: function(t, e, n) {
        "use strict";
        var a = n("4712"),
            s = n.n(a);
        s.a
    },
    a486: function(t, e, n) {},
    aa77: function(t, e, n) {
        "use strict";
        var a = n("42eb"),
            s = n.n(a);
        s.a
    },
    aac3: function(t, e, n) {
        "use strict";
        n("20d6"), n("96cf");
        var a = n("3b8d"),
            s = (n("7514"), n("cebc")),
            r = n("aede"),
            i = n("5176"),
            o = n.n(i),
            c = (n("7f7f"), n("a8db")),
            l = n("d225"),
            u = n("b0b4"),
            d = n("a2c4"),
            p = n("55fe"),
            h = n("8be7"),
            f = n("2d8a"),
            m = n("c707"),
            v = n.n(m),
            g = n("df0d");

        function b() {
            var t = Object(r["a"])(["applications/", "/"]);
            return b = function() {
                return t
            }, t
        }
        var _ = function() {
            function t(e) {
                var n = e.name,
                    a = e.instances,
                    s = Object(c["a"])(e, ["name", "instances"]);
                Object(l["a"])(this, t), o()(this, s), this.name = n, this.axios = d["a"].create({
                    baseURL: Object(f["a"])(b(), this.name)
                }), this.axios.interceptors.response.use(function(t) {
                    return t
                }, Object(d["b"])()), this.instances = v()(a.map(function(t) {
                    return new g["a"](t)
                }, [
                    function(t) {
                        return t.registration.healthUrl
                    }
                ]))
            }
            return Object(u["a"])(t, [{
                key: "filterInstances",
                value: function(e) {
                    return new t(Object(s["a"])({}, this, {
                        instances: this.instances.filter(e)
                    }))
                }
            }, {
                key: "findInstance",
                value: function(t) {
                    return this.instances.find(function(e) {
                        return e.id === t
                    })
                }
            }, {
                key: "unregister",
                value: function() {
                    var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", this.axios.delete(""));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));

                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "isUnregisterable",
                get: function() {
                    return this.instances.findIndex(function(t) {
                        return t.isUnregisterable
                    }) >= 0
                }
            }], [{
                key: "list",
                value: function() {
                    var e = Object(a["a"])(regeneratorRuntime.mark(function e() {
                        return regeneratorRuntime.wrap(function(e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, d["a"].get("applications", {
                                        transformResponse: t._transformResponse
                                    });
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));

                    function n() {
                        return e.apply(this, arguments)
                    }
                    return n
                }()
            }, {
                key: "getStream",
                value: function() {
                    return Object(h["f"])(Object(h["m"])(Object(p["a"])()).pipe(Object(h["n"])()), h["b"].create(function(e) {
                        var n = new EventSource("applications");
                        return n.onmessage = function(n) {
                                return e.next(Object(s["a"])({}, n, {
                                    data: t._transformResponse(n.data)
                                }))
                            }, n.onerror = function(t) {
                                return e.error(t)
                            },
                            function() {
                                n.close()
                            }
                    }))
                }
            }, {
                key: "_transformResponse",
                value: function(e) {
                    if (!e) return e;
                    var n = JSON.parse(e);
                    if (n instanceof Array) {
                        var a = n.map(function(e) {
                            return new t(e)
                        });
                        return v()(a, [
                            function(t) {
                                return t.name
                            }
                        ])
                    }
                    return new t(n)
                }
            }]), t
        }();
        e["a"] = _
    },
    aca8: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "application-status"
                }, [n("font-awesome-icon", {
                    staticClass: "application-status__icon",
                    class: "application-status__icon--" + t.status,
                    attrs: {
                        icon: t.icon
                    }
                }), t.date ? n("small", [n("sba-time-ago", {
                    attrs: {
                        date: t.date
                    }
                })], 1) : t._e()], 1)
            },
            s = [],
            r = (n("c5f6"), n("c1df")),
            i = n.n(r),
            o = n("6155"),
            c = {
                UP: "check",
                RESTRICTED: "exclamation",
                OUT_OF_SERVICE: "ban",
                DOWN: "times-circle",
                OFFLINE: "minus-circle",
                UNKNOWN: "question-circle"
            },
            l = {
                components: {
                    sbaTimeAgo: o["default"]
                },
                props: {
                    status: {
                        type: String,
                        default: "UNKNOWN"
                    },
                    date: {
                        type: [String, Date, Number, i.a],
                        default: null
                    }
                },
                computed: {
                    icon: function() {
                        return c[this.status]
                    }
                }
            },
            u = l,
            d = (n("0475"), n("2877")),
            p = Object(d["a"])(u, a, s, !1, null, null, null);
        e["default"] = p.exports
    },
    b188: function(t, e, n) {},
    b38f: function(t, e, n) {
        "use strict";
        var a = n("3b8f"),
            s = n.n(a);
        s.a
    },
    b442: function(t, e, n) {},
    b58b: function(t, e, n) {
        "use strict";
        var a = n("0f24"),
            s = n.n(a);
        s.a
    },
    b6f2: function(t, e, n) {},
    b745: function(t, e, n) {
        "use strict";
        var a = n("0405"),
            s = n.n(a);
        s.a
    },
    b86b: function(t, e, n) {
        "use strict";
        var a = n("46df"),
            s = n.n(a);
        s.a
    },
    bcf5: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("ecee"),
            s = n("eb55"),
            r = n("63c2"),
            i = n("135e"),
            o = n("fcad"),
            c = n("23dc"),
            l = n("2d009"),
            u = n("0951"),
            d = n("28fd"),
            p = n("9adb"),
            h = n("f01e"),
            f = n("5b6d"),
            m = n("2868"),
            v = n("8560"),
            g = n("16a6"),
            b = n("4ba3"),
            _ = n("a17a"),
            C = n("21f3"),
            y = n("871b"),
            x = n("eaec"),
            w = n("dfe7"),
            k = n("1adf"),
            j = n("5621"),
            O = n("96aa"),
            S = n("f959"),
            P = n("0097"),
            E = n("2015"),
            R = n("17f3"),
            L = n("28d3"),
            A = n("ad3d");
        a["c"].add(E["faTrash"], f["faDownload"], S["faStepForward"], O["faStepBackward"], h["faCheck"], w["faQuestionCircle"], l["faBan"], P["faTimesCircle"], y["faMinusCircle"], m["faExclamation"], p["faBook"], j["faSignOutAlt"], v["faExclamationTriangle"], x["faPencilAlt"], u["faBell"], d["faBellSlash"], R["faUserCircle"], b["faHeartbeat"], _["faHome"], L["faWrench"], c["faAngleDoubleRight"], k["faSearch"], C["faMapMarkerAlt"], g["faFilter"], o["faTimesCircle"], s["faGithub"], i["faStackOverflow"], r["faGitter"]), e["default"] = A["a"]
    },
    bdf8: function(t, e, n) {},
    be22: function(t, e, n) {
        "use strict";
        var a = n("fdd4"),
            s = n.n(a);
        s.a
    },
    bfb7: function(t, e, n) {
        "use strict";
        (function(t) {
            e["a"] = {
                data: function() {
                    return {
                        favicon: "assets/img/favicon.png",
                        faviconDanger: "assets/img/favicon-danger.png"
                    }
                },
                props: {
                    applications: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    error: {
                        type: Error,
                        default: null
                    }
                },
                computed: {
                    downCount: function() {
                        return this.applications.reduce(function(t, e) {
                            return t + e.instances.filter(function(t) {
                                return "UP" !== t.statusInfo.status
                            }).length
                        }, 0)
                    }
                },
                created: function() {
                    t.SBA && t.SBA.uiSettings && (t.SBA.uiSettings.favicon && (this.favicon = t.SBA.uiSettings.favicon), t.SBA.uiSettings.faviconDanger && (this.faviconDanger = t.SBA.uiSettings.faviconDanger))
                },
                watch: {
                    downCount: function(t, e) {
                        0 === t !== (0 === e) && this.updateFavicon(0 === t)
                    }
                },
                methods: {
                    updateFavicon: function(t) {
                        document.querySelector('link[rel*="icon"]').href = t ? this.favicon : this.faviconDanger
                    }
                }
            }
        }).call(this, n("c8ba"))
    },
    c39c: function(t, e, n) {
        "use strict";
        var a = n("5e98"),
            s = n.n(a);
        s.a
    },
    c43b: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    class: {
                        isLoading: t.isLoading
                    }
                }, [n("div", {
                    staticClass: "container"
                }, [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching beans failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("div", {
                    staticClass: "field"
                }, [n("p", {
                    staticClass: "control is-expanded has-icons-left"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.filter,
                        expression: "filter"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "search"
                    },
                    domProps: {
                        value: t.filter
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.filter = e.target.value)
                        }
                    }
                }), n("span", {
                    staticClass: "icon is-small is-left"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "filter"
                    }
                })], 1)])]), t._l(t.filteredContexts, function(e) {
                    return [n("h3", {
                        key: e.name,
                        staticClass: "title",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }), n("beans-list", {
                        key: e.name + "-beans",
                        attrs: {
                            beans: e.beans
                        }
                    })]
                })], 2)])
            },
            s = [],
            r = (n("96cf"), n("3b8d")),
            i = (n("4917"), n("3b2b"), n("55dd"), n("cebc")),
            o = n("a4bb"),
            c = n.n(o),
            l = (n("7f7f"), n("5176")),
            u = n.n(l),
            d = n("d225"),
            p = n("df0d"),
            h = n("d50b"),
            f = (n("28a5"), function(t, e) {
                if (!t || t.length < e) return t;
                var n = t.split("."),
                    a = n.pop();
                while (n.length > 0) {
                    var s = n.pop();
                    a = s.length + 1 + a.length < e ? s + "." + a : s[0] + "." + a
                }
                return a
            }),
            m = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("table", {
                    staticClass: "beans table is-fullwidth is-hoverable"
                }, [n("tbody", [t._l(t.beans, function(e) {
                    return [n("tr", {
                        key: e.name,
                        staticClass: "is-selectable",
                        on: {
                            click: function(n) {
                                t.showDetails[e.name] ? t.$delete(t.showDetails, e.name) : t.$set(t.showDetails, e.name, !0)
                            }
                        }
                    }, [n("td", {
                        staticClass: "is-breakable"
                    }, [n("span", {
                        attrs: {
                            title: e.name
                        },
                        domProps: {
                            textContent: t._s(e.shortName)
                        }
                    }), n("br"), n("small", {
                        staticClass: "is-muted",
                        attrs: {
                            title: e.type
                        },
                        domProps: {
                            textContent: t._s(e.shortType)
                        }
                    })]), n("td", [n("span", {
                        staticClass: "tag",
                        domProps: {
                            textContent: t._s(e.scope)
                        }
                    })])]), t.showDetails[e.name] ? n("tr", {
                        key: e.name + "-detail"
                    }, [n("td", {
                        staticClass: "has-background-white-ter",
                        attrs: {
                            colspan: "2"
                        }
                    }, [n("table", {
                        staticClass: "table is-narrow is-fullwidth beans__bean-detail"
                    }, [n("tbody", [e.name !== e.shortName ? n("tr", [t._m(0, !0), n("td", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    })]) : t._e(), t._l(e.aliases, function(a, s) {
                        return n("tr", {
                            key: a
                        }, [0 === s ? n("th", {
                            attrs: {
                                rowspan: e.aliases.length
                            }
                        }, [n("small", [t._v("Aliases")])]) : t._e(), n("td", {
                            staticClass: "is-breakable",
                            domProps: {
                                textContent: t._s(a)
                            }
                        })])
                    }), e.type !== e.shortType ? n("tr", [t._m(1, !0), n("td", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.type)
                        }
                    })]) : t._e(), e.resource ? n("tr", [t._m(2, !0), n("td", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.resource)
                        }
                    })]) : t._e(), t._l(e.dependencies, function(a, s) {
                        return n("tr", {
                            key: a
                        }, [0 === s ? n("th", {
                            attrs: {
                                rowspan: e.dependencies.length
                            }
                        }, [n("small", [t._v("Dependencies")])]) : t._e(), n("td", {
                            staticClass: "is-breakable",
                            domProps: {
                                textContent: t._s(a)
                            }
                        })])
                    })], 2)])])]) : t._e()]
                })], 2)])
            },
            v = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", [n("small", [t._v("Name")])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", [n("small", [t._v("Type")])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", [n("small", [t._v("Resource")])])
                }
            ],
            g = {
                props: {
                    beans: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {
                        showDetails: {}
                    }
                }
            },
            b = g,
            _ = (n("71a8"), n("2877")),
            C = Object(_["a"])(b, m, v, !1, null, null, null),
            y = C.exports,
            x = n("13ea"),
            w = n.n(x),
            k = function t(e, n) {
                Object(d["a"])(this, t), u()(this, n), this.name = e, this.shortName = f(this.name, 80), this.shortType = f(this.type, 80)
            },
            j = function(t) {
                return c()(t).map(function(e) {
                    return new k(e, t[e])
                })
            },
            O = function(t) {
                return w()(t.contexts) ? [] : c()(t.contexts).map(function(e) {
                    return {
                        beans: j(t.contexts[e].beans),
                        name: e,
                        parent: t.contexts[e].parentId
                    }
                })
            },
            S = {
                components: {
                    BeansList: y
                },
                props: {
                    instance: {
                        type: p["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        isLoading: !1,
                        error: null,
                        contexts: [],
                        filter: ""
                    }
                },
                computed: {
                    filteredContexts: function() {
                        var t = this.getFilterFn();
                        return this.contexts.map(function(e) {
                            return Object(i["a"])({}, e, {
                                beans: e.beans.filter(t).sort(Object(h["b"])(function(t) {
                                    return t.name
                                }))
                            })
                        })
                    }
                },
                methods: {
                    getFilterFn: function() {
                        if (!this.filter) return function() {
                            return !0
                        };
                        var t = new RegExp(this.filter, "i");
                        return function(e) {
                            return e.name.match(t) || e.aliases.some(function(e) {
                                return e.match(t)
                            })
                        }
                    },
                    fetchBeans: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, this.isLoading = !0, t.prev = 2, t.next = 5, this.instance.fetchBeans();
                                    case 5:
                                        e = t.sent, this.contexts = O(e.data), t.next = 13;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t["catch"](2), console.warn("Fetching beans failed:", t.t0), this.error = t.t0;
                                    case 13:
                                        this.isLoading = !1;
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [2, 9]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                created: function() {
                    this.fetchBeans()
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/beans",
                        parent: "instances",
                        path: "beans",
                        group: "Insights",
                        component: this,
                        label: "Beans",
                        order: 110,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("beans")
                        }
                    })
                }
            },
            P = S,
            E = Object(_["a"])(P, a, s, !1, null, null, null);
        e["default"] = E.exports
    },
    c5ec: function(t, e, n) {
        "use strict";
        var a = n("faa6"),
            s = n.n(a);
        s.a
    },
    cbfa: function(t, e, n) {
        "use strict";
        var a = n("5327"),
            s = n.n(a);
        s.a
    },
    cc40: function(t, e, n) {
        "use strict";
        var a = function(t, e) {
            if (e.value) {
                var n = e.value.map(function(t) {
                    return document.querySelector(t)
                }).filter(function(t) {
                    return Boolean(t)
                }).map(function(t) {
                    return t.getBoundingClientRect().height
                }).reduce(function(t, e) {
                    return t + e
                }, 0);
                t.style.top = "".concat(n, "px"), t.style.position = "sticky"
            }
        };
        e["a"] = {
            bind: a,
            update: function(t, e) {
                e.value !== e.oldValue && a(t, e)
            }
        }
    },
    cda4: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    class: {
                        "is-loading": !t.hasLoaded
                    }
                }, [t.hasLoaded ? [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching Liquibase migrations failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t._l(t.contexts, function(e, a) {
                    return [n("h3", {
                        key: a,
                        staticClass: "title",
                        domProps: {
                            textContent: t._s(a)
                        }
                    }), t._l(e.liquibaseBeans, function(e, s) {
                        return [n("sba-panel", {
                            key: a + "-" + s,
                            staticClass: "change-set",
                            attrs: {
                                title: "name",
                                "header-sticks-below": ["#navigation"]
                            }
                        }, [n("table", {
                            staticClass: "table is-hoverable is-fullwidth"
                        }, [n("thead", [n("tr", [n("th", [t._v("Id")]), n("th", [t._v("Execution")]), n("th", [t._v("Description")]), n("th", [t._v("Tag")]), n("th", [t._v("Contexts")]), n("th", [t._v("Labels")])])]), n("tbody", [t._l(e.changeSets, function(e) {
                            return [n("tr", {
                                key: a + "-" + s + "-" + e.id,
                                staticClass: "is-selectable",
                                on: {
                                    click: function(n) {
                                        t.showDetails[e.checksum] ? t.$delete(t.showDetails, e.checksum) : t.$set(t.showDetails, e.checksum, !0)
                                    }
                                }
                            }, [n("td", {
                                domProps: {
                                    textContent: t._s(e.id)
                                }
                            }), n("td", [n("span", {
                                staticClass: "tag",
                                class: t.execClass(t.execType),
                                domProps: {
                                    textContent: t._s(e.execType)
                                }
                            })]), n("td", {
                                staticClass: "is-breakable",
                                domProps: {
                                    textContent: t._s(e.description)
                                }
                            }), n("td", {
                                domProps: {
                                    textContent: t._s(e.tag)
                                }
                            }), n("td", {
                                domProps: {
                                    textContent: t._s(e.contexts.join(", "))
                                }
                            }), n("td", t._l(e.labels, function(r) {
                                return n("span", {
                                    key: a + "-" + s + "-" + e.id + "-" + r,
                                    staticClass: "tag is-info",
                                    domProps: {
                                        textContent: t._s(r)
                                    }
                                })
                            }), 0)]), t.showDetails[e.checksum] ? n("tr", {
                                key: a + "-" + s + "-" + e.id + "-details"
                            }, [n("td", {
                                attrs: {
                                    colspan: "6"
                                }
                            }, [n("table", {
                                staticClass: "table is-fullwidth"
                            }, [n("tr", [n("th", [t._v("Changelog")]), n("td", {
                                attrs: {
                                    colspan: "3"
                                },
                                domProps: {
                                    textContent: t._s(e.changeLog)
                                }
                            }), n("th", [t._v("Author")]), n("td", {
                                domProps: {
                                    textContent: t._s(e.author)
                                }
                            })]), n("tr", [n("th", [t._v("Checksum")]), n("td", {
                                domProps: {
                                    textContent: t._s(e.checksum)
                                }
                            }), n("th", [t._v("Comments")]), n("td", {
                                attrs: {
                                    colspan: "3"
                                },
                                domProps: {
                                    textContent: t._s(e.comments)
                                }
                            })]), n("tr", [n("th", [t._v("Execution Order")]), n("td", {
                                domProps: {
                                    textContent: t._s(e.orderExecuted)
                                }
                            }), n("th", [t._v("ExecutionDate")]), n("td", {
                                domProps: {
                                    textContent: t._s(e.dateExecuted)
                                }
                            }), n("th", [t._v("DeploymentId")]), n("td", {
                                domProps: {
                                    textContent: t._s(e.deploymentId)
                                }
                            })])])])]) : t._e()]
                        })], 2)])])]
                    })]
                })] : t._e()], 2)
            },
            s = [],
            r = (n("96cf"), n("3b8d")),
            i = n("df0d"),
            o = {
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        contexts: null,
                        showDetails: {}
                    }
                },
                computed: {},
                created: function() {
                    this.fetchLiquibase()
                },
                methods: {
                    fetchLiquibase: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, t.prev = 1, t.next = 4, this.instance.fetchLiquibase();
                                    case 4:
                                        e = t.sent, this.contexts = e.data.contexts, t.next = 12;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1), console.warn("Fetching Liquibase changeSets failed:", t.t0), this.error = t.t0;
                                    case 12:
                                        this.hasLoaded = !0;
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    execClass: function(t) {
                        switch (t) {
                            case "EXECUTED":
                                return "is-success";
                            case "FAILED":
                                return "is-danger";
                            case "SKIPPED":
                                return "is-light";
                            case "RERAN":
                            case "MARK_RAN":
                                return "is-warning";
                            default:
                                return "is-info"
                        }
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/liquibase",
                        parent: "instances",
                        path: "liquibase",
                        component: this,
                        label: "Liquibase",
                        group: "Data",
                        order: 900,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("liquibase")
                        }
                    })
                }
            },
            c = o,
            l = n("2877"),
            u = Object(l["a"])(c, a, s, !1, null, null, null);
        e["default"] = u.exports
    },
    d3b2: function(t, e, n) {},
    d50b: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return c
        }), n.d(e, "a", function() {
            return l
        });
        var a = n("db0c"),
            s = n.n(a),
            r = n("7618"),
            i = n("a745"),
            o = n.n(i),
            c = function(t) {
                return function(e, n) {
                    var a = t(e),
                        s = t(n);
                    return a > s ? 1 : a < s ? -1 : 0
                }
            },
            l = function t(e, n) {
                return o()(e) ? e.some(function(e) {
                    return t(e, n)
                }) : null !== e && "object" === Object(r["a"])(e) ? t(s()(e), n) : n(e)
            }
    },
    d76e: function(t, e, n) {
        "use strict";
        n("96cf");
        var a = n("3b8d");
        e["a"] = {
            created: function() {
                this.subscribe()
            },
            beforeDestroy: function() {
                this.unsubscribe()
            },
            methods: {
                subscribe: function() {
                    var t = Object(a["a"])(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (this.subscription) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.next = 3, this.createSubscription();
                                case 3:
                                    this.subscription = t.sent;
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));

                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                unsubscribe: function() {
                    if (this.subscription) try {
                        !this.subscription.closed && this.subscription.unsubscribe()
                    } finally {
                        this.subscription = null
                    }
                }
            }
        }
    },
    dbf5: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "formatted",
                    domProps: {
                        innerHTML: t._s(t.formatted)
                    }
                })
            },
            s = [],
            r = n("297c"),
            i = n("768b"),
            o = n("2d1f"),
            c = n.n(o),
            l = n("a745"),
            u = n.n(l),
            d = n("13ea"),
            p = n.n(d),
            h = n("1a8c"),
            f = n.n(h),
            m = function(t) {
                return (u()(t) || f()(t)) && !p()(t)
            },
            v = function t(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return u()(e) ? p()(e) ? n + "[]" : e.map(function(e) {
                    return m(e) ? "".concat(n, "-\n").concat(t(e, n + "  ")) : "".concat(n, "- ").concat(t(e, ""))
                }).join("\n") : f()(e) ? p()(e) ? n + "{}" : c()(e).map(function(e) {
                    var a = Object(i["a"])(e, 2),
                        s = a[0],
                        r = a[1];
                    return m(r) ? "".concat(n).concat(s, ":\n").concat(t(r, n + "  ")) : "".concat(n).concat(s, ": ").concat(t(r, ""))
                }).join("\n") : null === e ? n + "null" : "undefined" === typeof e || "" === e ? "" : n + e
            },
            g = v,
            b = new r["a"]({
                truncate: {
                    length: 50,
                    location: "smart"
                }
            }),
            _ = {
                props: {
                    value: {
                        type: null,
                        required: !0
                    }
                },
                computed: {
                    formatted: function() {
                        return b(g(this.value))
                    }
                }
            },
            C = _,
            y = (n("5e79"), n("2877")),
            x = Object(y["a"])(C, a, s, !1, null, null, null);
        e["default"] = x.exports
    },
    dc6e: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section"
                }, [n("div", {
                    staticClass: "container"
                }, [t.applicationsInitialized ? t._e() : n("p", {
                    staticClass: "is-muted is-loading"
                }, [t._v("\n      Loading applications...\n    ")]), t.error ? n("div", {
                    staticClass: "message is-warning"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-warning",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Server connection failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.applicationsInitialized ? [n("applications-stats", {
                    attrs: {
                        applications: t.applications
                    }
                }), n("div", {
                    staticClass: "field"
                }, [n("p", {
                    staticClass: "control is-expanded has-icons-left"
                }, [n("input", {
                    staticClass: "input",
                    attrs: {
                        type: "search"
                    },
                    domProps: {
                        value: t.filter
                    },
                    on: {
                        input: t.handleFilterInput
                    }
                }), n("span", {
                    staticClass: "icon is-small is-left"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "filter"
                    }
                })], 1)])]), t._l(t.statusGroups, function(e) {
                    return n("div", {
                        key: e.status,
                        staticClass: "application-group"
                    }, [n("p", {
                        staticClass: "heading",
                        domProps: {
                            textContent: t._s(e.status)
                        }
                    }), n("div", {
                        staticClass: "applications-list"
                    }, t._l(e.applications, function(e) {
                        return n("applications-list-item", {
                            directives: [{
                                name: "on-clickaway",
                                rawName: "v-on-clickaway",
                                value: function(n) {
                                    return t.deselect(n, e.name)
                                },
                                expression: "(event) => deselect(event, application.name)"
                            }],
                            key: e.name,
                            attrs: {
                                id: e.name,
                                application: e,
                                "is-expanded": t.selected === e.name || Boolean(t.filter),
                                "has-notification-filters-support": t.hasNotificationFiltersSupport,
                                "notification-filters": t.notificationFilters
                            },
                            on: {
                                click: function(n) {
                                    return n.stopPropagation(), t.select(e.name)
                                },
                                unregister: t.unregister,
                                "toggle-notification-filter-settings": t.toggleNotificationFilterSettings
                            }
                        })
                    }), 1)])
                }), 0 === t.applications.length ? n("p", {
                    staticClass: "is-muted"
                }, [t._v("\n        No applications registered.\n      ")]) : t._e(), t.showNotificationFilterSettingsObject ? n("notification-filter-settings", {
                    directives: [{
                        name: "popper",
                        rawName: "v-popper",
                        value: "nf-settings-" + (t.showNotificationFilterSettingsObject.id || t.showNotificationFilterSettingsObject.name),
                        expression: "`nf-settings-${showNotificationFilterSettingsObject.id || showNotificationFilterSettingsObject.name}`"
                    }],
                    attrs: {
                        "notification-filters": t.notificationFilters,
                        object: t.showNotificationFilterSettingsObject
                    },
                    on: {
                        "filter-added": t.handleNotificationFilterChange,
                        "filter-deleted": t.handleNotificationFilterChange
                    }
                }) : t._e()] : t._e()], 2)])
            },
            s = [],
            r = (n("7f7f"), n("96cf"), n("3b8d")),
            i = (n("a481"), n("6762"), n("2fdb"), n("1b81")),
            o = n.n(i),
            c = n("f0bd"),
            l = new o.a,
            u = function(t, e) {
                var n = "string" === typeof e.value ? document.getElementById(e.value) : e.value;
                if (n) {
                    var a = new c["a"](n, t);
                    l.set(t, a)
                }
            },
            d = function(t) {
                var e = l.get(t);
                e && e.destroy(t)
            },
            p = {
                bind: u,
                update: function(t, e) {
                    e.value !== e.oldValue && u(t, e)
                },
                unbind: d
            },
            h = n("d76e"),
            f = n("3792"),
            m = n("d50b"),
            v = n("8be7"),
            g = n("6edf"),
            b = n.n(g),
            _ = n("c707"),
            C = n.n(_),
            y = n("50ca"),
            x = n.n(y),
            w = n("723b"),
            k = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "application-list-item card",
                    class: {
                        "is-active": t.isExpanded
                    }
                }, [n("header", t._g({
                    staticClass: "hero application-list-item__header",
                    class: t.headerClass
                }, t.$listeners), [t.isExpanded ? n("h1", {
                    staticClass: "title is-size-5",
                    domProps: {
                        textContent: t._s(t.application.name)
                    }
                }) : n("application-summary", {
                    attrs: {
                        application: t.application
                    }
                }), n("div", {
                    staticClass: "application-list-item__header__actions"
                }, [t.hasNotificationFiltersSupport ? n("sba-icon-button", {
                    attrs: {
                        id: "nf-settings-" + t.application.name,
                        icon: t.hasActiveNotificationFilter(t.application) ? "bell-slash" : "bell"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.$emit("toggle-notification-filter-settings", t.application)
                        }
                    }
                }) : t._e(), t.application.isUnregisterable ? n("sba-icon-button", {
                    attrs: {
                        icon: "trash"
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.$emit("unregister", t.application)
                        }
                    }
                }) : t._e()], 1)], 1), t.isExpanded ? n("div", {
                    staticClass: "card-content"
                }, [n("instances-list", {
                    attrs: {
                        instances: t.application.instances
                    },
                    scopedSlots: t._u([{
                        key: "actions",
                        fn: function(e) {
                            var a = e.instance;
                            return [t.hasNotificationFiltersSupport ? n("sba-icon-button", {
                                attrs: {
                                    id: "nf-settings-" + a.id,
                                    icon: t.hasActiveNotificationFilter(a) ? "bell-slash" : "bell"
                                },
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.$emit("toggle-notification-filter-settings", a)
                                    }
                                }
                            }) : t._e(), a.isUnregisterable ? n("sba-icon-button", {
                                attrs: {
                                    icon: "trash"
                                },
                                on: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.$emit("unregister", a)
                                    }
                                }
                            }) : t._e()]
                        }
                    }], null, !1, 3232028256)
                })], 1) : t._e()])
            },
            j = [],
            O = n("aac3"),
            S = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "application-summary"
                }, [n("sba-status", {
                    staticClass: "application-summary__status",
                    attrs: {
                        status: t.application.status,
                        date: t.application.statusTimestamp
                    }
                }), n("p", {
                    staticClass: "application-summary__name"
                }, [n("span", {
                    domProps: {
                        textContent: t._s(t.application.name)
                    }
                }), n("br"), n("span", {
                    staticClass: "is-muted"
                }, [1 === t.application.instances.length ? n("a", {
                    attrs: {
                        href: t.healthUrl
                    },
                    domProps: {
                        textContent: t._s(t.healthUrl)
                    }
                }) : n("span", {
                    domProps: {
                        textContent: t._s(t.application.instances.length + " instances")
                    }
                })])]), n("p", {
                    staticClass: "application-summary__version",
                    domProps: {
                        textContent: t._s(t.application.buildVersion)
                    }
                })], 1)
            },
            P = [],
            E = {
                props: {
                    application: {
                        type: O["a"],
                        required: !0
                    }
                },
                computed: {
                    healthUrl: function() {
                        return 1 === this.application.instances.length ? this.application.instances[0].registration.serviceUrl || this.application.instances[0].registration.healthUrl : ""
                    }
                }
            },
            R = E,
            L = (n("e462"), n("2877")),
            A = Object(L["a"])(R, S, P, !1, null, null, null),
            F = A.exports,
            M = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("table", {
                    staticClass: "table is-hoverable is-selectable is-fullwidth instances-list"
                }, [n("tbody", t._l(t.instances, function(e) {
                    return n("tr", {
                        key: e.id,
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), t.showDetails(e)
                            }
                        }
                    }, [n("td", {
                        staticClass: "instance-list-item__status"
                    }, [n("sba-status", {
                        attrs: {
                            status: e.statusInfo.status,
                            date: e.statusTimestamp
                        }
                    })], 1), n("td", {
                        staticClass: "is-narrow"
                    }, [n("a", {
                        attrs: {
                            href: e.registration.serviceUrl || e.registration.healthUrl
                        },
                        domProps: {
                            textContent: t._s(e.registration.serviceUrl || e.registration.healthUrl)
                        },
                        on: {
                            click: function(t) {
                                t.stopPropagation()
                            }
                        }
                    }), n("br"), n("span", {
                        staticClass: "is-muted",
                        domProps: {
                            textContent: t._s(e.id)
                        }
                    })]), n("td", [n("sba-tags", {
                        attrs: {
                            tags: e.tags
                        }
                    })], 1), n("td", [n("span", {
                        domProps: {
                            textContent: t._s(e.buildVersion)
                        }
                    })]), n("td", {
                        staticClass: "instance-list-item__actions"
                    }, [t._t("actions", null, {
                        instance: e
                    })], 2)])
                }), 0)])
            },
            T = [],
            $ = {
                props: {
                    instances: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    showNotificationSettings: {
                        type: Boolean,
                        default: !1
                    },
                    hasActiveNotificationFilter: {
                        type: Function,
                        default: function() {
                            return !1
                        }
                    }
                },
                methods: {
                    showDetails: function(t) {
                        this.$router.push({
                            name: "instances/details",
                            params: {
                                instanceId: t.id
                            }
                        })
                    }
                }
            },
            I = $,
            N = (n("1fac"), Object(L["a"])(I, M, T, !1, null, null, null)),
            B = N.exports,
            D = {
                components: {
                    ApplicationSummary: F,
                    InstancesList: B
                },
                props: {
                    application: {
                        type: O["a"],
                        required: !0
                    },
                    isExpanded: {
                        type: Boolean,
                        default: !1
                    },
                    notificationFilters: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    hasNotificationFiltersSupport: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    headerClass: function() {
                        return this.isExpanded ? "UP" === this.application.status ? "is-primary" : "RESTRICTED" === this.application.status ? "is-warning" : "DOWN" === this.application.status ? "is-danger" : "OUT_OF_SERVICE" === this.application.status ? "is-danger" : (this.application.status, "is-light") : "is-selectable"
                    }
                },
                methods: {
                    hasActiveNotificationFilter: function(t) {
                        return this.notificationFilters.some(function(e) {
                            return e.affects(t)
                        })
                    }
                }
            },
            q = D,
            U = (n("99a3"), Object(L["a"])(q, k, j, !1, null, null, null)),
            H = U.exports,
            V = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "level"
                }, [n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n        Applications\n      ")]), n("p", {
                    staticClass: "title",
                    domProps: {
                        textContent: t._s(t.applicationsCount)
                    }
                }, [t._v("\n        1\n      ")])])]), n("div", {
                    staticClass: "level-item has-text-centered"
                }, [n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n        Instances\n      ")]), n("p", {
                    staticClass: "title",
                    domProps: {
                        textContent: t._s(t.instancesCount)
                    }
                }, [t._v("\n        1\n      ")])])]), n("div", {
                    staticClass: "level-item has-text-centered"
                }, [0 === t.downCount ? n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n        Status\n      ")]), n("p", {
                    staticClass: "title has-text-success"
                }, [t._v("\n        all up\n      ")])]) : n("div", [n("p", {
                    staticClass: "heading"
                }, [t._v("\n        instances down\n      ")]), n("p", {
                    staticClass: "title has-text-danger",
                    domProps: {
                        textContent: t._s(t.downCount)
                    }
                })])])])
            },
            z = [],
            G = {
                props: {
                    applications: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                computed: {
                    applicationsCount: function() {
                        return this.applications.length
                    },
                    instancesCount: function() {
                        return this.applications.reduce(function(t, e) {
                            return t + e.instances.length
                        }, 0)
                    },
                    downCount: function() {
                        return this.applications.reduce(function(t, e) {
                            return t + e.instances.filter(function(t) {
                                return "UP" !== t.statusInfo.status
                            }).length
                        }, 0)
                    }
                }
            },
            W = G,
            J = Object(L["a"])(W, V, z, !1, null, null, null),
            X = J.exports,
            K = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("span", [t.error ? n("span", {
                    staticClass: "has-text-warning"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                })], 1) : t._e(), n("span", {
                    class: {
                        "badge is-badge-danger": t.downCount > 0
                    },
                    attrs: {
                        "data-badge": t.downCount
                    }
                }, [t._v("\n    Applications\n  ")])])
            },
            Y = [],
            Z = n("bfb7"),
            Q = Z["a"],
            tt = Object(L["a"])(Q, K, Y, !1, null, null, null),
            et = tt.exports,
            nt = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "box"
                }, [t.activeFilter ? [n("div", {
                    staticClass: "field"
                }, [n("p", {
                    staticClass: "control has-inline-text"
                }, [t._v("\n        Notifications on "), n("code", {
                    domProps: {
                        textContent: t._s(t.object.id || t.object.name)
                    }
                }), t._v(" are suppressed for\n        "), n("strong", {
                    domProps: {
                        textContent: t._s(t.activeFilter.expiry ? t.activeFilter.expiry.locale("en").fromNow(!0) : "ever")
                    }
                }), t._v(".\n      ")])]), n("div", {
                    staticClass: "field is-grouped is-grouped-right"
                }, [n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button",
                    class: {
                        "is-loading": "executing" === t.actionState
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.deleteActiveFilter(e)
                        }
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "bell"
                    }
                }), t._v(" Unsuppress\n        ")], 1)])])] : [n("div", {
                    staticClass: "field"
                }, [n("p", {
                    staticClass: "control has-inline-text"
                }, [t._v("\n        Suppress notifications on "), n("code", {
                    domProps: {
                        textContent: t._s(t.object.id || t.object.name)
                    }
                }), t._v(" for\n        "), n("span", {
                    staticClass: "select"
                }, [n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.ttl,
                        expression: "ttl"
                    }],
                    on: {
                        click: function(t) {
                            t.stopPropagation()
                        },
                        change: function(e) {
                            var n = Array.prototype.filter.call(e.target.options, function(t) {
                                return t.selected
                            }).map(function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            });
                            t.ttl = e.target.multiple ? n : n[0]
                        }
                    }
                }, t._l(t.ttlOptions, function(e) {
                    return n("option", {
                        key: "ttl-instance-" + e.value,
                        domProps: {
                            value: e.value,
                            textContent: t._s(e.label)
                        }
                    })
                }), 0)])])]), n("div", {
                    staticClass: "field is-grouped is-grouped-right"
                }, [n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button is-warning",
                    class: {
                        "is-loading": "executing" === t.actionState
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), t.addFilter(e)
                        }
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "bell-slash"
                    }
                }), t._v(" Suppress\n        ")], 1)])])]], 2)
            },
            at = [],
            st = (n("7514"), {
                props: {
                    object: {
                        type: Object,
                        required: !0
                    },
                    notificationFilters: {
                        type: Array,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        ttl: 3e5,
                        ttlOptions: [{
                            label: "5 minutes",
                            value: 3e5
                        }, {
                            label: "15 minutes",
                            value: 9e5
                        }, {
                            label: "30 minutes",
                            value: 18e5
                        }, {
                            label: "1 hour",
                            value: 36e5
                        }, {
                            label: "3 hours",
                            value: 108e5
                        }, {
                            label: "8 hours",
                            value: 288e5
                        }, {
                            label: "24 hours",
                            value: 864e5
                        }, {
                            label: "ever",
                            value: -1
                        }],
                        actionState: null
                    }
                },
                computed: {
                    activeFilter: function() {
                        var t = this;
                        return this.notificationFilters.find(function(e) {
                            return e.affects(t.object)
                        })
                    }
                },
                methods: {
                    addFilter: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.actionState = "executing", t.prev = 1, t.next = 4, f["a"].addFilter(this.object, this.ttl);
                                    case 4:
                                        e = t.sent, this.actionState = "completed", this.$emit("filter-added", e.data), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t["catch"](1), console.warn("Adding notification filter failed:", t.t0);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 9]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    deleteActiveFilter: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.actionState = "executing", t.prev = 1, t.next = 4, this.activeFilter.delete();
                                    case 4:
                                        this.actionState = "completed", this.$emit("filter-deleted", this.activeFilter.id), t.next = 12;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1), this.actionState = "failed", console.warn("Deleting notification filter failed:", t.t0);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            }),
            rt = st,
            it = (n("76dc"), Object(L["a"])(rt, nt, at, !1, null, null, null)),
            ot = it.exports,
            ct = function(t, e) {
                var n = function(e) {
                    return String(e).toLowerCase().includes(t)
                };
                return Object(m["a"])(e.registration, n) || Object(m["a"])(e.buildVersion, n) || Object(m["a"])(e.id, n) || Object(m["a"])(e.tags, n)
            },
            lt = {
                props: {
                    applications: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    error: {
                        type: Error,
                        default: null
                    },
                    selected: {
                        type: String,
                        default: null
                    },
                    applicationsInitialized: {
                        type: Boolean,
                        default: !1
                    }
                },
                directives: {
                    onClickaway: w["directive"],
                    Popper: p
                },
                mixins: [h["a"]],
                components: {
                    applicationsStats: X,
                    ApplicationsListItem: H,
                    NotificationFilterSettings: ot
                },
                data: function() {
                    return {
                        filter: null,
                        hasNotificationFiltersSupport: !1,
                        showNotificationFilterSettingsObject: null,
                        notificationFilters: []
                    }
                },
                watch: {
                    "$route.query": {
                        immediate: !0,
                        handler: function() {
                            this.filter = this.$route.query.q
                        }
                    },
                    selected: {
                        immediate: !0,
                        handler: function(t) {
                            this.scrollIntoView(t)
                        }
                    }
                },
                mounted: function() {
                    this.hasNotificationFiltersSupport = f["a"].isSupported()
                },
                methods: {
                    handleFilterInput: function(t) {
                        this.$router.replace({
                            name: "applications",
                            query: t.target.value ? {
                                q: t.target.value
                            } : null
                        })
                    },
                    select: function(t) {
                        this.$router.replace({
                            name: "applications",
                            params: {
                                selected: t
                            }
                        })
                    },
                    deselect: function(t, e) {
                        this.toggleNotificationFilterSettings(null), t && t.target instanceof HTMLAnchorElement || this.selected !== e && e || this.$router.replace({
                            name: "applications"
                        })
                    },
                    scrollIntoView: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t(e, n) {
                            var a, s;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!e) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 3, this.$nextTick();
                                    case 3:
                                        a = document.getElementById(e), a && (s = a.getBoundingClientRect().top + window.scrollY - 100, window.scroll({
                                            top: s,
                                            left: window.scrollX,
                                            behavior: n || "smooth"
                                        }));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    unregister: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t(e) {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        this.toggleNotificationFilterSettings(null);
                                        try {
                                            e.unregister()
                                        } catch (n) {
                                            this.errors.push(n)
                                        }
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    createSubscription: function() {
                        var t = this;
                        return t.notificationFilterSubject = new v["c"], Object(v["u"])(0, 6e4).pipe(Object(v["q"])(t.notificationFilterSubject), Object(v["h"])(this.fetchNotificationFilters)).subscribe({
                            next: function(e) {
                                t.notificationFilters = e
                            },
                            error: function(e) {
                                console.warn("Fetching notification filters failed:", e), t.errors.push(e)
                            }
                        })
                    },
                    fetchNotificationFilters: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.hasNotificationFiltersSupport) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 3, f["a"].getFilters();
                                    case 3:
                                        return e = t.sent, t.abrupt("return", e.data);
                                    case 5:
                                        return t.abrupt("return", []);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    handleNotificationFilterChange: function(t) {
                        this.toggleNotificationFilterSettings(null), this.notificationFilterSubject.next(t)
                    },
                    toggleNotificationFilterSettings: function(t) {
                        this.showNotificationFilterSettingsObject = t || null
                    },
                    filterInstances: function(t) {
                        var e = this;
                        return this.filter ? t.map(function(t) {
                            return t.filterInstances(function(t) {
                                return ct(e.filter.toLowerCase(), t)
                            })
                        }).filter(function(t) {
                            return t.instances.length > 0
                        }) : t
                    }
                },
                computed: {
                    statusGroups: function() {
                        var t = this.filterInstances(this.applications),
                            e = b()(t, function(t) {
                                return t.status
                            }),
                            n = x()(e, function(t, e, n) {
                                t.push({
                                    status: n,
                                    applications: C()(e, [
                                        function(t) {
                                            return t.name
                                        }
                                    ])
                                })
                            }, []);
                        return C()(n, [
                            function(t) {
                                return t.status
                            }
                        ])
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        path: "/applications/:selected?",
                        props: !0,
                        name: "applications",
                        label: "Applications",
                        handle: et,
                        order: 0,
                        component: this
                    }), e.addRedirect("/", "applications")
                }
            },
            ut = lt,
            dt = Object(L["a"])(ut, a, s, !1, null, null, null);
        e["default"] = dt.exports
    },
    dc74: function(t, e, n) {
        "use strict";
        var a = n("2363"),
            s = n.n(a);
        s.a
    },
    df0d: function(t, e, n) {
        "use strict";
        var a = n("cebc"),
            s = (n("6762"), n("2fdb"), n("768b")),
            r = n("2d1f"),
            i = n.n(r),
            o = (n("96cf"), n("3b8d")),
            c = (n("20d6"), n("aede")),
            l = n("5176"),
            u = n.n(l),
            d = n("a8db"),
            p = n("d225"),
            h = n("b0b4"),
            f = (n("4917"), n("a2c4")),
            m = n("55fe"),
            v = (n("28a5"), n("e814")),
            g = n.n(v),
            b = n("8be7"),
            _ = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 307200,
                    a = "bytes=-".concat(n),
                    s = 0;
                return Object(b["u"])(0, e).pipe(Object(b["h"])(function() {
                    return t({
                        headers: {
                            range: a,
                            Accept: "text/plain, */*"
                        }
                    })
                }), Object(b["h"])(function(t) {
                    var e = 0 === s,
                        n = t.data.length;
                    if (200 === t.status) {
                        if (!e) throw "Expected 206 - Partial Content on subsequent requests.";
                        s = n
                    } else {
                        if (206 !== t.status) throw "Unexpected response status: " + t.status;
                        s = g()(t.headers["content-range"].split("/")[1])
                    }
                    a = "bytes=".concat(s - 1, "-");
                    var r = null,
                        i = 0;
                    return e ? n >= s ? r = t.data : (r = t.data.substring(t.data.indexOf("\n") + 1), i = s - r.length) : t.data.length > 1 && (r = t.data.substring(1)), r ? Object(b["r"])({
                        totalBytes: s,
                        skipped: i,
                        addendum: r
                    }) : b["a"]
                }))
            },
            C = n("2d8a"),
            y = n("50ca"),
            x = n.n(y);

        function w() {
            var t = Object(c["a"])(["instances/", ""]);
            return w = function() {
                return t
            }, t
        }

        function k() {
            var t = Object(c["a"])(["actuator/mappings"]);
            return k = function() {
                return t
            }, t
        }

        function j() {
            var t = Object(c["a"])(["actuator/jolokia"]);
            return j = function() {
                return t
            }, t
        }

        function O() {
            var t = Object(c["a"])(["actuator/jolokia"]);
            return O = function() {
                return t
            }, t
        }

        function S() {
            var t = Object(c["a"])(["actuator/jolokia"]);
            return S = function() {
                return t
            }, t
        }

        function P() {
            var t = Object(c["a"])(["actuator/jolokia/list"]);
            return P = function() {
                return t
            }, t
        }

        function E() {
            var t = Object(c["a"])(["actuator/logfile"]);
            return E = function() {
                return t
            }, t
        }

        function R() {
            var t = Object(c["a"])(["actuator/sessions/", ""]);
            return R = function() {
                return t
            }, t
        }

        function L() {
            var t = Object(c["a"])(["actuator/sessions/", ""]);
            return L = function() {
                return t
            }, t
        }

        function A() {
            var t = Object(c["a"])(["actuator/sessions"]);
            return A = function() {
                return t
            }, t
        }

        function F() {
            var t = Object(c["a"])(["actuator/auditevents"]);
            return F = function() {
                return t
            }, t
        }

        function M() {
            var t = Object(c["a"])(["actuator/threaddump"]);
            return M = function() {
                return t
            }, t
        }

        function T() {
            var t = Object(c["a"])(["actuator/beans"]);
            return T = function() {
                return t
            }, t
        }

        function $() {
            var t = Object(c["a"])(["actuator/httptrace"]);
            return $ = function() {
                return t
            }, t
        }

        function I() {
            var t = Object(c["a"])(["actuator/loggers/", ""]);
            return I = function() {
                return t
            }, t
        }

        function N() {
            var t = Object(c["a"])(["actuator/loggers"]);
            return N = function() {
                return t
            }, t
        }

        function B() {
            var t = Object(c["a"])(["actuator/flyway"]);
            return B = function() {
                return t
            }, t
        }

        function D() {
            var t = Object(c["a"])(["actuator/caches/", ""]);
            return D = function() {
                return t
            }, t
        }

        function q() {
            var t = Object(c["a"])(["actuator/caches"]);
            return q = function() {
                return t
            }, t
        }

        function U() {
            var t = Object(c["a"])(["actuator/caches"]);
            return U = function() {
                return t
            }, t
        }

        function H() {
            var t = Object(c["a"])(["actuator/gateway/refresh"]);
            return H = function() {
                return t
            }, t
        }

        function V() {
            var t = Object(c["a"])(["actuator/gateway/routes/", ""]);
            return V = function() {
                return t
            }, t
        }

        function z() {
            var t = Object(c["a"])(["actuator/gateway/routes"]);
            return z = function() {
                return t
            }, t
        }

        function G() {
            var t = Object(c["a"])(["actuator/gateway/routes/", ""]);
            return G = function() {
                return t
            }, t
        }

        function W() {
            var t = Object(c["a"])(["actuator/gateway/globalfilters"]);
            return W = function() {
                return t
            }, t
        }

        function J() {
            var t = Object(c["a"])(["actuator/scheduledtasks"]);
            return J = function() {
                return t
            }, t
        }

        function X() {
            var t = Object(c["a"])(["actuator/liquibase"]);
            return X = function() {
                return t
            }, t
        }

        function K() {
            var t = Object(c["a"])(["actuator/refresh"]);
            return K = function() {
                return t
            }, t
        }

        function Y() {
            var t = Object(c["a"])(["actuator/env"]);
            return Y = function() {
                return t
            }, t
        }

        function Z() {
            var t = Object(c["a"])(["actuator/env"]);
            return Z = function() {
                return t
            }, t
        }

        function Q() {
            var t = Object(c["a"])(["actuator/env"]);
            return Q = function() {
                return t
            }, t
        }

        function tt() {
            var t = Object(c["a"])(["actuator/configprops"]);
            return tt = function() {
                return t
            }, t
        }

        function et() {
            var t = Object(c["a"])(["actuator/env/", ""]);
            return et = function() {
                return t
            }, t
        }

        function nt() {
            var t = Object(c["a"])(["actuator/health"]);
            return nt = function() {
                return t
            }, t
        }

        function at() {
            var t = Object(c["a"])(["actuator/metrics/", ""]);
            return at = function() {
                return t
            }, t
        }

        function st() {
            var t = Object(c["a"])(["actuator/metrics"]);
            return st = function() {
                return t
            }, t
        }

        function rt() {
            var t = Object(c["a"])(["actuator/info"]);
            return rt = function() {
                return t
            }, t
        }

        function it() {
            var t = Object(c["a"])(["instances/", "/"]);
            return it = function() {
                return t
            }, t
        }
        var ot = ["application/vnd.spring-boot.actuator.v2+json", "application/vnd.spring-boot.actuator.v1+json", "application/json"],
            ct = function(t) {
                return t.match(/^instances[\/][^\/]+[\/]actuator([\/].*)?$/)
            },
            lt = function() {
                function t(e) {
                    var n = e.id,
                        a = Object(d["a"])(e, ["id"]);
                    Object(p["a"])(this, t), u()(this, a), this.id = n, this.axios = f["a"].create({
                        baseURL: '../'
                    }), this.axios.interceptors.response.use(function(t) {
                        return t
                    }, Object(f["b"])(function(t) {
                        return !ct(t.config.url)
                    }))
                }
                return Object(h["a"])(t, [{
                    key: "hasEndpoint",
                    value: function(t) {
                        return this.endpoints.findIndex(function(e) {
                            return e.id === t
                        }) >= 0
                    }
                }, {
                    key: "unregister",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.delete(""));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchInfo",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(rt()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchMetrics",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(st()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchMetric",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e, n) {
                            var a;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = n ? {
                                            tag: i()(n).filter(function(t) {
                                                var e = Object(s["a"])(t, 2),
                                                    n = e[1];
                                                return "undefined" !== typeof n && null !== n
                                            }).map(function(t) {
                                                var e = Object(s["a"])(t, 2),
                                                    n = e[0],
                                                    a = e[1];
                                                return "".concat(n, ":").concat(a)
                                            }).join(",")
                                        } : {}, t.abrupt("return", this.axios.get(Object(C["a"])(at(), e), {
                                            headers: {
                                                Accept: ot
                                            },
                                            params: a
                                        }));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchHealth",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.axios.get(Object(C["a"])(nt()), {
                                            headers: {
                                                Accept: ot
                                            },
                                            validateStatus: null
                                        });
                                    case 2:
                                        return t.abrupt("return", t.sent);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchEnv",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(et(), e || ""), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchConfigprops",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(tt()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "hasEnvManagerSupport",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.axios.options(Object(C["a"])(Q()));
                                    case 2:
                                        return e = t.sent, t.abrupt("return", e.headers["allow"] && e.headers["allow"].includes("POST"));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "resetEnv",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.delete(Object(C["a"])(Z())));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "setEnv",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e, n) {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.post(Object(C["a"])(Y()), {
                                            name: e,
                                            value: n
                                        }, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "refreshContext",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.post(Object(C["a"])(K())));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchLiquibase",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(X()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchScheduledTasks",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(J()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchGatewayGlobalFilters",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(W()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "addGatewayRoute",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.post(Object(C["a"])(G(), e.id), e, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchGatewayRoutes",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(z()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "deleteGatewayRoute",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.delete(Object(C["a"])(V(), e), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "refreshGatewayRoutesCache",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.post(Object(C["a"])(H()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchCaches",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(U()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "clearCaches",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.delete(Object(C["a"])(q()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "clearCache",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e, n) {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.delete(Object(C["a"])(D(), e), {
                                            params: {
                                                cacheManager: n
                                            },
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchFlyway",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(B()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchLoggers",
                    value: function() {
                        var e = Object(o["a"])(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this.axios.get(Object(C["a"])(N()), {
                                            headers: {
                                                Accept: ot
                                            },
                                            transformResponse: t._toLoggers
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));

                        function n() {
                            return e.apply(this, arguments)
                        }
                        return n
                    }()
                }, {
                    key: "configureLogger",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e, n) {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.post(Object(C["a"])(I(), e), {
                                            configuredLevel: n
                                        }, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchHttptrace",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])($()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchBeans",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(T()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchThreaddump",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(M()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchAuditevents",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                            var n, a, s;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.after, a = e.type, s = e.principal, t.abrupt("return", this.axios.get(Object(C["a"])(F()), {
                                            headers: {
                                                Accept: ot
                                            },
                                            params: {
                                                after: n.toISOString(),
                                                type: a || void 0,
                                                principal: s || void 0
                                            }
                                        }));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchSessionsByUsername",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(A()), {
                                            headers: {
                                                Accept: ot
                                            },
                                            params: {
                                                username: e || void 0
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchSession",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(L(), e), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "deleteSession",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e) {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.delete(Object(C["a"])(R(), e), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "streamLogfile",
                    value: function(t) {
                        var e = this;
                        return _(function(t) {
                            return e.axios.get(Object(C["a"])(E()), t)
                        }, t)
                    }
                }, {
                    key: "listMBeans",
                    value: function() {
                        var e = Object(o["a"])(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this.axios.get(Object(C["a"])(P()), {
                                            headers: {
                                                Accept: "application/json"
                                            },
                                            params: {
                                                canonicalNaming: !1
                                            },
                                            transformResponse: t._toMBeans
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));

                        function n() {
                            return e.apply(this, arguments)
                        }
                        return n
                    }()
                }, {
                    key: "readMBeanAttributes",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e, n) {
                            var a;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = {
                                            type: "read",
                                            mbean: "".concat(e, ":").concat(n),
                                            config: {
                                                ignoreErrors: !0
                                            }
                                        }, t.abrupt("return", this.axios.post(Object(C["a"])(S()), a, {
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json"
                                            }
                                        }));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "writeMBeanAttribute",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e, n, a, s) {
                            var r;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return r = {
                                            type: "write",
                                            mbean: "".concat(e, ":").concat(n),
                                            attribute: a,
                                            value: s
                                        }, t.abrupt("return", this.axios.post(Object(C["a"])(O()), r, {
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json"
                                            }
                                        }));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e, n, a, s) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "invokeMBeanOperation",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t(e, n, a, s) {
                            var r;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return r = {
                                            type: "exec",
                                            mbean: "".concat(e, ":").concat(n),
                                            operation: a,
                                            arguments: s
                                        }, t.abrupt("return", this.axios.post(Object(C["a"])(j()), r, {
                                            headers: {
                                                Accept: "application/json",
                                                "Content-Type": "application/json"
                                            }
                                        }));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e, n, a, s) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchMappings",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.axios.get(Object(C["a"])(k()), {
                                            headers: {
                                                Accept: ot
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "isUnregisterable",
                    get: function() {
                        return "http-api" === this.registration.source
                    }
                }], [{
                    key: "fetchEvents",
                    value: function() {
                        var t = Object(o["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", f["a"].get("events"));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }, t)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "getEventStream",
                    value: function() {
                        return Object(b["f"])(Object(b["m"])(Object(m["a"])()).pipe(Object(b["n"])()), b["b"].create(function(t) {
                            var e = new EventSource("instances/events");
                            return e.onmessage = function(e) {
                                    return t.next(Object(a["a"])({}, e, {
                                        data: JSON.parse(e.data)
                                    }))
                                }, e.onerror = function(e) {
                                    return t.error(e)
                                },
                                function() {
                                    e.close()
                                }
                        }))
                    }
                }, {
                    key: "get",
                    value: function() {
                        var e = Object(o["a"])(regeneratorRuntime.mark(function e(n) {
                            return regeneratorRuntime.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", f["a"].get(Object(C["a"])(w(), n), {
                                            transformResponse: function(e) {
                                                if (!e) return e;
                                                var n = JSON.parse(e);
                                                return new t(n)
                                            }
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }));

                        function n(t) {
                            return e.apply(this, arguments)
                        }
                        return n
                    }()
                }, {
                    key: "_toLoggers",
                    value: function(t) {
                        if (!t) return t;
                        var e = JSON.parse(t),
                            n = x()(e.loggers, function(t, e, n) {
                                return t.push(Object(a["a"])({
                                    name: n
                                }, e))
                            }, []);
                        return {
                            levels: e.levels,
                            loggers: n
                        }
                    }
                }, {
                    key: "_toMBeans",
                    value: function(t) {
                        if (!t) return t;
                        var e = JSON.parse(t);
                        return i()(e.value).map(function(t) {
                            var e = Object(s["a"])(t, 2),
                                n = e[0],
                                r = e[1];
                            return {
                                domain: n,
                                mBeans: i()(r).map(function(t) {
                                    var e = Object(s["a"])(t, 2),
                                        n = e[0],
                                        r = e[1];
                                    return Object(a["a"])({
                                        descriptor: n
                                    }, r)
                                })
                            }
                        })
                    }
                }]), t
            }();
        e["a"] = lt
    },
    e17c: function(t, e, n) {},
    e325: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    class: {
                        "is-loading": !t.hasLoaded
                    }
                }, [t.hasLoaded ? [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching mappings failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.isOldMetrics ? n("div", {
                    staticClass: "message is-warning"
                }, [n("div", {
                    staticClass: "message-body"
                }, [t._v("\n        Mappings are not supported for Spring Boot 1.x applications.\n      ")])]) : t._e(), t._l(t.contexts, function(e, a) {
                    return [n("h3", {
                        key: a,
                        staticClass: "title",
                        domProps: {
                            textContent: t._s(a)
                        }
                    }), t.isEmpty(e.mappings.dispatcherServlets) ? t._e() : n("DispatcherMappings", {
                        key: a + "_dispatcherServlets",
                        attrs: {
                            dispatchers: e.mappings.dispatcherServlets
                        }
                    }), t.isEmpty(e.mappings.dispatcherHandlers) ? t._e() : n("DispatcherMappings", {
                        key: a + "_dispatcherHandlers",
                        attrs: {
                            dispatchers: e.mappings.dispatcherHandlers
                        }
                    }), n("ServletMappings", {
                        key: a + "_servlets",
                        attrs: {
                            servlets: e.mappings.servlets
                        }
                    }), n("ServletFilterMappings", {
                        key: a + "_servletFilters",
                        attrs: {
                            "servlet-filters": e.mappings.servletFilters
                        }
                    })]
                })] : t._e()], 2)
            },
            s = [],
            r = (n("6762"), n("2fdb"), n("96cf"), n("3b8d")),
            i = n("df0d"),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "table-container"
                }, [n("table", {
                    staticClass: "table is-fullwidth"
                }, [t._l(this.dispatchers, function(e, a) {
                    return [n("thead", {
                        key: "" + a
                    }, [n("tr", [n("th", {
                        attrs: {
                            colspan: "99"
                        },
                        domProps: {
                            textContent: t._s(a)
                        }
                    })])]), n("tbody", {
                        key: a + "_mappings"
                    }, [t._l(e, function(e, s) {
                        return [e.details && e.details.requestMappingConditions ? [n("tr", {
                            key: a + "_" + s + "_pattern"
                        }, [n("td", {
                            attrs: {
                                rowspan: t.computeRowSpanForMapping(e)
                            }
                        }, t._l(e.details.requestMappingConditions.patterns, function(e) {
                            return n("div", {
                                key: a + "_" + s + "_" + e
                            }, [n("code", {
                                domProps: {
                                    textContent: t._s(e)
                                }
                            })])
                        }), 0)]), e.details.requestMappingConditions.methods.length ? n("tr", {
                            key: a + "_" + s + "_methods"
                        }, [t._m(0, !0), n("td", {
                            staticClass: "monospaced is-breakable",
                            domProps: {
                                textContent: t._s(e.details.requestMappingConditions.methods.join(", "))
                            }
                        })]) : t._e(), e.details.requestMappingConditions.consumes.length ? n("tr", {
                            key: a + "_" + s + "_consumes"
                        }, [t._m(1, !0), n("td", {
                            staticClass: "monospaced is-breakable",
                            domProps: {
                                textContent: t._s(t.mediaTypePredicates(e.details.requestMappingConditions.consumes))
                            }
                        })]) : t._e(), e.details.requestMappingConditions.produces.length ? n("tr", {
                            key: a + "_" + s + "_produces"
                        }, [t._m(2, !0), n("td", {
                            staticClass: "monospaced is-breakable",
                            domProps: {
                                textContent: t._s(t.mediaTypePredicates(e.details.requestMappingConditions.produces))
                            }
                        })]) : t._e(), e.details.requestMappingConditions.params.length ? n("tr", {
                            key: a + "_" + s + "_params"
                        }, [t._m(3, !0), n("td", {
                            staticClass: "monospaced is-breakable",
                            domProps: {
                                textContent: t._s(t.paramPredicates(e.details.requestMappingConditions.params))
                            }
                        })]) : t._e(), e.details.requestMappingConditions.headers.length ? n("tr", {
                            key: a + "_" + s + "_headers"
                        }, [t._m(4, !0), n("td", {
                            staticClass: "monospaced is-breakable",
                            domProps: {
                                textContent: t._s(t.paramPredicates(e.details.requestMappingConditions.headers))
                            }
                        })]) : t._e(), n("tr", {
                            key: a + "_" + s + "_handler"
                        }, [t._m(5, !0), n("td", {
                            staticClass: "is-breakable",
                            domProps: {
                                textContent: t._s(e.handler)
                            }
                        })]), e.details.handlerMethod ? n("tr", {
                            key: a + "_" + s + "_handlermethod"
                        }, [t._m(6, !0), n("td", {
                            staticClass: "is-breakable",
                            domProps: {
                                textContent: t._s(e.details.handlerMethod.className + "#" + e.details.handlerMethod.name)
                            }
                        })]) : t._e()] : n("tr", {
                            key: a + "_" + s
                        }, [n("td", [n("code", {
                            domProps: {
                                textContent: t._s(e.predicate)
                            }
                        })]), t._m(7, !0), n("td", {
                            attrs: {
                                colspan: "4"
                            },
                            domProps: {
                                textContent: t._s(e.handler)
                            }
                        })])]
                    })], 2)]
                })], 2)])
            },
            c = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", {
                        staticClass: "is-narrow"
                    }, [n("small", [t._v("Methods")])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", {
                        staticClass: "is-narrow"
                    }, [n("small", [t._v("Consumes")])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", {
                        staticClass: "is-narrow"
                    }, [n("small", [t._v("Produces")])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", {
                        staticClass: "is-narrow"
                    }, [n("small", [t._v("Parameters")])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", {
                        staticClass: "is-narrow"
                    }, [n("small", [t._v("Headers")])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", {
                        staticClass: "is-narrow"
                    }, [n("small", [t._v("Handler")])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", {
                        staticClass: "is-narrow"
                    }, [n("small", [t._v("Handler Method")])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("th", {
                        staticClass: "is-narrow is-breakable"
                    }, [n("small", [t._v("Handler")])])
                }
            ],
            l = (n("7f7f"), {
                props: {
                    dispatchers: {
                        type: Object,
                        default: function() {
                            return []
                        }
                    }
                },
                methods: {
                    computeRowSpanForMapping: function(t) {
                        return 2 + this.countNonEmptyArrays(t.details.requestMappingConditions, "methods", "consumes", "produces", "params", "headers") + (t.details.handlerMethod ? 1 : 0)
                    },
                    countNonEmptyArrays: function(t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) n[a - 1] = arguments[a];
                        return n.map(function(e) {
                            return t[e]
                        }).filter(function(t) {
                            return t && t.length
                        }).length
                    },
                    mediaTypePredicates: function(t) {
                        return t.map(function(t) {
                            return "".concat(t.negate ? "!" : "").concat(t.mediaType)
                        }).join(", ")
                    },
                    paramPredicates: function(t) {
                        return t.map(function(t) {
                            return "".concat(t.name, ": ").concat(t.negate ? "!" : "").concat(t.value)
                        }).join(", ")
                    }
                }
            }),
            u = l,
            d = n("2877"),
            p = Object(d["a"])(u, o, c, !1, null, null, null),
            h = p.exports,
            f = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "table-container"
                }, [t.servletFilters.length ? n("table", {
                    staticClass: "table is-fullwidth"
                }, [t._m(0), n("tbody", [t._l(t.servletFilters, function(e) {
                    return [n("tr", {
                        key: "" + e.name
                    }, [n("td", t._l(e.urlPatternMappings, function(a) {
                        return n("div", {
                            key: e.name + "_" + a
                        }, [n("code", {
                            domProps: {
                                textContent: t._s(a)
                            }
                        })])
                    }), 0), n("td", t._l(e.servletNameMappings, function(a) {
                        return n("div", {
                            key: e.name + "_" + a,
                            staticClass: "is-breakable",
                            domProps: {
                                textContent: t._s(a)
                            }
                        })
                    }), 0), n("td", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }), n("td", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.className)
                        }
                    })])]
                })], 2)]) : t._e()])
            },
            m = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("thead", [n("tr", [n("th", [t._v("Url Pattern")]), n("th", [t._v("Servlet Name")]), n("th", [t._v("Filter Name")]), n("th", [t._v("Class")])])])
                }
            ],
            v = {
                props: {
                    servletFilters: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                }
            },
            g = v,
            b = Object(d["a"])(g, f, m, !1, null, null, null),
            _ = b.exports,
            C = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "table-container"
                }, [t.servlets.length ? n("table", {
                    staticClass: "table is-fullwidth"
                }, [t._m(0), n("tbody", [t._l(t.servlets, function(e) {
                    return [n("tr", {
                        key: "" + e.name
                    }, [n("td", t._l(e.mappings, function(a) {
                        return n("div", {
                            key: e.name + "_" + a
                        }, [n("code", {
                            domProps: {
                                textContent: t._s(a)
                            }
                        })])
                    }), 0), n("td", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }), n("td", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.className)
                        }
                    })])]
                })], 2)]) : t._e()])
            },
            y = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("thead", [n("tr", [n("th", [t._v("Url Pattern")]), n("th", [t._v("Servlet Name")]), n("th", [t._v("Class")])])])
                }
            ],
            x = {
                props: {
                    servlets: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                }
            },
            w = x,
            k = Object(d["a"])(w, C, y, !1, null, null, null),
            j = k.exports,
            O = n("13ea"),
            S = n.n(O),
            P = {
                components: {
                    DispatcherMappings: h,
                    ServletMappings: j,
                    ServletFilterMappings: _
                },
                props: {
                    instance: {
                        type: i["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        contexts: null,
                        isOldMetrics: !1
                    }
                },
                created: function() {
                    this.fetchMappings()
                },
                computed: {},
                methods: {
                    isEmpty: S.a,
                    fetchMappings: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, t.prev = 1, t.next = 4, this.instance.fetchMappings();
                                    case 4:
                                        e = t.sent, e.headers["content-type"].includes("application/vnd.spring-boot.actuator.v2") ? this.contexts = e.data.contexts : this.isOldMetrics = !0, t.next = 12;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1), console.warn("Fetching mappings failed:", t.t0), this.error = t.t0;
                                    case 12:
                                        this.hasLoaded = !0;
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/mappings",
                        parent: "instances",
                        path: "mappings",
                        group: "Web",
                        component: this,
                        label: "Mappings",
                        order: 450,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("mappings")
                        }
                    })
                }
            },
            E = P,
            R = Object(d["a"])(E, a, s, !1, null, null, null);
        e["default"] = R.exports
    },
    e3af: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section"
                }, [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n        Fetching metrics failed.\n      ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t.isOldMetrics ? n("div", {
                    staticClass: "message is-warning"
                }, [n("div", {
                    staticClass: "message-body"
                }, [t._v("\n      Metrics are not supported for Spring Boot 1.x applications.\n    ")])]) : t.availableMetrics.length > 0 ? n("form", {
                    staticClass: "field",
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.handleSubmit(e)
                        }
                    }
                }, [n("div", {
                    staticClass: "field"
                }, [n("div", {
                    staticClass: "control"
                }, [n("div", {
                    staticClass: "select"
                }, [n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.selectedMetric,
                        expression: "selectedMetric"
                    }],
                    on: {
                        change: function(e) {
                            var n = Array.prototype.filter.call(e.target.options, function(t) {
                                return t.selected
                            }).map(function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            });
                            t.selectedMetric = e.target.multiple ? n : n[0]
                        }
                    }
                }, t._l(t.availableMetrics, function(e) {
                    return n("option", {
                        key: e,
                        domProps: {
                            textContent: t._s(e)
                        }
                    })
                }), 0)])])]), n("div", ["executing" === t.stateFetchingTags ? n("p", {
                    staticClass: "is-loading"
                }, [t._v("\n        Fetching available tags\n      ")]) : t._e(), t.availableTags ? n("div", {
                    staticClass: "box"
                }, [t._l(t.availableTags, function(e) {
                    return n("div", {
                        key: e.tag,
                        staticClass: "field is-horizontal"
                    }, [n("div", {
                        staticClass: "field-label"
                    }, [n("label", {
                        staticClass: "label",
                        domProps: {
                            textContent: t._s(e.tag)
                        }
                    })]), n("div", {
                        staticClass: "field-body"
                    }, [n("div", {
                        staticClass: "control"
                    }, [n("div", {
                        staticClass: "select"
                    }, [n("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.selectedTags[e.tag],
                            expression: "selectedTags[tag.tag]"
                        }],
                        on: {
                            change: function(n) {
                                var a = Array.prototype.filter.call(n.target.options, function(t) {
                                    return t.selected
                                }).map(function(t) {
                                    var e = "_value" in t ? t._value : t.value;
                                    return e
                                });
                                t.$set(t.selectedTags, e.tag, n.target.multiple ? a : a[0])
                            }
                        }
                    }, [n("option", {
                        domProps: {
                            value: void 0
                        }
                    }, [t._v("\n                    -\n                  ")]), t._l(e.values, function(e) {
                        return n("option", {
                            key: e,
                            domProps: {
                                value: e,
                                textContent: t._s(e)
                            }
                        })
                    })], 2)])])])])
                }), t.availableTags && 0 === t.availableTags.length ? n("p", [t._v("\n          No tags available.\n        ")]) : t._e(), t._m(0)], 2) : t._e()])]) : t._e(), t._l(t.metrics, function(e) {
                    return n("metric", {
                        key: e.name,
                        attrs: {
                            "metric-name": e.name,
                            "tag-selections": e.tagSelections,
                            "statistic-types": e.types,
                            instance: t.instance
                        },
                        on: {
                            remove: t.removeMetric,
                            "type-select": t.handleTypeSelect
                        }
                    })
                })], 2)
            },
            s = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "field is-grouped is-grouped-right"
                    }, [n("div", {
                        staticClass: "control"
                    }, [n("button", {
                        staticClass: "button is-primary",
                        attrs: {
                            type: "submit"
                        }
                    }, [t._v("\n              Add Metric\n            ")])])])
                }
            ],
            r = (n("ac6a"), n("55dd"), n("6762"), n("2fdb"), n("96cf"), n("3b8d")),
            i = n("f499"),
            o = n.n(i),
            c = n("75fc"),
            l = (n("20d6"), n("bd86")),
            u = n("cebc"),
            d = (n("7f7f"), n("7514"), n("df0d")),
            p = n("c707"),
            h = n.n(p),
            f = n("2353"),
            m = {
                components: {
                    Metric: f["a"]
                },
                props: {
                    instance: {
                        type: d["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        metrics: [],
                        error: null,
                        availableMetrics: [],
                        selectedMetric: null,
                        stateFetchingTags: null,
                        availableTags: null,
                        selectedTags: null,
                        isOldMetrics: !1
                    }
                },
                created: function() {
                    this.fetchMetricIndex(), this.metrics = this.loadMetrics()
                },
                watch: {
                    selectedMetric: "fetchAvailableTags",
                    metrics: {
                        deep: !0,
                        handler: function(t) {
                            this.persistMetrics(t)
                        }
                    }
                },
                methods: {
                    handleSubmit: function() {
                        this.addMetric(this.selectedMetric, this.selectedTags)
                    },
                    handleTypeSelect: function(t, e, n) {
                        var a = this.metrics.find(function(e) {
                            return e.name === t
                        });
                        a && (a.types = Object(u["a"])({}, a.types, Object(l["a"])({}, e, n)))
                    },
                    removeMetric: function(t, e) {
                        var n = this.metrics.findIndex(function(e) {
                            return e.name === t
                        });
                        if (n >= 0) {
                            var a = this.metrics[n];
                            e < a.tagSelections.length && a.tagSelections.splice(e, 1), 0 === a.tagSelections.length && this.metrics.splice(n, 1)
                        }
                    },
                    addMetric: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (t) {
                            var n = this.metrics.find(function(e) {
                                return e.name === t
                            });
                            n ? n.tagSelections = [].concat(Object(c["a"])(n.tagSelections), [Object(u["a"])({}, e)]) : this.metrics = h()([].concat(Object(c["a"])(this.metrics), [{
                                name: t,
                                tagSelections: [Object(u["a"])({}, e)],
                                types: {}
                            }]), [
                                function(t) {
                                    return t.name
                                }
                            ])
                        }
                    },
                    loadMetrics: function() {
                        if (window.localStorage) {
                            var t = localStorage.getItem("applications/".concat(this.instance.registration.name, "/metrics"));
                            if (t) return JSON.parse(t)
                        }
                        return []
                    },
                    persistMetrics: function(t) {
                        window.localStorage && localStorage.setItem("applications/".concat(this.instance.registration.name, "/metrics"), o()(t))
                    },
                    fetchMetricIndex: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, t.prev = 1, t.next = 4, this.instance.fetchMetrics();
                                    case 4:
                                        e = t.sent, e.headers["content-type"].includes("application/vnd.spring-boot.actuator.v2") ? (this.availableMetrics = e.data.names, this.availableMetrics.sort(), this.selectedMetric = this.availableMetrics[0]) : this.isOldMetrics = !0, t.next = 13;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1), console.warn("Fetching metric index failed:", t.t0), this.hasLoaded = !0, this.error = t.t0;
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchAvailableTags: function() {
                        var t = Object(r["a"])(regeneratorRuntime.mark(function t(e) {
                            var n, a = this;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.availableTags = null, this.stateFetchingTags = "executing", t.prev = 2, t.next = 5, this.instance.fetchMetric(e);
                                    case 5:
                                        n = t.sent, this.availableTags = n.data.availableTags, this.stateFetchingTags = "completed", this.selectedTags = {}, this.availableTags.forEach(function(t) {
                                            return a.selectedTags[t.tag] = void 0
                                        }), t.next = 16;
                                        break;
                                    case 12:
                                        t.prev = 12, t.t0 = t["catch"](2), console.warn("Fetching metric tags failed:", t.t0), this.stateFetchingTags = "failed";
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [2, 12]
                            ])
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/metrics",
                        parent: "instances",
                        path: "metrics",
                        component: this,
                        label: "Metrics",
                        group: "Insights",
                        order: 50,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("metrics")
                        }
                    })
                }
            },
            v = m,
            g = n("2877"),
            b = Object(g["a"])(v, a, s, !1, null, null, null);
        e["default"] = b.exports
    },
    e462: function(t, e, n) {
        "use strict";
        var a = n("2e0d"),
            s = n.n(a);
        s.a
    },
    e4a1: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "section"
                }, [n("div", {
                    staticClass: "container"
                }, [n("h1", {
                    staticClass: "title"
                }, [t._v("\n      Event Journal\n    ")]), t.error ? n("div", {
                    staticClass: "message is-warning"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-warning",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Server connection failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("table", {
                    staticClass: "table is-fullwidth is-hoverable"
                }, [t._m(0), n("tbody", [t._l(t.events, function(e) {
                    return [n("tr", {
                        key: e.key,
                        staticClass: "is-selectable",
                        on: {
                            click: function(n) {
                                t.showPayload[e.key] ? t.$delete(t.showPayload, e.key) : t.$set(t.showPayload, e.key, !0)
                            }
                        }
                    }, [n("td", {
                        domProps: {
                            textContent: t._s(t.instanceNames[e.instance] || "?")
                        }
                    }), n("td", {
                        domProps: {
                            textContent: t._s(e.instance)
                        }
                    }), n("td", {
                        domProps: {
                            textContent: t._s(e.timestamp.format("L HH:mm:ss.SSS"))
                        }
                    }), n("td", [n("span", {
                        domProps: {
                            textContent: t._s(e.type)
                        }
                    }), "STATUS_CHANGED" === e.type ? n("span", {
                        domProps: {
                            textContent: t._s("(" + e.payload.statusInfo.status + ")")
                        }
                    }) : t._e()])]), t.showPayload[e.key] ? n("tr", {
                        key: e.key + "-detail"
                    }, [n("td", {
                        attrs: {
                            colspan: "4"
                        }
                    }, [n("pre", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(t.toJson(e.payload))
                        }
                    })])]) : t._e()]
                })], 2)])])])
            },
            s = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("thead", [n("tr", [n("th", [t._v("Application")]), n("th", [t._v("Instance")]), n("th", [t._v("Time")]), n("th", [t._v("Event")])])])
                }
            ],
            r = (n("55dd"), n("96cf"), n("3b8d")),
            i = n("5176"),
            o = n.n(i),
            c = n("bd86"),
            l = (n("7f7f"), n("cebc")),
            u = n("f499"),
            d = n.n(u),
            p = n("d225"),
            h = n("b0b4"),
            f = n("d76e"),
            m = n("df0d"),
            v = n("d50b"),
            g = n("3eea"),
            b = n.n(g),
            _ = n("c1df"),
            C = n.n(_),
            y = function() {
                function t(e) {
                    Object(p["a"])(this, t), this.instance = e.instance, this.version = e.version, this.type = e.type, this.timestamp = C()(e.timestamp), this.payload = b()(e, ["instance", "version", "timestamp", "type"])
                }
                return Object(h["a"])(t, [{
                    key: "key",
                    get: function() {
                        return "".concat(this.instance, "-").concat(this.version)
                    }
                }]), t
            }(),
            x = {
                mixins: [f["a"]],
                data: function() {
                    return {
                        events: [],
                        showPayload: {},
                        instanceNames: {},
                        error: null
                    }
                },
                methods: {
                    toJson: function(t) {
                        return d()(t, null, 4)
                    },
                    addEvents: function(t) {
                        var e = t.map(function(t) {
                            return new y(t)
                        });
                        e.reverse(), this.events = e.concat(this.events);
                        var n = e.filter(function(t) {
                            return "REGISTERED" === t.type
                        }).reduce(function(t, e) {
                            return Object(l["a"])({}, t, Object(c["a"])({}, e.instance, e.payload.registration.name))
                        }, {});
                        o()(this.instanceNames, n)
                    }
                },
                created: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark(function t() {
                        var e;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, m["a"].fetchEvents();
                                case 3:
                                    e = t.sent, this.addEvents(e.data.sort(Object(v["b"])(function(t) {
                                        return t.timestamp
                                    }))), this.error = null, t.next = 12;
                                    break;
                                case 8:
                                    t.prev = 8, t.t0 = t["catch"](0), console.warn("Fetching events failed:", t.t0), this.error = t.t0;
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [0, 8]
                        ])
                    }));

                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        path: "/journal",
                        name: "journal",
                        label: "Journal",
                        order: 100,
                        component: this
                    })
                }
            },
            w = x,
            k = n("2877"),
            j = Object(k["a"])(w, a, s, !1, null, null, null);
        e["default"] = j.exports
    },
    e7bc: function(t, e, n) {},
    e819: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section",
                    class: {
                        "is-loading": !t.hasLoaded
                    }
                }, [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n        Fetching JMX Beans failed.\n      ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("div", {
                    staticClass: "columns"
                }, [t.selectedDomain ? n("div", {
                    staticClass: "column"
                }, [n("h1", {
                    staticClass: "heading"
                }, [t._v("\n        MBeans\n      ")]), t._l(t.selectedDomain.mBeans, function(e) {
                    return n("div", {
                        directives: [{
                            name: "on-clickaway",
                            rawName: "v-on-clickaway",
                            value: function() {
                                return e === t.selectedMBean && t.select(t.selectedDomain)
                            },
                            expression: "() => mBean === selectedMBean && select(selectedDomain)"
                        }],
                        key: e.descriptor.raw,
                        staticClass: "m-bean card",
                        class: {
                            "is-active": e === t.selectedMBean
                        },
                        attrs: {
                            id: e.descriptor.raw
                        }
                    }, [n("header", {
                        staticClass: "m-bean--header hero",
                        class: {
                            "is-primary": e === t.selectedMBean,
                            "is-selectable": e !== t.selectedMBean
                        },
                        on: {
                            click: function(n) {
                                return t.select(t.selectedDomain, e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "level is-clipped"
                    }, [n("div", {
                        staticClass: "level-left"
                    }, t._l(e.descriptor.attributes, function(e) {
                        return n("div", {
                            key: "mBean-desc-" + e.name,
                            staticClass: "level-item is-narrow"
                        }, [n("div", {
                            staticClass: "is-clipped",
                            attrs: {
                                title: e.name + " " + e.value
                            }
                        }, [n("p", {
                            staticClass: "heading",
                            domProps: {
                                textContent: t._s(e.name)
                            }
                        }), n("p", {
                            staticClass: "title is-size-6",
                            domProps: {
                                textContent: t._s(e.value)
                            }
                        })])])
                    }), 0)]), e === t.selectedMBean ? n("sba-icon-button", {
                        staticClass: "m-bean--header--close has-text-white",
                        attrs: {
                            icon: ["far", "times-circle"]
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.select(t.selectedDomain)
                            }
                        }
                    }) : t._e(), e === t.selectedMBean ? n("div", {
                        staticClass: "hero-foot tabs is-boxed"
                    }, [n("ul", [e.attr ? n("li", {
                        class: {
                            "is-active": "attributes" === t.selected.view
                        }
                    }, [n("a", {
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.select(t.selectedDomain, t.selectedMBean, "attributes")
                            }
                        }
                    }, [t._v("\n                  Attributes\n                ")])]) : t._e(), e.op ? n("li", {
                        class: {
                            "is-active": "operations" === t.selected.view
                        }
                    }, [n("a", {
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.select(t.selectedDomain, t.selectedMBean, "operations")
                            }
                        }
                    }, [t._v("\n                  Operations\n                ")])]) : t._e()])]) : t._e()], 1), e === t.selectedMBean ? n("div", {
                        staticClass: "card-content"
                    }, ["attributes" === t.selected.view ? n("m-bean-attributes", {
                        attrs: {
                            instance: t.instance,
                            domain: t.selectedDomain.domain,
                            "m-bean": e
                        }
                    }) : t._e(), "operations" === t.selected.view ? n("m-bean-operations", {
                        attrs: {
                            instance: t.instance,
                            domain: t.selectedDomain.domain,
                            "m-bean": e
                        }
                    }) : t._e()], 1) : t._e()])
                })], 2) : t._e(), n("div", {
                    staticClass: "column is-narrow"
                }, [n("nav", {
                    directives: [{
                        name: "sticks-below",
                        rawName: "v-sticks-below",
                        value: ["#navigation"],
                        expression: "['#navigation']"
                    }],
                    staticClass: "menu"
                }, [n("p", {
                    staticClass: "menu-label"
                }, [t._v("\n          domains\n        ")]), n("ul", {
                    staticClass: "menu-list"
                }, [n("li", t._l(t.domains, function(e) {
                    return n("a", {
                        key: e.domain,
                        class: {
                            "is-active": e === t.selectedDomain
                        },
                        domProps: {
                            textContent: t._s(e.domain)
                        },
                        on: {
                            click: function(n) {
                                return t.select(e)
                            }
                        }
                    })
                }), 0)])])])])])
            },
            s = [],
            r = (n("a481"), n("cebc")),
            i = (n("96cf"), n("3b8d")),
            o = (n("7514"), n("a745")),
            c = n.n(o),
            l = n("2d1f"),
            u = n.n(l),
            d = n("a8db"),
            p = n("768b"),
            h = (n("28a5"), n("5176")),
            f = n.n(h),
            m = n("d225"),
            v = n("b0b4"),
            g = n("cc40"),
            b = n("df0d"),
            _ = n("e9a8"),
            C = n.n(_),
            y = n("3bb8"),
            x = n.n(y),
            w = n("13ea"),
            k = n.n(w),
            j = n("c707"),
            O = n.n(j),
            S = n("723b"),
            P = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n        Fetching attributes failed.\n      ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), t._l(t.mBean.attr, function(e, a) {
                    return n("m-bean-attribute", {
                        key: "attr-" + a,
                        attrs: {
                            name: a,
                            descriptor: e,
                            value: t.attributeValues && t.attributeValues[a],
                            "on-save-value": function(e) {
                                return t.writeAttribute(a, e)
                            }
                        }
                    })
                })], 2)
            },
            E = [],
            R = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "field"
                }, [n("label", {
                    staticClass: "label"
                }, [n("span", {
                    domProps: {
                        textContent: t._s(t.name)
                    }
                }), n("small", {
                    staticClass: "is-muted has-text-weight-normal",
                    domProps: {
                        textContent: t._s(t.descriptor.type)
                    }
                })]), n("div", {
                    staticClass: "field-body"
                }, [n("div", {
                    staticClass: "field is-expanded"
                }, [n("div", {
                    staticClass: "field has-addons"
                }, [n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button",
                    attrs: {
                        disabled: !t.descriptor.rw
                    },
                    on: {
                        click: t.edit
                    }
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "pencil-alt"
                    }
                })], 1)]), n("div", {
                    staticClass: "control is-expanded has-icons-right"
                }, [t.editing ? [t.hasComplexValue ? t._e() : n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.input,
                        expression: "input"
                    }],
                    ref: "input",
                    staticClass: "input",
                    attrs: {
                        type: "text"
                    },
                    domProps: {
                        value: t.input
                    },
                    on: {
                        keyup: [
                            function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.cancel(e)
                            },
                            function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.save(e)
                            }
                        ],
                        input: function(e) {
                            e.target.composing || (t.input = e.target.value)
                        }
                    }
                })] : [t.hasComplexValue ? n("textarea", {
                    staticClass: "input m-bean-attribute--text",
                    attrs: {
                        readonly: ""
                    },
                    domProps: {
                        textContent: t._s(t.jsonValue)
                    }
                }) : n("input", {
                    staticClass: "input",
                    attrs: {
                        type: "text",
                        readonly: ""
                    },
                    domProps: {
                        value: t.value
                    },
                    on: {
                        dblclick: t.edit
                    }
                }), t.error ? n("span", {
                    staticClass: "icon is-right has-text-warning"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                })], 1) : t._e()]], 2)]), n("div", {
                    staticClass: "help",
                    domProps: {
                        textContent: t._s(t.descriptor.desc)
                    }
                })])]), t.editing ? n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button is-light is-small",
                    on: {
                        click: t.cancel
                    }
                }, [t._v("\n      Cancel\n    ")]), n("button", {
                    staticClass: "button is-primary is-small",
                    class: {
                        "is-loading": t.saving
                    },
                    attrs: {
                        disabled: t.value === t.input
                    },
                    on: {
                        click: t.save
                    }
                }, [t._v("\n      Save\n    ")])]) : t._e()])
            },
            L = [],
            A = (n("7f7f"), n("f499")),
            F = n.n(A),
            M = n("7618"),
            T = {
                props: {
                    name: {
                        type: String,
                        required: !0
                    },
                    descriptor: {
                        type: Object,
                        required: !0
                    },
                    value: {
                        type: null,
                        default: null
                    },
                    onSaveValue: {
                        type: Function,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        input: null,
                        editing: !1,
                        saving: !1,
                        error: null
                    }
                },
                computed: {
                    hasComplexValue: function() {
                        return null !== this.value && "object" === Object(M["a"])(this.value)
                    },
                    jsonValue: function() {
                        return F()(this.value, null, 4)
                    }
                },
                methods: {
                    edit: function() {
                        var t = Object(i["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.descriptor.rw || this.hasComplexValue) {
                                            t.next = 6;
                                            break
                                        }
                                        return this.input = this.value, this.editing = !0, t.next = 5, this.$nextTick();
                                    case 5:
                                        this.$refs.input.focus();
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    cancel: function() {
                        this.editing = !1
                    },
                    save: function() {
                        var t = Object(i["a"])(regeneratorRuntime.mark(function t() {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.saving = !0, t.prev = 1, t.next = 4, this.onSaveValue(this.input);
                                    case 4:
                                        t.next = 10;
                                        break;
                                    case 6:
                                        t.prev = 6, t.t0 = t["catch"](1), console.warn("Error saving attribute ".concat(this.name), t.t0), this.error = t.t0;
                                    case 10:
                                        return t.prev = 10, this.saving = !1, this.editing = !1, t.finish(10);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 6, 10, 14]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            },
            $ = T,
            I = (n("931b"), n("2877")),
            N = Object(I["a"])($, R, L, !1, null, null, null),
            B = N.exports,
            D = {
                props: {
                    domain: {
                        type: String,
                        required: !0
                    },
                    mBean: {
                        type: ut,
                        required: !0
                    },
                    instance: {
                        type: b["a"],
                        required: !0
                    }
                },
                components: {
                    mBeanAttribute: B
                },
                data: function() {
                    return {
                        attributeValues: null,
                        error: null
                    }
                },
                computed: {},
                methods: {
                    readAttributes: function() {
                        var t = Object(i["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, this.instance.readMBeanAttributes(this.domain, this.mBean.descriptor.raw);
                                    case 3:
                                        e = t.sent, this.attributeValues = e.data.value, t.next = 11;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t["catch"](0), console.warn("Fetching MBean attributes failed:", t.t0), this.error = t.t0;
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [0, 7]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    writeAttribute: function() {
                        var t = Object(i["a"])(regeneratorRuntime.mark(function t(e, n) {
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, this.instance.writeMBeanAttribute(this.domain, this.mBean.descriptor.raw, e, n);
                                    case 3:
                                        return t.prev = 3, t.next = 6, this.readAttributes();
                                    case 6:
                                        return t.finish(3);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [0, , 3, 7]
                            ])
                        }));

                        function e(e, n) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                created: function() {
                    this.readAttributes()
                }
            },
            q = D,
            U = Object(I["a"])(q, P, E, !1, null, null, null),
            H = U.exports,
            V = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t._l(t.mBean.op, function(e, a) {
                    return n("mBeanOperation", {
                        key: "op-" + a,
                        attrs: {
                            name: a,
                            descriptor: e
                        },
                        on: {
                            click: function(n) {
                                return t.invoke(a, e)
                            }
                        }
                    })
                }), t.invocation ? n("m-bean-operation-invocation", {
                    attrs: {
                        name: t.invocation.name,
                        descriptor: t.invocation.descriptor,
                        "on-execute": t.execute,
                        "on-close": t.closeInvocation
                    }
                }) : t._e()], 2)
            },
            z = [],
            G = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "field"
                }, [n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button is-light is-fullwidth",
                    on: {
                        click: function(e) {
                            return t.$emit("click", e)
                        }
                    }
                }, [n("small", {
                    staticClass: "is-light is-muted",
                    domProps: {
                        textContent: t._s(t.descriptor.ret)
                    }
                }), t._v(" "), n("span", {
                    domProps: {
                        textContent: t._s(t.name)
                    }
                })]), n("p", {
                    staticClass: "help",
                    domProps: {
                        textContent: t._s(t.descriptor.desc)
                    }
                })])])
            },
            W = [],
            J = {
                props: {
                    name: {
                        type: String,
                        required: !0
                    },
                    descriptor: {
                        type: Object,
                        required: !0
                    }
                }
            },
            X = J,
            K = Object(I["a"])(X, G, W, !1, null, null, null),
            Y = K.exports,
            Z = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "modal is-active"
                }, [n("div", {
                    staticClass: "modal-background",
                    on: {
                        click: t.abort
                    }
                }), n("div", {
                    staticClass: "modal-content"
                }, [n("div", {
                    staticClass: "modal-card"
                }, [n("header", {
                    staticClass: "modal-card-head"
                }, [n("p", {
                    staticClass: "modal-card-title",
                    domProps: {
                        textContent: t._s(t.name)
                    }
                })]), "input-args" === t.state ? [n("section", {
                    staticClass: "modal-card-body",
                    on: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : e.ctrlKey ? t.invoke(t.args) : null
                        }
                    }
                }, t._l(t.descriptor.args, function(e, a) {
                    return n("div", {
                        key: e.name,
                        staticClass: "field"
                    }, [n("label", {
                        staticClass: "label"
                    }, [n("span", {
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }), n("small", {
                        staticClass: "is-muted has-text-weight-normal",
                        domProps: {
                            textContent: t._s(e.type)
                        }
                    })]), n("div", {
                        staticClass: "control"
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.args[a],
                            expression: "args[idx]"
                        }],
                        staticClass: "input",
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: t.args[a]
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || t.$set(t.args, a, e.target.value)
                            }
                        }
                    })]), n("p", {
                        staticClass: "help",
                        domProps: {
                            textContent: t._s(e.desc)
                        }
                    })])
                }), 0), n("footer", {
                    staticClass: "modal-card-foot"
                }, [n("div", {
                    staticClass: "field is-grouped is-grouped-right"
                }, [n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button is-primary",
                    on: {
                        click: function(e) {
                            return t.invoke(t.args)
                        }
                    }
                }, [t._v("\n                Execute\n              ")])])])])] : "executing" === t.state ? [t._m(0)] : "completed" === t.state ? [n("section", {
                    staticClass: "modal-card-body"
                }, [t._m(1), "void" !== t.descriptor.ret ? n("pre", {
                    domProps: {
                        textContent: t._s(t.prettyPrintedResult)
                    }
                }) : t._e()]), n("footer", {
                    staticClass: "modal-card-foot"
                }, [n("div", {
                    staticClass: "field is-grouped is-grouped-right"
                }, [n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button is-light",
                    on: {
                        click: t.abort
                    }
                }, [t._v("\n                Close\n              ")])])])])] : "failed" === t.state ? [n("section", {
                    staticClass: "modal-card-body"
                }, [n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n                Execution failed.\n              ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]), t.error.stacktrace ? n("pre", {
                    domProps: {
                        textContent: t._s(t.error.stacktrace)
                    }
                }) : t._e(), t.error.response && t.error.response.data ? n("pre", {
                    domProps: {
                        textContent: t._s(t.error.response.data)
                    }
                }) : t._e()]), n("footer", {
                    staticClass: "modal-card-foot"
                }, [n("div", {
                    staticClass: "field is-grouped is-grouped-right"
                }, [n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button is-light",
                    on: {
                        click: t.abort
                    }
                }, [t._v("\n                Close\n              ")])])])])] : t._e()], 2)])])
            },
            Q = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "modal-card-body"
                    }, [n("section", {
                        staticClass: "section is-loading"
                    }, [n("p", [t._v("Executing...")])])])
                },
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "message is-success"
                    }, [n("div", {
                        staticClass: "message-body"
                    }, [n("strong", [t._v("Execution successful.")])])])
                }
            ],
            tt = {
                props: {
                    name: {
                        type: String,
                        required: !0
                    },
                    descriptor: {
                        type: Object,
                        required: !0
                    },
                    value: {
                        type: null,
                        default: null
                    },
                    onClose: {
                        type: Function,
                        required: !0
                    },
                    onExecute: {
                        type: Function,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        state: null,
                        error: null,
                        args: null,
                        result: null
                    }
                },
                computed: {
                    prettyPrintedResult: function() {
                        if (this.result && "string" === typeof this.result) try {
                            var t = JSON.parse(this.result);
                            return F()(t, void 0, 4)
                        } catch (e) {
                            return this.result
                        } else if ("object" === ("undefined" === typeof result ? "undefined" : Object(M["a"])(result))) return F()(this.result, void 0, 4);
                        return this.result
                    }
                },
                methods: {
                    abort: function() {
                        this.onClose()
                    },
                    invoke: function(t) {
                        this.state = t || 0 === this.descriptor.args.length ? "prepared" : "input-args", this.args = t || new Array(this.descriptor.args.length), this.error = null, this.result = null, "prepared" === this.state && this.execute()
                    },
                    execute: function() {
                        var t = Object(i["a"])(regeneratorRuntime.mark(function t() {
                            var e, n;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.state = "executing", t.prev = 1, t.next = 4, this.onExecute(this.args);
                                    case 4:
                                        e = t.sent, e.data.status < 400 ? (this.result = e.data.value, this.state = "completed") : (n = new Error("Execution failed: ".concat(e.data.error)), n.stacktrace = e.data.stacktrace, this.state = "failed", this.error = n, console.warn("Invocation failed", n)), t.next = 13;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t["catch"](1), this.state = "failed", this.error = t.t0, console.warn("Invocation failed", t.t0);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 8]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    keyHandler: function(t) {
                        27 === t.keyCode && this.abort()
                    }
                },
                created: function() {
                    this.invoke()
                },
                mounted: function() {
                    document.addEventListener("keyup", this.keyHandler)
                },
                beforeDestroy: function() {
                    document.removeEventListener("keyup", this.keyHandler)
                }
            },
            et = tt,
            nt = Object(I["a"])(et, Z, Q, !1, null, null, null),
            at = nt.exports,
            st = {
                props: {
                    domain: {
                        type: String,
                        required: !0
                    },
                    mBean: {
                        type: ut,
                        required: !0
                    },
                    instance: {
                        type: b["a"],
                        required: !0
                    }
                },
                components: {
                    mBeanOperation: Y,
                    mBeanOperationInvocation: at
                },
                data: function() {
                    return {
                        invocation: null
                    }
                },
                computed: {},
                methods: {
                    closeInvocation: function() {
                        this.invocation = null
                    },
                    invoke: function(t, e) {
                        this.invocation = {
                            name: t,
                            descriptor: e
                        }
                    },
                    execute: function(t) {
                        return this.instance.invokeMBeanOperation(this.domain, this.mBean.descriptor.raw, this.invocation.name, t)
                    }
                }
            },
            rt = st,
            it = Object(I["a"])(rt, V, z, !1, null, null, null),
            ot = it.exports,
            ct = function(t, e) {
                var n = e.args.map(function(t) {
                    return t.type
                }).join(",");
                return "".concat(t, "(").concat(n, ")")
            },
            lt = function() {
                function t(e) {
                    Object(m["a"])(this, t), f()(this, t.parse(e)), this.raw = e
                }
                return Object(v["a"])(t, null, [{
                    key: "parse",
                    value: function(t) {
                        var e = t.split(",").map(function(t) {
                                return t.split("=")
                            }).map(function(t) {
                                var e = Object(p["a"])(t, 2),
                                    n = e[0],
                                    a = e[1];
                                return {
                                    name: n,
                                    value: a
                                }
                            }),
                            n = e.map(function(t) {
                                var e = t.value;
                                return e
                            }).join(" ").trim();
                        return {
                            attributes: e,
                            displayName: n
                        }
                    }
                }]), t
            }(),
            ut = function t(e) {
                var n = e.descriptor,
                    a = e.op,
                    s = Object(d["a"])(e, ["descriptor", "op"]);
                Object(m["a"])(this, t), f()(this, s), this.descriptor = new lt(n);
                var r = C()(u()(a || {}), function(t) {
                    var e = Object(p["a"])(t, 2),
                        n = e[0],
                        a = e[1];
                    return c()(a) ? a.map(function(t) {
                        return [n, t]
                    }) : [
                        [n, a]
                    ]
                }).map(function(t) {
                    var e = Object(p["a"])(t, 2),
                        n = e[0],
                        a = e[1];
                    return [ct(n, a), a]
                });
                this.op = r.length > 0 ? x()(r) : null
            },
            dt = {
                props: {
                    instance: {
                        type: b["a"],
                        required: !0
                    }
                },
                components: {
                    mBeanOperations: ot,
                    mBeanAttributes: H
                },
                directives: {
                    onClickaway: S["directive"],
                    sticksBelow: g["a"]
                },
                data: function() {
                    return {
                        hasLoaded: !1,
                        error: null,
                        domains: [],
                        selected: {
                            domain: null,
                            mBean: null,
                            view: null
                        }
                    }
                },
                computed: {
                    selectedDomain: function() {
                        var t = this;
                        return this.domains.find(function(e) {
                            return e.domain === t.selected.domain
                        })
                    },
                    selectedMBean: function() {
                        var t = this;
                        return this.selectedDomain && this.selectedDomain.mBeans.find(function(e) {
                            return e.descriptor.raw === t.selected.mBean
                        })
                    }
                },
                created: function() {
                    this.fetchMBeans()
                },
                watch: {
                    $route: {
                        immediate: !0,
                        handler: function() {
                            k()(this.$route.query) ? this.domains.length > 0 && this.select(this.domains[0]) : this.selected = this.$route.query
                        }
                    },
                    selectedMBean: function() {
                        var t = Object(i["a"])(regeneratorRuntime.mark(function t(e) {
                            var n, a, s, r, i;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!e) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.next = 3, this.$nextTick();
                                    case 3:
                                        n = document.getElementById(e.descriptor.raw), n && (a = document.scrollingElement, s = document.querySelector("#navigation"), r = (s ? s.getBoundingClientRect().bottom : 120) + 10, i = a.scrollTop + n.getBoundingClientRect().top - r, a.scrollTo ? a.scrollTo({
                                            top: i,
                                            behavior: "smooth"
                                        }) : a.scrollTop = i);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                methods: {
                    fetchMBeans: function() {
                        var t = Object(i["a"])(regeneratorRuntime.mark(function t() {
                            var e, n;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, t.prev = 1, t.next = 4, this.instance.listMBeans();
                                    case 4:
                                        e = t.sent, n = O()(e.data, [
                                            function(t) {
                                                return t.domain
                                            }
                                        ]), this.domains = n.map(function(t) {
                                            return Object(r["a"])({}, t, {
                                                mBeans: O()(t.mBeans.map(function(t) {
                                                    return new ut(t)
                                                }), [
                                                    function(t) {
                                                        return t.descriptor.displayName
                                                    }
                                                ])
                                            })
                                        }), !this.selectedDomain && this.domains.length > 0 && this.select(this.domains[0]), t.next = 14;
                                        break;
                                    case 10:
                                        t.prev = 10, t.t0 = t["catch"](1), console.warn("Fetching MBeans failed:", t.t0), this.error = t.t0;
                                    case 14:
                                        this.hasLoaded = !0;
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [1, 10]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    select: function(t, e, n) {
                        var a = {
                            domain: t && t.domain,
                            mBean: e && e.descriptor.raw,
                            view: n || (e ? e.attr ? "attributes" : e.op ? "operations" : null : null)
                        };
                        this.$router.replace({
                            name: "instances/jolokia",
                            query: a
                        })
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/jolokia",
                        parent: "instances",
                        path: "jolokia",
                        component: this,
                        label: "JMX",
                        group: "JVM",
                        order: 350,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("jolokia")
                        }
                    })
                }
            },
            pt = dt;
        n("1e4c");
        n.d(e, "MBean", function() {
            return ut
        });
        var ht = Object(I["a"])(pt, a, s, !1, null, null, null);
        e["default"] = ht.exports
    },
    e83f: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var a = n("75fc"),
            s = (n("7f7f"), n("ac6a"), n("d225")),
            r = n("b0b4"),
            i = function(t) {
                return {
                    render: function() {
                        return this._v(t)
                    }
                }
            },
            o = function() {
                function t() {
                    Object(s["a"])(this, t), this._views = [], this._redirects = []
                }
                return Object(r["a"])(t, [{
                    key: "addView",
                    value: function() {
                        for (var t = this, e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                        n.forEach(function(e) {
                            return t._addView(e)
                        })
                    }
                }, {
                    key: "addRedirect",
                    value: function(t, e) {
                        this._redirects.push({
                            path: t,
                            redirect: {
                                name: e
                            }
                        })
                    }
                }, {
                    key: "_addView",
                    value: function(t) {
                        t.label && !t.handle && (t.handle = i(t.label)), this._views.push(t)
                    }
                }, {
                    key: "_toRoutes",
                    value: function(t, e) {
                        var n = this;
                        return t.filter(e).map(function(e) {
                            var a = n._toRoutes(t, function(t) {
                                return t.parent === e.name
                            });
                            return {
                                path: e.path,
                                name: 0 === a.length ? e.name : void 0,
                                component: e.component,
                                props: e.props,
                                meta: {
                                    view: e
                                },
                                children: a
                            }
                        })
                    }
                }, {
                    key: "views",
                    get: function() {
                        return this._views
                    }
                }, {
                    key: "routes",
                    get: function() {
                        return [].concat(Object(a["a"])(this._toRoutes(this._views, function(t) {
                            return !t.parent
                        })), Object(a["a"])(this._redirects))
                    }
                }]), t
            }()
    },
    e906: function(t, e, n) {
        "use strict";
        n.r(e),
            function(t) {
                n("ac6a");
                var e = n("75fc"),
                    a = (n("cadf"), n("551c"), n("f751"), n("097d"), n("6719"), n("c1df")),
                    s = n.n(a),
                    r = n("2b0e"),
                    i = n("8c4f"),
                    o = n("686a"),
                    c = n("76c1"),
                    l = n("7723"),
                    u = n("5e8b"),
                    d = n("e83f"),
                    p = n("28dc");
                s.a.locale(window.navigator.language), r["default"].use(i["a"]), r["default"].use(o["default"]);
                var h = new u["a"],
                    f = new d["a"],
                    m = [c["a"]].concat(Object(e["a"])(p["a"]), Object(e["a"])(t.SBA.extensions));
                m.forEach(function(t) {
                    return t.install({
                        viewRegistry: f,
                        applicationStore: h,
                        vue: r["default"]
                    })
                }), new r["default"]({
                    router: new i["a"]({
                        linkActiveClass: "is-active",
                        routes: f.routes
                    }),
                    el: "#app",
                    render: function(t) {
                        return t(l["a"], {
                            props: {
                                views: this.views,
                                applications: this.applications,
                                applicationsInitialized: this.applicationsInitialized,
                                error: this.error
                            }
                        })
                    },
                    data: {
                        views: f.views,
                        applications: h.applications,
                        applicationsInitialized: !1,
                        error: null
                    },
                    methods: {
                        onError: function(t) {
                            console.warn("Connection to server failed:", t), this.applicationsInitialized = !0, this.error = t
                        },
                        onConnected: function() {
                            this.applicationsInitialized = !0, this.error = null
                        }
                    },
                    created: function() {
                        h.addEventListener("connected", this.onConnected), h.addEventListener("error", this.onError), h.start()
                    },
                    beforeDestroy: function() {
                        h.stop(), h.removeEventListener("connected", this.onConnected), h.removeEventListener("error", this.onError)
                    }
                })
            }.call(this, n("c8ba"))
    },
    ead1: function(t, e, n) {},
    f1f7: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "section"
                }, [n("global-filters", {
                    attrs: {
                        instance: t.instance
                    }
                }), n("routes", {
                    attrs: {
                        instance: t.instance
                    }
                })], 1)
            },
            s = [],
            r = n("df0d"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    class: {
                        "is-loading": t.isLoading
                    }
                }, [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n        Fetching Global Filters failed.\n      ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("sba-panel", {
                    attrs: {
                        "header-sticks-below": ["#navigation"],
                        title: "Global Filters"
                    }
                }, [t.globalFilters.length > 0 ? n("div", {
                    staticClass: "field"
                }, [n("p", {
                    staticClass: "control is-expanded has-icons-left"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.filterCriteria,
                        expression: "filterCriteria"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "search"
                    },
                    domProps: {
                        value: t.filterCriteria
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.filterCriteria = e.target.value)
                        }
                    }
                }), n("span", {
                    staticClass: "icon is-small is-left"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "filter"
                    }
                })], 1)])]) : t._e(), n("table", {
                    staticClass: "table is-fullwidth"
                }, [n("thead", [n("tr", [n("th", [t._v("Filter name")]), n("th", [t._v("Order")])])]), n("tbody", [t._l(t.globalFilters, function(e) {
                    return n("tr", {
                        key: e.name
                    }, [n("td", [n("span", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }), n("span", {
                        staticClass: "is-muted",
                        domProps: {
                            textContent: t._s("@" + e.objectId)
                        }
                    })]), n("td", {
                        domProps: {
                            textContent: t._s(e.order)
                        }
                    })])
                }), 0 === t.globalFilters.length ? n("tr", [n("td", {
                    staticClass: "is-muted",
                    attrs: {
                        colspan: "7 "
                    }
                }, [t.isLoading ? n("p", {
                    staticClass: "is-loading"
                }, [t._v("\n              Loading Global Filters...\n            ")]) : n("p", [t._v("\n              No Global Filters found.\n            ")])])]) : t._e()], 2)])])], 1)
            },
            o = [],
            c = (n("28a5"), n("768b")),
            l = n("2d1f"),
            u = n.n(l),
            d = (n("96cf"), n("3b8d")),
            p = n("75fc"),
            h = (n("55dd"), n("7f7f"), n("6b54"), n("6762"), n("2fdb"), n("d50b")),
            f = function(t, e) {
                return t.name.toString().toLowerCase().includes(e)
            },
            m = function(t) {
                return Object(p["a"])(t).sort(Object(h["b"])(function(t) {
                    return t.order
                }))
            },
            v = {
                props: {
                    instance: {
                        type: r["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        isLoading: !1,
                        error: null,
                        _globalFilters: [],
                        filterCriteria: null
                    }
                },
                computed: {
                    globalFilters: function() {
                        var t = this;
                        if (!this.filterCriteria) return m(this.$data._globalFilters);
                        var e = this.$data._globalFilters.filter(function(e) {
                            return f(e, t.filterCriteria.toLowerCase())
                        });
                        return m(e)
                    }
                },
                created: function() {
                    this.fetchGlobalFilters()
                },
                methods: {
                    fetchGlobalFilters: function() {
                        var t = Object(d["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, this.isLoading = !0, t.prev = 2, t.next = 5, this.instance.fetchGatewayGlobalFilters();
                                    case 5:
                                        e = t.sent, this.$data._globalFilters = u()(e.data).map(function(t) {
                                            var e = Object(c["a"])(t, 2),
                                                n = e[0],
                                                a = e[1],
                                                s = n.split("@"),
                                                r = Object(c["a"])(s, 2),
                                                i = r[0],
                                                o = r[1];
                                            return {
                                                name: i,
                                                objectId: o,
                                                order: a
                                            }
                                        }), t.next = 13;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t["catch"](2), console.warn("Fetching global filters failed:", t.t0), this.error = t.t0;
                                    case 13:
                                        this.isLoading = !1;
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [2, 9]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            },
            g = v,
            b = n("2877"),
            _ = Object(b["a"])(g, i, o, !1, null, null, null),
            C = _.exports,
            y = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    class: {
                        "is-loading": t.isLoading
                    }
                }, [t.routes ? n("sba-panel", {
                    attrs: {
                        "header-sticks-below": ["#navigation"],
                        title: "Routes"
                    }
                }, [n("refresh-route-cache", {
                    attrs: {
                        instance: t.instance
                    },
                    on: {
                        "routes-refreshed": t.fetchRoutes
                    }
                }), t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-danger",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n          Fetching gateway routes failed.\n        ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("div", {
                    staticClass: "field"
                }, [n("p", {
                    staticClass: "control is-expanded has-icons-left"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.routesFilterCriteria,
                        expression: "routesFilterCriteria"
                    }],
                    staticClass: "input",
                    attrs: {
                        type: "search"
                    },
                    domProps: {
                        value: t.routesFilterCriteria
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.routesFilterCriteria = e.target.value)
                        }
                    }
                }), n("span", {
                    staticClass: "icon is-small is-left"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "filter"
                    }
                })], 1)])]), n("routes-list", {
                    attrs: {
                        instance: t.instance,
                        "is-loading": t.isLoading,
                        routes: t.routes
                    },
                    on: {
                        "route-deleted": t.fetchRoutes
                    }
                })], 1) : t._e(), n("sba-panel", {
                    attrs: {
                        "header-sticks-below": ["#navigation"],
                        title: "Add Route"
                    }
                }, [n("add-route", {
                    attrs: {
                        instance: t.instance
                    },
                    on: {
                        "route-added": t.fetchRoutes
                    }
                })], 1)], 1)
            },
            x = [],
            w = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [t.error ? n("div", {
                    staticClass: "message is-danger"
                }, [n("div", {
                    staticClass: "message-body"
                }, [n("strong", [n("font-awesome-icon", {
                    staticClass: "has-text-warning",
                    attrs: {
                        icon: "exclamation-triangle"
                    }
                }), t._v("\n        Adding route failed.\n      ")], 1), n("p", {
                    domProps: {
                        textContent: t._s(t.error.message)
                    }
                })])]) : t._e(), n("div", {
                    staticClass: "field"
                }, [n("label", {
                    staticClass: "label",
                    attrs: {
                        for: "routeId"
                    }
                }, [t._v("\n      Id\n    ")]), n("p", {
                    staticClass: "control"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.routeId,
                        expression: "routeId"
                    }],
                    staticClass: "input",
                    attrs: {
                        id: "routeId",
                        required: ""
                    },
                    domProps: {
                        value: t.routeId
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.routeId = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "field"
                }, [n("label", {
                    staticClass: "label",
                    attrs: {
                        for: "order"
                    }
                }, [t._v("\n      Order\n    ")]), n("p", {
                    staticClass: "control"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.routeOrder,
                        expression: "routeOrder"
                    }],
                    staticClass: "input",
                    attrs: {
                        id: "order",
                        placeholder: "0",
                        type: "number"
                    },
                    domProps: {
                        value: t.routeOrder
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.routeOrder = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "field"
                }, [n("label", {
                    staticClass: "label",
                    attrs: {
                        for: "predicates"
                    }
                }, [t._v("\n      Predicates\n    ")]), n("p", {
                    staticClass: "control"
                }, [n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.routePredicates,
                        expression: "routePredicates"
                    }],
                    staticClass: "textarea",
                    attrs: {
                        rows: "4",
                        id: "predicates",
                        placeholder: "[]",
                        required: ""
                    },
                    domProps: {
                        value: t.routePredicates
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.routePredicates = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "field"
                }, [n("label", {
                    staticClass: "label",
                    attrs: {
                        for: "filters"
                    }
                }, [t._v("\n      Filters\n    ")]), n("p", {
                    staticClass: "control"
                }, [n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.routeFilters,
                        expression: "routeFilters"
                    }],
                    staticClass: "textarea",
                    attrs: {
                        rows: "4",
                        id: "filters",
                        placeholder: "[]"
                    },
                    domProps: {
                        value: t.routeFilters
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.routeFilters = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "field"
                }, [n("label", {
                    staticClass: "label",
                    attrs: {
                        for: "routeUri"
                    }
                }, [t._v("\n      URI\n    ")]), n("p", {
                    staticClass: "control"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.routeUri,
                        expression: "routeUri"
                    }],
                    staticClass: "input",
                    attrs: {
                        id: "routeUri",
                        placeholder: "http://example.com",
                        required: ""
                    },
                    domProps: {
                        value: t.routeUri
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.routeUri = e.target.value)
                        }
                    }
                })])]), n("div", {
                    staticClass: "field is-grouped is-grouped-right"
                }, [n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button is-primary",
                    attrs: {
                        disabled: !t.isAddingRoutePossible
                    },
                    on: {
                        click: t.addRoute
                    }
                }, [t._v("\n        Add route\n      ")])])])])
            },
            k = [],
            j = n("8be7"),
            O = {
                props: {
                    instance: {
                        type: r["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        error: null,
                        routeId: null,
                        routePredicates: null,
                        routeFilters: null,
                        routeUri: null,
                        routeOrder: null
                    }
                },
                computed: {
                    isAddingRoutePossible: function() {
                        return this.routeId && this.routePredicates && this.routeUri
                    }
                },
                methods: {
                    addRoute: function() {
                        var t = this,
                            e = this,
                            n = {
                                id: e.routeId,
                                predicates: e.routePredicates ? JSON.parse(e.routePredicates) : void 0,
                                filters: e.routeFilters ? JSON.parse(e.routeFilters) : [],
                                uri: e.routeUri,
                                order: e.routeOrder || 0
                            };
                        Object(j["m"])(e.instance.addGatewayRoute(n)).subscribe({
                            complete: function() {
                                e.routeId = null, e.routePredicates = null, e.routeFilters = null, e.routeUri = null, e.routeOrder = null, e.error = null, setTimeout(function() {
                                    return e.$emit("route-added")
                                }, 2500)
                            },
                            error: function(e) {
                                t.error = e
                            }
                        })
                    }
                }
            },
            S = O,
            P = Object(b["a"])(S, w, k, !1, null, null, null),
            E = P.exports,
            R = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "field"
                }, [n("div", {
                    staticClass: "control"
                }, [n("button", {
                    staticClass: "button is-light",
                    class: {
                        "is-loading": "executing" === t.refreshingRouteCache,
                        "is-danger": "failed" === t.refreshingRouteCache,
                        "is-info": "completed" === t.refreshingRouteCache
                    },
                    attrs: {
                        disabled: "executing" === t.refreshingRouteCache
                    },
                    on: {
                        click: t.refreshRoutesCache
                    }
                }, ["completed" === t.refreshingRouteCache ? n("span", [t._v("\n        Routes Cache refreshed\n      ")]) : "failed" === t.refreshingRouteCache ? n("span", [t._v("\n        Failed\n      ")]) : n("span", [t._v("\n        Refresh Routes Cache\n      ")])])])])
            },
            L = [],
            A = {
                props: {
                    instance: {
                        type: r["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        refreshingRouteCache: null
                    }
                },
                methods: {
                    refreshRoutesCache: function() {
                        var t = this;
                        Object(j["m"])(t.instance.refreshGatewayRoutesCache()).pipe(Object(j["o"])(function(e) {
                            return t.refreshingRouteCache = e
                        })).subscribe({
                            complete: function() {
                                return t.$emit("routes-refreshed"), setTimeout(function() {
                                    return t.refreshingRouteCache = null
                                }, 2500)
                            }
                        })
                    }
                }
            },
            F = A,
            M = Object(b["a"])(F, R, L, !1, null, null, null),
            T = M.exports,
            $ = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("table", {
                    staticClass: "table routes is-fullwidth is-hoverable"
                }, [t._m(0), n("tbody", [t._l(t.routes, function(e) {
                    return [n("tr", {
                        key: e.route_id,
                        staticClass: "is-selectable",
                        on: {
                            click: function(n) {
                                t.showDetails[e.route_id] ? t.$delete(t.showDetails, e.route_id) : t.$set(t.showDetails, e.route_id, !0)
                            }
                        }
                    }, [n("td", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(e.route_id)
                        }
                    }), n("td", {
                        domProps: {
                            textContent: t._s(e.order)
                        }
                    }), n("td", {
                        staticClass: "routes__delete-action"
                    }, [n("sba-confirm-button", {
                        staticClass: "button refresh-button is-light",
                        class: {
                            "is-loading": "executing" === t.deleting[e.route_id],
                            "is-danger": "failed" === t.deleting[e.route_id],
                            "is-info": "completed" === t.deleting[e.route_id]
                        },
                        attrs: {
                            disabled: "executing" === t.deleting[e.route_id]
                        },
                        on: {
                            click: function(n) {
                                return n.stopPropagation(), t.deleteRoute(e.route_id)
                            }
                        }
                    }, ["completed" === t.deleting[e.route_id] ? n("span", [t._v("\n              Deleted\n            ")]) : "failed" === t.deleting[e.route_id] ? n("span", [t._v("\n              Failed\n            ")]) : n("span", [n("font-awesome-icon", {
                        attrs: {
                            icon: "trash"
                        }
                    }), t._v(" Delete\n            ")], 1)])], 1)]), t.showDetails[e.route_id] ? n("tr", {
                        key: e.route_id + "-detail"
                    }, [n("td", {
                        staticClass: "has-background-white-bis",
                        attrs: {
                            colspan: "3"
                        }
                    }, [e.route_definition ? n("route-definition", {
                        attrs: {
                            "route-definition": e.route_definition
                        }
                    }) : e.route_object ? n("pre", {
                        staticClass: "is-breakable",
                        domProps: {
                            textContent: t._s(t.toJson(e.route_object))
                        }
                    }) : n("span", {
                        staticClass: "is-muted"
                    }, [t._v("\n            No Route Definition provided.\n          ")])], 1)]) : t._e()]
                }), 0 === t.routes.length ? n("tr", [n("td", {
                    staticClass: "is-muted",
                    attrs: {
                        colspan: "3"
                    }
                }, [t.isLoading ? n("p", {
                    staticClass: "is-loading"
                }, [t._v("\n          Loading Routes...\n        ")]) : n("p", [t._v("\n          No Routes found.\n        ")])])]) : t._e()], 2)])
            },
            I = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("thead", [n("tr", [n("th", [t._v("Id")]), n("th", [t._v("Order")]), n("th")])])
                }
            ],
            N = n("f499"),
            B = n.n(N),
            D = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "route-definition-container"
                }, [n("div", {
                    staticClass: "route-definition"
                }, [n("div", {
                    staticClass: "route-definition-header"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "search"
                    }
                }), t._v(" Predicates\n    ")], 1), t._l(t.routeDefinition.predicates, function(e) {
                    return n("div", {
                        key: e.name,
                        staticClass: "route-definition-content"
                    }, [n("div", {
                        staticClass: "route-definition-category",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }), n("ul", t._l(t.transformArgs(e.args), function(e) {
                        return n("li", {
                            key: e,
                            domProps: {
                                textContent: t._s(e)
                            }
                        })
                    }), 0)])
                })], 2), n("font-awesome-icon", {
                    staticClass: "route-definition-spacer",
                    attrs: {
                        icon: "angle-double-right"
                    }
                }), t.routeDefinition.filters.length > 0 ? n("div", {
                    staticClass: "route-definition"
                }, [n("div", {
                    staticClass: "route-definition-header"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "filter"
                    }
                }), t._v(" Filters\n    ")], 1), t._l(t.routeDefinition.filters, function(e) {
                    return n("div", {
                        key: e.name,
                        staticClass: "route-definition-content"
                    }, [n("div", {
                        staticClass: "route-definition-category",
                        domProps: {
                            textContent: t._s(e.name)
                        }
                    }), n("ul", t._l(t.transformArgs(e.args), function(e) {
                        return n("li", {
                            key: e,
                            domProps: {
                                textContent: t._s(e)
                            }
                        })
                    }), 0)])
                })], 2) : t._e(), t.routeDefinition.filters.length > 0 ? n("font-awesome-icon", {
                    staticClass: "route-definition-spacer",
                    attrs: {
                        icon: "angle-double-right"
                    }
                }) : t._e(), n("div", {
                    staticClass: "route-definition"
                }, [n("div", {
                    staticClass: "route-definition-header"
                }, [n("font-awesome-icon", {
                    attrs: {
                        icon: "map-marker-alt"
                    }
                }), t._v(" URI\n    ")], 1), n("div", {
                    staticClass: "route-definition-content",
                    domProps: {
                        textContent: t._s(t.routeDefinition.uri)
                    }
                })])], 1)
            },
            q = [],
            U = {
                props: {
                    routeDefinition: {
                        type: Object,
                        required: !0
                    }
                },
                methods: {
                    transformArgs: function(t) {
                        return u()(t).map(function(t) {
                            var e = Object(c["a"])(t, 2),
                                n = e[0],
                                a = e[1];
                            return "".concat(n, " : ").concat(a)
                        })
                    }
                }
            },
            H = U,
            V = (n("a3e8"), Object(b["a"])(H, D, q, !1, null, null, null)),
            z = V.exports,
            G = {
                components: {
                    RouteDefinition: z
                },
                props: {
                    instance: {
                        type: r["a"],
                        required: !0
                    },
                    routes: {
                        type: Array,
                        required: !0
                    },
                    isLoading: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        showDetails: {},
                        deleting: {}
                    }
                },
                methods: {
                    toJson: function(t) {
                        return B()(t, null, 4)
                    },
                    deleteRoute: function(t) {
                        var e = this;
                        Object(j["m"])(e.instance.deleteGatewayRoute(t)).pipe(Object(j["o"])(function(n) {
                            return e.$set(e.deleting, t, n)
                        })).subscribe({
                            complete: function() {
                                return e.$emit("route-deleted")
                            }
                        })
                    }
                }
            },
            W = G,
            J = (n("b86b"), Object(b["a"])(W, $, I, !1, null, null, null)),
            X = J.exports,
            K = function(t, e) {
                if (!t) return !1;
                var n = function(t) {
                    return String(t).toLowerCase().includes(e)
                };
                return t.uri && Object(h["a"])(t.uri.toString(), n) || Object(h["a"])(t.predicates, n) || Object(h["a"])(t.filters, n)
            },
            Y = function(t, e) {
                return t.route_id.toString().toLowerCase().includes(e) || K(t.route_definition, e)
            },
            Z = function(t) {
                return Object(p["a"])(t).sort(Object(h["b"])(function(t) {
                    return t.order
                }))
            },
            Q = {
                components: {
                    refreshRouteCache: T,
                    routesList: X,
                    addRoute: E
                },
                props: {
                    instance: {
                        type: r["a"],
                        required: !0
                    }
                },
                data: function() {
                    return {
                        isLoading: !1,
                        error: null,
                        _routes: [],
                        routesFilterCriteria: null
                    }
                },
                computed: {
                    routes: function() {
                        var t = this;
                        if (!this.routesFilterCriteria) return Z(this.$data._routes);
                        var e = this.$data._routes.filter(function(e) {
                            return Y(e, t.routesFilterCriteria.toLowerCase())
                        });
                        return Z(e)
                    }
                },
                created: function() {
                    this.fetchRoutes()
                },
                methods: {
                    fetchRoutes: function() {
                        var t = Object(d["a"])(regeneratorRuntime.mark(function t() {
                            var e;
                            return regeneratorRuntime.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return this.error = null, this.isLoading = !0, t.prev = 2, t.next = 5, this.instance.fetchGatewayRoutes();
                                    case 5:
                                        e = t.sent, this.$data._routes = e.data, t.next = 13;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t["catch"](2), console.warn("Fetching routes failed:", t.t0), this.error = t.t0;
                                    case 13:
                                        this.isLoading = !1;
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [2, 9]
                            ])
                        }));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }
            },
            tt = Q,
            et = Object(b["a"])(tt, y, x, !1, null, null, null),
            nt = et.exports,
            at = {
                components: {
                    globalFilters: C,
                    routes: nt
                },
                props: {
                    instance: {
                        type: r["a"],
                        required: !0
                    }
                },
                install: function(t) {
                    var e = t.viewRegistry;
                    e.addView({
                        name: "instances/gateway",
                        parent: "instances",
                        path: "gateway",
                        component: this,
                        label: "Gateway",
                        group: "Web",
                        order: 960,
                        isEnabled: function(t) {
                            var e = t.instance;
                            return e.hasEndpoint("gateway")
                        }
                    })
                }
            },
            st = at,
            rt = Object(b["a"])(st, a, s, !1, null, null, null);
        e["default"] = rt.exports
    },
    f5cb: function(t, e, n) {
        "use strict";
        var a = n("7398"),
            s = n.n(a);
        s.a
    },
    f73b: function(t, e, n) {},
    faa6: function(t, e, n) {},
    fc9c: function(t, e, n) {},
    fdd4: function(t, e, n) {}
});
//# sourceMappingURL=sba-core.934778a9.js.map