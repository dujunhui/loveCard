var app = getApp();
var qcloud = require('../../../vendor/wafer2-client-sdk/index')
var config = require('../../../config')
var util = require('../../../utils/util.js')
Component({

  /* 开启全局样式设置 */
  options: {
    addGlobalClass: true,
  },

  /* 组件的属性列表 */
  properties: {
    name: {
      type: String,
      value: 'Vs'
    }
  },

  /* 组件的初始数据 */
  data: {
    userInfo: {},
    praise: {},
    logged: false,   //是否登录标记
    takeSession: true,
    requestResult: '',
    xl:[],
    xlNum: 0,
    xn: [],
    xnNum: 0,
    inputValue: '',
    blessingData: []
  },

  /* 组件声明周期函数 */
  lifetimes: {
    attached: function () {
      this.init()
      this.initBlessing()
    },
    moved: function () {

    },
    detached: function () {

    },
  },

  /* 组件的方法列表 */
  methods: {
    // 获取点赞数据
    init: function () {
      var that = this;
      qcloud.request({
        url: config.service.praiseUrl,
        method: 'get',
        success(result) {
          
          var xllen = result.data.data.xlNum
          if (xllen == 0) {
            result.data.data.xl.push({ avatarUrl:'https://love.inweihai.com/images/avatar/avatar1.jpg'})
            result.data.data.xl.push({ avatarUrl: 'https://love.inweihai.com/images/avatar/avatar2.jpg' })
            result.data.data.xl.push({ avatarUrl: 'https://love.inweihai.com/images/avatar/avatar3.jpg' })
            xllen = 3
          }
          if (xllen == 1) {
            result.data.data.xl.push({ avatarUrl: 'https://love.inweihai.com/images/avatar/avatar1.jpg' })
            result.data.data.xl.push({ avatarUrl: 'https://love.inweihai.com/images/avatar/avatar2.jpg' })
            xllen = 3
          }
          if (xllen == 2) {
            result.data.data.xl.push({ avatarUrl: 'https://love.inweihai.com/images/avatar/avatar1.jpg' })
            xllen = 3
          }

          var xnlen = result.data.data.xnNum
          if (xnlen == 0) {
            result.data.data.xn.push({ avatarUrl: 'https://love.inweihai.com/images/avatar/avatar4.jpg' })
            result.data.data.xn.push({ avatarUrl: 'https://love.inweihai.com/images/avatar/avatar5.jpg' })
            result.data.data.xn.push({ avatarUrl: 'https://love.inweihai.com/images/avatar/avatar6.jpg' })
            xnlen = 3
          }
          if (xnlen == 1) {
            result.data.data.xn.push({ avatarUrl: 'https://love.inweihai.com/images/avatar/avatar4.jpg' })
            result.data.data.xn.push({ avatarUrl: 'https://love.inweihai.com/images/avatar/avatar5.jpg' })
            xnlen = 3
          }
          if (xnlen == 2) {
            result.data.data.xn.push({ avatarUrl: 'https://love.inweihai.com/images/avatar/avatar4.jpg' })
            xnlen = 3
          }
          

          that.setData({
            xl: result.data.data.xl,
            xlNum: xllen,
            xn: result.data.data.xn,
            xnNum: xnlen
          })
        }
      })
    },
    // 获取祝福数据
    initBlessing: function () {
      var that = this
      wx.request({
        url: config.service.blessingData,
        method: 'post',
        success(res) {
          that.setData({
            blessingData: res.data.data
          })
        },
        fail(err) {
          console.error('获取失败，可能是网络错误或者服务器发生异常')
        }
      });
    },

    // 用户登录(点赞)
    bindGetUserInfo: function (e) {
      var that = this

      if (this.data.logged) return

      var people = e.currentTarget.dataset.people;
      
      //送祝福
      if (people==3){
        that.insertBlessing(e.detail.userInfo)
        return
      }else{
        // 点赞
        util.showBusy('正在登录')

        const session = qcloud.Session.get()
        console.log('---------------------------------------------')
        console.log('查看本地存储是否有登录过的用户信息')
        console.log(session) //session存的是首次登陆放入的用户信息，在本地存储里
        console.log('---------------------------------------------')

        if (session) {
          // 第二次登录
          // 或者本地已经有登录态
          // 可使用本函数更新登录态
          qcloud.loginWithCode({
            success: res => {
              if (res.praise.praiseState) {
                util.showSuccess(res.praise.message)
              } else {
                util.showOther(res.praise.message)
              }
            },
            fail: err => {
              console.error(err)
              util.showModel('点赞错误', err.message)
            },
            people: people
          })
        } else {
          // 首次登录
          qcloud.login({
            success: res => {
              if (res.praise.praiseState) {
                util.showSuccess(res.praise.message)
                that.init()
              } else {
                util.showOther(res.praise.message)
              }
            },
            fail: err => {
              console.error(err)
              util.showModel('点赞错误', err.message)
            },
            people: people
          })
        }
      }      
    },


    bindKeyInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    insertBlessing: function (userInfo) {
      var that = this
      var str = this.data.inputValue
      str = str.replace(/\s+/g, ""); 
      if (str==''){
        util.showOther('不能为空')
        return
      }
      var postData = {
        userInfo: JSON.stringify(userInfo),
        message: this.data.inputValue
      }
      wx.request({
        url: config.service.blessing,
        method: 'post',
        data: postData,
        success(res) {
          if (res.data.code==-1){
            util.showOther(res.data.error)
          }else{
            util.showSuccess(res.data.data.message)
            that.setData({
              inputValue: ''
            })
            that.initBlessing()
          }
        },
        fail(err) {
          console.error('发送失败，可能是网络错误或者服务器发生异常')
        }
      });
    }
  }

})