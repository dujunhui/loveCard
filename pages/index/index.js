let app = getApp()
const bgMusic = wx.getBackgroundAudioManager()  //创建背景音乐

Page({
  data: {
    animation: null,
    currentTab: 0,
    items: [
      {
        "iconPath": "/img/index1.png",
        "selectedIconPath": "/img/index2.png"
      },
      {
        "iconPath": "/img/photo1.png",
        "selectedIconPath": "/img/photo2.png"
      },
      {
        "iconPath": "/img/calendar1.png",
        "selectedIconPath": "/img/calendar2.png"
      },
      {
        "iconPath": "/img/praise1.png",
        "selectedIconPath": "/img/praise2.png"
      }
    ],
    music: {      
      title: "Knee Deep In My Heart",
      epname: "You And Me (Deluxe Edition)",
      singer: "Shane Filan",
      coverImgUrl: "https://y.gtimg.cn/music/photo_new/T002R300x300M000000RDBhD25A0RJ.jpg?max_age=2592000",
      src: "http://ws.stream.qqmusic.qq.com/C400000ilWGc0pjcGt.m4a?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46"
    },
    musicState: false //true：播放中  false：暂停
  },
  onLoad: function (option) {
    this.listenerButtonPlay(this.data.music)
  },
  onReady: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
      transformOrigin: '50% 50% 0',
      delay: 0
    })
    this.animation = animation;
    this.n = 0
    this.musicTap()
  },
  onShow() {
    if (typeof (this.n) != "undefined") {
      this.musicTap()
    }
  },
  onHide: function () {
    console.log('hide')
    if(this.data.musicState){
      this.musicTap()
    }
  },
  onUnload() {
    this.listenerButtonStop()//页面卸载时停止播放
  },
  // 开始播放
  listenerButtonPlay: function (music) {
    bgMusic.title = music.title
    bgMusic.epname = music.epname
    bgMusic.singer = music.singer
    bgMusic.coverImgUrl = music.coverImgUrl
    bgMusic.src = music.src

    bgMusic.onTimeUpdate(() => {  //监听音频播放进度
      //console.log(bgMusic.currentTime)
    })
    bgMusic.onEnded(() => {  //监听音乐自然播放结束
      console.log("音乐播放结束");
      this.listenerButtonPlay(this.data.music)
    })
    bgMusic.play(); //播放音乐
  },
  musicTap: function () {
    if (this.data.musicState) {
      this.setData({
        musicState: false
      })
      this.audioPause()
    } else {
      this.setData({
        musicState: true
      })
      this.audioPlay()
    }
  },
  //暂停
  audioPause: function () {
    clearInterval(this.timer)
    bgMusic.pause(); //暂停播放音乐
  },
  //播放
  audioPlay: function () {
    const that = this
    if (that.timer) {
      clearInterval(that.timer)
    }
    that.timer = setInterval(function () {
      that.n = that.n + 1
      that.animation.rotate(30 * that.n).step()
      that.setData({ animation: that.animation.export() })
    }, 1000)
    bgMusic.play(); //继续播放音乐
  },
  //停止
  listenerButtonStop: function () {
    this.n = 1
    clearInterval(this.timer)
    this.animate.rotateY(0).step()
    bgMusic.stop()
  },

  //tabBar切换
  swichNav: function (e) {
    // this.selectComponent("#componentIndex").setData({
    //   ifMapShow: false
    // })
    
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      
      this.setData({
        currentTab: e.target.dataset.current
      })
      // 初始化tab2
      // if (e.target.dataset.current === 1) {
      //   var my = this.selectComponent("#componentMy")
      //   my.page1Anim();
      // }
    }
  }
})
