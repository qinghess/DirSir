// pages/cart/cart.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsNum:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    slideProductList: [
      {
        id:1,
        name: '猕猴桃',
        url: "http://blog.img.duanshuilu.com/ds3f3ds3fd6sf6ds3fsdfsdfsd.jpg",
        style: "芭芭农场陕西徐香猕猴桃12粒单果80g奇异果当季新鲜水果包邮",
        price: "22.9",
        select: "circle",
        num: "1",
        code: "0001",
        amount: 500
      },
      {
        id: 2,
        name: "蜜柚红心柚",
        url: "http://blog.img.duanshuilu.com/ds5sdf5d5sf5ds5f5d2fds2fds02f.jpg",
        style: "2020福建平和琯溪蜜柚红心柚新鲜当季水果柚子净重85斤",
        price: "19.9",
        select: "circle",
        code: "0002",
        num: "1",
        amount: 500
      },
      {
        id: 3,
        name: "进口椰青",
        url: "http://blog.img.duanshuilu.com/sadfsafdasdffsd9sd9fs9df9dsf9ds9f8ds8fdssd.png",
        style: "泰国进口椰青700g6个去皮青香水椰子应当季新鲜孕妇水果整箱送礼",
        price: "25.00",
        select: "circle",
        code: "0003",
        num: "1",
        amount: 110
      },
      {
        id: 4,
        code: "0001",
        name: "智利车厘子",
        url: "http://blog.img.duanshuilu.com/d23f2sd2fds2f2ds2fds2f.jpg",
        style: "盒马智利车厘子净重25kg单果JJ进口水果樱桃当季时令新鲜水果",
        price: "49.5",
        select: "circle",
        code: "0004",
        num: "1",
        amount: 200
      },
      {
        id: 5,
        code: "0001",
        name: "进口牛油果",
        url: "http://blog.img.duanshuilu.com/2sd2f2ds2f2f5erertewewrewr.jpg",
        style: "甘福园墨西哥进口牛油果10个装新鲜当季水果鳄梨整箱应季批发包邮",
        price: "12.5",
        select: "circle",
        code: "0004",
        num: "1",
        amount: 200
      },
      {
        id: 6,
        code: "0001",
        name: "猫山王榴莲",
        url: "http://blog.img.duanshuilu.com/6d6sf9wer9ew9ds66dsfdfdsf.jpg",
        style: "稻甜马来西亚猫山王榴莲新鲜进口水果冷冻保鲜D197整果顺丰包邮",
        price: "160",
        select: "circle",
        code: "0004",
        num: "1",
        amount: 200
      },
    ],
    allSelect: "circle",
    num: 0,
    count: 0,
    lastX: 0,
    lastY: 0,
    text: "没有滑动",
  },

  change: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var select = e.currentTarget.dataset.select

    if (select == "circle") {
      var stype = "success"
    } else {
      var stype = "circle"
    }
    var newList = that.data.slideProductList
    newList[index].select = stype
    that.setData({
      slideProductList: newList
    })
    that.countNum()
    that.count()
  },
  addtion: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var num = e.currentTarget.dataset.num
    //默认99件
    if (num < 99) {
      num++
    }
    var newList = that.data.slideProductList
    newList[index].num = num
    that.setData({
      goodsNum:num,
      slideProductList: newList
    })
    that.countNum()
    that.count()
  },
  inputNum:function(e){
    var num = e.detail.value;
    this.setData({
      goodsNum:num
    })
  },
  numIputBlur:function(e){
    var that = this
    var num = that.data.goodsNum
    var index = e.currentTarget.dataset.index
    var newList = that.data.slideProductList
    if (num == "") { //盘空
      newList[index].num = 1;
      that.setData({
        slideProductList: newList
      })
    }else if (num < 1) {
      that.setData({
        goodsNum: newList[index].num,
        slideProductList: newList
      })
      wx.showToast({
        title: '亲，该宝贝不能减少了哦~',
        icon: 'none'
      })
    }else if(num>99){
      
      that.setData({
        goodsNum: newList[index].num,
        slideProductList: newList
      })
      wx.showToast({
        title: '亲，该宝贝最多购买99件哦~',
        icon: 'none'
      })
    }else{
      newList[index].num = num;
      that.setData({
        slideProductList: newList
      })
    }
    that.countNum()
    that.count()
  },
  //减法
  subtraction: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var num = e.currentTarget.dataset.num
    var newList = that.data.slideProductList
    
    if (num == 1) {//当数量为1件时，再次点击移除该商品
      newList.splice(index, 1)
    } else {
      num--
      newList[index].num = num
    }
    that.setData({
      goodsNum: num,
      slideProductList: newList
    })
    that.countNum()
    that.count()
  },
  //全选
  allSelect: function (e) {
    var that = this
    var allSelect = e.currentTarget.dataset.select //先判断是否选中
    var newList = that.data.slideProductList
    console.log(newList)
    if (allSelect == "circle") {
      for (var i = 0; i < newList.length; i++) {
        newList[i].select = "success"
      }
      var select = "success"
    } else {
      for (var i = 0; i < newList.length; i++) {
        newList[i].select = "circle"
      }
      var select = "circle"
    }
    that.setData({
      slideProductList: newList,
      allSelect: select
    })
    that.countNum()
    that.count()
  },
 
  countNum: function () { //计算数量
    var that = this
    var newList = that.data.slideProductList
    var allNum = 0
    for (var i = 0; i < newList.length; i++) {
      if (newList[i].select == "success") {
        allNum += parseInt(newList[i].num)
      }
    }
    parseInt
    that.setData({
      num: allNum
    })
  },
  
  count: function () {//计算金额方法
    var that = this
    var newList = that.data.slideProductList
    var newCount = 0
    for (var i = 0; i < newList.length; i++) {
      if (newList[i].select == "success") {
        newCount += newList[i].num * newList[i].price
      }
    }
    that.setData({
      count: newCount
    })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var width=wx.getSystemInfoSync().windowWidth
    var height=wx.getSystemInfoSync().windowHeight
    height=height-55-53;
    this.setData({
      height:height
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
