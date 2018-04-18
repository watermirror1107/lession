/*!
 * fullPage 2.9.4
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
function tryPgvSendClick() {
    "function" == typeof pgvSendClick && pgvSendClick(arguments[0])
}

function adjustSize() {
    $("html").css({fontSize: $(window).width() / 1920 * 100})
}

function pop(e, t, n) {
    isnowpop = !0, e = e || "//game.gtimg.cn/images/up/act/a20170301pre/images/three/banner0.jpg";
    var i = $("#pop");
    isnowpop = !0, i.addClass("show"), n && i.addClass("tall"), $("img", i).attr("src", e), $("a", i).attr("href", t), $.fn.fullpage.setAllowScrolling(!1)
}

function initFullpage() {
    $("#fullpage").fullpage({
        lazyLoading: !1,
        anchors: ["g", "a", "l", "f", "u"],
        menu: "#sidenav",
        afterRender: function () {
            setTimeout(function () {
                $(".fullpage").addClass("fullpage-inited")
            }, 1e3)
        },
        onLeave: function (e, t) {
            toggleParticle(t - 1)
        },
        afterLoad: function (e, t) {
            tryPgvSendClick({hottag: "a20170301pre.page.page" + e}), 6 === t && setTimeout(function () {
            }, 1200)
        }
    }), supportWebGL && $.fn.fullpage.setAllowScrolling(!1)
}

!function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (n) {
        return t(n, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = t(require("jquery"), e, e.document, e.Math) : t(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function (e, t, n, i, o) {
    "use strict";
    var s = "fullpage-wrapper", a = "." + s, r = "fp-scrollable", l = "." + r, c = "fp-responsive",
        u = "fp-notransition", d = "fp-destroyed", f = "fp-enabled", h = "fp-viewing", p = "active", g = "." + p,
        m = "fp-completely", v = "." + m, y = ".section", C = "fp-section", k = "." + C, b = k + g, S = k + ":first",
        w = k + ":last", F = "fp-tableCell", L = "." + F, x = "fp-auto-height", T = "fp-normal-scroll", M = "fp-nav",
        D = "#" + M, $ = "fp-tooltip", I = "." + $, E = "fp-show-active", A = ".slide", B = "fp-slide", O = "." + B,
        j = O + g, P = "fp-slides", z = "." + P, H = "fp-slidesContainer", R = "." + H, Q = "fp-table",
        q = "fp-slidesNav", _ = "." + q, N = _ + " a", Y = "fp-controlArrow", W = "." + Y, U = "fp-prev", V = "." + U,
        X = Y + " " + U, G = W + V, K = "fp-next", J = "." + K, Z = Y + " " + K, et = W + J, tt = e(t), nt = e(n),
        it = {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0
        };
    e.fn.fullpage = function (r) {
        function l(t, n) {
            t || ti(0), ai("autoScrolling", t, n);
            var i = e(b);
            r.autoScrolling && !r.scrollBar ? (ci.css({
                overflow: "hidden",
                height: "100%"
            }), Y(Bi.recordHistory, "internal"), Ci.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), i.length && ti(i.position().top)) : (ci.css({
                overflow: "visible",
                height: "initial"
            }), Y(!1, "internal"), Ci.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), i.length && ci.scrollTop(i.position().top))
        }

        function Y(e, t) {
            ai("recordHistory", e, t)
        }

        function V(e, t) {
            ai("scrollingSpeed", e, t)
        }

        function K(e, t) {
            ai("fitToSection", e, t)
        }

        function J(e) {
            r.lockAnchors = e
        }

        function st(e) {
            e ? (Un(), Vn()) : (Wn(), Xn())
        }

        function at(t, n) {
            "undefined" != typeof n ? (n = n.replace(/ /g, "").split(","), e.each(n, function (e, n) {
                ii(t, n, "m")
            })) : t ? (st(!0), Gn()) : (st(!1), Kn())
        }

        function rt(t, n) {
            "undefined" != typeof n ? (n = n.replace(/ /g, "").split(","), e.each(n, function (e, n) {
                ii(t, n, "k")
            })) : r.keyboardScrolling = t
        }

        function lt() {
            var t = e(b).prev(k);
            t.length || !r.loopTop && !r.continuousVertical || (t = e(k).last()), t.length && Ut(t, null, !0)
        }

        function ct() {
            var t = e(b).next(k);
            t.length || !r.loopBottom && !r.continuousVertical || (t = e(k).first()), t.length && Ut(t, null, !1)
        }

        function ut(e, t) {
            V(0, "internal"), dt(e, t), V(Bi.scrollingSpeed, "internal")
        }

        function dt(e, t) {
            var n = jn(e);
            "undefined" != typeof t ? zn(e, t) : n.length > 0 && Ut(n)
        }

        function ft(e) {
            Nt("right", e)
        }

        function ht(e) {
            Nt("left", e)
        }

        function pt(t) {
            if (!Ci.hasClass(d)) {
                bi = !0, ki = tt.height(), e(k).each(function () {
                    var t = e(this).find(z), n = e(this).find(O);
                    r.verticalCentered && e(this).find(L).css("height", Bn(e(this)) + "px"), e(this).css("height", ki + "px"), r.scrollOverflow && (n.length ? n.each(function () {
                        En(e(this))
                    }) : En(e(this))), n.length > 1 && Cn(t, t.find(j))
                });
                var n = e(b), i = n.index(k);
                i && ut(i + 1), bi = !1, e.isFunction(r.afterResize) && t && r.afterResize.call(Ci), e.isFunction(r.afterReBuild) && !t && r.afterReBuild.call(Ci)
            }
        }

        function gt(t) {
            var n = ui.hasClass(c);
            t ? n || (l(!1, "internal"), K(!1, "internal"), e(D).hide(), ui.addClass(c), e.isFunction(r.afterResponsive) && r.afterResponsive.call(Ci, t)) : n && (l(Bi.autoScrolling, "internal"), K(Bi.autoScrolling, "internal"), e(D).show(), ui.removeClass(c), e.isFunction(r.afterResponsive) && r.afterResponsive.call(Ci, t))
        }

        function mt() {
            r.css3 && (r.css3 = Yn()), r.scrollBar = r.scrollBar || r.hybrid, yt(), Ct(), at(!0), l(r.autoScrolling, "internal"), Fn(), Nn(), "complete" === n.readyState && an(), tt.on("load", an)
        }

        function vt() {
            tt.on("scroll", Et).on("hashchange", rn).blur(pn).resize(wn), nt.keydown(ln).keyup(un).on("click touchstart", D + " a", gn).on("click touchstart", N, mn).on("click", I, cn), e(k).on("click touchstart", W, hn), r.normalScrollElements && (nt.on("mouseenter", r.normalScrollElements, function () {
                st(!1)
            }), nt.on("mouseleave", r.normalScrollElements, function () {
                st(!0)
            }))
        }

        function yt() {
            var t = Ci.find(r.sectionSelector);
            r.anchors.length || (r.anchors = t.filter("[data-anchor]").map(function () {
                return e(this).data("anchor").toString()
            }).get()), r.navigationTooltips.length || (r.navigationTooltips = t.filter("[data-tooltip]").map(function () {
                return e(this).data("tooltip").toString()
            }).get())
        }

        function Ct() {
            Ci.css({
                height: "100%",
                position: "relative"
            }), Ci.addClass(s), e("html").addClass(f), ki = tt.height(), Ci.removeClass(d), wt(), e(k).each(function (t) {
                var n = e(this), i = n.find(O), o = i.length;
                bt(n, t), St(n, t), o > 0 ? kt(n, i, o) : r.verticalCentered && An(n)
            }), r.fixedElements && r.css3 && e(r.fixedElements).appendTo(ui), r.navigation && Lt(), Tt(), r.scrollOverflow ? ("complete" === n.readyState && xt(), tt.on("load", xt)) : $t()
        }

        function kt(t, n, i) {
            var o = 100 * i, s = 100 / i;
            n.wrapAll('<div class="' + H + '" />'), n.parent().wrap('<div class="' + P + '" />'), t.find(R).css("width", o + "%"), i > 1 && (r.controlArrows && Ft(t), r.slidesNavigation && Rn(t, i)), n.each(function () {
                e(this).css("width", s + "%"), r.verticalCentered && An(e(this))
            });
            var a = t.find(j);
            a.length && (0 !== e(b).index(k) || 0 === e(b).index(k) && 0 !== a.index()) ? ei(a, "internal") : n.eq(0).addClass(p)
        }

        function bt(t, n) {
            n || 0 !== e(b).length || t.addClass(p), gi = e(b), t.css("height", ki + "px"), r.paddingTop && t.css("padding-top", r.paddingTop), r.paddingBottom && t.css("padding-bottom", r.paddingBottom), "undefined" != typeof r.sectionsColor[n] && t.css("background-color", r.sectionsColor[n]), "undefined" != typeof r.anchors[n] && t.attr("data-anchor", r.anchors[n])
        }

        function St(t, n) {
            "undefined" != typeof r.anchors[n] && t.hasClass(p) && Dn(r.anchors[n], n), r.menu && r.css3 && e(r.menu).closest(a).length && e(r.menu).appendTo(ui)
        }

        function wt() {
            Ci.find(r.sectionSelector).addClass(C), Ci.find(r.slideSelector).addClass(B)
        }

        function Ft(e) {
            e.find(z).after('<div class="' + X + '"></div><div class="' + Z + '"></div>'), "#fff" != r.controlArrowColor && (e.find(et).css("border-color", "transparent transparent transparent " + r.controlArrowColor), e.find(G).css("border-color", "transparent " + r.controlArrowColor + " transparent transparent")), r.loopHorizontal || e.find(G).hide()
        }

        function Lt() {
            ui.append('<div id="' + M + '"><ul></ul></div>');
            var t = e(D);
            t.addClass(function () {
                return r.showActiveTooltip ? E + " " + r.navigationPosition : r.navigationPosition
            });
            for (var n = 0; n < e(k).length; n++) {
                var i = "";
                r.anchors.length && (i = r.anchors[n]);
                var o = '<li><a href="#' + i + '"><span></span></a>', s = r.navigationTooltips[n];
                "undefined" != typeof s && "" !== s && (o += '<div class="' + $ + " " + r.navigationPosition + '">' + s + "</div>"), o += "</li>", t.find("ul").append(o)
            }
            e(D).css("margin-top", "-" + e(D).height() / 2 + "px"), e(D).find("li").eq(e(b).index(k)).find("a").addClass(p)
        }

        function xt() {
            e(k).each(function () {
                var t = e(this).find(O);
                t.length ? t.each(function () {
                    En(e(this))
                }) : En(e(this))
            }), $t()
        }

        function Tt() {
            Ci.find('iframe[src*="youtube.com/embed/"]').each(function () {
                Mt(e(this), "enablejsapi=1")
            })
        }

        function Mt(e, t) {
            var n = e.attr("src");
            e.attr("src", n + Dt(n) + t)
        }

        function Dt(e) {
            return /\?/.test(e) ? "&" : "?"
        }

        function $t() {
            var t = e(b);
            t.addClass(m), r.scrollOverflowHandler.afterRender && r.scrollOverflowHandler.afterRender(t), en(t), tn(t), r.scrollOverflowHandler.afterLoad(), It() && e.isFunction(r.afterLoad) && r.afterLoad.call(t, t.data("anchor"), t.index(k) + 1), e.isFunction(r.afterRender) && r.afterRender.call(Ci)
        }

        function It() {
            var e = t.location.hash.replace("#", "").split("/"), n = jn(decodeURIComponent(e[0]));
            return !n.length || n.length && n.index() === gi.index()
        }

        function Et() {
            var t;
            if (!r.autoScrolling || r.scrollBar) {
                var i = tt.scrollTop(), o = Ot(i), s = 0, a = i + tt.height() / 2, l = ui.height() - tt.height() === i,
                    c = n.querySelectorAll(k);
                if (l) s = c.length - 1; else if (i) for (var u = 0; u < c.length; ++u) {
                    var d = c[u];
                    d.offsetTop <= a && (s = u)
                } else s = 0;
                if (Bt(o) && (e(b).hasClass(m) || e(b).addClass(m).siblings().removeClass(m)), t = e(c).eq(s), !t.hasClass(p)) {
                    Oi = !0;
                    var f, h, g = e(b), v = g.index(k) + 1, y = $n(t), C = t.data("anchor"), S = t.index(k) + 1,
                        w = t.find(j);
                    w.length && (h = w.data("anchor"), f = w.index()), wi && (t.addClass(p).siblings().removeClass(p), e.isFunction(r.onLeave) && r.onLeave.call(g, v, S, y), e.isFunction(r.afterLoad) && r.afterLoad.call(t, C, S), on(g), en(t), tn(t), Dn(C, S - 1), r.anchors.length && (fi = C), Qn(f, h, C, S)), clearTimeout(Di), Di = setTimeout(function () {
                        Oi = !1
                    }, 100)
                }
                r.fitToSection && (clearTimeout($i), $i = setTimeout(function () {
                    r.fitToSection && At()
                }, r.fitToSectionDelay))
            }
        }

        function At() {
            wi && (bi = !0, Ut(e(b)), bi = !1)
        }

        function Bt(t) {
            var n = e(b).position().top, i = n + tt.height();
            return "up" == t ? i >= tt.scrollTop() + tt.height() : n <= tt.scrollTop()
        }

        function Ot(e) {
            var t = e > ji ? "down" : "up";
            return ji = e, qi = e, t
        }

        function jt(e, t) {
            if (Li.m[e]) {
                var n = "down" === e ? "bottom" : "top", i = "down" === e ? ct : lt;
                if (t.length > 0) {
                    if (!r.scrollOverflowHandler.isScrolled(n, t)) return !0;
                    i()
                } else i()
            }
        }

        function Pt(e) {
            var t = e.originalEvent;
            !Ht(e.target) && r.autoScrolling && Rt(t) && e.preventDefault()
        }

        function zt(t) {
            var n = t.originalEvent, o = e(n.target).closest(k);
            if (!Ht(t.target) && Rt(n)) {
                r.autoScrolling && t.preventDefault();
                var s = r.scrollOverflowHandler.scrollable(o), a = Zn(n);
                Hi = a.y, Ri = a.x, o.find(z).length && i.abs(zi - Ri) > i.abs(Pi - Hi) ? !mi && i.abs(zi - Ri) > tt.outerWidth() / 100 * r.touchSensitivity && (zi > Ri ? Li.m.right && ft(o) : Li.m.left && ht(o)) : r.autoScrolling && wi && i.abs(Pi - Hi) > tt.height() / 100 * r.touchSensitivity && (Pi > Hi ? jt("down", s) : Hi > Pi && jt("up", s))
            }
        }

        function Ht(t, n) {
            n = n || 0;
            var i = e(t).parent();
            return n < r.normalScrollElementTouchThreshold && i.is(r.normalScrollElements) ? !0 : n == r.normalScrollElementTouchThreshold ? !1 : Ht(i, ++n)
        }

        function Rt(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }

        function Qt(e) {
            var t = e.originalEvent;
            if (r.fitToSection && ci.stop(), Rt(t)) {
                var n = Zn(t);
                Pi = n.y, zi = n.x
            }
        }

        function qt(e, t) {
            for (var n = 0, o = e.slice(i.max(e.length - t, 1)), s = 0; s < o.length; s++) n += o[s];
            return i.ceil(n / t)
        }

        function _t(n) {
            var o = (new Date).getTime(), s = e(v).hasClass(T);
            if (r.autoScrolling && !pi && !s) {
                n = n || t.event;
                var a = n.wheelDelta || -n.deltaY || -n.detail, l = i.max(-1, i.min(1, a)),
                    c = "undefined" != typeof n.wheelDeltaX || "undefined" != typeof n.deltaX,
                    u = i.abs(n.wheelDeltaX) < i.abs(n.wheelDelta) || i.abs(n.deltaX) < i.abs(n.deltaY) || !c;
                Fi.length > 149 && Fi.shift(), Fi.push(i.abs(a)), r.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
                var d = e(b), f = r.scrollOverflowHandler.scrollable(d), h = o - Qi;
                if (Qi = o, h > 200 && (Fi = []), wi) {
                    var p = qt(Fi, 10), g = qt(Fi, 70), m = p >= g;
                    m && u && (0 > l ? jt("down", f) : jt("up", f))
                }
                return !1
            }
            r.fitToSection && ci.stop()
        }

        function Nt(t, n) {
            var i = "undefined" == typeof n ? e(b) : n, o = i.find(z), s = o.find(O).length;
            if (!(!o.length || mi || 2 > s)) {
                var a = o.find(j), l = null;
                if (l = "left" === t ? a.prev(O) : a.next(O), !l.length) {
                    if (!r.loopHorizontal) return;
                    l = a.siblings("left" === t ? ":last" : ":first")
                }
                mi = !0, Cn(o, l, t)
            }
        }

        function Yt() {
            e(j).each(function () {
                ei(e(this), "internal")
            })
        }

        function Wt(e) {
            var t = e.position(), n = t.top, i = t.top > qi, o = n - ki + e.outerHeight(), s = r.bigSectionsDestination;
            return e.outerHeight() > ki ? (!i && !s || "bottom" === s) && (n = o) : (i || bi && e.is(":last-child")) && (n = o), qi = n, n
        }

        function Ut(t, n, i) {
            if ("undefined" != typeof t) {
                var o, s, a = Wt(t), l = {
                    element: t,
                    callback: n,
                    isMovementUp: i,
                    dtop: a,
                    yMovement: $n(t),
                    anchorLink: t.data("anchor"),
                    sectionIndex: t.index(k),
                    activeSlide: t.find(j),
                    activeSection: e(b),
                    leavingSection: e(b).index(k) + 1,
                    localIsResizing: bi
                };
                l.activeSection.is(t) && !bi || r.scrollBar && tt.scrollTop() === l.dtop && !t.hasClass(x) || (l.activeSlide.length && (o = l.activeSlide.data("anchor"), s = l.activeSlide.index()), r.autoScrolling && r.continuousVertical && "undefined" != typeof l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && (l = Gt(l)), (!e.isFunction(r.onLeave) || l.localIsResizing || r.onLeave.call(l.activeSection, l.leavingSection, l.sectionIndex + 1, l.yMovement) !== !1) && (l.localIsResizing || on(l.activeSection), r.scrollOverflowHandler.beforeLeave(), t.addClass(p).siblings().removeClass(p), en(t), r.scrollOverflowHandler.onLeave(), wi = !1, Qn(s, o, l.anchorLink, l.sectionIndex), Vt(l), fi = l.anchorLink, Dn(l.anchorLink, l.sectionIndex)))
            }
        }

        function Vt(t) {
            if (r.css3 && r.autoScrolling && !r.scrollBar) {
                var n = "translate3d(0px, -" + i.round(t.dtop) + "px, 0px)";
                On(n, !0), r.scrollingSpeed ? (clearTimeout(Ti), Ti = setTimeout(function () {
                    Jt(t)
                }, r.scrollingSpeed)) : Jt(t)
            } else {
                var o = Xt(t);
                e(o.element).animate(o.options, r.scrollingSpeed, r.easing).promise().done(function () {
                    r.scrollBar ? setTimeout(function () {
                        Jt(t)
                    }, 30) : Jt(t)
                })
            }
        }

        function Xt(e) {
            var t = {};
            return r.autoScrolling && !r.scrollBar ? (t.options = {top: -e.dtop}, t.element = a) : (t.options = {scrollTop: e.dtop}, t.element = "html, body"), t
        }

        function Gt(t) {
            return t.isMovementUp ? e(b).before(t.activeSection.nextAll(k)) : e(b).after(t.activeSection.prevAll(k).get().reverse()), ti(e(b).position().top), Yt(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.position().top, t.yMovement = $n(t.element), t
        }

        function Kt(t) {
            t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(S).before(t.wrapAroundElements) : e(w).after(t.wrapAroundElements), ti(e(b).position().top), Yt())
        }

        function Jt(t) {
            Kt(t), e.isFunction(r.afterLoad) && !t.localIsResizing && r.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), r.scrollOverflowHandler.afterLoad(), t.localIsResizing || tn(t.element), t.element.addClass(m).siblings().removeClass(m), wi = !0, e.isFunction(t.callback) && t.callback.call(this)
        }

        function Zt(e, t) {
            e.attr(t, e.data(t)).removeAttr("data-" + t)
        }

        function en(t) {
            if (r.lazyLoading) {
                var n, i = sn(t);
                i.find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                    n = e(this), e.each(["src", "srcset"], function (e, t) {
                        var i = n.attr("data-" + t);
                        "undefined" != typeof i && i && Zt(n, t)
                    }), n.is("source") && n.closest("video").get(0).load()
                })
            }
        }

        function tn(t) {
            var n = sn(t);
            n.find("video, audio").each(function () {
                var t = e(this).get(0);
                t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var t = e(this).get(0);
                t.hasAttribute("data-autoplay") && nn(t), t.onload = function () {
                    t.hasAttribute("data-autoplay") && nn(t)
                }
            })
        }

        function nn(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function on(t) {
            var n = sn(t);
            n.find("video, audio").each(function () {
                var t = e(this).get(0);
                t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var t = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !t.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function sn(t) {
            var n = t.find(j);
            return n.length && (t = e(n)), t
        }

        function an() {
            var e = t.location.hash.replace("#", "").split("/"), n = decodeURIComponent(e[0]),
                i = decodeURIComponent(e[1]);
            n && (r.animateAnchor ? zn(n, i) : ut(n, i))
        }

        function rn() {
            if (!Oi && !r.lockAnchors) {
                var e = t.location.hash.replace("#", "").split("/"), n = decodeURIComponent(e[0]),
                    i = decodeURIComponent(e[1]), o = "undefined" == typeof fi,
                    s = "undefined" == typeof fi && "undefined" == typeof i && !mi;
                n.length && (n && n !== fi && !o || s || !mi && hi != i) && zn(n, i)
            }
        }

        function ln(t) {
            clearTimeout(Ii);
            var n = e(":focus");
            if (!n.is("textarea") && !n.is("input") && !n.is("select") && "true" !== n.attr("contentEditable") && "" !== n.attr("contentEditable") && r.keyboardScrolling && r.autoScrolling) {
                var i = t.which, o = [40, 38, 32, 33, 34];
                e.inArray(i, o) > -1 && t.preventDefault(), pi = t.ctrlKey, Ii = setTimeout(function () {
                    vn(t)
                }, 150)
            }
        }

        function cn() {
            e(this).prev().trigger("click")
        }

        function un(e) {
            Si && (pi = e.ctrlKey)
        }

        function dn(e) {
            2 == e.which && (_i = e.pageY, Ci.on("mousemove", yn))
        }

        function fn(e) {
            2 == e.which && Ci.off("mousemove")
        }

        function hn() {
            var t = e(this).closest(k);
            e(this).hasClass(U) ? Li.m.left && ht(t) : Li.m.right && ft(t)
        }

        function pn() {
            Si = !1, pi = !1
        }

        function gn(t) {
            t.preventDefault();
            var n = e(this).parent().index();
            Ut(e(k).eq(n))
        }

        function mn(t) {
            t.preventDefault();
            var n = e(this).closest(k).find(z), i = n.find(O).eq(e(this).closest("li").index());
            Cn(n, i)
        }

        function vn(t) {
            var n = t.shiftKey;
            if (wi || !([37, 39].indexOf(t.which) < 0)) switch (t.which) {
                case 38:
                case 33:
                    Li.k.up && lt();
                    break;
                case 32:
                    if (n && Li.k.up) {
                        lt();
                        break
                    }
                case 40:
                case 34:
                    Li.k.down && ct();
                    break;
                case 36:
                    Li.k.up && dt(1);
                    break;
                case 35:
                    Li.k.down && dt(e(k).length);
                    break;
                case 37:
                    Li.k.left && ht();
                    break;
                case 39:
                    Li.k.right && ft();
                    break;
                default:
                    return
            }
        }

        function yn(e) {
            wi && (e.pageY < _i && Li.m.up ? lt() : e.pageY > _i && Li.m.down && ct()), _i = e.pageY
        }

        function Cn(t, n, i) {
            var o = t.closest(k), s = {
                slides: t,
                destiny: n,
                direction: i,
                destinyPos: n.position(),
                slideIndex: n.index(),
                section: o,
                sectionIndex: o.index(k),
                anchorLink: o.data("anchor"),
                slidesNav: o.find(_),
                slideAnchor: _n(n),
                prevSlide: o.find(j),
                prevSlideIndex: o.find(j).index(),
                localIsResizing: bi
            };
            return s.xMovement = In(s.prevSlideIndex, s.slideIndex), s.localIsResizing || (wi = !1), r.onSlideLeave && !s.localIsResizing && "none" !== s.xMovement && e.isFunction(r.onSlideLeave) && r.onSlideLeave.call(s.prevSlide, s.anchorLink, s.sectionIndex + 1, s.prevSlideIndex, s.xMovement, s.slideIndex) === !1 ? void(mi = !1) : (n.addClass(p).siblings().removeClass(p), s.localIsResizing || (on(s.prevSlide), en(n)), !r.loopHorizontal && r.controlArrows && (o.find(G).toggle(0 !== s.slideIndex), o.find(et).toggle(!n.is(":last-child"))), o.hasClass(p) && !s.localIsResizing && Qn(s.slideIndex, s.slideAnchor, s.anchorLink, s.sectionIndex), void bn(t, s, !0))
        }

        function kn(t) {
            Sn(t.slidesNav, t.slideIndex), t.localIsResizing || (e.isFunction(r.afterSlideLoad) && r.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), wi = !0, tn(t.destiny)), mi = !1
        }

        function bn(e, t, n) {
            var o = t.destinyPos;
            if (r.css3) {
                var s = "translate3d(-" + i.round(o.left) + "px, 0px, 0px)";
                Ln(e.find(R)).css(ni(s)), Mi = setTimeout(function () {
                    n && kn(t)
                }, r.scrollingSpeed, r.easing)
            } else e.animate({scrollLeft: i.round(o.left)}, r.scrollingSpeed, r.easing, function () {
                n && kn(t)
            })
        }

        function Sn(e, t) {
            e.find(g).removeClass(p), e.find("li").eq(t).find("a").addClass(p)
        }

        function wn() {
            if (Fn(), vi) {
                var t = e(n.activeElement);
                if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
                    var o = tt.height();
                    i.abs(o - Ni) > 20 * i.max(Ni, o) / 100 && (pt(!0), Ni = o)
                }
            } else clearTimeout(xi), xi = setTimeout(function () {
                pt(!0)
            }, 350)
        }

        function Fn() {
            var e = r.responsive || r.responsiveWidth, t = r.responsiveHeight, n = e && tt.outerWidth() < e,
                i = t && tt.height() < t;
            e && t ? gt(n || i) : e ? gt(n) : t && gt(i)
        }

        function Ln(e) {
            var t = "all " + r.scrollingSpeed + "ms " + r.easingcss3;
            return e.removeClass(u), e.css({"-webkit-transition": t, transition: t})
        }

        function xn(e) {
            return e.addClass(u)
        }

        function Tn(t, n) {
            r.navigation && (e(D).find(g).removeClass(p), t ? e(D).find('a[href="#' + t + '"]').addClass(p) : e(D).find("li").eq(n).find("a").addClass(p))
        }

        function Mn(t) {
            r.menu && (e(r.menu).find(g).removeClass(p), e(r.menu).find('[data-menuanchor="' + t + '"]').addClass(p))
        }

        function Dn(e, t) {
            Mn(e), Tn(e, t)
        }

        function $n(t) {
            var n = e(b).index(k), i = t.index(k);
            return n == i ? "none" : n > i ? "up" : "down"
        }

        function In(e, t) {
            return e == t ? "none" : e > t ? "left" : "right"
        }

        function En(e) {
            if (!e.hasClass("fp-noscroll")) {
                e.css("overflow", "hidden");
                var t, n = r.scrollOverflowHandler, i = n.wrapContent(), o = e.closest(k), s = n.scrollable(e);
                s.length ? t = n.scrollHeight(e) : (t = e.get(0).scrollHeight, r.verticalCentered && (t = e.find(L).get(0).scrollHeight));
                var a = ki - parseInt(o.css("padding-bottom")) - parseInt(o.css("padding-top"));
                t > a ? s.length ? n.update(e, a) : (r.verticalCentered ? e.find(L).wrapInner(i) : e.wrapInner(i), n.create(e, a)) : n.remove(e), e.css("overflow", "")
            }
        }

        function An(e) {
            e.hasClass(Q) || e.addClass(Q).wrapInner('<div class="' + F + '" style="height:' + Bn(e) + 'px;" />')
        }

        function Bn(e) {
            var t = ki;
            if (r.paddingTop || r.paddingBottom) {
                var n = e;
                n.hasClass(C) || (n = e.closest(k));
                var i = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
                t = ki - i
            }
            return t
        }

        function On(e, t) {
            t ? Ln(Ci) : xn(Ci), Ci.css(ni(e)), setTimeout(function () {
                Ci.removeClass(u)
            }, 10)
        }

        function jn(t) {
            if (!t) return [];
            var n = Ci.find(k + '[data-anchor="' + t + '"]');
            return n.length || (n = e(k).eq(t - 1)), n
        }

        function Pn(e, t) {
            var n = t.find(z), i = n.find(O + '[data-anchor="' + e + '"]');
            return i.length || (i = n.find(O).eq(e)), i
        }

        function zn(e, t) {
            var n = jn(e);
            n.length && ("undefined" == typeof t && (t = 0), e === fi || n.hasClass(p) ? Hn(n, t) : Ut(n, function () {
                Hn(n, t)
            }))
        }

        function Hn(e, t) {
            if ("undefined" != typeof t) {
                var n = e.find(z), i = Pn(t, e);
                i.length && Cn(n, i)
            }
        }

        function Rn(e, t) {
            e.append('<div class="' + q + '"><ul></ul></div>');
            var n = e.find(_);
            n.addClass(r.slidesNavPosition);
            for (var i = 0; t > i; i++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
            n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(p)
        }

        function Qn(e, t, n) {
            var i = "";
            r.anchors.length && !r.lockAnchors && (e ? ("undefined" != typeof n && (i = n), "undefined" == typeof t && (t = e), hi = t, qn(i + "/" + t)) : "undefined" != typeof e ? (hi = t, qn(n)) : qn(n)), Nn()
        }

        function qn(e) {
            if (r.recordHistory) location.hash = e; else if (vi || yi) t.history.replaceState(o, o, "#" + e); else {
                var n = t.location.href.split("#")[0];
                t.location.replace(n + "#" + e)
            }
        }

        function _n(e) {
            var t = e.data("anchor"), n = e.index();
            return "undefined" == typeof t && (t = n), t
        }

        function Nn() {
            var t = e(b), n = t.find(j), i = _n(t), o = _n(n), s = String(i);
            n.length && (s = s + "-" + o), s = s.replace("/", "-").replace("#", "");
            var a = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");
            ui[0].className = ui[0].className.replace(a, ""), ui.addClass(h + "-" + s)
        }

        function Yn() {
            var e, i = n.createElement("p"), s = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            n.body.insertBefore(i, null);
            for (var a in s) i.style[a] !== o && (i.style[a] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(i).getPropertyValue(s[a]));
            return n.body.removeChild(i), e !== o && e.length > 0 && "none" !== e
        }

        function Wn() {
            n.addEventListener ? (n.removeEventListener("mousewheel", _t, !1), n.removeEventListener("wheel", _t, !1), n.removeEventListener("MozMousePixelScroll", _t, !1)) : n.detachEvent("onmousewheel", _t)
        }

        function Un() {
            var e, i = "";
            t.addEventListener ? e = "addEventListener" : (e = "attachEvent", i = "on");
            var s = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== o ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == s ? n[e](i + "MozMousePixelScroll", _t, !1) : n[e](i + s, _t, !1)
        }

        function Vn() {
            Ci.on("mousedown", dn).on("mouseup", fn)
        }

        function Xn() {
            Ci.off("mousedown", dn).off("mouseup", fn)
        }

        function Gn() {
            (vi || yi) && (r.autoScrolling && ui.off(Ai.touchmove).on(Ai.touchmove, Pt), e(a).off(Ai.touchstart).on(Ai.touchstart, Qt).off(Ai.touchmove).on(Ai.touchmove, zt))
        }

        function Kn() {
            (vi || yi) && e(a).off(Ai.touchstart).off(Ai.touchmove)
        }

        function Jn() {
            var e;
            return e = t.PointerEvent ? {down: "pointerdown", move: "pointermove"} : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function Zn(e) {
            var t = [];
            return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, yi && Rt(e) && r.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
        }

        function ei(e, t) {
            V(0, "internal"), "undefined" != typeof t && (bi = !0), Cn(e.closest(z), e), "undefined" != typeof t && (bi = !1), V(Bi.scrollingSpeed, "internal")
        }

        function ti(e) {
            var t = i.round(e);
            if (r.css3 && r.autoScrolling && !r.scrollBar) {
                var n = "translate3d(0px, -" + t + "px, 0px)";
                On(n, !1)
            } else r.autoScrolling && !r.scrollBar ? Ci.css("top", -t) : ci.scrollTop(t)
        }

        function ni(e) {
            return {"-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e}
        }

        function ii(e, t, n) {
            switch (t) {
                case"up":
                    Li[n].up = e;
                    break;
                case"down":
                    Li[n].down = e;
                    break;
                case"left":
                    Li[n].left = e;
                    break;
                case"right":
                    Li[n].right = e;
                    break;
                case"all":
                    "m" == n ? at(e) : rt(e)
            }
        }

        function oi(t) {
            l(!1, "internal"), at(!1), rt(!1), Ci.addClass(d), clearTimeout(Mi), clearTimeout(Ti), clearTimeout(xi), clearTimeout(Di), clearTimeout($i), tt.off("scroll", Et).off("hashchange", rn).off("resize", wn), nt.off("click touchstart", D + " a").off("mouseenter", D + " li").off("mouseleave", D + " li").off("click touchstart", N).off("mouseover", r.normalScrollElements).off("mouseout", r.normalScrollElements), e(k).off("click touchstart", W), clearTimeout(Mi), clearTimeout(Ti), t && si()
        }

        function si() {
            ti(0), Ci.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                Zt(e(this), "src")
            }), Ci.find("img[data-srcset]").each(function () {
                Zt(e(this), "srcset")
            }), e(D + ", " + _ + ", " + W).remove(), e(k).css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(O).css({width: ""}), Ci.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), ci.css({
                overflow: "",
                height: ""
            }), e("html").removeClass(f), ui.removeClass(c), e.each(ui.get(0).className.split(/\s+/), function (e, t) {
                0 === t.indexOf(h) && ui.removeClass(t)
            }), e(k + ", " + O).each(function () {
                r.scrollOverflowHandler.remove(e(this)), e(this).removeClass(Q + " " + p)
            }), xn(Ci), Ci.find(L + ", " + R + ", " + z).each(function () {
                e(this).replaceWith(this.childNodes)
            }), Ci.css({"-webkit-transition": "none", transition: "none"}), ci.scrollTop(0);
            var t = [C, B, H];
            e.each(t, function (t, n) {
                e("." + n).removeClass(n)
            })
        }

        function ai(e, t, n) {
            r[e] = t, "internal" !== n && (Bi[e] = t)
        }

        function ri() {
            var t = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"];
            return e("html").hasClass(f) ? void li("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (r.continuousVertical && (r.loopTop || r.loopBottom) && (r.continuousVertical = !1, li("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), r.scrollBar && r.scrollOverflow && li("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !r.continuousVertical || !r.scrollBar && r.autoScrolling || (r.continuousVertical = !1, li("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(t, function (e, t) {
                r[t] && li("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + t)
            }), void e.each(r.anchors, function (t, n) {
                var i = nt.find("[name]").filter(function () {
                    return e(this).attr("name") && e(this).attr("name").toLowerCase() == n.toLowerCase()
                }), o = nt.find("[id]").filter(function () {
                    return e(this).attr("id") && e(this).attr("id").toLowerCase() == n.toLowerCase()
                });
                (o.length || i.length) && (li("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), o.length && li("error", '"' + n + '" is is being used by another element `id` property'), i.length && li("error", '"' + n + '" is is being used by another element `name` property'))
            }))
        }

        function li(e, t) {
            console && console[e] && console[e]("fullPage: " + t)
        }

        if (e("html").hasClass(f)) return void ri();
        var ci = e("html, body"), ui = e("body"), di = e.fn.fullpage;
        r = e.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !1,
            scrollHorizontally: !1,
            interlockedSlides: !1,
            dragAndMove: !1,
            offsetSections: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowReset: !1,
            scrollOverflowHandler: ot,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            parallax: !1,
            parallaxOptions: {type: "reveal", percentage: 62, property: "translate"},
            sectionSelector: y,
            slideSelector: A,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,
            lazyLoading: !0
        }, r);
        var fi, hi, pi, gi, mi = !1,
            vi = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            yi = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, Ci = e(this),
            ki = tt.height(), bi = !1, Si = !0, wi = !0, Fi = [], Li = {};
        Li.m = {up: !0, down: !0, left: !0, right: !0}, Li.k = e.extend(!0, {}, Li.m);
        var xi, Ti, Mi, Di, $i, Ii, Ei = Jn(), Ai = {
            touchmove: "ontouchmove" in t ? "touchmove" : Ei.move,
            touchstart: "ontouchstart" in t ? "touchstart" : Ei.down
        }, Bi = e.extend(!0, {}, r);
        ri(), it.click = yi, it = e.extend(it, r.scrollOverflowOptions), e.extend(e.easing, {
            easeInOutCubic: function (e, t, n, i, o) {
                return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
            }
        }), e(this).length && (di.setAutoScrolling = l, di.setRecordHistory = Y, di.setScrollingSpeed = V, di.setFitToSection = K, di.setLockAnchors = J, di.setMouseWheelScrolling = st, di.setAllowScrolling = at, di.setKeyboardScrolling = rt, di.moveSectionUp = lt, di.moveSectionDown = ct, di.silentMoveTo = ut, di.moveTo = dt, di.moveSlideRight = ft, di.moveSlideLeft = ht, di.fitToSection = At, di.reBuild = pt, di.setResponsive = gt, di.destroy = oi, mt(), vt());
        var Oi = !1, ji = 0, Pi = 0, zi = 0, Hi = 0, Ri = 0, Qi = (new Date).getTime(), qi = 0, _i = 0, Ni = ki
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
    }, IScroll.prototype.wheelOff = function () {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
    });
    var ot = {
        refreshId: null, iScrollInstances: [], toggleWheel: function (t) {
            var n = e(b).find(l);
            n.each(function () {
                var n = e(this).data("iscrollInstance");
                "undefined" != typeof n && n && (t ? n.wheelOn() : n.wheelOff())
            })
        }, onLeave: function () {
            ot.toggleWheel(!1)
        }, beforeLeave: function () {
            ot.onLeave()
        }, afterLoad: function () {
            ot.toggleWheel(!0)
        }, create: function (t, n) {
            var i = t.find(l);
            i.height(n), i.each(function () {
                var t = e(this), n = t.data("iscrollInstance");
                n && e.each(ot.iScrollInstances, function () {
                    e(this).destroy()
                }), n = new IScroll(t.get(0), it), ot.iScrollInstances.push(n), n.wheelOff(), t.data("iscrollInstance", n)
            })
        }, isScrolled: function (e, t) {
            var n = t.data("iscrollInstance");
            return n ? "top" === e ? n.y >= 0 && !t.scrollTop() : "bottom" === e ? 0 - n.y + t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0 : !0
        }, scrollable: function (e) {
            return e.find(z).length ? e.find(j).find(l) : e.find(l)
        }, scrollHeight: function (e) {
            return e.find(l).children().first().get(0).scrollHeight
        }, remove: function (e) {
            var t = e.find(l);
            if (t.length) {
                var n = t.data("iscrollInstance");
                n.destroy(), t.data("iscrollInstance", null)
            }
            e.find(l).children().first().children().first().unwrap().unwrap()
        }, update: function (t, n) {
            clearTimeout(ot.refreshId), ot.refreshId = setTimeout(function () {
                e.each(ot.iScrollInstances, function () {
                    e(this).get(0).refresh()
                })
            }, 150), t.find(l).css("height", n + "px").parent().css("height", n + "px")
        }, wrapContent: function () {
            return '<div class="' + r + '"><div class="fp-scroller"></div></div>'
        }
    }
}), !function (e) {
    e.fn.hover3d = function (t) {
        var n = e.extend({
            selector: null,
            perspective: 1e3,
            sensitivity: 20,
            invert: !1,
            shine: !1,
            hoverInClass: "hover-in",
            hoverOutClass: "hover-out",
            hoverClass: "hover-3d"
        }, t);
        return this.each(function () {
            function t() {
                a.addClass(n.hoverInClass + " " + n.hoverClass), currentX = currentY = 0, setTimeout(function () {
                    a.removeClass(n.hoverInClass)
                }, 1e3)
            }

            function i(e) {
                var t = a.innerWidth(), i = a.innerHeight(), o = Math.round(e.pageX - a.offset().left),
                    s = Math.round(e.pageY - a.offset().top),
                    l = n.invert ? (t / 2 - o) / n.sensitivity : -(t / 2 - o) / n.sensitivity,
                    c = n.invert ? -(i / 2 - s) / n.sensitivity : (i / 2 - s) / n.sensitivity, u = o - t / 2,
                    d = s - i / 2, f = Math.atan2(d, u), h = 180 * f / Math.PI - 90;
                0 > h && (h += 360), a.css({
                    perspective: n.perspective + "px",
                    transformStyle: "preserve-3d",
                    transform: "rotateY(" + l + "deg) rotateX(" + c + "deg)"
                }), r.css("background", "linear-gradient(" + h + "deg, rgba(255,255,255," + e.offsetY / i * .5 + ") 0%,rgba(255,255,255,0) 80%)")
            }

            function o() {
                a.addClass(n.hoverOutClass + " " + n.hoverClass), a.css({
                    perspective: n.perspective + "px",
                    transformStyle: "preserve-3d",
                    transform: "rotateX(0) rotateY(0)"
                }), setTimeout(function () {
                    a.removeClass(n.hoverOutClass + " " + n.hoverClass), currentX = currentY = 0
                }, 1e3)
            }

            var s = e(this), a = s.find(n.selector);
            currentX = 0, currentY = 0, n.shine && a.append('<div class="shine"></div>');
            var r = e(this).find(".shine");
            s.css({
                perspective: n.perspective + "px",
                transformStyle: "preserve-3d"
            }), a.css({perspective: n.perspective + "px", transformStyle: "preserve-3d"}), r.css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                transform: "translateZ(1px)",
                "z-index": 9
            }), s.on("mouseenter", function () {
                return t()
            }), s.on("mousemove", function (e) {
                return i(e)
            }), s.on("mouseleave", function () {
                return o()
            })
        })
    }
}(jQuery);
var Base = function () {
};
Base.extend = function (e, t) {
    "use strict";
    var n = Base.prototype.extend;
    Base._prototyping = !0;
    var i = new this;
    n.call(i, e), i.base = function () {
    }, delete Base._prototyping;
    var o = i.constructor, s = i.constructor = function () {
        if (!Base._prototyping) if (this._constructing || this.constructor == s) this._constructing = !0, o.apply(this, arguments), delete this._constructing; else if (null !== arguments[0]) return (arguments[0].extend || n).call(arguments[0], i)
    };
    return s.ancestor = this, s.extend = this.extend, s.forEach = this.forEach, s.implement = this.implement, s.prototype = i, s.toString = this.toString, s.valueOf = function (e) {
        return "object" == e ? s : o.valueOf()
    }, n.call(s, t), "function" == typeof s.init && s.init(), s
}, Base.prototype = {
    extend: function (e, t) {
        if (arguments.length > 1) {
            var n = this[e];
            if (n && "function" == typeof t && (!n.valueOf || n.valueOf() != t.valueOf()) && /\bbase\b/.test(t)) {
                var i = t.valueOf();
                t = function () {
                    var e = this.base || Base.prototype.base;
                    this.base = n;
                    var t = i.apply(this, arguments);
                    return this.base = e, t
                }, t.valueOf = function (e) {
                    return "object" == e ? t : i
                }, t.toString = Base.toString
            }
            this[e] = t
        } else if (e) {
            var o = Base.prototype.extend;
            Base._prototyping || "function" == typeof this || (o = this.extend || o);
            for (var s = {toSource: null}, a = ["constructor", "toString", "valueOf"], r = Base._prototyping ? 0 : 1; l = a[r++];) e[l] != s[l] && o.call(this, l, e[l]);
            for (var l in e) s[l] || o.call(this, l, e[l])
        }
        return this
    }
}, Base = Base.extend({
    constructor: function () {
        this.extend(arguments[0])
    }
}, {
    ancestor: Object, version: "1.1", forEach: function (e, t, n) {
        for (var i in e) void 0 === this.prototype[i] && t.call(n, e[i], i, e)
    }, implement: function () {
        for (var e = 0; e < arguments.length; e++) "function" == typeof arguments[e] ? arguments[e](this.prototype) : this.prototype.extend(arguments[e]);
        return this
    }, toString: function () {
        return String(this.valueOf())
    }
});
var FlipClock;
!function (e) {
    "use strict";
    FlipClock = function (e, t, n) {
        return t instanceof Object && t instanceof Date == 0 && (n = t, t = 0), new FlipClock.Factory(e, t, n)
    }, FlipClock.Lang = {}, FlipClock.Base = Base.extend({
        buildDate: "2014-12-12",
        version: "0.7.7",
        constructor: function (t, n) {
            "object" != typeof t && (t = {}), "object" != typeof n && (n = {}), this.setOptions(e.extend(!0, {}, t, n))
        },
        callback: function (e) {
            if ("function" == typeof e) {
                for (var t = [], n = 1; n <= arguments.length; n++) arguments[n] && t.push(arguments[n]);
                e.apply(this, t)
            }
        },
        log: function (e) {
            window.console && console.log && console.log(e)
        },
        getOption: function (e) {
            return this[e] ? this[e] : !1
        },
        getOptions: function () {
            return this
        },
        setOption: function (e, t) {
            this[e] = t
        },
        setOptions: function (e) {
            for (var t in e) "undefined" != typeof e[t] && this.setOption(t, e[t])
        }
    })
}(jQuery), function (e) {
    "use strict";
    FlipClock.Face = FlipClock.Base.extend({
        autoStart: !0,
        dividers: [],
        factory: !1,
        lists: [],
        constructor: function (e, t) {
            this.dividers = [], this.lists = [], this.base(t), this.factory = e
        },
        build: function () {
            this.autoStart && this.start()
        },
        createDivider: function (t, n, i) {
            "boolean" != typeof n && n || (i = n, n = t);
            var o = ['<span class="' + this.factory.classes.dot + ' top"></span>', '<span class="' + this.factory.classes.dot + ' bottom"></span>'].join("");
            i && (o = ""), t = this.factory.localize(t);
            var s = ['<span class="' + this.factory.classes.divider + " " + (n ? n : "").toLowerCase() + '">', '<span class="' + this.factory.classes.label + '">' + (t ? t : "") + "</span>", o, "</span>"],
                a = e(s.join(""));
            return this.dividers.push(a), a
        },
        createList: function (e, t) {
            "object" == typeof e && (t = e, e = 0);
            var n = new FlipClock.List(this.factory, e, t);
            return this.lists.push(n), n
        },
        reset: function () {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0, {minimumDigits: this.factory.minimumDigits}), this.flip(this.factory.original, !1)
        },
        appendDigitToClock: function (e) {
            e.$el.append(!1)
        },
        addDigit: function (e) {
            var t = this.createList(e, {
                classes: {
                    active: this.factory.classes.active,
                    before: this.factory.classes.before,
                    flip: this.factory.classes.flip
                }
            });
            this.appendDigitToClock(t)
        },
        start: function () {
        },
        stop: function () {
        },
        autoIncrement: function () {
            this.factory.countdown ? this.decrement() : this.increment()
        },
        increment: function () {
            this.factory.time.addSecond()
        },
        decrement: function () {
            0 == this.factory.time.getTimeSeconds() ? this.factory.stop() : this.factory.time.subSecond()
        },
        flip: function (t, n) {
            var i = this;
            e.each(t, function (e, t) {
                var o = i.lists[e];
                o ? (n || t == o.digit || o.play(), o.select(t)) : i.addDigit(t)
            })
        }
    })
}(jQuery), function (e) {
    "use strict";
    FlipClock.Factory = FlipClock.Base.extend({
        animationRate: 1e3,
        autoStart: !0,
        callbacks: {destroy: !1, create: !1, init: !1, interval: !1, start: !1, stop: !1, reset: !1},
        classes: {
            active: "flip-clock-active",
            before: "flip-clock-before",
            divider: "flip-clock-divider",
            dot: "flip-clock-dot",
            label: "flip-clock-label",
            flip: "flip",
            play: "play",
            wrapper: "flip-clock-wrapper"
        },
        clockFace: "HourlyCounter",
        countdown: !1,
        defaultClockFace: "HourlyCounter",
        defaultLanguage: "english",
        $el: !1,
        face: !0,
        lang: !1,
        language: "english",
        minimumDigits: 0,
        original: !1,
        running: !1,
        time: !1,
        timer: !1,
        $wrapper: !1,
        constructor: function (t, n, i) {
            i || (i = {}), this.lists = [], this.running = !1, this.base(i), this.$el = e(t).addClass(this.classes.wrapper), this.$wrapper = this.$el, this.original = n instanceof Date ? n : n ? Math.round(n) : 0, this.time = new FlipClock.Time(this, this.original, {
                minimumDigits: this.minimumDigits,
                animationRate: this.animationRate
            }), this.timer = new FlipClock.Timer(this, i), this.loadLanguage(this.language), this.loadClockFace(this.clockFace, i), this.autoStart && this.start()
        },
        loadClockFace: function (e, t) {
            var n, i = "Face", o = !1;
            return e = e.ucfirst() + i, this.face.stop && (this.stop(), o = !0), this.$el.html(""), this.time.minimumDigits = this.minimumDigits, n = FlipClock[e] ? new FlipClock[e](this, t) : new FlipClock[this.defaultClockFace + i](this, t), n.build(), this.face = n, o && this.start(), this.face
        },
        loadLanguage: function (e) {
            var t;
            return t = FlipClock.Lang[e.ucfirst()] ? FlipClock.Lang[e.ucfirst()] : FlipClock.Lang[e] ? FlipClock.Lang[e] : FlipClock.Lang[this.defaultLanguage], this.lang = t
        },
        localize: function (e, t) {
            var n = this.lang;
            if (!e) return null;
            var i = e.toLowerCase();
            return "object" == typeof t && (n = t), n && n[i] ? n[i] : e
        },
        start: function (e) {
            var t = this;
            t.running || t.countdown && !(t.countdown && t.time.time > 0) ? t.log("Trying to start timer when countdown already at 0") : (t.face.start(t.time), t.timer.start(function () {
                t.flip(), "function" == typeof e && e()
            }))
        },
        stop: function (e) {
            this.face.stop(), this.timer.stop(e);
            for (var t in this.lists) this.lists.hasOwnProperty(t) && this.lists[t].stop()
        },
        reset: function (e) {
            this.timer.reset(e), this.face.reset()
        },
        setTime: function (e) {
            this.time.time = e, this.flip(!0)
        },
        getTime: function () {
            return this.time
        },
        setCountdown: function (e) {
            var t = this.running;
            this.countdown = e ? !0 : !1, t && (this.stop(), this.start())
        },
        flip: function (e) {
            this.face.flip(!1, e)
        }
    })
}(jQuery), function (e) {
    "use strict";
    FlipClock.List = FlipClock.Base.extend({
        digit: 0,
        classes: {active: "flip-clock-active", before: "flip-clock-before", flip: "flip"},
        factory: !1,
        $el: !1,
        $obj: !1,
        items: [],
        lastDigit: 0,
        constructor: function (e, t) {
            this.factory = e, this.digit = t, this.lastDigit = t, this.$el = this.createList(), this.$obj = this.$el, t > 0 && this.select(t), this.factory.$el.append(this.$el)
        },
        select: function (e) {
            if ("undefined" == typeof e ? e = this.digit : this.digit = e, this.digit != this.lastDigit) {
                var t = this.$el.find("." + this.classes.before).removeClass(this.classes.before);
                this.$el.find("." + this.classes.active).removeClass(this.classes.active).addClass(this.classes.before), this.appendListItem(this.classes.active, this.digit), t.remove(), this.lastDigit = this.digit
            }
        },
        play: function () {
            this.$el.addClass(this.factory.classes.play)
        },
        stop: function () {
            var e = this;
            setTimeout(function () {
                e.$el.removeClass(e.factory.classes.play)
            }, this.factory.timer.interval)
        },
        createListItem: function (e, t) {
            return ['<li class="' + (e ? e : "") + '">', '<a href="#">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + (t ? t : "") + "</div>", "</div>", '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + (t ? t : "") + "</div>", "</div>", "</a>", "</li>"].join("")
        },
        appendListItem: function (e, t) {
            var n = this.createListItem(e, t);
            this.$el.append(n)
        },
        createList: function () {
            var t = this.getPrevDigit() ? this.getPrevDigit() : this.digit,
                n = e(['<ul class="' + this.classes.flip + " " + (this.factory.running ? this.factory.classes.play : "") + '">', this.createListItem(this.classes.before, t), this.createListItem(this.classes.active, this.digit), "</ul>"].join(""));
            return n
        },
        getNextDigit: function () {
            return 9 == this.digit ? 0 : this.digit + 1
        },
        getPrevDigit: function () {
            return 0 == this.digit ? 9 : this.digit - 1
        }
    })
}(jQuery), function (e) {
    "use strict";
    String.prototype.ucfirst = function () {
        return this.substr(0, 1).toUpperCase() + this.substr(1)
    }, e.fn.FlipClock = function (t, n) {
        return new FlipClock(e(this), t, n)
    }, e.fn.flipClock = function (t, n) {
        return e.fn.FlipClock(t, n)
    }
}(jQuery), function (e) {
    "use strict";
    FlipClock.Time = FlipClock.Base.extend({
        time: 0, factory: !1, minimumDigits: 0, constructor: function (e, t, n) {
            "object" != typeof n && (n = {}), n.minimumDigits || (n.minimumDigits = e.minimumDigits), this.base(n), this.factory = e, t && (this.time = t)
        }, convertDigitsToArray: function (e) {
            var t = [];
            e = e.toString();
            for (var n = 0; n < e.length; n++) e[n].match(/^\d*$/g) && t.push(e[n]);
            return t
        }, digit: function (e) {
            var t = this.toString(), n = t.length;
            return t[n - e] ? t[n - e] : !1
        }, digitize: function (t) {
            var n = [];
            if (e.each(t, function (e, t) {
                t = t.toString(), 1 == t.length && (t = "0" + t);
                for (var i = 0; i < t.length; i++) n.push(t.charAt(i))
            }), n.length > this.minimumDigits && (this.minimumDigits = n.length), this.minimumDigits > n.length) for (var i = n.length; i < this.minimumDigits; i++) n.unshift("0");
            return n
        }, getDateObject: function () {
            return this.time instanceof Date ? this.time : new Date((new Date).getTime() + 1e3 * this.getTimeSeconds())
        }, getDayCounter: function (e) {
            var t = [this.getDays(), this.getHours(!0), this.getMinutes(!0)];
            return e && t.push(this.getSeconds(!0)), this.digitize(t)
        }, getDays: function (e) {
            var t = this.getTimeSeconds() / 60 / 60 / 24;
            return e && (t %= 7), Math.floor(t)
        }, getHourCounter: function () {
            var e = this.digitize([this.getHours(), this.getMinutes(!0), this.getSeconds(!0)]);
            return e
        }, getHourly: function () {
            return this.getHourCounter()
        }, getHours: function (e) {
            var t = this.getTimeSeconds() / 60 / 60;
            return e && (t %= 24), Math.floor(t)
        }, getMilitaryTime: function (e, t) {
            "undefined" == typeof t && (t = !0), e || (e = this.getDateObject());
            var n = [e.getHours(), e.getMinutes()];
            return t === !0 && n.push(e.getSeconds()), this.digitize(n)
        }, getMinutes: function (e) {
            var t = this.getTimeSeconds() / 60;
            return e && (t %= 60), Math.floor(t)
        }, getMinuteCounter: function () {
            var e = this.digitize([this.getMinutes(), this.getSeconds(!0)]);
            return e
        }, getTimeSeconds: function (e) {
            return e || (e = new Date), this.time instanceof Date ? this.factory.countdown ? Math.max(this.time.getTime() / 1e3 - e.getTime() / 1e3, 0) : e.getTime() / 1e3 - this.time.getTime() / 1e3 : this.time
        }, getTime: function (e, t) {
            "undefined" == typeof t && (t = !0), e || (e = this.getDateObject()), console.log(e);
            var n = e.getHours(), i = [n > 12 ? n - 12 : 0 === n ? 12 : n, e.getMinutes()];
            return t === !0 && i.push(e.getSeconds()), this.digitize(i)
        }, getSeconds: function (e) {
            var t = this.getTimeSeconds();
            return e && (60 == t ? t = 0 : t %= 60), Math.ceil(t)
        }, getWeeks: function (e) {
            var t = this.getTimeSeconds() / 60 / 60 / 24 / 7;
            return e && (t %= 52), Math.floor(t)
        }, removeLeadingZeros: function (t, n) {
            var i = 0, o = [];
            return e.each(n, function (e) {
                t > e ? i += parseInt(n[e], 10) : o.push(n[e])
            }), 0 === i ? o : n
        }, addSeconds: function (e) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() + e) : this.time += e
        }, addSecond: function () {
            this.addSeconds(1)
        }, subSeconds: function (e) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() - e) : this.time -= e
        }, subSecond: function () {
            this.subSeconds(1)
        }, toString: function () {
            return this.getTimeSeconds().toString()
        }
    })
}(jQuery), function () {
    "use strict";
    FlipClock.Timer = FlipClock.Base.extend({
        callbacks: {
            destroy: !1,
            create: !1,
            init: !1,
            interval: !1,
            start: !1,
            stop: !1,
            reset: !1
        }, count: 0, factory: !1, interval: 1e3, animationRate: 1e3, constructor: function (e, t) {
            this.base(t), this.factory = e, this.callback(this.callbacks.init), this.callback(this.callbacks.create)
        }, getElapsed: function () {
            return this.count * this.interval
        }, getElapsedTime: function () {
            return new Date(this.time + this.getElapsed())
        }, reset: function (e) {
            clearInterval(this.timer), this.count = 0, this._setInterval(e), this.callback(this.callbacks.reset)
        }, start: function (e) {
            this.factory.running = !0, this._createTimer(e), this.callback(this.callbacks.start)
        }, stop: function (e) {
            this.factory.running = !1, this._clearInterval(e), this.callback(this.callbacks.stop), this.callback(e)
        }, _clearInterval: function () {
            clearInterval(this.timer)
        }, _createTimer: function (e) {
            this._setInterval(e)
        }, _destroyTimer: function (e) {
            this._clearInterval(), this.timer = !1, this.callback(e), this.callback(this.callbacks.destroy)
        }, _interval: function (e) {
            this.callback(this.callbacks.interval), this.callback(e), this.count++
        }, _setInterval: function (e) {
            var t = this;
            t._interval(e), t.timer = setInterval(function () {
                t._interval(e)
            }, this.interval)
        }
    })
}(jQuery), function (e) {
    FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({
        constructor: function (e, t) {
            this.base(e, t)
        }, build: function (t) {
            var n = this, i = this.factory.$el.find("ul");
            this.factory.time.time || (this.factory.original = new Date, this.factory.time = new FlipClock.Time(this.factory, this.factory.original));
            var t = t ? t : this.factory.time.getMilitaryTime(!1, this.showSeconds);
            t.length > i.length && e.each(t, function (e, t) {
                n.createList(t)
            }), this.createDivider(), this.createDivider(), e(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el), e(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el), this.base()
        }, flip: function (e, t) {
            this.autoIncrement(), e = e ? e : this.factory.time.getMilitaryTime(!1, this.showSeconds), this.base(e, t)
        }
    })
}(jQuery), function (e) {
    FlipClock.CounterFace = FlipClock.Face.extend({
        shouldAutoIncrement: !1, constructor: function (e, t) {
            "object" != typeof t && (t = {}), e.autoStart = t.autoStart ? !0 : !1, t.autoStart && (this.shouldAutoIncrement = !0), e.increment = function () {
                e.countdown = !1, e.setTime(e.getTime().getTimeSeconds() + 1)
            }, e.decrement = function () {
                e.countdown = !0;
                var t = e.getTime().getTimeSeconds();
                t > 0 && e.setTime(t - 1)
            }, e.setValue = function (t) {
                e.setTime(t)
            }, e.setCounter = function (t) {
                e.setTime(t)
            }, this.base(e, t)
        }, build: function () {
            var t = this, n = this.factory.$el.find("ul"),
                i = this.factory.getTime().digitize([this.factory.getTime().time]);
            i.length > n.length && e.each(i, function (e, n) {
                var i = t.createList(n);
                i.select(n)
            }), e.each(this.lists, function (e, t) {
                t.play()
            }), this.base()
        }, flip: function (e, t) {
            this.shouldAutoIncrement && this.autoIncrement(), e || (e = this.factory.getTime().digitize([this.factory.getTime().time])), this.base(e, t)
        }, reset: function () {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0), this.flip()
        }
    })
}(jQuery), function (e) {
    FlipClock.DailyCounterFace = FlipClock.Face.extend({
        showSeconds: !0, constructor: function (e, t) {
            this.base(e, t)
        }, build: function (t) {
            var n = this, i = this.factory.$el.find("ul"), o = 0;
            t = t ? t : this.factory.time.getDayCounter(this.showSeconds), t.length > i.length && e.each(t, function (e, t) {
                n.createList(t)
            }), this.showSeconds ? e(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el) : o = 2, e(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4 + o].$el), e(this.createDivider("Hours")).insertBefore(this.lists[this.lists.length - 6 + o].$el), e(this.createDivider("Days", !0)).insertBefore(this.lists[0].$el), this.base()
        }, flip: function (e, t) {
            e || (e = this.factory.time.getDayCounter(this.showSeconds)), this.autoIncrement(), this.base(e, t)
        }
    })
}(jQuery), function (e) {
    FlipClock.HourlyCounterFace = FlipClock.Face.extend({
        constructor: function (e, t) {
            this.base(e, t)
        }, build: function (t, n) {
            var i = this, o = this.factory.$el.find("ul");
            n = n ? n : this.factory.time.getHourCounter(), n.length > o.length && e.each(n, function (e, t) {
                i.createList(t)
            }), e(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el), e(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4].$el), t || e(this.createDivider("Hours", !0)).insertBefore(this.lists[0].$el), this.base()
        }, flip: function (e, t) {
            e || (e = this.factory.time.getHourCounter()), this.autoIncrement(), this.base(e, t)
        }, appendDigitToClock: function (e) {
            this.base(e), this.dividers[0].insertAfter(this.dividers[0].next())
        }
    })
}(jQuery), function () {
    FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({
        clearExcessDigits: !1,
        constructor: function (e, t) {
            this.base(e, t)
        },
        build: function () {
            this.base(!0, this.factory.time.getMinuteCounter())
        },
        flip: function (e, t) {
            e || (e = this.factory.time.getMinuteCounter()), this.base(e, t)
        }
    })
}(jQuery), function (e) {
    FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
        meridium: !1,
        meridiumText: "AM",
        build: function () {
            var t = this.factory.time.getTime(!1, this.showSeconds);
            this.base(t), this.meridiumText = this.getMeridium(), this.meridium = e(['<ul class="flip-clock-meridium">', "<li>", '<a href="#">' + this.meridiumText + "</a>", "</li>", "</ul>"].join("")), this.meridium.insertAfter(this.lists[this.lists.length - 1].$el)
        },
        flip: function (e, t) {
            this.meridiumText != this.getMeridium() && (this.meridiumText = this.getMeridium(), this.meridium.find("a").html(this.meridiumText)), this.base(this.factory.time.getTime(!1, this.showSeconds), t)
        },
        getMeridium: function () {
            return (new Date).getHours() >= 12 ? "PM" : "AM"
        },
        isPM: function () {
            return "PM" == this.getMeridium() ? !0 : !1
        },
        isAM: function () {
            return "AM" == this.getMeridium() ? !0 : !1
        }
    })
}(jQuery), function () {
    FlipClock.Lang.Arabic = {
        years: "سنوات",
        months: "شهور",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني"
    }, FlipClock.Lang.ar = FlipClock.Lang.Arabic, FlipClock.Lang["ar-ar"] = FlipClock.Lang.Arabic, FlipClock.Lang.arabic = FlipClock.Lang.Arabic
}(jQuery), function () {
    FlipClock.Lang.Danish = {
        years: "År",
        months: "Måneder",
        days: "Dage",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.da = FlipClock.Lang.Danish, FlipClock.Lang["da-dk"] = FlipClock.Lang.Danish, FlipClock.Lang.danish = FlipClock.Lang.Danish
}(jQuery), function () {
    FlipClock.Lang.German = {
        years: "Jahre",
        months: "Monate",
        days: "Tage",
        hours: "Stunden",
        minutes: "Minuten",
        seconds: "Sekunden"
    }, FlipClock.Lang.de = FlipClock.Lang.German, FlipClock.Lang["de-de"] = FlipClock.Lang.German, FlipClock.Lang.german = FlipClock.Lang.German
}(jQuery), function () {
    FlipClock.Lang.English = {
        years: "Years",
        months: "Months",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds"
    }, FlipClock.Lang.en = FlipClock.Lang.English, FlipClock.Lang["en-us"] = FlipClock.Lang.English, FlipClock.Lang.english = FlipClock.Lang.English
}(jQuery), function () {
    FlipClock.Lang.Spanish = {
        years: "Años",
        months: "Meses",
        days: "Días",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos"
    }, FlipClock.Lang.es = FlipClock.Lang.Spanish, FlipClock.Lang["es-es"] = FlipClock.Lang.Spanish, FlipClock.Lang.spanish = FlipClock.Lang.Spanish
}(jQuery), function () {
    FlipClock.Lang.Finnish = {
        years: "Vuotta",
        months: "Kuukautta",
        days: "Päivää",
        hours: "Tuntia",
        minutes: "Minuuttia",
        seconds: "Sekuntia"
    }, FlipClock.Lang.fi = FlipClock.Lang.Finnish, FlipClock.Lang["fi-fi"] = FlipClock.Lang.Finnish, FlipClock.Lang.finnish = FlipClock.Lang.Finnish
}(jQuery), function () {
    FlipClock.Lang.French = {
        years: "Ans",
        months: "Mois",
        days: "Jours",
        hours: "Heures",
        minutes: "Minutes",
        seconds: "Secondes"
    }, FlipClock.Lang.fr = FlipClock.Lang.French, FlipClock.Lang["fr-ca"] = FlipClock.Lang.French, FlipClock.Lang.french = FlipClock.Lang.French
}(jQuery), function () {
    FlipClock.Lang.Italian = {
        years: "Anni",
        months: "Mesi",
        days: "Giorni",
        hours: "Ore",
        minutes: "Minuti",
        seconds: "Secondi"
    }, FlipClock.Lang.it = FlipClock.Lang.Italian, FlipClock.Lang["it-it"] = FlipClock.Lang.Italian, FlipClock.Lang.italian = FlipClock.Lang.Italian
}(jQuery), function () {
    FlipClock.Lang.Latvian = {
        years: "Gadi",
        months: "Mēneši",
        days: "Dienas",
        hours: "Stundas",
        minutes: "Minūtes",
        seconds: "Sekundes"
    }, FlipClock.Lang.lv = FlipClock.Lang.Latvian, FlipClock.Lang["lv-lv"] = FlipClock.Lang.Latvian, FlipClock.Lang.latvian = FlipClock.Lang.Latvian
}(jQuery), function () {
    FlipClock.Lang.Dutch = {
        years: "Jaren",
        months: "Maanden",
        days: "Dagen",
        hours: "Uren",
        minutes: "Minuten",
        seconds: "Seconden"
    }, FlipClock.Lang.nl = FlipClock.Lang.Dutch, FlipClock.Lang["nl-be"] = FlipClock.Lang.Dutch, FlipClock.Lang.dutch = FlipClock.Lang.Dutch
}(jQuery), function () {
    FlipClock.Lang.Norwegian = {
        years: "År",
        months: "Måneder",
        days: "Dager",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.no = FlipClock.Lang.Norwegian, FlipClock.Lang.nb = FlipClock.Lang.Norwegian, FlipClock.Lang["no-nb"] = FlipClock.Lang.Norwegian, FlipClock.Lang.norwegian = FlipClock.Lang.Norwegian
}(jQuery), function () {
    FlipClock.Lang.Portuguese = {
        years: "Anos",
        months: "Meses",
        days: "Dias",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos"
    }, FlipClock.Lang.pt = FlipClock.Lang.Portuguese, FlipClock.Lang["pt-br"] = FlipClock.Lang.Portuguese, FlipClock.Lang.portuguese = FlipClock.Lang.Portuguese
}(jQuery), function () {
    FlipClock.Lang.Russian = {
        years: "лет",
        months: "месяцев",
        days: "дней",
        hours: "часов",
        minutes: "минут",
        seconds: "секунд"
    }, FlipClock.Lang.ru = FlipClock.Lang.Russian, FlipClock.Lang["ru-ru"] = FlipClock.Lang.Russian, FlipClock.Lang.russian = FlipClock.Lang.Russian
}(jQuery), function () {
    FlipClock.Lang.Swedish = {
        years: "År",
        months: "Månader",
        days: "Dagar",
        hours: "Timmar",
        minutes: "Minuter",
        seconds: "Sekunder"
    }, FlipClock.Lang.sv = FlipClock.Lang.Swedish, FlipClock.Lang["sv-se"] = FlipClock.Lang.Swedish, FlipClock.Lang.swedish = FlipClock.Lang.Swedish
}(jQuery), function () {
    FlipClock.Lang.Chinese = {
        years: "年",
        months: "月",
        days: "日",
        hours: "时",
        minutes: "分",
        seconds: "秒"
    }, FlipClock.Lang.zh = FlipClock.Lang.Chinese, FlipClock.Lang["zh-cn"] = FlipClock.Lang.Chinese, FlipClock.Lang.chinese = FlipClock.Lang.Chinese
}(jQuery), function () {
    "use strict";
    var e = "undefined" != typeof module && module.exports,
        t = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element, n = function () {
            for (var e, t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, i = t.length, o = {}; i > n; n++) if (e = t[n], e && e[1] in document) {
                for (n = 0; n < e.length; n++) o[t[0][n]] = e[n];
                return o
            }
            return !1
        }(), i = {
            request: function (e) {
                var i = n.requestFullscreen;
                e = e || document.documentElement, /5\.1[.\d]* Safari/.test(navigator.userAgent) ? e[i]() : e[i](t && Element.ALLOW_KEYBOARD_INPUT)
            }, exit: function () {
                document[n.exitFullscreen]()
            }, toggle: function (e) {
                this.isFullscreen ? this.exit() : this.request(e)
            }, onchange: function (e) {
                document.addEventListener(n.fullscreenchange, e, !1)
            }, onerror: function (e) {
                document.addEventListener(n.fullscreenerror, e, !1)
            }, raw: n
        };
    return n ? (Object.defineProperties(i, {
        isFullscreen: {
            get: function () {
                return Boolean(document[n.fullscreenElement])
            }
        }, element: {
            enumerable: !0, get: function () {
                return document[n.fullscreenElement]
            }
        }, enabled: {
            enumerable: !0, get: function () {
                return Boolean(document[n.fullscreenEnabled])
            }
        }
    }), void(e ? module.exports = i : window.screenfull = i)) : void(e ? module.exports = !1 : window.screenfull = !1)
}();
var jsBeginTime = new Date, resloaded = 0, ismobile = !1, isnowpop = !1, introed = !1, stormed = !1, debug = !1;
if (debug) {
    var style = '<style>.fixedcon>*{transition-delay: 0s;}.fullpage{pointer-events:none;}zbody:after{content:"";width: 100%;height: 1px;background: #fff;position: fixed;z-index: 9999;top: 50%;left: 0px;}zbody:before{content:"";width: 1px;height: 100%;background: #fff;position: fixed;z-index: 9999;top: 0px;left: 50%;}</style>';
    $("head").append(style)
}
"undefined" != typeof NotifyMe && (NotifyMe.myAlert = function (e) {
    console.log(e), alert(0 === e.n ? "您已预约，不需要再次预约！" : 1 === e.n ? "已成功预约UP2017直播，我们会在直播开始前通过QQ消息提醒您观看！" : 2 === e.n ? "很抱歉，可能是系统繁忙，请稍后再试！" : "可能不在活动时间，请稍后再试:" + e.n)
}), $("#remindme").on("click", function (e) {
    tryPgvSendClick({hottag: "a20170301pre.btn.remind"}), e.preventDefault(), doReg(23786)
});
var touchclick = "touchstart" in document ? "touchstart" : "click";
$(window).on("resize orientationchange", adjustSize), adjustSize(), /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? (tryPgvSendClick({hottag: "a20170301pre.support.mobile"}), ismobile = !0, $("body").addClass("mobile"), $(".loadingwrapper").hide(), setTimeout(function () {
    $(".loadingwrapper").show()
}, 1e3), document.title = "UP2017腾讯互娱年度发布会") : tryPgvSendClick({hottag: "a20170301pre.support.notmobile"}), $("#fullpage .dot").prepend("<b></b>"), $("#pop .pop-close").on("click", function () {
    isnowpop = !1, $("#pop").removeClass("show tall"), $.fn.fullpage.setAllowScrolling(!0)
}), $("#pop").on("click", function () {
    setTimeout(function () {
        isnowpop = !1, $("#pop").removeClass("show tall"), $.fn.fullpage.setAllowScrolling(!0)
    }, 500)
}), $(".dot").on("click", function () {
    var e = $("#fullpage .active").index("#fullpage .section"), t = this.className.match(/dot-(\d)/)[1] || 99;
    tryPgvSendClick({hottag: "a20170301pre.btn.dot" + e + t});
    var n = $(".popimg", this).data("src"), i = $(".popimg", this).data("href"), o = null !== n.match(/tall/gi);
    console.log(n, i, o, e + t), pop(n, i, o)
}), $(window).on("load", function () {
    tryPgvSendClick({hottag: "a20170301pre.page.loaded"})
}), $("body").on("resloaded", function () {
    console.log("resloaded"), tryPgvSendClick({hottag: "a20170301pre.page.resloaded"});
    var e = new Date - jsBeginTime, t = e > 4500 ? 0 : 4500 - e;
    $("body").addClass("resloaded"), ismobile ? setTimeout(function () {
        $(".loadingtxt i").hide(), $(".btn-introbox").addClass("show"), $("#loading").one(touchclick, function () {
            introBox(), skipIntrobox(), $("body").addClass("fadeloading"), $("body").trigger("fadeloading"), setTimeout(function () {
                $("body").addClass("hideloading")
            }, debug ? 0 : 3e3)
        })
    }, debug ? 0 : t) : (setTimeout(function () {
        $("body").trigger("fadeloading"), $("body").addClass("fadeloading")
    }, debug ? 0 : t), setTimeout(function () {
        $(".loadingtxt i").hide(), $("body").addClass("hideloading")
    }, debug ? 0 : t + 2e3), setTimeout(function () {
        $(".skipintro").removeClass("hide")
    }, debug ? 0 : t + 1e3), setTimeout(function () {
        $(".skipintro").addClass("show")
    }, debug ? 0 : t + 1100), introBox(), skipIntrobox())
}), location.hash = "", $("body").on("fadeloading", function () {
    $('#loading').animate({opacity:0},500);
    console.log("introed"), $(this).addClass("introed"), initFullpage(), tryPgvSendClick({hottag: "a20170301pre.page.introed"}), introed = !0, startStorm(), setTimeout(function () {
        toggleParticle(0), setTimeout(function () {
            $.fn.fullpage.setAllowScrolling(!0)
        }, 1000)
    }, 1500)
}), $("body").on("resloading", function () {
    $(".loadingtxt i").text(parseInt(100 * resloaded) + "%")
}), $("#pop").hover3d({sensitivity: 100, selector: ".pop-in", shine: !0});
var clock, od;
if ($(document).ready(function () {
    var e = new Date, t = new Date(2017, 3, 20, 10), n = t.getTime() / 1e3 - e.getTime() / 1e3;
    0 > n && (n = 0)
}), "undefined" != typeof Audio) {
   /* tryPgvSendClick({hottag: "a20170301pre.support.audio"});
    var mySound = new Audio("//game.gtimg.cn/images/up/act/a20170301pre/media/bg.mp3");
    mySound.loop = !0, mySound.play(), $(".btn-introbox").on("click", function () {
        mySound.play()
    }), $(".control .music").addClass("show").on("click", function () {
        mySound.paused ? (mySound.play(), $(this).removeClass("mute")) : (mySound.pause(), $(this).addClass("mute"))
    })*/
}
screenfull.enabled && (tryPgvSendClick({hottag: "a20170301pre.support.screenfull"}), $(".control .fullsc").addClass("show").click(function () {
    screenfull.toggle(), $(this).toggleClass("enabled")
})), supportWebGL ? (tryPgvSendClick(ismobile ? {hottag: "a20170301pre.support.mobilewebglyes"} : {hottag: "a20170301pre.support.pcwebglyes"}), $.getScript("//game.gtimg.cn/images/up/act/a20170301pre/js/pkg/webgl_ea9cb39.js", function () {
}), $("body").addClass("webglyes")) : (tryPgvSendClick(ismobile ? {hottag: "a20170301pre.support.mobilewebglno"} : {hottag: "a20170301pre.support.pcwebglno"}), toggleParticle = function () {
}, $("body").addClass("webglno"), $("body").addClass("introed"), $("body").addClass("resloaded"), $("body").addClass("hideloading"), $(".chromeframe").addClass("show"), initFullpage(), tryPgvSendClick({hottag: "a20170301pre.page.introed"}), introed = !0), $(".skipintro").one(touchclick, function () {
    skipIntrobox(), $(this).removeClass("show"), $(this).addClass("hide")
}), $(".qrcode").on("mouseenter", function () {
    tryPgvSendClick({hottag: "a20170301pre.btn.qrcodeshow"}), toggleParticle(5), $("body").addClass("qring")
}).on("mouseleave", function () {
    tryPgvSendClick({hottag: "a20170301pre.btn.qrcodehide"});
    var e = $("#fullpage .active").index("#fullpage .section");
    (0 > e || e > 5) && (e = 0), toggleParticle(e), $("body").removeClass("qring")
});