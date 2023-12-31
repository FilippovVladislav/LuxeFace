(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                      Object.prototype.hasOwnProperty.call(i, n) &&
                        (e[n] = i[n]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            i =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            n = t && "IntersectionObserver" in window,
            s = t && "classList" in document.createElement("p"),
            o = t && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: i || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            r = function (t) {
              return e({}, a, t);
            },
            l = function (e, t) {
              var i,
                n = "LazyLoad::Initialized",
                s = new e(t);
              try {
                i = new CustomEvent(n, { detail: { instance: s } });
              } catch (e) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  n,
                  !1,
                  !1,
                  { instance: s }
                );
              }
              window.dispatchEvent(i);
            },
            c = "src",
            d = "srcset",
            h = "sizes",
            u = "poster",
            p = "llOriginalAttrs",
            f = "data",
            g = "loading",
            m = "loaded",
            v = "applied",
            b = "error",
            y = "native",
            w = "data-",
            x = "ll-status",
            E = function (e, t) {
              return e.getAttribute(w + t);
            },
            S = function (e) {
              return E(e, x);
            },
            C = function (e, t) {
              return (function (e, t, i) {
                var n = "data-ll-status";
                null !== i ? e.setAttribute(n, i) : e.removeAttribute(n);
              })(e, 0, t);
            },
            T = function (e) {
              return C(e, null);
            },
            P = function (e) {
              return null === S(e);
            },
            M = function (e) {
              return S(e) === y;
            },
            O = [g, m, v, b],
            L = function (e, t, i, n) {
              e &&
                "function" == typeof e &&
                (void 0 === n ? (void 0 === i ? e(t) : e(t, i)) : e(t, i, n));
            },
            k = function (e, t) {
              s
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            A = function (e, t) {
              s
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            I = function (e) {
              return e.llTempImage;
            },
            z = function (e, t) {
              if (t) {
                var i = t._observer;
                i && i.unobserve(e);
              }
            },
            $ = function (e, t) {
              e && (e.loadingCount += t);
            },
            _ = function (e, t) {
              e && (e.toLoadCount = t);
            },
            D = function (e) {
              for (var t, i = [], n = 0; (t = e.children[n]); n += 1)
                "SOURCE" === t.tagName && i.push(t);
              return i;
            },
            R = function (e, t) {
              var i = e.parentNode;
              i && "PICTURE" === i.tagName && D(i).forEach(t);
            },
            F = function (e, t) {
              D(e).forEach(t);
            },
            B = [c],
            j = [c, u],
            N = [c, d, h],
            H = [f],
            q = function (e) {
              return !!e[p];
            },
            W = function (e) {
              return e[p];
            },
            G = function (e) {
              return delete e[p];
            },
            V = function (e, t) {
              if (!q(e)) {
                var i = {};
                t.forEach(function (t) {
                  i[t] = e.getAttribute(t);
                }),
                  (e[p] = i);
              }
            },
            X = function (e, t) {
              if (q(e)) {
                var i = W(e);
                t.forEach(function (t) {
                  !(function (e, t, i) {
                    i ? e.setAttribute(t, i) : e.removeAttribute(t);
                  })(e, t, i[t]);
                });
              }
            },
            Y = function (e, t, i) {
              k(e, t.class_applied),
                C(e, v),
                i &&
                  (t.unobserve_completed && z(e, t),
                  L(t.callback_applied, e, i));
            },
            U = function (e, t, i) {
              k(e, t.class_loading),
                C(e, g),
                i && ($(i, 1), L(t.callback_loading, e, i));
            },
            Z = function (e, t, i) {
              i && e.setAttribute(t, i);
            },
            K = function (e, t) {
              Z(e, h, E(e, t.data_sizes)),
                Z(e, d, E(e, t.data_srcset)),
                Z(e, c, E(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                R(e, function (e) {
                  V(e, N), K(e, t);
                }),
                  V(e, N),
                  K(e, t);
              },
              IFRAME: function (e, t) {
                V(e, B), Z(e, c, E(e, t.data_src));
              },
              VIDEO: function (e, t) {
                F(e, function (e) {
                  V(e, B), Z(e, c, E(e, t.data_src));
                }),
                  V(e, j),
                  Z(e, u, E(e, t.data_poster)),
                  Z(e, c, E(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                V(e, H), Z(e, f, E(e, t.data_src));
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                L(e.callback_finish, t);
            },
            te = function (e, t, i) {
              e.addEventListener(t, i), (e.llEvLisnrs[t] = i);
            },
            ie = function (e, t, i) {
              e.removeEventListener(t, i);
            },
            ne = function (e) {
              return !!e.llEvLisnrs;
            },
            se = function (e) {
              if (ne(e)) {
                var t = e.llEvLisnrs;
                for (var i in t) {
                  var n = t[i];
                  ie(e, i, n);
                }
                delete e.llEvLisnrs;
              }
            },
            oe = function (e, t, i) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                $(i, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(i),
                A(e, t.class_loading),
                t.unobserve_completed && z(e, i);
            },
            ae = function (e, t, i) {
              var n = I(e) || e;
              ne(n) ||
                (function (e, t, i) {
                  ne(e) || (e.llEvLisnrs = {});
                  var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, n, t), te(e, "error", i);
                })(
                  n,
                  function (s) {
                    !(function (e, t, i, n) {
                      var s = M(t);
                      oe(t, i, n),
                        k(t, i.class_loaded),
                        C(t, m),
                        L(i.callback_loaded, t, n),
                        s || ee(i, n);
                    })(0, e, t, i),
                      se(n);
                  },
                  function (s) {
                    !(function (e, t, i, n) {
                      var s = M(t);
                      oe(t, i, n),
                        k(t, i.class_error),
                        C(t, b),
                        L(i.callback_error, t, n),
                        i.restore_on_error && X(t, N),
                        s || ee(i, n);
                    })(0, e, t, i),
                      se(n);
                  }
                );
            },
            re = function (e, t, i) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, i) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      ae(e, t, i),
                      (function (e) {
                        q(e) ||
                          (e[p] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, i) {
                        var n = E(e, t.data_bg),
                          s = E(e, t.data_bg_hidpi),
                          a = o && s ? s : n;
                        a &&
                          ((e.style.backgroundImage = 'url("'.concat(a, '")')),
                          I(e).setAttribute(c, a),
                          U(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var n = E(e, t.data_bg_multi),
                          s = E(e, t.data_bg_multi_hidpi),
                          a = o && s ? s : n;
                        a && ((e.style.backgroundImage = a), Y(e, t, i));
                      })(e, t, i),
                      (function (e, t, i) {
                        var n = E(e, t.data_bg_set);
                        if (n) {
                          var s = n.split("|"),
                            o = s.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = o.join()),
                            "" === e.style.backgroundImage &&
                              ((o = s.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = o.join())),
                            Y(e, t, i);
                        }
                      })(e, t, i);
                  })(e, t, i)
                : (function (e, t, i) {
                    ae(e, t, i),
                      (function (e, t, i) {
                        var n = J[e.tagName];
                        n && (n(e, t), U(e, t, i));
                      })(e, t, i);
                  })(e, t, i);
            },
            le = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(h);
            },
            ce = function (e) {
              R(e, function (e) {
                X(e, N);
              }),
                X(e, N);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                X(e, B);
              },
              VIDEO: function (e) {
                F(e, function (e) {
                  X(e, B);
                }),
                  X(e, j),
                  e.load();
              },
              OBJECT: function (e) {
                X(e, H);
              },
            },
            he = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (q(e)) {
                        var t = W(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  P(e) ||
                    M(e) ||
                    (A(e, t.class_entered),
                    A(e, t.class_exited),
                    A(e, t.class_applied),
                    A(e, t.class_loading),
                    A(e, t.class_loaded),
                    A(e, t.class_error));
                })(e, t),
                T(e),
                G(e);
            },
            ue = ["IMG", "IFRAME", "VIDEO"],
            pe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            fe = function (e, t, i) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, i, n) {
                      var s = (function (e) {
                        return O.indexOf(S(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        k(e, i.class_entered),
                        A(e, i.class_exited),
                        (function (e, t, i) {
                          t.unobserve_entered && z(e, i);
                        })(e, i, n),
                        L(i.callback_enter, e, t, n),
                        s || re(e, i, n);
                    })(e.target, e, t, i)
                  : (function (e, t, i, n) {
                      P(e) ||
                        (k(e, i.class_exited),
                        (function (e, t, i, n) {
                          i.cancel_on_exit &&
                            (function (e) {
                              return S(e) === g;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (se(e),
                            (function (e) {
                              R(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            ce(e),
                            A(e, i.class_loading),
                            $(n, -1),
                            T(e),
                            L(i.callback_cancel, e, t, n));
                        })(e, t, i, n),
                        L(i.callback_exit, e, t, n));
                    })(e.target, e, t, i);
              });
            },
            ge = function (e) {
              return Array.prototype.slice.call(e);
            },
            me = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return S(e) === b;
              })(e);
            },
            be = function (e, t) {
              return (function (e) {
                return ge(e).filter(P);
              })(e || me(t));
            },
            ye = function (e, i) {
              var s = r(e);
              (this._settings = s),
                (this.loadingCount = 0),
                (function (e, t) {
                  n &&
                    !pe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (i) {
                        fe(i, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(s, this),
                (function (e, i) {
                  t &&
                    ((i._onlineHandler = function () {
                      !(function (e, t) {
                        var i;
                        ((i = me(e)), ge(i).filter(ve)).forEach(function (t) {
                          A(t, e.class_error), T(t);
                        }),
                          t.update();
                      })(e, i);
                    }),
                    window.addEventListener("online", i._onlineHandler));
                })(s, this),
                this.update(i);
            };
          return (
            (ye.prototype = {
              update: function (e) {
                var t,
                  s,
                  o = this._settings,
                  a = be(e, o);
                _(this, a.length),
                  !i && n
                    ? pe(o)
                      ? (function (e, t, i) {
                          e.forEach(function (e) {
                            -1 !== ue.indexOf(e.tagName) &&
                              (function (e, t, i) {
                                e.setAttribute("loading", "lazy"),
                                  ae(e, t, i),
                                  (function (e, t) {
                                    var i = J[e.tagName];
                                    i && i(e, t);
                                  })(e, t),
                                  C(e, y);
                              })(e, t, i);
                          }),
                            _(i, 0);
                        })(a, o, this)
                      : ((s = a),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, s))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  me(this._settings).forEach(function (e) {
                    G(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  i = this._settings;
                be(e, i).forEach(function (e) {
                  z(e, t), re(e, i, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                me(e).forEach(function (t) {
                  he(t, e);
                });
              },
            }),
            (ye.load = function (e, t) {
              var i = r(t);
              re(e, i);
            }),
            (ye.resetStatus = function (e) {
              T(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var i, n = 0; (i = t[n]); n += 1) l(e, i);
                  else l(e, t);
              })(ye, window.lazyLoadOptions),
            ye
          );
        })();
      },
    },
    t = {};
  function i(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var o = (t[n] = { exports: {} });
    return e[n].call(o.exports, o, o.exports, i), o.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = !0,
      n = (e = 500) => {
        document.documentElement.classList.contains("lock") ? s(e) : o(e);
      },
      s = (e = 500) => {
        let i = document.querySelector("body");
        if (t) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight = "0px";
            }
            (i.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      },
      o = (e = 500) => {
        let i = document.querySelector("body");
        if (t) {
          let n = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (i.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    function a(e) {
      setTimeout(() => {
        window.FLS;
      }, 0);
    }
    function r(e) {
      return e.filter(function (e, t, i) {
        return i.indexOf(e) === t;
      });
    }
    (e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup-modal",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const i = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${i}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : n(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            t &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              n(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          i = Array.prototype.slice.call(t),
          n = i.indexOf(document.activeElement);
        e.shiftKey && 0 === n && (i[i.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            n !== i.length - 1 ||
            (i[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && a();
      }
    })({})),
      (window.flsModules = e);
    function l(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function c(e = {}, t = {}) {
      Object.keys(t).forEach((i) => {
        void 0 === e[i]
          ? (e[i] = t[i])
          : l(t[i]) && l(e[i]) && Object.keys(t[i]).length > 0 && c(e[i], t[i]);
      });
    }
    const d = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function h() {
      const e = "undefined" != typeof document ? document : {};
      return c(e, d), e;
    }
    const u = {
      document: d,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function p() {
      const e = "undefined" != typeof window ? window : {};
      return c(e, u), e;
    }
    class f extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function g(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...g(e)) : t.push(e);
        }),
        t
      );
    }
    function m(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function v(e, t) {
      const i = p(),
        n = h();
      let s = [];
      if (!t && e instanceof f) return e;
      if (!e) return new f(s);
      if ("string" == typeof e) {
        const i = e.trim();
        if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
          let e = "div";
          0 === i.indexOf("<li") && (e = "ul"),
            0 === i.indexOf("<tr") && (e = "tbody"),
            (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
            0 === i.indexOf("<tbody") && (e = "table"),
            0 === i.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = i;
          for (let e = 0; e < t.childNodes.length; e += 1)
            s.push(t.childNodes[e]);
        } else
          s = (function (e, t) {
            if ("string" != typeof e) return [e];
            const i = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) i.push(n[e]);
            return i;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === i || e === n) s.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof f) return e;
        s = e;
      }
      return new f(
        (function (e) {
          const t = [];
          for (let i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
          return t;
        })(s)
      );
    }
    v.fn = f.prototype;
    const b = "resize scroll".split(" ");
    function y(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            b.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : v(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    y("click"),
      y("blur"),
      y("focus"),
      y("focusin"),
      y("focusout"),
      y("keyup"),
      y("keydown"),
      y("keypress"),
      y("submit"),
      y("change"),
      y("mousedown"),
      y("mousemove"),
      y("mouseup"),
      y("mouseenter"),
      y("mouseleave"),
      y("mouseout"),
      y("mouseover"),
      y("touchstart"),
      y("touchend"),
      y("touchmove"),
      y("resize"),
      y("scroll");
    const w = {
      addClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          m(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (const t in e)
              (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, i, n, s] = e;
        function o(e) {
          const t = e.target;
          if (!t) return;
          const s = e.target.dom7EventData || [];
          if ((s.indexOf(e) < 0 && s.unshift(e), v(t).is(i))) n.apply(t, s);
          else {
            const e = v(t).parents();
            for (let t = 0; t < e.length; t += 1)
              v(e[t]).is(i) && n.apply(e[t], s);
          }
        }
        function a(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, s] = e), (i = void 0)),
          s || (s = !1);
        const r = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (i)
            for (l = 0; l < r.length; l += 1) {
              const e = r[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: o }),
                t.addEventListener(e, o, s);
            }
          else
            for (l = 0; l < r.length; l += 1) {
              const e = r[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: a }),
                t.addEventListener(e, a, s);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, i, n, s] = e;
        "function" == typeof e[1] && (([t, n, s] = e), (i = void 0)),
          s || (s = !1);
        const o = t.split(" ");
        for (let e = 0; e < o.length; e += 1) {
          const t = o[e];
          for (let e = 0; e < this.length; e += 1) {
            const o = this[e];
            let a;
            if (
              (!i && o.dom7Listeners
                ? (a = o.dom7Listeners[t])
                : i && o.dom7LiveListeners && (a = o.dom7LiveListeners[t]),
              a && a.length)
            )
              for (let e = a.length - 1; e >= 0; e -= 1) {
                const i = a[e];
                (n && i.listener === n) ||
                (n &&
                  i.listener &&
                  i.listener.dom7proxy &&
                  i.listener.dom7proxy === n)
                  ? (o.removeEventListener(t, i.proxyListener, s),
                    a.splice(e, 1))
                  : n ||
                    (o.removeEventListener(t, i.proxyListener, s),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = p(),
          i = e[0].split(" "),
          n = e[1];
        for (let s = 0; s < i.length; s += 1) {
          const o = i[s];
          for (let i = 0; i < this.length; i += 1) {
            const s = this[i];
            if (t.CustomEvent) {
              const i = new t.CustomEvent(o, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (s.dom7EventData = e.filter((e, t) => t > 0)),
                s.dispatchEvent(i),
                (s.dom7EventData = []),
                delete s.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function i(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", i));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = p();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = p(),
            t = h(),
            i = this[0],
            n = i.getBoundingClientRect(),
            s = t.body,
            o = i.clientTop || s.clientTop || 0,
            a = i.clientLeft || s.clientLeft || 0,
            r = i === e ? e.scrollY : i.scrollTop,
            l = i === e ? e.scrollX : i.scrollLeft;
          return { top: n.top + r - o, left: n.left + l - a };
        }
        return null;
      },
      css: function (e, t) {
        const i = p();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, i) => {
              e.apply(t, [t, i]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = p(),
          i = h(),
          n = this[0];
        let s, o;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (s = v(e), o = 0; o < s.length; o += 1) if (s[o] === n) return !0;
          return !1;
        }
        if (e === i) return n === i;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof f) {
          for (s = e.nodeType ? [e] : e, o = 0; o < s.length; o += 1)
            if (s[o] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return v([]);
        if (e < 0) {
          const i = t + e;
          return v(i < 0 ? [] : [this[i]]);
        }
        return v([this[e]]);
      },
      append: function (...e) {
        let t;
        const i = h();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = i.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof f)
              for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = h();
        let i, n;
        for (i = 0; i < this.length; i += 1)
          if ("string" == typeof e) {
            const s = t.createElement("div");
            for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n -= 1)
              this[i].insertBefore(s.childNodes[n], this[i].childNodes[0]);
          } else if (e instanceof f)
            for (n = 0; n < e.length; n += 1)
              this[i].insertBefore(e[n], this[i].childNodes[0]);
          else this[i].insertBefore(e, this[i].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && v(this[0].nextElementSibling).is(e)
              ? v([this[0].nextElementSibling])
              : v([])
            : this[0].nextElementSibling
            ? v([this[0].nextElementSibling])
            : v([])
          : v([]);
      },
      nextAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return v([]);
        for (; i.nextElementSibling; ) {
          const n = i.nextElementSibling;
          e ? v(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return v(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && v(t.previousElementSibling).is(e)
              ? v([t.previousElementSibling])
              : v([])
            : t.previousElementSibling
            ? v([t.previousElementSibling])
            : v([]);
        }
        return v([]);
      },
      prevAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return v([]);
        for (; i.previousElementSibling; ) {
          const n = i.previousElementSibling;
          e ? v(n).is(e) && t.push(n) : t.push(n), (i = n);
        }
        return v(t);
      },
      parent: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? v(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return v(t);
      },
      parents: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          let n = this[i].parentNode;
          for (; n; )
            e ? v(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return v(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? v([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return v(t);
      },
      children: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const n = this[i].children;
          for (let i = 0; i < n.length; i += 1)
            (e && !v(n[i]).is(e)) || t.push(n[i]);
        }
        return v(t);
      },
      filter: function (e) {
        return v(m(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(w).forEach((e) => {
      Object.defineProperty(v.fn, e, { value: w[e], writable: !0 });
    });
    const x = v;
    function E(e, t = 0) {
      return setTimeout(e, t);
    }
    function S() {
      return Date.now();
    }
    function C(e, t = "x") {
      const i = p();
      let n, s, o;
      const a = (function (e) {
        const t = p();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((s = a.transform || a.webkitTransform),
            s.split(",").length > 6 &&
              (s = s
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (o = new i.WebKitCSSMatrix("none" === s ? "" : s)))
          : ((o =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = o.toString().split(","))),
        "x" === t &&
          (s = i.WebKitCSSMatrix
            ? o.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        "y" === t &&
          (s = i.WebKitCSSMatrix
            ? o.m42
            : 16 === n.length
            ? parseFloat(n[13])
            : parseFloat(n[5])),
        s || 0
      );
    }
    function T(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function P(...e) {
      const t = Object(e[0]),
        i = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < e.length; s += 1) {
        const o = e[s];
        if (
          null != o &&
          ((n = o),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? n instanceof HTMLElement
            : n && (1 === n.nodeType || 11 === n.nodeType)))
        ) {
          const e = Object.keys(Object(o)).filter((e) => i.indexOf(e) < 0);
          for (let i = 0, n = e.length; i < n; i += 1) {
            const n = e[i],
              s = Object.getOwnPropertyDescriptor(o, n);
            void 0 !== s &&
              s.enumerable &&
              (T(t[n]) && T(o[n])
                ? o[n].__swiper__
                  ? (t[n] = o[n])
                  : P(t[n], o[n])
                : !T(t[n]) && T(o[n])
                ? ((t[n] = {}), o[n].__swiper__ ? (t[n] = o[n]) : P(t[n], o[n]))
                : (t[n] = o[n]));
          }
        }
      }
      var n;
      return t;
    }
    function M(e, t, i) {
      e.style.setProperty(t, i);
    }
    function O({ swiper: e, targetPosition: t, side: i }) {
      const n = p(),
        s = -e.translate;
      let o,
        a = null;
      const r = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > s ? "next" : "prev",
        c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        d = () => {
          (o = new Date().getTime()), null === a && (a = o);
          const l = Math.max(Math.min((o - a) / r, 1), 0),
            h = 0.5 - Math.cos(l * Math.PI) / 2;
          let u = s + h * (t - s);
          if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [i]: u }), c(u, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [i]: u });
              }),
              void n.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = n.requestAnimationFrame(d);
        };
      d();
    }
    let L, k, A;
    function I() {
      return (
        L ||
          (L = (function () {
            const e = p(),
              t = h();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const i = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, i);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        L
      );
    }
    function z(e = {}) {
      return (
        k ||
          (k = (function ({ userAgent: e } = {}) {
            const t = I(),
              i = p(),
              n = i.navigator.platform,
              s = e || i.navigator.userAgent,
              o = { ios: !1, android: !1 },
              a = i.screen.width,
              r = i.screen.height,
              l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = s.match(/(iPad).*OS\s([\d_]+)/);
            const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              u = "Win32" === n;
            let f = "MacIntel" === n;
            return (
              !c &&
                f &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${r}`) >= 0 &&
                ((c = s.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (f = !1)),
              l && !u && ((o.os = "android"), (o.android = !0)),
              (c || h || d) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        k
      );
    }
    function $() {
      return (
        A ||
          (A = (function () {
            const e = p();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        A
      );
    }
    const _ = {
      on(e, t, i) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        const s = i ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][s](t);
          }),
          n
        );
      },
      once(e, t, i) {
        const n = this;
        if (!n.eventsListeners || n.destroyed) return n;
        if ("function" != typeof t) return n;
        function s(...i) {
          n.off(e, s),
            s.__emitterProxy && delete s.__emitterProxy,
            t.apply(n, i);
        }
        return (s.__emitterProxy = t), n.on(e, s, i);
      },
      onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof e) return i;
        const n = t ? "unshift" : "push";
        return (
          i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[n](e), i
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
      },
      off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed
          ? i
          : i.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (i.eventsListeners[e] = [])
                : i.eventsListeners[e] &&
                  i.eventsListeners[e].forEach((n, s) => {
                    (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                      i.eventsListeners[e].splice(s, 1);
                  });
            }),
            i)
          : i;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let i, n, s;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((i = e[0]), (n = e.slice(1, e.length)), (s = t))
          : ((i = e[0].events), (n = e[0].data), (s = e[0].context || t)),
          n.unshift(s);
        return (
          (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(s, [e, ...n]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(s, n);
                });
          }),
          t
        );
      },
    };
    const D = {
      updateSize: function () {
        const e = this;
        let t, i;
        const n = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n[0].clientWidth),
          (i =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === i && e.isVertical()) ||
            ((t =
              t -
              parseInt(n.css("padding-left") || 0, 10) -
              parseInt(n.css("padding-right") || 0, 10)),
            (i =
              i -
              parseInt(n.css("padding-top") || 0, 10) -
              parseInt(n.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
              width: t,
              height: i,
              size: e.isHorizontal() ? t : i,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function i(e, i) {
          return parseFloat(e.getPropertyValue(t(i)) || 0);
        }
        const n = e.params,
          { $wrapperEl: s, size: o, rtlTranslate: a, wrongRTL: r } = e,
          l = e.virtual && n.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = s.children(`.${e.params.slideClass}`),
          h = l ? e.virtual.slides.length : d.length;
        let u = [];
        const p = [],
          f = [];
        let g = n.slidesOffsetBefore;
        "function" == typeof g && (g = n.slidesOffsetBefore.call(e));
        let m = n.slidesOffsetAfter;
        "function" == typeof m && (m = n.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let y = n.spaceBetween,
          w = -g,
          x = 0,
          E = 0;
        if (void 0 === o) return;
        "string" == typeof y &&
          y.indexOf("%") >= 0 &&
          (y = (parseFloat(y.replace("%", "")) / 100) * o),
          (e.virtualSize = -y),
          a
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          n.centeredSlides &&
            n.cssMode &&
            (M(e.wrapperEl, "--swiper-centered-offset-before", ""),
            M(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const S = n.grid && n.grid.rows > 1 && e.grid;
        let C;
        S && e.grid.initSlides(h);
        const T =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let s = 0; s < h; s += 1) {
          C = 0;
          const a = d.eq(s);
          if (
            (S && e.grid.updateSlide(s, a, h, t), "none" !== a.css("display"))
          ) {
            if ("auto" === n.slidesPerView) {
              T && (d[s].style[t("width")] = "");
              const o = getComputedStyle(a[0]),
                r = a[0].style.transform,
                l = a[0].style.webkitTransform;
              if (
                (r && (a[0].style.transform = "none"),
                l && (a[0].style.webkitTransform = "none"),
                n.roundLengths)
              )
                C = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
              else {
                const e = i(o, "width"),
                  t = i(o, "padding-left"),
                  n = i(o, "padding-right"),
                  s = i(o, "margin-left"),
                  r = i(o, "margin-right"),
                  l = o.getPropertyValue("box-sizing");
                if (l && "border-box" === l) C = e + s + r;
                else {
                  const { clientWidth: i, offsetWidth: o } = a[0];
                  C = e + t + n + s + r + (o - i);
                }
              }
              r && (a[0].style.transform = r),
                l && (a[0].style.webkitTransform = l),
                n.roundLengths && (C = Math.floor(C));
            } else
              (C = (o - (n.slidesPerView - 1) * y) / n.slidesPerView),
                n.roundLengths && (C = Math.floor(C)),
                d[s] && (d[s].style[t("width")] = `${C}px`);
            d[s] && (d[s].swiperSlideSize = C),
              f.push(C),
              n.centeredSlides
                ? ((w = w + C / 2 + x / 2 + y),
                  0 === x && 0 !== s && (w = w - o / 2 - y),
                  0 === s && (w = w - o / 2 - y),
                  Math.abs(w) < 0.001 && (w = 0),
                  n.roundLengths && (w = Math.floor(w)),
                  E % n.slidesPerGroup == 0 && u.push(w),
                  p.push(w))
                : (n.roundLengths && (w = Math.floor(w)),
                  (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                    e.params.slidesPerGroup ==
                    0 && u.push(w),
                  p.push(w),
                  (w = w + C + y)),
              (e.virtualSize += C + y),
              (x = C),
              (E += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, o) + m),
          a &&
            r &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            s.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
          n.setWrapperSize &&
            s.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
          S && e.grid.updateWrapperSize(C, u, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let i = 0; i < u.length; i += 1) {
            let s = u[i];
            n.roundLengths && (s = Math.floor(s)),
              u[i] <= e.virtualSize - o && t.push(s);
          }
          (u = t),
            Math.floor(e.virtualSize - o) - Math.floor(u[u.length - 1]) > 1 &&
              u.push(e.virtualSize - o);
        }
        if ((0 === u.length && (u = [0]), 0 !== n.spaceBetween)) {
          const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !n.cssMode || t !== d.length - 1).css({
            [i]: `${y}px`,
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
            (e -= n.spaceBetween);
          const t = e - o;
          u = u.map((e) => (e < 0 ? -g : e > t ? t + m : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
            (e -= n.spaceBetween),
            e < o)
          ) {
            const t = (o - e) / 2;
            u.forEach((e, i) => {
              u[i] = e - t;
            }),
              p.forEach((e, i) => {
                p[i] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: u,
            slidesGrid: p,
            slidesSizesGrid: f,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          M(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
            M(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            i = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + i));
        }
        if (
          (h !== c && e.emit("slidesLengthChange"),
          u.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          p.length !== b && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || n.cssMode || ("slide" !== n.effect && "fade" !== n.effect)))
        ) {
          const t = `${n.containerModifierClass}backface-hidden`,
            i = e.$el.hasClass(t);
          h <= n.maxBackfaceHiddenSlides
            ? i || e.$el.addClass(t)
            : i && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          i = [],
          n = t.virtual && t.params.virtual.enabled;
        let s,
          o = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) =>
          n
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || x([])).each((e) => {
              i.push(e);
            });
          else
            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
              const e = t.activeIndex + s;
              if (e > t.slides.length && !n) break;
              i.push(a(e));
            }
        else i.push(a(t.activeIndex));
        for (s = 0; s < i.length; s += 1)
          if (void 0 !== i[s]) {
            const e = i[s].offsetHeight;
            o = e > o ? e : o;
          }
        (o || 0 === o) && t.$wrapperEl.css("height", `${o}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset = e.isHorizontal()
            ? t[i].offsetLeft
            : t[i].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          i = t.params,
          { slides: n, rtlTranslate: s, snapGrid: o } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        s && (a = e),
          n.removeClass(i.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const r = n[e];
          let l = r.swiperSlideOffset;
          i.cssMode && i.centeredSlides && (l -= n[0].swiperSlideOffset);
          const c =
              (a + (i.centeredSlides ? t.minTranslate() : 0) - l) /
              (r.swiperSlideSize + i.spaceBetween),
            d =
              (a - o[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
              (r.swiperSlideSize + i.spaceBetween),
            h = -(a - l),
            u = h + t.slidesSizesGrid[e];
          ((h >= 0 && h < t.size - 1) ||
            (u > 1 && u <= t.size) ||
            (h <= 0 && u >= t.size)) &&
            (t.visibleSlides.push(r),
            t.visibleSlidesIndexes.push(e),
            n.eq(e).addClass(i.slideVisibleClass)),
            (r.progress = s ? -c : c),
            (r.originalProgress = s ? -d : d);
        }
        t.visibleSlides = x(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const i = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * i) || 0;
        }
        const i = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: s, isBeginning: o, isEnd: a } = t;
        const r = o,
          l = a;
        0 === n
          ? ((s = 0), (o = !0), (a = !0))
          : ((s = (e - t.minTranslate()) / n), (o = s <= 0), (a = s >= 1)),
          Object.assign(t, { progress: s, isBeginning: o, isEnd: a }),
          (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          o && !r && t.emit("reachBeginning toEdge"),
          a && !l && t.emit("reachEnd toEdge"),
          ((r && !o) || (l && !a)) && t.emit("fromEdge"),
          t.emit("progress", s);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: i,
            $wrapperEl: n,
            activeIndex: s,
            realIndex: o,
          } = e,
          a = e.virtual && i.virtual.enabled;
        let r;
        t.removeClass(
          `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
        ),
          (r = a
            ? e.$wrapperEl.find(
                `.${i.slideClass}[data-swiper-slide-index="${s}"]`
              )
            : t.eq(s)),
          r.addClass(i.slideActiveClass),
          i.loop &&
            (r.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass)
              : n
                  .children(
                    `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o}"]`
                  )
                  .addClass(i.slideDuplicateActiveClass));
        let l = r.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
        i.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(i.slideNextClass));
        let c = r.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
        i.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(i.slidePrevClass)),
          i.loop &&
            (l.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass)
              : n
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicateNextClass),
            c.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    `.${i.slideClass}:not(.${
                      i.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass)
              : n
                  .children(
                    `.${i.slideClass}.${
                      i.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(i.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: n,
            snapGrid: s,
            params: o,
            activeIndex: a,
            realIndex: r,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < n.length; e += 1)
            void 0 !== n[e + 1]
              ? i >= n[e] && i < n[e + 1] - (n[e + 1] - n[e]) / 2
                ? (d = e)
                : i >= n[e] && i < n[e + 1] && (d = e + 1)
              : i >= n[e] && (d = e);
          o.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (s.indexOf(i) >= 0) c = s.indexOf(i);
        else {
          const e = Math.min(o.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / o.slidesPerGroup);
        }
        if ((c >= s.length && (c = s.length - 1), d === a))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const h = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: h,
          previousIndex: a,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          r !== h && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          i = t.params,
          n = x(e).closest(`.${i.slideClass}`)[0];
        let s,
          o = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === n) {
              (o = !0), (s = e);
              break;
            }
        if (!n || !o)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                x(n).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = s),
          i.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const R = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: i,
          translate: n,
          $wrapperEl: s,
        } = this;
        if (t.virtualTranslate) return i ? -n : n;
        if (t.cssMode) return n;
        let o = C(s[0], e);
        return i && (o = -o), o || 0;
      },
      setTranslate: function (e, t) {
        const i = this,
          {
            rtlTranslate: n,
            params: s,
            $wrapperEl: o,
            wrapperEl: a,
            progress: r,
          } = i;
        let l,
          c = 0,
          d = 0;
        i.isHorizontal() ? (c = n ? -e : e) : (d = e),
          s.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          s.cssMode
            ? (a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                i.isHorizontal() ? -c : -d)
            : s.virtualTranslate ||
              o.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? c : d);
        const h = i.maxTranslate() - i.minTranslate();
        (l = 0 === h ? 0 : (e - i.minTranslate()) / h),
          l !== r && i.updateProgress(e),
          i.emit("setTranslate", i.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, i = !0, n = !0, s) {
        const o = this,
          { params: a, wrapperEl: r } = o;
        if (o.animating && a.preventInteractionOnTransition) return !1;
        const l = o.minTranslate(),
          c = o.maxTranslate();
        let d;
        if (
          ((d = n && e > l ? l : n && e < c ? c : e),
          o.updateProgress(d),
          a.cssMode)
        ) {
          const e = o.isHorizontal();
          if (0 === t) r[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!o.support.smoothScroll)
              return (
                O({ swiper: o, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            r.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (o.setTransition(0),
              o.setTranslate(d),
              i &&
                (o.emit("beforeTransitionStart", t, s),
                o.emit("transitionEnd")))
            : (o.setTransition(t),
              o.setTranslate(d),
              i &&
                (o.emit("beforeTransitionStart", t, s),
                o.emit("transitionStart")),
              o.animating ||
                ((o.animating = !0),
                o.onTranslateToWrapperTransitionEnd ||
                  (o.onTranslateToWrapperTransitionEnd = function (e) {
                    o &&
                      !o.destroyed &&
                      e.target === this &&
                      (o.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        o.onTranslateToWrapperTransitionEnd
                      ),
                      o.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        o.onTranslateToWrapperTransitionEnd
                      ),
                      (o.onTranslateToWrapperTransitionEnd = null),
                      delete o.onTranslateToWrapperTransitionEnd,
                      i && o.emit("transitionEnd"));
                  }),
                o.$wrapperEl[0].addEventListener(
                  "transitionend",
                  o.onTranslateToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  o.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function F({ swiper: e, runCallbacks: t, direction: i, step: n }) {
      const { activeIndex: s, previousIndex: o } = e;
      let a = i;
      if (
        (a || (a = s > o ? "next" : s < o ? "prev" : "reset"),
        e.emit(`transition${n}`),
        t && s !== o)
      ) {
        if ("reset" === a) return void e.emit(`slideResetTransition${n}`);
        e.emit(`slideChangeTransition${n}`),
          "next" === a
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`);
      }
    }
    const B = {
      slideTo: function (e = 0, t = this.params.speed, i = !0, n, s) {
        if ("number" != typeof e && "string" != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const o = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: r,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: h,
          rtlTranslate: u,
          wrapperEl: p,
          enabled: f,
        } = o;
        if (
          (o.animating && r.preventInteractionOnTransition) ||
          (!f && !n && !s)
        )
          return !1;
        const g = Math.min(o.params.slidesPerGroupSkip, a);
        let m = g + Math.floor((a - g) / o.params.slidesPerGroup);
        m >= l.length && (m = l.length - 1);
        const v = -l[m];
        if (r.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              i = Math.floor(100 * c[e]),
              n = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= i && t < n - (n - i) / 2
                ? (a = e)
                : t >= i && t < n && (a = e + 1)
              : t >= i && (a = e);
          }
        if (o.initialized && a !== h) {
          if (!o.allowSlideNext && v < o.translate && v < o.minTranslate())
            return !1;
          if (
            !o.allowSlidePrev &&
            v > o.translate &&
            v > o.maxTranslate() &&
            (h || 0) !== a
          )
            return !1;
        }
        let b;
        if (
          (a !== (d || 0) && i && o.emit("beforeSlideChangeStart"),
          o.updateProgress(v),
          (b = a > h ? "next" : a < h ? "prev" : "reset"),
          (u && -v === o.translate) || (!u && v === o.translate))
        )
          return (
            o.updateActiveIndex(a),
            r.autoHeight && o.updateAutoHeight(),
            o.updateSlidesClasses(),
            "slide" !== r.effect && o.setTranslate(v),
            "reset" !== b && (o.transitionStart(i, b), o.transitionEnd(i, b)),
            !1
          );
        if (r.cssMode) {
          const e = o.isHorizontal(),
            i = u ? v : -v;
          if (0 === t) {
            const t = o.virtual && o.params.virtual.enabled;
            t &&
              ((o.wrapperEl.style.scrollSnapType = "none"),
              (o._immediateVirtual = !0)),
              (p[e ? "scrollLeft" : "scrollTop"] = i),
              t &&
                requestAnimationFrame(() => {
                  (o.wrapperEl.style.scrollSnapType = ""),
                    (o._swiperImmediateVirtual = !1);
                });
          } else {
            if (!o.support.smoothScroll)
              return (
                O({ swiper: o, targetPosition: i, side: e ? "left" : "top" }),
                !0
              );
            p.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
          }
          return !0;
        }
        return (
          o.setTransition(t),
          o.setTranslate(v),
          o.updateActiveIndex(a),
          o.updateSlidesClasses(),
          o.emit("beforeTransitionStart", t, n),
          o.transitionStart(i, b),
          0 === t
            ? o.transitionEnd(i, b)
            : o.animating ||
              ((o.animating = !0),
              o.onSlideToWrapperTransitionEnd ||
                (o.onSlideToWrapperTransitionEnd = function (e) {
                  o &&
                    !o.destroyed &&
                    e.target === this &&
                    (o.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      o.onSlideToWrapperTransitionEnd
                    ),
                    o.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      o.onSlideToWrapperTransitionEnd
                    ),
                    (o.onSlideToWrapperTransitionEnd = null),
                    delete o.onSlideToWrapperTransitionEnd,
                    o.transitionEnd(i, b));
                }),
              o.$wrapperEl[0].addEventListener(
                "transitionend",
                o.onSlideToWrapperTransitionEnd
              ),
              o.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                o.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, i = !0, n) {
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const s = this;
        let o = e;
        return s.params.loop && (o += s.loopedSlides), s.slideTo(o, t, i, n);
      },
      slideNext: function (e = this.params.speed, t = !0, i) {
        const n = this,
          { animating: s, enabled: o, params: a } = n;
        if (!o) return n;
        let r = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (r = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : r;
        if (a.loop) {
          if (s && a.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        return a.rewind && n.isEnd
          ? n.slideTo(0, e, t, i)
          : n.slideTo(n.activeIndex + l, e, t, i);
      },
      slidePrev: function (e = this.params.speed, t = !0, i) {
        const n = this,
          {
            params: s,
            animating: o,
            snapGrid: a,
            slidesGrid: r,
            rtlTranslate: l,
            enabled: c,
          } = n;
        if (!c) return n;
        if (s.loop) {
          if (o && s.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const h = d(l ? n.translate : -n.translate),
          u = a.map((e) => d(e));
        let p = a[u.indexOf(h) - 1];
        if (void 0 === p && s.cssMode) {
          let e;
          a.forEach((t, i) => {
            h >= t && (e = i);
          }),
            void 0 !== e && (p = a[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        if (
          (void 0 !== p &&
            ((f = r.indexOf(p)),
            f < 0 && (f = n.activeIndex - 1),
            "auto" === s.slidesPerView &&
              1 === s.slidesPerGroup &&
              s.slidesPerGroupAuto &&
              ((f = f - n.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          s.rewind && n.isBeginning)
        ) {
          const s =
            n.params.virtual && n.params.virtual.enabled && n.virtual
              ? n.virtual.slides.length - 1
              : n.slides.length - 1;
          return n.slideTo(s, e, t, i);
        }
        return n.slideTo(f, e, t, i);
      },
      slideReset: function (e = this.params.speed, t = !0, i) {
        return this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClosest: function (e = this.params.speed, t = !0, i, n = 0.5) {
        const s = this;
        let o = s.activeIndex;
        const a = Math.min(s.params.slidesPerGroupSkip, o),
          r = a + Math.floor((o - a) / s.params.slidesPerGroup),
          l = s.rtlTranslate ? s.translate : -s.translate;
        if (l >= s.snapGrid[r]) {
          const e = s.snapGrid[r];
          l - e > (s.snapGrid[r + 1] - e) * n && (o += s.params.slidesPerGroup);
        } else {
          const e = s.snapGrid[r - 1];
          l - e <= (s.snapGrid[r] - e) * n && (o -= s.params.slidesPerGroup);
        }
        return (
          (o = Math.max(o, 0)),
          (o = Math.min(o, s.slidesGrid.length - 1)),
          s.slideTo(o, e, t, i)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: i } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let s,
          o = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (s = parseInt(x(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? o < e.loopedSlides - n / 2 ||
                o > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (o = i
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  E(() => {
                    e.slideTo(o);
                  }))
                : e.slideTo(o)
              : o > e.slides.length - n
              ? (e.loopFix(),
                (o = i
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                E(() => {
                  e.slideTo(o);
                }))
              : e.slideTo(o);
        } else e.slideTo(o);
      },
    };
    const j = {
      loopCreate: function () {
        const e = this,
          t = h(),
          { params: i, $wrapperEl: n } = e,
          s = n.children().length > 0 ? x(n.children()[0].parentNode) : n;
        s.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
        let o = s.children(`.${i.slideClass}`);
        if (i.loopFillGroupWithBlank) {
          const e = i.slidesPerGroup - (o.length % i.slidesPerGroup);
          if (e !== i.slidesPerGroup) {
            for (let n = 0; n < e; n += 1) {
              const e = x(t.createElement("div")).addClass(
                `${i.slideClass} ${i.slideBlankClass}`
              );
              s.append(e);
            }
            o = s.children(`.${i.slideClass}`);
          }
        }
        "auto" !== i.slidesPerView ||
          i.loopedSlides ||
          (i.loopedSlides = o.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(i.loopedSlides || i.slidesPerView, 10)
          )),
          (e.loopedSlides += i.loopAdditionalSlides),
          e.loopedSlides > o.length &&
            e.params.loopedSlidesLimit &&
            (e.loopedSlides = o.length);
        const a = [],
          r = [];
        o.each((e, t) => {
          x(e).attr("data-swiper-slide-index", t);
        });
        for (let t = 0; t < e.loopedSlides; t += 1) {
          const e = t - Math.floor(t / o.length) * o.length;
          r.push(o.eq(e)[0]), a.unshift(o.eq(o.length - e - 1)[0]);
        }
        for (let e = 0; e < r.length; e += 1)
          s.append(x(r[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
        for (let e = a.length - 1; e >= 0; e -= 1)
          s.prepend(x(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: i,
          loopedSlides: n,
          allowSlidePrev: s,
          allowSlideNext: o,
          snapGrid: a,
          rtlTranslate: r,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -a[t] - e.getTranslate();
        if (t < n) {
          (l = i.length - 3 * n + t), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((r ? -e.translate : e.translate) - c);
        } else if (t >= i.length - n) {
          (l = -i.length + t + n), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((r ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = s), (e.allowSlideNext = o), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: i } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          i.removeAttr("data-swiper-slide-index");
      },
    };
    function N(e) {
      const t = this,
        i = h(),
        n = p(),
        s = t.touchEventsData,
        { params: o, touches: a, enabled: r } = t;
      if (!r) return;
      if (t.animating && o.preventInteractionOnTransition) return;
      !t.animating && o.cssMode && o.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = x(l.target);
      if ("wrapper" === o.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((s.isTouchEvent = "touchstart" === l.type),
        !s.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!s.isTouchEvent && "button" in l && l.button > 0) return;
      if (s.isTouched && s.isMoved) return;
      const d = !!o.noSwipingClass && "" !== o.noSwipingClass,
        u = e.composedPath ? e.composedPath() : e.path;
      d && l.target && l.target.shadowRoot && u && (c = x(u[0]));
      const f = o.noSwipingSelector
          ? o.noSwipingSelector
          : `.${o.noSwipingClass}`,
        g = !(!l.target || !l.target.shadowRoot);
      if (
        o.noSwiping &&
        (g
          ? (function (e, t = this) {
              return (function t(i) {
                if (!i || i === h() || i === p()) return null;
                i.assignedSlot && (i = i.assignedSlot);
                const n = i.closest(e);
                return n || i.getRootNode ? n || t(i.getRootNode().host) : null;
              })(t);
            })(f, c[0])
          : c.closest(f)[0])
      )
        return void (t.allowClick = !0);
      if (o.swipeHandler && !c.closest(o.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (a.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const m = a.currentX,
        v = a.currentY,
        b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (b && (m <= y || m >= n.innerWidth - y)) {
        if ("prevent" !== b) return;
        e.preventDefault();
      }
      if (
        (Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (a.startX = m),
        (a.startY = v),
        (s.touchStartTime = S()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        o.threshold > 0 && (s.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(s.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (s.isTouched = !1)),
          i.activeElement &&
            x(i.activeElement).is(s.focusableElements) &&
            i.activeElement !== c[0] &&
            i.activeElement.blur();
        const n = e && t.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !n) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !o.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function H(e) {
      const t = h(),
        i = this,
        n = i.touchEventsData,
        { params: s, touches: o, rtlTranslate: a, enabled: r } = i;
      if (!r) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          i.emit("touchMoveOpposite", l)
        );
      if (n.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        u = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (o.startX = d), void (o.startY = u);
      if (!i.allowTouchMove)
        return (
          x(l.target).is(n.focusableElements) || (i.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(o, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (n.touchStartTime = S()))
          )
        );
      if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
        if (i.isVertical()) {
          if (
            (u < o.startY && i.translate <= i.maxTranslate()) ||
            (u > o.startY && i.translate >= i.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (d < o.startX && i.translate <= i.maxTranslate()) ||
          (d > o.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        x(l.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (i.allowClick = !1);
      if (
        (n.allowTouchCallbacks && i.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (o.currentX = d), (o.currentY = u);
      const p = o.currentX - o.startX,
        f = o.currentY - o.startY;
      if (i.params.threshold && Math.sqrt(p ** 2 + f ** 2) < i.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (i.isHorizontal() && o.currentY === o.startY) ||
        (i.isVertical() && o.currentX === o.startX)
          ? (n.isScrolling = !1)
          : p * p + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
            (n.isScrolling = i.isHorizontal()
              ? e > s.touchAngle
              : 90 - e > s.touchAngle));
      }
      if (
        (n.isScrolling && i.emit("touchMoveOpposite", l),
        void 0 === n.startMoving &&
          ((o.currentX === o.startX && o.currentY === o.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (i.allowClick = !1),
        !s.cssMode && l.cancelable && l.preventDefault(),
        s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
        n.isMoved ||
          (s.loop && !s.cssMode && i.loopFix(),
          (n.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating &&
            i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !s.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", l)),
        i.emit("sliderMove", l),
        (n.isMoved = !0);
      let g = i.isHorizontal() ? p : f;
      (o.diff = g),
        (g *= s.touchRatio),
        a && (g = -g),
        (i.swipeDirection = g > 0 ? "prev" : "next"),
        (n.currentTranslate = g + n.startTranslate);
      let m = !0,
        v = s.resistanceRatio;
      if (
        (s.touchReleaseOnEdges && (v = 0),
        g > 0 && n.currentTranslate > i.minTranslate()
          ? ((m = !1),
            s.resistance &&
              (n.currentTranslate =
                i.minTranslate() -
                1 +
                (-i.minTranslate() + n.startTranslate + g) ** v))
          : g < 0 &&
            n.currentTranslate < i.maxTranslate() &&
            ((m = !1),
            s.resistance &&
              (n.currentTranslate =
                i.maxTranslate() +
                1 -
                (i.maxTranslate() - n.startTranslate - g) ** v)),
        m && (l.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        s.threshold > 0)
      ) {
        if (!(Math.abs(g) > s.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (o.startX = o.currentX),
            (o.startY = o.currentY),
            (n.currentTranslate = n.startTranslate),
            void (o.diff = i.isHorizontal()
              ? o.currentX - o.startX
              : o.currentY - o.startY)
          );
      }
      s.followFinger &&
        !s.cssMode &&
        (((s.freeMode && s.freeMode.enabled && i.freeMode) ||
          s.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        i.params.freeMode &&
          s.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(n.currentTranslate),
        i.setTranslate(n.currentTranslate));
    }
    function q(e) {
      const t = this,
        i = t.touchEventsData,
        {
          params: n,
          touches: s,
          rtlTranslate: o,
          slidesGrid: a,
          enabled: r,
        } = t;
      if (!r) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", l),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      n.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = S(),
        d = c - i.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((i.lastClickTime = S()),
        E(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === s.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let h;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (h = n.followFinger
          ? o
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: h });
      let u = 0,
        p = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== a[e + t]
          ? h >= a[e] && h < a[e + t] && ((u = e), (p = a[e + t] - a[e]))
          : h >= a[e] && ((u = e), (p = a[a.length - 1] - a[a.length - 2]));
      }
      let f = null,
        g = null;
      n.rewind &&
        (t.isBeginning
          ? (g =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const m = (h - a[u]) / p,
        v = u < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (d > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (m >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? f : u + v)
            : t.slideTo(u)),
          "prev" === t.swipeDirection &&
            (m > 1 - n.longSwipesRatio
              ? t.slideTo(u + v)
              : null !== g && m < 0 && Math.abs(m) > n.longSwipesRatio
              ? t.slideTo(g)
              : t.slideTo(u));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(u + v)
            : t.slideTo(u)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : u + v),
            "prev" === t.swipeDirection && t.slideTo(null !== g ? g : u));
      }
    }
    function W() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: s, snapGrid: o } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = s),
        (e.allowSlideNext = n),
        e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
    }
    function G(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function V() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: n } = e;
      if (!n) return;
      let s;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const o = e.maxTranslate() - e.minTranslate();
      (s = 0 === o ? 0 : (e.translate - e.minTranslate()) / o),
        s !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let X = !1;
    function Y() {}
    const U = (e, t) => {
      const i = h(),
        {
          params: n,
          touchEvents: s,
          el: o,
          wrapperEl: a,
          device: r,
          support: l,
        } = e,
        c = !!n.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== s.start ||
          !l.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        o[d](s.start, e.onTouchStart, t),
          o[d](
            s.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          o[d](s.end, e.onTouchEnd, t),
          s.cancel && o[d](s.cancel, e.onTouchEnd, t);
      } else
        o[d](s.start, e.onTouchStart, !1),
          i[d](s.move, e.onTouchMove, c),
          i[d](s.end, e.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        o[d]("click", e.onClick, !0),
        n.cssMode && a[d]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[u](
              r.ios || r.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              W,
              !0
            )
          : e[u]("observerUpdate", W, !0);
    };
    const Z = {
        attachEvents: function () {
          const e = this,
            t = h(),
            { params: i, support: n } = e;
          (e.onTouchStart = N.bind(e)),
            (e.onTouchMove = H.bind(e)),
            (e.onTouchEnd = q.bind(e)),
            i.cssMode && (e.onScroll = V.bind(e)),
            (e.onClick = G.bind(e)),
            n.touch && !X && (t.addEventListener("touchstart", Y), (X = !0)),
            U(e, "on");
        },
        detachEvents: function () {
          U(this, "off");
        },
      },
      K = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const J = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: i,
            loopedSlides: n = 0,
            params: s,
            $el: o,
          } = e,
          a = s.breakpoints;
        if (!a || (a && 0 === Object.keys(a).length)) return;
        const r = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
        if (!r || e.currentBreakpoint === r) return;
        const l = (r in a ? a[r] : void 0) || e.originalParams,
          c = K(e, s),
          d = K(e, l),
          h = s.enabled;
        c && !d
          ? (o.removeClass(
              `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (o.addClass(`${s.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === s.grid.fill)) &&
              o.addClass(`${s.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          ["navigation", "pagination", "scrollbar"].forEach((t) => {
            const i = s[t] && s[t].enabled,
              n = l[t] && l[t].enabled;
            i && !n && e[t].disable(), !i && n && e[t].enable();
          });
        const u = l.direction && l.direction !== s.direction,
          p = s.loop && (l.slidesPerView !== s.slidesPerView || u);
        u && i && e.changeDirection(), P(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          h && !f ? e.disable() : !h && f && e.enable(),
          (e.currentBreakpoint = r),
          e.emit("_beforeBreakpoint", l),
          p &&
            i &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - n + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t = "window", i) {
        if (!e || ("container" === t && !i)) return;
        let n = !1;
        const s = p(),
          o = "window" === t ? s.innerHeight : i.clientHeight,
          a = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: o * t, point: e };
            }
            return { value: e, point: e };
          });
        a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < a.length; e += 1) {
          const { point: o, value: r } = a[e];
          "window" === t
            ? s.matchMedia(`(min-width: ${r}px)`).matches && (n = o)
            : r <= i.clientWidth && (n = o);
        }
        return n || "max";
      },
    };
    const Q = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: i,
            rtl: n,
            $el: s,
            device: o,
            support: a,
          } = e,
          r = (function (e, t) {
            const i = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((n) => {
                      e[n] && i.push(t + n);
                    })
                  : "string" == typeof e && i.push(t + e);
              }),
              i
            );
          })(
            [
              "initialized",
              i.direction,
              { "pointer-events": !a.touch },
              { "free-mode": e.params.freeMode && i.freeMode.enabled },
              { autoheight: i.autoHeight },
              { rtl: n },
              { grid: i.grid && i.grid.rows > 1 },
              {
                "grid-column":
                  i.grid && i.grid.rows > 1 && "column" === i.grid.fill,
              },
              { android: o.android },
              { ios: o.ios },
              { "css-mode": i.cssMode },
              { centered: i.cssMode && i.centeredSlides },
              { "watch-progress": i.watchSlidesProgress },
            ],
            i.containerModifierClass
          );
        t.push(...r), s.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const ee = {
      loadImage: function (e, t, i, n, s, o) {
        const a = p();
        let r;
        function l() {
          o && o();
        }
        x(e).parent("picture")[0] || (e.complete && s)
          ? l()
          : t
          ? ((r = new a.Image()),
            (r.onload = l),
            (r.onerror = l),
            n && (r.sizes = n),
            i && (r.srcset = i),
            t && (r.src = t))
          : l();
      },
      preloadImages: function () {
        const e = this;
        function t() {
          null != e &&
            e &&
            !e.destroyed &&
            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
            e.imagesLoaded === e.imagesToLoad.length &&
              (e.params.updateOnImagesReady && e.update(),
              e.emit("imagesReady")));
        }
        e.imagesToLoad = e.$el.find("img");
        for (let i = 0; i < e.imagesToLoad.length; i += 1) {
          const n = e.imagesToLoad[i];
          e.loadImage(
            n,
            n.currentSrc || n.getAttribute("src"),
            n.srcset || n.getAttribute("srcset"),
            n.sizes || n.getAttribute("sizes"),
            !0,
            t
          );
        }
      },
    };
    const te = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ie(e, t) {
      return function (i = {}) {
        const n = Object.keys(i)[0],
          s = i[n];
        "object" == typeof s && null !== s
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in s
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                P(t, i))
              : P(t, i))
          : P(t, i);
      };
    }
    const ne = {
        eventsEmitter: _,
        update: D,
        translate: R,
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode || i.$wrapperEl.transition(e),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const i = this,
              { params: n } = i;
            n.cssMode ||
              (n.autoHeight && i.updateAutoHeight(),
              F({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const i = this,
              { params: n } = i;
            (i.animating = !1),
              n.cssMode ||
                (i.setTransition(0),
                F({ swiper: i, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: B,
        loop: j,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const i =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (i.style.cursor = "move"),
              (i.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: Z,
        breakpoints: J,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: n } = i;
            if (n) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: Q,
        images: ee,
      },
      se = {};
    class oe {
      constructor(...e) {
        let t, i;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (i = e[0])
            : ([t, i] = e),
          i || (i = {}),
          (i = P({}, i)),
          t && !i.el && (i.el = t),
          i.el && x(i.el).length > 1)
        ) {
          const e = [];
          return (
            x(i.el).each((t) => {
              const n = P({}, i, { el: t });
              e.push(new oe(n));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = I()),
          (n.device = z({ userAgent: i.userAgent })),
          (n.browser = $()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
        const s = {};
        n.modules.forEach((e) => {
          e({
            swiper: n,
            extendParams: ie(i, s),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const o = P({}, te, s);
        return (
          (n.params = P({}, o, se, i)),
          (n.originalParams = P({}, n.params)),
          (n.passedParams = P({}, i)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = x),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: x(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (n.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: S(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = i.minTranslate(),
          s = (i.maxTranslate() - n) * e + n;
        i.translateTo(s, void 0 === t ? 0 : t),
          i.updateActiveIndex(),
          i.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((i) => {
          const n = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: n }), e.emit("_slideClass", i, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: i,
          slides: n,
          slidesGrid: s,
          slidesSizesGrid: o,
          size: a,
          activeIndex: r,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let e,
            t = n[r].swiperSlideSize;
          for (let i = r + 1; i < n.length; i += 1)
            n[i] &&
              !e &&
              ((t += n[i].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let i = r - 1; i >= 0; i -= 1)
            n[i] &&
              !e &&
              ((t += n[i].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = r + 1; e < n.length; e += 1) {
            (t ? s[e] + o[e] - s[r] < a : s[e] - s[r] < a) && (l += 1);
          }
        else
          for (let e = r - 1; e >= 0; e -= 1) {
            s[r] - s[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let s;
        i.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((s =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              s || n()),
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const i = this,
          n = i.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.$el
              .removeClass(`${i.params.containerModifierClass}${n}`)
              .addClass(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const i = x(e || t.params.el);
        if (!(e = i[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let s = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = x(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => i.children(e)), t;
          }
          return i.children ? i.children(n()) : x(i).children(n());
        })();
        if (0 === s.length && t.params.createElements) {
          const e = h().createElement("div");
          (s = x(e)),
            (e.className = t.params.wrapperClass),
            i.append(e),
            i.children(`.${t.params.slideClass}`).each((e) => {
              s.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: i,
            el: e,
            $wrapperEl: s,
            wrapperEl: s[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
            wrongRTL: "-webkit-box" === s.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const i = this,
          { params: n, $el: s, $wrapperEl: o, slides: a } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            n.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              s.removeAttr("style"),
              o.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        P(se, e);
      }
      static get extendedDefaults() {
        return se;
      }
      static get defaults() {
        return te;
      }
      static installModule(e) {
        oe.prototype.__modules__ || (oe.prototype.__modules__ = []);
        const t = oe.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => oe.installModule(e)), oe)
          : (oe.installModule(e), oe);
      }
    }
    Object.keys(ne).forEach((e) => {
      Object.keys(ne[e]).forEach((t) => {
        oe.prototype[t] = ne[e][t];
      });
    }),
      oe.use([
        function ({ swiper: e, on: t, emit: i }) {
          const n = p();
          let s = null,
            o = null;
          const a = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (i("beforeResize"), i("resize"));
            },
            r = () => {
              e && !e.destroyed && e.initialized && i("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== n.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((s = new ResizeObserver((t) => {
                  o = n.requestAnimationFrame(() => {
                    const { width: i, height: n } = e;
                    let s = i,
                      o = n;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: i, target: n }) => {
                        (n && n !== e.el) ||
                          ((s = i ? i.width : (t[0] || t).inlineSize),
                          (o = i ? i.height : (t[0] || t).blockSize));
                      }
                    ),
                      (s === i && o === n) || a();
                  });
                })),
                s.observe(e.el))
              : (n.addEventListener("resize", a),
                n.addEventListener("orientationchange", r));
          }),
            t("destroy", () => {
              o && n.cancelAnimationFrame(o),
                s && s.unobserve && e.el && (s.unobserve(e.el), (s = null)),
                n.removeEventListener("resize", a),
                n.removeEventListener("orientationchange", r);
            });
        },
        function ({ swiper: e, extendParams: t, on: i, emit: n }) {
          const s = [],
            o = p(),
            a = (e, t = {}) => {
              const i = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                s.push(i);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) a(t[e]);
                }
                a(e.$el[0], { childList: e.params.observeSlideChildren }),
                  a(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              s.forEach((e) => {
                e.disconnect();
              }),
                s.splice(0, s.length);
            });
        },
      ]);
    const ae = oe;
    function re(e, t, i, n) {
      const s = h();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((o) => {
            if (!i[o] && !0 === i.auto) {
              let a = e.$el.children(`.${n[o]}`)[0];
              a ||
                ((a = s.createElement("div")),
                (a.className = n[o]),
                e.$el.append(a)),
                (i[o] = a),
                (t[o] = a);
            }
          }),
        i
      );
    }
    function le({ swiper: e, extendParams: t, on: i, emit: n }) {
      function s(t) {
        let i;
        return (
          t &&
            ((i = x(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              i.length > 1 &&
              1 === e.$el.find(t).length &&
              (i = e.$el.find(t))),
          i
        );
      }
      function o(t, i) {
        const n = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[i ? "addClass" : "removeClass"](n.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](n.lockClass));
      }
      function a() {
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: i } = e.navigation;
        o(i, e.isBeginning && !e.params.rewind),
          o(t, e.isEnd && !e.params.rewind);
      }
      function r(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), n("navigationPrev"));
      }
      function l(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), n("navigationNext"));
      }
      function c() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = re(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        const i = s(t.nextEl),
          n = s(t.prevEl);
        i && i.length > 0 && i.on("click", l),
          n && n.length > 0 && n.on("click", r),
          Object.assign(e.navigation, {
            $nextEl: i,
            nextEl: i && i[0],
            $prevEl: n,
            prevEl: n && n[0],
          }),
          e.enabled ||
            (i && i.addClass(t.lockClass), n && n.addClass(t.lockClass));
      }
      function d() {
        const { $nextEl: t, $prevEl: i } = e.navigation;
        t &&
          t.length &&
          (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", r),
            i.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        i("init", () => {
          !1 === e.params.navigation.enabled ? h() : (c(), a());
        }),
        i("toEdge fromEdge lock unlock", () => {
          a();
        }),
        i("destroy", () => {
          d();
        }),
        i("enable disable", () => {
          const { $nextEl: t, $prevEl: i } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            i &&
              i[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        i("click", (t, i) => {
          const { $nextEl: s, $prevEl: o } = e.navigation,
            a = i.target;
          if (e.params.navigation.hideOnClick && !x(a).is(o) && !x(a).is(s)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === a || e.pagination.el.contains(a))
            )
              return;
            let t;
            s
              ? (t = s.hasClass(e.params.navigation.hiddenClass))
              : o && (t = o.hasClass(e.params.navigation.hiddenClass)),
              n(!0 === t ? "navigationShow" : "navigationHide"),
              s && s.toggleClass(e.params.navigation.hiddenClass),
              o && o.toggleClass(e.params.navigation.hiddenClass);
          }
        });
      const h = () => {
        e.$el.addClass(e.params.navigation.navigationDisabledClass), d();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.$el.removeClass(e.params.navigation.navigationDisabledClass),
            c(),
            a();
        },
        disable: h,
        update: a,
        init: c,
        destroy: d,
      });
    }
    function ce(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function de({ swiper: e, extendParams: t, on: i }) {
      t({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
        },
      }),
        (e.a11y = { clicked: !1 });
      let n = null;
      function s(e) {
        const t = n;
        0 !== t.length && (t.html(""), t.html(e));
      }
      function o(e) {
        e.attr("tabIndex", "0");
      }
      function a(e) {
        e.attr("tabIndex", "-1");
      }
      function r(e, t) {
        e.attr("role", t);
      }
      function l(e, t) {
        e.attr("aria-roledescription", t);
      }
      function c(e, t) {
        e.attr("aria-label", t);
      }
      function d(e) {
        e.attr("aria-disabled", !0);
      }
      function h(e) {
        e.attr("aria-disabled", !1);
      }
      function u(t) {
        if (13 !== t.keyCode && 32 !== t.keyCode) return;
        const i = e.params.a11y,
          n = x(t.target);
        e.navigation &&
          e.navigation.$nextEl &&
          n.is(e.navigation.$nextEl) &&
          ((e.isEnd && !e.params.loop) || e.slideNext(),
          e.isEnd ? s(i.lastSlideMessage) : s(i.nextSlideMessage)),
          e.navigation &&
            e.navigation.$prevEl &&
            n.is(e.navigation.$prevEl) &&
            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
            e.isBeginning ? s(i.firstSlideMessage) : s(i.prevSlideMessage)),
          e.pagination &&
            n.is(ce(e.params.pagination.bulletClass)) &&
            n[0].click();
      }
      function p() {
        return (
          e.pagination && e.pagination.bullets && e.pagination.bullets.length
        );
      }
      function f() {
        return p() && e.params.pagination.clickable;
      }
      const g = (e, t, i) => {
          o(e),
            "BUTTON" !== e[0].tagName && (r(e, "button"), e.on("keydown", u)),
            c(e, i),
            (function (e, t) {
              e.attr("aria-controls", t);
            })(e, t);
        },
        m = () => {
          e.a11y.clicked = !0;
        },
        v = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
        },
        b = (t) => {
          if (e.a11y.clicked) return;
          const i = t.target.closest(`.${e.params.slideClass}`);
          if (!i || !e.slides.includes(i)) return;
          const n = e.slides.indexOf(i) === e.activeIndex,
            s =
              e.params.watchSlidesProgress &&
              e.visibleSlides &&
              e.visibleSlides.includes(i);
          n ||
            s ||
            (t.sourceCapabilities && t.sourceCapabilities.firesTouchEvents) ||
            (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
            e.slideTo(e.slides.indexOf(i), 0));
        },
        y = () => {
          const t = e.params.a11y;
          t.itemRoleDescriptionMessage &&
            l(x(e.slides), t.itemRoleDescriptionMessage),
            t.slideRole && r(x(e.slides), t.slideRole);
          const i = e.params.loop
            ? e.slides.filter(
                (t) => !t.classList.contains(e.params.slideDuplicateClass)
              ).length
            : e.slides.length;
          t.slideLabelMessage &&
            e.slides.each((n, s) => {
              const o = x(n),
                a = e.params.loop
                  ? parseInt(o.attr("data-swiper-slide-index"), 10)
                  : s;
              c(
                o,
                t.slideLabelMessage
                  .replace(/\{\{index\}\}/, a + 1)
                  .replace(/\{\{slidesLength\}\}/, i)
              );
            });
        },
        w = () => {
          const t = e.params.a11y;
          e.$el.append(n);
          const i = e.$el;
          t.containerRoleDescriptionMessage &&
            l(i, t.containerRoleDescriptionMessage),
            t.containerMessage && c(i, t.containerMessage);
          const s = e.$wrapperEl,
            o =
              t.id ||
              s.attr("id") ||
              `swiper-wrapper-${(function (e = 16) {
                return "x"
                  .repeat(e)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  );
              })(16)}`,
            a =
              e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
          var r;
          let d, h;
          (r = o),
            s.attr("id", r),
            (function (e, t) {
              e.attr("aria-live", t);
            })(s, a),
            y(),
            e.navigation && e.navigation.$nextEl && (d = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (h = e.navigation.$prevEl),
            d && d.length && g(d, o, t.nextSlideMessage),
            h && h.length && g(h, o, t.prevSlideMessage),
            f() &&
              e.pagination.$el.on(
                "keydown",
                ce(e.params.pagination.bulletClass),
                u
              ),
            e.$el.on("focus", b, !0),
            e.$el.on("pointerdown", m, !0),
            e.$el.on("pointerup", v, !0);
        };
      i("beforeInit", () => {
        n = x(
          `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
        );
      }),
        i("afterInit", () => {
          e.params.a11y.enabled && w();
        }),
        i(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            e.params.a11y.enabled && y();
          }
        ),
        i("fromEdge toEdge afterInit lock unlock", () => {
          e.params.a11y.enabled &&
            (function () {
              if (e.params.loop || e.params.rewind || !e.navigation) return;
              const { $nextEl: t, $prevEl: i } = e.navigation;
              i &&
                i.length > 0 &&
                (e.isBeginning ? (d(i), a(i)) : (h(i), o(i))),
                t && t.length > 0 && (e.isEnd ? (d(t), a(t)) : (h(t), o(t)));
            })();
        }),
        i("paginationUpdate", () => {
          e.params.a11y.enabled &&
            (function () {
              const t = e.params.a11y;
              p() &&
                e.pagination.bullets.each((i) => {
                  const n = x(i);
                  e.params.pagination.clickable &&
                    (o(n),
                    e.params.pagination.renderBullet ||
                      (r(n, "button"),
                      c(
                        n,
                        t.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          n.index() + 1
                        )
                      ))),
                    n.is(`.${e.params.pagination.bulletActiveClass}`)
                      ? n.attr("aria-current", "true")
                      : n.removeAttr("aria-current");
                });
            })();
        }),
        i("destroy", () => {
          e.params.a11y.enabled &&
            (function () {
              let t, i;
              n && n.length > 0 && n.remove(),
                e.navigation &&
                  e.navigation.$nextEl &&
                  (t = e.navigation.$nextEl),
                e.navigation &&
                  e.navigation.$prevEl &&
                  (i = e.navigation.$prevEl),
                t && t.off("keydown", u),
                i && i.off("keydown", u),
                f() &&
                  e.pagination.$el.off(
                    "keydown",
                    ce(e.params.pagination.bulletClass),
                    u
                  ),
                e.$el.off("focus", b, !0),
                e.$el.off("pointerdown", m, !0),
                e.$el.off("pointerup", v, !0);
            })();
        });
    }
    new ae(".swiper-reviews", {
      modules: [le, de],
      navigation: {
        nextEl: ".swiper-reviews .arrow-right",
        prevEl: ".swiper-reviews .arrow-left",
      },
      loop: !0,
      slidesPerView: 1,
      autoHeight: !0,
      breakpoints: {
        320: { spaceBetween: 20 },
        991: { spaceBetween: 48 },
        1024: { spaceBetween: 50 },
        1150: { spaceBetween: 70 },
        1400: { spaceBetween: 60 },
        1600: { spaceBetween: 125 },
        1740: { spaceBetween: 100 },
      },
    }),
      new ae(".swiper-result", {
        modules: [le, de],
        navigation: {
          nextEl: ".swiper-result .arrow-right",
          prevEl: ".swiper-result .arrow-left",
        },
        loop: !0,
        slidesPerView: 3,
        breakpoints: {
          320: { spaceBetween: 20, slidesPerView: 1 },
          991: { spaceBetween: 48, slidesPerView: 3 },
          1024: { spaceBetween: 48 },
          1150: { spaceBetween: 48 },
          1400: { spaceBetween: 60 },
          1600: { spaceBetween: 100 },
          1740: { spaceBetween: 60 },
        },
      }),
      new ae(".swiper-news", {
        modules: [le, de],
        navigation: {
          nextEl: ".news-head .arrow-right",
          prevEl: ".news-head .arrow-left",
        },
        loop: !1,
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 20 },
          600: { slidesPerView: 2, spaceBetween: 20 },
          991: { slidesPerView: 3, spaceBetween: 20 },
          1441: { slidesPerView: 3, spaceBetween: 60 },
        },
      }),
      new ae(".kinds-slider", {
        modules: [le, de],
        navigation: {
          nextEl: ".kinds-block .arrow-right",
          prevEl: ".kinds-block .arrow-left",
        },
        loop: !1,
        on: {
          slideChangeTransitionStart: function (e) {
            let t = e.slides.filter((t, i) => i < e.realIndex);
            t.map((e) => e.classList.add("prev"));
            let i = e.slides.filter((t, i) => i >= e.realIndex);
            i.map((e) => e.classList.add("next")),
              e.slides[e.realIndex].classList.contains("prev") &&
                (e.slides[e.realIndex].classList.remove("next"),
                e.slides[e.realIndex].classList.remove("prev")),
              document.querySelectorAll(".kinds-content__item").forEach((e) => {
                e.classList.remove("active");
              }),
              document
                .querySelector(`[data-element="item-${e.realIndex + 1}"]`)
                .classList.add("active");
          },
        },
        speed: 1e3,
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 30 },
          600: { slidesPerView: 2, spaceBetween: 30 },
          991: { slidesPerView: "auto", spaceBetween: 0, allowTouchMove: !1 },
          1440: { slidesPerView: "auto", spaceBetween: 0, allowTouchMove: !1 },
        },
      }),
      new ae(".advantages-items", {
        modules: [
          function ({ swiper: e, extendParams: t, on: i, emit: n }) {
            const s = "swiper-pagination";
            let o;
            t({
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: (e) => e,
                formatFractionTotal: (e) => e,
                bulletClass: `${s}-bullet`,
                bulletActiveClass: `${s}-bullet-active`,
                modifierClass: `${s}-`,
                currentClass: `${s}-current`,
                totalClass: `${s}-total`,
                hiddenClass: `${s}-hidden`,
                progressbarFillClass: `${s}-progressbar-fill`,
                progressbarOppositeClass: `${s}-progressbar-opposite`,
                clickableClass: `${s}-clickable`,
                lockClass: `${s}-lock`,
                horizontalClass: `${s}-horizontal`,
                verticalClass: `${s}-vertical`,
                paginationDisabledClass: `${s}-disabled`,
              },
            }),
              (e.pagination = { el: null, $el: null, bullets: [] });
            let a = 0;
            function r() {
              return (
                !e.params.pagination.el ||
                !e.pagination.el ||
                !e.pagination.$el ||
                0 === e.pagination.$el.length
              );
            }
            function l(t, i) {
              const { bulletActiveClass: n } = e.params.pagination;
              t[i]().addClass(`${n}-${i}`)[i]().addClass(`${n}-${i}-${i}`);
            }
            function c() {
              const t = e.rtl,
                i = e.params.pagination;
              if (r()) return;
              const s =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                c = e.pagination.$el;
              let d;
              const h = e.params.loop
                ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
              if (
                (e.params.loop
                  ? ((d = Math.ceil(
                      (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                    )),
                    d > s - 1 - 2 * e.loopedSlides &&
                      (d -= s - 2 * e.loopedSlides),
                    d > h - 1 && (d -= h),
                    d < 0 &&
                      "bullets" !== e.params.paginationType &&
                      (d = h + d))
                  : (d =
                      void 0 !== e.snapIndex
                        ? e.snapIndex
                        : e.activeIndex || 0),
                "bullets" === i.type &&
                  e.pagination.bullets &&
                  e.pagination.bullets.length > 0)
              ) {
                const n = e.pagination.bullets;
                let s, r, h;
                if (
                  (i.dynamicBullets &&
                    ((o = n
                      .eq(0)
                      [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                    c.css(
                      e.isHorizontal() ? "width" : "height",
                      o * (i.dynamicMainBullets + 4) + "px"
                    ),
                    i.dynamicMainBullets > 1 &&
                      void 0 !== e.previousIndex &&
                      ((a += d - (e.previousIndex - e.loopedSlides || 0)),
                      a > i.dynamicMainBullets - 1
                        ? (a = i.dynamicMainBullets - 1)
                        : a < 0 && (a = 0)),
                    (s = Math.max(d - a, 0)),
                    (r = s + (Math.min(n.length, i.dynamicMainBullets) - 1)),
                    (h = (r + s) / 2)),
                  n.removeClass(
                    ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                      .map((e) => `${i.bulletActiveClass}${e}`)
                      .join(" ")
                  ),
                  c.length > 1)
                )
                  n.each((e) => {
                    const t = x(e),
                      n = t.index();
                    n === d && t.addClass(i.bulletActiveClass),
                      i.dynamicBullets &&
                        (n >= s &&
                          n <= r &&
                          t.addClass(`${i.bulletActiveClass}-main`),
                        n === s && l(t, "prev"),
                        n === r && l(t, "next"));
                  });
                else {
                  const t = n.eq(d),
                    o = t.index();
                  if ((t.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                    const t = n.eq(s),
                      a = n.eq(r);
                    for (let e = s; e <= r; e += 1)
                      n.eq(e).addClass(`${i.bulletActiveClass}-main`);
                    if (e.params.loop)
                      if (o >= n.length) {
                        for (let e = i.dynamicMainBullets; e >= 0; e -= 1)
                          n.eq(n.length - e).addClass(
                            `${i.bulletActiveClass}-main`
                          );
                        n.eq(n.length - i.dynamicMainBullets - 1).addClass(
                          `${i.bulletActiveClass}-prev`
                        );
                      } else l(t, "prev"), l(a, "next");
                    else l(t, "prev"), l(a, "next");
                  }
                }
                if (i.dynamicBullets) {
                  const s = Math.min(n.length, i.dynamicMainBullets + 4),
                    a = (o * s - o) / 2 - h * o,
                    r = t ? "right" : "left";
                  n.css(e.isHorizontal() ? r : "top", `${a}px`);
                }
              }
              if (
                ("fraction" === i.type &&
                  (c
                    .find(ce(i.currentClass))
                    .text(i.formatFractionCurrent(d + 1)),
                  c.find(ce(i.totalClass)).text(i.formatFractionTotal(h))),
                "progressbar" === i.type)
              ) {
                let t;
                t = i.progressbarOpposite
                  ? e.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : e.isHorizontal()
                  ? "horizontal"
                  : "vertical";
                const n = (d + 1) / h;
                let s = 1,
                  o = 1;
                "horizontal" === t ? (s = n) : (o = n),
                  c
                    .find(ce(i.progressbarFillClass))
                    .transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${o})`)
                    .transition(e.params.speed);
              }
              "custom" === i.type && i.renderCustom
                ? (c.html(i.renderCustom(e, d + 1, h)),
                  n("paginationRender", c[0]))
                : n("paginationUpdate", c[0]),
                e.params.watchOverflow &&
                  e.enabled &&
                  c[e.isLocked ? "addClass" : "removeClass"](i.lockClass);
            }
            function d() {
              const t = e.params.pagination;
              if (r()) return;
              const i =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.slides.length
                    : e.slides.length,
                s = e.pagination.$el;
              let o = "";
              if ("bullets" === t.type) {
                let n = e.params.loop
                  ? Math.ceil(
                      (i - 2 * e.loopedSlides) / e.params.slidesPerGroup
                    )
                  : e.snapGrid.length;
                e.params.freeMode &&
                  e.params.freeMode.enabled &&
                  !e.params.loop &&
                  n > i &&
                  (n = i);
                for (let i = 0; i < n; i += 1)
                  t.renderBullet
                    ? (o += t.renderBullet.call(e, i, t.bulletClass))
                    : (o += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
                s.html(o), (e.pagination.bullets = s.find(ce(t.bulletClass)));
              }
              "fraction" === t.type &&
                ((o = t.renderFraction
                  ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                  : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
                s.html(o)),
                "progressbar" === t.type &&
                  ((o = t.renderProgressbar
                    ? t.renderProgressbar.call(e, t.progressbarFillClass)
                    : `<span class="${t.progressbarFillClass}"></span>`),
                  s.html(o)),
                "custom" !== t.type &&
                  n("paginationRender", e.pagination.$el[0]);
            }
            function h() {
              e.params.pagination = re(
                e,
                e.originalParams.pagination,
                e.params.pagination,
                { el: "swiper-pagination" }
              );
              const t = e.params.pagination;
              if (!t.el) return;
              let i = x(t.el);
              0 !== i.length &&
                (e.params.uniqueNavElements &&
                  "string" == typeof t.el &&
                  i.length > 1 &&
                  ((i = e.$el.find(t.el)),
                  i.length > 1 &&
                    (i = i.filter((t) => x(t).parents(".swiper")[0] === e.el))),
                "bullets" === t.type &&
                  t.clickable &&
                  i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                i.addClass(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
                  (a = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  i.addClass(t.progressbarOppositeClass),
                t.clickable &&
                  i.on("click", ce(t.bulletClass), function (t) {
                    t.preventDefault();
                    let i = x(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides), e.slideTo(i);
                  }),
                Object.assign(e.pagination, { $el: i, el: i[0] }),
                e.enabled || i.addClass(t.lockClass));
            }
            function u() {
              const t = e.params.pagination;
              if (r()) return;
              const i = e.pagination.$el;
              i.removeClass(t.hiddenClass),
                i.removeClass(t.modifierClass + t.type),
                i.removeClass(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                e.pagination.bullets &&
                  e.pagination.bullets.removeClass &&
                  e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && i.off("click", ce(t.bulletClass));
            }
            i("init", () => {
              !1 === e.params.pagination.enabled ? p() : (h(), d(), c());
            }),
              i("activeIndexChange", () => {
                (e.params.loop || void 0 === e.snapIndex) && c();
              }),
              i("snapIndexChange", () => {
                e.params.loop || c();
              }),
              i("slidesLengthChange", () => {
                e.params.loop && (d(), c());
              }),
              i("snapGridLengthChange", () => {
                e.params.loop || (d(), c());
              }),
              i("destroy", () => {
                u();
              }),
              i("enable disable", () => {
                const { $el: t } = e.pagination;
                t &&
                  t[e.enabled ? "removeClass" : "addClass"](
                    e.params.pagination.lockClass
                  );
              }),
              i("lock unlock", () => {
                c();
              }),
              i("click", (t, i) => {
                const s = i.target,
                  { $el: o } = e.pagination;
                if (
                  e.params.pagination.el &&
                  e.params.pagination.hideOnClick &&
                  o &&
                  o.length > 0 &&
                  !x(s).hasClass(e.params.pagination.bulletClass)
                ) {
                  if (
                    e.navigation &&
                    ((e.navigation.nextEl && s === e.navigation.nextEl) ||
                      (e.navigation.prevEl && s === e.navigation.prevEl))
                  )
                    return;
                  const t = o.hasClass(e.params.pagination.hiddenClass);
                  n(!0 === t ? "paginationShow" : "paginationHide"),
                    o.toggleClass(e.params.pagination.hiddenClass);
                }
              });
            const p = () => {
              e.$el.addClass(e.params.pagination.paginationDisabledClass),
                e.pagination.$el &&
                  e.pagination.$el.addClass(
                    e.params.pagination.paginationDisabledClass
                  ),
                u();
            };
            Object.assign(e.pagination, {
              enable: () => {
                e.$el.removeClass(e.params.pagination.paginationDisabledClass),
                  e.pagination.$el &&
                    e.pagination.$el.removeClass(
                      e.params.pagination.paginationDisabledClass
                    ),
                  h(),
                  d(),
                  c();
              },
              disable: p,
              render: d,
              update: c,
              init: h,
              destroy: u,
            });
          },
        ],
        pagination: { el: ".swiper-pagination", clickable: !0 },
        loop: !1,
        breakpoints: {
          320: { slidesPerView: 2, spaceBetween: 20 },
          991: { slidesPerView: 3, spaceBetween: 40 },
          1441: { slidesPerView: 3, spaceBetween: 60 },
        },
      });
    new (i(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            r(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let i = t.split("|"),
                n = { root: i[0], margin: i[1], threshold: i[2] },
                s = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    i = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    s = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === n.root &&
                    String(i) === n.margin &&
                    String(s) === n.threshold
                  )
                    return e;
                }),
                o = this.getScrollWatcherConfig(n);
              this.scrollWatcherInit(s, o);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && a();
      }
      scrollWatcherCallback(e, t) {
        const i = e.target;
        this.scrollWatcherIntersecting(e, i),
          i.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(i, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let he = !1;
    setTimeout(() => {
      if (he) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    const ue = (e, t = 1e4) => (
        (e = parseFloat(e + "") || 0), Math.round((e + Number.EPSILON) * t) / t
      ),
      pe = function (e) {
        if (!(e && e instanceof Element && e.offsetParent)) return !1;
        const t = e.scrollHeight > e.clientHeight,
          i = window.getComputedStyle(e).overflowY,
          n = -1 !== i.indexOf("hidden"),
          s = -1 !== i.indexOf("visible");
        return t && !n && !s;
      },
      fe = function (e, t = void 0) {
        return (
          !(!e || e === document.body || (t && e === t)) &&
          (pe(e) ? e : fe(e.parentElement, t))
        );
      },
      ge = function (e) {
        var t = new DOMParser().parseFromString(e, "text/html").body;
        if (t.childElementCount > 1) {
          for (var i = document.createElement("div"); t.firstChild; )
            i.appendChild(t.firstChild);
          return i;
        }
        return t.firstChild;
      },
      me = (e) => `${e || ""}`.split(" ").filter((e) => !!e),
      ve = (e, t, i) => {
        e &&
          me(t).forEach((t) => {
            e.classList.toggle(t, i || !1);
          });
      };
    class be {
      constructor(e) {
        Object.defineProperty(this, "pageX", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          Object.defineProperty(this, "pageY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "clientX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "clientY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "time", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "nativePointer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.nativePointer = e),
          (this.pageX = e.pageX),
          (this.pageY = e.pageY),
          (this.clientX = e.clientX),
          (this.clientY = e.clientY),
          (this.id = self.Touch && e instanceof Touch ? e.identifier : -1),
          (this.time = Date.now());
      }
    }
    const ye = { passive: !1 };
    class we {
      constructor(
        e,
        { start: t = () => !0, move: i = () => {}, end: n = () => {} }
      ) {
        Object.defineProperty(this, "element", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          Object.defineProperty(this, "startCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "moveCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "endCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "currentPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "startPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          (this.element = e),
          (this.startCallback = t),
          (this.moveCallback = i),
          (this.endCallback = n);
        for (const e of [
          "onPointerStart",
          "onTouchStart",
          "onMove",
          "onTouchEnd",
          "onPointerEnd",
          "onWindowBlur",
        ])
          this[e] = this[e].bind(this);
        this.element.addEventListener("mousedown", this.onPointerStart, ye),
          this.element.addEventListener("touchstart", this.onTouchStart, ye),
          this.element.addEventListener("touchmove", this.onMove, ye),
          this.element.addEventListener("touchend", this.onTouchEnd),
          this.element.addEventListener("touchcancel", this.onTouchEnd);
      }
      onPointerStart(e) {
        if (!e.buttons || 0 !== e.button) return;
        const t = new be(e);
        this.currentPointers.some((e) => e.id === t.id) ||
          (this.triggerPointerStart(t, e) &&
            (window.addEventListener("mousemove", this.onMove),
            window.addEventListener("mouseup", this.onPointerEnd),
            window.addEventListener("blur", this.onWindowBlur)));
      }
      onTouchStart(e) {
        for (const t of Array.from(e.changedTouches || []))
          this.triggerPointerStart(new be(t), e);
        window.addEventListener("blur", this.onWindowBlur);
      }
      onMove(e) {
        const t = this.currentPointers.slice(),
          i =
            "changedTouches" in e
              ? Array.from(e.changedTouches || []).map((e) => new be(e))
              : [new be(e)],
          n = [];
        for (const e of i) {
          const t = this.currentPointers.findIndex((t) => t.id === e.id);
          t < 0 || (n.push(e), (this.currentPointers[t] = e));
        }
        n.length && this.moveCallback(e, this.currentPointers.slice(), t);
      }
      onPointerEnd(e) {
        (e.buttons > 0 && 0 !== e.button) ||
          (this.triggerPointerEnd(e, new be(e)),
          window.removeEventListener("mousemove", this.onMove),
          window.removeEventListener("mouseup", this.onPointerEnd),
          window.removeEventListener("blur", this.onWindowBlur));
      }
      onTouchEnd(e) {
        for (const t of Array.from(e.changedTouches || []))
          this.triggerPointerEnd(e, new be(t));
      }
      triggerPointerStart(e, t) {
        return (
          !!this.startCallback(t, e, this.currentPointers.slice()) &&
          (this.currentPointers.push(e), this.startPointers.push(e), !0)
        );
      }
      triggerPointerEnd(e, t) {
        const i = this.currentPointers.findIndex((e) => e.id === t.id);
        i < 0 ||
          (this.currentPointers.splice(i, 1),
          this.startPointers.splice(i, 1),
          this.endCallback(e, t, this.currentPointers.slice()));
      }
      onWindowBlur() {
        this.clear();
      }
      clear() {
        for (; this.currentPointers.length; ) {
          const e = this.currentPointers[this.currentPointers.length - 1];
          this.currentPointers.splice(this.currentPointers.length - 1, 1),
            this.startPointers.splice(this.currentPointers.length - 1, 1),
            this.endCallback(
              new Event("touchend", {
                bubbles: !0,
                cancelable: !0,
                clientX: e.clientX,
                clientY: e.clientY,
              }),
              e,
              this.currentPointers.slice()
            );
        }
      }
      stop() {
        this.element.removeEventListener("mousedown", this.onPointerStart, ye),
          this.element.removeEventListener("touchstart", this.onTouchStart, ye),
          this.element.removeEventListener("touchmove", this.onMove, ye),
          this.element.removeEventListener("touchend", this.onTouchEnd),
          this.element.removeEventListener("touchcancel", this.onTouchEnd),
          window.removeEventListener("mousemove", this.onMove),
          window.removeEventListener("mouseup", this.onPointerEnd),
          window.removeEventListener("blur", this.onWindowBlur);
      }
    }
    function xe(e, t) {
      return t
        ? Math.sqrt(
            Math.pow(t.clientX - e.clientX, 2) +
              Math.pow(t.clientY - e.clientY, 2)
          )
        : 0;
    }
    function Ee(e, t) {
      return t
        ? {
            clientX: (e.clientX + t.clientX) / 2,
            clientY: (e.clientY + t.clientY) / 2,
          }
        : e;
    }
    const Se = (e) =>
        "object" == typeof e &&
        null !== e &&
        e.constructor === Object &&
        "[object Object]" === Object.prototype.toString.call(e),
      Ce = (e, ...t) => {
        const i = t.length;
        for (let n = 0; n < i; n++) {
          const i = t[n] || {};
          Object.entries(i).forEach(([t, i]) => {
            const n = Array.isArray(i) ? [] : {};
            e[t] || Object.assign(e, { [t]: n }),
              Se(i)
                ? Object.assign(e[t], Ce(n, i))
                : Array.isArray(i)
                ? Object.assign(e, { [t]: [...i] })
                : Object.assign(e, { [t]: i });
          });
        }
        return e;
      },
      Te = function (e, t) {
        return e
          .split(".")
          .reduce((e, t) => ("object" == typeof e ? e[t] : void 0), t);
      };
    class Pe {
      constructor(e = {}) {
        Object.defineProperty(this, "options", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: e,
        }),
          Object.defineProperty(this, "events", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map(),
          }),
          this.setOptions(e);
        for (const e of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
          e.startsWith("on") &&
            "function" == typeof this[e] &&
            (this[e] = this[e].bind(this));
      }
      setOptions(e) {
        this.options = e ? Ce({}, this.constructor.defaults, e) : {};
        for (const [e, t] of Object.entries(this.option("on") || {}))
          this.on(e, t);
      }
      option(e, ...t) {
        let i = Te(e, this.options);
        return i && "function" == typeof i && (i = i.call(this, this, ...t)), i;
      }
      optionFor(e, t, i, ...n) {
        let s = Te(t, e);
        var o;
        "string" != typeof (o = s) ||
          isNaN(o) ||
          isNaN(parseFloat(o)) ||
          (s = parseFloat(s)),
          "true" === s && (s = !0),
          "false" === s && (s = !1),
          s && "function" == typeof s && (s = s.call(this, this, e, ...n));
        let a = Te(t, this.options);
        return (
          a && "function" == typeof a
            ? (s = a.call(this, this, e, ...n, s))
            : void 0 === s && (s = a),
          void 0 === s ? i : s
        );
      }
      cn(e) {
        const t = this.options.classes;
        return (t && t[e]) || "";
      }
      localize(e, t = []) {
        e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (e, t, i) => {
          let n = "";
          return (
            i
              ? (n = this.option(
                  `${t[0] + t.toLowerCase().substring(1)}.l10n.${i}`
                ))
              : t && (n = this.option(`l10n.${t}`)),
            n || (n = e),
            n
          );
        });
        for (let i = 0; i < t.length; i++) e = e.split(t[i][0]).join(t[i][1]);
        return e.replace(/\{\{(.*?)\}\}/g, (e, t) => t);
      }
      on(e, t) {
        let i = [];
        "string" == typeof e ? (i = e.split(" ")) : Array.isArray(e) && (i = e),
          this.events || (this.events = new Map()),
          i.forEach((e) => {
            let i = this.events.get(e);
            i || (this.events.set(e, []), (i = [])),
              i.includes(t) || i.push(t),
              this.events.set(e, i);
          });
      }
      off(e, t) {
        let i = [];
        "string" == typeof e ? (i = e.split(" ")) : Array.isArray(e) && (i = e),
          i.forEach((e) => {
            const i = this.events.get(e);
            if (Array.isArray(i)) {
              const e = i.indexOf(t);
              e > -1 && i.splice(e, 1);
            }
          });
      }
      emit(e, ...t) {
        [...(this.events.get(e) || [])].forEach((e) => e(this, ...t)),
          "*" !== e && this.emit("*", e, ...t);
      }
    }
    Object.defineProperty(Pe, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "5.0.32",
    }),
      Object.defineProperty(Pe, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {},
      });
    class Me extends Pe {
      constructor(e = {}) {
        super(e),
          Object.defineProperty(this, "plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          });
      }
      attachPlugins(e = {}) {
        const t = new Map();
        for (const [i, n] of Object.entries(e)) {
          const e = this.option(i),
            s = this.plugins[i];
          s || !1 === e
            ? s && !1 === e && (s.detach(), delete this.plugins[i])
            : t.set(i, new n(this, e || {}));
        }
        for (const [e, i] of t) (this.plugins[e] = i), i.attach();
      }
      detachPlugins(e) {
        e = e || Object.keys(this.plugins);
        for (const t of e) {
          const e = this.plugins[t];
          e && e.detach(), delete this.plugins[t];
        }
        return this.emit("detachPlugins"), this;
      }
    }
    var Oe;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Error = 1)] = "Error"),
        (e[(e.Ready = 2)] = "Ready"),
        (e[(e.Panning = 3)] = "Panning"),
        (e[(e.Mousemove = 4)] = "Mousemove"),
        (e[(e.Destroy = 5)] = "Destroy");
    })(Oe || (Oe = {}));
    const Le = ["a", "b", "c", "d", "e", "f"],
      ke = {
        PANUP: "Move up",
        PANDOWN: "Move down",
        PANLEFT: "Move left",
        PANRIGHT: "Move right",
        ZOOMIN: "Zoom in",
        ZOOMOUT: "Zoom out",
        TOGGLEZOOM: "Toggle zoom level",
        TOGGLE1TO1: "Toggle zoom level",
        ITERATEZOOM: "Toggle zoom level",
        ROTATECCW: "Rotate counterclockwise",
        ROTATECW: "Rotate clockwise",
        FLIPX: "Flip horizontally",
        FLIPY: "Flip vertically",
        FITX: "Fit horizontally",
        FITY: "Fit vertically",
        RESET: "Reset",
        TOGGLEFS: "Toggle fullscreen",
      },
      Ae = {
        content: null,
        width: "auto",
        height: "auto",
        panMode: "drag",
        touch: !0,
        dragMinThreshold: 3,
        lockAxis: !1,
        mouseMoveFactor: 1,
        mouseMoveFriction: 0.12,
        zoom: !0,
        pinchToZoom: !0,
        panOnlyZoomed: "auto",
        minScale: 1,
        maxScale: 2,
        friction: 0.25,
        dragFriction: 0.35,
        decelFriction: 0.05,
        click: "toggleZoom",
        dblClick: !1,
        wheel: "zoom",
        wheelLimit: 7,
        spinner: !0,
        bounds: "auto",
        infinite: !1,
        rubberband: !0,
        bounce: !0,
        maxVelocity: 75,
        transformParent: !1,
        classes: {
          content: "f-panzoom__content",
          isLoading: "is-loading",
          canZoomIn: "can-zoom_in",
          canZoomOut: "can-zoom_out",
          isDraggable: "is-draggable",
          isDragging: "is-dragging",
          inFullscreen: "in-fullscreen",
          htmlHasFullscreen: "with-panzoom-in-fullscreen",
        },
        l10n: ke,
      },
      Ie = '<circle cx="25" cy="25" r="20"></circle>',
      ze =
        '<div class="f-spinner"><svg viewBox="0 0 50 50">' +
        Ie +
        Ie +
        "</svg></div>",
      $e = (e) => e && null !== e && e instanceof Element && "nodeType" in e,
      _e = (e, t) => {
        e &&
          me(t).forEach((t) => {
            e.classList.remove(t);
          });
      },
      De = (e, t) => {
        e &&
          me(t).forEach((t) => {
            e.classList.add(t);
          });
      },
      Re = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
      Fe = 1e4,
      Be = "mousemove",
      je = "drag",
      Ne = "content";
    let He = null,
      qe = null;
    class We extends Me {
      get fits() {
        return (
          this.contentRect.width - this.contentRect.fitWidth < 1 &&
          this.contentRect.height - this.contentRect.fitHeight < 1
        );
      }
      get isTouchDevice() {
        return (
          null === qe && (qe = window.matchMedia("(hover: none)").matches), qe
        );
      }
      get isMobile() {
        return (
          null === He &&
            (He = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
          He
        );
      }
      get panMode() {
        return this.options.panMode !== Be || this.isTouchDevice ? je : Be;
      }
      get panOnlyZoomed() {
        const e = this.options.panOnlyZoomed;
        return "auto" === e ? this.isTouchDevice : e;
      }
      get isInfinite() {
        return this.option("infinite");
      }
      get angle() {
        return (
          (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0
        );
      }
      get targetAngle() {
        return (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0;
      }
      get scale() {
        const { a: e, b: t } = this.current;
        return Math.sqrt(e * e + t * t) || 1;
      }
      get targetScale() {
        const { a: e, b: t } = this.target;
        return Math.sqrt(e * e + t * t) || 1;
      }
      get minScale() {
        return this.option("minScale") || 1;
      }
      get fullScale() {
        const { contentRect: e } = this;
        return e.fullWidth / e.fitWidth || 1;
      }
      get maxScale() {
        return this.fullScale * (this.option("maxScale") || 1) || 1;
      }
      get coverScale() {
        const { containerRect: e, contentRect: t } = this,
          i = Math.max(e.height / t.fitHeight, e.width / t.fitWidth) || 1;
        return Math.min(this.fullScale, i);
      }
      get isScaling() {
        return (
          Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
        );
      }
      get isContentLoading() {
        const e = this.content;
        return !!(e && e instanceof HTMLImageElement) && !e.complete;
      }
      get isResting() {
        if (this.isBouncingX || this.isBouncingY) return !1;
        for (const e of Le) {
          const t = "e" == e || "f" === e ? 1e-4 : 1e-5;
          if (Math.abs(this.target[e] - this.current[e]) > t) return !1;
        }
        return !(!this.ignoreBounds && !this.checkBounds().inBounds);
      }
      constructor(e, t = {}, i = {}) {
        var n;
        if (
          (super(t),
          Object.defineProperty(this, "pointerTracker", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "resizeObserver", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "updateTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "rAF", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "isTicking", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "ignoreBounds", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "isBouncingX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "isBouncingY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "clicks", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "trackingPoints", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "cwd", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "pmme", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "friction", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oe.Init,
          }),
          Object.defineProperty(this, "isDragging", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "content", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "spinner", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "containerRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 },
          }),
          Object.defineProperty(this, "contentRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              fullWidth: 0,
              fullHeight: 0,
              fitWidth: 0,
              fitHeight: 0,
              width: 0,
              height: 0,
            },
          }),
          Object.defineProperty(this, "dragStart", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { x: 0, y: 0, top: 0, left: 0, time: 0 },
          }),
          Object.defineProperty(this, "dragOffset", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { x: 0, y: 0, time: 0 },
          }),
          Object.defineProperty(this, "current", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, Re),
          }),
          Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, Re),
          }),
          Object.defineProperty(this, "velocity", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
          }),
          Object.defineProperty(this, "lockedAxis", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          !e)
        )
          throw new Error("Container Element Not Found");
        (this.container = e),
          this.initContent(),
          this.attachPlugins(Object.assign(Object.assign({}, We.Plugins), i)),
          this.emit("attachPlugins"),
          this.emit("init");
        const s = this.content;
        if (
          (s.addEventListener("load", this.onLoad),
          s.addEventListener("error", this.onError),
          this.isContentLoading)
        ) {
          if (this.option("spinner")) {
            e.classList.add(this.cn("isLoading"));
            const t = ge(ze);
            !e.contains(s) || s.parentElement instanceof HTMLPictureElement
              ? (this.spinner = e.appendChild(t))
              : (this.spinner =
                  (null === (n = s.parentElement) || void 0 === n
                    ? void 0
                    : n.insertBefore(t, s)) || null);
          }
          this.emit("beforeLoad");
        } else
          queueMicrotask(() => {
            this.enable();
          });
      }
      initContent() {
        const { container: e } = this,
          t = this.cn(Ne);
        let i = this.option(Ne) || e.querySelector(`.${t}`);
        if (
          (i ||
            ((i = e.querySelector("img,picture") || e.firstElementChild),
            i && De(i, t)),
          i instanceof HTMLPictureElement && (i = i.querySelector("img")),
          !i)
        )
          throw new Error("No content found");
        this.content = i;
      }
      onLoad() {
        const { spinner: e, container: t, state: i } = this;
        e && (e.remove(), (this.spinner = null)),
          this.option("spinner") && t.classList.remove(this.cn("isLoading")),
          this.emit("afterLoad"),
          i === Oe.Init ? this.enable() : this.updateMetrics();
      }
      onError() {
        this.state !== Oe.Destroy &&
          (this.spinner && (this.spinner.remove(), (this.spinner = null)),
          this.stop(),
          this.detachEvents(),
          (this.state = Oe.Error),
          this.emit("error"));
      }
      attachObserver() {
        var e;
        const t = () => {
          const { container: e, containerRect: t } = this;
          return (
            Math.abs(t.width - e.getBoundingClientRect().width) > 0.1 ||
            Math.abs(t.height - e.getBoundingClientRect().height) > 0.1
          );
        };
        this.resizeObserver ||
          void 0 === window.ResizeObserver ||
          (this.resizeObserver = new ResizeObserver(() => {
            this.updateTimer ||
              (t()
                ? (this.onResize(),
                  this.isMobile &&
                    (this.updateTimer = setTimeout(() => {
                      t() && this.onResize(), (this.updateTimer = null);
                    }, 500)))
                : this.updateTimer &&
                  (clearTimeout(this.updateTimer), (this.updateTimer = null)));
          })),
          null === (e = this.resizeObserver) ||
            void 0 === e ||
            e.observe(this.container);
      }
      detachObserver() {
        var e;
        null === (e = this.resizeObserver) || void 0 === e || e.disconnect();
      }
      attachEvents() {
        const { container: e } = this;
        e.addEventListener("click", this.onClick, { passive: !1, capture: !1 }),
          e.addEventListener("wheel", this.onWheel, { passive: !1 }),
          (this.pointerTracker = new we(e, {
            start: this.onPointerDown,
            move: this.onPointerMove,
            end: this.onPointerUp,
          })),
          document.addEventListener(Be, this.onMouseMove);
      }
      detachEvents() {
        var e;
        const { container: t } = this;
        t.removeEventListener("click", this.onClick, {
          passive: !1,
          capture: !1,
        }),
          t.removeEventListener("wheel", this.onWheel, { passive: !1 }),
          null === (e = this.pointerTracker) || void 0 === e || e.stop(),
          (this.pointerTracker = null),
          document.removeEventListener(Be, this.onMouseMove),
          document.removeEventListener("keydown", this.onKeydown, !0),
          this.clickTimer &&
            (clearTimeout(this.clickTimer), (this.clickTimer = null)),
          this.updateTimer &&
            (clearTimeout(this.updateTimer), (this.updateTimer = null));
      }
      animate() {
        this.setTargetForce();
        const e = this.friction,
          t = this.option("maxVelocity");
        for (const i of Le)
          e
            ? ((this.velocity[i] *= 1 - e),
              t &&
                !this.isScaling &&
                (this.velocity[i] = Math.max(
                  Math.min(this.velocity[i], t),
                  -1 * t
                )),
              (this.current[i] += this.velocity[i]))
            : (this.current[i] = this.target[i]);
        this.setTransform(),
          this.setEdgeForce(),
          !this.isResting || this.isDragging
            ? (this.rAF = requestAnimationFrame(() => this.animate()))
            : this.stop("current");
      }
      setTargetForce() {
        for (const e of Le)
          ("e" === e && this.isBouncingX) ||
            ("f" === e && this.isBouncingY) ||
            (this.velocity[e] =
              (1 / (1 - this.friction) - 1) *
              (this.target[e] - this.current[e]));
      }
      checkBounds(e = 0, t = 0) {
        const { current: i } = this,
          n = i.e + e,
          s = i.f + t,
          o = this.getBounds(),
          { x: a, y: r } = o,
          l = a.min,
          c = a.max,
          d = r.min,
          h = r.max;
        let u = 0,
          p = 0;
        return (
          l !== 1 / 0 && n < l
            ? (u = l - n)
            : c !== 1 / 0 && n > c && (u = c - n),
          d !== 1 / 0 && s < d
            ? (p = d - s)
            : h !== 1 / 0 && s > h && (p = h - s),
          Math.abs(u) < 1e-4 && (u = 0),
          Math.abs(p) < 1e-4 && (p = 0),
          Object.assign(Object.assign({}, o), {
            xDiff: u,
            yDiff: p,
            inBounds: !u && !p,
          })
        );
      }
      clampTargetBounds() {
        const { target: e } = this,
          { x: t, y: i } = this.getBounds();
        t.min !== 1 / 0 && (e.e = Math.max(e.e, t.min)),
          t.max !== 1 / 0 && (e.e = Math.min(e.e, t.max)),
          i.min !== 1 / 0 && (e.f = Math.max(e.f, i.min)),
          i.max !== 1 / 0 && (e.f = Math.min(e.f, i.max));
      }
      calculateContentDim(e = this.current) {
        const { content: t, contentRect: i } = this,
          { fitWidth: n, fitHeight: s, fullWidth: o, fullHeight: a } = i;
        let r = o,
          l = a;
        if (this.option("zoom") || 0 !== this.angle) {
          const i = !(
              t instanceof HTMLImageElement ||
              ("none" !== window.getComputedStyle(t).maxWidth &&
                "none" !== window.getComputedStyle(t).maxHeight)
            ),
            c = i ? o : n,
            d = i ? a : s,
            h = this.getMatrix(e),
            u = new DOMPoint(0, 0).matrixTransform(h),
            p = new DOMPoint(0 + c, 0).matrixTransform(h),
            f = new DOMPoint(0 + c, 0 + d).matrixTransform(h),
            g = new DOMPoint(0, 0 + d).matrixTransform(h),
            m = Math.abs(f.x - u.x),
            v = Math.abs(f.y - u.y),
            b = Math.abs(g.x - p.x),
            y = Math.abs(g.y - p.y);
          (r = Math.max(m, b)), (l = Math.max(v, y));
        }
        return { contentWidth: r, contentHeight: l };
      }
      setEdgeForce() {
        if (
          this.ignoreBounds ||
          this.isDragging ||
          this.panMode === Be ||
          this.targetScale < this.scale
        )
          return (this.isBouncingX = !1), void (this.isBouncingY = !1);
        const { target: e } = this,
          { x: t, y: i, xDiff: n, yDiff: s } = this.checkBounds(),
          o = this.option("maxVelocity");
        let a = this.velocity.e,
          r = this.velocity.f;
        0 !== n
          ? ((this.isBouncingX = !0),
            n * a <= 0
              ? (a += 0.14 * n)
              : ((a = 0.14 * n),
                t.min !== 1 / 0 && (this.target.e = Math.max(e.e, t.min)),
                t.max !== 1 / 0 && (this.target.e = Math.min(e.e, t.max))),
            o && (a = Math.max(Math.min(a, o), -1 * o)))
          : (this.isBouncingX = !1),
          0 !== s
            ? ((this.isBouncingY = !0),
              s * r <= 0
                ? (r += 0.14 * s)
                : ((r = 0.14 * s),
                  i.min !== 1 / 0 && (this.target.f = Math.max(e.f, i.min)),
                  i.max !== 1 / 0 && (this.target.f = Math.min(e.f, i.max))),
              o && (r = Math.max(Math.min(r, o), -1 * o)))
            : (this.isBouncingY = !1),
          this.isBouncingX && (this.velocity.e = a),
          this.isBouncingY && (this.velocity.f = r);
      }
      enable() {
        const { content: e } = this,
          t = new DOMMatrixReadOnly(window.getComputedStyle(e).transform);
        for (const e of Le) this.current[e] = this.target[e] = t[e];
        this.updateMetrics(),
          this.attachObserver(),
          this.attachEvents(),
          (this.state = Oe.Ready),
          this.emit("ready");
      }
      onClick(e) {
        var t;
        "click" === e.type &&
          0 === e.detail &&
          ((this.dragOffset.x = 0), (this.dragOffset.y = 0)),
          this.isDragging &&
            (null === (t = this.pointerTracker) || void 0 === t || t.clear(),
            (this.trackingPoints = []),
            this.startDecelAnim());
        const i = e.target;
        if (!i || e.defaultPrevented) return;
        if (i.hasAttribute("disabled"))
          return e.preventDefault(), void e.stopPropagation();
        if (
          (() => {
            const e = window.getSelection();
            return e && "Range" === e.type;
          })() &&
          !i.closest("button")
        )
          return;
        const n = i.closest("[data-panzoom-action]"),
          s = i.closest("[data-panzoom-change]"),
          o = n || s,
          a = o && $e(o) ? o.dataset : null;
        if (a) {
          const t = a.panzoomChange,
            i = a.panzoomAction;
          if (((t || i) && e.preventDefault(), t)) {
            let i = {};
            try {
              i = JSON.parse(t);
            } catch (e) {
              console && console.warn("The given data was not valid JSON");
            }
            return void this.applyChange(i);
          }
          if (i) return void (this[i] && this[i]());
        }
        if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
          return e.preventDefault(), void e.stopPropagation();
        if (i.closest("[data-fancybox]")) return;
        const r = this.content.getBoundingClientRect(),
          l = this.dragStart;
        if (
          l.time &&
          !this.canZoomOut() &&
          (Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)
        )
          return;
        this.dragStart.time = 0;
        const c = (t) => {
            this.option("zoom", e) &&
              t &&
              "string" == typeof t &&
              /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
                t
              ) &&
              "function" == typeof this[t] &&
              (e.preventDefault(), this[t]({ event: e }));
          },
          d = this.option("click", e),
          h = this.option("dblClick", e);
        h
          ? (this.clicks++,
            1 == this.clicks &&
              (this.clickTimer = setTimeout(() => {
                1 === this.clicks
                  ? (this.emit("click", e), !e.defaultPrevented && d && c(d))
                  : (this.emit("dblClick", e), e.defaultPrevented || c(h)),
                  (this.clicks = 0),
                  (this.clickTimer = null);
              }, 350)))
          : (this.emit("click", e), !e.defaultPrevented && d && c(d));
      }
      addTrackingPoint(e) {
        const t = this.trackingPoints.filter((e) => e.time > Date.now() - 100);
        t.push(e), (this.trackingPoints = t);
      }
      onPointerDown(e, t, i) {
        var n;
        if (!1 === this.option("touch", e)) return !1;
        (this.pwt = 0),
          (this.dragOffset = { x: 0, y: 0, time: 0 }),
          (this.trackingPoints = []);
        const s = this.content.getBoundingClientRect();
        if (
          ((this.dragStart = {
            x: s.x,
            y: s.y,
            top: s.top,
            left: s.left,
            time: Date.now(),
          }),
          this.clickTimer)
        )
          return !1;
        if (this.panMode === Be && this.targetScale > 1)
          return e.preventDefault(), e.stopPropagation(), !1;
        const o = e.composedPath()[0];
        if (!i.length) {
          if (
            [
              "TEXTAREA",
              "OPTION",
              "INPUT",
              "SELECT",
              "VIDEO",
              "IFRAME",
            ].includes(o.nodeName) ||
            o.closest(
              "[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"
            )
          )
            return !1;
          null === (n = window.getSelection()) ||
            void 0 === n ||
            n.removeAllRanges();
        }
        if ("mousedown" === e.type)
          ["A", "BUTTON"].includes(o.nodeName) || e.preventDefault();
        else if (Math.abs(this.velocity.a) > 0.3) return !1;
        return (
          (this.target.e = this.current.e),
          (this.target.f = this.current.f),
          this.stop(),
          this.isDragging ||
            ((this.isDragging = !0),
            this.addTrackingPoint(t),
            this.emit("touchStart", e)),
          !0
        );
      }
      onPointerMove(e, t, i) {
        if (!1 === this.option("touch", e)) return;
        if (!this.isDragging) return;
        if (
          t.length < 2 &&
          this.panOnlyZoomed &&
          ue(this.targetScale) <= ue(this.minScale)
        )
          return;
        if ((this.emit("touchMove", e), e.defaultPrevented)) return;
        this.addTrackingPoint(t[0]);
        const { content: n } = this,
          s = Ee(i[0], i[1]),
          o = Ee(t[0], t[1]);
        let a = 0,
          r = 0;
        if (t.length > 1) {
          const e = n.getBoundingClientRect();
          (a = s.clientX - e.left - 0.5 * e.width),
            (r = s.clientY - e.top - 0.5 * e.height);
        }
        const l = xe(i[0], i[1]),
          c = xe(t[0], t[1]);
        let d = l ? c / l : 1,
          h = o.clientX - s.clientX,
          u = o.clientY - s.clientY;
        (this.dragOffset.x += h),
          (this.dragOffset.y += u),
          (this.dragOffset.time = Date.now() - this.dragStart.time);
        let p =
          ue(this.targetScale) === ue(this.minScale) && this.option("lockAxis");
        if (p && !this.lockedAxis)
          if ("xy" === p || "y" === p || "touchmove" === e.type) {
            if (
              Math.abs(this.dragOffset.x) < 6 &&
              Math.abs(this.dragOffset.y) < 6
            )
              return void e.preventDefault();
            const t = Math.abs(
              (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI
            );
            (this.lockedAxis = t > 45 && t < 135 ? "y" : "x"),
              (this.dragOffset.x = 0),
              (this.dragOffset.y = 0),
              (h = 0),
              (u = 0);
          } else this.lockedAxis = p;
        if (
          (fe(e.target, this.content) && ((p = "x"), (this.dragOffset.y = 0)),
          p &&
            "xy" !== p &&
            this.lockedAxis !== p &&
            ue(this.targetScale) === ue(this.minScale))
        )
          return;
        e.cancelable && e.preventDefault(),
          this.container.classList.add(this.cn("isDragging"));
        const f = this.checkBounds(h, u);
        this.option("rubberband")
          ? ("x" !== this.isInfinite &&
              ((f.xDiff > 0 && h < 0) || (f.xDiff < 0 && h > 0)) &&
              (h *= Math.max(
                0,
                0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * f.xDiff)
              )),
            "y" !== this.isInfinite &&
              ((f.yDiff > 0 && u < 0) || (f.yDiff < 0 && u > 0)) &&
              (u *= Math.max(
                0,
                0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * f.yDiff)
              )))
          : (f.xDiff && (h = 0), f.yDiff && (u = 0));
        const g = this.targetScale,
          m = this.minScale,
          v = this.maxScale;
        g < 0.5 * m && (d = Math.max(d, m)),
          g > 1.5 * v && (d = Math.min(d, v)),
          "y" === this.lockedAxis && ue(g) === ue(m) && (h = 0),
          "x" === this.lockedAxis && ue(g) === ue(m) && (u = 0),
          this.applyChange({
            originX: a,
            originY: r,
            panX: h,
            panY: u,
            scale: d,
            friction: this.option("dragFriction"),
            ignoreBounds: !0,
          });
      }
      onPointerUp(e, t, i) {
        if (i.length)
          return (
            (this.dragOffset.x = 0),
            (this.dragOffset.y = 0),
            void (this.trackingPoints = [])
          );
        this.container.classList.remove(this.cn("isDragging")),
          this.isDragging &&
            (this.addTrackingPoint(t),
            this.panOnlyZoomed &&
              this.contentRect.width - this.contentRect.fitWidth < 1 &&
              this.contentRect.height - this.contentRect.fitHeight < 1 &&
              (this.trackingPoints = []),
            fe(e.target, this.content) &&
              "y" === this.lockedAxis &&
              (this.trackingPoints = []),
            this.emit("touchEnd", e),
            (this.isDragging = !1),
            (this.lockedAxis = !1),
            this.state !== Oe.Destroy &&
              (e.defaultPrevented || this.startDecelAnim()));
      }
      startDecelAnim() {
        var e;
        const t = this.isScaling;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.isBouncingX = !1),
          (this.isBouncingY = !1);
        for (const e of Le) this.velocity[e] = 0;
        (this.target.e = this.current.e),
          (this.target.f = this.current.f),
          _e(this.container, "is-scaling"),
          _e(this.container, "is-animating"),
          (this.isTicking = !1);
        const { trackingPoints: i } = this,
          n = i[0],
          s = i[i.length - 1];
        let o = 0,
          a = 0,
          r = 0;
        s &&
          n &&
          ((o = s.clientX - n.clientX),
          (a = s.clientY - n.clientY),
          (r = s.time - n.time));
        const l =
          (null === (e = window.visualViewport) || void 0 === e
            ? void 0
            : e.scale) || 1;
        1 !== l && ((o *= l), (a *= l));
        let c = 0,
          d = 0,
          h = 0,
          u = 0,
          p = this.option("decelFriction");
        const f = this.targetScale;
        if (r > 0) {
          (h = Math.abs(o) > 3 ? o / (r / 30) : 0),
            (u = Math.abs(a) > 3 ? a / (r / 30) : 0);
          const e = this.option("maxVelocity");
          e &&
            ((h = Math.max(Math.min(h, e), -1 * e)),
            (u = Math.max(Math.min(u, e), -1 * e)));
        }
        h && (c = h / (1 / (1 - p) - 1)),
          u && (d = u / (1 / (1 - p) - 1)),
          ("y" === this.option("lockAxis") ||
            ("xy" === this.option("lockAxis") &&
              "y" === this.lockedAxis &&
              ue(f) === this.minScale)) &&
            (c = h = 0),
          ("x" === this.option("lockAxis") ||
            ("xy" === this.option("lockAxis") &&
              "x" === this.lockedAxis &&
              ue(f) === this.minScale)) &&
            (d = u = 0);
        const g = this.dragOffset.x,
          m = this.dragOffset.y,
          v = this.option("dragMinThreshold") || 0;
        Math.abs(g) < v && Math.abs(m) < v && ((c = d = 0), (h = u = 0)),
          ((this.option("zoom") &&
            (f < this.minScale - 1e-5 || f > this.maxScale + 1e-5)) ||
            (t && !c && !d)) &&
            (p = 0.35),
          this.applyChange({ panX: c, panY: d, friction: p }),
          this.emit("decel", h, u, g, m);
      }
      onWheel(e) {
        var t = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(
          function (e, t) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }
        );
        const i = Math.max(-1, Math.min(1, t));
        if ((this.emit("wheel", e, i), this.panMode === Be)) return;
        if (e.defaultPrevented) return;
        const n = this.option("wheel");
        "pan" === n
          ? (e.preventDefault(),
            (this.panOnlyZoomed && !this.canZoomOut()) ||
              this.applyChange({
                panX: 2 * -e.deltaX,
                panY: 2 * -e.deltaY,
                bounce: !1,
              }))
          : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(e);
      }
      onMouseMove(e) {
        this.panWithMouse(e);
      }
      onKeydown(e) {
        "Escape" === e.key && this.toggleFS();
      }
      onResize() {
        this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
      }
      setTransform() {
        this.emit("beforeTransform");
        const { current: e, target: t, content: i, contentRect: n } = this,
          s = Object.assign({}, Re);
        for (const i of Le) {
          const n = "e" == i || "f" === i ? Fe : 1e5;
          (s[i] = ue(e[i], n)),
            Math.abs(t[i] - e[i]) < ("e" == i || "f" === i ? 0.51 : 0.001) &&
              (e[i] = t[i]);
        }
        let { a: o, b: a, c: r, d: l, e: c, f: d } = s,
          h = `matrix(${o}, ${a}, ${r}, ${l}, ${c}, ${d})`,
          u =
            i.parentElement instanceof HTMLPictureElement ? i.parentElement : i;
        if (
          (this.option("transformParent") && (u = u.parentElement || u),
          u.style.transform === h)
        )
          return;
        u.style.transform = h;
        const { contentWidth: p, contentHeight: f } =
          this.calculateContentDim();
        (n.width = p), (n.height = f), this.emit("afterTransform");
      }
      updateMetrics(e = !1) {
        var t;
        if (!this || this.state === Oe.Destroy) return;
        if (this.isContentLoading) return;
        const i = Math.max(
            1,
            (null === (t = window.visualViewport) || void 0 === t
              ? void 0
              : t.scale) || 1
          ),
          { container: n, content: s } = this,
          o = s instanceof HTMLImageElement,
          a = n.getBoundingClientRect(),
          r = getComputedStyle(this.container);
        let l = a.width * i,
          c = a.height * i;
        const d = parseFloat(r.paddingTop) + parseFloat(r.paddingBottom),
          h = l - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight)),
          u = c - d;
        this.containerRect = {
          width: l,
          height: c,
          innerWidth: h,
          innerHeight: u,
        };
        let p = this.option("width") || "auto",
          f = this.option("height") || "auto";
        "auto" === p &&
          (p =
            parseFloat(s.dataset.width || "") ||
            ((e) => {
              let t = 0;
              return (
                (t =
                  e instanceof HTMLImageElement
                    ? e.naturalWidth
                    : e instanceof SVGElement
                    ? e.width.baseVal.value
                    : Math.max(e.offsetWidth, e.scrollWidth)),
                t || 0
              );
            })(s)),
          "auto" === f &&
            (f =
              parseFloat(s.dataset.height || "") ||
              ((e) => {
                let t = 0;
                return (
                  (t =
                    e instanceof HTMLImageElement
                      ? e.naturalHeight
                      : e instanceof SVGElement
                      ? e.height.baseVal.value
                      : Math.max(e.offsetHeight, e.scrollHeight)),
                  t || 0
                );
              })(s));
        let g =
          s.parentElement instanceof HTMLPictureElement ? s.parentElement : s;
        this.option("transformParent") && (g = g.parentElement || g);
        const m = g.getAttribute("style") || "";
        g.style.setProperty("transform", "none", "important"),
          o && ((g.style.width = ""), (g.style.height = "")),
          g.offsetHeight;
        const v = s.getBoundingClientRect();
        let b = v.width * i,
          y = v.height * i,
          w = 0,
          x = 0;
        o &&
          (Math.abs(p - b) > 1 || Math.abs(f - y) > 1) &&
          ({
            width: b,
            height: y,
            top: w,
            left: x,
          } = ((e, t, i, n) => {
            const s = i / n;
            return (
              s > e / t ? ((i = e), (n = e / s)) : ((i = t * s), (n = t)),
              { width: i, height: n, top: 0.5 * (t - n), left: 0.5 * (e - i) }
            );
          })(b, y, p, f)),
          (this.contentRect = Object.assign(
            Object.assign({}, this.contentRect),
            {
              top: v.top - a.top + w,
              bottom: a.bottom - v.bottom + w,
              left: v.left - a.left + x,
              right: a.right - v.right + x,
              fitWidth: b,
              fitHeight: y,
              width: b,
              height: y,
              fullWidth: p,
              fullHeight: f,
            }
          )),
          (g.style.cssText = m),
          o && ((g.style.width = `${b}px`), (g.style.height = `${y}px`)),
          this.setTransform(),
          !0 !== e && this.emit("refresh"),
          this.ignoreBounds ||
            (ue(this.targetScale) < ue(this.minScale)
              ? this.zoomTo(this.minScale, { friction: 0 })
              : this.targetScale > this.maxScale
              ? this.zoomTo(this.maxScale, { friction: 0 })
              : this.state === Oe.Init ||
                this.checkBounds().inBounds ||
                this.requestTick()),
          this.updateControls();
      }
      calculateBounds() {
        const { contentWidth: e, contentHeight: t } = this.calculateContentDim(
            this.target
          ),
          { targetScale: i, lockedAxis: n } = this,
          { fitWidth: s, fitHeight: o } = this.contentRect;
        let a = 0,
          r = 0,
          l = 0,
          c = 0;
        const d = this.option("infinite");
        if (!0 === d || (n && d === n))
          (a = -1 / 0), (l = 1 / 0), (r = -1 / 0), (c = 1 / 0);
        else {
          let { containerRect: n, contentRect: d } = this,
            h = ue(s * i, Fe),
            u = ue(o * i, Fe),
            { innerWidth: p, innerHeight: f } = n;
          if (
            (n.width === h && (p = n.width),
            n.width === u && (f = n.height),
            e > p)
          ) {
            (l = 0.5 * (e - p)), (a = -1 * l);
            let t = 0.5 * (d.right - d.left);
            (a += t), (l += t);
          }
          if (
            (s > p && e < p && ((a -= 0.5 * (s - p)), (l -= 0.5 * (s - p))),
            t > f)
          ) {
            (c = 0.5 * (t - f)), (r = -1 * c);
            let e = 0.5 * (d.bottom - d.top);
            (r += e), (c += e);
          }
          o > f && t < f && ((a -= 0.5 * (o - f)), (l -= 0.5 * (o - f)));
        }
        return { x: { min: a, max: l }, y: { min: r, max: c } };
      }
      getBounds() {
        const e = this.option("bounds");
        return "auto" !== e ? e : this.calculateBounds();
      }
      updateControls() {
        const e = this,
          t = e.container,
          {
            panMode: i,
            contentRect: n,
            fullScale: s,
            targetScale: o,
            coverScale: a,
            maxScale: r,
            minScale: l,
          } = e;
        let c =
            {
              toggleMax: o - l < 0.5 * (r - l) ? r : l,
              toggleCover: o - l < 0.5 * (a - l) ? a : l,
              toggleZoom: o - l < 0.5 * (s - l) ? s : l,
            }[e.option("click") || ""] || l,
          d = e.canZoomIn(),
          h = e.canZoomOut(),
          u = i === je && !!this.option("touch"),
          p = h && u;
        if (
          (u &&
            (ue(o) < ue(l) && !this.panOnlyZoomed && (p = !0),
            (ue(n.width, 1) > ue(n.fitWidth, 1) ||
              ue(n.height, 1) > ue(n.fitHeight, 1)) &&
              (p = !0)),
          ue(n.width * o, 1) < ue(n.fitWidth, 1) && (p = !1),
          i === Be && (p = !1),
          ve(t, this.cn("isDraggable"), p),
          !this.option("zoom"))
        )
          return;
        let f = d && ue(c) > ue(o),
          g = !f && !p && h && ue(c) < ue(o);
        ve(t, this.cn("canZoomIn"), f), ve(t, this.cn("canZoomOut"), g);
        for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))
          d
            ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
            : (e.setAttribute("disabled", ""),
              e.setAttribute("tabindex", "-1"));
        for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))
          h
            ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
            : (e.setAttribute("disabled", ""),
              e.setAttribute("tabindex", "-1"));
        for (const e of t.querySelectorAll(
          '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
        )) {
          d || h
            ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
            : (e.setAttribute("disabled", ""),
              e.setAttribute("tabindex", "-1"));
          const t = e.querySelector("g");
          t && (t.style.display = d ? "" : "none");
        }
      }
      panTo({
        x: e = this.target.e,
        y: t = this.target.f,
        scale: i = this.targetScale,
        friction: n = this.option("friction"),
        angle: s = 0,
        originX: o = 0,
        originY: a = 0,
        flipX: r = !1,
        flipY: l = !1,
        ignoreBounds: c = !1,
      }) {
        this.state !== Oe.Destroy &&
          this.applyChange({
            panX: e - this.target.e,
            panY: t - this.target.f,
            scale: i / this.targetScale,
            angle: s,
            originX: o,
            originY: a,
            friction: n,
            flipX: r,
            flipY: l,
            ignoreBounds: c,
          });
      }
      applyChange({
        panX: e = 0,
        panY: t = 0,
        scale: i = 1,
        angle: n = 0,
        originX: s = -this.current.e,
        originY: o = -this.current.f,
        friction: a = this.option("friction"),
        flipX: r = !1,
        flipY: l = !1,
        ignoreBounds: c = !1,
        bounce: d = this.option("bounce"),
      }) {
        const h = this.state;
        if (h === Oe.Destroy) return;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.friction = a || 0),
          (this.ignoreBounds = c);
        const { current: u } = this,
          p = u.e,
          f = u.f,
          g = this.getMatrix(this.target);
        let m = new DOMMatrix().translate(p, f).translate(s, o).translate(e, t);
        if (this.option("zoom")) {
          if (!c) {
            const e = this.targetScale,
              t = this.minScale,
              n = this.maxScale;
            e * i < t && (i = t / e), e * i > n && (i = n / e);
          }
          m = m.scale(i);
        }
        (m = m.translate(-s, -o).translate(-p, -f).multiply(g)),
          n && (m = m.rotate(n)),
          r && (m = m.scale(-1, 1)),
          l && (m = m.scale(1, -1));
        for (const e of Le)
          "e" !== e &&
          "f" !== e &&
          (m[e] > this.minScale + 1e-5 || m[e] < this.minScale - 1e-5)
            ? (this.target[e] = m[e])
            : (this.target[e] = ue(m[e], Fe));
        (this.targetScale < this.scale ||
          Math.abs(i - 1) > 0.1 ||
          this.panMode === Be ||
          !1 === d) &&
          !c &&
          this.clampTargetBounds(),
          h === Oe.Init
            ? this.animate()
            : this.isResting || ((this.state = Oe.Panning), this.requestTick());
      }
      stop(e = !1) {
        if (this.state === Oe.Init || this.state === Oe.Destroy) return;
        const t = this.isTicking;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.isBouncingX = !1),
          (this.isBouncingY = !1);
        for (const t of Le)
          (this.velocity[t] = 0),
            "current" === e
              ? (this.current[t] = this.target[t])
              : "target" === e && (this.target[t] = this.current[t]);
        this.setTransform(),
          _e(this.container, "is-scaling"),
          _e(this.container, "is-animating"),
          (this.isTicking = !1),
          (this.state = Oe.Ready),
          t && (this.emit("endAnimation"), this.updateControls());
      }
      requestTick() {
        this.isTicking ||
          (this.emit("startAnimation"),
          this.updateControls(),
          De(this.container, "is-animating"),
          this.isScaling && De(this.container, "is-scaling")),
          (this.isTicking = !0),
          this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
      }
      panWithMouse(e, t = this.option("mouseMoveFriction")) {
        if (((this.pmme = e), this.panMode !== Be || !e)) return;
        if (ue(this.targetScale) <= ue(this.minScale)) return;
        this.emit("mouseMove", e);
        const { container: i, containerRect: n, contentRect: s } = this,
          o = n.width,
          a = n.height,
          r = i.getBoundingClientRect(),
          l = (e.clientX || 0) - r.left,
          c = (e.clientY || 0) - r.top;
        let { contentWidth: d, contentHeight: h } = this.calculateContentDim(
          this.target
        );
        const u = this.option("mouseMoveFactor");
        u > 1 && (d !== o && (d *= u), h !== a && (h *= u));
        let p = 0.5 * (d - o) - (((l / o) * 100) / 100) * (d - o);
        p += 0.5 * (s.right - s.left);
        let f = 0.5 * (h - a) - (((c / a) * 100) / 100) * (h - a);
        (f += 0.5 * (s.bottom - s.top)),
          this.applyChange({
            panX: p - this.target.e,
            panY: f - this.target.f,
            friction: t,
          });
      }
      zoomWithWheel(e) {
        if (this.state === Oe.Destroy || this.state === Oe.Init) return;
        const t = Date.now();
        if (t - this.pwt < 45) return void e.preventDefault();
        this.pwt = t;
        var i = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(
          function (e, t) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }
        );
        const n = Math.max(-1, Math.min(1, i)),
          { targetScale: s, maxScale: o, minScale: a } = this;
        let r = (s * (100 + 45 * n)) / 100;
        ue(r) < ue(a) && ue(s) <= ue(a)
          ? ((this.cwd += Math.abs(n)), (r = a))
          : ue(r) > ue(o) && ue(s) >= ue(o)
          ? ((this.cwd += Math.abs(n)), (r = o))
          : ((this.cwd = 0), (r = Math.max(Math.min(r, o), a))),
          this.cwd > this.option("wheelLimit") ||
            (e.preventDefault(),
            ue(r) !== ue(s) && this.zoomTo(r, { event: e }));
      }
      canZoomIn() {
        return (
          this.option("zoom") &&
          (ue(this.contentRect.width, 1) < ue(this.contentRect.fitWidth, 1) ||
            ue(this.targetScale) < ue(this.maxScale))
        );
      }
      canZoomOut() {
        return this.option("zoom") && ue(this.targetScale) > ue(this.minScale);
      }
      zoomIn(e = 1.25, t) {
        this.zoomTo(this.targetScale * e, t);
      }
      zoomOut(e = 0.8, t) {
        this.zoomTo(this.targetScale * e, t);
      }
      zoomToFit(e) {
        this.zoomTo("fit", e);
      }
      zoomToCover(e) {
        this.zoomTo("cover", e);
      }
      zoomToFull(e) {
        this.zoomTo("full", e);
      }
      zoomToMax(e) {
        this.zoomTo("max", e);
      }
      toggleZoom(e) {
        this.zoomTo(
          this.targetScale - this.minScale <
            0.5 * (this.fullScale - this.minScale)
            ? "full"
            : "fit",
          e
        );
      }
      toggleMax(e) {
        this.zoomTo(
          this.targetScale - this.minScale <
            0.5 * (this.maxScale - this.minScale)
            ? "max"
            : "fit",
          e
        );
      }
      toggleCover(e) {
        this.zoomTo(
          this.targetScale - this.minScale <
            0.5 * (this.coverScale - this.minScale)
            ? "cover"
            : "fit",
          e
        );
      }
      iterateZoom(e) {
        this.zoomTo("next", e);
      }
      zoomTo(
        e = 1,
        {
          friction: t = "auto",
          originX: i = "auto",
          originY: n = "auto",
          event: s,
        } = {}
      ) {
        if (this.isContentLoading || this.state === Oe.Destroy) return;
        const { targetScale: o } = this;
        this.stop();
        let a = 1;
        if (
          (this.panMode === Be && (s = this.pmme || s),
          s || "auto" === i || "auto" === n)
        ) {
          const e = this.content.getBoundingClientRect(),
            t = this.container.getBoundingClientRect(),
            o = s ? s.clientX : t.left + 0.5 * t.width,
            a = s ? s.clientY : t.top + 0.5 * t.height;
          (i = o - e.left - 0.5 * e.width), (n = a - e.top - 0.5 * e.height);
        }
        const r = this.fullScale,
          l = this.maxScale,
          c = this.coverScale;
        if ("number" == typeof e) a = e / o || 1;
        else if ("full" === e) a = r / o || 1;
        else if ("cover" === e) a = c / o || 1;
        else if ("max" === e) a = l / o || 1;
        else if ("fit" === e) a = 1 / o || 1;
        else if ("next" === e) {
          let e = [1, r, l].sort((e, t) => e - t),
            t = e.findIndex((e) => e > o + 1e-5);
          a = e[t] / o || 1 / o;
        }
        (t = "auto" === t ? (a > 1 ? 0.15 : 0.25) : t),
          this.applyChange({ scale: a, originX: i, originY: n, friction: t }),
          s && this.panMode === Be && this.panWithMouse(s, t);
      }
      rotateCCW() {
        this.applyChange({ angle: -90 });
      }
      rotateCW() {
        this.applyChange({ angle: 90 });
      }
      flipX() {
        this.applyChange({ flipX: !0 });
      }
      flipY() {
        this.applyChange({ flipY: !0 });
      }
      fitX() {
        this.stop("target");
        const { containerRect: e, contentRect: t, target: i } = this;
        this.applyChange({
          panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
          panY: 0.5 * e.height - (t.top + 0.5 * t.fitHeight) - i.f,
          scale: e.width / t.fitWidth / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: !0,
        });
      }
      fitY() {
        this.stop("target");
        const { containerRect: e, contentRect: t, target: i } = this;
        this.applyChange({
          panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
          panY: 0.5 * e.innerHeight - (t.top + 0.5 * t.fitHeight) - i.f,
          scale: e.height / t.fitHeight / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: !0,
        });
      }
      toggleFS() {
        const { container: e } = this,
          t = this.cn("inFullscreen"),
          i = this.cn("htmlHasFullscreen");
        e.classList.toggle(t);
        const n = e.classList.contains(t);
        n
          ? (document.documentElement.classList.add(i),
            document.addEventListener("keydown", this.onKeydown, !0))
          : (document.documentElement.classList.remove(i),
            document.removeEventListener("keydown", this.onKeydown, !0)),
          this.updateMetrics(),
          this.emit(n ? "enterFS" : "exitFS");
      }
      getMatrix(e = this.current) {
        const { a: t, b: i, c: n, d: s, e: o, f: a } = e;
        return new DOMMatrix([t, i, n, s, o, a]);
      }
      reset(e) {
        if (this.state !== Oe.Init && this.state !== Oe.Destroy) {
          this.stop("current");
          for (const e of Le) this.target[e] = Re[e];
          (this.target.a = this.minScale),
            (this.target.d = this.minScale),
            this.clampTargetBounds(),
            this.isResting ||
              ((this.friction = void 0 === e ? this.option("friction") : e),
              (this.state = Oe.Panning),
              this.requestTick());
        }
      }
      destroy() {
        this.stop(),
          (this.state = Oe.Destroy),
          this.detachEvents(),
          this.detachObserver();
        const { container: e, content: t } = this,
          i = this.option("classes") || {};
        for (const t of Object.values(i)) e.classList.remove(t + "");
        t &&
          (t.removeEventListener("load", this.onLoad),
          t.removeEventListener("error", this.onError)),
          this.detachPlugins();
      }
    }
    Object.defineProperty(We, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Ae,
    }),
      Object.defineProperty(We, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {},
      });
    const Ge = function (e, t) {
        let i = !0;
        return (...n) => {
          i &&
            ((i = !1),
            e(...n),
            setTimeout(() => {
              i = !0;
            }, t));
        };
      },
      Ve = (e, t) => {
        let i = [];
        return (
          e.childNodes.forEach((e) => {
            e.nodeType !== Node.ELEMENT_NODE ||
              (t && !e.matches(t)) ||
              i.push(e);
          }),
          i
        );
      };
    var Xe;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Destroy = 2)] = "Destroy");
    })(Xe || (Xe = {}));
    const Ye = (e) => {
        if ("string" == typeof e || e instanceof HTMLElement) e = { html: e };
        else {
          const t = e.thumb;
          void 0 !== t &&
            ("string" == typeof t && (e.thumbSrc = t),
            t instanceof HTMLImageElement &&
              ((e.thumbEl = t), (e.thumbElSrc = t.src), (e.thumbSrc = t.src)),
            delete e.thumb);
        }
        return Object.assign(
          {
            html: "",
            el: null,
            isDom: !1,
            class: "",
            customClass: "",
            index: -1,
            dim: 0,
            gap: 0,
            pos: 0,
            transition: !1,
          },
          e
        );
      },
      Ue = (e = {}) =>
        Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, e);
    class Ze extends Pe {
      constructor(e, t) {
        super(t),
          Object.defineProperty(this, "instance", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
      }
      attach() {}
      detach() {}
    }
    class Ke extends Ze {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "isDynamic", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "list", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onRefresh() {
        this.refresh();
      }
      build() {
        let e = this.list;
        if (!e) {
          (e = document.createElement("ul")),
            De(e, this.cn("list")),
            e.setAttribute("role", "tablist");
          const t = this.instance.container;
          t.appendChild(e), De(t, this.cn("hasDots")), (this.list = e);
        }
        return e;
      }
      refresh() {
        var e;
        const t = this.instance.pages.length,
          i = Math.min(2, this.option("minCount")),
          n = Math.max(2e3, this.option("maxCount")),
          s = this.option("dynamicFrom");
        if (t < i || t > n) return void this.cleanup();
        const o = "number" == typeof s && t > 5 && t >= s,
          a =
            !this.list ||
            this.isDynamic !== o ||
            this.list.children.length !== t;
        a && this.cleanup();
        const r = this.build();
        if ((ve(r, this.cn("isDynamic"), !!o), a))
          for (let e = 0; e < t; e++) r.append(this.createItem(e));
        let l,
          c = 0;
        for (const t of [...r.children]) {
          const i = c === this.instance.page;
          i && (l = t),
            ve(t, this.cn("isCurrent"), i),
            null === (e = t.children[0]) ||
              void 0 === e ||
              e.setAttribute("aria-selected", i ? "true" : "false");
          for (const e of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
            _e(t, this.cn(e));
          c++;
        }
        if (((l = l || r.firstChild), o && l)) {
          const e = l.previousElementSibling,
            t = e && e.previousElementSibling;
          De(e, this.cn("isPrev")), De(t, this.cn("isBeforePrev"));
          const i = l.nextElementSibling,
            n = i && i.nextElementSibling;
          De(i, this.cn("isNext")), De(n, this.cn("isAfterNext"));
        }
        this.isDynamic = o;
      }
      createItem(e = 0) {
        var t;
        const i = document.createElement("li");
        i.setAttribute("role", "presentation");
        const n = ge(
          this.instance
            .localize(this.option("dotTpl"), [["%d", e + 1]])
            .replace(/\%i/g, e + "")
        );
        return (
          i.appendChild(n),
          null === (t = i.children[0]) ||
            void 0 === t ||
            t.setAttribute("role", "tab"),
          i
        );
      }
      cleanup() {
        this.list && (this.list.remove(), (this.list = null)),
          (this.isDynamic = !1),
          _e(this.instance.container, this.cn("hasDots"));
      }
      attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
      detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
          this.cleanup();
      }
    }
    Object.defineProperty(Ke, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        classes: {
          list: "f-carousel__dots",
          isDynamic: "is-dynamic",
          hasDots: "has-dots",
          dot: "f-carousel__dot",
          isBeforePrev: "is-before-prev",
          isPrev: "is-prev",
          isCurrent: "is-current",
          isNext: "is-next",
          isAfterNext: "is-after-next",
        },
        dotTpl:
          '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
        dynamicFrom: 11,
        maxCount: 1 / 0,
        minCount: 2,
      },
    });
    const Je = "disabled",
      Qe = "next",
      et = "prev";
    class tt extends Ze {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "prev", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "next", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "isDom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          });
      }
      onRefresh() {
        const e = this.instance,
          t = e.pages.length,
          i = e.page;
        if (t < 2) return void this.cleanup();
        this.build();
        let n = this.prev,
          s = this.next;
        n &&
          s &&
          (n.removeAttribute(Je),
          s.removeAttribute(Je),
          e.isInfinite ||
            (i <= 0 && n.setAttribute(Je, ""),
            i >= t - 1 && s.setAttribute(Je, "")));
      }
      addBtn(e) {
        var t;
        const i = this.instance,
          n = document.createElement("button");
        n.setAttribute("tabindex", "0"),
          n.setAttribute("title", i.localize(`{{${e.toUpperCase()}}}`)),
          De(
            n,
            this.cn("button") + " " + this.cn(e === Qe ? "isNext" : "isPrev")
          );
        const s = i.isRTL ? (e === Qe ? et : Qe) : e;
        var o;
        return (
          (n.innerHTML = i.localize(this.option(`${s}Tpl`))),
          (n.dataset[
            `carousel${
              ((o = e),
              o
                ? o.match("^[a-z]")
                  ? o.charAt(0).toUpperCase() + o.substring(1)
                  : o
                : "")
            }`
          ] = "true"),
          null === (t = this.container) || void 0 === t || t.appendChild(n),
          n
        );
      }
      build() {
        const e = this.instance.container,
          t = this.cn("container");
        let { container: i, prev: n, next: s } = this;
        i || ((i = e.querySelector("." + t)), (this.isDom = !!i)),
          i ||
            ((i = document.createElement("div")), De(i, t), e.appendChild(i)),
          (this.container = i),
          s || (s = i.querySelector("[data-carousel-next]")),
          s || (s = this.addBtn(Qe)),
          (this.next = s),
          n || (n = i.querySelector("[data-carousel-prev]")),
          n || (n = this.addBtn(et)),
          (this.prev = n);
      }
      cleanup() {
        this.isDom ||
          (this.prev && this.prev.remove(),
          this.next && this.next.remove(),
          this.container && this.container.remove()),
          (this.prev = null),
          (this.next = null),
          (this.container = null),
          (this.isDom = !1);
      }
      attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
      detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
          this.cleanup();
      }
    }
    Object.defineProperty(tt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        classes: {
          container: "f-carousel__nav",
          button: "f-button",
          isNext: "is-next",
          isPrev: "is-prev",
        },
        nextTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        prevTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
      },
    });
    class it extends Ze {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "selectedIndex", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "nav", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      addAsTargetFor(e) {
        (this.target = this.instance), (this.nav = e), this.attachEvents();
      }
      addAsNavFor(e) {
        (this.nav = this.instance), (this.target = e), this.attachEvents();
      }
      attachEvents() {
        const { nav: e, target: t } = this;
        e &&
          t &&
          ((e.options.initialSlide = t.options.initialPage),
          e.state === Xe.Ready
            ? this.onNavReady(e)
            : e.on("ready", this.onNavReady),
          t.state === Xe.Ready
            ? this.onTargetReady(t)
            : t.on("ready", this.onTargetReady));
      }
      onNavReady(e) {
        e.on("createSlide", this.onNavCreateSlide),
          e.on("Panzoom.click", this.onNavClick),
          e.on("Panzoom.touchEnd", this.onNavTouch),
          this.onTargetChange();
      }
      onTargetReady(e) {
        e.on("change", this.onTargetChange),
          e.on("Panzoom.refresh", this.onTargetChange),
          this.onTargetChange();
      }
      onNavClick(e, t, i) {
        this.onNavTouch(e, e.panzoom, i);
      }
      onNavTouch(e, t, i) {
        var n, s;
        if (Math.abs(t.dragOffset.x) > 3 || Math.abs(t.dragOffset.y) > 3)
          return;
        const o = i.target,
          { nav: a, target: r } = this;
        if (!a || !r || !o) return;
        const l = o.closest("[data-index]");
        if ((i.stopPropagation(), i.preventDefault(), !l)) return;
        const c = parseInt(l.dataset.index || "", 10) || 0,
          d = r.getPageForSlide(c),
          h = a.getPageForSlide(c);
        a.slideTo(h),
          r.slideTo(d, {
            friction:
              (null ===
                (s =
                  null === (n = this.nav) || void 0 === n
                    ? void 0
                    : n.plugins) || void 0 === s
                ? void 0
                : s.Sync.option("friction")) || 0,
          }),
          this.markSelectedSlide(c);
      }
      onNavCreateSlide(e, t) {
        t.index === this.selectedIndex && this.markSelectedSlide(t.index);
      }
      onTargetChange() {
        var e, t;
        const { target: i, nav: n } = this;
        if (!i || !n) return;
        if (n.state !== Xe.Ready || i.state !== Xe.Ready) return;
        const s =
            null ===
              (t =
                null === (e = i.pages[i.page]) || void 0 === e
                  ? void 0
                  : e.slides[0]) || void 0 === t
              ? void 0
              : t.index,
          o = n.getPageForSlide(s);
        this.markSelectedSlide(s),
          n.slideTo(
            o,
            null === n.prevPage && null === i.prevPage
              ? { friction: 0 }
              : void 0
          );
      }
      markSelectedSlide(e) {
        const t = this.nav;
        t &&
          t.state === Xe.Ready &&
          ((this.selectedIndex = e),
          [...t.slides].map((t) => {
            t.el &&
              t.el.classList[t.index === e ? "add" : "remove"](
                "is-nav-selected"
              );
          }));
      }
      attach() {
        const e = this;
        let t = e.options.target,
          i = e.options.nav;
        t ? e.addAsNavFor(t) : i && e.addAsTargetFor(i);
      }
      detach() {
        const e = this,
          t = e.nav,
          i = e.target;
        t &&
          (t.off("ready", e.onNavReady),
          t.off("createSlide", e.onNavCreateSlide),
          t.off("Panzoom.click", e.onNavClick),
          t.off("Panzoom.touchEnd", e.onNavTouch)),
          (e.nav = null),
          i &&
            (i.off("ready", e.onTargetReady),
            i.off("refresh", e.onTargetChange),
            i.off("change", e.onTargetChange)),
          (e.target = null);
      }
    }
    Object.defineProperty(it, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: { friction: 0.35 },
    });
    const nt = { Navigation: tt, Dots: Ke, Sync: it },
      st = "animationend",
      ot = "isSelected",
      at = "slide";
    class rt extends Me {
      get axis() {
        return this.isHorizontal ? "e" : "f";
      }
      get isEnabled() {
        return this.state === Xe.Ready;
      }
      get isInfinite() {
        let e = !1;
        const { contentDim: t, viewportDim: i, pages: n, slides: s } = this,
          o = s[0];
        return (
          n.length >= 2 && o && t + o.dim >= i && (e = this.option("infinite")),
          e
        );
      }
      get isRTL() {
        return "rtl" === this.option("direction");
      }
      get isHorizontal() {
        return "x" === this.option("axis");
      }
      constructor(e, t = {}, i = {}) {
        if (
          (super(),
          Object.defineProperty(this, "bp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "",
          }),
          Object.defineProperty(this, "lp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "userOptions", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xe.Init,
          }),
          Object.defineProperty(this, "page", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "prevPage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "viewport", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "slides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "pages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "inTransition", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Set(),
          }),
          Object.defineProperty(this, "contentDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "viewportDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          "string" == typeof e && (e = document.querySelector(e)),
          !e || !$e(e))
        )
          throw new Error("No Element found");
        (this.container = e),
          (this.slideNext = Ge(this.slideNext.bind(this), 150)),
          (this.slidePrev = Ge(this.slidePrev.bind(this), 150)),
          (this.userOptions = t),
          (this.userPlugins = i),
          queueMicrotask(() => {
            this.processOptions();
          });
      }
      processOptions() {
        var e, t;
        const i = Ce({}, rt.defaults, this.userOptions);
        let n = "";
        const s = i.breakpoints;
        if (s && Se(s))
          for (const [e, t] of Object.entries(s))
            window.matchMedia(e).matches && Se(t) && ((n += e), Ce(i, t));
        (n === this.bp && this.state !== Xe.Init) ||
          ((this.bp = n),
          this.state === Xe.Ready &&
            (i.initialSlide =
              (null ===
                (t =
                  null === (e = this.pages[this.page]) || void 0 === e
                    ? void 0
                    : e.slides[0]) || void 0 === t
                ? void 0
                : t.index) || 0),
          this.state !== Xe.Init && this.destroy(),
          super.setOptions(i),
          !1 === this.option("enabled")
            ? this.attachEvents()
            : setTimeout(() => {
                this.init();
              }, 0));
      }
      init() {
        (this.state = Xe.Init),
          this.emit("init"),
          this.attachPlugins(
            Object.assign(Object.assign({}, rt.Plugins), this.userPlugins)
          ),
          this.emit("attachPlugins"),
          this.initLayout(),
          this.initSlides(),
          this.updateMetrics(),
          this.setInitialPosition(),
          this.initPanzoom(),
          this.attachEvents(),
          (this.state = Xe.Ready),
          this.emit("ready");
      }
      initLayout() {
        const { container: e } = this,
          t = this.option("classes");
        De(e, this.cn("container")),
          ve(e, t.isLTR, !this.isRTL),
          ve(e, t.isRTL, this.isRTL),
          ve(e, t.isVertical, !this.isHorizontal),
          ve(e, t.isHorizontal, this.isHorizontal);
        let i = this.option("viewport") || e.querySelector(`.${t.viewport}`);
        i ||
          ((i = document.createElement("div")),
          De(i, t.viewport),
          i.append(...Ve(e, `.${t.slide}`)),
          e.prepend(i)),
          i.addEventListener("scroll", this.onScroll);
        let n = this.option("track") || e.querySelector(`.${t.track}`);
        n ||
          ((n = document.createElement("div")),
          De(n, t.track),
          n.append(...Array.from(i.childNodes))),
          n.setAttribute("aria-live", "polite"),
          i.contains(n) || i.prepend(n),
          (this.viewport = i),
          (this.track = n),
          this.emit("initLayout");
      }
      initSlides() {
        const { track: e } = this;
        if (!e) return;
        const t = [...this.slides],
          i = [];
        [...Ve(e, `.${this.cn(at)}`)].forEach((e) => {
          if ($e(e)) {
            const t = Ye({ el: e, isDom: !0, index: this.slides.length });
            i.push(t);
          }
        });
        for (let e of [...(this.option("slides", []) || []), ...t])
          i.push(Ye(e));
        this.slides = i;
        for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
        for (const e of i)
          this.emit("beforeInitSlide", e, e.index),
            this.emit("initSlide", e, e.index);
        this.emit("initSlides");
      }
      setInitialPage() {
        const e = this.option("initialSlide");
        this.page =
          "number" == typeof e
            ? this.getPageForSlide(e)
            : parseInt(this.option("initialPage", 0) + "", 10) || 0;
      }
      setInitialPosition() {
        const { track: e, pages: t, isHorizontal: i } = this;
        if (!e || !t.length) return;
        let n = this.page;
        t[n] || (this.page = n = 0);
        const s = (t[n].pos || 0) * (this.isRTL && i ? 1 : -1),
          o = i ? `${s}px` : "0",
          a = i ? "0" : `${s}px`;
        (e.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`),
          this.option("adaptiveHeight") && this.setViewportHeight();
      }
      initPanzoom() {
        this.panzoom && (this.panzoom.destroy(), (this.panzoom = null));
        const e = this.option("Panzoom") || {};
        (this.panzoom = new We(
          this.viewport,
          Ce(
            {},
            {
              content: this.track,
              zoom: !1,
              panOnlyZoomed: !1,
              lockAxis: this.isHorizontal ? "x" : "y",
              infinite: this.isInfinite,
              click: !1,
              dblClick: !1,
              touch: (e) => !(this.pages.length < 2 && !e.options.infinite),
              bounds: () => this.getBounds(),
              maxVelocity: (e) =>
                Math.abs(e.target[this.axis] - e.current[this.axis]) <
                2 * this.viewportDim
                  ? 100
                  : 0,
            },
            e
          )
        )),
          this.panzoom.on("*", (e, t, ...i) => {
            this.emit(`Panzoom.${t}`, e, ...i);
          }),
          this.panzoom.on("decel", this.onDecel),
          this.panzoom.on("refresh", this.onRefresh),
          this.panzoom.on("beforeTransform", this.onBeforeTransform),
          this.panzoom.on("endAnimation", this.onEndAnimation);
      }
      attachEvents() {
        const e = this.container;
        e &&
          (e.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !1,
          }),
          e.addEventListener("slideTo", this.onSlideTo)),
          window.addEventListener("resize", this.onResize);
      }
      createPages() {
        let e = [];
        const { contentDim: t, viewportDim: i } = this;
        let n = this.option("slidesPerPage");
        n =
          ("auto" === n || t <= i) && !1 !== this.option("fill")
            ? 1 / 0
            : parseFloat(n + "");
        let s = 0,
          o = 0,
          a = 0;
        for (const t of this.slides)
          (!e.length || o + t.dim - i > 0.05 || a >= n) &&
            (e.push(Ue()), (s = e.length - 1), (o = 0), (a = 0)),
            e[s].slides.push(t),
            (o += t.dim + t.gap),
            a++;
        return e;
      }
      processPages() {
        const e = this.pages,
          { contentDim: t, viewportDim: i, isInfinite: n } = this,
          s = this.option("center"),
          o = this.option("fill"),
          a = o && s && t > i && !n;
        if (
          (e.forEach((e, n) => {
            var o;
            (e.index = n),
              (e.pos =
                (null === (o = e.slides[0]) || void 0 === o ? void 0 : o.pos) ||
                0),
              (e.dim = 0);
            for (const [t, i] of e.slides.entries())
              (e.dim += i.dim), t < e.slides.length - 1 && (e.dim += i.gap);
            a && e.pos + 0.5 * e.dim < 0.5 * i
              ? (e.pos = 0)
              : a && e.pos + 0.5 * e.dim >= t - 0.5 * i
              ? (e.pos = t - i)
              : s && (e.pos += -0.5 * (i - e.dim));
          }),
          e.forEach((e) => {
            o &&
              !n &&
              t > i &&
              ((e.pos = Math.max(e.pos, 0)), (e.pos = Math.min(e.pos, t - i))),
              (e.pos = ue(e.pos, 1e3)),
              (e.dim = ue(e.dim, 1e3)),
              Math.abs(e.pos) <= 0.1 && (e.pos = 0);
          }),
          n)
        )
          return e;
        const r = [];
        let l;
        return (
          e.forEach((e) => {
            const t = Object.assign({}, e);
            l && t.pos === l.pos
              ? ((l.dim += t.dim), (l.slides = [...l.slides, ...t.slides]))
              : ((t.index = r.length), (l = t), r.push(t));
          }),
          r
        );
      }
      getPageFromIndex(e = 0) {
        const t = this.pages.length;
        let i;
        return (
          (e = parseInt((e || 0).toString()) || 0),
          (i = this.isInfinite
            ? ((e % t) + t) % t
            : Math.max(Math.min(e, t - 1), 0)),
          i
        );
      }
      getSlideMetrics(e) {
        var t, i;
        const n = this.isHorizontal ? "width" : "height";
        let s = 0,
          o = 0,
          a = e.el;
        const r = !(!a || a.parentNode);
        if (
          (a
            ? (s = parseFloat(a.dataset[n] || "") || 0)
            : ((a = document.createElement("div")),
              (a.style.visibility = "hidden"),
              (this.track || document.body).prepend(a)),
          De(a, this.cn(at) + " " + e.class + " " + e.customClass),
          s)
        )
          (a.style[n] = `${s}px`),
            (a.style["width" === n ? "height" : "width"] = "");
        else {
          r && (this.track || document.body).prepend(a),
            (s =
              a.getBoundingClientRect()[n] *
              Math.max(
                1,
                (null === (t = window.visualViewport) || void 0 === t
                  ? void 0
                  : t.scale) || 1
              ));
          let e = a[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
          e - 1 > s && (s = e);
        }
        const l = getComputedStyle(a);
        return (
          "content-box" === l.boxSizing &&
            (this.isHorizontal
              ? ((s += parseFloat(l.paddingLeft) || 0),
                (s += parseFloat(l.paddingRight) || 0))
              : ((s += parseFloat(l.paddingTop) || 0),
                (s += parseFloat(l.paddingBottom) || 0))),
          (o =
            parseFloat(l[this.isHorizontal ? "marginRight" : "marginBottom"]) ||
            0),
          r
            ? null === (i = a.parentElement) || void 0 === i || i.removeChild(a)
            : e.el || a.remove(),
          { dim: ue(s, 1e3), gap: ue(o, 1e3) }
        );
      }
      getBounds() {
        const { isInfinite: e, isRTL: t, isHorizontal: i, pages: n } = this;
        let s = { min: 0, max: 0 };
        if (e) s = { min: -1 / 0, max: 1 / 0 };
        else if (n.length) {
          const e = n[0].pos,
            o = n[n.length - 1].pos;
          s = t && i ? { min: e, max: o } : { min: -1 * o, max: -1 * e };
        }
        return { x: i ? s : { min: 0, max: 0 }, y: i ? { min: 0, max: 0 } : s };
      }
      repositionSlides() {
        let e,
          {
            isHorizontal: t,
            isRTL: i,
            isInfinite: n,
            viewport: s,
            viewportDim: o,
            contentDim: a,
            page: r,
            pages: l,
            slides: c,
            panzoom: d,
          } = this,
          h = 0,
          u = 0,
          p = 0,
          f = 0;
        d ? (f = -1 * d.current[this.axis]) : l[r] && (f = l[r].pos || 0),
          (e = t ? (i ? "right" : "left") : "top"),
          i && t && (f *= -1);
        for (const t of c) {
          const i = t.el;
          i
            ? ("top" === e
                ? ((i.style.right = ""), (i.style.left = ""))
                : (i.style.top = ""),
              t.index !== h
                ? (i.style[e] = 0 === u ? "" : `${ue(u, 1e3)}px`)
                : (i.style[e] = ""),
              (p += t.dim + t.gap),
              h++)
            : (u += t.dim + t.gap);
        }
        if (n && p && s) {
          let i = getComputedStyle(s),
            n = "padding",
            r = t ? "Right" : "Bottom",
            l = parseFloat(i[n + (t ? "Left" : "Top")]);
          (f -= l), (o += l), (o += parseFloat(i[n + r]));
          for (const t of c)
            t.el &&
              (ue(t.pos) < ue(o) &&
                ue(t.pos + t.dim + t.gap) < ue(f) &&
                ue(f) > ue(a - o) &&
                (t.el.style[e] = `${ue(u + p, 1e3)}px`),
              ue(t.pos + t.gap) >= ue(a - o) &&
                ue(t.pos) > ue(f + o) &&
                ue(f) < ue(o) &&
                (t.el.style[e] = `-${ue(p, 1e3)}px`));
        }
        let g,
          m,
          v = [...this.inTransition];
        if ((v.length > 1 && ((g = l[v[0]]), (m = l[v[1]])), g && m)) {
          let t = 0;
          for (const i of c)
            i.el
              ? this.inTransition.has(i.index) &&
                g.slides.indexOf(i) < 0 &&
                (i.el.style[e] = `${ue(t + (g.pos - m.pos), 1e3)}px`)
              : (t += i.dim + i.gap);
        }
      }
      createSlideEl(e) {
        const { track: t, slides: i } = this;
        if (!t || !e) return;
        if (e.el && e.el.parentNode) return;
        const n = e.el || document.createElement("div");
        De(n, this.cn(at)), De(n, e.class), De(n, e.customClass);
        const s = e.html;
        s &&
          (s instanceof HTMLElement
            ? n.appendChild(s)
            : (n.innerHTML = e.html + ""));
        const o = [];
        i.forEach((e, t) => {
          e.el && o.push(t);
        });
        const a = e.index;
        let r = null;
        o.length &&
          (r =
            i[o.reduce((e, t) => (Math.abs(t - a) < Math.abs(e - a) ? t : e))]);
        const l =
          r && r.el && r.el.parentNode
            ? r.index < e.index
              ? r.el.nextSibling
              : r.el
            : null;
        t.insertBefore(n, t.contains(l) ? l : null),
          (e.el = n),
          this.emit("createSlide", e);
      }
      removeSlideEl(e, t = !1) {
        const i = null == e ? void 0 : e.el;
        if (!i || !i.parentNode) return;
        const n = this.cn(ot);
        if (
          (i.classList.contains(n) && (_e(i, n), this.emit("unselectSlide", e)),
          e.isDom && !t)
        )
          return (
            i.removeAttribute("aria-hidden"),
            i.removeAttribute("data-index"),
            void (i.style.left = "")
          );
        this.emit("removeSlide", e);
        const s = new CustomEvent(st);
        i.dispatchEvent(s), e.el && (e.el.remove(), (e.el = null));
      }
      transitionTo(e = 0, t = this.option("transition")) {
        var i, n, s, o;
        if (!t) return !1;
        const a = this.page,
          { pages: r, panzoom: l } = this;
        e = parseInt((e || 0).toString()) || 0;
        const c = this.getPageFromIndex(e);
        if (
          !l ||
          !r[c] ||
          r.length < 2 ||
          Math.abs(
            ((null ===
              (n =
                null === (i = r[a]) || void 0 === i ? void 0 : i.slides[0]) ||
            void 0 === n
              ? void 0
              : n.dim) || 0) - this.viewportDim
          ) > 1
        )
          return !1;
        const d = e > a ? 1 : -1,
          h = r[c].pos * (this.isRTL ? 1 : -1);
        if (a === c && Math.abs(h - l.target[this.axis]) < 1) return !1;
        this.clearTransitions();
        const u = l.isResting;
        De(this.container, this.cn("inTransition"));
        const p =
            (null === (s = r[a]) || void 0 === s ? void 0 : s.slides[0]) ||
            null,
          f =
            (null === (o = r[c]) || void 0 === o ? void 0 : o.slides[0]) ||
            null;
        this.inTransition.add(f.index), this.createSlideEl(f);
        let g = p.el,
          m = f.el;
        u || t === at || ((t = "fadeFast"), (g = null));
        const v = this.isRTL ? "next" : "prev",
          b = this.isRTL ? "prev" : "next";
        return (
          g &&
            (this.inTransition.add(p.index),
            (p.transition = t),
            g.addEventListener(st, this.onAnimationEnd),
            g.classList.add(`f-${t}Out`, `to-${d > 0 ? b : v}`)),
          m &&
            ((f.transition = t),
            m.addEventListener(st, this.onAnimationEnd),
            m.classList.add(`f-${t}In`, `from-${d > 0 ? v : b}`)),
          (l.current[this.axis] = h),
          (l.target[this.axis] = h),
          l.requestTick(),
          this.onChange(c),
          !0
        );
      }
      manageSlideVisiblity() {
        const e = new Set(),
          t = new Set(),
          i = this.getVisibleSlides(
            parseFloat(this.option("preload", 0) + "") || 0
          );
        for (const n of this.slides) i.has(n) ? e.add(n) : t.add(n);
        for (const t of this.inTransition) e.add(this.slides[t]);
        for (const t of e) this.createSlideEl(t), this.lazyLoadSlide(t);
        for (const i of t) e.has(i) || this.removeSlideEl(i);
        this.markSelectedSlides(), this.repositionSlides();
      }
      markSelectedSlides() {
        if (!this.pages[this.page] || !this.pages[this.page].slides) return;
        const e = "aria-hidden";
        let t = this.cn(ot);
        if (t)
          for (const i of this.slides) {
            const n = i.el;
            n &&
              ((n.dataset.index = `${i.index}`),
              n.classList.contains("f-thumbs__slide")
                ? this.getVisibleSlides(0).has(i)
                  ? n.removeAttribute(e)
                  : n.setAttribute(e, "true")
                : this.pages[this.page].slides.includes(i)
                ? (n.classList.contains(t) ||
                    (De(n, t), this.emit("selectSlide", i)),
                  n.removeAttribute(e))
                : (n.classList.contains(t) &&
                    (_e(n, t), this.emit("unselectSlide", i)),
                  n.setAttribute(e, "true")));
          }
      }
      flipInfiniteTrack() {
        const {
            axis: e,
            isHorizontal: t,
            isInfinite: i,
            isRTL: n,
            viewportDim: s,
            contentDim: o,
          } = this,
          a = this.panzoom;
        if (!a || !i) return;
        let r = a.current[e],
          l = a.target[e] - r,
          c = 0,
          d = 0.5 * s;
        n && t
          ? (r < -d && ((c = -1), (r += o)), r > o - d && ((c = 1), (r -= o)))
          : (r > d && ((c = 1), (r -= o)), r < -o + d && ((c = -1), (r += o))),
          c && ((a.current[e] = r), (a.target[e] = r + l));
      }
      lazyLoadImg(e, t) {
        const i = this,
          n = "f-fadeIn",
          s = "is-preloading";
        let o = !1,
          a = null;
        const r = () => {
          o ||
            ((o = !0),
            a && (a.remove(), (a = null)),
            _e(t, s),
            t.complete &&
              (De(t, n),
              setTimeout(() => {
                _e(t, n);
              }, 350)),
            this.option("adaptiveHeight") &&
              e.el &&
              this.pages[this.page].slides.indexOf(e) > -1 &&
              (i.updateMetrics(), i.setViewportHeight()),
            this.emit("load", e));
        };
        De(t, s),
          (t.src = t.dataset.lazySrcset || t.dataset.lazySrc || ""),
          delete t.dataset.lazySrc,
          delete t.dataset.lazySrcset,
          t.addEventListener("error", () => {
            r();
          }),
          t.addEventListener("load", () => {
            r();
          }),
          setTimeout(() => {
            const i = t.parentNode;
            i &&
              e.el &&
              (t.complete ? r() : o || ((a = ge(ze)), i.insertBefore(a, t)));
          }, 300);
      }
      lazyLoadSlide(e) {
        const t = e && e.el;
        if (!t) return;
        const i = new Set();
        let n = Array.from(
          t.querySelectorAll("[data-lazy-src],[data-lazy-srcset]")
        );
        t.dataset.lazySrc && n.push(t),
          n.map((e) => {
            e instanceof HTMLImageElement
              ? i.add(e)
              : e instanceof HTMLElement &&
                e.dataset.lazySrc &&
                ((e.style.backgroundImage = `url('${e.dataset.lazySrc}')`),
                delete e.dataset.lazySrc);
          });
        for (const t of i) this.lazyLoadImg(e, t);
      }
      onAnimationEnd(e) {
        var t;
        const i = e.target,
          n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
          s = this.slides[n],
          o = e.animationName;
        if (!i || !s || !o) return;
        const a = !!this.inTransition.has(n) && s.transition;
        a &&
          o.substring(0, a.length + 2) === `f-${a}` &&
          this.inTransition.delete(n),
          this.inTransition.size || this.clearTransitions(),
          n === this.page &&
            (null === (t = this.panzoom) || void 0 === t
              ? void 0
              : t.isResting) &&
            this.emit("settle");
      }
      onDecel(e, t = 0, i = 0, n = 0, s = 0) {
        if (this.option("dragFree")) return void this.setPageFromPosition();
        const { isRTL: o, isHorizontal: a, axis: r, pages: l } = this,
          c = l.length,
          d = Math.abs(Math.atan2(i, t) / (Math.PI / 180));
        let h = 0;
        if (((h = d > 45 && d < 135 ? (a ? 0 : i) : a ? t : 0), !c)) return;
        let u = this.page,
          p = o && a ? 1 : -1;
        const f = e.current[r] * p;
        let { pageIndex: g } = this.getPageFromPosition(f);
        Math.abs(h) > 5
          ? (l[u].dim <
              document.documentElement[
                "client" + (this.isHorizontal ? "Width" : "Height")
              ] -
                1 && (u = g),
            (u = o && a ? (h < 0 ? u - 1 : u + 1) : h < 0 ? u + 1 : u - 1))
          : (u = 0 === n && 0 === s ? u : g),
          this.slideTo(u, {
            transition: !1,
            friction: e.option("decelFriction"),
          });
      }
      onClick(e) {
        const t = e.target,
          i = t && $e(t) ? t.dataset : null;
        let n, s;
        i &&
          (void 0 !== i.carouselPage
            ? ((s = "slideTo"), (n = i.carouselPage))
            : void 0 !== i.carouselNext
            ? (s = "slideNext")
            : void 0 !== i.carouselPrev && (s = "slidePrev")),
          s
            ? (e.preventDefault(),
              e.stopPropagation(),
              t && !t.hasAttribute("disabled") && this[s](n))
            : this.emit("click", e);
      }
      onSlideTo(e) {
        const t = e.detail || 0;
        this.slideTo(this.getPageForSlide(t), { friction: 0 });
      }
      onChange(e, t = 0) {
        const i = this.page;
        (this.prevPage = i),
          (this.page = e),
          this.option("adaptiveHeight") && this.setViewportHeight(),
          e !== i && (this.markSelectedSlides(), this.emit("change", e, i, t));
      }
      onRefresh() {
        let e = this.contentDim,
          t = this.viewportDim;
        this.updateMetrics(),
          (this.contentDim === e && this.viewportDim === t) ||
            this.slideTo(this.page, { friction: 0, transition: !1 });
      }
      onScroll() {
        var e;
        null === (e = this.viewport) || void 0 === e || e.scroll(0, 0);
      }
      onResize() {
        this.option("breakpoints") && this.processOptions();
      }
      onBeforeTransform(e) {
        this.lp !== e.current[this.axis] &&
          (this.flipInfiniteTrack(), this.manageSlideVisiblity()),
          (this.lp = e.current.e);
      }
      onEndAnimation() {
        this.inTransition.size || this.emit("settle");
      }
      reInit(e = null, t = null) {
        this.destroy(),
          (this.state = Xe.Init),
          (this.prevPage = null),
          (this.userOptions = e || this.userOptions),
          (this.userPlugins = t || this.userPlugins),
          this.processOptions();
      }
      slideTo(
        e = 0,
        {
          friction: t = this.option("friction"),
          transition: i = this.option("transition"),
        } = {}
      ) {
        if (this.state === Xe.Destroy) return;
        e = parseInt((e || 0).toString()) || 0;
        const n = this.getPageFromIndex(e),
          { axis: s, isHorizontal: o, isRTL: a, pages: r, panzoom: l } = this,
          c = r.length,
          d = a && o ? 1 : -1;
        if (!l || !c) return;
        if (this.page !== n) {
          const t = new Event("beforeChange", { bubbles: !0, cancelable: !0 });
          if ((this.emit("beforeChange", t, e), t.defaultPrevented)) return;
        }
        if (this.transitionTo(e, i)) return;
        let h = r[n].pos;
        if (this.isInfinite) {
          const t = this.contentDim,
            i = l.target[s] * d;
          2 === c
            ? (h += t * Math.floor(parseFloat(e + "") / 2))
            : (h = [h, h - t, h + t].reduce(function (e, t) {
                return Math.abs(t - i) < Math.abs(e - i) ? t : e;
              }));
        }
        (h *= d),
          Math.abs(l.target[s] - h) < 1 ||
            (l.panTo({ x: o ? h : 0, y: o ? 0 : h, friction: t }),
            this.onChange(n));
      }
      slideToClosest(e) {
        if (this.panzoom) {
          const { pageIndex: t } = this.getPageFromPosition();
          this.slideTo(t, e);
        }
      }
      slideNext() {
        this.slideTo(this.page + 1);
      }
      slidePrev() {
        this.slideTo(this.page - 1);
      }
      clearTransitions() {
        this.inTransition.clear(), _e(this.container, this.cn("inTransition"));
        const e = ["to-prev", "to-next", "from-prev", "from-next"];
        for (const t of this.slides) {
          const i = t.el;
          if (i) {
            i.removeEventListener(st, this.onAnimationEnd),
              i.classList.remove(...e);
            const n = t.transition;
            n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
          }
        }
        this.manageSlideVisiblity();
      }
      addSlide(e, t) {
        var i, n, s, o;
        const a = this.panzoom,
          r =
            (null === (i = this.pages[this.page]) || void 0 === i
              ? void 0
              : i.pos) || 0,
          l =
            (null === (n = this.pages[this.page]) || void 0 === n
              ? void 0
              : n.dim) || 0,
          c = this.contentDim < this.viewportDim;
        let d = Array.isArray(t) ? t : [t];
        const h = [];
        for (const e of d) h.push(Ye(e));
        this.slides.splice(e, 0, ...h);
        for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
        for (const e of h) this.emit("beforeInitSlide", e, e.index);
        if (
          (this.page >= e && (this.page += h.length), this.updateMetrics(), a)
        ) {
          const t =
              (null === (s = this.pages[this.page]) || void 0 === s
                ? void 0
                : s.pos) || 0,
            i =
              (null === (o = this.pages[this.page]) || void 0 === o
                ? void 0
                : o.dim) || 0,
            n = this.pages.length || 1,
            d = this.isRTL ? l - i : i - l,
            h = this.isRTL ? r - t : t - r;
          c && 1 === n
            ? (e <= this.page &&
                ((a.current[this.axis] -= d), (a.target[this.axis] -= d)),
              a.panTo({ [this.isHorizontal ? "x" : "y"]: -1 * t }))
            : h &&
              e <= this.page &&
              ((a.target[this.axis] -= h),
              (a.current[this.axis] -= h),
              a.requestTick());
        }
        for (const e of h) this.emit("initSlide", e, e.index);
      }
      prependSlide(e) {
        this.addSlide(0, e);
      }
      appendSlide(e) {
        this.addSlide(this.slides.length, e);
      }
      removeSlide(e) {
        const t = this.slides.length;
        e = ((e % t) + t) % t;
        const i = this.slides[e];
        if (i) {
          this.removeSlideEl(i, !0), this.slides.splice(e, 1);
          for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
          this.updateMetrics(),
            this.slideTo(this.page, { friction: 0, transition: !1 }),
            this.emit("destroySlide", i);
        }
      }
      updateMetrics() {
        const {
          panzoom: e,
          viewport: t,
          track: i,
          slides: n,
          isHorizontal: s,
          isInfinite: o,
        } = this;
        if (!i) return;
        const a = s ? "width" : "height",
          r = s ? "offsetWidth" : "offsetHeight";
        if (t) {
          let e = Math.max(t[r], ue(t.getBoundingClientRect()[a], 1e3)),
            i = getComputedStyle(t),
            n = "padding",
            o = s ? "Right" : "Bottom";
          (e -= parseFloat(i[n + (s ? "Left" : "Top")]) + parseFloat(i[n + o])),
            (this.viewportDim = e);
        }
        let l,
          c = 0;
        for (const [e, t] of n.entries()) {
          let i = 0,
            s = 0;
          !t.el && l
            ? ((i = l.dim), (s = l.gap))
            : (({ dim: i, gap: s } = this.getSlideMetrics(t)), (l = t)),
            (i = ue(i, 1e3)),
            (s = ue(s, 1e3)),
            (t.dim = i),
            (t.gap = s),
            (t.pos = c),
            (c += i),
            (o || e < n.length - 1) && (c += s);
        }
        (c = ue(c, 1e3)),
          (this.contentDim = c),
          e &&
            ((e.contentRect[a] = c),
            (e.contentRect[s ? "fullWidth" : "fullHeight"] = c)),
          (this.pages = this.createPages()),
          (this.pages = this.processPages()),
          this.state === Xe.Init && this.setInitialPage(),
          (this.page = Math.max(0, Math.min(this.page, this.pages.length - 1))),
          this.manageSlideVisiblity(),
          this.emit("refresh");
      }
      getProgress(e, t = !1, i = !1) {
        void 0 === e && (e = this.page);
        const n = this,
          s = n.panzoom,
          o = n.contentDim,
          a = n.pages[e] || 0;
        if (!a || !s) return e > this.page ? -1 : 1;
        let r = -1 * s.current.e,
          l = ue((r - a.pos) / (1 * a.dim), 1e3),
          c = l,
          d = l;
        this.isInfinite &&
          !0 !== i &&
          ((c = ue((r - a.pos + o) / (1 * a.dim), 1e3)),
          (d = ue((r - a.pos - o) / (1 * a.dim), 1e3)));
        let h = [l, c, d].reduce(function (e, t) {
          return Math.abs(t) < Math.abs(e) ? t : e;
        });
        return t ? h : h > 1 ? 1 : h < -1 ? -1 : h;
      }
      setViewportHeight() {
        const { page: e, pages: t, viewport: i, isHorizontal: n } = this;
        if (!i || !t[e]) return;
        let s = 0;
        n &&
          this.track &&
          ((this.track.style.height = "auto"),
          t[e].slides.forEach((e) => {
            e.el && (s = Math.max(s, e.el.offsetHeight));
          })),
          (i.style.height = s ? `${s}px` : "");
      }
      getPageForSlide(e) {
        for (const t of this.pages)
          for (const i of t.slides) if (i.index === e) return t.index;
        return -1;
      }
      getVisibleSlides(e = 0) {
        var t;
        const i = new Set();
        let {
          panzoom: n,
          contentDim: s,
          viewportDim: o,
          pages: a,
          page: r,
        } = this;
        if (o) {
          s =
            s +
              (null === (t = this.slides[this.slides.length - 1]) ||
              void 0 === t
                ? void 0
                : t.gap) || 0;
          let l = 0;
          (l =
            n && n.state !== Oe.Init && n.state !== Oe.Destroy
              ? -1 * n.current[this.axis]
              : (a[r] && a[r].pos) || 0),
            this.isInfinite && (l -= Math.floor(l / s) * s),
            this.isRTL && this.isHorizontal && (l *= -1);
          const c = l - o * e,
            d = l + o * (e + 1),
            h = this.isInfinite ? [-1, 0, 1] : [0];
          for (const e of this.slides)
            for (const t of h) {
              const n = e.pos + t * s,
                o = n + e.dim + e.gap;
              n < d && o > c && i.add(e);
            }
        }
        return i;
      }
      getPageFromPosition(e) {
        const {
            viewportDim: t,
            contentDim: i,
            slides: n,
            pages: s,
            panzoom: o,
          } = this,
          a = s.length,
          r = n.length,
          l = n[0],
          c = n[r - 1],
          d = this.option("center");
        let h = 0,
          u = 0,
          p = 0,
          f =
            void 0 === e
              ? -1 * ((null == o ? void 0 : o.target[this.axis]) || 0)
              : e;
        d && (f += 0.5 * t),
          this.isInfinite
            ? (f < l.pos - 0.5 * c.gap && ((f -= i), (p = -1)),
              f > c.pos + c.dim + 0.5 * c.gap && ((f -= i), (p = 1)))
            : (f = Math.max(l.pos || 0, Math.min(f, c.pos)));
        let g = c,
          m = n.find((e) => {
            const t = e.pos - 0.5 * g.gap,
              i = e.pos + e.dim + 0.5 * e.gap;
            return (g = e), f >= t && f < i;
          });
        return (
          m || (m = c),
          (u = this.getPageForSlide(m.index)),
          (h = u + p * a),
          { page: h, pageIndex: u }
        );
      }
      setPageFromPosition() {
        const { pageIndex: e } = this.getPageFromPosition();
        this.onChange(e);
      }
      destroy() {
        if ([Xe.Destroy].includes(this.state)) return;
        this.state = Xe.Destroy;
        const {
            container: e,
            viewport: t,
            track: i,
            slides: n,
            panzoom: s,
          } = this,
          o = this.option("classes");
        e.removeEventListener("click", this.onClick, {
          passive: !1,
          capture: !1,
        }),
          e.removeEventListener("slideTo", this.onSlideTo),
          window.removeEventListener("resize", this.onResize),
          s && (s.destroy(), (this.panzoom = null)),
          n &&
            n.forEach((e) => {
              this.removeSlideEl(e);
            }),
          this.detachPlugins(),
          t &&
            (t.removeEventListener("scroll", this.onScroll),
            t.offsetParent &&
              i &&
              i.offsetParent &&
              t.replaceWith(...i.childNodes));
        for (const [t, i] of Object.entries(o))
          "container" !== t && i && e.classList.remove(i);
        (this.track = null),
          (this.viewport = null),
          (this.page = 0),
          (this.slides = []);
        const a = this.events.get("ready");
        (this.events = new Map()), a && this.events.set("ready", a);
      }
    }
    Object.defineProperty(rt, "Panzoom", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: We,
    }),
      Object.defineProperty(rt, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          viewport: null,
          track: null,
          enabled: !0,
          slides: [],
          axis: "x",
          transition: "fade",
          preload: 1,
          slidesPerPage: "auto",
          initialPage: 0,
          friction: 0.12,
          Panzoom: { decelFriction: 0.12 },
          center: !0,
          infinite: !0,
          fill: !0,
          dragFree: !1,
          adaptiveHeight: !1,
          direction: "ltr",
          classes: {
            container: "f-carousel",
            viewport: "f-carousel__viewport",
            track: "f-carousel__track",
            slide: "f-carousel__slide",
            isLTR: "is-ltr",
            isRTL: "is-rtl",
            isHorizontal: "is-horizontal",
            isVertical: "is-vertical",
            inTransition: "in-transition",
            isSelected: "is-selected",
          },
          l10n: {
            NEXT: "Next slide",
            PREV: "Previous slide",
            GOTO: "Go to slide #%d",
          },
        },
      }),
      Object.defineProperty(rt, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: nt,
      });
    const lt = function (e) {
        if (!$e(e)) return 0;
        const t = window.scrollY,
          i = window.innerHeight,
          n = t + i,
          s = e.getBoundingClientRect(),
          o = s.y + t,
          a = s.height,
          r = o + a;
        if (t > r || n < o) return 0;
        if (t < o && n > r) return 100;
        if (o < t && r > n) return 100;
        let l = a;
        o < t && (l -= t - o), r > n && (l -= r - n);
        const c = (l / i) * 100;
        return Math.round(c);
      },
      ct = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
    let dt;
    const ht = [
        "a[href]",
        "area[href]",
        'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
        "select:not([disabled]):not([aria-hidden])",
        "textarea:not([disabled]):not([aria-hidden])",
        "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)",
        "iframe",
        "object",
        "embed",
        "video",
        "audio",
        "[contenteditable]",
        '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
      ].join(","),
      ut = (e) => {
        if (e && ct) {
          void 0 === dt &&
            document.createElement("div").focus({
              get preventScroll() {
                return (dt = !0), !1;
              },
            });
          try {
            if (dt) e.focus({ preventScroll: !0 });
            else {
              const t = window.scrollY || document.body.scrollTop,
                i = window.scrollX || document.body.scrollLeft;
              e.focus(),
                document.body.scrollTo({ top: t, left: i, behavior: "auto" });
            }
          } catch (e) {}
        }
      },
      pt = () => {
        const e = document;
        let t,
          i = "",
          n = "",
          s = "";
        return (
          e.fullscreenEnabled
            ? ((i = "requestFullscreen"),
              (n = "exitFullscreen"),
              (s = "fullscreenElement"))
            : e.webkitFullscreenEnabled &&
              ((i = "webkitRequestFullscreen"),
              (n = "webkitExitFullscreen"),
              (s = "webkitFullscreenElement")),
          i &&
            (t = {
              request: function (t = e.documentElement) {
                return "webkitRequestFullscreen" === i
                  ? t[i](Element.ALLOW_KEYBOARD_INPUT)
                  : t[i]();
              },
              exit: function () {
                return e[s] && e[n]();
              },
              isFullscreen: function () {
                return e[s];
              },
            }),
          t
        );
      },
      ft = {
        dragToClose: !0,
        hideScrollbar: !0,
        Carousel: {
          classes: {
            container: "fancybox__carousel",
            viewport: "fancybox__viewport",
            track: "fancybox__track",
            slide: "fancybox__slide",
          },
        },
        contentClick: "toggleZoom",
        contentDblClick: !1,
        backdropClick: "close",
        animated: !0,
        idle: 3500,
        showClass: "f-zoomInUp",
        hideClass: "f-fadeOut",
        commonCaption: !1,
        parentEl: null,
        startIndex: 0,
        l10n: Object.assign(Object.assign({}, ke), {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          MODAL: "You can close this modal content with the ESC key",
          ERROR: "Something Went Wrong, Please Try Again Later",
          IMAGE_ERROR: "Image Not Found",
          ELEMENT_NOT_FOUND: "HTML Element Not Found",
          AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
          AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
          IFRAME_ERROR: "Error Loading Page",
          TOGGLE_ZOOM: "Toggle zoom level",
          TOGGLE_THUMBS: "Toggle thumbnails",
          TOGGLE_SLIDESHOW: "Toggle slideshow",
          TOGGLE_FULLSCREEN: "Toggle full-screen mode",
          DOWNLOAD: "Download",
        }),
        tpl: {
          closeButton:
            '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
          main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
        },
        groupAll: !1,
        groupAttr: "data-fancybox",
        defaultType: "image",
        defaultDisplay: "block",
        autoFocus: !0,
        trapFocus: !0,
        placeFocusBack: !0,
        closeButton: "auto",
        keyboard: {
          Escape: "close",
          Delete: "close",
          Backspace: "close",
          PageUp: "next",
          PageDown: "prev",
          ArrowUp: "prev",
          ArrowDown: "next",
          ArrowRight: "next",
          ArrowLeft: "prev",
        },
        Fullscreen: { autoStart: !1 },
        compact: () =>
          window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
        wheel: "zoom",
      };
    var gt, mt;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Closing = 2)] = "Closing"),
        (e[(e.CustomClosing = 3)] = "CustomClosing"),
        (e[(e.Destroy = 4)] = "Destroy");
    })(gt || (gt = {})),
      (function (e) {
        (e[(e.Loading = 0)] = "Loading"),
          (e[(e.Opening = 1)] = "Opening"),
          (e[(e.Ready = 2)] = "Ready"),
          (e[(e.Closing = 3)] = "Closing");
      })(mt || (mt = {}));
    let vt = "",
      bt = !1,
      yt = !1,
      wt = null;
    const xt = () => {
        let e = "",
          t = "";
        const i = Ii.getInstance();
        if (i) {
          const n = i.carousel,
            s = i.getSlide();
          if (n && s) {
            let o = s.slug || void 0,
              a = s.triggerEl || void 0;
            (t = o || i.option("slug") || ""),
              !t && a && a.dataset && (t = a.dataset.fancybox || ""),
              t &&
                "true" !== t &&
                (e =
                  "#" +
                  t +
                  (!o && n.slides.length > 1 ? "-" + (s.index + 1) : ""));
          }
        }
        return { hash: e, slug: t, index: 1 };
      },
      Et = () => {
        const e = new URL(document.URL).hash,
          t = e.slice(1).split("-"),
          i = t[t.length - 1],
          n = (i && /^\+?\d+$/.test(i) && parseInt(t.pop() || "1", 10)) || 1;
        return { hash: e, slug: t.join("-"), index: n };
      },
      St = () => {
        const { slug: e, index: t } = Et();
        if (!e) return;
        let i = document.querySelector(`[data-slug="${e}"]`);
        if (
          (i &&
            i.dispatchEvent(
              new CustomEvent("click", { bubbles: !0, cancelable: !0 })
            ),
          Ii.getInstance())
        )
          return;
        const n = document.querySelectorAll(`[data-fancybox="${e}"]`);
        n.length &&
          ((i = n[t - 1]),
          i &&
            i.dispatchEvent(
              new CustomEvent("click", { bubbles: !0, cancelable: !0 })
            ));
      },
      Ct = () => {
        if (!1 === Ii.defaults.Hash) return;
        const e = Ii.getInstance();
        if (!1 === (null == e ? void 0 : e.options.Hash)) return;
        const { slug: t, index: i } = Et(),
          { slug: n } = xt();
        e && (t === n ? e.jumpTo(i - 1) : ((bt = !0), e.close())), St();
      },
      Tt = () => {
        wt && clearTimeout(wt),
          queueMicrotask(() => {
            Ct();
          });
      },
      Pt = () => {
        window.addEventListener("hashchange", Tt, !1),
          setTimeout(() => {
            Ct();
          }, 500);
      };
    ct &&
      (/complete|interactive|loaded/.test(document.readyState)
        ? Pt()
        : document.addEventListener("DOMContentLoaded", Pt));
    const Mt = "is-zooming-in";
    class Ot extends Ze {
      onCreateSlide(e, t, i) {
        const n = this.instance.optionFor(i, "src") || "";
        i.el &&
          "image" === i.type &&
          "string" == typeof n &&
          this.setImage(i, n);
      }
      onRemoveSlide(e, t, i) {
        i.panzoom && i.panzoom.destroy(),
          (i.panzoom = void 0),
          (i.imageEl = void 0);
      }
      onChange(e, t, i, n) {
        _e(this.instance.container, Mt);
        for (const e of t.slides) {
          const t = e.panzoom;
          t && e.index !== i && t.reset(0.35);
        }
      }
      onClose() {
        var e;
        const t = this.instance,
          i = t.container,
          n = t.getSlide();
        if (!i || !i.parentElement || !n) return;
        const { el: s, contentEl: o, panzoom: a, thumbElSrc: r } = n;
        if (
          !s ||
          !r ||
          !o ||
          !a ||
          a.isContentLoading ||
          a.state === Oe.Init ||
          a.state === Oe.Destroy
        )
          return;
        a.updateMetrics();
        let l = this.getZoomInfo(n);
        if (!l) return;
        (this.instance.state = gt.CustomClosing),
          i.classList.remove(Mt),
          i.classList.add("is-zooming-out"),
          (o.style.backgroundImage = `url('${r}')`);
        const c = i.getBoundingClientRect();
        1 ===
          ((null === (e = window.visualViewport) || void 0 === e
            ? void 0
            : e.scale) || 1) &&
          Object.assign(i.style, {
            position: "absolute",
            top: `${i.offsetTop + window.scrollY}px`,
            left: `${i.offsetLeft + window.scrollX}px`,
            bottom: "auto",
            right: "auto",
            width: `${c.width}px`,
            height: `${c.height}px`,
            overflow: "hidden",
          });
        const { x: d, y: h, scale: u, opacity: p } = l;
        if (p) {
          const e = ((e, t, i, n) => {
            const s = t - e;
            return (t) => 1 + (((t - e) / s) * -1 || 0);
          })(a.scale, u);
          a.on("afterTransform", () => {
            o.style.opacity = e(a.scale) + "";
          });
        }
        a.on("endAnimation", () => {
          t.destroy();
        }),
          (a.target.a = u),
          (a.target.b = 0),
          (a.target.c = 0),
          (a.target.d = u),
          a.panTo({
            x: d,
            y: h,
            scale: u,
            friction: p ? 0.2 : 0.33,
            ignoreBounds: !0,
          }),
          a.isResting && t.destroy();
      }
      setImage(e, t) {
        const i = this.instance;
        (e.src = t),
          this.process(e, t).then(
            (t) => {
              const { contentEl: n, imageEl: s, thumbElSrc: o, el: a } = e;
              if (i.isClosing() || !n || !s) return;
              n.offsetHeight;
              const r = !!i.isOpeningSlide(e) && this.getZoomInfo(e);
              if (this.option("protected") && a) {
                a.addEventListener("contextmenu", (e) => {
                  e.preventDefault();
                });
                const e = document.createElement("div");
                De(e, "fancybox-protected"), n.appendChild(e);
              }
              if (o && r) {
                const s = t.contentRect,
                  a = Math.max(s.fullWidth, s.fullHeight);
                let c = null;
                !r.opacity &&
                  a > 1200 &&
                  ((c = document.createElement("img")),
                  De(c, "fancybox-ghost"),
                  (c.src = o),
                  n.appendChild(c));
                const d = () => {
                  c &&
                    (De(c, "f-fadeFastOut"),
                    setTimeout(() => {
                      c && (c.remove(), (c = null));
                    }, 200));
                };
                ((l = o),
                new Promise((e, t) => {
                  const i = new Image();
                  (i.onload = e), (i.onerror = t), (i.src = l);
                })).then(
                  () => {
                    i.hideLoading(e),
                      (e.state = mt.Opening),
                      this.instance.emit("reveal", e),
                      this.zoomIn(e).then(
                        () => {
                          d(), this.instance.done(e);
                        },
                        () => {}
                      ),
                      c &&
                        setTimeout(
                          () => {
                            d();
                          },
                          a > 2500 ? 800 : 200
                        );
                  },
                  () => {
                    i.hideLoading(e), i.revealContent(e);
                  }
                );
              } else {
                const n = this.optionFor(e, "initialSize"),
                  s = this.optionFor(e, "zoom"),
                  o = {
                    event: i.prevMouseMoveEvent || i.options.event,
                    friction: s ? 0.12 : 0,
                  };
                let a = i.optionFor(e, "showClass") || void 0,
                  r = !0;
                i.isOpeningSlide(e) &&
                  ("full" === n
                    ? t.zoomToFull(o)
                    : "cover" === n
                    ? t.zoomToCover(o)
                    : "max" === n
                    ? t.zoomToMax(o)
                    : (r = !1),
                  t.stop("current")),
                  r && a && (a = t.isDragging ? "f-fadeIn" : ""),
                  i.hideLoading(e),
                  i.revealContent(e, a);
              }
              var l;
            },
            () => {
              i.setError(e, "{{IMAGE_ERROR}}");
            }
          );
      }
      process(e, t) {
        return new Promise((i, n) => {
          var s;
          const o = this.instance,
            a = e.el;
          o.clearContent(e), o.showLoading(e);
          let r = this.optionFor(e, "content");
          if (("string" == typeof r && (r = ge(r)), !r || !$e(r))) {
            if (
              ((r = document.createElement("img")),
              r instanceof HTMLImageElement)
            ) {
              let i = "",
                n = e.caption;
              (i =
                "string" == typeof n && n
                  ? n.replace(/<[^>]+>/gi, "").substring(0, 1e3)
                  : `Image ${e.index + 1} of ${
                      (null === (s = o.carousel) || void 0 === s
                        ? void 0
                        : s.pages.length) || 1
                    }`),
                (r.src = t || ""),
                (r.alt = i),
                (r.draggable = !1),
                e.srcset && r.setAttribute("srcset", e.srcset),
                this.instance.isOpeningSlide(e) && (r.fetchPriority = "high");
            }
            e.sizes && r.setAttribute("sizes", e.sizes);
          }
          De(r, "fancybox-image"),
            (e.imageEl = r),
            o.setContent(e, r, !1),
            (e.panzoom = new We(
              a,
              Ce({ transformParent: !0 }, this.option("Panzoom") || {}, {
                content: r,
                width: o.optionFor(e, "width", "auto"),
                height: o.optionFor(e, "height", "auto"),
                wheel: () => {
                  const e = o.option("wheel");
                  return ("zoom" === e || "pan" == e) && e;
                },
                click: (t, i) => {
                  var n, s;
                  if (o.isCompact || o.isClosing()) return !1;
                  if (
                    e.index !==
                    (null === (n = o.getSlide()) || void 0 === n
                      ? void 0
                      : n.index)
                  )
                    return !1;
                  if (i) {
                    const e = i.composedPath()[0];
                    if (
                      [
                        "A",
                        "BUTTON",
                        "TEXTAREA",
                        "OPTION",
                        "INPUT",
                        "SELECT",
                        "VIDEO",
                      ].includes(e.nodeName)
                    )
                      return !1;
                  }
                  let a =
                    !i ||
                    (i.target &&
                      (null === (s = e.contentEl) || void 0 === s
                        ? void 0
                        : s.contains(i.target)));
                  return o.option(a ? "contentClick" : "backdropClick") || !1;
                },
                dblClick: () =>
                  o.isCompact
                    ? "toggleZoom"
                    : o.option("contentDblClick") || !1,
                spinner: !1,
                panOnlyZoomed: !0,
                wheelLimit: 1 / 0,
                on: {
                  ready: (e) => {
                    i(e);
                  },
                  error: () => {
                    n();
                  },
                  destroy: () => {
                    n();
                  },
                },
              })
            ));
        });
      }
      zoomIn(e) {
        return new Promise((t, i) => {
          const n = this.instance,
            s = n.container,
            { panzoom: o, contentEl: a, el: r } = e;
          o && o.updateMetrics();
          const l = this.getZoomInfo(e);
          if (!(l && r && a && o && s)) return void i();
          const { x: c, y: d, scale: h, opacity: u } = l,
            p = () => {
              e.state !== mt.Closing &&
                (u &&
                  (a.style.opacity =
                    Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - h)), 0) + ""),
                o.scale >= 1 && o.scale > o.targetScale - 0.1 && t(o));
            },
            f = (e) => {
              ((e.scale < 0.99 || e.scale > 1.01) && !e.isDragging) ||
                (_e(s, Mt),
                (a.style.opacity = ""),
                e.off("endAnimation", f),
                e.off("touchStart", f),
                e.off("afterTransform", p),
                t(e));
            };
          o.on("endAnimation", f),
            o.on("touchStart", f),
            o.on("afterTransform", p),
            o.on(["error", "destroy"], () => {
              i();
            }),
            o.panTo({ x: c, y: d, scale: h, friction: 0, ignoreBounds: !0 }),
            o.stop("current");
          const g = {
              event:
                "mousemove" === o.panMode
                  ? n.prevMouseMoveEvent || n.options.event
                  : void 0,
            },
            m = this.optionFor(e, "initialSize");
          De(s, Mt),
            n.hideLoading(e),
            "full" === m
              ? o.zoomToFull(g)
              : "cover" === m
              ? o.zoomToCover(g)
              : "max" === m
              ? o.zoomToMax(g)
              : o.reset(0.172);
        });
      }
      getZoomInfo(e) {
        const { el: t, imageEl: i, thumbEl: n, panzoom: s } = e,
          o = this.instance,
          a = o.container;
        if (
          !t ||
          !i ||
          !n ||
          !s ||
          lt(n) < 3 ||
          !this.optionFor(e, "zoom") ||
          !a ||
          o.state === gt.Destroy
        )
          return !1;
        if ("0" === getComputedStyle(a).getPropertyValue("--f-images-zoom"))
          return !1;
        const r = window.visualViewport || null;
        if (1 !== (r ? r.scale : 1)) return !1;
        let {
            top: l,
            left: c,
            width: d,
            height: h,
          } = n.getBoundingClientRect(),
          { top: u, left: p, fitWidth: f, fitHeight: g } = s.contentRect;
        if (!(d && h && f && g)) return !1;
        const m = s.container.getBoundingClientRect();
        (p += m.left), (u += m.top);
        const v = -1 * (p + 0.5 * f - (c + 0.5 * d)),
          b = -1 * (u + 0.5 * g - (l + 0.5 * h)),
          y = d / f;
        let w = this.option("zoomOpacity") || !1;
        return (
          "auto" === w && (w = Math.abs(d / h - f / g) > 0.1),
          { x: v, y: b, scale: y, opacity: w }
        );
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.change", e.onChange),
          t.on("Carousel.createSlide", e.onCreateSlide),
          t.on("Carousel.removeSlide", e.onRemoveSlide),
          t.on("close", e.onClose);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.change", e.onChange),
          t.off("Carousel.createSlide", e.onCreateSlide),
          t.off("Carousel.removeSlide", e.onRemoveSlide),
          t.off("close", e.onClose);
      }
    }
    Object.defineProperty(Ot, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        initialSize: "fit",
        Panzoom: { maxScale: 1 },
        protected: !1,
        zoom: !0,
        zoomOpacity: "auto",
      },
    }),
      "function" == typeof SuppressedError && SuppressedError;
    const Lt = "html",
      kt = "image",
      At = "map",
      It = "youtube",
      zt = "vimeo",
      $t = "html5video",
      _t = (e, t = {}) => {
        const i = new URL(e),
          n = new URLSearchParams(i.search),
          s = new URLSearchParams();
        for (const [e, i] of [...n, ...Object.entries(t)]) {
          let t = i + "";
          if ("t" === e) {
            let e = t.match(/((\d*)m)?(\d*)s?/);
            e &&
              s.set(
                "start",
                60 * parseInt(e[2] || "0") + parseInt(e[3] || "0") + ""
              );
          } else s.set(e, t);
        }
        let o = s + "",
          a = e.match(/#t=((.*)?\d+s)/);
        return a && (o += `#t=${a[1]}`), o;
      },
      Dt = [
        "image",
        "html",
        "ajax",
        "inline",
        "clone",
        "iframe",
        "map",
        "pdf",
        "html5video",
        "youtube",
        "vimeo",
      ];
    class Rt extends Ze {
      onBeforeInitSlide(e, t, i) {
        this.processType(i);
      }
      onCreateSlide(e, t, i) {
        this.setContent(i);
      }
      onClearContent(e, t) {
        t.xhr && (t.xhr.abort(), (t.xhr = null));
        const i = t.iframeEl;
        i &&
          ((i.onload = i.onerror = null),
          (i.src = "//about:blank"),
          (t.iframeEl = null));
        const n = t.contentEl,
          s = t.placeholderEl;
        if ("inline" === t.type && n && s)
          n.classList.remove("fancybox__content"),
            "none" !== n.style.display && (n.style.display = "none"),
            s.parentNode && s.parentNode.insertBefore(n, s),
            s.remove(),
            (t.contentEl = void 0),
            (t.placeholderEl = void 0);
        else
          for (; t.el && t.el.firstChild; ) t.el.removeChild(t.el.firstChild);
      }
      onSelectSlide(e, t, i) {
        i.state === mt.Ready && this.playVideo();
      }
      onUnselectSlide(e, t, i) {
        var n, s;
        if (i.type === $t) {
          try {
            null ===
              (s =
                null === (n = i.el) || void 0 === n
                  ? void 0
                  : n.querySelector("video")) ||
              void 0 === s ||
              s.pause();
          } catch (e) {}
          return;
        }
        let o;
        i.type === zt
          ? (o = { method: "pause", value: "true" })
          : i.type === It && (o = { event: "command", func: "pauseVideo" }),
          o &&
            i.iframeEl &&
            i.iframeEl.contentWindow &&
            i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"),
          i.poller && clearTimeout(i.poller);
      }
      onDone(e, t) {
        e.isCurrentSlide(t) && !e.isClosing() && this.playVideo();
      }
      onRefresh(e, t) {
        t.slides.forEach((e) => {
          e.el && (this.resizeIframe(e), this.setAspectRatio(e));
        });
      }
      onMessage(e) {
        try {
          let t = JSON.parse(e.data);
          if ("https://player.vimeo.com" === e.origin) {
            if ("ready" === t.event)
              for (let t of Array.from(
                document.getElementsByClassName("fancybox__iframe")
              ))
                t instanceof HTMLIFrameElement &&
                  t.contentWindow === e.source &&
                  (t.dataset.ready = "true");
          } else if (
            e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) &&
            "onReady" === t.event
          ) {
            const e = document.getElementById(t.id);
            e && (e.dataset.ready = "true");
          }
        } catch (e) {}
      }
      loadAjaxContent(e) {
        const t = this.instance.optionFor(e, "src") || "";
        this.instance.showLoading(e);
        const i = this.instance,
          n = new XMLHttpRequest();
        i.showLoading(e),
          (n.onreadystatechange = function () {
            n.readyState === XMLHttpRequest.DONE &&
              i.state === gt.Ready &&
              (i.hideLoading(e),
              200 === n.status
                ? i.setContent(e, n.responseText)
                : i.setError(
                    e,
                    404 === n.status
                      ? "{{AJAX_NOT_FOUND}}"
                      : "{{AJAX_FORBIDDEN}}"
                  ));
          });
        const s = e.ajax || null;
        n.open(s ? "POST" : "GET", t + ""),
          n.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          ),
          n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
          n.send(s),
          (e.xhr = n);
      }
      setInlineContent(e) {
        let t = null;
        if ($e(e.src)) t = e.src;
        else if ("string" == typeof e.src) {
          const i = e.src.split("#", 2).pop();
          t = i ? document.getElementById(i) : null;
        }
        if (t) {
          if ("clone" === e.type || t.closest(".fancybox__slide")) {
            t = t.cloneNode(!0);
            const i = t.dataset.animationName;
            i && (t.classList.remove(i), delete t.dataset.animationName);
            let n = t.getAttribute("id");
            (n = n ? `${n}--clone` : `clone-${this.instance.id}-${e.index}`),
              t.setAttribute("id", n);
          } else if (t.parentNode) {
            const i = document.createElement("div");
            i.classList.add("fancybox-placeholder"),
              t.parentNode.insertBefore(i, t),
              (e.placeholderEl = i);
          }
          this.instance.setContent(e, t);
        } else this.instance.setError(e, "{{ELEMENT_NOT_FOUND}}");
      }
      setIframeContent(e) {
        const { src: t, el: i } = e;
        if (!t || "string" != typeof t || !i) return;
        i.classList.add("is-loading");
        const n = this.instance,
          s = document.createElement("iframe");
        (s.className = "fancybox__iframe"),
          s.setAttribute("id", `fancybox__iframe_${n.id}_${e.index}`);
        for (const [t, i] of Object.entries(
          this.optionFor(e, "iframeAttr") || {}
        ))
          s.setAttribute(t, i);
        (s.onerror = () => {
          n.setError(e, "{{IFRAME_ERROR}}");
        }),
          (e.iframeEl = s);
        const o = this.optionFor(e, "preload");
        if ("iframe" !== e.type || !1 === o)
          return (
            s.setAttribute("src", e.src + ""),
            n.setContent(e, s, !1),
            this.resizeIframe(e),
            void n.revealContent(e)
          );
        n.showLoading(e),
          (s.onload = () => {
            if (!s.src.length) return;
            const t = "true" !== s.dataset.ready;
            (s.dataset.ready = "true"),
              this.resizeIframe(e),
              t ? n.revealContent(e) : n.hideLoading(e);
          }),
          s.setAttribute("src", t),
          n.setContent(e, s, !1);
      }
      resizeIframe(e) {
        const { type: t, iframeEl: i } = e;
        if (t === It || t === zt) return;
        const n = null == i ? void 0 : i.parentElement;
        if (!i || !n) return;
        let s = e.autoSize;
        void 0 === s && (s = this.optionFor(e, "autoSize"));
        let o = e.width || 0,
          a = e.height || 0;
        o && a && (s = !1);
        const r = n && n.style;
        if (!1 !== e.preload && !1 !== s && r)
          try {
            const e = window.getComputedStyle(n),
              t = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight),
              s = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom),
              l = i.contentWindow;
            if (l) {
              const e = l.document,
                i = e.getElementsByTagName(Lt)[0],
                n = e.body;
              (r.width = ""),
                (n.style.overflow = "hidden"),
                (o = o || i.scrollWidth + t),
                (r.width = `${o}px`),
                (n.style.overflow = ""),
                (r.flex = "0 0 auto"),
                (r.height = `${n.scrollHeight}px`),
                (a = i.scrollHeight + s);
            }
          } catch (e) {}
        if (o || a) {
          const e = { flex: "0 1 auto", width: "", height: "" };
          o && "auto" !== o && (e.width = `${o}px`),
            a && "auto" !== a && (e.height = `${a}px`),
            Object.assign(r, e);
        }
      }
      playVideo() {
        const e = this.instance.getSlide();
        if (!e) return;
        const { el: t } = e;
        if (!t || !t.offsetParent) return;
        if (!this.optionFor(e, "videoAutoplay")) return;
        if (e.type === $t)
          try {
            const e = t.querySelector("video");
            if (e) {
              const t = e.play();
              void 0 !== t &&
                t
                  .then(() => {})
                  .catch((t) => {
                    (e.muted = !0), e.play();
                  });
            }
          } catch (e) {}
        if (e.type !== It && e.type !== zt) return;
        const i = () => {
          if (e.iframeEl && e.iframeEl.contentWindow) {
            let t;
            if ("true" === e.iframeEl.dataset.ready)
              return (
                (t =
                  e.type === It
                    ? { event: "command", func: "playVideo" }
                    : { method: "play", value: "true" }),
                t &&
                  e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"),
                void (e.poller = void 0)
              );
            e.type === It &&
              ((t = { event: "listening", id: e.iframeEl.getAttribute("id") }),
              e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"));
          }
          e.poller = setTimeout(i, 250);
        };
        i();
      }
      processType(e) {
        if (e.html) return (e.type = Lt), (e.src = e.html), void (e.html = "");
        const t = this.instance.optionFor(e, "src", "");
        if (!t || "string" != typeof t) return;
        let i = e.type,
          n = null;
        if (
          (n = t.match(
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
          ))
        ) {
          const s = this.optionFor(e, It),
            { nocookie: o } = s,
            a = (function (e, t) {
              var i = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  t.indexOf(n) < 0 &&
                  (i[n] = e[n]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var s = 0;
                for (n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                  t.indexOf(n[s]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, n[s]) &&
                    (i[n[s]] = e[n[s]]);
              }
              return i;
            })(s, ["nocookie"]),
            r = `www.youtube${o ? "-nocookie" : ""}.com`,
            l = _t(t, a),
            c = encodeURIComponent(n[2]);
          (e.videoId = c),
            (e.src = `https://${r}/embed/${c}?${l}`),
            (e.thumbSrc =
              e.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`),
            (i = It);
        } else if (
          (n = t.match(
            /^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
          ))
        ) {
          const s = _t(t, this.optionFor(e, zt)),
            o = encodeURIComponent(n[1]),
            a = n[4] || "";
          (e.videoId = o),
            (e.src = `https://player.vimeo.com/video/${o}?${
              a ? `h=${a}${s ? "&" : ""}` : ""
            }${s}`),
            (i = zt);
        }
        if (!i && e.triggerEl) {
          const t = e.triggerEl.dataset.type;
          Dt.includes(t) && (i = t);
        }
        i ||
          ("string" == typeof t &&
            ("#" === t.charAt(0)
              ? (i = "inline")
              : (n = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
              ? ((i = $t),
                (e.videoFormat =
                  e.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])))
              : t.match(
                  /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                )
              ? (i = kt)
              : t.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf"))),
          (n = t.match(
            /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
          ))
            ? ((e.src = `https://maps.google.${n[1]}/?ll=${(n[2]
                ? n[2] +
                  "&z=" +
                  Math.floor(parseFloat(n[3])) +
                  (n[4] ? n[4].replace(/^\//, "&") : "")
                : n[4] + ""
              ).replace(/\?/, "&")}&output=${
                n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
              }`),
              (i = At))
            : (n = t.match(
                /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
              )) &&
              ((e.src = `https://maps.google.${n[1]}/maps?q=${n[2]
                .replace("query=", "q=")
                .replace("api=1", "")}&output=embed`),
              (i = At)),
          (i = i || this.instance.option("defaultType")),
          (e.type = i),
          i === kt && (e.thumbSrc = e.thumbSrc || e.src);
      }
      setContent(e) {
        const t = this.instance.optionFor(e, "src") || "";
        if (e && e.type && t) {
          switch (e.type) {
            case Lt:
              this.instance.setContent(e, t);
              break;
            case $t:
              const i = this.option("videoTpl");
              i &&
                this.instance.setContent(
                  e,
                  i
                    .replace(/\{\{src\}\}/gi, t + "")
                    .replace(
                      /\{\{format\}\}/gi,
                      this.optionFor(e, "videoFormat") || ""
                    )
                    .replace(/\{\{poster\}\}/gi, e.poster || e.thumbSrc || "")
                );
              break;
            case "inline":
            case "clone":
              this.setInlineContent(e);
              break;
            case "ajax":
              this.loadAjaxContent(e);
              break;
            case "pdf":
            case At:
            case It:
            case zt:
              e.preload = !1;
            case "iframe":
              this.setIframeContent(e);
          }
          this.setAspectRatio(e);
        }
      }
      setAspectRatio(e) {
        const t = e.contentEl;
        if (!(e.el && t && e.type && [It, zt, $t].includes(e.type))) return;
        let i,
          n = e.width || "auto",
          s = e.height || "auto";
        if ("auto" === n || "auto" === s) {
          i = this.optionFor(e, "videoRatio");
          const t = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
          i =
            t && t.length > 2
              ? parseFloat(t[1]) / parseFloat(t[2])
              : parseFloat(i + "");
        } else n && s && (i = n / s);
        if (!i) return;
        (t.style.aspectRatio = ""),
          (t.style.width = ""),
          (t.style.height = ""),
          t.offsetHeight;
        const o = t.getBoundingClientRect(),
          a = o.width || 1,
          r = o.height || 1;
        (t.style.aspectRatio = i + ""),
          i < a / r
            ? ((s = "auto" === s ? r : Math.min(r, s)),
              (t.style.width = "auto"),
              (t.style.height = `${s}px`))
            : ((n = "auto" === n ? a : Math.min(a, n)),
              (t.style.width = `${n}px`),
              (t.style.height = "auto"));
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.beforeInitSlide", e.onBeforeInitSlide),
          t.on("Carousel.createSlide", e.onCreateSlide),
          t.on("Carousel.selectSlide", e.onSelectSlide),
          t.on("Carousel.unselectSlide", e.onUnselectSlide),
          t.on("Carousel.Panzoom.refresh", e.onRefresh),
          t.on("done", e.onDone),
          t.on("clearContent", e.onClearContent),
          window.addEventListener("message", e.onMessage);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.beforeInitSlide", e.onBeforeInitSlide),
          t.off("Carousel.createSlide", e.onCreateSlide),
          t.off("Carousel.selectSlide", e.onSelectSlide),
          t.off("Carousel.unselectSlide", e.onUnselectSlide),
          t.off("Carousel.Panzoom.refresh", e.onRefresh),
          t.off("done", e.onDone),
          t.off("clearContent", e.onClearContent),
          window.removeEventListener("message", e.onMessage);
      }
    }
    Object.defineProperty(Rt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        ajax: null,
        autoSize: !0,
        iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" },
        preload: !0,
        videoAutoplay: !0,
        videoRatio: 16 / 9,
        videoTpl:
          '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
        videoFormat: "",
        vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 },
        youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 },
      },
    });
    const Ft = "play",
      Bt = "pause",
      jt = "ready";
    class Nt extends Ze {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jt,
          }),
          Object.defineProperty(this, "inHover", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "timer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "progressBar", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      get isActive() {
        return this.state !== jt;
      }
      onReady(e) {
        this.option("autoStart") &&
          (e.isInfinite || e.page < e.pages.length - 1) &&
          this.start();
      }
      onChange() {
        this.removeProgressBar(), this.pause();
      }
      onSettle() {
        this.resume();
      }
      onVisibilityChange() {
        "visible" === document.visibilityState ? this.resume() : this.pause();
      }
      onMouseEnter() {
        (this.inHover = !0), this.pause();
      }
      onMouseLeave() {
        var e;
        (this.inHover = !1),
          (null === (e = this.instance.panzoom) || void 0 === e
            ? void 0
            : e.isResting) && this.resume();
      }
      onTimerEnd() {
        const e = this.instance;
        "play" === this.state &&
          (e.isInfinite || e.page !== e.pages.length - 1
            ? e.slideNext()
            : e.slideTo(0));
      }
      removeProgressBar() {
        this.progressBar &&
          (this.progressBar.remove(), (this.progressBar = null));
      }
      createProgressBar() {
        var e;
        if (!this.option("showProgress")) return null;
        this.removeProgressBar();
        const t = this.instance,
          i =
            (null === (e = t.pages[t.page]) || void 0 === e
              ? void 0
              : e.slides) || [];
        let n = this.option("progressParentEl");
        if ((n || (n = (1 === i.length ? i[0].el : null) || t.viewport), !n))
          return null;
        const s = document.createElement("div");
        return (
          De(s, "f-progress"),
          n.prepend(s),
          (this.progressBar = s),
          s.offsetHeight,
          s
        );
      }
      set() {
        const e = this,
          t = e.instance;
        if (t.pages.length < 2) return;
        if (e.timer) return;
        const i = e.option("timeout");
        (e.state = Ft), De(t.container, "has-autoplay");
        let n = e.createProgressBar();
        n &&
          ((n.style.transitionDuration = `${i}ms`),
          (n.style.transform = "scaleX(1)")),
          (e.timer = setTimeout(() => {
            (e.timer = null), e.inHover || e.onTimerEnd();
          }, i)),
          e.emit("set");
      }
      clear() {
        const e = this;
        e.timer && (clearTimeout(e.timer), (e.timer = null)),
          e.removeProgressBar();
      }
      start() {
        const e = this;
        if ((e.set(), e.state !== jt)) {
          if (e.option("pauseOnHover")) {
            const t = e.instance.container;
            t.addEventListener("mouseenter", e.onMouseEnter, !1),
              t.addEventListener("mouseleave", e.onMouseLeave, !1);
          }
          document.addEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
            e.emit("start");
        }
      }
      stop() {
        const e = this,
          t = e.state,
          i = e.instance.container;
        e.clear(),
          (e.state = jt),
          i.removeEventListener("mouseenter", e.onMouseEnter, !1),
          i.removeEventListener("mouseleave", e.onMouseLeave, !1),
          document.removeEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          _e(i, "has-autoplay"),
          t !== jt && e.emit("stop");
      }
      pause() {
        const e = this;
        e.state === Ft && ((e.state = Bt), e.clear(), e.emit(Bt));
      }
      resume() {
        const e = this,
          t = e.instance;
        if (t.isInfinite || t.page !== t.pages.length - 1)
          if (e.state !== Ft) {
            if (e.state === Bt && !e.inHover) {
              const t = new Event("resume", { bubbles: !0, cancelable: !0 });
              e.emit("resume", t), t.defaultPrevented || e.set();
            }
          } else e.set();
        else e.stop();
      }
      toggle() {
        this.state === Ft || this.state === Bt ? this.stop() : this.start();
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("ready", e.onReady),
          t.on("Panzoom.startAnimation", e.onChange),
          t.on("Panzoom.endAnimation", e.onSettle),
          t.on("Panzoom.touchMove", e.onChange);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("ready", e.onReady),
          t.off("Panzoom.startAnimation", e.onChange),
          t.off("Panzoom.endAnimation", e.onSettle),
          t.off("Panzoom.touchMove", e.onChange),
          e.stop();
      }
    }
    Object.defineProperty(Nt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        autoStart: !0,
        pauseOnHover: !0,
        progressParentEl: null,
        showProgress: !0,
        timeout: 3e3,
      },
    });
    class Ht extends Ze {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onPrepare(e) {
        const t = e.carousel;
        if (!t) return;
        const i = e.container;
        i &&
          ((t.options.Autoplay = Ce(
            { autoStart: !1 },
            this.option("Autoplay") || {},
            {
              pauseOnHover: !1,
              timeout: this.option("timeout"),
              progressParentEl: () => this.option("progressParentEl") || null,
              on: {
                start: () => {
                  e.emit("startSlideshow");
                },
                set: (t) => {
                  var n;
                  i.classList.add("has-slideshow"),
                    (null === (n = e.getSlide()) || void 0 === n
                      ? void 0
                      : n.state) !== mt.Ready && t.pause();
                },
                stop: () => {
                  i.classList.remove("has-slideshow"),
                    e.isCompact || e.endIdle(),
                    e.emit("endSlideshow");
                },
                resume: (t, i) => {
                  var n, s, o;
                  !i ||
                    !i.cancelable ||
                    ((null === (n = e.getSlide()) || void 0 === n
                      ? void 0
                      : n.state) === mt.Ready &&
                      (null ===
                        (o =
                          null === (s = e.carousel) || void 0 === s
                            ? void 0
                            : s.panzoom) || void 0 === o
                        ? void 0
                        : o.isResting)) ||
                    i.preventDefault();
                },
              },
            }
          )),
          t.attachPlugins({ Autoplay: Nt }),
          (this.ref = t.plugins.Autoplay));
      }
      onReady(e) {
        const t = e.carousel,
          i = this.ref;
        i &&
          t &&
          this.option("playOnStart") &&
          (t.isInfinite || t.page < t.pages.length - 1) &&
          i.start();
      }
      onDone(e, t) {
        const i = this.ref,
          n = e.carousel;
        if (!i || !n) return;
        const s = t.panzoom;
        s &&
          s.on("startAnimation", () => {
            e.isCurrentSlide(t) && i.stop();
          }),
          e.isCurrentSlide(t) && i.resume();
      }
      onKeydown(e, t) {
        var i;
        const n = this.ref;
        n &&
          t === this.option("key") &&
          "BUTTON" !==
            (null === (i = document.activeElement) || void 0 === i
              ? void 0
              : i.nodeName) &&
          n.toggle();
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.init", e.onPrepare),
          t.on("Carousel.ready", e.onReady),
          t.on("done", e.onDone),
          t.on("keydown", e.onKeydown);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.init", e.onPrepare),
          t.off("Carousel.ready", e.onReady),
          t.off("done", e.onDone),
          t.off("keydown", e.onKeydown);
      }
    }
    Object.defineProperty(Ht, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        key: " ",
        playOnStart: !1,
        progressParentEl: (e) => {
          var t;
          return (
            (null === (t = e.instance.container) || void 0 === t
              ? void 0
              : t.querySelector(
                  ".fancybox__toolbar [data-fancybox-toggle-slideshow]"
                )) || e.instance.container
          );
        },
        timeout: 3e3,
      },
    });
    const qt = {
      classes: {
        container: "f-thumbs f-carousel__thumbs",
        viewport: "f-thumbs__viewport",
        track: "f-thumbs__track",
        slide: "f-thumbs__slide",
        isResting: "is-resting",
        isSelected: "is-selected",
        isLoading: "is-loading",
        hasThumbs: "has-thumbs",
      },
      minCount: 2,
      parentEl: null,
      thumbTpl:
        '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
      type: "modern",
    };
    var Wt;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Hidden = 2)] = "Hidden");
    })(Wt || (Wt = {}));
    const Gt = "isResting",
      Vt = "thumbWidth",
      Xt = "thumbHeight",
      Yt = "thumbClipWidth";
    let Ut = class extends Ze {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "type", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "modern",
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "thumbWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbClipWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbHeight", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbExtraGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wt.Init,
          });
      }
      get isModern() {
        return "modern" === this.type;
      }
      onInitSlide(e, t) {
        const i = t.el ? t.el.dataset : void 0;
        i &&
          ((t.thumbSrc = i.thumbSrc || t.thumbSrc || ""),
          (t[Yt] = parseFloat(i[Yt] || "") || t[Yt] || 0),
          (t[Xt] = parseFloat(i.thumbHeight || "") || t[Xt] || 0)),
          this.addSlide(t);
      }
      onInitSlides() {
        this.build();
      }
      onChange() {
        var e;
        if (!this.isModern) return;
        const t = this.container,
          i = this.instance,
          n = i.panzoom,
          s = this.carousel,
          o = s ? s.panzoom : null,
          a = i.page;
        if (n && s && o) {
          if (n.isDragging) {
            _e(t, this.cn(Gt));
            let n =
              (null === (e = s.pages[a]) || void 0 === e ? void 0 : e.pos) || 0;
            n += i.getProgress(a) * (this[Yt] + this.thumbGap);
            let r = o.getBounds();
            -1 * n > r.x.min &&
              -1 * n < r.x.max &&
              o.panTo({ x: -1 * n, friction: 0.12 });
          } else ve(t, this.cn(Gt), n.isResting);
          this.shiftModern();
        }
      }
      onRefresh() {
        this.updateProps();
        for (const e of this.instance.slides || []) this.resizeModernSlide(e);
        this.shiftModern();
      }
      isDisabled() {
        const e = this.option("minCount") || 0;
        if (e) {
          const t = this.instance;
          let i = 0;
          for (const e of t.slides || []) e.thumbSrc && i++;
          if (i < e) return !0;
        }
        const t = this.option("type");
        return ["modern", "classic"].indexOf(t) < 0;
      }
      getThumb(e) {
        const t = this.option("thumbTpl") || "";
        return {
          html: this.instance.localize(t, [
            ["%i", e.index],
            ["%d", e.index + 1],
            [
              "%s",
              e.thumbSrc ||
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            ],
          ]),
        };
      }
      addSlide(e) {
        const t = this.carousel;
        t && t.addSlide(e.index, this.getThumb(e));
      }
      getSlides() {
        const e = [];
        for (const t of this.instance.slides || []) e.push(this.getThumb(t));
        return e;
      }
      resizeModernSlide(e) {
        this.isModern &&
          (e[Vt] =
            e[Yt] && e[Xt] ? Math.round(this[Xt] * (e[Yt] / e[Xt])) : this[Vt]);
      }
      updateProps() {
        const e = this.container;
        if (!e) return;
        const t = (t) =>
          parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-" + t)) ||
          0;
        (this.thumbGap = t("gap")),
          (this.thumbExtraGap = t("extra-gap")),
          (this[Vt] = t("width") || 40),
          (this[Yt] = t("clip-width") || 40),
          (this[Xt] = t("height") || 40);
      }
      build() {
        const e = this;
        if (e.state !== Wt.Init) return;
        if (e.isDisabled()) return void e.emit("disabled");
        const t = e.instance,
          i = t.container,
          n = e.getSlides(),
          s = e.option("type");
        e.type = s;
        const o = e.option("parentEl"),
          a = e.cn("container"),
          r = e.cn("track");
        let l = null == o ? void 0 : o.querySelector("." + a);
        l ||
          ((l = document.createElement("div")),
          De(l, a),
          o ? o.appendChild(l) : i.after(l)),
          De(l, `is-${s}`),
          De(i, e.cn("hasThumbs")),
          (e.container = l),
          e.updateProps();
        let c = l.querySelector("." + r);
        c ||
          ((c = document.createElement("div")),
          De(c, e.cn("track")),
          l.appendChild(c)),
          (e.track = c);
        const d = Ce(
            {},
            {
              track: c,
              infinite: !1,
              center: !0,
              fill: "classic" === s,
              dragFree: !0,
              slidesPerPage: 1,
              transition: !1,
              preload: 0.25,
              friction: 0.12,
              Panzoom: { maxVelocity: 0 },
              Dots: !1,
              Navigation: !1,
              classes: {
                container: "f-thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide",
              },
            },
            e.option("Carousel") || {},
            { Sync: { target: t }, slides: n }
          ),
          h = new t.constructor(l, d);
        h.on("createSlide", (t, i) => {
          e.setProps(i.index), e.emit("createSlide", i, i.el);
        }),
          h.on("ready", () => {
            e.shiftModern(), e.emit("ready");
          }),
          h.on("refresh", () => {
            e.shiftModern();
          }),
          h.on("Panzoom.click", (t, i, n) => {
            e.onClick(n);
          }),
          (e.carousel = h),
          (e.state = Wt.Ready);
      }
      onClick(e) {
        e.preventDefault(), e.stopPropagation();
        const t = this.instance,
          { pages: i, page: n } = t,
          s = (e) => {
            if (e) {
              const t = e.closest("[data-carousel-index]");
              if (t)
                return [parseInt(t.dataset.carouselIndex || "", 10) || 0, t];
            }
            return [-1, void 0];
          },
          o = (e, t) => {
            const i = document.elementFromPoint(e, t);
            return i ? s(i) : [-1, void 0];
          };
        let [a, r] = s(e.target);
        if (a > -1) return;
        const l = this[Yt],
          c = e.clientX,
          d = e.clientY;
        let [h, u] = o(c - l, d),
          [p, f] = o(c + l, d);
        u && f
          ? ((a =
              Math.abs(c - u.getBoundingClientRect().right) <
              Math.abs(c - f.getBoundingClientRect().left)
                ? h
                : p),
            a === n && (a = a === h ? p : h))
          : u
          ? (a = h)
          : f && (a = p),
          a > -1 && i[a] && t.slideTo(a);
      }
      getShift(e) {
        var t;
        const i = this,
          { instance: n } = i,
          s = i.carousel;
        if (!n || !s) return 0;
        const o = i[Vt],
          a = i[Yt],
          r = i.thumbGap,
          l = i.thumbExtraGap;
        if (!(null === (t = s.slides[e]) || void 0 === t ? void 0 : t.el))
          return 0;
        const c = 0.5 * (o - a),
          d = n.pages.length - 1;
        let h = n.getProgress(0),
          u = n.getProgress(d),
          p = n.getProgress(e, !1, !0),
          f = 0,
          g = c + l + r;
        const m = h < 0 && h > -1,
          v = u > 0 && u < 1;
        return (
          0 === e
            ? ((f = g * Math.abs(h)), v && 1 === h && (f -= g * Math.abs(u)))
            : e === d
            ? ((f = g * Math.abs(u) * -1),
              m && -1 === u && (f += g * Math.abs(h)))
            : m || v
            ? ((f = -1 * g),
              (f += g * Math.abs(h)),
              (f += g * (1 - Math.abs(u))))
            : (f = g * p),
          f
        );
      }
      setProps(e) {
        var t;
        const i = this;
        if (!i.isModern) return;
        const { instance: n } = i,
          s = i.carousel;
        if (n && s) {
          const o = null === (t = s.slides[e]) || void 0 === t ? void 0 : t.el;
          if (o && o.childNodes.length) {
            let t = ue(1 - Math.abs(n.getProgress(e))),
              s = ue(i.getShift(e));
            o.style.setProperty("--progress", t ? t + "" : ""),
              o.style.setProperty("--shift", s + "");
          }
        }
      }
      shiftModern() {
        const e = this;
        if (!e.isModern) return;
        const { instance: t, track: i } = e,
          n = t.panzoom,
          s = e.carousel;
        if (!(t && i && n && s)) return;
        if (n.state === Oe.Init || n.state === Oe.Destroy) return;
        for (const i of t.slides) e.setProps(i.index);
        let o = (e[Yt] + e.thumbGap) * (s.slides.length || 0);
        i.style.setProperty("--width", o + "");
      }
      cleanup() {
        const e = this;
        e.carousel && e.carousel.destroy(),
          (e.carousel = null),
          e.container && e.container.remove(),
          (e.container = null),
          e.track && e.track.remove(),
          (e.track = null),
          (e.state = Wt.Init),
          _e(e.instance.container, e.cn("hasThumbs"));
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("initSlide", e.onInitSlide),
          t.state === Xe.Init
            ? t.on("initSlides", e.onInitSlides)
            : e.onInitSlides(),
          t.on(["change", "Panzoom.afterTransform"], e.onChange),
          t.on("Panzoom.refresh", e.onRefresh);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("initSlide", e.onInitSlide),
          t.off("initSlides", e.onInitSlides),
          t.off(["change", "Panzoom.afterTransform"], e.onChange),
          t.off("Panzoom.refresh", e.onRefresh),
          e.cleanup();
      }
    };
    Object.defineProperty(Ut, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: qt,
    });
    const Zt = Object.assign(Object.assign({}, qt), {
        key: "t",
        showOnStart: !0,
        parentEl: null,
      }),
      Kt = "is-masked",
      Jt = "aria-hidden";
    class Qt extends Ze {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "hidden", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          });
      }
      get isEnabled() {
        const e = this.ref;
        return e && !e.isDisabled();
      }
      get isHidden() {
        return this.hidden;
      }
      onClick(e, t) {
        t.stopPropagation();
      }
      onCreateSlide(e, t) {
        var i, n, s;
        const o =
            (null ===
              (s =
                null ===
                  (n =
                    null === (i = this.instance) || void 0 === i
                      ? void 0
                      : i.carousel) || void 0 === n
                  ? void 0
                  : n.slides[t.index]) || void 0 === s
              ? void 0
              : s.type) || "",
          a = t.el;
        if (a && o) {
          let e = `for-${o}`;
          ["video", "youtube", "vimeo", "html5video"].includes(o) &&
            (e += " for-video"),
            De(a, e);
        }
      }
      onInit() {
        var e;
        const t = this,
          i = t.instance,
          n = i.carousel;
        if (t.ref || !n) return;
        const s = t.option("parentEl") || i.footer || i.container;
        if (!s) return;
        const o = Ce({}, t.options, {
          parentEl: s,
          classes: { container: "f-thumbs fancybox__thumbs" },
          Carousel: { Sync: { friction: i.option("Carousel.friction") || 0 } },
          on: {
            ready: (e) => {
              const i = e.container;
              i &&
                this.hidden &&
                (t.refresh(),
                (i.style.transition = "none"),
                t.hide(),
                i.offsetHeight,
                queueMicrotask(() => {
                  (i.style.transition = ""), t.show();
                }));
            },
          },
        });
        (o.Carousel = o.Carousel || {}),
          (o.Carousel.on = Ce(
            (null === (e = t.options.Carousel) || void 0 === e
              ? void 0
              : e.on) || {},
            { click: this.onClick, createSlide: this.onCreateSlide }
          )),
          (n.options.Thumbs = o),
          n.attachPlugins({ Thumbs: Ut }),
          (t.ref = n.plugins.Thumbs),
          t.option("showOnStart") ||
            ((t.ref.state = Wt.Hidden), (t.hidden = !0));
      }
      onResize() {
        var e;
        const t =
          null === (e = this.ref) || void 0 === e ? void 0 : e.container;
        t && (t.style.maxHeight = "");
      }
      onKeydown(e, t) {
        const i = this.option("key");
        i && i === t && this.toggle();
      }
      toggle() {
        const e = this.ref;
        if (e && !e.isDisabled())
          return e.state === Wt.Hidden
            ? ((e.state = Wt.Init), void e.build())
            : void (this.hidden ? this.show() : this.hide());
      }
      show() {
        const e = this.ref;
        if (!e || e.isDisabled()) return;
        const t = e.container;
        t &&
          (this.refresh(),
          t.offsetHeight,
          t.removeAttribute(Jt),
          t.classList.remove(Kt),
          (this.hidden = !1));
      }
      hide() {
        const e = this.ref,
          t = e && e.container;
        t &&
          (this.refresh(),
          t.offsetHeight,
          t.classList.add(Kt),
          t.setAttribute(Jt, "true")),
          (this.hidden = !0);
      }
      refresh() {
        const e = this.ref;
        if (!e || !e.state) return;
        const t = e.container,
          i = (null == t ? void 0 : t.firstChild) || null;
        t &&
          i &&
          i.childNodes.length &&
          (t.style.maxHeight = `${i.getBoundingClientRect().height}px`);
      }
      attach() {
        const e = this,
          t = e.instance;
        t.state === gt.Init ? t.on("Carousel.init", e.onInit) : e.onInit(),
          t.on("resize", e.onResize),
          t.on("keydown", e.onKeydown);
      }
      detach() {
        var e;
        const t = this,
          i = t.instance;
        i.off("Carousel.init", t.onInit),
          i.off("resize", t.onResize),
          i.off("keydown", t.onKeydown),
          null === (e = i.carousel) ||
            void 0 === e ||
            e.detachPlugins(["Thumbs"]),
          (t.ref = null);
      }
    }
    Object.defineProperty(Qt, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Zt,
    });
    const ei = {
      panLeft: {
        icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
        change: { panX: -100 },
      },
      panRight: {
        icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
        change: { panX: 100 },
      },
      panUp: {
        icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
        change: { panY: -100 },
      },
      panDown: {
        icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
        change: { panY: 100 },
      },
      zoomIn: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
        action: "zoomIn",
      },
      zoomOut: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "zoomOut",
      },
      toggle1to1: {
        icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
        action: "toggleZoom",
      },
      toggleZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "toggleZoom",
      },
      iterateZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "iterateZoom",
      },
      rotateCCW: {
        icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
        action: "rotateCCW",
      },
      rotateCW: {
        icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
        action: "rotateCW",
      },
      flipX: {
        icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
        action: "flipX",
      },
      flipY: {
        icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
        action: "flipY",
      },
      fitX: {
        icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
        action: "fitX",
      },
      fitY: {
        icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
        action: "fitY",
      },
      reset: {
        icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
        action: "reset",
      },
      toggleFS: {
        icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
        action: "toggleFS",
      },
    };
    var ti;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Disabled = 2)] = "Disabled");
    })(ti || (ti = {}));
    const ii = {
        tabindex: "-1",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
      },
      ni = "has-toolbar",
      si = "fancybox__toolbar";
    class oi extends Ze {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ti.Init,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onReady(e) {
        var t;
        if (!e.carousel) return;
        let i = this.option("display"),
          n = this.option("absolute"),
          s = this.option("enabled");
        if ("auto" === s) {
          const e = this.instance.carousel;
          let t = 0;
          if (e)
            for (const i of e.slides) (i.panzoom || "image" === i.type) && t++;
          t || (s = !1);
        }
        s || (i = void 0);
        let o = 0;
        const a = { left: [], middle: [], right: [] };
        if (i)
          for (const e of ["left", "middle", "right"])
            for (const n of i[e]) {
              const i = this.createEl(n);
              i && (null === (t = a[e]) || void 0 === t || t.push(i), o++);
            }
        let r = null;
        if ((o && (r = this.createContainer()), r)) {
          for (const [e, t] of Object.entries(a)) {
            const i = document.createElement("div");
            De(i, si + "__column is-" + e);
            for (const e of t) i.appendChild(e);
            "auto" !== n || "middle" !== e || t.length || (n = !0),
              r.appendChild(i);
          }
          !0 === n && De(r, "is-absolute"),
            (this.state = ti.Ready),
            this.onRefresh();
        } else this.state = ti.Disabled;
      }
      onClick(e) {
        var t, i;
        const n = this.instance,
          s = n.getSlide(),
          o = null == s ? void 0 : s.panzoom,
          a = e.target,
          r = a && $e(a) ? a.dataset : null;
        if (!r) return;
        if (void 0 !== r.fancyboxToggleThumbs)
          return (
            e.preventDefault(),
            e.stopPropagation(),
            void (null === (t = n.plugins.Thumbs) || void 0 === t || t.toggle())
          );
        if (void 0 !== r.fancyboxToggleFullscreen)
          return (
            e.preventDefault(),
            e.stopPropagation(),
            void this.instance.toggleFullscreen()
          );
        if (void 0 !== r.fancyboxToggleSlideshow) {
          e.preventDefault(), e.stopPropagation();
          const t =
            null === (i = n.carousel) || void 0 === i
              ? void 0
              : i.plugins.Autoplay;
          let s = t.isActive;
          return (
            o && "mousemove" === o.panMode && !s && o.reset(),
            void (s ? t.stop() : t.start())
          );
        }
        const l = r.panzoomAction,
          c = r.panzoomChange;
        if (((c || l) && (e.preventDefault(), e.stopPropagation()), c)) {
          let t = {};
          try {
            t = JSON.parse(c);
          } catch (e) {}
          o && o.applyChange(t);
        } else l && o && o[l] && o[l]();
      }
      onChange() {
        this.onRefresh();
      }
      onRefresh() {
        if (this.instance.isClosing()) return;
        const e = this.container;
        if (!e) return;
        const t = this.instance.getSlide();
        if (!t || t.state !== mt.Ready) return;
        const i = t && !t.error && t.panzoom;
        for (const t of e.querySelectorAll("[data-panzoom-action]"))
          i
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        let n = i && i.canZoomIn(),
          s = i && i.canZoomOut();
        for (const t of e.querySelectorAll('[data-panzoom-action="zoomIn"]'))
          n
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        for (const t of e.querySelectorAll('[data-panzoom-action="zoomOut"]'))
          s
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        for (const t of e.querySelectorAll(
          '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
        )) {
          s || n
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
          const e = t.querySelector("g");
          e && (e.style.display = n ? "" : "none");
        }
      }
      onDone(e, t) {
        var i;
        null === (i = t.panzoom) ||
          void 0 === i ||
          i.on("afterTransform", () => {
            this.instance.isCurrentSlide(t) && this.onRefresh();
          }),
          this.instance.isCurrentSlide(t) && this.onRefresh();
      }
      createContainer() {
        const e = this.instance.container;
        if (!e) return null;
        const t = this.option("parentEl") || e;
        let i = t.querySelector("." + si);
        return (
          i || ((i = document.createElement("div")), De(i, si), t.prepend(i)),
          i.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !0,
          }),
          e && De(e, ni),
          (this.container = i),
          i
        );
      }
      createEl(e) {
        const t = this.instance,
          i = t.carousel;
        if (!i) return null;
        if ("toggleFS" === e) return null;
        if ("fullscreen" === e && !pt()) return null;
        let n = null;
        const s = i.slides.length || 0;
        let o = 0,
          a = 0;
        for (const e of i.slides)
          (e.panzoom || "image" === e.type) && o++,
            ("image" === e.type || e.downloadSrc) && a++;
        if (s < 2 && ["infobar", "prev", "next"].includes(e)) return n;
        if (void 0 !== ei[e] && !o) return null;
        if ("download" === e && !a) return null;
        if ("thumbs" === e) {
          const e = t.plugins.Thumbs;
          if (!e || !e.isEnabled) return null;
        }
        if ("slideshow" === e && (!i.plugins.Autoplay || s < 2)) return null;
        if (void 0 !== ei[e]) {
          const t = ei[e];
          (n = document.createElement("button")),
            n.setAttribute(
              "title",
              this.instance.localize(`{{${e.toUpperCase()}}}`)
            ),
            De(n, "f-button"),
            t.action && (n.dataset.panzoomAction = t.action),
            t.change && (n.dataset.panzoomChange = JSON.stringify(t.change)),
            n.appendChild(ge(this.instance.localize(t.icon)));
        } else {
          const t = (this.option("items") || [])[e];
          t &&
            ((n = ge(this.instance.localize(t.tpl))),
            "function" == typeof t.click &&
              n.addEventListener("click", (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  "function" == typeof t.click && t.click.call(this, this, e);
              }));
        }
        const r = null == n ? void 0 : n.querySelector("svg");
        if (r)
          for (const [e, t] of Object.entries(ii))
            r.getAttribute(e) || r.setAttribute(e, String(t));
        return n;
      }
      removeContainer() {
        const e = this.container;
        e && e.remove(), (this.container = null), (this.state = ti.Disabled);
        const t = this.instance.container;
        t && _e(t, ni);
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.initSlides", e.onReady),
          t.on("done", e.onDone),
          t.on(["reveal", "Carousel.change"], e.onChange),
          e.onReady(e.instance);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.initSlides", e.onReady),
          t.off("done", e.onDone),
          t.off(["reveal", "Carousel.change"], e.onChange),
          e.removeContainer();
      }
    }
    Object.defineProperty(oi, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        absolute: "auto",
        display: {
          left: ["infobar"],
          middle: [],
          right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"],
        },
        enabled: "auto",
        items: {
          infobar: {
            tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
          },
          download: {
            tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
          },
          prev: {
            tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
          },
          next: {
            tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
          },
          slideshow: {
            tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
          },
          fullscreen: {
            tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
          },
          thumbs: {
            tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
          },
          close: {
            tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
          },
        },
        parentEl: null,
      },
    });
    const ai = {
        Hash: class extends Ze {
          onReady() {
            bt = !1;
          }
          onChange(e) {
            wt && clearTimeout(wt);
            const { hash: t } = xt(),
              { hash: i } = Et(),
              n = e.isOpeningSlide(e.getSlide());
            n && (vt = i === t ? "" : i),
              t &&
                t !== i &&
                (wt = setTimeout(() => {
                  try {
                    if (e.state === gt.Ready) {
                      let e = "replaceState";
                      n && !yt && ((e = "pushState"), (yt = !0)),
                        window.history[e](
                          {},
                          document.title,
                          window.location.pathname + window.location.search + t
                        );
                    }
                  } catch (e) {}
                }, 300));
          }
          onClose(e) {
            if ((wt && clearTimeout(wt), !bt && yt))
              return (yt = !1), (bt = !1), void window.history.back();
            if (!bt)
              try {
                window.history.replaceState(
                  {},
                  document.title,
                  window.location.pathname + window.location.search + (vt || "")
                );
              } catch (e) {}
          }
          attach() {
            const e = this.instance;
            e.on("ready", this.onReady),
              e.on(["Carousel.ready", "Carousel.change"], this.onChange),
              e.on("close", this.onClose);
          }
          detach() {
            const e = this.instance;
            e.off("ready", this.onReady),
              e.off(["Carousel.ready", "Carousel.change"], this.onChange),
              e.off("close", this.onClose);
          }
          static parseURL() {
            return Et();
          }
          static startFromUrl() {
            St();
          }
          static destroy() {
            window.removeEventListener("hashchange", Tt, !1);
          }
        },
        Html: Rt,
        Images: Ot,
        Slideshow: Ht,
        Thumbs: Qt,
        Toolbar: oi,
      },
      ri = "with-fancybox",
      li = "hide-scrollbar",
      ci = "--fancybox-scrollbar-compensate",
      di = "--fancybox-body-margin",
      hi = "aria-hidden",
      ui = "is-using-tab",
      pi = "is-animated",
      fi = "is-compact",
      gi = "is-loading",
      mi = "is-opening",
      vi = "has-caption",
      bi = "disabled",
      yi = "tabindex",
      wi = "download",
      xi = "href",
      Ei = "src",
      Si = (e) => "string" == typeof e,
      Ci = function () {
        var e = window.getSelection();
        return !!e && "Range" === e.type;
      };
    let Ti,
      Pi = null,
      Mi = null,
      Oi = 0,
      Li = 0;
    const ki = new Map();
    let Ai = 0;
    class Ii extends Me {
      get isIdle() {
        return this.idle;
      }
      get isCompact() {
        return this.option("compact");
      }
      constructor(e = [], t = {}, i = {}) {
        super(t),
          Object.defineProperty(this, "userSlides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "idle", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "idleTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "ignoreFocusChange", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "startedFs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gt.Init,
          }),
          Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "footer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "lastFocus", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "prevMouseMoveEvent", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Ti || (Ti = pt()),
          (this.id = t.id || ++Ai),
          ki.set(this.id, this),
          (this.userSlides = e),
          (this.userPlugins = i),
          queueMicrotask(() => {
            this.init();
          });
      }
      init() {
        if (this.state === gt.Destroy) return;
        (this.state = gt.Init),
          this.attachPlugins(
            Object.assign(Object.assign({}, Ii.Plugins), this.userPlugins)
          ),
          this.emit("init"),
          this.emit("attachPlugins"),
          !0 === this.option("hideScrollbar") &&
            (() => {
              if (!ct) return;
              const e = document,
                t = e.body,
                i = e.documentElement;
              if (t.classList.contains(li)) return;
              let n = window.innerWidth - i.getBoundingClientRect().width;
              const s = parseFloat(window.getComputedStyle(t).marginRight);
              n < 0 && (n = 0),
                i.style.setProperty(ci, `${n}px`),
                s && t.style.setProperty(di, `${s}px`),
                t.classList.add(li);
            })(),
          this.initLayout(),
          this.scale();
        const e = () => {
          this.initCarousel(this.userSlides),
            (this.state = gt.Ready),
            this.attachEvents(),
            this.emit("ready"),
            setTimeout(() => {
              this.container && this.container.setAttribute(hi, "false");
            }, 16);
        };
        this.option("Fullscreen.autoStart") && Ti && !Ti.isFullscreen()
          ? Ti.request()
              .then(() => {
                (this.startedFs = !0), e();
              })
              .catch(() => e())
          : e();
      }
      initLayout() {
        var e, t;
        const i = this.option("parentEl") || document.body,
          n = ge(this.localize(this.option("tpl.main") || ""));
        n &&
          (n.setAttribute("id", `fancybox-${this.id}`),
          n.setAttribute("aria-label", this.localize("{{MODAL}}")),
          n.classList.toggle(fi, this.isCompact),
          De(n, this.option("mainClass") || ""),
          De(n, mi),
          (this.container = n),
          (this.footer = n.querySelector(".fancybox__footer")),
          i.appendChild(n),
          De(document.documentElement, ri),
          (Pi && Mi) ||
            ((Pi = document.createElement("span")),
            De(Pi, "fancybox-focus-guard"),
            Pi.setAttribute(yi, "0"),
            Pi.setAttribute(hi, "true"),
            Pi.setAttribute("aria-label", "Focus guard"),
            (Mi = Pi.cloneNode()),
            null === (e = n.parentElement) ||
              void 0 === e ||
              e.insertBefore(Pi, n),
            null === (t = n.parentElement) || void 0 === t || t.append(Mi)),
          n.addEventListener("mousedown", (e) => {
            (Oi = e.pageX), (Li = e.pageY), _e(n, ui);
          }),
          this.option("animated") &&
            (De(n, pi),
            setTimeout(() => {
              this.isClosing() || _e(n, pi);
            }, 350)),
          this.emit("initLayout"));
      }
      initCarousel(e) {
        const t = this.container;
        if (!t) return;
        const i = t.querySelector(".fancybox__carousel");
        if (!i) return;
        const n = (this.carousel = new rt(
          i,
          Ce(
            {},
            {
              slides: e,
              transition: "fade",
              Panzoom: {
                lockAxis: this.option("dragToClose") ? "xy" : "x",
                infinite: !!this.option("dragToClose") && "y",
              },
              Dots: !1,
              Navigation: {
                classes: {
                  container: "fancybox__nav",
                  button: "f-button",
                  isNext: "is-next",
                  isPrev: "is-prev",
                },
              },
              initialPage: this.option("startIndex"),
              l10n: this.option("l10n"),
            },
            this.option("Carousel") || {}
          )
        ));
        n.on("*", (e, t, ...i) => {
          this.emit(`Carousel.${t}`, e, ...i);
        }),
          n.on(["ready", "change"], () => {
            this.manageCaption();
          }),
          this.on("Carousel.removeSlide", (e, t, i) => {
            this.clearContent(i), (i.state = void 0);
          }),
          n.on("Panzoom.touchStart", () => {
            var e, t;
            this.isCompact || this.endIdle(),
              (null === (e = document.activeElement) || void 0 === e
                ? void 0
                : e.closest(".f-thumbs")) &&
                (null === (t = this.container) || void 0 === t || t.focus());
          }),
          n.on("settle", () => {
            this.idleTimer ||
              this.isCompact ||
              !this.option("idle") ||
              this.setIdle(),
              this.option("autoFocus") && !this.isClosing && this.checkFocus();
          }),
          this.option("dragToClose") &&
            (n.on("Panzoom.afterTransform", (e, t) => {
              const i = this.getSlide();
              if (i && pe(i.el)) return;
              const n = this.container;
              if (n) {
                const e = Math.abs(t.current.f),
                  i =
                    e < 1
                      ? ""
                      : Math.max(
                          0.5,
                          Math.min(1, 1 - (e / t.contentRect.fitHeight) * 1.5)
                        );
                n.style.setProperty("--fancybox-ts", i ? "0s" : ""),
                  n.style.setProperty("--fancybox-opacity", i + "");
              }
            }),
            n.on("Panzoom.touchEnd", (e, t, i) => {
              var n;
              const s = this.getSlide();
              if (s && pe(s.el)) return;
              if (
                t.isMobile &&
                document.activeElement &&
                -1 !==
                  ["TEXTAREA", "INPUT"].indexOf(
                    null === (n = document.activeElement) || void 0 === n
                      ? void 0
                      : n.nodeName
                  )
              )
                return;
              const o = Math.abs(t.dragOffset.y);
              "y" === t.lockedAxis &&
                (o >= 200 || (o >= 50 && t.dragOffset.time < 300)) &&
                (i && i.cancelable && i.preventDefault(),
                this.close(
                  i,
                  "f-throwOut" + (t.current.f < 0 ? "Up" : "Down")
                ));
            })),
          n.on("change", (e) => {
            var t;
            let i =
              null === (t = this.getSlide()) || void 0 === t
                ? void 0
                : t.triggerEl;
            if (i) {
              const t = new CustomEvent("slideTo", {
                bubbles: !0,
                cancelable: !0,
                detail: e.page,
              });
              i.dispatchEvent(t);
            }
          }),
          n.on(["refresh", "change"], (e) => {
            const t = this.container;
            if (!t) return;
            for (const i of t.querySelectorAll("[data-fancybox-current-index]"))
              i.innerHTML = e.page + 1;
            for (const i of t.querySelectorAll("[data-fancybox-count]"))
              i.innerHTML = e.pages.length;
            if (!e.isInfinite) {
              for (const i of t.querySelectorAll("[data-fancybox-next]"))
                e.page < e.pages.length - 1
                  ? (i.removeAttribute(bi), i.removeAttribute(yi))
                  : (i.setAttribute(bi, ""), i.setAttribute(yi, "-1"));
              for (const i of t.querySelectorAll("[data-fancybox-prev]"))
                e.page > 0
                  ? (i.removeAttribute(bi), i.removeAttribute(yi))
                  : (i.setAttribute(bi, ""), i.setAttribute(yi, "-1"));
            }
            const i = this.getSlide();
            if (!i) return;
            let n = i.downloadSrc || "";
            n || "image" !== i.type || i.error || !Si(i[Ei]) || (n = i[Ei]);
            for (const e of t.querySelectorAll("[data-fancybox-download]")) {
              const t = i.downloadFilename;
              n
                ? (e.removeAttribute(bi),
                  e.removeAttribute(yi),
                  e.setAttribute(xi, n),
                  e.setAttribute(wi, t || n),
                  e.setAttribute("target", "_blank"))
                : (e.setAttribute(bi, ""),
                  e.setAttribute(yi, "-1"),
                  e.removeAttribute(xi),
                  e.removeAttribute(wi));
            }
          }),
          this.emit("initCarousel");
      }
      attachEvents() {
        const e = this,
          t = e.container;
        if (!t) return;
        t.addEventListener("click", e.onClick, { passive: !1, capture: !1 }),
          t.addEventListener("wheel", e.onWheel, { passive: !1, capture: !1 }),
          document.addEventListener("keydown", e.onKeydown, {
            passive: !1,
            capture: !0,
          }),
          document.addEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          document.addEventListener("mousemove", e.onMousemove),
          e.option("trapFocus") &&
            document.addEventListener("focus", e.onFocus, !0),
          window.addEventListener("resize", e.onResize);
        const i = window.visualViewport;
        i &&
          (i.addEventListener("scroll", e.onResize),
          i.addEventListener("resize", e.onResize));
      }
      detachEvents() {
        const e = this,
          t = e.container;
        if (!t) return;
        document.removeEventListener("keydown", e.onKeydown, {
          passive: !1,
          capture: !0,
        }),
          t.removeEventListener("wheel", e.onWheel, {
            passive: !1,
            capture: !1,
          }),
          t.removeEventListener("click", e.onClick, {
            passive: !1,
            capture: !1,
          }),
          document.removeEventListener("mousemove", e.onMousemove),
          window.removeEventListener("resize", e.onResize);
        const i = window.visualViewport;
        i &&
          (i.removeEventListener("resize", e.onResize),
          i.removeEventListener("scroll", e.onResize)),
          document.removeEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          document.removeEventListener("focus", e.onFocus, !0);
      }
      scale() {
        const e = this.container;
        if (!e) return;
        const t = window.visualViewport,
          i = Math.max(1, (null == t ? void 0 : t.scale) || 1);
        let n = "",
          s = "",
          o = "";
        if (t && i > 1) {
          let e = `${t.offsetLeft}px`,
            a = `${t.offsetTop}px`;
          (n = t.width * i + "px"),
            (s = t.height * i + "px"),
            (o = `translate3d(${e}, ${a}, 0) scale(${1 / i})`);
        }
        (e.style.transform = o), (e.style.width = n), (e.style.height = s);
      }
      onClick(e) {
        var t;
        const { container: i, isCompact: n } = this;
        if (!i || this.isClosing()) return;
        !n && this.option("idle") && this.resetIdle();
        const s = e.composedPath()[0];
        if (
          s.closest(".fancybox-spinner") ||
          s.closest("[data-fancybox-close]")
        )
          return e.preventDefault(), void this.close(e);
        if (s.closest("[data-fancybox-prev]"))
          return e.preventDefault(), void this.prev();
        if (s.closest("[data-fancybox-next]"))
          return e.preventDefault(), void this.next();
        if ("click" === e.type && 0 === e.detail) return;
        if (Math.abs(e.pageX - Oi) > 30 || Math.abs(e.pageY - Li) > 30) return;
        const o = document.activeElement;
        if (Ci() && o && i.contains(o)) return;
        if (
          n &&
          "image" ===
            (null === (t = this.getSlide()) || void 0 === t ? void 0 : t.type)
        )
          return void (this.clickTimer
            ? (clearTimeout(this.clickTimer), (this.clickTimer = null))
            : (this.clickTimer = setTimeout(() => {
                this.toggleIdle(), (this.clickTimer = null);
              }, 350)));
        if ((this.emit("click", e), e.defaultPrevented)) return;
        let a = !1;
        if (s.closest(".fancybox__content")) {
          if (o) {
            if (o.closest("[contenteditable]")) return;
            s.matches(ht) || o.blur();
          }
          if (Ci()) return;
          a = this.option("contentClick");
        } else
          s.closest(".fancybox__carousel") &&
            !s.matches(ht) &&
            (a = this.option("backdropClick"));
        "close" === a
          ? (e.preventDefault(), this.close(e))
          : "next" === a
          ? (e.preventDefault(), this.next())
          : "prev" === a && (e.preventDefault(), this.prev());
      }
      onWheel(e) {
        const t = e.target;
        let i = this.option("wheel", e);
        t.closest(".fancybox__thumbs") && (i = "slide");
        const n = "slide" === i,
          s = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (
            e,
            t
          ) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }),
          o = Math.max(-1, Math.min(1, s)),
          a = Date.now();
        this.pwt && a - this.pwt < 300
          ? n && e.preventDefault()
          : ((this.pwt = a),
            this.emit("wheel", e, o),
            e.defaultPrevented ||
              ("close" === i
                ? (e.preventDefault(), this.close(e))
                : "slide" === i &&
                  (fe(t) ||
                    (e.preventDefault(), this[o > 0 ? "prev" : "next"]()))));
      }
      onKeydown(e) {
        if (!this.isTopmost()) return;
        this.isCompact ||
          !this.option("idle") ||
          this.isClosing() ||
          this.resetIdle();
        const t = e.key,
          i = this.option("keyboard");
        if (!i) return;
        const n = e.composedPath()[0],
          s = document.activeElement && document.activeElement.classList,
          o =
            (s && s.contains("f-button")) ||
            n.dataset.carouselPage ||
            n.dataset.carouselIndex;
        if (
          "Escape" !== t &&
          !o &&
          $e(n) &&
          (n.isContentEditable ||
            -1 !==
              ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(
                n.nodeName
              ))
        )
          return;
        if (
          ("Tab" === e.key ? De(this.container, ui) : _e(this.container, ui),
          e.ctrlKey || e.altKey || e.shiftKey)
        )
          return;
        this.emit("keydown", t, e);
        const a = i[t];
        a && "function" == typeof this[a] && (e.preventDefault(), this[a]());
      }
      onResize() {
        const e = this.container;
        if (!e) return;
        const t = this.isCompact;
        e.classList.toggle(fi, t),
          this.manageCaption(this.getSlide()),
          this.isCompact ? this.clearIdle() : this.endIdle(),
          this.scale(),
          this.emit("resize");
      }
      onFocus(e) {
        this.isTopmost() && this.checkFocus(e);
      }
      onMousemove(e) {
        (this.prevMouseMoveEvent = e),
          !this.isCompact && this.option("idle") && this.resetIdle();
      }
      onVisibilityChange() {
        "visible" === document.visibilityState
          ? this.checkFocus()
          : this.endIdle();
      }
      manageCloseBtn(e) {
        const t = this.optionFor(e, "closeButton") || !1;
        if ("auto" === t) {
          const e = this.plugins.Toolbar;
          if (e && e.state === ti.Ready) return;
        }
        if (!t) return;
        if (!e.contentEl || e.closeBtnEl) return;
        const i = this.option("tpl.closeButton");
        if (i) {
          const t = ge(this.localize(i));
          (e.closeBtnEl = e.contentEl.appendChild(t)),
            e.el && De(e.el, "has-close-btn");
        }
      }
      manageCaption(e = void 0) {
        var t, i;
        const n = "fancybox__caption",
          s = this.container;
        if (!s) return;
        _e(s, vi);
        const o = this.isCompact || this.option("commonCaption"),
          a = !o;
        if (
          (this.caption && this.stop(this.caption),
          a && this.caption && (this.caption.remove(), (this.caption = null)),
          o && !this.caption)
        )
          for (const e of (null === (t = this.carousel) || void 0 === t
            ? void 0
            : t.slides) || [])
            e.captionEl &&
              (e.captionEl.remove(),
              (e.captionEl = void 0),
              _e(e.el, vi),
              null === (i = e.el) ||
                void 0 === i ||
                i.removeAttribute("aria-labelledby"));
        if ((e || (e = this.getSlide()), !e || (o && !this.isCurrentSlide(e))))
          return;
        const r = e.el;
        let l = this.optionFor(e, "caption", "");
        if (!l)
          return void (
            o &&
            this.caption &&
            this.animate(this.caption, "f-fadeOut", () => {
              this.caption && (this.caption.innerHTML = "");
            })
          );
        let c = null;
        if (a) {
          if (((c = e.captionEl || null), r && !c)) {
            const t = n + `_${this.id}_${e.index}`;
            (c = document.createElement("div")),
              De(c, n),
              c.setAttribute("id", t),
              (e.captionEl = r.appendChild(c)),
              De(r, vi),
              r.setAttribute("aria-labelledby", t);
          }
        } else
          (c = this.caption),
            c || (c = s.querySelector("." + n)),
            c ||
              ((c = document.createElement("div")),
              (c.dataset.fancyboxCaption = ""),
              De(c, n),
              (this.footer || s).prepend(c)),
            De(s, vi),
            (this.caption = c);
        c &&
          ((c.innerHTML = ""),
          Si(l) || "number" == typeof l
            ? (c.innerHTML = l + "")
            : l instanceof HTMLElement && c.appendChild(l));
      }
      checkFocus(e) {
        this.focus(e);
      }
      focus(e) {
        var t;
        if (this.ignoreFocusChange) return;
        const i = document.activeElement || null,
          n = (null == e ? void 0 : e.target) || null,
          s = this.container,
          o =
            null === (t = this.carousel) || void 0 === t ? void 0 : t.viewport;
        if (!s || !o) return;
        if (!e && i && s.contains(i)) return;
        const a = this.getSlide(),
          r = a && a.state === mt.Ready ? a.el : null;
        if (!r || r.contains(i) || s === i) return;
        e && e.cancelable && e.preventDefault(), (this.ignoreFocusChange = !0);
        const l = Array.from(s.querySelectorAll(ht));
        let c = [],
          d = null;
        for (let e of l) {
          const t = !e.offsetParent || !!e.closest('[aria-hidden="true"]'),
            i = r && r.contains(e),
            n = !o.contains(e);
          if (e === s || ((i || n) && !t)) {
            c.push(e);
            const t = e.dataset.origTabindex;
            void 0 !== t && t && (e.tabIndex = parseFloat(t)),
              e.removeAttribute("data-orig-tabindex"),
              (!e.hasAttribute("autoFocus") && d) || (d = e);
          } else {
            const t =
              void 0 === e.dataset.origTabindex
                ? e.getAttribute("tabindex") || ""
                : e.dataset.origTabindex;
            t && (e.dataset.origTabindex = t), (e.tabIndex = -1);
          }
        }
        let h = null;
        e
          ? (!n || c.indexOf(n) < 0) &&
            ((h = d || s),
            c.length &&
              (i === Mi
                ? (h = c[0])
                : (this.lastFocus !== s && i !== Pi) || (h = c[c.length - 1])))
          : (h = a && "image" === a.type ? s : d || s),
          h && ut(h),
          (this.lastFocus = document.activeElement),
          (this.ignoreFocusChange = !1);
      }
      next() {
        const e = this.carousel;
        e && e.pages.length > 1 && e.slideNext();
      }
      prev() {
        const e = this.carousel;
        e && e.pages.length > 1 && e.slidePrev();
      }
      jumpTo(...e) {
        this.carousel && this.carousel.slideTo(...e);
      }
      isTopmost() {
        var e;
        return (
          (null === (e = Ii.getInstance()) || void 0 === e ? void 0 : e.id) ==
          this.id
        );
      }
      animate(e = null, t = "", i) {
        if (!e || !t) return void (i && i());
        this.stop(e);
        const n = (s) => {
          s.target === e &&
            e.dataset.animationName &&
            (e.removeEventListener("animationend", n),
            delete e.dataset.animationName,
            i && i(),
            _e(e, t));
        };
        (e.dataset.animationName = t),
          e.addEventListener("animationend", n),
          De(e, t);
      }
      stop(e) {
        e &&
          e.dispatchEvent(
            new CustomEvent("animationend", {
              bubbles: !1,
              cancelable: !0,
              currentTarget: e,
            })
          );
      }
      setContent(e, t = "", i = !0) {
        if (this.isClosing()) return;
        const n = e.el;
        if (!n) return;
        let s = null;
        if (
          ($e(t)
            ? (s = t)
            : ((s = ge(t + "")),
              $e(s) ||
                ((s = document.createElement("div")), (s.innerHTML = t + ""))),
          ["img", "picture", "iframe", "video", "audio"].includes(
            s.nodeName.toLowerCase()
          ))
        ) {
          const e = document.createElement("div");
          e.appendChild(s), (s = e);
        }
        $e(s) && e.filter && !e.error && (s = s.querySelector(e.filter)),
          s && $e(s)
            ? (De(s, "fancybox__content"),
              e.id && s.setAttribute("id", e.id),
              ("none" !== s.style.display &&
                "none" !== getComputedStyle(s).getPropertyValue("display")) ||
                (s.style.display =
                  e.display || this.option("defaultDisplay") || "flex"),
              n.classList.add(`has-${e.error ? "error" : e.type || "unknown"}`),
              n.prepend(s),
              (e.contentEl = s),
              i && this.revealContent(e),
              this.manageCloseBtn(e),
              this.manageCaption(e))
            : this.setError(e, "{{ELEMENT_NOT_FOUND}}");
      }
      revealContent(e, t) {
        const i = e.el,
          n = e.contentEl;
        i &&
          n &&
          (this.emit("reveal", e),
          this.hideLoading(e),
          (e.state = mt.Opening),
          (t = this.isOpeningSlide(e)
            ? void 0 === t
              ? this.optionFor(e, "showClass")
              : t
            : "f-fadeIn")
            ? this.animate(n, t, () => {
                this.done(e);
              })
            : this.done(e));
      }
      done(e) {
        this.isClosing() ||
          ((e.state = mt.Ready),
          this.emit("done", e),
          De(e.el, "is-done"),
          this.isCurrentSlide(e) &&
            this.option("autoFocus") &&
            queueMicrotask(() => {
              var t;
              null === (t = e.panzoom) || void 0 === t || t.updateControls(),
                this.option("autoFocus") && this.focus();
            }),
          this.isOpeningSlide(e) &&
            (_e(this.container, mi),
            !this.isCompact && this.option("idle") && this.setIdle()));
      }
      isCurrentSlide(e) {
        const t = this.getSlide();
        return !(!e || !t) && t.index === e.index;
      }
      isOpeningSlide(e) {
        var t, i;
        return (
          null ===
            (null === (t = this.carousel) || void 0 === t
              ? void 0
              : t.prevPage) &&
          e &&
          e.index ===
            (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index)
        );
      }
      showLoading(e) {
        e.state = mt.Loading;
        const t = e.el;
        t &&
          (De(t, gi),
          this.emit("loading", e),
          e.spinnerEl ||
            setTimeout(() => {
              if (!this.isClosing() && !e.spinnerEl && e.state === mt.Loading) {
                let i = ge(ze);
                De(i, "fancybox-spinner"),
                  (e.spinnerEl = i),
                  t.prepend(i),
                  this.animate(i, "f-fadeIn");
              }
            }, 250));
      }
      hideLoading(e) {
        const t = e.el;
        if (!t) return;
        const i = e.spinnerEl;
        this.isClosing()
          ? null == i || i.remove()
          : (_e(t, gi),
            i &&
              this.animate(i, "f-fadeOut", () => {
                i.remove();
              }),
            e.state === mt.Loading &&
              (this.emit("loaded", e), (e.state = mt.Ready)));
      }
      setError(e, t) {
        if (this.isClosing()) return;
        const i = new Event("error", { bubbles: !0, cancelable: !0 });
        if ((this.emit("error", i, e), i.defaultPrevented)) return;
        (e.error = t), this.hideLoading(e), this.clearContent(e);
        const n = document.createElement("div");
        n.classList.add("fancybox-error"),
          (n.innerHTML = this.localize(t || "<p>{{ERROR}}</p>")),
          this.setContent(e, n);
      }
      clearContent(e) {
        if (void 0 === e.state) return;
        this.emit("clearContent", e),
          e.contentEl && (e.contentEl.remove(), (e.contentEl = void 0));
        const t = e.el;
        t &&
          (_e(t, "has-error"),
          _e(t, "has-unknown"),
          _e(t, `has-${e.type || "unknown"}`)),
          e.closeBtnEl && e.closeBtnEl.remove(),
          (e.closeBtnEl = void 0),
          e.captionEl && e.captionEl.remove(),
          (e.captionEl = void 0),
          e.spinnerEl && e.spinnerEl.remove(),
          (e.spinnerEl = void 0);
      }
      getSlide() {
        var e;
        const t = this.carousel;
        return (
          (null ===
            (e = null == t ? void 0 : t.pages[null == t ? void 0 : t.page]) ||
          void 0 === e
            ? void 0
            : e.slides[0]) || void 0
        );
      }
      close(e, t) {
        if (this.isClosing()) return;
        const i = new Event("shouldClose", { bubbles: !0, cancelable: !0 });
        if ((this.emit("shouldClose", i, e), i.defaultPrevented)) return;
        e && e.cancelable && (e.preventDefault(), e.stopPropagation());
        const n = () => {
          this.proceedClose(e, t);
        };
        this.startedFs && Ti && Ti.isFullscreen()
          ? Promise.resolve(Ti.exit()).then(() => n())
          : n();
      }
      clearIdle() {
        this.idleTimer && clearTimeout(this.idleTimer), (this.idleTimer = null);
      }
      setIdle(e = !1) {
        const t = () => {
          this.clearIdle(),
            (this.idle = !0),
            De(this.container, "is-idle"),
            this.emit("setIdle");
        };
        if ((this.clearIdle(), !this.isClosing()))
          if (e) t();
          else {
            const e = this.option("idle");
            e && (this.idleTimer = setTimeout(t, e));
          }
      }
      endIdle() {
        this.clearIdle(),
          this.idle &&
            !this.isClosing() &&
            ((this.idle = !1),
            _e(this.container, "is-idle"),
            this.emit("endIdle"));
      }
      resetIdle() {
        this.endIdle(), this.setIdle();
      }
      toggleIdle() {
        this.idle ? this.endIdle() : this.setIdle(!0);
      }
      toggleFullscreen() {
        Ti &&
          (Ti.isFullscreen()
            ? Ti.exit()
            : Ti.request().then(() => {
                this.startedFs = !0;
              }));
      }
      isClosing() {
        return [gt.Closing, gt.CustomClosing, gt.Destroy].includes(this.state);
      }
      proceedClose(e, t) {
        var i, n;
        (this.state = gt.Closing), this.clearIdle(), this.detachEvents();
        const s = this.container,
          o = this.carousel,
          a = this.getSlide(),
          r =
            a && this.option("placeFocusBack")
              ? a.triggerEl || this.option("triggerEl")
              : null;
        if (
          (r && (lt(r) ? ut(r) : r.focus()),
          s &&
            (_e(s, mi),
            De(s, "is-closing"),
            s.setAttribute(hi, "true"),
            this.option("animated") && De(s, pi),
            (s.style.pointerEvents = "none")),
          o)
        ) {
          o.clearTransitions(),
            null === (i = o.panzoom) || void 0 === i || i.destroy(),
            null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
          for (const e of o.slides) {
            (e.state = mt.Closing), this.hideLoading(e);
            const t = e.contentEl;
            t && this.stop(t);
            const i = null == e ? void 0 : e.panzoom;
            i && (i.stop(), i.detachEvents(), i.detachObserver()),
              this.isCurrentSlide(e) || o.emit("removeSlide", e);
          }
        }
        this.emit("close", e),
          this.state !== gt.CustomClosing
            ? (void 0 === t && a && (t = this.optionFor(a, "hideClass")),
              t && a
                ? (this.animate(a.contentEl, t, () => {
                    o && o.emit("removeSlide", a);
                  }),
                  setTimeout(() => {
                    this.destroy();
                  }, 500))
                : this.destroy())
            : setTimeout(() => {
                this.destroy();
              }, 500);
      }
      destroy() {
        var e;
        if (this.state === gt.Destroy) return;
        (this.state = gt.Destroy),
          null === (e = this.carousel) || void 0 === e || e.destroy();
        const t = this.container;
        t && t.remove(), ki.delete(this.id);
        const i = Ii.getInstance();
        i
          ? i.focus()
          : (Pi && (Pi.remove(), (Pi = null)),
            Mi && (Mi.remove(), (Mi = null)),
            _e(document.documentElement, ri),
            (() => {
              if (!ct) return;
              const e = document,
                t = e.body;
              t.classList.remove(li),
                t.style.setProperty(di, ""),
                e.documentElement.style.setProperty(ci, "");
            })(),
            this.emit("destroy"));
      }
      static bind(e, t, i) {
        if (!ct) return;
        let n,
          s = "",
          o = {};
        if (
          (void 0 === e
            ? (n = document.body)
            : Si(e)
            ? ((n = document.body),
              (s = e),
              "object" == typeof t && (o = t || {}))
            : ((n = e),
              Si(t) && (s = t),
              "object" == typeof i && (o = i || {})),
          !n || !$e(n))
        )
          return;
        s = s || "[data-fancybox]";
        const a = Ii.openers.get(n) || new Map();
        a.set(s, o),
          Ii.openers.set(n, a),
          1 === a.size && n.addEventListener("click", Ii.fromEvent);
      }
      static unbind(e, t) {
        let i,
          n = "";
        if (
          (Si(e) ? ((i = document.body), (n = e)) : ((i = e), Si(t) && (n = t)),
          !i)
        )
          return;
        const s = Ii.openers.get(i);
        s && n && s.delete(n),
          (n && s) ||
            (Ii.openers.delete(i),
            i.removeEventListener("click", Ii.fromEvent));
      }
      static destroy() {
        let e;
        for (; (e = Ii.getInstance()); ) e.destroy();
        for (const e of Ii.openers.keys())
          e.removeEventListener("click", Ii.fromEvent);
        Ii.openers = new Map();
      }
      static fromEvent(e) {
        if (e.defaultPrevented) return;
        if (e.button && 0 !== e.button) return;
        if (e.ctrlKey || e.metaKey || e.shiftKey) return;
        let t = e.composedPath()[0];
        const i = t.closest("[data-fancybox-trigger]");
        if (i) {
          const e = i.dataset.fancyboxTrigger || "",
            n = document.querySelectorAll(`[data-fancybox="${e}"]`),
            s = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
          t = n[s] || t;
        }
        if (!(t && t instanceof Element)) return;
        let n, s, o, a;
        if (
          ([...Ii.openers].reverse().find(
            ([e, i]) =>
              !(
                !e.contains(t) ||
                ![...i].reverse().find(([i, r]) => {
                  let l = t.closest(i);
                  return !!l && ((n = e), (s = i), (o = l), (a = r), !0);
                })
              )
          ),
          !n || !s || !o)
        )
          return;
        (a = a || {}), e.preventDefault(), (t = o);
        let r = [],
          l = Ce({}, ft, a);
        (l.event = e), (l.triggerEl = t), (l.delegate = i);
        const c = l.groupAll,
          d = l.groupAttr,
          h = d && t ? t.getAttribute(`${d}`) : "";
        if (
          ((!t || h || c) && (r = [].slice.call(n.querySelectorAll(s))),
          t &&
            !c &&
            (r = h ? r.filter((e) => e.getAttribute(`${d}`) === h) : [t]),
          !r.length)
        )
          return;
        const u = Ii.getInstance();
        return u && u.options.triggerEl && r.indexOf(u.options.triggerEl) > -1
          ? void 0
          : (t && (l.startIndex = r.indexOf(t)), Ii.fromNodes(r, l));
      }
      static fromSelector(e, t, i) {
        let n = null,
          s = "",
          o = {};
        if (
          (Si(e)
            ? ((n = document.body),
              (s = e),
              "object" == typeof t && (o = t || {}))
            : e instanceof HTMLElement &&
              Si(t) &&
              ((n = e), (s = t), "object" == typeof i && (o = i || {})),
          !n || !s)
        )
          return !1;
        const a = Ii.openers.get(n);
        return (
          !!a &&
          ((o = Ce({}, a.get(s) || {}, o)),
          !!o && Ii.fromNodes(Array.from(n.querySelectorAll(s)), o))
        );
      }
      static fromNodes(e, t) {
        t = Ce({}, ft, t || {});
        const i = [];
        for (const n of e) {
          const e = n.dataset || {},
            s =
              e[Ei] ||
              n.getAttribute(xi) ||
              n.getAttribute("currentSrc") ||
              n.getAttribute(Ei) ||
              void 0;
          let o;
          const a = t.delegate;
          let r;
          a &&
            i.length === t.startIndex &&
            (o =
              a instanceof HTMLImageElement
                ? a
                : a.querySelector("img:not([aria-hidden])")),
            o ||
              (o =
                n instanceof HTMLImageElement
                  ? n
                  : n.querySelector("img:not([aria-hidden])")),
            o &&
              ((r = o.currentSrc || o[Ei] || void 0),
              !r &&
                o.dataset &&
                (r = o.dataset.lazySrc || o.dataset[Ei] || void 0));
          const l = {
            src: s,
            triggerEl: n,
            thumbEl: o,
            thumbElSrc: r,
            thumbSrc: r,
          };
          for (const t in e) {
            let i = e[t] + "";
            (i = "false" !== i && ("true" === i || i)), (l[t] = i);
          }
          i.push(l);
        }
        return new Ii(i, t);
      }
      static getInstance(e) {
        return e
          ? ki.get(e)
          : Array.from(ki.values())
              .reverse()
              .find((e) => !e.isClosing() && e) || null;
      }
      static getSlide() {
        var e;
        return (
          (null === (e = Ii.getInstance()) || void 0 === e
            ? void 0
            : e.getSlide()) || null
        );
      }
      static show(e = [], t = {}) {
        return new Ii(e, t);
      }
      static next() {
        const e = Ii.getInstance();
        e && e.next();
      }
      static prev() {
        const e = Ii.getInstance();
        e && e.prev();
      }
      static close(e = !0, ...t) {
        if (e) for (const e of ki.values()) e.close(...t);
        else {
          const e = Ii.getInstance();
          e && e.close(...t);
        }
      }
    }
    Object.defineProperty(Ii, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "5.0.32",
    }),
      Object.defineProperty(Ii, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ft,
      }),
      Object.defineProperty(Ii, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ai,
      }),
      Object.defineProperty(Ii, "openers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map(),
      }),
      document
        .querySelector(".header-burger")
        .addEventListener("click", function () {
          document.body.classList.add("menu-mobile-active");
        }),
      document
        .querySelector(".header-contact-mobile")
        .addEventListener("click", function () {
          document.body.classList.add("contact-mobile-active");
        }),
      document
        .querySelector(".button-success")
        .addEventListener("click", function (e) {
          e.preventDefault(),
            document.body.classList.remove("contact-mobile-active"),
            document.body.classList.add("modal-success-active");
        }),
      window.innerWidth < 991 &&
        (document
          .querySelector(".button-header")
          .removeAttribute("data-popup-modal"),
        document
          .querySelector(".button-header")
          .addEventListener("click", function () {
            document.body.classList.add("contact-mobile-active");
          })),
      document.querySelectorAll(".header-block__close").forEach((e) => {
        e.addEventListener("click", function () {
          document.body.classList.contains("contact-mobile-active") &&
            document
              .querySelector(".contact-mobile-active")
              .classList.remove("contact-mobile-active"),
            document.body.classList.contains("menu-mobile-active") &&
              document
                .querySelector(".menu-mobile-active")
                .classList.remove("menu-mobile-active"),
            document.body.classList.contains("modal-success-active") &&
              document
                .querySelector(".modal-success-active")
                .classList.remove("modal-success-active");
        });
      }),
      document
        .querySelector(".header-modal-success-close")
        .addEventListener("click", function (e) {
          e.preventDefault(),
            document
              .querySelector(".modal-success-active")
              .classList.remove("modal-success-active");
        }),
      Array.prototype.slice
        .call(document.querySelectorAll("[data-title]"))
        .map(function (e) {
          e.addEventListener("mouseover", () => {
            !(function (e) {
              let t = e.className.baseVal;
              Array.prototype.slice
                .call(e.closest(".model-schema").querySelectorAll(`.${t}`))
                .map((e) => {
                  e.classList.add("active");
                  let t =
                    e.getBoundingClientRect().top -
                    e.closest(".modal-pic-schema").getBoundingClientRect().top +
                    e.getBoundingClientRect().height / 2 -
                    20;
                  (e
                    .closest(".model-schema")
                    .querySelector(".schema-tooltip__text").innerText =
                    e.attributes["data-title"].value),
                    e
                      .closest(".model-schema")
                      .querySelector(".schema-tooltip")
                      .classList.add("active"),
                    (e
                      .closest(".model-schema")
                      .querySelector(".schema-tooltip").style.top = t + "px");
                });
            })(e);
          }),
            e.addEventListener("mouseout", () => {
              !(function (e) {
                e.className.baseVal,
                  Array.prototype.slice
                    .call(
                      e.closest(".model-schema").querySelectorAll(".active")
                    )
                    .map((e) => {
                      e.classList.remove("active");
                    }),
                  null != document.querySelector(".schema-tooltip.active") &&
                    document
                      .querySelector(".schema-tooltip.active")
                      .classList.remove("active");
              })(e);
            });
        }),
      document.querySelectorAll(".model-slide-switcher").forEach((e) => {
        e.addEventListener("click", function () {
          e.closest(".model-slide").classList.contains("active")
            ? e.closest(".model-slide").classList.remove("active")
            : e.closest(".model-slide").classList.add("active");
        });
      });
    const zi = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          e.isIntersecting && console.log(e.target.classList.add("active"));
        });
      },
      { threshold: 0.4 }
    );
    zi.observe(document.querySelector(".art-flex")),
      document.querySelectorAll(".concept-item").forEach((e) => zi.observe(e)),
      Ii.bind("[data-fancybox]", {}),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            t && (n(), document.documentElement.classList.toggle("menu-open"));
          });
      })();
  })();
})();
