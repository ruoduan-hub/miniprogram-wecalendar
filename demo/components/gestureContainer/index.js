(() => {
  // src/gestureContainer/index.js
  Component({
    /**
     * 组件的属性列表
     */
    options: {
      multipleSlots: true
    },
    properties: {},
    /**
     * 组件的初始数据
     */
    data: {
      minOffset: 60,
      minTime: 120,
      startX: 0,
      startY: 0,
      startTime: 0
    },
    /**
     * 组件的方法列表
     */
    methods: {
      touchStart: function(e) {
        this.setData({
          startX: e.touches[0].pageX,
          startY: e.touches[0].pageY,
          startTime: (/* @__PURE__ */ new Date()).getTime()
        });
      },
      touchCancel: function(e) {
        this.setData({
          startX: 0,
          startY: 0,
          startTime: 0
        });
      },
      touchEnd: function(e) {
        const { minOffset, minTime, startX, startY, startTime } = this.data;
        let endX = e.changedTouches[0].pageX;
        let endY = e.changedTouches[0].pageY;
        let touchTime = (/* @__PURE__ */ new Date()).getTime() - startTime;
        let direction = false;
        if (touchTime >= minTime) {
          let xOffset = endX - startX;
          let yOffset = endY - startY;
          if (Math.abs(xOffset) >= Math.abs(yOffset) && Math.abs(xOffset) >= minOffset) {
            if (xOffset < 0) {
              direction = "L";
            } else {
              direction = "R";
            }
          } else if (Math.abs(xOffset) < Math.abs(yOffset) && Math.abs(yOffset) >= minOffset) {
            if (yOffset < 0) {
              direction = "U";
            } else {
              direction = "D";
            }
          }
        } else {
          console.log("\u6ED1\u52A8\u65F6\u95F4\u8FC7\u77ED", touchTime);
        }
        this.triggerEvent("onSlide", direction);
      }
    }
  });
})();
