var app = getApp();

Component({

  /* 开启全局样式设置 */
  options: {
    addGlobalClass: true,
  },

  /* 组件的属性列表 */
  properties: {
    name: {
      type: String,
      value: 'My'
    }
  },

  /* 组件的初始数据 */
  data: {
    current: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500,
    vertical: true
  },

  /* 组件声明周期函数 */
  lifetimes: {
    attached: function () {
      // this.animation1 = wx.createAnimation()
      // this.animation2 = wx.createAnimation()
      // console.log(1)
      // this.page1()
    },
    moved: function () {
    },
    detached: function () {
    },
  },

  /* 组件的方法列表 */
  methods: {
    swipertransition(e){
      //console.log("transition")
    },
    swiperChange(e) {
      //console.log("change")
      //console.log(e.detail.current)
      this.setData({
        current: e.detail.current
      })
    },
    swiperanimationfinish(e) {
      console.log("finish")
      console.log(e.detail.current)
    }
  }

})