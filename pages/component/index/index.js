
var wxMarkerData = [];

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
      value: 'Index'
    }
  },

  /* 组件的初始数据 */
  data: {
    animationData: {},
    animationDataJd: {},
    animationDataWe: {},
    animationDataTimeBox: {},
    animationDataTime: {},
    animationDataDu: {},
    animationDataChang: {},
    animationDataYezi: {},
    
    ifMapShow: false,
    markers: [{
      id: 1,
      latitude: 37.415030,
      longitude: 122.154000,
      iconPath: '/img/ico_dh.png',
      width: 30,
      height: 30,
      name: '长长长酒店'
    }],
    latitude: 37.415030,
    longitude: 122.154000
  },

  /* 组件声明周期函数 */
  lifetimes: {
    attached: function () {
      var that = this;
      this.mapCtx = wx.createMapContext('myMap')

      //card整体
      const animationCard = wx.createAnimation({
        duration: 800,
        timingFunction: 'ease-out',
        transformOrigin: '50% 50% 0',
        delay: 0
      })
      this.animationCard = animationCard

      //card白背景
      const animation = wx.createAnimation({
        duration: 1800,
        timingFunction: 'linear',
        transformOrigin: '50% 50% 0',
        delay: 0
      })
      this.animation = animation
      animation.translateY(30).opacity(0.5).step()
      this.setData({
        animationData: animation.export()
      })
      //酒店名称
      const animationJd = wx.createAnimation({
        duration: 1000,
        timingFunction: 'linear',
        transformOrigin: '50% 50% 0',
        delay: 500
      })
      this.animationJd = animationJd
      animationJd.opacity(1).step()
      this.setData({
        animationDataJd: animationJd.export()
      })
      //底部英文
      const animationWe = wx.createAnimation({
        duration: 800,
        timingFunction: 'linear',
        transformOrigin: '50% 50% 0',
        delay: 800
      })
      this.animationWe = animationWe
      animationWe.opacity(1).step()
      this.setData({
        animationDataWe: animationWe.export()
      })
      //时间框线
      const animationTimeBox = wx.createAnimation({
        duration: 700,
        timingFunction: 'linear',
        transformOrigin: '50% 50% 0',
        delay: 800
      })
      this.animationTimeBox = animationTimeBox
      animationTimeBox.width('100%').step()
      this.setData({
        animationDataTimeBox: animationTimeBox.export()
      })

      //时间
      const animationTime = wx.createAnimation({
        duration: 700,
        timingFunction: 'linear',
        transformOrigin: '50% 50% 0',
        delay: 800
      })
      this.animationTime = animationTime
      animationTime.opacity(1).step()
      this.setData({
        animationDataTime: animationTime.export()
      })

      //新郎名
      const animationDu = wx.createAnimation({
        duration: 800,
        timingFunction: 'linear',
        transformOrigin: '50% 50% 0',
        delay: 0
      })
      this.animationDu = animationDu
      animationDu.left('190rpx').opacity(1).step()
      this.setData({
        animationDataDu: animationDu.export()
      })
      //新娘名
      const animationChang = wx.createAnimation({
        duration: 800,
        timingFunction: 'linear',
        transformOrigin: '50% 50% 0',
        delay: 0
      })
      this.animationChang = animationChang
      animationChang.right('230rpx').opacity(1).step()
      this.setData({
        animationDataChang: animationChang.export()
      })
      //叶子
      const animationYezi = wx.createAnimation({
        duration: 3500,
        timingFunction: 'linear',
        transformOrigin: '50% 50% 0',
        delay: 0
      })
      this.animationYezi = animationYezi
      animationYezi.opacity(1).step()
      this.setData({
        animationDataYezi: animationYezi.export()
      })
    },
    moved: function () {

    },
    detached: function () {

    },
  },


  /* 组件的方法列表 */
  methods: {
    // 点击地图图标
    makertap: function (e) {
      wx.openLocation({
        latitude: Number(this.data.latitude),
        longitude: Number(this.data.longitude),
        name: '长长长酒店',
        address: '山东省威海市环翠区青岛南路9号',
        scale: 19
      })
    },
    // 打开地图层
    openMap: function (){
      // var w = wx.getSystemInfoSync().windowWidth // 获取屏幕宽度
      if (this.data.ifMapShow){
        this.setData({ ifMapShow: false })
      }else{
        this.setData({ ifMapShow: true })
      }
    }
  }

})