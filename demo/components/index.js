(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "node_modules/dayjs/dayjs.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
      }(exports, function() {
        "use strict";
        var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        } }, m = function(t2, e2, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
        }, v = { s: m, z: function(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        }, m: function t2(e2, n2) {
          if (e2.date() < n2.date())
            return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        }, a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        }, p: function(t2) {
          return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t2) {
          return void 0 === t2;
        } }, g = "en", D = {};
        D[g] = M;
        var p = function(t2) {
          return t2 instanceof _;
        }, S = function t2(e2, n2, r2) {
          var i2;
          if (!e2)
            return g;
          if ("string" == typeof e2) {
            var s2 = e2.toLowerCase();
            D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
            var u2 = e2.split("-");
            if (!i2 && u2.length > 1)
              return t2(u2[0]);
          } else {
            var a2 = e2.name;
            D[a2] = e2, i2 = a2;
          }
          return !r2 && i2 && (g = i2), i2 || !r2 && g;
        }, w = function(t2, e2) {
          if (p(t2))
            return t2.clone();
          var n2 = "object" == typeof e2 ? e2 : {};
          return n2.date = t2, n2.args = arguments, new _(n2);
        }, O = v;
        O.l = S, O.i = p, O.w = function(t2, e2) {
          return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
        };
        var _ = function() {
          function M2(t2) {
            this.$L = S(t2.locale, null, true), this.parse(t2);
          }
          var m2 = M2.prototype;
          return m2.parse = function(t2) {
            this.$d = function(t3) {
              var e2 = t3.date, n2 = t3.utc;
              if (null === e2)
                return /* @__PURE__ */ new Date(NaN);
              if (O.u(e2))
                return /* @__PURE__ */ new Date();
              if (e2 instanceof Date)
                return new Date(e2);
              if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                var r2 = e2.match($);
                if (r2) {
                  var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e2);
            }(t2), this.$x = t2.x || {}, this.init();
          }, m2.init = function() {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m2.$utils = function() {
            return O;
          }, m2.isValid = function() {
            return !(this.$d.toString() === l);
          }, m2.isSame = function(t2, e2) {
            var n2 = w(t2);
            return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
          }, m2.isAfter = function(t2, e2) {
            return w(t2) < this.startOf(e2);
          }, m2.isBefore = function(t2, e2) {
            return this.endOf(e2) < w(t2);
          }, m2.$g = function(t2, e2, n2) {
            return O.u(t2) ? this[e2] : this.set(n2, t2);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t2, e2) {
            var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), l2 = function(t3, e3) {
              var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
              return r2 ? i2 : i2.endOf(a);
            }, $2 = function(t3, e3) {
              return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
            }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
            switch (h2) {
              case c:
                return r2 ? l2(1, 0) : l2(31, 11);
              case f:
                return r2 ? l2(1, M3) : l2(0, M3 + 1);
              case o:
                var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
                return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
              case a:
              case d:
                return $2(v2 + "Hours", 0);
              case u:
                return $2(v2 + "Minutes", 1);
              case s:
                return $2(v2 + "Seconds", 2);
              case i:
                return $2(v2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t2) {
            return this.startOf(t2, false);
          }, m2.$set = function(t2, e2) {
            var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
            if (o2 === f || o2 === c) {
              var y2 = this.clone().set(d, 1);
              y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
            } else
              l2 && this.$d[l2]($2);
            return this.init(), this;
          }, m2.set = function(t2, e2) {
            return this.clone().$set(t2, e2);
          }, m2.get = function(t2) {
            return this[O.p(t2)]();
          }, m2.add = function(r2, h2) {
            var d2, l2 = this;
            r2 = Number(r2);
            var $2 = O.p(h2), y2 = function(t2) {
              var e2 = w(l2);
              return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
            };
            if ($2 === f)
              return this.set(f, this.$M + r2);
            if ($2 === c)
              return this.set(c, this.$y + r2);
            if ($2 === a)
              return y2(1);
            if ($2 === o)
              return y2(7);
            var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
            return O.w(m3, this);
          }, m2.subtract = function(t2, e2) {
            return this.add(-1 * t2, e2);
          }, m2.format = function(t2) {
            var e2 = this, n2 = this.$locale();
            if (!this.isValid())
              return n2.invalidDate || l;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
              return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
            }, c2 = function(t3) {
              return O.s(s2 % 12 || 12, t3, "0");
            }, d2 = n2.meridiem || function(t3, e3, n3) {
              var r3 = t3 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            }, $2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
            return r2.replace(y, function(t3, e3) {
              return e3 || $2[t3] || i2.replace(":", "");
            });
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d2, l2) {
            var $2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, v2 = this - M3, g2 = O.m(this, M3);
            return g2 = ($2 = {}, $2[c] = g2 / 12, $2[f] = g2, $2[h] = g2 / 3, $2[o] = (v2 - m3) / 6048e5, $2[a] = (v2 - m3) / 864e5, $2[u] = v2 / n, $2[s] = v2 / e, $2[i] = v2 / t, $2)[y2] || v2, l2 ? g2 : O.a(g2);
          }, m2.daysInMonth = function() {
            return this.endOf(f).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t2, e2) {
            if (!t2)
              return this.$L;
            var n2 = this.clone(), r2 = S(t2, e2, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function() {
            return O.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        }(), T = _.prototype;
        return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
          T[t2[1]] = function(e2) {
            return this.$g(e2, t2[0], t2[1]);
          };
        }), w.extend = function(t2, e2) {
          return t2.$i || (t2(e2, _, w), t2.$i = true), w;
        }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
          return w(1e3 * t2);
        }, w.en = D[g], w.Ls = D, w.p = {}, w;
      });
    }
  });

  // src/index.js
  var import_dayjs = __toESM(require_dayjs_min());
  var weekdaysShort = [
    "\u65E5",
    "\u4E00",
    "\u4E8C",
    "\u4E09",
    "\u56DB",
    "\u4E94",
    "\u516D"
  ];
  Component({
    /**
     * 组件的属性列表
     */
    properties: {
      markCalendarList: {
        type: Array,
        value: []
      },
      isToday: {
        type: Boolean,
        value: false
      },
      defaultDate: {
        type: String,
        value: null
      }
    },
    lifetimes: {
      attached: function() {
      },
      detached: function() {
      },
      created: function() {
      },
      ready: function() {
        let animation = wx.createAnimation({
          duration: 230,
          delay: 0
        });
        this.setData({
          animation: animation.export(),
          MonthRange: this.data.defaultDate ? (0, import_dayjs.default)(this.data.defaultDate) : (0, import_dayjs.default)(),
          value: this.data.defaultDate ? (0, import_dayjs.default)(this.data.defaultDate).format("YYYY-MM-DD") : (0, import_dayjs.default)().format("YYYY-MM-DD")
        }, () => {
          this.generationCalendar();
        });
      }
    },
    /**
     * 组件的初始数据
     */
    data: {
      today: (0, import_dayjs.default)().format("YYYY-MM-DD"),
      MonthRange: (0, import_dayjs.default)(),
      MonthText: (0, import_dayjs.default)().format("YYYY\u5E74MM\u6708"),
      value: (0, import_dayjs.default)().format("YYYY-MM-DD"),
      calendar: [],
      calendarGroups: [],
      weekdaysShort,
      isFold: false,
      animation: {}
    },
    observers: {
      "MonthRange": function(MonthRange2) {
        this.setData({
          MonthText: MonthRange2.format("YYYY\u5E74MM\u6708")
        });
      },
      "value": function(value) {
        this.setData({
          MonthText: (0, import_dayjs.default)(value).format("YYYY\u5E74MM\u6708")
        });
      },
      // 'markCalendarList': function (markCalendarList){
      //   const { calendar, calendarGroups } = this.data
      //     debugger
      //     this.setData({
      //       calendar: calendar.map(item => ({
      //         ...item,
      //         pointColor: markCalendarList.find(it => item.date == it.date)?.pointColor
      //       })),
      //       calendarGroups: calendarGroups.map(item => ({
      //         ...item,
      //         pointColor: markCalendarList.find(it => item.date == it.date)?.pointColor
      //       })),
      //     })
      // },
      "calendarGroups": function(calendarGroups) {
        if (this.data.isFold) {
          const month = (0, import_dayjs.default)(calendarGroups[0].date).month();
          this.setData({
            MonthRange: this.data.MonthRange.month(month)
          });
        }
      }
    },
    /**
     * 组件的方法列表
     */
    methods: {
      generationCalendar() {
        const { MonthRange: MonthRange2 } = this.data;
        const daysInMonth = MonthRange2.daysInMonth();
        const firstDayOfMonth = MonthRange2.startOf("month").format("d");
        const endDayOfMonth = MonthRange2.endOf("month").format("d");
        const firstDay = MonthRange2.startOf("month");
        const endDay = MonthRange2.endOf("month");
        const calendar = [];
        for (let i = 0; i < Number(firstDayOfMonth); i++) {
          const date = firstDay.subtract(i + 1, "days").format("YYYY-MM-DD");
          calendar.unshift({
            date,
            isCurrent: 0
          });
        }
        for (let i = 0; i < daysInMonth; i++) {
          const date = MonthRange2.date(i + 1).format("YYYY-MM-DD");
          calendar.push({
            date,
            isCurrent: 1
          });
        }
        for (let i = 0; i < 6 - Number(endDayOfMonth); i++) {
          const date = endDay.add(i + 1, "days").format("YYYY-MM-DD");
          ;
          calendar.push({
            date,
            isCurrent: 0
          });
        }
        this.setData({
          calendar
        }, () => this.generationWeek());
      },
      generationWeek(type) {
        const { value } = this.data;
        const weeekLayer = 1;
        const len = 7 * weeekLayer;
        let groups = [];
        if (type === "next") {
          for (let i = 0; i < len; i++) {
            groups.push({
              date: (0, import_dayjs.default)(this.data.calendarGroups[0].date).add(weeekLayer, "week").startOf("week").add(i, "day").format("YYYY-MM-DD"),
              isCurrent: 1
            });
          }
        } else if (type === "prev") {
          for (let i = 0; i < len; i++) {
            groups.push({
              date: (0, import_dayjs.default)(this.data.calendarGroups[0].date).subtract(weeekLayer, "week").startOf("week").add(i, "day").format("YYYY-MM-DD"),
              isCurrent: 1
            });
          }
        } else {
          for (let i = 0; i < len; i++) {
            groups.push({
              date: value ? (0, import_dayjs.default)(value).startOf("week").add(i, "day").format("YYYY-MM-DD") : MonthRange.startOf("week").add(i, "day").format("YYYY-MM-DD"),
              isCurrent: 1
            });
          }
        }
        this.setData({
          calendarGroups: groups
        }, () => {
          this.getRangeDate();
          this.handeleMarkCalendarList();
        });
      },
      getRangeDate() {
        const { isFold, calendar, calendarGroups } = this.data;
        const beginTime = isFold ? calendarGroups[0].date : calendar[0].date;
        const endTime = isFold ? calendarGroups[calendarGroups.length - 1].date : calendar[calendar.length - 1].date;
        this.triggerEvent("onRangeDate", { beginTime, endTime });
      },
      handeleMarkCalendarList() {
        const { calendar, calendarGroups, markCalendarList } = this.data;
        this.setData({
          calendar: calendar.map((item) => ({
            ...item,
            pointColor: markCalendarList.find((it) => item.date == it.date)?.pointColor
          })),
          calendarGroups: calendarGroups.map((item) => ({
            ...item,
            pointColor: markCalendarList.find((it) => item.date == it.date)?.pointColor
          }))
        });
      },
      onCheck(e) {
        const { item } = e.target.dataset;
        const { date } = item;
        this.setData({
          value: date
        }, () => {
          this.triggerEvent("onSelect", { day: date });
        });
      },
      onFold() {
        this.setData({
          isFold: !this.data.isFold
        }, () => {
          this.generationCalendar();
        });
      },
      onNext() {
        const { MonthRange: MonthRange2, isFold } = this.data;
        if (!isFold) {
          this.setData({
            MonthRange: MonthRange2.add(1, isFold ? "week" : "month")
          }, () => {
            this.generationCalendar();
          });
        }
        this.generationWeek("next");
        this.onAnimation();
      },
      onPrev() {
        const { MonthRange: MonthRange2, isFold } = this.data;
        if (!isFold) {
          this.setData({
            MonthRange: MonthRange2.subtract(1, isFold ? "week" : "month")
          }, () => {
            this.generationCalendar();
          });
        }
        this.generationWeek("prev");
        this.onAnimation();
      },
      onSlide(e) {
        switch (e.detail) {
          case "R":
            this.onPrev();
            break;
          case "L":
            this.onNext();
            break;
          default:
            break;
        }
      },
      onAnimation() {
        let animation = wx.createAnimation({
          duration: 320,
          timingFunction: "step-start",
          delay: 0
        });
        animation.opacity(0.3).step();
        animation.opacity(1).step();
        this.setData({
          animation: animation.export()
        });
      },
      onToToday() {
        this.setData({
          value: (0, import_dayjs.default)().format("YYYY-MM-DD"),
          MonthRange: (0, import_dayjs.default)()
        }, () => {
          this.generationCalendar();
          this.triggerEvent("listByDay", { day: (0, import_dayjs.default)().format("YYYY-MM-DD") });
        });
      }
    }
  });
})();
