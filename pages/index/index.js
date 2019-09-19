Page({
  onLoad: function () {
    wx.cloud.callFunction({
      // 云函数名称
      name: 'add',
      // 传给云函数的参数
      data: {
        a: 1,
        b: 2,
      },
      success: (res) => {
        console.log(res.sum)
      },
      fail: console.error
    })
  }
})