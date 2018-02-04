//index.js
//获取应用实例
const app = getApp()
var tabs = ['今日推荐', '时尚', '国际', '美妆', '母婴', '居家', '生活', '唯品·奢']

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabs: tabs,
    hideMoreSort: true,
    isChoose: 0
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  searchMore:function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  tapMoreSort: function () {
    let hideMoreSort = this.data.hideMoreSort
    this.setData({
      hideMoreSort: !hideMoreSort
    })
  },
  chooseSort: function (e) {
    this.setData({
      isChoose: e.target.dataset.key
    })
  }
})
