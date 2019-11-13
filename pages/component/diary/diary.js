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
      value: 'Diary'
    }
  },

  /* 组件的初始数据 */
  data: {
    imgArr201801s:[
      '/img/201801/1.jpg',
      '/img/201801/2.jpg',
      '/img/201801/3.jpg',
      '/img/201801/4.jpg'
    ],
    imgArr201801: [
      'https://love.inweihai.com/images/diary/201801/1.jpg',
      'https://love.inweihai.com/images/diary/201801/2.jpg',
      'https://love.inweihai.com/images/diary/201801/3.jpg',
      'https://love.inweihai.com/images/diary/201801/4.jpg'
    ],
    imgArr201804s: [
      '/img/201804/1.jpg',
      '/img/201804/2.jpg',
      '/img/201804/3.jpg'
    ],
    imgArr201804: [
      'https://love.inweihai.com/images/diary/201804/1.jpg',
      'https://love.inweihai.com/images/diary/201804/2.jpg',
      'https://love.inweihai.com/images/diary/201804/3.jpg'
    ],
    imgArr201810s: [
      '/img/201810/1.jpg',
      '/img/201810/2.jpg',
      '/img/201810/3.jpg',
      '/img/201810/4.jpg',
    ],
    imgArr201810: [
      'https://love.inweihai.com/images/diary/201810/1.jpg',
      'https://love.inweihai.com/images/diary/201810/2.jpg',
      'https://love.inweihai.com/images/diary/201810/3.jpg',
      'https://love.inweihai.com/images/diary/201810/4.jpg'
    ],
    imgArr20181011s: [
      '/img/20181012/1.jpg',
      '/img/20181012/2.jpg'
    ],
    imgArr20181011: [
      'https://love.inweihai.com/images/diary/20181011/1.jpg',
      'https://love.inweihai.com/images/diary/20181011/2.jpg'
    ],
    imgArr201905s: [
      '/img/201905/1.jpg',
      '/img/201905/2.jpg',
      '/img/201905/3.jpg'
    ],
    imgArr201905: [
      'https://love.inweihai.com/images/diary/201905/1.jpg',
      'https://love.inweihai.com/images/diary/201905/2.jpg',
      'https://love.inweihai.com/images/diary/201905/3.jpg'
    ]
  },

  /* 组件声明周期函数 */
  lifetimes: {
    attached: function () {

    },
    moved: function () {

    },
    detached: function () {

    },
  },

  /* 组件的方法列表 */
  methods: {
    showPreview: function (event){
      var that = this;
      console.log(event)
      wx.previewImage({
        current: event.currentTarget.dataset.src, // 当前显示图片的http链接
        urls: that.data.imgArr201801 // 需要预览的图片http链接列表
      })
    },
    showPreview2: function (event) {
      var that = this;
      console.log(event)
      wx.previewImage({
        current: event.currentTarget.dataset.src, // 当前显示图片的http链接
        urls: that.data.imgArr201804 // 需要预览的图片http链接列表
      })
    },
    showPreview3: function (event) {
      var that = this;
      console.log(event)
      wx.previewImage({
        current: event.currentTarget.dataset.src, // 当前显示图片的http链接
        urls: that.data.imgArr201810 // 需要预览的图片http链接列表
      })
    },
    showPreview4: function (event) {
      var that = this;
      console.log(event)
      wx.previewImage({
        current: event.currentTarget.dataset.src, // 当前显示图片的http链接
        urls: that.data.imgArr20181011 // 需要预览的图片http链接列表
      })
    },
    showPreview5: function (event) {
      var that = this;
      console.log(event)
      wx.previewImage({
        current: event.currentTarget.dataset.src, // 当前显示图片的http链接
        urls: that.data.imgArr201905 // 需要预览的图片http链接列表
      })
    }
  }

})