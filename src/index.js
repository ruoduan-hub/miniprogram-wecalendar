// component/Calendar/index.js
import dayjs from 'dayjs'

const weekdaysShort = [
  '日',
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
];

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    markCalendarList: {
      type: Array,
      value: [],
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
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
    created: function () {
    },
    ready: function () {
      let animation = wx.createAnimation({
        duration: 230,
        delay: 0
      });
      this.setData({
        animation: animation.export(),
        MonthRange: this.data.defaultDate ? dayjs(this.data.defaultDate) : dayjs(),
        value: this.data.defaultDate ? dayjs(this.data.defaultDate).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'),
      }, () => {
        this.generationCalendar()
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    today: dayjs().format('YYYY-MM-DD'),
    MonthRange: dayjs(),
    MonthText: dayjs().format('YYYY年MM月'),
    value: dayjs().format('YYYY-MM-DD'),
    calendar: [],
    calendarGroups: [],
    weekdaysShort: weekdaysShort,
    isFold: false,
    animation: {},
  },
  observers: {
    'MonthRange': function (MonthRange) {
      this.setData({
        MonthText: MonthRange.format('YYYY年MM月')
      })
    },
    'value': function (value) {
      this.setData({
        MonthText: dayjs(value).format('YYYY年MM月')
      })
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
    'calendarGroups': function (calendarGroups) {
      if (this.data.isFold) {
        const month = dayjs(calendarGroups[0].date).month()
        this.setData({
          MonthRange: this.data.MonthRange.month(month)
        })
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    generationCalendar() {
      const { MonthRange } = this.data
      // 当前月份的天数
      const daysInMonth = MonthRange.daysInMonth();
      // 当前月份1日是周几
      const firstDayOfMonth = MonthRange.startOf('month').format('d');
      // 当前月份最后一天是周几
      const endDayOfMonth = MonthRange.endOf('month').format('d');

      const firstDay = MonthRange.startOf('month');
      const endDay = MonthRange.endOf('month');
      const calendar = [];

      // 处理上月
      for (let i = 0; i < Number(firstDayOfMonth); i++) {
        const date = firstDay.subtract(i + 1, 'days').format('YYYY-MM-DD');
        calendar.unshift({
          date,
          isCurrent: 0,
        });
      }

      // 处理本月
      for (let i = 0; i < daysInMonth; i++) {
        const date = MonthRange.date(i + 1).format('YYYY-MM-DD');

        calendar.push({
          date,
          isCurrent: 1,
        });
      }

      // 补齐最后一周
      for (let i = 0; i < 6 - Number(endDayOfMonth); i++) {
        const date = endDay.add(i + 1, 'days').format('YYYY-MM-DD');;
        calendar.push({
          date,
          isCurrent: 0,
        });
      }

      this.setData({
        calendar,
      }, () => this.generationWeek())
    },
    generationWeek(type) {
      const { value } = this.data
      const weeekLayer = 1
      const len = 7 * weeekLayer
      // 处理周日历
      let groups = [];
      if (type === 'next') {
        for (let i = 0; i < len; i++) {
          groups.push({
            date: dayjs(this.data.calendarGroups[0].date)
              .add(weeekLayer, 'week')
              .startOf('week')
              .add(i, 'day').format('YYYY-MM-DD'),
            isCurrent: 1,
          });
        }
      } else if (type === 'prev') {
        for (let i = 0; i < len; i++) {
          groups.push({
            date: dayjs(this.data.calendarGroups[0].date)
              .subtract(weeekLayer, 'week')
              .startOf('week')
              .add(i, 'day').format('YYYY-MM-DD'),
            isCurrent: 1,
          });
        }
      } else {
        for (let i = 0; i < len; i++) {
          groups.push({
            date: value
              ? dayjs(value).startOf('week').add(i, 'day').format('YYYY-MM-DD')
              : MonthRange.startOf('week').add(i, 'day').format('YYYY-MM-DD'),
            isCurrent: 1,
          });
        }
      }
      this.setData({
        calendarGroups: groups
      }, () => {
        this.getRangeDate()
        this.handeleMarkCalendarList()
      })
    },
    getRangeDate() {
      const { isFold, calendar, calendarGroups } = this.data
      const beginTime = isFold ? calendarGroups[0].date : calendar[0].date
      const endTime = isFold ? calendarGroups[calendarGroups.length - 1].date : calendar[calendar.length - 1].date
      this.triggerEvent('onRangeDate', { beginTime, endTime });
    },
    handeleMarkCalendarList() {
      const { calendar, calendarGroups, markCalendarList } = this.data
      this.setData({
        calendar: calendar.map(item => ({
          ...item,
          pointColor: markCalendarList.find(it => item.date == it.date)?.pointColor
        })),
        calendarGroups: calendarGroups.map(item => ({
          ...item,
          pointColor: markCalendarList.find(it => item.date == it.date)?.pointColor
        })),
      })
    },
    onCheck(e) {
      const { item } = e.target.dataset
      const { date } = item
      this.setData({
        value: date,
      }, () => {
        this.triggerEvent('onSelect', {day: date})
      })
    },
    onFold() {
      this.setData({
        isFold: !this.data.isFold
      }, () => {
        this.generationCalendar()
      })
    },
    onNext() {
      const { MonthRange, isFold } = this.data
      if (!isFold) {
        this.setData({
          MonthRange: MonthRange.add(1, isFold ? 'week' : 'month'),
        }, () => {
          this.generationCalendar()
        })
      }
      this.generationWeek('next');
      this.onAnimation()
    },
    onPrev() {
      const { MonthRange, isFold } = this.data
      if (!isFold) {
        this.setData({
          MonthRange: MonthRange.subtract(1, isFold ? 'week' : 'month'),
        }, () => {
          this.generationCalendar()
        })
      }
      this.generationWeek('prev');
      this.onAnimation()
    },
    onSlide(e) {
      switch (e.detail) {
        case 'R':
          this.onPrev()
          break;
        case 'L':
          this.onNext()
          break;
        default:
          break;
      }
    },
    onAnimation() {
      let animation = wx.createAnimation({
        duration: 320,
        timingFunction: 'step-start',
        delay: 0
      });
      animation.opacity(0.3).step()
      animation.opacity(1).step();
      this.setData({
        animation: animation.export(),
      });
    },
    onToToday () {
      this.setData({
        value: dayjs().format('YYYY-MM-DD'),
        MonthRange: dayjs()
      }, () => {
        this.generationCalendar()
        this.triggerEvent('listByDay', {day: dayjs().format('YYYY-MM-DD')})
      })
    }
  }
})
